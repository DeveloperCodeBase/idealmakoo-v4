'use client';

import { GlassCard } from '@/components/ui/GlassCard';
import { GlowingButton } from '@/components/ui/GlowingButton';

const mockOpportunities = [
  { id: 'opp_1', title: 'خرید تجهیزات لابراتوار سینا', amount: '450,000,000', stage: 'proposal' },
  { id: 'opp_2', title: 'تامین مواد کلینیک مهر', amount: '120,000,000', stage: 'negotiation' },
  { id: 'opp_3', title: 'استعلام دانشگاه علوم پزشکی', amount: '800,000,000', stage: 'lead' },
];

export default function OpportunitiesKanban() {
  const stages = [
    { id: 'lead', title: 'سرنخ‌های جدید' },
    { id: 'proposal', title: 'ارسال پیش‌فاکتور' },
    { id: 'negotiation', title: 'مذاکره و ارزیابی نمونه' },
    { id: 'won', title: 'برنده شده (ثبت سفارش)' }
  ];

  return (
    <div className="space-y-8 h-full flex flex-col">
      <header className="flex justify-between items-end">
         <div>
           <h1 className="text-3xl font-bold mb-2">فرصت‌های فروش (Kanban)</h1>
           <p className="text-slate-400">پیگیری مراحل فروش از استعلام تا ثبت نهایی سفارش.</p>
         </div>
         <GlowingButton variant="primary">فرصت جدید</GlowingButton>
      </header>

      <div className="flex-1 flex gap-6 overflow-x-auto pb-4">
        {stages.map(stage => (
          <div key={stage.id} className="w-80 flex-shrink-0 flex flex-col gap-4">
             <div className="flex justify-between items-center bg-slate-800/80 p-3 rounded-lg border border-slate-700/50">
               <h3 className="font-semibold text-slate-200">{stage.title}</h3>
               <span className="text-xs bg-slate-700 px-2 py-1 rounded text-slate-300">
                 {mockOpportunities.filter(o => o.stage === stage.id).length}
               </span>
             </div>

             <div className="flex-1 space-y-3">
               {mockOpportunities.filter(o => o.stage === stage.id).map(opp => (
                 <GlassCard key={opp.id} variant="workspace-2d" className="p-4 cursor-grab active:cursor-grabbing hover:border-cyan-500/50 transition-colors">
                    <h4 className="font-medium text-slate-200 mb-2">{opp.title}</h4>
                    <div className="text-sm text-emerald-400 font-mono" dir="ltr">{opp.amount} IRR</div>
                 </GlassCard>
               ))}

               {mockOpportunities.filter(o => o.stage === stage.id).length === 0 && (
                 <div className="h-24 border-2 border-dashed border-slate-700/50 rounded-xl flex items-center justify-center text-slate-500 text-sm">
                   رها کردن کارت در اینجا
                 </div>
               )}
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
