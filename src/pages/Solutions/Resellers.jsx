import React from 'react';
import { ArrowRight } from 'lucide-react';
import { AnimatedBackground } from '../../components/sections/AnimatedBackground.jsx';

export function ResellersSolutionPage() {
  return (
    <div>
      <section className="relative overflow-hidden pt-20 pb-20">
        <AnimatedBackground />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Solutions for Resellers
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            White-label infrastructure. Build your own telecom business with Callvia backend.
          </p>
          <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold cursor-pointer inline-flex items-center gap-2 hover:bg-blue-950 transition-colors">
            Be Your Own Telecom Business <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Reseller Opportunities</h2>
          <p className="text-lg text-gray-600 mb-8">
            Callvia's white-label platform enables you to build and scale your own telecom brand with full support.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Launch Your Brand?</h2>
          <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold cursor-pointer inline-flex items-center gap-2 hover:bg-blue-950 transition-colors">
            Contact Sales <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default ResellersSolutionPage;