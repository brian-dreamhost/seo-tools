import { useState } from 'react';
import { analyzeForCitability } from './utils/contentAnalysis';
import { GoogleAIOPreview } from './components/GoogleAIOPreview';
import { PerplexityPreview } from './components/PerplexityPreview';
import { ChatGPTPreview } from './components/ChatGPTPreview';

const PREVIEW_TABS = [
  { id: 'google-aio', label: 'Google AI Overview' },
  { id: 'perplexity', label: 'Perplexity' },
  { id: 'chatgpt', label: 'ChatGPT Search' },
];

const SCORE_TIPS = [
  { min: 0, max: 40, label: 'Needs significant improvement', color: 'coral', tip: 'Add statistics, lists, and clear Q&A sections to improve citability.' },
  { min: 40, max: 65, label: 'Moderately citable', color: 'tangerine', tip: 'Good foundation. Add more data points and authority signals.' },
  { min: 65, max: 80, label: 'Good — likely to be cited', color: 'azure', tip: 'Strong content. Consider adding more specific statistics.' },
  { min: 80, max: 101, label: 'Excellent — highly citable', color: 'turtle', tip: 'This content has strong AI citation signals.' },
];

function getScoreTier(score) {
  return SCORE_TIPS.find((t) => score >= t.min && score < t.max) || SCORE_TIPS[0];
}

export default function App() {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [activeTab, setActiveTab] = useState('google-aio');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const wordCount = (content.match(/\b\w+\b/g) || []).length;

  const handleAnalyze = () => {
    if (!content.trim() || wordCount < 20) return;
    setIsAnalyzing(true);
    setTimeout(() => {
      setAnalysis(analyzeForCitability(content));
      setIsAnalyzing(false);
    }, 50);
  };

  const scoreTier = analysis ? getScoreTier(analysis.score) : null;

  const previewProps = {
    answer: analysis?.answer || '',
    sources: analysis?.topSentences || [],
    title: title || 'Your Page Title',
    url: url || null,
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
          <span className="text-cloudy">AI Search Snippet Previewer</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 border border-turtle text-turtle rounded-full px-4 py-2 text-sm font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-turtle" />
            Free SEO Tool
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            AI Search Snippet Previewer
          </h1>
          <p className="text-lg text-cloudy max-w-2xl">
            See how your content might be cited by Google AI Overviews, Perplexity, and ChatGPT Search. Analyze citability signals and get specific improvement recommendations.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="flex items-start gap-3 p-4 bg-tangerine/10 border border-tangerine/30 rounded-xl mb-8">
          <span className="text-tangerine mt-0.5">⚠</span>
          <p className="text-sm text-cloudy">
            <strong className="text-tangerine">Simulated previews only.</strong> These previews are generated from your content&apos;s structure — they do not reflect how any AI system will actually respond. Real AI results depend on query context, real-time web crawling, and proprietary ranking algorithms. Use these previews as a content quality guide, not a literal prediction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Input */}
          <div className="space-y-4">
            <div className="card-gradient border border-metal/20 rounded-2xl p-5 space-y-4">
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-cloudy mb-1.5" htmlFor="page-title">
                    Page Title
                  </label>
                  <input
                    id="page-title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="How to Write Content That AI Will Cite"
                    className="w-full px-3 py-2 bg-midnight border border-metal/30 rounded-lg text-sm text-white placeholder-galactic focus:outline-none focus:border-azure focus:ring-1 focus:ring-azure"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-cloudy mb-1.5" htmlFor="page-url">
                    Page URL
                  </label>
                  <input
                    id="page-url"
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://yoursite.com/your-page"
                    className="w-full px-3 py-2 bg-midnight border border-metal/30 rounded-lg text-sm text-white placeholder-galactic focus:outline-none focus:border-azure focus:ring-1 focus:ring-azure font-mono"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-sm font-medium text-cloudy" htmlFor="content-area">
                      Content
                    </label>
                    <span className="text-xs text-galactic">{wordCount} words</span>
                  </div>
                  <textarea
                    id="content-area"
                    value={content}
                    onChange={(e) => { setContent(e.target.value); setAnalysis(null); }}
                    rows={14}
                    placeholder="Paste your article, blog post, or page content here. The tool will analyze its structure and generate simulated AI snippet previews..."
                    className="w-full px-4 py-3 bg-midnight border border-metal/30 rounded-xl text-sm text-white placeholder-galactic focus:outline-none focus:border-azure focus:ring-1 focus:ring-azure resize-y leading-relaxed"
                  />
                </div>
              </div>
              <button
                onClick={handleAnalyze}
                disabled={wordCount < 20 || isAnalyzing}
                className="w-full py-3 bg-azure hover:bg-azure-hover disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-azure focus:ring-offset-2 focus:ring-offset-abyss"
              >
                {isAnalyzing ? 'Analyzing…' : 'Analyze & Preview'}
              </button>
              {wordCount < 20 && content.trim() && (
                <p className="text-xs text-galactic text-center">Add at least 20 words to analyze</p>
              )}
            </div>

            {/* Citability score */}
            {analysis && scoreTier && (
              <div className={`card-gradient border rounded-2xl p-5 border-${scoreTier.color}/30`}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-white">Citability Score</h3>
                  <span className={`text-3xl font-bold text-${scoreTier.color}`}>{analysis.score}</span>
                </div>
                <div className="h-2 bg-metal/20 rounded-full overflow-hidden mb-3">
                  <div
                    className={`h-full bg-${scoreTier.color} rounded-full transition-all duration-700`}
                    style={{ width: `${analysis.score}%` }}
                  />
                </div>
                <p className={`text-sm font-medium text-${scoreTier.color} mb-1`}>{scoreTier.label}</p>
                <p className="text-xs text-cloudy">{scoreTier.tip}</p>

                {analysis.keyTopic && (
                  <p className="text-xs text-galactic mt-3">
                    Key topic detected: <span className="text-azure font-medium">{analysis.keyTopic}</span>
                  </p>
                )}
                {analysis.questions.length > 0 && (
                  <p className="text-xs text-turtle mt-1">
                    ✓ {analysis.questions.length} question{analysis.questions.length > 1 ? 's' : ''} detected — great for Q&A formatting
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Right: Preview */}
          <div className="space-y-4">
            <div className="flex gap-1 p-1 bg-oblivion border border-metal/20 rounded-xl overflow-x-auto">
              {PREVIEW_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors focus:outline-none focus:ring-2 focus:ring-azure focus:ring-offset-1 focus:ring-offset-oblivion flex-shrink-0 ${
                    activeTab === tab.id ? 'bg-azure text-white' : 'text-galactic hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="transition-opacity duration-200">
              {activeTab === 'google-aio' && <GoogleAIOPreview {...previewProps} />}
              {activeTab === 'perplexity' && <PerplexityPreview {...previewProps} />}
              {activeTab === 'chatgpt' && <ChatGPTPreview {...previewProps} />}
            </div>

            {/* Improvement tips */}
            {analysis && (
              <div className="card-gradient border border-metal/20 rounded-2xl p-5">
                <h3 className="text-sm font-semibold text-white mb-3">Content Structure Found</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className={analysis.wordCount >= 300 ? 'text-turtle' : 'text-coral'}>
                      {analysis.wordCount >= 300 ? '✓' : '✗'}
                    </span>
                    <span className="text-cloudy">
                      {analysis.wordCount} words {analysis.wordCount >= 300 ? '(optimal 300–2000)' : '(add more content for better citability)'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={analysis.questions.length > 0 ? 'text-turtle' : 'text-galactic'}>
                      {analysis.questions.length > 0 ? '✓' : '○'}
                    </span>
                    <span className="text-cloudy">
                      {analysis.questions.length > 0
                        ? `${analysis.questions.length} question${analysis.questions.length > 1 ? 's' : ''} for Q&A structure`
                        : 'No questions detected — consider adding "How does X work?" sections'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={analysis.topSentences.length >= 2 ? 'text-turtle' : 'text-tangerine'}>
                      {analysis.topSentences.length >= 2 ? '✓' : '⚠'}
                    </span>
                    <span className="text-cloudy">
                      {analysis.topSentences.length} citable sentence{analysis.topSentences.length !== 1 ? 's' : ''} extracted
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-metal/30 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-galactic">
            <p>AI Search Snippet Previewer — DreamHost Marketing Tools</p>
            <a
              href="https://content-readability-scorer.vercel.app/"
              className="text-azure hover:text-white transition-colors"
            >
              Also try: Content Readability Scorer →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
