import React, { useState } from 'react';
import { Mail, Phone, Clock, Send, Globe } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="bg-brand-dark">
      {/* Hero Section */}
      <section className="relative bg-brand-dark border-b border-brand-border overflow-hidden">
        {/* Routing lines decoration */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="routing-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M0 16h32M16 0v32" stroke="currentColor" strokeWidth="0.5" className="text-brand-accent" fill="none" opacity="0.1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#routing-grid)"/>
            <line x1="0" y1="20%" x2="100%" y2="20%" stroke="currentColor" strokeWidth="1" className="text-brand-accent" opacity="0.15"/>
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="currentColor" strokeWidth="1" className="text-brand-accent" opacity="0.15"/>
            <line x1="0" y1="80%" x2="100%" y2="80%" stroke="currentColor" strokeWidth="1" className="text-brand-accent" opacity="0.15"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-surface border border-brand-border px-4 py-2 rounded-full text-sm text-brand-text-muted mb-6">
              <Mail size={16} />
              Class-B VNO • Carrier-grade • India-focused
            </div>
            <h1 className="text-4xl lg:text-5xl font-heading font-semibold text-brand-text mb-4">
              Keep enterprise calling <span className="text-brand-accent">reliable</span> at any <span className="text-brand-accent">scale</span>
            </h1>
            <p className="text-lg text-brand-text-muted leading-relaxed mb-8">
              Talk to Callvia about uptime, compliance, IVR and routing, and rollout planning. We provide clear
              timelines and operational guidance for mission-critical operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Book a Demo
              </button>
              <button className="border border-brand-border hover:border-brand-border-light text-brand-text px-6 py-3 rounded-lg font-semibold transition-all duration-200">
                View Pricing
              </button>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Founded', value: '2025' },
                { label: 'Monthly Calls', value: '10M+' },
                { label: 'Uptime SLA', value: '99.99%' },
              ].map((stat) => (
                <div key={stat.label} className="bg-brand-surface border border-brand-border rounded-xl p-4">
                  <div className="text-2xl font-heading font-semibold text-brand-text">{stat.value}</div>
                  <div className="text-xs uppercase tracking-wide text-brand-text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-brand-surface border border-brand-border rounded-2xl p-6 shadow-card">
              <div className="text-sm text-brand-text-muted mb-4">Control Center Preview</div>
              <div className="bg-brand-dark-light border border-brand-border rounded-xl p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {['Routing Health', 'Compliance Coverage'].map((label) => (
                    <div key={label} className="bg-brand-surface border border-brand-border rounded-lg p-3">
                      <div className="text-[10px] uppercase tracking-wide text-brand-text-muted">{label}</div>
                      <div className="text-lg font-heading font-semibold text-brand-text">Stable</div>
                    </div>
                  ))}
                </div>
                <div className="h-24 rounded-lg border border-brand-border bg-brand-surface" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Mail,
                title: 'Email',
                content: 'info@callvia.com',
                subtext: 'Replies within 24 hours',
                link: 'mailto:info@callvia.com',
              },
              {
                icon: Phone,
                title: 'Phone',
                content: '+91-XXXX-XXXXX',
                subtext: 'Mon–Fri, 9 AM – 6 PM IST',
                link: 'tel:+919876543210',
              },
              {
                icon: Globe,
                title: 'Sales',
                content: 'sales@callvia.com',
                subtext: 'Product and procurement',
                link: 'mailto:sales@callvia.com',
              },
              {
                icon: Clock,
                title: 'Support',
                content: 'support@callvia.com',
                subtext: '24/7 incident response',
                link: 'mailto:support@callvia.com',
              },
            ].map((method, idx) => {
              const IconComponent = method.icon;
              return (
                <a
                  key={idx}
                  href={method.link}
                  className="bg-brand-surface p-6 rounded-xl border border-brand-border hover:border-brand-border-light transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover"
                >
                  <div className="w-12 h-12 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-4">
                    <IconComponent size={20} className="text-brand-accent" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-brand-text mb-1">{method.title}</h3>
                  <p className="text-brand-text font-medium mb-1">{method.content}</p>
                  <p className="text-brand-text-muted text-sm">{method.subtext}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-6 bg-brand-dark" id="contact-form">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-brand-surface border border-brand-border rounded-2xl p-8 shadow-card">
            <h2 className="text-2xl font-heading font-semibold text-brand-text mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="px-4 py-3 bg-brand-dark border border-brand-border text-brand-text rounded-lg focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="px-4 py-3 bg-brand-dark border border-brand-border text-brand-text rounded-lg focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone Number (Optional)"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="px-4 py-3 bg-brand-dark border border-brand-border text-brand-text rounded-lg focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="px-4 py-3 bg-brand-dark border border-brand-border text-brand-text rounded-lg focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                />
              </div>
              <textarea
                placeholder="Your Message"
                required
                rows="6"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-brand-dark border border-brand-border text-brand-text rounded-lg focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-brand-accent hover:bg-brand-accent-hover text-brand-dark py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-brand-surface border border-brand-border rounded-2xl p-8 shadow-card">
              <h3 className="text-xl font-heading font-semibold text-brand-text mb-4">Headquarters</h3>
              <div className="space-y-4 text-brand-text-muted">
                <div>
                  <p className="text-xs uppercase tracking-wide text-brand-text-muted mb-1">Address</p>
                  <p className="text-brand-text font-medium">Callvia Technologies, PAN-India Operations</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-brand-text-muted mb-1">Business Hours</p>
                  <p className="text-brand-text font-medium">Monday – Friday: 9 AM – 6 PM IST</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-surface border border-brand-border rounded-2xl p-8 shadow-card">
              <h3 className="text-xl font-heading font-semibold text-brand-text mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a href="/support" className="block text-brand-accent hover:text-brand-accent-hover transition-colors">
                  Technical Support →
                </a>
                <a href="/developers/api" className="block text-brand-accent hover:text-brand-accent-hover transition-colors">
                  API Documentation →
                </a>
                <a href="/pricing" className="block text-brand-accent hover:text-brand-accent-hover transition-colors">
                  Pricing Information →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
