import React from 'react';
import { ArrowRight, Check, RotateCw, Target, TrendingUp, Users, Clock, BarChart3, Zap, Phone, Settings, Shield } from 'lucide-react';

export function DialerPage() {
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
                <RotateCw size={18} className="text-brand-accent" />
                <span className="text-sm font-semibold text-brand-accent">Dialer Solution</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-heading font-bold text-brand-text mb-6 leading-tight">
                Smart Auto & Manual Dialer
              </h1>
              <p className="text-xl text-brand-text-muted mb-8 leading-relaxed">
                Maximize agent productivity with intelligent predictive, progressive, and manual dialing modes. Built for sales teams and outbound campaigns.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5">
                  Start Campaign <ArrowRight size={20} />
                </button>
                <button className="border-2 border-brand-border text-brand-text hover:bg-brand-surface px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                  See Demo
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-full w-64 h-64 flex items-center justify-center">
                    <Phone size={100} className="text-brand-accent" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dialing Modes */}
      <section className="py-24 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-brand-text mb-4">Multiple Dialing Modes</h2>
            <p className="text-xl text-brand-text-muted max-w-3xl mx-auto">
              Choose the right dialing strategy for your campaign goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: 'Predictive Dialer', desc: 'AI-powered dialing that connects agents only to answered calls. Maximizes talk time and agent productivity by 3-4x.', best: 'High-volume campaigns' },
              { icon: TrendingUp, title: 'Progressive Dialer', desc: 'Automatic dialing after agent completes disposition. Perfect balance of automation and control.', best: 'Sales outreach' },
              { icon: Phone, title: 'Manual Dialer', desc: 'Agent-controlled dialing with click-to-call interface. Full control over call timing and selection.', best: 'Premium leads' },
            ].map((mode, idx) => (
              <div key={idx} className="bg-brand-surface border border-brand-border hover:border-brand-border-light rounded-xl p-8 transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover">
                <div className="bg-brand-accent/10 border border-brand-accent/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <mode.icon size={32} className="text-brand-accent" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-brand-text mb-3">{mode.title}</h3>
                <p className="text-brand-text-muted mb-4 leading-relaxed">{mode.desc}</p>
                <div className="bg-brand-dark border border-brand-border rounded-lg p-3">
                  <p className="text-sm text-brand-text-muted"><span className="font-semibold text-brand-accent">Best for:</span> {mode.best}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-brand-text mb-4">Powerful Campaign Management</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Smart Lead Management', desc: 'Import, segment, and prioritize leads with custom fields and filters' },
              { icon: Users, title: 'Agent Performance', desc: 'Real-time agent dashboards with KPIs, talk time, and conversion tracking' },
              { icon: BarChart3, title: 'Campaign Analytics', desc: 'Track conversion rates, call outcomes, and ROI in real-time' },
              { icon: Clock, title: 'Time Zone Routing', desc: 'Automatic scheduling based on customer time zones and preferences' },
              { icon: Settings, title: 'Call Scripts & Forms', desc: 'Built-in scripting and dynamic disposition forms for consistency' },
              { icon: Shield, title: 'DNC Compliance', desc: 'Automatic DNC list scrubbing and compliance monitoring' },
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

      {/* Use Cases */}
      <section className="py-24 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-12 text-center">Perfect For Every Outbound Campaign</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Sales & Lead Generation', items: ['B2B sales outreach', 'Product demos scheduling', 'Warm lead follow-ups', 'Upsell & cross-sell campaigns'] },
              { title: 'Customer Engagement', items: ['Survey & feedback collection', 'Event registrations', 'Appointment reminders', 'Customer satisfaction calls'] },
              { title: 'Collections & Payments', items: ['Payment reminders', 'Past-due follow-ups', 'Settlement negotiations', 'Promise-to-pay tracking'] },
              { title: 'Market Research', items: ['Survey campaigns', 'Data verification', 'Market intelligence', 'Customer profiling'] },
            ].map((useCase, i) => (
              <div key={i} className="bg-brand-surface border border-brand-border hover:border-brand-border-light rounded-xl p-6 transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover">
                <h3 className="text-xl font-heading font-semibold text-brand-text mb-4">{useCase.title}</h3>
                <ul className="space-y-2">
                  {useCase.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-brand-text-muted">
                      <Check size={18} className="text-brand-accent flex-shrink-0" />
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
            Ready to 3X Your Agent Productivity?
          </h2>
          <p className="text-xl text-brand-text-muted mb-8">
            Join leading sales teams using intelligent dialing to maximize conversions
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-200">
              Start Free Trial <ArrowRight size={20} />
            </button>
            <button className="border-2 border-brand-border text-brand-text hover:bg-brand-surface px-8 py-4 rounded-lg font-semibold transition-all duration-200">
              Book Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DialerPage;
