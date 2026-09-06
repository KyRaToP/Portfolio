import { useState } from "react";
import { BentoCard } from "@/components/ui/BentoCard";
import { Button } from "@/components/ui/Button";
import { EmailActions } from "@/components/ui/EmailActions";
import { siteContent } from "@/data/site";
import { copyTextToClipboard, getTelegramHandle } from "@/lib/clipboard";
import styles from "./ContactCTA.module.css";

export function ContactCTA() {
  const telegramUrl = siteContent.links.telegram;
  const telegramHandle = getTelegramHandle(telegramUrl);
  const githubUrl = siteContent.links.githubProfile;
  const githubLabel = githubUrl.replace(/^https?:\/\/(www\.)?/, "");
  const [copiedTelegram, setCopiedTelegram] = useState(false);
  const [copiedGithub, setCopiedGithub] = useState(false);

  const copyTelegram = async () => {
    const ok = await copyTextToClipboard(telegramUrl);
    if (ok) {
      setCopiedTelegram(true);
      window.setTimeout(() => setCopiedTelegram(false), 2000);
    }
  };

  const copyGithub = async () => {
    const ok = await copyTextToClipboard(githubUrl);
    if (ok) {
      setCopiedGithub(true);
      window.setTimeout(() => setCopiedGithub(false), 2000);
    }
  };

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className={styles.section}
      aria-labelledby="contact-heading"
    >
      <BentoCard className={styles.card}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Контакты</p>
          <h2 id="contact-heading" className={styles.title}>
            Давайте обсудим задачу
          </h2>
          <p className={styles.text}>
            Есть идея, ТЗ или только черновое понимание проблемы — напишите.
            Разберём, как лучше реализовать.
          </p>
          <EmailActions email={siteContent.links.email} />

          <div className={styles.channelBlock}>
            <p className={styles.hint}>
              Telegram:{" "}
              <a
                className={styles.address}
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {telegramHandle}
              </a>
            </p>
            <p className={styles.linkLine}>{telegramUrl}</p>
            <div className={styles.actions}>
              <Button
                type="button"
                variant="secondary"
                onClick={() => openInNewTab(telegramUrl)}
              >
                Открыть Telegram
              </Button>
              <Button type="button" variant="secondary" onClick={copyTelegram}>
                {copiedTelegram ? "Ссылка скопирована" : "Скопировать ссылку"}
              </Button>
            </div>
          </div>

          <div className={styles.channelBlock}>
            <p className={styles.hint}>
              GitHub:{" "}
              <a
                className={styles.address}
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {githubLabel}
              </a>
            </p>
            <p className={styles.linkLine}>{githubUrl}</p>
            <div className={styles.actions}>
              <Button
                type="button"
                variant="secondary"
                onClick={() => openInNewTab(githubUrl)}
              >
                Открыть GitHub
              </Button>
              <Button type="button" variant="secondary" onClick={copyGithub}>
                {copiedGithub ? "Ссылка скопирована" : "Скопировать ссылку"}
              </Button>
            </div>
          </div>
        </div>
      </BentoCard>
    </section>
  );
}
