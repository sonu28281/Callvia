import React from 'react';
import { Shield, Users, Globe, Target, Lightbulb, Code, Phone, Cpu, Radio, Headphones, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AboutPage() {
  return (
    <div className="bg-brand-dark">
      {/* Hero Section */}
      <section className="relative bg-brand-dark border-b border-brand-border overflow-hidden">
        {/* Routing lines decoration */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="routing-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M0 16h32M16 0v32" stroke="currentColor" strokeWidth="0.5" className="text-brand-accent" fill="none" opacity="0.1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#routing-grid)"/>
            <line x1="0" y1="20%" x2="100%" y2="20%" stroke="currentColor" strokeWidth="1" className="text-brand-accent" opacity="0.15"/>
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="currentColor" strokeWidth="1" className="text-brand-accent" opacity="0.15"/>
            <line x1="0" y1="80%" x2="100%" y2="80%" stroke="currentColor" strokeWidth="1" className="text-brand-accent" opacity="0.15"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-surface border border-brand-border rounded-full text-sm text-brand-text-muted mb-6">
              Class-B VNO • Carrier-grade • India-focused
            </span>
            <h1 className="text-4xl lg:text-5xl font-heading font-semibold text-brand-text mb-6 leading-tight">
              Run enterprise telecom operations with infrastructure built to <span className="text-brand-accent">scale</span>
            </h1>
            <p className="text-lg text-brand-text-muted leading-relaxed mb-8">
              Callvia delivers mission-critical calling for inbound and outbound operations with compliant routing,
              real-time monitoring, and enterprise-grade reliability across India.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              {[
                { label: 'Founded', value: '2025' },
                { label: 'Monthly Calls', value: '10M+' },
                { label: 'Uptime SLA', value: '99.99%' },
              ].map((stat) => (
                <div key={stat.label} className="bg-brand-surface border border-brand-border rounded-xl p-4">
                  <div className="text-2xl font-heading font-semibold text-brand-text">{stat.value}</div>
                  <div className="text-xs uppercase tracking-wide text-brand-text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-brand-surface border border-brand-border rounded-2xl p-6 shadow-card">
              <div className="text-sm text-brand-text-muted mb-4">Control Center Preview</div>
              <div className="bg-brand-dark-light border border-brand-border rounded-xl p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {['Routing Health', 'Compliance Coverage'].map((label) => (
                    <div key={label} className="bg-brand-surface border border-brand-border rounded-lg p-3">
                      <div className="text-[10px] uppercase tracking-wide text-brand-text-muted">{label}</div>
                      <div className="text-lg font-heading font-semibold text-brand-text">Stable</div>
                    </div>
                  ))}
                </div>
                <div className="h-24 rounded-lg border border-brand-border bg-brand-surface" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent rounded-full text-sm font-semibold mb-6">Our Story</span>
              <h2 className="text-4xl font-heading font-semibold text-brand-text mb-6 leading-tight">
                Built by operators, for operators
              </h2>
              <p className="text-lg text-brand-text-muted leading-relaxed mb-4">
                Callvia was founded by telecom infrastructure professionals who saw a clear need for domestic-first
                telecom operations in India.
              </p>
              <p className="text-lg text-brand-text-muted leading-relaxed mb-4">
                For years, businesses relied on international routes, resold capacity, and platforms built by SaaS teams. We changed that.
              </p>
              <p className="text-lg text-brand-text-muted leading-relaxed mb-6">
                Today, Callvia powers 10M+ calls monthly through TRAI-approved Class-B VNO infrastructure, serving
                call centers, enterprises, and resellers across India with a 99.99% uptime SLA.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-brand-accent flex-shrink-0" />
                  <span className="text-brand-text font-medium">TRAI-approved VNO infrastructure</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-brand-accent flex-shrink-0" />
                  <span className="text-brand-text font-medium">Carrier-grade Class-5 switch backend</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-brand-accent flex-shrink-0" />
                  <span className="text-brand-text font-medium">Domestic-only, compliant operations</span>
                </div>
              </div>
            </div>
            <div className="bg-brand-surface p-12 rounded-2xl border border-brand-border shadow-card">
              <div className="space-y-8">
                <div className="border-b border-brand-border pb-8">
                  <p className="text-4xl font-heading font-semibold text-brand-text mb-2">2025</p>
                  <p className="text-lg text-brand-text font-semibold">Founded</p>
                  <p className="text-brand-text-muted mt-2">Launched as a TRAI-approved Class-B VNO</p>
                </div>
                <div className="border-b border-brand-border pb-8">
                  <p className="text-4xl font-heading font-semibold text-brand-text mb-2">10M+</p>
                  <p className="text-lg text-brand-text font-semibold">Calls managed monthly</p>
                  <p className="text-brand-text-muted mt-2">Enterprise-scale operations, carrier-grade reliability</p>
                </div>
                <div>
                  <p className="text-4xl font-heading font-semibold text-brand-text mb-2">99.99%</p>
                  <p className="text-lg text-brand-text font-semibold">Uptime SLA</p>
                  <p className="text-brand-text-muted mt-2">Backed by enterprise infrastructure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="bg-brand-surface p-10 rounded-2xl border border-brand-border hover:border-brand-border-light transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover">
              <div className="w-14 h-14 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-6">
                <Target size={28} className="text-brand-accent" />
              </div>
              <h2 className="text-2xl font-heading font-semibold text-brand-text mb-4">Our Mission</h2>
              <p className="text-brand-text-muted leading-relaxed">
                Empower every business in India with enterprise-grade, compliant telecom infrastructure. We believe voice communication should be controlled, secure, and profitable.
              </p>
            </div>
            <div className="bg-brand-surface p-10 rounded-2xl border border-brand-border hover:border-brand-border-light transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover">
              <div className="w-14 h-14 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-6">
                <Lightbulb size={28} className="text-brand-accent" />
              </div>
              <h2 className="text-2xl font-heading font-semibold text-brand-text mb-4">Our Vision</h2>
              <p className="text-brand-text-muted leading-relaxed">
                To become India's trusted foundation for voice infrastructure. A future where control, compliance, and AI-driven intelligence are standard, not premium features.
              </p>
            </div>
            <div className="bg-brand-surface p-10 rounded-2xl border border-brand-border hover:border-brand-border-light transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover">
              <div className="w-14 h-14 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-6">
                <Code size={28} className="text-brand-accent" />
              </div>
              <h2 className="text-2xl font-heading font-semibold text-brand-text mb-4">Our Promise</h2>
              <p className="text-brand-text-muted leading-relaxed">
                Carrier-grade reliability. Transparent pricing. Complete control. No grey routes. No international calling. Just honest, compliant telecom built for Indian businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Callvia */}
      <section className="py-20 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent rounded-full text-sm font-semibold mb-6">Why Callvia</span>
            <h2 className="text-4xl font-heading font-semibold text-brand-text mb-4">What sets us apart</h2>
            <p className="text-lg text-brand-text-muted max-w-2xl mx-auto">Built for regulated, high-volume environments with predictable performance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                icon: Shield,
                title: 'Regulatory Excellence',
                desc: 'TRAI-approved VNO with full compliance for DND, CDR retention, and KYC requirements.'
              },
              {
                icon: Cpu,
                title: 'Carrier Infrastructure',
                desc: 'Class-5 softswitch backend with 99.99% uptime SLA and sub-150ms voice latency.'
              },
              {
                icon: Globe,
                title: 'Domestic Operations',
                desc: 'India-only operations with no grey routes, ensuring quality and regulatory compliance.'
              },
              {
                icon: Headphones,
                title: 'Enterprise Support',
                desc: 'Dedicated account managers and priority support for mission-critical operations.'
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="bg-brand-surface border border-brand-border rounded-xl p-8 hover:border-brand-border-light transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover">
                  <div className="w-14 h-14 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-6">
                    <Icon size={28} className="text-brand-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-brand-text mb-3">{feature.title}</h3>
                  <p className="text-brand-text-muted leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-brand-dark border-t border-brand-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-semibold text-brand-text mb-6">Ready to scale your voice operations?</h2>
          <p className="text-lg text-brand-text-muted mb-8">
            Join enterprises and call centers running enterprise-grade telecom operations on Callvia.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/contact" className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Started
            </Link>
            <Link to="/pricing" className="border border-brand-border hover:border-brand-border-light text-brand-text px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
