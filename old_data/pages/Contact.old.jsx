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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 via-slate-50 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-200 text-sm text-slate-600 mb-6">
              <Mail size={16} />
              Class-B VNO • Carrier-grade • India-focused
            </div>
            <h1 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-4">
              Keep enterprise calling <span className="text-indigo-600">reliable</span> at any <span className="text-indigo-600">scale</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Talk to Callvia about uptime, compliance, IVR and routing, and rollout planning. We provide clear
              timelines and operational guidance for mission-critical operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Book a Demo
              </button>
              <button className="border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
                View Pricing
              </button>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Founded', value: '2025' },
                { label: 'Monthly Calls', value: '10M+' },
                { label: 'Uptime SLA', value: '99.99%' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white border border-slate-200 rounded-xl p-4">
                  <div className="text-2xl font-semibold text-slate-900">{stat.value}</div>
                  <div className="text-xs uppercase tracking-wide text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="text-sm text-slate-500 mb-4">Control Center Preview</div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {['Routing Health', 'Compliance Coverage'].map((label) => (
                    <div key={label} className="bg-white border border-slate-200 rounded-lg p-3">
                      <div className="text-[10px] uppercase tracking-wide text-slate-400">{label}</div>
                      <div className="text-lg font-semibold text-slate-800">Stable</div>
                    </div>
                  ))}
                </div>
                <div className="h-24 rounded-lg border border-slate-200 bg-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-6 bg-slate-50">
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
                  className="bg-white p-6 rounded-xl border border-slate-200 hover:-translate-y-0.5 hover:shadow-sm transition-all"
                >
                  <div className="w-12 h-12 rounded-lg border border-slate-200 flex items-center justify-center mb-4">
                    <IconComponent size={20} className="text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{method.title}</h3>
                  <p className="text-slate-700 font-medium mb-1">{method.content}</p>
                  <p className="text-slate-500 text-sm">{method.subtext}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-6" id="contact-form">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white border border-slate-200 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-300"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-300"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone Number (Optional)"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-300"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-300"
                />
              </div>
              <textarea
                placeholder="Your Message"
                required
                rows="6"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-300 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Headquarters</h3>
              <div className="space-y-4 text-slate-600">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500 mb-1">Address</p>
                  <p className="text-slate-700 font-medium">Callvia Technologies, PAN-India Operations</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500 mb-1">Business Hours</p>
                  <p className="text-slate-700 font-medium">Monday – Friday, 9:00 AM – 6:00 PM IST</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500 mb-1">Support</p>
                  <p className="text-slate-700 font-medium">24/7 Incident Response</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Schedule a call</h3>
              <p className="text-slate-600 mb-6">
                Share your requirements and we will propose a rollout plan, compliance checklist, and timeline.
              </p>
              <button className="w-full border border-slate-300 text-slate-700 py-2.5 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
                Book a Meeting
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                question: 'How quickly can we get started with Callvia?',
                answer: 'Most deployments go live in 2–4 weeks, depending on call flows, integrations, and compliance requirements.',
              },
              {
                question: 'What kind of support do you offer?',
                answer: 'We provide 24/7 incident response and a dedicated account manager for enterprise customers.',
              },
              {
                question: 'Do you offer customization?',
                answer: 'Yes. We tailor IVR, routing, and reporting to match operational requirements and regulatory needs.',
              },
              {
                question: 'Is Callvia compliant with telecom regulations?',
                answer: 'Callvia operates on TRAI-approved infrastructure with security controls and audit-ready logs.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}




