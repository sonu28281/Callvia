import React, { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <section className="py-20 px-6">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">Get in Touch</h1>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-blue-900"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-blue-900"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows="5"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-blue-900"
              />
            </div>
            <button type="submit" className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold cursor-pointer hover:bg-blue-950">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
