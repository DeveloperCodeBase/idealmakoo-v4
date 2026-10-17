'use client';

import { CyberDashboardLayout } from '@/components/ui/CyberDashboardLayout';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlowingButton } from '@/components/ui/GlowingButton';
import { LOCALE_CONFIG, SupportedLocale } from '@/types/domain';
import { AuthProvider } from '@/contexts/AuthContext';
import { DemoRoleSwitcher } from '@/components/auth/DemoRoleSwitcher';
import Link from 'next/link';

export default function ResearchPortalPage({ params: { locale } }: { params: { locale: string } }) {
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
            <Link href={`/${currentLocale}/for/research`} className="px-4 py-2 text-sm text-cyan-400 bg-cyan-950/20 rounded-md border border-cyan-900/50">پژوهشگران و دانشگاه</Link>
          </nav>
        }
      >
        <div className="space-y-8 pb-20">
          <header className="mb-8 flex items-center gap-4 border-b border-slate-700/50 pb-6">
            <span className="text-5xl">📊</span>
            <div>
              <h1 className="text-3xl font-bold mb-2">درگاه پژوهشگران و دانشگاهیان</h1>
              <p className="text-slate-400">کتابخانه مقالات، داده‌های بالینی و درخواست همکاری پژوهشی.</p>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassCard variant="workspace-2d" className="p-6 md:col-span-2">
               <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-lg text-slate-200">کتابخانه پژوهش (Research Library)</h3>
                  <span className="text-xs bg-slate-800 px-2 py-1 rounded text-slate-300">۱۳ مقاله در دسترس</span>
               </div>

               <div className="space-y-4">
                 <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-colors">
                    <h4 className="font-bold text-slate-200 mb-1">بررسی مقایسه‌ای استحکام باند برشی کامپوزیت‌های نوری</h4>
                    <p className="text-xs text-slate-400 mb-3">مجله دندان‌پزشکی دانشگاه تهران - دوره ۳۲</p>
                    <GlowingButton variant="glass" size="sm">کپی استناد (Citation)</GlowingButton>
                 </div>
                 <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-colors">
                    <h4 className="font-bold text-slate-200 mb-1">ارزیابی میزان سایش دندان‌های مصنوعی نانو-کامپوزیت ایده‌آل ماکو در شبیه‌ساز جویدن</h4>
                    <p className="text-xs text-slate-400 mb-3">کنفرانس بین‌المللی پروتز - ۲۰۲۴</p>
                    <GlowingButton variant="glass" size="sm">کپی استناد (Citation)</GlowingButton>
                 </div>
               </div>
            </GlassCard>

            <GlassCard variant="workspace-2d" className="p-6 h-full flex flex-col">
               <h3 className="font-bold text-lg mb-4 text-emerald-400">طرح پیشنهادی نوآوری</h3>
               <p className="text-slate-400 text-sm mb-6 flex-1">ارسال پروپوزال جهت پروژه‌های مشترک تحقیق و توسعه (R&D) با واحد علمی کارخانه.</p>
               <GlowingButton variant="glass" className="w-full border-emerald-500/30 text-emerald-400 hover:bg-emerald-900/20">ارسال پروپوزال</GlowingButton>
            </GlassCard>

            <GlassCard variant="workspace-2d" className="p-6 h-full flex flex-col">
               <h3 className="font-bold text-lg mb-4 text-cyan-400">درخواست مواد جهت پایان‌نامه</h3>
               <p className="text-slate-400 text-sm mb-6 flex-1">حمایت از دانشجویان مقاطع تکمیلی با ارائه مواد دندانی مورد نیاز طرح‌های پژوهشی.</p>
               <GlowingButton variant="primary" className="w-full">ثبت درخواست دانشگاهی</GlowingButton>
            </GlassCard>
          </div>
        </div>
        <DemoRoleSwitcher />
      </CyberDashboardLayout>
    </AuthProvider>
  );
}
