# Agentic Outreach Engine

![Next.js](https://img.shields.io/badge/Next.js_15-000000?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwindcss&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

An AI-native multi-channel outreach platform that runs Email, LinkedIn, and Cold Call sequences, scores leads against your ICP, classifies replies with AI, and auto-tunes for maximum meetings booked.

**Demo mode works without API keys.** Clone, `npm install`, `npm run dev`, and explore the full dashboard instantly.

## Why This Exists

SDRs and outbound teams waste hours on manual prospecting, generic sequences, and guesswork. This platform automates the full outreach workflow: multi-channel sequences, ICP scoring, reply classification, and weekly tuning recommendations — so your team only talks to qualified prospects who actually want to meet.

## Multi-Channel Outreach

| Channel | What It Does |
|---|---|
| **Email** | Personalized sequences with A/B testing, open tracking, and reply classification |
| **LinkedIn** | Connection requests, voice notes, article shares, and InMail sequences |
| **Cold Call** | Discovery call attempts with voicemail follow-ups and callback routing |

## Four Capabilities

### 1. Sequence Orchestration
Multi-step sequences across Email, LinkedIn, and Cold Call. Each step has open rate, reply rate, and opt-out tracking. Expand any sequence to see step-by-step performance.

### 2. ICP Scoring
Every lead scored 0-100 against your ICP. Filter by enrichment status, channel, or score threshold. Only chase leads that fit.

### 3. Reply Classification
AI reads every reply and classifies intent: Positive, Neutral, Objection, Unsubscribe, or Meeting Booked. Each reply comes with a confidence score and AI-drafted response suggestion.

### 4. Auto-Tuning
The system analyzes sequence performance weekly and recommends optimizations — add a voice note here, shorten a subject line there, move an email to day 3. Every recommendation includes projected impact and confidence level.

## Architecture

```
src/
├── app/
│   ├── api/outreach/       # REST endpoint for outreach snapshot
│   ├── dashboard/          # 4 interactive dashboard views
│   └── page.tsx            # Landing page
├── components/             # Reusable UI components
├── lib/
│   ├── agent/
│   │   └── orchestrator.ts # Outreach snapshot, tuning recommendations, channel performance
│   ├── demo/               # Rich mock data for zero-config demo mode
│   └── demo/               # Rich mock data for zero-config demo mode
```

### Pipeline Flow

```
Lead Source (Apollo, LinkedIn, CRM)
              ↓
      ICP Scoring Engine
              ↓
    Sequence Assignment
              ↓
    ┌─────────┼─────────┐
    ↓         ↓         ↓
  Email    LinkedIn   Cold Call
    ↓         ↓         ↓
Reply Classification
    ↓
AI Response Drafting
    ↓
Meeting Booking / Nurture
```

### Engineering Decisions

- **Typed demo data layer** — realistic campaigns, sequences, leads, and replies that pass the "smell test"
- **Recharts visualizations** — channel performance bar charts, reply intent pie charts
- **Framer Motion animations** — smooth page transitions and hover states
- **Zero-config demo mode** — entire dashboard works without API keys
- **GitHub Actions CI** — typecheck, test, and build on every push

## Tech Stack

- **Framework:** Next.js 15 App Router
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **Charts:** Recharts
- **Animation:** Framer Motion
- **Testing:** Jest + ts-jest
- **CI/CD:** GitHub Actions
- **Deployment:** Multi-stage Docker build

## Dashboard Views

| View | What It Shows |
|---|---|
| **Overview** | Pipeline value, meetings booked, reply rate, active campaigns/sequences, channel performance chart, AI tuning recommendations |
| **Sequences** | 4 multi-step sequences with expandable step-level stats (sends, opens, replies, opt-outs) |
| **Leads** | 12 ICP-scored leads with search, filter tabs, enrichment status, and sequence assignment |
| **Replies** | 8 AI-classified replies with intent distribution pie chart, confidence scores, and suggested responses |

## Quick Start

```bash
# Clone and install
npm install

# Zero-config demo mode — works without any API keys
cp .env.example .env
npm run dev
```

Open `http://localhost:3000` and click **Open Dashboard**.

## Demo Mode

The app ships with rich mock data so it works instantly without configuration:

- **6 campaigns** across Email, LinkedIn, and Cold Call
- **4 sequences** (3-5 steps each) with step-level performance
- **12 leads** with ICP scores, enrichment status, and sequence assignments
- **8 replies** with AI-classified intent and suggested responses
- **4 tuning recommendations** with projected impact

## Testing

```bash
npm test
```

Covers outreach snapshot generation, tuning recommendations, and reply distribution.

## Deployment

```bash
docker build -t outreach-engine .
docker run -p 3000:3000 outreach-engine
```

## License

MIT
