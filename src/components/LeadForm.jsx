import { useState } from 'react';
import { submitLead } from '../utils/tracking';
import Modal from './Modal';

const LeadForm = ({ isOpen, onClose, leadType, title, description }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: 'India',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await submitLead(leadType, formData);
      setShowThankYou(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        country: 'India',
      });
    } catch (err) {
      setError('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setShowThankYou(false);
    setError('');
    onClose();
  };

  if (showThankYou) {
    return (
      <Modal isOpen={isOpen} onClose={handleClose}>
        <div style={{ textAlign: 'center', padding: '24px 0' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-accent-soft)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
            }}
          >
            <svg
              width="32"
              height="32"
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 style={{ fontFamily: 'Sora, sans-serif', fontSize: '1.75rem', marginBottom: '16px', color: 'var(--color-text)' }}>
            Thank You!
          </h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px', lineHeight: 1.6 }}>
            [THANK_YOU_MESSAGE] We'll be in touch shortly.
          </p>
          <button onClick={handleClose} className="btn-primary" style={{ width: '100%' }}>
            Close
          </button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <h2 style={{ fontFamily: 'Sora, sans-serif', fontSize: '1.75rem', marginBottom: '8px', color: 'var(--color-text)' }}>
        {title}
      </h2>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px' }}>
        {description}
      </p>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label
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
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              backgroundColor: 'var(--color-bg)',
              color: 'var(--color-text)',
              fontSize: '16px',
              transition: 'all 0.3s ease',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--color-accent)';
              e.target.style.boxShadow = '0 0 0 3px rgba(255, 159, 28, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'var(--color-border)';
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label
            style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: 500,
              color: 'var(--color-text)',
              fontSize: '0.875rem',
            }}
          >
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              backgroundColor: 'var(--color-bg)',
              color: 'var(--color-text)',
              fontSize: '16px',
              transition: 'all 0.3s ease',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--color-accent)';
              e.target.style.boxShadow = '0 0 0 3px rgba(255, 159, 28, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'var(--color-border)';
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label
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
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              backgroundColor: 'var(--color-bg)',
              color: 'var(--color-text)',
              fontSize: '16px',
              transition: 'all 0.3s ease',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--color-accent)';
              e.target.style.boxShadow = '0 0 0 3px rgba(255, 159, 28, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'var(--color-border)';
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label
            style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: 500,
              color: 'var(--color-text)',
              fontSize: '0.875rem',
            }}
          >
            Country *
          </label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              backgroundColor: 'var(--color-bg)',
              color: 'var(--color-text)',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            <option value="India">India</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Singapore">Singapore</option>
            <option value="UAE">UAE</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {error && (
          <div
            style={{
              padding: '12px',
              backgroundColor: '#FEE2E2',
              color: '#DC2626',
              borderRadius: '8px',
              marginBottom: '16px',
              fontSize: '0.875rem',
            }}
          >
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary"
          style={{
            width: '100%',
            opacity: isSubmitting ? 0.6 : 1,
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
          }}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </Modal>
  );
};

export default LeadForm;
