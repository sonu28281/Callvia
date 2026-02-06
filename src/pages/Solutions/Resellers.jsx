import React from 'react';
import { ArrowRight, Check, Rocket, DollarSign, Briefcase, Target, Award, TrendingUp, Users, Zap } from 'lucide-react';

export function ResellersSolutionPage() {
  return (
    <div className="bg-brand-dark">
      {/* Hero Section */}
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
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block bg-brand-accent/10 border border-brand-accent/20 text-brand-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              BUILD YOUR BRAND
            </div>
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-brand-text mb-6 leading-tight">
              Launch Your Own Telecom Business
            </h1>
            <p className="text-xl text-brand-text-muted mb-8 leading-relaxed">
              White-label infrastructure + your brand = recurring revenue. Start your telecom business with zero infrastructure investment.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-200">
                Start Your Brand <ArrowRight size={20} />
              </button>
              <button className="border-2 border-brand-border text-brand-text hover:bg-brand-surface px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                Partner Program
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-12 text-center">What You Get as a Reseller</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Rocket, title: 'White-Label Platform', desc: 'Your brand name on portal, emails, invoices. Callvia runs in the background.' },
              { icon: DollarSign, title: 'Recurring Revenue', desc: 'Earn 15-25% margins on every customer. Monthly recurring income model.' },
              { icon: Briefcase, title: 'Complete Portfolio', desc: 'Sell DID, SIP, call center, AI voice—full suite under your brand.' },
              { icon: Target, title: 'Pre-Sales Support', desc: 'Our team helps close deals. Technical demos, POCs, solution design.' },
              { icon: Award, title: 'Marketing Materials', desc: 'Brochures, presentations, case studies, email templates—all co-branded.' },
              { icon: Users, title: 'Partner Training', desc: 'Product training, sales enablement workshops, certification programs.' },
            ].map((item, i) => (
              <div key={i} className="bg-brand-surface border border-brand-border hover:border-brand-border-light transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover rounded-xl p-8">
                <div className="w-14 h-14 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent rounded-lg flex items-center justify-center mb-6">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-text mb-3">{item.title}</h3>
                <p className="text-brand-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Profile Section */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-brand-text mb-6">Who Should Become a Reseller?</h2>
              <p className="text-lg text-brand-text-muted mb-8">
                Ideal for entrepreneurs and businesses already serving SMBs who want to add telecom to their portfolio.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'IT Service Providers', desc: 'Add voice to your IT solutions bundle' },
                  { title: 'System Integrators', desc: 'Offer telecom alongside CRM/ERP implementations' },
                  { title: 'Marketing Agencies', desc: 'Provide call tracking for campaigns' },
                  { title: 'Existing Telecom Resellers', desc: 'Expand product line or switch backend' },
                  { title: 'Business Consultants', desc: 'Generate recurring revenue from clients' },
                ].map((profile, i) => (
                  <div key={i} className="bg-brand-surface border border-brand-border rounded-xl p-6 flex gap-4 items-start">
                    <Check size={20} className="text-brand-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-heading font-bold text-brand-text mb-1">{profile.title}</h3>
                      <p className="text-brand-text-muted text-sm">{profile.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-surface border border-brand-border rounded-xl p-12 shadow-card">
              <h3 className="text-2xl font-heading font-bold text-brand-text mb-8">Revenue Example</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-brand-text-muted mb-2">If you sell to 20 clients:</div>
                  <div className="bg-brand-dark border border-brand-border rounded-lg p-4">
                    <div className="text-sm text-brand-text-muted mb-1">Avg. customer spend: ₹5,000/month</div>
                    <div className="text-sm text-brand-text-muted mb-1">Your margin: 20%</div>
                    <div className="border-t border-brand-border mt-3 pt-3">
                      <div className="text-2xl font-heading font-bold text-brand-accent">₹20,000/month</div>
                      <div className="text-sm text-brand-text-muted">Recurring revenue</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-brand-text-muted mb-2">Scale to 100 clients:</div>
                  <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-lg p-4">
                    <div className="text-4xl font-heading font-bold text-brand-accent mb-1">₹1,00,000</div>
                    <div className="text-brand-text-muted text-sm">Monthly recurring income</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-12 text-center">Why Partner with Callvia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, stat: '25% CAGR', label: 'Market Growth', desc: 'Cloud telephony growing fast in India' },
              { icon: Zap, stat: '2-3 Days', label: 'Quick Setup', desc: 'Go live with your brand quickly' },
              { icon: DollarSign, stat: '15-25%', label: 'Margins', desc: 'Competitive partner margins' },
              { icon: Users, stat: '50+', label: 'Active Partners', desc: 'Join successful reseller network' },
            ].map((item, i) => (
              <div key={i} className="bg-brand-surface border border-brand-border hover:border-brand-border-light transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} />
                </div>
                <div className="text-3xl font-heading font-bold text-brand-accent mb-1">{item.stat}</div>
                <div className="text-sm font-heading font-semibold text-brand-text mb-2">{item.label}</div>
                <p className="text-sm text-brand-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-6">
            Ready to Build Your Telecom Business?
          </h2>
          <p className="text-xl text-brand-text-muted mb-8">
            Join 50+ successful resellers already earning with Callvia
          </p>
          <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-200">
            Apply for Partnership <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default ResellersSolutionPage;
