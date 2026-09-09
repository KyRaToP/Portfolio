/**
 * Prefix a site-root asset path with Vite `BASE_URL`.
 * Local / root host: BASE_URL = "/"
 * GitHub Pages: BASE_URL = "/Portfolio/"
 */
export function assetUrl(path: string): string {
  if (!path) {
    return path;
  }

  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const base = import.meta.env.BASE_URL;
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${normalized}`;
}
