import React from 'react';
import { ArrowRight, Globe, Zap, Users, Check, Settings, BarChart3, Shield, Palette, Code, Smartphone, Clock } from 'lucide-react';

export function WhiteLabelPage() {
  return (
    <div className="bg-brand-dark">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-b from-brand-dark to-brand-dark-light">
        {/* Routing Lines Decoration */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="routing-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="#EF8021" opacity="0.3"/>
                <line x1="0" y1="50" x2="100" y2="50" stroke="#EF8021" strokeWidth="0.5" opacity="0.2"/>
                <line x1="50" y1="0" x2="50" y2="100" stroke="#EF8021" strokeWidth="0.5" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#routing-pattern)"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent px-4 py-2 rounded-full mb-6">
                <Globe size={18} />
                <span className="text-sm font-semibold">White-Label Platform</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-heading font-bold text-brand-text mb-6 leading-tight">
                Launch Your Own Telecom Brand
              </h1>
              <p className="text-xl text-brand-text-muted mb-8 leading-relaxed">
                Fully white-labeled telecom platform. Launch your branded voice services in days, not years. Complete control, zero infrastructure investment.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-200">
                  Be Your Own Telecom Business <ArrowRight size={20} />
                </button>
                <button className="border-2 border-brand-border text-brand-text hover:bg-brand-surface px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                  View Demo
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-brand-surface border border-brand-border rounded-full flex items-center justify-center shadow-card">
                <Globe size={100} className="text-brand-accent" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Clock, title: 'Launch in Days', desc: 'Not months or years. Go live quickly with pre-built infrastructure' },
              { icon: Globe, title: '100% Your Brand', desc: 'Complete white-label. Callvia remains completely invisible to your customers' },
              { icon: Zap, title: 'Recurring Revenue', desc: 'Build a sustainable telecom business with predictable monthly income' },
            ].map((item, i) => (
              <div key={i} className="bg-brand-surface border border-brand-border rounded-xl p-8 shadow-card">
                <item.icon size={48} className="mx-auto mb-4 text-brand-accent" />
                <h3 className="text-2xl font-heading font-bold text-brand-text mb-3">{item.title}</h3>
                <p className="text-brand-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-20 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-brand-text mb-4">Complete Branding Control</h2>
            <p className="text-xl text-brand-text-muted max-w-3xl mx-auto">
              Every touchpoint reflects your brand, not ours
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Palette, title: 'Custom Branding', desc: 'Your logo, colors, domain, and brand identity across all interfaces' },
              { icon: Smartphone, title: 'White-Label Portal', desc: 'Customer-facing portal completely branded with your identity' },
              { icon: Code, title: 'Custom Domain', desc: 'Host on your own domain (portal.yourbrand.com)' },
              { icon: Settings, title: 'Flexible Pricing', desc: 'Set your own pricing and margins. Control your revenue model' },
              { icon: Users, title: 'Multi-Tenant Support', desc: 'Manage unlimited customers from single platform' },
              { icon: BarChart3, title: 'Your Dashboard', desc: 'Admin dashboard with your branding for complete visibility' },
            ].map((feature, idx) => (
              <div key={idx} className="bg-brand-surface border border-brand-border hover:border-brand-border-light transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover rounded-xl p-8">
                <div className="w-14 h-14 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent rounded-lg flex items-center justify-center mb-6">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-text mb-3">{feature.title}</h3>
                <p className="text-brand-text-muted leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-brand-text mb-6">Everything You Need to Launch</h2>
              <p className="text-lg text-brand-text-muted mb-8 leading-relaxed">
                We provide the complete infrastructure, you provide the brand and customers. It's that simple.
              </p>
              <div className="space-y-4">
                {[
                  'Carrier-grade voice infrastructure (Class-5 switch)',
                  'DID numbers across all India regions',
                  'SIP trunking with unlimited scalability',
                  'Cloud call center platform',
                  'IVR builder and call routing',
                  'Real-time analytics and reporting',
                  'Customer billing and wallet management',
                  'API access for custom integrations',
                  'White-label mobile apps (optional)',
                  'Dedicated technical support',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check size={24} className="text-brand-accent flex-shrink-0 mt-1" />
                    <span className="text-lg text-brand-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-surface border border-brand-border rounded-xl p-12 shadow-card">
              <h3 className="text-2xl font-heading font-bold text-brand-text mb-6">Target Markets</h3>
              <div className="space-y-6">
                {[
                  { title: 'System Integrators', desc: 'Add voice services to your portfolio without infrastructure investment' },
                  { title: 'IT Service Providers', desc: 'Expand offerings with managed telecom services' },
                  { title: 'Call Center Companies', desc: 'Own your infrastructure instead of renting' },
                  { title: 'Entrepreneurs', desc: 'Start your own telecom business with minimal capital' },
                ].map((market, i) => (
                  <div key={i} className="bg-brand-dark border border-brand-border rounded-lg p-6">
                    <h4 className="text-lg font-heading font-bold text-brand-text mb-2">{market.title}</h4>
                    <p className="text-brand-text-muted text-sm">{market.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="py-20 px-6 bg-brand-dark-light">
        <div className="max-w-5xl mx-auto">
          <div className="bg-brand-surface border border-brand-border rounded-xl shadow-card p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-brand-text mb-4">Flexible Revenue Model</h2>
              <p className="text-xl text-brand-text-muted">
                Choose the pricing model that works best for your business
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                { 
                  title: 'Volume-Based Pricing',
                  desc: 'Wholesale rates based on your committed volume',
                  benefits: ['Lower rates at higher volumes', 'Predictable costs', 'Best for established businesses']
                },
                { 
                  title: 'Revenue Sharing',
                  desc: 'Share revenue with Callvia at agreed percentages',
                  benefits: ['No upfront costs', 'Flexible margins', 'Perfect for startups']
                },
              ].map((model, i) => (
                <div key={i} className="bg-brand-dark border border-brand-border rounded-xl p-8">
                  <h3 className="text-2xl font-heading font-bold text-brand-text mb-3">{model.title}</h3>
                  <p className="text-brand-text-muted mb-6">{model.desc}</p>
                  <ul className="space-y-2">
                    {model.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-center gap-2 text-brand-text text-sm">
                        <Check size={16} className="text-brand-accent flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-6">
            Ready to Launch Your Telecom Brand?
          </h2>
          <p className="text-xl text-brand-text-muted mb-8">
            Schedule a consultation to discuss your white-label requirements
          </p>
          <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-200">
            Get Started <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default WhiteLabelPage;
