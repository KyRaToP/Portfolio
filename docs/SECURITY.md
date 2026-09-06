# Security

**Language:** [English](#english) · [Русский](#русский)

<a id="english"></a>

## Model

**Public** static portfolio. Secrets must live only in the host environment (deploy keys, CDN tokens) — never in the frontend bundle or Git. Contact details on the site are intentionally public.

## Controls

| Control | Behavior |
|---------|----------|
| No app auth | Anyone can view the site |
| No allowlist | Not used in this product |
| Git hygiene | Do not commit `.env` or real tokens; keep ignore rules for secrets |
| Content URLs | Email / Telegram / GitHub links are public marketing data |

## Incidents

| Event | Action |
|-------|--------|
| Leaked deploy / host token | Revoke at provider; set a new host value; redeploy if needed |
| Accidental secret in Git | Rotate the secret; remove from history only with an explicit owner decision |
| Unwanted contact spam | Not controlled by app auth; use mailbox / Telegram privacy settings |

## Warranty

**14 days after handover.**

This file is operational guidance, not legal advice.

---

<a id="русский"></a>

## Модель

**Публичное** static-портфолио. Секреты только в окружении хоста (deploy keys, CDN tokens) — никогда во frontend и в Git. Контакты на сайте публичны намеренно.

## Контроли

| Контроль | Поведение |
|----------|-----------|
| Нет auth приложения | Сайт открыт для просмотра |
| Нет allowlist | В этом продукте не используется |
| Git hygiene | Не коммитить `.env` и боевые tokens |
| URL контента | Email / Telegram / GitHub — публичные marketing-данные |

## Инциденты

| Событие | Действие |
|---------|----------|
| Утечка deploy / host token | Revoke у провайдера; новое значение на хосте; при необходимости redeploy |
| Секрет попал в Git | Сменить секрет; чистить history только по явному решению владельца |
| Спам в контакты | Не через app auth; настройки почты / Telegram |

## Гарантия

**14 дней после передачи.**

Документ — операционная памятка, не юридическая консультация.
