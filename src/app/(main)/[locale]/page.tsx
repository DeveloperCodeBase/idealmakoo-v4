import { CyberDashboardLayout } from '@/components/ui/CyberDashboardLayout';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlowingButton } from '@/components/ui/GlowingButton';
import { LOCALE_CONFIG, SupportedLocale } from '@/types/domain';
import Link from 'next/link';
import { DemoRoleSwitcher } from '@/components/auth/DemoRoleSwitcher';
import { AuthProvider } from '@/contexts/AuthContext';
import { NeonBadge } from '@/components/ui/NeonBadge';

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  const currentLocale = (locale as SupportedLocale) || 'fa';
  const config = LOCALE_CONFIG[currentLocale];

  return (
    <AuthProvider>
      <CyberDashboardLayout
        locale={currentLocale}
        direction={config.direction}
        sidebarContent={
          <nav className="flex flex-col gap-2">
            <Link href={`/${currentLocale}`} className="px-4 py-2 text-sm text-cyan-400 bg-cyan-950/20 rounded-md border border-cyan-900/50">داشبورد (خانه)</Link>
            <Link href={`/${currentLocale}/products`} className="px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">محصولات</Link>
          </nav>
        }
      >
        <div className="space-y-8 pb-20">
          <header className="mb-10">
            <h1 className="text-4xl font-bold mb-4 tracking-tight">پلتفرم سازمانی ایده‌آل ماکو</h1>
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
              سیستم جامع مدیریت محتوا، محصولات، ارتباط با مشتری (CRM)، تیکتینگ و دستیار هوشمند، طراحی شده با معماری شیشه‌ای و سه‌بعدی.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GlassCard variant="showcase-3d" glowColor="blue" className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                  <span className="text-2xl">🦷</span>
                </div>
                <NeonBadge color="blue">موجود: ۱۷ مورد</NeonBadge>
              </div>
              <h3 className="text-xl font-semibold mb-2">مدیریت محصولات</h3>
              <p className="text-sm text-slate-400 mb-6 line-clamp-2">
                کاتالوگ تخصصی دندان‌های مصنوعی و مواد ترمیمی با قابلیت جستجو، فیلتر و انتخاب هوشمند شید و قالب.
              </p>
              <Link href={`/${currentLocale}/products`}>
                <GlowingButton variant="primary" className="w-full">مشاهده کاتالوگ</GlowingButton>
              </Link>
            </GlassCard>

            <GlassCard variant="showcase-3d" glowColor="emerald" className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                  <span className="text-2xl">👥</span>
                </div>
                <NeonBadge color="emerald">فعال</NeonBadge>
              </div>
              <h3 className="text-xl font-semibold mb-2">سامانه CRM سازمانی</h3>
              <p className="text-sm text-slate-400 mb-6 line-clamp-2">
                مدیریت سرنخ‌ها، فرصت‌های فروش، پیش‌فاکتورهای ارزی و پیگیری پرونده‌های مشتریان B2B.
              </p>
              <GlowingButton variant="emerald" className="w-full">ورود به CRM</GlowingButton>
            </GlassCard>

            <GlassCard variant="showcase-3d" glowColor="amber" className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                  <span className="text-2xl">🤖</span>
                </div>
                <NeonBadge color="amber">آزمایشی</NeonBadge>
              </div>
              <h3 className="text-xl font-semibold mb-2">استودیو هوش مصنوعی</h3>
              <p className="text-sm text-slate-400 mb-6 line-clamp-2">
                تولید محتوا، ترجمه تخصصی ۵ زبانه، دستیار CRM و چت‌بات مستند کارخانه (RAG).
              </p>
              <GlowingButton variant="glass" className="w-full text-white hover:text-white">باز کردن استودیو</GlowingButton>
            </GlassCard>
          </div>
        </div>
        <DemoRoleSwitcher />
      </CyberDashboardLayout>
    </AuthProvider>
  );
}
