import Link from 'next/link';
import { getDictionary } from '@/content/site';
import { media } from '@/content/media';
import { AnimatedCounter } from '@/components/AnimatedCounter';

const heroStats = [
  { value: '150+', labelRu: 'проектов', labelEn: 'projects', labelZh: '项目' },
  { value: '12+', labelRu: 'лет опыта', labelEn: 'years of expertise', labelZh: '年经验' },
  { value: '5', labelRu: 'ключевых направлений', labelEn: 'core capabilities', labelZh: '核心方向' },
  { value: '24/7', labelRu: 'проектная поддержка', labelEn: 'project support', labelZh: '项目支持' },
];

function statLabel(locale: string, item: typeof heroStats[number]) {
  if (locale === 'en') return item.labelEn;
  if (locale === 'zh') return item.labelZh;
  return item.labelRu;
}

export function Hero({ locale }: { locale: string }) {
  const dict = getDictionary(locale);

  return (
    <section className="hero hero-v6">
      <div className="hero-v6-media" aria-hidden="true">
        <video
          src={media.heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="hero-v6-overlay" />
      </div>

      <div className="container hero-v6-inner">
        <div className="hero-v6-content">
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

          <div className="hero-v6-stats">
            {heroStats.map((item) => (
              <div className="hero-v6-stat" key={item.value}>
                <strong><AnimatedCounter value={item.value} /></strong>
                <span>{statLabel(locale, item)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-v6-proof">
          <div className="hero-v6-proof-line">
            <span>01</span>
            <p>Проектирование</p>
          </div>
          <div className="hero-v6-proof-line">
            <span>02</span>
            <p>Производство</p>
          </div>
          <div className="hero-v6-proof-line">
            <span>03</span>
            <p>Внедрение</p>
          </div>
        </div>
      </div>
    </section>
  );
}
