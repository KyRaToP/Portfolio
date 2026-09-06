import { BentoCard } from "@/components/ui/BentoCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { techStack } from "@/data/site";
import styles from "./TechStackSection.module.css";

export function TechStackSection() {
  return (
    <section
      id="stack"
      className={styles.section}
      aria-labelledby="stack-heading"
    >
      <SectionHeading
        id="stack-heading"
        eyebrow="Стек"
        title="Технологии"
        description="Инструменты, которые реально используются в проектах и в клиентской работе."
      />
      <div className={styles.grid}>
        {Object.entries(techStack).map(([group, items]) => (
          <BentoCard key={group} as="article" className={styles.card}>
            <h3 className={styles.group}>{group}</h3>
            <div className={styles.badges}>
              {items.map((item) => (
                <TechBadge key={item} label={item} />
              ))}
            </div>
          </BentoCard>
        ))}
      </div>
    </section>
  );
}
