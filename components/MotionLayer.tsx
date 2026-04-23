'use client';

import { useEffect } from 'react';

export function MotionLayer() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.card, .service-card, .case-card, .contact-card, .cta-band');

    const handleMove = (event: MouseEvent) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
          card.style.setProperty('--mx', `${x}px`);
          card.style.setProperty('--my', `${y}px`);
        }
      });
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return null;
}
