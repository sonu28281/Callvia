import React from 'react';
import { ArrowRight, Phone, Brain, BarChart3, Clock, Users, Target } from 'lucide-react';

export function AiOutboundPage() {
  return (
    <div className="bg-brand-dark">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 bg-brand-dark">
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
          <div className="max-w-3xl">
            <div className="inline-block bg-brand-accent/10 border border-brand-accent/20 text-brand-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Coming in Phase 2
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-brand-text mb-6">
              AI Outbound Calling
            </h1>
            <p className="text-xl text-brand-text-muted mb-8 leading-relaxed">
              Intelligent outbound campaigns powered by AI. Scale your outreach with human-like conversations that convert leads and nurture relationships automatically.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-3 rounded-lg font-semibold cursor-pointer inline-flex items-center gap-2 transition-all duration-200">
                Get Notified <ArrowRight size={18} />
              </button>
              <button className="border-2 border-brand-border text-brand-text hover:bg-brand-surface px-8 py-3 rounded-lg font-semibold cursor-pointer inline-flex items-center gap-2 transition-all duration-200">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Planned Features Section */}
      <section className="py-20 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-brand-text mb-4">
              Planned Features
            </h2>
            <p className="text-xl text-brand-text-muted max-w-2xl mx-auto">
              AI-powered outbound calling designed for maximum conversion and compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'AI-Powered Conversations',
                description: 'Natural language understanding and generation. Conversations that feel authentically human.'
              },
              {
                icon: Target,
                title: 'Smart Lead Prioritization',
                description: 'AI analyzes lead quality. Focuses efforts on highest-probability prospects.'
              },
              {
                icon: Clock,
                title: 'Optimal Timing',
                description: 'Machine learning predicts best call times. Maximize contact rates automatically.'
              },
              {
                icon: Users,
                title: 'Personalized Messaging',
                description: 'Dynamic script adaptation. Tailors conversation to each prospect\'s profile.'
              },
              {
                icon: BarChart3,
                title: 'Performance Analytics',
                description: 'Track conversion metrics. Continuous improvement through data insights.'
              },
              {
                icon: Phone,
                title: 'Multi-Campaign Management',
                description: 'Run parallel campaigns. Different scripts, segments, and objectives simultaneously.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-brand-surface border border-brand-border hover:border-brand-border-light transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover rounded-xl p-8"
              >
                <div className="w-14 h-14 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent rounded-lg flex items-center justify-center mb-6">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-text mb-3">
                  {feature.title}
                </h3>
                <p className="text-brand-text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-brand-text mb-4">
              Ideal For
            </h2>
            <p className="text-xl text-brand-text-muted max-w-2xl mx-auto">
              Perfect for teams that need to scale outbound calling without scaling headcount
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Sales Development',
                description: 'Qualify leads at scale. Book meetings for your sales team automatically.'
              },
              {
                title: 'Customer Retention',
                description: 'Proactive outreach to at-risk accounts. Win-back campaigns for churned customers.'
              },
              {
                title: 'Market Research',
                description: 'Gather feedback and insights. Survey customers efficiently and consistently.'
              },
              {
                title: 'Appointment Reminders',
                description: 'Reduce no-shows with smart reminders. Confirm and reschedule appointments.'
              }
            ].map((useCase, index) => (
              <div
                key={index}
                className="bg-brand-surface border border-brand-border hover:border-brand-border-light transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover rounded-xl p-8"
              >
                <h3 className="text-2xl font-heading font-bold text-brand-text mb-3">
                  {useCase.title}
                </h3>
                <p className="text-brand-text-muted leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-brand-dark-light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-6">
            Be First to Access AI Outbound
          </h2>
          <p className="text-xl text-brand-text-muted mb-8 max-w-2xl mx-auto">
            Join our waitlist for early access. Get notified when AI Outbound launches and receive exclusive beta pricing.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-3 rounded-lg font-semibold cursor-pointer inline-flex items-center gap-2 transition-all duration-200">
              Get Notified <ArrowRight size={18} />
            </button>
            <button className="border-2 border-brand-border text-brand-text hover:bg-brand-surface px-8 py-3 rounded-lg font-semibold cursor-pointer inline-flex items-center gap-2 transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AiOutboundPage;
