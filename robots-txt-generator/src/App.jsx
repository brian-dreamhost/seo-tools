import { useState, useMemo } from 'react';
import { AgentGroup } from './components/AgentGroup';
import { SitemapList } from './components/SitemapList';
import { LivePreview } from './components/LivePreview';
import { PlusIcon, InfoIcon } from './components/ui/Icons';
import { generateRobotsTxt } from './utils/generateRobotsTxt';

let nextId = 2;

function App() {
  const [groups, setGroups] = useState([
    { id: 1, agent: '*', rules: [{ id: 1, type: 'Disallow', path: '' }], crawlDelay: '' },
  ]);
  const [sitemaps, setSitemaps] = useState(['']);
  const [host, setHost] = useState('');

  const robotsTxt = useMemo(
    () => generateRobotsTxt(groups, sitemaps, host),
    [groups, sitemaps, host]
  );

  const addGroup = () => {
    const id = nextId++;
    setGroups((prev) => [
      ...prev,
      { id, agent: 'Googlebot', rules: [{ id: Date.now(), type: 'Disallow', path: '' }], crawlDelay: '' },
    ]);
  };

  const updateGroup = (groupId, updatedGroup) => {
    setGroups((prev) => prev.map((g) => (g.id === groupId ? updatedGroup : g)));
  };

  const removeGroup = (groupId) => {
    setGroups((prev) => prev.filter((g) => g.id !== groupId));
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
          <span className="text-cloudy">Robots.txt Generator</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 border border-turtle text-turtle rounded-full px-4 py-2 text-sm font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-turtle" />
            Free SEO Tool
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Robots.txt Generator
          </h1>
          <p className="text-lg text-cloudy max-w-2xl">
            Build a valid robots.txt file with a visual editor. Control which search engines and AI crawlers can access your site — no syntax memorization required.
          </p>
        </div>

        {/* Info callout */}
        <div className="flex items-start gap-3 p-4 bg-midnight border border-azure/20 rounded-xl mb-8">
          <InfoIcon className="w-5 h-5 text-azure flex-shrink-0 mt-0.5" />
          <div className="text-sm text-cloudy">
            <strong className="text-white">How it works:</strong> Add user-agent groups to specify rules for different bots. An empty <code className="text-turtle font-mono bg-midnight/50 px-1 rounded">Disallow:</code> path means &ldquo;allow all.&rdquo; A <code className="text-coral font-mono bg-midnight/50 px-1 rounded">Disallow: /</code> blocks the bot from your entire site.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Editor */}
          <div className="space-y-6">
            <div className="space-y-4">
              {groups.map((group) => (
                <AgentGroup
                  key={group.id}
                  group={group}
                  onChange={(updated) => updateGroup(group.id, updated)}
                  onRemove={() => removeGroup(group.id)}
                  canRemove={groups.length > 1}
                />
              ))}
            </div>

            <button
              onClick={addGroup}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-dashed border-metal/40 hover:border-azure/40 rounded-2xl text-galactic hover:text-azure transition-colors focus:outline-none focus:ring-2 focus:ring-azure focus:ring-offset-2 focus:ring-offset-abyss"
            >
              <PlusIcon className="w-4 h-4" />
              Add User-agent Group
            </button>

            {/* Sitemaps */}
            <div className="card-gradient border border-metal/20 rounded-2xl p-5">
              <SitemapList sitemaps={sitemaps} onChange={setSitemaps} />
            </div>

            {/* Host directive */}
            <div className="card-gradient border border-metal/20 rounded-2xl p-5">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-cloudy uppercase tracking-wider" htmlFor="host-input">
                  Host (optional)
                </label>
                <input
                  id="host-input"
                  type="text"
                  value={host}
                  onChange={(e) => setHost(e.target.value)}
                  placeholder="example.com"
                  className="w-full px-3 py-2 bg-midnight border border-metal/30 rounded-lg text-sm text-white placeholder-galactic focus:outline-none focus:border-azure focus:ring-1 focus:ring-azure font-mono"
                />
                <p className="text-xs text-galactic">Yandex-specific: specifies the preferred domain version.</p>
              </div>
            </div>
          </div>

          {/* Right: Live preview */}
          <div className="lg:sticky lg:top-6 space-y-4">
            <h2 className="text-lg font-semibold text-white">Live Preview</h2>
            <LivePreview content={robotsTxt} />

            {/* Tips */}
            <div className="card-gradient border border-metal/20 rounded-xl p-4 space-y-2">
              <h3 className="text-sm font-semibold text-white">Upload instructions</h3>
              <ol className="text-sm text-cloudy space-y-1 list-decimal list-inside">
                <li>Download your <code className="text-turtle font-mono text-xs">robots.txt</code> file</li>
                <li>Upload to the <strong className="text-white">root</strong> of your domain</li>
                <li>Verify at <code className="text-turtle font-mono text-xs">yourdomain.com/robots.txt</code></li>
                <li>Submit URL in Google Search Console</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-metal/30 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-galactic">
            <p>Free Robots.txt Generator — DreamHost Marketing Tools</p>
            <div className="flex items-center gap-4">
              <a href="https://developers.google.com/search/docs/crawling-indexing/robots/intro" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Google Robots.txt Docs
              </a>
              <a href="https://search.google.com/search-console/robots-txt-tester" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Test in Search Console
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
