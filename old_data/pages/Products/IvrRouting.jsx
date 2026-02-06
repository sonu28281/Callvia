import React from 'react';
import { ArrowRight, Check, Radio, Users, Settings, Clock, TrendingUp, Phone, Zap, MessageSquare, BarChart3, Shield } from 'lucide-react';

export function IvrRoutingPage() {
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
                <Radio size={18} className="text-brand-accent" />
                <span className="text-sm font-semibold text-brand-accent">IVR & Routing Solution</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-heading font-bold text-brand-text mb-6 leading-tight">
                Intelligent IVR & Call Routing
              </h1>
              <p className="text-xl text-brand-text-muted mb-8 leading-relaxed">
                Create sophisticated call flows with multi-level IVR, skill-based routing, time-based rules, and queue management. No coding required.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5">
                  Build Your IVR <ArrowRight size={20} />
                </button>
                <button className="border-2 border-brand-border text-brand-text hover:bg-brand-surface px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                  See Examples
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-full w-64 h-64 flex items-center justify-center">
                    <Radio size={100} className="text-brand-accent" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-24 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-brand-text mb-4">Complete Call Flow Control</h2>
            <p className="text-xl text-brand-text-muted max-w-3xl mx-auto">
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

      {/* IVR Builder Features */}
      <section className="py-24 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-brand-text mb-6">Visual IVR Builder</h2>
              <p className="text-lg text-brand-text-muted mb-8 leading-relaxed">
                Design complex call flows with our intuitive visual editor. No programming knowledge required.
              </p>
              <div className="space-y-6">
                {[
                  { icon: MessageSquare, title: 'Custom Voice Prompts', desc: 'Upload your own recordings or use text-to-speech' },
                  { icon: BarChart3, title: 'Real-Time Analytics', desc: 'Track IVR usage, path analysis, and drop-off points' },
                  { icon: Zap, title: 'API Integration', desc: 'Connect with CRM, databases for dynamic routing decisions' },
                  { icon: Shield, title: 'Fallback Handling', desc: 'Automatic error handling and agent escalation paths' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-brand-surface border border-brand-border rounded-xl">
                    <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-lg p-3 h-fit">
                      <item.icon size={24} className="text-brand-accent" />
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
              <h3 className="text-2xl font-heading font-semibold text-brand-text mb-6">Common Routing Strategies</h3>
              <div className="space-y-4">
                {[
                  'Round-robin distribution across agents',
                  'Longest idle time agent selection',
                  'Department-based routing (Sales, Support, Billing)',
                  'Language-based routing for multilingual support',
                  'Geographic routing based on caller location',
                  'Overflow routing when queues are full',
                ].map((strategy, i) => (
                  <div key={i} className="flex items-start gap-3 bg-brand-dark border border-brand-border p-4 rounded-lg">
                    <Check size={20} className="text-brand-accent flex-shrink-0 mt-1" />
                    <span className="text-brand-text">{strategy}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-12 text-center">Perfect For Every Business Need</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Customer Support', items: ['Press 1 for Sales, 2 for Support', 'Account lookup & authentication', 'Self-service options', 'Escalation paths'] },
              { title: 'Sales Teams', items: ['New customer routing', 'Existing customer detection', 'Lead priority handling', 'After-hours messaging'] },
              { title: 'Multi-Location', items: ['Branch selection by location', 'Regional team routing', 'Language preferences', 'Time zone handling'] },
            ].map((useCase, i) => (
              <div key={i} className="bg-brand-surface border border-brand-border hover:border-brand-border-light rounded-xl p-6 transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover">
                <h3 className="text-xl font-heading font-semibold text-brand-text mb-4">{useCase.title}</h3>
                <ul className="space-y-2">
                  {useCase.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-brand-text-muted text-sm">
                      <Check size={16} className="text-brand-accent flex-shrink-0" />
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
      <section className="py-24 px-6 bg-brand-dark border-t border-brand-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-6">
            Ready to Build Your Perfect Call Flow?
          </h2>
          <p className="text-xl text-brand-text-muted mb-8">
            Start routing calls intelligently in minutes, not weeks
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-200">
              Try IVR Builder <ArrowRight size={20} />
            </button>
            <button className="border-2 border-brand-border text-brand-text hover:bg-brand-surface px-8 py-4 rounded-lg font-semibold transition-all duration-200">
              Talk to Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IvrRoutingPage;
