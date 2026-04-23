import Link from 'next/link';
import { getDictionary } from '@/content/site';

export function Hero({ locale }: { locale: string }) {
  const dict = getDictionary(locale);

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">{dict.heroEyebrow}</span>
          <h1>{dict.heroTitle}</h1>
          <p className="lead">{dict.heroLead}</p>
          <div className="actions">
            <Link href={`/${locale}/contacts`} className="button primary">
              {dict.ctaPrimary}
            </Link>
            <Link href={`/${locale}/contacts`} className="button secondary">
              {dict.ctaSecondary}
            </Link>
          </div>
        </div>
        <div className="hero-panel">
          <div className="hero-visual-shell">
            <div className="machine-grid" />
            <div className="machine-lines" />
            <div className="machine-model" />
            <div className="metal-beam" />
            <div className="machine-points">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
