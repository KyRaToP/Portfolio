import type { ReactNode } from "react";
import styles from "./BentoCard.module.css";

type BentoCardProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
};

export function BentoCard({
  children,
  className = "",
  as: Tag = "div",
}: BentoCardProps) {
  return <Tag className={[styles.card, className].filter(Boolean).join(" ")}>{children}</Tag>;
}
