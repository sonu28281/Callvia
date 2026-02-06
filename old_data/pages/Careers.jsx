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
    console.log('Sending CV application:', formData);
    alert(`Thank you! Your application for ${formData.position} has been submitted.`);
    setShowCVForm(false);
    setFormData({ name: '', email: '', phone: '', position: '' });
  };

  return (
    <div className="bg-brand-dark">
      {/* Hero Section */}
      <section className="relative bg-brand-dark-light text-brand-text px-6 py-20 border-b border-brand-border overflow-hidden">
        {/* Routing lines decoration */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="routing-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M0 16h32M16 0v32" stroke="currentColor" strokeWidth="0.5" className="text-brand-accent" fill="none" opacity="0.1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#routing-grid)"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-surface border border-brand-border px-4 py-2 rounded-full mb-6 text-sm">
              <Briefcase size={16} />
              Callvia – Enterprise-Grade Telecom
            </div>
            <h1 className="text-5xl lg:text-6xl font-heading font-semibold leading-tight mb-6">
              Reliability-first infrastructure for
              <span className="text-brand-text-muted"> mission-critical calling</span>
            </h1>
            <p className="text-lg text-brand-text-muted leading-relaxed mb-8">
              Callvia is a B2B telecom and cloud call center SaaS platform built for inbound and outbound operations.
              Deliver IVR, intelligent routing, monitoring, and compliance at scale with carrier-grade uptime and
              enterprise-grade security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors">
                Book a Demo <ArrowRight size={18} />
              </button>
              <button className="border border-brand-border hover:border-brand-border-light text-brand-text px-6 py-3 rounded-lg font-semibold transition-all duration-200">
                View Pricing
              </button>
            </div>
          </div>
          <div className="bg-brand-surface border border-brand-border rounded-2xl p-6 shadow-card">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-sm text-brand-text-muted">Network Operations Console</div>
                <div className="text-lg font-heading font-semibold text-brand-text">Callvia Control Center</div>
              </div>
              <div className="text-xs text-brand-text-muted">SLA: 99.99%</div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { label: 'Concurrent Calls', value: '3,120' },
                { label: 'Avg. Wait', value: '6s' },
                { label: 'Active Agents', value: '486' },
              ].map((item) => (
                <div key={item.label} className="bg-brand-dark border border-brand-border rounded-xl p-4">
                  <div className="text-xs text-brand-text-muted mb-1">{item.label}</div>
                  <div className="text-lg font-heading font-semibold text-brand-text">{item.value}</div>
                </div>
              ))}
            </div>
            <div className="bg-brand-dark border border-brand-border rounded-xl p-4 mb-4">
              <div className="text-xs text-brand-text-muted mb-3">Call Volume (last 24h)</div>
              <div className="grid grid-cols-12 gap-1 items-end h-20">
                {[14, 22, 18, 30, 26, 38, 34, 42, 28, 40, 36, 44].map((h, i) => (
                  <div key={i} className="bg-brand-accent/60 rounded" style={{ height: `${h}px` }} />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-brand-dark border border-brand-border rounded-xl p-4">
                <div className="text-xs text-brand-text-muted mb-2">Routing Health</div>
                <div className="text-sm text-brand-text">Queue SLA: 99.6%</div>
              </div>
              <div className="bg-brand-dark border border-brand-border rounded-xl p-4">
                <div className="text-xs text-brand-text-muted mb-2">Compliance</div>
                <div className="text-sm text-brand-text">Recording: 100%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="openings" className="py-20 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-brand-text mb-4">Open Positions</h2>
            <p className="text-brand-text-muted max-w-2xl mx-auto text-lg">
              We're currently hiring for these exciting roles. Find your perfect fit and grow with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-brand-surface border border-brand-border rounded-xl p-8 hover:border-brand-border-light transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover cursor-pointer"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-heading font-bold text-brand-text mb-3">
                    {job.title}
                  </h3>
                  <div className="space-y-2 text-brand-text-muted mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin size={18} className="text-brand-accent" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={18} className="text-brand-accent" />
                      <span>{job.type}</span>
                    </div>
                  </div>
                </div>

                <p className="text-brand-text-muted mb-6 text-sm leading-relaxed">
                  {job.description}
                </p>

                <div className="mb-6 space-y-3 text-sm">
                  <div>
                    <span className="text-brand-text font-semibold">Experience:</span>
                    <p className="text-brand-text-muted">{job.experience}</p>
                  </div>
                  <div>
                    <span className="text-brand-text font-semibold">Salary:</span>
                    <p className="text-brand-text-muted">{job.salary}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleApply(job)}
                  className="w-full bg-brand-accent hover:bg-brand-accent-hover text-brand-dark py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  Apply Now <Send size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      {showCVForm && selectedJob && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-brand-surface rounded-xl max-w-3xl w-full my-8 max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-brand-surface border-b border-brand-border p-6 flex justify-between items-center">
              <h2 className="text-2xl font-heading font-bold text-brand-text">{selectedJob.title}</h2>
              <button
                onClick={() => setShowCVForm(false)}
                className="text-brand-text-muted hover:text-brand-text text-2xl"
              >
                ×
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Job Details */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-brand-dark-light p-4 rounded-lg border border-brand-border">
                  <p className="text-brand-text-muted text-sm mb-1">Location</p>
                  <p className="text-brand-text font-semibold">{selectedJob.location}</p>
                </div>
                <div className="bg-brand-dark-light p-4 rounded-lg border border-brand-border">
                  <p className="text-brand-text-muted text-sm mb-1">Employment Type</p>
                  <p className="text-brand-text font-semibold">{selectedJob.type}</p>
                </div>
                <div className="bg-brand-dark-light p-4 rounded-lg border border-brand-border">
                  <p className="text-brand-text-muted text-sm mb-1">Experience</p>
                  <p className="text-brand-text font-semibold">{selectedJob.experience}</p>
                </div>
                <div className="bg-brand-dark-light p-4 rounded-lg border border-brand-border">
                  <p className="text-brand-text-muted text-sm mb-1">Salary Range</p>
                  <p className="text-brand-text font-semibold">{selectedJob.salary}</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-heading font-bold text-brand-text mb-3">Key Responsibilities</h3>
                <ul className="space-y-2">
                  {selectedJob.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex gap-3">
                      <Check size={20} className="text-brand-accent flex-shrink-0 mt-0.5" />
                      <span className="text-brand-text-muted">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-heading font-bold text-brand-text mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((req, idx) => (
                    <li key={idx} className="flex gap-3">
                      <Check size={20} className="text-brand-accent flex-shrink-0 mt-0.5" />
                      <span className="text-brand-text-muted">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-heading font-bold text-brand-text mb-3">Benefits</h3>
                <ul className="space-y-2">
                  {selectedJob.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex gap-3">
                      <Check size={20} className="text-brand-accent flex-shrink-0 mt-0.5" />
                      <span className="text-brand-text-muted">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Application Form */}
              <div className="bg-brand-dark-light p-6 rounded-lg border border-brand-border">
                <h3 className="text-xl font-heading font-bold text-brand-text mb-4">Apply for this position</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 bg-brand-dark border border-brand-border text-brand-text rounded-lg focus:outline-none focus:border-brand-accent"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 bg-brand-dark border border-brand-border text-brand-text rounded-lg focus:outline-none focus:border-brand-accent"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 bg-brand-dark border border-brand-border text-brand-text rounded-lg focus:outline-none focus:border-brand-accent"
                  />
                  <div className="bg-brand-dark p-3 rounded-lg border border-brand-border">
                    <p className="text-sm text-brand-text-muted mb-2">
                      📧 Send your CV and cover letter to: <br />
                      <strong className="text-brand-text">careers@callvia.com</strong>
                    </p>
                    <p className="text-xs text-brand-text-muted">
                      Include your name, the position applied for, and a brief cover letter
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-brand-accent hover:bg-brand-accent-hover text-brand-dark py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
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
      <section className="py-20 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-brand-text mb-4">Why Join Callvia?</h2>
            <p className="text-brand-text-muted max-w-2xl mx-auto text-lg">
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
                className="bg-brand-surface p-6 rounded-xl border border-brand-border hover:border-brand-border-light transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover"
              >
                <h3 className="text-xl font-heading font-bold text-brand-text mb-2">{reason.title}</h3>
                <p className="text-brand-text-muted">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-brand-dark border-t border-brand-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-4">Don't see your perfect role?</h2>
          <p className="text-xl text-brand-text-muted mb-8">
            Send us your CV anyway! We're always looking for talented individuals.
          </p>
          <a
            href="mailto:careers@callvia.com?subject=Career Inquiry - Callvia"
            className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            <Mail size={20} />
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
