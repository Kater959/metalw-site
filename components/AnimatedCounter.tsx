'use client';

import { useEffect, useRef, useState } from 'react';

export function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const numberMatch = value.match(/\d+/);
    if (!numberMatch) return;

    const target = Number(numberMatch[0]);
    const prefix = value.slice(0, numberMatch.index);
    const suffix = value.slice((numberMatch.index ?? 0) + numberMatch[0].length);
    let frame = 0;
    let started = false;

    const animate = () => {
      frame += 1;
      const progress = Math.min(frame / 42, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      setDisplay(`${prefix}${current}${suffix}`);
      if (progress < 1) requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        started = true;
        animate();
      }
    }, { threshold: 0.35 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{display}</span>;
}
