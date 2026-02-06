import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import LeadForm from '../components/LeadForm';

const Home = () => {
  const [modalState, setModalState] = useState({ isOpen: false, type: '' });

  const openModal = (type) => {
    setModalState({ isOpen: true, type });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, type: '' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient" style={{ padding: '120px 0 80px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1
            style={{
              fontFamily: 'Sora, sans-serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              marginBottom: '24px',
              color: 'var(--color-text)',
              lineHeight: 1.1,
            }}
          >
            [HERO_HEADLINE]
          </h1>
          <p
            style={{
              fontSize: '1.25rem',
              color: 'var(--color-text-muted)',
              maxWidth: '700px',
              margin: '0 auto 40px',
              lineHeight: 1.6,
            }}
          >
            [HERO_SUBTEXT]
          </p>
          
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => openModal('callflo-suite')} className="btn-primary">
              Book a Demo <ArrowRight size={20} />
            </button>
            <Link to="/pricing" className="btn-secondary">
              View Pricing
            </Link>
          </div>

          {/* Trust Bullets */}
          <div
            style={{
              display: 'flex',
              gap: '32px',
              justifyContent: 'center',
              marginTop: '48px',
              flexWrap: 'wrap',
            }}
          >
            {[1, 2, 3].map((num) => (
              <div key={num} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check size={20} style={{ color: 'var(--color-accent)' }} />
                <span style={{ color: 'var(--color-text-muted)' }}>[TRUST_BULLET_{num}]</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segment Switcher */}
      <section style={{ backgroundColor: 'var(--color-surface)', padding: '80px 0' }}>
        <div className="container">
          <h2
            style={{
              fontFamily: 'Sora, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              textAlign: 'center',
              marginBottom: '48px',
              color: 'var(--color-text)',
            }}
          >
            Solutions for Every Business
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { title: 'CallFlo Suite', desc: 'B2B', path: '/solutions/callflo-suite', type: 'callflo-suite' },
              { title: 'AI Receptionist', desc: 'B2C', path: '/solutions/ai-receptionist', type: 'ai-receptionist' },
              { title: 'Partners', desc: 'Reseller', path: '/solutions/partners', type: 'partners' },
            ].map((segment) => (
              <div key={segment.title} className="card">
                <h3
                  style={{
                    fontFamily: 'Sora, sans-serif',
                    fontSize: '1.5rem',
                    marginBottom: '12px',
                    color: 'var(--color-text)',
                  }}
                >
                  {segment.title}
                </h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '16px' }}>
                  {segment.desc}
                </p>
                <ul style={{ marginBottom: '24px', paddingLeft: '0', listStyle: 'none' }}>
                  {[1, 2, 3].map((bullet) => (
                    <li key={bullet} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <Check size={16} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                      <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem' }}>
                        [SEGMENT_{segment.title.toUpperCase().replace(/\s+/g, '_')}_BULLET_{bullet}]
                      </span>
                    </li>
                  ))}
                </ul>
                <Link to={segment.path} className="btn-secondary" style={{ width: '100%', textAlign: 'center' }}>
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Stack Diagram */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <h2
            style={{
              fontFamily: 'Sora, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              textAlign: 'center',
              marginBottom: '24px',
              color: 'var(--color-text)',
            }}
          >
            [PRODUCT_STACK_HEADING]
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: '48px', maxWidth: '700px', margin: '0 auto 48px' }}>
            [PRODUCT_STACK_SUBTEXT]
          </p>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {/* Base Layer */}
            <div className="card" style={{ marginBottom: '16px', backgroundColor: 'var(--color-accent-soft)' }}>
              <h4 style={{ fontFamily: 'Sora, sans-serif', marginBottom: '8px', color: 'var(--color-text)' }}>
                Base Infrastructure
              </h4>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <span style={{ padding: '8px 16px', backgroundColor: 'var(--color-surface)', borderRadius: '8px', fontSize: '0.875rem' }}>
                  SIP Trunks
                </span>
              </div>
            </div>

            {/* Add-ons */}
            <div className="card">
              <h4 style={{ fontFamily: 'Sora, sans-serif', marginBottom: '16px', color: 'var(--color-text)' }}>
                Add-on Services
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px' }}>
                {['DID Numbers', 'AI Agents', 'Call Recording', 'Predictive Dialer', 'AI Transcription', 'WhatsApp Automation'].map((service) => (
                  <div
                    key={service}
                    style={{
                      padding: '12px',
                      backgroundColor: 'var(--color-bg)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '8px',
                      textAlign: 'center',
                      fontSize: '0.875rem',
                      color: 'var(--color-text)',
                    }}
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '24px', padding: '16px', backgroundColor: 'var(--color-surface)', borderRadius: '8px' }}>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
                <strong>Note:</strong> DID Numbers can be sold standalone. B2C AI Receptionist requires DID.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section style={{ backgroundColor: 'var(--color-surface)', padding: '80px 0' }}>
        <div className="container">
          <h2
            style={{
              fontFamily: 'Sora, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              textAlign: 'center',
              marginBottom: '48px',
              color: 'var(--color-text)',
            }}
          >
            Complete Feature Set
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {[
              'DID Numbers', 'SIP Trunks', 'Manual Dialer', 'CRM Integration',
              'IVR & Routing', 'Conversational IVR', 'AI Agents', 'AI Transcription',
              'Call Recording', 'Predictive Dialer', 'AI Receptionist', 'Monitoring & Controls',
              'Real-time Dashboard', 'Analytics', 'Prepaid Wallet', 'API & Webhooks',
              'White-label Platform'
            ].map((capability) => (
              <div key={capability} className="card" style={{ textAlign: 'center' }}>
                <h4 style={{ fontFamily: 'Sora, sans-serif', fontSize: '1rem', color: 'var(--color-text)' }}>
                  {capability}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section style={{ padding: '64px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', textAlign: 'center' }}>
            {[1, 2, 3, 4].map((num) => (
              <div key={num}>
                <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--color-accent)', fontFamily: 'Sora, sans-serif', marginBottom: '8px' }}>
                  [STAT_{num}_VALUE]
                </div>
                <div style={{ color: 'var(--color-text-muted)' }}>
                  [STAT_{num}_LABEL]
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ backgroundColor: 'var(--color-surface)', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: 'Sora, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              marginBottom: '24px',
              color: 'var(--color-text)',
            }}
          >
            [CTA_HEADLINE]
          </h2>
          <p
            style={{
              fontSize: '1.125rem',
              color: 'var(--color-text-muted)',
              maxWidth: '600px',
              margin: '0 auto 40px',
            }}
          >
            [CTA_SUBTEXT]
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => openModal('callflo-suite')} className="btn-primary">
              Get Started <ArrowRight size={20} />
            </button>
            <button onClick={() => openModal('callflo-suite')} className="btn-secondary">
              Talk to Sales
            </button>
          </div>
        </div>
      </section>

      {/* Modal Forms */}
      {modalState.type === 'callflo-suite' && (
        <LeadForm
          isOpen={modalState.isOpen}
          onClose={closeModal}
          leadType="callflo-suite"
          title="Get Started with CallFlo Suite"
          description="[CALLFLO_SUITE_FORM_DESC]"
        />
      )}
      {modalState.type === 'ai-receptionist' && (
        <LeadForm
          isOpen={modalState.isOpen}
          onClose={closeModal}
          leadType="ai-receptionist"
          title="Get AI Receptionist"
          description="[AI_RECEPTIONIST_FORM_DESC]"
        />
      )}
      {modalState.type === 'partners' && (
        <LeadForm
          isOpen={modalState.isOpen}
          onClose={closeModal}
          leadType="partners"
          title="Become a Partner"
          description="[PARTNERS_FORM_DESC]"
        />
      )}
    </div>
  );
};

export default Home;
