# REPOSITORY DELETION AUDIT

## Final Stop Gate

> **REPOSITORY DELETION AUDIT — READY FOR USER APPROVAL**

هذا التقرير هو **تدقيق جاهزية للحذف فقط**. لم يُحذف أو يُؤرشف أو يُعاد تسمية أي مستودع، ولم يتغير GitHub Pages أو DNS أو domain أو production. لا يجوز تنفيذ أي حذف قبل موافقة صريحة على أسماء المستودعات المحددة بالاسم، repository-by-repository.

الهدف المعتمد هو الإبقاء على موقع السراج الموحد داخل مستودع واحد:

> `SCI5A/al-seraj`

لكن كون مستودع ما استُخدم مصدرًا لا يكفي وحده لتصنيفه DELETE CANDIDATE؛ يجب كذلك إثبات عدم وجود غرض مستقل، أو روابط، أو مستخدمين، أو releases، أو Pages، أو قيمة rollback أو قانونية تستدعي إبقاءه أو مراجعته.

## 1. Audit Baseline

| Item | Evidence |
|---|---|
| Canonical candidate | `SCI5A/al-seraj` |
| Candidate branch | `agent/gate-d-content-integration` |
| Candidate integration commit | `245d09600224ec915499cb0a550f907cb9eb8be1` |
| Candidate baseline | `origin/main` at `4a16840d088c6ed5d6126a51daed8efb564621dc` |
| Candidate default architecture | Static HTML/CSS/JS |
| Candidate active pages | 56: 28 Arabic RTL + 28 English LTR |
| Candidate active duplicate pages | 0 exact and 0 semantic duplicate groups |
| Worktree note | يوجد ملف محلي غير متتبع `CURRENT-CANDIDATE-SUMMARY.md` أُنشئ للمعاينة؛ ليس جزءًا من commit أو artifact ولا يُعد اعتمادًا إنتاجيًا. |
| Audit timestamp | 2026-08-19T20:13:59Z تقريبًا |

## 2. Repositories Actually Used as Website Sources

تم تحديد مستودعين فقط كمصادر فعلية لمحتوى أو صفحات أو مكونات انتقلت بعد التكييف إلى candidate. أما بقية المستودعات فتم فحصها أو تصنيفها، لكنها لم تُستخدم كمصدر runtime للموقع الموحد.

### 2.1 `SCI5A/seraj` — Primary Source

المستودع عام، وفرعه الافتراضي `main`، وآخر commit مفحوص هو `aa3e29b075b03baa8330adec93a3b8c6ddd76aab`، بعنوان `docs: add custom domain migration report`. تم استخراج المحتوى بعد إزالة shell المصدر، والمراجع القديمة، والروابط الخارجية، وقنوات التسليم غير المفوضة، ثم إعادة تنسيقه داخل القالب القانوني.

| Source material | Destination in `SCI5A/al-seraj` | Completeness |
|---|---|---|
| `service-consulting.html` | `service-consulting.html` | Present and validated |
| `service-engineering-design.html` | `service-engineering-design.html` | Present and validated |
| `service-maintenance.html` | `service-maintenance.html` | Present and validated |
| `service-pharma-setup.html` | `service-pharma-setup.html` | Present and validated |
| `service-safety-systems.html` | `service-safety-systems.html` | Present and validated |
| `service-training.html` | `service-training.html` | Present and validated |
| `service-*.html` structure | `services.html` | Rewritten index present |
| `article-fire-safety.html` | `article-fire-safety.html` | Present and validated |
| `article-gmp-standards.html` | `article-gmp-standards.html` | Present with claims caveat |
| `article-turnkey-projects.html` | `article-turnkey-projects.html` | Present with claims caveat |
| `article-*.html` structure | `articles.html` | Rewritten index present |

لم تُنقل `request-consultation.html` بسبب direct WhatsApp/mailto delivery والمراجع الخاصة بنطاقات غير مفوضة. ولم تُنقل `case-studies.html` أو `testimonials.html` إلى artifact العام؛ لأن claims المشاريع والعملاء والشهادات تحتاج دليل مالك قابلًا للنشر.

### 2.2 `SCI5A/al-seraj-new` — Secondary Source

المستودع عام، وفرعه الافتراضي `main`، وآخر commit مفحوص هو `e8d8371dd61ef0e2a7844d683c5eb14e0845712b`، بعنوان `chore: publish independent AL-SERAJ preview`. تم استخراج عناصر محددة فقط، مع استبعاد provider logic وCNAME وcustom-domain material والوثائق الداخلية من artifact.

| Source material | Destination in `SCI5A/al-seraj` | Completeness |
|---|---|---|
| `solution-cleanrooms.html` | `solution-cleanrooms.html` | Present and validated |
| `solution-electrical-engineering.html` | `solution-electrical-engineering.html` | Present and validated |
| `solution-engineering-consultancy.html` | `solution-engineering-consultancy.html` | Present and validated |
| `solution-hvac-systems.html` | `solution-hvac-systems.html` | Present and validated |
| `solution-industrial-automation.html` | `solution-industrial-automation.html` | Present and validated |
| `solution-industrial-equipment.html` | `solution-industrial-equipment.html` | Present and validated |
| `solution-pharmaceutical-facilities.html` | `solution-pharmaceutical-facilities.html` | Present and validated |
| `solution-turnkey-industrial-projects.html` | `solution-turnkey-industrial-projects.html` | Present and validated |
| `solution-*.html` structure | `solutions.html` | Rewritten index present |
| `privacy-policy.html` | `privacy-policy.html` | Adapted to no-provider/no-storage behavior |
| `contact.html` + `js/company-contact.js` | `contact.html` | UI/validation only; provider excluded |
| `about.html` | `about.html` | Adapted with evidence-conscious language |
| `industries.html` | `industries.html` | Adapted without project/certification claims |
| `projects.html` | `projects.html` | Evidence-policy page; unverified records hidden |
| `about.html` + solution capability categories | `capabilities.html` | Synthesized and claim-qualified |
| `solution-pharmaceutical-facilities.html` | `pharmaceutical-manufacturing.html` | Adapted context page |

لم تُنقل `versions/*` أو `CNAME` أو custom-domain migration material أو `js/lead-provider.js` كتشغيل فعلي. تم الاحتفاظ فقط بفكرة أن lead delivery غير مهيأة، ولم تُنسخ credentials أو provider activation.

### 2.3 `SCI5A/al-seraj` — Canonical Baseline

هذا هو المستودع الوجهة وليس مصدرًا خارجيًا. تم الحفاظ على baseline والهوية والـworkflow والـPWA assets والصفحة الرئيسية، ثم إضافة المحتوى المكيّف إليها. أحدث baseline remote مفحوص هو `4a16840d088c6ed5d6126a51daed8efb564621dc`.

## 3. Extraction Integrity

فحص `source-vs-destination` على **27 mapping rows** أعاد **27 PASS و0 REVIEW**. كل مسار مصدر مدرج في خريطة التكامل موجود في checkout المصدر، وكل وجهة مذكورة موجودة في candidate. التحقق لا يعني نسخًا byte-for-byte؛ معظم العناصر **adapted** أو **rewritten** لتوحيد القالب، النطاق، metadata، وسلوك النموذج.

المرجع التفصيلي هو [`DELETION-RECORD.md`](DELETION-RECORD.md) و[`INTEGRATION-MAP.md`](INTEGRATION-MAP.md). يحتوي سجل التراجع على checkout المحلي، branch، latest commit، inventory المصدر/الوجهة، وintegration commit.

## 4. Current Dependency Audit

تم فحص ملفات candidate النشطة وproduction-equivalent artifact. النتيجة الأساسية هي أن `SCI5A/al-seraj` لا يحتاج إلى checkout أو repository source كي يعمل كموقع static.

| Dependency check | Result | Interpretation |
|---|---|---|
| Git submodules / `.gitmodules` | PASS; none | لا submodule أو path dependency |
| `package.json` / lockfiles / requirements | PASS; none | لا package/runtime dependency |
| `raw.githubusercontent.com` | PASS; 0 | لا تحميل runtime من GitHub raw |
| Source repository URLs in active artifact | PASS; 0 | روابط GitHub الأربعة الموجودة في تقرير التوحيد فقط، وليست في artifact |
| Remote CSS | PASS; 0 | CSS محلي |
| Remote JavaScript | PASS; 0 | JavaScript inline/local فقط |
| Remote images/assets | PASS; 0 | الصور والأيقونات محلية |
| iframe references | PASS; 0 | لا iframe |
| Runtime API/fetch/provider | PASS; 0 in artifact | نتيجة keyword الوحيدة في وثيقة audit نصية، لا في runtime |
| External analytics/CRM/SMTP/WhatsApp lead delivery | PASS; inactive | لا خدمة خارجية مفعّلة |
| Workflow source repository dependency | PASS | workflow يستخدم GitHub-maintained Actions فقط، وليس مستودعات `seraj` أو `al-seraj-new` |

توجد روابط canonical إلى `https://sci5a.github.io/al-seraj/` داخل metadata وsitemap، لكنها روابط الموقع نفسه وليست dependency على source repository. وتوجد روابط GitHub داخل التقارير لتوثيق المصدر، لكنها لا تدخل artifact الإنتاج.

## 5. Git, Submodule, Workflow, and Deployment Audit

لا يوجد `.gitmodules` ولا submodule. يوجد workflow إنتاج واحد نشط هو `.github/workflows/static.yml`. الملف `.github/workflows/jekyll-gh-pages.yml.disabled` محفوظ للتاريخ لكنه غير قابل للتنفيذ بسبب الامتداد، ولا يدخل artifact.

الـworkflow النشط يعتمد على `actions/checkout`, `actions/configure-pages`, `actions/upload-pages-artifact`, و`actions/deploy-pages`. هذه dependencies على GitHub Actions deployment platform، وليست dependencies على source repositories. مرحلة staging تستخدم allowlist وتستبعد archive والتقارير والنسخ التاريخية.

لم يتم تشغيل workflow أو deploy أو merge أو push في هذا التدقيق. الإنتاج والفرع `origin/main` لم يتغيرا.

## 6. External Reference Audit

لم يظهر في artifact أي `github.com/SCI5A/*` أو `raw.githubusercontent.com` أو source-repository host أو CSS/JS/image URL خارجي. المراجع الخارجية المتبقية في الموقع هي canonical GitHub Pages origin وبعض روابط الهوية/التواصل الموروثة التي لم تُستخدم كـruntime dependency. لا توجد iframe أو CDN أو API endpoint أو remote asset.

## 7. Rollback and Deletion Record

سجل rollback الكامل موجود في [`DELETION-RECORD.md`](DELETION-RECORD.md). أهم البيانات:

| Repository | Default branch | Latest audited commit | Remote state |
|---|---|---|---|
| `SCI5A/seraj` | `main` | `aa3e29b075b03baa8330adec93a3b8c6ddd76aab` | public, not archived, unchanged |
| `SCI5A/al-seraj-new` | `main` | `e8d8371dd61ef0e2a7844d683c5eb14e0845712b` | public, not archived, unchanged |
| `SCI5A/al-seraj` | `main` remote; local candidate branch separate | remote `4a16840d...`; candidate `245d096...` | remote unchanged |

قبل أي deletion مستقبلي يجب الاحتفاظ بنسخة محلية أو mirror، وفحص traffic، Pages deployments، issues، releases، branches، collaborators، licenses، external links، وlegal retention. هذه الشروط لم تُنفذ كإجراء حذف، لذلك لا يوجد تفويض حذف حالي.

## 8. Repository Classification — All 28 Repositories

كل مستودع في الجرد مصنف **مرة واحدة فقط**. التصنيف اقتراح تدقيق وليس تنفيذًا إداريًا.

### KEEP

| Repository | Reason |
|---|---|
| `SCI5A/al-seraj` | المستودع canonical والوجهة الوحيدة لموقع السراج. |
| `SCI5A/duct-quantity-takeoff-calculator` | أداة هندسية مستقلة ذات اختبارات ونطاق واضح؛ لا تُدمج في موقع الشركة. |
| `SCI5A/Karar` | مشروع أبحاث/اختبارات أمان مستقل، لا علاقة runtime بالموقع. |
| `SCI5A/whisper-enhanced` | أداة بحث Whisper/Python مستقلة وبياناتها لا تصلح للنشر العام. |
| `SCI5A/Zoob-hub` | تطبيق React/Firebase/Drizzle مستقل مع auth/database. |
| `SCI5A/WordJoiner-TikTok-Tool` | النسخة الأساسية المرشحة لعائلة أداة عربية مستقلة. |
| `SCI5A/cinematic-lockscreen-studio` | منتج lockscreen مستقل؛ لا علاقة بموقع السراج. |
| `SCI5A/LockScreenStudio_AR_v2` | نسخة React أحدث في عائلة مستقلة؛ تحتاج دورة منتج منفصلة. |
| `SCI5A/LockScreenStudio_PRO_NEXT` | variant مستقل منشور/قابل للاستخدام؛ لا يُخلط مع موقع السراج. |

### ARCHIVE CANDIDATE

هذه ليست أوامر أرشفة. لا يجوز تنفيذها قبل فحص الروابط والاستخدام والنسخ الاحتياطي وموافقة صريحة.

| Repository | Reason |
|---|---|
| `SCI5A/asserag` | نسخة static أقدم متداخلة مع عائلة السراج؛ لم يثبت غرض مستقل بعد المقارنة. |
| `SCI5A/duct-quantity-calculator-github-pages` | predecessor أصغر لأداة takeoff؛ يحتاج فحص روابط المستخدمين. |
| `SCI5A/WordJoiner-TikTok-Tool-App` | duplicate family؛ لا قيمة Al-Seraj مثبتة. |
| `SCI5A/WordJoiner-TikTok-Tool-Web` | duplicate family؛ يحتاج تأكيد النسخة الأساسية والروابط. |
| `SCI5A/WordJoiner-TikTok-Tool-v1` | duplicate family خاص؛ يحتاج حفظًا وتحققًا قبل الأرشفة. |
| `SCI5A/LockScreenStudio` | variant قديم في عائلة lockscreen. |
| `SCI5A/LockScreenStudio_AR` | variant عربي قديم في عائلة lockscreen. |
| `SCI5A/LockScreenStudio_PRO` | variant PRO قديم في عائلة lockscreen. |

### REQUIRES REVIEW

| Repository | Reason |
|---|---|
| `SCI5A/seraj` | استُخدم كمصدر primary، لكنه ما زال يحتفظ بقيمة تاريخية/مرجعية وصفحات غير منقولة؛ لا حذف. |
| `SCI5A/al-seraj-new` | استُخدم كمصدر secondary، ويحتوي versions/docs/lead contract/CNAME غير منقولة؛ لا حذف. |
| `SCI5A/asserag-` | shell React/full-stack مستقل بلا README كافٍ؛ runtime/dependency risk. |
| `SCI5A/abualkarar.github.io` | موقع Pages عام أو شخصي؛ خطر خلط الهوية. |
| `SCI5A/mobile-tech-website` | موقع تقني مستقل؛ لا علاقة Al-Seraj مثبتة. |
| `SCI5A/notification-video-creator` | duplicate family مع اختلاف التسمية؛ يلزم اختيار المالك للنسخة الأساسية. |
| `SCI5A/NotificationVideoCreator` | duplicate family case-variant؛ لا يصح حذف أحدهما دون فحص روابطه. |
| `SCI5A/WordJoiner-TikTok-Tool-Final` | خاص وشبه فارغ؛ قد يحمل قيمة تاريخية أو روابط غير ظاهرة. |
| `SCI5A/ios` | مستودع iOS مستقل؛ لا يُصنف archive دون مراجعة المنتج والنسخ. |
| `SCI5A/ios-lockscreen-ultra-pro` | منتج iOS/lockscreen مستقل؛ يحتاج مراجعة مالك. |
| `SCI5A/lockscreen-studio-cinematic` | اسم متداخل مع `cinematic-lockscreen-studio`؛ يحتاج مقارنة نهائية وروابط/استخدام قبل أي إجراء. |

### DELETE CANDIDATE

> **لا توجد DELETE CANDIDATE نهائية.**

السبب ليس فشل consolidation؛ بل لأن اكتمال استخراج الموقع لا يثبت عدم وجود purpose مستقل أو traffic أو releases أو legal retention أو external links. كل مرشح حذف يحتاج audit إداري منفصل وموافقة صريحة بالأسماء.

## 9. Required Approval Boundary

لا يجوز الانتقال إلى حذف أو أرشفة استنادًا إلى هذا التقرير وحده. إذا أراد المالك تنفيذ تنظيف لاحق، يجب أن يرسل قائمة محددة مثل:

```text
أوافق على أرشفة:
- SCI5A/...

أوافق على حذف:
- SCI5A/...
```

وستبقى الأسماء غير المدرجة دون تغيير. لا تشمل هذه المرحلة merge أو deploy أو domain changes.

## Final Status

> **REPOSITORY DELETION AUDIT — READY FOR USER APPROVAL**

لم يتم حذف أو أرشفة أو إعادة تسمية أو push أو merge أو deploy أو تغيير DNS/domain. المستودع المقصود أن يبقى canonical هو `SCI5A/al-seraj`، لكن لا توجد موافقة حذف لأي مستودع حتى الآن.

## References

[1]: https://github.com/SCI5A/al-seraj "SCI5A/al-seraj — canonical destination repository"
[2]: https://github.com/SCI5A/seraj "SCI5A/seraj — audited primary source repository"
[3]: https://github.com/SCI5A/al-seraj-new "SCI5A/al-seraj-new — audited secondary source repository"
[4]: https://sci5a.github.io/al-seraj/ "GitHub Pages origin referenced by candidate metadata"
