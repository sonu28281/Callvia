import { useState, useEffect } from 'react';
import { 
  Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare, 
  Headphones, Building2, Code, Users, ArrowRight, Zap, Shield,
  FileText, DollarSign, HelpCircle, Rocket
} from 'lucide-react';
import siteConfig from '../config/site_config.json';

export function ContactPage() {
  const [contactForm, setContactForm] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '+91',
    subject: '',
    message: '',
    inquiryType: 'general',
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const webhookUrl = siteConfig.webhooks.mainLeads;
      const payload = {
        fullName: contactForm.fullName,
        companyName: contactForm.companyName,
        email: contactForm.email,
        phone: contactForm.phone,
        subject: contactForm.subject,
        message: contactForm.message,
        inquiryType: contactForm.inquiryType,
        timestamp: new Date().toISOString(),
        source: 'contact-page',
      };

      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      setSuccess(true);
      setContactForm({
        fullName: '',
        companyName: '',
        email: '',
        phone: '+91',
        subject: '',
        message: '',
        inquiryType: 'general',
      });

      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry', icon: MessageSquare },
    { value: 'sales', label: 'Sales & Pricing', icon: DollarSign },
    { value: 'support', label: 'Technical Support', icon: Headphones },
    { value: 'partnership', label: 'Partnership', icon: Users },
    { value: 'enterprise', label: 'Enterprise Solutions', icon: Building2 },
    { value: 'api', label: 'API & Development', icon: Code },
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      primary: 'hello@callvia.in',
      secondary: 'We typically respond within 24 hours',
      color: 'var(--color-primary)',
    },
    {
      icon: Phone,
      title: 'Call Us',
      primary: '+91 8418 828 125',
      secondary: 'Mon-Fri, 9:00 AM - 6:00 PM IST',
      color: 'var(--color-success)',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      primary: 'Lucknow, Uttar Pradesh',
      secondary: 'Lucknow - 226301',
      color: 'var(--color-secondary)',
    },
  ];

  const supportCategories = [
    {
      icon: Rocket,
      title: 'Sales Inquiries',
      desc: 'Get pricing, demos, and custom solutions',
      email: 'enquiry@callvia.in',
      color: 'var(--color-primary)',
    },
    {
      icon: Headphones,
      title: 'Technical Support',
      desc: 'API help, integration issues, troubleshooting',
      email: 'enquiry@callvia.in',
      color: 'var(--color-info)',
    },
    {
      icon: Users,
      title: 'Partnerships',
      desc: 'Reseller programs, white-label solutions',
      email: 'enquiry@callvia.in',
      color: 'var(--color-premium)',
    },
    {
      icon: Shield,
      title: 'Compliance & Legal',
      desc: 'Regulatory questions, legal documentation',
      email: 'enquiry@callvia.in',
      color: 'var(--color-warning)',
    },
    {
      icon: Building2,
      title: 'Enterprise Sales',
      desc: 'Custom infrastructure, dedicated support',
      email: 'enquiry@callvia.in',
      color: 'var(--color-secondary)',
    },
    {
      icon: FileText,
      title: 'Billing & Accounts',
      desc: 'Invoices, payments, subscription management',
      email: 'enquiry@callvia.in',
      color: 'var(--color-success)',
    },
  ];

  const faqs = [
    {
      q: 'What is your typical response time?',
      a: 'We respond to all inquiries within 24 hours during business days. Enterprise customers get priority support with <2 hour response SLA.',
    },
    {
      q: 'Do you offer custom enterprise solutions?',
      a: 'Yes! We work with enterprises to build custom voice infrastructure, dedicated instances, and white-label solutions. Contact enquiry@callvia.in',
    },
    {
      q: 'How can I schedule a demo?',
      a: 'Fill out the contact form selecting "Sales & Pricing" or email enquiry@callvia.in to schedule a personalized demo.',
    },
    {
      q: 'Where are you located?',
      a: 'Our headquarters is in Lucknow, Uttar Pradesh. We operate remotely across India with infrastructure in multiple regions.',
    },
  ];

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-surface)', padding: '6rem 1.5rem 4rem 1.5rem', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '42rem', margin: '0 auto' }}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 700,
              color: 'var(--color-text)',
              marginBottom: '1.5rem',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
            }}>
              Let's{' '}
              <span style={{
                background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Connect
              </span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
              Have questions about our platform? Need a custom solution? Our team is here to help you build 
              reliable voice infrastructure for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-bg)', padding: '6rem 1.5rem 4rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '4rem' }} className="contact-methods">
            {contactMethods.map((method, i) => {
              const Icon = method.icon;
              return (
                <div
                  key={i}
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '1rem',
                    padding: '2rem',
                    textAlign: 'center',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = method.color;
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    width: '4rem',
                    height: '4rem',
                    borderRadius: '50%',
                    backgroundColor: `${method.color}15`,
                    border: `2px solid ${method.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                  }}>
                    <Icon size={28} style={{ color: method.color }} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.75rem' }}>
                    {method.title}
                  </h3>
                  <p style={{ fontSize: '1.125rem', color: method.color, fontWeight: 600, marginBottom: '0.5rem' }}>
                    {method.primary}
                  </p>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-muted)' }}>
                    {method.secondary}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Support Grid */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-surface)', padding: '6rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'start' }} className="contact-section">
            {/* Contact Form */}
            <div>
              <h2 style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontFamily: 'Sora, sans-serif',
                fontWeight: 600,
                color: 'var(--color-text)',
                marginBottom: '1rem',
              }}>
                Send us a message
              </h2>
              <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                Fill out the form and we'll get back to you within 24 hours
              </p>

              {success && (
                <div style={{
                  backgroundColor: 'var(--color-success-bg)',
                  border: '1px solid var(--color-success)',
                  borderRadius: '0.75rem',
                  padding: '1rem 1.25rem',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
                  <span style={{ color: 'var(--color-success)', fontWeight: 500 }}>
                    Message sent successfully! We'll be in touch soon.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--color-text)', fontSize: '0.9375rem' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactForm.fullName}
                      onChange={(e) => setContactForm({ ...contactForm, fullName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.875rem',
                        backgroundColor: 'var(--color-bg)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '0.5rem',
                        color: 'var(--color-text)',
                        fontSize: '1rem',
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--color-text)', fontSize: '0.9375rem' }}>
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={contactForm.companyName}
                      onChange={(e) => setContactForm({ ...contactForm, companyName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.875rem',
                        backgroundColor: 'var(--color-bg)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '0.5rem',
                        color: 'var(--color-text)',
                        fontSize: '1rem',
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--color-text)', fontSize: '0.9375rem' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.875rem',
                        backgroundColor: 'var(--color-bg)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '0.5rem',
                        color: 'var(--color-text)',
                        fontSize: '1rem',
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--color-text)', fontSize: '0.9375rem' }}>
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.875rem',
                        backgroundColor: 'var(--color-bg)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '0.5rem',
                        color: 'var(--color-text)',
                        fontSize: '1rem',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: 500, color: 'var(--color-text)', fontSize: '0.9375rem' }}>
                    Inquiry Type *
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }} className="inquiry-types">
                    {inquiryTypes.map((type) => {
                      const Icon = type.icon;
                      return (
                        <label
                          key={type.value}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.75rem',
                            backgroundColor: contactForm.inquiryType === type.value ? 'var(--color-primary-bg)' : 'var(--color-bg)',
                            border: `1px solid ${contactForm.inquiryType === type.value ? 'var(--color-primary)' : 'var(--color-border)'}`,
                            borderRadius: '0.5rem',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            fontSize: '0.875rem',
                          }}
                        >
                          <input
                            type="radio"
                            name="inquiryType"
                            value={type.value}
                            checked={contactForm.inquiryType === type.value}
                            onChange={(e) => setContactForm({ ...contactForm, inquiryType: e.target.value })}
                            style={{ display: 'none' }}
                          />
                          <Icon size={16} style={{ color: contactForm.inquiryType === type.value ? 'var(--color-primary)' : 'var(--color-text-muted)' }} />
                          <span style={{ color: contactForm.inquiryType === type.value ? 'var(--color-primary)' : 'var(--color-text)', fontWeight: 500 }}>
                            {type.label}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--color-text)', fontSize: '0.9375rem' }}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    placeholder="How can we help you?"
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      backgroundColor: 'var(--color-bg)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '0.5rem',
                      color: 'var(--color-text)',
                      fontSize: '1rem',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--color-text)', fontSize: '0.9375rem' }}>
                    Message *
                  </label>
                  <textarea
                    required
                    rows="5"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Tell us more about your requirements..."
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      backgroundColor: 'var(--color-bg)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '0.5rem',
                      color: 'var(--color-text)',
                      fontSize: '1rem',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    color: '#FFFFFF',
                    padding: '1rem 2rem',
                    borderRadius: '0.5rem',
                    fontWeight: 600,
                    fontSize: '1rem',
                    border: 'none',
                    cursor: submitting ? 'not-allowed' : 'pointer',
                    opacity: submitting ? 0.6 : 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!submitting) {
                      e.target.style.backgroundColor = 'var(--color-primary-hover)';
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'var(--color-primary)';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  {submitting ? 'Sending...' : 'Send Message'} <Send size={18} />
                </button>
              </form>
            </div>

            {/* Support Categories Sidebar */}
            <div>
              <h3 style={{
                fontSize: '1.25rem',
                fontFamily: 'Sora, sans-serif',
                fontWeight: 600,
                color: 'var(--color-text)',
                marginBottom: '1.5rem',
              }}>
                Direct Contact
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {supportCategories.map((cat, i) => {
                  const Icon = cat.icon;
                  return (
                    <div
                      key={i}
                      style={{
                        backgroundColor: 'var(--color-bg)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '0.75rem',
                        padding: '1.25rem',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = cat.color;
                        e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--color-border)';
                        e.currentTarget.style.backgroundColor = 'var(--color-bg)';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div style={{
                          width: '2.5rem',
                          height: '2.5rem',
                          borderRadius: '0.5rem',
                          backgroundColor: `${cat.color}15`,
                          border: `1px solid ${cat.color}30`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}>
                          <Icon size={20} style={{ color: cat.color }} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.25rem' }}>
                            {cat.title}
                          </h4>
                          <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                            {cat.desc}
                          </p>
                          <a
                            href={`mailto:${cat.email}`}
                            style={{
                              fontSize: '0.875rem',
                              color: cat.color,
                              fontWeight: 600,
                              textDecoration: 'none',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.25rem',
                            }}
                          >
                            {cat.email} <ArrowRight size={14} />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-bg)', padding: '6rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 600,
              color: 'var(--color-text)',
              marginBottom: '1rem',
            }}>
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)' }}>
              Quick answers to common questions
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '1rem',
                  padding: '1.75rem',
                }}
              >
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{
                    width: '2rem',
                    height: '2rem',
                    borderRadius: '0.5rem',
                    backgroundColor: 'var(--color-primary-bg)',
                    border: '1px solid var(--color-primary-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <HelpCircle size={18} style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.75rem' }}>
                      {faq.q}
                    </h3>
                    <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-bg)', padding: '4rem 1.5rem', marginBottom: 0 }}>
        <div className="container" style={{ maxWidth: '48rem', margin: '0 auto', textAlign: 'center' }}>
          <Clock size={48} style={{ color: 'var(--color-primary)', margin: '0 auto 1.5rem', display: 'block' }} />
          <h2 style={{
            fontSize: '1.75rem',
            fontFamily: 'Sora, sans-serif',
            fontWeight: 600,
            color: 'var(--color-text)',
            marginBottom: '1rem',
          }}>
            Business Hours
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
            Monday to Friday: <strong style={{ color: 'var(--color-text)' }}>9:00 AM - 6:00 PM IST</strong>
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)' }}>
            Enterprise customers have 24/7 priority support access
          </p>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .contact-section {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .contact-methods {
            grid-template-columns: 1fr !important;
          }
          .inquiry-types {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .inquiry-types {
            grid-template-columns: 1fr !important;
          }
        }
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}

export default ContactPage;
