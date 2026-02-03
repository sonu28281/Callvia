import React from 'react';
import { ArrowRight, Check, TrendingUp, Users, Zap, BarChart3, Shield, Headphones, Globe, Award } from 'lucide-react';
import { AnimatedBackground } from '../../components/sections/AnimatedBackground.jsx';

export function ResellerPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden pt-32 pb-32 bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-500">
        <div className="absolute inset-0 opacity-70">
          <svg className="absolute bottom-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{height: '100%'}}>
            <path fill="rgba(255, 255, 255, 0.2)" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              <animate attributeName="d" dur="8s" repeatCount="indefinite" values="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,122.7C672,107,768,117,864,138.7C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
            </path>
            <path fill="rgba(255, 255, 255, 0.15)" d="M0,160L48,165.3C96,171,192,181,288,181.3C384,181,480,171,576,165.3C672,160,768,160,864,165.3C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              <animate attributeName="d" dur="12s" repeatCount="indefinite" values="M0,160L48,165.3C96,171,192,181,288,181.3C384,181,480,171,576,165.3C672,160,768,160,864,165.3C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,192L48,186.7C96,181,192,171,288,170.7C384,171,480,181,576,186.7C672,192,768,192,864,186.7C960,181,1056,171,1152,170.7C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,160L48,165.3C96,171,192,181,288,181.3C384,181,480,171,576,165.3C672,160,768,160,864,165.3C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
            </path>
            <path fill="rgba(255, 255, 255, 0.1)" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              <animate attributeName="d" dur="6s" repeatCount="indefinite" values="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,192L48,202.7C96,213,192,235,288,234.7C384,235,480,213,576,202.7C672,192,768,192,864,202.7C960,213,1056,235,1152,234.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
            </path>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-bold mb-6">
              PARTNER PROGRAM
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Reseller Enablement Program
            </h1>
            <p className="text-xl text-teal-100 mb-8 leading-relaxed">
              Build recurring revenue by reselling Callvia's enterprise telecom services. Get competitive margins, dedicated support, and complete partner enablement.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-gradient-to-r from-teal-900 to-teal-800 hover:from-teal-950 hover:to-teal-900 text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg">
                Apply Now <ArrowRight size={20} />
              </button>
              <button className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                Partner Kit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Tiers */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Partner Tiers & Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                tier: 'Silver Partner', 
                revenue: '₹50K - 2L/month', 
                margin: '15-18%',
                benefits: ['Basic marketing materials', 'Email support', 'Quarterly training', 'Partner portal access']
              },
              { 
                tier: 'Gold Partner', 
                revenue: '₹2L - 10L/month', 
                margin: '18-22%',
                benefits: ['Co-branded materials', 'Priority support', 'Monthly training', 'Lead sharing program', 'Demo accounts'],
                highlight: true
              },
              { 
                tier: 'Platinum Partner', 
                revenue: '₹10L+/month', 
                margin: '22-25%',
                benefits: ['Full white-label option', 'Dedicated manager', 'Custom training', 'Pre-sales support', 'Beta access', 'Revenue guarantees']
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-2xl p-8 border-2 ${item.highlight ? 'border-blue-900 bg-blue-50 shadow-xl' : 'border-gray-200 bg-white'}`}>
                {item.highlight && (
                  <div className="bg-blue-900 text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <Award size={32} className="text-blue-900" />
                  <h3 className="text-2xl font-bold text-gray-900">{item.tier}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-2">Monthly Revenue Target</p>
                <p className="text-lg font-bold text-gray-900 mb-4">{item.revenue}</p>
                <div className="bg-blue-100 rounded-lg p-3 mb-6">
                  <p className="text-sm text-gray-700">Margin:</p>
                  <p className="text-2xl font-bold text-blue-900">{item.margin}</p>
                </div>
                <ul className="space-y-3">
                  {item.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check size={18} className="text-blue-900 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Become a Reseller */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Partner with Callvia?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, title: 'Recurring Revenue', desc: 'Monthly recurring income from customer subscriptions' },
              { icon: Users, title: 'Growing Market', desc: 'Cloud telephony market growing at 25% CAGR in India' },
              { icon: Shield, title: 'Trusted Platform', desc: 'TRAI-approved VNO with carrier-grade infrastructure' },
              { icon: Zap, title: 'Quick Onboarding', desc: 'Get started in days with our partner enablement program' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon size={40} className="text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support & Resources */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Partner Support</h2>
              <p className="text-lg text-gray-600 mb-8">
                We don't just give you a platform—we help you succeed with comprehensive training, resources, and support.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Headphones, title: 'Dedicated Partner Manager', desc: 'Your single point of contact for all partner needs' },
                  { icon: Globe, title: 'Marketing Materials', desc: 'Brochures, presentations, case studies, and digital assets' },
                  { icon: Users, title: 'Sales Training', desc: 'Product training and sales enablement workshops' },
                  { icon: BarChart3, title: 'Performance Dashboard', desc: 'Real-time visibility into sales, commissions, and customers' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 bg-white p-6 rounded-xl border border-gray-200">
                    <div className="bg-blue-100 rounded-lg p-3 h-fit">
                      <item.icon size={24} className="text-blue-900" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-12 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ideal Partner Profile</h3>
              <ul className="space-y-4">
                {[
                  'IT service providers & system integrators',
                  'Existing telecom resellers looking to expand',
                  'Business consultants with SME client base',
                  'Call center operators wanting own infrastructure',
                  'Marketing agencies offering integrated solutions',
                  'Entrepreneurs looking for B2B opportunity',
                ].map((profile, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={20} className="text-blue-900 flex-shrink-0 mt-1" />
                    <span className="text-gray-900">{profile}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-teal-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Reseller Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 50+ successful reseller partners already growing with Callvia
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
              Apply for Partnership <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-colors">
              Schedule Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResellerPage;