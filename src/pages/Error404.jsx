import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft, AlertTriangle } from 'lucide-react';
import SEO from '../components/SEO';

const Error404 = () => {
  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <SEO />
      <div style={{ maxWidth: '48rem', textAlign: 'center' }}>
        {/* Error Icon */}
        <div style={{
          width: '8rem',
          height: '8rem',
          margin: '0 auto 2rem',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
          <AlertTriangle size={64} style={{ color: '#FFFFFF' }} strokeWidth={2} />
          <div style={{
            position: 'absolute',
            inset: '-0.5rem',
            borderRadius: '50%',
            border: '2px solid var(--color-primary)',
            opacity: 0.3,
          }} />
        </div>

        {/* Error Code */}
        <h1 style={{
          fontSize: 'clamp(4rem, 10vw, 8rem)',
          fontFamily: 'Sora, sans-serif',
          fontWeight: 800,
          background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: 1,
          marginBottom: '1rem',
          letterSpacing: '-0.02em',
        }}>
          404
        </h1>

        {/* Error Message */}
        <h2 style={{
          fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
          fontFamily: 'Sora, sans-serif',
          fontWeight: 700,
          color: 'var(--color-text)',
          marginBottom: '1rem',
        }}>
          Page Not Found
        </h2>

        <p style={{
          fontSize: '1.125rem',
          color: 'var(--color-text-muted)',
          marginBottom: '3rem',
          lineHeight: 1.7,
          maxWidth: '36rem',
          margin: '0 auto 3rem',
        }}>
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2rem',
              backgroundColor: 'var(--color-primary)',
              color: '#FFFFFF',
              textDecoration: 'none',
              borderRadius: '0.5rem',
              fontWeight: 600,
              fontSize: '1rem',
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
            <Home size={20} />
            Go to Homepage
          </Link>

          <button
            onClick={() => window.history.back()}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2rem',
              backgroundColor: 'var(--color-surface)',
              color: 'var(--color-text)',
              border: '2px solid var(--color-border)',
              borderRadius: '0.5rem',
              fontWeight: 600,
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = 'var(--color-primary)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = 'var(--color-border)';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        {/* Helpful Links */}
        <div style={{
          marginTop: '4rem',
          padding: '2rem',
          backgroundColor: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: '1rem',
        }}>
          <p style={{
            fontSize: '0.875rem',
            color: 'var(--color-text-muted)',
            marginBottom: '1rem',
            fontWeight: 600,
          }}>
            Looking for something? Try these popular pages:
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            fontSize: '0.875rem',
          }}>
            <Link to="/products/ai-agents" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 500 }}>
              AI Voice Agents
            </Link>
            <span style={{ color: 'var(--color-border)' }}>•</span>
            <Link to="/pricing" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 500 }}>
              Pricing
            </Link>
            <span style={{ color: 'var(--color-border)' }}>•</span>
            <Link to="/developers" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 500 }}>
              API Docs
            </Link>
            <span style={{ color: 'var(--color-border)' }}>•</span>
            <Link to="/contact" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 500 }}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
