import { useEffect } from "react";
import { assetUrl } from "@/lib/assets";

export type PageMetaInput = {
  title: string;
  description: string;
  /** Pathname for canonical, e.g. `/projects/smart-utility` */
  path?: string;
  /** Absolute or site-root path to preview image */
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
};

function toAbsoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  const withBase = assetUrl(pathOrUrl);
  if (/^https?:\/\//i.test(withBase)) {
    return withBase;
  }

  return `${window.location.origin}${withBase.startsWith("/") ? withBase : `/${withBase}`}`;
}

function upsertMeta(
  attr: "name" | "property",
  key: string,
  content: string,
): void {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }

  element.content = content;
}

function upsertLink(rel: string, href: string): void {
  let element = document.head.querySelector<HTMLLinkElement>(
    `link[rel="${rel}"]`,
  );

  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }

  element.href = href;
}

/** Updates document title and social/SEO meta tags for the current route. */
export function usePageMeta({
  title,
  description,
  path,
  image = "/og/home.png",
  type = "website",
  noIndex = false,
}: PageMetaInput): void {
  useEffect(() => {
    const canonicalPath = path ?? `${window.location.pathname}${window.location.search}`;
    const absoluteImage = toAbsoluteUrl(image);
    const absoluteUrl = toAbsoluteUrl(canonicalPath);

    document.title = title;

    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", noIndex ? "noindex, nofollow" : "index, follow");

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:image", absoluteImage);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:url", absoluteUrl);
    upsertMeta("property", "og:locale", "ru_RU");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", absoluteImage);

    upsertLink("canonical", absoluteUrl);
  }, [title, description, path, image, type, noIndex]);
}
