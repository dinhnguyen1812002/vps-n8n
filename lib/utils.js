import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const livechat = (e) => {
  e.preventDefault();

  if (window.Tawk_API) {
    // @ts-ignore
    window.Tawk_API.maximize();
  }
};
