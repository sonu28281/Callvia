import React from 'react';
import { ArrowRight, Check, Eye, Mic, BarChart3, Play, Shield, Clock, Users, Headphones, Search, Download } from 'lucide-react';
import { AnimatedBackground } from '../../components/sections/AnimatedBackground.jsx';

export function CallMonitoringPage() {
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
          background: linear-gradient(270deg, #f472b6, #d946ef, #a855f7, #d946ef);
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
                <Eye size={18} className="text-purple-900" />
                <span className="text-sm font-semibold text-purple-900">Monitoring & Recording</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight fade-up" style={{animationDelay: '0.1s'}}>
                Call Recording & Quality Monitoring
              </h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed fade-up" style={{animationDelay: '0.2s'}}>
                Automatic call recording, real-time monitoring, quality assurance, and compliance reporting. Secure storage with instant playback and search.
              </p>
              <div className="flex gap-4 flex-wrap fade-up" style={{animationDelay: '0.3s'}}>
                <button className="bg-gradient-to-r from-purple-900 to-purple-800 hover:from-purple-950 hover:to-purple-900 text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg">
                  Start Monitoring <ArrowRight size={20} />
                </button>
                <button className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                  See Demo
                </button>
              </div>
            </div>
            <div className="flex justify-center slide-in-left" style={{animationDelay: '0.4s'}}>
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md rounded-full w-64 h-64 flex items-center justify-center shadow-2xl">
                    <Eye size={100} className="text-white drop-shadow-2xl" strokeWidth={1.5} style={{animation: 'iconBounce 2s ease-in-out infinite'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recording Modes */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Flexible Recording Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Record all calls or selectively based on your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Mic, title: 'Automatic Recording', desc: 'Record all inbound and outbound calls automatically with no agent intervention required' },
              { icon: Users, title: 'Selective Recording', desc: 'Record specific agents, departments, or call types based on custom rules and triggers' },
              { icon: Shield, title: 'On-Demand Recording', desc: 'Agent-initiated recording for sensitive conversations or compliance requirements' },
            ].map((mode, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 border border-blue-200 hover:shadow-xl transition-all">
                <div className="bg-blue-900 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <mode.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{mode.title}</h3>
                <p className="text-gray-600 leading-relaxed">{mode.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Quality Assurance Suite</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Eye, title: 'Real-Time Monitoring', desc: 'Listen to live calls, whisper to agents, or barge in when needed for coaching' },
              { icon: Play, title: 'Instant Playback', desc: 'Play back any recorded call instantly with advanced controls and speed adjustment' },
              { icon: Search, title: 'Powerful Search', desc: 'Search recordings by date, agent, customer, duration, or custom tags' },
              { icon: BarChart3, title: 'Quality Scoring', desc: 'Built-in QA scorecards with customizable criteria and agent performance tracking' },
              { icon: Shield, title: 'Compliance Ready', desc: 'Secure encrypted storage with retention policies and regulatory compliance' },
              { icon: Download, title: 'Export & Share', desc: 'Download recordings in multiple formats and share securely with teams' },
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

      {/* Monitoring Features */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Advanced Call Monitoring</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Real-time visibility into every conversation with powerful monitoring and coaching tools.
              </p>
              <div className="space-y-4">
                {[
                  'Listen to live calls without interruption (Silent Monitoring)',
                  'Whisper guidance to agents without customer hearing (Coach Mode)',
                  'Join the call for immediate assistance (Barge Mode)',
                  'Real-time agent status and call queue visibility',
                  'Alert notifications for call quality issues',
                  'Supervisor dashboard with live metrics',
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check size={24} className="text-blue-900 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-900">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-12 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Use Cases</h3>
              <div className="space-y-6">
                {[
                  { icon: Headphones, title: 'Quality Assurance', desc: 'Monitor agent performance and maintain service standards' },
                  { icon: Users, title: 'Training & Coaching', desc: 'Use recordings for new agent training and skill development' },
                  { icon: Shield, title: 'Dispute Resolution', desc: 'Provide proof of conversations for customer disputes' },
                  { icon: Clock, title: 'Compliance Audits', desc: 'Meet regulatory requirements with secure call archives' },
                ].map((useCase, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-white rounded-lg p-3 h-fit">
                      <useCase.icon size={24} className="text-blue-900" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{useCase.title}</h4>
                      <p className="text-gray-600 text-sm">{useCase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-200">
            <div className="text-center mb-12">
              <Shield size={64} className="text-blue-900 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Enterprise-Grade Security</h2>
              <p className="text-xl text-gray-600">
                Bank-level encryption and compliance-ready infrastructure
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'AES-256 encryption for all recordings',
                'Role-based access control (RBAC)',
                'Automatic retention policy enforcement',
                'Audit logs for all access and actions',
                'TRAI compliance for India operations',
                'Secure cloud storage with redundancy',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                  <Check size={20} className="text-blue-900 flex-shrink-0" />
                  <span className="text-gray-900">{item}</span>
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
            Ready to Monitor Every Conversation?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Ensure quality and compliance with complete call recording and monitoring
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
              Start Recording <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CallMonitoringPage;