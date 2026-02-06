import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import siteConfig from '../config/site_config.json';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { theme, toggleTheme } = useTheme();

  const productsMenu = {
    'CallFlo Suite (B2B)': [
      { name: 'SIP Trunks', path: '/products/sip-trunks' },
      { name: 'DID Numbers', path: '/products/did-numbers' },
      { name: 'AI Agents', path: '/products/ai-agents' },
      { name: 'AI Transcription', path: '/products/ai-transcription' },
      { name: 'Call Recording', path: '/products/call-recording' },
      { name: 'Predictive Dialer', path: '/products/predictive-dialer' },
      { name: 'AI Receptionist', path: '/products/ai-receptionist' },
      { name: 'WhatsApp Automation', path: '/products/whatsapp-automation' },
    ],
    'AI Receptionist (B2C)': [
      { name: 'DID Numbers (Inbound Only)', path: '/products/did-numbers' },
      { name: 'AI Receptionist', path: '/products/ai-receptionist' },
      { name: 'WhatsApp Automation', path: '/products/whatsapp-automation' },
    ],
    'Partners (Reseller)': [
      { name: 'White-label Platform', path: '/reseller-program' },
      { name: 'Reseller Panel', path: '/reseller-program' },
      { name: 'Billing/Wallet', path: '/reseller-program' },
      { name: 'Controls/Monitoring', path: '/reseller-program' },
    ],
  };

  const solutionsMenu = [
    { name: 'CallFlo Suite', path: '/solutions/callflo-suite' },
    { name: 'AI Receptionist', path: '/solutions/ai-receptionist' },
    { name: 'Partners', path: '/solutions/partners' },
  ];

  return (
    <header
      style={{
        backgroundColor: theme === 'dark' ? 'var(--color-nav-footer)' : 'var(--color-bg)',
        borderBottom: `1px solid var(--color-border)`,
        position: 'sticky',
        top: 0,
        zIndex: 50,
        transition: 'background-color 0.3s ease',
      }}
    >
      <nav className="container" style={{ padding: '16px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img
              src={siteConfig.company.logo}
              alt={siteConfig.company.name}
              style={{ height: '40px' }}
            />
            <span
              style={{
                fontFamily: 'Sora, sans-serif',
                fontSize: '1.5rem',
                fontWeight: 600,
                color: 'var(--color-text)',
              }}
            >
              {siteConfig.company.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div style={{ display: 'none', gap: '32px', alignItems: 'center' }} className="desktop-nav">
            {/* Products Dropdown */}
            <div
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
              style={{ position: 'relative' }}
            >
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-text)',
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
              >
                Products <ChevronDown size={16} />
              </button>
              {activeDropdown === 'products' && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginTop: '8px',
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '12px',
                    padding: '24px',
                    minWidth: '800px',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '24px',
                  }}
                >
                  {Object.entries(productsMenu).map(([category, items]) => (
                    <div key={category}>
                      <h4 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '12px', color: 'var(--color-text-muted)' }}>
                        {category}
                      </h4>
                      {items.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          style={{
                            display: 'block',
                            padding: '8px 12px',
                            borderRadius: '6px',
                            color: 'var(--color-text)',
                            transition: 'all 0.2s ease',
                            fontSize: '0.9375rem',
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'var(--color-accent-soft)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                          }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
              style={{ position: 'relative' }}
            >
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-text)',
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
              >
                Solutions <ChevronDown size={16} />
              </button>
              {activeDropdown === 'solutions' && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '0',
                    marginTop: '8px',
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '12px',
                    padding: '16px',
                    minWidth: '220px',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                  }}
                >
                  {solutionsMenu.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      style={{
                        display: 'block',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        color: 'var(--color-text)',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'var(--color-accent-soft)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/pricing" style={{ color: 'var(--color-text)', fontWeight: 500 }}>
              Pricing
            </Link>
            <Link to="/developers" style={{ color: 'var(--color-text)', fontWeight: 500 }}>
              Developers
            </Link>
            <Link to="/resources" style={{ color: 'var(--color-text)', fontWeight: 500 }}>
              Resources
            </Link>
            <Link to="/about" style={{ color: 'var(--color-text)', fontWeight: 500 }}>
              Company
            </Link>
          </div>

          {/* Right Side Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                color: 'var(--color-text)',
              }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Desktop CTA Buttons */}
            <div style={{ display: 'none', gap: '12px' }} className="desktop-nav">
              <a
                href={siteConfig.navigation.cta.login}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Login
              </a>
              <a
                href={siteConfig.navigation.cta.signup}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Sign Up
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--color-text)',
              }}
              className="mobile-menu-btn"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              marginTop: '16px',
              padding: '16px',
              backgroundColor: 'var(--color-surface)',
              borderRadius: '12px',
              border: '1px solid var(--color-border)',
            }}
            className="mobile-menu"
          >
            <Link to="/solutions" style={{ display: 'block', padding: '12px', color: 'var(--color-text)' }}>
              Solutions
            </Link>
            <Link to="/products" style={{ display: 'block', padding: '12px', color: 'var(--color-text)' }}>
              Products
            </Link>
            <Link to="/pricing" style={{ display: 'block', padding: '12px', color: 'var(--color-text)' }}>
              Pricing
            </Link>
            <Link to="/developers" style={{ display: 'block', padding: '12px', color: 'var(--color-text)' }}>
              Developers
            </Link>
            <Link to="/resources" style={{ display: 'block', padding: '12px', color: 'var(--color-text)' }}>
              Resources
            </Link>
            <Link to="/about" style={{ display: 'block', padding: '12px', color: 'var(--color-text)' }}>
              About
            </Link>
            <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href={siteConfig.navigation.cta.login} className="btn-secondary" style={{ textAlign: 'center' }}>
                Login
              </a>
              <a href={siteConfig.navigation.cta.signup} className="btn-primary" style={{ textAlign: 'center' }}>
                Sign Up
              </a>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
