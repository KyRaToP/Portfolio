import type { SiteContent } from "./types";

/** Default SEO copy for Home and shared social previews. */
export const siteSeo = {
  homeTitle: "Roman Smolin — Web Developer",
  homeDescription:
    "Roman Smolin — Web Developer. Сайты, web-приложения и Telegram-решения.",
  projectsTitle: "Проекты — Roman Smolin",
  projectsDescription:
    "Реальные проекты: Telegram Mini App, automation и интерактивный web-опыт.",
  defaultOgImage: `${import.meta.env.BASE_URL}og/home.png`,
} as const;

/** Content source: CONTENT_LINKS.md (do not invent URLs). */
export const siteContent: SiteContent = {
  language: "RU",
  fullName: "Roman Smolin",
  role: "Веб-разработчик",
  positioning:
    "Есть задача — давайте сначала разберёмся, как её лучше решить",
  about: [
    "Я Web Developer и создаю цифровые продукты под конкретные задачи — от небольших сайтов до Telegram-ботов, Mini Apps и web-приложений.",
    "Мне нравится процесс, когда из идеи или проблемы постепенно получается понятный и работающий инструмент.",
    "В работе использую AI и AI-агентов как часть своего рабочего процесса. Они помогают быстрее исследовать технологии, работать с документацией, создавать прототипы и автоматизировать рутинные задачи. При этом я сам отвечаю за технические решения, структуру проекта, логику, интеграции, тестирование и конечный результат.",
    "Мне интересны разные задачи: Web, Telegram, автоматизация, данные, отчеты, API и работа с текстом.",
    "Если у вас есть готовое ТЗ — отлично. Если пока есть только идея и вы не знаете, как её лучше реализовать, её тоже можно обсудить.",
  ],
  links: {
    githubProfile: "https://github.com/KyRaToP",
    telegram: "https://t.me/b1ack_r0man",
    // Plain address only — mailto: is built in UI via toMailto()
    email: "smolin_01@mail.ru",
    // Empty repo without commits may 404 until first push.
    portfolioRepo: "https://github.com/KyRaToP/Portfolio",
  },
};

export const services = [
  {
    id: "websites",
    title: "Сайты",
    description: "Современные адаптивные сайты и landing pages.",
  },
  {
    id: "web-apps",
    title: "Web-приложения",
    description: "Интерактивные dashboard, tools и business-приложения.",
  },
  {
    id: "telegram",
    title: "Telegram-решения",
    description: "Telegram-боты и Mini Apps.",
  },
  {
    id: "automation",
    title: "Автоматизация / Backend",
    description: "API, интеграции, базы данных и automation workflows.",
  },
] as const;

export const techStack = {
  Frontend: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
  Backend: ["Python", "FastAPI"],
  Данные: ["SQLite", "PostgreSQL"],
  Telegram: ["Telegram Bot API", "Telegram Mini Apps"],
  Инфраструктура: [
    "Git",
    "GitHub",
    "Docker",
    "Railway",
  ],
} as const;
