import React, { useState } from 'react';
import { Handshake, TrendingUp, Globe, Users, ArrowRight, Check } from 'lucide-react';

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
      <section className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 flex flex-col justify-center items-center px-6 text-white relative overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-cyan-500/20 px-4 py-2 rounded-full mb-6 border border-cyan-400/30">
            <Handshake size={16} />
            <span className="text-sm">Strategic Partnerships</span>
          </div>
          <h1 className="text-6xl font-bold mb-6">Grow Together with Callvia</h1>
          <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
            Join our partner ecosystem and unlock new revenue streams while delivering enhanced value to your customers
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('programs').scrollIntoView({ behavior: 'smooth' })}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all"
            >
              Explore Programs <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Partnership Programs */}
      <section id="programs" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
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
                  className={`px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                    selectedTab === type.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-200">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedPartnership.title}</h3>
                <p className="text-gray-600 text-lg mb-8">{selectedPartnership.description}</p>
                
                <h4 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h4>
                <ul className="space-y-3 mb-8">
                  {selectedPartnership.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex gap-3">
                      <Check size={20} className="text-cyan-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all">
                  Become a Partner
                </button>
              </div>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-xl border border-gray-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Requirements</h4>
                  <ul className="space-y-3">
                    {selectedPartnership.requirements.map((req, idx) => (
                      <li key={idx} className="flex gap-3">
                        <Check size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-600 text-white p-8 rounded-xl">
                  <h4 className="text-xl font-bold mb-4">Ready to Partner?</h4>
                  <p className="mb-6">Let's discuss how we can grow together and create value for your customers.</p>
                  <a
                    href="mailto:partners@callvia.com?subject=Partnership Inquiry - Callvia"
                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all"
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
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Our Partners Love Us</h2>
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
              <div key={idx} className="bg-white p-8 rounded-xl border border-gray-200 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.metric}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{stat.label}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Journey</h2>
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
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white p-8 rounded-xl text-center">
                  <div className="text-4xl font-bold mb-3">{item.step}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-blue-100">{item.description}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight size={24} className="text-blue-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900 to-cyan-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Build Something Great Together</h2>
          <p className="text-xl text-cyan-100 mb-8">
            Join hundreds of successful partners who are growing with Callvia
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="mailto:partners@callvia.com?subject=Partnership Inquiry - Callvia"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all"
            >
              Start Your Partnership
            </a>
            <button className="border-2 border-cyan-400 hover:bg-cyan-500/20 text-white px-8 py-3 rounded-lg font-semibold transition-all">
              Download Partnership Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
