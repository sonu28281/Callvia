import React from 'react';
import { ArrowRight, Check, Building2, Shield, Headphones, Zap, Lock, Globe, BarChart3, Users, Cloud, Server } from 'lucide-react';

export function EnterprisesSolutionPage() {
  return (
    <div className="bg-brand-dark">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-b from-brand-dark to-brand-dark-light">
        {/* Routing Lines Decoration */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="routing-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="#EF8021" opacity="0.3"/>
                <line x1="0" y1="50" x2="100" y2="50" stroke="#EF8021" strokeWidth="0.5" opacity="0.2"/>
                <line x1="50" y1="0" x2="50" y2="100" stroke="#EF8021" strokeWidth="0.5" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#routing-pattern)"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block bg-brand-accent/10 border border-brand-accent/20 text-brand-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ENTERPRISE SOLUTIONS
            </div>
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-brand-text mb-6 leading-tight">
              Enterprise-Grade Telecom Infrastructure
            </h1>
            <p className="text-xl text-brand-text-muted mb-8 leading-relaxed">
              Scalable, secure, and compliant telephony platform for large enterprises. Dedicated support, SLA guarantees, and complete control.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-200">
                Schedule Consultation <ArrowRight size={20} />
              </button>
              <button className="border-2 border-brand-border text-brand-text hover:bg-brand-surface px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-12 text-center">Enterprise-Grade Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Security & Compliance', desc: 'SOC 2 Type II, ISO 27001, GDPR compliant. Encrypted call recordings, secure API access.' },
              { icon: Zap, title: '99.95% Uptime SLA', desc: 'Carrier-grade infrastructure with geo-redundancy. Active-active failover for zero downtime.' },
              { icon: Headphones, title: 'Dedicated Support', desc: 'Named account manager, priority ticket queue, 24/7 enterprise support with <15min response.' },
              { icon: Lock, title: 'Advanced Access Control', desc: 'SSO with SAML 2.0, RBAC, MFA, IP whitelisting, custom audit logs for compliance.' },
              { icon: BarChart3, title: 'Custom Reporting', desc: 'Scheduled reports, custom KPIs, data warehouse integration, real-time BI dashboards.' },
              { icon: Globe, title: 'Multi-Location Support', desc: 'Unified platform for multiple offices, branch calling, location-based routing.' },
            ].map((item, i) => (
              <div key={i} className="bg-brand-surface border border-brand-border hover:border-brand-border-light transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover rounded-xl p-8">
                <div className="w-14 h-14 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent rounded-lg flex items-center justify-center mb-6">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-text mb-3">{item.title}</h3>
                <p className="text-brand-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-brand-text mb-6">Enterprise Use Cases</h2>
              <p className="text-lg text-brand-text-muted mb-8">
                Trusted by leading enterprises across BFSI, healthcare, e-commerce, and logistics sectors.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Customer Service Centers', desc: 'Inbound IVR, intelligent routing, call recording, quality monitoring for 500+ seat centers' },
                  { title: 'Sales & Lead Management', desc: 'Click-to-call from CRM, automatic lead distribution, call tracking, conversion analytics' },
                  { title: 'Branch Connectivity', desc: 'EPABX replacement with cloud PBX, inter-branch calling, unified number plans' },
                  { title: 'OTP & Alerts', desc: 'High-volume transactional SMS, OTP delivery, WhatsApp Business API, voice alerts' },
                ].map((useCase, i) => (
                  <div key={i} className="bg-brand-surface border border-brand-border rounded-xl p-6 flex gap-4 items-start">
                    <Check size={24} className="text-brand-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-heading font-bold text-brand-text mb-1">{useCase.title}</h3>
                      <p className="text-brand-text-muted text-sm">{useCase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-surface border border-brand-border rounded-xl p-12 shadow-card">
              <h3 className="text-2xl font-heading font-bold text-brand-text mb-8">Deployment Models</h3>
              <div className="space-y-6">
                {[
                  { icon: Cloud, title: 'Cloud-Hosted', desc: 'Fully managed by Callvia. Quick setup, zero maintenance.' },
                  { icon: Server, title: 'On-Premises', desc: 'Deployed in your data center. Complete data sovereignty.' },
                  { icon: Building2, title: 'Hybrid', desc: 'Cloud+on-prem mix. Disaster recovery built-in.' },
                ].map((model, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <model.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-heading font-bold text-brand-text mb-1">{model.title}</h4>
                      <p className="text-brand-text-muted text-sm">{model.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-12 text-center">Why Enterprises Choose Callvia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { stat: '50+', label: 'Enterprise Clients', desc: 'Leading brands across industries' },
              { stat: '10M+', label: 'Calls/Month', desc: 'Processing high-volume traffic reliably' },
              { stat: '99.95%', label: 'Uptime SLA', desc: 'Backed by service credits guarantee' },
              { stat: '<100ms', label: 'Average Latency', desc: 'Premium voice quality on private trunks' },
            ].map((item, i) => (
              <div key={i} className="bg-brand-surface border border-brand-border hover:border-brand-border-light transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover rounded-xl p-8 text-center">
                <div className="text-5xl font-heading font-bold text-brand-accent mb-2">{item.stat}</div>
                <div className="text-xl font-heading font-semibold text-brand-text mb-2">{item.label}</div>
                <p className="text-brand-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-6">
            Ready for Enterprise-Grade Telecom?
          </h2>
          <p className="text-xl text-brand-text-muted mb-8">
            Talk to our enterprise solutions team about your requirements
          </p>
          <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-200">
            Schedule Enterprise Demo <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default EnterprisesSolutionPage;
