# Quick Test Queries

Run through these in under 5 minutes to validate the system end-to-end.

## Prerequisites

```bash
npm install
cp .env.example .env
npm run dev
```

Open `http://localhost:3000`.

---

## 1. Dashboard Overview

**Action:** Click **Open Dashboard**.

**Expected:** Overview shows pipeline value, meetings booked, reply rate, active campaigns, channel performance chart, and AI tuning recommendations.

**Validation:** All numbers non-zero. Channel performance chart renders.

---

## 2. Sequences

**Action:** Navigate to **Sequences**. Click the first sequence to expand.

**Expected:** Step-level stats visible — sends, opens, replies, opt-outs per step.

**Validation:** At least 3 steps. Stats are non-negative integers.

---

## 3. Leads

**Action:** Navigate to **Leads**. Filter by "Email" channel.

**Expected:** Filtered lead list updates. Each lead shows ICP score, enrichment status, and assigned sequence.

**Validation:** Filter works without page reload. Search bar filters in real time.

---

## 4. Replies

**Action:** Navigate to **Replies**. Click a reply card.

**Expected:** AI-classified intent (Positive/Neutral/Objection/Unsubscribe/Meeting) with confidence score and suggested response.

**Validation:** Confidence score between 0–100. Suggested response is actionable.

---

## 5. Tuning Recommendations

**Action:** Navigate to **Overview**. Read the AI tuning recommendation cards.

**Expected:** Each card shows a specific optimization, projected impact, and confidence level.

**Validation:** At least 2 recommendations. Projected impact is a percentage.

---

## 6. REST API

**Action:** Run:

```bash
curl http://localhost:3000/api/outreach
```

**Expected:** JSON with `campaigns`, `sequences`, `leads`, `replies`, and `recommendations` arrays.

**Validation:** `campaigns.length >= 2`. `leads.length >= 4`.

---

## 7. npm test

**Action:** Run:

```bash
npm test
```

**Expected:** All tests pass.

**Validation:** No failures. Coverage includes snapshot generation and reply distribution.

---

## 8. Docker Build

**Action:** Run:

```bash
docker build -t mcp-outreach-engine .
```

**Expected:** Build completes successfully.

**Validation:** Image builds without errors.

---

## All Green?

If all 8 pass, the MCP Outreach Engine is running correctly. Ready to wire real sequencer integrations.
