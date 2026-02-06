import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';
import siteConfig from '../config/site_config.json';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Products: [
      { name: 'SIP Trunks', path: '/products/sip-trunks' },
      { name: 'DID Numbers', path: '/products/did-numbers' },
      { name: 'AI Agents', path: '/products/ai-agents' },
      { name: 'Call Recording', path: '/products/call-recording' },
      { name: 'Predictive Dialer', path: '/products/predictive-dialer' },
    ],
    Solutions: [
      { name: 'CallFlo Suite', path: '/solutions/callflo-suite' },
      { name: 'AI Receptionist', path: '/solutions/ai-receptionist' },
      { name: 'Partners', path: '/solutions/partners' },
    ],
    Developers: [
      { name: 'API Documentation', path: '/developers' },
      { name: 'Resources', path: '/resources' },
    ],
    Company: [
      { name: 'About Us', path: '/about' },
      { name: 'Careers', path: '/careers' },
      { name: 'Contact', path: '/contact' },
    ],
    Legal: [
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Compliance', path: '/compliance' },
      { name: 'Security', path: '/security' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, url: siteConfig.social.linkedin, label: 'LinkedIn' },
    { icon: Instagram, url: siteConfig.social.instagram, label: 'Instagram' },
    { icon: Facebook, url: siteConfig.social.facebook, label: 'Facebook' },
    { icon: Twitter, url: siteConfig.social.twitter, label: 'Twitter' },
  ];

  return (
    <footer
      style={{
        backgroundColor: theme === 'dark' ? 'var(--color-nav-footer)' : 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        padding: '48px 0 24px',
        marginTop: '80px',
      }}
    >
      <div className="container">
        {/* Main Footer Content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px',
            marginBottom: '40px',
          }}
        >
          {/* Company Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <img
                src={siteConfig.company.logo}
                alt={siteConfig.company.name}
                style={{ height: '32px' }}
              />
              <span
                style={{
                  fontFamily: 'Sora, sans-serif',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'var(--color-text)',
                }}
              >
                {siteConfig.company.name}
              </span>
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', marginBottom: '16px' }}>
              {siteConfig.company.tagline}
            </p>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {socialLinks.map((social) => (
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
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-text)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-accent)';
                    e.currentTarget.style.color = 'var(--color-accent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.color = 'var(--color-text)';
                  }}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                style={{
                  fontFamily: 'Sora, sans-serif',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  marginBottom: '16px',
                  color: 'var(--color-text)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {category}
              </h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {links.map((link) => (
                  <li key={link.path} style={{ marginBottom: '8px' }}>
                    <Link
                      to={link.path}
                      style={{
                        color: 'var(--color-text-muted)',
                        fontSize: '0.875rem',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = 'var(--color-accent)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = 'var(--color-text-muted)';
                      }}
                    >
                      {link.name}
                    </Link>
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
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
            © {currentYear} {siteConfig.company.name}. All rights reserved.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
            {siteConfig.contact.email}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
