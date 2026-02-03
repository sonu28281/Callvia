import React from 'react';
import { Shield, Lock, Eye, Database, Mail } from 'lucide-react';

export function PrivacyPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Shield size={64} className="mx-auto mb-6 text-blue-200" />
          <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-blue-100">
            Last Updated: February 2, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Callvia ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our telecom services and platform.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                By using Callvia's services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12 bg-blue-50 rounded-xl p-8 border border-blue-200">
              <div className="flex items-center gap-3 mb-6">
                <Database size={32} className="text-blue-900" />
                <h2 className="text-3xl font-bold text-gray-900">Information We Collect</h2>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Personal Information</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Name, email address, phone number, and business details</li>
                <li>Company name, designation, and billing information</li>
                <li>Government-issued ID for KYC compliance (as required by TRAI)</li>
                <li>Payment information and transaction history</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Call Data Records (CDR)</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Call timestamps, duration, and destination numbers</li>
                <li>Caller ID information and routing details</li>
                <li>Call recordings (when explicitly enabled by you)</li>
                <li>SMS and messaging logs</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Technical Information</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>IP addresses, device information, and browser type</li>
                <li>Usage data and platform interaction logs</li>
                <li>API usage statistics and integration data</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Eye size={32} className="text-blue-900" />
                <h2 className="text-3xl font-bold text-gray-900">How We Use Your Information</h2>
              </div>
              
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-900 font-bold">•</span>
                  <span><strong>Service Delivery:</strong> To provide, maintain, and improve our voice services, platform features, and customer support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-900 font-bold">•</span>
                  <span><strong>Billing & Payments:</strong> To process transactions, generate invoices, and manage prepaid wallet balances</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-900 font-bold">•</span>
                  <span><strong>Compliance:</strong> To comply with TRAI regulations, legal obligations, and prevent fraudulent activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-900 font-bold">•</span>
                  <span><strong>Analytics:</strong> To analyze usage patterns, improve service quality, and develop new features</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-900 font-bold">•</span>
                  <span><strong>Communication:</strong> To send service updates, technical notices, and respond to your inquiries</span>
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <Lock size={32} className="text-blue-900" />
                <h2 className="text-3xl font-bold text-gray-900">Data Security</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>AES-256 encryption for data at rest and in transit</li>
                <li>Secure data centers with 24/7 monitoring</li>
                <li>Regular security audits and penetration testing</li>
                <li>Role-based access controls and audit logging</li>
                <li>Compliance with ISO 27001 security standards</li>
              </ul>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Retention</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We retain your information for as long as necessary to provide services and comply with legal obligations:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Call Records:</strong> Retained for 12 months as per TRAI regulations</li>
                <li><strong>Account Information:</strong> Retained while your account is active</li>
                <li><strong>Financial Records:</strong> Retained for 7 years for tax compliance</li>
                <li><strong>Call Recordings:</strong> As per your configured retention policy (30-365 days)</li>
              </ul>
            </div>

            {/* Data Sharing */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Information Sharing</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We do not sell your personal information. We may share your data only in these circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>With Your Consent:</strong> When you explicitly authorize data sharing</li>
                <li><strong>Service Providers:</strong> Third-party vendors who assist in service delivery (under strict NDAs)</li>
                <li><strong>Legal Requirements:</strong> When required by law enforcement or regulatory authorities</li>
                <li><strong>Business Transfers:</strong> In case of merger, acquisition, or asset sale (with prior notice)</li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className="mb-12 bg-blue-50 rounded-xl p-8 border border-blue-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your data (subject to legal retention requirements)</li>
                <li><strong>Portability:</strong> Export your data in a machine-readable format</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              </ul>
              <p className="text-gray-700 mt-6">
                To exercise these rights, contact us at <a href="mailto:privacy@callvia.in" className="text-blue-900 font-semibold hover:underline">privacy@callvia.in</a>
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Cookies & Tracking</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your experience:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for platform functionality and security</li>
                <li><strong>Analytics Cookies:</strong> Help us understand usage patterns and improve services</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
              <p className="text-gray-700 mt-4">
                You can control cookies through your browser settings, though this may affect functionality.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <Mail size={32} />
                <h2 className="text-3xl font-bold">Contact Us</h2>
              </div>
              <p className="text-lg text-blue-100 mb-4">
                If you have questions about this Privacy Policy or your data, please contact:
              </p>
              <div className="space-y-2 text-blue-100">
                <p><strong>Email:</strong> privacy@callvia.in</p>
                <p><strong>Address:</strong> 582/108, Badali Khera, Lucknow, Uttar Pradesh, India</p>
                <p><strong>Support:</strong> support@callvia.in</p>
              </div>
            </div>

            {/* Updates */}
            <div className="mt-12 p-6 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Policy Updates</h3>
              <p className="text-gray-700">
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
