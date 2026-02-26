import { TrashIcon } from './ui/Icons';

const RULE_TYPES = ['Disallow', 'Allow'];

export function RuleRow({ rule, onChange, onRemove, canRemove }) {
  return (
    <div className="flex items-center gap-2">
      <select
        value={rule.type}
        onChange={(e) => onChange({ ...rule, type: e.target.value })}
        className="px-3 py-2 bg-midnight border border-metal/30 rounded-lg text-sm text-cloudy focus:outline-none focus:border-azure focus:ring-1 focus:ring-azure"
        aria-label="Rule type"
      >
        {RULE_TYPES.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
      <div className="relative flex-1 group">
        <input
          type="text"
          value={rule.path}
          onChange={(e) => onChange({ ...rule, path: e.target.value })}
          placeholder={rule.type === 'Disallow' ? '/ (blocks all)' : '/allowed-path/'}
          className="w-full px-3 py-2 bg-midnight border border-metal/30 rounded-lg text-sm text-white placeholder-galactic focus:outline-none focus:border-azure focus:ring-1 focus:ring-azure font-mono"
          aria-label="Path"
        />
        {rule.type === 'Disallow' && rule.path === '' && (
          <div className="absolute right-2 top-1/2 -translate-y-1/2 text-galactic text-xs pointer-events-none">
            blocks all
          </div>
        )}
      </div>
      <button
        onClick={onRemove}
        disabled={!canRemove}
        className="p-2 text-galactic hover:text-coral transition-colors disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus:ring-1 focus:ring-coral rounded"
        aria-label="Remove rule"
      >
        <TrashIcon className="w-4 h-4" />
      </button>
    </div>
  );
}
