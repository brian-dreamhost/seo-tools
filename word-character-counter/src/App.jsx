import { useState, useMemo } from 'react'
import { analyzeText } from './utils/textAnalysis.js'
import { platforms } from './data/platforms.js'
import QuickStats from './components/QuickStats.jsx'
import PlatformCard from './components/PlatformCard.jsx'
import ReadabilityCard from './components/ReadabilityCard.jsx'
import KeywordDensity from './components/KeywordDensity.jsx'

export default function App() {
  const [text, setText] = useState('')

  const stats = useMemo(() => analyzeText(text), [text])

  const handleClear = () => {
    setText('')
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="min-h-screen bg-abyss bg-glow bg-grid">
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 animate-fadeIn">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-galactic">
          <a href="https://seo-tools-tau.vercel.app/" className="text-azure hover:text-white transition-colors">Free Tools</a>
          <span className="mx-2 text-metal">/</span>
          <a href="https://seo-tools-tau.vercel.app/copywriting/" className="text-azure hover:text-white transition-colors">Copywriting Tools</a>
          <span className="mx-2 text-metal">/</span>
          <span className="text-cloudy">Word &amp; Character Counter</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="inline-flex items-center border border-turtle text-turtle rounded-full px-4 py-2 text-sm font-medium mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
            </svg>
            Free Tool
          </div>
          <h1 className="text-4xl sm:text-[2.7rem] font-bold text-white mb-3">
            Word &amp; Character Counter
          </h1>
          <p className="text-cloudy text-base sm:text-lg max-w-2xl">
            Real-time text analysis with platform-specific character limits and readability metrics. See exactly where your copy gets truncated on Google, social media, and email.
          </p>
        </header>

        {/* Text Input */}
        <div className="mb-6">
          <div className="card-gradient border border-metal/20 rounded-2xl overflow-hidden">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste or type your text here..."
              className="w-full min-h-[200px] bg-transparent text-white text-base px-5 py-4 placeholder:text-galactic focus:outline-none resize-y"
              aria-label="Text input for analysis"
            />
            {text.length > 0 && (
              <div className="flex items-center justify-between px-5 py-3 border-t border-metal/20">
                <span className="text-xs text-galactic">
                  {stats.charCount.toLocaleString()} character{stats.charCount !== 1 ? 's' : ''}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={handleCopy}
                    className="text-xs text-azure hover:text-white transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-azure focus:ring-offset-2 focus:ring-offset-abyss cursor-pointer flex items-center gap-1.5"
                    aria-label="Copy text to clipboard"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                    </svg>
                    Copy
                  </button>
                  <button
                    onClick={handleClear}
                    className="text-xs text-coral hover:text-white transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-azure focus:ring-offset-2 focus:ring-offset-abyss cursor-pointer flex items-center gap-1.5"
                    aria-label="Clear all text"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                    Clear
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mb-8">
          <QuickStats stats={stats} />
        </div>

        {/* Platform Character Limits */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-cloudy">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
            </svg>
            Platform Character Limits
            <span className="text-xs text-galactic font-normal ml-1">(click to preview)</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {platforms.map((platform) => (
              <PlatformCard
                key={platform.id}
                platform={platform}
                charCount={stats.charCount}
                text={text}
              />
            ))}
          </div>
        </div>

        {/* Readability Analysis */}
        <div className="mb-6">
          <ReadabilityCard stats={stats} />
        </div>

        {/* Keyword Density */}
        <div className="mb-6">
          <KeywordDensity text={text} />
        </div>

        {/* Footer */}
        <footer className="border-t border-metal/30 mt-16 py-8 text-center text-sm text-galactic">
          Free marketing tools by{' '}
          <a
            href="https://www.dreamhost.com"
            target="_blank"
            rel="noopener"
            className="text-azure hover:text-white transition-colors"
          >
            DreamHost
          </a>
        </footer>
      </div>
    </div>
  )
}
