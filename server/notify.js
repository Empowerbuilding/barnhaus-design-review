async function postToDiscord(token, channelId, payload) {
  const res = await fetch(`https://discord.com/api/v10/channels/${channelId}/messages`, {
    method: 'POST',
    headers: { Authorization: `Bot ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) console.error('Discord error:', await res.text());
  return res.ok;
}

function ratingEmoji(status) {
  if (status === 'love') return '💚 Love it';
  if (status === 'change') return '🔶 Change it';
  if (status === 'question') return '❓ Question';
  return '⬜ No rating';
}

function ratingColor(status) {
  if (status === 'love') return 0x2ecc71;
  if (status === 'change') return 0xe67e22;
  if (status === 'question') return 0x3498db;
  return 0x555555;
}

async function notifyDiscord(projectName, clientName, feedback, chatTranscript) {
  const token = process.env.DISCORD_TOKEN;
  if (!token) return;
  const channelId = '1488756820892848229';
  const reviewDate = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  const loveCount = feedback.filter(f => f.status === 'love').length;
  const changeCount = feedback.filter(f => f.status === 'change').length;
  const questionCount = feedback.filter(f => f.status === 'question').length;
  const enhancedCount = feedback.filter(f => f.enhancedUrl).length;

  // Header summary embed
  await postToDiscord(token, channelId, {
    embeds: [{
      title: `📋 Design Review Report — ${projectName}`,
      description: `**Client:** ${clientName}\n**Date:** ${reviewDate}\n**Draft:** ${feedback[0]?.draft || 'd1'}`,
      color: 0xB8860B,
      fields: [
        { name: '💚 Love it', value: String(loveCount), inline: true },
        { name: '🔶 Change it', value: String(changeCount), inline: true },
        { name: '❓ Questions', value: String(questionCount), inline: true },
        { name: '✨ Visualized', value: `${enhancedCount} image${enhancedCount !== 1 ? 's' : ''}`, inline: true },
        { name: '📸 Total Images', value: String(feedback.length), inline: true },
      ],
      footer: { text: 'Barnhaus Steel Builders · Design Review Portal' },
      timestamp: new Date().toISOString(),
    }]
  });

  // Per-section image feedback
  const grouped = {};
  for (const item of feedback) {
    const key = item.roomType || 'Other';
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(item);
  }

  for (const [section, items] of Object.entries(grouped)) {
    await postToDiscord(token, channelId, { content: `\n**— ${section.toUpperCase()} —**` });

    const embeds = items.map(item => {
      const fields = [{ name: 'Rating', value: ratingEmoji(item.status), inline: true }];
      if (item.notes) fields.push({ name: 'Notes', value: item.notes });
      if (item.enhancedUrl) fields.push({ name: '✨ Visualized', value: `[View enhanced](${item.enhancedUrl})` });
      const embed = { title: item.imageName || item.imageId, color: ratingColor(item.status), fields };
      if (item.enhancedUrl) embed.image = { url: item.enhancedUrl };
      return embed;
    });

    for (let i = 0; i < embeds.length; i += 10) {
      await postToDiscord(token, channelId, { embeds: embeds.slice(i, i + 10) });
    }
  }

  // Chat transcript
  if (chatTranscript && chatTranscript.length > 0) {
    const lines = chatTranscript
      .filter(m => m.role !== 'system')
      .map(m => `**${m.role === 'user' ? clientName : 'Silas'}:** ${m.content}`)
      .join('\n');

    const chunks = [];
    let current = '';
    for (const line of lines.split('\n')) {
      if ((current + '\n' + line).length > 1900) { chunks.push(current); current = line; }
      else current += (current ? '\n' : '') + line;
    }
    if (current) chunks.push(current);

    await postToDiscord(token, channelId, {
      embeds: [{ title: '💬 Chat Transcript', color: 0x2c2c2c, description: chunks[0] || '_(no messages)_' }]
    });
    for (let i = 1; i < chunks.length; i++) {
      await postToDiscord(token, channelId, { content: chunks[i] });
    }
  }
}

async function writeToCRM(projectName, clientName, feedback, chatTranscript) {
  const supabaseKey = process.env.CRM_SUPABASE_KEY;
  if (!supabaseKey) return;
  const supabaseUrl = 'https://ejsnbluvkqocuchifdvp.supabase.co';
  const headers = { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}`, 'Content-Type': 'application/json', Prefer: 'return=representation' };

  const searchRes = await fetch(`${supabaseUrl}/rest/v1/contacts?name=eq.${encodeURIComponent(clientName)}&select=id`, { headers });
  const existing = await searchRes.json();
  let contactId = existing[0]?.id;

  if (!contactId) {
    const createRes = await fetch(`${supabaseUrl}/rest/v1/contacts`, { method: 'POST', headers, body: JSON.stringify({ name: clientName, project: projectName }) });
    contactId = (await createRes.json())[0]?.id;
  }

  if (contactId) {
    const summary = feedback.map(f => `${ratingEmoji(f.status)} ${f.roomType} — ${f.imageName}${f.notes ? ': ' + f.notes : ''}`).join('\n');
    await fetch(`${supabaseUrl}/rest/v1/notes`, {
      method: 'POST', headers,
      body: JSON.stringify({ contact_id: contactId, type: 'design_review', content: summary, metadata: { feedback, chatTranscript, projectName } }),
    });
  }
}

async function enhanceImage(imageUrl, prompt) {
  const webhookUrl = process.env.N8N_WEBHOOK || 'https://n8n.empowerbuilding.ai/webhook/78eb9ad8-765f-4a20-8823-96a2e49d5f73';
  const res = await fetch(webhookUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ imageUrl, prompt }) });
  if (!res.ok) throw new Error(`Enhance failed: ${res.status}`);
  return res.json();
}

async function notifyDiscordBrief(projectName, clientName, briefText) {
  const token = process.env.DISCORD_TOKEN;
  if (!token) return;
  const channelId = '1488756820892848229';

  // Split brief into Discord-safe chunks (max 1900 chars each)
  const chunks = [];
  let current = '';
  for (const line of briefText.split('\n')) {
    if ((current + '\n' + line).length > 1900) { chunks.push(current); current = line; }
    else current += (current ? '\n' : '') + line;
  }
  if (current) chunks.push(current);

  // First chunk as embed
  await postToDiscord(token, channelId, {
    embeds: [{
      title: `📐 Draft 2 Design Brief — ${projectName}`,
      description: chunks[0] || '_(no brief generated)_',
      color: 0xB8860B,
      footer: { text: `Client: ${clientName} · Generated by Silas` },
      timestamp: new Date().toISOString(),
    }]
  });

  // Overflow chunks as plain text
  for (let i = 1; i < chunks.length; i++) {
    await postToDiscord(token, channelId, { content: chunks[i] });
  }
}

module.exports = { notifyDiscord, notifyDiscordBrief, writeToCRM, enhanceImage };
