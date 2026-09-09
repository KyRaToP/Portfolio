# CONTENT_LINKS.md

## Назначение

Этот файл содержит контент и внешние ссылки для сайта-портфолио.

### Принцип

- **GitHub** — единственная обязательная внешняя ссылка для каждого проекта (кнопка **View on GitHub**).
- **Screenshots** и **Live Video** — локальные материалы внутри Case Study страницы; отдельные внешние URL на них **не** добавляем.
- **Live Demo URL** — не используем, если нет отдельного публичного URL продукта (или явно `none`).
- **Branding assets** (icons, OG, covers, video posters) — в `public/icons/`, `public/og/`, `public/images/...`.
- **Карточки проектов** используют **cover.png / icons**, а не raw screenshots.
- **Screenshots** (jpg) — только внутри Case Study gallery.
- **Live videos** — в `public/videos/projects/`.
- Cursor **не придумывает** GitHub URL. Если ссылка неизвестна — оставить placeholder.

---

## 0. Site & contact


| Field              | Value                                                         |
| ------------------ | ------------------------------------------------------------- |
| Site language      | RU                                                            |
| Full name          | Roman Smolin                                                  |
| Role               | Web Developer                                                 |
| Positioning (Hero) | Есть задача — давайте сначала разберёмся, как её лучше решить |
| GitHub profile     | [https://github.com/KyRaToP](https://github.com/KyRaToP)      |
| Telegram (contact) | [https://t.me/b1ack_r0man](https://t.me/b1ack_r0man)          |
| Email (contact)    | [gopkalo_01@mail.ru](mailto:gopkalo_01@mail.ru)               |


> Telegram URL без `@` в пути: правильно `https://t.me/b1ack_r0man`, не `t.me/@...`.

### About (short, optional)

```
Я Web Developer и создаю цифровые продукты под конкретные задачи — от небольших сайтов до Telegram-ботов, Mini Apps и web-приложений.

Мне нравится процесс, когда из идеи или проблемы постепенно получается понятный и работающий инструмент.

В работе использую AI и AI-агентов как часть своего рабочего процесса. Они помогают быстрее исследовать технологии, работать с документацией, создавать прототипы и автоматизировать рутинные задачи. При этом я сам отвечаю за технические решения, структуру проекта, логику, интеграции, тестирование и конечный результат.

Мне интересны разные задачи: Web, Telegram, автоматизация, данные, отчеты, API и работа с текстом.

Если у вас есть готовое ТЗ — отлично. Если пока есть только идея и вы не знаете, как её лучше реализовать, её тоже можно обсудить
```

---

## 1. Portfolio (сайт)

**Название:** Roman Smolin — Web Developer

**GitHub (репозиторий самого портфолио):**  
`https://github.com/KyRaToP/Portfolio`

> Проверка 2026-08-26: публичный URL сейчас **404**. Если repo ещё не создан / private — поставьте `none` или сделайте repo public.

**Branding assets (в архитектуре** `public/`**):**

```text
public/icons/favicon.png
public/og/home.png
public/images/portfolio-video-poster.png
```

---

## 2. Smart Utility

**Название:** Smart Utility

**Тип / Category:** Full-Stack / Telegram Mini App

**Описание:**  
Мини-приложение для учёта коммунальных платежей, показаний счётчиков, расчёта стоимости услуг, истории платежей и автоматических напоминаний через Telegram-бота.

**GitHub:**  
`https://github.com/KyRaToP/Smart_Utility`  

> Проверено: публичный repo доступен (200).

**Live Demo URL:** `none`

**Branding / card (используем иконки и cover, не screenshots):**

```text
public/icons/projects/smart-utility.png
public/og/projects/smart-utility.png
public/images/projects/smart-utility/cover.png
public/images/projects/smart-utility/video-poster.png
```

**Case Study media:**

```text
public/images/projects/smart-utility/*.jpg   ← gallery screenshots
public/videos/projects/smart-utility/IMG_2879.MP4
```

**Cover карточки:** `public/images/projects/smart-utility/cover.png`  
**Icon:** `public/icons/projects/smart-utility.png`

---

## 3. Task Planner

**Название:** Task Planner

**Тип / Category:** Telegram Bot / Automation

**Описание:**  
Telegram-бот для управления задачами, планирования, напоминаний и контроля рабочего процесса.

**GitHub:**  
`https://github.com/KyRaToP/Telegram_bot`  

> Проверка 2026-08-26: публичный URL сейчас **404**. Среди public repos KyRaToP этот name не найден. Уточните верный URL или сделайте repo public.

**Live Demo URL:** `none`

**Branding / card:**

```text
public/icons/projects/task-planner.png
public/og/projects/task-planner.png
public/images/projects/task-planner/cover.png
public/images/projects/task-planner/video-poster.png
```

**Case Study media:**

```text
public/images/projects/task-planner/*.jpg
public/videos/projects/task-planner/video_2026-08-23_00-44-46.mp4
```

**Cover карточки:** `public/images/projects/task-planner/cover.png`  
**Icon:** `public/icons/projects/task-planner.png`

---

## 4. Web Event

**Название:** Web Event

**Тип / Category:** Interactive Web Experience

**Описание:**  
Современный сайт-приглашение на день рождения ребёнка с интерактивными элементами, информацией о мероприятии и RSVP / уведомлениями.

**GitHub:**  
`https://github.com/KyRaToP/Web_event`  

> Проверено: публичный repo доступен (200).

**Live Demo URL:** `none`  

> Если есть публичный URL приглашения — замените на реальный HTTPS URL.

**Branding / card:**

```text
public/icons/projects/web-event.png
public/og/projects/web-event.png
public/images/projects/web-event/cover.png
public/images/projects/web-event/video-poster.png
```

**Case Study media:**

```text
public/images/projects/web-event/*.jpg
public/videos/projects/web-event/IMG_2831.MP4
```

**Cover карточки:** `public/images/projects/web-event/cover.png`  
**Icon:** `public/icons/projects/web-event.png`

---

# GitHub Links — Quick Reference


| Project                    | GitHub                                                 |
| -------------------------- | ------------------------------------------------------ |
| Portfolio site             | `https://github.com/KyRaToP/Portfolio` (сейчас 404)    |
| Smart Utility              | `https://github.com/KyRaToP/Smart_Utility` (OK)        |
| Task Planner               | `https://github.com/KyRaToP/Telegram_bot` (сейчас 404) |
| Web Event                  | `https://github.com/KyRaToP/Web_event` (OK)            |
| Profile (Header / Contact) | `https://github.com/KyRaToP` (OK)                      |


---

# Правила использования в интерфейсе

## Project Card

Кнопки на карточке:

- **View Case Study** → `/projects/<slug>`
- **View on GitHub** → внешний GitHub repository

Не добавлять на карточку отдельные кнопки:

- Live Demo (пока URL = `none`)
- Screenshots (как внешняя ссылка)
- Live Video (как внешняя ссылка)

Screenshots и Live video показываются **внутри** Case Study страницы.

## Case Study page (не modal)

Route:

- `/projects/smart-utility`
- `/projects/task-planner`
- `/projects/web-event`

На странице:

1. Название, category, описание
2. Key features / technologies
3. Screenshot gallery (jpg в `public/images/projects/<slug>/`)
4. Live video + `video-poster.png`
5. Кнопка **View on GitHub**

Карточка / Featured используют `cover.png` и `icons/projects/...`, **не** screenshots.

---

# Assets overview (текущая архитектура)

```text
public/
├── icons/
│   ├── favicon.png                      ← сайт (RG)
│   └── projects/
│       ├── smart-utility.png
│       ├── task-planner.png
│       └── web-event.png
├── og/
│   ├── home.png                         ← Open Graph главной
│   └── projects/
│       ├── smart-utility.png
│       ├── task-planner.png
│       └── web-event.png
├── images/
│   ├── portfolio-video-poster.png
│   └── projects/
│       ├── smart-utility/
│       │   ├── cover.png                ← карточка / Featured
│       │   ├── video-poster.png
│       │   └── *.jpg                    ← gallery only
│       ├── task-planner/
│       │   ├── cover.png
│       │   ├── video-poster.png
│       │   └── *.jpg
│       └── web-event/
│           ├── cover.png
│           ├── video-poster.png
│           └── *.jpg
└── videos/
    └── projects/
        ├── smart-utility/
        ├── task-planner/
        └── web-event/
```

Исходник `portfolio_assets_4K/` удалён после переноса в `public/`.

### Исходные размеры (нужна web-оптимизация позже)


| Тип            | Размер    | Куда легло                           |
| -------------- | --------- | ------------------------------------ |
| Favicon / icon | 2048×2048 | `public/icons/...`                   |
| OG / cover     | 3840×2016 | `public/og/...` + `cover.png`        |
| Video Poster   | 3840×2160 | `public/images/.../video-poster.png` |


---

# Before Launch Checklist

- [x] Заполнить **Site language** (RU)
- [x] Заполнить **GitHub profile**, **Telegram**, **Email**
- [x] Smart Utility GitHub (публичный OK)
- [x] Web Event GitHub (публичный OK)
- [ ] Portfolio GitHub — URL сейчас 404 (repo ещё нет или private) → `none` или создать/открыть
- [ ] На этапе SEO: оптимизировать 4K PNG под web
- [ ] Проверить favicon, OG, cover, video poster на desktop + mobile
- [ ] Убедиться, что на сайте нет битых GitHub-ссылок

---

# Important

- Не класть сюда токены, пароли, API keys, значения из `.env`.
- Не выдумывать GitHub URL.
- Если ссылка неизвестна — оставить `[GITHUB_..._URL]` и сообщить.

