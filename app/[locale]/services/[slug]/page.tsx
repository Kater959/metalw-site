import Link from 'next/link';
import { getDictionary } from '@/content/site';
import { PageHero } from '@/components/PageHero';

export default function ServicePage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const dict = getDictionary(params.locale);
  const page = dict.pages[params.slug as keyof typeof dict.pages] ?? dict.pages.tooling;

  return (
    <>
      <PageHero
        locale={params.locale}
        title={page.title}
        lead={page.lead}
        trail={[
          { href: `/${params.locale}/services/tooling`, label: dict.breadcrumbs.services },
          { href: '#', label: page.title },
        ]}
      />

      <section>
        <div className="container">
          <div className="section-head">
            <div>
              <h2>{page.bodyTitle}</h2>
            </div>
          </div>
          <div className="card">
            {page.body.map((paragraph) => (
              <p key={paragraph} style={{ marginBottom: 16 }}>{paragraph}</p>
            ))}
            <ul className="list">
              {page.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>

          <div className="cta-band">
            <h3 style={{ marginTop: 0 }}>{dict.ctaBandTitle}</h3>
            <p className="muted">{dict.ctaBandText}</p>
            <div className="actions">
              <Link href={`/${params.locale}/contacts`} className="button primary">
                {dict.ctaPrimary}
              </Link>
              <Link href={`/${params.locale}/cases`} className="button secondary">
                {dict.breadcrumbs.cases}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
