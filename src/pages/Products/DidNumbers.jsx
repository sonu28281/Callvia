import React from 'react';
import { ArrowRight, Check, Phone, Globe, Zap, Shield, BarChart3, Settings } from 'lucide-react';

export function DidNumbersPage() {
  return (
    <div className="bg-brand-dark">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-brand-dark to-brand-dark-light pt-32 pb-24 px-6">
        <div className="absolute inset-0 routing-lines opacity-30" aria-hidden="true" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-surface border border-brand-border px-4 py-2 rounded-lg mb-6">
                <Phone size={18} className="text-brand-accent" />
                <span className="text-sm font-semibold text-brand-text-muted">DID Numbers Solution</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-heading font-bold text-brand-text mb-6 leading-tight tracking-tight">
                Dedicated Numbers for Your Business
              </h1>
              <p className="text-xl text-brand-text-muted mb-8 leading-relaxed">
                Get instant access to local and toll-free numbers across India. Control call routing, enable advanced IVR, and manage your customer interactions with precision.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-10 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200">
                  Book Demo <ArrowRight size={20} />
                </button>
                <button className="border-2 border-brand-border text-brand-text hover:bg-brand-surface px-10 py-4 rounded-lg font-semibold transition-all duration-200">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 flex items-center justify-center">
                <div className="bg-brand-surface border border-brand-border rounded-full w-64 h-64 flex items-center justify-center shadow-card">
                  <Phone size={88} className="text-brand-accent" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-24 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-brand-text mb-4 tracking-tight">Powerful Features</h2>
            <p className="text-xl text-brand-text-muted max-w-3xl mx-auto leading-relaxed">
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
                className="bg-brand-surface rounded-xl p-8 border border-brand-border hover:border-brand-border-light transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover"
              >
                <div className="w-12 h-12 bg-brand-accent/10 border border-brand-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon size={24} className="text-brand-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-brand-text mb-2">{feature.title}</h3>
                <p className="text-brand-text-muted">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Number Types Section */}
      <section className="py-24 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-brand-text mb-4 tracking-tight">Choose Your Number Type</h2>
            <p className="text-xl text-brand-text-muted max-w-3xl mx-auto leading-relaxed">
              Select from multiple number types to match your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Local Numbers', 
                desc: 'City-specific numbers with local area codes to establish regional presence',
                examples: ['Mumbai: 022-XXXX-XXXX', 'Delhi: 011-XXXX-XXXX', 'Bangalore: 080-XXXX-XXXX']
              },
              { 
                title: 'Toll-Free Numbers', 
                desc: 'Customer-friendly 1800 numbers for nationwide reach without call charges',
                examples: ['1800-XXX-XXXX', '1800-XXXXXX', 'FREE for Customers']
              },
              { 
                title: 'Virtual Numbers', 
                desc: 'Cloud-based numbers that route to any destination without hardware',
                examples: ['Forward to Mobile', 'Route to IVR', 'Send to Call Center']
              },
            ].map((type, idx) => (
              <div
                key={idx}
                className="bg-brand-surface rounded-xl p-8 border border-brand-border hover:border-brand-border-light transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover"
              >
                <h3 className="text-2xl font-heading font-semibold text-brand-text mb-3">{type.title}</h3>
                <p className="text-brand-text-muted mb-6 leading-relaxed">{type.desc}</p>
                <div className="space-y-2">
                  {type.examples.map((example, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check size={16} className="text-brand-accent flex-shrink-0" />
                      <span className="text-sm text-brand-text-muted">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Routing Section */}
      <section className="py-24 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-brand-text mb-4 tracking-tight">Advanced Call Routing</h2>
            <p className="text-xl text-brand-text-muted max-w-3xl mx-auto leading-relaxed">
              Intelligent routing rules to ensure every call reaches the right destination
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Time-Based Routing', desc: 'Route calls based on business hours, holidays, or custom schedules. After-hours calls go to voicemail or overflow destinations.' },
              { title: 'Geographic Routing', desc: 'Direct calls to the nearest office based on caller location. Perfect for businesses with multiple regional offices.' },
              { title: 'Skill-Based Routing', desc: 'Match callers with agents who have the right expertise. Sales, support, billing - each gets routed correctly.' },
              { title: 'Round-Robin Distribution', desc: 'Distribute calls evenly across available agents to balance workload and minimize wait times.' },
              { title: 'Priority Routing', desc: 'VIP customers get routed to dedicated agents. Configure priority rules based on caller ID or account status.' },
              { title: 'Failover Protection', desc: 'Automatic failover to backup numbers if primary destination is unavailable. Zero calls dropped.' },
            ].map((route, idx) => (
              <div
                key={idx}
                className="bg-brand-surface rounded-xl p-8 border border-brand-border hover:border-brand-border-light transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover"
              >
                <h3 className="text-xl font-heading font-semibold text-brand-text mb-3">{route.title}</h3>
                <p className="text-brand-text-muted leading-relaxed">{route.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-12 tracking-tight">Industry-Leading Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { stat: '15K+', label: 'Numbers Active' },
              { stat: '5 Min', label: 'Setup Time' },
              { stat: '100+', label: 'Cities Covered' },
              { stat: '99.9%', label: 'Uptime Guarantee' },
            ].map((item, idx) => (
              <div key={idx} className="bg-brand-surface border border-brand-border rounded-xl p-8 transition-all duration-200 hover:border-brand-border-light hover:-translate-y-0.5 shadow-card hover:shadow-card-hover">
                <div className="text-5xl font-heading font-bold text-brand-accent mb-3">{item.stat}</div>
                <div className="text-brand-text-muted">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-brand-dark-light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-6 tracking-tight">Get Your Dedicated Number Today</h2>
          <p className="text-xl text-brand-text-muted mb-10 leading-relaxed">
            Instant provisioning, flexible pricing, and 24/7 support. Start connecting with customers right away.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-12 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2">
              Start Free Trial <ArrowRight size={20} />
            </button>
            <button className="border-2 border-brand-border text-brand-text hover:bg-brand-surface px-12 py-4 rounded-lg font-semibold transition-all duration-200">
              View Pricing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
