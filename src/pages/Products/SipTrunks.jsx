import React from 'react';
import { ArrowRight, Check, Zap, Shield, BarChart3, Settings, Globe, Phone, Headphones, Clock } from 'lucide-react';

export function SipTrunksPage() {
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
                <span className="text-sm font-semibold text-brand-text-muted">SIP Trunking</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-heading font-bold text-brand-text mb-6 leading-tight tracking-tight">
                Enterprise-Grade SIP Trunks
              </h1>
              <p className="text-xl text-brand-text-muted mb-8 leading-relaxed">
                Replace traditional phone lines with carrier-grade VoIP infrastructure. Scale unlimited concurrent calls with 99.99% uptime guaranteed.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-10 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200">
                  Get Started <ArrowRight size={20} />
                </button>
                <button className="border-2 border-brand-border text-brand-text hover:bg-brand-surface px-10 py-4 rounded-lg font-semibold transition-all duration-200">
                  Talk to Sales
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 flex items-center justify-center">
                <div className="bg-brand-surface border border-brand-border rounded-full w-64 h-64 flex items-center justify-center shadow-card">
                  <Zap size={100} className="text-brand-accent" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-brand-text mb-4 tracking-tight">Built for Enterprise Scale</h2>
            <p className="text-xl text-brand-text-muted max-w-3xl mx-auto leading-relaxed">
              Carrier-grade SIP trunking infrastructure with advanced features and full control
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Carrier-Grade Reliability', desc: '99.99% uptime SLA with redundant infrastructure and automatic failover' },
              { icon: Globe, title: 'Unlimited Scalability', desc: 'Scale from 10 to 10,000 concurrent calls instantly without hardware changes' },
              { icon: BarChart3, title: 'Real-Time Analytics', desc: 'Live call monitoring, CDR reports, and comprehensive usage analytics' },
              { icon: Settings, title: 'Advanced Call Control', desc: 'Custom routing, load balancing, and intelligent call distribution' },
              { icon: Zap, title: 'Instant Provisioning', desc: 'Deploy new SIP channels in minutes, not days or weeks' },
              { icon: Phone, title: 'Number Portability', desc: 'Keep your existing numbers or get new DIDs across India' },
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

      {/* Use Cases Section */}
      <section className="py-24 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-brand-text mb-4 tracking-tight">Perfect for Every Business</h2>
            <p className="text-xl text-brand-text-muted max-w-3xl mx-auto leading-relaxed">
              From startups to enterprises, our SIP trunking solution scales with you
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              { title: 'Call Centers', desc: 'Handle thousands of concurrent calls with advanced queuing, routing, and monitoring. Perfect for inbound and outbound campaigns.' },
              { title: 'Enterprises', desc: 'Replace legacy PBX systems with cloud infrastructure. Seamless integration with existing IP-PBX and UCaaS platforms.' },
              { title: 'BPO & KPO', desc: 'Scale operations across multiple locations with unified SIP trunking. Reduce costs by up to 70% compared to PSTN lines.' },
              { title: 'SMBs', desc: 'Professional phone system without upfront hardware costs. Pay-as-you-grow pricing with month-to-month flexibility.' },
            ].map((useCase, idx) => (
              <div
                key={idx}
                className="bg-brand-surface rounded-xl p-8 border border-brand-border hover:border-brand-border-light transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover"
              >
                <h3 className="text-2xl font-heading font-semibold text-brand-text mb-3">{useCase.title}</h3>
                <p className="text-brand-text-muted leading-relaxed">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-brand-text mb-4 tracking-tight">Industry-Leading Performance</h2>
            <p className="text-xl text-brand-text-muted max-w-3xl mx-auto leading-relaxed">
              Trusted by thousands of businesses for mission-critical voice communications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { stat: '99.99%', label: 'Uptime SLA' },
              { stat: '<50ms', label: 'Network Latency' },
              { stat: '100+', label: 'Routes Available' },
              { stat: '24/7', label: 'Support' },
            ].map((item, idx) => (
              <div key={idx} className="bg-brand-surface border border-brand-border rounded-xl p-8 text-center transition-all duration-200 hover:border-brand-border-light hover:-translate-y-0.5 shadow-card hover:shadow-card-hover">
                <div className="text-5xl font-heading font-bold text-brand-accent mb-3">{item.stat}</div>
                <div className="text-brand-text-muted">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List Section */}
      <section className="py-24 px-6 bg-brand-dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-12 text-center tracking-tight">Everything You Need</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Geographic & Non-Geographic Numbers',
              'Toll-Free Numbers (1800, etc.)',
              'CLI Customization',
              'Emergency Calling Support',
              'Fax to Email / T.38',
              'SMS Integration',
              'WebRTC Ready',
              'Auto Failover & Redundancy',
              'DDoS Protection',
              'TLS/SRTP Encryption',
              'Custom SIP Headers',
              'REST API Access',
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <Check size={20} className="text-brand-accent flex-shrink-0" />
                <span className="text-brand-text">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-brand-dark-light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-6 tracking-tight">Ready to Switch to SIP Trunking?</h2>
          <p className="text-xl text-brand-text-muted mb-10 leading-relaxed">
            Join enterprises across India using Callvia for reliable, scalable voice communications
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-12 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2">
              Start Free Trial <ArrowRight size={20} />
            </button>
            <button className="border-2 border-brand-border text-brand-text hover:bg-brand-surface px-12 py-4 rounded-lg font-semibold transition-all duration-200">
              Talk to Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
