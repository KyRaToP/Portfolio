export type ProjectSlug = "smart-utility" | "task-planner" | "web-event";

export type MediaImage = {
  src: string;
  alt: string;
};

export type CaseStudyContent = {
  overview: string;
  problem: string;
  solution: string;
  role: string;
  architecture?: string;
  workflow?: string[];
  challenges?: string[];
  outcome?: string;
};

export type Project = {
  slug: ProjectSlug;
  order: number;
  featured: boolean;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  caseStudy: CaseStudyContent;
  links: {
    github?: string;
    liveDemo?: string;
  };
  media: {
    icon: string;
    cover: string;
    videoPoster: string;
    screenshots: MediaImage[];
    liveVideo?: string;
    ogImage: string;
  };
};

export type SiteContent = {
  language: "RU" | "EN" | "BOTH";
  fullName: string;
  role: string;
  positioning: string;
  about: string[];
  links: {
    githubProfile: string;
    telegram: string;
    email: string;
    portfolioRepo?: string;
  };
};
