// lib/scrollToSection.ts
'use client';

import { useRouter, usePathname } from 'next/navigation';

export function useScrollToSection() {
  const router = useRouter();
  const pathname = usePathname();

  const scrollTo = (id: string) => {
    if (pathname !== '/') {
      router.push(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return scrollTo;
}
