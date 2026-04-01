async function postToDiscord(token, channelId, content) {
  const res = await fetch(`https://discord.com/api/v10/channels/${channelId}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Bot ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content: content.slice(0, 2000) }),
  });
  if (!res.ok) {
    const err = await res.text();
    console.error('Discord error:', err);
  }
  return res.ok;
}

function formatFeedbackSummary(projectName, clientName, feedback) {
  let summary = `**Design Review Complete**\n`;
  summary += `**Client:** ${clientName}\n**Project:** ${projectName}\n\n`;

  for (const item of feedback) {
    const status = item.status === 'love' ? '💚' : item.status === 'change' ? '🔶' : '❓';
    summary += `${status} **${item.roomType}** — ${item.imageName}\n`;
    if (item.notes) summary += `   Notes: ${item.notes}\n`;
    if (item.enhancedUrl) summary += `   Enhanced: Yes\n`;
    summary += '\n';
  }

  return summary;
}

async function notifyDiscord(projectName, clientName, feedback) {
  const summary = formatFeedbackSummary(projectName, clientName, feedback);

  if (process.env.DISCORD_TOKEN) {
    await postToDiscord(process.env.DISCORD_TOKEN, '1488756820892848229', summary);
  }

  if (process.env.VANESSA_DISCORD_TOKEN && process.env.VANESSA_LEAD_ALERTS_CHANNEL) {
    const alert = `🏠 New design review from **${clientName}** for **${projectName}**!\n\n${summary}`;
    await postToDiscord(
      process.env.VANESSA_DISCORD_TOKEN,
      process.env.VANESSA_LEAD_ALERTS_CHANNEL,
      alert
    );
  }
}

async function writeToCRM(projectName, clientName, feedback) {
  const supabaseKey = process.env.CRM_SUPABASE_KEY;
  if (!supabaseKey) return;

  const supabaseUrl = 'https://ejsnbluvkqocuchifdvp.supabase.co';
  const headers = {
    apikey: supabaseKey,
    Authorization: `Bearer ${supabaseKey}`,
    'Content-Type': 'application/json',
    Prefer: 'return=representation',
  };

  let contactId;
  const searchRes = await fetch(
    `${supabaseUrl}/rest/v1/contacts?name=eq.${encodeURIComponent(clientName)}&select=id`,
    { headers }
  );
  const existing = await searchRes.json();

  if (existing.length > 0) {
    contactId = existing[0].id;
  } else {
    const createRes = await fetch(`${supabaseUrl}/rest/v1/contacts`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ name: clientName, project: projectName }),
    });
    const created = await createRes.json();
    contactId = created[0]?.id;
  }

  if (contactId) {
    const summary = formatFeedbackSummary(projectName, clientName, feedback);
    await fetch(`${supabaseUrl}/rest/v1/notes`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        contact_id: contactId,
        type: 'design_review',
        content: summary,
        metadata: { feedback, projectName },
      }),
    });
  }
}

async function enhanceImage(imageUrl, prompt) {
  const webhookUrl =
    process.env.N8N_WEBHOOK ||
    'https://n8n.empowerbuilding.ai/webhook/78eb9ad8-765f-4a20-8823-96a2e49d5f73';

  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ imageUrl, prompt }),
  });

  if (!res.ok) throw new Error(`Enhance failed: ${res.status}`);
  return res.json();
}

module.exports = { notifyDiscord, writeToCRM, enhanceImage, formatFeedbackSummary };
