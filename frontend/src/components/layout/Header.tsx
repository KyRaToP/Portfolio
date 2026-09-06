import { useEffect, useId, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { siteContent } from "@/data/site";
import styles from "./Header.module.css";

type NavItem =
  | { type: "route"; to: string; label: string; end?: boolean }
  | { type: "hash"; href: string; label: string };

const navItems: NavItem[] = [
  { type: "route", to: "/projects", label: "Проекты" },
  { type: "hash", href: "/#about", label: "Обо мне" },
  { type: "hash", href: "/#services", label: "Услуги" },
  { type: "hash", href: "/#contact", label: "Контакты" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        openButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    openButtonRef.current?.focus();
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.brand} onClick={() => setMenuOpen(false)}>
          <img
            className={styles.brandMark}
            src="/icons/favicon.png"
            alt=""
            width={28}
            height={28}
          />
          <span className={styles.brandText}>{siteContent.fullName}</span>
        </NavLink>

        <nav className={styles.desktopNav} aria-label="Основная навигация">
          {navItems.map((item) =>
            item.type === "route" ? (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  [styles.navLink, isActive ? styles.navLinkActive : ""]
                    .filter(Boolean)
                    .join(" ")
                }
              >
                {item.label}
              </NavLink>
            ) : (
              <Link key={item.label} className={styles.navLink} to={item.href}>
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <button
          ref={openButtonRef}
          type="button"
          className={styles.menuButton}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={styles.menuButtonBars} data-open={menuOpen} />
        </button>
      </div>

      <div
        className={[
          styles.mobileBackdrop,
          menuOpen ? styles.mobileBackdropOpen : "",
        ]
          .filter(Boolean)
          .join(" ")}
        onClick={closeMenu}
        aria-hidden={!menuOpen}
      />

      <div
        id={menuId}
        className={[styles.mobilePanel, menuOpen ? styles.mobilePanelOpen : ""]
          .filter(Boolean)
          .join(" ")}
        role="dialog"
        aria-modal={menuOpen}
        aria-label="Мобильное меню"
        aria-hidden={!menuOpen}
        inert={!menuOpen ? true : undefined}
      >
        <div className={styles.mobilePanelHeader}>
          <p className={styles.mobileLabel}>Меню</p>
          <button
            ref={closeButtonRef}
            type="button"
            className={styles.closeButton}
            aria-label="Закрыть меню"
            onClick={closeMenu}
          >
            Закрыть
          </button>
        </div>

        <nav className={styles.mobileNav} aria-label="Мобильная навигация">
          {navItems.map((item) =>
            item.type === "route" ? (
              <NavLink
                key={item.label}
                to={item.to}
                className={styles.mobileLink}
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ) : (
              <Link
                key={item.label}
                className={styles.mobileLink}
                to={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
