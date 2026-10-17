'use client';

import { CyberDashboardLayout } from '@/components/ui/CyberDashboardLayout';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlowingButton } from '@/components/ui/GlowingButton';
import { LOCALE_CONFIG, SupportedLocale } from '@/types/domain';
import { AuthProvider } from '@/contexts/AuthContext';
import { DemoRoleSwitcher } from '@/components/auth/DemoRoleSwitcher';
import Link from 'next/link';

export default function ShadeMouldMatcherPage({ params: { locale } }: { params: { locale: string } }) {
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
            <span className="text-xs text-slate-500 uppercase px-4 py-2 mt-4">ابزارهای تخصصی</span>
            <Link href={`/${currentLocale}/tools/shade-mould-matcher`} className="px-4 py-2 text-sm text-cyan-400 bg-cyan-950/20 rounded-md border border-cyan-900/50">تطبیق شید و قالب</Link>
            <Link href={`/${currentLocale}/tools/clinical-protocol`} className="px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">تایمر پروتکل بالینی</Link>
          </nav>
        }
      >
        <div className="space-y-8 pb-20">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">استودیو هوشمند تطبیق شید و قالب</h1>
            <p className="text-slate-400">راهنمای تخصصی انتخاب رنگ و فرم دندان مصنوعی بر اساس ویژگی‌های چهره.</p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <GlassCard variant="workspace-2d" className="p-8">
              <h3 className="font-bold text-lg mb-6 text-slate-200">۱. ویژگی‌های چهره (فرم صورت)</h3>
              <div className="grid grid-cols-3 gap-4 mb-8 text-center">
                <div className="bg-slate-800/50 p-4 rounded-xl border border-cyan-500/50 cursor-pointer">
                  <div className="w-16 h-16 mx-auto bg-slate-700 rounded-full mb-2 clip-square"></div>
                  <span className="text-sm">مربعی</span>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-slate-500 cursor-pointer transition-colors">
                  <div className="w-16 h-20 mx-auto bg-slate-700 rounded-[50%] mb-2"></div>
                  <span className="text-sm">بیضی</span>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-slate-500 cursor-pointer transition-colors">
                  <div className="w-16 h-16 mx-auto bg-slate-700 rounded-full mb-2"></div>
                  <span className="text-sm">گرد</span>
                </div>
              </div>

              <h3 className="font-bold text-lg mb-6 text-slate-200">۲. انتخاب پایه رنگ (Shade)</h3>
              <div className="flex gap-4 flex-wrap mb-6">
                {['A1', 'A2', 'A3', 'A3.5', 'B1', 'B2', 'C1', 'D2'].map(shade => (
                  <button key={shade} className={`px-4 py-2 rounded-lg font-mono font-bold ${shade === 'A2' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700'}`}>
                    {shade}
                  </button>
                ))}
              </div>
            </GlassCard>

            <GlassCard variant="workspace-2d" className="p-8 border-cyan-900/50 bg-slate-900/80">
              <h3 className="font-bold text-xl mb-4 text-cyan-400">پیشنهاد سیستم هوشمند</h3>
              <p className="text-slate-400 mb-6 text-sm">بر اساس فرم صورت مربعی و رنگ A2، قالب‌های زیر پیشنهاد می‌شوند:</p>

              <div className="space-y-4">
                <div className="p-4 bg-slate-800 rounded-lg flex justify-between items-center border border-slate-700">
                  <div>
                    <h4 className="font-bold text-slate-200">کد قالب O32</h4>
                    <p className="text-xs text-slate-500 font-mono mt-1">Anterior / Upper</p>
                  </div>
                  <GlowingButton variant="glass" size="sm">افزودن به استعلام</GlowingButton>
                </div>

                <div className="p-4 bg-slate-800 rounded-lg flex justify-between items-center border border-slate-700">
                  <div>
                    <h4 className="font-bold text-slate-200">کد قالب 133</h4>
                    <p className="text-xs text-slate-500 font-mono mt-1">Posterior / Lower</p>
                  </div>
                  <GlowingButton variant="glass" size="sm">افزودن به استعلام</GlowingButton>
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
