import React from 'react';
import { ArrowRight, Check, MessageCircle, Mic, Brain, Zap, Globe, Users, TrendingUp, Phone, Shield, Settings } from 'lucide-react';

export function ConversationalIvrPage() {
  return (
    <div className="bg-brand-dark min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24 bg-brand-dark">
        {/* Routing Lines Decoration */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-accent"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <line x1="0" y1="20%" x2="100%" y2="80%" stroke="currentColor" strokeWidth="1" className="text-brand-accent" opacity="0.3"/>
            <line x1="0" y1="80%" x2="100%" y2="30%" stroke="currentColor" strokeWidth="1" className="text-brand-accent" opacity="0.2"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/20 px-4 py-2 rounded-full mb-6">
                <MessageCircle size={18} className="text-brand-accent" />
                <span className="text-sm font-semibold text-brand-accent">AI-Powered IVR</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-heading font-bold text-brand-text mb-6 leading-tight">
                Conversational IVR with Natural Language
              </h1>
              <p className="text-xl text-brand-text-muted mb-8 leading-relaxed">
                Natural language IVR with contextual understanding and adaptive call flows. Let customers speak naturally instead of navigating complex menus.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5">
                  Try Demo <ArrowRight size={20} />
                </button>
                <button className="border-2 border-brand-border text-brand-text hover:bg-brand-surface px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                  See Pricing
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-full w-64 h-64 flex items-center justify-center">
                    <MessageCircle size={100} className="text-brand-accent" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-brand-text mb-4">AI-Powered Natural Conversations</h2>
            <p className="text-xl text-brand-text-muted max-w-3xl mx-auto">
              Move beyond "Press 1 for Sales" with intelligent voice understanding
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Mic, title: 'Natural Language Processing', desc: 'Understand customer intent from natural speech, not just keywords' },
              { icon: Brain, title: 'Contextual Understanding', desc: 'Remember conversation history and context across multiple interactions' },
              { icon: Zap, title: 'Adaptive Call Flows', desc: 'Dynamically adjust conversation based on customer responses and behavior' },
              { icon: Globe, title: 'Multi-Language Support', desc: 'Support English, Hindi, and regional languages with automatic detection' },
              { icon: TrendingUp, title: 'Sentiment Analysis', desc: 'Detect customer emotion and frustration to prioritize or escalate calls' },
              { icon: Settings, title: 'Real-Time Learning', desc: 'AI improves responses over time based on successful interactions' },
            ].map((feature, idx) => (
              <div key={idx} className="bg-brand-surface border border-brand-border hover:border-brand-border-light rounded-xl p-8 transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover">
                <div className="bg-brand-accent/10 border border-brand-accent/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon size={32} className="text-brand-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-brand-text mb-3">{feature.title}</h3>
                <p className="text-brand-text-muted leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-16 text-center">How Conversational IVR Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Customer Speaks', desc: 'Customer explains need in natural language', icon: Phone },
              { step: '2', title: 'AI Understands', desc: 'NLP extracts intent and entities', icon: Brain },
              { step: '3', title: 'Contextual Response', desc: 'System responds or asks clarifying questions', icon: MessageCircle },
              { step: '4', title: 'Smart Routing', desc: 'Routes to right agent or completes self-service', icon: Zap },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="bg-brand-accent text-brand-dark w-16 h-16 rounded-full flex items-center justify-center text-2xl font-heading font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <div className="bg-brand-surface border border-brand-border rounded-xl p-6 h-full">
                  <item.icon size={32} className="text-brand-accent mx-auto mb-3" />
                  <h3 className="text-lg font-heading font-semibold text-brand-text mb-2">{item.title}</h3>
                  <p className="text-brand-text-muted text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-brand-text mb-6">Perfect For Complex Customer Journeys</h2>
              <p className="text-lg text-brand-text-muted mb-8 leading-relaxed">
                Handle sophisticated interactions that traditional IVR can't manage
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Banking & Finance', desc: 'Account inquiries, transaction disputes, loan applications' },
                  { title: 'Healthcare', desc: 'Appointment scheduling, prescription refills, symptom checking' },
                  { title: 'Travel & Hospitality', desc: 'Booking changes, cancellations, status updates' },
                  { title: 'E-commerce', desc: 'Order tracking, returns, product recommendations' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-brand-surface border border-brand-border rounded-xl">
                    <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-lg p-3 h-fit">
                      <Check size={24} className="text-brand-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-brand-text mb-1">{item.title}</h3>
                      <p className="text-brand-text-muted text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-surface border border-brand-border rounded-xl p-12 shadow-xl">
              <h3 className="text-2xl font-heading font-semibold text-brand-text mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {[
                  'Reduce average handling time by 40%',
                  'Increase self-service completion rate',
                  'Improve customer satisfaction scores',
                  'Handle multi-turn conversations seamlessly',
                  'Reduce agent transfers and escalations',
                  'Provide 24/7 intelligent assistance',
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 bg-brand-dark border border-brand-border p-4 rounded-lg">
                    <Check size={20} className="text-brand-accent flex-shrink-0 mt-1" />
                    <span className="text-brand-text">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 px-6 bg-brand-dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-12 text-center">
            Traditional IVR vs <span className="text-brand-accent">Conversational IVR</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-8">
              <h3 className="text-2xl font-heading font-semibold text-brand-text mb-6">Traditional IVR</h3>
              <ul className="space-y-3">
                {[
                  'Press 1 for Sales, 2 for Support...',
                  'Rigid menu structures',
                  'Customers get lost in menus',
                  'High abandonment rates',
                  'Limited to keypress input',
                  'No context retention',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-brand-text-muted">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brand-accent/5 border-2 border-brand-accent rounded-xl p-8">
              <h3 className="text-2xl font-heading font-semibold text-brand-accent mb-6">Conversational IVR</h3>
              <ul className="space-y-3">
                {[
                  '"I need to check my order status"',
                  'Natural language understanding',
                  'Intent-based routing',
                  'Higher completion rates',
                  'Speech recognition',
                  'Full conversation context',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-brand-text">
                    <Check size={20} className="text-brand-accent flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-brand-dark-light border-t border-brand-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-6">
            Ready to Modernize Your IVR Experience?
          </h2>
          <p className="text-xl text-brand-text-muted mb-8">
            Let customers speak naturally and get instant resolutions
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-200">
              Try Live Demo <ArrowRight size={20} />
            </button>
            <button className="border-2 border-brand-border text-brand-text hover:bg-brand-surface px-8 py-4 rounded-lg font-semibold transition-all duration-200">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ConversationalIvrPage;
