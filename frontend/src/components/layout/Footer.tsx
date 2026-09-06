import { Link } from "react-router-dom";
import { siteContent } from "@/data/site";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.brand}>{siteContent.fullName}</p>
          <p className={styles.role}>{siteContent.role}</p>
        </div>

        <nav className={styles.nav} aria-label="Навигация в подвале">
          <Link to="/projects">Проекты</Link>
          <Link to="/#about">Обо мне</Link>
          <Link to="/#services">Услуги</Link>
          <Link to="/#contact">Контакты</Link>
        </nav>
      </div>
      <div className={`container ${styles.copy}`}>
        <p>
          © {year} {siteContent.fullName}. Все права защищены.
        </p>
      </div>
    </footer>
  );
}
