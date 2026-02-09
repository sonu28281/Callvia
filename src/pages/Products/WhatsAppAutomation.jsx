import { useState, useEffect } from 'react';
import { ArrowRight, Check, MessageSquare, Zap, Users, Clock, Bot, Send, Globe, Shield, BarChart3, Smartphone } from 'lucide-react';
import EnquiryModal from '../../components/EnquiryModal';
import TelecomPacketAnimation from '../../components/TelecomPacketAnimation';
import SEO from '../../components/SEO';

const WhatsAppAutomation = () => {
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
        leadSource="whatsapp_automation_page"
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
        <TelecomPacketAnimation
          nodeCount={35}
          maxConnectionsPerNode={3}
          packetSpawnRate={0.5}
          maxActivePackets={6}
          packetSpeedMin={30}
          packetSpeedMax={70}
          tailLengthMin={40}
          tailLengthMax={90}
          dropProbability={0.15}
          nodeGlowDuration={600}
          nodeGlowIntensity={1.0}
          edgeColor="rgba(29, 108, 244, 0.06)"
          nodeColor="rgba(29, 108, 244, 0.25)"
          packetColor="rgba(29, 108, 244, 0.8)"
          glowColor="rgba(29, 108, 244, 1)"
          darkModeEdgeColor="rgba(99, 102, 241, 0.1)"
          darkModeNodeColor="rgba(99, 102, 241, 0.35)"
          darkModePacketColor="rgba(99, 102, 241, 0.9)"
          darkModeGlowColor="rgba(99, 102, 241, 1)"
          zIndex={1}
        />
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
                  <MessageSquare size={16} style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'middle' }} />
                  WhatsApp Business API
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
                WhatsApp Business<br />
                <span style={{ color: 'var(--color-primary)' }}>Automation & API</span>
              </h1>

              <p style={{
                fontSize: '1.25rem',
                color: 'var(--color-text-muted)',
                maxWidth: '36rem',
                lineHeight: 1.6,
              }}>
                Send automated WhatsApp messages, notifications, OTPs, and marketing campaigns at scale with official WhatsApp Business API. Reach customers where they are most active.
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
                  Get Started <ArrowRight size={18} />
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
                <MessageSquare size={100} style={{ color: 'var(--color-primary)' }} strokeWidth={1.5} />
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
              Powerful WhatsApp Features
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '42rem', margin: '0 auto' }}>
              Everything you need to automate WhatsApp communication at scale
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="features-grid">
            {[
              { icon: Send, title: 'Bulk Messaging', desc: 'Send personalized messages to thousands of customers instantly', color: 'var(--color-primary)' },
              { icon: Bot, title: 'Smart Automation', desc: 'Automate responses, OTPs, order updates, and notifications', color: 'var(--color-secondary)' },
              { icon: Users, title: 'Broadcast Lists', desc: 'Create targeted broadcast lists for campaigns and updates', color: 'var(--color-premium)' },
              { icon: Clock, title: 'Scheduled Messages', desc: 'Schedule messages for optimal delivery times', color: 'var(--color-success)' },
              { icon: BarChart3, title: 'Analytics Dashboard', desc: 'Track delivery, open rates, and engagement metrics', color: 'var(--color-info)' },
              { icon: Shield, title: 'Official API', desc: 'WhatsApp Business API with verified green tick badge', color: 'var(--color-primary)' },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '0.75rem',
                    padding: '2rem',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = feature.color;
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = `0 8px 24px ${feature.color}25`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    backgroundColor: `${feature.color}15`,
                    border: `1px solid ${feature.color}30`,
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                  }}>
                    <Icon size={24} style={{ color: feature.color }} strokeWidth={2} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.75rem' }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-surface)', padding: '6rem 1.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 700,
              color: 'var(--color-text)',
              marginBottom: '1.5rem',
            }}>
              Popular Use Cases
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '42rem', margin: '0 auto' }}>
              How businesses use WhatsApp automation to grow
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', maxWidth: '64rem', margin: '0 auto' }} className="use-cases-grid">
            {[
              {
                title: 'E-commerce & Retail',
                items: ['Order confirmations & updates', 'Shipping notifications', 'Abandoned cart recovery', 'Product catalogs & promotions']
              },
              {
                title: 'Banking & Finance',
                items: ['Transaction alerts', 'OTP verification', 'Account statements', 'Payment reminders']
              },
              {
                title: 'Healthcare',
                items: ['Appointment reminders', 'Test result notifications', 'Health tips & updates', 'Prescription refill alerts']
              },
              {
                title: 'Education',
                items: ['Class schedules & updates', 'Fee payment reminders', 'Exam notifications', 'Result announcements']
              },
            ].map((useCase, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '0.75rem',
                  padding: '2rem',
                }}
              >
                <h3 style={{ fontSize: '1.25rem', fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'var(--color-text)', marginBottom: '1.25rem' }}>
                  {useCase.title}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {useCase.items.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Check size={18} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
                      <span style={{ color: 'var(--color-text-muted)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-bg)', padding: '6rem 1.5rem' }}>
        <div className="container">
          <div style={{
            maxWidth: '48rem',
            margin: '0 auto',
            textAlign: 'center',
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '1rem',
            padding: '4rem 2rem',
          }}>
            <h2 style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 700,
              color: 'var(--color-text)',
              marginBottom: '1rem',
            }}>
              Ready to Automate WhatsApp?
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', marginBottom: '2rem', maxWidth: '36rem', margin: '0 auto 2rem' }}>
              Get started with WhatsApp Business API today and reach your customers instantly
            </p>
            <button
              onClick={() => setIsEnquiryModalOpen(true)}
              style={{
                background: 'linear-gradient(135deg, var(--color-primary) 0%, #347BF5 100%)',
                color: 'var(--color-primary-text)',
                padding: '1rem 2.5rem',
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
                e.target.style.boxShadow = '0 12px 28px rgba(29, 108, 244, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Get API Access <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatsAppAutomation;
