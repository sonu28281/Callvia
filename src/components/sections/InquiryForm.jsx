import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export function InquiryForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    contactNumber: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Validate form
    if (!formData.companyName.trim() || !formData.email.trim() || !formData.contactNumber.trim()) {
      setError('Please fill all fields');
      setIsLoading(false);
      return;
    }

    try {
      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/mwpkpqkl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          companyName: formData.companyName,
          email: formData.email,
          contactNumber: formData.contactNumber,
          _subject: `New Inquiry from ${formData.companyName}`,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ companyName: '', email: '', contactNumber: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setError('Failed to submit. Please try again.');
      }
    } catch (err) {
      setError('Error submitting form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      {isSubmitted ? (
        <div className="p-6 bg-green-50 border-2 border-green-200 rounded-xl text-center">
          <CheckCircle size={48} className="mx-auto mb-3 text-green-600" />
          <p className="text-lg font-semibold text-green-900 mb-2">Inquiry Submitted!</p>
          <p className="text-sm text-green-800">
            Thank you! We'll get back to you soon at <strong>{formData.email || 'your email'}</strong>
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Company Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Your company name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-200 transition-all"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-200 transition-all"
            />
          </div>

          {/* Contact Number */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Contact Number</label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="+91 XXXXX XXXXX"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-200 transition-all"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-950 transition-all inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <span className="animate-spin">⏳</span>
                Submitting...
              </>
            ) : (
              <>
                Submit Inquiry <Send size={18} />
              </>
            )}
          </button>

          <p className="text-xs text-gray-500 text-center">
            We'll send you updates at the email provided.
          </p>
        </form>
      )}
    </div>
  );
}

export default InquiryForm;
