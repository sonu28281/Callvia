import React from 'react';
import { Shield, Zap, Users, Globe, Rocket, TrendingUp, Award, MapPin, CheckCircle2, Target, Lightbulb, Code, Phone, Cpu, Radio, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-50 via-slate-50 to-white border-b border-slate-200 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="waveEdgeFade" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#4f46e5" stopOpacity="0" />
              <stop offset="45%" stopColor="#4f46e5" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.12" />
            </linearGradient>
            <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
            </radialGradient>
          </defs>

          <g opacity="0.12">
            <g stroke="#4f46e5" strokeOpacity="0.35" strokeWidth="1.2" fill="none">
              <animateTransform attributeName="transform" type="translate" values="0 0; 0 -8; 0 0" dur="34s" repeatCount="indefinite" />
              <path d="M0 360 C160 320, 320 420, 480 380 C640 340, 800 460, 960 420 C1080 395, 1160 430, 1200 440" />
              <path d="M0 300 C180 260, 360 360, 540 320 C720 280, 900 400, 1080 360 C1140 345, 1180 370, 1200 380" />
              <path d="M0 420 C160 380, 320 480, 480 440 C640 400, 800 520, 960 480 C1080 455, 1160 490, 1200 500" />
              <path d="M80 240 C60 360, 140 420, 120 540" />
              <path d="M260 220 C240 340, 320 420, 300 560" />
              <path d="M440 220 C420 340, 520 420, 500 560" />
              <path d="M620 220 C600 340, 700 420, 680 560" />
              <path d="M800 240 C780 360, 880 440, 860 560" />
              <path d="M980 240 C960 360, 1060 440, 1040 560" />
            </g>

            <g stroke="#4f46e5" strokeOpacity="0.25" strokeWidth="1" fill="none">
              <animateTransform attributeName="transform" type="translate" values="0 0; 0 -6; 0 0" dur="42s" repeatCount="indefinite" />
              <path d="M0 340 C150 300, 300 400, 450 360 C600 320, 750 440, 900 400 C1020 380, 1120 420, 1200 430" />
              <path d="M0 380 C150 340, 300 440, 450 400 C600 360, 750 480, 900 440 C1020 420, 1120 460, 1200 470" />
            </g>

            <g>
              <animateTransform attributeName="transform" type="translate" values="0 0; 0 -7; 0 0" dur="40s" repeatCount="indefinite" />
              {[
                [120, 360], [220, 340], [320, 380], [420, 360], [520, 340], [620, 380], [720, 360], [820, 400], [920, 380], [1020, 400],
                [140, 420], [260, 410], [360, 430], [480, 410], [600, 400], [720, 430], [840, 440], [960, 420], [1080, 435],
              ].map(([x, y]) => (
                <circle key={`${x}-${y}`} cx={x} cy={y} r="2.2" fill="#4f46e5" fillOpacity="0.18" stroke="#4f46e5" strokeOpacity="0.28" strokeWidth="0.6" />
              ))}
            </g>
          </g>

          <rect width="1200" height="600" fill="url(#waveEdgeFade)" opacity="0.6" />
        </svg>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-600 mb-6">
              Class-B VNO • Carrier-grade • India-focused
            </span>
            <h1 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-6 leading-tight">
              Run enterprise telecom operations with infrastructure built to <span className="text-indigo-600">scale</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Callvia delivers mission-critical calling for inbound and outbound operations with compliant routing,
              real-time monitoring, and enterprise-grade reliability across India.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              {[
                { label: 'Founded', value: '2025' },
                { label: 'Monthly Calls', value: '10M+' },
                { label: 'Uptime SLA', value: '99.99%' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white border border-slate-200 rounded-xl p-4">
                  <div className="text-2xl font-semibold text-slate-900">{stat.value}</div>
                  <div className="text-xs uppercase tracking-wide text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="text-sm text-slate-500 mb-4">Control Center Preview</div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {['Routing Health', 'Compliance Coverage'].map((label) => (
                    <div key={label} className="bg-white border border-slate-200 rounded-lg p-3">
                      <div className="text-[10px] uppercase tracking-wide text-slate-400">{label}</div>
                      <div className="text-lg font-semibold text-slate-800">Stable</div>
                    </div>
                  ))}
                </div>
                <div className="h-24 rounded-lg border border-slate-200 bg-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm font-semibold mb-6">Our Story</span>
              <h2 className="text-4xl font-semibold text-slate-900 mb-6 leading-tight">
                Built by operators, for operators
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Callvia was founded by telecom infrastructure professionals who saw a clear need for domestic-first
                telecom operations in India.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                For years, businesses relied on international routes, resold capacity, and platforms built by SaaS teams. We changed that.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Today, Callvia powers 10M+ calls monthly through TRAI-approved Class-B VNO infrastructure, serving
                call centers, enterprises, and resellers across India with a 99.99% uptime SLA.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-indigo-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">TRAI-approved VNO infrastructure</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-indigo-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Carrier-grade Class-5 switch backend</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-indigo-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Domestic-only, compliant operations</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-12 rounded-2xl border border-slate-200">
              <div className="space-y-8">
                <div className="border-b border-slate-200 pb-8">
                  <p className="text-4xl font-semibold text-slate-900 mb-2">2025</p>
                  <p className="text-lg text-slate-700 font-semibold">Founded</p>
                  <p className="text-slate-600 mt-2">Launched as a TRAI-approved Class-B VNO</p>
                </div>
                <div className="border-b border-slate-200 pb-8">
                  <p className="text-4xl font-semibold text-slate-900 mb-2">10M+</p>
                  <p className="text-lg text-slate-700 font-semibold">Calls managed monthly</p>
                  <p className="text-slate-600 mt-2">Enterprise-scale operations, carrier-grade reliability</p>
                </div>
                <div>
                  <p className="text-4xl font-semibold text-slate-900 mb-2">99.99%</p>
                  <p className="text-lg text-slate-700 font-semibold">Uptime SLA</p>
                  <p className="text-slate-600 mt-2">Backed by enterprise infrastructure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="bg-white p-10 rounded-2xl border border-slate-200">
              <Target size={28} className="text-indigo-600 mb-6" />
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                Empower every business in India with enterprise-grade, compliant telecom infrastructure. We believe voice communication should be controlled, secure, and profitable.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl border border-slate-200">
              <Lightbulb size={28} className="text-indigo-600 mb-6" />
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed">
                To become India's trusted foundation for voice infrastructure. A future where control, compliance, and AI-driven intelligence are standard, not premium features.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl border border-slate-200">
              <Code size={28} className="text-indigo-600 mb-6" />
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Our Promise</h2>
              <p className="text-slate-600 leading-relaxed">
                Carrier-grade reliability. Transparent pricing. Complete control. No grey routes. No international calling. Just honest, compliant telecom built for Indian businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Callvia */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm font-semibold mb-6">Why Callvia</span>
            <h2 className="text-4xl font-semibold text-slate-900 mb-4">What sets us apart</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Built for regulated, high-volume environments with predictable performance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                icon: Rocket,
                title: 'Built by Operators',
                desc: 'Founded by telecom professionals with 15+ years of experience. We understand VNO operations, not theory.'
              },
              {
                icon: TrendingUp,
                title: 'Proven at Scale',
                desc: '10M+ calls monthly. 99.99% uptime SLA. Enterprise infrastructure handling real telecom traffic.'
              },
              {
                icon: Award,
                title: 'India-Centric Support',
                desc: '24/7 support by telecom experts. IST-aligned, understands local regulations and business needs.'
              },
              {
                icon: MapPin,
                title: 'Compliant & Secure',
                desc: 'TRAI-approved VNO. No international routes. ISO 27001 & GDPR compliant. Data stays in India.'
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex gap-6 bg-slate-50 p-8 rounded-2xl border border-slate-200">
                  <div className="w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center flex-shrink-0">
                    <Icon size={24} className="text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values as Separate Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm font-semibold mb-6">Core Values</span>
            <h2 className="text-4xl font-semibold text-slate-900 mb-4">How we operate</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Four principles guide every decision we make</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Shield, 
                title: 'Trust', 
                highlight: 'No Hidden Routes',
                desc: "Complete transparency. You know exactly what you're getting." 
              },
              { 
                icon: Zap, 
                title: 'Control', 
                highlight: 'You Own It',
                desc: 'Full control over infrastructure, routing, and billing. Always.' 
              },
              { 
                icon: Users, 
                title: 'Partnership', 
                highlight: 'Your Success',
                desc: "We grow when you grow. Long-term relationships matter." 
              },
              { 
                icon: Globe, 
                title: 'India First', 
                highlight: 'Built Locally',
                desc: "For India, by India. Compliance and expertise that matters." 
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200">
                  <div className="w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm font-semibold text-slate-600 mb-3">{item.highlight}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Explore Our Products */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm font-semibold mb-6">Product Suite</span>
            <h2 className="text-4xl font-semibold text-slate-900 mb-4">Everything you need</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Enterprise-grade solutions for calling, routing, automation, and monitoring</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Phone, name: 'DID Numbers', path: '/products/did-numbers', desc: 'Pan-India virtual numbers for inbound calls' },
              { icon: Radio, name: 'SIP Trunks', path: '/products/sip-trunks', desc: 'VoIP connectivity and trunk management' },
              { icon: Headphones, name: 'Cloud Call Center', path: '/products/cloud-call-center', desc: 'Inbound & outbound call center platform' },
              { icon: Cpu, name: 'AI Receptionist', path: '/products/ai-receptionist', desc: 'Intelligent call answering and routing' },
              { icon: Zap, name: 'AI Voice Agents', path: '/products/ai-voice-agents', desc: 'Programmable voice agents for automation' },
              { icon: Rocket, name: 'IVR Routing', path: '/products/ivr-routing', desc: 'Smart IVR and intelligent call routing' },
            ].map((product) => {
              const IconComponent = product.icon;
              return (
                <Link
                  key={product.path}
                  to={product.path}
                  className="bg-white p-8 rounded-2xl border border-slate-200 hover:-translate-y-0.5 hover:shadow-sm transition-all no-underline group"
                >
                  <div className="w-12 h-12 rounded-lg border border-slate-200 mb-4 flex items-center justify-center">
                    <IconComponent size={22} className="text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-slate-600 text-sm">{product.desc}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team & Contact Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-semibold mb-6">Connect with us</span>
          <h2 className="text-4xl font-semibold text-slate-900 mb-6">Ready to get started?</h2>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            Whether you're a call center, enterprise, reseller, or small business, our team is ready to help you build scalable, compliant telecom infrastructure.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-8">
            <Link
              to="/contact"
              className="bg-indigo-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center gap-2 no-underline"
            >
              Get Started <Rocket size={20} />
            </Link>
            <button className="border border-slate-300 text-slate-700 px-10 py-4 rounded-lg font-semibold hover:bg-white transition-colors">
              Schedule a Demo
            </button>
          </div>
          <p className="text-slate-600 text-sm">
            <a href="mailto:sales@callvia.in" className="text-slate-700 hover:text-slate-900 font-semibold no-underline">sales@callvia.in</a> | 
            <a href="mailto:support@callvia.in" className="text-slate-700 hover:text-slate-900 font-semibold no-underline">support@callvia.in</a>
          </p>
          <p className="text-slate-500 text-sm mt-4">
            Support available: Monday to Friday, 9:00 AM – 6:00 PM IST
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
