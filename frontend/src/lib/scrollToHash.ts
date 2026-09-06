import { getScrollBehavior } from "@/hooks/usePrefersReducedMotion";

export function scrollToTop(): void {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: getScrollBehavior(),
  });
}

export function scrollToHashTarget(id: string): boolean {
  const target = document.getElementById(id);
  if (!target) {
    return false;
  }

  target.scrollIntoView({
    behavior: getScrollBehavior(),
    block: "start",
  });
  return true;
}

/**
 * Scroll to hash after route paint / layout settle.
 * Uses a few delayed attempts so lazy images do not leave the target mid-page,
 * without fighting smooth scrolling every frame.
 */
export function scheduleHashScroll(id: string): () => void {
  const behavior = getScrollBehavior();
  const delays = behavior === "smooth" ? [0, 120, 450] : [0, 80, 250, 600];

  const timeouts = delays.map((delay) =>
    window.setTimeout(() => scrollToHashTarget(id), delay),
  );

  const onLoad = () => scrollToHashTarget(id);
  window.addEventListener("load", onLoad, { once: true });

  return () => {
    timeouts.forEach((timeout) => window.clearTimeout(timeout));
    window.removeEventListener("load", onLoad);
  };
}
