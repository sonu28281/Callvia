import { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, Phone, Zap, Cpu, Globe, CreditCard, Building2, MessageSquare, FileText } from 'lucide-react';
import EnquiryModal from '../components/EnquiryModal';
import TelecomPacketAnimation from '../components/TelecomPacketAnimation';
import siteConfig from '../config/site_config.json';
import getAnimationConfig from '../config/animation_config';

// Counter animation hook
const useCounter = (end, duration = 2000, shouldStart) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    
    // Special handling for 24/7 format
    if (end === '24/7') {
      setCount('24/7');
      return;
    }
    
    let startTime = null;
    const startValue = 0;
    
    // Parse numeric value from string (e.g., "10M+" -> 10)
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

// Stats Counter Component
const StatsCounter = ({ statsVisible }) => {
  const stats = [
    { number: '10M+', label: 'Calls Managed', colors: ['var(--color-primary)', 'var(--color-secondary)'] },
    { number: '99.99%', label: 'Uptime SLA', colors: ['var(--color-success)'] },
    { number: '50+', label: 'Enterprise Clients', colors: ['var(--color-premium)'] },
    { number: '24/7', label: '24/7 Support Coverage', colors: ['var(--color-info)'] },
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '3rem',
      }}
    >
      {stats.map((stat, i) => {
        const count = useCounter(stat.number, 2000, statsVisible);
        return (
          <div key={i} style={{ textAlign: 'center' }}>
            <div
              style={{
                fontSize: 'clamp(3rem, 5vw, 3.75rem)',
                fontFamily: 'Sora, sans-serif',
                fontWeight: 700,
                background: stat.colors.length > 1 
                  ? `linear-gradient(135deg, ${stat.colors[0]}, ${stat.colors[1]})`
                  : stat.colors[0],
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0.75rem',
              }}
            >
              {statsVisible ? count : '0'}
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontWeight: 500 }}>{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
};

const Home = () => {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryLeadSource, setEnquiryLeadSource] = useState('homeenquiry');
  const [earlyAccessForm, setEarlyAccessForm] = useState({
    companyName: '',
    email: '',
    contactNumber: '+91',
  });
  const [earlyAccessSubmitting, setEarlyAccessSubmitting] = useState(false);
  const [earlyAccessSuccess, setEarlyAccessSuccess] = useState(false);
  const [earlyAccessError, setEarlyAccessError] = useState('');
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

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

  // Intersection observer for on-scroll animations
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

    // Observe all elements with animate-on-scroll class
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const openEnquiryModal = (source) => {
    setEnquiryLeadSource(source);
    setIsEnquiryModalOpen(true);
  };

  const handleEarlyAccessSubmit = async (e) => {
    e.preventDefault();
    setEarlyAccessError('');

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!earlyAccessForm.companyName) {
      setEarlyAccessError('Company name is required');
      return;
    }
    if (!earlyAccessForm.email || !emailRegex.test(earlyAccessForm.email)) {
      setEarlyAccessError('Please enter a valid email address');
      return;
    }
    // Phone validation
    const phoneDigits = earlyAccessForm.contactNumber.replace(/\D/g, '');
    if (!earlyAccessForm.contactNumber.startsWith('+91') || phoneDigits.length !== 12) {
      setEarlyAccessError('Please enter a valid 10-digit Indian mobile number');
      return;
    }

    setEarlyAccessSubmitting(true);

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
        fullName: earlyAccessForm.companyName,
        email: earlyAccessForm.email,
        phone: earlyAccessForm.contactNumber,
        country: siteConfig.defaults.country,
        lead_source: 'earlyaccess_home',
        src: srcParam,
        ...utmParams,
        page_path: window.location.pathname,
        referrer: document.referrer,
        timestamp: new Date().toISOString(),
      };

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

      setEarlyAccessSuccess(true);
      setEarlyAccessForm({ companyName: '',email: '',
        contactNumber: '+91',
      });
    } catch (err) {
      setEarlyAccessError('Failed to submit. Please try again.');
    } finally {
      setEarlyAccessSubmitting(false);
    }
  };
  return (
    <div style={{ width: '100%', backgroundColor: 'var(--color-bg)' }}>
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        leadSource={enquiryLeadSource}
      />

      {/* ========== HERO SECTION ========== */}
      <section
        className="hero-section"
        style={{
          position: 'relative',
          paddingTop: '6rem',
          paddingBottom: '6rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          overflow: 'hidden',
        }}
      >
        <TelecomPacketAnimation {...getAnimationConfig()} />
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
            {/* Left Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Badge */}
              <div>
                <div
                  style={{
                    display: 'inline-block',
                    padding: '0.5rem 1rem',
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '0.5rem',
                    color: 'var(--color-text-muted)',
                    fontWeight: 500,
                    fontSize: '0.875rem',
                  }}
                >
                  TRAI-Approved Platform
                </div>
              </div>

              {/* Main Heading */}
              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                  fontFamily: 'Sora, sans-serif',
                  fontWeight: 700,
                  color: 'var(--color-text)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                }}
              >
                Enterprise Telecom
                <br />
                <span style={{ color: 'var(--color-primary)' }}>Infrastructure</span>
              </h1>

              {/* Subheading */}
              <p
                style={{
                  fontSize: '1.25rem',
                  color: 'var(--color-text-muted)',
                  maxWidth: '36rem',
                  lineHeight: 1.6,
                }}
              >
                VNO-approved platform powering secure domestic calling, AI automation, and white-label telecom services.
              </p>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', gap: '1rem', paddingTop: '1rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => openEnquiryModal('homeenquiry')}
                  className="primary-cta-button"
                  style={{
                    background: 'linear-gradient(135deg, var(--color-primary) 0%, #347BF5 100%)',
                    color: 'var(--color-primary-text)',
                    padding: '1rem 2rem',
                    borderRadius: '0.5rem',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
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
                  Book a Demo <ArrowRight size={18} />
                </button>
                <a
                  href="/pricing"
                  style={{
                    border: '2px solid var(--color-border)',
                    color: 'var(--color-text)',
                    backgroundColor: 'transparent',
                    padding: '1rem 2rem',
                    borderRadius: '0.5rem',
                    fontWeight: 600,
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

              {/* Trust Bullets */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '1rem' }}>
                {[
                  'TRAI-approved VNO infrastructure',
                  'Carrier-grade backend built in-house',
                  'White-label ready for partners',
                ].map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle2 size={20} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Early Access Form */}
            <div
              style={{
                backgroundColor: 'var(--color-elevated-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '1rem',
                padding: '2rem',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
              }}
            >
              {earlyAccessSuccess ? (
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
                    Get Early Access
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
                    Join leading enterprises using our platform
                  </p>

                  {earlyAccessError && (
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
                      {earlyAccessError}
                    </div>
                  )}

                  <form onSubmit={handleEarlyAccessSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
                        value={earlyAccessForm.companyName}
                        onChange={(e) => setEarlyAccessForm({ ...earlyAccessForm, companyName: e.target.value })}
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
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={earlyAccessForm.email}
                        onChange={(e) => setEarlyAccessForm({ ...earlyAccessForm, email: e.target.value })}
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
                        htmlFor="contactNumber"
                        style={{
                          display: 'block',
                          marginBottom: '0.5rem',
                          fontWeight: 500,
                          color: 'var(--color-text)',
                          fontSize: '0.875rem',
                        }}
                      >
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        id="contactNumber"
                        value={earlyAccessForm.contactNumber}
                        onChange={(e) => {
                          const value = e.target.value;
                          // Always maintain +91 prefix
                          if (!value.startsWith('+91')) {
                            setEarlyAccessForm({ ...earlyAccessForm, contactNumber: '+91' + value.replace(/\D/g, '') });
                            return;
                          }
                          // Limit to +91 + 10 digits
                          const digits = value.slice(3).replace(/\D/g, '');
                          if (digits.length <= 10) {
                            setEarlyAccessForm({ ...earlyAccessForm, contactNumber: '+91' + digits });
                          }
                        }}
                        placeholder="+91XXXXXXXXXX"
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
                          // If empty, set +91
                          if (!e.target.value) {
                            setEarlyAccessForm({ ...earlyAccessForm, contactNumber: '+91' });
                          }
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'var(--color-border)';
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={earlyAccessSubmitting}
                      style={{
                        width: '100%',
                        padding: '0.875rem',
                        backgroundColor: earlyAccessSubmitting ? 'var(--color-text-muted)' : 'var(--color-primary)',
                        color: 'var(--color-primary-text)',
                        border: 'none',
                        borderRadius: '0.5rem',
                        fontSize: '1rem',
                        fontWeight: 600,
                        cursor: earlyAccessSubmitting ? 'not-allowed' : 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        if (!earlyAccessSubmitting) {
                          e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!earlyAccessSubmitting) {
                          e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                        }
                      }}
                    >
                      {earlyAccessSubmitting ? 'Submitting...' : 'Get Started'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHO WE ARE SECTION ========== */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-surface)', padding: '6rem 1.5rem' }}>
        <div className="container">
          <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '0.5rem 1rem',
                    backgroundColor: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-accent)',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                  }}
                >
                  WHO WE ARE
                </span>
              </div>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontFamily: 'Sora, sans-serif',
                  fontWeight: 700,
                  color: 'var(--color-text)',
                  marginBottom: '1.5rem',
                  letterSpacing: '-0.02em',
                }}
              >
                India's <span style={{ color: 'var(--color-primary)' }}>Telecom-First</span> Cloud Platform
              </h2>
              <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '48rem', margin: '0 auto', lineHeight: 1.7 }}>
                Callvia is a <strong style={{ color: 'var(--color-text)' }}>VNO-approved</strong> and <strong style={{ color: 'var(--color-text)' }}>TRAI-compliant</strong> telecom infrastructure provider built exclusively for the Indian market. We power <strong style={{ color: 'var(--color-text)' }}>domestic voice operations</strong>, <strong style={{ color: 'var(--color-text)' }}>AI-driven automation</strong>, and <strong style={{ color: 'var(--color-text)' }}>white-label telecom services</strong> for enterprises, resellers, and call centers.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', marginTop: '3rem', maxWidth: '56rem', margin: '3rem auto 0' }} className="who-we-are-grid">
              {[
                {
                  icon: '🏛️',
                  title: 'VNO-Approved',
                  description: 'Licensed virtual network operator with full regulatory compliance',
                  highlight: 'TRAI Certified'
                },
                {
                  icon: '🇮🇳',
                  title: 'India-First',
                  description: 'Built specifically for Indian telecom ecosystem and regulations',
                  highlight: 'Pan-India Coverage'
                },
                {
                  icon: '🤖',
                  title: 'AI-Powered',
                  description: 'Advanced AI voice agents and automation for call operations',
                  highlight: 'Next-Gen Technology'
                },
                {
                  icon: '🏷️',
                  title: 'White-Label Ready',
                  description: 'Launch your own branded telecom service in minutes',
                  highlight: 'Fully Customizable'
                },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '1rem',
                    padding: '1.75rem',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = 'var(--color-primary)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(29, 108, 244, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '1.125rem', fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                    {item.description}
                  </p>
                  <span style={{
                    display: 'inline-block',
                    padding: '0.25rem 0.75rem',
                    backgroundColor: 'rgba(29, 108, 244, 0.1)',
                    color: 'var(--color-primary)',
                    borderRadius: '0.375rem',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                  }}>
                    {item.highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== PRODUCTS SECTION ========== */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-bg)', padding: '6rem 1.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-accent)',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                }}
              >
                OUR PRODUCTS
              </span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontFamily: 'Sora, sans-serif',
                fontWeight: 700,
                color: 'var(--color-text)',
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em',
              }}
            >
              Complete <span style={{ color: 'var(--color-primary)' }}>Telecom Suite</span>
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '42rem', margin: '0 auto' }}>
              Powerful products designed for enterprise communication needs
            </p>
          </div>

          {/* Featured Products - Hero Layout */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginBottom: '4rem' }}>
            {[
              {
                name: 'CallFlo Suite',
                tagline: 'Complete Call Center Platform',
                description: 'Enterprise-grade cloud call center with inbound/outbound capabilities, IVR, call routing, recording, and real-time analytics. Power your entire customer communication from a single unified platform.',
                icon: '📞',
                color: '#1D6CF4',
                features: ['Multi-agent Dashboard', 'Call Recording', 'Real-time Analytics', 'IVR & Routing'],
                link: '/solutions/callflo-suite',
              },
              {
                name: 'CallFlo DeskAI',
                tagline: 'AI Receptionist & Automation',
                description: 'Intelligent AI receptionist that answers calls 24/7, handles customer queries, books appointments, and seamlessly transfers to human agents. Never miss a call again with AI-powered automation.',
                icon: '🤖',
                color: '#10B981',
                features: ['24/7 Availability', 'Smart Call Handling', 'Appointment Booking', 'Live Agent Handoff'],
                link: '/solutions/ai-receptionist',
              },
              {
                name: 'Partners',
                tagline: 'Reseller Program',
                description: 'Launch your own white-label telecom service with our comprehensive reseller program. Complete infrastructure, billing system, and technical support included. Build your telecom business without any upfront investment.',
                icon: '🤝',
                color: '#8B5CF6',
                features: ['White-Label Platform', 'Custom Pricing', 'Full API Access', 'Dedicated Support'],
                link: '/solutions/partners',
              },
            ].map((product, index) => (
              <div
                key={index}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '300px 1fr',
                  gap: '3rem',
                  backgroundColor: 'var(--color-surface)',
                  border: '2px solid var(--color-border)',
                  borderRadius: '1.25rem',
                  padding: '2.5rem',
                  alignItems: 'center',
                  transition: 'all 0.3s ease',
                }}
                className="product-hero-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = product.color;
                  e.currentTarget.style.boxShadow = `0 12px 40px ${product.color}25`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Image Placeholder */}
                <div
                  style={{
                    width: '100%',
                    height: '250px',
                    backgroundColor: `${product.color}15`,
                    border: `2px solid ${product.color}40`,
                    borderRadius: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '5rem',
                    flexShrink: 0,
                  }}
                >
                  {product.icon}
                </div>

                {/* Product Content */}
                <div>
                  {/* Tagline */}
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: product.color,
                      fontWeight: 600,
                      marginBottom: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {product.tagline}
                  </p>

                  {/* Product Name */}
                  <h3
                    style={{
                      fontSize: '2rem',
                      fontFamily: 'Sora, sans-serif',
                      fontWeight: 700,
                      color: 'var(--color-text)',
                      marginBottom: '1rem',
                    }}
                  >
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '1rem' }}>
                    {product.description}
                  </p>

                  {/* Features List */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '1.5rem' }}>
                    {product.features.map((feature, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <CheckCircle2 size={16} style={{ color: product.color, flexShrink: 0 }} />
                        <span style={{ fontSize: '0.875rem', color: 'var(--color-text)', fontWeight: 500 }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href={product.link}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      backgroundColor: product.color,
                      color: '#FFFFFF',
                      padding: '0.875rem 1.75rem',
                      borderRadius: '0.5rem',
                      fontWeight: 600,
                      fontSize: '0.9375rem',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(4px)';
                      e.currentTarget.style.boxShadow = `0 4px 20px ${product.color}50`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    Explore {product.name} <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Sub-Products */}
          <div style={{ marginTop: '3rem' }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 600,
              color: 'var(--color-text)',
              marginBottom: '1.5rem',
              textAlign: 'center',
            }}>
              Essential Products
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {[
                {
                  name: 'DID Numbers',
                  description: 'Pan-India virtual numbers with instant activation',
                  icon: Phone,
                  link: '/products/did-numbers',
                },
                {
                  name: 'SIP Trunks',
                  description: 'Carrier-grade SIP connectivity for enterprises',
                  icon: Zap,
                  link: '/products/sip-trunks',
                },
                {
                  name: 'Call Recording',
                  description: 'Secure, compliant call recording & storage',
                  icon: Cpu,
                  link: '/products/call-recording',
                },
                {
                  name: 'Predictive Dialer',
                  description: 'Automated dialing for outbound campaigns',
                  icon: Phone,
                  link: '/products/predictive-dialer',
                },
              ].map((product, index) => {
                const Icon = product.icon;
                return (
                  <a
                    key={index}
                    href={product.link}
                    style={{
                      backgroundColor: 'var(--color-surface)',
                      border: '2px solid var(--color-border)',
                      borderRadius: '0.75rem',
                      padding: '1.75rem',
                      textDecoration: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-primary)';
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(29, 108, 244, 0.2)';
                      e.currentTarget.querySelector('.product-arrow').style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-border)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.querySelector('.product-arrow').style.transform = 'translateX(0)';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <div style={{
                        width: '3rem',
                        height: '3rem',
                        backgroundColor: 'rgba(29, 108, 244, 0.1)',
                        border: '1px solid rgba(29, 108, 244, 0.2)',
                        borderRadius: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        <Icon size={24} style={{ color: 'var(--color-primary)' }} />
                      </div>
                      <ArrowRight 
                        className="product-arrow" 
                        size={20} 
                        style={{ 
                          color: 'var(--color-primary)', 
                          transition: 'transform 0.2s ease',
                          flexShrink: 0,
                        }} 
                      />
                    </div>
                    <h4 style={{ fontSize: '1.125rem', fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                      {product.name}
                    </h4>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                      {product.description}
                    </p>
                    <span style={{
                      color: 'var(--color-primary)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      marginTop: 'auto',
                    }}>
                      View Product →
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========== ADDITIONAL SERVICES SECTION ========== */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-bg)', padding: '6rem 1.5rem' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <h3 style={{
              fontSize: '2rem',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 600,
              color: 'var(--color-text)',
              marginBottom: '1rem',
              textAlign: 'center',
            }}>
              Additional Services
            </h3>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--color-text-muted)',
              marginBottom: '2.5rem',
              textAlign: 'center',
              maxWidth: '42rem',
              margin: '0 auto 2.5rem',
            }}>
              Enhance your communication infrastructure with our advanced automation and AI-powered solutions
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {[
                {
                  name: 'WhatsApp Automation',
                  description: 'Automate WhatsApp messages, notifications, and customer follow-ups with our API',
                  icon: MessageSquare,
                  link: '/products/whatsapp-automation',
                },
                {
                  name: 'AI Voice Agents',
                  description: 'Programmable AI agents for intelligent calling workflows and automation',
                  icon: Cpu,
                  link: '/products/ai-agents',
                },
                {
                  name: 'AI Transcription',
                  description: 'Real-time call transcription with AI-powered insights for quality assurance',
                  icon: FileText,
                  link: '/products/ai-transcription',
                },
              ].map((service, index) => {
                const Icon = service.icon;
                return (
                  <a
                    key={index}
                    href={service.link}
                    style={{
                      backgroundColor: 'var(--color-surface)',
                      border: '2px solid var(--color-border)',
                      borderRadius: '0.75rem',
                      padding: '1.75rem',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-primary)';
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(29, 108, 244, 0.2)';
                      e.currentTarget.querySelector('.service-arrow').style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-border)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.querySelector('.service-arrow').style.transform = 'translateX(0)';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <div style={{
                        width: '3rem',
                        height: '3rem',
                        backgroundColor: 'rgba(29, 108, 244, 0.1)',
                        border: '1px solid rgba(29, 108, 244, 0.2)',
                        borderRadius: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        <Icon size={24} style={{ color: 'var(--color-primary)' }} />
                      </div>
                      <ArrowRight 
                        className="service-arrow" 
                        size={20} 
                        style={{ 
                          color: 'var(--color-primary)', 
                          transition: 'transform 0.2s ease',
                          flexShrink: 0,
                        }} 
                      />
                    </div>
                    <h4 style={{ fontSize: '1.125rem', fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                      {service.name}
                    </h4>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                      {service.description}
                    </p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========== FEATURES SECTION ========== */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-surface)', padding: '6rem 1.5rem' }}>
        <div className="container">
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  backgroundColor: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-accent)',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                }}
              >
                PLATFORM FEATURES
              </span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontFamily: 'Sora, sans-serif',
                fontWeight: 700,
                color: 'var(--color-text)',
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em',
              }}
            >
              Core <span style={{ color: 'var(--color-primary)' }}>Telecom Capabilities</span>
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '42rem', margin: '0 auto' }}>
              Enterprise-grade infrastructure with powerful features for every calling need
            </p>
          </div>

          {/* Features Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
            }}
            className="features-grid"
          >
            {[
              {
                icon: Phone,
                title: 'DID Numbers',
                description: 'Pan-India virtual numbers with TRAI-approved infrastructure. Instant activation, geographic flexibility, and carrier-grade reliability.',
                features: ['Instant Activation', 'Pan-India Coverage', 'TRAI-Approved'],
              },
              {
                icon: Zap,
                title: 'Cloud Call Center',
                description: 'Enterprise-grade inbound & outbound calling platform. High-volume calls, automatic distribution, comprehensive reporting.',
                features: ['Auto-Routing', 'Real-time Analytics', 'Multi-agent'],
              },
              {
                icon: Cpu,
                title: 'AI Voice Agents',
                description: 'Intelligent programmable voice agents. Smart IVR routing, conversation analytics, seamless handoff to live agents.',
                features: ['AI-Powered', 'Smart Routing', 'Auto-Handoff'],
              },
              {
                icon: Globe,
                title: 'White-Label Platform',
                description: 'Launch branded telecom service. Complete API access, reseller dashboard, billing management, backend support included.',
                features: ['Full Branding', 'Custom Billing', 'API Access'],
              },
              {
                icon: CreditCard,
                title: 'Prepaid Billing',
                description: 'Real-time balance management with instant recharge. Detailed analytics, custom pricing tiers, automated alerts.',
                features: ['Real-time Balance', 'Auto Alerts', 'Custom Pricing'],
              },
              {
                icon: Building2,
                title: 'Enterprise API',
                description: 'Full REST API access for custom integrations. Real-time call logs, CDR data, webhooks, comprehensive documentation.',
                features: ['REST API', 'Webhooks', 'Full Documentation'],
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '1rem',
                    padding: '2rem',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-primary)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: '3.5rem',
                      height: '3.5rem',
                      background: 'rgba(29, 108, 244, 0.1)',
                      border: '1px solid rgba(29, 108, 244, 0.2)',
                      borderRadius: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                    }}
                  >
                    <Icon size={28} style={{ color: 'var(--color-primary)' }} />
                  </div>

                  {/* Title */}
                  <h3 style={{ fontSize: '1.25rem', fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.75rem' }}>
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {feature.description}
                  </p>

                  {/* Key Features Badges */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {feature.features.map((feat, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ 
                          width: '6px', 
                          height: '6px', 
                          borderRadius: '50%', 
                          backgroundColor: 'var(--color-secondary)',
                          flexShrink: 0 
                        }} />
                        <span style={{
                          color: 'var(--color-text)',
                          fontSize: '0.875rem',
                          fontWeight: 500,
                        }}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
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

      {/* ========== PLATFORM CAPABILITIES ========== */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-bg)', padding: '6rem 1.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontFamily: 'Sora, sans-serif',
                fontWeight: 700,
                color: 'var(--color-text)',
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em',
              }}
            >
              <span style={{ color: 'var(--color-primary)' }}>Enterprise-Grade</span> Infrastructure
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '42rem', margin: '0 auto' }}>
              Built for scale with <strong style={{ color: 'var(--color-text)' }}>carrier-grade reliability</strong> and <strong style={{ color: 'var(--color-text)' }}>telecom-first</strong> architecture
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem',
            }}
            className="platform-grid"
          >
            {[
              {
                icon: '📊',
                title: 'Real-time Call Management',
                description: 'Monitor and control every call across your network with live dashboard',
                color: '#06B6D4',
              },
              {
                icon: '📈',
                title: 'Advanced Analytics',
                description: 'Deep insights into call quality, duration, routing, and agent performance',
                color: '#10B981',
              },
              {
                icon: '🔐',
                title: 'Enterprise Security',
                description: 'Bank-grade encryption and compliance with all telecom regulations',
                color: '#8B5CF6',
              },
              {
                icon: '⚡',
                title: 'Infinite Scalability',
                description: 'Handle millions of simultaneous calls without performance degradation',
                color: '#1D6CF4',
              },
            ].map((item, index) => (
              <div key={index} style={{ display: 'flex', gap: '1.25rem' }}>
                <div
                  style={{
                    flexShrink: 0,
                    width: '3.5rem',
                    height: '3.5rem',
                    backgroundColor: `${item.color}15`,
                    border: `1px solid ${item.color}30`,
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.75rem',
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .platform-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* ========== BENEFITS SECTION ========== */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-surface)', padding: '6rem 1.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontFamily: 'Sora, sans-serif',
                fontWeight: 700,
                color: 'var(--color-text)',
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em',
              }}
            >
              Why Choose <span style={{ color: 'var(--color-primary)' }}>Callvia</span>
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '42rem', margin: '0 auto' }}>
              Trusted by <strong style={{ color: 'var(--color-text)' }}>startups</strong> and <strong style={{ color: 'var(--color-text)' }}>enterprises</strong> for scalable telecom infrastructure
            </p>
          </div>

          {/* Checkbox-style Benefits List */}
          <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.5rem',
              }}
              className="benefits-list"
            >
              {[
                {
                  title: 'White-Label Ready',
                  description: 'Launch your own branded telecom service instantly with complete customization',
                },
                {
                  title: 'Instant Deployment',
                  description: 'Go live in minutes with no complex setup or infrastructure investment required',
                },
                {
                  title: 'API-First Design',
                  description: 'Seamless integration with RESTful API and comprehensive documentation',
                },
                {
                  title: 'Cost Effective',
                  description: 'Pay only for what you use with transparent pricing and no hidden fees',
                },
                {
                  title: 'AI Automation',
                  description: 'Scale operations with advanced voice AI handling complex interactions',
                },
                {
                  title: 'Operator Mindset',
                  description: 'Built by telecom professionals with 15+ years of operations experience',
                },
                {
                  title: '99.99% Uptime SLA',
                  description: 'Carrier-grade infrastructure ensuring maximum reliability and performance',
                },
                {
                  title: 'TRAI Compliance',
                  description: 'Fully compliant with Indian telecom regulations and guidelines',
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    padding: '1.5rem',
                    backgroundColor: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '0.75rem',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-primary)';
                    e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.backgroundColor = 'var(--color-bg)';
                  }}
                >
                  <div style={{ flexShrink: 0, paddingTop: '0.125rem' }}>
                    <CheckCircle2 size={24} style={{ color: 'var(--color-success)', strokeWidth: 2.5 }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.375rem' }}>
                      {benefit.title}
                    </h3>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem', lineHeight: 1.6, margin: 0 }}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>

        <style>{`
          @media (max-width: 768px) {
            .benefits-list {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section ref={statsRef} style={{ backgroundColor: 'var(--color-surface)', padding: '4rem 1.5rem', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <StatsCounter statsVisible={statsVisible} />
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-bg)', padding: '6rem 1.5rem', marginBottom: 0 }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 700,
              color: 'var(--color-text)',
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
            }}
          >
            Ready to Scale Your
            <br />
            Telecom Operations?
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '2.5rem', maxWidth: '42rem', margin: '0 auto 2.5rem auto' }}>
            Join enterprises building the future of domestic voice infrastructure
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => openEnquiryModal('getstarted_home')}
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-primary-text)',
                padding: '1rem 2.5rem',
                borderRadius: '0.5rem',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.backgroundColor = 'var(--color-primary-hover)';
                e.target.style.boxShadow = '0 4px 16px rgba(29, 108, 244, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.backgroundColor = 'var(--color-primary)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Get Started <ArrowRight size={20} />
            </button>
            <a
              href="/contact"
              style={{
                border: '2px solid var(--color-border)',
                color: 'var(--color-text)',
                backgroundColor: 'transparent',
                padding: '1rem 2.5rem',
                borderRadius: '0.5rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--color-surface)';
                e.target.style.borderColor = 'var(--color-primary)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.borderColor = 'var(--color-border)';
              }}
            >
              Talk to Sales
            </a>
          </div>

          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', marginTop: '2rem' }}>
            Enterprise SLA guaranteed. Live support for India-based teams.
          </p>
        </div>
      </section>

      <style>{`
        /* Hero section styling with dark mode support */
        .hero-section {
          background: linear-gradient(135deg, #F7F9FC 0%, #EEF2F7 100%);
        }

        [data-theme="dark"] .hero-section {
          background: linear-gradient(135deg, #070B12 0%, #0B1220 100%) !important;
        }

        /* WHO WE ARE Grid Responsive */
        @media (max-width: 768px) {
          .who-we-are-grid {
            grid-template-columns: 1fr !important;
          }
        }

        /* Product Hero Cards Responsive */
        .product-hero-card {
          grid-template-columns: 300px 1fr !important;
        }

        @media (max-width: 1024px) {
          .product-hero-card {
            grid-template-columns: 250px 1fr !important;
            gap: 2rem !important;
          }
        }

        @media (max-width: 768px) {
          .product-hero-card {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }

        /* Animated background elements */
        .hero-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(29, 108, 244, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          animation: float 20s ease-in-out infinite;
          pointer-events: none;
        }

        .hero-section::after {
          content: '';
          position: absolute;
          bottom: -30%;
          left: -5%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(223, 12, 130, 0.06) 0%, transparent 70%);
          border-radius: 50%;
          animation: float 15s ease-in-out infinite reverse;
          pointer-events: none;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(30px, -30px) scale(1.1);
          }
        }

        /* On-scroll animations */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Card hover animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
