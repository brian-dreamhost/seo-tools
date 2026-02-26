import { useState, useCallback } from 'react';
import { ClipboardIcon, DownloadIcon, CheckIcon } from './ui/Icons';
import { Toast } from './ui/Toast';

export function LivePreview({ content }) {
  const [toastVisible, setToastVisible] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(content).then(() => {
      setToastVisible(true);
    });
  }, [content]);

  const handleDownload = useCallback(() => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'robots.txt';
    a.click();
    URL.revokeObjectURL(url);
  }, [content]);

  const hideToast = useCallback(() => setToastVisible(false), []);

  const lineCount = content.split('\n').length;

  return (
    <div className="card-gradient border border-metal/20 rounded-2xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-metal/20">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-coral" />
          <div className="w-2.5 h-2.5 rounded-full bg-tangerine" />
          <div className="w-2.5 h-2.5 rounded-full bg-turtle" />
          <span className="ml-2 text-sm text-galactic font-mono">robots.txt</span>
          <span className="text-xs text-metal">— {lineCount} lines</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-galactic hover:text-white border border-metal/30 hover:border-metal/60 rounded-lg transition-colors focus:outline-none focus:ring-1 focus:ring-azure"
            aria-label="Copy to clipboard"
          >
            <ClipboardIcon className="w-4 h-4" />
            Copy
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-azure hover:bg-azure-hover text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-azure focus:ring-offset-2 focus:ring-offset-abyss"
            aria-label="Download robots.txt"
          >
            <DownloadIcon className="w-4 h-4" />
            Download
          </button>
        </div>
      </div>
      <div className="p-4 overflow-auto max-h-96">
        {content ? (
          <pre className="text-sm font-mono text-cloudy whitespace-pre leading-relaxed">
            {content.split('\n').map((line, i) => (
              <div key={i} className="flex">
                <span className="w-8 text-right pr-3 text-metal select-none flex-shrink-0">{i + 1}</span>
                <span className={
                  line.startsWith('User-agent') ? 'text-azure' :
                  line.startsWith('Allow') ? 'text-turtle' :
                  line.startsWith('Disallow') ? 'text-coral' :
                  line.startsWith('Sitemap') ? 'text-prince' :
                  line.startsWith('Crawl-delay') ? 'text-tangerine' :
                  line.startsWith('#') ? 'text-galactic italic' :
                  'text-cloudy'
                }>{line || ' '}</span>
              </div>
            ))}
          </pre>
        ) : (
          <p className="text-galactic text-sm text-center py-8">Configure a user-agent group above to generate your robots.txt</p>
        )}
      </div>
      <Toast message="Copied to clipboard!" isVisible={toastVisible} onHide={hideToast} />
    </div>
  );
}
