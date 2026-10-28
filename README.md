# ContractorOS — The Premium Contractor Website Launch & Growth System

> **One proven system. Every contractor. Every launch.**

ContractorOS is an interactive, frontend-driven operating demonstration designed for agencies and operators who launch, optimize, deploy, and report on high-performing contractor websites.

---

## 🌟 Key Features

1. **Premium Marketing Experience (`/`)**
   - Architectural two-column hero with live miniature website composition and floating badges.
   - 4 System pillars: Reusable Templates, Technical SEO, Reliable Launches, and Monthly Reporting.
   - Interactive 6-stage launch pipeline with interactive step previews.
   - Responsive live preview iframe with desktop and 390px mobile viewports.
   - Standardized monthly reporting preview with sample period selectors.

2. **Customer-Facing Contractor Website (`/preview`)**
   - Live sample business: **Oakline Renovation Co.** (Austin, Texas).
   - Core Pages: Home, Services, Our Work (with interactive project modal), About, Service Areas, and Contact.
   - Fully interactive consultation form with field validation, demo reference number generator (`OS-2026-XXXX`), and instant sync to dashboard conversions.
   - Client and template switcher in the preview top bar.

3. **Operations Workspace (`/workspace`)**
   - **Overview Dashboard:** Active websites, drafts, monthly launches, recent activity feed, and QA checklist.
   - **Client Directory (`/workspace/clients`):** Search, status filters, sorting, client duplication, and instant deletion.
   - **Client Onboarding Wizard (`/workspace/clients/new`):** 7-step intake pipeline transforming structured data into a live website instance with persistent drafts.
   - **Live Customizer (`/workspace/clients/:id`):** Split-screen editor with real-time reactive preview and mobile toggles.
   - **Technical SEO Inspector (`/workspace/seo`):** 18 automated pre-flight checks, deterministic score, XML sitemap preview, robots.txt, and copyable Schema.org `LocalBusiness` JSON-LD.
   - **Deployment Simulator (`/workspace/deployments`):** 6-stage release pipeline with Netlify honeypot diagnostics and controlled error simulation.
   - **Monthly Reports (`/workspace/reports`):** Recharts traffic velocity, executive summary editor, printable PDF preview (`window.print`), and simulated client email dispatch.
   - **Template Library (`/workspace/templates`):** 3 architectural contractor frameworks (Oakline Renovation, Summit Home, Cedar & Stone).
   - **Settings (`/workspace/settings`):** Agency branding defaults, cloud integration blueprints, and demo state reset.

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build production bundle
npm run build
```

---

## 🌐 Netlify Deployment

This project is pre-configured for instant zero-config deployment on Netlify:

1. **`netlify.toml`**: Pre-configured build command (`npm run build`), publish directory (`dist`), and SPA rewrites (`/* -> /index.html 200`).
2. **`public/_redirects`**: Backup wildcard redirect rule for direct deep link refreshes (`/preview`, `/workspace`, etc.).
3. **Netlify Forms**: Build-time static scraper form included in `index.html` with honeypot spam protection.

### Deploying via Git
1. Connect your repository (`https://github.com/arcthaneaidelta/Contractor-Website.git`) to Netlify.
2. Netlify will auto-detect settings from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Click **Deploy Site**.
