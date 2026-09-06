import type { ReactNode } from "react";
import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  action,
}: SectionHeadingProps) {
  return (
    <div className={styles.wrap}>
      <div className={styles.copy}>
        {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
        <h2 id={id} className={styles.title}>
          {title}
        </h2>
        {description ? <p className={styles.description}>{description}</p> : null}
      </div>
      {action ? <div className={styles.action}>{action}</div> : null}
    </div>
  );
}
