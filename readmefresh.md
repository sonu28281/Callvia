make changes only on Homepage (/) plus global Header/Footer behavior, and forms/webhook. Do not redesign other pages yet beyond ensuring nav links route correctly.

0) Rules / Constraints

Keep logo and typography (Sora headings, Inter body). No font changes.

Default website mode = Light theme.

Add a Theme Toggle Switch in header (Light ↔ Dark).

No flashy UI: no neon glows, no heavy gradients. Use the “Aurora” gradient only as a subtle accent (5–15% opacity) for borders/hero accents, never as full background.

Fix mobile responsiveness: remove excessive padding/margins; ensure consistent spacing and readable layout on phones.

1) HEADER (global)
Header nav structure

Top-level items:

Products (Mega menu)

Solutions (Dropdown)

Pricing

Developers

Resources

Theme Toggle Switch

Login / Signup

Remove any “Test Page” links from header.

Header behavior

On scroll: header becomes slightly dim/translucent with blur (sticky), looks premium and not harsh.

Ensure header background is visually distinct from hero section (hero background cannot be identical to header bg).

Products Mega Menu (3 groups)

Create mega menu with these sections + items:

Voice & Calling

SIP Trunks

DID Numbers

Call Recording

Predictive Dialer

AI & Automation

AI Agents

AI Transcription

AI Receptionist

More

WhatsApp Automation

Each links to the appropriate route (create routes if not ready; placeholder pages ok).

Solutions dropdown

CallFlo Suite (For Call Centers & Enterprise)

Callflo DeskAI (AI Receptionist/Agents for Individual)

Partners (White-label reseller program)

Each links to a route (placeholder ok).

2) FOOTER (global)

Footer should be smaller / trimmed (current is too wide and oversized). Keep:

Column links for header pages + add these pages:

About Us

Career

Contact Us

Submit Enquiry (opens enquiry modal)

AI Documentation (Developers Page)

Terms of Service

Privacy Policy

Compliance

Security

Keep social icons + WhatsApp icon

Keep copyright

WhatsApp link must come from config so it can be changed later

Footer background must be visually distinct from the section above it

Fix scroll-to-top issue

Currently clicking footer links loads page mid-section. Implement ScrollToTop on route change so every navigation starts at top.

3) HOMEPAGE SECTION FIXES (keep structure, improve layout + backgrounds)
3.1 Hero Section

Keep these elements (with improvements):

Badge “TRAI-Approved Platform” is good.

Heading “Enterprise Telecom Infrastructure” is good — make it more impactful (can adjust wording slightly but keep intent).

Replace this line (do NOT mention “Class-B” anywhere):
OLD: “Class-B VNO platform powering secure domestic calling, AI-driven automation, and fully white-label telecom services.”
NEW: rewrite to something like “VNO-approved platform powering secure domestic calling, AI automation, and white-label telecom services.” (better copy allowed, but no Class-B)

CTAs:

“Book a Demo” → opens enquiry modal form (see forms spec)

“View Pricing” → navigates to /pricing

Right-side “Get Early Access” form

Add a form card on the right side of hero (desktop), and place it below hero text on mobile:
Fields:

Company Name

Email

Contact Number (+91 default, validate)
On submit:

send payload to webhook via Node API forwarder

show thank-you modal message
Hidden field: lead_source = "earlyaccess_home"
Also capture UTM fields.

Hero trust bullets under CTA (can edit slightly)

Keep 3 bullets but can reword.
Examples:

TRAI-approved VNO infrastructure

Carrier-grade backend built in-house

White-label ready for partners
(You may adjust 3rd line as requested.)

3.2 Core Features section

Keep content, but improve card layout:

Reduce awkward whitespace caused by icon layout.

Ensure cards look balanced and consistent.

Use 2–4 column responsive grid (2 columns tablet, 1 column mobile).

Maintain section separation using alternate background/surface.

3.3 Enterprise-Grade Platform section (4 items grid)

Must be 2x2 layout on desktop:

Real-time Call Management

Advanced Analytics

Enterprise Security

Infinite Scalability
Fix layout so it’s never 3+1 uneven. Use responsive behavior:

Desktop: 2 columns

Tablet: 2 columns

Mobile: 1 column

3.4 Built for Every Business section

Improve design:

Keep heading and intent.

Change layout to 3 cards per row on desktop.

Replace weak icons: prefer better icon set or use images; keep it attractive but not heavy animation.

Buttons:

“Get Started” opens enquiry form modal (lead_source = "getstarted_home")

“Talk to Sales” navigates to /contact

3.5 Stats strip (10M+ Calls Managed etc.)

Keep as is (looks perfect).

3.6 Final CTA section (“Ready to Scale…”)

Keep as is, but ensure section above footer has different background than footer.

4) FORMS (Modal Enquiry) + Webhook (Must work now)
One enquiry modal form used by CTAs (Book a Demo / Get Started / Submit Enquiry)

Fields:

Full Name (required)

Email (required, validate)

Phone Number (required, validate, include country code selector with default India)

Country (dropdown, default India)

On submit:

POST JSON to Node endpoint /api/leads which forwards to a webhook URL (Zapier/Pabbly).

Show success modal: “Thank you for submitting your enquiry” + short line.

Reject obvious junk: basic validation, no scraping defenses needed.

Hidden fields to always include

utm_source

utm_medium

utm_campaign

utm_content

utm_term

page_path

referrer

timestamp

lead_source (string set by CTA):

"homeenquiry" for Book a Demo

"getstarted_home" for Get Started

"earlyaccess_home" for early access form

UTMs: parse from querystring and store once (session/local storage) so it persists across navigation.

Webhook

Keep webhook URL in config.

Client calls Node API; Node forwards to webhook (do not expose webhook directly in frontend).

Handle errors gracefully.

5) SEO Meta (Homepage only) controlled by config (head, not body)

Meta tags must be set in <head> using react-helmet-async and loaded from config (seo_config.json or config.json). Do NOT treat H1/H2 as meta.

For homepage defaults:

titleSuffix: " | Callvia - Enterprise Telecom & AI Platform"

description: "Carrier-grade cloud telephony for India—SIP trunks, DID numbers, predictive dialer, call recording, AI transcription, AI agents and AI receptionist. TRAI-compliant infrastructure."

ogImage: "/og-default.jpg"

twitterCard: "summary_large_image"

robots: "index, follow"

Ensure headings/content remain independent from meta config.

6) THEME SYSTEM (replace old theme; implement these tokens)

Implement full theme tokens and apply consistently across:
buttons, nav, forms, cards, modals, alerts.

Light Theme (default)

Background: #FFFFFF
Surface/Cards: #F7F9FC
Elevated Surface: #FFFFFF
Text Primary: #0B1220
Text Muted: #475569
Borders: #E2E8F0
Strong Borders: #CBD5E1
Primary CTA: #1D6CF4 (hover #1A5FD7, active #1652B9, text #FFFFFF)
Secondary accent: #DF0C82
Premium accent: #FC962A (use dark text #0B1220)
Info: #06ACFD
Success: #1DBE7A
Warning: #FC962A
Danger: #FC4448
Usage rule: mostly whites; blue 8–15%; magenta/gold/gradients ≤5%

Dark Theme

Background: #070B12
Surface: #0B1220
Elevated: #111B2D
Text Primary: #E6EDF8
Text Muted: #A6B0C3
Borders: #22304A
Strong Borders: #2F3D5B
Primary Button: #1D6CF4 (hover #347BF5, active #1A5FD7)
Links on dark: #347BF5
Secondary: #DF0C82
Premium: #FC962A

Aurora gradient:
linear-gradient(135deg, #06ACFD 0%, #7041D9 35%, #DF0C82 70%, #FC962A 100%)
Rules: never full-page background; only subtle accents/borders/hero highlights.

7) CONFIG FILE REQUIREMENTS

Add/update site_config.json (or TS equivalent) to store:

whatsappLink

webhookUrl

supportEmail (optional)

social URLs

feature flags

defaultCountry = India

enableDataLayerRouteEvents (future, default false)

No hardcoded WhatsApp URLs or webhook URLs in components.

8) Acceptance checks

Home loads in Light theme by default.

Theme toggle works and persists (localStorage).

Header dims/translucent on scroll.

Header/hero and section/footer backgrounds are visibly distinct.

Footer is smaller/trimmed and links work.

Footer navigation + any link scrolls to top.

Book a Demo/Get Started/Submit Enquiry open modal form and submit to webhook via Node API.

Early access form works separately with its own lead_source.

Mobile spacing is clean.

Deliver only homepage + header/footer + theme + forms/webhook + homepage SEO wiring. Do not build other pages content now.