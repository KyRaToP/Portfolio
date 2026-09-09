# Deployment

**Language:** [English](#english) · [Русский](#русский)

<a id="english"></a>

## Target

**GitHub Pages** (static Vite SPA). Production URL: [https://KyRaToP.github.io/Portfolio/](https://KyRaToP.github.io/Portfolio/)

## Environment

No application environment variables are required. Never commit secret values.


| Variable | Required |
| -------- | -------- |
| *(none)* | —        |


## Process (GitHub Pages + Actions)

Deploy is automated by [`.github/workflows/deploy-github-pages.yml`](../.github/workflows/deploy-github-pages.yml).

1. Repo **Settings** → **Pages** → **Source**: **GitHub Actions** (not “Deploy from a branch”).
2. Push to `main` (or run the workflow manually via **Actions** → **Deploy GitHub Pages** → **Run workflow**).
3. Build runs in `frontend/` with `GITHUB_PAGES=true` so Vite `base` is `/Portfolio/`.
4. Confirm the live site and deep SPA routes (`/Portfolio/projects/...`).

Manual local check:

```bash
cd frontend
set GITHUB_PAGES=true
npm run build
npm run preview
```

(On Unix: `GITHUB_PAGES=true npm run build`.)

## Docker

**No Docker.**

## Related

[`ARCHITECTURE.md`](ARCHITECTURE.md) · [`TROUBLESHOOTING.md`](TROUBLESHOOTING.md)

---

<a id="русский"></a>

## Цель

**GitHub Pages** (static Vite SPA). URL продакшена: [https://KyRaToP.github.io/Portfolio/](https://KyRaToP.github.io/Portfolio/).

## Окружение

Переменные приложения не нужны. Секреты не коммитить.


| Переменная | Обязательно |
| ---------- | ----------- |
| *(нет)*    | —           |


## Процесс (GitHub Pages + Actions)

Деплой автоматический через [`.github/workflows/deploy-github-pages.yml`](../.github/workflows/deploy-github-pages.yml).

1. Репозиторий → **Settings** → **Pages** → **Source**: **GitHub Actions** (не “Deploy from a branch”).
2. Push в `main` (или вручную: **Actions** → **Deploy GitHub Pages** → **Run workflow**).
3. Build в `frontend/` с `GITHUB_PAGES=true`, чтобы Vite `base` был `/Portfolio/`.
4. Проверить сайт и SPA-маршруты (`/Portfolio/projects/...`).

Локальная проверка:

```bash
cd frontend
set GITHUB_PAGES=true
npm run build
npm run preview
```

(На Unix: `GITHUB_PAGES=true npm run build`.)

## Docker

**Docker нет.**

## Связанные docs

[`ARCHITECTURE.md`](ARCHITECTURE.md) · [`TROUBLESHOOTING.md`](TROUBLESHOOTING.md)
