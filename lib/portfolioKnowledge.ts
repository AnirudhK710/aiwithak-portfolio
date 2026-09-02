import { profileKnowledge } from "@/data/anirudh/profile";
import { educationKnowledge } from "@/data/anirudh/education";
import { skillsKnowledge } from "@/data/anirudh/skills";
import { productsKnowledge } from "@/data/anirudh/products";
import { researchKnowledge } from "@/data/anirudh/research";
import { experienceKnowledge } from "@/data/anirudh/experience";

export const knowledgeSections = {
  profile: profileKnowledge,
  education: educationKnowledge,
  skills: skillsKnowledge,
  products: productsKnowledge,
  research: researchKnowledge,
  experience: experienceKnowledge,
};

export type KnowledgeSection =
  keyof typeof knowledgeSections;

const keywordGroups: Record<
  KnowledgeSection,
  string[]
> = {
  profile: [
    "anirudh",
    "who is",
    "about him",
    "about anirudh",
    "contact",
    "email",
    "phone",
    "portfolio",
    "opportunity",
    "hire",
    "available",
  ],

  education: [
    "education",
    "degree",
    "university",
    "pace",
    "seidenberg",
    "school",
    "course",
    "courses",
    "studied",
    "study",
    "master",
    "masters",
    "computer science",
    "graduated",
    "graduation",
  ],

  skills: [
    "skill",
    "skills",
    "technical",
    "technology",
    "technologies",
    "python",
    "typescript",
    "javascript",
    "llm",
    "rag",
    "agentic",
    "langchain",
    "langgraph",
    "gemini",
    "openai",
    "cloud",
    "vector database",
    "supabase",
    "redis",
  ],

  products: [
    "project",
    "projects",
    "product",
    "products",
    "ethiclens",
    "caffeinated professor",
    "caffeinated",
    "wepos",
    "buildfolio",
    "pathpulse",
    "bigleap",
    "built",
    "building",
    "created",
    "developed",
  ],

  research: [
    "research",
    "paper",
    "papers",
    "publication",
    "publications",
    "ai ethics",
    "responsible ai",
    "fairness",
    "privacy",
    "explainability",
    "governance",
    "human-centered",
    "human centered",
    "ai safety",
    "human oversight",
    "trustworthy ai",
  ],

  experience: [
    "experience",
    "professional",
    "career",
    "role",
    "roles",
    "work experience",
    "engineer",
    "engineering",
    "founder",
    "background",
  ],
};

export function getRelevantKnowledge(
  question: string
) {
  const normalized = question
    .toLowerCase()
    .trim();

  const scores = Object.entries(
    keywordGroups
  ).map(([section, keywords]) => {
    const score = keywords.reduce(
      (total, keyword) => {
        if (normalized.includes(keyword)) {
          return total + 1;
        }

        return total;
      },
      0
    );

    return {
      section: section as KnowledgeSection,
      score,
    };
  });

  const selected = scores
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((item) => item.section);

  if (selected.length === 0) {
    return "";
  }

  /*
   * Always include the basic profile so Gemini
   * knows whose portfolio it is answering about.
   */
  if (!selected.includes("profile")) {
    selected.push("profile");
  }

  return selected
    .map(
      (section) =>
        knowledgeSections[section]
    )
    .join("\n\n---\n\n");
}