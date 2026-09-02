const identityTerms = [
  "anirudh",
  "anirudh kolanupaka",
  "he",
  "him",
  "his",
  "this person",
  "this portfolio",
  "portfolio owner",
];

const portfolioTerms = [
  "ethiclens",
  "caffeinated professor",
  "wepos",
  "buildfolio",
  "pathpulse",
  "bigleap",
  "pace",
  "seidenberg",
  "portfolio",
  "project",
  "projects",
  "research",
  "publication",
  "publications",
  "degree",
  "education",
  "skills",
  "experience",
  "background",
  "contact",
];

const greetingTerms = [
  "hi",
  "hello",
  "hey",
  "good morning",
  "good afternoon",
  "good evening",
];

export function isPortfolioQuestion(
  question: string
) {
  const normalized = question
    .toLowerCase()
    .trim();

  if (!normalized) {
    return false;
  }

  /*
   * Allow simple greetings.
   */
  if (
    greetingTerms.some(
      (term) => normalized === term
    )
  ) {
    return true;
  }

  /*
   * Allow questions explicitly referring to
   * Anirudh or his portfolio.
   */
  const referencesAnirudh =
    identityTerms.some((term) =>
      normalized.includes(term)
    );

  /*
   * Allow questions referring to one of
   * Anirudh's known projects/topics.
   */
  const referencesPortfolio =
    portfolioTerms.some((term) =>
      normalized.includes(term)
    );

  return (
    referencesAnirudh ||
    referencesPortfolio
  );
}