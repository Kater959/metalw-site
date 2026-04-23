import Link from 'next/link';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { MediaShowcase } from '@/components/MediaShowcase';
import { RealCases } from '@/components/RealCases';
import { VideoBand } from '@/components/VideoBand';
import { ModelShowcase } from '@/components/ModelShowcase';
import { getDictionary } from '@/content/site';
import { Hero } from '@/components/Hero';

export default function LocaleHome({ params }: { params: { locale: string } }) {
  const dict = getDictionary(params.locale);

  return (
    <>
      <Hero locale={params.locale} />
      <div className="premium-divider" />

      <section>
        <div className="container">
          <div className="section-head">
            <div>
              <h2>{dict.statsTitle}</h2>
            </div>
            <p>{dict.statsLead}</p>
          </div>
          <div className="stat-grid">
            {dict.stats.map((item) => (
              <div className="card" key={item.label}>
                <div className="kicker">{item.label}</div>
                <div className="big-number"><AnimatedCounter value={item.value} /></div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MediaShowcase />
      <ModelShowcase />

      <section>
        <div className="container">
          <div className="section-head">
            <div>
              <h2>{dict.servicesTitle}</h2>
            </div>
            <p>{dict.servicesLead}</p>
          </div>
          <div className="service-grid">
            {dict.services.map((item) => (
              <div className="service-card" key={item.slug}>
                <div className="kicker">Service</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ul className="list">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="actions" style={{ marginTop: 20 }}>
                  <Link href={`/${params.locale}/services/${item.slug}`} className="button secondary">
                    Подробнее
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div>
              <h2>{dict.featuresTitle}</h2>
            </div>
            <p>{dict.featuresLead}</p>
          </div>
          <div className="feature-grid">
            {dict.features.map((item) => (
              <div className="card" key={item.title}>
                <h3 style={{ marginTop: 0 }}>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div className="cta-band">
            <h3 style={{ marginTop: 0 }}>{dict.ctaBandTitle}</h3>
            <p style={{ marginBottom: 0 }} className="muted">{dict.ctaBandText}</p>
          </div>
        </div>
      </section>

      <VideoBand />
      <RealCases />

      <section>
        <div className="container">
          <div className="section-head">
            <div>
              <h2>{dict.casesTitle}</h2>
            </div>
            <p>{dict.casesLead}</p>
          </div>
          <div className="cases-grid">
            {dict.cases.map((item) => (
              <div className="case-card" key={item.title}>
                <div className="tag">{item.result}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div className="actions">
            <Link href={`/${params.locale}/cases`} className="button secondary">Все кейсы</Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div>
              <h2>{dict.industriesTitle}</h2>
            </div>
          </div>
          <div className="actions">
            {dict.industries.map((item) => (
              <span className="tag" key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div>
              <h2>{dict.contactsTitle}</h2>
            </div>
            <p>{dict.contactsLead}</p>
          </div>
          <div className="contact-grid">
            {dict.contacts.map((item) => (
              <div className="contact-card" key={item.title}>
                <h3>{item.title}</h3>
                <p style={{ whiteSpace: 'pre-line' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
