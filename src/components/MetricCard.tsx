interface MetricCardProps {
  label: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: React.ReactNode;
}

export default function MetricCard({ label, value, change, changeType = 'neutral', icon }: MetricCardProps) {
  const changeColor = {
    positive: 'text-emerald-400',
    negative: 'text-red-400',
    neutral: 'text-slate-400'
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-slate-400">{label}</span>
        <div className="text-slate-500">{icon}</div>
      </div>
      <div className="text-2xl font-bold">{value}</div>
      {change && (
        <div className={`text-xs mt-1 ${changeColor[changeType]}`}>
          {change}
        </div>
      )}
    </div>
  );
}
