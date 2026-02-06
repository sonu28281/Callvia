import React from 'react';
import {
  ArrowRight,
  Headphones,
  BarChart3,
  Users,
  PhoneCall,
  ShieldCheck,
  Clock,
  Zap,
  CheckCircle2,
  Settings,
  TrendingUp,
  Layers,
  MessageSquare,
  Globe,
  Workflow,
  Gauge,
} from 'lucide-react';

export function CallCentersSolutionPage() {
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
            <div className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent px-4 py-2 rounded-full mb-6">
              <Headphones size={18} />
              <span className="text-sm font-semibold">Call Center Solutions</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-brand-text mb-5 leading-tight">
              Professional Call Center Stack
              <span className="text-brand-text-muted"> built for scale</span>
            </h1>
            <p className="text-lg text-brand-text-muted mb-6 leading-relaxed">
              Unify inbound, outbound, and digital conversations on a single platform with enterprise-grade
              reliability, real-time analytics, and automated quality controls.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-200">
                Schedule Consultation <ArrowRight size={20} />
              </button>
              <button className="border-2 border-brand-border text-brand-text hover:bg-brand-surface px-8 py-3 rounded-lg font-semibold transition-all duration-200">
                View Platform Demo
              </button>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { label: 'Concurrent Agents', value: '5,000+' },
              { label: 'Avg. Answer Time', value: '< 4 sec' },
              { label: 'Call Recording', value: '100%' },
              { label: 'CSAT Lift', value: '23%' },
            ].map((stat) => (
              <div key={stat.label} className="bg-brand-surface border border-brand-border rounded-xl p-3 text-center shadow-card">
                <div className="text-2xl font-heading font-bold text-brand-accent">{stat.value}</div>
                <div className="text-sm text-brand-text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 max-w-5xl mx-auto text-sm">
            {[
              { icon: ShieldCheck, text: 'Secure call recording & role-based access' },
              { icon: Clock, text: 'WFM + SLA dashboards in real time' },
              { icon: Gauge, text: 'Auto-scale trunks and dialer capacity' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex items-center gap-3 rounded-xl bg-brand-surface border border-brand-border px-4 py-2">
                  <span className="w-9 h-9 rounded-full bg-brand-accent/10 flex items-center justify-center">
                    <Icon size={16} className="text-brand-accent" />
                  </span>
                  <span className="text-brand-text-muted">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-bold text-brand-text mb-4">Capabilities built for modern centers</h2>
            <p className="text-brand-text-muted">
              From predictive dialers to omnichannel queues, Callvia delivers the tools teams need to hit SLAs,
              reduce handle time, and improve agent performance — without complex integrations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: PhoneCall,
                title: 'Smart Inbound Routing',
                desc: 'Skill-based queues, IVR journeys, and priority routing that keep wait times low.',
              },
              {
                icon: TrendingUp,
                title: 'Outbound Acceleration',
                desc: 'Progressive and predictive dialers with compliance guardrails and auto-dispositioning.',
              },
              {
                icon: BarChart3,
                title: 'Live Performance Analytics',
                desc: 'Agent productivity, SLA adherence, and QA insights in a single real-time dashboard.',
              },
              {
                icon: MessageSquare,
                title: 'Omnichannel Engagement',
                desc: 'Voice + WhatsApp + SMS workflows with unified customer timelines.',
              },
              {
                icon: Workflow,
                title: 'Workflow Automation',
                desc: 'Automated call wraps, CRM updates, and ticket creation to cut AHT.',
              },
              {
                icon: ShieldCheck,
                title: 'Compliance & Security',
                desc: 'PCI-aware call flows, masking, encryption, and audit-ready logs.',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-brand-surface border border-brand-border hover:border-brand-border-light transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover rounded-xl p-6">
                  <div className="w-14 h-14 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent rounded-lg flex items-center justify-center mb-4">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-brand-text mb-2">{item.title}</h3>
                  <p className="text-brand-text-muted">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Operational Excellence Section */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-heading font-bold text-brand-text mb-4">Designed for operational excellence</h2>
            <p className="text-brand-text-muted mb-6">
              Deliver consistent service across shifts, locations, and departments with standardized playbooks,
              automated QA, and built-in coaching tools. Keep supervisors in control while agents focus on
              customer outcomes.
            </p>
            <div className="space-y-4">
              {[
                {
                  icon: Users,
                  title: 'Team-based routing & permissions',
                  desc: 'Set granular access levels, queue rules, and escalation trees per team.',
                },
                {
                  icon: Layers,
                  title: 'Unified customer timeline',
                  desc: 'Every call, message, and disposition in one profile for faster resolution.',
                },
                {
                  icon: Settings,
                  title: 'Rapid configuration',
                  desc: 'Launch new campaigns and IVRs in minutes with drag-and-drop workflows.',
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-brand-surface border border-brand-border rounded-xl p-4 flex gap-4 items-start">
                    <div className="w-12 h-12 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-brand-text">{item.title}</h3>
                      <p className="text-brand-text-muted text-sm">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-12 shadow-card">
            <h3 className="text-2xl font-heading font-bold text-brand-text mb-8">Enterprise Features</h3>
            <ul className="space-y-4">
              {[
                'Multi-location queue management',
                'Real-time wallboards & dashboards',
                'Advanced call recording with search',
                'Quality assurance scorecards',
                'Workforce management integration',
                'CRM & helpdesk connectors',
                'Custom reporting & data exports',
                '99.95% uptime SLA guarantee',
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-brand-accent flex-shrink-0 mt-1" />
                  <span className="text-brand-text">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-brand-text mb-12 text-center">Trusted by leading call centers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { stat: '5,000+', label: 'Concurrent Agents', desc: 'Capacity per deployment' },
              { stat: '99.95%', label: 'Platform Uptime', desc: 'SLA-backed reliability' },
              { stat: '< 100ms', label: 'Call Latency', desc: 'Premium voice quality' },
              { stat: '24/7', label: 'Expert Support', desc: 'Dedicated success team' },
            ].map((item, i) => (
              <div key={i} className="bg-brand-surface border border-brand-border rounded-xl p-8 text-center shadow-card">
                <div className="text-4xl font-heading font-bold text-brand-accent mb-2">{item.stat}</div>
                <div className="text-lg font-heading font-semibold text-brand-text mb-2">{item.label}</div>
                <p className="text-sm text-brand-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-6">
            Ready to modernize your call center?
          </h2>
          <p className="text-xl text-brand-text-muted mb-8">
            Schedule a demo to see how Callvia powers high-performance contact centers
          </p>
          <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-200">
            Book Your Demo <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default CallCentersSolutionPage;
