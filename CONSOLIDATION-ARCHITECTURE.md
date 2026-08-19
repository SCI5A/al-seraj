# CONSOLIDATION-ARCHITECTURE

## Canonical Architecture

`SCI5A/al-seraj` remains the canonical static GitHub Pages repository. The first integration batch preserves the existing root HTML architecture and adds explicitly routed static pages for services, solutions, articles, privacy, and contact. No React, Firebase, backend, database, CRM, SMTP, custom domain, DNS, secrets, or deployment architecture replacement is introduced.

## Source Policy

`SCI5A/seraj` is the primary content source for service pages and articles. `SCI5A/al-seraj-new` is the secondary source for complementary solution pages and the safer no-provider contact/privacy interaction model. No repository-wide merge is performed.

## URL Policy

The only canonical production origin used by integrated pages is `https://sci5a.github.io/al-seraj/`. Source custom domains are not copied into canonical, Open Graph, Twitter, JSON-LD, sitemap, robots, or internal route links.

## Contact and Privacy Policy

The integrated contact page provides UI and client-side validation only. It does not send, store, or activate a lead provider. The privacy page describes the current behavior and must be checked against the existing homepage form before approval.

## Artifact Policy

The authoritative Pages workflow remains the existing `static.yml` workflow. The candidate workflow stages only the approved static application files and excludes internal reports, historical backups, source versions, and integration documentation from the production artifact.

## Rollback

All changes are on `agent/gate-d-content-integration` from baseline `4a16840d088c6ed5d6126a51daed8efb564621dc`. No remote branch, pull request, merge, or deployment exists. Reverting the candidate commit restores the canonical baseline.
