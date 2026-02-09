import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Check, Bot, Phone, Clock, Users, MessageSquare, Zap, BarChart3, Calendar, Shield, Globe, Headphones } from 'lucide-react';
import EnquiryModal from '../../components/EnquiryModal';
import LeadForm from '../../components/LeadForm';
import SEO from '../../components/SEO';
import siteConfig from '../../config/site_config.json';
import TelecomPacketAnimation from '../../components/TelecomPacketAnimation';

const CallfloDeskAI = () => {
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
        lead_source: 'callflodeskai-enquiry',
        ...utmParams,
        page_path: window.location.pathname,
        referrer: document.referrer,
        timestamp: new Date().toISOString(),
      };

      // Send to webhook
      const webhookUrl = siteConfig.webhooks.callflodeskaiEnquiry;
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
        leadSource="callflo_deskai_page"
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
        <TelecomPacketAnimation />
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
                  <Bot size={16} style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'middle' }} />
                  AI Receptionist
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
                Never Miss a Call<br />
                With <span style={{ 
                  background: 'linear-gradient(135deg, var(--color-primary) 0%, #347BF5 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>Callflo DeskAI</span>
              </h1>

              <p style={{
                fontSize: '1.25rem',
                color: 'var(--color-text-muted)',
                maxWidth: '36rem',
                lineHeight: 1.6,
              }}>
                AI-powered receptionist that answers calls 24/7, understands natural language, qualifies leads, books appointments, and routes to the right team—all in multiple languages. Perfect for call centers, enterprises, and individual businesses.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '1rem' }}>
                {[
                  'Answer every call, even after hours',
                  'Multilingual support (20+ languages)',
                  'Smart lead qualification & routing',
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
                  <p style={{ color: 'var(--color-text-muted)' }}>We'll schedule your AI demo soon.</p>
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
                    Try AI Demo
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
                    Experience how AI receptionist can transform your business
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
                          Request Demo <ArrowRight size={18} />
                        </>
                      )}
                    </button>
                  </form>

                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '1rem', textAlign: 'center' }}>
                    Free demo • No commitment required
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
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
              How <span style={{ 
                background: 'linear-gradient(135deg, var(--color-primary) 0%, #347BF5 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Callflo DeskAI</span> Works
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '42rem', margin: '0 auto' }}>
              Seamless AI-powered call handling in four simple steps
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', maxWidth: '80rem', margin: '0 auto' }} className="steps-grid">
            {[
              { 
                step: '1', 
                title: 'Call Received', 
                desc: 'Customer calls your business number', 
                icon: Phone, 
                color: 'var(--color-primary)' 
              },
              { 
                step: '2', 
                title: 'AI Answers', 
                desc: 'Greets in natural language instantly', 
                icon: Bot, 
                color: 'var(--color-secondary)' 
              },
              { 
                step: '3', 
                title: 'Qualifies Intent', 
                desc: 'Understands need and collects info', 
                icon: MessageSquare, 
                color: 'var(--color-premium)' 
              },
              { 
                step: '4', 
                title: 'Smart Routing', 
                desc: 'Routes to agent or handles request', 
                icon: Zap, 
                color: 'var(--color-success)' 
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i}>
                  <div style={{
                    background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}CC 100%)`,
                    color: '#FFFFFF',
                    width: '4rem',
                    height: '4rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.75rem',
                    fontFamily: 'Sora, sans-serif',
                    fontWeight: 700,
                    margin: '0 auto 1.5rem',
                    boxShadow: `0 4px 20px ${item.color}60`,
                  }}>
                    {item.step}
                  </div>
                  <div style={{
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '1rem',
                    padding: '2rem 1.5rem',
                    textAlign: 'center',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => { 
                    e.currentTarget.style.borderColor = item.color; 
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => { 
                    e.currentTarget.style.borderColor = 'var(--color-border)'; 
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  >
                    <Icon size={32} style={{ color: item.color, margin: '0 auto 1rem', display: 'block' }} />
                    <h3 style={{ fontSize: '1.25rem', fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.75rem' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <style>{`
          @media (max-width: 1024px) {
            .steps-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 640px) {
            .steps-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* Features Section */}
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
              Professional AI Receptionist for Every Business
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '42rem', margin: '0 auto' }}>
              Enterprise-grade call handling without the enterprise cost. Perfect for call centers, businesses, and independent professionals.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="features-grid">
            {[
              { 
                icon: Clock, 
                title: '24/7 Availability', 
                desc: 'Never miss calls after hours, weekends, or holidays. AI receptionist answers instantly, handles inquiries, and captures leads even when your team is offline.', 
                color: 'var(--color-primary)' 
              },
              { 
                icon: Globe, 
                title: 'Multi-Language Support', 
                desc: 'Handle calls in English, Hindi, and 20+ regional languages with natural conversational AI. Automatic language detection and seamless switching for diverse customers.', 
                color: 'var(--color-secondary)' 
              },
              { 
                icon: Users, 
                title: 'Intelligent Lead Qualification', 
                desc: 'AI asks relevant qualifying questions, scores leads based on your criteria, and prioritizes high-value opportunities automatically. Integrates with your CRM.', 
                color: 'var(--color-premium)' 
              },
              { 
                icon: Calendar, 
                title: 'Smart Appointment Booking', 
                desc: 'Schedule meetings directly into your calendar with automatic availability checking, timezone handling, and confirmation emails to both parties.', 
                color: 'var(--color-success)' 
              },
              { 
                icon: MessageSquare, 
                title: 'Detailed Message Taking', 
                desc: 'Record comprehensive messages with caller details, purpose, and urgency level. Instant notifications via email, SMS, and your preferred communication channel.', 
                color: 'var(--color-info)' 
              },
              { 
                icon: BarChart3, 
                title: 'Advanced Call Analytics', 
                desc: 'Track call volume, response time, conversion rates, and caller sentiment. Real-time dashboards with actionable insights to optimize performance.', 
                color: 'var(--color-primary)' 
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--color-bg)',
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

      {/* Form Section with CTA */}
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
              Get Started with <span style={{ 
                background: 'linear-gradient(135deg, var(--color-primary) 0%, #347BF5 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Callflo DeskAI</span>
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '42rem', margin: '0 auto 2rem' }}>
              Experience AI-powered call handling. Setup in minutes, no technical skills required.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <Check size={20} style={{ color: 'var(--color-success)' }} />
              <span style={{ color: 'var(--color-text)', fontWeight: 500 }}>Free demo available</span>
              <span style={{ margin: '0 0.5rem', color: 'var(--color-border)' }}>•</span>
              <Check size={20} style={{ color: 'var(--color-success)' }} />
              <span style={{ color: 'var(--color-text)', fontWeight: 500 }}>No credit card required</span>
              <span style={{ margin: '0 0.5rem', color: 'var(--color-border)' }}>•</span>
              <Check size={20} style={{ color: 'var(--color-success)' }} />
              <span style={{ color: 'var(--color-text)', fontWeight: 500 }}>Setup in under 10 minutes</span>
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
                Request Free Demo <ArrowRight size={20} />
              </button>
              <a
                href="/pricing"
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
                View Pricing
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

export default CallfloDeskAI;
<TelecomPacketAnimation />
