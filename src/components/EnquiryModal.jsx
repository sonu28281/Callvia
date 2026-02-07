import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import siteConfig from '../config/site_config.json';

// Country code mapping
const COUNTRY_CODES = {
  'India': '+91',
  'United States': '+1',
  'United Kingdom': '+44',
  'Canada': '+1',
  'Australia': '+61',
  'Other': ''
};

const EnquiryModal = ({ isOpen, onClose, leadSource = 'homeenquiry' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '+91',
    country: siteConfig.defaults.country,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  // Get UTM parameters from session storage
  const getUTMParams = () => {
    const utmParams = {};
    try {
      const stored = sessionStorage.getItem('utm_params');
      if (stored) {
        Object.assign(utmParams, JSON.parse(stored));
      }
    } catch (e) {
      console.error('Error parsing UTM params:', e);
    }
    return utmParams;
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // Reset form when modal closes
      if (!showSuccess) {
        setFormData({
          fullName: '',
          email: '',
          phone: '+91',
          country: siteConfig.defaults.country,
        });
        setError('');
      }
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, showSuccess]);

  const handleClose = () => {
    setShowSuccess(false);
    setError('');
    onClose();
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      setError('Full name is required');
      return false;
    }
    // Email validation with proper regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    // Phone validation based on country
    const currentCountryCode = COUNTRY_CODES[formData.country] || '';
    
    if (formData.country === 'Other') {
      // For "Other" country, just check if phone is not empty
      if (!formData.phone.trim()) {
        setError('Please enter a valid phone number');
        return false;
      }
    } else {
      // For specific countries, validate with country code
      if (!formData.phone.startsWith(currentCountryCode)) {
        setError(`Phone number must start with ${currentCountryCode} for ${formData.country}`);
        return false;
      }
      
      const phoneDigits = formData.phone.replace(/\D/g, '');
      const countryCodeDigits = currentCountryCode.replace(/\D/g, '');
      const actualDigits = phoneDigits.slice(countryCodeDigits.length);
      
      let requiredDigits = 10;
      if (formData.country === 'Australia') requiredDigits = 9;
      
      if (actualDigits.length !== requiredDigits) {
        setError(`Please enter a valid ${requiredDigits}-digit phone number for ${formData.country}`);
        return false;
      }
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const utmParams = getUTMParams();
      const payload = {
        ...formData,
        lead_source: leadSource,
        ...utmParams,
        page_path: window.location.pathname,
        referrer: document.referrer,
        timestamp: new Date().toISOString(),
      };

      const response = await fetch(siteConfig.webhook, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setShowSuccess(true);
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (err) {
      setError('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Handle country change - update phone prefix
    if (name === 'country') {
      const countryCode = COUNTRY_CODES[value] || '';
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        phone: countryCode,
      }));
      return;
    }
    
    // Special handling for phone field
    if (name === 'phone') {
      const currentCountryCode = COUNTRY_CODES[formData.country] || '';
      
      // If country doesn't have a code (Other), allow free input
      if (!currentCountryCode) {
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
        return;
      }
      
      // Prevent deletion of country code prefix
      if (!value.startsWith(currentCountryCode)) {
        setFormData((prev) => ({
          ...prev,
          [name]: currentCountryCode,
        }));
        return;
      }
      
      // Only allow digits after the prefix
      const digitsOnly = value.slice(currentCountryCode.length).replace(/\D/g, '');
      
      // Limit based on country
      let maxDigits = 10; // Default for India
      if (formData.country === 'United States' || formData.country === 'Canada') {
        maxDigits = 10;
      } else if (formData.country === 'United Kingdom') {
        maxDigits = 10;
      } else if (formData.country === 'Australia') {
        maxDigits = 9;
      }
      
      if (digitsOnly.length <= maxDigits) {
        setFormData((prev) => ({
          ...prev,
          [name]: currentCountryCode + digitsOnly,
        }));
      }
      return;
    }
    
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '1rem',
      }}
      onClick={handleClose}
    >
      <div
        style={{
          backgroundColor: 'var(--color-surface)',
          borderRadius: '16px',
          maxWidth: '500px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            color: 'var(--color-text-muted)',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--color-text)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--color-text-muted)';
          }}
        >
          <X size={24} />
        </button>

        {showSuccess ? (
          <div style={{ padding: '48px 32px', textAlign: 'center' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-success)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                opacity: 0.9,
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3
              style={{
                fontFamily: 'Sora, sans-serif',
                fontSize: '1.5rem',
                fontWeight: 600,
                color: 'var(--color-text)',
                marginBottom: '12px',
              }}
            >
              Thank You!
            </h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Thank you for submitting your enquiry. Our team will get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ padding: '32px' }}>
            <h2
              style={{
                fontFamily: 'Sora, sans-serif',
                fontSize: '1.75rem',
                fontWeight: 600,
                color: 'var(--color-text)',
                marginBottom: '8px',
              }}
            >
              Get in Touch
            </h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px' }}>
              Fill out the form below and we'll get back to you soon.
            </p>

            {error && (
              <div
                style={{
                  padding: '12px 16px',
                  backgroundColor: 'rgba(252, 68, 72, 0.1)',
                  border: '1px solid var(--color-danger)',
                  borderRadius: '8px',
                  color: 'var(--color-danger)',
                  fontSize: '0.875rem',
                  marginBottom: '20px',
                }}
              >
                {error}
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label
                  htmlFor="fullName"
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: 500,
                    color: 'var(--color-text)',
                    fontSize: '0.875rem',
                  }}
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    backgroundColor: 'var(--color-bg)',
                    color: 'var(--color-text)',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--color-primary)';
                    e.target.style.outline = 'none';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--color-border)';
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: 500,
                    color: 'var(--color-text)',
                    fontSize: '0.875rem',
                  }}
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    backgroundColor: 'var(--color-bg)',
                    color: 'var(--color-text)',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--color-primary)';
                    e.target.style.outline = 'none';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--color-border)';
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: 500,
                    color: 'var(--color-text)',
                    fontSize: '0.875rem',
                  }}
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    backgroundColor: 'var(--color-bg)',
                    color: 'var(--color-text)',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--color-primary)';
                    e.target.style.outline = 'none';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--color-border)';
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="country"
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: 500,
                    color: 'var(--color-text)',
                    fontSize: '0.875rem',
                  }}
                >
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    backgroundColor: 'var(--color-bg)',
                    color: 'var(--color-text)',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--color-primary)';
                    e.target.style.outline = 'none';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--color-border)';
                  }}
                >
                  <option value="India">India</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '14px',
                  backgroundColor: isSubmitting ? 'var(--color-text-muted)' : 'var(--color-primary)',
                  color: 'var(--color-primary-text)',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s ease',
                  marginTop: '8px',
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                  }
                }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default EnquiryModal;
