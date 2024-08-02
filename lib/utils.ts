import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function validateSize(img: File) {
  const maxSize = 5 * 1024 * 1024; // 5MB in bytes
  if (img.size > maxSize) {
      return true;
  }
  return false;
}


export function isImage(filename: string) {
    // by checking the extension of the filename, if it is jpg, jpeg, png, then it is an image,
    // otherwise it is not an image, then return false
    const ext = filename.split('.').pop();
    // if the extension is not jpg, jpeg, png, then return false
    if (ext !== 'jpg' && ext !== 'jpeg' && ext !== 'png') {
        return false;
    }
    return true;
}
