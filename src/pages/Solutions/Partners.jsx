import { useState, useEffect } from 'react';
import { ArrowRight, Check, Users, TrendingUp, Shield, Zap, DollarSign, Globe, Headphones, Award, Building2, Briefcase } from 'lucide-react';
import EnquiryModal from '../../components/EnquiryModal';
import SEO from '../../components/SEO';
import siteConfig from '../../config/site_config.json';

const Partners = () => {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [heroForm, setHeroForm] = useState({
    companyName: '',
    email: '',
    contactNumber: '+91',
  });
  const [heroFormSubmitting, setHeroFormSubmitting] = useState(false);
  const [heroFormSuccess, setHeroFormSuccess] = useState(false);
  const [heroFormError, setHeroFormError] = useState('');

  // Intersection observer for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const handleHeroFormSubmit = async (e) => {
    e.preventDefault();
    setHeroFormError('');

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!heroForm.companyName) {
      setHeroFormError('Company name is required');
      return;
    }
    if (!heroForm.email || !emailRegex.test(heroForm.email)) {
      setHeroFormError('Please enter a valid email address');
      return;
    }
    // Phone validation
    const phoneDigits = heroForm.contactNumber.replace(/\D/g, '');
    if (!heroForm.contactNumber.startsWith('+91') || phoneDigits.length !== 12) {
      setHeroFormError('Please enter a valid 10-digit Indian mobile number');
      return;
    }

    setHeroFormSubmitting(true);

    try {
      const utmParams = {};
      try {
        const stored = sessionStorage.getItem('utm_params');
        if (stored) Object.assign(utmParams, JSON.parse(stored));
      } catch (e) {
        console.error('Error parsing UTM params:', e);
      }

      const payload = {
        fullName: heroForm.companyName,
        email: heroForm.email,
        phone: heroForm.contactNumber,
        country: siteConfig.defaults.country,
        lead_source: 'reseller-enquiry',
        ...utmParams,
        page_path: window.location.pathname,
        referrer: document.referrer,
        timestamp: new Date().toISOString(),
      };

      // Send to webhook
      const webhookUrl = siteConfig.webhooks.resellerEnquiry;
      if (webhookUrl && !webhookUrl.includes('XXXXX')) {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
      }

      // Also send to main API
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setHeroFormSuccess(true);
      setHeroForm({ companyName: '', email: '', contactNumber: '+91' });
    } catch (err) {
      setHeroFormError('Failed to submit. Please try again.');
    } finally {
      setHeroFormSubmitting(false);
    }
  };

  return (
    <div style={{ width: '100%', backgroundColor: 'var(--color-bg)' }}>
      <SEO />
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        leadSource="partners_page"
      />

      {/* Hero Section */}
      <section
        className="hero-section animate-on-scroll"
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, #F7F9FC 0%, #EEF2F7 100%)',
          paddingTop: '8rem',
          paddingBottom: '6rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          overflow: 'hidden',
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <div style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '0.5rem',
                  color: 'var(--color-text-muted)',
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  marginBottom: '1.5rem',
                }}>
                  <Building2 size={16} style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'middle' }} />
                  Partner & Reseller Program
                </div>
              </div>

              <h1 style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                fontFamily: 'Sora, sans-serif',
                fontWeight: 700,
                color: 'var(--color-text)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}>
                Build Your Own <br />
                <span style={{ 
                  background: 'linear-gradient(135deg, var(--color-primary) 0%, #347BF5 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>Telecom Business</span>
              </h1>

              <p style={{
                fontSize: '1.25rem',
                color: 'var(--color-text-muted)',
                maxWidth: '36rem',
                lineHeight: 1.6,
              }}>
                Launch your white-label cloud telephony platform with complete branding, dedicated infrastructure, and full technical support. Start earning from day one with India's most reliable carrier-grade telecom backend.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '1rem' }}>
                {[
                  'Complete white-label branding & customization',
                  'Dedicated infrastructure & priority support',
                  'Lucrative revenue sharing model',
                ].map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Check size={20} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Enquiry Form */}
            <div
              style={{
                backgroundColor: 'var(--color-elevated-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '1rem',
                padding: '2rem',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
              }}
            >
              {heroFormSuccess ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-success)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem',
                      opacity: 0.9,
                    }}
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3
                    style={{
                      fontFamily: 'Sora, sans-serif',
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Thank You!
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)' }}>Our partnership team will contact you soon.</p>
                </div>
              ) : (
                <>
                  <h3
                    style={{
                      fontFamily: 'Sora, sans-serif',
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Become a Partner
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
                    Join India's fastest-growing telecom platform and start your own branded service
                  </p>

                  {heroFormError && (
                    <div
                      style={{
                        padding: '12px',
                        backgroundColor: 'rgba(252, 68, 72, 0.1)',
                        border: '1px solid var(--color-danger)',
                        borderRadius: '8px',
                        color: 'var(--color-danger)',
                        fontSize: '0.875rem',
                        marginBottom: '1rem',
                      }}
                    >
                      {heroFormError}
                    </div>
                  )}

                  <form onSubmit={handleHeroFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                      <label
                        htmlFor="companyName"
                        style={{
                          display: 'block',
                          marginBottom: '0.5rem',
                          fontWeight: 500,
                          color: 'var(--color-text)',
                          fontSize: '0.875rem',
                        }}
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        value={heroForm.companyName}
                        onChange={(e) => setHeroForm({ ...heroForm, companyName: e.target.value })}
                        required
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '1px solid var(--color-border)',
                          borderRadius: '0.5rem',
                          fontSize: '1rem',
                          backgroundColor: 'var(--color-bg)',
                          color: 'var(--color-text)',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'var(--color-primary)';
                          e.target.style.outline = 'none';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'var(--color-border)';
                        }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        style={{
                          display: 'block',
                          marginBottom: '0.5rem',
                          fontWeight: 500,
                          color: 'var(--color-text)',
                          fontSize: '0.875rem',
                        }}
                      >
                        Business Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={heroForm.email}
                        onChange={(e) => setHeroForm({ ...heroForm, email: e.target.value })}
                        required
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '1px solid var(--color-border)',
                          borderRadius: '0.5rem',
                          fontSize: '1rem',
                          backgroundColor: 'var(--color-bg)',
                          color: 'var(--color-text)',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'var(--color-primary)';
                          e.target.style.outline = 'none';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'var(--color-border)';
                        }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        style={{
                          display: 'block',
                          marginBottom: '0.5rem',
                          fontWeight: 500,
                          color: 'var(--color-text)',
                          fontSize: '0.875rem',
                        }}
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={heroForm.contactNumber}
                        onChange={(e) => setHeroForm({ ...heroForm, contactNumber: e.target.value })}
                        required
                        placeholder="+91XXXXXXXXXX"
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '1px solid var(--color-border)',
                          borderRadius: '0.5rem',
                          fontSize: '1rem',
                          backgroundColor: 'var(--color-bg)',
                          color: 'var(--color-text)',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'var(--color-primary)';
                          e.target.style.outline = 'none';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'var(--color-border)';
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={heroFormSubmitting}
                      style={{
                        width: '100%',
                        background: 'linear-gradient(135deg, var(--color-primary) 0%, #347BF5 100%)',
                        color: 'white',
                        padding: '0.875rem',
                        borderRadius: '0.5rem',
                        border: 'none',
                        fontWeight: 600,
                        fontSize: '1rem',
                        cursor: heroFormSubmitting ? 'not-allowed' : 'pointer',
                        opacity: heroFormSubmitting ? 0.7 : 1,
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                      }}
                      onMouseEnter={(e) => {
                        if (!heroFormSubmitting) {
                          e.target.style.transform = 'translateY(-2px)';
                          e.target.style.boxShadow = '0 8px 20px rgba(29, 108, 244, 0.4)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      {heroFormSubmitting ? 'Submitting...' : (
                        <>
                          Apply Now <ArrowRight size={18} />
                        </>
                      )}
                    </button>
                  </form>

                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '1rem', textAlign: 'center' }}>
                    Partnership team will reach out within 24 hours
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-bg)', padding: '6rem 1.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 700,
              color: 'var(--color-text)',
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
            }}>
              Why Partner with Callvia?
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '48rem', margin: '0 auto' }}>
              Everything you need to launch and scale your own telecom business with minimal investment
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="features-grid">
            {[
              { 
                icon: Building2, 
                title: 'Complete White-Label Solution', 
                desc: 'Launch with your own brand name, logo, colors, and domain. Fully customizable platform with admin dashboard, billing system, and customer portal. No Callvia branding visible anywhere.', 
                color: 'var(--color-primary)' 
              },
              { 
                icon: Shield, 
                title: 'Carrier-Grade Infrastructure', 
                desc: 'Built on TRAI-approved VNO infrastructure with 99.99% uptime SLA. Redundant systems, automatic failover, and enterprise-grade security for your customers peace of mind.', 
                color: 'var(--color-secondary)' 
              },
              { 
                icon: DollarSign, 
                title: 'Attractive Revenue Sharing', 
                desc: 'Keep 70-80% of revenue from your customers. Transparent pricing, no hidden fees. Flexible payment terms and monthly payouts. Scale your earnings as you grow customer base.', 
                color: 'var(--color-premium)' 
              },
              { 
                icon: Zap, 
                title: 'Complete API Access', 
                desc: 'Full REST API access for custom integrations. Webhooks for real-time events. Comprehensive documentation and SDKs. Build custom features on top of our platform.', 
                color: 'var(--color-success)' 
              },
              { 
                icon: Headphones, 
                title: '24/7 Technical Support', 
                desc: 'Dedicated account manager and technical support team. Priority ticket resolution. Regular platform updates and new feature releases. Training and onboarding assistance.', 
                color: 'var(--color-info)' 
              },
              { 
                icon: TrendingUp, 
                title: 'Marketing & Sales Support', 
                desc: 'Ready-to-use marketing collateral, sales presentations, and demo materials. Lead generation support. Co-branded content and joint marketing campaigns available.', 
                color: 'var(--color-primary)' 
              },
              { 
                icon: Globe, 
                title: 'Multi-Tenant Architecture', 
                desc: 'Manage unlimited customers from single admin panel. Automated billing, invoicing, and payment collection. Custom pricing for each customer. White-label customer portal.', 
                color: 'var(--color-secondary)' 
              },
              { 
                icon: Award, 
                title: 'Zero Setup Costs', 
                desc: 'No infrastructure investment required. No software licenses to buy. Pay-as-you-grow model. Start with minimal commitment and scale as your business grows.', 
                color: 'var(--color-premium)' 
              },
              { 
                icon: Briefcase, 
                title: 'Business Tools Included', 
                desc: 'CRM integration support, automated reporting, customer analytics, and billing management. Everything you need to run successful telecom business out of the box.', 
                color: 'var(--color-success)' 
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '1rem',
                    padding: '2rem',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = feature.color;
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{
                    width: '3.5rem',
                    height: '3.5rem',
                    backgroundColor: `${feature.color}15`,
                    border: `1px solid ${feature.color}30`,
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                  }}>
                    <Icon size={28} style={{ color: feature.color }} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.75rem' }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <style>{`
          @media (max-width: 1024px) {
            .features-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 640px) {
            .features-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* What's Included */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-surface)', padding: '6rem 1.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 700,
              color: 'var(--color-text)',
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
            }}>
              What's Included in the Partnership
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '42rem', margin: '0 auto' }}>
              Complete telecom product suite ready to sell under your brand
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', maxWidth: '64rem', margin: '0 auto' }} className="included-grid">
            {[
              {
                title: 'Cloud Telephony Services',
                items: ['DID Numbers (Virtual Numbers)', 'SIP Trunking', 'Click-to-Call', 'Call Recording & Transcription', 'IVR (Interactive Voice Response)', 'Call Monitoring & Analytics']
              },
              {
                title: 'Call Center Solutions',
                items: ['CallFlo Suite (CCaaS Platform)', 'Predictive Dialer', 'Agent Management', 'Real-time Dashboards', 'Queue Management', 'Campaign Management']
              },
              {
                title: 'AI-Powered Products',
                items: ['Callflo DeskAI (AI Receptionist)', 'AI Voice Agents', 'Conversational IVR', 'Call Transcription', 'Sentiment Analysis', 'Voice Bots']
              },
              {
                title: 'Platform & Integrations',
                items: ['White-Label Portal', 'Billing & Payment System', 'CRM Integrations', 'REST APIs & Webhooks', 'Mobile SDKs', 'Custom Development Support']
              },
            ].map((section, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '1rem',
                  padding: '2rem',
                }}
              >
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'var(--color-text)', marginBottom: '1.5rem' }}>
                  {section.title}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {section.items.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <Check size={20} style={{ color: 'var(--color-success)', flexShrink: 0, marginTop: '0.125rem' }} />
                      <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem', lineHeight: 1.5 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .included-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* CTA Section */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-bg)', padding: '6rem 1.5rem', marginBottom: 0 }}>
        <div className="container">
          <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 700,
              color: 'var(--color-text)',
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
            }}>
              Ready to Start Your Telecom Business?
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '42rem', margin: '0 auto 2rem' }}>
              Join successful partners across India who are building profitable telecom businesses with Callvia
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <Check size={20} style={{ color: 'var(--color-success)' }} />
              <span style={{ color: 'var(--color-text)', fontWeight: 500 }}>Quick onboarding process</span>
              <span style={{ margin: '0 0.5rem', color: 'var(--color-border)' }}>•</span>
              <Check size={20} style={{ color: 'var(--color-success)' }} />
              <span style={{ color: 'var(--color-text)', fontWeight: 500 }}>Dedicated partner manager</span>
              <span style={{ margin: '0 0.5rem', color: 'var(--color-border)' }}>•</span>
              <Check size={20} style={{ color: 'var(--color-success)' }} />
              <span style={{ color: 'var(--color-text)', fontWeight: 500 }}>Start earning immediately</span>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => setIsEnquiryModalOpen(true)}
                style={{
                  background: 'linear-gradient(135deg, var(--color-primary) 0%, #347BF5 100%)',
                  color: 'white',
                  padding: '1.125rem 2.5rem',
                  borderRadius: '0.5rem',
                  fontWeight: 600,
                  fontSize: '1.125rem',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 20px rgba(29, 108, 244, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Apply for Partnership <ArrowRight size={20} />
              </button>
              <a
                href="/contact"
                style={{
                  border: '2px solid var(--color-border)',
                  color: 'var(--color-text)',
                  backgroundColor: 'transparent',
                  padding: '1.125rem 2.5rem',
                  borderRadius: '0.5rem',
                  fontWeight: 600,
                  fontSize: '1.125rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'var(--color-surface)';
                  e.target.style.borderColor = 'var(--color-secondary)';
                  e.target.style.color = 'var(--color-secondary)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.borderColor = 'var(--color-border)';
                  e.target.style.color = 'var(--color-text)';
                }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        [data-theme="dark"] .hero-section {
          background: linear-gradient(135deg, #070B12 0%, #0B1220 100%) !important;
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default Partners;
