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
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.7; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(147, 51, 234, 0.3); }
          50% { box-shadow: 0 0 30px rgba(255, 255, 255, 0.8), 0 0 60px rgba(147, 51, 234, 0.5); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .icon-bounce { animation: iconBounce 2s ease-in-out infinite; }
        .icon-spin { animation: iconSpin 3s linear infinite; }
        .fade-up { animation: fadeInUp 0.8s ease-out forwards; }
        .slide-in-left { animation: slideInLeft 0.8s ease-out forwards; }
        .pulse-ring { animation: pulseRing 2s ease-in-out infinite; }
        .floating-particle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          animation: float 3s ease-in-out infinite;
        }
        .gradient-animated {
          background: linear-gradient(270deg, #06b6d4, #3b82f6, #06b6d4, #3b82f6);
          background-size: 400% 400%;
          animation: gradientShift 8s ease infinite;
        }
        .btn-glow {
          animation: glow 2s ease-in-out infinite;
        }
        .feature-card {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        h1 {
          text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-32 gradient-animated">
        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-particle" style={{width: '60px', height: '60px', top: '10%', left: '10%', animationDelay: '0s'}}></div>
          <div className="floating-particle" style={{width: '40px', height: '40px', top: '20%', right: '15%', animationDelay: '1s'}}></div>
          <div className="floating-particle" style={{width: '80px', height: '80px', bottom: '15%', left: '20%', animationDelay: '2s'}}></div>
          <div className="floating-particle" style={{width: '50px', height: '50px', top: '60%', right: '10%', animationDelay: '1.5s'}}></div>
          <div className="floating-particle" style={{width: '35px', height: '35px', top: '40%', left: '5%', animationDelay: '0.5s'}}></div>
          <div className="floating-particle" style={{width: '45px', height: '45px', bottom: '25%', right: '25%', animationDelay: '2.5s'}}></div>
        </div>
        
        <div className="absolute inset-0 opacity-70">
          <svg className="absolute bottom-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{height: '100%'}}>
            <path fill="rgba(255, 255, 255, 0.2)" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              <animate attributeName="d" dur="8s" repeatCount="indefinite" values="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,122.7C672,107,768,117,864,138.7C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
            </path>
            <path fill="rgba(255, 255, 255, 0.15)" d="M0,160L48,165.3C96,171,192,181,288,181.3C384,181,480,171,576,165.3C672,160,768,160,864,165.3C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              <animate attributeName="d" dur="12s" repeatCount="indefinite" values="M0,160L48,165.3C96,171,192,181,288,181.3C384,181,480,171,576,165.3C672,160,768,160,864,165.3C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,192L48,186.7C96,181,192,171,288,170.7C384,171,480,181,576,186.7C672,192,768,192,864,186.7C960,181,1056,171,1152,170.7C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,160L48,165.3C96,171,192,181,288,181.3C384,181,480,171,576,165.3C672,160,768,160,864,165.3C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
            </path>
            <path fill="rgba(255, 255, 255, 0.1)" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              <animate attributeName="d" dur="6s" repeatCount="indefinite" values="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,256L48,245.3C96,235,192,213,288,213.3C384,213,480,235,576,245.3C672,256,768,256,864,245.3C960,235,1056,213,1152,213.3C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
            </path>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6 slide-in-left shadow-lg">
                <Phone size={18} className="text-purple-600" />
                <span className="text-sm font-semibold text-purple-900">DID Numbers Solution</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight slide-in-left" style={{animationDelay: '0.1s'}}>
                Dedicated Numbers for Your Business
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed slide-in-left backdrop-blur-sm" style={{animationDelay: '0.2s'}}>
                Get instant access to local and toll-free numbers across India. Control call routing, enable advanced IVR, and manage your customer interactions with precision.
              </p>
              <div className="flex gap-4 flex-wrap slide-in-left" style={{animationDelay: '0.3s'}}>
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-xl btn-glow">
                  Book Demo <ArrowRight size={20} />
                </button>
                <button className="border-2 border-white/80 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Icon */}
            <div className="flex justify-center slide-in-left" style={{animationDelay: '0.4s'}}>
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md rounded-full w-72 h-72 flex items-center justify-center shadow-2xl phone-ring-wrapper overflow-visible">
                    <Phone size={88} className="text-white drop-shadow-2xl phone-ring" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 bg-gradient-to-b from-cyan-50 via-white to-blue-50">
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
                className="feature-card bg-white/90 backdrop-blur rounded-2xl p-8 border border-cyan-100/80 shadow-[0_20px_50px_rgba(6,182,212,0.18)] hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(59,130,246,0.25)] transition-all group"
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <div className="bg-gradient-to-br from-cyan-100 to-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
                  <feature.icon size={32} className="text-cyan-900 icon-bounce" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 px-6 bg-gradient-to-b from-white via-cyan-50 to-white">
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
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-900 to-blue-800 rounded-full flex items-center justify-center mt-1">
                      <Check size={20} className="text-white" />
                    </div>
                    <p className="text-lg text-gray-700 font-medium">{benefit}</p>
                  </div>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative w-80 h-80 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl flex items-center justify-center border-2 border-cyan-200 p-8 shadow-[0_20px_60px_rgba(6,182,212,0.25)]">
                <div className="text-center">
                  <span className="inline-flex items-center justify-center p-2 phone-ring-wrapper">
                    <Phone size={72} className="text-cyan-900 phone-ring" strokeWidth={1} />
                  </span>
                  <p className="text-xl font-bold text-cyan-900">Professional Call Management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-cyan-50 via-white to-blue-50">
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
                    ? 'bg-gradient-to-br from-cyan-900 to-blue-800 text-white border-2 border-cyan-500 shadow-2xl scale-105'
                    : 'bg-white border-2 border-cyan-100 hover:border-cyan-400'
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
                    ? 'bg-white text-cyan-900 hover:bg-cyan-50'
                    : 'bg-cyan-900 text-white hover:bg-cyan-950'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-cyan-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-cyan-100 mb-8">
            Connect with our sales team to find the perfect DID solution for your business
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-cyan-900 px-10 py-4 rounded-lg font-bold hover:bg-cyan-50 transition-colors flex items-center gap-2 shadow-lg">
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

