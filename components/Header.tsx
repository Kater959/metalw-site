'use client';

import Link from 'next/link';
import { useState } from 'react';
import { getDictionary } from '@/content/site';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';

export function Header({ locale }: { locale: string }) {
  const dict = getDictionary(locale);
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container navbar">
        <div className="mobile-topline">
          <Link href={`/${locale}`} className="brand" onClick={() => setOpen(false)}>
            <span className="brand-mark">METALW</span>
            <span className="brand-sub">Industrial Engineering Systems</span>
          </Link>

          <button
            className={open ? 'mobile-menu-button active' : 'mobile-menu-button'}
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={open ? 'mobile-nav-panel open' : 'mobile-nav-panel'}>
          <nav className="nav-links">
            {dict.nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions">
            <ThemeToggle />
            <LanguageSwitcher locale={locale} />
          </div>
        </div>
      </div>
    </header>
  );
}
