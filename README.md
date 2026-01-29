# Callvia

You are a senior frontend architect and UI systems designer
with experience building enterprise telecom and SaaS platforms.

Your task is to build a PRODUCTION‑READY marketing website for a company called “Callvia”.

This is NOT a basic SaaS website.
This is a carrier‑grade, enterprise telecom + AI platform website.

---

## 🧠 BUSINESS CONTEXT (CRITICAL – READ CAREFULLY)

Callvia is:
- A Class‑B VNO (Virtual Network Operator) in India
- Operating DOMESTIC‑ONLY (India)
- Built on a carrier‑grade Class‑5 switch backend
- Fully WHITE‑LABEL capable (Callvia can be invisible)
- Prepaid, usage‑based billing (wallet system)
- Focused on:
  - Call Centers
  - Enterprises
  - Resellers
  - Small businesses via AI Receptionist

Callvia offers:
- DID Numbers
- SIP Trunks
- Cloud Call Center
- Auto / Manual Dialer
- IVR & Call Routing
- AI Receptionist (Inbound)
- Programmable AI Voice Agents
- WhatsApp Automation (supporting channel)
- White‑Label Platform
- Reseller Enablement
- APIs & Webhooks (overview only)

Callvia DOES NOT offer:
- International calling (no ILD)
- Grey routes
- Cheap bulk promotional calling
- Political / scam / loan harassment campaigns

The website must reflect:
- Trust
- Control
- Enterprise readiness
- White‑label positioning
- Clean Indian context (NOT flag colors)

---

## 🎯 PRIMARY GOALS

1. Enterprise‑grade design (clean, confident, not flashy)
2. Sales‑driven UX (clear positioning + CTAs)
3. Fully THEME‑SWITCHABLE architecture
4. White‑label friendly language
5. Scalable navigation & components
6. GitHub‑ready static deployment

---

## 🧱 TECH STACK (MANDATORY)

- React (Vite)
- Tailwind CSS
- React Router
- Lucide Icons (SVG, outline, medium stroke)
- Functional components only
- No UI frameworks (NO MUI, Ant, ShadCN, Chakra)
- No inline styles
- No hardcoded colors
- Mobile‑first & responsive
- Accessible (ARIA where needed)

---

## 🎨 THEME SYSTEM (VERY IMPORTANT)

Create a proper THEME ABSTRACTION LAYER.

Rules:
- ALL colors, fonts, spacing, radii come from theme tokens
- No hex values inside components
- Theme must be switchable by changing ONE import

Structure:
- themes/default
- themes/corporate (example future theme)
- CSS variables + Tailwind preset

Theme controls:
- Primary / secondary colors
- Text colors
- Backgrounds
- Borders
- Icon colors
- Hover states

---

## 🧭 NAVIGATION (CRITICAL)

### Top Navigation
- Logo (left)
- Menu items:
  - Products (MEGA MENU)
  - Solutions
  - Pricing
  - Developers
  - Resources
  - Company
- Header CTAs (right):
  - Talk to Sales
  - Book Demo
  - Reseller CTA: “Be Your Own Telecom Business”

---

## 🔥 MEGA MENU: “PRODUCTS” (LOCKED DESIGN)

### Structure
- ONE mega menu only
- Hybrid layout:
  - TOP TABS
  - ICON GRID below
- Medium‑stroke outline icons
- Card‑style hover (subtle background + border)
- NO CTAs inside menu
- Fully config‑driven

### Tabs & Items

TAB 1: Voice & Calling
- DID Numbers
- SIP Trunks
- Cloud Call Center
- Auto / Manual Dialer
- IVR & Call Routing
- Call Recording & Monitoring

TAB 2: AI & Automation
- AI Receptionist
- AI Voice Agents
- AI Outbound Calling (Phase‑2 tag)
- Conversational IVR

TAB 3: Channels
- WhatsApp Automation
- Click‑to‑Call Widgets

TAB 4: Platform
- White‑Label Platform
- Reseller Enablement
- Prepaid Billing & Wallet
- Monitoring & Controls
- APIs & Webhooks

All menu content must come from:
`/data/menuConfig.js`

---

## 📄 REQUIRED PAGES (CREATE ALL)

### Core Pages
- Home
- Pricing (NO raw rates)
- Support
- Contact
- About
- Compliance & Legal

### Product Pages
- /products/did-numbers
- /products/sip-trunks
- /products/cloud-call-center
- /products/dialer
- /products/ivr-routing
- /products/call-monitoring
- /products/ai-receptionist
- /products/ai-voice-agents
- /products/ai-outbound
- /products/conversational-ivr
- /products/whatsapp-automation
- /products/click-to-call

### Platform Pages
- /platform/white-label
- /platform/reseller
- /platform/billing
- /platform/controls

### Solutions Pages
- For Call Centers
- For Enterprises
- For Resellers
- For Small Businesses (AI Receptionist)

### Developers
- /developers/api
  - API overview ONLY
  - Use‑cases
  - Auth concept
  - CTA: “Get API Access”
  - NO real keys or endpoints

---

## 🧠 CONTENT & COPY RULES

Tone:
- Enterprise
- Confident
- Technical but simple
- Trust‑first

Avoid:
- Buzzwords
- Cheap SaaS language
- Over‑promising

Highlight:
- Control
- White‑label
- Prepaid safety
- AI intelligence
- Domestic compliance

---

## 🇮🇳 VISUAL STYLE

- Indian context via:
  - Subtle line‑art city skylines
  - Monument outlines (background only)
- NO Indian flag colors
- NO gradients
- White / light backgrounds
- Strong typography hierarchy
- Clean spacing

Create a dynamic background that simulates a waving effect using soft, brushed gradients of the Indian flag colors (saffron, white, and green). The design should not display the actual flag or Ashoka Chakra, but instead use light, flowing strokes of these colors blending smoothly across the screen. The animation should give the impression of gentle movement, like fabric waving in the wind, while maintaining a subtle and elegant look suitable for a website background. 

---

## 💬 SUPPORT & CHAT

Support Page must include:
- Support email
- Sales email
- WhatsApp support link
- Support hours

Floating widget:
- WhatsApp chat button (bottom‑right)
- No chatbot at launch

---

## 🗂️ FOLDER STRUCTURE (MANDATORY)

src/
├── app/
│   ├── App.jsx
│   ├── router.jsx
│
├── themes/
│   ├── default/
│   ├── corporate/
│   └── index.js
│
├── components/
│   ├── navigation/
│   ├── ui/
│   ├── layout/
│   ├── sections/
│
├── pages/
├── data/
├── assets/
│   ├── icons/
│   ├── illustrations/
│
├── styles/
└── main.jsx

---

## 🚀 OUTPUT EXPECTATIONS

- Full React + Tailwind code
- Clean, readable, commented
- GitHub‑ready
- No backend assumptions
- Easy to extend later (themes, pages, APIs)

DO NOT:
- Skip pages
- Hardcode values
- Use third‑party UI kits
- Over‑engineer

This website must look like it belongs to a serious telecom operator.
