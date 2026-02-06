import React from 'react';
import { ArrowRight, Check, Building2, Landmark, Trophy, Users, Radio, Wifi } from 'lucide-react';

export function TestPage1() {
  return (
    <div className="bg-brand-dark">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.5; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes signal-wave {
          0% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: scale(1.5); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delay { animation: float 6s ease-in-out 2s infinite; }
        .animate-pulse-ring { animation: pulse-ring 3s ease-out infinite; }
        .animate-signal-wave { animation: signal-wave 2s ease-out infinite; }
      `}</style>

      {/* Hero Section with Delhi Monuments Background */}
      <section className="relative bg-gradient-to-b from-brand-dark to-brand-dark-light pt-32 pb-24 px-6 overflow-hidden">
        {/* India Gate Monument - Right Side */}
        <div className="absolute right-10 bottom-0 opacity-10 pointer-events-none animate-float">
          <svg width="300" height="400" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Base */}
            <rect x="50" y="380" width="200" height="20" fill="#FF9F1C" opacity="0.3"/>
            <rect x="70" y="360" width="160" height="20" fill="#FF9F1C" opacity="0.4"/>
            
            {/* Main Structure */}
            <path d="M 80 360 L 80 140 L 100 120 L 200 120 L 220 140 L 220 360 Z" fill="#FF9F1C" opacity="0.2"/>
            <path d="M 80 360 L 80 140 L 100 120 L 200 120 L 220 140 L 220 360" stroke="#FF9F1C" strokeWidth="2" fill="none"/>
            
            {/* Central Arch */}
            <path d="M 110 360 L 110 200 Q 110 160 150 160 Q 190 160 190 200 L 190 360" fill="rgba(7, 10, 18, 0.8)"/>
            <path d="M 110 360 L 110 200 Q 110 160 150 160 Q 190 160 190 200 L 190 360" stroke="#FF9F1C" strokeWidth="2" fill="none"/>
            
            {/* Top Dome */}
            <ellipse cx="150" cy="120" rx="40" ry="20" fill="#FF9F1C" opacity="0.3"/>
            <circle cx="150" cy="100" r="15" fill="#FF9F1C" opacity="0.4"/>
          </svg>
        </div>

        {/* Qutub Minar - Left Side */}
        <div className="absolute left-10 bottom-0 opacity-10 pointer-events-none animate-float-delay">
          <svg width="150" height="450" viewBox="0 0 150 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Base */}
            <rect x="40" y="430" width="70" height="20" fill="#FF9F1C" opacity="0.3"/>
            
            {/* Tower - Tapered */}
            <path d="M 50 430 L 60 50 L 90 50 L 100 430 Z" fill="#FF9F1C" opacity="0.2"/>
            <path d="M 50 430 L 60 50 L 90 50 L 100 430" stroke="#FF9F1C" strokeWidth="2" fill="none"/>
            
            {/* Bands */}
            <line x1="52" y1="350" x2="98" y2="350" stroke="#FF9F1C" strokeWidth="1.5"/>
            <line x1="54" y1="270" x2="96" y2="270" stroke="#FF9F1C" strokeWidth="1.5"/>
            <line x1="56" y1="190" x2="94" y2="190" stroke="#FF9F1C" strokeWidth="1.5"/>
            <line x1="58" y1="110" x2="92" y2="110" stroke="#FF9F1C" strokeWidth="1.5"/>
            
            {/* Top */}
            <circle cx="75" cy="45" r="10" fill="#FF9F1C" opacity="0.4"/>
          </svg>
        </div>

        {/* Telecom Signal Waves - Animated */}
        <div className="absolute top-20 right-1/4 opacity-20">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="15" stroke="#FF9F1C" strokeWidth="2" fill="none" className="animate-pulse-ring"/>
            <circle cx="50" cy="50" r="15" stroke="#FF9F1C" strokeWidth="2" fill="none" className="animate-pulse-ring" style={{animationDelay: '1s'}}/>
            <circle cx="50" cy="50" r="15" stroke="#FF9F1C" strokeWidth="2" fill="none" className="animate-pulse-ring" style={{animationDelay: '2s'}}/>
            <Radio className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-accent" size={30}/>
          </svg>
        </div>

        {/* Network Lines */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#FF9F1C" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-brand-surface border border-brand-border px-4 py-2 rounded-lg mb-6">
              <Landmark size={18} className="text-brand-accent" />
              <span className="text-sm font-semibold text-brand-text-muted">Test Page 1 - Dark Theme</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-brand-text mb-6 leading-tight tracking-tight">
              Connecting Delhi, Powering India
            </h1>
            <p className="text-xl text-brand-text-muted mb-10 leading-relaxed">
              Premium telecom infrastructure with Delhi's iconic heritage at heart
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-10 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200">
                Explore Features <ArrowRight size={20} />
              </button>
              <button className="border-2 border-brand-border text-brand-text hover:bg-brand-surface px-10 py-4 rounded-lg font-semibold transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 px-6 bg-brand-dark-light overflow-hidden">
        {/* Lotus Temple Silhouette - Background */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          <svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Lotus Petals */}
            <ellipse cx="300" cy="350" rx="200" ry="50" fill="#FF9F1C" opacity="0.3"/>
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
              const x = 300 + Math.cos((angle * Math.PI) / 180) * 150;
              const y = 250 + Math.sin((angle * Math.PI) / 180) * 80;
              return (
                <ellipse key={i} cx={x} cy={y} rx="60" ry="120" fill="#FF9F1C" opacity="0.2" transform={`rotate(${angle} ${x} ${y})`}/>
              );
            })}
            <circle cx="300" cy="200" r="80" fill="#FF9F1C" opacity="0.3"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-brand-text mb-4 tracking-tight">
              Heritage Meets Innovation
            </h2>
            <p className="text-xl text-brand-text-muted max-w-3xl mx-auto leading-relaxed">
              Like Delhi's monuments, our telecom infrastructure stands strong through time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Radio,
                title: 'Network Coverage',
                desc: 'Spanning Delhi NCR like the city\'s heritage'
              },
              {
                icon: Wifi,
                title: '5G Ready Infrastructure',
                desc: 'Modern connectivity built on solid foundations'
              },
              {
                icon: Building2,
                title: 'Enterprise Solutions',
                desc: 'Serving businesses across the capital'
              },
              {
                icon: Users,
                title: 'Delhi-First Support',
                desc: 'Local expertise, global standards'
              },
              {
                icon: Trophy,
                title: 'Award Winning',
                desc: 'Recognized telecom excellence in India'
              },
              {
                icon: Check,
                title: 'Reliable & Secure',
                desc: 'As enduring as India Gate'
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-brand-surface rounded-xl p-8 border border-brand-border hover:border-brand-accent/50 transition-all duration-200 hover:-translate-y-1 shadow-card hover:shadow-card-hover group"
              >
                <div className="w-14 h-14 bg-brand-accent/10 border border-brand-accent/30 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-accent/20 transition-all duration-200">
                  <feature.icon size={28} className="text-brand-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-brand-text mb-3">{feature.title}</h3>
                <p className="text-brand-text-muted leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 px-6 bg-brand-dark overflow-hidden">
        {/* Red Fort Silhouette */}
        <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
          <svg width="500" height="300" viewBox="0 0 500 300" fill="none">
            <rect x="50" y="200" width="400" height="100" fill="#FF9F1C"/>
            <rect x="100" y="150" width="80" height="50" fill="#FF9F1C"/>
            <rect x="200" y="150" width="100" height="50" fill="#FF9F1C"/>
            <rect x="320" y="150" width="80" height="50" fill="#FF9F1C"/>
            {[120, 240, 340].map((x, i) => (
              <rect key={i} x={x} y="130" width="20" height="20" fill="#FF9F1C"/>
            ))}
          </svg>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-12 tracking-tight">
            Powering Delhi's Communication
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { stat: '75+', label: 'Years Legacy' },
              { stat: '1000+', label: 'Delhi Businesses' },
              { stat: '99.9%', label: 'Uptime SLA' },
              { stat: '24/7', label: 'Local Support' },
            ].map((item, idx) => (
              <div key={idx} className="bg-brand-surface border border-brand-border rounded-xl p-10 transition-all duration-200 hover:border-brand-accent/50 hover:-translate-y-1 shadow-card hover:shadow-card-hover group">
                <div className="text-5xl font-heading font-bold text-brand-accent mb-4 group-hover:scale-110 transition-transform duration-200">{item.stat}</div>
                <div className="text-brand-text-muted text-lg">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 bg-brand-dark-light overflow-hidden">
        {/* Animated Signal Waves */}
        <div className="absolute top-10 left-10 opacity-10">
          <Wifi size={60} className="text-brand-accent animate-pulse" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-10">
          <Radio size={60} className="text-brand-accent animate-pulse" style={{animationDelay: '1s'}}/>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-6 tracking-tight">
            Experience Delhi's Digital Future
          </h2>
          <p className="text-xl text-brand-text-muted mb-10 leading-relaxed">
            Premium telecom infrastructure inspired by the capital's enduring spirit
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-12 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 hover:scale-105">
              Get Started <ArrowRight size={20} />
            </button>
            <button className="border-2 border-brand-border text-brand-text hover:bg-brand-surface px-12 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
              View Light Theme
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TestPage1;
