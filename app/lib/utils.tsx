import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const GoToForm = () => {
  const formElement = document.getElementById('form');
  formElement?.scrollIntoView({ behavior: 'smooth' });
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}