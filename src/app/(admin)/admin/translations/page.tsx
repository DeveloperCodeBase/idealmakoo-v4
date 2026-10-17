'use client';

import { GlassCard } from '@/components/ui/GlassCard';
import { GlowingButton } from '@/components/ui/GlowingButton';

const mockTranslations = [
  { id: 1, docId: 'prod_ideal_teeth', lang: 'en', progress: 100, status: 'synced', stale: false },
  { id: 2, docId: 'prod_ideal_teeth', lang: 'ar', progress: 85, status: 'translating', stale: true },
  { id: 3, docId: 'prod_ideal_teeth', lang: 'ru', progress: 0, status: 'missing', stale: true },
];

export default function TranslationsDashboard() {
  return (
    <div className="space-y-8">
      <header className="flex justify-between items-end">
         <div>
           <h1 className="text-3xl font-bold mb-2">میزکار ترجمه ۵ زبانه</h1>
           <p className="text-slate-400">مدیریت ترجمه‌ها و همگام‌سازی محتوا (RTL/LTR).</p>
         </div>
      </header>

      <GlassCard variant="workspace-2d" className="p-6">
         <h3 className="font-medium text-slate-200 mb-4">وضعیت ترجمه‌های سند: دندان مصنوعی ایده‌آل</h3>
         <div className="overflow-x-auto">
           <table className="w-full text-sm text-left rtl:text-right text-slate-300">
             <thead className="text-xs text-slate-400 uppercase bg-slate-800/50">
               <tr>
                 <th scope="col" className="px-6 py-3">زبان</th>
                 <th scope="col" className="px-6 py-3">پیشرفت (%)</th>
                 <th scope="col" className="px-6 py-3">وضعیت همگام‌سازی</th>
                 <th scope="col" className="px-6 py-3">عملیات</th>
               </tr>
             </thead>
             <tbody>
               {mockTranslations.map((t) => (
                 <tr key={t.id} className="border-b border-slate-700/50 hover:bg-slate-800/30">
                   <td className="px-6 py-4 font-mono text-xs uppercase" dir="ltr">{t.lang}</td>
                   <td className="px-6 py-4">
                     <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                           <div className="h-full bg-cyan-500" style={{ width: `${t.progress}%` }}></div>
                        </div>
                        <span className="text-xs font-mono">{t.progress}%</span>
                     </div>
                   </td>
                   <td className="px-6 py-4">
                     {t.stale ? (
                        <span className="text-amber-400 text-xs px-2 py-1 bg-amber-900/40 rounded">نیاز به بروزرسانی (Stale)</span>
                     ) : (
                        <span className="text-emerald-400 text-xs px-2 py-1 bg-emerald-900/40 rounded">همگام (Synced)</span>
                     )}
                   </td>
                   <td className="px-6 py-4">
                     <GlowingButton variant="glass" size="sm">ورود به محیط ترجمه</GlowingButton>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
      </GlassCard>
    </div>
  );
}
