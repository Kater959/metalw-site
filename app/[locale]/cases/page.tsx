import { getDictionary } from '@/content/site';
import { PageHero } from '@/components/PageHero';

export default function CasesPage({ params }: { params: { locale: string } }) {
  const dict = getDictionary(params.locale);

  return (
    <>
      <PageHero
        locale={params.locale}
        title={dict.casesTitle}
        lead={dict.casesLead}
        trail={[{ href: '#', label: dict.breadcrumbs.cases }]}
      />
      <section>
        <div className="container">
          <div className="cases-grid">
            {dict.cases.concat(dict.cases).map((item, index) => (
              <div className="case-card" key={`${item.title}-${index}`}>
                <div className="tag">{item.result}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
