'use client';

import { GlassCard } from '@/components/ui/GlassCard';
import { GlowingButton } from '@/components/ui/GlowingButton';

const mockAssets = [
  { id: 1, name: 'hero-banner.jpg', size: '2.4 MB', type: 'image', status: 'ready' },
  { id: 2, name: 'catalog-2026.pdf', size: '14.1 MB', type: 'document', status: 'ready' },
  { id: 3, name: 'factory-tour.mp4', size: '145 MB', type: 'video', status: 'processing' },
  { id: 4, name: 'resume-private.pdf', size: '1.2 MB', type: 'document', status: 'quarantined' },
];

export default function MediaLibrary() {
  return (
    <div className="space-y-8">
      <header className="flex justify-between items-end">
         <div>
           <h1 className="text-3xl font-bold mb-2">کتابخانه رسانه (DAM)</h1>
           <p className="text-slate-400">مدیریت دارایی‌های عمومی و قرنطینه فایل‌های خصوصی.</p>
         </div>
         <GlowingButton variant="emerald">بارگذاری فایل جدید</GlowingButton>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {mockAssets.map(asset => (
          <GlassCard key={asset.id} variant="workspace-2d" className="p-4 flex flex-col group">
            <div className="aspect-video bg-slate-800 rounded-lg mb-4 flex items-center justify-center border border-slate-700">
               <span className="text-4xl">
                 {asset.type === 'image' && '🖼️'}
                 {asset.type === 'document' && '📄'}
                 {asset.type === 'video' && '🎥'}
               </span>
            </div>
            <div className="flex-1">
               <h3 className="font-medium text-slate-200 text-sm truncate mb-1" dir="ltr">{asset.name}</h3>
               <p className="text-xs text-slate-500 mb-3" dir="ltr">{asset.size}</p>
            </div>
            <div className="mt-auto pt-3 border-t border-slate-700/50 flex justify-between items-center">
               <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded ${
                 asset.status === 'ready' ? 'bg-emerald-950 text-emerald-400' :
                 asset.status === 'processing' ? 'bg-blue-950 text-blue-400 animate-pulse' :
                 'bg-rose-950 text-rose-400'
               }`}>
                 {asset.status}
               </span>
               <button className="text-slate-400 hover:text-cyan-400 transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
               </button>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
