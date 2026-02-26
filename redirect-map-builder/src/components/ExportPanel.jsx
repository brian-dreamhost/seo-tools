import { useState, useCallback } from 'react';
import { ClipboardIcon, DownloadIcon } from './ui/Icons';
import { Toast } from './ui/Toast';
import { exportCSV, exportHtaccess, exportNginx, exportJSON, exportCloudflare } from '../utils/exportFormats';

const FORMATS = [
  {
    id: 'htaccess',
    label: '.htaccess',
    description: 'Apache web server',
    filename: '.htaccess',
    mimeType: 'text/plain',
    generate: exportHtaccess,
  },
  {
    id: 'nginx',
    label: 'Nginx',
    description: 'Nginx server config',
    filename: 'redirects.conf',
    mimeType: 'text/plain',
    generate: exportNginx,
  },
  {
    id: 'cloudflare',
    label: 'Cloudflare',
    description: 'Cloudflare Workers / Pages rules',
    filename: 'redirects.json',
    mimeType: 'application/json',
    generate: exportCloudflare,
  },
  {
    id: 'csv',
    label: 'CSV',
    description: 'Spreadsheet / import',
    filename: 'redirects.csv',
    mimeType: 'text/csv',
    generate: exportCSV,
  },
  {
    id: 'json',
    label: 'JSON',
    description: 'Generic / custom integration',
    filename: 'redirects.json',
    mimeType: 'application/json',
    generate: exportJSON,
  },
];

export function ExportPanel({ rows }) {
  const [activeFormat, setActiveFormat] = useState('htaccess');
  const [toastVisible, setToastVisible] = useState(false);

  const fmt = FORMATS.find((f) => f.id === activeFormat);
  const validRows = rows.filter((r) => r.from.trim() && r.to.trim());
  const output = validRows.length > 0 ? fmt.generate(validRows) : `# No redirects to export yet.\n# Add redirect rules above.`;

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(output).then(() => setToastVisible(true));
  }, [output]);

  const handleDownload = useCallback(() => {
    const blob = new Blob([output], { type: fmt.mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fmt.filename;
    a.click();
    URL.revokeObjectURL(url);
  }, [output, fmt]);

  const lines = output.split('\n');

  return (
    <div className="space-y-4">
      {/* Format tabs */}
      <div className="flex flex-wrap gap-2">
        {FORMATS.map((f) => (
          <button
            key={f.id}
            onClick={() => setActiveFormat(f.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-azure focus:ring-offset-2 focus:ring-offset-abyss ${
              activeFormat === f.id
                ? 'bg-azure text-white'
                : 'bg-metal/20 border border-metal/30 text-galactic hover:text-white'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <p className="text-sm text-galactic">{fmt.description} — downloads as <code className="text-cloudy font-mono text-xs">{fmt.filename}</code></p>

      {/* Code preview */}
      <div className="card-gradient border border-metal/20 rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-metal/20">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-coral" />
            <div className="w-2.5 h-2.5 rounded-full bg-tangerine" />
            <div className="w-2.5 h-2.5 rounded-full bg-turtle" />
            <span className="ml-2 text-sm text-galactic font-mono">{fmt.filename}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-galactic hover:text-white border border-metal/30 hover:border-metal/60 rounded-lg transition-colors focus:outline-none focus:ring-1 focus:ring-azure"
            >
              <ClipboardIcon className="w-4 h-4" />
              Copy
            </button>
            <button
              onClick={handleDownload}
              disabled={validRows.length === 0}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-azure hover:bg-azure-hover disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-azure focus:ring-offset-2 focus:ring-offset-abyss"
            >
              <DownloadIcon className="w-4 h-4" />
              Download
            </button>
          </div>
        </div>
        <div className="p-4 overflow-auto max-h-80">
          <pre className="text-sm font-mono whitespace-pre leading-relaxed">
            {lines.map((line, i) => (
              <div key={i} className="flex">
                <span className="w-6 text-right pr-3 text-metal select-none flex-shrink-0 text-xs leading-5">{i + 1}</span>
                <span className={
                  line.startsWith('#') ? 'text-galactic italic' :
                  line.includes('"permanent": true') ? 'text-turtle' :
                  line.includes('"permanent": false') ? 'text-tangerine' :
                  'text-cloudy'
                }>{line || ' '}</span>
              </div>
            ))}
          </pre>
        </div>
      </div>
      <Toast message="Copied to clipboard!" isVisible={toastVisible} onHide={() => setToastVisible(false)} />
    </div>
  );
}
