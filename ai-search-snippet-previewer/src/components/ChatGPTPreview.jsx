export function ChatGPTPreview({ answer, title, url }) {
  const domain = url ? (() => { try { return new URL(url).hostname; } catch { return url; } })() : 'yoursite.com';

  return (
    <div className="rounded-2xl overflow-hidden border border-[#e5e5e5] bg-[#f9f9f9] text-[#0d0d0d] shadow-sm">
      {/* ChatGPT Search header */}
      <div className="flex items-center justify-between px-4 pt-4 pb-3 border-b border-[#e5e5e5] bg-white">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-[#19c37d] flex items-center justify-center">
            <span className="text-white text-[9px] font-bold">C</span>
          </div>
          <span className="text-sm font-medium text-[#0d0d0d]">ChatGPT Search</span>
        </div>
        <span className="text-xs text-[#8e8ea0]">Simulated preview</span>
      </div>

      <div className="px-4 py-4 bg-white">
        {/* Answer */}
        <p className="text-sm text-[#0d0d0d] leading-relaxed">
          {answer || 'Add content above to generate a simulated ChatGPT Search preview.'}
        </p>

        {/* Footnote source */}
        {url && (
          <div className="mt-4 pt-3 border-t border-[#e5e5e5]">
            <p className="text-xs text-[#8e8ea0] mb-1.5">Sources</p>
            <div className="flex items-center gap-2 text-xs">
              <span className="w-4 h-4 rounded bg-[#e5e5e5] text-[#0d0d0d] text-[10px] font-medium flex items-center justify-center flex-shrink-0">1</span>
              <span className="text-[#19c37d] hover:underline cursor-pointer truncate">
                {title || 'Your Page Title'} — {domain}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="px-4 py-2.5 bg-[#f9f9f9] border-t border-[#e5e5e5]">
        <p className="text-[10px] text-[#8e8ea0]">⚠ Simulated preview — actual ChatGPT Search results vary based on their web search index and query context.</p>
      </div>
    </div>
  );
}
