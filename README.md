# Barnhaus Design Review

Design Review Portal for Barnhaus Steel Builders clients to review home design drafts before their 30-min call with the team.

## How It Works

- Unique URL per client/draft: `/review/:projectSlug/:draft`
- Backend pulls renders from Google Drive shared drive
- Claude vision analyzes and groups images by room type
- AI walks clients through each image with targeted questions
- Clients can enhance renders with finish preferences via n8n webhook
- Feedback is tracked per image (Love it / Change it / Question)
- On completion: Discord notification, CRM update, Calendly booking link

## Tech Stack

- **Backend**: Express.js + WebSocket
- **Frontend**: React + Vite
- **AI**: Claude Sonnet (vision analysis + chat)
- **Storage**: Google Drive (shared drive)
- **Image Enhancement**: n8n webhook
- **Notifications**: Discord Bot API
- **CRM**: Supabase

## Development

```bash
npm run install:all
cp .env.example .env  # fill in values
npm run dev
```

## Environment Variables

See `.env.example` for all required variables.

## Deployment

Docker container on Coolify, port 3000.

```bash
docker build -t barnhaus-design-review .
docker run -p 3000:3000 --env-file .env barnhaus-design-review
```
