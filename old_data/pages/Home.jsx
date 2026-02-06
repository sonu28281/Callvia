import React from 'react';
import { ArrowRight, CheckCircle2, Phone, Zap, Cpu, Globe, CreditCard, Building2 } from 'lucide-react';
import { InquiryForm } from '../components/sections/InquiryForm.jsx';

export function Home() {
  return (
    <div className="w-full bg-brand-dark">
      {/* ========== HERO SECTION ========== */}
      <section className="relative bg-gradient-to-b from-brand-dark to-brand-dark-light pt-32 pb-24 px-6">
        {/* Subtle routing lines decoration */}
        <div className="absolute inset-0 routing-lines opacity-30" aria-hidden="true" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-block">
                <div className="px-4 py-2 bg-brand-surface border border-brand-border rounded-lg text-brand-text-muted font-medium text-sm">
                  Coming Soon
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl lg:text-6xl font-heading font-bold text-brand-text leading-tight tracking-tighter">
                Enterprise Telecom<br />
                <span className="text-brand-accent">Infrastructure</span>
              </h1>

              {/* Subheading */}
              <p className="text-xl text-brand-text-muted max-w-xl leading-relaxed">
                Class-B VNO platform powering secure domestic calling, AI-driven automation, and fully white-label telecom services.
              </p>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-4">
                <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center gap-2">
                  Book a Demo <ArrowRight size={18} />
                </button>
                <button className="border-2 border-brand-border text-brand-text hover:bg-brand-surface px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                  View Pricing
                </button>
              </div>

              {/* Features list */}
              <div className="pt-6 space-y-4">
                {[
                  'TRAI-approved VNO infrastructure',
                  'Carrier-grade backend built in-house',
                  'White-label platform for resellers'
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent flex-shrink-0" />
                    <span className="text-brand-text-muted font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="flex justify-center">
              <div className="w-full max-w-md bg-brand-surface border border-brand-border rounded-2xl p-8 shadow-card">
                <h2 className="text-2xl font-heading font-bold text-brand-text mb-2">Get Early Access</h2>
                <p className="text-brand-text-muted text-sm mb-6">Limited spots available for enterprise partners.</p>
                <InquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FEATURES SECTION ========== */}
      <section className="bg-brand-dark-light py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-brand-surface border border-brand-border text-brand-accent rounded-lg text-sm font-semibold">
                CORE FEATURES
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-brand-text mb-6 tracking-tight">
              Core Telecom Capabilities
            </h2>
            <p className="text-xl text-brand-text-muted max-w-2xl mx-auto">
              Everything you need to build, scale, and manage enterprise voice operations
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Phone,
                title: 'DID Numbers',
                description: 'Pan-India virtual numbers with TRAI-approved infrastructure. Instant activation, geographic flexibility, and carrier-grade reliability.',
                features: ['Instant Activation', 'Pan-India Coverage', 'TRAI-Approved']
              },
              {
                icon: Zap,
                title: 'Cloud Call Center',
                description: 'Enterprise-grade inbound & outbound calling platform. High-volume calls, automatic distribution, comprehensive reporting.',
                features: ['Auto-Routing', 'Real-time Analytics', 'Multi-agent']
              },
              {
                icon: Cpu,
                title: 'AI Voice Agents',
                description: 'Intelligent programmable voice agents. Smart IVR routing, conversation analytics, seamless handoff to live agents.',
                features: ['AI-Powered', 'Smart Routing', 'Auto-Handoff']
              },
              {
                icon: Globe,
                title: 'White-Label Platform',
                description: 'Launch branded telecom service. Complete API access, reseller dashboard, billing management, backend support included.',
                features: ['Full Branding', 'Custom Billing', 'API Access']
              },
              {
                icon: CreditCard,
                title: 'Prepaid Billing',
                description: 'Real-time balance management with instant recharge. Detailed analytics, custom pricing tiers, automated alerts.',
                features: ['Real-time Balance', 'Auto Alerts', 'Custom Pricing']
              },
              {
                icon: Building2,
                title: 'Enterprise API',
                description: 'Full REST API access for custom integrations. Real-time call logs, CDR data, webhooks, comprehensive documentation.',
                features: ['REST API', 'Webhooks', 'Full Documentation']
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className="bg-brand-surface border border-brand-border rounded-2xl p-8 hover:border-brand-border-light transition-all duration-200 card-hover shadow-card hover:shadow-card-hover group"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 bg-brand-accent/10 border border-brand-accent/20 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-brand-accent" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-heading font-semibold text-brand-text mb-3">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-brand-text-muted text-sm leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  
                  {/* Key Features Badges */}
                  <div className="flex flex-wrap gap-2">
                    {feature.features.map((feat, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-brand-dark border border-brand-border-subtle text-brand-text-muted text-xs font-medium rounded-md"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== PLATFORM CAPABILITIES ========== */}
      <section className="bg-brand-dark py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-brand-text mb-6 tracking-tight">
              Enterprise-Grade Platform
            </h2>
            <p className="text-xl text-brand-text-muted max-w-2xl mx-auto">
              Powerful infrastructure built to scale your call center operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                icon: '📊',
                title: 'Real-time Call Management',
                description: 'Monitor and control every call across your network with live dashboard',
                color: 'bg-cyan-500/10 border-cyan-500/20'
              },
              {
                icon: '📈',
                title: 'Advanced Analytics',
                description: 'Deep insights into call quality, duration, routing, and agent performance',
                color: 'bg-emerald-500/10 border-emerald-500/20'
              },
              {
                icon: '🔐',
                title: 'Enterprise Security',
                description: 'Bank-grade encryption and compliance with all telecom regulations',
                color: 'bg-violet-500/10 border-violet-500/20'
              },
              {
                icon: '⚡',
                title: 'Infinite Scalability',
                description: 'Handle millions of simultaneous calls without performance degradation',
                color: 'bg-orange-500/10 border-orange-500/20'
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-5">
                <div className={`flex-shrink-0 w-14 h-14 ${item.color} border rounded-xl flex items-center justify-center text-2xl`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-brand-text mb-2">{item.title}</h3>
                  <p className="text-brand-text-muted leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== BENEFITS SECTION ========== */}
      <section className="bg-brand-dark-light py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-brand-text mb-6 tracking-tight">
              Built for Every Business
            </h2>
            <p className="text-xl text-brand-text-muted max-w-2xl mx-auto">
              From startups to enterprises, our platform scales with your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'White-Label Ready',
                description: 'Launch your own branded telecom service instantly. Complete customization with your logo, colors, and domain.',
                emoji: '🏷️'
              },
              {
                title: 'Instant Deployment',
                description: 'Go live in minutes, not months. No complex setup or infrastructure investment required.',
                emoji: '⚡'
              },
              {
                title: 'API-First Design',
                description: 'Integrate seamlessly with existing systems. RESTful API with comprehensive documentation.',
                emoji: '🔌'
              },
              {
                title: 'Cost Effective',
                description: 'Pay only for what you use. Transparent pricing with no hidden fees or long-term commitments.',
                emoji: '💰'
              },
              {
                title: 'AI Automation',
                description: 'Scale operations without hiring. Advanced voice AI handles complex customer interactions.',
                emoji: '🤖'
              },
              {
                title: 'Operator Mindset',
                description: 'Built by telecom professionals. Deep industry expertise with 15+ years of operations experience.',
                emoji: '👥'
              }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="bg-brand-surface border border-brand-border rounded-2xl p-8 hover:border-brand-border-light transition-all duration-200"
              >
                <div className="w-14 h-14 bg-brand-accent/10 border border-brand-accent/20 rounded-full flex items-center justify-center text-3xl mb-6">
                  {benefit.emoji}
                </div>
                <h3 className="text-xl font-heading font-semibold text-brand-text mb-3">{benefit.title}</h3>
                <p className="text-brand-text-muted leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section className="bg-brand-dark py-16 px-6 border-y border-brand-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { number: '10M+', label: 'Calls Managed' },
              { number: '99.99%', label: 'Uptime SLA' },
              { number: '50+', label: 'Enterprise Clients' },
              { number: '24/7', label: 'Support Coverage' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl lg:text-6xl font-heading font-bold text-brand-accent mb-3">
                  {stat.number}
                </div>
                <p className="text-brand-text-muted font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="bg-brand-dark-light py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-brand-text mb-6 tracking-tight">
            Ready to Scale Your<br />Telecom Operations?
          </h2>
          <p className="text-xl text-brand-text-muted mb-10 max-w-2xl mx-auto">
            Join enterprises building the future of domestic voice infrastructure
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-10 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center gap-2">
              Get Started <ArrowRight size={20} />
            </button>
            <button className="border-2 border-brand-border text-brand-text hover:bg-brand-surface px-10 py-4 rounded-lg font-semibold transition-all duration-200">
              Talk to Sales
            </button>
          </div>

          <p className="text-brand-text-dim text-sm mt-8">
            Enterprise SLA guaranteed. Live support for India-based teams.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
