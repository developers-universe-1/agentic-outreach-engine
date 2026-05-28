import { campaigns, sequences, leads, replies } from '@/lib/demo';
import type { Campaign, Sequence, Lead, Reply, ReplyIntent } from '@/lib/demo';

export interface OutreachSnapshot {
  totalPipelineValue: number;
  meetingsBooked: number;
  totalReplies: number;
  avgReplyRate: number;
  activeSequences: number;
  activeCampaigns: number;
  campaigns: Campaign[];
  sequences: Sequence[];
  leads: Lead[];
  replies: Reply[];
}

export function getOutreachSnapshot(): OutreachSnapshot {
  const activeCampaigns = campaigns.filter(c => c.status === 'active');
  const activeSeqs = sequences.filter(s => s.status === 'active');
  const totalReplies = replies.length;
  const meetingsBooked = replies.filter(r => r.intent === 'meeting_booked').length;
  const avgReplyRate = activeCampaigns.length > 0
    ? activeCampaigns.reduce((s, c) => s + c.replyRate, 0) / activeCampaigns.length
    : 0;

  return {
    totalPipelineValue: 1840000,
    meetingsBooked,
    totalReplies,
    avgReplyRate: Number(avgReplyRate.toFixed(1)),
    activeSequences: activeSeqs.length,
    activeCampaigns: activeCampaigns.length,
    campaigns,
    sequences,
    leads,
    replies
  };
}

export interface SequenceRecommendation {
  sequenceId: string;
  sequenceName: string;
  action: string;
  projectedImpact: string;
  confidence: number;
}

export function getTuningRecommendations(): SequenceRecommendation[] {
  return [
    {
      sequenceId: 'seq-001',
      sequenceName: 'Enterprise 5-Touch',
      action: 'Add voice note to Step 2 — LinkedIn voice notes show 2.3x higher reply rates for VP+ titles',
      projectedImpact: '+12 replies/week',
      confidence: 87
    },
    {
      sequenceId: 'seq-002',
      sequenceName: 'C-Suite LinkedIn Only',
      action: 'Shorten Step 1 subject line from 8 words to 4 words — tests show +18% open rate',
      projectedImpact: '+8 opens/week',
      confidence: 74
    },
    {
      sequenceId: 'seq-003',
      sequenceName: 'Mid-Market Call-First',
      action: 'Move Step 2 email to Day 3 instead of Day 1 — reduces opt-outs by 22%',
      projectedImpact: '-3 opt-outs/week',
      confidence: 81
    },
    {
      sequenceId: 'seq-004',
      sequenceName: 'Fintech ABM 3-Step',
      action: 'Add ROI calculator to Step 3 — similar sequences see 34% more meetings booked',
      projectedImpact: '+5 meetings/week',
      confidence: 92
    }
  ];
}

export interface ChannelPerformance {
  channel: string;
  sends: number;
  opens: number;
  replies: number;
  meetings: number;
  replyRate: number;
}

export function getChannelPerformance(): ChannelPerformance[] {
  const byChannel: Record<string, ChannelPerformance> = {};

  for (const c of campaigns) {
    if (!byChannel[c.channel]) {
      byChannel[c.channel] = {
        channel: c.channel,
        sends: 0,
        opens: 0,
        replies: 0,
        meetings: 0,
        replyRate: 0
      };
    }
    byChannel[c.channel].sends += c.sends;
    byChannel[c.channel].opens += c.opens;
    byChannel[c.channel].replies += c.replies;
    byChannel[c.channel].meetings += c.meetings;
  }

  return Object.values(byChannel).map(c => ({
    ...c,
    replyRate: c.sends > 0 ? Number(((c.replies / c.sends) * 100).toFixed(1)) : 0
  }));
}

export function getReplyDistribution(): { intent: ReplyIntent; count: number; color: string }[] {
  const counts: Record<ReplyIntent, number> = {
    positive: 0,
    neutral: 0,
    objection: 0,
    unsubscribe: 0,
    meeting_booked: 0
  };

  for (const r of replies) {
    counts[r.intent]++;
  }

  return [
    { intent: 'positive', count: counts.positive, color: '#22c55e' },
    { intent: 'neutral', count: counts.neutral, color: '#f59e0b' },
    { intent: 'objection', count: counts.objection, color: '#ef4444' },
    { intent: 'unsubscribe', count: counts.unsubscribe, color: '#6b7280' },
    { intent: 'meeting_booked', count: counts.meeting_booked, color: '#3b82f6' }
  ];
}
