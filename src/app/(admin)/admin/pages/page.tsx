'use client';

import { GlassCard } from '@/components/ui/GlassCard';
import { GlowingButton } from '@/components/ui/GlowingButton';

const mockPages = [
  { id: 1, title: 'صفحه اصلی', slug: '/', status: 'published', lastEdited: 'امروز' },
  { id: 2, title: 'درباره کارخانه', slug: '/about', status: 'draft', lastEdited: 'دیروز' },
  { id: 3, title: 'محصولات اکریلیک', slug: '/products/acrylic', status: 'published', lastEdited: '۳ روز پیش' },
  { id: 4, title: 'تماس با ما', slug: '/contact', status: 'published', lastEdited: 'هفته پیش' },
];

export default function PagesDashboard() {
  return (
    <div className="space-y-8">
      <header className="flex justify-between items-end">
         <div>
           <h1 className="text-3xl font-bold mb-2">مدیریت صفحات (Page Builder)</h1>
           <p className="text-slate-400">ساخت و ویرایش صفحات با پشتیبانی از ۲۸ بلوک ساختاری.</p>
         </div>
         <GlowingButton variant="primary">ایجاد صفحه جدید</GlowingButton>
      </header>

      <GlassCard variant="workspace-2d" className="p-6">
         <div className="overflow-x-auto">
           <table className="w-full text-sm text-left rtl:text-right text-slate-300">
             <thead className="text-xs text-slate-400 uppercase bg-slate-800/50">
               <tr>
                 <th scope="col" className="px-6 py-3">عنوان صفحه</th>
                 <th scope="col" className="px-6 py-3" dir="ltr">Slug</th>
                 <th scope="col" className="px-6 py-3">وضعیت انتشار</th>
                 <th scope="col" className="px-6 py-3">آخرین ویرایش</th>
                 <th scope="col" className="px-6 py-3">عملیات</th>
               </tr>
             </thead>
             <tbody>
               {mockPages.map((page) => (
                 <tr key={page.id} className="border-b border-slate-700/50 hover:bg-slate-800/30">
                   <td className="px-6 py-4 font-medium text-slate-200">{page.title}</td>
                   <td className="px-6 py-4 font-mono text-xs" dir="ltr">{page.slug}</td>
                   <td className="px-6 py-4">
                     <span className={`px-2 py-1 rounded text-xs ${page.status === 'published' ? 'bg-emerald-900/40 text-emerald-400' : 'bg-amber-900/40 text-amber-400'}`}>
                       {page.status === 'published' ? 'منتشر شده' : 'پیش‌نویس'}
                     </span>
                   </td>
                   <td className="px-6 py-4">{page.lastEdited}</td>
                   <td className="px-6 py-4">
                     <GlowingButton variant="glass" size="sm">ویرایش در صفحه‌ساز</GlowingButton>
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
