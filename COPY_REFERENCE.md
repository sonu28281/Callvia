# Callvia Homepage Redesign - Visual & Copy Reference

---

## 📝 COPY-PASTE SECTIONS (Ready to Use)

### SECTION 1: HERO

**Headline:**
```
Enterprise Telecom Infrastructure Built for India
```

**Sub-headline:**
```
Class-B VNO platform powering secure domestic calling, AI-driven automation, 
and fully white-label telecom services.
```

**Trust Line:**
```
Built for compliance. Designed for scale. Controlled by you.
```

**CTA Buttons:**
- Primary: "Book Demo"
- Secondary: "Talk to Sales"

**Micro-text (below buttons):**
```
No international routes. No grey traffic. India-only compliance.
```

---

### SECTION 2: CORE TELECOM CAPABILITIES

**Section Title:**
```
Core Telecom Capabilities
```

**Card 1: DID Numbers**
```
Icon: Phone
Title: DID Numbers
Description: Pan-India virtual numbers with carrier-grade reliability.
```

**Card 2: Cloud Call Center**
```
Icon: Zap
Title: Cloud Call Center
Description: Inbound & outbound calling built for domestic operations.
```

**Card 3: AI Calling & Automation**
```
Icon: Cpu
Title: AI Calling & Automation
Description: AI receptionist and programmable voice agents.
```

**Card 4: Dialer & Routing**
```
Icon: BarChart3
Title: Dialer & Routing
Description: Manual, auto-dialer with IVR & intelligent routing.
```

**Card 5: White-Label Platform**
```
Icon: Globe
Title: White-Label Platform
Description: Launch your own branded telecom service.
```

**Card 6: Prepaid Billing & Control**
```
Icon: CreditCard
Title: Prepaid Billing & Control
Description: Usage-based billing with real-time balance control.
```

---

### SECTION 3: BUILT FOR TEAMS THAT RUN ON CALLS

**Section Title:**
```
Built for Teams That Run on Calls
```

**Section Subtitle:**
```
From call centers to enterprises, Callvia powers compliant, scaled domestic telecom operations.
```

**Card 1: Call Centers**
```
Icon: BarChart3
Title: Call Centers
Description: Scale domestic campaigns with control and compliance.
```

**Card 2: Enterprises**
```
Icon: Building2
Title: Enterprises
Description: Secure, API-driven calling infrastructure.
```

**Card 3: Resellers**
```
Icon: TrendingUp
Title: Resellers
Description: Start your own telecom business with white-label control.
```

**Card 4: Small Businesses**
```
Icon: Phone
Title: Small Businesses
Description: Never miss a call with AI receptionist.
```

---

### SECTION 4: WHY CALLVIA

**Section Title:**
```
Why Enterprises Choose Callvia
```

**Section Subtitle:**
```
Built with carrier-grade standards, not startup shortcuts.
```

**Item 1:**
```
Icon: CheckCircle2
Title: Domestic-Only, Compliant Calling
Description: No international routes. TRAI-approved VNO infrastructure.
```

**Item 2:**
```
Icon: CheckCircle2
Title: Carrier-Grade Switching Backend
Description: Enterprise-level reliability, not resold third-party capacity.
```

**Item 3:**
```
Icon: CheckCircle2
Title: Full White-Label Capability
Description: Launch branded telecom services with your own branding.
```

**Item 4:**
```
Icon: CheckCircle2
Title: Prepaid, Risk-Controlled Billing
Description: Never chase unpaid invoices. Usage-based, real-time balance.
```

**Item 5:**
```
Icon: CheckCircle2
Title: AI-Powered Voice Automation
Description: Scale operations without hiring. Programmable agents.
```

**Item 6:**
```
Icon: CheckCircle2
Title: Direct Operator Mindset
Description: Built by telecom ops professionals, not SaaS resellers.
```

---

### SECTION 5: CTA SECTION

**Title:**
```
Ready to Scale Your Telecom Operations?
```

**Buttons:**
- Primary: "Book a Demo"
- Secondary: "Talk to Sales"

**Support Text:**
```
Live support available for India-based teams. Get connected in under 24 hours.
```

---

### SECTION 6: FOOTER

**Tagline:**
```
Enterprise Telecom & AI Infrastructure for India.
```

**Contact Emphasis:**
```
📧 sales@callvia.com | 📧 support@callvia.com
(Make these clickable, bold, prominent)
```

---

## 🎨 DESIGN SYSTEM REFERENCE

### Typography

| Element | Class | Size | Weight | Color |
|---------|-------|------|--------|-------|
| Hero Headline | h1 | `text-6xl` | bold | gray-900 |
| Section Title | h2 | `text-3xl` | bold | gray-900 |
| Card Title | h3 | `text-lg` | semibold | gray-900 |
| Subheading (Hero) | p | `text-xl` | regular | gray-600 |
| Body/Description | p | `text-sm/text-base` | regular | gray-600 |
| Secondary/Trust | p | `text-sm` | regular | gray-500 |

### Colors

| Purpose | Tailwind | Hex |
|---------|----------|-----|
| Primary Buttons | blue-900 | #1e3a8a |
| Primary Hover | blue-950 | #172554 |
| Text - Primary | gray-900 | #111827 |
| Text - Secondary | gray-600 | #4b5563 |
| Text - Tertiary | gray-500 | #6b7280 |
| Backgrounds | white | #ffffff |
| Light BG | gray-50 | #f9fafb |
| Borders | gray-200 | #e5e7eb |

### Spacing

| Context | Class |
|---------|-------|
| Hero Section V Padding | `pt-32 pb-32` |
| Standard Section V Padding | `py-32` |
| CTA Section V Padding | `py-24` |
| Card Padding | `p-8` |
| Grid Gap | `gap-8` |
| Horizontal Container | `px-6` |

### Buttons

**Primary Button:**
```
bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold
hover:bg-blue-950 transition-colors inline-flex items-center gap-2
```

**Secondary Button:**
```
bg-transparent text-blue-900 border border-blue-900 px-8 py-3 rounded-lg font-semibold
hover:bg-blue-50 transition-colors
```

### Cards

**Capability Card:**
```
p-8 border border-gray-200 rounded-lg bg-white shadow-sm
hover:border-blue-900 hover:shadow-md transition-all
```

**Persona Card (With Left Border):**
```
p-8 bg-white rounded-lg border-l-4 border-blue-900 shadow-sm
hover:shadow-md transition-shadow
```

### Icons

- Source: Lucide React
- Sizing:
  - Capability/Persona cards: 32-40px
  - Feature/Why cards: 28px
- Color: `text-blue-900`

---

## 📱 RESPONSIVE BREAKPOINTS

### Mobile (< 768px)
- Single column grid
- Hero headline: `text-4xl`
- Section padding: `py-16`
- Container padding: `px-4`
- Button stack vertically with `flex-col`

### Tablet (768px - 1024px)
- 2 columns for capability cards
- 2x2 for personas
- Maintain spacing

### Desktop (> 1024px)
- 3 columns for capabilities
- 4 columns for personas
- Full spacing and padding

---

## 🔄 MIGRATION CHECKLIST

- [ ] Update Home.jsx with new structure
- [ ] Replace copy in all sections
- [ ] Add new icons to imports (BarChart3, Building2, TrendingUp, CheckCircle2)
- [ ] Add "Built for Teams" section
- [ ] Add "Why Callvia" section
- [ ] Add CTA section pre-footer
- [ ] Update AnimatedBackground colors (✅ Done)
- [ ] Test mobile responsiveness
- [ ] Verify all links/buttons work
- [ ] Test on different browsers
- [ ] Update Footer copy
- [ ] A/B test with stakeholders

---

## 💡 KEY MESSAGING PRINCIPLES

✅ DO SAY:
- Carrier-grade
- Compliant
- Controlled
- Infrastructure
- Domestic-only
- TRAI-approved
- Risk-controlled
- Reliable
- Scalable (when paired with compliance)
- Enterprise

❌ DON'T SAY:
- Revolutionary
- Game-changing
- Disruptive
- Unlimited
- Fastest
- Cheapest
- Cutting-edge (overused)
- Innovative (overused)
- Next-generation (vague)
- Cloud-native (buzzword)

---

## 🎯 TONE OF VOICE

**Voice:** Confident, clear, authoritative  
**Tone:** Professional, straightforward, India-centric  
**Personality:** Telecom ops professional, not marketing persona  
**Audience:** Enterprise buyers, call center operators, resellers, tech teams

**Example:**
- ❌ WRONG: "Revolutionize your communications with our next-gen AI platform!"
- ✅ RIGHT: "AI receptionist and programmable voice agents for scaled operations."

---

## 📊 SECTION FLOW

```
[Hero: Vision + Trust]
         ↓
[Capabilities: What We Offer]
         ↓
[Personas: Who We Serve]
         ↓
[Why Callvia: Why Choose Us]
         ↓
[CTA: Next Steps]
         ↓
[Footer: Support + Links]
```

This flow moves from **vision → features → personas → differentiation → action**.

---

## 🚀 LAUNCH NOTES

1. **Soft Launch:** Deploy to staging, gather feedback from 5-10 enterprise prospects
2. **A/B Testing:** Test hero copy variants if needed
3. **Analytics:** Track scroll depth, CTA clicks, hero CTA vs. section CTAs
4. **Mobile Testing:** Ensure all sections render properly on iPhone/Android
5. **Performance:** Verify AnimatedBackground doesn't cause jank (60fps)
6. **SEO:** Keep existing meta tags, update if needed for new copy

---

**Document Version:** 1.0  
**Status:** Copy & Reference Complete  
**Next Step:** Implementation in Home.jsx
