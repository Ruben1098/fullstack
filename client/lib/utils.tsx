import { twMerge } from "tailwind-merge";
import { createRoot } from "react-dom/client";

import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function unwrapRoot(html: string): string {
  const template = document.createElement("template");
  template.innerHTML = html.trim();

  const root = template.content.firstElementChild;
  if (!root) return html;

  const fragment = document.createDocumentFragment();
  while (root.firstChild) {
    fragment.appendChild(root.firstChild);
  }

  root.replaceWith(fragment);
  return template.innerHTML;
}

export const formatFollowers = <
  T extends "text" | "struct" = "text", // Default al tipo 'struct'
>(
  count: number,
  format?: T,
): T extends "text" ? string : { value: string; unit: string | null } => {
  if (count < 1000) {
    const value = count.toString();
    return (
      format === "struct"
        ? {
            value,
            unit: null,
          }
        : value
    ) as any;
  }

  const units = ["", "K", "M", "B", "T"];
  const exponent = Math.floor(Math.log10(count) / 3);
  const shortNumber = count / Math.pow(1000, exponent);

  const formatted =
    shortNumber < 10
      ? shortNumber.toFixed(1).replace(/\.0$/, "")
      : Math.round(shortNumber).toString();

  return (
    format === "struct"
      ? {
          value: formatted,
          unit: units[exponent],
        }
      : `${formatted}${units[exponent]}`
  ) as any;
};

export const getBaseDomain = () => {
  const hostParts = window.location.hostname.split(".");
  if (hostParts.length < 2) return window.location.hostname;
  return hostParts.slice(-2).join(".");
};

export const $root = (selector: string, app: any) => {
  while (!document.querySelector(selector)) {}
  const elem = document.querySelector(selector)!;

  if (import.meta.hot && import.meta.hot.data) {
    if (!(selector in import.meta.hot.data))
      import.meta.hot.data[selector] = {};
    const root = (import.meta.hot.data[selector].root ??= createRoot(elem));
    root.render(app);
  } else createRoot(elem).render(app);
};
