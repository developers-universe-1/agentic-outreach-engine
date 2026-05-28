'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  Phone,
  Zap,
  Target,
  BarChart3,
  MessageSquare,
  ArrowRight
} from 'lucide-react';

const features = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Multi-Channel Sequences',
    desc: 'Email, LinkedIn, and cold call — orchestrated in one unified workflow.'
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'ICP Scoring',
    desc: 'Every lead scored 0-100 against your ideal customer profile before a single message sends.'
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: 'Reply Classification',
    desc: 'AI reads every reply, classifies intent, and drafts the perfect response in seconds.'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Auto-Tuning',
    desc: 'The system learns what works and recommends optimizations weekly — no guesswork.'
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Pipeline Analytics',
    desc: 'Track pipeline value, meetings booked, reply rates, and channel performance in real time.'
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    title: '1-to-1 Personalization',
    desc: 'Every message is personalized at the individual level — not mail merge, not templates.'
  }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm mb-6">
              <Zap className="w-4 h-4" />
              AI-Native Outreach Infrastructure
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Outreach That Books
              <br />
              <span className="text-emerald-400">Meetings on Autopilot</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Multi-channel sequences, ICP scoring, reply classification, and auto-tuning — 
              all powered by AI agents that learn what converts.
            </p>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold rounded-xl transition-colors"
            >
              Open Dashboard
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-800">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-400">6.2%</div>
              <div className="text-sm text-slate-400 mt-1">Avg Reply Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400">4</div>
              <div className="text-sm text-slate-400 mt-1">Active Sequences</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400">12</div>
              <div className="text-sm text-slate-400 mt-1">Qualified Leads</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400">3</div>
              <div className="text-sm text-slate-400 mt-1">Channels</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">What It Does</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors"
              >
                <div className="text-emerald-400 mb-4">{f.icon}</div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-slate-400">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to See It In Action?</h2>
          <p className="text-slate-400 mb-8">
            The full dashboard works without API keys. Explore campaigns, sequences, leads, and reply intelligence instantly.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold rounded-xl transition-colors"
          >
            Launch Dashboard
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8">
        <div className="max-w-5xl mx-auto px-4 text-center text-sm text-slate-500">
          Built with Next.js 15, TypeScript, Tailwind CSS, Recharts, and Framer Motion.
        </div>
      </footer>
    </div>
  );
}
