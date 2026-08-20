# PHASE 9 — Homepage Enhancement Report

## 1. نطاق المرحلة

نُفذت **PHASE 9** على الصفحة الرئيسية فقط في المستودع `SCI5A/al-seraj`. شمل التعديل `index.html` العربية و`en/index.html` الإنجليزية، مع stylesheet وcontroller صغيرين مخصصين للصفحة الرئيسية. لم تُجرَ إعادة هيكلة للإطار، ولم تُعدَّل صفحات المحتوى الأخرى وعددها 54 صفحة.

## 2. الفرع والـbaseline

العمل موجود على الفرع المحلي `agent/phase-9-corporate-homepage`، ومبني على `origin/main` عند commit `238241a74ca351efaecdcd2dbcf31bd5fd49e438`. لم يُنفذ merge أو push أو deployment أثناء هذه المرحلة.

## 3. الملفات المعدلة والمضافة

| الملف | الحالة | الغرض |
|---|---|---|
| `index.html` | معدّل | Homepage عربية RTL محسّنة |
| `en/index.html` | معدّل | Homepage إنجليزية LTR مطابقة |
| `homepage-ux.css` | مضاف | Styles مخصصة للصفحة الرئيسية فقط |
| `homepage-menu.js` | مضاف | Mobile menu native مع `aria-expanded` |
| `.github/workflows/static.yml` | معدّل | إدراج assets الجديدة في artifact allowlist |
| `PHASE-9-HOMEPAGE-REPORT.md` | مضاف | التقرير النهائي لهذه المرحلة |

الملف غير المتتبع `CURRENT-CANDIDATE-SUMMARY.md` موجود في working tree لكنه **ليس جزءًا من commit PHASE 9** لأنه ليس من نطاق التعديل الحالي.

## 4. حماية الصفحات الأخرى

فحص نطاق Git أثبت أن التغييرات المحررة محصورة في الملفين الرئيسيين وstylesheet/controller الجديدين وworkflow allowlist والتقرير. لم يحدث تعديل على `content-pages.css` أو `theme-language.js` أو صفحات المحتوى الـ54.

## 5. بنية الـheader والتنقل

أُعيد تنظيم header الصفحة الرئيسية ليضم شعار السراج، روابط التنقل الأساسية، رابط اللغة، theme control المركّب من controller المعتمد، وCTA للاستشارة. على الشاشات الصغيرة يتحول التنقل إلى قائمة native قابلة للفتح والإغلاق، مع `aria-expanded` و`aria-controls` وتسميات فتح وإغلاق بالعربية والإنجليزية.

## 6. Hero section

يقدم الـhero رسالة واضحة حول الحلول الهندسية الصناعية المتكاملة، مع copy عربي RTL وcopy إنجليزي LTR، ومسار بصري هندسي محلي يعتمد على الشعار وشبكة schematic. توجد أزرار للاستشارة، استكشاف الخدمات، وWhatsApp الرسمي. لم تُستخدم صورة stock أو claim تجاري جديد.

## 7. Capabilities

يحتوي القسم على أربع قدرات عملية: الهندسة والتصميم، التجهيز والتوريد، التركيب والتنفيذ، والاختبار والتشغيل. أزيلت المقاييس الداخلية السابقة من واجهة الصفحة الرئيسية واستُبدلت بمحتوى customer-facing قابل للمراجعة.

## 8. Engineering services

أُضيفت ثماني بطاقات خدمة بروابط داخلية حقيقية. ترتبط البطاقات الست الأولى بصفحات الخدمات التفصيلية، بينما ترتبط بطاقتا الأتمتة والتجهيزات بصفحات الحلول التفصيلية المناسبة. جرى تصحيح رابط الأتمتة أثناء validation ليفتح `solution-industrial-automation.html` مباشرة.

## 9. Workflow

يضم قسم workflow خمس مراحل مرتبة من دراسة المتطلبات إلى الاختبار والتشغيل. النص يصف مسارًا تنظيميًا فقط ولا يدّعي نتائج أو شهادات أو مددًا أو أرقامًا غير موثقة.

## 10. Specialized solutions

يضم القسم ستة روابط لحلول حالية: المنشآت الدوائية، الغرف النظيفة، HVAC، الهندسة الكهربائية، الأتمتة الصناعية، والتجهيزات الصناعية. جميع الروابط اجتازت فحص وجود الملفات محليًا.

## 11. Industries وWhy Al-Seraj

يعرض قسم القطاعات ثلاث فئات عامة مرتبطة بالمحتوى الحالي، ويعرض قسم القيمة أربع نقاط: حلول متكاملة، هندسة متخصصة، تنفيذ منظم، ودعم فني. صيغت العبارات دون أرقام أو شهادات أو شراكات أو أسماء عملاء غير موثقة.

## 12. Projects وEngineering insights

أضيفت لوحة انتقال إلى صفحة المشاريع مع تنبيه صريح إلى أن بيانات المشاريع والنتائج تحتاج مراجعة المالك قبل اعتماد أي claim تجاري. كما أضيفت ثلاث بطاقات مقالات مرتبطة بصفحات GMP والسلامة ومشاريع المصانع المتكاملة.

## 13. Contact section والنموذج

يحافظ النموذج على السلوك **local-only** الحالي. الحقول تحمل labels مرتبطة بالمعرفات، والتحقق HTML5 مستمر، ورسالة النجاح توضح أن البيانات لم تُرسل أو تُخزن. توجد قناة WhatsApp مباشرة بجانب النموذج، دون CRM أو SMTP أو lead provider.

## 14. Final CTA وfooter

أضيفت دعوة ختامية للاستشارة وWhatsApp، مع footer يعرض الوصف، الروابط السريعة، صفحة التواصل، سياسة الخصوصية، وWhatsApp. جميع روابط WhatsApp في الصفحة الرئيسية تستخدم الرقم والرسالة الإنجليزية المعتمدين و`target="_blank"` و`noopener noreferrer` وclass `whatsapp-link`.

## 15. Theme coverage

تم اختبار Light وDark عبر controller المعتمد، كما اختُبرت CSS selectors الخاصة بـ`html[data-theme="dark"]`. تغطي القواعد الأسطح، النصوص، البطاقات، النموذج، المشروع، والحالة الداكنة للأقسام اللينة. فحص contrast البصري لم يُظهر white-on-white أو black-on-dark في screenshots المراجعة.

## 16. Language coverage

النسخة العربية تحمل `lang="ar"` و`dir="rtl"`، والنسخة الإنجليزية تحمل `lang="en"` و`dir="ltr"`. روابط alternate/canonical موجودة، ومصفوفة العرض البصري راجعت النسختين في Light وDark.

## 17. Responsive visual matrix

التُقطت **24 صورة**: لغتان × ثيمان × ستة أحجام (`375px`, `390px`, `768px`, `1024px`, `1280px`, `1440px`). اجتازت المصفوفة الالتقاط والفحص الآلي، وراجعت contact sheets التخطيط، الـhero، mobile menu، RTL/LTR، البطاقات، والأزرار. لم يظهر horizontal overflow أو clipping مرئي.

## 18. Accessibility وSEO

اجتاز audit الصفحة الرئيسية في اللغتين: alt text للصور، labels للحقول، أسماء الأزرار والروابط، عدم تكرار IDs، أهداف `aria-labelledby`، وجود main وh1، canonical، alternate hreflang، viewport، description، robots، وtheme-color. كما اجتازت CSS assertions الخاصة بـfocus-visible وRTL/LTR وbreakpoints `920px` و`620px`.

## 19. Claims وregression gates

| الفحص | النتيجة |
|---|---|
| Homepage content/link audit | PASS؛ صفحتان، 0 failures، 37 internal links لكل صفحة |
| Content & Claims Gate | PASS؛ 56 صفحة، 0 placeholders و0 TODO/FIXME و0 source-repo refs |
| Business claim live check | PASS؛ لا numeric stats أو agency/partner claims أو certification-as-company-fact أو guarantees جديدة |
| WhatsApp regression | PASS؛ 56 صفحة، 98 مرجعًا، URL واحد، 0 failures، الرقم القديم 0 |
| Final Preflight | PASS؛ 56 صفحة، 56 artifact pages، 0 failures |
| JavaScript syntax | PASS؛ `homepage-menu.js` و`theme-language.js` |
| Git whitespace check | PASS؛ `git diff --check` |

زاد عدد مراجع WhatsApp في candidate إلى 98 لأن homepage الجديدة تحتوي أربعة مواضع في كل لغة؛ جميع المراجع اجتازت التحقق من URL والرسالة والtarget والrel وclass، ولم يتغير الرقم أو الرسالة المعتمدان.

## 20. الأداء، commit، وحالة النشر

حجم الملفين الرئيسيين هو `25,289` و`21,124` بايت، وحجم `homepage-ux.css` هو `22,881` بايت، وحجم `homepage-menu.js` هو `1,075` بايت. لم تُضف مكتبات أو صور خارجية جديدة؛ تستخدم homepage الأصول المحلية الحالية. أُدرجت assets الجديدة في `static.yml` allowlist، وبقيت production الحالية على `https://sci5a.github.io/al-seraj/` دون تغيير.

**Commit:** تم إنشاء commit محلي على الفرع `agent/phase-9-corporate-homepage`؛ ويُعرض hash النهائي في رسالة التسليم حتى لا يتغير التقرير عند amend النهائي.

**Deployment status: NOT DEPLOYED.** لا يوجد merge، ولا push، ولا Pull Request، ولا تغيير DNS أو custom domain. هذا التقرير يتوقف عند بوابة مراجعة المستخدم وفق التفويض.

## الخلاصة

> **PHASE 9 — HOMEPAGE ENHANCEMENT COMPLETE — USER REVIEW REQUIRED**

النسخة المرشحة جاهزة للمراجعة المحلية على `http://127.0.0.1:8126/al-seraj/` عند توفر خادم المعاينة. الإنتاج الحالي لم يتغير، وأي merge أو deploy يحتاج موافقة صريحة لاحقة.
