export function GoogleAIOPreview({ answer, sources, title, url }) {
  const domain = url ? (() => { try { return new URL(url).hostname; } catch { return url; } })() : 'yoursite.com';

  return (
    <div className="rounded-2xl overflow-hidden border border-[#dadce0] bg-white text-[#202124] shadow-sm">
      {/* Google AI Overview header */}
      <div className="flex items-center gap-2 px-4 pt-4 pb-3 border-b border-[#dadce0]">
        <div className="flex items-center gap-1.5">
          {/* Google G logo approximation */}
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#4285F4] via-[#EA4335] to-[#FBBC05] flex items-center justify-center">
            <span className="text-white text-[9px] font-bold">G</span>
          </div>
          <span className="text-sm font-medium text-[#202124]">AI Overview</span>
        </div>
        <span className="ml-auto text-xs text-[#5f6368]">Simulated preview</span>
      </div>

      <div className="px-4 py-4">
        {/* Answer text */}
        <p className="text-sm text-[#202124] leading-relaxed mb-4">
          {answer || 'Add content above to generate a simulated AI Overview preview.'}
        </p>

        {/* Source tile */}
        {url && (
          <div className="mt-3">
            <p className="text-xs text-[#5f6368] mb-2">Sources</p>
            <div className="flex items-center gap-2 p-2.5 border border-[#dadce0] rounded-xl hover:bg-[#f8f9fa] transition-colors cursor-pointer w-fit max-w-xs">
              <div className="w-6 h-6 rounded bg-[#f1f3f4] flex items-center justify-center flex-shrink-0">
                <span className="text-[10px] font-bold text-[#5f6368]">
                  {domain.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-[#202124] truncate">
                  {title || 'Your Page Title'}
                </p>
                <p className="text-xs text-[#5f6368] truncate">{domain}</p>
              </div>
            </div>
          </div>
        )}

        {sources && sources.length > 0 && (
          <div className="mt-3 space-y-1">
            {sources.map((s, i) => (
              <p key={i} className="text-xs text-[#1a0dab] hover:underline cursor-pointer">
                {i + 1}. {s.length > 80 ? s.slice(0, 80) + '…' : s}
              </p>
            ))}
          </div>
        )}
      </div>

      <div className="px-4 pb-3">
        <p className="text-[10px] text-[#5f6368]">⚠ Simulated preview — actual AI Overview results vary based on query, location, and Google&apos;s algorithms.</p>
      </div>
    </div>
  );
}
