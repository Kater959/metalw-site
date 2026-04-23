import { getDictionary } from '@/content/site';

export function Footer({ locale }: { locale: string }) {
  const dict = getDictionary(locale);

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand-mark">METALW</div>
          <div className="muted" style={{ marginTop: 10 }}>{dict.footerText}</div>
        </div>
        <div className="muted">© 2026 Metalw</div>
      </div>
    </footer>
  );
}
