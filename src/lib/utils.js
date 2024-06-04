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

export function timeDifference(dateString) {
  const date = new Date(dateString);
  const currentDate = new Date();
  const diffInMilliseconds = Math.abs(currentDate - date);
  const seconds = Math.floor((diffInMilliseconds / 1000) % 60);
  const minutes = Math.floor((diffInMilliseconds / (1000 * 60)) % 60);
  const hours = Math.floor((diffInMilliseconds / (1000 * 60 * 60)) % 24);
  const days = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) {
    return `${years} year${years > 1 ? "s" : ""} ago`;
  } else if (months > 0) {
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  }
}
