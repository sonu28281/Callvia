import React from 'react';
import { Shield, Lock, Eye, Database, Mail } from 'lucide-react';

export function PrivacyPage() {
  return (
    <div className="bg-brand-dark">
      {/* Hero */}
      <section className="relative py-20 px-6 bg-brand-dark-light text-brand-text border-b border-brand-border overflow-hidden">
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

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="w-16 h-16 rounded-full bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mx-auto mb-6">
            <Shield size={32} className="text-brand-accent" />
          </div>
          <h1 className="text-5xl font-heading font-bold text-brand-text mb-6">Privacy Policy</h1>
          <p className="text-xl text-brand-text-muted">
            Last Updated: February 2, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-text mb-4">Introduction</h2>
              <p className="text-lg text-brand-text-muted leading-relaxed mb-4">
                Callvia ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our telecom services and platform.
              </p>
              <p className="text-lg text-brand-text-muted leading-relaxed">
                By using Callvia's services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12 bg-brand-surface rounded-xl p-8 border border-brand-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center">
                  <Database size={24} className="text-brand-accent" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-brand-text">Information We Collect</h2>
              </div>
              
              <h3 className="text-xl font-heading font-bold text-brand-text mb-3">1. Personal Information</h3>
              <ul className="list-disc pl-6 mb-6 text-brand-text-muted space-y-2">
                <li>Name, email address, phone number, and business details</li>
                <li>Company name, designation, and billing information</li>
                <li>Government-issued ID for KYC compliance (as required by TRAI)</li>
                <li>Payment information and transaction history</li>
              </ul>

              <h3 className="text-xl font-heading font-bold text-brand-text mb-3">2. Call Data Records (CDR)</h3>
              <ul className="list-disc pl-6 mb-6 text-brand-text-muted space-y-2">
                <li>Call timestamps, duration, and destination numbers</li>
                <li>Caller ID information and routing details</li>
                <li>Call recordings (when explicitly enabled by you)</li>
                <li>SMS and messaging logs</li>
              </ul>

              <h3 className="text-xl font-heading font-bold text-brand-text mb-3">3. Technical Information</h3>
              <ul className="list-disc pl-6 mb-6 text-brand-text-muted space-y-2">
                <li>IP addresses, device information, and browser type</li>
                <li>Usage data and platform interaction logs</li>
                <li>API usage statistics and integration data</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center">
                  <Eye size={24} className="text-brand-accent" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-brand-text">How We Use Your Information</h2>
              </div>
              
              <ul className="space-y-4 text-brand-text-muted">
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent font-bold text-lg">•</span>
                  <span><strong className="text-brand-text">Service Delivery:</strong> To provide, maintain, and improve our voice services, platform features, and customer support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent font-bold text-lg">•</span>
                  <span><strong className="text-brand-text">Billing & Payments:</strong> To process transactions, generate invoices, and manage prepaid wallet balances</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent font-bold text-lg">•</span>
                  <span><strong className="text-brand-text">Compliance:</strong> To comply with TRAI regulations, legal obligations, and prevent fraudulent activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent font-bold text-lg">•</span>
                  <span><strong className="text-brand-text">Analytics:</strong> To analyze usage patterns, improve service quality, and develop new features</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent font-bold text-lg">•</span>
                  <span><strong className="text-brand-text">Communication:</strong> To send service updates, technical notices, and respond to your inquiries</span>
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-12 bg-brand-surface rounded-xl p-8 border border-brand-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center">
                  <Lock size={24} className="text-brand-accent" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-brand-text">Data Security</h2>
              </div>
              <p className="text-lg text-brand-text-muted leading-relaxed mb-4">
                We implement industry-standard security measures to protect your information:
              </p>
              <ul className="list-disc pl-6 text-brand-text-muted space-y-2">
                <li>AES-256 encryption for data at rest and in transit</li>
                <li>Secure data centers with 24/7 monitoring</li>
                <li>Regular security audits and penetration testing</li>
                <li>Role-based access controls and audit logging</li>
                <li>Compliance with ISO 27001 security standards</li>
              </ul>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-text mb-4">Data Retention</h2>
              <p className="text-lg text-brand-text-muted leading-relaxed mb-4">
                We retain your information for as long as necessary to provide services and comply with legal obligations:
              </p>
              <ul className="list-disc pl-6 text-brand-text-muted space-y-2">
                <li><strong className="text-brand-text">Call Records:</strong> Retained for 12 months as per TRAI regulations</li>
                <li><strong className="text-brand-text">Account Information:</strong> Retained while your account is active</li>
                <li><strong className="text-brand-text">Financial Records:</strong> Retained for 7 years for tax compliance</li>
                <li><strong className="text-brand-text">Call Recordings:</strong> As per your configured retention policy (30-365 days)</li>
              </ul>
            </div>

            {/* Data Sharing */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-text mb-4">Information Sharing</h2>
              <p className="text-lg text-brand-text-muted leading-relaxed mb-4">
                We do not sell your personal information. We may share your data only in these circumstances:
              </p>
              <ul className="list-disc pl-6 text-brand-text-muted space-y-2">
                <li><strong className="text-brand-text">With Your Consent:</strong> When you explicitly authorize data sharing</li>
                <li><strong className="text-brand-text">Service Providers:</strong> Third-party vendors who assist in service delivery (under strict NDAs)</li>
                <li><strong className="text-brand-text">Legal Requirements:</strong> When required by law enforcement or regulatory authorities</li>
                <li><strong className="text-brand-text">Business Transfers:</strong> In case of merger, acquisition, or asset sale (with prior notice)</li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className="mb-12 bg-brand-surface rounded-xl p-8 border border-brand-border">
              <h2 className="text-3xl font-heading font-bold text-brand-text mb-4">Your Rights</h2>
              <p className="text-lg text-brand-text-muted leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-brand-text-muted space-y-2">
                <li><strong className="text-brand-text">Access:</strong> Request a copy of your personal data</li>
                <li><strong className="text-brand-text">Correction:</strong> Update or correct inaccurate information</li>
                <li><strong className="text-brand-text">Deletion:</strong> Request deletion of your data (subject to legal retention requirements)</li>
                <li><strong className="text-brand-text">Portability:</strong> Export your data in a machine-readable format</li>
                <li><strong className="text-brand-text">Opt-out:</strong> Unsubscribe from marketing communications</li>
              </ul>
              <p className="text-brand-text-muted mt-6">
                To exercise these rights, contact us at <a href="mailto:privacy@callvia.in" className="text-brand-accent font-semibold hover:underline">privacy@callvia.in</a>
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-text mb-4">Cookies & Tracking</h2>
              <p className="text-lg text-brand-text-muted leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your experience:
              </p>
              <ul className="list-disc pl-6 text-brand-text-muted space-y-2">
                <li><strong className="text-brand-text">Essential Cookies:</strong> Required for platform functionality and security</li>
                <li><strong className="text-brand-text">Analytics Cookies:</strong> Help us understand usage patterns and improve services</li>
                <li><strong className="text-brand-text">Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
              <p className="text-brand-text-muted mt-4">
                You can control cookies through your browser settings, though this may affect functionality.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-brand-dark-light rounded-xl p-8 border border-brand-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center">
                  <Mail size={24} className="text-brand-accent" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-brand-text">Contact Us</h2>
              </div>
              <p className="text-lg text-brand-text-muted mb-4">
                If you have questions about this Privacy Policy or your data, please contact:
              </p>
              <div className="space-y-2 text-brand-text-muted">
                <p><strong className="text-brand-text">Email:</strong> privacy@callvia.in</p>
                <p><strong className="text-brand-text">Address:</strong> 582/108, Badali Khera, Lucknow, Uttar Pradesh, India</p>
                <p><strong className="text-brand-text">Support:</strong> support@callvia.in</p>
              </div>
            </div>

            {/* Updates */}
            <div className="mt-12 p-6 bg-brand-surface rounded-lg border border-brand-border">
              <h3 className="text-xl font-heading font-bold text-brand-text mb-3">Policy Updates</h3>
              <p className="text-brand-text-muted">
                We may update this Privacy Policy periodically. We will notify you of significant changes via email or platform notification. Continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPage;
