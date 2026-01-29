import React from 'react';
import { ArrowRight, CheckCircle2, Phone, Zap, Cpu, Globe, CreditCard, Building2 } from 'lucide-react';
import { InquiryForm } from '../components/sections/InquiryForm.jsx';

export function Home() {
  return (
    <div className="w-full">
      {/* ========== HERO SECTION ========== */}
      <section className="relative bg-white pt-20 pb-32 px-6 overflow-hidden" style={{
        background: 'linear-gradient(135deg, #ec4899 0%, #d946ef 25%, #06b6d4 50%, #fbbf24 75%, #10b981 100%)',
        backgroundSize: '300% 300%',
        animation: 'gradientShift 12s ease-in-out infinite',
        borderRadius: '0',
        position: 'relative'
      }}>
        <style>{`
          @keyframes gradientShift {
            0% { background-position: 50% 0%; }
            25% { background-position: 100% 50%; }
            50% { background-position: 50% 100%; }
            75% { background-position: 0% 50%; }
            100% { background-position: 50% 0%; }
          }
          @keyframes cloudFloat1 {
            0%, 100% { transform: translateX(0) scaleX(1); opacity: 0.3; }
            50% { transform: translateX(30px) scaleX(1.1); opacity: 0.4; }
          }
          @keyframes cloudFloat2 {
            0%, 100% { transform: translateX(0) scaleX(1); opacity: 0.25; }
            50% { transform: translateX(-25px) scaleX(0.95); opacity: 0.35; }
          }
          @keyframes cloudFloat3 {
            0%, 100% { transform: translateX(0) scaleX(1); opacity: 0.2; }
            50% { transform: translateX(40px) scaleX(1.05); opacity: 0.3; }
          }
        `}</style>

        {/* Cloud overlay effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-0 w-96 h-40 bg-white/10 rounded-full blur-3xl" style={{ animation: 'cloudFloat1 8s ease-in-out infinite' }}></div>
          <div className="absolute top-40 right-20 w-80 h-32 bg-white/5 rounded-full blur-3xl" style={{ animation: 'cloudFloat2 10s ease-in-out infinite' }}></div>
          <div className="absolute top-10 left-1/2 w-96 h-40 bg-white/8 rounded-full blur-3xl" style={{ animation: 'cloudFloat3 12s ease-in-out infinite' }}></div>
        </div>

        {/* Curved bottom transition */}
        <svg className="absolute bottom-0 left-0 right-0 w-full h-24 text-blue-50" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ marginBottom: '-1px' }}>
          <path d="M0,40 Q300,0 600,40 T1200,40 L1200,120 L0,120 Z" fill="currentColor"></path>
        </svg>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-block">
                <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-sm border border-white/30">
                  Coming Soon
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Enterprise Telecom<br />
                <span className="text-yellow-200">Infrastructure</span>
              </h1>

              {/* Subheading */}
              <p className="text-lg text-white/90 max-w-xl leading-relaxed font-light">
                Class-B VNO platform powering secure domestic calling, AI-driven automation, and fully white-label telecom services.
              </p>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-2">
                <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-bold transition-all duration-300 inline-flex items-center gap-2 shadow-lg">
                  Book a Demo <ArrowRight size={18} />
                </button>
                <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-bold transition-all duration-300 backdrop-blur-sm">
                  Learn More
                </button>
              </div>

              {/* Features list */}
              <div className="pt-4 space-y-3">
                {[
                  'TRAI-approved VNO infrastructure',
                  'Carrier-grade backend built in-house',
                  'White-label platform for resellers'
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-200 flex-shrink-0" />
                    <span className="text-white/95 font-medium text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="flex justify-center">
              <div className="w-full max-w-md bg-white/98 backdrop-blur-md border border-white/50 rounded-2xl p-8 shadow-2xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Early Access</h2>
                <p className="text-gray-600 text-sm mb-6">Limited spots available for enterprise partners.</p>
                <InquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FEATURES SECTION ========== */}
      <section className="bg-blue-50 py-12 pb-32 px-6 relative">
        <style>{`
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes card3D {
            0% {
              transform: translateZ(0) rotateX(0deg) rotateY(0deg);
            }
          }
          
          @keyframes iconBounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          
          @keyframes iconGlow {
            0%, 100% {
              box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.7);
            }
            50% {
              box-shadow: 0 0 0 8px rgba(37, 99, 235, 0);
            }
          }
          
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-8px);
            }
          }
          
          .feature-card {
            animation: slideInUp 0.6s ease-out forwards;
            opacity: 0;
            perspective: 1000px;
            transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
          }
          
          .feature-card:nth-child(1) { animation-delay: 0.1s; }
          .feature-card:nth-child(2) { animation-delay: 0.2s; }
          .feature-card:nth-child(3) { animation-delay: 0.3s; }
          .feature-card:nth-child(4) { animation-delay: 0.4s; }
          .feature-card:nth-child(5) { animation-delay: 0.5s; }
          .feature-card:nth-child(6) { animation-delay: 0.6s; }
          
          .feature-card:hover {
            transform: translateY(-12px) rotateX(5deg) rotateY(3deg) scale(1.02);
            box-shadow: 0 20px 40px rgba(59, 130, 246, 0.3), 0 0 60px rgba(99, 102, 241, 0.15);
          }
          
          .feature-icon {
            animation: iconBounce 3s ease-in-out infinite;
            transition: all 0.3s ease;
          }
          
          .feature-card:hover .feature-icon {
            animation: iconGlow 0.8s ease-out;
            transform: scale(1.15) rotateZ(10deg);
          }
          
          @keyframes capabilityGlow {
            0%, 100% { 
              color: #3b82f6;
              text-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
            }
            50% { 
              color: #1e40af;
              text-shadow: 0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.4);
            }
          }
          
          .capability-highlight {
            animation: capabilityGlow 2s ease-in-out infinite;
          }
        `}</style>

        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">⚡ CORE FEATURES</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Core Telecom <span className="capability-highlight">Capabilities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to build, scale, and manage enterprise voice operations
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Phone,
                title: 'DID Numbers',
                description: 'Pan-India virtual numbers with TRAI-approved infrastructure. Get dedicated numbers for your contact center with instant activation, geographic flexibility, and carrier-grade reliability for seamless domestic calling.',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Zap,
                title: 'Cloud Call Center',
                description: 'Enterprise-grade inbound & outbound calling platform built on our Class-B VNO infrastructure. Handle high-volume calls, automatic call distribution, and comprehensive reporting.',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: Cpu,
                title: 'AI Voice Agents',
                description: 'Intelligent programmable voice agents that handle customer interactions autonomously. Smart IVR routing, conversation analytics, and seamless handoff to live agents for enhanced customer experience.',
                gradient: 'from-orange-500 to-red-500'
              },
              {
                icon: Globe,
                title: 'White-Label Platform',
                description: 'Launch your own branded telecom service on our proven infrastructure. Complete API access, reseller dashboard, billing management, and all backend support included.',
                gradient: 'from-green-500 to-teal-500'
              },
              {
                icon: CreditCard,
                title: 'Prepaid Billing',
                description: 'Real-time balance management with instant recharge capability. Detailed usage analytics, custom pricing tiers, and automated threshold alerts for continuous service availability.',
                gradient: 'from-indigo-500 to-blue-500'
              },
              {
                icon: Building2,
                title: 'Enterprise API',
                description: 'Full REST API access for custom integrations with your existing systems. Real-time call logs, CDR data, webhooks, and comprehensive documentation for seamless integration.',
                gradient: 'from-rose-500 to-pink-500'
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className="feature-card relative group cursor-pointer"
                >
                  {/* Gradient border effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur`}></div>
                  
                  {/* Card content */}
                  <div className="relative bg-white p-6 rounded-2xl h-full flex flex-col">
                    {/* Logo and Title Section */}
                    <div className="flex items-start gap-4 mb-4">
                      {/* Gradient icon background */}
                      <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center shadow-lg flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 text-xs leading-relaxed flex-grow mb-3">{feature.description}</p>
                    
                    {/* Hover indicator */}
                    <div className="flex items-center text-xs font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Learn more</span>
                      <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== 3D PLATFORM VISUALIZATION SECTION ========== */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-20 px-6 relative overflow-hidden">
        <style>{`
          @keyframes orbitClockwise {
            0% {
              transform: rotate(0deg) translateX(140px) rotate(0deg);
            }
            100% {
              transform: rotate(360deg) translateX(140px) rotate(-360deg);
            }
          }

          .orbit-item {
            animation: orbitClockwise 10s linear infinite;
          }

          .orbit-item:nth-of-type(4) { animation-delay: 0s; }
          .orbit-item:nth-of-type(5) { animation-delay: -2.5s; }
          .orbit-item:nth-of-type(6) { animation-delay: -5s; }
          .orbit-item:nth-of-type(7) { animation-delay: -7.5s; }

          .center-agent {
            animation: float 3s ease-in-out infinite;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `}</style>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Platform
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful infrastructure built to scale your call center operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Circular Animation with Feature Icons */}
            <div className="flex justify-center h-96">
              <div className="relative w-80 h-80 flex items-center justify-center">
                {/* Orbit circle background */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-200 opacity-30"></div>
                <div className="absolute inset-12 rounded-full border-1 border-blue-100 opacity-20"></div>

                {/* Center dot */}
                <div className="absolute w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg z-20"></div>

                {/* Orbiting Feature Icons with Better Icons */}
                {/* Real-time Call Management - Top */}
                <div className="orbit-item absolute">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-2xl shadow-lg flex items-center justify-center text-3xl hover:scale-110 transition-transform duration-300">
                    📊
                  </div>
                </div>

                {/* Advanced Analytics - Right */}
                <div className="orbit-item absolute">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-2xl shadow-lg flex items-center justify-center text-3xl hover:scale-110 transition-transform duration-300">
                    📈
                  </div>
                </div>

                {/* Enterprise Security - Bottom */}
                <div className="orbit-item absolute">
                  <div className="w-20 h-20 bg-gradient-to-br from-violet-400 to-violet-500 rounded-2xl shadow-lg flex items-center justify-center text-3xl hover:scale-110 transition-transform duration-300">
                    🔐
                  </div>
                </div>

                {/* Infinite Scalability - Left */}
                <div className="orbit-item absolute">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl shadow-lg flex items-center justify-center text-3xl hover:scale-110 transition-transform duration-300">
                    ⚡
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Features List */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <span className="text-xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Real-time Call Management</h3>
                  <p className="text-gray-600">Monitor and control every call across your network with live dashboard</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-xl">📊</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Analytics</h3>
                  <p className="text-gray-600">Get deep insights into call quality, duration, routing, and agent performance</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-xl">🔐</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise Security</h3>
                  <p className="text-gray-600">Bank-grade encryption and compliance with all telecom regulations</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <span className="text-xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Infinite Scalability</h3>
                  <p className="text-gray-600">Handle millions of simultaneous calls without performance degradation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== DEVELOPMENT & INTEGRATION SECTION ========== */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-32 px-6 relative overflow-hidden">
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }

          @keyframes float-left {
            0%, 100% { transform: translateX(0) translateY(0); }
            50% { transform: translateX(-20px) translateY(-15px); }
          }

          @keyframes float-right {
            0%, 100% { transform: translateX(0) translateY(0); }
            50% { transform: translateX(20px) translateY(-15px); }
          }

          @keyframes orbit {
            0% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(20px, -15px) rotate(90deg); }
            50% { transform: translate(0, -30px) rotate(180deg); }
            75% { transform: translate(-20px, -15px) rotate(270deg); }
            100% { transform: translate(0, 0) rotate(360deg); }
          }

          .floating-particle {
            position: absolute;
            width: 10px;
            height: 10px;
            border-radius: 50%;
          }

          .particle-1 { animation: orbit 6s linear infinite; top: 15%; left: 10%; }
          .particle-2 { animation: orbit 7s linear infinite reverse; top: 25%; right: 15%; animation-delay: 0.5s; }
          .particle-3 { animation: orbit 8s linear infinite; bottom: 20%; left: 20%; }
          .particle-4 { animation: orbit 6.5s linear infinite reverse; bottom: 25%; right: 10%; animation-delay: 1s; }
          .particle-5 { animation: float 4s ease-in-out infinite; top: 50%; right: 5%; animation-delay: 0.3s; }
        `}</style>

        {/* Floating Particles */}
        <div className="floating-particle particle-1 bg-green-400"></div>
        <div className="floating-particle particle-2 bg-pink-400"></div>
        <div className="floating-particle particle-3 bg-purple-400"></div>
        <div className="floating-particle particle-4 bg-yellow-400"></div>
        <div className="floating-particle particle-5 bg-blue-400"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Services Grid */}
            <div>
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold">🔧 OUR SERVICES</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Development & Integration
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Complete telecom infrastructure development with enterprise-grade APIs, AI voice agents, and custom integrations tailored to your business needs.
              </p>

              {/* Services Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '📱', title: 'IVR Development', color: 'bg-blue-100 text-blue-600' },
                  { icon: '🤖', title: 'AI Voice Agents', color: 'bg-purple-100 text-purple-600' },
                  { icon: '📡', title: 'VoIP Integration', color: 'bg-cyan-100 text-cyan-600' },
                  { icon: '📊', title: 'Call Analytics', color: 'bg-orange-100 text-orange-600' },
                  { icon: '🔐', title: 'Compliance Tools', color: 'bg-red-100 text-red-600' },
                  { icon: '⚙️', title: 'API Development', color: 'bg-green-100 text-green-600' }
                ].map((service, i) => (
                  <div key={i} className={`${service.color} p-4 rounded-lg font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer`}>
                    <span className="text-lg">{service.icon}</span> {service.title}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Illustration */}
            <div className="relative h-96 flex items-center justify-center">
              {/* SVG-based illustration */}
              <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background desk */}
                <rect x="80" y="180" width="240" height="140" fill="#F97316" rx="8" />
                <rect x="90" y="190" width="220" height="30" fill="#FFB366" />
                <rect x="90" y="230" width="220" height="70" fill="#FCA5A5" rx="4" />

                {/* Computer monitor */}
                <rect x="140" y="80" width="120" height="90" fill="#1F2937" rx="4" />
                <rect x="145" y="85" width="110" height="75" fill="#87CEEB" />
                <rect x="130" y="170" width="140" height="8" fill="#374151" />
                <line x1="200" y1="170" x2="200" y2="180" stroke="#374151" strokeWidth="2" />

                {/* Person - sitting */}
                <circle cx="280" cy="140" r="18" fill="#8B5A3C" /> {/* Head */}
                <rect x="270" y="160" width="20" height="50" fill="#4F46E5" /> {/* Body */}
                <rect x="265" y="210" width="12" height="40" fill="#1F2937" /> {/* Leg 1 */}
                <rect x="283" y="210" width="12" height="40" fill="#1F2937" /> {/* Leg 2 */}

                {/* Lightbulb */}
                <circle cx="120" cy="60" r="16" fill="#FCD34D" />
                <path d="M 110 76 Q 110 82 115 85 L 125 85 Q 130 82 130 76" fill="#F59E0B" />

                {/* Target */}
                <circle cx="300" cy="80" r="20" fill="none" stroke="#EF4444" strokeWidth="3" />
                <circle cx="300" cy="80" r="13" fill="none" stroke="#EF4444" strokeWidth="2" />
                <circle cx="300" cy="80" r="6" fill="#EF4444" />
                <line x1="320" y1="65" x2="330" y2="55" stroke="#3B82F6" strokeWidth="2" />

                {/* Leaves */}
                <path d="M 60 240 Q 50 250 60 260" fill="#10B981" stroke="#059669" strokeWidth="2" />
                <path d="M 70 250 Q 60 260 70 270" fill="#34D399" stroke="#10B981" strokeWidth="2" />
                <path d="M 330 260 Q 340 250 330 240" fill="#F59E0B" stroke="#D97706" strokeWidth="2" />
                <path d="M 340 280 Q 350 270 345 260" fill="#FBBF24" stroke="#F59E0B" strokeWidth="2" />

                {/* Floating elements */}
                <rect x="150" y="40" width="30" height="20" fill="#60A5FA" rx="2" opacity="0.7" />
                <rect x="200" y="35" width="35" height="25" fill="#A78BFA" rx="2" opacity="0.7" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SOLUTIONS SECTION ========== */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16 px-6 relative overflow-hidden">
        <style>{`
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          
          .solution-card {
            animation: slideInUp 0.5s ease-out forwards;
          }

          .solution-header {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 solution-header">
            <div className="inline-block mb-3">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase">Solutions</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Built for Every Business
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Scale your operations with purpose-built solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: 'Call Centers',
                description: 'High-volume calling with real-time dashboards and compliance.',
                Icon: Phone
              },
              {
                title: 'Enterprises',
                description: 'API-driven infrastructure with dedicated support and SLA.',
                Icon: Building2
              },
              {
                title: 'Resellers',
                description: 'White-label platform to launch your telecom business.',
                Icon: CreditCard
              },
              {
                title: 'Small Business',
                description: 'AI receptionist that never misses a call.',
                Icon: Zap
              }
            ].map((solution, index) => {
              const Icon = solution.Icon;
              return (
                <div 
                  key={index} 
                  className="solution-card group relative" 
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg"></div>
                  <div className="relative bg-white p-6 rounded-xl border border-gray-200 group-hover:border-cyan-400 group-hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="p-2.5 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 group-hover:from-blue-200 group-hover:to-cyan-200 transition-all flex-shrink-0">
                        <Icon size={20} className="text-blue-900 group-hover:scale-110 transition-transform" strokeWidth={2} />
                      </div>
                      <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-900 transition-colors leading-tight">{solution.title}</h3>
                    </div>
                    <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed flex-grow">{solution.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE SECTION ========== */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-32 px-6">
        <style>{`
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }

          .benefit-card {
            animation: slideInUp 0.6s ease-out forwards;
          }

          .benefit-icon {
            animation: scaleIn 0.5s ease-out forwards;
          }

          .benefit-card:hover .benefit-icon {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Callvia
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built with carrier-grade standards, not startup shortcuts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Domestic-Only Compliant',
                description: 'TRAI-approved VNO infrastructure with full compliance. Our domestic-first approach ensures maximum regulatory adherence and peace of mind.',
                icon: '🛡️',
                color: 'from-green-400 to-emerald-500'
              },
              {
                title: 'Carrier-Grade Backend',
                description: 'Enterprise-level reliability with proprietary switching. Built to handle millions of concurrent calls with 99.99% uptime SLA.',
                icon: '⚙️',
                color: 'from-blue-400 to-cyan-500'
              },
              {
                title: 'White-Label Ready',
                description: 'Launch branded services with your own branding. Complete white-label platform with custom dashboards and reseller controls.',
                icon: '🎨',
                color: 'from-purple-400 to-pink-500'
              },
              {
                title: 'Risk-Controlled Billing',
                description: 'Never chase unpaid invoices with prepaid billing. Smart billing system that protects your revenue and reduces financial risk.',
                icon: '💰',
                color: 'from-orange-400 to-red-500'
              },
              {
                title: 'AI Voice Automation',
                description: 'Scale operations without hiring with AI agents. Advanced voice AI that handles complex customer interactions seamlessly.',
                icon: '🤖',
                color: 'from-indigo-400 to-blue-500'
              },
              {
                title: 'Operator Mindset',
                description: 'Built by telecom professionals, not SaaS consultants. Deep industry expertise with 15+ years of telecom operations experience.',
                icon: '👥',
                color: 'from-rose-400 to-pink-500'
              }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="benefit-card group relative" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-2xl opacity-0 group-hover:opacity-30 transition-all duration-500 blur-xl"></div>
                <div className="relative bg-white p-8 rounded-2xl border-2 border-gray-100 group-hover:border-blue-300 group-hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  <div className={`benefit-icon w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow group-hover:text-gray-700 transition-colors">{benefit.description}</p>
                  <div className="mt-4 pt-4 border-t border-gray-200 group-hover:border-blue-200 transition-colors">
                    <p className="text-xs font-semibold text-blue-600 group-hover:text-blue-700">Learn more →</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section className="bg-gray-900 text-white py-6 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '10M+', label: 'Calls Managed' },
              { number: '99.99%', label: 'Uptime SLA' },
              { number: '50+', label: 'Enterprise Clients' },
              { number: '24/7', label: 'Support Coverage' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-300 font-semibold text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-2 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            Ready to Scale Your<br />Telecom Operations?
          </h2>
          <p className="text-lg text-gray-600 mb-4 max-w-2xl mx-auto">
            Join enterprises building the future of domestic voice infrastructure
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-bold transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">
              Get Started <ArrowRight size={20} />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 px-10 py-4 rounded-lg font-bold transition-all duration-300">
              Talk to Sales
            </button>
          </div>

          <p className="text-gray-500 text-sm mt-3">
            Enterprise SLA guaranteed. Live support for India-based teams.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
