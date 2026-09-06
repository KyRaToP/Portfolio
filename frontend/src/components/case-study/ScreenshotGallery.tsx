import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { MediaImage } from "@/data/types";
import styles from "./ScreenshotGallery.module.css";

type ScreenshotGalleryProps = {
  images: MediaImage[];
  title?: string;
};

export function ScreenshotGallery({
  images,
  title = "Скриншоты",
}: ScreenshotGalleryProps) {
  const headingId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = activeIndex === null ? null : images[activeIndex];

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? current : (current + 1) % images.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null
            ? current
            : (current - 1 + images.length) % images.length,
        );
      }
    };

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarGap =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarGap > 0) {
      document.body.style.paddingRight = `${scrollbarGap}px`;
    }

    window.addEventListener("keydown", onKeyDown);
    // Focus close control so keyboard users land in the dialog immediately.
    window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
      window.removeEventListener("keydown", onKeyDown);
      lastTriggerRef.current?.focus();
    };
  }, [activeIndex, images.length]);

  if (images.length === 0) {
    return null;
  }

  const lightbox =
    activeImage && typeof document !== "undefined"
      ? createPortal(
          <div
            className={styles.lightbox}
            role="dialog"
            aria-modal="true"
            aria-label={activeImage.alt}
            onClick={() => setActiveIndex(null)}
          >
            <div
              className={styles.lightboxInner}
              onClick={(event) => event.stopPropagation()}
            >
              <div className={styles.lightboxStage}>
                <img
                  src={activeImage.src}
                  alt={activeImage.alt}
                  className={styles.lightboxImage}
                  decoding="async"
                />
              </div>
              <p className={styles.lightboxCaption}>
                {activeIndex! + 1} / {images.length}: {activeImage.alt}
              </p>
              <div className={styles.lightboxActions}>
                <button
                  type="button"
                  className={styles.navButton}
                  onClick={() =>
                    setActiveIndex(
                      (activeIndex! - 1 + images.length) % images.length,
                    )
                  }
                >
                  Назад
                </button>
                <button
                  ref={closeButtonRef}
                  type="button"
                  className={styles.navButton}
                  onClick={() => setActiveIndex(null)}
                >
                  Закрыть
                </button>
                <button
                  type="button"
                  className={styles.navButton}
                  onClick={() =>
                    setActiveIndex((activeIndex! + 1) % images.length)
                  }
                >
                  Далее
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <section className={styles.section} aria-labelledby={headingId}>
      <div className={styles.header}>
        <h2 id={headingId} className={styles.title}>
          {title}
        </h2>
        <p className={styles.count}>{images.length} изображений</p>
      </div>

      <ul className={styles.grid}>
        {images.map((image, index) => (
          <li key={image.src}>
            <button
              type="button"
              className={styles.thumbButton}
              onClick={(event) => {
                lastTriggerRef.current = event.currentTarget;
                setActiveIndex(index);
              }}
              aria-label={`Открыть скриншот ${index + 1}: ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className={styles.thumb}
              />
            </button>
          </li>
        ))}
      </ul>

      {lightbox}
    </section>
  );
}
