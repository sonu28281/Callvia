import { useEffect } from 'react';
import { Shield, Lock, Key, Server, Eye, FileCheck, AlertTriangle, CheckCircle2, Database, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SecurityPage() {
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

  const securityFeatures = [
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'All voice and data communications are encrypted using industry-standard TLS 1.3 and SRTP protocols.',
      color: 'var(--color-primary)',
    },
    {
      icon: Server,
      title: 'Redundant Infrastructure',
      description: 'Multi-region deployment with automatic failover ensures 99.95% uptime SLA.',
      color: 'var(--color-secondary)',
    },
    {
      icon: Database,
      title: 'Data Protection',
      description: 'Your data is stored in ISO 27001 certified data centers with regular backups and disaster recovery.',
      color: 'var(--color-info)',
    },
    {
      icon: Key,
      title: 'API Security',
      description: 'Token-based authentication, rate limiting, and IP whitelisting protect your API access.',
      color: 'var(--color-warning)',
    },
    {
      icon: Eye,
      title: 'Audit Logging',
      description: 'Comprehensive logging of all account activities and API requests for security monitoring.',
      color: 'var(--color-success)',
    },
    {
      icon: Globe,
      title: 'DDoS Protection',
      description: 'Advanced DDoS mitigation protects your services from distributed attacks.',
      color: 'var(--color-premium)',
    },
  ];

  const certifications = [
    {
      title: 'ISO 27001',
      description: 'Information Security Management',
      icon: Shield,
    },
    {
      title: 'SOC 2 Type II',
      description: 'Service Organization Control',
      icon: FileCheck,
    },
    {
      title: 'TRAI Licensed',
      description: 'Telecom Regulatory Authority',
      icon: CheckCircle2,
    },
    {
      title: 'PCI DSS',
      description: 'Payment Card Industry Compliance',
      icon: Lock,
    },
  ];

  const securityPractices = [
    {
      title: 'Vulnerability Management',
      points: [
        'Regular security audits and penetration testing',
        'Automated vulnerability scanning',
        'Responsible disclosure program',
        'Security patch management within 24 hours',
      ],
    },
    {
      title: 'Access Control',
      points: [
        'Role-based access control (RBAC)',
        'Multi-factor authentication (MFA)',
        'IP whitelisting and geo-blocking',
        'Session timeout and automatic logout',
      ],
    },
    {
      title: 'Network Security',
      points: [
        'Private VLANs and network segmentation',
        'Firewall rules and intrusion detection',
        'VPN access for administrative tasks',
        'Real-time traffic monitoring',
      ],
    },
    {
      title: 'Data Security',
      points: [
        'AES-256 encryption at rest',
        'TLS 1.3 encryption in transit',
        'Encrypted database backups',
        'Secure key management with HSM',
      ],
    },
  ];

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section className="animate-on-scroll" style={{ 
        background: 'linear-gradient(135deg, #1D6CF4 0%, #6366F1 100%)', 
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
              <Shield size={32} style={{ color: '#FFFFFF' }} />
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
              Enterprise-Grade Security
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.7, marginBottom: '1rem' }}>
              Your security and privacy are our top priorities. We implement industry-leading security measures to protect your communications and data.
            </p>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-bg)', padding: '6rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 600,
              color: 'var(--color-text)',
              marginBottom: '1rem',
            }}>
              How We Protect Your Data
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', maxWidth: '42rem', margin: '0 auto' }}>
              Multi-layered security architecture designed to safeguard your voice infrastructure
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="security-grid">
            {securityFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '1rem',
                    padding: '2rem',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = feature.color;
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    width: '3.5rem',
                    height: '3.5rem',
                    borderRadius: '0.75rem',
                    backgroundColor: `${feature.color}15`,
                    border: `1px solid ${feature.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                  }}>
                    <Icon size={28} style={{ color: feature.color }} />
                  </div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontFamily: 'Sora, sans-serif',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    marginBottom: '0.75rem',
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, fontSize: '0.9375rem' }}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-surface)', padding: '6rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 600,
              color: 'var(--color-text)',
              marginBottom: '1rem',
            }}>
              Compliance & Certifications
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)' }}>
              Independently verified security and compliance standards
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }} className="certifications-grid">
            {certifications.map((cert, i) => {
              const Icon = cert.icon;
              return (
                <div
                  key={i}
                  style={{
                    backgroundColor: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '1rem',
                    padding: '2rem',
                    textAlign: 'center',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-success)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{
                    width: '4rem',
                    height: '4rem',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-success-bg)',
                    border: '1px solid var(--color-success-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                  }}>
                    <Icon size={28} style={{ color: 'var(--color-success)' }} />
                  </div>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    marginBottom: '0.5rem',
                  }}>
                    {cert.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                    {cert.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-bg)', padding: '6rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 600,
              color: 'var(--color-text)',
              marginBottom: '1rem',
            }}>
              Security Best Practices
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)' }}>
              Our comprehensive approach to security across all layers
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }} className="practices-grid">
            {securityPractices.map((practice, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '1rem',
                  padding: '2rem',
                }}
              >
                <h3 style={{
                  fontSize: '1.375rem',
                  fontFamily: 'Sora, sans-serif',
                  fontWeight: 600,
                  color: 'var(--color-text)',
                  marginBottom: '1.5rem',
                }}>
                  {practice.title}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {practice.points.map((point, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
                      <CheckCircle2 size={20} style={{ color: 'var(--color-success)', flexShrink: 0, marginTop: '0.125rem' }} />
                      <span style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-surface)', padding: '6rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <div style={{
            backgroundColor: 'var(--color-bg)',
            border: '1px solid var(--color-border)',
            borderRadius: '1rem',
            padding: '2.5rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '0.5rem',
                backgroundColor: 'var(--color-warning-bg)',
                border: '1px solid var(--color-warning-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <AlertTriangle size={24} style={{ color: 'var(--color-warning)' }} />
              </div>
              <div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontFamily: 'Sora, sans-serif',
                  fontWeight: 600,
                  color: 'var(--color-text)',
                  marginBottom: '1rem',
                }}>
                  Security Incident Response
                </h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  We have a 24/7 Security Operations Center (SOC) monitoring for potential threats. In the unlikely event of a security incident, we follow a structured response protocol:
                </p>
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <span style={{ fontWeight: 600, color: 'var(--color-primary)' }}>1.</span>
                    <span style={{ color: 'var(--color-text)' }}>Immediate containment and threat neutralization</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <span style={{ fontWeight: 600, color: 'var(--color-primary)' }}>2.</span>
                    <span style={{ color: 'var(--color-text)' }}>Affected customers notified within 2 hours</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <span style={{ fontWeight: 600, color: 'var(--color-primary)' }}>3.</span>
                    <span style={{ color: 'var(--color-text)' }}>Forensic investigation and root cause analysis</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <span style={{ fontWeight: 600, color: 'var(--color-primary)' }}>4.</span>
                    <span style={{ color: 'var(--color-text)' }}>Implementation of preventive measures</span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{
              backgroundColor: 'var(--color-primary-bg)',
              border: '1px solid var(--color-primary-border)',
              borderRadius: '0.5rem',
              padding: '1rem',
              marginTop: '1.5rem',
            }}>
              <p style={{ color: 'var(--color-text)', fontSize: '0.9375rem', margin: 0 }}>
                <strong>Report a Security Issue:</strong> If you discover a potential security vulnerability, please email{' '}
                <a href="mailto:security@callvia.in" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 600 }}>
                  security@callvia.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-bg)', padding: '6rem 1.5rem', marginBottom: 0 }}>
        <div className="container" style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2rem',
            fontFamily: 'Sora, sans-serif',
            fontWeight: 600,
            color: 'var(--color-text)',
            marginBottom: '2rem',
            textAlign: 'center',
          }}>
            Related Documents
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <Link
              to="/legal/privacy"
              style={{
                backgroundColor: 'var(--color-surface)',
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
            <Link
              to="/legal/compliance"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '0.75rem',
                padding: '1.5rem',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-success)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <CheckCircle2 size={32} style={{ color: 'var(--color-success)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                Compliance
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem' }}>
                Our regulatory compliance standards
              </p>
            </Link>
            <Link
              to="/legal/terms"
              style={{
                backgroundColor: 'var(--color-surface)',
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
              <FileCheck size={32} style={{ color: 'var(--color-primary)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                Terms of Service
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem' }}>
                Terms and conditions for service usage
              </p>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .security-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .security-grid, .practices-grid, .certifications-grid {
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

export default SecurityPage;
