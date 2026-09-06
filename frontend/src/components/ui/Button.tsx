import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  external?: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function isInternalHref(href: string): boolean {
  return href.startsWith("/") || href.startsWith("#");
}

export function Button({
  children,
  variant = "primary",
  href,
  external = false,
  className = "",
  type = "button",
  ...rest
}: ButtonProps) {
  const classes = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    const isMailOrTel =
      href.startsWith("mailto:") || href.startsWith("tel:");
    const openExternal = external && !isMailOrTel;

    if (!openExternal && !isMailOrTel && isInternalHref(href)) {
      return (
        <Link className={classes} to={href}>
          {children}
        </Link>
      );
    }

    return (
      <a
        className={classes}
        href={href}
        {...(openExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} {...rest}>
      {children}
    </button>
  );
}
