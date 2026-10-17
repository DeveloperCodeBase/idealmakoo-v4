'use client';

import { GlassCard } from '@/components/ui/GlassCard';
import { GlowingButton } from '@/components/ui/GlowingButton';

export default function ScientificReviewsDashboard() {
  return (
    <div className="space-y-8">
      <header className="flex justify-between items-end">
         <div>
           <h1 className="text-3xl font-bold mb-2">بازبینی علمی (Scientific Review)</h1>
           <p className="text-slate-400">تایید مشخصات فنی، مقالات پژوهشی و داده‌های بالینی محصولات.</p>
         </div>
      </header>

      <GlassCard variant="workspace-2d" className="p-6">
         <h3 className="font-medium text-slate-200 mb-4 text-rose-400">صف انتظار بازبینی</h3>
         <div className="border border-slate-700 rounded-xl p-4 bg-slate-900/50">
            <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-700/50">
               <div>
                  <h4 className="font-bold text-lg text-slate-200">مقاله: بررسی میزان سایش دندان‌های نانو-کامپوزیت</h4>
                  <p className="text-xs text-slate-500 mt-1">نسخه: #4 | نویسنده: دکتر احمدی</p>
               </div>
               <span className="bg-rose-900/40 text-rose-400 text-xs px-2 py-1 rounded">منتظر تایید علمی</span>
            </div>

            <div className="mb-4 space-y-2 font-mono text-sm" dir="ltr">
               <div className="flex bg-slate-800 p-2 rounded">
                  <span className="w-24 text-slate-500">- Hardness:</span>
                  <span className="text-rose-400 line-through mr-2">450 HV</span>
               </div>
               <div className="flex bg-slate-800/80 p-2 rounded">
                  <span className="w-24 text-slate-500">+ Hardness:</span>
                  <span className="text-emerald-400">480 HV</span>
               </div>
            </div>

            <div className="flex gap-2">
               <GlowingButton variant="emerald">تایید علمی (Approve)</GlowingButton>
               <GlowingButton variant="danger">رد درخواست (Reject)</GlowingButton>
            </div>
         </div>
      </GlassCard>
    </div>
  );
}
