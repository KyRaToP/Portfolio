import type { Project } from "./types";

/**
 * Project data — CONTENT_LINKS.md + design_spec.md.
 * Card covers use branding cover.png, not raw screenshots.
 * Media paths use import.meta.env.BASE_URL so GitHub Pages (/Portfolio/)
 * and local root (/) both resolve assets correctly.
 */
export const projects: Project[] = [
  {
    slug: "smart-utility",
    order: 1,
    featured: true,
    title: "Smart Utility",
    category: "Полный стек / Telegram Mini App",
    description:
      "Мини-приложение для учёта коммунальных платежей, показаний счётчиков, расчёта стоимости услуг, истории платежей и автоматических напоминаний через Telegram-бота.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "FastAPI",
      "Python",
      "SQLite",
      "Telegram Bot API",
      "Telegram Mini Apps",
      "Docker",
      "Railway",
    ],
    features: [
      "Full-stack архитектура",
      "Telegram Mini App",
      "Расчёт коммунальных платежей",
      "Показания счётчиков",
      "Учёт оплат и история",
      "Несколько квартир",
      "Напоминания и scheduled tasks",
      "Аутентификация и REST API",
    ],
    caseStudy: {
      overview:
        "Smart Utility — practical full-stack продукт: Telegram Mini App + бот + backend API. Пользователь ведёт квартиры, услуги, показания и видит понятный расчёт без таблиц в Excel.",
      problem:
        "Коммунальные платежи и показания легко теряются между месяцами. Нужен простой инструмент «под рукой» в Telegram: внести данные, получить сумму, сохранить историю и получить напоминание.",
      solution:
        "Собран Telegram Mini App на React/TypeScript, backend на FastAPI + SQLite, бот для напоминаний. Данные привязаны к Telegram-пользователю, расчёты выполняются на сервере, UI заточен под мобильный сценарий.",
      role:
        "Спроектировал и реализовал frontend Mini App, REST API, модель данных, Telegram-интеграцию, сценарии напоминаний и подготовку к deploy.",
      architecture:
        "Клиент (Telegram Mini App) → FastAPI → SQLite. Бот использует тот же backend-контур для уведомлений. Секреты и токены остаются на сервере, frontend получает только необходимые данные сессии.",
      workflow: [
        "Открыть Mini App в Telegram",
        "Выбрать квартиру / услугу",
        "Внести показания",
        "Получить расчёт",
        "Сохранить историю",
        "Получить напоминание от бота",
      ],
      challenges: [
        "Согласовать UX Mini App с ограничениями Telegram WebApp.",
        "Отделить UI от calculation layer, чтобы формулы были прозрачны.",
        "Безопасно работать с Telegram initData без утечки секретов на клиент.",
      ],
      outcome:
        "Рабочий full-stack кейс с реальным UI, API, persistence и automation-напоминаниями — главный technical project портфолио.",
    },
    links: {
      github: "https://github.com/KyRaToP/Smart_Utility",
    },
    media: {
      icon: `${import.meta.env.BASE_URL}icons/projects/smart-utility.png`,
      cover: `${import.meta.env.BASE_URL}images/projects/smart-utility/cover.png`,
      videoPoster: `${import.meta.env.BASE_URL}images/projects/smart-utility/video-poster.png`,
      ogImage: `${import.meta.env.BASE_URL}og/projects/smart-utility.png`,
      liveVideo: `${import.meta.env.BASE_URL}videos/projects/smart-utility/IMG_2879.MP4`,
      // Order follows the Smart Utility live video walkthrough.
      screenshots: [
        {
          src: `${import.meta.env.BASE_URL}images/projects/smart-utility/photo_1_2026-08-23_02-55-37.jpg`,
          alt: "Smart Utility — главный экран",
        },
        {
          src: `${import.meta.env.BASE_URL}images/projects/smart-utility/photo_2_2026-08-23_02-55-37.jpg`,
          alt: "Smart Utility — показания",
        },
        {
          src: `${import.meta.env.BASE_URL}images/projects/smart-utility/photo_4_2026-08-23_02-55-37.jpg`,
          alt: "Smart Utility — расчёт",
        },
        {
          src: `${import.meta.env.BASE_URL}images/projects/smart-utility/photo_4_2026-08-23_03-10-59.jpg`,
          alt: "Smart Utility — история",
        },
        {
          src: `${import.meta.env.BASE_URL}images/projects/smart-utility/photo_3_2026-08-23_02-55-37.jpg`,
          alt: "Smart Utility — статистика",
        },
        {
          src: `${import.meta.env.BASE_URL}images/projects/smart-utility/photo_1_2026-08-23_03-10-59.jpg`,
          alt: "Smart Utility — настройки",
        },
        {
          src: `${import.meta.env.BASE_URL}images/projects/smart-utility/photo_3_2026-08-23_03-10-59.jpg`,
          alt: "Smart Utility — уведомления",
        },
        {
          src: `${import.meta.env.BASE_URL}images/projects/smart-utility/photo_2_2026-08-23_03-10-59.jpg`,
          alt: "Smart Utility — напоминания об оплате",
        },
        {
          src: `${import.meta.env.BASE_URL}images/projects/smart-utility/photo_5_2026-08-23_02-55-37.jpg`,
          alt: "Smart Utility — профиль и квартиры",
        },
        {
          src: `${import.meta.env.BASE_URL}images/projects/smart-utility/photo_7_2026-08-23_02-55-37.jpg`,
          alt: "Smart Utility — напоминания в боте",
        },
        {
          src: `${import.meta.env.BASE_URL}images/projects/smart-utility/photo_9_2026-08-23_02-55-37.jpg`,
          alt: "Smart Utility — очистка базы в боте",
        },
      ],
    },
  },
  {
    slug: "task-planner",
    order: 2,
    featured: false,
    title: "Task Planner",
    category: "Telegram-бот / Автоматизация",
    description:
      "Telegram-бот для управления задачами, планирования, напоминаний и контроля рабочего процесса.",
    technologies: ["Python", "aiogram", "SQLite", "APScheduler", "Telegram Bot API"],
    features: [
      "Управление задачами",
      "Категории",
      "Inline-календарь и выбор времени",
      "Напоминания",
      "Ежедневный и еженедельный дайджест",
      "Постоянные scheduled jobs",
      "Контроль доступа",
    ],
    caseStudy: {
      overview:
        "Task Planner показывает, как собрать полезную автоматизацию прямо в Telegram: задачи, категории, напоминания и дайджесты без отдельного мобильного приложения.",
      problem:
        "Список дел и дедлайны часто живут в разных чатах и заметках. Нужен бот, который принимает задачу, сохраняет её и сам напоминает в нужное время.",
      solution:
        "Бот на aiogram + SQLite + APScheduler. Пользователь создаёт задачи через inline-интерфейс, данные сохраняются, scheduler поднимает jobs и отправляет напоминания / дайджесты.",
      role:
        "Спроектировал сценарии бота, хранение данных, scheduling, access control и пользовательский workflow внутри Telegram.",
      workflow: [
        "Создать задачу",
        "Сохранить в SQLite",
        "Запланировать через APScheduler",
        "Дождаться триггера",
        "Получить напоминание в Telegram",
      ],
      challenges: [
        "Надёжно восстанавливать future jobs после перезапуска процесса.",
        "Сделать inline UX понятным без длинных инструкций.",
        "Изолировать данные пользователя и ограничить доступ.",
      ],
      outcome:
        "Готовый automation-кейс: бот ведёт задачи и сам возвращает пользователя к делу через напоминания и дайджесты.",
    },
    links: {
      github: "https://github.com/KyRaToP/Telegram_bot",
    },
    media: {
      icon: `${import.meta.env.BASE_URL}icons/projects/task-planner.png`,
      cover: `${import.meta.env.BASE_URL}images/projects/task-planner/cover.png`,
      videoPoster: `${import.meta.env.BASE_URL}images/projects/task-planner/video-poster.png`,
      ogImage: `${import.meta.env.BASE_URL}og/projects/task-planner.png`,
      liveVideo: `${import.meta.env.BASE_URL}videos/projects/task-planner/video_2026-08-23_00-44-46.mp4`,
      // Order follows the Task Planner live video walkthrough.
      screenshots: [
        { src: `${import.meta.env.BASE_URL}images/projects/task-planner/1.jpg`, alt: "Task Planner — главное меню" },
        { src: `${import.meta.env.BASE_URL}images/projects/task-planner/3.jpg`, alt: "Task Planner — создание задачи" },
        { src: `${import.meta.env.BASE_URL}images/projects/task-planner/4.jpg`, alt: "Task Planner — категории" },
        { src: `${import.meta.env.BASE_URL}images/projects/task-planner/2.jpg`, alt: "Task Planner — список задач" },
        { src: `${import.meta.env.BASE_URL}images/projects/task-planner/5.jpg`, alt: "Task Planner — история задач" },
        { src: `${import.meta.env.BASE_URL}images/projects/task-planner/6.jpg`, alt: "Task Planner — очистка задач и истории" },
        { src: `${import.meta.env.BASE_URL}images/projects/task-planner/7.jpg`, alt: "Task Planner — дайджест" },
      ],
    },
  },
  {
    slug: "web-event",
    order: 3,
    featured: false,
    title: "Web Event",
    category: "Интерактивный web-опыт",
    description:
      "Современный сайт-приглашение на день рождения ребёнка с интерактивными элементами, информацией о мероприятии и RSVP\u00A0/\u00A0уведомлениями.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "GitHub Pages",
      "Telegram integration",
    ],
    features: [
      "Адаптивный дизайн",
      "Интерактивное приглашение",
      "RSVP-сценарий",
      "Уведомления в Telegram",
      "Защита от злоупотреблений",
    ],
    caseStudy: {
      overview:
        "Web Event — визуальный и практичный web-опыт: красивое приглашение, понятный RSVP и уведомление организатору в Telegram.",
      problem:
        "Обычные приглашения в мессенджере плохо собирают ответы и быстро выглядят хаотично. Нужна отдельная страница события с подтверждением участия.",
      solution:
        "Собран responsive invitation site. Гость открывает страницу, знакомится с деталями, подтверждает участие; serverless endpoint принимает RSVP и отправляет уведомление в Telegram.",
      role:
        "Сделал frontend/UX, RSVP flow, интеграцию с serverless endpoint и Telegram notify, подготовку к статическому publish.",
      workflow: [
        "Открыть приглашение",
        "Изучить детали события",
        "Ввести имя",
        "Подтвердить участие",
        "Получить уведомление в Telegram",
      ],
      challenges: [
        "Сделать mobile-first опыт без перегруза анимациями.",
        "Связать статическую страницу с RSVP endpoint без лишней инфраструктуры.",
        "Добавить anti-abuse меры на публичный RSVP endpoint.",
      ],
      outcome:
        "Готовый interactive web case: от визуала приглашения до рабочего RSVP и Telegram-уведомления.",
    },
    links: {
      github: "https://github.com/KyRaToP/Web_event",
    },
    media: {
      icon: `${import.meta.env.BASE_URL}icons/projects/web-event.png`,
      cover: `${import.meta.env.BASE_URL}images/projects/web-event/cover.png`,
      videoPoster: `${import.meta.env.BASE_URL}images/projects/web-event/video-poster.png`,
      ogImage: `${import.meta.env.BASE_URL}og/projects/web-event.png`,
      liveVideo: `${import.meta.env.BASE_URL}videos/projects/web-event/IMG_2831.MP4`,
      // Order follows the Web Event live video walkthrough.
      screenshots: [
        { src: `${import.meta.env.BASE_URL}images/projects/web-event/1.jpg`, alt: "Web Event — приглашение" },
        { src: `${import.meta.env.BASE_URL}images/projects/web-event/2.jpg`, alt: "Web Event — RSVP и подтверждение" },
        { src: `${import.meta.env.BASE_URL}images/projects/web-event/3.jpg`, alt: "Web Event — уведомление в Telegram" },
      ],
    },
  },
];


export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProject(): Project {
  const featured = projects.find((project) => project.featured);
  return featured ?? projects[0];
}

export function getNonFeaturedProjects(): Project[] {
  return projects.filter((project) => !project.featured);
}
