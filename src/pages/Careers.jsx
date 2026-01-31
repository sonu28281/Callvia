import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, Mail, Send, Check, ArrowRight } from 'lucide-react';

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showCVForm, setShowCVForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
  });

  const jobs = [
    {
      id: 1,
      title: 'Telecalling Executive',
      location: 'PAN-India (Remote)',
      type: 'Full-time',
      experience: '1-2 years',
      salary: 'Competitive',
      description: 'We are looking for 2 passionate telecalling professionals to join our sales team.',
      responsibilities: [
        'Make outbound calls to prospective customers',
        'Explain Callvia products and services',
        'Build and maintain customer relationships',
        'Meet daily and monthly call targets',
        'Document calls and maintain CRM records',
        'Provide feedback on customer needs and market trends',
      ],
      requirements: [
        'Bachelor\'s degree or equivalent',
        'Excellent communication skills in English and Hindi',
        'Phone-based customer service experience preferred',
        'Target-oriented mindset',
        'Reliable internet connection and quiet workspace',
        'Willingness to work flexible hours for customer convenience',
      ],
      benefits: [
        'Competitive salary + Performance bonus',
        'Health insurance',
        'Work-from-home flexibility',
        'Continuous training programs',
        'Career growth opportunities',
      ],
    },
    {
      id: 2,
      title: 'Data Entry Operator (CRM)',
      location: 'PAN-India (Remote)',
      type: 'Full-time',
      experience: 'Freshers welcome',
      salary: 'Competitive',
      description: 'Join our operations team to manage customer data and CRM system maintenance.',
      responsibilities: [
        'Enter and maintain customer data in CRM system',
        'Ensure data accuracy and completeness',
        'Update customer records and interaction logs',
        'Generate daily reports from CRM database',
        'Identify and resolve data inconsistencies',
        'Assist in data backup and system optimization',
        'Support team with administrative tasks',
      ],
      requirements: [
        'High school diploma or equivalent',
        'Proficiency with Microsoft Excel and Google Sheets',
        'Typing speed minimum 40 WPM',
        'Attention to detail and organizational skills',
        'Basic CRM knowledge or willingness to learn',
        'Reliable internet connection',
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        'Work-from-home opportunity',
        'Free CRM training',
        'Performance incentives',
      ],
    },
    {
      id: 3,
      title: 'Field Sales Executive',
      location: 'Metro Cities (On-site)',
      type: 'Full-time',
      experience: '2-3 years',
      salary: 'Competitive + Commission',
      description: 'We need 1 dynamic field sales professional to close enterprise deals and expand our customer base.',
      responsibilities: [
        'Visit prospective enterprise customers',
        'Prepare sales proposals and presentations',
        'Negotiate contracts and close deals',
        'Build long-term client relationships',
        'Track pipeline and forecast sales',
        'Provide regular updates to management',
        'Attend industry events and conferences',
      ],
      requirements: [
        'Bachelor\'s degree',
        'Minimum 2-3 years enterprise sales experience',
        'Telecom or SaaS industry background preferred',
        'Strong negotiation skills',
        'Valid driving license required',
        'Own transportation',
      ],
      benefits: [
        'Base salary + Performance commission',
        'Sales incentives and bonuses',
        'Travel allowance',
        'Laptop and mobile provision',
        'Professional development budget',
        'Exclusive incentive trips',
      ],
    },
  ];

  const handleApply = (job) => {
    setSelectedJob(job);
    setFormData({ ...formData, position: job.title });
    setShowCVForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send an email
    console.log('Sending CV application:', formData);
    alert(`Thank you! Your application for ${formData.position} has been submitted.`);
    setShowCVForm(false);
    setFormData({ name: '', email: '', phone: '', position: '' });
  };

  return (
    <div className="bg-white">
      {/* Hero Section - Full Page */}
      <section className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 flex flex-col justify-center items-center px-6 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-cyan-500/20 px-4 py-2 rounded-full mb-6 border border-cyan-400/30">
            <Briefcase size={16} />
            <span className="text-sm">Build Your Career with Us</span>
          </div>
          <h1 className="text-6xl font-bold mb-6">Join Our Growing Team</h1>
          <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
            At Callvia, we're revolutionizing telecom with AI-powered voice solutions. We're looking for talented individuals to help us grow and scale.
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('openings').scrollIntoView({ behavior: 'smooth' })}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all"
            >
              View Open Positions <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="openings" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We're currently hiring for these exciting roles. Find your perfect fit and grow with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-blue-300 transition-all group cursor-pointer"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {job.title}
                  </h3>
                  <div className="space-y-2 text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin size={18} className="text-cyan-500" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={18} className="text-cyan-500" />
                      <span>{job.type}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {job.description}
                </p>

                <div className="mb-6 space-y-3 text-sm">
                  <div>
                    <span className="text-gray-700 font-semibold">Experience:</span>
                    <p className="text-gray-600">{job.experience}</p>
                  </div>
                  <div>
                    <span className="text-gray-700 font-semibold">Salary:</span>
                    <p className="text-gray-600">{job.salary}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleApply(job)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                >
                  Apply Now <Send size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Details Drawer */}
      {showCVForm && selectedJob && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-3xl w-full my-8 max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">{selectedJob.title}</h2>
              <button
                onClick={() => setShowCVForm(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Job Details */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm mb-1">Location</p>
                  <p className="text-gray-900 font-semibold">{selectedJob.location}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm mb-1">Employment Type</p>
                  <p className="text-gray-900 font-semibold">{selectedJob.type}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm mb-1">Experience</p>
                  <p className="text-gray-900 font-semibold">{selectedJob.experience}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm mb-1">Salary Range</p>
                  <p className="text-gray-900 font-semibold">{selectedJob.salary}</p>
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Key Responsibilities</h3>
                <ul className="space-y-2">
                  {selectedJob.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex gap-3">
                      <Check size={20} className="text-cyan-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((req, idx) => (
                    <li key={idx} className="flex gap-3">
                      <Check size={20} className="text-cyan-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Benefits</h3>
                <ul className="space-y-2">
                  {selectedJob.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex gap-3">
                      <Check size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Application Form */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Apply for this position</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">
                      📧 Send your CV and cover letter to: <br />
                      <strong>careers@callvia.com</strong>
                    </p>
                    <p className="text-xs text-gray-500">
                      Include your name, the position applied for, and a brief cover letter
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                  >
                    Submit Application <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Why Join Us */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join Callvia?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We're more than just a company - we're a community of innovators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation First',
                description: 'Work with cutting-edge AI and telecom technology',
              },
              {
                title: 'Growth Mindset',
                description: 'Continuous learning and career development opportunities',
              },
              {
                title: 'Work-Life Balance',
                description: 'Flexible work arrangements and remote opportunities',
              },
              {
                title: 'Competitive Compensation',
                description: 'Attractive salary, bonuses, and performance incentives',
              },
              {
                title: 'Health & Wellness',
                description: 'Comprehensive health insurance and wellness programs',
              },
              {
                title: 'Strong Culture',
                description: 'Supportive team environment with regular team activities',
              },
            ].map((reason, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900 to-cyan-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Don't see your perfect role?</h2>
          <p className="text-xl text-cyan-100 mb-8">
            Send us your CV anyway! We're always looking for talented individuals.
          </p>
          <a
            href="mailto:careers@callvia.com?subject=Career Inquiry - Callvia"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all"
          >
            <Mail size={20} />
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}


export default Careers;
