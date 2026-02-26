import { PlusIcon, TrashIcon } from './ui/Icons';

export function SitemapList({ sitemaps, onChange }) {
  const addSitemap = () => onChange([...sitemaps, '']);

  const updateSitemap = (index, value) => {
    const updated = [...sitemaps];
    updated[index] = value;
    onChange(updated);
  };

  const removeSitemap = (index) => {
    onChange(sitemaps.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-cloudy uppercase tracking-wider">Sitemaps</h3>
      <div className="space-y-2">
        {sitemaps.map((sitemap, index) => (
          <div key={index} className="flex items-center gap-2">
            <input
              type="url"
              value={sitemap}
              onChange={(e) => updateSitemap(index, e.target.value)}
              placeholder="https://example.com/sitemap.xml"
              className="flex-1 px-3 py-2 bg-midnight border border-metal/30 rounded-lg text-sm text-white placeholder-galactic focus:outline-none focus:border-azure focus:ring-1 focus:ring-azure font-mono"
              aria-label={`Sitemap URL ${index + 1}`}
            />
            <button
              onClick={() => removeSitemap(index)}
              disabled={sitemaps.length === 1}
              className="p-2 text-galactic hover:text-coral transition-colors disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus:ring-1 focus:ring-coral rounded"
              aria-label="Remove sitemap"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={addSitemap}
        className="flex items-center gap-1.5 text-sm text-azure hover:text-white transition-colors focus:outline-none focus:underline"
      >
        <PlusIcon className="w-4 h-4" />
        Add sitemap URL
      </button>
    </div>
  );
}
