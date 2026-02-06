import React from 'react';
import { ArrowRight, Check, Activity, Bell, Shield, BarChart3, Settings, Eye, AlertTriangle, Clock, Users, Lock } from 'lucide-react';
import { AnimatedBackground } from '../../components/sections/AnimatedBackground.jsx';

export function ControlsPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden pt-32 pb-32 bg-gradient-to-br from-sky-400 via-cyan-400 to-teal-500">
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
            <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-bold mb-6">
              REAL-TIME MONITORING
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Complete Control & Visibility
            </h1>
            <p className="text-xl text-teal-100 mb-8 leading-relaxed">
              Real-time dashboards, intelligent alerts, and granular access controls. Monitor call quality, system health, and compliance in one unified platform.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-gradient-to-r from-teal-900 to-teal-800 hover:from-teal-950 hover:to-teal-900 text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg">
                View Live Demo <ArrowRight size={20} />
              </button>
              <button className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                Request Access
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring Features */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Real-Time Monitoring Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Activity, title: 'Live Call Monitoring', desc: 'Monitor active calls in real-time. See concurrent calls, ASR, ACD metrics instantly.' },
              { icon: BarChart3, title: 'Performance Analytics', desc: 'Track KPIs like ASR, ACD, PDD. Identify trends and optimize routing.' },
              { icon: Eye, title: 'Call Quality Metrics', desc: 'Monitor jitter, latency, packet loss. Get MOS scores for voice quality.' },
              { icon: Shield, title: 'Fraud Detection', desc: 'Real-time fraud pattern detection. Block suspicious numbers automatically.' },
              { icon: Clock, title: 'System Health', desc: 'Server uptime, trunk status, API health. Get alerts before issues impact customers.' },
              { icon: Users, title: 'User Activity Logs', desc: 'Complete audit trail of all user actions. Track who made what changes when.' },
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

      {/* Alert System */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Intelligent Alert System</h2>
              <p className="text-lg text-gray-600 mb-8">
                Stay ahead of issues with customizable alerts delivered via email, SMS, WhatsApp, or webhook.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Bell, title: 'Custom Thresholds', desc: 'Set alerts for call volume spikes, low ASR, high latency, wallet balance' },
                  { icon: AlertTriangle, title: 'Anomaly Detection', desc: 'ML-based detection of unusual patterns, traffic spikes, fraud attempts' },
                  { icon: Settings, title: 'Multi-Channel Alerts', desc: 'Receive alerts via email, SMS, WhatsApp, Slack, or custom webhook' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
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
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Access Control & Security</h3>
              <ul className="space-y-4">
                {[
                  'Role-based access control (RBAC)',
                  'Multi-factor authentication (MFA)',
                  'IP whitelisting for API access',
                  'Session timeout controls',
                  'Audit logs for all user actions',
                  'Granular permission management',
                  'SSO integration (SAML 2.0)',
                  'API key rotation policies',
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Lock size={20} className="text-blue-900 flex-shrink-0 mt-1" />
                    <span className="text-gray-900">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Reporting */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Compliance & Reporting</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: 'TRAI Compliance Reports', 
                desc: 'Auto-generated reports for TRAI submissions. Track DND violations, call drops, KYC compliance.' 
              },
              { 
                title: 'Call Recording Management', 
                desc: 'Secure encrypted storage. Retention policies. Quick search and playback from dashboard.' 
              },
              { 
                title: 'DND Scrubbing Logs', 
                desc: 'Real-time DND checking logs. Proof of compliance with TRAI DND regulations.' 
              },
              { 
                title: 'SLA Performance Tracking', 
                desc: 'Track uptime SLA, call quality SLA. Generate monthly reports for internal review.' 
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-8 border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <Shield size={28} className="text-blue-900" />
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-teal-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Take Control of Your Telecom Infrastructure
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get complete visibility with our real-time monitoring dashboard
          </p>
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
            Schedule Platform Demo <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default ControlsPage;