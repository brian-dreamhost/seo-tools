import { useState, useMemo } from 'react';
import { RedirectTable } from './components/RedirectTable';
import { BulkImport } from './components/BulkImport';
import { ValidationPanel } from './components/ValidationPanel';
import { ExportPanel } from './components/ExportPanel';
import { validateRedirects } from './utils/validateRedirects';

const TABS = [
  { id: 'table', label: 'Build Redirects' },
  { id: 'bulk', label: 'Bulk Import' },
  { id: 'export', label: 'Export' },
];

function makeRow() {
  return { id: Date.now() + Math.random(), from: '', to: '', type: '301' };
}

export default function App() {
  const [rows, setRows] = useState([makeRow()]);
  const [activeTab, setActiveTab] = useState('table');

  const validCount = rows.filter((r) => r.from.trim() && r.to.trim()).length;

  const issues = useMemo(() => validateRedirects(rows), [rows]);

  const addRow = () => setRows((prev) => [...prev, makeRow()]);

  const updateRow = (id, changes) => {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, ...changes } : r)));
  };

  const removeRow = (id) => {
    setRows((prev) => {
      const filtered = prev.filter((r) => r.id !== id);
      return filtered.length === 0 ? [makeRow()] : filtered;
    });
  };

  const handleBulkImport = (newRows) => {
    setRows((prev) => {
      const hasOnlyEmpty = prev.length === 1 && !prev[0].from.trim() && !prev[0].to.trim();
      return hasOnlyEmpty ? newRows : [...prev, ...newRows];
    });
    setActiveTab('table');
  };

  return (
    <div className="min-h-screen bg-abyss text-white bg-glow bg-grid">
      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10 animate-fadeIn">

        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-galactic">
          <a href="https://seo-tools-tau.vercel.app/" className="text-azure hover:text-white transition-colors">Free Tools</a>
          <span className="mx-2 text-metal">/</span>
          <a href="https://seo-tools-tau.vercel.app/seo/" className="text-azure hover:text-white transition-colors">SEO Tools</a>
          <span className="mx-2 text-metal">/</span>
          <span className="text-cloudy">Redirect Map Builder</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 border border-turtle text-turtle rounded-full px-4 py-2 text-sm font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-turtle" />
            Free SEO Tool
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Redirect Map Builder
          </h1>
          <p className="text-lg text-cloudy max-w-2xl">
            Build your redirect map and export it in the format your server needs — .htaccess, Nginx, Cloudflare, CSV, or JSON. Detects redirect chains and duplicate sources automatically.
          </p>
        </div>

        {/* Stats + Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex gap-1 p-1 bg-oblivion border border-metal/20 rounded-xl">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-azure focus:ring-offset-1 focus:ring-offset-oblivion ${
                  activeTab === tab.id
                    ? 'bg-azure text-white'
                    : 'text-galactic hover:text-white'
                }`}
              >
                {tab.label}
                {tab.id === 'table' && validCount > 0 && (
                  <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${activeTab === tab.id ? 'bg-white/20' : 'bg-metal/30'}`}>
                    {validCount}
                  </span>
                )}
                {tab.id === 'export' && issues.length > 0 && (
                  <span className="ml-2 text-xs px-1.5 py-0.5 rounded-full bg-tangerine/20 text-tangerine">
                    {issues.length}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="text-sm text-galactic">
            <span className="font-semibold text-white">{validCount}</span> redirect{validCount !== 1 ? 's' : ''} configured
          </div>
        </div>

        <div className="card-gradient border border-metal/20 rounded-2xl p-6">
          {activeTab === 'table' && (
            <div className="space-y-6">
              <RedirectTable rows={rows} onUpdate={updateRow} onAdd={addRow} onRemove={removeRow} />
              {issues.length > 0 && <ValidationPanel issues={issues} />}
            </div>
          )}

          {activeTab === 'bulk' && (
            <div className="space-y-4">
              <div className="p-3 bg-azure/10 border border-azure/20 rounded-lg text-sm text-cloudy">
                <strong className="text-white">Supported formats:</strong> CSV (comma-separated), TSV (tab-separated), or space-separated. Each row: <code className="text-turtle font-mono text-xs">old-url new-url [301|302|307]</code>
              </div>
              <BulkImport onImport={handleBulkImport} />
            </div>
          )}

          {activeTab === 'export' && (
            <div className="space-y-6">
              {issues.length > 0 && <ValidationPanel issues={issues} />}
              <ExportPanel rows={rows} />
            </div>
          )}
        </div>

        {activeTab === 'table' && validCount > 0 && (
          <div className="mt-4 flex justify-end">
            <button
              onClick={() => setActiveTab('export')}
              className="px-6 py-2.5 bg-azure hover:bg-azure-hover text-white rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-azure focus:ring-offset-2 focus:ring-offset-abyss"
            >
              Export Redirects →
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-metal/30 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-galactic">
            <p>Free Redirect Map Builder — DreamHost Marketing Tools</p>
            <div className="flex items-center gap-4">
              <a href="https://httpd.apache.org/docs/2.4/mod/mod_alias.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Apache Redirect Docs
              </a>
              <a href="https://nginx.org/en/docs/http/ngx_http_rewrite_module.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Nginx Rewrite Docs
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
