import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Globe } from 'lucide-react';

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
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
          }
        }
        .animate-fade-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-slide-up {
          animation: slideInUp 0.6s ease-out forwards;
        }
        .group:hover {
          transform: translateY(-4px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 flex flex-col justify-center items-center px-6 text-white relative overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" style={{animationDelay: '2s'}}></div>
        
        <div className="relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-cyan-500/20 px-4 py-2 rounded-full mb-6 border border-cyan-400/30 animate-fade-up" style={{animationDelay: '0s'}}>
            <Mail size={16} />
            <span className="text-sm font-medium">Get in Touch</span>
          </div>
          <h1 className="text-6xl font-bold mb-6 animate-fade-up" style={{animationDelay: '0.1s'}}>We're Here to Help</h1>
          <p className="text-xl text-cyan-100 mb-8 leading-relaxed animate-fade-up" style={{animationDelay: '0.2s'}}>
            Have questions about our products or services? Our team is ready to assist you. Reach out through any channel below.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              {
                icon: Mail,
                title: 'Email',
                content: 'info@callvia.com',
                subtext: 'We reply within 24 hours',
                link: 'mailto:info@callvia.com',
              },
              {
                icon: Phone,
                title: 'Phone',
                content: '+91-XXXX-XXXXX',
                subtext: 'Mon-Fri, 9 AM - 6 PM IST',
                link: 'tel:+919876543210',
              },
              {
                icon: Globe,
                title: 'Sales Inquiry',
                content: 'sales@callvia.com',
                subtext: 'For product queries',
                link: 'mailto:sales@callvia.com',
              },
              {
                icon: Clock,
                title: 'Support',
                content: '24/7 Support Available',
                subtext: 'support@callvia.com',
                link: 'mailto:support@callvia.com',
              },
            ].map((method, idx) => {
              const IconComponent = method.icon;
              return (
                <a
                  key={idx}
                  href={method.link}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200 hover:shadow-lg hover:border-blue-400 transition-all group"
                >
                  <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-all">
                    <IconComponent size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{method.title}</h3>
                  <p className="text-blue-600 font-semibold mb-1">{method.content}</p>
                  <p className="text-gray-600 text-sm">{method.subtext}</p>
                </a>
              );
            })}
          </div>

          {/* Contact Form & Map Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone Number (Optional)"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  required
                  rows="6"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>

            {/* Info Section */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Headquarters</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-cyan-100 text-sm mb-1">Address</p>
                    <p className="font-semibold">Callvia Technologies<br />PAN-India Operations</p>
                  </div>
                  <div>
                    <p className="text-cyan-100 text-sm mb-1">Business Hours</p>
                    <p className="font-semibold">Monday - Friday<br />9:00 AM - 6:00 PM IST</p>
                  </div>
                  <div>
                    <p className="text-cyan-100 text-sm mb-1">Support Hours</p>
                    <p className="font-semibold">24/7 Available</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Response Time</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">General Inquiries</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Support Tickets</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Within 4 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Sales Inquiries</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Within 24 hours</span>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-8 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">📞 Schedule a Call</h3>
                <p className="text-gray-700 mb-4">
                  Want to discuss your requirements with our team? Schedule a demo or consultation call.
                </p>
                <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg font-semibold transition-all">
                  Book a Meeting
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'How quickly can we get started with Callvia?',
                answer: 'Our implementation team can get you up and running in as little as 2-4 weeks depending on your requirements. We provide dedicated support throughout the onboarding process.',
              },
              {
                question: 'What kind of support do you offer?',
                answer: 'We provide 24/7 technical support via email, phone, and chat. Enterprise customers also get a dedicated account manager for priority support.',
              },
              {
                question: 'Do you offer customization?',
                answer: 'Yes! We understand that every business is unique. Our team can customize our platform to meet your specific requirements.',
              },
              {
                question: 'What is your pricing model?',
                answer: 'Our pricing is usage-based and scalable. We offer flexible plans starting from pay-as-you-go to enterprise agreements. Contact our sales team for a personalized quote.',
              },
              {
                question: 'Is my data secure?',
                answer: 'Security is our top priority. We comply with all major standards including ISO 27001, GDPR, and provide end-to-end encryption for all communications.',
              },
              {
                question: 'Do you have APIs available?',
                answer: 'Yes! We provide comprehensive APIs and webhooks for deep integration with your existing systems. Full documentation is available on our developer portal.',
              },
            ].map((faq, idx) => (
              <details key={idx} className="bg-white p-6 rounded-lg border border-gray-200 cursor-pointer hover:border-blue-300 transition-all group">
                <summary className="font-bold text-gray-900 flex justify-between items-center">
                  {faq.question}
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900 to-cyan-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-cyan-100 mb-8">
            Let's talk about how Callvia can transform your business
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="mailto:sales@callvia.com?subject=Sales Inquiry - Callvia"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all"
            >
              Contact Sales
            </a>
            <a
              href="https://callvia.com/try-free"
              className="border-2 border-cyan-400 hover:bg-cyan-500/20 text-white px-8 py-3 rounded-lg font-semibold transition-all"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}


