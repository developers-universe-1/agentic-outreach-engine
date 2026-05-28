'use client';

import { useState } from 'react';
import { leads } from '@/lib/demo';
import { Users, Search, Filter } from 'lucide-react';

export default function LeadsPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'enriched' | 'high-intent'>('all');

  const filtered = leads.filter((l) => {
    const matchesSearch = l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.company.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'all' ? true :
      filter === 'enriched' ? l.enrichmentStatus === 'enriched' :
      l.icpScore >= 80;
    return matchesSearch && matchesFilter;
  });

  const scoreColor = (score: number) => {
    if (score >= 80) return 'text-emerald-400';
    if (score >= 60) return 'text-amber-400';
    return 'text-slate-400';
  };

  const scoreBg = (score: number) => {
    if (score >= 80) return 'bg-emerald-500/10';
    if (score >= 60) return 'bg-amber-500/10';
    return 'bg-slate-500/10';
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Leads</h1>
        <p className="text-slate-400 text-sm mt-1">
          {leads.length} leads scored against ICP
        </p>
      </header>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search leads..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-emerald-500"
          />
        </div>
        <div className="flex gap-2">
          {(['all', 'enriched', 'high-intent'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === f
                  ? 'bg-emerald-500/10 text-emerald-400'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-100'
              }`}
            >
              {f === 'high-intent' ? 'High Intent (80+)' : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400">
                <th className="text-left px-6 py-3 font-medium">Lead</th>
                <th className="text-left px-6 py-3 font-medium">Company</th>
                <th className="text-left px-6 py-3 font-medium">Channel</th>
                <th className="text-right px-6 py-3 font-medium">ICP Score</th>
                <th className="text-left px-6 py-3 font-medium">Enrichment</th>
                <th className="text-left px-6 py-3 font-medium">Sequence</th>
                <th className="text-left px-6 py-3 font-medium">Last Activity</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((l) => (
                <tr key={l.id} className="border-b border-slate-800/50 hover:bg-slate-800/30">
                  <td className="px-6 py-3">
                    <div className="font-medium">{l.name}</div>
                    <div className="text-xs text-slate-400">{l.title}</div>
                  </td>
                  <td className="px-6 py-3">
                    <div>{l.company}</div>
                    <div className="text-xs text-slate-400">{l.industry} · {l.companySize}</div>
                  </td>
                  <td className="px-6 py-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      l.channel === 'Email' ? 'bg-blue-500/10 text-blue-400' :
                      l.channel === 'LinkedIn' ? 'bg-sky-500/10 text-sky-400' :
                      'bg-green-500/10 text-green-400'
                    }`}>
                      {l.channel}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-right">
                    <span className={`inline-flex items-center justify-center w-10 h-6 rounded-full text-xs font-medium ${scoreBg(l.icpScore)} ${scoreColor(l.icpScore)}`}>
                      {l.icpScore}
                    </span>
                  </td>
                  <td className="px-6 py-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      l.enrichmentStatus === 'enriched' ? 'bg-emerald-500/10 text-emerald-400' :
                      l.enrichmentStatus === 'pending' ? 'bg-amber-500/10 text-amber-400' :
                      'bg-slate-500/10 text-slate-400'
                    }`}>
                      {l.enrichmentStatus}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-slate-400">Step {l.sequenceStep}</td>
                  <td className="px-6 py-3 text-slate-400 text-xs">{l.lastActivity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
