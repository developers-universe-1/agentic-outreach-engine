'use client';

import { useState } from 'react';
import MetricCard from '@/components/MetricCard';
import { getOutreachSnapshot, getTuningRecommendations, getChannelPerformance } from '@/lib/agent/orchestrator';
import {
  DollarSign,
  Calendar,
  MessageSquare,
  TrendingUp,
  Zap,
  Target
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

export default function OverviewPage() {
  const [snapshot] = useState(getOutreachSnapshot());
  const [recommendations] = useState(getTuningRecommendations());
  const [channels] = useState(getChannelPerformance());

  const channelColors: Record<string, string> = {
    Email: '#3b82f6',
    LinkedIn: '#0ea5e9',
    'Cold Call': '#22c55e'
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Overview</h1>
        <p className="text-slate-400 text-sm mt-1">
          {snapshot.activeCampaigns} active campaigns · {snapshot.activeSequences} active sequences
        </p>
      </header>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <MetricCard
          label="Pipeline Value"
          value={`$${(snapshot.totalPipelineValue / 1000000).toFixed(2)}M`}
          change="+12% vs last month"
          changeType="positive"
          icon={<DollarSign className="w-5 h-5" />}
        />
        <MetricCard
          label="Meetings Booked"
          value={snapshot.meetingsBooked}
          change="+3 this week"
          changeType="positive"
          icon={<Calendar className="w-5 h-5" />}
        />
        <MetricCard
          label="Total Replies"
          value={snapshot.totalReplies}
          change="+18% vs last week"
          changeType="positive"
          icon={<MessageSquare className="w-5 h-5" />}
        />
        <MetricCard
          label="Avg Reply Rate"
          value={`${snapshot.avgReplyRate}%`}
          change="Industry avg: 2.1%"
          changeType="positive"
          icon={<TrendingUp className="w-5 h-5" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Channel Performance */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-emerald-400" />
            Channel Performance
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={channels}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="channel" stroke="#64748b" fontSize={12} />
              <YAxis stroke="#64748b" fontSize={12} />
              <Tooltip
                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}
                labelStyle={{ color: '#94a3b8' }}
              />
              <Bar dataKey="replyRate" name="Reply Rate %" radius={[4, 4, 0, 0]}>
                {channels.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={channelColors[entry.channel] || '#64748b'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Tuning Recommendations */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-400" />
            AI Tuning Recommendations
          </h2>
          <div className="space-y-4">
            {recommendations.map((rec) => (
              <div key={rec.sequenceId} className="border-l-2 border-emerald-500 pl-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">{rec.sequenceName}</span>
                  <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full">
                    {rec.confidence}% confidence
                  </span>
                </div>
                <p className="text-sm text-slate-400 mb-1">{rec.action}</p>
                <span className="text-xs text-emerald-400 font-medium">{rec.projectedImpact}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Active Campaigns Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-800">
          <h2 className="text-lg font-semibold">Active Campaigns</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400">
                <th className="text-left px-6 py-3 font-medium">Campaign</th>
                <th className="text-left px-6 py-3 font-medium">Channel</th>
                <th className="text-right px-6 py-3 font-medium">Sends</th>
                <th className="text-right px-6 py-3 font-medium">Open Rate</th>
                <th className="text-right px-6 py-3 font-medium">Reply Rate</th>
                <th className="text-right px-6 py-3 font-medium">Meetings</th>
                <th className="text-left px-6 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {snapshot.campaigns.filter(c => c.status === 'active').map((c) => (
                <tr key={c.id} className="border-b border-slate-800/50 hover:bg-slate-800/30">
                  <td className="px-6 py-3 font-medium">{c.name}</td>
                  <td className="px-6 py-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      c.channel === 'Email' ? 'bg-blue-500/10 text-blue-400' :
                      c.channel === 'LinkedIn' ? 'bg-sky-500/10 text-sky-400' :
                      'bg-green-500/10 text-green-400'
                    }`}>
                      {c.channel}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-right">{c.sends.toLocaleString()}</td>
                  <td className="px-6 py-3 text-right">{c.openRate}%</td>
                  <td className="px-6 py-3 text-right">{c.replyRate}%</td>
                  <td className="px-6 py-3 text-right">{c.meetings}</td>
                  <td className="px-6 py-3">
                    <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full">
                      Active
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
