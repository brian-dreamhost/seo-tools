import { ExternalLinkIcon } from './ui/Icons';

const RISK_STYLES = {
  high: { label: 'High Risk', bg: 'bg-coral/10', border: 'border-coral/30', text: 'text-coral' },
  medium: { label: 'Medium', bg: 'bg-tangerine/10', border: 'border-tangerine/30', text: 'text-tangerine' },
  low: { label: 'Low Risk', bg: 'bg-turtle/10', border: 'border-turtle/30', text: 'text-turtle' },
};

const CATEGORY_LABELS = {
  training: 'Training Data',
  search: 'AI Search',
  extraction: 'Data Extraction',
};

export function CrawlerCard({ crawler, isBlocked, onToggle }) {
  const risk = RISK_STYLES[crawler.risk] || RISK_STYLES.medium;
  const categoryLabel = CATEGORY_LABELS[crawler.category] || crawler.category;

  return (
    <div className={`card-gradient border rounded-xl p-4 transition-all duration-200 ${
      isBlocked ? 'border-coral/30' : 'border-metal/20 hover:border-metal/40'
    }`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <code className={`font-mono text-sm font-semibold ${isBlocked ? 'text-coral' : 'text-white'}`}>
              {crawler.name}
            </code>
            <span className="text-xs text-galactic">— {crawler.operator}</span>
          </div>

          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className={`text-xs px-2 py-0.5 rounded-full border ${risk.bg} ${risk.border} ${risk.text}`}>
              {risk.label}
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-metal/20 border border-metal/30 text-galactic">
              {categoryLabel}
            </span>
          </div>

          <p className="text-sm text-cloudy leading-relaxed">{crawler.description}</p>

          {crawler.docsUrl && (
            <a
              href={crawler.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-galactic hover:text-azure transition-colors mt-2 focus:outline-none focus:underline"
            >
              Official docs
              <ExternalLinkIcon className="w-3 h-3" />
            </a>
          )}
        </div>

        {/* Toggle */}
        <div className="flex-shrink-0 pt-0.5">
          <button
            role="switch"
            aria-checked={isBlocked}
            aria-label={`${isBlocked ? 'Unblock' : 'Block'} ${crawler.name}`}
            onClick={() => onToggle(crawler.id)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-abyss ${
              isBlocked
                ? 'bg-coral focus:ring-coral'
                : 'bg-metal/40 focus:ring-azure'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform duration-200 ${
                isBlocked ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          <p className={`text-xs text-center mt-1 ${isBlocked ? 'text-coral' : 'text-galactic'}`}>
            {isBlocked ? 'Blocked' : 'Allowed'}
          </p>
        </div>
      </div>
    </div>
  );
}
