import { Link } from "react-router-dom";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";
import { siteSeo } from "@/data/site";
import { usePageMeta } from "@/hooks/usePageMeta";
import styles from "./ProjectsPage.module.css";

export function ProjectsPage() {
  usePageMeta({
    title: siteSeo.projectsTitle,
    description: siteSeo.projectsDescription,
    path: "/projects",
    image: siteSeo.defaultOgImage,
  });

  return (
    <main id="main" className={`container ${styles.page}`}>
      <Reveal>
        <header className={styles.intro}>
          <p className={styles.label}>Избранные работы</p>
          <h1 className={styles.title}>Проекты</h1>
          <p className={styles.lead}>
            Реальные проекты, построенные для практических задач — от Telegram Mini
            App до automation и интерактивного web-опыта.
          </p>
          <p className={styles.meta}>{projects.length} проекта в портфолио</p>
        </header>
      </Reveal>

      <Reveal delay={1}>
        <ProjectGrid projects={projects} />
      </Reveal>

      <Reveal delay={2}>
        <section className={styles.cta} aria-labelledby="projects-cta-heading">
          <div className={styles.ctaInner}>
            <h2 id="projects-cta-heading" className={styles.ctaTitle}>
              Нужен похожий результат?
            </h2>
            <p className={styles.ctaText}>
              Расскажите о задаче — разберём, какой формат подойдёт лучше: сайт,
              web-приложение, Telegram-бот или автоматизация.
            </p>
            <div className={styles.ctaActions}>
              <Button href="/#contact">Связаться</Button>
              <Button href="/" variant="ghost">
                На главную
              </Button>
            </div>
          </div>
        </section>
      </Reveal>

      <p className={styles.back}>
        <Link to="/">← На главную</Link>
      </p>
    </main>
  );
}
