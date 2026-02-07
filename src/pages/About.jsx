import { useState, useEffect, useRef } from 'react';
import { Shield, Zap, Users, Globe, Rocket, TrendingUp, Award, MapPin, CheckCircle2, Target, Lightbulb, Code, Phone, Cpu, Radio, Headphones, Building2, BarChart3, Lock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

// Counter animation hook
const useCounter = (end, duration = 2000, shouldStart) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    
    let startTime = null;
    const startValue = 0;
    
    const numericEnd = parseFloat(end.toString().replace(/[^0-9.]/g, ''));
    const suffix = end.toString().replace(/[0-9.]/g, '');
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = startValue + (numericEnd - startValue) * easeOutQuart;
      
      setCount(currentCount.toFixed(0) + suffix);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, shouldStart]);

  return count;
};

export function AboutPage() {
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            if (entry.target === statsRef.current) {
              setStatsVisible(true);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-bg)', padding: '8rem 1.5rem 6rem 1.5rem', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }} className="about-grid">
            <div>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                color: 'var(--color-text-muted)',
                marginBottom: '1.5rem',
              }}>
                Class-B VNO • Carrier-grade • India-focused
              </span>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                fontFamily: 'Sora, sans-serif',
                fontWeight: 600,
                color: 'var(--color-text)',
                marginBottom: '1.5rem',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}>
                Run enterprise telecom operations with infrastructure built to{' '}
                <span style={{
                  background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  scale
                </span>
              </h1>
              <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
                Callvia delivers mission-critical calling for inbound and outbound operations with compliant routing,
                real-time monitoring, and enterprise-grade reliability across India.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', fontSize: '0.875rem' }} className="stat-badges">
                {[
                  { label: 'Founded', value: '2025' },
                  { label: 'Monthly Calls', value: '10M+' },
                  { label: 'Uptime SLA', value: '99.99%' },
                ].map((stat) => (
                  <div key={stat.label} style={{
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '0.75rem',
                    padding: '1rem',
                  }}>
                    <div style={{ fontSize: '1.5rem', fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'var(--color-text)' }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-muted)' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-surface)', padding: '6rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center' }} className="story-grid">
            <div>
              <span style={{
                display: 'inline-block',
                padding: '0.5rem 1rem',
                backgroundColor: 'var(--color-primary-bg)',
                border: '1px solid var(--color-primary-border)',
                color: 'var(--color-primary)',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 600,
                marginBottom: '1.5rem',
              }}>
                Our Story
              </span>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontFamily: 'Sora, sans-serif',
                fontWeight: 600,
                color: 'var(--color-text)',
                marginBottom: '1.5rem',
                lineHeight: 1.3,
              }}>
                Built by operators, for operators
              </h2>
              <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                Callvia was founded by telecom infrastructure professionals who saw a clear need for domestic-first
                telecom operations in India.
              </p>
              <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                For years, businesses relied on international routes, resold capacity, and platforms built by SaaS teams. We changed that.
              </p>
              <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Today, Callvia powers 10M+ calls monthly through TRAI-approved Class-B VNO infrastructure, serving
                call centers, enterprises, and resellers across India with a 99.99% uptime SLA.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'TRAI-approved Class-B VNO',
                  'Carrier-grade Class-5 switch backend',
                  'Domestic-only, compliant operations',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle2 size={20} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                    <span style={{ color: 'var(--color-text)', fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{
              backgroundColor: 'var(--color-bg)',
              padding: '3rem',
              borderRadius: '1rem',
              border: '1px solid var(--color-border)',
              boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {[
                  { year: '2025', title: 'Founded', desc: 'Launched as a TRAI-approved Class-B VNO' },
                  { year: '10M+', title: 'Calls managed monthly', desc: 'Enterprise-scale operations, carrier-grade reliability' },
                  { year: '99.99%', title: 'Uptime SLA', desc: 'Backed by enterprise infrastructure' },
                ].map((milestone, i) => (
                  <div key={i} style={{ borderBottom: i < 2 ? '1px solid var(--color-border)' : 'none', paddingBottom: i < 2 ? '2rem' : '0' }}>
                    <p style={{ fontSize: '2.5rem', fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                      {milestone.year}
                    </p>
                    <p style={{ fontSize: '1.125rem', color: 'var(--color-text)', fontWeight: 600, marginBottom: '0.5rem' }}>
                      {milestone.title}
                    </p>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem' }}>
                      {milestone.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Promise */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-bg)', padding: '6rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="mvp-grid">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                desc: 'Empower every business in India with enterprise-grade, compliant telecom infrastructure. We believe voice communication should be controlled, secure, and profitable.',
              },
              {
                icon: Lightbulb,
                title: 'Our Vision',
                desc: 'To become India\'s trusted foundation for voice infrastructure. A future where control, compliance, and AI-driven intelligence are standard, not premium features.',
              },
              {
                icon: Code,
                title: 'Our Promise',
                desc: 'Carrier-grade reliability. Transparent pricing. Complete control. No grey routes. No international calling. Just honest, compliant telecom built for Indian businesses.',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    padding: '2.5rem',
                    borderRadius: '1rem',
                    border: '1px solid var(--color-border)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-primary)';
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
                    borderRadius: '0.5rem',
                    backgroundColor: 'var(--color-primary-bg)',
                    border: '1px solid var(--color-primary-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                  }}>
                    <Icon size={28} style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <h2 style={{ fontSize: '1.5rem', fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'var(--color-text)', marginBottom: '1rem' }}>
                    {item.title}
                  </h2>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Callvia / What Sets Us Apart */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-surface)', padding: '6rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              backgroundColor: 'var(--color-primary-bg)',
              border: '1px solid var(--color-primary-border)',
              color: 'var(--color-primary)',
              borderRadius: '9999px',
              fontSize: '0.875rem',
              fontWeight: 600,
              marginBottom: '1.5rem',
            }}>
              Why Callvia
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 600,
              color: 'var(--color-text)',
              marginBottom: '1rem',
            }}>
              What sets us apart
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '42rem', margin: '0 auto' }}>
              Built for regulated, high-volume environments with predictable performance.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '3rem' }} className="differentiators-grid">
            {[
              {
                icon: Shield,
                title: 'Regulatory Excellence',
                desc: 'TRAI-approved VNO with full compliance for DND, CDR retention, and KYC requirements. No shortcuts, no grey routes.',
              },
              {
                icon: Cpu,
                title: 'Carrier Infrastructure',
                desc: 'Class-5 softswitch backend with 99.99% uptime SLA and sub-150ms voice latency. Built for enterprise scale.',
              },
              {
                icon: Globe,
                title: 'Domestic Operations',
                desc: 'India-only operations with no grey routes or international calling. Complete transparency in routing.',
              },
              {
                icon: Headphones,
                title: 'Enterprise Support',
                desc: 'Dedicated account managers and priority support for mission-critical operations. Real humans, real expertise.',
              },
              {
                icon: Zap,
                title: 'API-First Platform',
                desc: 'RESTful API with comprehensive documentation. Integrate voice capabilities into any workflow in minutes.',
              },
              {
                icon: Lock,
                title: 'Data Security',
                desc: 'ISO 27001 compliant infrastructure. All data stays in India with government-mandated CDR retention.',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '0.5rem',
                    backgroundColor: 'var(--color-primary-bg)',
                    border: '1px solid var(--color-primary-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={24} style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section
        ref={statsRef}
        className="animate-on-scroll"
        style={{
          backgroundColor: 'var(--color-bg)',
          padding: '4rem 1.5rem',
          borderTop: '1px solid var(--color-border)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div className="container" style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 600,
              color: 'var(--color-text)',
              marginBottom: '1rem',
            }}>
              Trusted by enterprises
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)' }}>
              Real numbers from production infrastructure
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
            {[
              { value: '10M+', label: 'Monthly Calls', colors: ['var(--color-primary)', 'var(--color-secondary)'] },
              { value: '99.99%', label: 'Uptime SLA', colors: ['var(--color-success)'] },
              { value: '500+', label: 'Enterprise Clients', colors: ['var(--color-premium)'] },
              { value: '150ms', label: 'Avg Latency', colors: ['var(--color-info)'] },
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
                    marginBottom: '0.75rem',
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

      {/* Core Team Values */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-surface)', padding: '6rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 600,
              color: 'var(--color-text)',
              marginBottom: '1rem',
            }}>
              Our Values
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', maxWidth: '36rem', margin: '0 auto' }}>
              The principles that guide everything we build
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }} className="values-grid">
            {[
              { icon: Rocket, title: 'Operator First', desc: 'Built by telecom professionals who understand production operations at scale.' },
              { icon: TrendingUp, title: 'Proven at Scale', desc: '10M+ monthly calls with 99.99% uptime. Battle-tested infrastructure.' },
              { icon: Award, title: 'Compliance Focused', desc: 'TRAI-approved VNO. ISO 27001 certified. Everything stays in India.' },
              { icon: MapPin, title: 'Transparency', desc: 'Honest pricing, honest routing. No resold capacity or hidden markups.' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '4rem',
                    height: '4rem',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-primary-bg)',
                    border: '1px solid var(--color-primary-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                  }}>
                    <Icon size={28} style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <h3 style={{ fontSize: '1.125rem', fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.75rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6, fontSize: '0.9375rem' }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-bg)', padding: '6rem 1.5rem', marginBottom: 0 }}>
        <div className="container" style={{ maxWidth: '50rem', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontFamily: 'Sora, sans-serif',
            fontWeight: 600,
            color: 'var(--color-text)',
            marginBottom: '1.5rem',
          }}>
            Ready to scale your voice operations?
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
            Join enterprises and call centers running enterprise-grade telecom operations on Callvia.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: '#FFFFFF',
                padding: '1rem 2.5rem',
                borderRadius: '0.5rem',
                fontWeight: 600,
                fontSize: '1.125rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--color-primary-hover)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'var(--color-primary)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Get Started
            </Link>
            <Link
              to="/pricing"
              style={{
                border: '2px solid var(--color-border)',
                color: 'var(--color-text)',
                backgroundColor: 'transparent',
                padding: '1rem 2.5rem',
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
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .about-grid, .story-grid {
            grid-template-columns: 1fr !important;
          }
          .differentiators-grid {
            grid-template-columns: 1fr !important;
          }
          .values-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .mvp-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .stat-badges {
            grid-template-columns: 1fr !important;
          }
          .values-grid {
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

export default AboutPage;
