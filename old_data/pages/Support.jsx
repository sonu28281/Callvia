import React, { useState } from 'react';
import { Mail, MessageCircle, Clock, HelpCircle, Book, FileText, Video, ChevronDown, ChevronUp, Phone, MapPin } from 'lucide-react';

export function SupportPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: 'How quickly can I get started with Callvia?',
      answer: 'Most customers are up and running within 24-48 hours. After account creation, you can start making calls immediately. DID provisioning typically takes 2-4 hours.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept bank transfers (NEFT/RTGS/IMPS), UPI, credit/debit cards, and net banking. For enterprise accounts, we also offer invoice-based billing with NET-30 terms.'
    },
    {
      question: 'Is there a minimum commitment period?',
      answer: 'No. Callvia operates on a prepaid model with no long-term contracts. You can recharge your wallet as needed and use services on-demand.'
    },
    {
      question: 'Do you provide international calling?',
      answer: 'No. Callvia is a domestic-only (India) VNO platform. We do not provide international calling services to maintain compliance and quality.'
    },
    {
      question: 'Can I port my existing numbers to Callvia?',
      answer: 'Yes, we support number portability for eligible DIDs. The porting process typically takes 7-10 business days. Contact our team to initiate the process.'
    },
    {
      question: 'What kind of technical support do you provide?',
      answer: 'We offer email and phone support during business hours (9 AM - 6 PM IST, Mon-Fri). Enterprise customers get dedicated account managers and 24/7 priority support.'
    },
    {
      question: 'Is call recording included?',
      answer: 'Yes, call recording is included in all plans with configurable retention periods. Basic plans include 30 days, Professional gets 90 days, and Enterprise customers can customize retention.'
    },
    {
      question: 'Can I integrate Callvia with my CRM?',
      answer: 'Yes, we provide REST APIs for integration with popular CRMs like Salesforce, Zoho, Freshdesk, and custom systems. API documentation is available for Professional and Enterprise plans.'
    },
  ];

  return (
    <div className="bg-brand-dark">
      {/* Hero */}
      <section className="relative py-24 px-6 bg-brand-dark-light border-b border-brand-border overflow-hidden">
        {/* Routing lines decoration */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="routing-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M0 16h32M16 0v32" stroke="currentColor" strokeWidth="0.5" className="text-brand-accent" fill="none" opacity="0.1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#routing-grid)"/>
          </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl lg:text-6xl font-heading font-bold text-brand-text mb-6">We're Here to Help</h1>
          <p className="text-xl text-brand-text-muted mb-8">
            Get the support you need, when you need it. Our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-12 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Mail,
                title: 'Email Support',
                content: 'support@callvia.in',
                subtext: 'We reply within 4 hours',
                link: 'mailto:support@callvia.in',
              },
              {
                icon: Phone,
                title: 'Sales Inquiry',
                content: 'sales@callvia.in',
                subtext: 'For new customers',
                link: 'mailto:sales@callvia.in',
              },
              {
                icon: MessageCircle,
                title: 'WhatsApp Support',
                content: '+91 8418 828 125',
                subtext: 'Chat with us directly',
                link: 'https://wa.me/918418828125',
              },
              {
                icon: Clock,
                title: 'Support Hours',
                content: '9 AM - 6 PM IST',
                subtext: 'Monday to Friday',
                link: null,
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={i}
                  href={item.link || '#'}
                  className="p-8 bg-brand-surface border border-brand-border rounded-xl text-center hover:border-brand-border-light transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover"
                  target={item.link && item.link.startsWith('http') ? '_blank' : undefined}
                  rel={item.link && item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className="w-14 h-14 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Icon size={28} className="text-brand-accent" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-brand-text mb-2">{item.title}</h3>
                  <p className="text-sm font-semibold text-brand-text mb-1">{item.content}</p>
                  <p className="text-xs text-brand-text-muted">{item.subtext}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20 px-6 bg-brand-dark-light">
        <div className="max-w-4xl mx-auto">
          <div className="bg-brand-surface rounded-2xl shadow-card p-12 border border-brand-border">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center flex-shrink-0">
                <MapPin size={28} className="text-brand-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-brand-text mb-4">Our Office</h3>
                <p className="text-lg text-brand-text-muted mb-2">582/108, Badali Khera</p>
                <p className="text-lg text-brand-text-muted mb-2">Lucknow, Uttar Pradesh</p>
                <p className="text-lg text-brand-text-muted">India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-12 text-center">Self-Service Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Book, title: 'Documentation', desc: 'Complete guides and tutorials', link: '#' },
              { icon: Video, title: 'Video Tutorials', desc: 'Step-by-step walkthroughs', link: '#' },
              { icon: FileText, title: 'API Docs', desc: 'Developer documentation', link: '/developers/api' },
            ].map((resource, i) => {
              const Icon = resource.icon;
              return (
                <a
                  key={i}
                  href={resource.link}
                  className="bg-brand-surface p-8 rounded-xl border border-brand-border hover:border-brand-border-light transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover"
                >
                  <div className="w-14 h-14 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-6">
                    <Icon size={28} className="text-brand-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-brand-text mb-3">{resource.title}</h3>
                  <p className="text-brand-text-muted">{resource.desc}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 bg-brand-dark-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-4 text-center">Frequently Asked Questions</h2>
          <p className="text-center text-brand-text-muted mb-12">Quick answers to common questions</p>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-brand-surface rounded-xl border border-brand-border shadow-card overflow-hidden hover:border-brand-border-light transition-all duration-200"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-brand-dark-light transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <HelpCircle size={24} className="text-brand-accent flex-shrink-0 mt-1" />
                    <span className="font-semibold text-brand-text text-lg">{faq.question}</span>
                  </div>
                  {openFaq === i ? (
                    <ChevronUp size={24} className="text-brand-accent flex-shrink-0" />
                  ) : (
                    <ChevronDown size={24} className="text-brand-text-muted flex-shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-brand-text-muted leading-relaxed pl-10">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-brand-dark border-t border-brand-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-semibold text-brand-text mb-6">Still have questions?</h2>
          <p className="text-lg text-brand-text-muted mb-8">
            Contact our support team and we'll be happy to help.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="mailto:support@callvia.in" className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-3 rounded-lg font-semibold transition-colors">
              Email Support
            </a>
            <a href="/contact" className="border border-brand-border hover:border-brand-border-light text-brand-text px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Contact Form
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
