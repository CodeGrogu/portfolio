import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges class names safely combining clsx conditional logic with tailwind-merge deduping.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
