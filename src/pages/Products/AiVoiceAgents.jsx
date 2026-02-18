// UI redesign only – no functional changes
import { useState, useEffect } from 'react';
import { ArrowRight, Check, Bot, Phone, Cpu, Zap, Globe, Shield, BarChart3, Clock, Users, Smartphone, CreditCard, PhoneCall, PhoneOff, AlertCircle, CheckCircle, Languages, X } from 'lucide-react';
import EnquiryModal from '../../components/EnquiryModal';
import TelecomPacketAnimation from '../../components/TelecomPacketAnimation';
import SEO from '../../components/SEO';
import { useSip } from '../../hooks/useSip';
import { getAgentCallingNumber } from '../../config/sip_config';
import { useAnimationConfig } from '../../hooks/useAnimationConfig';

const AiVoiceAgents = () => {
  const animationConfig = useAnimationConfig();
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [isFloatingModalOpen, setIsFloatingModalOpen] = useState(false);
  const { isRegistered, isConnecting, activeCall, callStatus, error, makeCall, hangUp } = useSip();

  // Add CSS for animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
      }
      
      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-10px);
        }
      }
      
      @keyframes glow-pulse {
        0%, 100% {
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
        }
        50% {
          box-shadow: 0 0 40px rgba(139, 92, 246, 0.8);
        }
      }
      
      @keyframes gradient-shift {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
      
      @keyframes fade-in-up {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      
      .animate-on-scroll.visible {
        opacity: 1;
        transform: translateY(0);
      }
      
      .glass-card {
        background: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .glass-card:hover {
        transform: translateY(-8px);
        border-color: rgba(139, 92, 246, 0.5);
        box-shadow: 0 20px 60px rgba(139, 92, 246, 0.3);
      }
      
      .gradient-border {
        position: relative;
      }
      
      .gradient-border::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        padding: 2px;
        background: linear-gradient(135deg, #8B5CF6, #06B6D4, #EC4899);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        opacity: 0;
        transition: opacity 0.4s ease;
      }
      
      .gradient-border:hover::before {
        opacity: 1;
      }
      
      .floating-button {
        position: fixed;
        bottom: 100px;
        right: 24px;
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background: linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%);
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: glow-pulse 3s ease-in-out infinite;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 8px 32px rgba(139, 92, 246, 0.4);
      }
      
      .floating-button:hover {
        transform: scale(1.1);
      }
      
      .floating-modal-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(8px);
        z-index: 9998;
        animation: fade-in 0.3s ease;
      }
      
      .floating-modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90%;
        max-width: 1200px;
        max-height: 90vh;
        overflow-y: auto;
        background: rgba(0, 0, 0, 0.85);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 24px;
        padding: 2rem;
        z-index: 9999;
        animation: fade-in-up 0.4s ease;
      }
      
      @keyframes fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      .bg-grid {
        background-image: 
          linear-gradient(rgba(139, 92, 246, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(139, 92, 246, 0.05) 1px, transparent 1px);
        background-size: 50px 50px;
      }
      
      .radial-glow {
        position: absolute;
        width: 600px;
        height: 600px;
        border-radius: 50%;
        filter: blur(100px);
        opacity: 0.15;
        pointer-events: none;
      }
      
      @media (max-width: 768px) {
        .features-grid {
          grid-template-columns: 1fr !important;
        }
        
        .use-cases-grid {
          grid-template-columns: 1fr !important;
        }
        
        .how-it-works-grid {
          grid-template-columns: 1fr !important;
        }
        
        .floating-button {
          width: 56px;
          height: 56px;
          bottom: 90px;
          right: 16px;
        }
        
        .floating-modal {
          padding: 1.5rem;
        }
        
        .radial-glow {
          display: none;
        }
      }
      
      @media (min-width: 769px) and (max-width: 1024px) {
        .features-grid {
          grid-template-columns: repeat(2, 1fr) !important;
        }
        
        .use-cases-grid {
          grid-template-columns: repeat(2, 1fr) !important;
        }
        
        .how-it-works-grid {
          grid-template-columns: repeat(3, 1fr) !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
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
  
  // Handle ESC key to close floating modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isFloatingModalOpen) {
        setIsFloatingModalOpen(false);
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isFloatingModalOpen]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isFloatingModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isFloatingModalOpen]);

  // Agent cards component (reusable)
  const AgentCards = () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '1.5rem',
    }}>
      {[
        {
          name: 'Real Estate Agent',
          type: 'real-estate',
          icon: Globe,
          description: 'Schedule property site visits and get location details',
          color: '#3B82F6',
        },
        {
          name: 'NBFC Loan Officer',
          type: 'nbfc-loan',
          icon: BarChart3,
          description: 'Inquire about loan products and eligibility',
          color: '#8B5CF6',
        },
        {
          name: 'E-Commerce Assistant',
          type: 'ecom-tracking',
          icon: Smartphone,
          description: 'Track your order status and delivery updates',
          color: '#EC4899',
        },
        {
          name: 'Insurance Advisor',
          type: 'insurance-renewal',
          icon: Shield,
          description: 'Renew policies and check coverage details',
          color: '#10B981',
        },
        {
          name: 'Healthcare Receptionist',
          type: 'healthcare-booking',
          icon: Users,
          description: 'Book appointments and check doctor availability',
          color: '#F59E0B',
        },
        {
          name: 'Banking Assistant',
          type: 'bank-card',
          icon: CreditCard,
          description: 'Activate credit/debit cards and check benefits',
          color: '#06B6D4',
        },
      ].map((agent, index) => {
        const Icon = agent.icon;
        const isActive = activeCall === agent.type;
        const isOtherActive = activeCall && activeCall !== agent.type;
        const canCall = isRegistered && !isOtherActive;
        
        return (
          <div
            key={index}
            className="glass-card gradient-border"
            style={{
              border: `2px solid ${isActive ? agent.color : 'rgba(255, 255, 255, 0.1)'}`,
              borderRadius: '1rem',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              opacity: isOtherActive ? 0.5 : 1,
              cursor: canCall ? 'pointer' : 'default',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div style={{
                width: '3rem',
                height: '3rem',
                backgroundColor: `${agent.color}15`,
                border: `1px solid ${agent.color}30`,
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Icon size={24} style={{ color: agent.color }} />
              </div>
              
              {isActive && callStatus === 'connected' && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  padding: '0.25rem 0.5rem',
                  backgroundColor: 'rgba(34, 197, 94, 0.2)',
                  border: '1px solid rgba(34, 197, 94, 0.4)',
                  borderRadius: '0.375rem',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'rgb(34, 197, 94)',
                }}>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    backgroundColor: 'rgb(34, 197, 94)',
                    borderRadius: '50%',
                    animation: 'pulse 2s ease-in-out infinite',
                  }} />
                  Live
                </div>
              )}
            </div>
            
            <h4 style={{ fontSize: '1.125rem', fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
              {agent.name}
            </h4>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.25rem', flex: 1 }}>
              {agent.description}
            </p>
            
            <button
              onClick={() => {
                if (isActive) {
                  hangUp();
                } else if (canCall) {
                  makeCall(getAgentCallingNumber(agent.type, selectedLanguage), agent.type);
                }
              }}
              disabled={!canCall && !isActive}
              style={{
                background: isActive 
                  ? 'linear-gradient(135deg, rgb(220, 38, 38), rgb(185, 28, 28))' 
                  : `linear-gradient(135deg, ${agent.color}, ${agent.color}dd)`,
                color: '#FFFFFF',
                padding: '0.875rem 1.5rem',
                borderRadius: '0.75rem',
                fontWeight: 600,
                fontSize: '0.9375rem',
                border: 'none',
                cursor: !canCall && !isActive ? 'not-allowed' : 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease',
                width: '100%',
                opacity: !canCall && !isActive ? 0.5 : 1,
                transform: 'scale(1)',
              }}
              onMouseEnter={(e) => {
                if (canCall || isActive) {
                  e.target.style.transform = 'scale(1.03)';
                  e.target.style.boxShadow = isActive 
                    ? '0 8px 24px rgba(220, 38, 38, 0.5)' 
                    : `0 8px 24px ${agent.color}66`;
                }
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              {isActive ? (
                <>
                  <PhoneOff size={18} />
                  {callStatus === 'calling' ? 'Connecting...' : callStatus === 'connected' ? 'Hang Up' : 'Ending...'}
                </>
              ) : (
                <>
                  <PhoneCall size={18} />
                  Call Agent
                </>
              )}
            </button>
          </div>
        );
      })}
    </div>
  );

  return (
    <div style={{ width: '100%', backgroundColor: 'var(--color-bg)', position: 'relative' }}>
      <SEO />
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        leadSource="ai_voice_agents_page"
      />

      {/* Hero Section */}
      <section
        className="hero-section animate-on-scroll bg-grid"
        style={{
          position: 'relative',
          background: 'var(--color-surface)',
          paddingTop: '6rem',
          paddingBottom: '8rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          overflow: 'hidden',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        {/* Radial Glow */}
        <div className="radial-glow" style={{
          top: '-200px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
        }} />
        
        <TelecomPacketAnimation {...animationConfig} />
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.625rem 1.25rem',
                  background: 'rgba(34, 197, 94, 0.1)',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  borderRadius: '2rem',
                  color: 'rgb(34, 197, 94)',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  marginBottom: '2rem',
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: 'rgb(34, 197, 94)',
                    borderRadius: '50%',
                    animation: 'pulse 2s ease-in-out infinite',
                  }} />
                  Live AI Demo Available
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
                AI Voice Agents<br />
                <span style={{ 
                  background: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>for Every Workflow</span>
              </h1>

              <p style={{
                fontSize: '1.25rem',
                color: 'var(--color-text-muted)',
                maxWidth: '36rem',
                lineHeight: 1.7,
              }}>
                Programmable AI voice agents that handle outbound calls, qualify leads, schedule appointments, and execute custom workflows. Built for developers and businesses who need intelligent automation.
              </p>

              <div style={{ display: 'flex', gap: '1rem', paddingTop: '1rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setIsEnquiryModalOpen(true)}
                  style={{
                    background: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
                    color: '#FFFFFF',
                    padding: '1.125rem 2.25rem',
                    borderRadius: '0.75rem',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s ease',
                    fontSize: '1rem',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.03)';
                    e.target.style.boxShadow = '0 12px 32px rgba(139, 92, 246, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  Get API Access <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{
                width: '280px',
                height: '280px',
                background: 'rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(12px)',
                border: '2px solid rgba(139, 92, 246, 0.3)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'float 4s ease-in-out infinite',
                boxShadow: '0 0 60px rgba(139, 92, 246, 0.3)',
              }}>
                <Bot size={100} style={{ color: '#8B5CF6' }} strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-bg)', padding: '8rem 1.5rem', position: 'relative' }}>
        {/* Background gradient blob */}
        <div className="radial-glow" style={{
          top: '100px',
          right: '-100px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)',
        }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 700,
              color: 'var(--color-text)',
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
            }}>
              Powerful AI Agent Capabilities
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '42rem', margin: '0 auto' }}>
              Build custom voice workflows with enterprise-grade AI
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="features-grid">
            {[
              { icon: Cpu, title: 'Programmable Logic', desc: 'Custom workflows with conditional branching and decision trees', color: 'var(--color-primary)' },
              { icon: Globe, title: 'Multi-Language', desc: 'Support for Hindi, English, and 20+ languages with natural accents', color: 'var(--color-secondary)' },
              { icon: Zap, title: 'Real-Time Integration', desc: 'Connect to CRMs, databases, and APIs for dynamic conversations', color: 'var(--color-premium)' },
              { icon: Users, title: 'Lead Qualification', desc: 'Intelligent lead scoring and automatic routing to sales teams', color: 'var(--color-success)' },
              { icon: Clock, title: 'Smart Scheduling', desc: 'Book appointments with calendar integration and confirmations', color: 'var(--color-info)' },
              { icon: BarChart3, title: 'Analytics & Reporting', desc: 'Detailed call metrics, conversion rates, and performance insights', color: 'var(--color-primary)' },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    borderRadius: '1rem',
                    padding: '2rem',
                    cursor: 'default',
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
                    <Icon size={28} style={{ color: feature.color }} strokeWidth={2} />
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
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-surface)', padding: '8rem 1.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 700,
              color: 'var(--color-text)',
              marginBottom: '1.5rem',
            }}>
              Popular AI Agent Use Cases
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '42rem', margin: '0 auto' }}>
              How businesses use AI voice agents to scale operations
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', maxWidth: '64rem', margin: '0 auto' }} className="use-cases-grid">
            {[
              {
                title: 'Sales & Lead Generation',
                items: ['Outbound lead qualification calls', 'Product demo scheduling', 'Follow-up call automation', 'Warm lead handoff to sales']
              },
              {
                title: 'Customer Support',
                items: ['24/7 first-level support', 'FAQs and common queries', 'Ticket creation and routing', 'Appointment rescheduling']
              },
              {
                title: 'Surveys & Feedback',
                items: ['Post-purchase satisfaction surveys', 'NPS score collection', 'Event feedback gathering', 'Market research calls']
              },
              {
                title: 'Reminders & Notifications',
                items: ['Appointment confirmations', 'Payment due reminders', 'Subscription renewal alerts', 'Event notifications']
              },
            ].map((useCase, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  borderRadius: '1rem',
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

      {/* How It Works Section */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-bg)', padding: '8rem 1.5rem', position: 'relative' }}>
        <div className="radial-glow" style={{
          bottom: '0',
          left: '-100px',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, transparent 70%)',
        }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 700,
              color: 'var(--color-text)',
              marginBottom: '4rem',
              textAlign: 'center',
            }}>
              How It Works
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="how-it-works-grid">
              {[
                { step: '1', title: 'Design Workflow', desc: 'Create custom conversation flows with our visual builder or API' },
                { step: '2', title: 'Configure Agent', desc: 'Set voice, language, personality, and integrate with your systems' },
                { step: '3', title: 'Launch & Scale', desc: 'Deploy AI agents and handle unlimited concurrent calls' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    borderRadius: '1rem',
                    padding: '2.5rem 2rem',
                    textAlign: 'center',
                  }}
                >
                  <div style={{
                    width: '4rem',
                    height: '4rem',
                    background: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    color: 'white',
                    boxShadow: '0 8px 24px rgba(139, 92, 246, 0.4)',
                  }}>
                    {item.step}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.75rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Try Live AI Agents Section */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-bg)', padding: '8rem 1.5rem' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontFamily: 'Sora, sans-serif',
                fontWeight: 700,
                color: 'var(--color-text)',
                marginBottom: '1rem',
              }}>
                Try Live AI Voice Agents
              </h2>
              <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                Experience our AI agents in action. Click to call and interact with different agent scenarios.
              </p>
              
              {/* Language Selector */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                marginBottom: '1.5rem',
                flexWrap: 'wrap',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--color-text-muted)',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                }}>
                  <Languages size={20} />
                  <span>Language:</span>
                </div>
                <div style={{
                  display: 'inline-flex',
                  background: 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(8px)',
                  border: '2px solid rgba(139, 92, 246, 0.3)',
                  borderRadius: '0.75rem',
                  padding: '0.375rem',
                }}>
                  {[
                    { value: 'english', label: 'English' },
                    { value: 'hindi', label: 'हिंदी' },
                  ].map((lang) => (
                    <button
                      key={lang.value}
                      onClick={() => setSelectedLanguage(lang.value)}
                      disabled={activeCall !== null}
                      style={{
                        padding: '0.625rem 1.5rem',
                        borderRadius: '0.5rem',
                        border: 'none',
                        background: selectedLanguage === lang.value 
                          ? 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)' 
                          : 'transparent',
                        color: '#FFFFFF',
                        fontWeight: 600,
                        fontSize: '0.9375rem',
                        cursor: activeCall !== null ? 'not-allowed' : 'pointer',
                        transition: 'all 0.3s ease',
                        opacity: activeCall !== null ? 0.6 : 1,
                      }}
                      onMouseEnter={(e) => {
                        if (activeCall === null && selectedLanguage !== lang.value) {
                          e.target.style.backgroundColor = 'rgba(139, 92, 246, 0.2)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedLanguage !== lang.value) {
                          e.target.style.backgroundColor = 'transparent';
                        }
                      }}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Status Indicator */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.625rem 1.25rem',
                background: isRegistered 
                  ? 'rgba(34, 197, 94, 0.15)' 
                  : isConnecting 
                  ? 'rgba(234, 179, 8, 0.15)' 
                  : 'rgba(239, 68, 68, 0.15)',
                backdropFilter: 'blur(8px)',
                border: `1px solid ${isRegistered ? 'rgba(34, 197, 94, 0.4)' : isConnecting ? 'rgba(234, 179, 8, 0.4)' : 'rgba(239, 68, 68, 0.4)'}`,
                borderRadius: '2rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: isRegistered ? 'rgb(34, 197, 94)' : isConnecting ? 'rgb(234, 179, 8)' : 'rgb(239, 68, 68)',
              }}>
                {isRegistered ? (
                  <>
                    <CheckCircle size={16} />
                    <span>Agents Ready</span>
                  </>
                ) : isConnecting ? (
                  <>
                    <Clock size={16} />
                    <span>Connecting...</span>
                  </>
                ) : (
                  <>
                    <AlertCircle size={16} />
                    <span>Agents Not Available</span>
                  </>
                )}
              </div>

              {error && (
                <div style={{
                  marginTop: '1rem',
                  padding: '0.875rem',
                  background: 'rgba(239, 68, 68, 0.15)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(239, 68, 68, 0.4)',
                  borderRadius: '0.75rem',
                  color: 'rgb(239, 68, 68)',
                  fontSize: '0.875rem',
                  maxWidth: '32rem',
                  margin: '1rem auto 0',
                }}>
                  {error}
                </div>
              )}
            </div>

            {/* Agent Cards */}
            <AgentCards />

            <div style={{
              marginTop: '2.5rem',
              padding: '1.25rem',
              background: 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '0.75rem',
              fontSize: '0.875rem',
              color: 'var(--color-text-muted)',
              textAlign: 'center',
            }}>
              <strong>Note:</strong> This is a live demo. By clicking "Call Agent", you'll be connected to a real AI voice agent. 
              Please allow microphone access when prompted.
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-surface)', padding: '8rem 1.5rem' }}>
        <div className="container">
          <div style={{
            maxWidth: '48rem',
            margin: '0 auto',
            textAlign: 'center',
            background: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '1.5rem',
            padding: '4rem 2rem',
          }}>
            <h2 style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 700,
              color: 'var(--color-text)',
              marginBottom: '1rem',
            }}>
              Ready to Build AI Voice Agents?
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', marginBottom: '2rem', maxWidth: '36rem', margin: '0 auto 2rem' }}>
              Get API access and start automating your calling workflows today
            </p>
            <button
              onClick={() => setIsEnquiryModalOpen(true)}
              style={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
                color: '#FFFFFF',
                padding: '1.125rem 2.5rem',
                borderRadius: '0.75rem',
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
                e.target.style.transform = 'scale(1.03)';
                e.target.style.boxShadow = '0 12px 32px rgba(139, 92, 246, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Get API Access <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Floating AI Launcher Button */}
      <button
        className="floating-button"
        onClick={() => setIsFloatingModalOpen(true)}
        aria-label="Talk to Live AI"
        title="Try Live AI Agent"
      >
        <Bot size={32} color="#FFFFFF" />
      </button>

      {/* Floating Modal */}
      {isFloatingModalOpen && (
        <>
          <div 
            className="floating-modal-backdrop" 
            onClick={() => setIsFloatingModalOpen(false)}
          />
          <div className="floating-modal">
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              marginBottom: '2rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            }}>
              <div>
                <h3 style={{ 
                  fontSize: '1.75rem', 
                  fontFamily: 'Sora, sans-serif', 
                  fontWeight: 700, 
                  color: 'var(--color-text)',
                  marginBottom: '0.5rem',
                }}>
                  Try Live AI Voice Agents
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem' }}>
                  Click on any agent to start a live conversation
                </p>
              </div>
              <button
                onClick={() => setIsFloatingModalOpen(false)}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '0.5rem',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
                aria-label="Close modal"
              >
                <X size={24} color="#FFFFFF" />
              </button>
            </div>

            {/* Language Selector in Modal */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              marginBottom: '2rem',
              flexWrap: 'wrap',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--color-text-muted)',
                fontSize: '0.9375rem',
                fontWeight: 500,
              }}>
                <Languages size={20} />
                <span>Language:</span>
              </div>
              <div style={{
                display: 'inline-flex',
                background: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(8px)',
                border: '2px solid rgba(139, 92, 246, 0.3)',
                borderRadius: '0.75rem',
                padding: '0.375rem',
              }}>
                {[
                  { value: 'english', label: 'English' },
                  { value: 'hindi', label: 'हिंदी' },
                ].map((lang) => (
                  <button
                    key={lang.value}
                    onClick={() => setSelectedLanguage(lang.value)}
                    disabled={activeCall !== null}
                    style={{
                      padding: '0.625rem 1.5rem',
                      borderRadius: '0.5rem',
                      border: 'none',
                      background: selectedLanguage === lang.value 
                        ? 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)' 
                        : 'transparent',
                      color: '#FFFFFF',
                      fontWeight: 600,
                      fontSize: '0.9375rem',
                      cursor: activeCall !== null ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s ease',
                      opacity: activeCall !== null ? 0.6 : 1,
                    }}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Status Indicator in Modal */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '2rem',
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.625rem 1.25rem',
                background: isRegistered 
                  ? 'rgba(34, 197, 94, 0.15)' 
                  : isConnecting 
                  ? 'rgba(234, 179, 8, 0.15)' 
                  : 'rgba(239, 68, 68, 0.15)',
                border: `1px solid ${isRegistered ? 'rgba(34, 197, 94, 0.4)' : isConnecting ? 'rgba(234, 179, 8, 0.4)' : 'rgba(239, 68, 68, 0.4)'}`,
                borderRadius: '2rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: isRegistered ? 'rgb(34, 197, 94)' : isConnecting ? 'rgb(234, 179, 8)' : 'rgb(239, 68, 68)',
              }}>
                {isRegistered ? (
                  <>
                    <CheckCircle size={16} />
                    <span>Agents Ready</span>
                  </>
                ) : isConnecting ? (
                  <>
                    <Clock size={16} />
                    <span>Connecting...</span>
                  </>
                ) : (
                  <>
                    <AlertCircle size={16} />
                    <span>Agents Not Available</span>
                  </>
                )}
              </div>
            </div>

            {/* Agent Cards in Modal */}
            <AgentCards />
          </div>
        </>
      )}
    </div>
  );
};

export default AiVoiceAgents;
