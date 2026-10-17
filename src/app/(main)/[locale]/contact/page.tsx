'use client';

import { CyberDashboardLayout } from '@/components/ui/CyberDashboardLayout';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlowingButton } from '@/components/ui/GlowingButton';
import { LOCALE_CONFIG, SupportedLocale } from '@/types/domain';
import { AuthProvider } from '@/contexts/AuthContext';
import { DemoRoleSwitcher } from '@/components/auth/DemoRoleSwitcher';
import Link from 'next/link';

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
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
            <Link href={`/${currentLocale}/contact`} className="px-4 py-2 text-sm text-cyan-400 bg-cyan-950/20 rounded-md border border-cyan-900/50">تماس و پشتیبانی</Link>
          </nav>
        }
      >
        <div className="space-y-8 pb-20">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">تماس با ما و پشتیبانی</h1>
            <p className="text-slate-400">ثبت تیکت، گزارش کیفیت و دریافت مشاوره.</p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             <GlassCard variant="workspace-2d" className="p-8">
                <h3 className="font-bold text-lg mb-6">فرم ثبت درخواست پشتیبانی</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">موضوع</label>
                    <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm" placeholder="موضوع تیکت خود را وارد کنید" />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">نوع درخواست</label>
                    <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-300">
                      <option value="support">پشتیبانی عمومی</option>
                      <option value="quality">شکایت کیفیت محصول</option>
                      <option value="sales">پیگیری سفارش / فروش</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">توضیحات</label>
                    <textarea className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm h-32" placeholder="جزئیات مشکل را بنویسید"></textarea>
                  </div>
                  <GlowingButton variant="primary" className="w-full">ارسال تیکت</GlowingButton>
                </div>
             </GlassCard>

             <div className="space-y-6">
                <GlassCard variant="workspace-2d" className="p-6">
                   <h3 className="font-bold text-lg mb-4 text-emerald-400">دفتر مرکزی</h3>
                   <p className="text-sm text-slate-300 mb-2">تهران، خیابان ولیعصر، برج دندان‌پزشکی</p>
                   <p className="text-sm text-slate-400 font-mono" dir="ltr">+98 21 0000 0000</p>
                </GlassCard>
                <GlassCard variant="workspace-2d" className="p-6">
                   <h3 className="font-bold text-lg mb-4 text-cyan-400">آدرس کارخانه</h3>
                   <p className="text-sm text-slate-300 mb-2">منطقه آزاد ماکو، شهرک صنعتی</p>
                   <p className="text-sm text-slate-400 font-mono" dir="ltr">+98 44 0000 0000</p>
                </GlassCard>
             </div>
          </div>
        </div>
        <DemoRoleSwitcher />
      </CyberDashboardLayout>
    </AuthProvider>
  );
}
