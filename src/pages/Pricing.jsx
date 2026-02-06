import React from 'react';
import { Check, Phone, Zap, Building2, Globe } from 'lucide-react';

export function PricingPage() {
  const tiers = [
    {
      name: 'Starter',
      description: 'For small teams and businesses',
      price: 'Custom',
      period: 'per month',
      features: [
        'Up to 5 DID numbers',
        'Basic IVR & call routing',
        'Call recording (30 days retention)',
        'Real-time analytics',
        'Email support',
        'Prepaid wallet system',
      ],
      highlighted: false,
    },
    {
      name: 'Professional',
      description: 'For growing businesses',
      price: 'Custom',
      period: 'per month',
      features: [
        'Up to 50 DID numbers',
        'Advanced IVR builder',
        'Cloud call center platform',
        'Unlimited call recording',
        'API access',
        'CRM integrations',
        'Priority support',
        'Custom reports',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      description: 'For large operations',
      price: 'Custom',
      period: 'pricing',
      features: [
        'Unlimited DIDs',
        'White-label platform',
        'Custom integrations',
        'Dedicated infrastructure',
        '24/7 premium support',
        'Dedicated account manager',
        'SLA guarantees',
        'Custom development',
      ],
      highlighted: false,
    },
  ];

  return (
    <div className="bg-brand-dark">
      {/* Hero */}
      <section className="relative bg-brand-dark border-b border-brand-border overflow-hidden py-20">
        {/* Routing lines decoration */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="routing-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M0 16h32M16 0v32" stroke="currentColor" strokeWidth="0.5" className="text-brand-accent" fill="none" opacity="0.1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#routing-grid)"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-block px-4 py-2 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent rounded-full text-sm font-semibold mb-6">
            PRICING
          </div>
          <h1 className="text-5xl lg:text-6xl font-heading font-bold text-brand-text mb-6 leading-tight">
            Transparent, Predictable Pricing
          </h1>
          <p className="text-xl text-brand-text-muted max-w-3xl mx-auto mb-8 leading-relaxed">
            Prepaid, usage-based model. No hidden costs, no surprises. Pay only for what you use.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 border-2 ${
                  tier.highlighted
                    ? 'border-brand-accent bg-brand-surface shadow-card-hover'
                    : 'border-brand-border bg-brand-surface shadow-card'
                } hover:border-brand-border-light transition-all duration-200 hover:-translate-y-0.5`}
              >
                {tier.highlighted && (
                  <div className="bg-brand-accent text-brand-dark text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-heading font-bold text-brand-text mb-2">{tier.name}</h3>
                <p className="text-brand-text-muted mb-6 text-sm">{tier.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-heading font-bold text-brand-accent">{tier.price}</span>
                  <span className="text-brand-text-muted ml-2">{tier.period}</span>
                </div>
                <button
                  className={`w-full py-4 rounded-lg font-bold mb-8 transition-all duration-200 ${
                    tier.highlighted
                      ? 'bg-brand-accent hover:bg-brand-accent-hover text-brand-dark shadow-card'
                      : 'bg-brand-dark-light hover:bg-brand-dark text-brand-text border border-brand-border'
                  }`}
                >
                  Get Quote
                </button>
                <ul className="space-y-4">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check
                        size={20}
                        className="text-brand-accent flex-shrink-0 mt-1"
                      />
                      <span className="text-sm text-brand-text-muted">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage-Based Pricing Info */}
      <section className="py-24 px-6 bg-brand-dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-12 text-center">
            Usage-Based Pricing Components
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Phone,
                title: 'Per Minute Calling',
                desc: 'Pay only for call minutes used',
                pricing: 'From ₹0.XX per minute',
              },
              {
                icon: Zap,
                title: 'DID Numbers',
                desc: 'Monthly rental for dedicated numbers',
                pricing: 'From ₹XXX per number/month',
              },
              {
                icon: Building2,
                title: 'SIP Channels',
                desc: 'Concurrent call capacity',
                pricing: 'From ₹XXX per channel/month',
              },
              {
                icon: Globe,
                title: 'SMS & WhatsApp',
                desc: 'Message delivery charges',
                pricing: 'From ₹X per message',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-brand-surface rounded-xl p-8 border border-brand-border hover:border-brand-border-light transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover"
              >
                <div className="w-14 h-14 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-6">
                  <item.icon size={28} className="text-brand-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-text mb-2">{item.title}</h3>
                <p className="text-brand-text-muted mb-4">{item.desc}</p>
                <p className="text-lg font-semibold text-brand-accent">{item.pricing}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Prepaid */}
      <section className="py-24 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-brand-text mb-6">
                Why Prepaid Billing?
              </h2>
              <p className="text-lg text-brand-text-muted mb-8 leading-relaxed">
                Our prepaid wallet system gives you complete control over spending with no surprise bills.
              </p>
              <div className="space-y-4">
                {[
                  'No credit checks or lengthy contracts required',
                  'Complete cost control - never exceed your budget',
                  'Real-time balance visibility and usage alerts',
                  'Instant recharge with multiple payment methods',
                  'Detailed usage reports and invoice generation',
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <Check size={20} className="text-brand-accent flex-shrink-0 mt-1" />
                    <span className="text-brand-text-muted">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-surface border border-brand-border rounded-2xl p-8 shadow-card">
              <h3 className="text-2xl font-heading font-semibold text-brand-text mb-6">Prepaid Benefits</h3>
              <div className="space-y-6">
                <div className="bg-brand-dark-light border border-brand-border rounded-xl p-6">
                  <div className="text-3xl font-heading font-bold text-brand-accent mb-2">Instant</div>
                  <div className="text-brand-text-muted">Activation after recharge</div>
                </div>
                <div className="bg-brand-dark-light border border-brand-border rounded-xl p-6">
                  <div className="text-3xl font-heading font-bold text-brand-accent mb-2">Real-time</div>
                  <div className="text-brand-text-muted">Usage tracking and alerts</div>
                </div>
                <div className="bg-brand-dark-light border border-brand-border rounded-xl p-6">
                  <div className="text-3xl font-heading font-bold text-brand-accent mb-2">Flexible</div>
                  <div className="text-brand-text-muted">No minimum commitments</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-brand-dark border-t border-brand-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-semibold text-brand-text mb-6">Ready to get started?</h2>
          <p className="text-lg text-brand-text-muted mb-8">
            Contact us for custom pricing tailored to your business needs.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/contact" className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Sales
            </a>
            <a href="/support" className="border border-brand-border hover:border-brand-border-light text-brand-text px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Get Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
