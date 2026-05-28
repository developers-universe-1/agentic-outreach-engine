'use client';

import { useState } from 'react';
import { sequences } from '@/lib/demo';
import { GitBranch, Mail, Linkedin, Phone, Clock } from 'lucide-react';

const typeIcon: Record<string, React.ReactNode> = {
  email: <Mail className="w-4 h-4" />,
  linkedin: <Linkedin className="w-4 h-4" />,
  call: <Phone className="w-4 h-4" />,
  wait: <Clock className="w-4 h-4" />
};

const typeLabel: Record<string, string> = {
  email: 'Email',
  linkedin: 'LinkedIn',
  call: 'Call',
  wait: 'Wait'
};

export default function SequencesPage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Sequences</h1>
        <p className="text-slate-400 text-sm mt-1">
          {sequences.length} multi-step outreach sequences
        </p>
      </header>

      <div className="space-y-4">
        {sequences.map((seq) => (
          <div
            key={seq.id}
            className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setExpanded(expanded === seq.id ? null : seq.id)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-800/30 transition-colors"
            >
              <div className="flex items-center gap-4">
                <GitBranch className="w-5 h-5 text-emerald-400" />
                <div className="text-left">
                  <div className="font-semibold">{seq.name}</div>
                  <div className="text-sm text-slate-400">
                    {seq.steps.length} steps · {seq.totalLeads} leads · {seq.avgReplyRate}% reply rate
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-slate-400">{seq.totalMeetings} meetings</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  seq.status === 'active' ? 'bg-emerald-500/10 text-emerald-400' :
                  seq.status === 'paused' ? 'bg-amber-500/10 text-amber-400' :
                  'bg-slate-500/10 text-slate-400'
                }`}>
                  {seq.status}
                </span>
              </div>
            </button>

            {expanded === seq.id && (
              <div className="px-6 pb-4 border-t border-slate-800">
                <div className="mt-4 space-y-3">
                  {seq.steps.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-sm font-medium">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-slate-500">{typeIcon[step.type]}</span>
                          <span className="font-medium">{step.name}</span>
                          <span className="text-xs text-slate-500">({typeLabel[step.type]})</span>
                        </div>
                        <div className="flex gap-4 mt-1 text-xs text-slate-400">
                          <span>{step.sends.toLocaleString()} sends</span>
                          {step.opens > 0 && <span>{Math.round((step.opens / step.sends) * 100)}% open</span>}
                          {step.replies > 0 && <span>{Math.round((step.replies / step.sends) * 100)}% reply</span>}
                          {step.optOuts > 0 && <span className="text-red-400">{step.optOuts} opt-outs</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
