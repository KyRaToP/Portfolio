/** Normalize to a plain email address. */
export function getEmailAddress(email: string): string {
  return email.replace(/^mailto:/i, "").trim();
}

/** Native mail-client link (may do nothing if no app is configured). */
export function toMailto(email: string, subject?: string): string {
  const address = getEmailAddress(email);
  const base = `mailto:${address}`;

  if (!subject) {
    return base;
  }

  return `${base}?subject=${encodeURIComponent(subject)}`;
}

/**
 * Browser compose link that opens in a new tab.
 * Uses Gmail compose with the portfolio email in To: — works without a
 * desktop mail client. Visitors can still send to a @mail.ru address.
 */
export function toWebMailCompose(email: string, subject?: string): string {
  const address = getEmailAddress(email);
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: address,
  });

  if (subject) {
    params.set("su", subject);
  }

  return `https://mail.google.com/mail/?${params.toString()}`;
}
