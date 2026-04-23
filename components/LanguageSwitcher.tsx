import Link from 'next/link';
import { locales } from '@/content/site';

export function LanguageSwitcher({ locale, path = '' }: { locale: string; path?: string }) {
  return (
    <div className="lang-switcher">
      {locales.map((item) => (
        <Link
          key={item}
          href={`/${item}${path}`}
          className={locale === item ? 'active' : ''}
        >
          {item.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
