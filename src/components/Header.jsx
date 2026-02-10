import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Sun, Moon, Settings } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import siteConfig from '../config/site_config.json';
import { availableAnimationTypes } from '../config/animation_config';
import MegaMenu from './MegaMenu';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [animationOpen, setAnimationOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme, toggleTheme, animationType, changeAnimation } = useTheme();

  // Handle scroll effect with hide/show behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 20);
      
      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close animation dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (animationOpen && !event.target.closest('[aria-label="Select animation"]') && !event.target.closest('.animation-dropdown')) {
        setAnimationOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [animationOpen]);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: scrolled
          ? theme === 'dark'
            ? 'rgba(11, 18, 32, 0.9)'
            : 'rgba(255, 255, 255, 0.9)'
          : theme === 'dark'
          ? 'var(--color-nav-footer)'
          : 'var(--color-bg)',
        borderBottom: '1px solid var(--color-border)',
        backdropFilter: scrolled ? 'blur(12px)' : 'blur(8px)',
        transition: 'all 0.3s ease',
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
      }}
    >
      <div className="container" style={{ padding: '0.75rem 1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <img
              src="/logo.svg"
              alt={siteConfig.company.name}
              style={{ height: '48px' }}
              onError={(e) => {
                e.target.src = siteConfig.company.logo;
              }}
            />
            <span
              style={{
                fontFamily: 'Sora, sans-serif',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--color-text)',
              }}
            >
              {siteConfig.company.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            style={{
              display: 'flex',
              gap: '32px',
              alignItems: 'center',
            }}
            className="desktop-nav"
          >
            {/* Products */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-text-muted)',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '8px 4px',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'var(--color-text)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'var(--color-text-muted)';
                }}
              >
                Products
                <ChevronDown size={16} />
              </button>

              {productsOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '-16px',
                    paddingTop: '12px',
                  }}
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <MegaMenu type="products" />
                </div>
              )}
            </div>

            {/* Solutions */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-text-muted)',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '8px 4px',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'var(--color-text)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'var(--color-text-muted)';
                }}
              >
                Solutions
                <ChevronDown size={16} />
              </button>

              {solutionsOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '-16px',
                    paddingTop: '12px',
                  }}
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <MegaMenu type="solutions" />
                </div>
              )}
            </div>

            {/* Regular Links */}
            <Link
              to="/pricing"
              style={{
                color: 'var(--color-text-muted)',
                fontSize: '0.9375rem',
                fontWeight: 500,
                textDecoration: 'none',
                padding: '8px 4px',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = 'var(--color-text)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'var(--color-text-muted)';
              }}
            >
              Pricing
            </Link>

            <Link
              to="/developers"
              style={{
                color: 'var(--color-text-muted)',
                fontSize: '0.9375rem',
                fontWeight: 500,
                textDecoration: 'none',
                padding: '8px 4px',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = 'var(--color-text)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'var(--color-text-muted)';
              }}
            >
              Developers
            </Link>

            <Link
              to="/resources"
              style={{
                color: 'var(--color-text-muted)',
                fontSize: '0.9375rem',
                fontWeight: 500,
                textDecoration: 'none',
                padding: '8px 4px',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = 'var(--color-text)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'var(--color-text-muted)';
              }}
            >
              Resources
            </Link>
          </nav>

          {/* Right Side: Animation Selector + Theme Toggle + Auth */}
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }} className="desktop-auth">
            {/* Animation Selector */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setAnimationOpen(!animationOpen)}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  border: '1px solid var(--color-border)',
                  backgroundColor: 'var(--color-bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent)';
                  e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.backgroundColor = 'var(--color-bg)';
                }}
                aria-label="Select animation"
              >
                <Settings size={20} style={{ color: 'var(--color-primary)' }} />
              </button>
              
              {/* Animation Dropdown */}
              {animationOpen && (
                <div className="animation-dropdown" style={{
                  position: 'absolute',
                  top: '110%',
                  right: 0,
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '12px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                  padding: '8px',
                  minWidth: '180px',
                  zIndex: 1000,
                }}>
                  <div style={{ 
                    padding: '8px 12px', 
                    fontSize: '0.75rem', 
                    fontWeight: 600, 
                    color: 'var(--color-text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    Animation Style
                  </div>
                  {availableAnimationTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        changeAnimation(type);
                        setAnimationOpen(false);
                      }}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        border: 'none',
                        borderRadius: '8px',
                        backgroundColor: animationType === type ? 'var(--color-primary)' : 'transparent',
                        color: animationType === type ? 'white' : 'var(--color-text)',
                        textAlign: 'left',
                        cursor: 'pointer',
                        fontSize: '0.875rem',
                        fontWeight: animationType === type ? 600 : 400,
                        transition: 'all 0.2s ease',
                        textTransform: 'capitalize',
                      }}
                      onMouseEnter={(e) => {
                        if (animationType !== type) {
                          e.currentTarget.style.backgroundColor = 'var(--color-bg)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (animationType !== type) {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }
                      }}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                border: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-accent)';
                e.currentTarget.style.backgroundColor = 'var(--color-surface)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.backgroundColor = 'var(--color-bg)';
              }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={20} style={{ color: 'var(--color-primary)' }} />
              ) : (
                <Moon size={20} style={{ color: 'var(--color-primary)' }} />
              )}
            </button>

            <a
              href={siteConfig.navigation.cta.login}
              style={{
                color: 'var(--color-text)',
                fontSize: '0.9375rem',
                fontWeight: 600,
                textDecoration: 'none',
                padding: '10px 20px',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = 'var(--color-primary)';
                e.target.style.color = 'var(--color-primary)';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = 'var(--color-border)';
                e.target.style.color = 'var(--color-text)';
              }}
            >
              Login
            </a>

            <a
              href={siteConfig.navigation.cta.signup}
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-primary-text)',
                fontSize: '0.9375rem',
                fontWeight: 600,
                textDecoration: 'none',
                padding: '10px 20px',
                borderRadius: '8px',
                border: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-1px)';
                e.target.style.backgroundColor = 'var(--color-primary-hover)';
                e.target.style.boxShadow = '0 4px 12px rgba(29, 108, 244, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.backgroundColor = 'var(--color-primary)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Right Side: Theme Toggle + Menu Button */}
          <div style={{ display: 'none', gap: '12px', alignItems: 'center' }} className="mobile-right">
            {/* Theme Toggle for Mobile */}
            <button
              onClick={toggleTheme}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                border: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--color-text)',
              }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                width: '40px',
                height: '40px',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
                backgroundColor: 'var(--color-bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--color-text)',
              }}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            style={{
              display: 'none',
              paddingTop: '16px',
              paddingBottom: '16px',
              backgroundColor: 'var(--color-bg)',
              borderTop: '1px solid var(--color-border)',
            }}
            className="mobile-menu"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link 
                to="/solutions" 
                style={{ 
                  padding: '12px 16px', 
                  color: 'var(--color-text)', 
                  textDecoration: 'none',
                  borderRadius: '8px',
                  transition: 'background-color 0.2s ease',
                }}
                onClick={() => setMobileOpen(false)}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--color-surface)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                Solutions
              </Link>
              <Link 
                to="/products" 
                style={{ 
                  padding: '12px 16px', 
                  color: 'var(--color-text)', 
                  textDecoration: 'none',
                  borderRadius: '8px',
                  transition: 'background-color 0.2s ease',
                }}
                onClick={() => setMobileOpen(false)}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--color-surface)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                Products
              </Link>
              <Link 
                to="/pricing" 
                style={{ 
                  padding: '12px 16px', 
                  color: 'var(--color-text)', 
                  textDecoration: 'none',
                  borderRadius: '8px',
                  transition: 'background-color 0.2s ease',
                }}
                onClick={() => setMobileOpen(false)}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--color-surface)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                Pricing
              </Link>
              <Link 
                to="/developers" 
                style={{ 
                  padding: '12px 16px', 
                  color: 'var(--color-text)', 
                  textDecoration: 'none',
                  borderRadius: '8px',
                  transition: 'background-color 0.2s ease',
                }}
                onClick={() => setMobileOpen(false)}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--color-surface)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                Developers
              </Link>
              <Link 
                to="/resources" 
                style={{ 
                  padding: '12px 16px', 
                  color: 'var(--color-text)', 
                  textDecoration: 'none',
                  borderRadius: '8px',
                  transition: 'background-color 0.2s ease',
                }}
                onClick={() => setMobileOpen(false)}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--color-surface)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                Resources
              </Link>

              {/* Mobile Auth Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--color-border)' }}>
                <a
                  href={siteConfig.navigation.cta.login}
                  style={{
                    padding: '12px 16px',
                    textAlign: 'center',
                    color: 'var(--color-text)',
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                  }}
                >
                  Login
                </a>
                <a
                  href={siteConfig.navigation.cta.signup}
                  style={{
                    padding: '12px 16px',
                    textAlign: 'center',
                    backgroundColor: 'var(--color-primary)',
                    color: 'var(--color-primary-text)',
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    borderRadius: '8px',
                  }}
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-auth {
            display: none !important;
          }
          .mobile-right {
            display: flex !important;
          }
          .mobile-menu {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
