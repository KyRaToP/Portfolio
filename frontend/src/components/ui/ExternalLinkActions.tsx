import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { copyTextToClipboard } from "@/lib/clipboard";
import styles from "./ExternalLinkActions.module.css";

type ExternalLinkActionsProps = {
  url: string;
  openLabel: string;
  copyLabel?: string;
  copiedLabel?: string;
  className?: string;
};

/** Pair of actions: open URL in a new tab + copy URL (Contacts pattern). */
export function ExternalLinkActions({
  url,
  openLabel,
  copyLabel = "Скопировать ссылку",
  copiedLabel = "Ссылка скопирована",
  className = "",
}: ExternalLinkActionsProps) {
  const [copied, setCopied] = useState(false);

  const openInNewTab = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const copyLink = async () => {
    const ok = await copyTextToClipboard(url);
    if (ok) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={[styles.actions, className].filter(Boolean).join(" ")}>
      <Button type="button" variant="secondary" onClick={openInNewTab}>
        {openLabel}
      </Button>
      <Button type="button" variant="secondary" onClick={copyLink}>
        {copied ? copiedLabel : copyLabel}
      </Button>
    </div>
  );
}
