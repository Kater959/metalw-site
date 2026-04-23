'use client';

import { useEffect } from 'react';

export function MotionLayer() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.card, .service-card, .case-card, .contact-card, .cta-band');
    let raf = 0;

    const setMotionVars = (event: MouseEvent) => {
      const x = event.clientX - window.innerWidth / 2;
      const y = event.clientY - window.innerHeight / 2;

      document.documentElement.style.setProperty('--parallax-x', `${x / 18}`);
      document.documentElement.style.setProperty('--parallax-y', `${y / 18}`);

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const localX = event.clientX - rect.left;
        const localY = event.clientY - rect.top;

        if (localX >= 0 && localY >= 0 && localX <= rect.width && localY <= rect.height) {
          card.style.setProperty('--mx', `${localX}px`);
          card.style.setProperty('--my', `${localY}px`);
        }
      });
    };

    const handleMove = (event: MouseEvent) => {
      window.cancelAnimationFrame(raf);
      raf = window.requestAnimationFrame(() => setMotionVars(event));
    };

    const handleScroll = () => {
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}`);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}
