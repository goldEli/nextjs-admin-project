// import { clsx, type ClassValue } from 'clsx';
// import { twMerge } from 'tailwind-merge';

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

// is client in nextjs
export const isClient = () => {
  return typeof window !== "undefined";
};

// random id
export function getRandomId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
