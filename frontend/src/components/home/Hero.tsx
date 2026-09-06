import { Button } from "@/components/ui/Button";
import { siteContent } from "@/data/site";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={`${styles.bento} hero-enter`}>
        <div className={`${styles.copy} hero-enter-item`}>
          <p className={styles.role}>{siteContent.role}</p>

          <h1 id="hero-heading" className={styles.name}>
            {siteContent.fullName}
          </h1>

          <p className={styles.headline}>
            Цифровые продукты
            <span>для реальных задач</span>
          </p>

          <p className={styles.positioning}>{siteContent.positioning}</p>

          <div className={styles.actions}>
            <Button href="/projects">Смотреть проекты</Button>
            <Button href="#contact" variant="secondary">
              Связаться
            </Button>
          </div>
        </div>

        <div className={`${styles.visual} hero-enter-item`} aria-hidden="true">
          <div className={styles.visualGlow} />
          <div className={styles.visualFrame}>
            <img
              src="/og/home.png"
              alt=""
              width={1200}
              height={630}
              className={styles.visualImage}
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <div className={styles.visualMeta}>
            <span>Сайты</span>
            <span>Web-приложения</span>
            <span>Telegram</span>
            <span>Автоматизация</span>
          </div>
        </div>
      </div>
    </section>
  );
}
