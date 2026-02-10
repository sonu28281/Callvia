import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Check, Phone, Users, BarChart3, Settings, Clock, Zap, Shield, Target, TrendingUp, Headphones, Globe } from 'lucide-react';
import EnquiryModal from '../../components/EnquiryModal';
import LeadForm from '../../components/LeadForm';
import SEO from '../../components/SEO';
import siteConfig from '../../config/site_config.json';
import TelecomPacketAnimation from '../../components/TelecomPacketAnimation';
import getAnimationConfig from '../../config/animation_config';

// Counter animation hook
const useCounter = (end, duration = 2000, shouldStart) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    
    let startTime = null;
    const startValue = 0;
    
    // Parse numeric value from string
    const numericEnd = parseFloat(end.toString().replace(/[^0-9.]/g, ''));
    const suffix = end.toString().replace(/[0-9.]/g, '');
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = startValue + (numericEnd - startValue) * easeOutQuart;
      
      setCount(currentCount.toFixed(suffix.includes('.') ? 2 : 0) + suffix);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, shouldStart]);

  return count;
};

const CallFloSuite = () => {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [heroForm, setHeroForm] = useState({
    companyName: '',
    email: '',
    contactNumber: '+91',
  });
  const [heroFormSubmitting, setHeroFormSubmitting] = useState(false);
  const [heroFormSuccess, setHeroFormSuccess] = useState(false);
  const [heroFormError, setHeroFormError] = useState('');
  const statsRef = useRef(null);

  // Stats intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

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

  const handlePhoneChange = (value) => {
    // Always start with +91
    if (!value.startsWith('+91')) {
      setHeroForm({ ...heroForm, contactNumber: '+91' });
      return;
    }
    // Only allow digits after +91, max 10 digits
    const digitsOnly = value.slice(3).replace(/\D/g, '');
    if (digitsOnly.length <= 10) {
      setHeroForm({ ...heroForm, contactNumber: '+91' + digitsOnly });
    }
  };

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
      // Capture UTM and src from current URL at submission time
      const urlParams = new URLSearchParams(window.location.search);
      const utmParams = {
        utm_source: urlParams.get('utm_source') || '',
        utm_medium: urlParams.get('utm_medium') || '',
        utm_campaign: urlParams.get('utm_campaign') || '',
        utm_content: urlParams.get('utm_content') || '',
        utm_term: urlParams.get('utm_term') || '',
      };
      const srcParam = urlParams.get('src') || '';

      const payload = {
        fullName: heroForm.companyName,
        email: heroForm.email,
        phone: heroForm.contactNumber,
        country: siteConfig.defaults.country,
        lead_source: 'callflosuite-enquiry',
        src: srcParam,
        ...utmParams,
        page_path: window.location.pathname,
        referrer: document.referrer,
        timestamp: new Date().toISOString(),
      };

      // Send to webhook
      const webhookUrl = siteConfig.webhooks.callflosuiteEnquiry;
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
        leadSource="callflo_suite_page"
      />

      {/* Hero Section */}
      <section
        className="hero-section animate-on-scroll"
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, #F7F9FC 0%, #EEF2F7 100%)',
          paddingTop: '5rem',
          paddingBottom: '6rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          overflow: 'hidden',
        }}
      >
        <TelecomPacketAnimation {...getAnimationConfig()} />
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
                  <Phone size={16} style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'middle' }} />
                  Call Center/Enterprise Platform
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
                <span style={{ 
                  background: 'linear-gradient(135deg, var(--color-primary) 0%, #347BF5 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>CallFlo Suite</span><br />
                <span style={{ color: 'var(--color-primary)' }}>Built to Scale</span>
              </h1>

              <p style={{
                fontSize: '1.25rem',
                color: 'var(--color-text-muted)',
                maxWidth: '36rem',
                lineHeight: 1.6,
              }}>
                India's most powerful cloud contact center platform. Built for enterprises and call centers with CCaaS (Contact Center as a Service) capabilities—intelligent routing, real-time monitoring, and team management on carrier-grade infrastructure.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '1rem' }}>
                {[
                  'TRAI-compliant carrier-grade infrastructure',
                  'Unlimited agents & concurrent calls',
                  'White-label ready for resellers',
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
                  <p style={{ color: 'var(--color-text-muted)' }}>We'll be in touch soon.</p>
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
                    Get Started Today
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
                    Schedule a demo and see how CallFlo Suite can transform your contact center
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
                        onChange={(e) => handlePhoneChange(e.target.value)}
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
                          Schedule Demo <ArrowRight size={18} />
                        </>
                      )}
                    </button>
                  </form>

                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '1rem', textAlign: 'center' }}>
                    By submitting, you agree to receive product updates
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Enterprise CCaaS Platform - Everything Your Contact Center Needs
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '48rem', margin: '0 auto' }}>
              Complete Contact Center as a Service (CCaaS) solution with omnichannel support, AI-powered automation, and carrier-grade reliability for efficient inbound & outbound operations at scale
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="features-grid">
            {[
              { 
                icon: Users, 
                title: 'Multi-Agent Management', 
                desc: 'Manage unlimited agents with role-based access control, real-time presence monitoring, and supervisor tools. Support for remote teams with centralized dashboards.', 
                color: 'var(--color-primary)' 
              },
              { 
                icon: BarChart3, 
                title: 'Real-Time Analytics & Dashboards', 
                desc: 'Live call monitoring, queue status, agent performance metrics, and KPI tracking. Wallboard displays for team motivation and performance visibility.', 
                color: 'var(--color-secondary)' 
              },
              { 
                icon: Phone, 
                title: 'Intelligent Call Routing', 
                desc: 'Advanced IVR, skill-based routing, time-based rules, priority queuing, and overflow handling. Ensure every call reaches the right agent at the right time.', 
                color: 'var(--color-premium)' 
              },
              { 
                icon: Clock, 
                title: 'Smart Queue Management', 
                desc: 'Intelligent queue management with position announcements, estimated wait time, callback options, and music on hold. Reduce abandonment rates significantly.', 
                color: 'var(--color-success)' 
              },
              { 
                icon: Settings, 
                title: 'Conversational IVR Builder', 
                desc: 'Multi-level IVR with drag-and-drop builder, DTMF keypress support, speech recognition, and natural language understanding for better customer experience.', 
                color: 'var(--color-info)' 
              },
              { 
                icon: Shield, 
                title: 'Call Recording & Quality Assurance', 
                desc: 'Automatic call recording with secure cloud storage, compliance management, quality monitoring, and coaching tools for continuous agent improvement.', 
                color: 'var(--color-primary)' 
              },
              { 
                icon: Zap, 
                title: 'CRM & API Integrations', 
                desc: 'REST APIs for seamless integration with Salesforce, Zoho, HubSpot, and custom applications. Screen pop, click-to-dial, and automatic data sync.', 
                color: 'var(--color-secondary)' 
              },
              { 
                icon: TrendingUp, 
                title: 'Advanced Analytics & Reporting', 
                desc: 'Comprehensive reporting on call metrics, agent productivity, campaign performance, customer satisfaction, and business insights with customizable reports.', 
                color: 'var(--color-premium)' 
              },
              { 
                icon: Target, 
                title: 'Outbound Campaign Manager', 
                desc: 'Create and manage outbound campaigns with predictive/progressive/preview dialer, contact list management, DND scrubbing, and compliance features.', 
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

      {/* Animated Stats Section */}
      <section 
        ref={statsRef}
        className="animate-on-scroll" 
        style={{ 
          backgroundColor: 'var(--color-surface)', 
          padding: '4rem 1.5rem', 
          borderTop: '1px solid var(--color-border)', 
          borderBottom: '1px solid var(--color-border)' 
        }}
      >
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
            {[
              { value: '10M+', label: 'Calls Managed', colors: ['var(--color-primary)', 'var(--color-secondary)'] },
              { value: '99.99%', label: 'Uptime SLA', colors: ['var(--color-success)'] },
              { value: '500+', label: 'Active Call Centers', colors: ['var(--color-premium)'] },
              { value: '<2s', label: 'Avg Connection Time', colors: ['var(--color-info)'] },
            ].map((stat, idx) => {
              const count = useCounter(stat.value, 2000, statsVisible);
              return (
                <div key={idx} style={{ textAlign: 'center' }}>
                  <div style={{ 
                    fontSize: 'clamp(3rem, 5vw, 3.75rem)', 
                    fontFamily: 'Sora, sans-serif', 
                    fontWeight: 700, 
                    background: stat.colors.length > 1 
                      ? `linear-gradient(135deg, ${stat.colors[0]}, ${stat.colors[1]})`
                      : stat.colors[0],
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '0.75rem' 
                  }}>
                    {statsVisible ? count : '0'}
                  </div>
                  <p style={{ color: 'var(--color-text-muted)', fontWeight: 500 }}>
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form Section with CTA */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-bg)', padding: '6rem 1.5rem 6rem', marginBottom: 0 }}>
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
              Start with <span style={{ 
                background: 'linear-gradient(135deg, var(--color-primary) 0%, #347BF5 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>CallFlo Suite</span> Today
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '42rem', margin: '0 auto 2rem' }}>
              Experience carrier-grade call center infrastructure with no upfront costs
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <Check size={20} style={{ color: 'var(--color-success)' }} />
              <span style={{ color: 'var(--color-text)', fontWeight: 500 }}>$1 free credit to get started</span>
              <span style={{ margin: '0 0.5rem', color: 'var(--color-border)' }}>•</span>
              <Check size={20} style={{ color: 'var(--color-success)' }} />
              <span style={{ color: 'var(--color-text)', fontWeight: 500 }}>No credit card required</span>
              <span style={{ margin: '0 0.5rem', color: 'var(--color-border)' }}>•</span>
              <Check size={20} style={{ color: 'var(--color-success)' }} />
              <span style={{ color: 'var(--color-text)', fontWeight: 500 }}>24/7 support included</span>
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
                Get Started Now <ArrowRight size={20} />
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

export default CallFloSuite;
