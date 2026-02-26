/**
 * Readability score algorithms.
 */

export function fleschReadingEase(avgWordsPerSentence, avgSyllablesPerWord) {
  const score = 206.835 - 1.015 * avgWordsPerSentence - 84.6 * avgSyllablesPerWord;
  return Math.max(0, Math.min(100, Math.round(score * 10) / 10));
}

export function fleschKincaidGrade(avgWordsPerSentence, avgSyllablesPerWord) {
  const grade = 0.39 * avgWordsPerSentence + 11.8 * avgSyllablesPerWord - 15.59;
  return Math.max(0, Math.round(grade * 10) / 10);
}

export function gunningFog(avgWordsPerSentence, complexWordRatio) {
  const fog = 0.4 * (avgWordsPerSentence + 100 * complexWordRatio);
  return Math.max(0, Math.round(fog * 10) / 10);
}

export function interpretFleschScore(score) {
  if (score >= 90) return { label: 'Very Easy', grade: '5th grade', color: 'turtle' };
  if (score >= 80) return { label: 'Easy', grade: '6th grade', color: 'turtle' };
  if (score >= 70) return { label: 'Fairly Easy', grade: '7th grade', color: 'turtle' };
  if (score >= 60) return { label: 'Standard', grade: '8th–9th grade', color: 'azure' };
  if (score >= 50) return { label: 'Fairly Difficult', grade: 'High school', color: 'tangerine' };
  if (score >= 30) return { label: 'Difficult', grade: 'College', color: 'coral' };
  return { label: 'Very Confusing', grade: 'College graduate', color: 'coral' };
}

export function interpretGrade(grade) {
  if (grade <= 6) return 'Accessible to most adults — great for general audiences.';
  if (grade <= 8) return 'Accessible to most adults — ideal for web content.';
  if (grade <= 10) return 'Accessible to high school readers and above.';
  if (grade <= 12) return 'Best suited to college-educated readers.';
  return 'Dense — consider simplifying for broader audiences.';
}

export function interpretFog(fog) {
  if (fog <= 8) return { label: 'Easy', color: 'turtle' };
  if (fog <= 12) return { label: 'Acceptable', color: 'azure' };
  if (fog <= 16) return { label: 'Difficult', color: 'tangerine' };
  return { label: 'Very Dense', color: 'coral' };
}
