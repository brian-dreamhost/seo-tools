export function PerplexityPreview({ answer, sources, title, url }) {
  const domain = url ? (() => { try { return new URL(url).hostname; } catch { return url; } })() : 'yoursite.com';

  const sentences = answer ? answer.split(/(?<=[.!?])\s+/) : [];
  const withCitations = sentences.map((s, i) => (
    <span key={i}>{s} {i === 0 && sources?.length > 0 && <sup className="text-[#20808d] text-[10px] cursor-pointer">[1]</sup>} </span>
  ));

  return (
    <div className="rounded-2xl overflow-hidden border border-[#2a2a2a] bg-[#1c1c1c] text-white shadow-sm">
      {/* Perplexity header */}
      <div className="flex items-center justify-between px-4 pt-4 pb-3 border-b border-[#2a2a2a]">
        <div className="flex items-center gap-2">
          {/* Perplexity logo approximation */}
          <div className="w-5 h-5 rounded bg-[#20808d] flex items-center justify-center">
            <span className="text-white text-[9px] font-bold">P</span>
          </div>
          <span className="text-sm font-medium text-white">Perplexity</span>
        </div>
        <span className="text-xs text-[#666]">Simulated preview</span>
      </div>

      {/* Sources bar */}
      {url && (
        <div className="px-4 py-2.5 border-b border-[#2a2a2a] bg-[#161616]">
          <p className="text-[10px] text-[#888] mb-1.5 uppercase tracking-wider">Sources</p>
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-1.5 px-2 py-1 bg-[#2a2a2a] rounded-lg">
              <div className="w-3.5 h-3.5 rounded bg-[#20808d] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[7px] font-bold">{domain.charAt(0).toUpperCase()}</span>
              </div>
              <span className="text-xs text-[#ccc] truncate max-w-[120px]">{domain}</span>
              <span className="text-[10px] text-[#20808d]">1</span>
            </div>
          </div>
        </div>
      )}

      {/* Answer */}
      <div className="px-4 py-4">
        <p className="text-sm text-[#e0e0e0] leading-relaxed">
          {answer ? withCitations : 'Add content above to generate a simulated Perplexity preview.'}
        </p>

        {url && (
          <div className="mt-4 pt-3 border-t border-[#2a2a2a]">
            <p className="text-[10px] text-[#888] mb-1.5">Related from source</p>
            <p className="text-xs text-[#20808d] hover:underline cursor-pointer">
              {title || 'Your Page Title'} — {domain}
            </p>
          </div>
        )}
      </div>

      <div className="px-4 pb-3">
        <p className="text-[10px] text-[#555]">⚠ Simulated preview — actual Perplexity results vary based on their index and query.</p>
      </div>
    </div>
  );
}
