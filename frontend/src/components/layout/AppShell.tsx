import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { scheduleHashScroll, scrollToTop } from "@/lib/scrollToHash";
import styles from "./AppShell.module.css";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      return;
    }

    scrollToTop();
  }, [pathname, hash]);

  return null;
}

function HashScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    return scheduleHashScroll(id);
  }, [pathname, hash]);

  return null;
}

function AnimatedOutlet() {
  const { pathname } = useLocation();

  return (
    <div key={pathname} className={`page-enter ${styles.pageEnter}`}>
      <Outlet />
    </div>
  );
}

export function AppShell() {
  return (
    <div className={styles.shell}>
      <a className="skip-link" href="#main">
        Перейти к содержимому
      </a>

      <ScrollToTop />
      <HashScroll />
      <Header />
      <AnimatedOutlet />
      <Footer />
    </div>
  );
}
