// lib/utils.ts

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Autres utilitaires que vous pourriez ajouter plus tard
export function formatDate(date: Date | string) {
  return new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

// Exemple d'autres utilitaires que vous pourriez ajouter
export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}