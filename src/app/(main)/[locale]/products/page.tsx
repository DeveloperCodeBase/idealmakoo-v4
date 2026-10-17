import { CyberDashboardLayout } from '@/components/ui/CyberDashboardLayout';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlowingButton } from '@/components/ui/GlowingButton';
import { BiDiText } from '@/components/ui/BiDiText';
import { LOCALE_CONFIG, SupportedLocale } from '@/types/domain';
import { mockProducts } from '@/lib/store';
import Link from 'next/link';
import { AuthProvider } from '@/contexts/AuthContext';
import { DemoRoleSwitcher } from '@/components/auth/DemoRoleSwitcher';
import { NeonBadge } from '@/components/ui/NeonBadge';

export default function ProductsPage({ params: { locale } }: { params: { locale: string } }) {
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
            <Link href={`/${currentLocale}/products`} className="px-4 py-2 text-sm text-cyan-400 bg-cyan-950/20 rounded-md border border-cyan-900/50">محصولات</Link>
          </nav>
        }
      >
        <div className="space-y-8 pb-20">
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">کاتالوگ تخصصی محصولات</h1>
              <p className="text-slate-400">مرجع کامل دندان‌های مصنوعی و مواد دندانی ایده‌آل ماکو.</p>
            </div>
            <GlowingButton variant="glass" size="sm" className="hidden md:flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
              فیلترهای پیشرفته
            </GlowingButton>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {mockProducts.map((product) => {
              const localized = product.localized[currentLocale] || product.localized['fa'];
              const isArtificialTeeth = product.family === 'artificial_teeth';

              return (
                <GlassCard key={product.id} variant="workspace-2d" glowColor={isArtificialTeeth ? 'blue' : 'emerald'} className="p-0 overflow-hidden flex flex-col">
                  <div className={`h-2 w-full ${isArtificialTeeth ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 'bg-gradient-to-r from-emerald-500 to-teal-500'}`} />
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <NeonBadge color={isArtificialTeeth ? 'blue' : 'emerald'}>
                            {isArtificialTeeth ? 'دندان مصنوعی' : 'مواد دندانی'}
                          </NeonBadge>
                          <span className="text-xs text-slate-500 font-mono">
                            <BiDiText>{product.productCode}</BiDiText>
                          </span>
                        </div>
                        <h2 className="text-xl font-bold mt-2">{localized.title}</h2>
                        <h3 className="text-sm text-slate-400 mt-1">{localized.subtitle}</h3>
                      </div>
                    </div>

                    <p className="text-sm text-slate-300 mb-6 leading-relaxed flex-1">
                      {localized.shortDescription}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                        <span className="text-slate-500 block mb-1 text-xs">مواردی مصرف:</span>
                        <span className="text-slate-200">{localized.indications[0]} {localized.indications.length > 1 && '...'}</span>
                      </div>
                      <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                        <span className="text-slate-500 block mb-1 text-xs">بسته‌بندی:</span>
                        <span className="text-slate-200">{localized.packagingInfo}</span>
                      </div>
                    </div>

                    <div className="flex gap-3 mt-auto">
                      <GlowingButton variant={isArtificialTeeth ? 'primary' : 'emerald'} className="flex-1">مشاهده جزئیات</GlowingButton>
                      <GlowingButton variant="glass" className="w-12 px-0 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                      </GlowingButton>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
        <DemoRoleSwitcher />
      </CyberDashboardLayout>
    </AuthProvider>
  );
}
