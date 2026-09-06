import {
  createElement,
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger step: each step adds 80ms delay */
  delay?: number;
  as?: ElementType;
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.01,
        rootMargin: "0px 0px -2% 0px",
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  const classes = ["reveal", visible ? "is-visible" : "", className]
    .filter(Boolean)
    .join(" ");

  return createElement(
    Tag,
    {
      ref,
      className: classes,
      style: delay > 0 ? { animationDelay: `${delay * 80}ms` } : undefined,
    },
    children,
  );
}
