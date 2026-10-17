'use client';

import { GlassCard } from '@/components/ui/GlassCard';

export default function PublicationsDashboard() {
  return (
    <div className="space-y-8">
      <header className="flex justify-between items-end">
         <div>
           <h1 className="text-3xl font-bold mb-2">زمان‌بندی انتشار (Publications)</h1>
           <p className="text-slate-400">تقویم تحریریه و مدیریت انشعاب‌های زبانی (Locale Releases).</p>
         </div>
      </header>

      <GlassCard variant="workspace-2d" className="p-8 text-center">
         <span className="text-6xl block mb-4 opacity-50">🗓️</span>
         <h3 className="font-bold text-lg text-slate-300">تقویم انتشارات خالی است</h3>
         <p className="text-sm text-slate-500 max-w-sm mx-auto mt-2">محتوایی برای انتشار زمان‌بندی‌شده تنظیم نشده است. می‌توانید مقالات یا محصولات را مستقیماً منتشر کنید.</p>
      </GlassCard>
    </div>
  );
}
