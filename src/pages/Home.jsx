import React from 'react';
import { 
  ArrowRight, Phone, Zap, Cpu, BarChart3, 
  Globe, CreditCard, Building2, TrendingUp, CheckCircle2 
} from 'lucide-react';
import { InquiryForm } from '../components/sections/InquiryForm.jsx';

export function Home() {
  return (
    <div>
      {/* 1. HERO SECTION - PREMIUM ENTERPRISE */}
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center pt-12 pb-20">
        {/* Background Layer 1: Darker gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-blue-50 to-gray-200 z-0" />

        {/* Background Layer 2: Subtle animated gradients */}
        <div
          className="absolute inset-0 z-2 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 800px 600px at 80% 20%, rgba(255, 153, 51, 0.12) 0%, transparent 50%),
              radial-gradient(ellipse 700px 500px at 10% 70%, rgba(19, 136, 8, 0.1) 0%, transparent 50%)
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
        <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-center lg:text-left">
              {/* Coming Soon Badge */}
              <div className="inline-block mb-8 px-6 py-3 bg-orange-100 border border-orange-300 rounded-full">
                <p className="text-orange-900 font-semibold text-sm">🚀 Coming Soon</p>
              </div>

              {/* Headline */}
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                Enterprise Telecom Infrastructure Built for India
              </h1>

              {/* Sub-headline */}
              <p className="text-lg lg:text-xl text-gray-700 mb-2 leading-relaxed font-light max-w-3xl">
                Class-B VNO platform powering secure domestic calling, AI-driven automation, and fully white-label telecom services.
              </p>

              {/* Trust Line */}
              <p className="text-xs text-gray-500 mb-8 tracking-widest uppercase font-semibold letter-spacing-2">
                Built for Compliance · Designed for Scale · Controlled by You
              </p>

              {/* Coming Soon Message */}
              <div className="mb-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-lg">
                <p className="text-2xl font-bold text-blue-900 mb-2">🔄 Coming Soon</p>
                <p className="text-sm text-blue-800 font-light">
                  We're building something extraordinary. Stay tuned for updates.
                </p>
              </div>

              {/* Micro-trust text */}
              <p className="text-sm text-gray-500 font-light">
                No international routes. No grey traffic. India‑only compliance.
              </p>
            </div>

            {/* Right: Inquiry Form */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Early Access</h2>
                <p className="text-gray-600 text-sm mb-6">Submit your inquiry and we'll reach out soon.</p>
                <InquiryForm />
              </div>
            </div>
          </div>
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
