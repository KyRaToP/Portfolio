import { Link } from "react-router-dom";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getNonFeaturedProjects } from "@/data/projects";
import styles from "./ProjectsPreview.module.css";

export function ProjectsPreview() {
  const projects = getNonFeaturedProjects();

  return (
    <section className={styles.section} aria-labelledby="preview-heading">
      <SectionHeading
        id="preview-heading"
        eyebrow="Проекты"
        title="Другие работы"
        description="Ещё два реальных проекта: автоматизация и интерактивный web-опыт."
        action={
          <Link className={styles.allLink} to="/projects">
            Все проекты →
          </Link>
        }
      />
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} variant="preview" />
        ))}
      </div>
    </section>
  );
}
