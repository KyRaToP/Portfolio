import { BentoCard } from "@/components/ui/BentoCard";
import { siteContent } from "@/data/site";
import styles from "./AboutSection.module.css";

export function AboutSection() {
  return (
    <section
      id="about"
      className={styles.section}
      aria-labelledby="about-heading"
    >
      <div className={styles.layout}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Обо мне</p>
          <h2 id="about-heading" className={styles.title}>
            {siteContent.fullName}
          </h2>
          <p className={styles.role}>{siteContent.role}</p>
        </div>
        <BentoCard className={styles.card}>
          <div className={styles.copy}>
            {siteContent.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </BentoCard>
      </div>
    </section>
  );
}
