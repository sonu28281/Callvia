import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { AnimatedBackground } from '../../components/sections/AnimatedBackground.jsx';

export function AiOutboundPage() {
  return (
    <div>
      <section className="relative overflow-hidden pt-20 pb-20">
        <AnimatedBackground />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI Outbound Calling
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            Intelligent outbound campaigns powered by AI. Coming in Phase-2.
          </p>
          <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold cursor-pointer inline-flex items-center gap-2 hover:bg-blue-950 transition-colors">
            Get Notified <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Coming Soon</h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            AI-powered outbound calling campaigns optimized for conversion and compliance.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AiOutboundPage;