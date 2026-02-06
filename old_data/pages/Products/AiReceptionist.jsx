import React from 'react';
import { ArrowRight, Check, Bot, Phone, Clock, Users, MessageSquare, Zap, BarChart3, Calendar, Shield, Globe, Headphones } from 'lucide-react';

export function AiReceptionistPage() {
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
                <Bot size={18} className="text-brand-accent" />
                <span className="text-sm font-semibold text-brand-accent">AI Receptionist</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-heading font-bold text-brand-text mb-6 leading-tight">
                Never Miss a Call Again
              </h1>
              <p className="text-xl text-brand-text-muted mb-8 leading-relaxed">
                AI-powered receptionist that answers calls 24/7, understands natural language, qualifies leads, and routes to the right team member—all in multiple languages.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5">
                  Try AI Demo <ArrowRight size={20} />
                </button>
                <button className="border-2 border-brand-border text-brand-text hover:bg-brand-surface px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                  See Pricing
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-full w-64 h-64 flex items-center justify-center">
                    <Headphones size={100} className="text-brand-accent" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-16 text-center">How AI Receptionist Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Call Received', desc: 'Customer calls your business number', icon: Phone },
              { step: '2', title: 'AI Answers', desc: 'Receptionist greets in natural language', icon: Bot },
              { step: '3', title: 'Qualifies Intent', desc: 'Understands need and collects info', icon: MessageSquare },
              { step: '4', title: 'Smart Routing', desc: 'Routes to agent or handles request', icon: Zap },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="bg-brand-accent text-brand-dark w-16 h-16 rounded-full flex items-center justify-center text-2xl font-heading font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <div className="bg-brand-surface border border-brand-border hover:border-brand-border-light rounded-xl p-6 h-full transition-all duration-200">
                  <item.icon size={32} className="text-brand-accent mx-auto mb-3" />
                  <h3 className="text-lg font-heading font-semibold text-brand-text mb-2">{item.title}</h3>
                  <p className="text-brand-text-muted text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-brand-text mb-4">Built for Small Business Efficiency</h2>
            <p className="text-xl text-brand-text-muted max-w-3xl mx-auto">
              Everything you need to provide professional call handling without hiring staff
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: '24/7 Availability', desc: 'Never miss calls after hours, weekends, or holidays' },
              { icon: Globe, title: 'Multi-Language Support', desc: 'Handle calls in English, Hindi, and 20+ regional languages' },
              { icon: Users, title: 'Lead Qualification', desc: 'AI asks qualifying questions and scores leads automatically' },
              { icon: Calendar, title: 'Appointment Booking', desc: 'Schedule meetings directly into your calendar' },
              { icon: MessageSquare, title: 'Message Taking', desc: 'Record detailed messages and send via email/SMS' },
              { icon: BarChart3, title: 'Call Analytics', desc: 'Track call volume, response time, and conversion rates' },
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

      {/* Use Cases */}
      <section className="py-24 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-12 text-center">Perfect For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Small Businesses', items: ['Retail stores', 'Restaurants', 'Service providers', 'Local businesses'] },
              { title: 'Professional Services', items: ['Law firms', 'Accounting firms', 'Consultants', 'Freelancers'] },
              { title: 'Healthcare', items: ['Clinics', 'Dental practices', 'Therapy centers', 'Wellness spas'] },
              { title: 'Real Estate', items: ['Agents', 'Property managers', 'Brokers', 'Developers'] },
            ].map((useCase, i) => (
              <div key={i} className="bg-brand-surface border border-brand-border hover:border-brand-border-light rounded-xl p-6 transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover">
                <h3 className="text-xl font-heading font-semibold text-brand-text mb-4">{useCase.title}</h3>
                <ul className="space-y-2">
                  {useCase.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-brand-text-muted text-sm">
                      <Check size={16} className="text-brand-accent flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6 bg-brand-dark">
        <div className="max-w-5xl mx-auto">
          <div className="bg-brand-surface border border-brand-border rounded-xl shadow-xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-brand-text mb-4">Simple Pricing for Small Business</h2>
              <p className="text-xl text-brand-text-muted">
                More affordable than hiring a part-time receptionist
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { plan: 'Basic', price: '₹X,XXX/mo', calls: 'Up to 100 calls', features: ['24/7 answering', 'Message taking', 'Email notifications'] },
                { plan: 'Professional', price: '₹X,XXX/mo', calls: 'Up to 500 calls', features: ['All Basic features', 'Appointment booking', 'Lead qualification', 'CRM integration'], highlight: true },
                { plan: 'Enterprise', price: 'Custom', calls: 'Unlimited calls', features: ['All Pro features', 'Custom workflows', 'Dedicated support'] },
              ].map((tier, i) => (
                <div key={i} className={`p-6 rounded-lg border-2 ${tier.highlight ? 'border-brand-accent bg-brand-accent/5' : 'border-brand-border bg-brand-dark'}`}>
                  <h3 className="text-xl font-heading font-semibold text-brand-text mb-2">{tier.plan}</h3>
                  <p className="text-3xl font-heading font-bold text-brand-accent mb-2">{tier.price}</p>
                  <p className="text-brand-text-muted text-sm mb-6">{tier.calls}</p>
                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <Check size={16} className="text-brand-accent flex-shrink-0 mt-1" />
                        <span className="text-brand-text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${tier.highlight ? 'bg-brand-accent hover:bg-brand-accent-hover text-brand-dark' : 'bg-brand-dark-light hover:bg-brand-surface text-brand-text border border-brand-border'}`}>
                    Get Started
                  </button>
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
            Try AI Receptionist Free for 14 Days
          </h2>
          <p className="text-xl text-brand-text-muted mb-8">
            No credit card required. Setup in 5 minutes.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-200">
              Start Free Trial <ArrowRight size={20} />
            </button>
            <button className="border-2 border-brand-border text-brand-text hover:bg-brand-surface px-8 py-4 rounded-lg font-semibold transition-all duration-200">
              Talk to Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AiReceptionistPage;
