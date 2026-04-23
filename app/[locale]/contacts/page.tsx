import { getDictionary } from '@/content/site';
import { PageHero } from '@/components/PageHero';

export default function ContactsPage({ params }: { params: { locale: string } }) {
  const dict = getDictionary(params.locale);

  return (
    <>
      <PageHero
        locale={params.locale}
        title={dict.contactsTitle}
        lead={dict.contactsLead}
        trail={[{ href: '#', label: dict.breadcrumbs.contacts }]}
      />
      <section>
        <div className="container">
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
