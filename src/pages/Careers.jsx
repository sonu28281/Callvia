import { useState, useEffect, useRef } from 'react';
import { 
  Briefcase, Code, Users, TrendingUp, Award, Heart, Coffee, Book, 
  Rocket, Zap, Target, DollarSign, HomeIcon, Laptop, Send, MapPin, 
  Clock, CheckCircle2, ArrowRight, Sparkles, Building2, MonitorPlay 
} from 'lucide-react';
import siteConfig from '../config/site_config.json';

export function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationForm, setApplicationForm] = useState({
    fullName: '',
    email: '',
    phone: '+91',
    position: '',
    experience: '',
    resume: null,
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

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

  const handleApplicationSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSuccess(true);
    setSubmitting(false);
    setTimeout(() => {
      setSelectedJob(null);
      setSuccess(false);
      setApplicationForm({
        fullName: '',
        email: '',
        phone: '+91',
        position: '',
        experience: '',
        resume: null,
      });
    }, 3000);
  };

  const openPositions = [
    {
      title: 'Senior Backend Engineer',
      department: 'Engineering',
      location: 'Lucknow / Remote',
      type: 'Full-time',
      experience: '4-7 years',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'AWS', 'Telecom Protocols'],
      description: 'Build and scale our carrier-grade voice infrastructure powering 10M+ monthly calls.',
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      experience: '3-6 years',
      skills: ['Kubernetes', 'Docker', 'Terraform', 'AWS', 'Prometheus'],
      description: 'Maintain 99.99% uptime SLA for mission-critical telecom operations.',
    },
    {
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Lucknow / Remote',
      type: 'Full-time',
      experience: '2-5 years',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Web APIs'],
      description: 'Create intuitive dashboards for call center operators and enterprise clients.',
    },
    {
      title: 'VoIP Network Engineer',
      department: 'Operations',
      location: 'Lucknow',
      type: 'Full-time',
      experience: '5+ years',
      skills: ['SIP', 'FreeSWITCH', 'Kamailio', 'RTP', 'VoIP Protocols'],
      description: 'Optimize voice quality and routing for carrier-grade operations.',
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Lucknow / Hybrid',
      type: 'Full-time',
      experience: '4-6 years',
      skills: ['Product Strategy', 'Telecom Domain', 'API Design', 'Analytics'],
      description: 'Shape the future of enterprise telecom with AI-powered voice solutions.',
    },
    {
      title: 'Compliance Manager',
      department: 'Legal & Compliance',
      location: 'Lucknow',
      type: 'Full-time',
      experience: '3-5 years',
      skills: ['TRAI Regulations', 'Risk Management', 'Legal Documentation'],
      description: 'Ensure regulatory compliance for VNO operations across India.',
    },
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Salary',
      desc: 'Industry-leading compensation with annual performance bonuses and ESOP options.',
      color: 'var(--color-success)',
    },
    {
      icon: Laptop,
      title: 'Remote-First',
      desc: 'Work from anywhere in India with flexible hours and quarterly team offsites.',
      color: 'var(--color-primary)',
    },
    {
      icon: Heart,
      title: 'Health Insurance',
      desc: 'Comprehensive medical coverage for you and your family with zero deductibles.',
      color: 'var(--color-error)',
    },
    {
      icon: Book,
      title: 'Learning Budget',
      desc: '₹50,000 annual learning budget for courses, conferences, and certifications.',
      color: 'var(--color-info)',
    },
    {
      icon: Coffee,
      title: 'Unlimited PTO',
      desc: 'Take time off when you need it. We trust you to manage your work-life balance.',
      color: 'var(--color-premium)',
    },
    {
      icon: Rocket,
      title: 'Career Growth',
      desc: 'Clear career progression paths with mentorship from industry veterans.',
      color: 'var(--color-secondary)',
    },
  ];

  const perks = [
    { icon: HomeIcon, text: 'Remote work stipend' },
    { icon: MonitorPlay, text: 'Latest tech equipment' },
    { icon: Users, text: 'Team building activities' },
    { icon: Target, text: 'Quarterly performance bonuses' },
    { icon: Sparkles, text: 'Startup equity (ESOP)' },
    { icon: Building2, text: 'Co-working space allowance' },
  ];

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section className="animate-on-scroll" style={{ 
        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)', 
        padding: '8rem 1.5rem 6rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="container" style={{ maxWidth: '80rem', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto' }}>
            <span style={{
              display: 'inline-block',
              padding: '0.5rem 1.25rem',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              color: '#FFFFFF',
              borderRadius: '9999px',
              fontSize: '0.875rem',
              fontWeight: 600,
              marginBottom: '1.5rem',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}>
              We're hiring!
            </span>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: '1.5rem',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
            }}>
              Build the future of <br />enterprise telecom
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Join a team of operators, engineers, and innovators building carrier-grade infrastructure 
              powering 10M+ monthly calls for India's enterprises.
            </p>
            <a
              href="#openings"
              style={{
                backgroundColor: '#FFFFFF',
                color: 'var(--color-primary)',
                padding: '1rem 2.5rem',
                borderRadius: '0.5rem',
                fontWeight: 600,
                fontSize: '1.125rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
              }}
            >
              View Open Positions <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Why Join Callvia */}
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
              Why work at Callvia?
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '42rem', margin: '0 auto' }}>
              We're more than a company — we're a community building India's telecom infrastructure
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="benefits-grid">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={i}
                  style={{
                    backgroundColor: 'var(--color-bg)',
                    padding: '2rem',
                    borderRadius: '1rem',
                    border: '1px solid var(--color-border)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = benefit.color;
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.08)';
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
                    backgroundColor: `${benefit.color}15`,
                    border: `1px solid ${benefit.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                  }}>
                    <Icon size={28} style={{ color: benefit.color }} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.75rem' }}>
                    {benefit.title}
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Perks */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-bg)', padding: '6rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 600,
              color: 'var(--color-text)',
              marginBottom: '1rem',
            }}>
              And many more perks...
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', maxWidth: '56rem', margin: '0 auto' }} className="perks-grid">
            {perks.map((perk, i) => {
              const Icon = perk.icon;
              return (
                <div
                  key={i}
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    padding: '1.5rem',
                    borderRadius: '0.75rem',
                    border: '1px solid var(--color-border)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-primary)';
                    e.currentTarget.style.backgroundColor = 'var(--color-primary-bg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                  }}
                >
                  <div style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '0.5rem',
                    backgroundColor: 'var(--color-primary-bg)',
                    border: '1px solid var(--color-primary-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={18} style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <span style={{ color: 'var(--color-text)', fontWeight: 500, fontSize: '0.9375rem' }}>
                    {perk.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="animate-on-scroll" style={{ backgroundColor: 'var(--color-surface)', padding: '6rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 600,
              color: 'var(--color-text)',
              marginBottom: '1rem',
            }}>
              Open Positions
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', maxWidth: '42rem', margin: '0 auto' }}>
              Find your perfect role and grow with us
            </p>
          </div>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {openPositions.map((job, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '1rem',
                  padding: '2rem',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                }}
                onClick={() => setSelectedJob(job)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-primary)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                      {job.title}
                    </h3>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Briefcase size={16} /> {job.department}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <MapPin size={16} /> {job.location}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Clock size={16} /> {job.type}
                      </span>
                    </div>
                  </div>
                  <span style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'var(--color-primary-bg)',
                    color: 'var(--color-primary)',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    flexShrink: 0,
                  }}>
                    {job.experience}
                  </span>
                </div>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem', lineHeight: 1.6 }}>
                  {job.description}
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {job.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: '0.375rem 0.75rem',
                        backgroundColor: 'var(--color-surface)',
                        border: '1px solid var(--color-border)',
                        color: 'var(--color-text)',
                        borderRadius: '0.375rem',
                        fontSize: '0.8125rem',
                        fontWeight: 500,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '1.5rem',
          }}
          onClick={() => setSelectedJob(null)}
        >
          <div
            style={{
              backgroundColor: 'var(--color-bg)',
              borderRadius: '1rem',
              maxWidth: '42rem',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              boxShadow: '0 24px 64px rgba(0, 0, 0, 0.3)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ padding: '2rem', borderBottom: '1px solid var(--color-border)' }}>
              <h2 style={{ fontSize: '1.75rem', fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                Apply for {selectedJob.title}
              </h2>
              <p style={{ color: 'var(--color-text-muted)' }}>
                {selectedJob.department} • {selectedJob.location}
              </p>
            </div>

            {!success ? (
              <form onSubmit={handleApplicationSubmit} style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--color-text)' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={applicationForm.fullName}
                      onChange={(e) => setApplicationForm({ ...applicationForm, fullName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.875rem',
                        backgroundColor: 'var(--color-surface)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '0.5rem',
                        color: 'var(--color-text)',
                        fontSize: '1rem',
                      }}
                    />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--color-text)' }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={applicationForm.email}
                        onChange={(e) => setApplicationForm({ ...applicationForm, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.875rem',
                          backgroundColor: 'var(--color-surface)',
                          border: '1px solid var(--color-border)',
                          borderRadius: '0.5rem',
                          color: 'var(--color-text)',
                          fontSize: '1rem',
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--color-text)' }}>
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={applicationForm.phone}
                        onChange={(e) => setApplicationForm({ ...applicationForm, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.875rem',
                          backgroundColor: 'var(--color-surface)',
                          border: '1px solid var(--color-border)',
                          borderRadius: '0.5rem',
                          color: 'var(--color-text)',
                          fontSize: '1rem',
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--color-text)' }}>
                      Years of Experience *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 5 years"
                      value={applicationForm.experience}
                      onChange={(e) => setApplicationForm({ ...applicationForm, experience: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.875rem',
                        backgroundColor: 'var(--color-surface)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '0.5rem',
                        color: 'var(--color-text)',
                        fontSize: '1rem',
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--color-text)' }}>
                      Resume / Portfolio Link *
                    </label>
                    <input
                      type="url"
                      required
                      placeholder="LinkedIn, GitHub, or Portfolio URL"
                      style={{
                        width: '100%',
                        padding: '0.875rem',
                        backgroundColor: 'var(--color-surface)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '0.5rem',
                        color: 'var(--color-text)',
                        fontSize: '1rem',
                      }}
                    />
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                    Or email your application to <strong style={{ color: 'var(--color-primary)' }}>enquiry@callvia.in</strong>
                  </p>
                  <button
                    type="submit"
                    disabled={submitting}
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--color-primary)',
                      color: '#FFFFFF',
                      padding: '1rem',
                      borderRadius: '0.5rem',
                      fontWeight: 600,
                      fontSize: '1rem',
                      border: 'none',
                      cursor: submitting ? 'not-allowed' : 'pointer',
                      opacity: submitting ? 0.6 : 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {submitting ? 'Submitting...' : 'Submit Application'} <Send size={18} />
                  </button>
                </div>
              </form>
            ) : (
              <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
                <div style={{
                  width: '4rem',
                  height: '4rem',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-success-bg)',
                  border: '2px solid var(--color-success)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                }}>
                  <CheckCircle2 size={32} style={{ color: 'var(--color-success)' }} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.75rem' }}>
                  Application Submitted!
                </h3>
                <p style={{ color: 'var(--color-text-muted)' }}>
                  We'll review your application and get back to you within 5 business days.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-bg)', padding: '6rem 1.5rem', marginBottom: 0 }}>
        <div className="container" style={{ maxWidth: '50rem', margin: '0 auto', textAlign: 'center' }}>
          <Sparkles size={48} style={{ color: 'var(--color-primary)', margin: '0 auto 1.5rem', display: 'block' }} />
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontFamily: 'Sora, sans-serif',
            fontWeight: 600,
            color: 'var(--color-text)',
            marginBottom: '1rem',
          }}>
            Don't see a perfect fit?
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
            We're always looking for talented people. Send us your resume at <strong style={{ color: 'var(--color-primary)' }}>enquiry@callvia.in</strong>
          </p>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .benefits-grid, .perks-grid {
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

export default CareersPage;
