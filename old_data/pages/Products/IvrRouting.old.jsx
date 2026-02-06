import React from 'react';
import { ArrowRight, Check, Radio, Users, Settings, Clock, TrendingUp, Phone, Zap, MessageSquare, BarChart3, Shield } from 'lucide-react';
import { AnimatedBackground } from '../../components/sections/AnimatedBackground.jsx';

export function IvrRoutingPage() {
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
          background: linear-gradient(270deg, #a855f7, #8b5cf6, #6366f1, #8b5cf6);
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
                <Radio size={18} className="text-purple-900" />
                <span className="text-sm font-semibold text-purple-900">IVR & Routing Solution</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight fade-up" style={{animationDelay: '0.1s'}}>
                Intelligent IVR & Call Routing
              </h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed fade-up" style={{animationDelay: '0.2s'}}>
                Create sophisticated call flows with multi-level IVR, skill-based routing, time-based rules, and queue management. No coding required.
              </p>
              <div className="flex gap-4 flex-wrap fade-up" style={{animationDelay: '0.3s'}}>
                <button className="bg-gradient-to-r from-purple-900 to-purple-800 hover:from-purple-950 hover:to-purple-900 text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg">
                  Build Your IVR <ArrowRight size={20} />
                </button>
                <button className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                  See Examples
                </button>
              </div>
            </div>
            <div className="flex justify-center slide-in-left" style={{animationDelay: '0.4s'}}>
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md rounded-full w-64 h-64 flex items-center justify-center shadow-2xl">
                    <Radio size={100} className="text-white drop-shadow-2xl" strokeWidth={1.5} style={{animation: 'iconBounce 2s ease-in-out infinite'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-24 px-6 bg-gradient-to-b from-violet-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Call Flow Control</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Route every call to the right destination with intelligent decision-making
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Radio, title: 'Multi-Level IVR', desc: 'Create unlimited IVR menus with DTMF keypress and speech recognition support' },
              { icon: Users, title: 'Skill-Based Routing', desc: 'Route calls based on agent skills, expertise, language, and availability' },
              { icon: Clock, title: 'Time-Based Rules', desc: 'Different call flows for business hours, after hours, holidays, and special events' },
              { icon: TrendingUp, title: 'Priority Routing', desc: 'VIP customer identification and priority queue placement' },
              { icon: Phone, title: 'Queue Management', desc: 'Hold music, position announcements, estimated wait time, and callback options' },
              { icon: Settings, title: 'Custom Call Flows', desc: 'Drag-and-drop flow builder with conditional logic and API integrations' },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white/90 backdrop-blur rounded-2xl p-8 border border-violet-100/80 shadow-[0_20px_50px_rgba(139,92,246,0.18)] hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(99,102,241,0.25)] transition-all group">
                <div className="bg-gradient-to-br from-violet-100 to-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
                  <feature.icon size={32} className="text-indigo-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IVR Builder Features */}
      <section className="py-24 px-6 bg-gradient-to-b from-white via-violet-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Visual IVR Builder</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Design complex call flows with our intuitive visual editor. No programming knowledge required.
              </p>
              <div className="space-y-6">
                {[
                  { icon: MessageSquare, title: 'Custom Voice Prompts', desc: 'Upload your own recordings or use text-to-speech' },
                  { icon: BarChart3, title: 'Real-Time Analytics', desc: 'Track IVR usage, path analysis, and drop-off points' },
                  { icon: Zap, title: 'API Integration', desc: 'Connect with CRM, databases for dynamic routing decisions' },
                  { icon: Shield, title: 'Fallback Handling', desc: 'Automatic error handling and agent escalation paths' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-white/90 rounded-xl border border-violet-200 shadow-sm">
                    <div className="bg-violet-900 rounded-lg p-3 h-fit">
                      <item.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl p-12 border border-violet-200 shadow-[0_20px_60px_rgba(99,102,241,0.2)]">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Routing Strategies</h3>
              <div className="space-y-4">
                {[
                  'Round-robin distribution across agents',
                  'Longest idle time agent selection',
                  'Department-based routing (Sales, Support, Billing)',
                  'Language-based routing for multilingual support',
                  'Geographic routing based on caller location',
                  'Overflow routing when queues are full',
                ].map((strategy, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/90 p-4 rounded-lg border border-violet-100">
                    <Check size={20} className="text-violet-700 flex-shrink-0 mt-1" />
                    <span className="text-gray-900">{strategy}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-6 bg-gradient-to-b from-violet-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center\">Perfect For Every Business Need</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Customer Support', items: ['Press 1 for Sales, 2 for Support', 'Account lookup & authentication', 'Self-service options', 'Escalation paths'] },
              { title: 'Sales Teams', items: ['New customer routing', 'Existing customer detection', 'Lead priority handling', 'After-hours messaging'] },
              { title: 'Multi-Location', items: ['Branch selection by location', 'Regional team routing', 'Language preferences', 'Time zone handling'] },
            ].map((useCase, i) => (
              <div key={i} className="bg-white/90 backdrop-blur rounded-2xl p-6 border border-violet-100/80 shadow-[0_18px_45px_rgba(139,92,246,0.18)] hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(99,102,241,0.25)] transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <ul className="space-y-2">
                  {useCase.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-700 text-sm">
                      <Check size={16} className="text-violet-700 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-violet-900 via-indigo-900 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your Perfect Call Flow?
          </h2>
          <p className="text-xl text-violet-100 mb-8">
            Start routing calls intelligently in minutes, not weeks
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-violet-900 px-8 py-4 rounded-lg font-bold hover:bg-violet-50 transition-colors inline-flex items-center gap-2">
              Try IVR Builder <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-indigo-800 transition-colors">
              Talk to Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IvrRoutingPage;