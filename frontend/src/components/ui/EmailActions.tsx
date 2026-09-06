import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { copyTextToClipboard } from "@/lib/clipboard";
import { getEmailAddress, toMailto, toWebMailCompose } from "@/lib/links";
import styles from "./EmailActions.module.css";

type EmailActionsProps = {
  email: string;
  subject?: string;
};

export function EmailActions({
  email,
  subject = "Запрос с сайта-портфолио",
}: EmailActionsProps) {
  const address = getEmailAddress(email);
  const mailtoHref = toMailto(address, subject);
  const webHref = toWebMailCompose(address, subject);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const copyEmail = async () => {
    const ok = await copyTextToClipboard(address);
    setCopyError(!ok);
    setCopied(ok);
    if (ok) {
      window.setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={styles.wrap}>
      <p className={styles.hint}>
        Email:{" "}
        <a className={styles.address} href={mailtoHref}>
          {address}
        </a>
      </p>
      <div className={styles.actions}>
        <Button href={webHref} variant="secondary" external>
          Написать на email
        </Button>
        <Button type="button" variant="secondary" onClick={copyEmail}>
          {copied ? "Скопировано" : "Скопировать адрес"}
        </Button>
      </div>
      {copyError ? (
        <p className={styles.note} role="status">
          Не удалось скопировать автоматически. Выделите адрес выше и скопируйте
          вручную.
        </p>
      ) : (
        <p className={styles.note}>
          Кнопка «Написать на email» открывает письмо в браузере. Если почтовое
          приложение не настроено — скопируйте адрес.
        </p>
      )}
    </div>
  );
}
