import React from 'react';
import { ArrowRight, Phone, Zap, Users, Cpu } from 'lucide-react';
import { AnimatedBackground } from '../components/sections/AnimatedBackground.jsx';

export function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-20">
        <AnimatedBackground />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Enterprise Telecom Built for India
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Class-B VNO platform with AI-powered calling, cloud call centers, and white-label capabilities.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold cursor-pointer inline-flex items-center gap-2 hover:bg-blue-950 transition-colors">
              Book Demo <ArrowRight size={18} />
            </button>
            <button className="bg-transparent text-blue-900 border border-blue-900 px-8 py-3 rounded-lg font-semibold cursor-pointer hover:bg-blue-900 hover:text-white transition-colors">
              Talk to Sales
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Everything You Need
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Phone, title: 'DID Numbers', desc: 'Reliable connectivity' },
              { icon: Zap, title: 'Cloud Call Center', desc: 'Scalable platform' },
              { icon: Cpu, title: 'AI & Automation', desc: 'Smart calling' },
              { icon: Users, title: 'White-Label', desc: 'Build your brand' },
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
    </div>
  );
}

export default Home;
