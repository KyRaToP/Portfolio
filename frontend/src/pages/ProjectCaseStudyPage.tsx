import { Link, useParams } from "react-router-dom";
import { LiveDemo } from "@/components/case-study/LiveDemo";
import { ScreenshotGallery } from "@/components/case-study/ScreenshotGallery";
import { WorkflowSteps } from "@/components/case-study/WorkflowSteps";
import { BentoCard } from "@/components/ui/BentoCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { TechBadge } from "@/components/ui/TechBadge";
import { getProjectBySlug, projects } from "@/data/projects";
import { siteContent } from "@/data/site";
import { usePageMeta } from "@/hooks/usePageMeta";
import styles from "./ProjectCaseStudyPage.module.css";

export function ProjectCaseStudyPage() {
  const { slug = "" } = useParams();
  const project = getProjectBySlug(slug);
  const otherProjects = projects.filter((item) => item.slug !== slug);

  usePageMeta(
    project
      ? {
          title: `${project.title} — Разбор проекта | ${siteContent.fullName}`,
          description: project.description,
          path: `/projects/${project.slug}`,
          image: project.media.ogImage,
          type: "article",
        }
      : {
          title: `Проект не найден — ${siteContent.fullName}`,
          description: "Запрошенный проект отсутствует в портфолио.",
          path: `/projects/${slug}`,
          noIndex: true,
        },
  );

  if (!project) {
    return (
      <main id="main" className={`container ${styles.page}`}>
        <h1 className={styles.title}>Проект не найден</h1>
        <p className={styles.lead}>
          Страница проекта «{slug}» отсутствует в данных.
        </p>
        <Button href="/projects">К проектам</Button>
      </main>
    );
  }

  const { caseStudy } = project;

  const otherProjectsCard = (
    <BentoCard className={styles.sideCard}>
      <p className={styles.sideLabel}>Другие проекты</p>
      <ul className={styles.sideList}>
        {otherProjects.map((item) => (
          <li key={item.slug}>
            <Link to={`/projects/${item.slug}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </BentoCard>
  );

  const linksCard = (
    <BentoCard className={styles.sideCard}>
      <p className={styles.sideLabel}>Ссылки</p>
      <div className={styles.sideActions}>
        {project.links.github ? (
          <Button href={project.links.github} external>
            Смотреть GitHub
          </Button>
        ) : null}
        <Button href="/projects" variant="secondary">
          Все проекты
        </Button>
        <Button href="/#contact" variant="ghost">
          Связаться
        </Button>
      </div>
    </BentoCard>
  );

  return (
    <main id="main" className={`container ${styles.page}`}>
      <Reveal>
        <header className={styles.hero}>
          <div className={styles.heroCopy}>
            <div className={styles.metaRow}>
              <img
                className={styles.inlineIcon}
                src={project.media.icon}
                alt=""
                width={44}
                height={44}
                decoding="async"
              />
              <p className={styles.label}>{project.category}</p>
            </div>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.lead}>{project.description}</p>
            <div className={styles.actions}>
              {project.links.github ? (
                <Button href={project.links.github} external>
                  Смотреть GitHub
                </Button>
              ) : null}
              <Button href="/projects" variant="secondary">
                Все проекты
              </Button>
              {project.media.liveVideo ? (
                <Button href="#live-demo" variant="ghost">
                  Смотреть видео
                </Button>
              ) : null}
            </div>

            <div className={styles.mobileOtherProjects}>{otherProjectsCard}</div>
          </div>

          <div className={styles.heroMedia}>
            <img
              className={styles.cover}
              src={project.media.cover}
              alt={`Обложка ${project.title}`}
              width={960}
              height={504}
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </header>
      </Reveal>

      <div className={styles.layout}>
        <div className={styles.content}>
          <BentoCard className={styles.block}>
            <h2 className={styles.heading}>Обзор</h2>
            <p className={styles.text}>{caseStudy.overview}</p>
          </BentoCard>

          <div className={styles.split}>
            <BentoCard className={styles.block}>
              <h2 className={styles.heading}>Проблема</h2>
              <p className={styles.text}>{caseStudy.problem}</p>
            </BentoCard>
            <BentoCard className={styles.block}>
              <h2 className={styles.heading}>Решение</h2>
              <p className={styles.text}>{caseStudy.solution}</p>
            </BentoCard>
          </div>

          <BentoCard className={styles.block}>
            <h2 className={styles.heading}>Ключевые возможности</h2>
            <ul className={styles.list}>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </BentoCard>

          <BentoCard className={styles.block}>
            <h2 className={styles.heading}>Моя роль</h2>
            <p className={styles.text}>{caseStudy.role}</p>
          </BentoCard>

          {caseStudy.architecture ? (
            <BentoCard className={styles.block}>
              <h2 className={styles.heading}>Архитектура</h2>
              <p className={styles.text}>{caseStudy.architecture}</p>
            </BentoCard>
          ) : null}

          {caseStudy.workflow ? (
            <BentoCard className={styles.block}>
              <WorkflowSteps
                title="Рабочий процесс"
                steps={caseStudy.workflow}
              />
            </BentoCard>
          ) : null}

          <BentoCard className={styles.block}>
            <h2 className={styles.heading}>Технологии</h2>
            <div className={styles.badges}>
              {project.technologies.map((tech) => (
                <TechBadge key={tech} label={tech} />
              ))}
            </div>
          </BentoCard>

          {caseStudy.challenges ? (
            <BentoCard className={styles.block}>
              <h2 className={styles.heading}>Технические решения</h2>
              <ul className={styles.list}>
                {caseStudy.challenges.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </BentoCard>
          ) : null}

          {caseStudy.outcome ? (
            <BentoCard className={styles.block}>
              <h2 className={styles.heading}>Результат</h2>
              <p className={styles.text}>{caseStudy.outcome}</p>
            </BentoCard>
          ) : null}

          <BentoCard className={styles.block}>
            <ScreenshotGallery images={project.media.screenshots} />
          </BentoCard>

          {project.media.liveVideo ? (
            <BentoCard className={styles.block}>
              <LiveDemo
                src={project.media.liveVideo}
                poster={project.media.videoPoster}
              />
            </BentoCard>
          ) : null}
        </div>

        <aside className={styles.sidebar}>
          <BentoCard className={styles.sideCard}>
            <p className={styles.sideLabel}>Проект</p>
            <p className={styles.sideTitle}>{project.title}</p>
            <p className={styles.sideText}>{project.category}</p>
            <div className={styles.sideActions}>
              {project.links.github ? (
                <Button href={project.links.github} external>
                  Смотреть GitHub
                </Button>
              ) : null}
              <Button href="/projects" variant="ghost">
                Назад
              </Button>
            </div>
          </BentoCard>

          {linksCard}

          <div className={styles.desktopOtherProjects}>{otherProjectsCard}</div>
        </aside>
      </div>

      <p className={styles.back}>
        <Link to="/projects">← К списку проектов</Link>
      </p>
    </main>
  );
}
