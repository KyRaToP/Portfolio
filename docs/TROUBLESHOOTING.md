# Troubleshooting

**Language:** [English](#english) · [Русский](#русский)

<a id="english"></a>

## Matrix

| Symptom | Checks |
|---------|--------|
| `npm run dev` fails | Node/npm installed; `cd frontend`; `npm install` |
| Phone cannot open LAN URL | Same Wi‑Fi as PC; use Vite **Network** URL; OS firewall allows port `5173` |
| Route 404 on static host | SPA fallback to `index.html` for `/projects/*` |
| Missing screenshots / video | Files under `public/`; paths in `frontend/src/data/projects.ts`; rebuild |
| TypeScript build error | `npx tsc -b --pretty false` and fix reported files |
| Clipboard copy fails on HTTP LAN IP | Expected limitation of insecure context; use HTTPS production or copy manually |

Do not print secret **values** if you later add env-based deploy tooling.

---

<a id="русский"></a>

## Матрица

| Симптом | Проверить |
|---------|-----------|
| Не стартует `npm run dev` | Установлены Node/npm; `cd frontend`; `npm install` |
| Телефон не открывает LAN URL | Та же Wi‑Fi; **Network** URL Vite; firewall разрешает порт `5173` |
| 404 на route после static deploy | SPA fallback на `index.html` для `/projects/*` |
| Нет скриншотов / видео | Файлы в `public/`; пути в `frontend/src/data/projects.ts`; rebuild |
| Ошибка TypeScript build | `npx tsc -b --pretty false` и исправить указанные файлы |
| Copy в clipboard не работает на HTTP LAN IP | Ограничение insecure context; в production — HTTPS или копировать вручную |

Не печатать **значения** секретов, если позже появится env для деплоя.
