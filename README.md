# MCP Outreach Engine

![MCP](https://img.shields.io/badge/MCP-Ready-8B5CF6?logo=anthropic&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js_15-000000?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwindcss&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

An MCP-native multi-channel outreach server. Expose sequence orchestration, reply classification, auto-tuning, and channel performance as typed MCP tools that any AI agent can discover and invoke — with a built-in observability dashboard.

**Demo mode works without API keys.** Clone, `npm install`, `npm run dev`, and explore the full dashboard instantly.

## Why MCP for Outreach?

Outreach stacks are fragmented: Outreach.io for email, LinkedIn for social, Salesloft for calls, Apollo for enrichment. Every SDR ends up context-switching between 4 tabs to run one sequence. The Model Context Protocol (MCP) provides a standard way to expose these as **tools** that any AI agent can discover and invoke. This project is a reference implementation — an outreach-specific MCP server with a visual trace panel so you can see every tool call the agent makes.

## Quick Start

```bash
# Clone and install
git clone https://github.com/developers-universe-1/agentic-outreach-engine.git
cd agentic-outreach-engine
npm install

# Zero-config demo mode — works without any API keys
cp .env.example .env
npm run dev
```

Open `http://localhost:3000` and click **Open Dashboard**.

That's it. No Outreach.io API keys, no Salesloft credentials, no LinkedIn automation setup.

## MCP Tools

| Tool | Input | What It Returns |
|---|---|---|
| `create_sequence` | `channel`, `steps[]`, `lead_ids[]` | Sequence ID, scheduled sends, projected open/reply rates |
| `classify_reply` | `reply_text`, `conversation_history` | Intent (Positive/Neutral/Objection/Unsubscribe/Meeting) + confidence + suggested response |
| `get_tuning_recommendations` | `campaign_id`, `lookback_days` | AI recommendations with projected impact and confidence level |
| `get_channel_performance` | `period` (7d/30d/90d) | Open rate, reply rate, meeting rate by channel (Email/LinkedIn/Cold Call) |
| `get_lead_status` | `lead_id` | Current sequence step, last touch, reply status, next scheduled action |

### Example: Claude Desktop Config

```json
{
  "mcpServers": {
    "outreach": {
      "command": "npx",
      "args": ["mcp-outreach-engine@latest", "serve"],
      "env": {
        "OPENAI_API_KEY": "your-key"
      }
    }
  }
}
```

Then ask Claude: *"Create a 5-step email sequence for our product-led growth campaign, assign the top 50 ICP-matched leads, and show me projected reply rates."*

## What You Get

| Capability | MCP Tool | What It Does |
|---|---|---|
| **Sequence Orchestration** | `create_sequence` | Multi-step sequences across Email, LinkedIn, and Cold Call with A/B testing |
| **Reply Classification** | `classify_reply` | AI reads every reply and classifies intent with confidence scores and draft responses |
| **Auto-Tuning** | `get_tuning_recommendations` | Weekly AI recommendations — add voice notes, shorten subject lines, move emails to day 3 |
| **Channel Performance** | `get_channel_performance` | Open rate, reply rate, meeting rate by channel with Recharts visualizations |
| **Lead Status** | `get_lead_status` | Current sequence step, last touch, reply status, next scheduled action |

## Demo Mode

The framework ships with rich mock data so you can validate the architecture instantly:

- **6 campaigns** across Email, LinkedIn, and Cold Call
- **4 sequences** (3-5 steps each) with step-level performance
- **12 leads** with ICP scores, enrichment status, and sequence assignments
- **8 replies** with AI-classified intent and suggested responses
- **4 tuning recommendations** with projected impact

## Architecture

```
┌─────────────────────────────────────────────┐
│  MCP Client (Claude, Cursor, any MCP host)  │
│         ↓ stdio / SSE                       │
├─────────────────────────────────────────────┤
│  Next.js 15 App Router                      │
│  ┌─────────────┐  ┌──────────────────────┐  │
│  │  MCP Server │  │  Observability UI    │  │
│  │  /api/tools │  │  Dashboard + Traces  │  │
│  │  /api/resources│  │                     │  │
│  └──────┬──────┘  └──────────────────────┘  │
│         ↓                                   │
│  ┌────────────────────────────────────────┐ │
│  │  Integration Tool Servers              │ │
│  │  ├─ email.ts       (Sequence builder)  │ │
│  │  ├─ linkedin.ts    (Connection + DM)   │ │
│  │  ├─ cold_call.ts   (Dialer + VM)       │ │
│  │  ├─ reply_classifier.ts (AI intent)    │ │
│  │  └─ tuning.ts      (Auto-optimization) │ │
│  └────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
```

## Tech Stack

- **Framework:** Next.js 15 App Router
- **Protocol:** Model Context Protocol (MCP) — stdio / SSE transport ready
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **Charts:** Recharts
- **Animation:** Framer Motion
- **Validation:** Zod (structured LLM output + MCP tool schemas)
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

## Testing

```bash
npm test
```

Covers outreach snapshot generation, tuning recommendations, and reply distribution.

## Deployment

```bash
docker build -t mcp-outreach-engine .
docker run -p 3000:3000 mcp-outreach-engine
```

## Quick Validation

See [`QUICK_TEST_QUERIES.md`](./QUICK_TEST_QUERIES.md) for end-to-end test scenarios you can run in under 5 minutes.

## Troubleshooting

See [`TROUBLESHOOTING.md`](./TROUBLESHOOTING.md) for the most common setup issues and how to fix them.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for how to add tools, run tests, and submit PRs.

## Roadmap

- [ ] Full MCP stdio transport server implementation
- [ ] MCP `tools/list`, `resources/list`, `prompts/list` capability endpoints
- [ ] Real Outreach.io / Salesloft API integration
- [ ] LinkedIn automation wiring via Unipile
- [ ] Real-time webhook reply ingestion

## License

MIT
