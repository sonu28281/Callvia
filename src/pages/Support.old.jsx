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
    <div className="bg-white">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
      `}</style>

      {/* Hero */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 fade-up">We're Here to Help</h1>
          <p className="text-xl text-blue-100 mb-8 fade-up" style={{animationDelay: '0.1s'}}>
            Get the support you need, when you need it. Our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Mail,
                title: 'Email Support',
                content: 'support@callvia.in',
                subtext: 'We reply within 4 hours',
                link: 'mailto:support@callvia.in',
                color: 'blue'
              },
              {
                icon: Phone,
                title: 'Sales Inquiry',
                content: 'sales@callvia.in',
                subtext: 'For new customers',
                link: 'mailto:sales@callvia.in',
                color: 'green'
              },
              {
                icon: MessageCircle,
                title: 'WhatsApp Support',
                content: '+91 8418 828 125',
                subtext: 'Chat with us directly',
                link: 'https://wa.me/918418828125',
                color: 'emerald'
              },
              {
                icon: Clock,
                title: 'Support Hours',
                content: '9 AM - 6 PM IST',
                subtext: 'Monday to Friday',
                link: null,
                color: 'cyan'
              },
            ].map((item, i) => {
              const Icon = item.icon;
              const colorClasses = {
                blue: 'bg-blue-100 text-blue-900 border-blue-200',
                green: 'bg-green-100 text-green-900 border-green-200',
                emerald: 'bg-emerald-100 text-emerald-900 border-emerald-200',
                cyan: 'bg-cyan-100 text-cyan-900 border-cyan-200',
              };
              return (
                <a
                  key={i}
                  href={item.link || '#'}
                  className={`p-8 border-2 rounded-xl text-center hover:shadow-xl transition-all group ${colorClasses[item.color]}`}
                  target={item.link && item.link.startsWith('http') ? '_blank' : undefined}
                  rel={item.link && item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <Icon size={40} className="mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm font-semibold mb-1">{item.content}</p>
                  <p className="text-xs opacity-75">{item.subtext}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-12 border border-gray-200">
            <div className="flex items-start gap-6">
              <div className="bg-blue-100 p-4 rounded-lg">
                <MapPin size={32} className="text-blue-900" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Office</h3>
                <p className="text-lg text-gray-700 mb-2">582/108, Badali Khera</p>
                <p className="text-lg text-gray-700 mb-2">Lucknow, Uttar Pradesh</p>
                <p className="text-lg text-gray-700">India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Self-Service Resources</h2>
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
                  className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all group"
                >
                  <Icon size={48} className="text-blue-900 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                  <p className="text-gray-600">{resource.desc}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Frequently Asked Questions</h2>
          <p className="text-center text-gray-600 mb-12">Quick answers to common questions</p>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-blue-50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <HelpCircle size={24} className="text-blue-900 flex-shrink-0 mt-1" />
                    <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                  </div>
                  {openFaq === i ? (
                    <ChevronUp size={24} className="text-blue-900 flex-shrink-0" />
                  ) : (
                    <ChevronDown size={24} className="text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-gray-700 leading-relaxed pl-10">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our team is ready to help you with any questions or concerns
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="mailto:support@callvia.in"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              <Mail size={20} />
              Email Support
            </a>
            <a
              href="https://wa.me/918418828125"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-colors inline-flex items-center gap-2"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SupportPage;
