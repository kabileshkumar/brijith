import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility function to handle image paths for both development and production
export function getImagePath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // For production, use relative path without leading slash
  if (import.meta.env.PROD) {
    return cleanPath;
  }
  
  // For development, use absolute path
  return `/${cleanPath}`;
}

// Alternative function for background images
export function getBackgroundImagePath(path: string): string {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  if (import.meta.env.PROD) {
    return `url(${cleanPath})`;
  }
  
  return `url(/${cleanPath})`;
}
