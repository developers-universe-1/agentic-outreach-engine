'use client';

import { useState } from 'react';
import { replies, type ReplyIntent } from '@/lib/demo';
import { getReplyDistribution } from '@/lib/agent/orchestrator';
import { MessageSquare, Mail, Linkedin, ChevronDown, ChevronUp } from 'lucide-react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const intentConfig: Record<ReplyIntent, { label: string; color: string; bg: string }> = {
  positive: { label: 'Positive', color: '#22c55e', bg: 'bg-emerald-500/10 text-emerald-400' },
  neutral: { label: 'Neutral', color: '#f59e0b', bg: 'bg-amber-500/10 text-amber-400' },
  objection: { label: 'Objection', color: '#ef4444', bg: 'bg-red-500/10 text-red-400' },
  unsubscribe: { label: 'Unsubscribe', color: '#6b7280', bg: 'bg-slate-500/10 text-slate-400' },
  meeting_booked: { label: 'Meeting Booked', color: '#3b82f6', bg: 'bg-blue-500/10 text-blue-400' }
};

export default function RepliesPage() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [filter, setFilter] = useState<ReplyIntent | 'all'>('all');
  const distribution = getReplyDistribution();

  const filtered = filter === 'all' ? replies : replies.filter(r => r.intent === filter);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Reply Intelligence</h1>
        <p className="text-slate-400 text-sm mt-1">
          AI-classified replies with suggested responses
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Intent Distribution */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-4">
            Intent Distribution
          </h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={distribution}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={4}
                dataKey="count"
              >
                {distribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}
                labelStyle={{ color: '#94a3b8' }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-2 mt-2">
            {distribution.map((d) => (
              <button
                key={d.intent}
                onClick={() => setFilter(filter === d.intent ? 'all' : d.intent)}
                className={`text-xs px-2 py-1 rounded-full transition-colors ${
                  filter === d.intent ? 'ring-1 ring-white' : ''
                }`}
                style={{ backgroundColor: `${d.color}20`, color: d.color }}
              >
                {intentConfig[d.intent].label} ({d.count})
              </button>
            ))}
          </div>
        </div>

        {/* Reply Stats */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-4">
            Reply Stats
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {distribution.map((d) => (
              <div key={d.intent} className="text-center p-3 rounded-lg bg-slate-800/50">
                <div className="text-2xl font-bold" style={{ color: d.color }}>{d.count}</div>
                <div className="text-xs text-slate-400 mt-1">{intentConfig[d.intent].label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reply Inbox */}
      <div className="space-y-4">
        {filtered.map((reply) => (
          <div
            key={reply.id}
            className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setExpanded(expanded === reply.id ? null : reply.id)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-800/30 transition-colors"
            >
              <div className="flex items-center gap-4">
                {reply.channel === 'Email' ? (
                  <Mail className="w-4 h-4 text-slate-500" />
                ) : (
                  <Linkedin className="w-4 h-4 text-slate-500" />
                )}
                <div className="text-left">
                  <div className="font-medium">{reply.leadName}</div>
                  <div className="text-sm text-slate-400">
                    {reply.leadTitle} · {reply.company}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-xs px-2 py-0.5 rounded-full ${intentConfig[reply.intent].bg}`}>
                  {intentConfig[reply.intent].label}
                </span>
                <span className="text-xs text-slate-500">{reply.confidence}% confidence</span>
                {expanded === reply.id ? (
                  <ChevronUp className="w-4 h-4 text-slate-500" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-500" />
                )}
              </div>
            </button>

            {expanded === reply.id && (
              <div className="px-6 pb-4 border-t border-slate-800 space-y-4">
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Subject</div>
                  <div className="text-sm">{reply.subject}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Reply</div>
                  <p className="text-sm text-slate-300 bg-slate-800/50 p-3 rounded-lg">
                    {reply.body}
                  </p>
                </div>
                <div>
                  <div className="text-xs text-emerald-500 uppercase tracking-wide mb-1">
                    AI Suggested Response
                  </div>
                  <p className="text-sm text-slate-300 bg-emerald-500/5 border border-emerald-500/20 p-3 rounded-lg">
                    {reply.suggestedResponse}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
