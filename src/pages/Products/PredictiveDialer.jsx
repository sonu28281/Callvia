import { useState, useEffect } from 'react';
import { ArrowRight, Check, PhoneCall, TrendingUp, Zap, Users, Target, BarChart3, Clock, Headphones } from 'lucide-react';
import EnquiryModal from '../../components/EnquiryModal';
import SEO from '../../components/SEO';
import TelecomPacketAnimation from '../../components/TelecomPacketAnimation';
import getAnimationConfig from '../../config/animation_config';

const PredictiveDialer = () => {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

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

  return (
    <div style={{ width: '100%', backgroundColor: 'var(--color-bg)' }}>
      <SEO />
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        leadSource="predictive_dialer_page"
      />

      {/* Hero Section */}
      <section
        className="hero-section animate-on-scroll"
        style={{
          position: 'relative',
          background: 'var(--color-surface)',
          paddingTop: '8rem',
          paddingBottom: '6rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          overflow: 'hidden',
          borderBottom: '1px solid var(--color-border)',
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
                  <PhoneCall size={16} style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'middle' }} />
                  Predictive Dialer
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
                3X Your Agent<br />
                <span style={{ color: 'var(--color-primary)' }}>Productivity</span>
              </h1>

              <p style={{
                fontSize: '1.25rem',
                color: 'var(--color-text-muted)',
                maxWidth: '36rem',
                lineHeight: 1.6,
              }}>
                AI-powered predictive dialer that maximizes talk time and minimizes idle time. Scale outbound campaigns with intelligent dialing algorithms.
              </p>

              <div style={{ display: 'flex', gap: '1rem', paddingTop: '1rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setIsEnquiryModalOpen(true)}
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
                  Book Demo <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{
                width: '280px',
                height: '280px',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <PhoneCall size={100} style={{ color: 'var(--color-primary)' }} strokeWidth={1.5} />
              </div>
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
              Intelligent Dialing Features
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '42rem', margin: '0 auto' }}>
              Maximize agent productivity with AI-driven call distribution
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="features-grid">
            {[
              { icon: Zap, title: 'Predictive Algorithm', desc: 'AI predicts agent availability and dials multiple numbers simultaneously', color: 'var(--color-primary)' },
              { icon: Target, title: 'Call Pacing', desc: 'Automatically adjust dial rate based on agent availability and connect rates', color: 'var(--color-secondary)' },
              { icon: TrendingUp, title: 'Contact Management', desc: 'Smart lead prioritization and call list management with DNC compliance', color: 'var(--color-premium)' },
              { icon: Users, title: 'CRM Integration', desc: 'Two-way sync with Salesforce, Zoho, HubSpot, and custom CRMs', color: 'var(--color-success)' },
              { icon: BarChart3, title: 'Real-time Analytics', desc: 'Live dashboards showing agent performance, connect rates, and campaign metrics', color: 'var(--color-info)' },
              { icon: Clock, title: 'Time Zone Management', desc: 'Respect calling windows and automatically adjust for time zones', color: 'var(--color-primary)' },
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

      {/* Stats Section */}
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
              Proven Results
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '42rem', margin: '0 auto' }}>
              See how businesses transform their outbound operations
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }} className="stats-grid">
            {[
              { value: '3X', label: 'Agent Productivity', color: 'var(--color-primary)' },
              { value: '200%', label: 'More Conversations', color: 'var(--color-secondary)' },
              { value: '40%', label: 'Lower Cost/Call', color: 'var(--color-premium)' },
              { value: '95%', label: 'Connect Rate', color: 'var(--color-success)' },
            ].map((stat, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '1rem',
                  padding: '2rem',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '3rem', fontFamily: 'Sora, sans-serif', fontWeight: 700, color: stat.color, marginBottom: '0.5rem' }}>
                  {stat.value}
                </div>
                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 1024px) {
            .stats-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 640px) {
            .stats-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* CTA Section */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-bg)', padding: '6rem 1.5rem', marginBottom: 0 }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontFamily: 'Sora, sans-serif',
            fontWeight: 700,
            color: 'var(--color-text)',
            marginBottom: '1.5rem',
            letterSpacing: '-0.02em',
          }}>
            Ready to Scale Your Outbound Campaigns?
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '2.5rem', maxWidth: '42rem', margin: '0 auto 2.5rem auto' }}>
            Start with AI-powered predictive dialing. Boost productivity from day one.
          </p>

          <button
            onClick={() => setIsEnquiryModalOpen(true)}
            style={{
              background: 'linear-gradient(135deg, var(--color-primary) 0%, #347BF5 100%)',
              color: 'var(--color-primary-text)',
              padding: '1rem 2.5rem',
              borderRadius: '0.5rem',
              fontWeight: 600,
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
            Get Started <ArrowRight size={20} />
          </button>
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

export default PredictiveDialer;
