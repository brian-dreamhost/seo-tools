/**
 * Core text analysis utilities.
 */

export function countSyllables(word) {
  word = word.toLowerCase().replace(/[^a-z]/g, '');
  if (word.length <= 3) return 1;
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
  word = word.replace(/^y/, '');
  const matches = word.match(/[aeiouy]{1,2}/g);
  return matches ? matches.length : 1;
}

export function parseSentences(text) {
  // Split on sentence-ending punctuation, keeping multi-char abbreviations intact
  const raw = text
    .replace(/([.?!])\s+/g, '$1\n')
    .split('\n')
    .map((s) => s.trim())
    .filter((s) => s.length > 0 && /[a-zA-Z]/.test(s));
  return raw;
}

export function parseWords(text) {
  return text.match(/\b[a-zA-Z']+\b/g) || [];
}

export function isComplexWord(word) {
  const syllables = countSyllables(word);
  if (syllables < 3) return false;
  // Exclude common multi-syllable suffixes that don't indicate complexity
  if (/(?:ing|es|ed|ly)$/i.test(word)) return false;
  return true;
}

export function detectPassiveVoice(text) {
  const regex = /\b(was|were|is|are|been|being|be)\s+\w+ed\b/gi;
  const matches = text.match(regex) || [];
  return matches.length;
}

export function detectLongSentences(sentences, threshold = 25) {
  return sentences.filter((s) => {
    const wordCount = (s.match(/\b\w+\b/g) || []).length;
    return wordCount > threshold;
  });
}

export function analyzeText(text) {
  const sentences = parseSentences(text);
  const words = parseWords(text);
  const totalSyllables = words.reduce((sum, w) => sum + countSyllables(w), 0);
  const complexWords = words.filter(isComplexWord);
  const passiveVoiceCount = detectPassiveVoice(text);
  const longSentences = detectLongSentences(sentences);

  const wordCount = words.length;
  const sentenceCount = Math.max(sentences.length, 1);
  const avgWordsPerSentence = wordCount / sentenceCount;
  const avgSyllablesPerWord = totalSyllables / Math.max(wordCount, 1);

  return {
    sentences,
    words,
    wordCount,
    sentenceCount,
    totalSyllables,
    complexWords,
    passiveVoiceCount,
    longSentences,
    avgWordsPerSentence,
    avgSyllablesPerWord,
  };
}
