import styles from "./TechBadge.module.css";

type TechBadgeProps = {
  label: string;
};

export function TechBadge({ label }: TechBadgeProps) {
  return <span className={styles.badge}>{label}</span>;
}
