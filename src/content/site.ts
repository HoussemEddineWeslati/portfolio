// Facts that do not depend on the language.
export const site = {
  name: "Houssem Eddine Weslati",
  shortName: "Houssem Weslati",
  url: "https://houssemweslati.com",
  email: "houssemeddine.weslati@gmail.com",
  linkedin: "https://www.linkedin.com/in/houssemeddineweslati",
  github: "https://github.com/HoussemEddineWeslati",
  location: "Tunis, Tunisia",
  testudoUrl: "https://testudo-pro.com/",
  testudoAddress: "https://app.testudo-pro.com",
} as const;

export type Lang = "en" | "fr";

/** The same page in the other language. */
export const paths = {
  home: { en: "/", fr: "/fr" },
  testudo: { en: "/work/testudo", fr: "/fr/work/testudo" },
  voice: { en: "/work/voice-assistant", fr: "/fr/work/voice-assistant" },
  agent: { en: "/work/voice-ordering-agent", fr: "/fr/work/voice-ordering-agent" },
  platform: { en: "/work/data-migration-platform", fr: "/fr/work/data-migration-platform" },
} as const;

export const stack = [
  { key: "front", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Query"] },
  { key: "back", items: ["NestJS", "Node.js", "Python", "FastAPI", "PostgreSQL", "MongoDB", "REST APIs", "WebSockets"] },
  { key: "ai", items: ["OpenAI", "Mistral", "RAG", "Function calling", "AI agents", "Voice (ElevenLabs)"] },
  { key: "delivery", items: ["Docker", "Traefik", "Linux VPS", "Git", "Jest", "Playwright", "Azure Data Factory", "Databricks"] },
] as const;
