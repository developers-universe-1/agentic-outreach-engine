export interface Campaign {
  id: string;
  name: string;
  channel: 'Email' | 'LinkedIn' | 'Cold Call';
  status: 'active' | 'paused' | 'completed';
  sends: number;
  opens: number;
  replies: number;
  meetings: number;
  openRate: number;
  replyRate: number;
  meetingRate: number;
  spend: number;
  startDate: string;
}

export const campaigns: Campaign[] = [
  {
    id: 'cmp-001',
    name: 'Q2 Enterprise Outreach',
    channel: 'Email',
    status: 'active',
    sends: 3420,
    opens: 1129,
    replies: 205,
    meetings: 34,
    openRate: 33.0,
    replyRate: 6.0,
    meetingRate: 1.0,
    spend: 0,
    startDate: '2026-04-15'
  },
  {
    id: 'cmp-002',
    name: 'LinkedIn C-Suite Sequence',
    channel: 'LinkedIn',
    status: 'active',
    sends: 1890,
    opens: 945,
    replies: 132,
    meetings: 19,
    openRate: 50.0,
    replyRate: 7.0,
    meetingRate: 1.0,
    spend: 2400,
    startDate: '2026-04-01'
  },
  {
    id: 'cmp-003',
    name: 'Cold Call Sprint — Mid-Market',
    channel: 'Cold Call',
    status: 'active',
    sends: 850,
    opens: 0,
    replies: 0,
    meetings: 42,
    openRate: 0,
    replyRate: 0,
    meetingRate: 4.9,
    spend: 0,
    startDate: '2026-05-01'
  },
  {
    id: 'cmp-004',
    name: 'Product Launch Nurture',
    channel: 'Email',
    status: 'paused',
    sends: 5600,
    opens: 1624,
    replies: 224,
    meetings: 28,
    openRate: 29.0,
    replyRate: 4.0,
    meetingRate: 0.5,
    spend: 800,
    startDate: '2026-03-01'
  },
  {
    id: 'cmp-005',
    name: 'LinkedIn ABM — Fintech',
    channel: 'LinkedIn',
    status: 'active',
    sends: 1200,
    opens: 684,
    replies: 96,
    meetings: 14,
    openRate: 57.0,
    replyRate: 8.0,
    meetingRate: 1.2,
    spend: 1800,
    startDate: '2026-05-10'
  },
  {
    id: 'cmp-006',
    name: 'Win-Back Campaign',
    channel: 'Email',
    status: 'completed',
    sends: 2100,
    opens: 504,
    replies: 63,
    meetings: 8,
    openRate: 24.0,
    replyRate: 3.0,
    meetingRate: 0.4,
    spend: 0,
    startDate: '2026-02-01'
  }
];
