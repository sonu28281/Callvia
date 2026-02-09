import { Link } from 'react-router-dom';
import { Home, RefreshCw, MessageCircle, Server } from 'lucide-react';
import SEO from '../components/SEO';

const Error500 = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

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
          background: 'linear-gradient(135deg, #EF4444, #DC2626)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
          <Server size={64} style={{ color: '#FFFFFF' }} strokeWidth={2} />
          <div style={{
            position: 'absolute',
            inset: '-0.5rem',
            borderRadius: '50%',
            border: '2px solid #EF4444',
            opacity: 0.3,
          }} />
        </div>

        {/* Error Code */}
        <h1 style={{
          fontSize: 'clamp(4rem, 10vw, 8rem)',
          fontFamily: 'Sora, sans-serif',
          fontWeight: 800,
          background: 'linear-gradient(135deg, #EF4444, #DC2626)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: 1,
          marginBottom: '1rem',
          letterSpacing: '-0.02em',
        }}>
          500
        </h1>

        {/* Error Message */}
        <h2 style={{
          fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
          fontFamily: 'Sora, sans-serif',
          fontWeight: 700,
          color: 'var(--color-text)',
          marginBottom: '1rem',
        }}>
          Server Error
        </h2>

        <p style={{
          fontSize: '1.125rem',
          color: 'var(--color-text-muted)',
          marginBottom: '3rem',
          lineHeight: 1.7,
          maxWidth: '36rem',
          margin: '0 auto 3rem',
        }}>
          Something went wrong on our end. We're working to fix it. Please try again in a few moments.
        </p>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <button
            onClick={handleRefresh}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2rem',
              backgroundColor: 'var(--color-primary)',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '0.5rem',
              fontWeight: 600,
              fontSize: '1rem',
              cursor: 'pointer',
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
            <RefreshCw size={20} />
            Refresh Page
          </button>

          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2rem',
              backgroundColor: 'var(--color-surface)',
              color: 'var(--color-text)',
              textDecoration: 'none',
              border: '2px solid var(--color-border)',
              borderRadius: '0.5rem',
              fontWeight: 600,
              fontSize: '1rem',
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
            <Home size={20} />
            Go to Homepage
          </Link>
        </div>

        {/* Help Section */}
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
            Need immediate assistance?
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                backgroundColor: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                borderRadius: '0.5rem',
                color: 'var(--color-text)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: 600,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = 'var(--color-primary)';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = 'var(--color-border)';
              }}
            >
              <MessageCircle size={18} />
              Contact Support
            </Link>
            <a
              href="mailto:enquiry@callvia.in"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                backgroundColor: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                borderRadius: '0.5rem',
                color: 'var(--color-text)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: 600,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = 'var(--color-primary)';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = 'var(--color-border)';
              }}
            >
              Email: enquiry@callvia.in
            </a>
          </div>
        </div>

        {/* Error Reference */}
        <p style={{
          marginTop: '2rem',
          fontSize: '0.75rem',
          color: 'var(--color-text-muted)',
          fontFamily: 'monospace',
        }}>
          Error Reference: {Date.now()}
        </p>
      </div>
    </div>
  );
};

export default Error500;
