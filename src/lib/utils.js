import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function addPrefix(num) {
  if (num < 1000) return num.toString();
  if (num >= 1000 && num < 1000000)
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  if (num >= 1000000 && num < 1000000000)
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  if (num >= 1000000000 && num < 1000000000000)
    return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
  return (num / 1000000000000).toFixed(1).replace(/\.0$/, "") + "T";
}

export function convertToCapitalizedString(str) {
  return str
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
