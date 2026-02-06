import React from 'react';
import { ArrowRight, Check, Headphones, Users, BarChart3, Settings, Clock, Phone, Zap, Shield, Target, TrendingUp } from 'lucide-react';

export function CloudCallCenterPage() {
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
                <Phone size={18} className="text-brand-accent" />
                <span className="text-sm font-semibold text-brand-accent">Call Center Platform</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-heading font-bold text-brand-text mb-6 leading-tight">
                India-ready <span className="text-brand-accent">Cloud Call Center</span>, Built to Scale
              </h1>
              <p className="text-xl text-brand-text-muted mb-8 leading-relaxed">
                Scalable inbound & outbound call center platform with IVR, intelligent routing, real-time monitoring, and team management. Built on carrier-grade infrastructure.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5">
                  Book Demo <ArrowRight size={20} />
                </button>
                <button className="border-2 border-brand-border text-brand-text hover:bg-brand-surface px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                  View Pricing
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

      {/* Stats Section */}
      <section className="py-16 px-6 bg-brand-dark-light border-y border-brand-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10M+', label: 'Calls Handled Monthly' },
              { value: '99.99%', label: 'Uptime SLA' },
              { value: '500+', label: 'Active Call Centers' },
              { value: '<2s', label: 'Avg Connection Time' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-heading font-bold text-brand-accent mb-2">{stat.value}</div>
                <div className="text-brand-text-muted text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-brand-text mb-4">
              Everything Your Call Center Needs, Unified
            </h2>
            <p className="text-xl text-brand-text-muted max-w-3xl mx-auto">
              Everything you need to run efficient inbound and outbound operations at scale
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Multi-Agent Support', desc: 'Manage unlimited agents with role-based access and real-time presence' },
              { icon: BarChart3, title: 'Real-Time Dashboards', desc: 'Live call monitoring, queue status, agent performance, and KPI tracking' },
              { icon: Phone, title: 'Smart Call Routing', desc: 'IVR, skill-based routing, time-based routing, and overflow handling' },
              { icon: Clock, title: 'Call Queuing', desc: 'Intelligent queue management with position announcements and callback options' },
              { icon: Settings, title: 'Advanced IVR', desc: 'Multi-level IVR builder with keypress and speech recognition support' },
              { icon: Shield, title: 'Call Recording & QA', desc: 'Automatic call recording with secure storage and quality monitoring' },
              { icon: Zap, title: 'API Integration', desc: 'REST APIs for CRM, helpdesk, and business application integration' },
              { icon: TrendingUp, title: 'Analytics & Reports', desc: 'Comprehensive reporting on calls, agents, campaigns, and performance' },
              { icon: Target, title: 'Campaign Management', desc: 'Create and manage outbound campaigns with auto-dialer capabilities' },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-brand-surface border border-brand-border hover:border-brand-border-light rounded-xl p-8 transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover"
              >
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
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-12 text-center">
            Run Any Call Center Model with <span className="text-brand-accent">Confidence</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                icon: Headphones,
                title: 'Inbound Customer Support',
                desc: 'Handle customer inquiries, technical support, and service requests with intelligent routing and queue management.',
                features: ['IVR self-service', 'Skill-based routing', 'Queue callback', 'Screen pop integration']
              },
              { 
                icon: Target,
                title: 'Outbound Sales & Marketing',
                desc: 'Run effective sales campaigns, lead generation, and customer outreach programs with automated dialing.',
                features: ['Auto-dialer campaigns', 'Lead management', 'Call scripting', 'Disposition tracking']
              },
              { 
                icon: Zap,
                title: 'Blended Operations',
                desc: 'Seamlessly handle both inbound and outbound calls with unified agent desktop and real-time switching.',
                features: ['Unified queue', 'Dynamic routing', 'Agent blending', 'Performance tracking']
              },
              { 
                icon: Users,
                title: 'Remote Contact Centers',
                desc: 'Enable work-from-home agents with cloud-based access, monitoring, and collaboration tools.',
                features: ['Cloud-based access', 'Remote monitoring', 'Secure connections', 'Team collaboration']
              },
            ].map((useCase, i) => (
              <div key={i} className="bg-brand-surface border border-brand-border hover:border-brand-border-light rounded-xl p-8 transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover">
                <div className="bg-brand-accent/10 border border-brand-accent/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon size={30} className="text-brand-accent" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-brand-text mb-3">{useCase.title}</h3>
                <p className="text-brand-text-muted mb-6 leading-relaxed">{useCase.desc}</p>
                <ul className="space-y-2">
                  {useCase.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-brand-text-muted">
                      <Check size={18} className="text-brand-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Hint */}
      <section className="py-24 px-6 bg-brand-dark">
        <div className="max-w-5xl mx-auto">
          <div className="bg-brand-surface border border-brand-border rounded-xl shadow-xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-brand-text mb-4">
                Pricing that <span className="text-brand-accent">Scales</span> with Your Growth
              </h2>
              <p className="text-xl text-brand-text-muted">
                From startups to enterprises - pricing that scales with your business
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { name: 'Starter', agents: 'Up to 10 Agents', price: 'From ₹X,XXX/mo' },
                { name: 'Growth', agents: 'Up to 50 Agents', price: 'From ₹XX,XXX/mo' },
                { name: 'Enterprise', agents: 'Unlimited Agents', price: 'Custom Pricing' },
              ].map((tier, i) => (
                <div key={i} className={`p-6 rounded-lg border-2 ${i === 1 ? 'border-brand-accent bg-brand-accent/5' : 'border-brand-border bg-brand-dark'}`}>
                  <h3 className="text-xl font-heading font-semibold text-brand-text mb-2">{tier.name}</h3>
                  <p className="text-brand-text-muted text-sm mb-4">{tier.agents}</p>
                  <p className="text-2xl font-bold text-brand-accent mb-4">{tier.price}</p>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${i === 1 ? 'bg-brand-accent hover:bg-brand-accent-hover text-brand-dark' : 'bg-brand-dark-light hover:bg-brand-surface text-brand-text border border-brand-border'}`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-sm text-brand-text-muted">All plans include: IVR, Call Recording, Real-time Monitoring, API Access</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-brand-dark-light border-t border-brand-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-6">
            Ready to <span className="text-brand-accent">Modernize</span> Your Call Center?
          </h2>
          <p className="text-xl text-brand-text-muted mb-8">
            Join 500+ call centers operating on Callvia's infrastructure
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-200">
              Book Demo <ArrowRight size={20} />
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

export default CloudCallCenterPage;
