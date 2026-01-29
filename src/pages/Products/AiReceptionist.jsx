import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { AnimatedBackground } from '../../components/sections/AnimatedBackground.jsx';

export function AiReceptionistPage() {
  return (
    <div>
      <section className="relative overflow-hidden pt-20 pb-20">
        <AnimatedBackground />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI Receptionist
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            Intelligent inbound call handling with natural language understanding and smart routing.
          </p>
          <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold cursor-pointer inline-flex items-center gap-2 hover:bg-blue-950 transition-colors">
            Book Demo <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
          <ul className="space-y-6 max-w-2xl">
            {[
              'Natural language understanding',
              '24/7 availability',
              'Smart call routing',
              'Caller information capture',
              'Multi-language support',
              'Seamless agent handoff',
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <Check size={24} className="text-blue-900 flex-shrink-0" />
                <span className="text-lg text-gray-900 font-semibold">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold cursor-pointer inline-flex items-center gap-2 hover:bg-blue-950 transition-colors">
            Contact Sales <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default AiReceptionistPage;