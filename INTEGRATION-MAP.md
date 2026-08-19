# INTEGRATION-MAP

**Canonical destination:** `SCI5A/al-seraj`  
**Canonical URL:** https://sci5a.github.io/al-seraj/  
**Status:** Final candidate; no merge, push, deploy, archive, or delete performed.

| Source Repository | Source Path | Destination | Action | Reason | Validation |
|---|---|---|---|---|---|
| SCI5A/seraj | service-consulting.html | service-consulting.html | adapted | Primary-source service page selected; source shell, old domain, external CSS, and delivery links removed; content restyled to canonical static shell. | PASS: static artifact, route, metadata, asset, and security checks |
| SCI5A/seraj | service-engineering-design.html | service-engineering-design.html | adapted | Primary-source service page selected; source shell, old domain, external CSS, and delivery links removed; content restyled to canonical static shell. | PASS: static artifact, route, metadata, asset, and security checks |
| SCI5A/seraj | service-maintenance.html | service-maintenance.html | adapted | Primary-source service page selected; source shell, old domain, external CSS, and delivery links removed; content restyled to canonical static shell. | PASS: static artifact, route, metadata, asset, and security checks |
| SCI5A/seraj | service-pharma-setup.html | service-pharma-setup.html | adapted | Primary-source service page selected; source shell, old domain, external CSS, and delivery links removed; content restyled to canonical static shell. | PASS: static artifact, route, metadata, asset, and security checks |
| SCI5A/seraj | service-safety-systems.html | service-safety-systems.html | adapted | Primary-source service page selected; source shell, old domain, external CSS, and delivery links removed; content restyled to canonical static shell. | PASS: static artifact, route, metadata, asset, and security checks |
| SCI5A/seraj | service-training.html | service-training.html | adapted | Primary-source service page selected; source shell, old domain, external CSS, and delivery links removed; content restyled to canonical static shell. | PASS: static artifact, route, metadata, asset, and security checks |
| SCI5A/al-seraj-new | solution-cleanrooms.html | solution-cleanrooms.html | adapted | Secondary-source solution page is complementary; no equivalent detailed solution route exists in primary source. | PASS: static artifact, route, metadata, asset, and security checks |
| SCI5A/al-seraj-new | solution-electrical-engineering.html | solution-electrical-engineering.html | adapted | Secondary-source solution page is complementary; no equivalent detailed solution route exists in primary source. | PASS: static artifact, route, metadata, asset, and security checks |
| SCI5A/al-seraj-new | solution-engineering-consultancy.html | solution-engineering-consultancy.html | adapted | Secondary-source solution page is complementary; no equivalent detailed solution route exists in primary source. | PASS: static artifact, route, metadata, asset, and security checks |
| SCI5A/al-seraj-new | solution-hvac-systems.html | solution-hvac-systems.html | adapted | Secondary-source solution page is complementary; no equivalent detailed solution route exists in primary source. | PASS: static artifact, route, metadata, asset, and security checks |
| SCI5A/al-seraj-new | solution-industrial-automation.html | solution-industrial-automation.html | adapted | Secondary-source solution page is complementary; no equivalent detailed solution route exists in primary source. | PASS: static artifact, route, metadata, asset, and security checks |
| SCI5A/al-seraj-new | solution-industrial-equipment.html | solution-industrial-equipment.html | adapted | Secondary-source solution page is complementary; no equivalent detailed solution route exists in primary source. | PASS: static artifact, route, metadata, asset, and security checks |
| SCI5A/al-seraj-new | solution-pharmaceutical-facilities.html | solution-pharmaceutical-facilities.html | adapted | Secondary-source solution page is complementary; no equivalent detailed solution route exists in primary source. | PASS: static artifact, route, metadata, asset, and security checks |
| SCI5A/al-seraj-new | solution-turnkey-industrial-projects.html | solution-turnkey-industrial-projects.html | adapted | Secondary-source solution page is complementary; no equivalent detailed solution route exists in primary source. | PASS: static artifact, route, metadata, asset, and security checks |
| SCI5A/seraj | article-fire-safety.html | article-fire-safety.html | adapted | Relevant primary-source knowledge article; external domain and unsupported metadata removed. | PASS: static artifact, route, metadata, asset, and security checks |
| SCI5A/seraj | article-gmp-standards.html | article-gmp-standards.html | adapted | Relevant primary-source knowledge article; external domain and unsupported metadata removed. | PASS: static artifact, route, metadata, asset, and security checks |
| SCI5A/seraj | article-turnkey-projects.html | article-turnkey-projects.html | adapted | Relevant primary-source knowledge article; external domain and unsupported metadata removed. | PASS: static artifact, route, metadata, asset, and security checks |
| SCI5A/seraj | service-*.html | services.html | created index | Canonical route index for the integrated service pages. | PASS: static artifact, route, metadata, asset, and security checks |
| SCI5A/al-seraj-new | solution-*.html | solutions.html | created index | Canonical route index for complementary solution pages. | PASS: static artifact, route, metadata, asset, and security checks |
| SCI5A/seraj | article-*.html | articles.html | created index | Canonical route index for selected knowledge pages. | PASS: static artifact, route, metadata, asset, and security checks |
| SCI5A/al-seraj-new | privacy-policy.html | privacy-policy.html | adapted | Secondary privacy behavior contract is more accurate for the current no-provider/no-storage interface; custom-domain/legal claims removed. | PASS: static artifact, route, metadata, asset, and security checks |
| SCI5A/al-seraj-new | contact.html + js/company-contact.js | contact.html | adapted UI only | Secondary contact UI and accessible validation selected; provider logic and custom-domain references deliberately excluded. | PASS: static artifact, route, metadata, asset, security, and local-only form checks |
| SCI5A/al-seraj-new | about.html | about.html | adapted | Evidence-conscious company identity and methodology page; explicitly avoids unsupported project-history claims. | PASS: static/routes/metadata/assets/security |
| SCI5A/al-seraj-new | industries.html | industries.html | adapted | Industry-context structure supported by source; rewritten to avoid claims of completed projects or certifications. | PASS: static/routes/metadata/assets/security |
| SCI5A/al-seraj-new | projects.html | projects.html | adapted evidence policy | Portfolio framework retained, but unverified projects and case studies are not published. | PASS: static/routes/metadata/assets/security |
| SCI5A/al-seraj-new + reviewed capability pages | about.html + solution-*.html | capabilities.html | synthesized categories | Capabilities page uses categories already present in reviewed sources and marks scope/claim verification as required. | PASS: static/routes/metadata/assets/security |
| SCI5A/al-seraj-new | solution-pharmaceutical-facilities.html | pharmaceutical-manufacturing.html | adapted | Pharmaceutical-facility context is supported; project records, certifications, and outcomes are deliberately excluded. | PASS: static/routes/metadata/assets/security |

## Rejected and Deliberately Excluded Sources

| Source | Exclusion reason |
|---|---|
| `SCI5A/seraj/request-consultation.html` | Direct WhatsApp/mailto delivery and custom-domain metadata conflict with authorization. |
| `SCI5A/seraj/case-studies.html` and `testimonials.html` | Claims require owner/evidence review; not exposed in public artifact. |
| `SCI5A/al-seraj-new/versions/*` | Historical/build artifacts; not part of canonical runtime. |
| `SCI5A/duct-quantity-takeoff-calculator` | Remains independent; separate engineering approval required. |
| All other repositories | Outside this consolidation batch and untouched. |
