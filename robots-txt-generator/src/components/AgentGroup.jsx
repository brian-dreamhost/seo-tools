import { useState } from 'react';
import { PlusIcon, TrashIcon } from './ui/Icons';
import { RuleRow } from './RuleRow';

const KNOWN_BOTS = [
  '*',
  'Googlebot',
  'Googlebot-Image',
  'Bingbot',
  'Slurp',
  'DuckDuckBot',
  'Baiduspider',
  'YandexBot',
  'GPTBot',
  'OAI-SearchBot',
  'anthropic-ai',
  'ClaudeBot',
  'PerplexityBot',
  'CCBot',
  'Google-Extended',
  'Meta-ExternalAgent',
  'Amazonbot',
  'Applebot',
  'Custom...',
];

export function AgentGroup({ group, onChange, onRemove, canRemove }) {
  const [isCustomAgent, setIsCustomAgent] = useState(false);

  const handleAgentChange = (value) => {
    if (value === 'Custom...') {
      setIsCustomAgent(true);
      onChange({ ...group, agent: '' });
    } else {
      setIsCustomAgent(false);
      onChange({ ...group, agent: value });
    }
  };

  const addRule = () => {
    const newRule = {
      id: Date.now(),
      type: 'Disallow',
      path: '',
    };
    onChange({ ...group, rules: [...group.rules, newRule] });
  };

  const updateRule = (ruleId, updatedRule) => {
    onChange({
      ...group,
      rules: group.rules.map((r) => (r.id === ruleId ? updatedRule : r)),
    });
  };

  const removeRule = (ruleId) => {
    onChange({
      ...group,
      rules: group.rules.filter((r) => r.id !== ruleId),
    });
  };

  return (
    <div className="card-gradient border border-metal/20 rounded-2xl p-5 space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-2 flex-wrap">
            <label className="text-sm font-medium text-cloudy whitespace-nowrap">User-agent:</label>
            {!isCustomAgent ? (
              <select
                value={group.agent}
                onChange={(e) => handleAgentChange(e.target.value)}
                className="flex-1 min-w-40 px-3 py-2 bg-midnight border border-metal/30 rounded-lg text-sm text-white focus:outline-none focus:border-azure focus:ring-1 focus:ring-azure"
                aria-label="User-agent"
              >
                {KNOWN_BOTS.map((bot) => (
                  <option key={bot} value={bot}>{bot}</option>
                ))}
              </select>
            ) : (
              <div className="flex-1 flex gap-2">
                <input
                  type="text"
                  value={group.agent}
                  onChange={(e) => onChange({ ...group, agent: e.target.value })}
                  placeholder="Custom bot name"
                  className="flex-1 px-3 py-2 bg-midnight border border-metal/30 rounded-lg text-sm text-white placeholder-galactic focus:outline-none focus:border-azure focus:ring-1 focus:ring-azure font-mono"
                  autoFocus
                />
                <button
                  onClick={() => { setIsCustomAgent(false); onChange({ ...group, agent: '*' }); }}
                  className="text-xs text-galactic hover:text-cloudy transition-colors px-2"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>

          <div className="space-y-2">
            {group.rules.map((rule) => (
              <RuleRow
                key={rule.id}
                rule={rule}
                onChange={(updated) => updateRule(rule.id, updated)}
                onRemove={() => removeRule(rule.id)}
                canRemove={group.rules.length > 1}
              />
            ))}
          </div>

          <button
            onClick={addRule}
            className="flex items-center gap-1.5 text-sm text-azure hover:text-white transition-colors focus:outline-none focus:underline"
          >
            <PlusIcon className="w-4 h-4" />
            Add rule
          </button>

          <div className="flex items-center gap-2">
            <label className="text-sm text-galactic whitespace-nowrap">Crawl-delay (optional):</label>
            <input
              type="number"
              min="0"
              value={group.crawlDelay}
              onChange={(e) => onChange({ ...group, crawlDelay: e.target.value })}
              placeholder="e.g. 10"
              className="w-24 px-3 py-1.5 bg-midnight border border-metal/30 rounded-lg text-sm text-white placeholder-galactic focus:outline-none focus:border-azure focus:ring-1 focus:ring-azure"
              aria-label="Crawl delay in seconds"
            />
            <span className="text-xs text-galactic">seconds</span>
          </div>
        </div>

        {canRemove && (
          <button
            onClick={onRemove}
            className="p-2 text-galactic hover:text-coral transition-colors focus:outline-none focus:ring-1 focus:ring-coral rounded mt-1"
            aria-label="Remove this user-agent group"
          >
            <TrashIcon className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
