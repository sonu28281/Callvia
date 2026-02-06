import React from 'react';
import { ArrowRight, Check, Building2, Shield, Headphones, Zap, Lock, Globe, BarChart3, Users, Cloud, Server } from 'lucide-react';
import { AnimatedBackground } from '../../components/sections/AnimatedBackground.jsx';

export function EnterprisesSolutionPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden pt-32 pb-32 bg-gradient-to-br from-indigo-400 via-blue-400 to-violet-500">
        <div className="absolute inset-0 opacity-70">
          <svg className="absolute bottom-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{height: '100%'}}>
            <path fill="rgba(255, 255, 255, 0.2)" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              <animate attributeName="d" dur="8s" repeatCount="indefinite" values="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,122.7C672,107,768,117,864,138.7C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
            </path>
            <path fill="rgba(255, 255, 255, 0.15)" d="M0,160L48,165.3C96,171,192,181,288,181.3C384,181,480,171,576,165.3C672,160,768,160,864,165.3C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              <animate attributeName="d" dur="12s" repeatCount="indefinite" values="M0,160L48,165.3C96,171,192,181,288,181.3C384,181,480,171,576,165.3C672,160,768,160,864,165.3C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,192L48,186.7C96,181,192,171,288,170.7C384,171,480,181,576,186.7C672,192,768,192,864,186.7C960,181,1056,171,1152,170.7C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,160L48,165.3C96,171,192,181,288,181.3C384,181,480,171,576,165.3C672,160,768,160,864,165.3C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
            </path>
            <path fill="rgba(255, 255, 255, 0.1)" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              <animate attributeName="d" dur="6s" repeatCount="indefinite" values="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,192L48,202.7C96,213,192,235,288,234.7C384,235,480,213,576,202.7C672,192,768,192,864,202.7C960,213,1056,235,1152,234.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
            </path>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold mb-6">
              ENTERPRISE SOLUTIONS
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Enterprise-Grade Telecom Infrastructure
            </h1>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              Scalable, secure, and compliant telephony platform for large enterprises. Dedicated support, SLA guarantees, and complete control.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-900 to-indigo-800 hover:from-indigo-950 hover:to-indigo-900 text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg">
                Schedule Consultation <ArrowRight size={20} />
              </button>
              <button className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Enterprise-Grade Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Security & Compliance', desc: 'SOC 2 Type II, ISO 27001, GDPR compliant. Encrypted call recordings, secure API access.' },
              { icon: Zap, title: '99.95% Uptime SLA', desc: 'Carrier-grade infrastructure with geo-redundancy. Active-active failover for zero downtime.' },
              { icon: Headphones, title: 'Dedicated Support', desc: 'Named account manager, priority ticket queue, 24/7 enterprise support with <15min response.' },
              { icon: Lock, title: 'Advanced Access Control', desc: 'SSO with SAML 2.0, RBAC, MFA, IP whitelisting, custom audit logs for compliance.' },
              { icon: BarChart3, title: 'Custom Reporting', desc: 'Scheduled reports, custom KPIs, data warehouse integration, real-time BI dashboards.' },
              { icon: Globe, title: 'Multi-Location Support', desc: 'Unified platform for multiple offices, branch calling, location-based routing.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-900 transition-all hover:shadow-lg">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <item.icon size={32} className="text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Enterprise Use Cases</h2>
              <p className="text-lg text-gray-600 mb-8">
                Trusted by leading enterprises across BFSI, healthcare, e-commerce, and logistics sectors.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Customer Service Centers', desc: 'Inbound IVR, intelligent routing, call recording, quality monitoring for 500+ seat centers' },
                  { title: 'Sales & Lead Management', desc: 'Click-to-call from CRM, automatic lead distribution, call tracking, conversion analytics' },
                  { title: 'Branch Connectivity', desc: 'EPABX replacement with cloud PBX, inter-branch calling, unified number plans' },
                  { title: 'OTP & Alerts', desc: 'High-volume transactional SMS, OTP delivery, WhatsApp Business API, voice alerts' },
                ].map((useCase, i) => (
                  <div key={i} className="flex gap-4 items-start bg-blue-50 p-6 rounded-xl">
                    <Check size={24} className="text-blue-900 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{useCase.title}</h3>
                      <p className="text-gray-600 text-sm">{useCase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-12 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Deployment Models</h3>
              <div className="space-y-6">
                {[
                  { icon: Cloud, title: 'Cloud-Hosted', desc: 'Fully managed by Callvia. Quick setup, zero maintenance.' },
                  { icon: Server, title: 'On-Premises', desc: 'Deployed in your data center. Complete data sovereignty.' },
                  { icon: Building2, title: 'Hybrid', desc: 'Cloud+on-prem mix. Disaster recovery built-in.' },
                ].map((model, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-blue-100 rounded-lg p-3 h-fit">
                      <model.icon size={24} className="text-blue-900" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{model.title}</h4>
                      <p className="text-gray-600 text-sm">{model.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Enterprises Choose Callvia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { stat: '50+', label: 'Enterprise Clients', desc: 'Leading brands across industries' },
              { stat: '10M+', label: 'Calls/Month', desc: 'Processing high-volume traffic reliably' },
              { stat: '99.95%', label: 'Uptime SLA', desc: 'Backed by service credits guarantee' },
              { stat: '<100ms', label: 'Average Latency', desc: 'Premium voice quality on private trunks' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-8 border border-gray-200 text-center">
                <div className="text-5xl font-bold text-blue-900 mb-2">{item.stat}</div>
                <div className="text-xl font-bold text-gray-900 mb-2">{item.label}</div>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-indigo-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for Enterprise-Grade Telecom?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Talk to our enterprise solutions team about your requirements
          </p>
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
            Schedule Enterprise Demo <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default EnterprisesSolutionPage;