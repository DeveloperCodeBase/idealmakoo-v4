'use client';

import { CyberDashboardLayout } from '@/components/ui/CyberDashboardLayout';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlowingButton } from '@/components/ui/GlowingButton';
import { LOCALE_CONFIG, SupportedLocale } from '@/types/domain';
import { AuthProvider } from '@/contexts/AuthContext';
import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage({ params: { locale } }: { params: { locale: string } }) {
  const currentLocale = (locale as SupportedLocale) || 'fa';
  const config = LOCALE_CONFIG[currentLocale];
  const [email, setEmail] = useState('demo.superadmin@idealmako.invalid');

  return (
    <AuthProvider>
      <CyberDashboardLayout
        locale={currentLocale}
        direction={config.direction}
      >
        <div className="flex items-center justify-center min-h-[80vh]">
          <GlassCard variant="workspace-2d" className="w-full max-w-md p-8">
             <div className="text-center mb-8">
               <h1 className="text-3xl font-bold mb-2">ورود به پورتال سازمانی</h1>
               <p className="text-sm text-slate-400">به پنل مشتریان و کارکنان ایده‌آل ماکو وارد شوید.</p>
             </div>

             <div className="space-y-5">
               <div>
                 <label className="block text-sm text-slate-400 mb-1">ایمیل (حساب دمو)</label>
                 <input
                   type="email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-3 text-sm text-center font-mono focus:border-cyan-500 focus:outline-none"
                   dir="ltr"
                 />
               </div>
               <div>
                 <div className="flex justify-between items-center mb-1 text-sm">
                   <label className="text-slate-400">رمز عبور / OTP</label>
                   <Link href="#" className="text-cyan-400 text-xs">رمز را فراموش کردم؟</Link>
                 </div>
                 <input
                   type="password"
                   placeholder="رمز عبور خود را وارد کنید"
                   className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-3 text-sm focus:border-cyan-500 focus:outline-none text-center"
                   dir="ltr"
                 />
               </div>
               <Link href={`/${currentLocale}/account`} className="block mt-4">
                 <GlowingButton variant="primary" className="w-full py-3">ورود به حساب کاربری</GlowingButton>
               </Link>
             </div>

             <div className="mt-6 text-center text-xs text-slate-500">
               با ورود به حساب کاربری، <Link href="#" className="text-cyan-400">شرایط و قوانین</Link> ایده‌آل ماکو را می‌پذیرید.
             </div>
          </GlassCard>
        </div>
      </CyberDashboardLayout>
    </AuthProvider>
  );
}
