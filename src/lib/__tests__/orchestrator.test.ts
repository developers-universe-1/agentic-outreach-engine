import {
  getOutreachSnapshot,
  getTuningRecommendations,
  getChannelPerformance,
  getReplyDistribution
} from '../agent/orchestrator';

describe('Outreach Orchestrator', () => {
  it('returns outreach snapshot with all data', () => {
    const snapshot = getOutreachSnapshot();
    expect(snapshot.campaigns.length).toBeGreaterThan(0);
    expect(snapshot.sequences.length).toBeGreaterThan(0);
    expect(snapshot.leads.length).toBeGreaterThan(0);
    expect(snapshot.replies.length).toBeGreaterThan(0);
    expect(snapshot.totalPipelineValue).toBeGreaterThan(0);
    expect(snapshot.activeCampaigns).toBeGreaterThan(0);
    expect(snapshot.activeSequences).toBeGreaterThan(0);
  });

  it('returns tuning recommendations', () => {
    const recs = getTuningRecommendations();
    expect(recs.length).toBeGreaterThan(0);
    expect(recs[0]).toHaveProperty('sequenceId');
    expect(recs[0]).toHaveProperty('action');
    expect(recs[0]).toHaveProperty('projectedImpact');
    expect(recs[0]).toHaveProperty('confidence');
  });

  it('returns channel performance data', () => {
    const perf = getChannelPerformance();
    expect(perf.length).toBeGreaterThan(0);
    expect(perf[0]).toHaveProperty('channel');
    expect(perf[0]).toHaveProperty('replyRate');
  });

  it('returns reply distribution', () => {
    const dist = getReplyDistribution();
    expect(dist.length).toBe(5);
    const total = dist.reduce((s, d) => s + d.count, 0);
    expect(total).toBeGreaterThan(0);
  });
});
