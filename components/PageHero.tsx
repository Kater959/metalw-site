import Link from 'next/link';
import { getDictionary } from '@/content/site';

export function PageHero({
  locale,
  title,
  lead,
  trail,
}: {
  locale: string;
  title: string;
  lead: string;
  trail: { href: string; label: string }[];
}) {
  const dict = getDictionary(locale);

  return (
    <section className="page-hero">
      <div className="container">
        <div className="breadcrumbs">
          <Link href={`/${locale}`}>{dict.breadcrumbs.home}</Link>
          {trail.map((item, index) => (
            <span key={item.href}>
              {' / '}
              {index === trail.length - 1 ? item.label : <Link href={item.href}>{item.label}</Link>}
            </span>
          ))}
        </div>
        <span className="eyebrow" style={{ marginTop: 18 }}>{dict.pageIntroLabel}</span>
        <h1>{title}</h1>
        <p className="lead">{lead}</p>
      </div>
    </section>
  );
}
