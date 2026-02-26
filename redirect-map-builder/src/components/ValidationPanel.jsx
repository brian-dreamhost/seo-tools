import { WarningIcon } from './ui/Icons';

export function ValidationPanel({ issues }) {
  if (issues.length === 0) return null;

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-semibold text-tangerine flex items-center gap-2">
        <WarningIcon className="w-4 h-4" />
        {issues.length} Issue{issues.length !== 1 ? 's' : ''} Detected
      </h3>
      {issues.map((issue, i) => (
        <div
          key={i}
          className={`flex items-start gap-3 p-3 rounded-lg border text-sm ${
            issue.severity === 'error'
              ? 'bg-coral/10 border-coral/30 text-coral'
              : 'bg-tangerine/10 border-tangerine/30 text-tangerine'
          }`}
        >
          <WarningIcon className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span className="text-cloudy">{issue.message}</span>
        </div>
      ))}
    </div>
  );
}
