import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import type { Project } from "@/data/types";
import styles from "./ProjectGrid.module.css";

type ProjectGridProps = {
  projects: Project[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  const sorted = [...projects].sort((a, b) => a.order - b.order);
  const featured = sorted.find((project) => project.featured) ?? sorted[0];
  const others = sorted.filter((project) => project.slug !== featured?.slug);

  if (!featured) {
    return null;
  }

  return (
    <div className={styles.grid}>
      <Reveal className={styles.lead}>
        <ProjectCard project={featured} variant="showcase" />
      </Reveal>

      {others.length > 0 ? (
        <div className={styles.pair}>
          {others.map((project, index) => (
            <Reveal key={project.slug} delay={index + 1}>
              <ProjectCard project={project} variant="preview" />
            </Reveal>
          ))}
        </div>
      ) : null}
    </div>
  );
}
