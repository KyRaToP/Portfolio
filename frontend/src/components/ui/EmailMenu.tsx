import { useEffect, useId, useRef, useState } from "react";
import { copyTextToClipboard } from "@/lib/clipboard";
import { getEmailAddress, toWebMailCompose } from "@/lib/links";
import styles from "./EmailMenu.module.css";

type EmailMenuProps = {
  email: string;
  subject?: string;
  className?: string;
  /** Compact header icon vs full-width mobile menu row */
  variant?: "icon" | "panel";
  onAction?: () => void;
};

export function EmailMenu({
  email,
  subject = "Запрос с сайта-портфолио",
  className = "",
  variant = "icon",
  onAction,
}: EmailMenuProps) {
  const address = getEmailAddress(email);
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const webHref = toWebMailCompose(address, subject);
  const mailtoHref = `mailto:${address}`;

  useEffect(() => {
    if (!open) {
      return;
    }

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (target && !rootRef.current?.contains(target)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const copyAddress = async () => {
    const ok = await copyTextToClipboard(address);
    if (ok) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
    setOpen(false);
    onAction?.();
  };

  return (
    <div
      ref={rootRef}
      className={[
        styles.root,
        variant === "panel" ? styles.rootPanel : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <button
        type="button"
        className={variant === "panel" ? styles.triggerPanel : styles.trigger}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        aria-label={`Email: ${address}`}
        title={mailtoHref}
        data-tooltip={mailtoHref}
        onClick={() => setOpen((value) => !value)}
      >
        {variant === "panel" ? (
          "Email"
        ) : (
          <MailIcon />
        )}
      </button>

      {open ? (
        <div
          id={menuId}
          className={[
            styles.menu,
            variant === "panel" ? styles.menuPanel : "",
          ]
            .filter(Boolean)
            .join(" ")}
          role="menu"
          aria-label="Действия с email"
        >
          <a
            className={styles.item}
            role="menuitem"
            href={webHref}
            target="_blank"
            rel="noopener noreferrer"
            title={webHref}
            onClick={() => {
              setOpen(false);
              onAction?.();
            }}
          >
            Написать на email
          </a>
          <button
            type="button"
            className={styles.item}
            role="menuitem"
            onClick={copyAddress}
          >
            {copied ? "Скопировано" : "Скопировать адрес"}
          </button>
        </div>
      ) : null}
    </div>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"
      />
    </svg>
  );
}
