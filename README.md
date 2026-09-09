# Roman Smolin — Portfolio

Static personal portfolio website for **Roman Smolin** (Web Developer). It presents selected work, case studies, and contact channels. It is **not** a SaaS product, payment app, Telegram bot, or backend API.

[English](#english) · [Русский](#русский)

---

<a id="english"></a>

## English

### For the customer

#### What is this

A **public** marketing and portfolio site. Visitors browse projects (Smart Utility, Task Planner, Web Event), open case studies with screenshots and demo videos, and contact the developer via email, Telegram, or GitHub.

There is **no application scheduler**. Dates and times shown on the site (for example in the footer year) follow **Moscow time (MSK, UTC+3)** where a clock is relevant.

#### How to use

1. Open the website home page.
2. Browse **Projects** / case studies; watch embedded demos if needed.
3. Use **Contacts** (email, Telegram, GitHub) to start a discussion.

#### Production URL


| Item         | Value                                                              |
| ------------ | ------------------------------------------------------------------ |
| Website      | [https://portfolio-8wn.pages.dev](https://portfolio-8wn.pages.dev) |
| Telegram bot | **none** (contact link only: see site Contacts)                    |
| Other        | Source repo placeholder: `https://github.com/KyRaToP/Portfolio`    |


#### Core functions

- Home: positioning, featured work, services, tech stack, about, contacts
- Projects list and per-project case studies (overview, screenshots, live video)
- External links to GitHub repositories and contact channels
- Responsive layout for desktop and mobile

#### Security

**Public** static site. No user accounts, no allowlist, no server-side tokens in this product. Do not commit secrets to Git. If a future host token or deploy key might have leaked: **rotate** it and stop using the old value. Details: [`docs/SECURITY.md`](docs/SECURITY.md).

### For the developer

#### Architecture

SPA built with React + TypeScript + Vite. Static assets live in repo-root `public/`. No backend process for the portfolio itself. Details: [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

#### Tech Stack


| Layer  | Stack                                                                        |
| ------ | ---------------------------------------------------------------------------- |
| UI     | React 19, TypeScript, Vite 7, React Router 7                                 |
| API    | **none**                                                                     |
| Bot    | **none**                                                                     |
| Data   | **none** (content in TypeScript modules under `frontend/src/data/`)          |
| Deploy | Static host (e.g. GitHub Pages / Cloudflare Pages / Netlify) — **No Docker** |


#### Project Structure

```text
Portfolio/
  frontend/          # Vite + React app
  public/            # icons, images, videos, og, robots.txt
  docs/              # architecture, deploy, security, …
  README.md
  CONTENT_LINKS.md   # content source for links and copy
  design_spec.md     # design source of truth
```

#### Installation

```powershell
cd c:\projects\Portfolio\frontend
npm install
npm run dev
```

Local URL: `http://localhost:5173/` (LAN: host `true`, port `5173`).

#### Environment

This product needs **no runtime environment variables** for `npm run dev` / `npm run build`. Contact URLs live in `frontend/src/data/site.ts`. Do not commit `.env` files if you create them later.


| Name     | Required | Purpose                           |
| -------- | -------- | --------------------------------- |
| *(none)* | —        | Static build; no app env required |


Timezone note: **MSK** for any user-facing clocks; no scheduler.

#### Database

**None.** [`docs/DATABASE.md`](docs/DATABASE.md).

#### Testing

```powershell
cd c:\projects\Portfolio\frontend
npx tsc -b --pretty false
npm run build
```

Manual smoke (**MSK** wall clock if you note times): open Home → Projects → one case study → Contacts; check mobile menu and GitHub / contact buttons.

#### Deployment

Build static files with Vite, publish `frontend/dist` (and ensure `public/` assets are included via Vite `publicDir`). **No Docker.** [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

#### Security

Public static frontend only. Never put secrets in the frontend bundle or Git. [`docs/SECURITY.md`](docs/SECURITY.md).

### For support

#### Troubleshooting


| Symptom                           | Checks                                                |
| --------------------------------- | ----------------------------------------------------- |
| Blank page after deploy           | Correct base URL / hosting root; open browser console |
| Images or videos 404              | Paths under `public/`; rebuild after asset changes    |
| Dev server not reachable on phone | Same Wi‑Fi; use Network URL from Vite; firewall       |


Full matrix: [`docs/TROUBLESHOOTING.md`](docs/TROUBLESHOOTING.md).

#### Backup

Copy the Git repository and any unpublished media. Store **offline** if needed; do not commit secrets.

#### Recovery

Restore from Git; `npm install`; `npm run build`; redeploy static output. After rotating a host deploy token: update host settings only (no app env required today).

#### Maintenance

Update content in `frontend/src/data/` and `CONTENT_LINKS.md`; rebuild and redeploy. [`docs/MAINTENANCE.md`](docs/MAINTENANCE.md).

#### Warranty

**14 days after handover** for delivered portfolio features: pages listed above, case study media wiring, contact actions as shipped. Not covered: platform outages (GitHub/hosting/CDN), lost unpublished files without backup, new features, third-party GitHub/Telegram/mail client behavior.

#### Security (incidents)

Leaked deploy key or host token: revoke at the provider, set a new value on the host, redeploy if needed. [`docs/SECURITY.md`](docs/SECURITY.md).

---

<a id="русский"></a>

## Русский

### Для заказчика

#### Что это

**Публичный** сайт-портфолио веб-разработчика Roman Smolin. Посетитель смотрит проекты (Smart Utility, Task Planner, Web Event), case study со скриншотами и видео, пишет через email, Telegram или GitHub.

**Планировщика приложения нет.** Где на сайте важны дата/время — ориентир **московское время (MSK, UTC+3)**.

#### Как пользоваться

1. Открыть главную страницу сайта.
2. Перейти в **Проекты** / case study; при необходимости посмотреть видео.
3. В блоке **Контакты** выбрать email, Telegram или GitHub.

#### URL продакшена


| Наименование | Значение                                                      |
| ------------ | ------------------------------------------------------------- |
| Сайт         | [https://portfolio-8wn.pages.dev](https://portfolio-8wn.pages.dev) |
| Telegram-бот | **нет** (только ссылка в Контактах)                           |
| Другое       | Репозиторий-заготовка: `https://github.com/KyRaToP/Portfolio` |


#### Основные функции

- Home: позиционирование, избранный проект, услуги, стек, обо мне, контакты
- Список проектов и case study (обзор, скриншоты, видео)
- Внешние ссылки на GitHub и каналы связи
- Адаптивная вёрстка desktop / mobile

#### Безопасность

**Публичный** static-сайт. Нет аккаунтов, allowlist и server-side токенов в этом продукте. Секреты не коммитить. Утечка deploy-ключа: **сменить** секрет. Подробнее: [`docs/SECURITY.md`](docs/SECURITY.md).

### Для разработчика

#### Архитектура

SPA на React + TypeScript + Vite. Медиа в `public/`. Backend у портфолио нет. Подробнее: [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

#### Стек технологий


| Слой   | Стек                                                                            |
| ------ | ------------------------------------------------------------------------------- |
| UI     | React 19, TypeScript, Vite 7, React Router 7                                    |
| API    | **нет**                                                                         |
| Bot    | **нет**                                                                         |
| Данные | **нет** (контент в `frontend/src/data/`)                                        |
| Деплой | Static host (GitHub Pages / Cloudflare Pages / Netlify и т.п.) — **Docker нет** |


#### Структура проекта

```text
Portfolio/
  frontend/          # приложение Vite + React
  public/            # icons, images, videos, og, robots.txt
  docs/              # архитектура, деплой, безопасность, …
  README.md
  CONTENT_LINKS.md   # источник контента и ссылок
  design_spec.md     # источник дизайна
```

#### Установка

```powershell
cd c:\projects\Portfolio\frontend
npm install
npm run dev
```

Локально: `http://localhost:5173/` (в сети: host `true`, порт `5173`).

#### Окружение

Для `dev` / `build` **переменные окружения не нужны**. Контакты — в `frontend/src/data/site.ts`. Файлы `.env` не коммитить, если создадите их позже.


| Имя     | Обязательно | Назначение                                |
| ------- | ----------- | ----------------------------------------- |
| *(нет)* | —           | Static build; env приложения не требуется |


Часовой пояс: **MSK**, если на сайте есть часы; планировщика нет.

#### База данных

**Нет.** [`docs/DATABASE.md`](docs/DATABASE.md).

#### Тестирование

```powershell
cd c:\projects\Portfolio\frontend
npx tsc -b --pretty false
npm run build
```

Вручную: Home → Проекты → case study → Контакты; mobile menu и кнопки GitHub / контактов.

#### Развёртывание

Сборка Vite, публикация static output. **Docker нет.** [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

#### Безопасность

Только публичный frontend. Секреты не класть во frontend и в Git. [`docs/SECURITY.md`](docs/SECURITY.md).

### Для поддержки

#### Диагностика


| Симптом                       | Проверить                                    |
| ----------------------------- | -------------------------------------------- |
| Пустая страница после deploy  | base URL / корень хостинга; console браузера |
| 404 у картинок или видео      | пути в `public/`; rebuild после смены assets |
| Dev с телефона не открывается | та же Wi‑Fi; Network URL Vite; firewall      |


Полная матрица: [`docs/TROUBLESHOOTING.md`](docs/TROUBLESHOOTING.md).

#### Резервная копия

Копия Git-репозитория и неопубликованных media. Хранить **offline** при необходимости; секреты не коммитить.

#### Восстановление

Restore из Git; `npm install`; `npm run build`; повторный deploy. После смены deploy-токена хоста — обновить настройки хоста.

#### Сопровождение

Контент в `frontend/src/data/` и `CONTENT_LINKS.md`; rebuild и redeploy. [`docs/MAINTENANCE.md`](docs/MAINTENANCE.md).

#### Гарантия

**14 дней после передачи** на сданный функционал портфолио: страницы выше, wiring media в case study, contact actions как сдано. Не покрывается: сбои платформ (GitHub/хостинг/CDN), потеря неопубликованных файлов без backup, новые функции, поведение сторонних GitHub/Telegram/mail.

#### Безопасность (инциденты)

Утечка deploy-ключа: revoke у провайдера, новое значение на хосте, при необходимости redeploy. [`docs/SECURITY.md`](docs/SECURITY.md).

---

© Все права защищены.