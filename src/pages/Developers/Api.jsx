import React from 'react';
import { ArrowRight, Code, Lock, Zap } from 'lucide-react';
import { AnimatedBackground } from '../../components/sections/AnimatedBackground.jsx';

export function ApiPage() {
  return (
    <div>
      <section className="relative overflow-hidden pt-20 pb-20">
        <AnimatedBackground />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Developers API
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            Build on Callvia with our comprehensive REST API. Integrate calling into your applications.
          </p>
          <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold cursor-pointer inline-flex items-center gap-2 hover:bg-blue-950 transition-colors">
            Get API Access <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What You Can Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: 'Outbound Calling', desc: 'Programmatically initiate calls' },
              { icon: Code, title: 'Call Control', desc: 'Control call flows and routing' },
              { icon: Lock, title: 'Webhooks', desc: 'Real-time call event notifications' },
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

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Authentication</h2>
          <p className="text-lg text-gray-600 text-center mb-8">
            Callvia API uses OAuth 2.0 for secure authentication. Get your API key and start building.
          </p>
          <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
            Authorization: Bearer YOUR_API_KEY
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Integrate?</h2>
          <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold cursor-pointer inline-flex items-center gap-2 hover:bg-blue-950 transition-colors">
            Request API Access <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default ApiPage;
