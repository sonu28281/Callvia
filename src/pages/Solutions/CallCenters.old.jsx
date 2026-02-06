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
    <div>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeInUp 0.8s ease-out forwards; }
      `}</style>
      <section className="relative overflow-hidden pt-16 pb-12 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500">
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
            <div className="inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full mb-6 fade-up">
              <Headphones size={18} className="text-emerald-800" />
              <span className="text-sm font-semibold text-emerald-900">Call Center Solutions</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight fade-up" style={{animationDelay: '0.1s'}}>
              Professional Call Center Stack
              <span className="text-emerald-50"> built for scale</span>
            </h1>
            <p className="text-lg text-emerald-50/90 mb-6 leading-relaxed fade-up" style={{animationDelay: '0.2s'}}>
              Unify inbound, outbound, and digital conversations on a single platform with enterprise-grade
              reliability, real-time analytics, and automated quality controls.
            </p>
            <div className="flex gap-4 justify-center flex-wrap fade-up" style={{animationDelay: '0.3s'}}>
              <button className="bg-emerald-900 hover:bg-emerald-950 text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg">
                Schedule Consultation <ArrowRight size={20} />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">
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
              <div key={stat.label} className="bg-white/90 backdrop-blur rounded-xl p-3 border border-white/40 text-center">
                <div className="text-2xl font-bold text-emerald-900">{stat.value}</div>
                <div className="text-sm text-emerald-900/80">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 max-w-5xl mx-auto text-sm text-emerald-50/90">
            {[
              { icon: ShieldCheck, text: 'Secure call recording & role-based access' },
              { icon: Clock, text: 'WFM + SLA dashboards in real time' },
              { icon: Gauge, text: 'Auto-scale trunks and dialer capacity' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex items-center gap-3 rounded-2xl bg-white/15 border border-white/20 px-4 py-2">
                  <span className="w-9 h-9 rounded-full bg-white/25 flex items-center justify-center">
                    <Icon size={16} className="text-white motion-safe:animate-pulse" />
                  </span>
                  <span className="text-emerald-50/90">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Capabilities built for modern centers</h2>
            <p className="text-gray-600">
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
                <div key={i} className="group p-6 border border-emerald-100/70 rounded-3xl bg-white/80 backdrop-blur shadow-[0_20px_50px_rgba(8,112,84,0.15)] hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(8,112,84,0.25)] transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-100 to-cyan-100 flex items-center justify-center mb-4 shadow-inner">
                    <Icon size={28} className="text-emerald-900 group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Designed for operational excellence</h2>
            <p className="text-gray-600 mb-6">
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
                  <div key={item.title} className="flex gap-4 items-start rounded-2xl bg-white/80 border border-slate-200/70 shadow-sm hover:shadow-md transition-all p-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-cyan-100 flex items-center justify-center">
                      <Icon size={22} className="text-emerald-900 motion-safe:animate-pulse" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white border border-emerald-700/40 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-xl font-semibold mb-6">How Callvia improves KPIs</h3>
            <div className="space-y-5">
              {[
                { icon: Zap, title: 'Lower AHT', value: '18% faster', desc: 'Automated wrap-ups and AI summaries.' },
                { icon: Globe, title: 'Higher CSAT', value: '+23% lift', desc: 'Consistent handling and QA scoring.' },
                { icon: Clock, title: 'Better SLA', value: '95%+ met', desc: 'Priority queues and overflow routing.' },
                { icon: Gauge, title: 'Agent productivity', value: '+31%', desc: 'Smarter dialers and real-time coaching.' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-white/15 border border-white/20 flex items-center justify-center">
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-white">{item.title}</span>
                        <span className="text-emerald-200 font-semibold">{item.value}</span>
                      </div>
                      <p className="text-sm text-emerald-100/80">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Use cases that drive revenue</h2>
            <p className="text-gray-600">
              Whether you run a BPO, a large enterprise service desk, or a high-velocity sales team, Callvia
              adapts to your workflows and compliance needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Headphones,
                title: 'Customer Support Centers',
                desc: 'Multi-level IVR, smart routing, and SLA dashboards for faster resolutions.',
              },
              {
                icon: PhoneCall,
                title: 'Sales & Collections',
                desc: 'Predictive dialing, consent management, and scripted coaching workflows.',
              },
              {
                icon: Users,
                title: 'Distributed BPO Teams',
                desc: 'Secure access, location-based routing, and quality monitoring at scale.',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="group p-6 rounded-3xl border border-emerald-100/70 bg-white/80 backdrop-blur shadow-[0_20px_50px_rgba(8,112,84,0.15)] hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(8,112,84,0.25)] transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-cyan-100 flex items-center justify-center mb-4 shadow-inner">
                    <Icon size={24} className="text-emerald-900 group-hover:animate-bounce" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Secure, compliant, and reliable</h2>
            <p className="text-gray-600 mb-6">
              Protect sensitive data and maintain compliance with built-in security controls, audit trails, and
              privacy-friendly call flows designed for regulated industries.
            </p>
            <div className="space-y-4">
              {[
                'Encrypted recordings with role-based access and retention rules',
                'PCI-aware IVR and dynamic data masking for payments',
                'SIP trunk redundancy with auto-failover routing',
                'Audit-ready logs with supervisor approvals',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-gray-700 rounded-2xl bg-white/80 border border-slate-200/70 shadow-sm p-4">
                  <CheckCircle2 size={18} className="text-emerald-700 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-xl font-semibold mb-4">Implementation roadmap</h3>
            <div className="space-y-5">
              {[
                { icon: Workflow, title: 'Discovery & design', desc: 'Map call flows, teams, SLAs, and compliance needs.' },
                { icon: Settings, title: 'Build & integrate', desc: 'Connect CRM, ticketing, and analytics in weeks.' },
                { icon: Users, title: 'Pilot & train', desc: 'Run a controlled pilot and certify supervisors.' },
                { icon: TrendingUp, title: 'Scale & optimize', desc: 'Expand teams with live QA and coaching.' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-white/15 border border-white/20 flex items-center justify-center">
                      <Icon size={20} className="text-white motion-safe:animate-pulse" />
                    </div>
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <p className="text-sm text-white/80">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto text-center bg-white/90 border border-emerald-100 rounded-3xl p-10 shadow-[0_25px_60px_rgba(8,112,84,0.2)]">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to scale your call center?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a tailored walkthrough and see how Callvia handles your call volumes, compliance rules, and
            performance targets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-900 text-white px-8 py-3 rounded-lg font-semibold cursor-pointer inline-flex items-center gap-2 hover:bg-emerald-950 transition-colors">
              Contact Sales <ArrowRight size={18} />
            </button>
            <button className="border border-emerald-900 text-emerald-900 px-8 py-3 rounded-lg font-semibold cursor-pointer inline-flex items-center gap-2 hover:bg-emerald-50 transition-colors">
              Request Pricing <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CallCentersSolutionPage;