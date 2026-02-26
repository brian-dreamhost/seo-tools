import { PlusIcon, TrashIcon } from './ui/Icons';

const TYPES = [
  { value: '301', label: '301 — Permanent' },
  { value: '302', label: '302 — Temporary' },
  { value: '307', label: '307 — Temporary Strict' },
];

export function RedirectTable({ rows, onUpdate, onAdd, onRemove }) {
  return (
    <div className="space-y-3">
      {rows.length > 0 && (
        <div className="hidden md:grid md:grid-cols-12 gap-2 px-2 text-xs text-galactic uppercase tracking-wider">
          <div className="col-span-4">From (old URL)</div>
          <div className="col-span-4">To (new URL)</div>
          <div className="col-span-3">Type</div>
          <div className="col-span-1" />
        </div>
      )}

      {rows.map((row, index) => (
        <div key={row.id} className="grid grid-cols-12 gap-2 items-start">
          <div className="col-span-12 md:col-span-4">
            <label className="block md:hidden text-xs text-galactic mb-1">From</label>
            <input
              type="text"
              value={row.from}
              onChange={(e) => onUpdate(row.id, { from: e.target.value })}
              placeholder="/old-page or https://..."
              className="w-full px-3 py-2 bg-midnight border border-metal/30 rounded-lg text-sm text-white placeholder-galactic focus:outline-none focus:border-azure focus:ring-1 focus:ring-azure font-mono"
              aria-label={`Source URL row ${index + 1}`}
            />
          </div>
          <div className="col-span-12 md:col-span-4">
            <label className="block md:hidden text-xs text-galactic mb-1">To</label>
            <input
              type="text"
              value={row.to}
              onChange={(e) => onUpdate(row.id, { to: e.target.value })}
              placeholder="/new-page or https://..."
              className="w-full px-3 py-2 bg-midnight border border-metal/30 rounded-lg text-sm text-white placeholder-galactic focus:outline-none focus:border-azure focus:ring-1 focus:ring-azure font-mono"
              aria-label={`Destination URL row ${index + 1}`}
            />
          </div>
          <div className="col-span-10 md:col-span-3">
            <label className="block md:hidden text-xs text-galactic mb-1">Type</label>
            <select
              value={row.type}
              onChange={(e) => onUpdate(row.id, { type: e.target.value })}
              className="w-full px-3 py-2 bg-midnight border border-metal/30 rounded-lg text-sm text-cloudy focus:outline-none focus:border-azure focus:ring-1 focus:ring-azure"
              aria-label={`Redirect type row ${index + 1}`}
            >
              {TYPES.map((t) => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>
          <div className="col-span-2 md:col-span-1 flex items-center md:pt-0 pt-4">
            <button
              onClick={() => onRemove(row.id)}
              disabled={rows.length === 1}
              className="p-2 text-galactic hover:text-coral transition-colors disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus:ring-1 focus:ring-coral rounded"
              aria-label={`Remove redirect row ${index + 1}`}
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}

      <button
        onClick={onAdd}
        className="flex items-center gap-2 text-sm text-azure hover:text-white transition-colors focus:outline-none focus:underline"
      >
        <PlusIcon className="w-4 h-4" />
        Add redirect
      </button>
    </div>
  );
}
