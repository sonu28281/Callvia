import React, { useState } from 'react';
import { Users, TrendingUp, Globe, ArrowRight, Check } from 'lucide-react';

export default function Partnership() {
  const [selectedTab, setSelectedTab] = useState('overview');

  const partnershipTypes = [
    {
      id: 'reseller',
      title: 'Reseller Partner',
      icon: TrendingUp,
      description: 'Resell Callvia solutions to your customers and grow your revenue',
      benefits: [
        'Attractive reseller margins (up to 25%)',
        'Dedicated partner support team',
        'Custom branding options',
        'Marketing & sales collateral',
        'Regular training & product updates',
        'Tiered commission structure',
        'Partner portal access',
      ],
      requirements: [
        'Active business with customer base',
        'Sales experience in B2B space',
        'Commitment to customer support',
        'Marketing budget for go-to-market',
      ],
    },
    {
      id: 'integrator',
      title: 'System Integrator',
      icon: Globe,
      description: 'Integrate Callvia APIs into your solutions and services',
      benefits: [
        'Revenue share on integrated services',
        'Co-marketing opportunities',
        'Priority API support',
        'Technical enablement programs',
        'Integration certification',
        'Partner listing on our marketplace',
      ],
      requirements: [
        'Technical development capability',
        'Integration experience with telecom APIs',
        'Customer support infrastructure',
        'Compliance with our security standards',
      ],
    },
    {
      id: 'technology',
      title: 'Technology Partner',
      icon: Users,
      description: 'Integrate your technology with Callvia for enhanced value',
      benefits: [
        'Joint go-to-market opportunities',
        'Revenue sharing arrangements',
        'Co-branded solutions',
        'Market exposure to our customers',
        'Technical collaboration',
        'Joint case studies & testimonials',
      ],
      requirements: [
        'Complementary technology/service',
        'Established market presence',
        'Commitment to joint success',
        'API documentation & technical readiness',
      ],
    },
  ];

  const selectedPartnership = partnershipTypes.find(p => p.id === selectedTab);

  return (
    <div className="bg-brand-dark">
      {/* Hero Section */}
      <section className="relative bg-brand-dark-light text-brand-text px-6 py-20 border-b border-brand-border overflow-hidden">
        {/* Routing lines decoration */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="routing-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M0 16h32M16 0v32" stroke="currentColor" strokeWidth="0.5" className="text-brand-accent" fill="none" opacity="0.1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#routing-grid)"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-surface border border-brand-border px-4 py-2 rounded-full mb-6 text-sm">
              <Users size={16} />
              Strategic Partnerships
            </div>
            <h1 className="text-5xl lg:text-6xl font-heading font-semibold leading-tight mb-6">
              Enterprise-Grade Partnerships for
              <span className="text-brand-text-muted"> mission-critical telecom</span>
            </h1>
            <p className="text-lg text-brand-text-muted leading-relaxed mb-8">
              Callvia powers inbound and outbound operations with carrier-grade infrastructure, compliance-ready
              call flows, and real-time monitoring. Partner with a platform built for scale, reliability, and
              regulated industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('programs').scrollIntoView({ behavior: 'smooth' })}
                className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors"
              >
                Book a Demo <ArrowRight size={18} />
              </button>
              <button className="border border-brand-border hover:border-brand-border-light text-brand-text px-6 py-3 rounded-lg font-semibold transition-all duration-200">
                View Pricing
              </button>
            </div>
          </div>
          <div className="bg-brand-surface border border-brand-border rounded-2xl p-6 shadow-card">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-sm text-brand-text-muted">Live Operations Overview</div>
                <div className="text-lg font-heading font-semibold text-brand-text">Callvia Partner Console</div>
              </div>
              <div className="text-xs text-brand-text-muted">Updated 2 min ago</div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { label: 'Concurrent Calls', value: '2,840' },
                { label: 'SLA Compliance', value: '99.98%' },
                { label: 'Active Agents', value: '412' },
              ].map((item) => (
                <div key={item.label} className="bg-brand-dark border border-brand-border rounded-xl p-4">
                  <div className="text-xs text-brand-text-muted mb-1">{item.label}</div>
                  <div className="text-lg font-heading font-semibold text-brand-text">{item.value}</div>
                </div>
              ))}
            </div>
            <div className="bg-brand-dark border border-brand-border rounded-xl p-4 mb-4">
              <div className="text-xs text-brand-text-muted mb-3">Call Volume (last 24h)</div>
              <div className="grid grid-cols-12 gap-1 items-end h-20">
                {[18, 26, 20, 32, 28, 42, 36, 40, 30, 44, 38, 46].map((h, i) => (
                  <div key={i} className="bg-brand-accent/60 rounded" style={{ height: `${h}px` }} />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-brand-dark border border-brand-border rounded-xl p-4">
                <div className="text-xs text-brand-text-muted mb-2">Queue Health</div>
                <div className="text-sm text-brand-text">Avg. Wait Time: 8s</div>
              </div>
              <div className="bg-brand-dark border border-brand-border rounded-xl p-4">
                <div className="text-xs text-brand-text-muted mb-2">Quality Monitoring</div>
                <div className="text-sm text-brand-text">Compliance: 100%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Programs */}
      <section id="programs" className="py-20 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-semibold text-brand-text mb-4">Partnership Programs</h2>
            <p className="text-brand-text-muted max-w-2xl mx-auto text-lg">
              Choose the partnership model that best fits your business
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-4 mb-12 overflow-x-auto pb-4 justify-center flex-wrap">
            {partnershipTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedTab(type.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap flex items-center gap-2 border ${
                    selectedTab === type.id
                      ? 'bg-brand-accent text-brand-dark border-brand-accent'
                      : 'bg-brand-surface text-brand-text border-brand-border hover:border-brand-border-light'
                  }`}
                >
                  <IconComponent size={20} />
                  {type.title}
                </button>
              );
            })}
          </div>

          {/* Selected Partnership Details */}
          {selectedPartnership && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-brand-surface p-8 rounded-xl border border-brand-border shadow-card">
                <h3 className="text-3xl font-heading font-semibold text-brand-text mb-4">{selectedPartnership.title}</h3>
                <p className="text-brand-text-muted text-lg mb-8">{selectedPartnership.description}</p>
                
                <h4 className="text-xl font-heading font-semibold text-brand-text mb-4">Key Benefits</h4>
                <ul className="space-y-3 mb-8">
                  {selectedPartnership.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex gap-3">
                      <Check size={20} className="text-brand-accent flex-shrink-0 mt-0.5" />
                      <span className="text-brand-text-muted">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-brand-accent hover:bg-brand-accent-hover text-brand-dark py-3 rounded-lg font-semibold transition-colors">
                  Become a Partner
                </button>
              </div>

              <div className="space-y-8">
                <div className="bg-brand-surface p-8 rounded-xl border border-brand-border shadow-card">
                  <h4 className="text-xl font-heading font-semibold text-brand-text mb-4">Requirements</h4>
                  <ul className="space-y-3">
                    {selectedPartnership.requirements.map((req, idx) => (
                      <li key={idx} className="flex gap-3">
                        <Check size={20} className="text-brand-accent flex-shrink-0 mt-0.5" />
                        <span className="text-brand-text-muted">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-brand-dark-light text-brand-text p-8 rounded-xl border border-brand-border">
                  <h4 className="text-xl font-heading font-semibold mb-4">Ready to Partner?</h4>
                  <p className="mb-6 text-brand-text-muted">Let's discuss how we can grow together and create value for your customers.</p>
                  <a
                    href="mailto:partners@callvia.com?subject=Partnership Inquiry - Callvia"
                    className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-6 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Contact Our Partner Team
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Partner Success Stories */}
      <section className="py-20 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-semibold text-brand-text mb-4">Why Our Partners Trust Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: '500+',
                label: 'Active Partners',
                description: 'Resellers, integrators, and technology partners worldwide',
              },
              {
                metric: '40%',
                label: 'Average Revenue Growth',
                description: 'Year-on-year growth for our partner ecosystem',
              },
              {
                metric: '24/7',
                label: 'Partner Support',
                description: 'Dedicated support team available around the clock',
              },
            ].map((stat, idx) => (
              <div key={idx} className="bg-brand-surface p-8 rounded-xl border border-brand-border text-center shadow-card">
                <div className="text-4xl font-heading font-semibold text-brand-accent mb-2">{stat.metric}</div>
                <h3 className="text-xl font-heading font-semibold text-brand-text mb-2">{stat.label}</h3>
                <p className="text-brand-text-muted">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-semibold text-brand-text mb-4">Partnership Journey</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Application',
                description: 'Submit your partnership application',
              },
              {
                step: '2',
                title: 'Evaluation',
                description: 'Our team reviews and discusses opportunity',
              },
              {
                step: '3',
                title: 'Onboarding',
                description: 'Training, tools, and resources provided',
              },
              {
                step: '4',
                title: 'Growth',
                description: 'Scale together with support & incentives',
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-brand-surface border border-brand-border p-8 rounded-xl text-center shadow-card hover:border-brand-border-light transition-all duration-200">
                  <div className="text-4xl font-heading font-semibold text-brand-accent mb-3">{item.step}</div>
                  <h3 className="text-xl font-heading font-semibold text-brand-text mb-2">{item.title}</h3>
                  <p className="text-brand-text-muted">{item.description}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight size={24} className="text-brand-border" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-brand-dark-light border-t border-brand-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-semibold text-brand-text mb-4">Let's Build Something Great Together</h2>
          <p className="text-xl text-brand-text-muted mb-8">
            Join hundreds of successful partners who are growing with Callvia
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="mailto:partners@callvia.com?subject=Partnership Inquiry - Callvia"
              className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Your Partnership
            </a>
            <button className="border border-brand-border hover:border-brand-border-light text-brand-text px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Download Partnership Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
