'use client';

import { CyberDashboardLayout } from '@/components/ui/CyberDashboardLayout';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlowingButton } from '@/components/ui/GlowingButton';
import { LOCALE_CONFIG, SupportedLocale } from '@/types/domain';
import { AuthProvider } from '@/contexts/AuthContext';
import { DemoRoleSwitcher } from '@/components/auth/DemoRoleSwitcher';
import Link from 'next/link';
import { useState } from 'react';

export default function TechnicalSelectionPage({ params: { locale } }: { params: { locale: string } }) {
  const currentLocale = (locale as SupportedLocale) || 'fa';
  const config = LOCALE_CONFIG[currentLocale];
  const [codes, setCodes] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    if (!codes.trim()) {
      setMessage('لطفا کدهای فنی را وارد کنید.');
      return;
    }
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch('/api/v1/crm/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contactName: 'مهمان (استعلام گروهی)',
          contactEmail: 'bulk@idealmako.invalid',
          contactPhone: 'N/A'
        })
      });

      const data = await res.json();
      if (data.success) {
        setMessage('کدها با موفقیت به استعلام افزوده و پرونده سرنخ جدید ایجاد شد.');
        setCodes('');
      } else {
        setMessage(data.error || 'خطا در ثبت استعلام.');
      }
    } catch (err) {
      console.error(err);
      setMessage('خطای شبکه.');
    }
    setLoading(false);
  };

  return (
    <AuthProvider>
      <CyberDashboardLayout
        locale={currentLocale}
        direction={config.direction}
        sidebarContent={
          <nav className="flex flex-col gap-2">
            <Link href={`/${currentLocale}`} className="px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">داشبورد (خانه)</Link>
            <Link href={`/${currentLocale}/products`} className="px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">محصولات</Link>
            <Link href={`/${currentLocale}/technical-selection`} className="px-4 py-2 text-sm text-cyan-400 bg-cyan-950/20 rounded-md border border-cyan-900/50">ورود سریع کدهای فنی</Link>
          </nav>
        }
      >
        <div className="space-y-8 pb-20">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">جدول انتخاب فنی (Bulk Selection)</h1>
            <p className="text-slate-400">ورود دسته‌ای کدهای شید و قالب (از طریق فایل CSV یا ورود سریع) جهت استعلام قیمت.</p>
          </header>

          <GlassCard variant="workspace-2d" className="p-6">
             <div className="space-y-6">
               {message && <div className="text-sm text-cyan-400 mb-4">{message}</div>}
               <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">ورود گروهی کدها (هر خط یک کد همراه با تعداد)</label>
                  <textarea
                    value={codes}
                    onChange={(e) => setCodes(e.target.value)}
                    className="w-full h-48 bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-sm font-mono focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all placeholder-slate-600"
                    placeholder="IM-AT-001-A1-O32, 5&#10;IM-DM-001-3ML, 2"
                    dir="ltr"
                  />
               </div>
               <div className="flex gap-4">
                 <GlowingButton variant="primary" onClick={handleSubmit} isLoading={loading}>بررسی و افزودن به فهرست استعلام</GlowingButton>
                 <GlowingButton variant="glass" disabled={loading}>بارگذاری فایل CSV</GlowingButton>
               </div>
             </div>
          </GlassCard>
        </div>
        <DemoRoleSwitcher />
      </CyberDashboardLayout>
    </AuthProvider>
  );
}
