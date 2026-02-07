import { useEffect } from 'react';
import { Shield, CheckCircle2, Award, FileText, Lock, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import legalConfig from '../../config/legal_config.json';

export function Compliance() {
  const complianceData = legalConfig.compliance;

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

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section className="animate-on-scroll" style={{ 
        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', 
        padding: '8rem 1.5rem 6rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="container" style={{ maxWidth: '80rem', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto' }}>
            <div style={{
              width: '4rem',
              height: '4rem',
              borderRadius: '1rem',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto',
            }}>
              <CheckCircle2 size={32} style={{ color: '#FFFFFF' }} />
            </div>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: '1.5rem',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
            }}>
              Compliance & Regulatory
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.7, marginBottom: '1rem' }}>
              Fully compliant with TRAI regulations and industry standards
            </p>
            <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.7)' }}>
              Last Updated: {complianceData.lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Banner */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-surface)', padding: '3rem 1.5rem', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '1.5rem', textAlign: 'center' }}>
            Our Certifications & Compliance
          </h3>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            {complianceData.certifications.map((cert, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem 1.5rem',
                backgroundColor: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                borderRadius: '0.5rem',
              }}>
                <Award size={24} style={{ color: 'var(--color-success)' }} />
                <span style={{ fontWeight: 600, color: 'var(--color-text)' }}>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section style={{ backgroundColor: 'var(--color-surface)', padding: '2rem 1.5rem', borderBottom: '1px solid var(--color-border)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div className="container" style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', fontSize: '0.875rem' }}>
            {complianceData.sections.map((section, idx) => (
              <a
                key={idx}
                href={`#section-${idx}`}
                style={{
                  padding: '0.5rem 1rem',
                  color: 'var(--color-text-muted)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'var(--color-success)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'var(--color-text-muted)';
                }}
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Content */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-bg)', padding: '6rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '56rem', margin: '0 auto' }}>
          {complianceData.sections.map((section, idx) => (
            <div
              key={idx}
              id={`section-${idx}`}
              style={{
                marginBottom: '4rem',
                paddingBottom: '3rem',
                borderBottom: idx < complianceData.sections.length - 1 ? '1px solid var(--color-border)' : 'none',
              }}
            >
              <h2 style={{
                fontSize: '1.75rem',
                fontFamily: 'Sora, sans-serif',
                fontWeight: 600,
                color: 'var(--color-text)',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '0.5rem',
                  backgroundColor: 'var(--color-success-bg)',
                  border: '1px solid var(--color-success-border)',
                  color: 'var(--color-success)',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                }}>
                  {idx + 1}
                </span>
                {section.title}
              </h2>
              <div style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.0625rem' }}>
                {section.content.map((paragraph, pIdx) => (
                  <p key={pIdx} style={{ marginBottom: '1.25rem' }}>
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.points && section.points.length > 0 && (
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-muted)', marginTop: '1rem' }}>
                  {section.points.map((point, pointIdx) => (
                    <li key={pointIdx} style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
              {section.measures && section.measures.length > 0 && (
                <div style={{ marginTop: '1.5rem' }}>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    marginBottom: '1rem',
                  }}>
                    Key Measures:
                  </h3>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-muted)' }}>
                    {section.measures.map((measure, measureIdx) => (
                      <li key={measureIdx} style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>
                        {measure}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {section.subsections && section.subsections.length > 0 && (
                <div style={{ marginTop: '1.5rem' }}>
                  {section.subsections.map((sub, subIdx) => (
                    <div key={subIdx} style={{ marginBottom: '1.5rem' }}>
                      <h3 style={{
                        fontSize: '1.25rem',
                        fontFamily: 'Sora, sans-serif',
                        fontWeight: 600,
                        color: 'var(--color-text)',
                        marginBottom: '0.75rem',
                      }}>
                        {sub.title}
                      </h3>
                      {sub.items ? (
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-muted)' }}>
                          {sub.items.map((item, itemIdx) => (
                            <li key={itemIdx} style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
                          {sub.content}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Compliance Highlights */}
          <div style={{
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '1rem',
            padding: '2rem',
            marginTop: '3rem',
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 600,
              color: 'var(--color-text)',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}>
              <CheckCircle2 size={28} style={{ color: 'var(--color-success)' }} />
              Our Compliance Commitments
            </h3>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {[
                { icon: Shield, text: 'Full TRAI licensing and regulatory compliance' },
                { icon: Lock, text: 'Secure infrastructure with regular security audits' },
                { icon: FileText, text: 'Transparent reporting and documentation' },
                { icon: AlertCircle, text: '24/7 compliance monitoring and support' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      borderRadius: '0.5rem',
                      backgroundColor: 'var(--color-success-bg)',
                      border: '1px solid var(--color-success-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Icon size={20} style={{ color: 'var(--color-success)' }} />
                    </div>
                    <p style={{ color: 'var(--color-text)', fontSize: '1rem', lineHeight: 1.6 }}>
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Info */}
          <div style={{
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '1rem',
            padding: '2rem',
            marginTop: '2rem',
            marginBottom: 0,
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 600,
              color: 'var(--color-text)',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}>
              <Shield size={28} style={{ color: 'var(--color-success)' }} />
              Compliance Officer
            </h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem', lineHeight: 1.7 }}>
              For compliance inquiries or regulatory questions:
            </p>
            <div style={{ display: 'grid', gap: '0.75rem', color: 'var(--color-text)' }}>
              <div>
                <strong>Email:</strong>{' '}
                <a href={`mailto:${complianceData.contact.email}`} style={{ color: 'var(--color-success)', textDecoration: 'none' }}>
                  {complianceData.contact.email}
                </a>
              </div>
              <div>
                <strong>Phone:</strong> {complianceData.contact.phone}
              </div>
              <div>
                <strong>Address:</strong> {complianceData.contact.address}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-surface)', padding: '6rem 1.5rem', marginBottom: 0 }}>
        <div className="container" style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2rem',
            fontFamily: 'Sora, sans-serif',
            fontWeight: 600,
            color: 'var(--color-text)',
            marginBottom: '2rem',
            textAlign: 'center',
          }}>
            Related Legal Documents
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <Link
              to="/legal/terms"
              style={{
                backgroundColor: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                borderRadius: '0.75rem',
                padding: '1.5rem',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-primary)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <FileText size={32} style={{ color: 'var(--color-primary)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                Terms of Service
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem' }}>
                Our terms and conditions for service usage
              </p>
            </Link>
            <Link
              to="/legal/privacy"
              style={{
                backgroundColor: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                borderRadius: '0.75rem',
                padding: '1.5rem',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-secondary)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Shield size={32} style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                Privacy Policy
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem' }}>
                How we collect, use, and protect your data
              </p>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
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

export default Compliance;
