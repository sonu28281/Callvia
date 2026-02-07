import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Facebook, MessageCircle } from 'lucide-react';
import siteConfig from '../config/site_config.json';
import { useTheme } from '../context/ThemeContext';

const Footer = ({ onEnquiryClick }) => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Products: [
      { name: 'SIP Trunks', path: '/products/sip-trunks' },
      { name: 'DID Numbers', path: '/products/did-numbers' },
      { name: 'AI Agents', path: '/products/ai-agents' },
      { name: 'Call Recording', path: '/products/call-recording' },
    ],
    Company: [
      { name: 'About Us', path: '/about' },
      { name: 'Careers', path: '/careers' },
      { name: 'Contact Us', path: '/contact' },
      { name: 'Submit Enquiry', path: '#', onClick: onEnquiryClick },
    ],
    Developers: [
      { name: 'AI Documentation', path: '/developers' },
      { name: 'Pricing', path: '/pricing' },
    ],
    Legal: [
      { name: 'Terms of Service', path: '/legal/terms' },
      { name: 'Privacy Policy', path: '/legal/privacy' },
      { name: 'Compliance', path: '/legal/compliance' },
      { name: 'Security', path: '/security' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, url: siteConfig.social.linkedin, label: 'LinkedIn' },
    { icon: Instagram, url: siteConfig.social.instagram, label: 'Instagram' },
    { icon: Facebook, url: siteConfig.social.facebook, label: 'Facebook' },
    { icon: MessageCircle, url: siteConfig.contact.whatsapp, label: 'WhatsApp' },
  ];

  return (
    <footer
      style={{
        backgroundColor: theme === 'dark' ? 'var(--color-nav-footer)' : '#F7F9FC',
        borderTop: '1px solid var(--color-border)',
        padding: '40px 0 20px',
        marginTop: 0,
      }}
    >
      <div className="container">
        {/* Main Footer Content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '32px',
            marginBottom: '32px',
          }}
        >
          {/* Company Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <img
                src="/logo.svg"
                alt={siteConfig.company.name}
                style={{ height: '44px' }}
                onError={(e) => {
                  e.target.src = siteConfig.company.logo;
                }}
              />
              <span
                style={{
                  fontFamily: 'Sora, sans-serif',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--color-text)',
                }}
              >
                {siteConfig.company.name}
              </span>
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', marginBottom: '14px', fontStyle: 'italic' }}>
              Telecom-first. AI-powered
            </p>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {socialLinks.map((social, idx) => {
                const colors = ['var(--color-primary)', 'var(--color-secondary)', 'var(--color-premium)', 'var(--color-success)'];
                const color = colors[idx % colors.length];
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      backgroundColor: `${color}15`,
                      border: `1px solid ${color}30`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: color,
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = color;
                      e.currentTarget.style.color = '#FFFFFF';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = `${color}15`;
                      e.currentTarget.style.color = color;
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <social.icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                style={{
                  fontFamily: 'Sora, sans-serif',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  marginBottom: '12px',
                  color: 'var(--color-text)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {category}
              </h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {links.map((link) => (
                  <li key={link.name} style={{ marginBottom: '6px' }}>
                    {link.onClick ? (
                      <button
                        onClick={link.onClick}
                        style={{
                          background: 'none',
                          border: 'none',
                          padding: 0,
                          color: 'var(--color-text-muted)',
                          fontSize: '0.8rem',
                          cursor: 'pointer',
                          transition: 'color 0.2s ease',
                          textAlign: 'left',
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = 'var(--color-primary)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = 'var(--color-text-muted)';
                        }}
                      >
                        {link.name}
                      </button>
                    ) : (
                      <Link
                        to={link.path}
                        style={{
                          color: 'var(--color-text-muted)',
                          fontSize: '0.8rem',
                          textDecoration: 'none',
                          transition: 'color 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = 'var(--color-primary)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = 'var(--color-text-muted)';
                        }}
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid var(--color-border)',
            paddingTop: '16px',
            textAlign: 'center',
          }}
        >
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>
            © {currentYear} {siteConfig.company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
