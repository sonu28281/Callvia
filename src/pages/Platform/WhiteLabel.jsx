import React from 'react';
import { ArrowRight, Globe, Zap, Users, Check, Settings, BarChart3, Shield, Palette, Code, Smartphone, Clock } from 'lucide-react';
import { AnimatedBackground } from '../../components/sections/AnimatedBackground.jsx';

export function WhiteLabelPage() {
  return (
    <div className="bg-white">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .fade-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
        .icon-spin { animation: spin 8s linear infinite; }
      `}</style>

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-32 bg-gradient-to-br from-teal-400 via-blue-400 to-cyan-500">
        <div className="absolute inset-0 opacity-70">
          <svg className="absolute bottom-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{height: '100%'}}>
            <path fill="rgba(255, 255, 255, 0.2)" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              <animate attributeName="d" dur="8s" repeatCount="indefinite" values="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,122.7C672,107,768,117,864,138.7C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
            </path>
            <path fill="rgba(255, 255, 255, 0.15)" d="M0,160L48,165.3C96,171,192,181,288,181.3C384,181,480,171,576,165.3C672,160,768,160,864,165.3C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              <animate attributeName="d" dur="12s" repeatCount="indefinite" values="M0,160L48,165.3C96,171,192,181,288,181.3C384,181,480,171,576,165.3C672,160,768,160,864,165.3C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,192L48,186.7C96,181,192,171,288,170.7C384,171,480,181,576,186.7C672,192,768,192,864,186.7C960,181,1056,171,1152,170.7C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,160L48,165.3C96,171,192,181,288,181.3C384,181,480,171,576,165.3C672,160,768,160,864,165.3C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
            </path>
            <path fill="rgba(255, 255, 255, 0.1)" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              <animate attributeName="d" dur="6s" repeatCount="indefinite" values="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,192L48,202.7C96,213,192,235,288,234.7C384,235,480,213,576,202.7C672,192,768,192,864,202.7C960,213,1056,235,1152,234.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
            </path>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-100 px-4 py-2 rounded-full mb-6 fade-up">
                <Globe size={18} className="text-teal-900" />
                <span className="text-sm font-semibold text-teal-900">White-Label Platform</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight fade-up" style={{animationDelay: '0.1s'}}>
                Launch Your Own Telecom Brand
              </h1>
              <p className="text-xl text-teal-100 mb-8 leading-relaxed fade-up" style={{animationDelay: '0.2s'}}>
                Fully white-labeled telecom platform. Launch your branded voice services in days, not years. Complete control, zero infrastructure investment.
              </p>
              <div className="flex gap-4 flex-wrap fade-up" style={{animationDelay: '0.3s'}}>
                <button className="bg-gradient-to-r from-teal-900 to-teal-800 hover:from-teal-950 hover:to-teal-900 text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg">
                  Be Your Own Telecom Business <ArrowRight size={20} />
                </button>
                <button className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                  View Demo
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full w-64 h-64 flex items-center justify-center border-2 border-blue-200">
                    <Globe size={100} className="text-blue-900 icon-spin" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 px-6 bg-teal-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Clock, title: 'Launch in Days', desc: 'Not months or years. Go live quickly with pre-built infrastructure' },
              { icon: Globe, title: '100% Your Brand', desc: 'Complete white-label. Callvia remains completely invisible to your customers' },
              { icon: Zap, title: 'Recurring Revenue', desc: 'Build a sustainable telecom business with predictable monthly income' },
            ].map((item, i) => (
              <div key={i} className="text-white">
                <item.icon size={48} className="mx-auto mb-4 text-cyan-300" />
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-blue-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Branding Control</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every touchpoint reflects your brand, not ours
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Palette, title: 'Custom Branding', desc: 'Your logo, colors, domain, and brand identity across all interfaces' },
              { icon: Smartphone, title: 'White-Label Portal', desc: 'Customer-facing portal completely branded with your identity' },
              { icon: Code, title: 'Custom Domain', desc: 'Host on your own domain (portal.yourbrand.com)' },
              { icon: Settings, title: 'Flexible Pricing', desc: 'Set your own pricing and margins. Control your revenue model' },
              { icon: Users, title: 'Multi-Tenant Support', desc: 'Manage unlimited customers from single platform' },
              { icon: BarChart3, title: 'Your Dashboard', desc: 'Admin dashboard with your branding for complete visibility' },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all group">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon size={32} className="text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Everything You Need to Launch</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We provide the complete infrastructure, you provide the brand and customers. It's that simple.
              </p>
              <div className="space-y-4">
                {[
                  'Carrier-grade voice infrastructure (Class-5 switch)',
                  'DID numbers across all India regions',
                  'SIP trunking with unlimited scalability',
                  'Cloud call center platform',
                  'IVR builder and call routing',
                  'Real-time analytics and reporting',
                  'Customer billing and wallet management',
                  'API access for custom integrations',
                  'White-label mobile apps (optional)',
                  'Dedicated technical support',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check size={24} className="text-blue-900 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-900">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-12 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Target Markets</h3>
              <div className="space-y-6">
                {[
                  { title: 'System Integrators', desc: 'Add voice services to your portfolio without infrastructure investment' },
                  { title: 'IT Service Providers', desc: 'Expand offerings with managed telecom services' },
                  { title: 'Call Center Companies', desc: 'Own your infrastructure instead of renting' },
                  { title: 'Entrepreneurs', desc: 'Start your own telecom business with minimal capital' },
                ].map((market, i) => (
                  <div key={i} className="bg-white rounded-lg p-6 border border-blue-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{market.title}</h4>
                    <p className="text-gray-600 text-sm">{market.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-200">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Flexible Revenue Model</h2>
              <p className="text-xl text-gray-600">
                Choose the pricing model that works best for your business
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                { 
                  title: 'Volume-Based Pricing',
                  desc: 'Wholesale rates based on your committed volume',
                  benefits: ['Lower rates at higher volumes', 'Predictable costs', 'Best for established businesses']
                },
                { 
                  title: 'Revenue Sharing',
                  desc: 'Share revenue with Callvia at agreed percentages',
                  benefits: ['No upfront costs', 'Flexible margins', 'Perfect for startups']
                },
              ].map((model, i) => (
                <div key={i} className="bg-blue-50 rounded-xl p-8 border border-blue-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{model.title}</h3>
                  <p className="text-gray-600 mb-6">{model.desc}</p>
                  <ul className="space-y-2">
                    {model.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-center gap-2 text-gray-700 text-sm">
                        <Check size={16} className="text-blue-900 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button className="bg-blue-900 text-white px-10 py-4 rounded-lg font-bold hover:bg-blue-950 transition-colors inline-flex items-center gap-2 text-lg shadow-lg">
                Schedule Partnership Call <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-teal-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Launch Your Telecom Brand?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 50+ partners already running successful telecom businesses on Callvia
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
              Apply for Partnership <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-colors">
              Download Partner Kit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhiteLabelPage;