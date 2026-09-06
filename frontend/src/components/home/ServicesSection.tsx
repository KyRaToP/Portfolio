import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/site";
import styles from "./ServicesSection.module.css";

export function ServicesSection() {
  return (
    <section
      id="services"
      className={styles.section}
      aria-labelledby="services-heading"
    >
      <SectionHeading
        id="services-heading"
        eyebrow="Что я делаю"
        title="Услуги"
        description="Технические навыки переведены в то, что можно заказать для бизнеса или личного проекта. Нажмите карточку, чтобы перейти к контактам."
      />
      <div className={styles.grid}>
        {services.map((service, index) => (
          <a
            key={service.id}
            className={styles.cardLink}
            href="#contact"
            aria-label={`${service.title}: перейти к контактам`}
          >
            <article className={styles.card}>
              <p className={styles.index}>
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.text}>{service.description}</p>
              <span className={styles.cta}>Обсудить →</span>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
}
