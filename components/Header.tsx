import Link from 'next/link';
import { getDictionary } from '@/content/site';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';

export function Header({ locale }: { locale: string }) {
  const dict = getDictionary(locale);

  return (
    <header className="header">
      <div className="container navbar">
        <Link href={`/${locale}`} className="brand">
          <span className="brand-mark">METALW</span>
          <span className="brand-sub">{dict.brandSub}</span>
        </Link>
        <nav className="nav-links">
          {dict.nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions"><ThemeToggle /><LanguageSwitcher locale={locale} /></div>
      </div>
    </header>
  );
}
