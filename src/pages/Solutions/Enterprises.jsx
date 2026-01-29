import React from 'react';
import { ArrowRight } from 'lucide-react';
import { AnimatedBackground } from '../../components/sections/AnimatedBackground.jsx';

export function EnterprisesSolutionPage() {
  return (
    <div>
      <section className="relative overflow-hidden pt-20 pb-20">
        <AnimatedBackground />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Solutions for Enterprises
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            Enterprise-grade telephony with control, compliance, and dedicated support.
          </p>
          <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold cursor-pointer inline-flex items-center gap-2 hover:bg-blue-950 transition-colors">
            Schedule Consultation <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Enterprise Benefits</h2>
          <p className="text-lg text-gray-600 mb-8">
            Callvia provides enterprise-grade telecom infrastructure with full control, compliance, and dedicated support.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold cursor-pointer inline-flex items-center gap-2 hover:bg-blue-950 transition-colors">
            Contact Sales <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default EnterprisesSolutionPage;