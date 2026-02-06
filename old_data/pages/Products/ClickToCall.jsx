import React from 'react';
import { ArrowRight, Check, MousePointerClick, BarChart3, Users, Zap } from 'lucide-react';

export function ClickToCallPage() {
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
              Click-to-Call Widgets
            </h1>
            <p className="text-xl text-brand-text-muted mb-8 leading-relaxed">
              Embed call buttons on your website. Convert visitors to leads with one click. Turn web traffic into voice conversations instantly.
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
              Everything you need to turn website visitors into phone conversations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MousePointerClick,
                title: 'Easy Widget Embedding',
                description: 'Simple integration with any website. Copy-paste implementation in minutes.'
              },
              {
                icon: Zap,
                title: 'Customizable Buttons',
                description: 'Brand colors, custom text, positioning options. Match your website design.'
              },
              {
                icon: BarChart3,
                title: 'Call Tracking',
                description: 'Track which pages generate calls. Measure conversion rates and ROI.'
              },
              {
                icon: Users,
                title: 'Lead Capture Forms',
                description: 'Collect visitor information before connecting. Build your lead database.'
              },
              {
                icon: Check,
                title: 'Real-time Notifications',
                description: 'Instant alerts for new calls. Never miss a potential customer.'
              },
              {
                icon: ArrowRight,
                title: 'Call Routing Options',
                description: 'Distribute calls intelligently. Route to specific teams or agents.'
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
              Ideal for businesses that want to convert web traffic into real conversations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Sales Teams',
                description: 'Connect with hot leads immediately. Strike while interest is high.'
              },
              {
                title: 'Support Centers',
                description: 'Provide instant help to customers. Reduce ticket volume with quick calls.'
              },
              {
                title: 'Service Businesses',
                description: 'Book appointments on the spot. Convert inquiries to scheduled services.'
              },
              {
                title: 'E-commerce Stores',
                description: 'Assist with purchase decisions. Answer product questions in real-time.'
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
            Ready to Convert Visitors into Calls?
          </h2>
          <p className="text-xl text-brand-text-muted mb-8 max-w-2xl mx-auto">
            Start capturing leads from your website today. Setup takes minutes, results are immediate.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-3 rounded-lg font-semibold cursor-pointer inline-flex items-center gap-2 transition-all duration-200">
              Contact Sales <ArrowRight size={18} />
            </button>
            <button className="border-2 border-brand-border text-brand-text hover:bg-brand-surface px-8 py-3 rounded-lg font-semibold cursor-pointer inline-flex items-center gap-2 transition-all duration-200">
              Try Demo Widget
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ClickToCallPage;
