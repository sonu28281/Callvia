import React from 'react';
import { 
  ArrowRight, Phone, Zap, Cpu, BarChart3, 
  Globe, CreditCard, Building2, TrendingUp, CheckCircle2 
} from 'lucide-react';

export function Home() {
  return (
    <div>
      {/* 1. HERO SECTION - PREMIUM ENTERPRISE */}
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center pt-24 pb-20">
        {/* Background Layer 1: Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 z-0" />

        {/* Background Layer 2: Monument images with very low opacity */}
        <div className="absolute inset-0 z-1 overflow-hidden">
          {/* Taj Mahal - right side, very subtle */}
          <div
            className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-5 pointer-events-none"
            style={{
              width: '700px',
              height: '600px',
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 280"><defs><linearGradient id="taj" x1="0%25" y1="0%25" x2="0%25" y2="100%25"><stop offset="0%25" style="stop-color:rgba(100,120,140,0.8)"/><stop offset="100%25" style="stop-color:rgba(80,100,120,0.3)"/></linearGradient></defs><path d="M150 20 Q180 40 180 80 L180 140 Q195 130 220 140 L220 200 Q195 185 180 195 L180 250 L120 250 L120 195 Q105 185 80 200 L80 140 Q105 130 120 140 L120 80 Q120 40 150 20 Z" fill="url(%23taj)"/><ellipse cx="150" cy="30" rx="35" ry="25" fill="rgba(100,120,140,0.4)"/><rect x="70" y="220" width="15" height="50" fill="rgba(100,120,140,0.3)"/><rect x="215" y="220" width="15" height="50" fill="rgba(100,120,140,0.3)"/><rect x="110" y="250" width="80" height="25" fill="rgba(100,120,140,0.2)" rx="3"/></svg>')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
            }}
          />

          {/* India Gate - left side, very subtle */}
          <div
            className="absolute left-0 top-1/3 opacity-5 pointer-events-none"
            style={{
              width: '600px',
              height: '500px',
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><defs><linearGradient id="gate" x1="0%25" y1="0%25" x2="0%25" y2="100%25"><stop offset="0%25" style="stop-color:rgba(100,120,140,0.8)"/><stop offset="100%25" style="stop-color:rgba(80,100,120,0.3)"/></linearGradient></defs><path d="M80 180 Q80 100 150 70 Q220 100 220 180" stroke="url(%23gate)" stroke-width="5" fill="none" stroke-linecap="round"/><rect x="70" y="170" width="20" height="100" fill="rgba(100,120,140,0.3)"/><rect x="210" y="170" width="20" height="100" fill="rgba(100,120,140,0.3)"/><rect x="105" y="180" width="12" height="90" fill="rgba(100,120,140,0.2)"/><rect x="183" y="180" width="12" height="90" fill="rgba(100,120,140,0.2)"/><rect x="65" y="265" width="170" height="20" fill="rgba(100,120,140,0.15)" rx="2"/></svg>')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
            }}
          />

          {/* Lotus Temple - center bottom, very subtle */}
          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-4 pointer-events-none"
            style={{
              width: '500px',
              height: '400px',
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><defs><radialGradient id="lotus" cx="50%25" cy="30%25" r="70%25"><stop offset="0%25" style="stop-color:rgba(100,120,140,0.6)"/><stop offset="100%25" style="stop-color:rgba(80,100,120,0.1)"/></radialGradient></defs><ellipse cx="150" cy="80" rx="60" ry="70" fill="url(%23lotus)"/><path d="M120 100 Q100 120 110 150 M180 100 Q200 120 190 150 M150 100 Q130 140 140 170 M150 100 Q170 140 160 170" stroke="rgba(100,120,140,0.3)" stroke-width="3" fill="none"/><circle cx="150" cy="150" r="40" fill="rgba(100,120,140,0.15)"/><rect x="130" y="190" width="40" height="60" fill="rgba(100,120,140,0.2)"/></svg>')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
            }}
          />
        </div>

        {/* Background Layer 3: Subtle animated gradients */}
        <div
          className="absolute inset-0 z-2 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 800px 600px at 80% 20%, rgba(255, 153, 51, 0.08) 0%, transparent 50%),
              radial-gradient(ellipse 700px 500px at 10% 70%, rgba(19, 136, 8, 0.06) 0%, transparent 50%)
            `,
            animation: 'fadeInOut 12s ease-in-out infinite',
          }}
        />

        <style>{`
          @keyframes fadeInOut {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 0.8; }
          }
        `}</style>

        {/* Content Layer */}
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          {/* Headline */}
          <h1 className="text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            Enterprise Telecom Infrastructure Built for India
          </h1>

          {/* Sub-headline */}
          <p className="text-xl text-gray-700 mb-2 leading-relaxed font-light max-w-3xl mx-auto">
            Class-B VNO platform powering secure domestic calling, AI-driven automation, and fully white-label telecom services.
          </p>

          {/* Trust Line */}
          <p className="text-xs text-gray-500 mb-12 tracking-widest uppercase font-semibold letter-spacing-2">
            Built for Compliance · Designed for Scale · Controlled by You
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-6 justify-center flex-wrap mb-8">
            <button className="bg-blue-900 text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-950 transition-all shadow-md hover:shadow-lg inline-flex items-center gap-3">
              Book Demo <ArrowRight size={20} />
            </button>
            <button className="bg-white text-blue-900 border-2 border-blue-900 px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all">
              Talk to Sales
            </button>
          </div>

          {/* Micro-trust text */}
          <p className="text-sm text-gray-500 font-light">
            No international routes. No grey traffic. India‑only compliance.
          </p>
        </div>
      </section>

      {/* 2. CORE TELECOM CAPABILITIES */}
      <section className="py-32 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Core Telecom Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Phone, title: 'DID Numbers', desc: 'Pan-India virtual numbers with carrier-grade reliability.' },
              { icon: Zap, title: 'Cloud Call Center', desc: 'Inbound & outbound calling built for domestic operations.' },
              { icon: Cpu, title: 'AI Calling & Automation', desc: 'AI receptionist and programmable voice agents.' },
              { icon: BarChart3, title: 'Dialer & Routing', desc: 'Manual, auto-dialer with IVR & intelligent routing.' },
              { icon: Globe, title: 'White-Label Platform', desc: 'Launch your own branded telecom service.' },
              { icon: CreditCard, title: 'Prepaid Billing & Control', desc: 'Usage-based billing with real-time balance control.' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div 
                  key={i} 
                  className="p-8 border border-gray-200 rounded-lg bg-white shadow-sm hover:border-blue-900 hover:shadow-md transition-all"
                >
                  <Icon size={32} className="text-blue-900 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. BUILT FOR TEAMS SECTION */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Built for Teams That Run on Calls
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            From call centers to enterprises, Callvia powers compliant, scaled domestic telecom operations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BarChart3, title: 'Call Centers', desc: 'Scale domestic campaigns with control and compliance.' },
              { icon: Building2, title: 'Enterprises', desc: 'Secure, API-driven calling infrastructure.' },
              { icon: TrendingUp, title: 'Resellers', desc: 'Start your own telecom business with white-label control.' },
              { icon: Phone, title: 'Small Businesses', desc: 'Never miss a call with AI receptionist.' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div 
                  key={i} 
                  className="p-8 bg-white rounded-lg border-l-4 border-blue-900 shadow-sm hover:shadow-md transition-shadow"
                >
                  <Icon size={40} className="text-blue-900 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WHY CALLVIA SECTION */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Why Enterprises Choose Callvia
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Built with carrier-grade standards, not startup shortcuts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: CheckCircle2, title: 'Domestic-Only, Compliant Calling', desc: 'No international routes. TRAI-approved VNO infrastructure.' },
              { icon: CheckCircle2, title: 'Carrier-Grade Switching Backend', desc: 'Enterprise-level reliability, not resold third-party capacity.' },
              { icon: CheckCircle2, title: 'Full White-Label Capability', desc: 'Launch branded telecom services with your own branding.' },
              { icon: CheckCircle2, title: 'Prepaid, Risk-Controlled Billing', desc: 'Never chase unpaid invoices. Usage-based, real-time balance.' },
              { icon: CheckCircle2, title: 'AI-Powered Voice Automation', desc: 'Scale operations without hiring. Programmable agents.' },
              { icon: CheckCircle2, title: 'Direct Operator Mindset', desc: 'Built by telecom ops professionals, not SaaS resellers.' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="p-6">
                  <Icon size={28} className="text-blue-900 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-24 px-6 bg-blue-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Scale Your Telecom Operations?
          </h2>
          <div className="flex gap-6 justify-center flex-wrap">
            <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-950 transition-colors inline-flex items-center gap-2">
              Book a Demo <ArrowRight size={18} />
            </button>
            <button className="bg-transparent text-blue-900 border border-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition-colors">
              Talk to Sales
            </button>
          </div>
          <p className="text-gray-600 text-sm mt-8">
            Live support available for India-based teams. Get connected in under 24 hours.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
