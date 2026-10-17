import '../globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ideal Makoo Admin',
  description: 'Enterprise Admin Dashboard',
};

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${inter.className} bg-canvas text-slate-100 antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
