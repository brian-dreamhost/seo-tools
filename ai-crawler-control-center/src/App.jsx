import { useState, useMemo } from 'react';
import { CRAWLERS, CATEGORIES } from './data/crawlers';
import { CrawlerCard } from './components/CrawlerCard';
import { OutputPanel } from './components/OutputPanel';
import { ShieldIcon, InfoIcon } from './components/ui/Icons';

export default function App() {
  const [blocked, setBlocked] = useState(new Set());
  const [activeCategory, setActiveCategory] = useState('all');

  const toggleCrawler = (id) => {
    setBlocked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const blockAllTraining = () => {
    const trainingIds = CRAWLERS
      .filter((c) => c.category === 'training')
      .map((c) => c.id);
    setBlocked((prev) => new Set([...prev, ...trainingIds]));
  };

  const blockAll = () => {
    setBlocked(new Set(CRAWLERS.map((c) => c.id)));
  };

  const allowAll = () => {
    setBlocked(new Set());
  };

  const filteredCrawlers = useMemo(() => {
    if (activeCategory === 'all') return CRAWLERS;
    return CRAWLERS.filter((c) => c.category === activeCategory);
  }, [activeCategory]);

  const blockedCount = blocked.size;
  const totalCount = CRAWLERS.length;

  return (
    <div className="min-h-screen bg-abyss text-white bg-glow bg-grid">
      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10 animate-fadeIn">

        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-galactic">
          <a href="https://seo-tools-tau.vercel.app/" className="text-azure hover:text-white transition-colors">Free Tools</a>
          <span className="mx-2 text-metal">/</span>
          <a href="https://seo-tools-tau.vercel.app/seo/" className="text-azure hover:text-white transition-colors">SEO Tools</a>
          <span className="mx-2 text-metal">/</span>
          <span className="text-cloudy">AI Crawler Control Center</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 border border-turtle text-turtle rounded-full px-4 py-2 text-sm font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-turtle" />
            Free SEO Tool
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            AI Crawler Control Center
          </h1>
          <p className="text-lg text-cloudy max-w-2xl">
            Control which AI bots can crawl your website. Toggle individual crawlers on or off and generate a robots.txt snippet you can add to your site in minutes.
          </p>
        </div>

        {/* Info callout */}
        <div className="flex items-start gap-3 p-4 bg-midnight border border-azure/20 rounded-xl mb-8">
          <InfoIcon className="w-5 h-5 text-azure flex-shrink-0 mt-0.5" />
          <div className="text-sm text-cloudy">
            <strong className="text-white">Important:</strong> Blocking a crawler prevents <em>future</em> crawls but does not remove content that AI companies have already collected. For AI search crawlers (like PerplexityBot), blocking will remove your site from their citation results.
          </div>
        </div>

        {/* Quick actions */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={blockAllTraining}
            className="flex items-center gap-2 px-4 py-2 bg-coral/10 hover:bg-coral/20 border border-coral/30 text-coral rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 focus:ring-offset-abyss"
          >
            <ShieldIcon className="w-4 h-4" />
            Block All Training Data Crawlers
          </button>
          <button
            onClick={blockAll}
            className="px-4 py-2 bg-metal/20 hover:bg-metal/30 border border-metal/30 text-cloudy rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-metal"
          >
            Block All
          </button>
          <button
            onClick={allowAll}
            className="px-4 py-2 bg-metal/20 hover:bg-metal/30 border border-metal/30 text-cloudy rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-metal"
          >
            Allow All
          </button>
          <div className="ml-auto flex items-center gap-2 text-sm text-galactic">
            <span className="font-semibold text-coral">{blockedCount}</span>
            <span>of {totalCount} blocked</span>
          </div>
        </div>

        {/* Category filter */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
          {Object.entries(CATEGORIES).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors focus:outline-none focus:ring-2 focus:ring-azure focus:ring-offset-2 focus:ring-offset-abyss ${
                activeCategory === key
                  ? 'bg-azure text-white'
                  : 'bg-metal/20 text-galactic hover:text-white border border-metal/30'
              }`}
            >
              {label}
              {key !== 'all' && (
                <span className="ml-2 text-xs opacity-60">
                  {CRAWLERS.filter((c) => c.category === key).length}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Crawler cards */}
          <div className="space-y-3">
            {filteredCrawlers.map((crawler) => (
              <CrawlerCard
                key={crawler.id}
                crawler={crawler}
                isBlocked={blocked.has(crawler.id)}
                onToggle={toggleCrawler}
              />
            ))}
          </div>

          {/* Right: Output */}
          <div className="lg:sticky lg:top-6 space-y-4">
            <h2 className="text-lg font-semibold text-white">Generated robots.txt Snippet</h2>
            <OutputPanel blockedIds={blocked} />
            <div className="card-gradient border border-metal/20 rounded-xl p-4 space-y-2">
              <h3 className="text-sm font-semibold text-white">How to use this snippet</h3>
              <ol className="text-sm text-cloudy space-y-1.5 list-decimal list-inside">
                <li>Copy or download the snippet above</li>
                <li>Open your existing <code className="text-turtle font-mono text-xs">robots.txt</code> file</li>
                <li>Paste these rules at the <strong className="text-white">top</strong> of the file, before other rules</li>
                <li>Upload to your web server root directory</li>
              </ol>
              <p className="text-xs text-galactic pt-1">
                Don&apos;t have a robots.txt yet?{' '}
                <a href="https://robots-txt-generator-tool.vercel.app/" className="text-azure hover:text-white transition-colors">
                  Create one with our Robots.txt Generator
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-metal/30 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-galactic">
            <p>AI Crawler Control Center — DreamHost Marketing Tools</p>
            <div className="flex items-center gap-4">
              <a href="https://darkvisitors.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Dark Visitors Reference
              </a>
              <a href="https://neil.computer/notes/the-complete-list-of-ai-crawler-user-agents/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Full Bot List
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
