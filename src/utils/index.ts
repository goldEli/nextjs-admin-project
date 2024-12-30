// import { clsx, type ClassValue } from 'clsx';
// import { twMerge } from 'tailwind-merge';

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

// is client in nextjs
export const isClient = () => {
    return typeof window !== 'undefined'
};
