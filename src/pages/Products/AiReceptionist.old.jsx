import React from 'react';
import { ArrowRight, Check, Bot, Phone, Clock, Users, MessageSquare, Zap, BarChart3, Calendar, Shield, Globe, Headphones } from 'lucide-react';
import { AnimatedBackground } from '../../components/sections/AnimatedBackground.jsx';

export function AiReceptionistPage() {
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
          background: linear-gradient(270deg, #3b82f6, #6366f1, #8b5cf6, #6366f1);
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
              <animate attributeName="d" dur="8s" repeatCount="indefinite" values="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,122.7C672,107,768,117,864,138.7C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
            </path>
            <path fill="rgba(255, 255, 255, 0.15)" d="M0,160L48,165.3C96,171,192,181,288,181.3C384,181,480,171,576,165.3C672,160,768,160,864,165.3C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              <animate attributeName="d" dur="12s" repeatCount="indefinite" values="M0,160L48,165.3C96,171,192,181,288,181.3C384,181,480,171,576,165.3C672,160,768,160,864,165.3C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,192L48,186.7C96,181,192,171,288,170.7C384,171,480,181,576,186.7C672,192,768,192,864,186.7C960,181,1056,171,1152,170.7C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,160L48,165.3C96,171,192,181,288,181.3C384,181,480,171,576,165.3C672,160,768,160,864,165.3C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
            </path>
            <path fill="rgba(255, 255, 255, 0.1)" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              <animate attributeName="d" dur="6s" repeatCount="indefinite" values="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,192L48,202.7C96,213,192,235,288,234.7C384,235,480,213,576,202.7C672,192,768,192,864,202.7C960,213,1056,235,1152,234.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
            </path>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-6 fade-up">
                <Bot size={18} className="text-purple-900" />
                <span className="text-sm font-semibold text-purple-900">AI Receptionist</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight fade-up" style={{animationDelay: '0.1s'}}>
                Never Miss a Call Again
              </h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed fade-up" style={{animationDelay: '0.2s'}}>
                AI-powered receptionist that answers calls 24/7, understands natural language, qualifies leads, and routes to the right team member—all in multiple languages.
              </p>
              <div className="flex gap-4 flex-wrap fade-up" style={{animationDelay: '0.3s'}}>
                <button className="bg-gradient-to-r from-purple-900 to-purple-800 hover:from-purple-950 hover:to-purple-900 text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg">
                  Try AI Demo <ArrowRight size={20} />
                </button>
                <button className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                  See Pricing
                </button>
              </div>
            </div>
            <div className="flex justify-center slide-in-left" style={{animationDelay: '0.4s'}}>
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md rounded-full w-64 h-64 flex items-center justify-center shadow-2xl">
                    <Headphones size={100} className="text-white drop-shadow-2xl" strokeWidth={1.5} style={{animation: 'iconBounce 2s ease-in-out infinite'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">How AI Receptionist Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Call Received', desc: 'Customer calls your business number', icon: Phone },
              { step: '2', title: 'AI Answers', desc: 'Receptionist greets in natural language', icon: Bot },
              { step: '3', title: 'Qualifies Intent', desc: 'Understands need and collects info', icon: MessageSquare },
              { step: '4', title: 'Smart Routing', desc: 'Routes to agent or handles request', icon: Zap },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <div className="bg-blue-50 rounded-lg p-6 h-full border border-blue-200">
                  <item.icon size={32} className="text-blue-900 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Built for Small Business Efficiency</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to provide professional call handling without hiring staff
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: '24/7 Availability', desc: 'Never miss calls after hours, weekends, or holidays' },
              { icon: Globe, title: 'Multi-Language Support', desc: 'Handle calls in English, Hindi, and 20+ regional languages' },
              { icon: Users, title: 'Lead Qualification', desc: 'AI asks qualifying questions and scores leads automatically' },
              { icon: Calendar, title: 'Appointment Booking', desc: 'Schedule meetings directly into your calendar' },
              { icon: MessageSquare, title: 'Message Taking', desc: 'Record detailed messages and send via email/SMS' },
              { icon: BarChart3, title: 'Call Analytics', desc: 'Track call volume, response time, and conversion rates' },
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

      {/* Use Cases */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Perfect For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Small Businesses', items: ['Retail stores', 'Restaurants', 'Service providers', 'Local businesses'] },
              { title: 'Professional Services', items: ['Law firms', 'Accounting firms', 'Consultants', 'Freelancers'] },
              { title: 'Healthcare', items: ['Clinics', 'Dental practices', 'Therapy centers', 'Wellness spas'] },
              { title: 'Real Estate', items: ['Agents', 'Property managers', 'Brokers', 'Developers'] },
            ].map((useCase, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <ul className="space-y-2">
                  {useCase.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-700 text-sm">
                      <Check size={16} className="text-blue-900 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-200">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple Pricing for Small Business</h2>
              <p className="text-xl text-gray-600">
                More affordable than hiring a part-time receptionist
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { plan: 'Basic', price: '₹X,XXX/mo', calls: 'Up to 100 calls', features: ['24/7 answering', 'Message taking', 'Email notifications'] },
                { plan: 'Professional', price: '₹X,XXX/mo', calls: 'Up to 500 calls', features: ['All Basic features', 'Appointment booking', 'Lead qualification', 'CRM integration'], highlight: true },
                { plan: 'Enterprise', price: 'Custom', calls: 'Unlimited calls', features: ['All Pro features', 'Custom workflows', 'Dedicated support'] },
              ].map((tier, i) => (
                <div key={i} className={`p-6 rounded-lg border-2 ${tier.highlight ? 'border-blue-900 bg-blue-50' : 'border-gray-200'}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.plan}</h3>
                  <p className="text-3xl font-bold text-blue-900 mb-2">{tier.price}</p>
                  <p className="text-gray-600 text-sm mb-6">{tier.calls}</p>
                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <Check size={16} className="text-blue-900 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold ${tier.highlight ? 'bg-blue-900 text-white hover:bg-blue-950' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'} transition-colors`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Try AI Receptionist Free for 14 Days
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            No credit card required. Setup in 5 minutes.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
              Start Free Trial <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-colors">
              Talk to Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AiReceptionistPage;