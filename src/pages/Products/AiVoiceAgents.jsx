import React from 'react';
import { ArrowRight, Check, Play, Building2, Briefcase, ShoppingCart, Shield, Heart, Zap } from 'lucide-react';
import { AnimatedBackground } from '../../components/sections/AnimatedBackground.jsx';

export function AiVoiceAgentsPage() {
  return (
    <div className="bg-white">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes playPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7); }
          50% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(59, 130, 246, 0); }
        }
        @keyframes waveAnimation {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .fade-up { animation: fadeInUp 0.8s ease-out forwards; }
        .play-pulse { animation: playPulse 2s infinite; }
        .wave-line { animation: waveAnimation 2s ease-in-out infinite; }
        .use-case-card {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .feature-bar { animation: slideInRight 0.8s ease-out forwards; }
      `}</style>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-32">
        <AnimatedBackground />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6 fade-up">
              <Zap size={18} className="text-blue-900" />
              <span className="text-sm font-semibold text-blue-900">AI Voice Agents</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight fade-up" style={{animationDelay: '0.1s'}}>
              Intelligent Voice Agents for Every Business
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed fade-up" style={{animationDelay: '0.2s'}}>
              Deploy AI-powered voice agents that handle customer interactions, qualify leads, and provide support—24/7, in 24+ languages.
            </p>
            <div className="flex gap-4 justify-center flex-wrap fade-up" style={{animationDelay: '0.3s'}}>
              <button className="bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-950 hover:to-blue-900 text-white px-10 py-4 rounded-lg font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg">
                Book Demo <ArrowRight size={20} />
              </button>
              <button className="border-2 border-blue-900 text-blue-900 px-10 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                Explore Features
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Our AI Agents Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience Our Voice AI Agents in Action</h2>
            <p className="text-xl text-gray-600">See how businesses across industries are using AI voice agents</p>
          </div>

          {/* Use Case Cards - 6 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-12">
            {[
              { icon: Building2, title: 'Real Estate', subtitle: 'Site Visits' },
              { icon: Briefcase, title: 'NBFC', subtitle: 'Loan Inquiry' },
              { icon: ShoppingCart, title: 'eCommerce', subtitle: 'Order Tracking' },
              { icon: Shield, title: 'Insurance', subtitle: 'Policy Renewals' },
              { icon: Heart, title: 'Healthcare', subtitle: 'Appointment Booking' },
              { icon: Building2, title: 'Banks', subtitle: 'Card Activation' },
            ].map((useCase, idx) => (
              <div
                key={idx}
                className="use-case-card bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all group text-center"
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                {/* Icon Circle */}
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <useCase.icon size={40} className="text-blue-900" />
                </div>
                
                {/* Title and Subtitle */}
                <h3 className="text-lg font-bold text-gray-900 mb-1">{useCase.title}</h3>
                <p className="text-sm text-gray-600 mb-6">{useCase.subtitle}</p>
                
                {/* Play Button with Waveform */}
                <div className="flex items-center justify-center gap-3 mb-0">
                  <button className="play-pulse bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors flex-shrink-0">
                    <Play size={20} fill="white" />
                  </button>
                  <div className="flex items-end justify-center gap-1 h-8 flex-1">
                    <div className="w-0.5 bg-blue-400 h-3 rounded-full opacity-70"></div>
                    <div className="w-0.5 bg-blue-400 h-5 rounded-full opacity-80"></div>
                    <div className="w-0.5 bg-blue-400 h-2 rounded-full opacity-60"></div>
                    <div className="w-0.5 bg-blue-400 h-6 rounded-full opacity-90"></div>
                    <div className="w-0.5 bg-blue-400 h-3 rounded-full opacity-70"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Bar */}
          <div className="feature-bar bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { title: 'Hire Specialized AI Agents', desc: 'Deploy pre-trained or custom agents for your industry' },
              { title: 'Human-like Conversations', desc: 'Natural, context-aware dialogue that feels real' },
              { title: '24 Vernacular Languages', desc: 'Support customers in their preferred language' },
            ].map((feature, idx) => (
              <div key={idx} style={{animationDelay: `${idx * 0.2}s`}}>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-blue-100 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Powerful AI Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Programmable Conversations', desc: 'Define custom conversation flows and dialogue patterns' },
              { title: 'Context-Aware Responses', desc: 'AI understands context and provides intelligent replies' },
              { title: 'Lead Qualification', desc: 'Automatically qualify and score leads in real-time' },
              { title: 'Appointment Scheduling', desc: 'Book appointments directly without human intervention' },
              { title: 'CRM Integration', desc: 'Seamlessly integrate with your existing CRM systems' },
              { title: 'Performance Analytics', desc: 'Get detailed insights on agent performance and outcomes' },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all fade-up"
                style={{animationDelay: `${idx * 0.1}s`, opacity: 0}}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Check size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Benefits */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Transform Your Customer Interactions</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            AI Voice Agents reduce costs by 60%, improve response times by 80%, and increase customer satisfaction
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { stat: '24/7', label: 'Always Available' },
              { stat: '60%', label: 'Cost Reduction' },
              { stat: '80%', label: 'Faster Response' },
              { stat: '24+', label: 'Languages Supported' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur rounded-xl p-6 border border-blue-400/30">
                <div className="text-4xl font-bold text-white mb-2">{item.stat}</div>
                <div className="text-blue-100">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Deploy AI Voice Agents?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join leading companies using Callvia's AI voice agents for customer service automation
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-12 py-4 rounded-lg font-bold hover:from-blue-950 hover:to-blue-900 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
              Start Free Trial <ArrowRight size={20} />
            </button>
            <button className="border-2 border-blue-900 text-blue-900 px-12 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );

export default AiVoiceAgentsPage;