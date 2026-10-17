'use client';

import { CyberDashboardLayout } from '@/components/ui/CyberDashboardLayout';
import { GlassCard } from '@/components/ui/GlassCard';
import { LOCALE_CONFIG, SupportedLocale } from '@/types/domain';
import { AuthProvider } from '@/contexts/AuthContext';
import { DemoRoleSwitcher } from '@/components/auth/DemoRoleSwitcher';
import Link from 'next/link';

export default function DistributorsPage({ params: { locale } }: { params: { locale: string } }) {
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
            <Link href={`/${currentLocale}/distributors`} className="px-4 py-2 text-sm text-cyan-400 bg-cyan-950/20 rounded-md border border-cyan-900/50">شبکه نمایندگان</Link>
          </nav>
        }
      >
        <div className="space-y-8 pb-20">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">شبکه نمایندگان توزیع</h1>
            <p className="text-slate-400">جستجوی نمایندگان رسمی در سراسر کشور و جهان.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1,2,3].map(item => (
              <GlassCard key={item} variant="workspace-2d" className="p-6">
                 <div className="flex justify-between items-start mb-4">
                   <h3 className="font-bold text-lg">تجهیزات دندانپزشکی سینا</h3>
                   <span className="bg-emerald-900/40 text-emerald-400 text-xs px-2 py-1 rounded">نماینده مجاز</span>
                 </div>
                 <p className="text-sm text-slate-400 mb-2">استان تهران - شهر تهران</p>
                 <p className="text-sm text-slate-400 font-mono" dir="ltr">+98 21 88000000</p>
              </GlassCard>
            ))}
          </div>
        </div>
        <DemoRoleSwitcher />
      </CyberDashboardLayout>
    </AuthProvider>
  );
}
