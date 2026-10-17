'use client';

import { GlassCard } from '@/components/ui/GlassCard';

export default function MonitoringDashboard() {
  const stats = [
    { label: 'وضعیت سلامت سرویس', value: 'عملیاتی', color: 'text-emerald-400', glow: 'emerald' as const },
    { label: 'زمان پاسخ سرور (p95)', value: '120ms', color: 'text-cyan-400', glow: 'blue' as const },
    { label: 'نرخ تحویل اعلان‌ها', value: '99.8%', color: 'text-cyan-400', glow: 'blue' as const },
    { label: 'فضای مصرفی دام (Media)', value: '45 GB', color: 'text-slate-300', glow: 'none' as const },
  ];

  return (
    <div className="space-y-8">
      <header>
         <h1 className="text-3xl font-bold mb-2">مرکز پایش عملیات (Monitoring)</h1>
         <p className="text-slate-400">داشبورد جامع سلامت زیرساخت، عملکرد و شاخص‌های کلیدی سیستم.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <GlassCard key={i} variant="workspace-2d" glowColor={stat.glow} className="p-6">
             <h3 className="text-sm font-medium text-slate-400 mb-4">{stat.label}</h3>
             <div className={`text-3xl font-bold ${stat.color} font-mono`} dir="ltr">{stat.value}</div>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         <GlassCard variant="workspace-2d" className="p-6">
            <h3 className="text-lg font-medium text-slate-200 mb-6">گزارشات ۱۲ گانه پایش (P11)</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex justify-between border-b border-slate-700/50 pb-2"><span>پایداری مسیرهای کلیدی</span><span className="text-emerald-400">سالم</span></li>
              <li className="flex justify-between border-b border-slate-700/50 pb-2"><span>عملکرد هسته وب (Core Web Vitals)</span><span className="text-emerald-400">A</span></li>
              <li className="flex justify-between border-b border-slate-700/50 pb-2"><span>وضعیت تحویل ایمیل / پیامک</span><span className="text-slate-300">Sandbox Mode</span></li>
              <li className="flex justify-between pb-2"><span>ردیابی دسترسی فایل‌های قرنطینه</span><span className="text-cyan-400">۰ رخداد</span></li>
            </ul>
         </GlassCard>

         <GlassCard variant="workspace-2d" className="p-6">
            <h3 className="text-lg font-medium text-slate-200 mb-6">لاگ سیستمی (زنده)</h3>
            <div className="bg-slate-950 p-4 rounded-lg font-mono text-xs space-y-2 h-[150px] overflow-y-auto">
               <div className="text-slate-500">[10:45:12] <span className="text-cyan-400">INFO</span> DB Migration successful.</div>
               <div className="text-slate-500">[10:46:00] <span className="text-cyan-400">INFO</span> AI Model adapter initialized.</div>
               <div className="text-slate-500">[10:50:23] <span className="text-emerald-400">SUCCESS</span> P11 Monitoring active.</div>
               <div className="text-slate-500 flex items-center gap-2 mt-4"><span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> در انتظار رخداد جدید...</div>
            </div>
         </GlassCard>
      </div>
    </div>
  );
}
