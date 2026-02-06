import React from 'react';
import { ArrowRight, Check, Bot, Clock, Users, MessageSquare, Calendar, Phone, TrendingUp, Sparkles } from 'lucide-react';

export function SmallBusinessSolutionPage() {
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
              FOR SMALL BUSINESSES
            </div>
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-brand-text mb-6 leading-tight">
              AI Receptionist - Never Miss a Call
            </h1>
            <p className="text-xl text-brand-text-muted mb-8 leading-relaxed">
              24/7 AI-powered call answering for small businesses. Capture leads, answer FAQs, schedule appointments—all without hiring staff.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-200">
                Try Free for 14 Days <ArrowRight size={20} />
              </button>
              <button className="border-2 border-brand-border text-brand-text hover:bg-brand-surface px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                Listen to Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-12 text-center">What Your AI Receptionist Can Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: MessageSquare, title: 'Answer FAQs', desc: 'Pre-programmed responses for common questions about hours, services, pricing.' },
              { icon: Calendar, title: 'Schedule Appointments', desc: 'Integrates with Google Calendar to book appointments based on your availability.' },
              { icon: Phone, title: 'Transfer to Mobile', desc: 'Intelligently transfers urgent calls to your mobile when you\'re available.' },
              { icon: Users, title: 'Capture Lead Info', desc: 'Collects name, phone, email, and inquiry details. Sends instant notification.' },
              { icon: Clock, title: '24/7 Availability', desc: 'Never miss after-hours calls. AI handles weekends, holidays, and nights.' },
              { icon: Sparkles, title: 'Natural Conversations', desc: 'Hindi & English support with natural voice. Customers won\'t know it\'s AI.' },
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

      {/* Use Cases Section */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-brand-text mb-6">Perfect for These Businesses</h2>
              <p className="text-lg text-brand-text-muted mb-8">
                Any business that gets inbound calls but doesn't have dedicated staff to answer 24/7.
              </p>
              <div className="space-y-4">
                {[
                  'Clinics & Dental Practices',
                  'Salons & Spas',
                  'Restaurants & Cafes',
                  'Coaching Centers',
                  'Real Estate Agents',
                  'Home Services (Plumbers, Electricians)',
                  'Retail Stores',
                  'Freelancers & Consultants',
                ].map((biz, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={20} className="text-brand-accent flex-shrink-0" />
                    <span className="text-brand-text font-medium">{biz}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-surface border border-brand-border rounded-xl p-12 shadow-card">
              <h3 className="text-2xl font-heading font-bold text-brand-text mb-8">Simple Pricing for SMBs</h3>
              <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-xl p-8 mb-6">
                <div className="text-5xl font-heading font-bold text-brand-accent mb-2">₹999</div>
                <div className="text-brand-text-muted mb-4">per month</div>
                <div className="border-t border-brand-border pt-4">
                  <div className="text-sm font-semibold text-brand-text mb-2">Includes:</div>
                  <ul className="space-y-2 text-sm text-brand-text-muted">
                    <li>✓ 1 Phone Number</li>
                    <li>✓ 100 minutes/month</li>
                    <li>✓ Lead capture form</li>
                    <li>✓ Custom greetings</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-brand-text-muted">Additional minutes at ₹1/min. No setup fees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-12 text-center">Benefits for Small Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, title: 'Increase Revenue', desc: 'Capture every lead, even after hours' },
              { icon: Users, title: 'Better Customer Experience', desc: 'No busy signals or missed calls' },
              { icon: Clock, title: 'Save Time', desc: 'Stop answering repetitive questions' },
              { icon: Bot, title: 'No Hiring Needed', desc: 'Cheaper than hiring a receptionist' },
            ].map((benefit, i) => (
              <div key={i} className="bg-brand-surface border border-brand-border hover:border-brand-border-light transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon size={32} />
                </div>
                <h3 className="text-lg font-heading font-bold text-brand-text mb-2">{benefit.title}</h3>
                <p className="text-brand-text-muted text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-6">
            Start Your 14-Day Free Trial
          </h2>
          <p className="text-xl text-brand-text-muted mb-8">
            No credit card required. Setup in 5 minutes.
          </p>
          <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-200">
            Get Started Free <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default SmallBusinessSolutionPage;
