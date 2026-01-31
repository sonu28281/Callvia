import React from 'react';
import { ArrowRight, Check, Phone, Globe, Zap, Shield, BarChart3, Settings } from 'lucide-react';
import { AnimatedBackground } from '../../components/sections/AnimatedBackground.jsx';

export function DidNumbersPage() {
  return (
    <div className="bg-white">
      <style>{`
        @keyframes iconBounce {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.05); }
        }
        @keyframes iconSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseRing {
          0%, 100% { box-shadow: 0 0 0 0 rgba(30, 58, 138, 0.7); }
          50% { box-shadow: 0 0 0 10px rgba(30, 58, 138, 0); }
        }
        .icon-bounce { animation: iconBounce 2s ease-in-out infinite; }
        .icon-spin { animation: iconSpin 3s linear infinite; }
        .fade-up { animation: fadeInUp 0.8s ease-out forwards; }
        .pulse-ring { animation: pulseRing 2s ease-in-out infinite; }
        .feature-card {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-32">
        <AnimatedBackground />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6 fade-up">
                <Phone size={18} className="text-blue-900" />
                <span className="text-sm font-semibold text-blue-900">DID Numbers Solution</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight fade-up" style={{animationDelay: '0.1s'}}>
                Dedicated Numbers for Your Business
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed fade-up" style={{animationDelay: '0.2s'}}>
                Get instant access to local and toll-free numbers across India. Control call routing, enable advanced IVR, and manage your customer interactions with precision.
              </p>
              <div className="flex gap-4 flex-wrap fade-up" style={{animationDelay: '0.3s'}}>
                <button className="bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-950 hover:to-blue-900 text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg">
                  Book Demo <ArrowRight size={20} />
                </button>
                <button className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Icon */}
            <div className="flex justify-center">
              <div className="relative w-64 h-64">
                <div className="pulse-ring absolute inset-0 flex items-center justify-center">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full w-64 h-64 flex items-center justify-center border-2 border-blue-200">
                    <Phone size={100} className="text-blue-900 icon-bounce" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage dedicated numbers and control your inbound calling experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: 'Pan-India Coverage', desc: 'Local and toll-free numbers across all states and cities' },
              { icon: Zap, title: 'Instant Provisioning', desc: 'Get your DID numbers up and running in minutes' },
              { icon: BarChart3, title: 'Real-time Analytics', desc: 'Track call duration, patterns, and performance metrics' },
              { icon: Settings, title: 'Advanced Routing', desc: 'Route calls based on time, agent availability, or custom rules' },
              { icon: Shield, title: 'Call Recording', desc: 'Secure recording and compliance with regulatory standards' },
              { icon: Zap, title: 'API Integration', desc: 'Full REST API for seamless integration with your systems' },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="feature-card bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all group"
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon size={32} className="text-blue-900 icon-bounce" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Choose Callvia DID?</h2>
              <ul className="space-y-6">
                {[
                  'Get a professional dedicated number for your business',
                  'Control every aspect of your incoming calls',
                  'Integrate with IVR for automated call handling',
                  'Access detailed call analytics and reporting',
                  'Scalable solution for growing businesses',
                  ' 24/7 customer support and technical assistance',
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4 fade-up" style={{animationDelay: `${idx * 0.1}s`}}>
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center mt-1">
                      <Check size={20} className="text-white" />
                    </div>
                    <p className="text-lg text-gray-700 font-medium">{benefit}</p>
                  </div>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative w-80 h-80 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center border-2 border-blue-200 p-8">
                <div className="text-center">
                  <Phone size={80} className="text-blue-900 mx-auto mb-4 icon-spin" strokeWidth={1} />
                  <p className="text-xl font-bold text-blue-900">Professional Call Management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple Pricing</h2>
            <p className="text-xl text-gray-600">Flexible plans to match your business needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Starter', price: '₹299', features: ['1 DID Number', 'Basic Routing', 'Call Recording', '100 min/month'] },
              { name: 'Professional', price: '₹799', popular: true, features: ['5 DID Numbers', 'Advanced Routing', 'Call Recording', '1000 min/month', 'Analytics'] },
              { name: 'Enterprise', price: 'Custom', features: ['Unlimited Numbers', 'Custom Routing', 'Priority Support', 'White-label Options'] },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-xl p-8 transition-all fade-up ${
                  plan.popular
                    ? 'bg-gradient-to-br from-blue-900 to-blue-800 text-white border-2 border-blue-600 shadow-2xl scale-105'
                    : 'bg-white border-2 border-gray-200 hover:border-blue-400'
                }`}
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-bold transition-all ${
                  plan.popular
                    ? 'bg-white text-blue-900 hover:bg-gray-100'
                    : 'bg-blue-900 text-white hover:bg-blue-950'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Connect with our sales team to find the perfect DID solution for your business
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-blue-900 px-10 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center gap-2 shadow-lg">
              Book a Demo <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

