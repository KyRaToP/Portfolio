import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { getFeaturedProject } from "@/data/projects";
import styles from "./FeaturedProject.module.css";

export function FeaturedProject() {
  const featured = getFeaturedProject();

  return (
    <section className={styles.section} aria-labelledby="featured-heading">
      <Reveal>
        <SectionHeading
          id="featured-heading"
          title="Избранный проект"
          description="Главный technical case: full-stack решение с Telegram Mini App."
        />
      </Reveal>
      <Reveal delay={1}>
        <ProjectCard project={featured} variant="featured" />
      </Reveal>
    </section>
  );
}
