import React from 'react';
import { Shield, Zap, Users, Globe, Rocket, TrendingUp, Award, MapPin, CheckCircle2, Target, Lightbulb, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedBackground } from '../components/sections/AnimatedBackground.jsx';

export function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-32">
        <AnimatedBackground />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-6">ABOUT US</span>
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Enterprise Telecom Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">India</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed font-light">
              Founded in 2025, Callvia is a Class-B VNO platform providing carrier-grade, compliant telecom infrastructure and AI-powered voice solutions for enterprises, resellers, and call centers across India.
            </p>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto tracking-wide uppercase">
              Built by telecom operators. For telecom operators.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold mb-6">OUR STORY</span>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Built by Operators, for Operators
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Callvia was founded in 2025 by telecom infrastructure professionals who understood one simple truth: **India needed domestic-first telecom infrastructure.**
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                For years, businesses relied on international routes, resold capacity, and platforms built by SaaS teams. We changed that.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Today, Callvia powers 10M+ calls monthly through our TRAI-approved Class-B VNO infrastructure, serving call centers, enterprises, and resellers across India with 99.99% reliability.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={24} className="text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">TRAI-Approved VNO Infrastructure</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={24} className="text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Carrier-Grade Class-5 Switch Backend</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={24} className="text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Domestic-Only, Compliant Operations</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-12 rounded-2xl border border-blue-100">
              <div className="space-y-8">
                <div className="border-b border-blue-200 pb-8">
                  <p className="text-5xl font-bold text-blue-600 mb-2">2025</p>
                  <p className="text-lg text-gray-700 font-semibold">Founded</p>
                  <p className="text-gray-600 mt-2">Launched as TRAI-approved Class-B VNO</p>
                </div>
                <div className="border-b border-blue-200 pb-8">
                  <p className="text-5xl font-bold text-blue-600 mb-2">10M+</p>
                  <p className="text-lg text-gray-700 font-semibold">Calls Managed Monthly</p>
                  <p className="text-gray-600 mt-2">Enterprise-scale operations, carrier-grade reliability</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-blue-600 mb-2">99.99%</p>
                  <p className="text-lg text-gray-700 font-semibold">Uptime SLA</p>
                  <p className="text-gray-600 mt-2">Backed by enterprise infrastructure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="bg-white p-10 rounded-2xl border border-gray-100 hover:shadow-xl transition-all">
              <Target size={40} className="text-blue-600 mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                Empower every business in India with enterprise-grade, compliant telecom infrastructure. We believe voice communication should be controlled, secure, and profitable.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl border border-gray-100 hover:shadow-xl transition-all">
              <Lightbulb size={40} className="text-blue-600 mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To become India's trusted foundation for voice infrastructure. A future where control, compliance, and AI-driven intelligence are standard, not premium features.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl border border-gray-100 hover:shadow-xl transition-all">
              <Code size={40} className="text-blue-600 mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Promise</h2>
              <p className="text-gray-600 leading-relaxed">
                Carrier-grade reliability. Transparent pricing. Complete control. No grey routes. No international calling. Just honest, compliant telecom built for Indian businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Callvia */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-6">WHY CALLVIA</span>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">What Sets Us Apart</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We're not just another telecom platform. We're a different breed.</p>
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
                <div key={i} className="flex gap-6 bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
                  <Icon size={48} className="text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values as Separate Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold mb-6">CORE VALUES</span>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">How We Operate</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Four principles guide every decision we make</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Shield, 
                title: 'Trust', 
                highlight: 'No Hidden Routes',
                desc: 'Complete transparency. You know exactly what you're getting.' 
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
                desc: 'We grow when you grow. Long-term relationships matter.' 
              },
              { 
                icon: Globe, 
                title: 'India First', 
                highlight: 'Built Locally',
                desc: 'For India, by India. Compliance and expertise that matters.' 
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200 hover:border-blue-300 transition-all">
                  <Icon size={40} className="text-blue-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm font-semibold text-blue-600 mb-3">{item.highlight}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
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
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-bold mb-6">PRODUCT SUITE</span>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Everything You Need</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Enterprise-grade solutions for calls, routing, automation, and more</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'DID Numbers', path: '/products/did-numbers', desc: 'Pan-India virtual numbers for inbound calls' },
              { name: 'SIP Trunks', path: '/products/sip-trunks', desc: 'VoIP connectivity and trunk management' },
              { name: 'Cloud Call Center', path: '/products/cloud-call-center', desc: 'Inbound & outbound call center platform' },
              { name: 'AI Receptionist', path: '/products/ai-receptionist', desc: 'Intelligent call answering and routing' },
              { name: 'AI Voice Agents', path: '/products/ai-voice-agents', desc: 'Programmable voice agents for automation' },
              { name: 'IVR Routing', path: '/products/ivr-routing', desc: 'Smart IVR and intelligent call routing' },
            ].map((product) => (
              <Link
                key={product.path}
                to={product.path}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all no-underline group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 group-hover:bg-blue-200 transition-all"></div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Contact Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-bold mb-6">CONNECT WITH US</span>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            Whether you're a call center, enterprise, reseller, or small business, our team is ready to help you build scalable, compliant telecom infrastructure.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-8">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-4 rounded-lg font-bold hover:shadow-lg transform hover:scale-105 transition-all inline-flex items-center gap-2 no-underline"
            >
              Get Started <Rocket size={20} />
            </Link>
            <button className="border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-lg font-bold hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all">
              Schedule a Demo
            </button>
          </div>
          <p className="text-gray-600 text-sm">
            📧 <a href="mailto:sales@callvia.in" className="text-blue-600 hover:text-blue-700 font-semibold no-underline">sales@callvia.in</a> | 
            📧 <a href="mailto:support@callvia.in" className="text-blue-600 hover:text-blue-700 font-semibold no-underline">support@callvia.in</a>
          </p>
          <p className="text-gray-500 text-sm mt-4">
            Support available: Monday to Friday, 9:00 AM – 6:00 PM IST
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
