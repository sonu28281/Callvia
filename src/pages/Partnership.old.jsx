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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-slate-950 text-slate-100 px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full mb-6 border border-white/10 text-sm">
              <Users size={16} />
              Strategic Partnerships
            </div>
            <h1 className="text-5xl lg:text-6xl font-semibold leading-tight mb-6">
              Enterprise-Grade Partnerships for
              <span className="text-slate-300"> mission-critical telecom</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Callvia powers inbound and outbound operations with carrier-grade infrastructure, compliance-ready
              call flows, and real-time monitoring. Partner with a platform built for scale, reliability, and
              regulated industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('programs').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-slate-200 transition-colors"
              >
                Book a Demo <ArrowRight size={18} />
              </button>
              <button className="border border-slate-500 text-slate-100 px-6 py-3 rounded-lg font-semibold hover:bg-white/5 transition-colors">
                View Pricing
              </button>
            </div>
          </div>
          <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-sm text-slate-400">Live Operations Overview</div>
                <div className="text-lg font-semibold text-slate-100">Callvia Partner Console</div>
              </div>
              <div className="text-xs text-slate-400">Updated 2 min ago</div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { label: 'Concurrent Calls', value: '2,840' },
                { label: 'SLA Compliance', value: '99.98%' },
                { label: 'Active Agents', value: '412' },
              ].map((item) => (
                <div key={item.label} className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                  <div className="text-xs text-slate-500 mb-1">{item.label}</div>
                  <div className="text-lg font-semibold text-slate-100">{item.value}</div>
                </div>
              ))}
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 mb-4">
              <div className="text-xs text-slate-500 mb-3">Call Volume (last 24h)</div>
              <div className="grid grid-cols-12 gap-1 items-end h-20">
                {[18, 26, 20, 32, 28, 42, 36, 40, 30, 44, 38, 46].map((h, i) => (
                  <div key={i} className="bg-slate-600/60 rounded" style={{ height: `${h}px` }} />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                <div className="text-xs text-slate-500 mb-2">Queue Health</div>
                <div className="text-sm text-slate-200">Avg. Wait Time: 8s</div>
              </div>
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                <div className="text-xs text-slate-500 mb-2">Quality Monitoring</div>
                <div className="text-sm text-slate-200">Compliance: 100%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Programs */}
      <section id="programs" className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-slate-900 mb-4">Partnership Programs</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
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
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
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
              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-3xl font-semibold text-slate-900 mb-4">{selectedPartnership.title}</h3>
                <p className="text-slate-600 text-lg mb-8">{selectedPartnership.description}</p>
                
                <h4 className="text-xl font-semibold text-slate-900 mb-4">Key Benefits</h4>
                <ul className="space-y-3 mb-8">
                  {selectedPartnership.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex gap-3">
                      <Check size={20} className="text-slate-700 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-lg font-semibold transition-all">
                  Become a Partner
                </button>
              </div>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                  <h4 className="text-xl font-semibold text-slate-900 mb-4">Requirements</h4>
                  <ul className="space-y-3">
                    {selectedPartnership.requirements.map((req, idx) => (
                      <li key={idx} className="flex gap-3">
                        <Check size={20} className="text-slate-700 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-900 text-white p-8 rounded-xl">
                  <h4 className="text-xl font-semibold mb-4">Ready to Partner?</h4>
                  <p className="mb-6 text-slate-200">Let's discuss how we can grow together and create value for your customers.</p>
                  <a
                    href="mailto:partners@callvia.com?subject=Partnership Inquiry - Callvia"
                    className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-2 rounded-lg font-semibold hover:bg-slate-200 transition-all"
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
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-slate-900 mb-4">Why Our Partners Trust Us</h2>
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
              <div key={idx} className="bg-slate-50 p-8 rounded-xl border border-slate-200 text-center">
                <div className="text-4xl font-semibold text-slate-900 mb-2">{stat.metric}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{stat.label}</h3>
                <p className="text-slate-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-slate-900 mb-4">Partnership Journey</h2>
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
                <div className="bg-white border border-slate-200 text-slate-900 p-8 rounded-xl text-center shadow-sm">
                  <div className="text-4xl font-semibold mb-3">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight size={24} className="text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-4">Let's Build Something Great Together</h2>
          <p className="text-xl text-slate-300 mb-8">
            Join hundreds of successful partners who are growing with Callvia
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="mailto:partners@callvia.com?subject=Partnership Inquiry - Callvia"
              className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-200 transition-colors"
            >
              Start Your Partnership
            </a>
            <button className="border-2 border-slate-500 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-all">
              Download Partnership Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}


