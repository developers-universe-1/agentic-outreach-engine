export interface SequenceStep {
  step: number;
  type: 'email' | 'linkedin' | 'call' | 'wait';
  name: string;
  sends: number;
  opens: number;
  replies: number;
  optOuts: number;
}

export interface Sequence {
  id: string;
  name: string;
  campaignId: string;
  status: 'active' | 'paused' | 'draft';
  steps: SequenceStep[];
  totalLeads: number;
  totalMeetings: number;
  avgReplyRate: number;
}

export const sequences: Sequence[] = [
  {
    id: 'seq-001',
    name: 'Enterprise 5-Touch',
    campaignId: 'cmp-001',
    status: 'active',
    totalLeads: 850,
    totalMeetings: 34,
    avgReplyRate: 6.0,
    steps: [
      { step: 1, type: 'email', name: 'Personalized intro + value prop', sends: 850, opens: 323, replies: 51, optOuts: 8 },
      { step: 2, type: 'linkedin', name: 'Connection request + soft pitch', sends: 791, opens: 435, replies: 63, optOuts: 5 },
      { step: 3, type: 'email', name: 'Case study + social proof', sends: 723, opens: 188, replies: 42, optOuts: 6 },
      { step: 4, type: 'email', name: 'Breakup email with calendar link', sends: 675, opens: 183, replies: 49, optOuts: 12 },
      { step: 5, type: 'call', name: 'Direct phone follow-up', sends: 614, opens: 0, replies: 0, optOuts: 0 }
    ]
  },
  {
    id: 'seq-002',
    name: 'C-Suite LinkedIn Only',
    campaignId: 'cmp-002',
    status: 'active',
    totalLeads: 420,
    totalMeetings: 19,
    avgReplyRate: 7.0,
    steps: [
      { step: 1, type: 'linkedin', name: 'Voice note + personalized video', sends: 420, opens: 294, replies: 50, optOuts: 4 },
      { step: 2, type: 'linkedin', name: 'Value-driven article share', sends: 366, opens: 183, replies: 42, optOuts: 3 },
      { step: 3, type: 'email', name: 'Executive brief — 3 tactics', sends: 321, opens: 128, replies: 40, optOuts: 5 }
    ]
  },
  {
    id: 'seq-003',
    name: 'Mid-Market Call-First',
    campaignId: 'cmp-003',
    status: 'active',
    totalLeads: 300,
    totalMeetings: 42,
    avgReplyRate: 4.9,
    steps: [
      { step: 1, type: 'call', name: 'Discovery call attempt', sends: 300, opens: 0, replies: 0, optOuts: 0 },
      { step: 2, type: 'email', name: 'Voicemail follow-up + case study', sends: 210, opens: 84, replies: 21, optOuts: 3 },
      { step: 3, type: 'linkedin', name: 'Connection + soft touch', sends: 186, opens: 93, replies: 14, optOuts: 2 },
      { step: 4, type: 'call', name: 'Final attempt + calendar link', sends: 170, opens: 0, replies: 0, optOuts: 0 }
    ]
  },
  {
    id: 'seq-004',
    name: 'Fintech ABM 3-Step',
    campaignId: 'cmp-005',
    status: 'active',
    totalLeads: 200,
    totalMeetings: 14,
    avgReplyRate: 8.0,
    steps: [
      { step: 1, type: 'email', name: 'Hyper-personalized opener', sends: 200, opens: 86, replies: 22, optOuts: 2 },
      { step: 2, type: 'linkedin', name: 'Mutual connection intro', sends: 176, opens: 105, replies: 28, optOuts: 1 },
      { step: 3, type: 'email', name: 'ROI calculator + demo offer', sends: 147, opens: 44, replies: 46, optOuts: 4 }
    ]
  }
];
