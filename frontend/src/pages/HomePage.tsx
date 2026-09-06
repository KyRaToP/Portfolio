import { AboutSection } from "@/components/home/AboutSection";
import { ContactCTA } from "@/components/home/ContactCTA";
import { FeaturedProject } from "@/components/home/FeaturedProject";
import { Hero } from "@/components/home/Hero";
import { ProjectsPreview } from "@/components/home/ProjectsPreview";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TechStackSection } from "@/components/home/TechStackSection";
import { Reveal } from "@/components/ui/Reveal";
import { siteSeo } from "@/data/site";
import { usePageMeta } from "@/hooks/usePageMeta";
import styles from "./HomePage.module.css";

export function HomePage() {
  usePageMeta({
    title: siteSeo.homeTitle,
    description: siteSeo.homeDescription,
    path: "/",
    image: siteSeo.defaultOgImage,
  });

  return (
    <main id="main">
      <div className="container">
        <Hero />
      </div>

      <div className={`container ${styles.rest}`}>
        <FeaturedProject />
        <Reveal delay={1}>
          <ProjectsPreview />
        </Reveal>
        <Reveal delay={1}>
          <ServicesSection />
        </Reveal>
        <Reveal delay={1}>
          <TechStackSection />
        </Reveal>
        <Reveal delay={1}>
          <AboutSection />
        </Reveal>
        <Reveal delay={2}>
          <ContactCTA />
        </Reveal>
      </div>
    </main>
  );
}
