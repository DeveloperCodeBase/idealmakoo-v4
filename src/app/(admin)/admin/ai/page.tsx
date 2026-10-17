'use client';

import { GlassCard } from '@/components/ui/GlassCard';
import { GlowingButton } from '@/components/ui/GlowingButton';
import { useState } from 'react';
import { NeonBadge } from '@/components/ui/NeonBadge';

export default function AIStudioDashboard() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResponse('');

    try {
      const res = await fetch('/api/v1/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [{ role: 'user', content: prompt }] })
      });
      const data = await res.json();
      setResponse(data.response || data.error);
    } catch (err) {
      console.error(err);
      setResponse('خطا در برقراری ارتباط با سرویس AI.');
    }

    setLoading(false);
  };

  return (
    <div className="space-y-8">
      <header className="flex justify-between items-end">
         <div>
           <div className="flex items-center gap-3 mb-2">
             <h1 className="text-3xl font-bold">استودیو هوش مصنوعی (AI Studio)</h1>
             <NeonBadge color="amber">آزمایشی / Sandbox</NeonBadge>
           </div>
           <p className="text-slate-400">تولید متن، بازنویسی، ترجمه ۵ زبانه و چت‌بات مستند کارخانه (RAG).</p>
         </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard variant="workspace-2d" className="p-6 flex flex-col h-[500px]">
           <h3 className="font-medium text-slate-200 mb-4">آزمایشگاه تولید محتوا و چت</h3>

           <div className="flex-1 bg-slate-900/50 rounded-xl border border-slate-700 p-4 mb-4 overflow-y-auto">
              {response ? (
                <div className="text-sm text-emerald-300 leading-relaxed whitespace-pre-wrap">{response}</div>
              ) : (
                <div className="text-sm text-slate-500 h-full flex items-center justify-center">پاسخ هوش مصنوعی در اینجا نمایش داده می‌شود...</div>
              )}
           </div>

           <div className="flex gap-2">
             <textarea
               value={prompt}
               onChange={(e) => setPrompt(e.target.value)}
               className="flex-1 bg-slate-800 border border-slate-600 rounded-xl p-3 text-sm focus:outline-none focus:border-cyan-500 resize-none h-14"
               placeholder="درخواست خود را بنویسید (مثلاً: یک پیام خوش‌آمدگویی بنویس)..."
             />
             <GlowingButton variant="primary" onClick={handleGenerate} isLoading={loading} className="w-14 px-0 flex items-center justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
             </GlowingButton>
           </div>
        </GlassCard>

        <div className="space-y-6">
          <GlassCard variant="workspace-2d" className="p-6">
             <h3 className="font-medium text-slate-200 mb-4">وضعیت اتصال و بودجه</h3>
             <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50 text-sm">
                  <span className="text-slate-400">سرویس‌دهنده</span>
                  <span className="text-slate-200 font-mono" dir="ltr">OpenRouter (Sandbox)</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50 text-sm">
                  <span className="text-slate-400">مدل پیش‌فرض</span>
                  <span className="text-slate-200 font-mono" dir="ltr">gpt-3.5-turbo</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">بودجه مصرفی این ماه</span>
                  <span className="text-emerald-400 font-mono" dir="ltr">$0.00 / $100.00</span>
                </div>
             </div>
          </GlassCard>

          <GlassCard variant="workspace-2d" className="p-6">
             <h3 className="font-medium text-slate-200 mb-4">آمار چت‌بات عمومی (RAG)</h3>
             <div className="space-y-4">
                <div className="flex items-center gap-4">
                   <div className="flex-1 bg-slate-800 h-2 rounded-full overflow-hidden">
                     <div className="bg-cyan-500 w-[85%] h-full"></div>
                   </div>
                   <span className="text-xs text-slate-400 font-mono">85% پاسخ مستند</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  چت‌بات مستند کارخانه در حال حاضر به سوالات بر اساس کاتالوگ ۱۷ محصول و ۱۳ مقاله پژوهشی پاسخ می‌دهد.
                </p>
             </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
