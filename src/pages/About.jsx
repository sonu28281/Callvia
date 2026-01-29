import React from 'react';
import { Shield, Zap, Users, Globe } from 'lucide-react';

export function AboutPage() {
  return (
    <div>
      <section className="py-20 px-6 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">About Callvia</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Building enterprise telecom infrastructure for India.
        </p>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Trust' },
              { icon: Zap, title: 'Control' },
              { icon: Users, title: 'Partnership' },
              { icon: Globe, title: 'India-First' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="p-6 bg-white rounded-lg text-center">
                  <Icon size={32} className="text-blue-900 mb-4 mx-auto" />
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
