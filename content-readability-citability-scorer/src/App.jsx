import { useState } from 'react';
import { analyzeText } from './utils/textAnalysis';
import {
  fleschReadingEase,
  fleschKincaidGrade,
  gunningFog,
  interpretFleschScore,
  interpretGrade,
  interpretFog,
} from './utils/readabilityScores';
import { scoreCitability, interpretCitabilityScore } from './utils/citabilityScore';
import { MetricCard, ProgressBar } from './components/MetricCard';
import { SparklesIcon, CheckIcon, XCircleIcon } from './components/ui/Icons';

const SAMPLE_TEXT = `Content marketing is one of the most effective ways to attract and retain customers online. According to the Content Marketing Institute, businesses that blog consistently generate 67% more leads than those that don't.

What makes content truly effective? Great content answers specific questions, uses clear language, and provides actionable advice that readers can apply immediately.

Here are the key elements of high-performing content:

1. A clear headline that promises a specific benefit
2. Statistics and data that back up your claims
3. Short, scannable paragraphs
4. A strong call to action at the end

Research shows that articles between 1,000 and 2,000 words perform best in search results. However, quality matters more than length — every sentence should earn its place.`;

export default function App() {
  const [text, setText] = useState('');
  const [results, setResults] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const wordCount = (text.match(/\b\w+\b/g) || []).length;
  const charCount = text.length;

  const handleAnalyze = () => {
    if (!text.trim() || wordCount < 10) return;
    setIsAnalyzing(true);

    // Use setTimeout to allow UI to update before heavy computation
    setTimeout(() => {
      const analysis = analyzeText(text);
      const { avgWordsPerSentence, avgSyllablesPerWord, complexWords, wordCount: wc } = analysis;

      const flesch = fleschReadingEase(avgWordsPerSentence, avgSyllablesPerWord);
      const fkGrade = fleschKincaidGrade(avgWordsPerSentence, avgSyllablesPerWord);
      const fog = gunningFog(avgWordsPerSentence, complexWords.length / Math.max(wc, 1));

      const fleschInterp = interpretFleschScore(flesch);
      const fogInterp = interpretFog(fog);
      const gradeInterp = interpretGrade(fkGrade);

      const citability = scoreCitability(text, analysis, flesch);
      const citabilityInterp = interpretCitabilityScore(citability.total);

      setResults({
        analysis,
        flesch,
        fkGrade,
        fog,
        fleschInterp,
        fogInterp,
        gradeInterp,
        citability,
        citabilityInterp,
      });
      setIsAnalyzing(false);
    }, 50);
  };

  const handleLoadSample = () => {
    setText(SAMPLE_TEXT);
    setResults(null);
  };

  const handleClear = () => {
    setText('');
    setResults(null);
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
          <span className="text-cloudy">Content Readability & Citability Scorer</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 border border-turtle text-turtle rounded-full px-4 py-2 text-sm font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-turtle" />
            Free SEO Tool
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Content Readability & Citability Scorer
          </h1>
          <p className="text-lg text-cloudy max-w-2xl">
            Analyze your content&apos;s readability and its likelihood of being cited by AI search engines like Perplexity and ChatGPT. Get actionable recommendations to improve both.
          </p>
        </div>

        {/* Input section */}
        <div className="card-gradient border border-metal/20 rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-semibold text-cloudy" htmlFor="content-input">
              Paste your content below
            </label>
            <div className="flex items-center gap-3 text-xs text-galactic">
              <span>{wordCount} words · {charCount} characters</span>
              <button
                onClick={handleLoadSample}
                className="text-azure hover:text-white transition-colors focus:outline-none focus:underline"
              >
                Load sample
              </button>
              {text && (
                <button
                  onClick={handleClear}
                  className="text-galactic hover:text-coral transition-colors focus:outline-none focus:underline"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
          <textarea
            id="content-input"
            value={text}
            onChange={(e) => { setText(e.target.value); setResults(null); }}
            rows={12}
            placeholder="Paste your blog post, article, landing page copy, or any text you want to analyze..."
            className="w-full px-4 py-3 bg-midnight border border-metal/30 rounded-xl text-sm text-white placeholder-galactic focus:outline-none focus:border-azure focus:ring-1 focus:ring-azure resize-y leading-relaxed"
          />
          <div className="flex items-center gap-3 mt-4">
            <button
              onClick={handleAnalyze}
              disabled={wordCount < 10 || isAnalyzing}
              className="px-8 py-3 bg-azure hover:bg-azure-hover disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-azure focus:ring-offset-2 focus:ring-offset-abyss"
            >
              {isAnalyzing ? 'Analyzing...' : 'Analyze Content'}
            </button>
            {wordCount < 10 && text.trim() && (
              <p className="text-xs text-galactic">Need at least 10 words for analysis</p>
            )}
          </div>
        </div>

        {/* Results */}
        {results && (
          <div className="space-y-8 animate-fadeIn">
            {/* Overview row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <MetricCard
                title="Flesch Reading Ease"
                value={results.flesch}
                label="/ 100"
                subtitle={`${results.fleschInterp.label} — ${results.fleschInterp.grade}`}
                color={results.fleschInterp.color}
              />
              <MetricCard
                title="FK Grade Level"
                value={`Grade ${results.fkGrade}`}
                subtitle={results.gradeInterp}
                color={results.fkGrade <= 8 ? 'turtle' : results.fkGrade <= 12 ? 'tangerine' : 'coral'}
              />
              <MetricCard
                title="Gunning Fog Index"
                value={results.fog}
                subtitle={`${results.fogInterp.label} — aim for under 12`}
                color={results.fogInterp.color}
              />
              <MetricCard
                title="AI Citability Score"
                value={results.citability.total}
                label="/ 100"
                subtitle={results.citabilityInterp.label}
                color={results.citabilityInterp.color}
                large
              />
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="card-gradient border border-metal/20 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-white">{results.analysis.wordCount}</div>
                <div className="text-xs text-galactic mt-1">Words</div>
              </div>
              <div className="card-gradient border border-metal/20 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-white">{results.analysis.sentenceCount}</div>
                <div className="text-xs text-galactic mt-1">Sentences</div>
              </div>
              <div className="card-gradient border border-metal/20 rounded-xl p-4 text-center">
                <div className={`text-2xl font-bold ${results.analysis.passiveVoiceCount > 3 ? 'text-tangerine' : 'text-white'}`}>
                  {results.analysis.passiveVoiceCount}
                </div>
                <div className="text-xs text-galactic mt-1">Passive Voice</div>
              </div>
              <div className="card-gradient border border-metal/20 rounded-xl p-4 text-center">
                <div className={`text-2xl font-bold ${results.analysis.longSentences.length > 2 ? 'text-tangerine' : 'text-white'}`}>
                  {results.analysis.longSentences.length}
                </div>
                <div className="text-xs text-galactic mt-1">Long Sentences</div>
              </div>
            </div>

            {/* Two-column: Readability + Citability */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Readability breakdown */}
              <div className="card-gradient border border-metal/20 rounded-2xl p-6 space-y-4">
                <h2 className="text-lg font-semibold text-white">Readability Analysis</h2>

                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-cloudy">Flesch Reading Ease</span>
                      <span className={`text-sm font-semibold text-${results.fleschInterp.color}`}>{results.flesch}</span>
                    </div>
                    <ProgressBar value={results.flesch} max={100} color={results.fleschInterp.color} />
                    <p className="text-xs text-galactic mt-1">Score of 60–70 is ideal for web content.</p>
                  </div>

                  {results.analysis.longSentences.length > 0 && (
                    <div className="mt-4">
                      <h3 className="text-sm font-medium text-tangerine mb-2">
                        Long Sentences ({results.analysis.longSentences.length})
                      </h3>
                      <div className="space-y-2 max-h-40 overflow-y-auto">
                        {results.analysis.longSentences.slice(0, 5).map((s, i) => (
                          <p key={i} className="text-xs text-cloudy bg-tangerine/5 border border-tangerine/20 rounded-lg p-2 leading-relaxed">
                            {s.length > 120 ? s.slice(0, 120) + '…' : s}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  {results.analysis.passiveVoiceCount > 0 && (
                    <div className="p-3 bg-tangerine/5 border border-tangerine/20 rounded-lg">
                      <p className="text-sm text-tangerine font-medium">
                        {results.analysis.passiveVoiceCount} passive voice instance{results.analysis.passiveVoiceCount > 1 ? 's' : ''} detected
                      </p>
                      <p className="text-xs text-cloudy mt-1">
                        Consider rewriting passive constructions (&quot;is done by&quot;) as active voice (&quot;X does Y&quot;) for clarity.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Citability factors */}
              <div className="card-gradient border border-metal/20 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <SparklesIcon className="w-5 h-5 text-prince" />
                  <h2 className="text-lg font-semibold text-white">AI Citability Factors</h2>
                </div>
                <p className="text-xs text-galactic">{results.citabilityInterp.description}</p>

                <div className="space-y-3">
                  {results.citability.factors.map((factor, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          {factor.met ? (
                            <CheckIcon className="w-3.5 h-3.5 text-turtle flex-shrink-0" />
                          ) : (
                            <XCircleIcon className="w-3.5 h-3.5 text-coral flex-shrink-0" />
                          )}
                          <span className="text-sm text-cloudy">{factor.label}</span>
                        </div>
                        <span className="text-xs text-galactic">{factor.score}/{factor.max}</span>
                      </div>
                      <ProgressBar
                        value={factor.score}
                        max={factor.max}
                        color={factor.score === factor.max ? 'turtle' : factor.score > factor.max * 0.5 ? 'tangerine' : 'coral'}
                      />
                      <p className="text-xs text-galactic mt-1 leading-relaxed">{factor.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Prioritized recommendations */}
            <div className="card-gradient border border-metal/20 rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Top Recommendations</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {results.citability.factors
                  .filter((f) => !f.met)
                  .sort((a, b) => (b.max - b.score) - (a.max - a.score))
                  .slice(0, 4)
                  .map((factor, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-midnight border border-metal/20 rounded-xl">
                      <span className="w-6 h-6 rounded-full bg-azure/20 text-azure text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-white mb-1">{factor.label}</p>
                        <p className="text-xs text-cloudy leading-relaxed">{factor.detail}</p>
                        <p className="text-xs text-tangerine mt-1">+{factor.max - factor.score} points available</p>
                      </div>
                    </div>
                  ))}
                {results.citability.factors.filter((f) => !f.met).length === 0 && (
                  <div className="col-span-2 text-center py-6">
                    <CheckIcon className="w-8 h-8 text-turtle mx-auto mb-2" />
                    <p className="text-turtle font-medium">Excellent! All citability factors are met.</p>
                    <p className="text-xs text-galactic mt-1">Your content is well-optimized for AI citation.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-metal/30 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-galactic">
            <p>Content Readability & Citability Scorer — DreamHost Marketing Tools</p>
            <div className="flex items-center gap-4">
              <a href="https://readable.com/readability/flesch-reading-ease-flesch-kincaid-grade-level/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                About Flesch-Kincaid
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
