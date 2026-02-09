import { useState, useEffect, useRef } from 'react';
import {
  Code, Terminal, FileCode, Zap, Shield, Globe, Cpu, Book,
  CheckCircle2, Copy, ExternalLink, ArrowRight, Package, Server,
  Key, Clock, BarChart3, Webhook, Database, Lock, Layers, Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function DevelopersPage() {
  const [copiedCode, setCopiedCode] = useState(null);
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

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const codeExamples = [
    {
      title: 'Make a Call',
      language: 'JavaScript',
      code: `const response = await fetch('https://api.callvia.in/v1/calls', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    to: '+919876543210',
    from: '+919123456789',
    voice_url: 'https://example.com/voice-script'
  })
});

const call = await response.json();
console.log('Call SID:', call.sid);`,
    },
    {
      title: 'Send SMS',
      language: 'Python',
      code: `import requests

response = requests.post(
    'https://api.callvia.in/v1/messages',
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    json={
        'to': '+919876543210',
        'from': '+919123456789',
        'body': 'Your OTP is: 123456'
    }
)

message = response.json()
print(f"Message SID: {message['sid']}")`,
    },
    {
      title: 'Voice IVR',
      language: 'XML',
      code: `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="en-IN-Standard-A">
    Welcome to Callvia. Press 1 for sales, 2 for support.
  </Say>
  <Gather numDigits="1" action="/handle-choice">
    <Say>Please make your selection.</Say>
  </Gather>
</Response>`,
    },
  ];

  const features = [
    {
      icon: Zap,
      title: 'RESTful APIs',
      desc: 'Clean, predictable REST endpoints for all voice and messaging operations.',
      color: 'var(--color-primary)',
    },
    {
      icon: Shield,
      title: 'Secure by Default',
      desc: 'TLS 1.3, API key authentication, webhook signature verification.',
      color: 'var(--color-success)',
    },
    {
      icon: FileCode,
      title: 'Comprehensive Docs',
      desc: 'Detailed API reference, code samples, and interactive playground.',
      color: 'var(--color-info)',
    },
    {
      icon: Globe,
      title: 'Multi-language Support',
      desc: 'Use our REST API from any programming language - Node.js, Python, PHP, Ruby, Java, and more.',
      color: 'var(--color-secondary)',
    },
    {
      icon: Webhook,
      title: 'Real-time Webhooks',
      desc: 'Get instant notifications for call events, delivery receipts, and more.',
      color: 'var(--color-premium)',
    },
    {
      icon: BarChart3,
      title: 'Developer Analytics',
      desc: 'Monitor API usage, latency, success rates, and costs in real-time.',
      color: 'var(--color-warning)',
    },
  ];



  const apiEndpoints = [
    { method: 'POST', path: '/v1/calls', desc: 'Initiate outbound call', color: 'var(--color-success)' },
    { method: 'GET', path: '/v1/calls/{sid}', desc: 'Get call details', color: 'var(--color-info)' },
    { method: 'POST', path: '/v1/messages', desc: 'Send SMS', color: 'var(--color-success)' },
    { method: 'GET', path: '/v1/numbers', desc: 'List available numbers', color: 'var(--color-info)' },
    { method: 'POST', path: '/v1/recordings', desc: 'Create call recording', color: 'var(--color-success)' },
    { method: 'DELETE', path: '/v1/calls/{sid}', desc: 'Terminate active call', color: 'var(--color-error)' },
  ];

  const resources = [
    {
      icon: Book,
      title: 'API Documentation',
      desc: 'Complete reference with request/response examples',
      link: '#',
      color: 'var(--color-primary)',
    },
    {
      icon: Terminal,
      title: 'Interactive Playground',
      desc: 'Test API endpoints directly from your browser',
      link: '#',
      color: 'var(--color-secondary)',
    },
    {
      icon: Code,
      title: 'Sample Applications',
      desc: 'Integration examples and use cases',
      link: '#',
      color: 'var(--color-info)',
    },
    {
      icon: Webhook,
      title: 'Webhook Guide',
      desc: 'Setup real-time event notifications',
      link: '#',
      color: 'var(--color-premium)',
    },
  ];

  const quickStart = [
    {
      step: '1',
      title: 'Get API Credentials',
      desc: 'Sign up and generate your API key from the dashboard',
      icon: Key,
    },
    {
      step: '2',
      title: 'Read API Docs',
      desc: 'Explore the complete API documentation',
      icon: Package,
    },
    {
      step: '3',
      title: 'Make First Request',
      desc: 'Use your preferred HTTP client to make API calls',
      icon: Code,
    },
    {
      step: '4',
      title: 'Go Live',
      desc: 'Test in sandbox, then deploy to production',
      icon: Sparkles,
    },
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
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center' }} className="hero-grid">
            <div>
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
                API-First Platform
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
                Build voice products with powerful APIs
              </h1>
              <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                Developer-friendly REST APIs and comprehensive documentation. 
                Integrate carrier-grade voice infrastructure in minutes, not months.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href="#quickstart"
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
                  Get Started <ArrowRight size={20} />
                </a>
                <a
                  href="#docs"
                  style={{
                    backgroundColor: 'transparent',
                    color: '#FFFFFF',
                    padding: '1rem 2.5rem',
                    borderRadius: '0.5rem',
                    fontWeight: 600,
                    fontSize: '1.125rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.borderColor = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  }}
                >
                  View Docs <Book size={20} />
                </a>
              </div>
            </div>
            <div style={{
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '1rem',
              padding: '1.5rem',
            }}>
              <div style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', backgroundColor: '#FF5F56' }}></div>
                <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', backgroundColor: '#FFBD2E' }}></div>
                <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', backgroundColor: '#27C93F' }}></div>
                <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.75rem', marginLeft: '0.5rem' }}>
                  make-call.js
                </span>
              </div>
              <pre style={{
                color: 'rgba(255, 255, 255, 0.95)',
                fontSize: '0.875rem',
                fontFamily: 'monospace',
                lineHeight: 1.6,
                margin: 0,
                overflow: 'auto',
              }}>
{`const callvia = require('@callvia/sdk');

const client = new callvia.Client({
  apiKey: process.env.CALLVIA_API_KEY
});

const call = await client.calls.create({
  to: '+919876543210',
  from: '+919123456789',
  url: '/voice-flow'
});

console.log(call.sid);`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* API Features */}
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
              Developer-First Platform
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '42rem', margin: '0 auto' }}>
              Everything you need to build, test, and scale voice applications
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="features-grid">
            {features.map((feature, i) => {
              const Icon = feature.icon;
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
                    e.currentTarget.style.borderColor = feature.color;
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
                    backgroundColor: `${feature.color}15`,
                    border: `1px solid ${feature.color}30`,
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
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-bg)', padding: '6rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 600,
              color: 'var(--color-text)',
              marginBottom: '1rem',
            }}>
              Code Examples
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)' }}>
              Quick examples to get you started
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="code-examples-grid">
            {codeExamples.map((example, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                }}
              >
                <div style={{
                  padding: '1.25rem 1.5rem',
                  borderBottom: '1px solid var(--color-border)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.25rem' }}>
                      {example.title}
                    </h3>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
                      {example.language}
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(example.code, i)}
                    style={{
                      padding: '0.5rem',
                      backgroundColor: 'transparent',
                      border: '1px solid var(--color-border)',
                      borderRadius: '0.375rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'var(--color-bg)';
                      e.target.style.borderColor = 'var(--color-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.borderColor = 'var(--color-border)';
                    }}
                  >
                    {copiedCode === i ? (
                      <CheckCircle2 size={16} style={{ color: 'var(--color-success)' }} />
                    ) : (
                      <Copy size={16} style={{ color: 'var(--color-text-muted)' }} />
                    )}
                  </button>
                </div>
                <pre style={{
                  padding: '1.5rem',
                  margin: 0,
                  fontSize: '0.8125rem',
                  fontFamily: 'monospace',
                  lineHeight: 1.6,
                  color: 'var(--color-text)',
                  overflow: 'auto',
                  maxHeight: '300px',
                }}>
                  {example.code}
                </pre>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section id="quickstart" className="animate-on-scroll" style={{ backgroundColor: 'var(--color-bg)', padding: '6rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 600,
              color: 'var(--color-text)',
              marginBottom: '1rem',
            }}>
              Quick Start Guide
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)' }}>
              Get up and running in 4 simple steps
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }} className="quickstart-grid">
            {quickStart.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '4rem',
                    height: '4rem',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.75rem',
                    fontFamily: 'Sora, sans-serif',
                    fontWeight: 700,
                    margin: '0 auto 1.5rem',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                  }}>
                    {step.step}
                  </div>
                  <div style={{
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '1rem',
                    padding: '2rem 1.5rem',
                    minHeight: '180px',
                  }}>
                    <Icon size={32} style={{ color: 'var(--color-primary)', margin: '0 auto 1rem', display: 'block' }} />
                    <h3 style={{ fontSize: '1.125rem', fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.75rem' }}>
                      {step.title}
                    </h3>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* API Endpoints Preview */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-surface)', padding: '6rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 600,
              color: 'var(--color-text)',
              marginBottom: '1rem',
            }}>
              Popular API Endpoints
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)' }}>
              Most commonly used endpoints for voice and messaging
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {apiEndpoints.map((endpoint, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '0.75rem',
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = endpoint.color;
                  e.currentTarget.style.backgroundColor = `${endpoint.color}08`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.backgroundColor = 'var(--color-bg)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
                  <span style={{
                    padding: '0.375rem 0.75rem',
                    backgroundColor: `${endpoint.color}15`,
                    color: endpoint.color,
                    borderRadius: '0.375rem',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    fontFamily: 'monospace',
                  }}>
                    {endpoint.method}
                  </span>
                  <code style={{
                    fontSize: '0.9375rem',
                    fontFamily: 'monospace',
                    color: 'var(--color-text)',
                    fontWeight: 500,
                  }}>
                    {endpoint.path}
                  </code>
                </div>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
                  {endpoint.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="docs" className="animate-on-scroll" style={{ backgroundColor: 'var(--color-bg)', padding: '6rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 600,
              color: 'var(--color-text)',
              marginBottom: '1rem',
            }}>
              Developer Resources
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)' }}>
              Everything you need to build with Callvia
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }} className="resources-grid">
            {resources.map((resource, i) => {
              const Icon = resource.icon;
              return (
                <a
                  key={i}
                  href={resource.link}
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '1rem',
                    padding: '2.5rem',
                    textDecoration: 'none',
                    display: 'flex',
                    gap: '1.5rem',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = resource.color;
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
                    width: '4rem',
                    height: '4rem',
                    borderRadius: '0.75rem',
                    backgroundColor: `${resource.color}15`,
                    border: `1px solid ${resource.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={32} style={{ color: resource.color }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.75rem' }}>
                      {resource.title}
                    </h3>
                    <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem', lineHeight: 1.6 }}>
                      {resource.desc}
                    </p>
                    <span style={{
                      color: resource.color,
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}>
                      Learn More <ArrowRight size={16} />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
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
            Ready to start building?
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
            Get your API keys and start integrating carrier-grade voice infrastructure today.
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
              Get API Keys
            </Link>
            <a
              href="mailto:enquiry@callvia.in"
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
                e.target.style.backgroundColor = 'var(--color-bg)';
                e.target.style.borderColor = 'var(--color-secondary)';
                e.target.style.color = 'var(--color-secondary)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.borderColor = 'var(--color-border)';
                e.target.style.color = 'var(--color-text)';
              }}
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .features-grid, .resources-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .quickstart-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .features-grid, .code-examples-grid, .resources-grid, .quickstart-grid {
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

export default DevelopersPage;
