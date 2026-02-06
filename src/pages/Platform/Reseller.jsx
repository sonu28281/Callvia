import React from 'react';
import { ArrowRight, Check, TrendingUp, Users, Zap, BarChart3, Shield, Headphones, Globe, Award } from 'lucide-react';

export function ResellerPage() {
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
              PARTNER PROGRAM
            </div>
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-brand-text mb-6 leading-tight">
              Reseller Enablement Program
            </h1>
            <p className="text-xl text-brand-text-muted mb-8 leading-relaxed">
              Build recurring revenue by reselling Callvia's enterprise telecom services. Get competitive margins, dedicated support, and complete partner enablement.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-200">
                Apply Now <ArrowRight size={20} />
              </button>
              <button className="border-2 border-brand-border text-brand-text hover:bg-brand-surface px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                Partner Kit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Tiers */}
      <section className="py-20 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-12 text-center">Partner Tiers & Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                tier: 'Silver Partner', 
                revenue: '₹50K - 2L/month', 
                margin: '15-18%',
                benefits: ['Basic marketing materials', 'Email support', 'Quarterly training', 'Partner portal access']
              },
              { 
                tier: 'Gold Partner', 
                revenue: '₹2L - 10L/month', 
                margin: '18-22%',
                benefits: ['Co-branded materials', 'Priority support', 'Monthly training', 'Lead sharing program', 'Demo accounts'],
                highlight: true
              },
              { 
                tier: 'Platinum Partner', 
                revenue: '₹10L+/month', 
                margin: '22-25%',
                benefits: ['Full white-label option', 'Dedicated manager', 'Custom training', 'Pre-sales support', 'Beta access', 'Revenue guarantees']
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl p-8 border-2 shadow-card ${item.highlight ? 'border-brand-accent bg-brand-surface' : 'border-brand-border bg-brand-surface'}`}>
                {item.highlight && (
                  <div className="bg-brand-accent text-brand-dark text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <Award size={32} className="text-brand-accent" />
                  <h3 className="text-2xl font-heading font-bold text-brand-text">{item.tier}</h3>
                </div>
                <p className="text-brand-text-muted text-sm mb-2">Monthly Revenue Target</p>
                <p className="text-lg font-semibold text-brand-text mb-4">{item.revenue}</p>
                <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-lg p-3 mb-6">
                  <p className="text-sm text-brand-text-muted">Margin:</p>
                  <p className="text-2xl font-heading font-bold text-brand-accent">{item.margin}</p>
                </div>
                <ul className="space-y-3">
                  {item.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-brand-text">
                      <Check size={18} className="text-brand-accent flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Become a Reseller */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-12 text-center">Why Partner with Callvia?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, title: 'Recurring Revenue', desc: 'Monthly recurring income from customer subscriptions' },
              { icon: Users, title: 'Growing Market', desc: 'Cloud telephony market growing at 25% CAGR in India' },
              { icon: Shield, title: 'Trusted Platform', desc: 'TRAI-approved VNO with carrier-grade infrastructure' },
              { icon: Zap, title: 'Quick Onboarding', desc: 'Get started in days with our partner enablement program' },
            ].map((item, i) => (
              <div key={i} className="bg-brand-surface border border-brand-border hover:border-brand-border-light transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent rounded-lg flex items-center justify-center mx-auto mb-6">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-text mb-3">{item.title}</h3>
                <p className="text-brand-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support & Resources */}
      <section className="py-20 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-brand-text mb-6">Complete Partner Support</h2>
              <p className="text-lg text-brand-text-muted mb-8">
                We don't just give you a platform—we help you succeed with comprehensive training, resources, and support.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Headphones, title: 'Dedicated Partner Manager', desc: 'Your single point of contact for all partner needs' },
                  { icon: Globe, title: 'Marketing Materials', desc: 'Brochures, presentations, case studies, and digital assets' },
                  { icon: Users, title: 'Sales Training', desc: 'Product training and sales enablement workshops' },
                  { icon: BarChart3, title: 'Performance Dashboard', desc: 'Real-time visibility into sales, commissions, and customers' },
                ].map((item, i) => (
                  <div key={i} className="bg-brand-surface border border-brand-border hover:border-brand-border-light transition-all duration-200 rounded-xl p-6 flex gap-4">
                    <div className="w-12 h-12 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-brand-text mb-1">{item.title}</h3>
                      <p className="text-brand-text-muted text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-surface border border-brand-border rounded-xl p-12 shadow-card">
              <h3 className="text-2xl font-heading font-bold text-brand-text mb-6">Ideal Partner Profile</h3>
              <ul className="space-y-4">
                {[
                  'IT service providers & system integrators',
                  'Existing telecom resellers looking to expand',
                  'Business consultants with SME client base',
                  'Call center operators wanting own infrastructure',
                  'Marketing agencies offering integrated solutions',
                  'Entrepreneurs looking for B2B opportunity',
                ].map((profile, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={20} className="text-brand-accent flex-shrink-0 mt-1" />
                    <span className="text-brand-text">{profile}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-6">
            Ready to Start Your Reseller Journey?
          </h2>
          <p className="text-xl text-brand-text-muted mb-8">
            Join 50+ successful reseller partners already growing with Callvia
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-200">
              Apply for Partnership <ArrowRight size={20} />
            </button>
            <button className="border-2 border-brand-border text-brand-text hover:bg-brand-surface px-8 py-4 rounded-lg font-semibold transition-all duration-200">
              Schedule Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResellerPage;
