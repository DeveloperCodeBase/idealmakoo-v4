'use client';

import { GlassCard } from '@/components/ui/GlassCard';
import { GlowingButton } from '@/components/ui/GlowingButton';

const mockCases = [
  { id: 'TKT-1042', subject: 'مشکل در شستشوی اسید اچ', kind: 'quality', priority: 'high', status: 'investigating', sla: '02:15:00', assignee: 'علی رضایی' },
  { id: 'TKT-1043', subject: 'درخواست راهنمای پخت نانو-کامپوزیت', kind: 'support', priority: 'normal', status: 'waiting_customer', sla: 'paused', assignee: 'سارا احمدی' },
  { id: 'TKT-1044', subject: 'پیگیری ارسال پیش‌فاکتور دوم', kind: 'sales', priority: 'normal', status: 'received', sla: '04:00:00', assignee: '-' },
];

export default function CasesDashboard() {
  return (
    <div className="space-y-8">
      <header className="flex justify-between items-end">
         <div>
           <h1 className="text-3xl font-bold mb-2">میز خدمت و سیستم تیکتینگ</h1>
           <p className="text-slate-400">رسیدگی به درخواست‌های پشتیبانی و قرنطینه شکایات کیفیت محصولات.</p>
         </div>
      </header>

      <GlassCard variant="workspace-2d" className="p-6">
         <div className="overflow-x-auto">
           <table className="w-full text-sm text-left rtl:text-right text-slate-300">
             <thead className="text-xs text-slate-400 uppercase bg-slate-800/50">
               <tr>
                 <th scope="col" className="px-6 py-3">شناسه</th>
                 <th scope="col" className="px-6 py-3">موضوع</th>
                 <th scope="col" className="px-6 py-3">نوع درخواست</th>
                 <th scope="col" className="px-6 py-3">وضعیت</th>
                 <th scope="col" className="px-6 py-3">زمان باقی‌مانده (SLA)</th>
                 <th scope="col" className="px-6 py-3">مسئول</th>
                 <th scope="col" className="px-6 py-3">عملیات</th>
               </tr>
             </thead>
             <tbody>
               {mockCases.map((c) => (
                 <tr key={c.id} className={`border-b border-slate-700/50 hover:bg-slate-800/30 ${c.kind === 'quality' ? 'bg-rose-950/10' : ''}`}>
                   <td className="px-6 py-4 font-mono text-xs" dir="ltr">{c.id}</td>
                   <td className="px-6 py-4 font-medium text-slate-200">{c.subject}</td>
                   <td className="px-6 py-4">
                     <span className={`px-2 py-1 rounded text-xs ${c.kind === 'quality' ? 'bg-rose-900/40 text-rose-400 border border-rose-500/20' : 'bg-slate-800 text-slate-300'}`}>
                       {c.kind === 'quality' ? 'شکایت کیفیت (قرنطینه)' : 'پشتیبانی عمومی'}
                     </span>
                   </td>
                   <td className="px-6 py-4">
                     <span className="text-cyan-400 text-xs">{c.status}</span>
                   </td>
                   <td className="px-6 py-4 font-mono text-xs" dir="ltr">
                      <span className={c.sla === 'paused' ? 'text-slate-500' : 'text-emerald-400'}>{c.sla}</span>
                   </td>
                   <td className="px-6 py-4 text-xs">{c.assignee}</td>
                   <td className="px-6 py-4">
                     <GlowingButton variant="glass" size="sm">بررسی پرونده</GlowingButton>
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
