'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Mail,
  GitBranch,
  Users,
  MessageSquare,
  Settings
} from 'lucide-react';

const navItems = [
  { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { href: '/dashboard/sequences', label: 'Sequences', icon: GitBranch },
  { href: '/dashboard/leads', label: 'Leads', icon: Users },
  { href: '/dashboard/replies', label: 'Replies', icon: MessageSquare },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 min-h-screen flex flex-col">
      <div className="p-6 border-b border-slate-800">
        <Link href="/" className="flex items-center gap-2">
          <Mail className="w-6 h-6 text-emerald-400" />
          <span className="font-bold text-lg tracking-tight">Outreach Engine</span>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-emerald-500/10 text-emerald-400'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-2 px-3 py-2 text-xs text-slate-500">
          <Settings className="w-3 h-3" />
          <span>v1.0.0 — Demo Mode</span>
        </div>
      </div>
    </aside>
  );
}
