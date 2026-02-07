import { useState } from 'react';
import { Link } from 'react-router-dom';
import { megaMenuConfig } from '../config/menuConfig.js';

const MegaMenu = ({ type = 'products' }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (type === 'solutions') {
    return (
      <div
        className="mega-menu-content"
        style={{
          backgroundColor: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: '12px',
          padding: '16px',
          minWidth: '320px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {megaMenuConfig.solutions.map((solution) => (
            <Link
              key={solution.id}
              to={solution.path}
              style={{
                padding: '12px 16px',
                borderRadius: '8px',
                backgroundColor: 'transparent',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                border: '1px solid transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                e.currentTarget.style.borderColor = 'var(--color-border)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              <div style={{ fontWeight: 600, color: 'var(--color-text)', marginBottom: '2px', fontSize: '0.9375rem' }}>
                {solution.label}
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
                {solution.description}
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'company') {
    return (
      <div
        className="mega-menu-content"
        style={{
          backgroundColor: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: '16px',
          padding: '24px',
          minWidth: '300px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {megaMenuConfig.company.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.id}
                to={item.path}
                style={{
                  padding: '12px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent)';
                  e.currentTarget.style.backgroundColor = 'var(--color-accent-soft)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.backgroundColor = 'var(--color-bg)';
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--color-accent-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <IconComponent size={18} style={{ color: 'var(--color-accent)' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, color: 'var(--color-text)' }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                    {item.description}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  // Products mega menu
  const activeTabData = megaMenuConfig.tabs[activeTab];

  return (
    <div
      className="mega-menu-content"
      style={{
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: '16px',
        padding: '32px',
        minWidth: '600px',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
      }}
    >
      {/* Tabs */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
        {megaMenuConfig.tabs.map((tab, idx) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(idx)}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: activeTab === idx ? 'var(--color-accent)' : 'var(--color-bg)',
              color: activeTab === idx ? '#FFFFFF' : 'var(--color-text)',
              fontWeight: 600,
              fontSize: '0.875rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              if (activeTab !== idx) {
                e.currentTarget.style.backgroundColor = 'var(--color-border)';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== idx) {
                e.currentTarget.style.backgroundColor = 'var(--color-bg)';
              }
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid Items */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '12px',
        }}
      >
        {activeTabData.items.map((item) => {
          const IconComponent = item.icon;
          return (
            <Link
              key={item.id}
              to={item.path}
              style={{
                padding: '12px',
                borderRadius: '12px',
                backgroundColor: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-accent)';
                e.currentTarget.style.backgroundColor = 'var(--color-accent-soft)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.backgroundColor = 'var(--color-bg)';
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--color-accent-soft)',
                  border: '1px solid var(--color-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <IconComponent size={20} style={{ color: 'var(--color-accent)' }} />
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    marginBottom: '4px',
                    fontSize: '0.9375rem',
                  }}
                >
                  {item.label}
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', lineHeight: 1.4 }}>
                  {item.description}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MegaMenu;
