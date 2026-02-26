/**
 * Content analysis for AI citability — extract top sentences, key topics, and Q&A structure.
 */

const STOPWORDS = new Set([
  'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
  'of', 'with', 'by', 'from', 'is', 'are', 'was', 'were', 'be', 'been',
  'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
  'should', 'may', 'might', 'shall', 'can', 'this', 'that', 'these',
  'those', 'it', 'its', 'they', 'their', 'we', 'our', 'you', 'your',
  'he', 'she', 'his', 'her', 'i', 'my', 'me', 'as', 'if', 'not',
  'more', 'most', 'also', 'into', 'than', 'then', 'so', 'up', 'out',
  'about', 'which', 'what', 'how', 'when', 'where', 'who', 'there',
]);

export function parseSentences(text) {
  return text
    .replace(/([.?!])\s+/g, '$1\n')
    .split('\n')
    .map((s) => s.trim())
    .filter((s) => s.length > 20 && /[a-zA-Z]/.test(s));
}

function scoreSentence(sentence) {
  const words = (sentence.match(/\b\w+\b/g) || []).length;
  let score = 0;

  // Numbers = likely contains data/stats
  if (/\d+/.test(sentence)) score += 3;
  // "Is/are" statements = factual
  if (/\b(is|are|means|allows|helps|enables|refers to)\b/i.test(sentence)) score += 2;
  // Transition words
  if (/\b(however|therefore|because|for example|specifically|importantly)\b/i.test(sentence)) score += 1;
  // Authority markers
  if (/\b(study|research|according to|found|shows|data)\b/i.test(sentence)) score += 2;
  // Penalty for very long sentences
  if (words > 35) score -= 2;
  // Penalty for very short sentences
  if (words < 8) score -= 1;

  return score;
}

export function extractTopSentences(text, count = 3) {
  const sentences = parseSentences(text);
  const scored = sentences.map((s) => ({ text: s, score: scoreSentence(s) }));
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, count).map((s) => s.text);
}

export function extractKeyTopic(text) {
  const words = (text.toLowerCase().match(/\b[a-z]{4,}\b/g) || [])
    .filter((w) => !STOPWORDS.has(w));

  const freq = {};
  words.forEach((w) => { freq[w] = (freq[w] || 0) + 1; });

  const sorted = Object.entries(freq)
    .filter(([, count]) => count >= 2)
    .sort(([, a], [, b]) => b - a);

  if (sorted.length === 0) return null;
  return sorted[0][0];
}

export function extractQuestions(text) {
  const sentences = parseSentences(text);
  return sentences.filter((s) =>
    s.trim().endsWith('?') || /^(how|what|why|when|where|which|who)\b/i.test(s.trim())
  );
}

export function generateAnswer(topSentences, maxChars = 300) {
  let answer = topSentences.join(' ');
  if (answer.length > maxChars) {
    answer = answer.slice(0, maxChars).replace(/\s+\S*$/, '') + '…';
  }
  return answer;
}

export function countSyllables(word) {
  word = word.toLowerCase().replace(/[^a-z]/g, '');
  if (word.length <= 3) return 1;
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
  const matches = word.match(/[aeiouy]{1,2}/g);
  return matches ? matches.length : 1;
}

export function fleschScore(text) {
  const words = (text.match(/\b[a-zA-Z]+\b/g) || []);
  const sentences = parseSentences(text);
  if (words.length === 0 || sentences.length === 0) return 50;
  const syllables = words.reduce((sum, w) => sum + countSyllables(w), 0);
  const score = 206.835 - 1.015 * (words.length / sentences.length) - 84.6 * (syllables / words.length);
  return Math.max(0, Math.min(100, Math.round(score)));
}

export function analyzeForCitability(text) {
  const topSentences = extractTopSentences(text, 3);
  const keyTopic = extractKeyTopic(text);
  const questions = extractQuestions(text);
  const answer = generateAnswer(topSentences);
  const wordCount = (text.match(/\b\w+\b/g) || []).length;
  const flesch = fleschScore(text);

  // Simple citability score
  let score = 0;
  const statsMatches = (text.match(/\b\d+(?:\.\d+)?%|\b\d+\s+(?:million|billion|thousand)\b/gi) || []);
  score += Math.min(20, statsMatches.length * 5);
  const listMatches = (text.match(/^[\s]*[-•*]\s+.+$/gm) || []).length + (text.match(/^\d+[.)]\s+/gm) || []).length;
  score += listMatches > 0 ? 10 : 0;
  score += questions.length > 0 ? 15 : 0;
  if (wordCount >= 300 && wordCount <= 2000) score += 10;
  const authorityMarkers = (text.match(/\b(study|research|according to|found that|data shows)\b/gi) || []).length;
  score += Math.min(15, authorityMarkers * 5);
  if (flesch >= 40 && flesch <= 70) score += 15; else if (flesch > 70) score += 10; else score += 5;
  if (topSentences.length > 0) score += 15;

  return {
    topSentences,
    keyTopic,
    questions,
    answer,
    wordCount,
    flesch,
    score: Math.min(100, Math.round(score)),
  };
}
