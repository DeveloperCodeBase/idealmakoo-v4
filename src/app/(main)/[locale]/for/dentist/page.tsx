'use client';

import { CyberDashboardLayout } from '@/components/ui/CyberDashboardLayout';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlowingButton } from '@/components/ui/GlowingButton';
import { LOCALE_CONFIG, SupportedLocale } from '@/types/domain';
import { AuthProvider } from '@/contexts/AuthContext';
import { DemoRoleSwitcher } from '@/components/auth/DemoRoleSwitcher';
import Link from 'next/link';

export default function DentistPortalPage({ params: { locale } }: { params: { locale: string } }) {
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
            <span className="text-xs text-slate-500 uppercase px-4 py-2 mt-4">درگاه مخاطبین</span>
            <Link href={`/${currentLocale}/for/dentist`} className="px-4 py-2 text-sm text-cyan-400 bg-cyan-950/20 rounded-md border border-cyan-900/50">ویژه دندان‌پزشکان</Link>
          </nav>
        }
      >
        <div className="space-y-8 pb-20">
          <header className="mb-8 flex items-center gap-4 border-b border-slate-700/50 pb-6">
            <span className="text-5xl">👨‍⚕️</span>
            <div>
              <h1 className="text-3xl font-bold mb-2">درگاه ویژه دندان‌پزشکان</h1>
              <p className="text-slate-400">دسترسی سریع به پروتکل‌های بالینی، مشخصات فنی مواد و درخواست نمونه.</p>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassCard variant="workspace-2d" className="p-6 h-full flex flex-col">
               <h3 className="font-bold text-lg mb-4 text-cyan-400">ابزارهای بالینی (Clinical Tools)</h3>
               <p className="text-slate-400 text-sm mb-6 flex-1">دسترسی به تایمر هوشمند و پروتکل‌های گام‌به‌گام مصرف مواد ترمیمی ایده‌آل ماکو.</p>
               <Link href={`/${currentLocale}/tools/clinical-protocol`}>
                 <GlowingButton variant="primary" className="w-full">باز کردن تایمر بالینی</GlowingButton>
               </Link>
            </GlassCard>

            <GlassCard variant="workspace-2d" className="p-6 h-full flex flex-col">
               <h3 className="font-bold text-lg mb-4 text-emerald-400">درخواست نمونه محصول</h3>
               <p className="text-slate-400 text-sm mb-6 flex-1">ثبت درخواست ارسال نمونه رایگان (Sample) جهت ارزیابی در کلینیک.</p>
               <GlowingButton variant="glass" className="w-full border-emerald-500/30 text-emerald-400 hover:bg-emerald-900/20">ثبت درخواست نمونه</GlowingButton>
            </GlassCard>

            <GlassCard variant="workspace-2d" className="p-6 md:col-span-2">
               <h3 className="font-bold text-lg mb-4 text-slate-200">مرکز دانلود (IFU / SDS)</h3>
               <div className="space-y-3">
                 <div className="flex justify-between items-center p-3 bg-slate-800 rounded-lg border border-slate-700">
                    <span className="text-sm">راهنمای استفاده (IFU) - کامپوزیت نوری خلفی</span>
                    <GlowingButton variant="glass" size="sm">دانلود PDF</GlowingButton>
                 </div>
                 <div className="flex justify-between items-center p-3 bg-slate-800 rounded-lg border border-slate-700">
                    <span className="text-sm">برگه اطلاعات ایمنی (SDS) - اسید اچ ۳۷٪</span>
                    <GlowingButton variant="glass" size="sm">دانلود PDF</GlowingButton>
                 </div>
               </div>
            </GlassCard>
          </div>
        </div>
        <DemoRoleSwitcher />
      </CyberDashboardLayout>
    </AuthProvider>
  );
}
