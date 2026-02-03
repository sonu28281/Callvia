import React from 'react';
import { Check, ArrowRight, Phone, Zap, Building2, Globe } from 'lucide-react';
import { AnimatedBackground } from '../components/sections/AnimatedBackground.jsx';

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
    <div className="bg-white">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
      `}</style>

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-32">
        <AnimatedBackground />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-6 fade-up">
            PRICING
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight fade-up" style={{animationDelay: '0.1s'}}>
            Transparent, Predictable Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed fade-up" style={{animationDelay: '0.2s'}}>
            Prepaid, usage-based model. No hidden costs, no surprises. Pay only for what you use.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 border-2 ${
                  tier.highlighted
                    ? 'border-blue-900 bg-blue-50 shadow-xl transform scale-105'
                    : 'border-gray-200 bg-white shadow-lg'
                }`}
              >
                {tier.highlighted && (
                  <div className="bg-blue-900 text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-gray-600 mb-6 text-sm">{tier.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-900">{tier.price}</span>
                  <span className="text-gray-600 ml-2">{tier.period}</span>
                </div>
                <button
                  className={`w-full py-4 rounded-lg font-bold mb-8 transition-all ${
                    tier.highlighted
                      ? 'bg-blue-900 text-white hover:bg-blue-950 shadow-lg'
                      : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                  }`}
                >
                  Get Quote
                </button>
                <ul className="space-y-4">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check
                        size={20}
                        className="text-blue-900 flex-shrink-0 mt-1"
                      />
                      <span className="text-sm text-gray-900">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage-Based Pricing Info */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
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
                className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 border border-blue-200 hover:shadow-lg transition-shadow"
              >
                <div className="bg-blue-900 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <item.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <p className="text-lg font-semibold text-blue-900">{item.pricing}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Prepaid */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Prepaid Billing?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our prepaid wallet system gives you complete control over spending with no surprise bills.
              </p>
              <div className="space-y-4">
                {[
                  'No credit checks or lengthy contracts required',
                  'Complete cost control - never exceed your budget',
                  'Real-time balance visibility and usage alerts',
                  'Instant recharge with multiple payment methods',
                  'Detailed usage reports and invoice generation',
                  'Auto-recharge options for uninterrupted service',
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check size={24} className="text-blue-900 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-900">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Volume Discounts Available</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-900 pl-6">
                  <div className="text-sm text-gray-600 mb-1">Monthly Spend: ₹50,000+</div>
                  <div className="text-2xl font-bold text-blue-900">5% Discount</div>
                </div>
                <div className="border-l-4 border-blue-900 pl-6">
                  <div className="text-sm text-gray-600 mb-1">Monthly Spend: ₹1,00,000+</div>
                  <div className="text-2xl font-bold text-blue-900">10% Discount</div>
                </div>
                <div className="border-l-4 border-blue-900 pl-6">
                  <div className="text-sm text-gray-600 mb-1">Monthly Spend: ₹5,00,000+</div>
                  <div className="text-2xl font-bold text-blue-900">Custom Pricing</div>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-8">
                *Volume discounts calculated automatically based on monthly usage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Pricing */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Enterprise Pricing?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Custom pricing for high-volume operations, white-label partnerships, and dedicated infrastructure
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
              Talk to Sales <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-colors">
              Request Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PricingPage;
