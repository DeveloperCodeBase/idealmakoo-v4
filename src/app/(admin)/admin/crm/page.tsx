'use client';

import { GlassCard } from '@/components/ui/GlassCard';

export default function CrmDashboard() {
  return (
    <div className="space-y-8">
      <header>
         <h1 className="text-3xl font-bold mb-2">کارتابل روزانه فروش و خدمات</h1>
         <p className="text-slate-400">نمای کلی فعالیت‌های CRM، سرنخ‌های جدید و وظایف باز.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard variant="workspace-2d" className="p-6">
           <h3 className="text-lg font-medium text-slate-300 mb-4">سرنخ‌های منتظر بررسی</h3>
           <div className="text-4xl font-bold text-cyan-400">۱۲</div>
        </GlassCard>
        <GlassCard variant="workspace-2d" className="p-6">
           <h3 className="text-lg font-medium text-slate-300 mb-4">ارزش فرصت‌های باز (ریال)</h3>
           <div className="text-4xl font-bold text-emerald-400" dir="ltr">1,250,000,000</div>
        </GlassCard>
        <GlassCard variant="workspace-2d" className="p-6">
           <h3 className="text-lg font-medium text-slate-300 mb-4">تیکت‌های SLA نقض شده</h3>
           <div className="text-4xl font-bold text-rose-400">۰</div>
        </GlassCard>
      </div>
    </div>
  );
}
