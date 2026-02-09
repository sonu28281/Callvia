import { useState, useEffect } from 'react';
import { ArrowRight, Check, Bot, Phone, Cpu, Zap, Globe, Shield, BarChart3, Clock, Users, Smartphone, CreditCard, PhoneCall, PhoneOff, AlertCircle, CheckCircle } from 'lucide-react';
import EnquiryModal from '../../components/EnquiryModal';
import TelecomPacketAnimation from '../../components/TelecomPacketAnimation';
import SEO from '../../components/SEO';
import { useSip } from '../../hooks/useSip';

const AiVoiceAgents = () => {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const { isRegistered, isConnecting, activeCall, callStatus, error, makeCall, hangUp } = useSip();

  // Add CSS for pulse animation
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

  return (
    <div style={{ width: '100%', backgroundColor: 'var(--color-bg)' }}>
      <SEO />
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        leadSource="ai_voice_agents_page"
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
          nodeCount={40}
          maxConnectionsPerNode={3}
          packetSpawnRate={0.5}
          maxActivePackets={6}
          packetSpeedMin={20}
          packetSpeedMax={60}
          tailLengthMin={40}
          tailLengthMax={90}
          dropProbability={0.12}
          nodeGlowDuration={600}
          nodeGlowIntensity={1.2}
          edgeColor="rgba(29, 108, 244, 0.08)"
          nodeColor="rgba(29, 108, 244, 0.3)"
          packetColor="rgba(29, 108, 244, 0.9)"
          glowColor="rgba(29, 108, 244, 1)"
          darkModeEdgeColor="rgba(99, 102, 241, 0.12)"
          darkModeNodeColor="rgba(99, 102, 241, 0.4)"
          darkModePacketColor="rgba(99, 102, 241, 1)"
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
                  <Cpu size={16} style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'middle' }} />
                  Programmable AI Agents
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
                <span style={{ color: 'var(--color-primary)' }}>for Every Workflow</span>
              </h1>

              <p style={{
                fontSize: '1.25rem',
                color: 'var(--color-text-muted)',
                maxWidth: '36rem',
                lineHeight: 1.6,
              }}>
                Programmable AI voice agents that handle outbound calls, qualify leads, schedule appointments, and execute custom workflows. Built for developers and businesses who need intelligent automation.
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
                  Get API Access <ArrowRight size={18} />
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
                <Bot size={100} style={{ color: 'var(--color-primary)' }} strokeWidth={1.5} />
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

      {/* How It Works Section */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-bg)', padding: '6rem 1.5rem' }}>
        <div className="container">
          <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 700,
              color: 'var(--color-text)',
              marginBottom: '3rem',
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
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '0.75rem',
                    padding: '2rem',
                    textAlign: 'center',
                  }}
                >
                  <div style={{
                    width: '3.5rem',
                    height: '3.5rem',
                    backgroundColor: 'var(--color-primary)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: 'white',
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
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-bg)', padding: '6rem 1.5rem' }}>
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
              
              {/* Status Indicator */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                backgroundColor: isRegistered ? 'rgba(34, 197, 94, 0.1)' : isConnecting ? 'rgba(234, 179, 8, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                border: `1px solid ${isRegistered ? 'rgba(34, 197, 94, 0.3)' : isConnecting ? 'rgba(234, 179, 8, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: isRegistered ? 'rgb(22, 163, 74)' : isConnecting ? 'rgb(202, 138, 4)' : 'rgb(220, 38, 38)',
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
                  padding: '0.75rem',
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  borderRadius: '0.5rem',
                  color: 'rgb(220, 38, 38)',
                  fontSize: '0.875rem',
                  maxWidth: '32rem',
                  margin: '1rem auto 0',
                }}>
                  {error}
                </div>
              )}
            </div>

            {/* Agent Cards */}
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
                    style={{
                      backgroundColor: 'var(--color-surface)',
                      border: `2px solid ${isActive ? agent.color : 'var(--color-border)'}`,
                      borderRadius: '0.75rem',
                      padding: '1.75rem',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      transition: 'all 0.3s ease',
                      opacity: isOtherActive ? 0.5 : 1,
                      cursor: canCall ? 'pointer' : 'default',
                    }}
                    onMouseEnter={(e) => {
                      if (canCall) {
                        e.currentTarget.style.borderColor = agent.color;
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = `0 8px 24px ${agent.color}40`;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.borderColor = 'var(--color-border)';
                      }
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
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
                          backgroundColor: 'rgba(34, 197, 94, 0.1)',
                          border: '1px solid rgba(34, 197, 94, 0.3)',
                          borderRadius: '0.375rem',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          color: 'rgb(22, 163, 74)',
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
                          makeCall('new-ai', agent.type);
                        }
                      }}
                      disabled={!canCall && !isActive}
                      style={{
                        backgroundColor: isActive ? 'rgb(220, 38, 38)' : agent.color,
                        color: '#FFFFFF',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '0.5rem',
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
                      }}
                      onMouseEnter={(e) => {
                        if (canCall || isActive) {
                          e.target.style.transform = 'translateY(-2px)';
                          e.target.style.boxShadow = `0 8px 20px ${isActive ? 'rgba(220, 38, 38, 0.4)' : agent.color}66`;
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
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

            <div style={{
              marginTop: '2rem',
              padding: '1rem',
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '0.5rem',
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
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-surface)', padding: '6rem 1.5rem' }}>
        <div className="container">
          <div style={{
            maxWidth: '48rem',
            margin: '0 auto',
            textAlign: 'center',
            backgroundColor: 'var(--color-bg)',
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
              Ready to Build AI Voice Agents?
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', marginBottom: '2rem', maxWidth: '36rem', margin: '0 auto 2rem' }}>
              Get API access and start automating your calling workflows today
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

export default AiVoiceAgents;
