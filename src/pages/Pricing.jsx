import React from 'react';
import { Check } from 'lucide-react';
import { AnimatedBackground } from '../components/sections/AnimatedBackground.jsx';

export function PricingPage() {
  const tiers = [
    {
      name: 'Starter',
      description: 'For small teams',
      features: ['Up to 5 DIDs', 'Basic IVR', 'Call Recording'],
      highlighted: false,
    },
    {
      name: 'Professional',
      description: 'For growing businesses',
      features: ['Up to 50 DIDs', 'Advanced IVR', 'Cloud Call Center', 'API Access'],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      description: 'For large operations',
      features: ['Unlimited DIDs', 'White-Label', 'Custom Integrations', '24/7 Support'],
      highlighted: false,
    },
  ];

  return (
    <div>
      <section className="relative overflow-hidden pt-20 pb-20">
        <AnimatedBackground />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Simple Pricing</h1>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`p-8 rounded-xl border-2 ${
                  tier.highlighted ? 'border-blue-900 bg-blue-50' : 'border-gray-200'
                }`}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-gray-600 mb-6">{tier.description}</p>
                <button className={`w-full py-3 rounded-lg font-semibold mb-6 ${
                  tier.highlighted
                    ? 'bg-blue-900 text-white hover:bg-blue-950'
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}>
                  Choose Plan
                </button>
                <ul className="space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check size={20} className="text-blue-900 flex-shrink-0 mt-1" />
                      <span className="text-sm text-gray-900">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PricingPage;
