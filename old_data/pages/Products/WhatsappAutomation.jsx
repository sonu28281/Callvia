import React from 'react';
import { ArrowRight, MessageCircle, Send, Image, Users, BarChart3, Bot } from 'lucide-react';

export function WhatsappAutomationPage() {
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
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-brand-text mb-6">
              WhatsApp Automation
            </h1>
            <p className="text-xl text-brand-text-muted mb-8 leading-relaxed">
              Integrate WhatsApp Business with Callvia for customer communication and support automation. Reach customers on their preferred platform with intelligent, automated conversations.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-3 rounded-lg font-semibold cursor-pointer inline-flex items-center gap-2 transition-all duration-200">
                Book Demo <ArrowRight size={18} />
              </button>
              <button className="border-2 border-brand-border text-brand-text hover:bg-brand-surface px-8 py-3 rounded-lg font-semibold cursor-pointer inline-flex items-center gap-2 transition-all duration-200">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-brand-text mb-4">
              Key Features
            </h2>
            <p className="text-xl text-brand-text-muted max-w-2xl mx-auto">
              Enterprise-grade WhatsApp Business integration with powerful automation capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MessageCircle,
                title: 'WhatsApp Business API',
                description: 'Official API integration. Verified business profile with green checkmark badge.'
              },
              {
                icon: Bot,
                title: 'Automated Messaging',
                description: 'Smart chatbots for common queries. Escalate to human agents when needed.'
              },
              {
                icon: Send,
                title: 'Message Templates',
                description: 'Pre-approved templates for notifications. Quick responses and broadcasts.'
              },
              {
                icon: Image,
                title: 'Rich Media Support',
                description: 'Send images, videos, documents, and location. Engage with interactive content.'
              },
              {
                icon: Users,
                title: 'Customer Management',
                description: 'Unified inbox for all conversations. Tag, segment, and organize contacts.'
              },
              {
                icon: BarChart3,
                title: 'Campaign Analytics',
                description: 'Track delivery, read rates, and engagement. Optimize messaging strategy with data.'
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
              Perfect For
            </h2>
            <p className="text-xl text-brand-text-muted max-w-2xl mx-auto">
              From customer support to marketing campaigns, WhatsApp automation serves every business need
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Customer Support',
                description: 'Instant responses to FAQs. 24/7 availability without growing your team.'
              },
              {
                title: 'Order Updates',
                description: 'Automated shipping notifications. Keep customers informed at every step.'
              },
              {
                title: 'Marketing Campaigns',
                description: 'Broadcast promotions to segments. Drive engagement with personalized offers.'
              },
              {
                title: 'Appointment Booking',
                description: 'Schedule and confirm appointments. Send automated reminders to reduce no-shows.'
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

      {/* Integration Benefits Section */}
      <section className="py-20 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-brand-text mb-4">
              Why Integrate with Callvia?
            </h2>
            <p className="text-xl text-brand-text-muted max-w-2xl mx-auto">
              Seamless connection between voice and messaging channels
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Unified Platform',
                description: 'Manage voice calls and WhatsApp messages from a single dashboard. No context switching.'
              },
              {
                title: 'Smart Routing',
                description: 'Route conversations to the right team. Seamlessly escalate from chat to voice when needed.'
              },
              {
                title: 'Complete History',
                description: 'Access full customer interaction history. See all touchpoints across channels in one place.'
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-brand-surface border border-brand-border rounded-xl p-8"
              >
                <h3 className="text-xl font-heading font-bold text-brand-text mb-3">
                  {benefit.title}
                </h3>
                <p className="text-brand-text-muted leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-6">
            Ready to Automate WhatsApp?
          </h2>
          <p className="text-xl text-brand-text-muted mb-8 max-w-2xl mx-auto">
            Connect with customers on their preferred platform. Automate routine conversations and scale your support without scaling costs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-3 rounded-lg font-semibold cursor-pointer inline-flex items-center gap-2 transition-all duration-200">
              Contact Sales <ArrowRight size={18} />
            </button>
            <button className="border-2 border-brand-border text-brand-text hover:bg-brand-surface px-8 py-3 rounded-lg font-semibold cursor-pointer inline-flex items-center gap-2 transition-all duration-200">
              See Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhatsappAutomationPage;
