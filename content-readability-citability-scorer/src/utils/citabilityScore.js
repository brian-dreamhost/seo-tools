/**
 * AI citability scoring heuristics.
 * Estimates how likely AI systems are to cite this content.
 */

export function scoreCitability(text, analysis, fleschScore) {
  const factors = [];
  let total = 0;

  // 1. Statistics detected (numbers + % or units)
  const statsMatches = text.match(/\b\d+(?:\.\d+)?(?:\s*%|\s*(?:million|billion|thousand|times|x)|\s+(?:percent|people|users|companies|businesses))\b/gi) || [];
  const statsScore = Math.min(20, statsMatches.length * 5);
  total += statsScore;
  factors.push({
    label: 'Statistics & Data',
    score: statsScore,
    max: 20,
    detail: statsMatches.length > 0
      ? `${statsMatches.length} stat${statsMatches.length > 1 ? 's' : ''} found — AI loves concrete numbers.`
      : 'No statistics detected. Add data points, percentages, or numbers to increase citability.',
    met: statsScore > 0,
  });

  // 2. Clear factual claims (short sentences with is/are + noun)
  const factualSentences = analysis.sentences.filter((s) => {
    const wc = (s.match(/\b\w+\b/g) || []).length;
    return wc <= 20 && /\b(is|are|was|were|means|refers to|defined as|helps|allows|enables)\b/i.test(s);
  });
  const factualScore = Math.min(15, factualSentences.length * 5);
  total += factualScore;
  factors.push({
    label: 'Clear Factual Claims',
    score: factualScore,
    max: 15,
    detail: factualSentences.length > 0
      ? `${factualSentences.length} short, clear statement${factualSentences.length > 1 ? 's' : ''} found — ideal for citation snippets.`
      : 'No concise factual statements found. Add "X is Y" or "X means Y" type sentences.',
    met: factualScore > 0,
  });

  // 3. Structured lists
  const listMatches = text.match(/^[\s]*[-•*]\s+.+$/gm) || [];
  const numberedListMatches = text.match(/^[\s]*\d+[.)]\s+.+$/gm) || [];
  const listCount = listMatches.length + numberedListMatches.length;
  const listScore = listCount > 0 ? 10 : 0;
  total += listScore;
  factors.push({
    label: 'Structured Lists',
    score: listScore,
    max: 10,
    detail: listCount > 0
      ? `${listCount} list item${listCount > 1 ? 's' : ''} detected — structured content is highly citable.`
      : 'No lists found. Bullet points or numbered steps make content easier to cite.',
    met: listScore > 0,
  });

  // 4. Optimal word count (300–2000 words)
  const wordCount = analysis.wordCount;
  let wordCountScore = 0;
  let wordCountDetail = '';
  if (wordCount >= 300 && wordCount <= 2000) {
    wordCountScore = 10;
    wordCountDetail = `${wordCount} words — optimal length for AI citation.`;
  } else if (wordCount < 300) {
    wordCountScore = Math.round((wordCount / 300) * 10);
    wordCountDetail = `Only ${wordCount} words — AI prefers 300–2000 words for citations.`;
  } else {
    wordCountScore = 7;
    wordCountDetail = `${wordCount} words — slightly long; AI may prefer more focused excerpts.`;
  }
  total += wordCountScore;
  factors.push({
    label: 'Content Length',
    score: wordCountScore,
    max: 10,
    detail: wordCountDetail,
    met: wordCountScore >= 8,
  });

  // 5. Sentence length (average < 20 words)
  const avgWPS = analysis.avgWordsPerSentence;
  const sentLenScore = avgWPS <= 20 ? 10 : avgWPS <= 25 ? 6 : 3;
  total += sentLenScore;
  factors.push({
    label: 'Sentence Clarity',
    score: sentLenScore,
    max: 10,
    detail: avgWPS <= 20
      ? `Average ${avgWPS.toFixed(1)} words per sentence — concise and clear.`
      : `Average ${avgWPS.toFixed(1)} words per sentence — try to keep sentences under 20 words.`,
    met: sentLenScore >= 8,
  });

  // 6. Question-answer structure
  const questionSentences = analysis.sentences.filter((s) =>
    s.trim().endsWith('?') || /^(how|what|why|when|where|which|who)\b/i.test(s.trim())
  );
  const qaScore = questionSentences.length > 0 ? 10 : 0;
  total += qaScore;
  factors.push({
    label: 'Q&A Structure',
    score: qaScore,
    max: 10,
    detail: questionSentences.length > 0
      ? `${questionSentences.length} question${questionSentences.length > 1 ? 's' : ''} detected — Q&A format is highly citable by AI search.`
      : 'No questions detected. Consider adding "How does X work?" or "What is X?" sections.',
    met: qaScore > 0,
  });

  // 7. Research/authority markers
  const authorityMarkers = text.match(/\b(study|research|according to|found that|data shows|survey|report|experts|scientists|researchers)\b/gi) || [];
  const authorityScore = Math.min(10, authorityMarkers.length * 3);
  total += authorityScore;
  factors.push({
    label: 'Authority Signals',
    score: authorityScore,
    max: 10,
    detail: authorityMarkers.length > 0
      ? `${authorityMarkers.length} authority signal${authorityMarkers.length > 1 ? 's' : ''} found (study, research, etc.) — AI prefers citing authoritative sources.`
      : 'No authority markers found. Phrases like "research shows" or "according to" increase trust.',
    met: authorityScore > 0,
  });

  // 8. Reading ease (40–70 is the AI citation sweet spot)
  let readingEaseScore = 0;
  if (fleschScore >= 40 && fleschScore <= 70) {
    readingEaseScore = 15;
  } else if (fleschScore > 70) {
    readingEaseScore = 10; // Very easy = less authoritative
  } else if (fleschScore >= 25) {
    readingEaseScore = 8;
  } else {
    readingEaseScore = 3;
  }
  total += readingEaseScore;
  factors.push({
    label: 'Reading Level Balance',
    score: readingEaseScore,
    max: 15,
    detail: readingEaseScore >= 15
      ? `Flesch score of ${fleschScore} — in the ideal range (40–70) for AI citation. Not too simple, not too dense.`
      : fleschScore > 70
      ? `Flesch score of ${fleschScore} — content reads as very simple. A slightly denser writing style may appear more authoritative.`
      : `Flesch score of ${fleschScore} — content is dense. Simplify sentences to improve citability.`,
    met: readingEaseScore >= 12,
  });

  return {
    total: Math.min(100, Math.round(total)),
    factors,
  };
}

export function interpretCitabilityScore(score) {
  if (score >= 75) return { label: 'Highly Citable', color: 'turtle', description: 'This content has strong signals for AI citation.' };
  if (score >= 50) return { label: 'Moderately Citable', color: 'tangerine', description: 'Good foundation — a few improvements could boost citability significantly.' };
  return { label: 'Needs Improvement', color: 'coral', description: 'Several key citability factors are missing. Follow the recommendations below.' };
}
