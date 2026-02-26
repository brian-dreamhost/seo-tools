import { useState } from 'react';

export function BulkImport({ onImport }) {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const parseLines = (raw) => {
    const lines = raw.split('\n').map((l) => l.trim()).filter(Boolean);
    return lines
      .map((line) => {
        // Try CSV (comma-separated), TSV (tab-separated), or space-separated
        let parts;
        if (line.includes('\t')) {
          parts = line.split('\t');
        } else if (line.includes(',')) {
          // Simple CSV split (no quoted strings support for simplicity)
          parts = line.split(',');
        } else {
          parts = line.split(/\s+/);
        }
        parts = parts.map((p) => p.trim()).filter(Boolean);
        if (parts.length < 2) return null;
        return {
          from: parts[0],
          to: parts[1],
          type: parts[2] && ['301', '302', '307'].includes(parts[2]) ? parts[2] : '301',
        };
      })
      .filter(Boolean);
  };

  const parsed = text.trim() ? parseLines(text) : [];

  const handleImport = () => {
    if (parsed.length === 0) {
      setError('No valid redirect pairs detected. Each line should have: old-url new-url [301|302|307]');
      return;
    }
    setError('');
    const rows = parsed.map((p) => ({
      id: Date.now() + Math.random(),
      from: p.from,
      to: p.to,
      type: p.type,
    }));
    onImport(rows);
    setText('');
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-cloudy mb-2" htmlFor="bulk-textarea">
          Paste redirects (CSV, TSV, or space-separated)
        </label>
        <textarea
          id="bulk-textarea"
          value={text}
          onChange={(e) => { setText(e.target.value); setError(''); }}
          rows={10}
          placeholder={`/old-page,/new-page,301\n/another-old,https://example.com/new,302\n\n# Or tab/space separated:\n/old\t/new\t301`}
          className="w-full px-4 py-3 bg-midnight border border-metal/30 rounded-xl text-sm text-white placeholder-galactic focus:outline-none focus:border-azure focus:ring-1 focus:ring-azure font-mono resize-y"
          spellCheck={false}
        />
        {text.trim() && (
          <p className="text-xs mt-1 text-azure">{parsed.length} redirect{parsed.length !== 1 ? 's' : ''} detected</p>
        )}
        {error && <p className="text-xs mt-1 text-coral">{error}</p>}
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={handleImport}
          disabled={parsed.length === 0}
          className="px-6 py-2.5 bg-azure hover:bg-azure-hover disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-azure focus:ring-offset-2 focus:ring-offset-abyss"
        >
          Import {parsed.length > 0 ? `${parsed.length} Redirect${parsed.length !== 1 ? 's' : ''}` : 'Redirects'}
        </button>
        <p className="text-xs text-galactic">Auto-detects CSV, TSV, and space-separated formats</p>
      </div>
    </div>
  );
}
