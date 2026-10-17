'use client';

import { CyberDashboardLayout } from '@/components/ui/CyberDashboardLayout';
import { GlassCard } from '@/components/ui/GlassCard';
import { LOCALE_CONFIG, SupportedLocale } from '@/types/domain';
import { AuthProvider } from '@/contexts/AuthContext';
import { DemoRoleSwitcher } from '@/components/auth/DemoRoleSwitcher';
import Link from 'next/link';

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  const currentLocale = (locale as SupportedLocale) || 'fa';
  const config = LOCALE_CONFIG[currentLocale];

  return (
    <AuthProvider>
      <CyberDashboardLayout
        locale={currentLocale}
        direction={config.direction}
        sidebarContent={
          <nav className="flex flex-col gap-2">
            <Link href={`/${currentLocale}`} className="px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">داشبورد (خانه)</Link>
            <Link href={`/${currentLocale}/products`} className="px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">محصولات</Link>
            <Link href={`/${currentLocale}/about`} className="px-4 py-2 text-sm text-cyan-400 bg-cyan-950/20 rounded-md border border-cyan-900/50">درباره کارخانه</Link>
          </nav>
        }
      >
        <div className="space-y-8 pb-20">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">درباره کارخانه ایده‌آل ماکو</h1>
            <p className="text-slate-400">تاریخچه، رسالت و خط زمان توسعه از سال ۱۳۶۰ تاکنون.</p>
          </header>

          <GlassCard variant="workspace-2d" className="p-8">
             <div className="prose prose-invert max-w-none">
                <h3>رسالت ما</h3>
                <p className="text-slate-300 leading-relaxed">
                  کارخانه تولید دندان مصنوعی و مواد دندانی ایده‌آل ماکو با هدف ارتقای سلامت دهان و دندان جامعه، در زمینه تولید باکیفیت‌ترین مواد دندان‌پزشکی فعالیت می‌کند.
                </p>
                <div className="mt-8 border-l-2 border-cyan-500 pl-6 rtl:pr-6 rtl:border-l-0 rtl:border-r-2 rtl:border-cyan-500">
                   <h4 className="font-bold text-lg text-slate-200">۱۳۶۰</h4>
                   <p className="text-sm text-slate-400">تاسیس کارخانه و شروع فعالیت.</p>
                   <h4 className="font-bold text-lg text-slate-200 mt-4">۱۳۸۵</h4>
                   <p className="text-sm text-slate-400">توسعه خط تولید دندان‌های اکریلیک ۴ لایه.</p>
                   <h4 className="font-bold text-lg text-slate-200 mt-4">۱۴۰۳</h4>
                   <p className="text-sm text-slate-400">راه‌اندازی پلتفرم جامع B2B هوشمند.</p>
                </div>
             </div>
          </GlassCard>
        </div>
        <DemoRoleSwitcher />
      </CyberDashboardLayout>
    </AuthProvider>
  );
}
