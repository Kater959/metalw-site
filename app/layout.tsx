import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://metalw.ru'),
  title: 'Metalw — Industrial Engineering',
  description: 'Premium multilingual industrial website for tooling, modernization and machine-building.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}
</body>
    </html>
  );
}
