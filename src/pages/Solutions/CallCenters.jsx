import React from 'react';
import { ArrowRight, Headphones, BarChart3, Users } from 'lucide-react';
import { AnimatedBackground } from '../../components/sections/AnimatedBackground.jsx';

export function CallCentersSolutionPage() {
  return (
    <div>
      <section className="relative overflow-hidden pt-20 pb-20">
        <AnimatedBackground />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Solutions for Call Centers
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            Scalable infrastructure for inbound and outbound operations. Support thousands of concurrent agents.
          </p>
          <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold cursor-pointer inline-flex items-center gap-2 hover:bg-blue-950 transition-colors">
            Schedule Consultation <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What We Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Headphones, title: 'Inbound Support', desc: 'Customer service and support operations' },
              { icon: BarChart3, title: 'Outbound Campaigns', desc: 'Lead generation and sales automation' },
              { icon: Users, title: 'Multi-team Setup', desc: 'Multiple departments and team structures' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="p-6 border border-gray-200 rounded-lg bg-gray-50">
                  <Icon size={32} className="text-blue-900 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Scale Your Operations?</h2>
          <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold cursor-pointer inline-flex items-center gap-2 hover:bg-blue-950 transition-colors">
            Contact Sales <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default CallCentersSolutionPage;