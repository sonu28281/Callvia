import React from 'react';
import { ArrowRight, Check, Activity, Bell, Shield, BarChart3, Settings, Eye, AlertTriangle, Clock, Users, Lock } from 'lucide-react';

export function ControlsPage() {
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
              REAL-TIME MONITORING
            </div>
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-brand-text mb-6 leading-tight">
              Complete Control & Visibility
            </h1>
            <p className="text-xl text-brand-text-muted mb-8 leading-relaxed">
              Real-time dashboards, intelligent alerts, and granular access controls. Monitor call quality, system health, and compliance in one unified platform.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-200">
                View Live Demo <ArrowRight size={20} />
              </button>
              <button className="border-2 border-brand-border text-brand-text hover:bg-brand-surface px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                Request Access
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring Features */}
      <section className="py-20 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-12 text-center">Real-Time Monitoring Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Activity, title: 'Live Call Monitoring', desc: 'Monitor active calls in real-time. See concurrent calls, ASR, ACD metrics instantly.' },
              { icon: BarChart3, title: 'Performance Analytics', desc: 'Track KPIs like ASR, ACD, PDD. Identify trends and optimize routing.' },
              { icon: Eye, title: 'Call Quality Metrics', desc: 'Monitor jitter, latency, packet loss. Get MOS scores for voice quality.' },
              { icon: Shield, title: 'Fraud Detection', desc: 'Real-time fraud pattern detection. Block suspicious numbers automatically.' },
              { icon: Clock, title: 'System Health', desc: 'Server uptime, trunk status, API health. Get alerts before issues impact customers.' },
              { icon: Users, title: 'User Activity Logs', desc: 'Complete audit trail of all user actions. Track who made what changes when.' },
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

      {/* Alert System */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-brand-text mb-6">Intelligent Alert System</h2>
              <p className="text-lg text-brand-text-muted mb-8">
                Stay ahead of issues with customizable alerts delivered via email, SMS, WhatsApp, or webhook.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Bell, title: 'Custom Thresholds', desc: 'Set alerts for call volume spikes, low ASR, high latency, wallet balance' },
                  { icon: AlertTriangle, title: 'Anomaly Detection', desc: 'ML-based detection of unusual patterns, traffic spikes, fraud attempts' },
                  { icon: Settings, title: 'Multi-Channel Alerts', desc: 'Receive alerts via email, SMS, WhatsApp, Slack, or custom webhook' },
                ].map((item, i) => (
                  <div key={i} className="bg-brand-surface border border-brand-border hover:border-brand-border-light transition-all duration-200 rounded-xl p-6 flex gap-4 items-start">
                    <div className="w-12 h-12 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-brand-text mb-1">{item.title}</h3>
                      <p className="text-brand-text-muted text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-surface border border-brand-border rounded-xl p-12 shadow-card">
              <h3 className="text-2xl font-heading font-bold text-brand-text mb-8">Access Control & Security</h3>
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
                    <Lock size={20} className="text-brand-accent flex-shrink-0 mt-1" />
                    <span className="text-brand-text">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Reporting */}
      <section className="py-20 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-12 text-center">Compliance & Reporting</h2>
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
              <div key={i} className="bg-brand-surface border border-brand-border hover:border-brand-border-light transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Shield size={28} className="text-brand-accent" />
                  <h3 className="text-xl font-heading font-bold text-brand-text">{item.title}</h3>
                </div>
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
            Take Control of Your Telecom Infrastructure
          </h2>
          <p className="text-xl text-brand-text-muted mb-8">
            Get complete visibility with our real-time monitoring dashboard
          </p>
          <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-200">
            Schedule Platform Demo <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default ControlsPage;
