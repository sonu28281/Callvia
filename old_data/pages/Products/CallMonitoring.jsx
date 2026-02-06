import React from 'react';
import { ArrowRight, Check, Eye, Mic, BarChart3, Play, Shield, Clock, Users, Headphones, Search, Download } from 'lucide-react';

export function CallMonitoringPage() {
  return (
    <div className="bg-brand-dark min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24 bg-brand-dark">
        {/* Routing Lines Decoration */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-accent"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <line x1="0" y1="20%" x2="100%" y2="80%" stroke="currentColor" strokeWidth="1" className="text-brand-accent" opacity="0.3"/>
            <line x1="0" y1="80%" x2="100%" y2="30%" stroke="currentColor" strokeWidth="1" className="text-brand-accent" opacity="0.2"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/20 px-4 py-2 rounded-full mb-6">
                <Eye size={18} className="text-brand-accent" />
                <span className="text-sm font-semibold text-brand-accent">Monitoring & Recording</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-heading font-bold text-brand-text mb-6 leading-tight">
                Call Recording & Quality Monitoring
              </h1>
              <p className="text-xl text-brand-text-muted mb-8 leading-relaxed">
                Automatic call recording, real-time monitoring, quality assurance, and compliance reporting. Secure storage with instant playback and search.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5">
                  Start Monitoring <ArrowRight size={20} />
                </button>
                <button className="border-2 border-brand-border text-brand-text hover:bg-brand-surface px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                  See Demo
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-full w-64 h-64 flex items-center justify-center">
                    <Eye size={100} className="text-brand-accent" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recording Modes */}
      <section className="py-24 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-brand-text mb-4">Flexible Recording Options</h2>
            <p className="text-xl text-brand-text-muted max-w-3xl mx-auto">
              Record all calls or selectively based on your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Mic, title: 'Automatic Recording', desc: 'Record all inbound and outbound calls automatically with no agent intervention required' },
              { icon: Users, title: 'Selective Recording', desc: 'Record specific agents, departments, or call types based on custom rules and triggers' },
              { icon: Shield, title: 'On-Demand Recording', desc: 'Agent-initiated recording for sensitive conversations or compliance requirements' },
            ].map((mode, idx) => (
              <div key={idx} className="bg-brand-surface border border-brand-border hover:border-brand-border-light rounded-xl p-8 transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover">
                <div className="bg-brand-accent/10 border border-brand-accent/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <mode.icon size={32} className="text-brand-accent" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-brand-text mb-3">{mode.title}</h3>
                <p className="text-brand-text-muted leading-relaxed">{mode.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-brand-text mb-4">Complete Quality Assurance Suite</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Eye, title: 'Real-Time Monitoring', desc: 'Listen to live calls, whisper to agents, or barge in when needed for coaching' },
              { icon: Play, title: 'Instant Playback', desc: 'Play back any recorded call instantly with advanced controls and speed adjustment' },
              { icon: Search, title: 'Powerful Search', desc: 'Search recordings by date, agent, customer, duration, or custom tags' },
              { icon: BarChart3, title: 'Quality Scoring', desc: 'Built-in QA scorecards with customizable criteria and agent performance tracking' },
              { icon: Shield, title: 'Compliance Ready', desc: 'Secure encrypted storage with retention policies and regulatory compliance' },
              { icon: Download, title: 'Export & Share', desc: 'Download recordings in multiple formats and share securely with teams' },
            ].map((feature, idx) => (
              <div key={idx} className="bg-brand-surface border border-brand-border hover:border-brand-border-light rounded-xl p-8 transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover">
                <div className="bg-brand-accent/10 border border-brand-accent/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon size={32} className="text-brand-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-brand-text mb-3">{feature.title}</h3>
                <p className="text-brand-text-muted leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring Features */}
      <section className="py-24 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-brand-text mb-6">Advanced Call Monitoring</h2>
              <p className="text-lg text-brand-text-muted mb-8 leading-relaxed">
                Real-time visibility into every conversation with powerful monitoring and coaching tools.
              </p>
              <div className="space-y-4">
                {[
                  'Listen to live calls without interruption (Silent Monitoring)',
                  'Whisper guidance to agents without customer hearing (Coach Mode)',
                  'Join the call for immediate assistance (Barge Mode)',
                  'Real-time agent status and call queue visibility',
                  'Alert notifications for call quality issues',
                  'Supervisor dashboard with live metrics',
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check size={24} className="text-brand-accent flex-shrink-0 mt-1" />
                    <span className="text-lg text-brand-text">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-surface border border-brand-border rounded-xl p-12 shadow-xl">
              <h3 className="text-2xl font-heading font-semibold text-brand-text mb-6">Use Cases</h3>
              <div className="space-y-6">
                {[
                  { icon: Headphones, title: 'Quality Assurance', desc: 'Monitor agent performance and maintain service standards' },
                  { icon: Users, title: 'Training & Coaching', desc: 'Use recordings for new agent training and skill development' },
                  { icon: Shield, title: 'Dispute Resolution', desc: 'Provide proof of conversations for customer disputes' },
                  { icon: Clock, title: 'Compliance Audits', desc: 'Meet regulatory requirements with secure call archives' },
                ].map((useCase, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-lg p-3 h-fit">
                      <useCase.icon size={24} className="text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-heading font-semibold text-brand-text mb-1">{useCase.title}</h4>
                      <p className="text-brand-text-muted text-sm">{useCase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-24 px-6 bg-brand-dark">
        <div className="max-w-5xl mx-auto">
          <div className="bg-brand-surface border border-brand-border rounded-xl shadow-xl p-12">
            <div className="text-center mb-12">
              <Shield size={64} className="text-brand-accent mx-auto mb-4" />
              <h2 className="text-4xl font-heading font-bold text-brand-text mb-4">Enterprise-Grade Security</h2>
              <p className="text-xl text-brand-text-muted">
                Bank-level encryption and compliance-ready infrastructure
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'AES-256 encryption for all recordings',
                'Role-based access control (RBAC)',
                'Automatic retention policy enforcement',
                'Audit logs for all access and actions',
                'TRAI compliance for India operations',
                'Secure cloud storage with redundancy',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-brand-dark border border-brand-border rounded-lg">
                  <Check size={20} className="text-brand-accent flex-shrink-0" />
                  <span className="text-brand-text">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-brand-dark-light border-t border-brand-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-6">
            Ready to Monitor Every Conversation?
          </h2>
          <p className="text-xl text-brand-text-muted mb-8">
            Ensure quality and compliance with complete call recording and monitoring
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-200">
              Start Recording <ArrowRight size={20} />
            </button>
            <button className="border-2 border-brand-border text-brand-text hover:bg-brand-surface px-8 py-4 rounded-lg font-semibold transition-all duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CallMonitoringPage;
