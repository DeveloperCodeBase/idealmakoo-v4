'use client';

import { CyberDashboardLayout } from '@/components/ui/CyberDashboardLayout';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlowingButton } from '@/components/ui/GlowingButton';
import { LOCALE_CONFIG, SupportedLocale } from '@/types/domain';
import Link from 'next/link';
import { DemoRoleSwitcher } from '@/components/auth/DemoRoleSwitcher';
import { AuthProvider } from '@/contexts/AuthContext';
import { NeonBadge } from '@/components/ui/NeonBadge';
import { motion } from 'framer-motion';

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
            <Link href={`/${currentLocale}/products`} className="px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">کاتالوگ محصولات</Link>
            <Link href={`/${currentLocale}/tools/shade-mould-matcher`} className="px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">راهنمای انتخاب فرم</Link>
            <Link href={`/${currentLocale}/auth/login`} className="px-4 py-2 text-sm text-emerald-400 mt-4 border border-emerald-900/50 rounded-md">ورود به پورتال</Link>
          </nav>
        }
      >
        <div className="space-y-16 pb-20">

          {/* Hero Section with 3D Depth Concept */}
          <section className="relative pt-10 pb-20 border-b border-slate-800/50">
            <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-6">
                <NeonBadge color="blue">پیشرو در تولید خاورمیانه</NeonBadge>
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                  خلق لبخندی <span className="text-cyan-400">پایدار</span>
                </h1>
                <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                  ایده‌آل ماکو، تولیدکننده برتر دندان‌های مصنوعی ۴ لایه نانو-کامپوزیت و تخصصی‌ترین مواد ترمیمی دندان‌پزشکی با استانداردهای جهانی.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link href={`/${currentLocale}/products`}>
                     <GlowingButton variant="primary" size="lg">مشاهده محصولات</GlowingButton>
                  </Link>
                  <Link href={`/${currentLocale}/about`}>
                     <GlowingButton variant="glass" size="lg">تور مجازی کارخانه</GlowingButton>
                  </Link>
                </div>
              </div>

              {/* 3D Exploded View Representation */}
              <div className="flex-1 w-full max-w-md mx-auto perspective-1000">
                 <motion.div
                    animate={{ rotateY: [0, -10, 0], rotateX: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    className="relative w-full aspect-square preserve-3d"
                 >
                    <div className="absolute inset-0 bg-slate-800 rounded-full border-4 border-slate-700 shadow-2xl opacity-80" style={{ transform: 'translateZ(-40px)' }}></div>
                    <div className="absolute inset-4 bg-cyan-900/40 rounded-full border border-cyan-500/30 backdrop-blur-md" style={{ transform: 'translateZ(0px)' }}></div>
                    <div className="absolute inset-8 bg-white/5 rounded-full border border-white/20 backdrop-blur-xl flex items-center justify-center" style={{ transform: 'translateZ(40px)' }}>
                       <span className="text-6xl filter drop-shadow-[0_0_15px_rgba(0,240,255,0.8)]">🦷</span>
                    </div>
                    <div className="absolute -right-4 top-1/4 bg-slate-900/80 px-3 py-1 rounded border border-slate-700 text-xs text-cyan-400" style={{ transform: 'translateZ(60px)' }}>مینا (Enamel)</div>
                    <div className="absolute -left-4 bottom-1/4 bg-slate-900/80 px-3 py-1 rounded border border-slate-700 text-xs text-emerald-400" style={{ transform: 'translateZ(20px)' }}>عاج (Dentin)</div>
                 </motion.div>
              </div>
            </div>
          </section>

          {/* Product Families */}
          <section className="space-y-8">
             <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold">خانواده محصولات</h2>
                <p className="text-slate-400">تنوعی بی‌نظیر برای پاسخگویی به نیازهای کلینیک و لابراتوار.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <GlassCard variant="showcase-3d" glowColor="blue" className="p-8 group cursor-pointer h-full">
                 <div className="w-16 h-16 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 mb-6 group-hover:scale-110 transition-transform">
                   <span className="text-3xl">🦷</span>
                 </div>
                 <h3 className="text-2xl font-bold mb-3 text-slate-200">دندان مصنوعی (Teeth)</h3>
                 <p className="text-slate-400 mb-6 leading-relaxed">
                    نسل جدید دندان‌های مصنوعی با تکنولوژی لایه‌گذاری سه‌بعدی و مواد پایه PMMA نانو-کامپوزیت برای حداکثر مقاومت در برابر سایش و تغییر رنگ.
                 </p>
                 <ul className="space-y-2 mb-8 text-sm text-slate-300">
                    <li className="flex items-center gap-2"><span className="text-cyan-400">✓</span> اکریلیک چندلایه (Multilayer)</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-400">✓</span> ثبات رنگ در گذر زمان</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-400">✓</span> قالب‌های متنوع قدامی و خلفی</li>
                 </ul>
               </GlassCard>

               <GlassCard variant="showcase-3d" glowColor="emerald" className="p-8 group cursor-pointer h-full">
                 <div className="w-16 h-16 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-6 group-hover:scale-110 transition-transform">
                   <span className="text-3xl">🧪</span>
                 </div>
                 <h3 className="text-2xl font-bold mb-3 text-slate-200">مواد دندانی (Materials)</h3>
                 <p className="text-slate-400 mb-6 leading-relaxed">
                    طیف گسترده‌ای از مواد شیمیایی، ترمیمی و لابراتواری شامل اسید اچ، باندینگ، سیلر و کامپوزیت‌های نوری با تاییدیه‌های معتبر کیفی.
                 </p>
                 <ul className="space-y-2 mb-8 text-sm text-slate-300">
                    <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> ژل اسید فسفریک با ویسکوزیته ایده‌آل</li>
                    <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> رزین‌های اتصال‌دهنده نسل پیشرفته</li>
                    <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> مواد قالب‌گیری دقیق لابراتواری</li>
                 </ul>
               </GlassCard>
             </div>
          </section>

          {/* 4 Audience Portals */}
          <section className="pt-10">
            <h2 className="text-2xl font-bold mb-6">درگاه‌های تخصصی مخاطبان</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
               {[
                 { title: 'دندان‌پزشکان', icon: '👨‍⚕️', link: 'dentist', desc: 'پروتکل‌های بالینی و مشخصات فنی' },
                 { title: 'لابراتوارها', icon: '🔬', link: 'lab', desc: 'جدول قالب و راهنمای شید رنگ' },
                 { title: 'نمایندگان توزیع', icon: '🤝', link: 'dealer', desc: 'استعلام قیمت و پیش‌فاکتور' },
                 { title: 'پژوهشگران', icon: '📊', link: 'research', desc: 'مقالات علمی و آزمون‌های استحکام' }
               ].map((aud, i) => (
                 <Link href={`/${currentLocale}/for/${aud.link}`} key={i}>
                   <GlassCard variant="workspace-2d" className="p-6 text-center hover:bg-slate-800/80 transition-colors h-full flex flex-col justify-center">
                      <span className="text-4xl mb-4 block">{aud.icon}</span>
                      <h4 className="font-bold text-slate-200 mb-1">{aud.title}</h4>
                      <p className="text-xs text-slate-500">{aud.desc}</p>
                   </GlassCard>
                 </Link>
               ))}
            </div>
          </section>

          {/* Stats */}
          <section className="py-12 border-t border-slate-800/50">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                   <div className="text-4xl font-bold text-cyan-400 mb-2 font-mono" dir="ltr">+40</div>
                   <div className="text-sm text-slate-400">سال تجربه تولید</div>
                </div>
                <div>
                   <div className="text-4xl font-bold text-emerald-400 mb-2 font-mono" dir="ltr">17</div>
                   <div className="text-sm text-slate-400">محصول تخصصی</div>
                </div>
                <div>
                   <div className="text-4xl font-bold text-slate-200 mb-2 font-mono" dir="ltr">+500</div>
                   <div className="text-sm text-slate-400">نماینده فعال</div>
                </div>
                <div>
                   <div className="text-4xl font-bold text-amber-400 mb-2 font-mono" dir="ltr">ISO</div>
                   <div className="text-sm text-slate-400">13485:2016</div>
                </div>
             </div>
          </section>

        </div>
        <DemoRoleSwitcher />
      </CyberDashboardLayout>
    </AuthProvider>
  );
}
