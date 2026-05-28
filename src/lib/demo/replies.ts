export type ReplyIntent = 'positive' | 'neutral' | 'objection' | 'unsubscribe' | 'meeting_booked';

export interface Reply {
  id: string;
  leadId: string;
  leadName: string;
  leadTitle: string;
  company: string;
  channel: 'Email' | 'LinkedIn' | 'Cold Call';
  subject: string;
  body: string;
  intent: ReplyIntent;
  confidence: number;
  suggestedResponse: string;
  receivedAt: string;
}

export const replies: Reply[] = [
  {
    id: 'rep-001',
    leadId: 'lead-001',
    leadName: 'James Wilson',
    leadTitle: 'VP Sales',
    company: 'TechCorp',
    channel: 'Email',
    subject: 'Re: Personalized intro + value prop',
    body: "This is interesting — we're actually looking at solutions in this space right now. Can you share a case study from a similar company?",
    intent: 'positive',
    confidence: 92,
    suggestedResponse: "Absolutely — I'll send over our case study with [Similar Co] who saw 34% churn reduction in 90 days. Worth a 15-min call to walk through the specifics?",
    receivedAt: '2026-05-27T14:30:00Z'
  },
  {
    id: 'rep-002',
    leadId: 'lead-002',
    leadName: 'Sarah Chen',
    leadTitle: 'Head of Revenue',
    company: 'ScaleUp Inc',
    channel: 'LinkedIn',
    subject: 'Connection accepted',
    body: "Thanks for reaching out. What's your pricing model? We're evaluating a few vendors this quarter.",
    intent: 'positive',
    confidence: 88,
    suggestedResponse: "Happy to share pricing — it's usage-based starting at $500/mo. I'll send over our pricing deck and a Calendly link. When works for a quick 15-min walkthrough?",
    receivedAt: '2026-05-27T11:15:00Z'
  },
  {
    id: 'rep-003',
    leadId: 'lead-003',
    leadName: 'Michael Torres',
    leadTitle: 'CRO',
    company: 'GrowthLabs',
    channel: 'Email',
    subject: 'Re: Case study + social proof',
    body: "Not the right time for us — we just renewed our contract with CompetitorX for another year. Maybe check back in Q4.",
    intent: 'objection',
    confidence: 85,
    suggestedResponse: "Totally understand — contract lock-in is real. I'll set a reminder for October. In the meantime, would you be open to a 10-min call to compare notes? No pitch, just curious what you're optimizing for this year.",
    receivedAt: '2026-05-26T16:45:00Z'
  },
  {
    id: 'rep-004',
    leadId: 'lead-004',
    leadName: 'Emily Park',
    leadTitle: 'Sales Director',
    company: 'DataFlow',
    channel: 'LinkedIn',
    subject: 'Re: Mutual connection intro',
    body: "Can you send more info? I'm not familiar with your product.",
    intent: 'neutral',
    confidence: 78,
    suggestedResponse: "Of course — here's our one-pager: [link]. The short version: we help sales teams reduce churn by 34% through AI-powered call analysis. Worth a 15-min demo?",
    receivedAt: '2026-05-27T09:20:00Z'
  },
  {
    id: 'rep-005',
    leadId: 'lead-005',
    leadName: 'David Kim',
    leadTitle: 'VP Revenue',
    company: 'CloudNine',
    channel: 'Email',
    subject: 'Re: Personalized intro + value prop',
    body: "Please remove me from your list. Not interested.",
    intent: 'unsubscribe',
    confidence: 97,
    suggestedResponse: "No problem — removed immediately. Sorry for the noise.",
    receivedAt: '2026-05-25T10:00:00Z'
  },
  {
    id: 'rep-006',
    leadId: 'lead-006',
    leadName: 'Lisa Thompson',
    leadTitle: 'Sales Manager',
    company: 'FastTrack',
    channel: 'Cold Call',
    subject: 'Voicemail callback',
    body: "Hey, got your voicemail. Tuesday 2pm works for a quick call. Send me a calendar invite.",
    intent: 'meeting_booked',
    confidence: 95,
    suggestedResponse: "Calendar invite sent for Tuesday 2pm EST. Looking forward to it — I'll have a personalized walkthrough ready based on FastTrack's stack.",
    receivedAt: '2026-05-27T13:00:00Z'
  },
  {
    id: 'rep-007',
    leadId: 'lead-007',
    leadName: 'Robert Martinez',
    leadTitle: 'Director of GTM',
    company: 'PivotAI',
    channel: 'LinkedIn',
    subject: 'Re: Value-driven article share',
    body: "Good read — we implemented something similar last quarter. Happy to compare notes on what worked.",
    intent: 'positive',
    confidence: 86,
    suggestedResponse: "Would love to — I'll send over a Calendly link. Curious to hear what you prioritized first. Was it the scoring model or the enrichment pipeline?",
    receivedAt: '2026-05-26T20:30:00Z'
  },
  {
    id: 'rep-008',
    leadId: 'lead-010',
    leadName: 'Jessica Lee',
    leadTitle: 'Revenue Ops',
    company: 'SyncLab',
    channel: 'LinkedIn',
    subject: 'Re: Mutual connection intro',
    body: "I'm not the right person for this — you should talk to our VP Sales. Want me to intro you?",
    intent: 'neutral',
    confidence: 82,
    suggestedResponse: "That would be amazing — thank you. Here's a short blurb you can forward: 'Met [Name] who builds AI sales tools. Thought you two should connect.' Much appreciated!",
    receivedAt: '2026-05-24T15:10:00Z'
  }
];
