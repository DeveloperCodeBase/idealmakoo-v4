import { LOCALE_CONFIG, SupportedLocale } from '@/types/domain';
import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ideal Makoo Enterprise',
  description: 'Enterprise Platform for Ideal Makoo',
};

export async function generateStaticParams() {
  return Object.keys(LOCALE_CONFIG).map((locale) => ({
    locale,
  }));
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const currentLocale = (locale as SupportedLocale) || 'fa';
  const config = LOCALE_CONFIG[currentLocale] || LOCALE_CONFIG['fa'];

  return (
    <html lang={config.intlLocale} dir={config.direction}>
      <body className={`${inter.className} bg-canvas text-slate-100 antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
