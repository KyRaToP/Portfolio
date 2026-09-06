import { BentoCard } from "@/components/ui/BentoCard";
import { Button } from "@/components/ui/Button";
import { TechBadge } from "@/components/ui/TechBadge";
import type { Project } from "@/data/types";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  project: Project;
  variant?: "featured" | "preview" | "showcase";
  /** For showcase: flip media/copy on desktop */
  reverse?: boolean;
};

export function ProjectCard({
  project,
  variant = "preview",
  reverse = false,
}: ProjectCardProps) {
  const orderLabel = String(project.order).padStart(2, "0");
  const isWide = variant === "featured" || variant === "showcase";
  const techLimit = variant === "preview" ? 4 : isWide ? 6 : 5;
  const TitleTag = variant === "preview" ? "h3" : "h2";

  return (
    <BentoCard
      as="article"
      className={[
        styles.card,
        styles[variant],
        reverse ? styles.reverse : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={styles.media}>
        <img
          className={styles.cover}
          src={project.media.cover}
          alt={`Обложка проекта ${project.title}`}
          width={isWide ? 960 : 800}
          height={isWide ? 504 : 450}
          loading={variant === "featured" ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={variant === "featured" ? "high" : "auto"}
        />
      </div>

      <div className={styles.copy}>
        <div className={styles.metaRow}>
          <img
            className={styles.inlineIcon}
            src={project.media.icon}
            alt=""
            width={40}
            height={40}
            loading="lazy"
            decoding="async"
          />
          <div>
            <p className={styles.meta}>
              {orderLabel}
              {project.featured && variant === "featured"
                ? " / Избранный проект"
                : ` / ${project.category}`}
            </p>
            {project.featured && variant === "featured" ? (
              <p className={styles.category}>{project.category}</p>
            ) : null}
          </div>
        </div>

        <TitleTag className={styles.title}>{project.title}</TitleTag>
        <p className={styles.text}>{project.description}</p>

        <div className={styles.badges}>
          {project.technologies.slice(0, techLimit).map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>

        <div className={styles.actions}>
          <Button href={`/projects/${project.slug}`}>Подробнее</Button>
          {project.links.github ? (
            <Button href={project.links.github} variant="ghost" external>
              Смотреть на GitHub
            </Button>
          ) : null}
        </div>
      </div>
    </BentoCard>
  );
}
