'use client';

import Link from 'next/link';
import { useState } from 'react';
import { getDictionary } from '@/content/site';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';

export function Header({ locale }: { locale: string }) {
  const dict = getDictionary(locale);
  const [open, setOpen] = useState(false);

  const links = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/tooling`, label: dict.nav.tooling },
    { href: `/${locale}/modernization`, label: dict.nav.modernization },
    { href: `/${locale}/cases`, label: dict.nav.cases },
    { href: `/${locale}/contacts`, label: dict.nav.contacts },
  ];

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
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={open ? 'mobile-nav-panel open' : 'mobile-nav-panel'}>
          <nav className="nav-links">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
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
