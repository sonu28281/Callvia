import { useState, useEffect } from 'react';
import { ArrowRight, Check, Network, Cloud, Zap, Shield, TrendingUp, Globe2, PhoneCall, Activity } from 'lucide-react';
import EnquiryModal from '../../components/EnquiryModal';
import TelecomPacketAnimation from '../../components/TelecomPacketAnimation';
import SEO from '../../components/SEO';
import { useAnimationConfig } from '../../hooks/useAnimationConfig';

const SipTrunks = () => {
  const animationConfig = useAnimationConfig();
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
        leadSource="sip_trunks_page"
      />

      {/* Hero Section */}
      <section
        className="hero-section animate-on-scroll"
        style={{
          position: 'relative',
          background: 'var(--color-surface)',
          paddingTop: '5rem',
          paddingBottom: '6rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          overflow: 'hidden',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <TelecomPacketAnimation {...animationConfig} />
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
                  <Network size={16} style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'middle' }} />
                  SIP Trunking
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
                Enterprise-Grade<br />
                <span style={{ color: 'var(--color-primary)' }}>SIP Trunking</span>
              </h1>

              <p style={{
                fontSize: '1.25rem',
                color: 'var(--color-text-muted)',
                maxWidth: '36rem',
                lineHeight: 1.6,
              }}>
                Carrier-grade SIP trunks with 99.99% uptime, unlimited concurrent channels, and instant scalability for enterprises and call centers.
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
                <Network size={100} style={{ color: 'var(--color-primary)' }} strokeWidth={1.5} />
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
              Enterprise-Ready Features
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '42rem', margin: '0 auto' }}>
              Built for reliability, scalability, and business continuity
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="features-grid">
            {[
              { icon: Cloud, title: 'Carrier-Grade Reliability', desc: '99.99% uptime SLA with redundant infrastructure and failover', color: 'var(--color-primary)' },
              { icon: Zap, title: 'Instant Scalability', desc: 'Add unlimited channels instantly without hardware upgrades', color: 'var(--color-secondary)' },
              { icon: Shield, title: 'TLS & SRTP Encryption', desc: 'Bank-grade security for all voice communications', color: 'var(--color-premium)' },
              { icon: TrendingUp, title: 'Business Continuity', desc: 'Automatic failover and disaster recovery built-in', color: 'var(--color-success)' },
              { icon: Globe2, title: 'Global Connectivity', desc: 'Connect to any PBX, softphone, or VoIP device worldwide', color: 'var(--color-info)' },
              { icon: Activity, title: 'Real-time Monitoring', desc: 'Live call metrics, quality monitoring, and analytics dashboard', color: 'var(--color-primary)' },
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

      {/* Benefits Section */}
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
              Why Choose Callvia SIP Trunks?
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '42rem', margin: '0 auto' }}>
              Benefits that drive results for your business
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }} className="benefits-grid">
            {[
              { 
                title: 'Reduce Communication Costs', 
                desc: 'Save up to 70% on phone bills compared to traditional PSTN lines',
                points: ['No hardware investment', 'Pay per minute pricing', 'Unlimited concurrent channels']
              },
              { 
                title: 'Scale Instantly', 
                desc: 'Add capacity in seconds without physical infrastructure changes',
                points: ['No installation delays', 'Cloud-based provisioning', 'Flexible channel allocation']
              },
              { 
                title: 'Business Continuity', 
                desc: 'Built-in redundancy ensures your calls never drop',
                points: ['Automatic failover', 'Multiple carrier paths', '99.99% uptime guarantee']
              },
              { 
                title: 'Work From Anywhere', 
                desc: 'Enable remote work with cloud-based phone system',
                points: ['Device independent', 'VPN-friendly', 'Mobile & desktop apps']
              },
            ].map((benefit, idx) => (
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
                  e.currentTarget.style.borderColor = 'var(--color-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                }}
              >
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.75rem' }}>
                  {benefit.title}
                </h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  {benefit.desc}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {benefit.points.map((point, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Check size={16} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
                      <span style={{ color: 'var(--color-text)', fontSize: '0.875rem' }}>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .benefits-grid {
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
            Ready to Upgrade Your Phone System?
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '2.5rem', maxWidth: '42rem', margin: '0 auto 2.5rem auto' }}>
            Get started with enterprise SIP trunking today. No contracts, instant provisioning.
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

export default SipTrunks;
