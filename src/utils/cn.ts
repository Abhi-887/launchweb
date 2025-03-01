import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * A utility function that merges class names using clsx and tailwind-merge
 * for efficient and conflict-free class name combination.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
