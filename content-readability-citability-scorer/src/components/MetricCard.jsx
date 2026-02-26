const COLOR_MAP = {
  turtle: 'text-turtle border-turtle/30 bg-turtle/5',
  tangerine: 'text-tangerine border-tangerine/30 bg-tangerine/5',
  coral: 'text-coral border-coral/30 bg-coral/5',
  azure: 'text-azure border-azure/30 bg-azure/5',
  galactic: 'text-galactic border-metal/30 bg-metal/5',
};

export function MetricCard({ title, value, label, subtitle, color = 'azure', large = false }) {
  const colorClass = COLOR_MAP[color] || COLOR_MAP.azure;

  return (
    <div className={`card-gradient border rounded-2xl p-5 ${colorClass}`}>
      <p className="text-sm text-galactic mb-2 font-medium">{title}</p>
      <div className="flex items-end gap-2 mb-1">
        <span className={`font-bold ${large ? 'text-5xl' : 'text-3xl'} ${color === 'turtle' ? 'text-turtle' : color === 'coral' ? 'text-coral' : color === 'tangerine' ? 'text-tangerine' : 'text-white'}`}>
          {value}
        </span>
        {label && <span className="text-sm text-galactic mb-1">{label}</span>}
      </div>
      {subtitle && <p className="text-xs text-cloudy mt-1 leading-relaxed">{subtitle}</p>}
    </div>
  );
}

export function ProgressBar({ value, max = 100, color = 'azure' }) {
  const pct = Math.min(100, (value / max) * 100);
  const barColor = {
    turtle: 'bg-turtle',
    tangerine: 'bg-tangerine',
    coral: 'bg-coral',
    azure: 'bg-azure',
  }[color] || 'bg-azure';

  return (
    <div className="h-1.5 bg-metal/20 rounded-full overflow-hidden">
      <div
        className={`h-full ${barColor} rounded-full transition-all duration-500`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
