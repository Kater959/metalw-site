import type { Metadata } from 'next';
import { getDictionary } from '@/content/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MotionLayer } from '@/components/MotionLayer';
import { LoadingScreen } from '@/components/LoadingScreen';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const dict = getDictionary(params.locale);
  return {
    title: dict.metaTitle,
    description: dict.metaDescription,
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <LoadingScreen />
      <MotionLayer />
      <Header locale={params.locale} />
      {children}
      <Footer locale={params.locale} />
    </>
  );
}
