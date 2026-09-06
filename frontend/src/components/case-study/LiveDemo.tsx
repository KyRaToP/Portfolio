import styles from "./LiveDemo.module.css";

type LiveDemoProps = {
  src: string;
  poster: string;
  title?: string;
};

export function LiveDemo({
  src,
  poster,
  title = "Видео демонстрации",
}: LiveDemoProps) {
  return (
    <section
      id="live-demo"
      className={styles.section}
      aria-labelledby="live-demo-heading"
    >
      <h2 id="live-demo-heading" className={styles.title}>
        {title}
      </h2>
      <p className={styles.note}>
        Запись реальной работы проекта. Отдельная страница для видео не
        используется — плеер встроен в разбор проекта.
      </p>
      <video
        className={styles.video}
        controls
        preload="metadata"
        poster={poster}
        playsInline
      >
        <source src={src} type="video/mp4" />
        Ваш браузер не поддерживает воспроизведение video.
      </video>
    </section>
  );
}
