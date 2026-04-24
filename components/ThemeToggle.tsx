'use client';

import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const saved = window.localStorage.getItem('metalw-theme') as Theme | null;
    const initial = saved === 'light' || saved === 'dark' ? saved : 'dark';
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem('metalw-theme', next);
  };

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Switch color theme">
      <span className="theme-toggle-icon">{theme === 'dark' ? '☀' : '☾'}</span>
      <span className="theme-toggle-text">{theme === 'dark' ? 'Light' : 'Dark'}</span>
    </button>
  );
}
