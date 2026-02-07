import { useState, useEffect } from 'react';
import { 
  Book, Terminal, Code, FileCode, Shield, Users, ExternalLink, 
  ArrowRight, Download, Github, Rocket, Headphones, Sparkles,
  FileText, Zap, CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import resourcesConfig from '../config/resources_config.json';

const iconMap = {
  Book,
  Terminal,
  Code,
  FileCode,
  Shield,
  Users,
  Rocket,
  Headphones,
};

export function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const getIcon = (iconName) => {
    const IconComponent = iconMap[iconName] || Book;
    return IconComponent;
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'External': return ExternalLink;
      case 'GitHub': return Github;
      case 'Download': return Download;
      case 'Tutorial': return FileText;
      case 'Tool': return Zap;
      default: return FileCode;
    }
  };

  const filteredCategories = selectedCategory === 'all' 
    ? resourcesConfig.categories 
    : resourcesConfig.categories.filter(cat => cat.id === selectedCategory);

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
          <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto' }}>
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
              Resources Hub
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
              {resourcesConfig.hero.title}
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              {resourcesConfig.hero.description}
            </p>
            <div style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              padding: '0.75rem 1.25rem',
              maxWidth: '32rem',
              margin: '0 auto',
            }}>
              <FileText size={20} style={{ color: 'rgba(255, 255, 255, 0.7)', marginRight: '0.75rem' }} />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#FFFFFF',
                  fontSize: '1rem',
                  outline: 'none',
                  width: '100%',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section style={{ backgroundColor: 'var(--color-surface)', padding: '2rem 1.5rem', borderBottom: '1px solid var(--color-border)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div className="container" style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={() => setSelectedCategory('all')}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: selectedCategory === 'all' ? 'var(--color-primary)' : 'transparent',
                color: selectedCategory === 'all' ? '#FFFFFF' : 'var(--color-text)',
                border: `1px solid ${selectedCategory === 'all' ? 'var(--color-primary)' : 'var(--color-border)'}`,
                borderRadius: '9999px',
                fontSize: '0.9375rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                if (selectedCategory !== 'all') {
                  e.target.style.borderColor = 'var(--color-primary)';
                  e.target.style.color = 'var(--color-primary)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== 'all') {
                  e.target.style.borderColor = 'var(--color-border)';
                  e.target.style.color = 'var(--color-text)';
                }
              }}
            >
              All Resources
            </button>
            {resourcesConfig.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: selectedCategory === cat.id ? 'var(--color-primary)' : 'transparent',
                  color: selectedCategory === cat.id ? '#FFFFFF' : 'var(--color-text)',
                  border: `1px solid ${selectedCategory === cat.id ? 'var(--color-primary)' : 'var(--color-border)'}`,
                  borderRadius: '9999px',
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== cat.id) {
                    e.target.style.borderColor = 'var(--color-primary)';
                    e.target.style.color = 'var(--color-primary)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== cat.id) {
                    e.target.style.borderColor = 'var(--color-border)';
                    e.target.style.color = 'var(--color-text)';
                  }
                }}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-bg)', padding: '6rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {filteredCategories.map((category) => {
              const Icon = getIcon(category.icon);
              const filteredResources = searchQuery 
                ? category.resources.filter(resource => 
                    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
                  )
                : category.resources;

              if (filteredResources.length === 0) return null;

              return (
                <div key={category.id}>
                  <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{
                      width: '3.5rem',
                      height: '3.5rem',
                      borderRadius: '0.75rem',
                      backgroundColor: `${category.color}15`,
                      border: `1px solid ${category.color}30`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <Icon size={28} style={{ color: category.color }} />
                    </div>
                    <div>
                      <h2 style={{ fontSize: '2rem', fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                        {category.title}
                      </h2>
                      <p style={{ color: 'var(--color-text-muted)', fontSize: '1.0625rem' }}>
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }} className="resources-grid">
                    {filteredResources.map((resource, idx) => {
                      const TypeIcon = getTypeIcon(resource.type);
                      const isExternal = resource.link.startsWith('http');
                      return (
                        <a
                          key={idx}
                          href={resource.link}
                          target={isExternal ? '_blank' : undefined}
                          rel={isExternal ? 'noopener noreferrer' : undefined}
                          style={{
                            backgroundColor: 'var(--color-surface)',
                            border: '1px solid var(--color-border)',
                            borderRadius: '1rem',
                            padding: '2rem',
                            textDecoration: 'none',
                            transition: 'all 0.2s ease',
                            display: 'block',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = category.color;
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.08)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'var(--color-border)';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                              {resource.title}
                            </h3>
                            <TypeIcon size={20} style={{ color: category.color, flexShrink: 0 }} />
                          </div>
                          <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem', lineHeight: 1.6 }}>
                            {resource.description}
                          </p>
                          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                            {resource.tags.map((tag, tagIdx) => (
                              <span
                                key={tagIdx}
                                style={{
                                  padding: '0.25rem 0.75rem',
                                  backgroundColor: `${category.color}10`,
                                  color: category.color,
                                  borderRadius: '9999px',
                                  fontSize: '0.75rem',
                                  fontWeight: 600,
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: category.color, fontWeight: 600, fontSize: '0.9375rem' }}>
                            {resource.type} <ArrowRight size={16} />
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Resources */}
      <section className="animate-on-scroll" style={{ backgroundColor: 'var(--color-surface)', padding: '6rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 600,
              color: 'var(--color-text)',
              marginBottom: '1rem',
            }}>
              Popular Resources
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)' }}>
              Most accessed by developers
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }} className="popular-grid">
            {resourcesConfig.popularResources.map((resource, i) => {
              const Icon = getIcon(resource.icon);
              return (
                <a
                  key={i}
                  href={resource.link}
                  style={{
                    backgroundColor: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '0.75rem',
                    padding: '1.5rem',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-primary)';
                    e.currentTarget.style.backgroundColor = 'var(--color-primary-bg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.backgroundColor = 'var(--color-bg)';
                  }}
                >
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '0.5rem',
                    backgroundColor: 'var(--color-primary-bg)',
                    border: '1px solid var(--color-primary-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={24} style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '1.0625rem', fontWeight: 600, color: 'var(--color-text)' }}>
                      {resource.title}
                    </h3>
                  </div>
                  <ArrowRight size={20} style={{ color: 'var(--color-text-muted)' }} />
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
            {resourcesConfig.cta.title}
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
            {resourcesConfig.cta.description}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to={resourcesConfig.cta.primaryButton.link}
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
              {resourcesConfig.cta.primaryButton.text}
            </Link>
            <a
              href={resourcesConfig.cta.secondaryButton.link}
              target="_blank"
              rel="noopener noreferrer"
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
                gap: '0.5rem',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--color-surface)';
                e.target.style.borderColor = 'var(--color-secondary)';
                e.target.style.color = 'var(--color-secondary)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.borderColor = 'var(--color-border)';
                e.target.style.color = 'var(--color-text)';
              }}
            >
              {resourcesConfig.cta.secondaryButton.text} <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .resources-grid, .popular-grid {
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

export default ResourcesPage;
