# پلتفرم جامع وب‌سایت، پورتال مشتریان، CMS، سامانه CRM، تیکتینگ و هوش مصنوعی کارخانه ایده‌آل ماکو (Ideal Makoo)

پلتفرم رسمی ۵ زبانه (`فارسی`, `English`, `Türkçe`, `العربية`, `Русский`) کارخانه تولید دندان مصنوعی و مواد دندانی **ایده‌آل ماکو**، طراحی‌شده با معماری ماژولار **Next.js (App Router)**، **TypeScript Strict**، **Tailwind CSS (Futuristic Cyber-Glass & 3D Depth Design System)**، **PostgreSQL + pgvector** و هسته یکپارچه **CMS + CRM + Ticketing + AI Studio + Grounded RAG Chatbot**.

## 📌 وضعیت پیشرفت پیاده‌سازی (Progress Tracker)

**بخش‌های پیاده‌سازی شده:**
- ✅ معماری پایه Next.js (App Router) و مسیریابی ۵ زبانه (P01, P02)
- ✅ سیستم طراحی Cyber-Glass با Tailwind CSS و Framer Motion (P01)
- ✅ مدل داده (TypeScript Types) و دیتابیس Drizzle ORM + PostgreSQL (P03)
- ✅ احراز هویت دمو (DemoRoleSwitcher) با ۱۲ نقش کاربری (P04)
- ✅ صفحات عمومی: صفحه اصلی، کاتالوگ محصولات، درباره ما، تماس با ما، شبکه نمایندگان (P05, P06, P09)
- ✅ صفحات تعامل B2B: فهرست استعلام فنی و جدول ورود گروهی کدها (P06)
- ✅ پنل ادمین (CMS): میزکار ساخت صفحه و کتابخانه رسانه DAM (P07)
- ✅ پنل CRM: کارتابل روزانه فروش، برد کانبان فرصت‌ها و تیکتینگ / شکایات کیفیت (P08, P09)
- ✅ استودیو هوش مصنوعی: دستیار AI و چت‌بات متصل به OpenRouter (P10)
- ✅ داشبورد پایش عملیات (Monitoring) (P11)
- ✅ اسکریپت استقرار اوبونتو و Docker Compose (P12)

**بخش‌های باقیمانده / در حال توسعه:**
- ⏳ ابزار تخصصی تطبیق شید و قالب (Shade & Mould Matcher) (P05)
- ⏳ ابزار تایمر پروتکل بالینی دندان‌پزشکی (Clinical Protocol Timer)
- ⏳ صفحه ورود و پورتال کاربری (`/[locale]/auth/login` و `/[locale]/account`)
- ⏳ تکمیل APIهای Backend برای اتصال فرم‌های تیکتینگ و استعلام به جداول پایگاه داده

---

## ۱. ویژگی‌های کلیدی پیاده‌سازی‌شده در این نسخه Production

1. **وب‌سایت عمومی ۵ زبانه با طراحی شیشه‌ای و عمق سه‌بعدی:**
   - پشتیبانی کامل از دو جهت `RTL` (فارسی و عربی) و `LTR` (انگلیسی، ترکی استانبولی و روسی) به همراه ایزوله‌سازی خودکار کدهای فنی و شماره‌ها (`<BiDiText />`) و دو تم **Cyber-Dark (پیش‌فرض)** و **Clinical-Light**.
   - بارگذاری کامل **۱۷ محصول واقعی کارخانه** در دو خانواده مجزا («دندان مصنوعی اکریلیک و نانو-کامپوزیت» و «مواد ترمیمی و لابراتواری دندانی»)، **۱۰ صفحه سازمانی و استراتژیک** و **۱۳ مقاله علمی و پژوهشی** همراه با جدول تغییر مسیر (`301 Redirects`) از سایت قدیمی.
   - ابزارهای تخصصی نوآورانه: **استودیو هوشمند تطبیق فرم صورت، قوس فکی و شید/قالب دندان**، **ماشین‌حساب و تایمر پروتکل بالینی مواد دندانی** و **مقایسه مستند ۲ تا ۴ محصول هم‌خانواده**.
2. **مسیر تجاری B2B بدون درگاه پرداخت آنلاین (`OWN-013`):**
   - مجهز به **فهرست استعلام فنی چندمحصولی (RFQ Inquiry List — بدون ماهیت فروشگاهی)**، **جدول انتخاب فنی کدهای قالب و شید (قالب × شید رنگ)**، **ورود سریع اقلام با کد/CSV**، **درخواست نمونه محصول و کاتالوگ چاپی** و **صدور پیش‌فاکتور رسمی نسخه‌دار (PDF) در CRM**.
3. **پنل مدیریت محتوا (CMS)، صفحه‌ساز ۲۸ بلوکی و هسته انتشار اتمی مستقل زبان‌ها:**
   - انتشار کاملاً مستقل هر زبان (`locale-releases`) بدون تاثیر پیش‌نویس یک زبان بر نسخه زنده زبان‌های دیگر.
   - گردش کار بازبینی تحریریه و بازبینی علمی (`ScientificReviewer`) با منع خودتأییدی و کنترل تعارض نسخه (`409 Conflict`).
   - کتابخانه رسانه (DAM) با تفکیک فضای عمومی و قرنطینه فایل‌های خصوصی، مدیریت حقوق دارایی و نقشه مصرف (`asset-usages`).
4. **سامانه جامع CRM سازمانی (`CRM-001` تا `CRM-032`) و تیکتینگ یکپارچه (`OWN-012`):**
   - مدیریت سازمان‌ها، شعب، مخاطبان، جذب و ادغام سرنخ‌ها، تبدیل اتمی سرنخ به فرصت، برد کانبان قیف فروش، دفتر قیمت Decimal چندارزی، تصویب تخفیف، صدور نسخه تغییرناپذیر پیش‌فاکتور PDF پنج‌زبانه، پیگیری نمونه، تحویل سفارش، بخش‌بندی، کمپین و اتوماسیون.
   - سیستم تیکتینگ کامل و رسیدگی به شکایات کیفیت محصول (با کد سری ساخت/Batch)، تایمرهای SLA پاسخ و حل با تقویم کاری، تفکیک پیام عمومی و یادداشت داخلی، و قرنطینه دسترسی پرونده‌های کیفیت (`qualityScope`).
5. **استودیو هوش مصنوعی (OpenRouter)، چت‌بات مستند (RAG) و اطلاع‌رسانی چندکاناله:**
   - تولید متن، ترجمه ۵ زبانه با قفل واژه‌نامه برند، تولید/ویرایش تصویر، تولید ناهمگام ویدیو (با وبهوک `HMAC-SHA256`) و رزرو اتمی بودجه.
   - چت‌بات مستند متصل به دانش منتشرشده کارخانه با لینک استناد واقعی و امتناع صادقانه در برابر سوالات فاقد سند.
   - موتور Transactional Outbox و آداپتورهای آماده برای **کاوه‌نگار (SMS/OTP)**، **نجوا (Web Push)**، **تلگرام (بات و کانال)** و **Postfix/SMTP**.

## ۲. اجرای سریع در محیط محلی (بدون نیاز به دیتابیس یا کلید API خارجی)

این پروژه به گونه‌ای معماری شده است که در حالت پیش‌فرض (`NOTIFICATIONS_MODE=sandbox` و `AI_PROVIDER_MODE=auto`)، بدون نیاز به هیچ کلید API یا سرویس خارجی، با داده‌های کامل پیش‌بارگذاری‌شده (۱۷ محصول، ۱۳ مقاله، ۱۲ حساب دمو، پرونده‌های نمونه CRM و تیکتینگ) بلافاصله اجرا می‌شود:

```bash
# ۱. نصب وابستگی‌ها
pnpm install

# ۲. ایجاد فایل تنظیمات محیطی از روی الگو
cp .env.example .env

# ۳. اجرای سرور توسعه
pnpm dev
```

سپس مرورگر را در آدرس `http://localhost:3000` باز کنید. برای ساخت و اجرای نسخه Production روی سیستم محلی:

```bash
pnpm build
pnpm start
```

## ۳. اجرای کامل با Docker Compose (شامل Web + Worker + PostgreSQL pgvector)

برای بالا آوردن کل پشته عملیاتی در کانتینرهای ایزوله:

```bash
# ۱. کپی و تنظیم فایل محیطی
cp .env.example .env

# ۲. ساخت و اجرای سرویس‌ها در پس‌زمینه
docker compose up -d --build

# ۳. اعمال مهاجرت‌های دیتابیس و بارگذاری داده‌های اولیه کارخانه و ۱۲ حساب دمو
docker compose exec web pnpm db:migrate
docker compose exec web pnpm db:seed

# ۴. بررسی سلامت سرویس‌ها
docker compose exec web pnpm ops:smoke
```

## ۴. استقرار تک‌فرمانی روی سرور اختصاصی Ubuntu در مسیر `/var/www/idealmakoo`

برای استقرار کامل روی یک سرور Ubuntu تازه (نسخه 22.04 یا 24.04 LTS):

### گام ۱: آماده‌سازی کد و اجرای اسکریپت نصب خودکار
```bash
sudo mkdir -p /var/www/idealmakoo
sudo git clone https://github.com/DeveloperCodeBase/idealmakoo.git /var/www/idealmakoo/source
cd /var/www/idealmakoo/source

# اجرای اسکریپت نصب تک‌فرمانی (دامنه خود را جایگزین کنید)
sudo bash scripts/install-ubuntu.sh --domain idealmakoo.com --app-dir /var/www/idealmakoo
```

**این اسکریپت به صورت خودکار و ایمن مراحل زیر را انجام می‌دهد:**
1. بررسی پیش‌نیازهای سرور (فضای دیسک، پورت‌ها، حافظه RAM) و ساخت ساختار پوشه‌های `/var/www/idealmakoo/{source,releases,shared/media,shared/backups,shared/logs}`.
2. نصب نسخه‌های قفل‌شده `Node.js 24 LTS`, `pnpm`, `PostgreSQL 16`, افزونه `pgvector`, `Nginx`, `Certbot` و سرویس ایمیل سبک `Postfix` (پیکربندی‌شده صرفاً روی `127.0.0.1` در حالت Send-Only جهت جلوگیری قطعی از Open Relay).
3. تولید کلیدهای رمزنگاری داخلی (`PAYLOAD_SECRET`, `SESSION_SECRET`, `MFA_ENCRYPTION_KEY`, `PREVIEW_TOKEN_SECRET`) با الگوریتم امن `CSPRNG` در فایل `/var/www/idealmakoo/shared/.env` (فقط در نصب اول؛ در استقرارهای بعدی کلیدها و دیتابیس موجود هرگز بازنویسی نمی‌شوند).
4. اجرای مهاجرت‌های دیتابیس (`pnpm db:migrate`)، بارگذاری اولیه محتوای کارخانه و حساب‌های دمو (`pnpm db:seed`) و ساخت نسخه Production (`pnpm build`).
5. راه‌اندازی سرویس‌های `systemd` (`idealmakoo-web.service` و `idealmakoo-worker.service`)، پیکربندی Nginx و گواهی HTTPS و اجرای تست سلامت (`pnpm ops:smoke`).

### گام ۲: وارد کردن کلیدهای سرویس‌های بیرونی در `/var/www/idealmakoo/shared/.env`
هر زمان که کلیدهای سرویس‌های بیرونی را دریافت کردید، فایل `/var/www/idealmakoo/shared/.env` را ویرایش کنید:
- **هوش مصنوعی (OpenRouter):** مقدار `OPENROUTER_API_KEY` و `OPENROUTER_WEBHOOK_SECRET` را وارد کنید.
- **پیامک و OTP (کاوه‌نگار):** مقدار `KAVENEGAR_API_KEY` و خط خدماتی `KAVENEGAR_SENDER_LINE` را وارد کنید.
- **وب پوش (نجوا):** مقدار `NAJVA_API_KEY`، `NAJVA_WEBSITE_ID` و کلیدهای `VAPID` را وارد کنید.
- **تلگرام (بات و کانال):** مقدار `TELEGRAM_BOT_TOKEN` و `TELEGRAM_CHANNEL_ID` را وارد کنید.
- **تغییر به حالت ارسال واقعی:** پس از تست اتصال هر سرویس از داخل پنل `/admin/monitoring/notifications`، مقدار `NOTIFICATIONS_MODE="live"` را قرار داده و سرویس‌ها را ری‌استارت کنید:
  ```bash
  sudo systemctl restart idealmakoo-web idealmakoo-worker
  ```

## ۵. جدول کامل ۱۲ حساب دمو (`OWN-014`) برای تست نقش‌ها و پنل‌ها

برای آزمایش سریع تمام ۱۲ نقش امنیتی، می‌توانید از **نوار شناور تغییر سریع نقش (در پایین صفحه در حالت دمو)** استفاده کنید یا در صفحه ورود (`/{locale}/auth/login`) با اطلاعات زیر وارد شوید.
*نکته MFA:* برای نقش‌های کارمندی و مدیریتی در حالت دمو/Sandbox، کد تایید دومرحله‌ای (TOTP) آزمایشی برابر `123456` است (همچنین امکان اسکن QR Code واقعی با Google Authenticator وجود دارد).

| ردیف | نقش (`Role`) | ایمیل ورود (`Email`) | رمز عبور (`Password`) | مسیر پنل پس از ورود |
| :--- | :--- | :--- | :--- | :--- |
| **1** | **مشتری / کاربر حرفه‌ای (`customer`)** | `demo.customer@idealmako.invalid` | `Demo#Cust2026!1` | `/fa/account` |
| **2** | **مدیر ارشد سیستم (`superAdmin`)** | `demo.superadmin@idealmako.invalid` | `Demo#SupAdm2026!2` | `/admin` و `/admin/monitoring` |
| **3** | **مدیر عملیاتی سایت (`admin`)** | `demo.admin@idealmako.invalid` | `Demo#Admin2026!3` | `/admin` |
| **4** | **ویراستار محتوا (`contentEditor`)** | `demo.editor@idealmako.invalid` | `Demo#Editor2026!4` | `/admin/content` |
| **5** | **مدیر محصول (`productManager`)** | `demo.pm@idealmako.invalid` | `Demo#ProdMgr2026!5` | `/admin/products` |
| **6** | **بازبین علمی و فنی (`scientificReviewer`)** | `demo.reviewer@idealmako.invalid` | `Demo#SciRev2026!6` | `/admin/reviews` |
| **7** | **مترجم ۵ زبانه (`translator`)** | `demo.translator@idealmako.invalid` | `Demo#Trans2026!7` | `/admin/translations` |
| **8** | **ناشر (`publisher`)** | `demo.publisher@idealmako.invalid` | `Demo#Publish2026!8` | `/admin/publications` |
| **9** | **منابع انسانی (`hr`)** | `demo.hr@idealmako.invalid` | `Demo#HrTeam2026!9` | `/admin/hr` |
| **10** | **کارشناس فروش و CRM (`business`)** | `demo.business@idealmako.invalid` | `Demo#BizCrm2026!10` | `/admin/crm` |
| **11** | **تحلیلگر گزارش‌ها (`analyst`)** | `demo.analyst@idealmako.invalid` | `Demo#Analyst2026!11` | `/admin/crm/reports` |
| **12** | **پشتیبانی و تیکتینگ (`support`)** | `demo.support@idealmako.invalid` | `Demo#Support2026!12` | `/admin/crm/cases` |

## ۶. دستورات عملیاتی، پشتیبان‌گیری و بازگشت نسخه (Rollback)

- `pnpm ops:preflight`: بررسی سلامت متغیرهای محیطی، پورت‌ها و دیتابیس
- `pnpm ops:backup`: تهیه نسخه پشتیبان هماهنگ و رمزنگاری‌شده از دیتابیس و رسانه در `/var/www/idealmakoo/shared/backups`
- `pnpm ops:restore:verify`: تمرین بازیابی بکاپ در دیتابیس ایزوله آزمایشی بدون آسیب به محیط فعال
- `pnpm ops:release`: دریافت آخرین نسخه از Git، بیلد، مهاجرت و تغییر اتمی نسخه فعال
- `pnpm ops:rollback`: بازگشت فوری به نسخه سالم قبلی در صورت بروز خطا
