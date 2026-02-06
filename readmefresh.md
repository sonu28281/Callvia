Make sure to use the logo.png from public folder.
Make sure to use content related images on the website. I want you to use the images.

You are upgrading the Callvia website (React + Node, hardcoded). Rebuild the homepage + site shell + routing + SEO scaffolding + pricing calculator + forms/webhooks.
DO NOT invent marketing copy. Use short placeholders like [HERO_HEADLINE], [SECTION_SUBTEXT], etc. We will provide content later.

0) NON-NEGOTIABLES
Branding / UI

Keep existing logo and typography (Sora headings, Inter body). Do not change font choices.

Implement Theme Toggle in header: Light ↔ Dark.

No neon glows, no multicolor gradients, no animated blobs. Micro-interactions only.

Use 8px spacing grid, generous whitespace. Cards: 12–16px radius, 1px border, subtle shadow.

Fix previous issues

Header and hero background must be visually distinct (avoid same color).

Section before footer and footer must be visually distinct (avoid same background).

On clicking footer links, navigation must scroll to top (hero). Use ScrollToTop on route change.

Footer should be smaller (remove extra support hours/office blocks if not needed; keep clean).

WhatsApp floating button remains, but WhatsApp link must come from config.

Tracking

GTM + Meta Pixel pageview already working. Do not add tracking events now, but make site ready.

However, forms must capture UTMs and lead type and submit to webhook.

1) THEMES (TOKENS)
Dark Mode Tokens (must match)

bg: #070A12

nav/footer/deep: #0B1220

surface/card: #0F1B33

border: #223055

text: #EAF0FF

muted: #A7B3CE

accent (CTA/active only ≤5%): #FF9F1C

accent-soft: #FFE2B8

heroGradientEnd: #0B1630 (only subtle single hero gradient allowed)

Primary button: bg #FF9F1C + text #0B1220
Secondary button: outline #223055 + hover tint

Light Mode Tokens

bg: #FFFFFF

surface: #FFFFFF

border: #E3E9F6

text: #0B1220

muted: #44506A

accent: #FF9F1C (same in both)

accent-soft: #FFF1D9

Single subtle hero gradient only (white to very light neutral)

Implement tokens with CSS variables and a theme provider.

2) ROUTES / PAGES (React Router)

Create these routes/pages (minimal templates now with placeholders):

/ Home

/solutions (overview template)

/solutions/:segment where segment in { callflo-suite, ai-receptionist, partners }

IMPORTANT: In UI do NOT show “B2B/B2C/Reseller”.

Use these labels:

callflo-suite = B2B (Call Centers/Enterprises)

ai-receptionist = B2C (Small businesses)

partners = Reseller

/products overview template

/products/:product where product in:

sip-trunks

did-numbers

ai-agents

ai-transcription

call-recording

predictive-dialer

ai-receptionist

whatsapp-automation

/pricing dynamic pricing calculator (config-driven)

/features

/developers

/resources

/about

/careers

/reseller-program (can map to partners page too)

/contact

/terms

/privacy

Add required “often-missed” pages:

/compliance (placeholder)

/security (placeholder)

/faq (placeholder)

/status (placeholder)
Remove any “Test Page 1/2” from nav; if routes exist, mark noindex.

3) HEADER / FOOTER
Header (responsive)

Left: logo + wordmark

Nav: Products, Solutions, Pricing, Developers, Resources, Company

Right: Login + Sign Up (or Portal)

Add Theme Toggle in header (icon button)

Mobile hamburger with same structure

Products Mega Menu (grouped columns)

Mega menu columns:
CallFlo Suite (B2B)

SIP Trunks

DID Numbers

AI Agents

AI Transcription

Call Recording

Predictive Dialer

AI Receptionist

WhatsApp Automation

AI Receptionist (B2C)

DID Numbers (Inbound Only) (links to did-numbers)

AI Receptionist

WhatsApp Automation

Partners (Reseller)

White-label Platform (placeholder page)

Reseller Panel (placeholder page)

Billing/Wallet (placeholder page)

Controls/Monitoring (placeholder page)

Each product links to /products/:product.

Solutions menu

CallFlo Suite → /solutions/callflo-suite

AI Receptionist → /solutions/ai-receptionist

Partners → /solutions/partners

Footer (smaller)

Columns: Products, Solutions, Developers/Resources, Company, Legal

Remove oversized blocks (support hours/office etc.)

Social icons: LinkedIn/Instagram/Facebook/WhatsApp

All contact/social URLs from config

Dynamic year

Scroll behavior fix

Implement ScrollToTop component: on route/path change scroll to top.

4) HOMEPAGE REDESIGN (placeholders only, modern fancy)

Rebuild homepage sections with strong differentiation between backgrounds:

Hero

[HERO_HEADLINE], [HERO_SUBTEXT]

CTAs: Book a Demo / View Pricing (both open correct form modal)

3 trust bullets placeholders [TRUST_BULLET_1..3]

Hero background uses subtle gradient, but header area must visually differ.

Segment switcher (3 cards/tabs)

CallFlo Suite / AI Receptionist / Partners

Each has 2–3 bullets placeholders and CTA → respective solutions page

Product Stack Diagram (boxes)

Must communicate rules:

SIP Trunk = base for most B2B services

DID can be sold standalone (exception)

B2C AI Receptionist requires DID

Use box diagram style: base layer + add-ons

Capabilities Grid
List all capabilities (don’t lose old features):

DID, SIP, Manual Dialer, CRM, IVR & routing, Conversational IVR

AI Agents, AI Transcription, Call Recording, Predictive Dialer, AI Receptionist

Monitoring & Controls, Real-time Dashboard, Analytics

Prepaid Wallet & Billing, API & Webhooks

White-label platform
Each card links to appropriate product/features page.

Stats strip placeholders: [STAT_1..4]

Final CTA section

[CTA_HEADLINE], [CTA_SUBTEXT]

Buttons: Get Started / Talk to Sales (open correct modal form)

5) FORMS + WEBHOOK (MANDATORY NOW)
Requirement

All CTAs/buttons should work now by opening a modal form.
Create 3 different lead forms + 3 different thank-you modals:

CallFlo Suite (B2B) lead form

AI Receptionist (B2C) lead form

Partners (Reseller) lead form

Each form fields:

Full Name

Email

Phone Number

Country (default India)
Hidden fields (auto-capture):

utm_source, utm_medium, utm_campaign, utm_content, utm_term

lead_type = callflo-suite | ai-receptionist | partners

page_path, referrer, timestamp

Webhook submission

On submit, send JSON payload via POST to a webhook URL from config (Zapier/Pabbly).

Create a single API helper (/api/leads or /api/webhook) in Node.

Client submits to Node endpoint, Node forwards to webhook (keeps webhook secret server-side).

Show thank-you modal on success; error state on failure.

All webhook URLs and toggles must be in config.

6) SEO (DO NOT use GTM)
Use react-helmet-async

Implement per-route SEO using a single file:

seo_config.json controlling title, description, og image, canonical path, robots meta.

Each route reads from seo_config with defaults/fallbacks.

Support noindex for non-public routes (thank-you/admin/test/status optional).

Per page:

<title>

<meta name="description">

<link rel="canonical">

<meta name="robots">

OpenGraph + Twitter tags with fallbacks

robots.txt and sitemap.xml

Generate robots.txt and sitemap.xml

Exclude routes marked noindex and any thank-you/admin/test routes.

JSON-LD schema

Organization + WebSite schema site-wide

Service schema for /solutions/callflo-suite, /solutions/ai-receptionist, /solutions/partners

FAQ schema only where FAQ section exists (later)

7) PERFORMANCE (basic but real)

Responsive images, lazy loading

Code-splitting by route

Caching headers for static assets (Node)

Avoid huge bundles; optimize imports

8) dataLayer route_change hook (READY BUT CONFIG-GATED)

Implement a React Router listener that can push:

window.dataLayer.push({
  event: "route_change",
  page_path,
  page_title,
  segment: "callflo-suite|ai-receptionist|partners"
})


But keep it behind config flag:

enableDataLayerRouteEvents: false by default.

9) PRICING PAGE (Dynamic calculator, config-driven)

Create /pricing inspired by connexcs pricing UX (sliders + modules). Must be fully driven by config.

Currency

Default currency: INR

Also show selectable currencies: USD, EUR (and a few common)

Currency conversion rates must come from config (manual) for now.

Inputs

Slider: Call minutes/month range 0 → 50M (configurable max)

Slider: Concurrent channels range 0 → 3000 (configurable max)

Service toggles (checkboxes) for:

SIP Trunks (base)

AI Agents

AI Transcription

Call Recording

Predictive Dialer (per seat; no channel limitation)

AI Receptionist (call pulse logic)

WhatsApp Automation (per template)

DID Numbers (monthly rental optional, if needed later)

All slider min/max/steps must come from config.

Cost + profit logic (do not expose buy cost)

Implement pricing model:

SIP buy cost = 0.92 INR/min + 0.03 INR/min switch cost (internal only)

AI Agents buy cost = 3.62 INR/min

AI Transcription buy cost = 0.0006 INR/min

Call Recording buy cost = 0.0003 INR/min

Predictive Dialer buy cost = 3 USD/seat (seat input optional; if not added now, keep placeholder)

AI Receptionist pricing (pulse logic):

If call duration >= 60s: buy = 1.36 INR per call

If call duration < 30s: buy = 0.027 INR per call

(Use slider minutes to estimate calls; implement assumptions in config)

WhatsApp template buy cost = 0.94919 INR per template (add monthly templates input optional or config-based estimate)

Margin rules:

At minimum usage: target margin >= 30%

At maximum usage: margin must not drop below 10%
Margin should gradually decrease as minutes/channels increase.
Implement margin curve in config (e.g., minMargin, maxMargin, curve type) to avoid hardcoding.

Plans

Show 3 plans:

Plan A (e.g., Standard): calculated monthly estimate

Plan B (e.g., Pro): calculated monthly estimate with slightly better inclusions (config-driven multipliers)

Plan C (Ultra/Enterprise): no price, show “Contact Sales” CTA (opens relevant form)

All plan labels, multipliers, included toggles, and assumptions must be in config.

Output

Show:

Estimated monthly total

Breakdown by selected services (still not revealing buy cost)

Clear disclaimer placeholder text [PRICING_DISCLAIMER]

10) CONFIG FILES (future-proof)

Create:

site_config.json (theme flags, contacts, social URLs, WhatsApp link, webhook endpoints, toggles)

pricing_config.json (cost inputs, sliders, margins, currency rates, plan definitions)

seo_config.json (route-based SEO meta + og images + canonical paths + robots/noindex)

Anything likely to change later must be in config.

11) CODE STRUCTURE

Use clean structure:

src/pages/*

src/components/* (Header, Footer, ModalForm, etc.)

src/components/home/* sections

src/config/* for configs

src/seo/* for SEO helpers

server/api/* for webhook forwarding

Componentize homepage: HomeHero, SegmentSwitcher, StackDiagram, CapabilityGrid, StatsStrip, FinalCTA.

Ensure accessibility and responsive design.

DELIVERABLE

Updated homepage + global header/footer with mega menus

Full page routing scaffolds

Theme toggle

Modal forms (3) + thank-you modals (3) + webhook integration with hidden UTM fields

Pricing calculator page with config-driven sliders + services + margin rules + currency switch

SEO scaffolding using react-helmet-async with seo_config.json

robots.txt + sitemap.xml generation excluding noindex routes

ScrollToTop fix for all navigations

DO NOT write final marketing content. Use placeholders.