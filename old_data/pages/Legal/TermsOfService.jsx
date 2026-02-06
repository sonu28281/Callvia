import React from 'react';
import { FileText, CheckCircle, XCircle, AlertTriangle, Scale } from 'lucide-react';

export function TermsOfServicePage() {
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
            <Scale size={32} className="text-brand-accent" />
          </div>
          <h1 className="text-5xl font-heading font-bold text-brand-text mb-6">Terms of Service</h1>
          <p className="text-xl text-brand-text-muted">
            Effective Date: February 2, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-text mb-4">Agreement to Terms</h2>
              <p className="text-lg text-brand-text-muted leading-relaxed mb-4">
                These Terms of Service ("Terms") govern your use of Callvia's telecommunications platform and services ("Services"). By accessing or using our Services, you agree to be bound by these Terms.
              </p>
              <p className="text-lg text-brand-text-muted leading-relaxed">
                If you are using our Services on behalf of an organization, you represent that you have authority to bind that organization to these Terms.
              </p>
            </div>

            {/* Service Description */}
            <div className="mb-12 bg-brand-surface rounded-xl p-8 border border-brand-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center">
                  <FileText size={24} className="text-brand-accent" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-brand-text">Services Provided</h2>
              </div>
              <p className="text-lg text-brand-text-muted leading-relaxed mb-4">
                Callvia provides enterprise-grade telecommunications services including:
              </p>
              <ul className="list-disc pl-6 text-brand-text-muted space-y-2">
                <li>Cloud-based call center platform and contact management</li>
                <li>SIP trunking and voice connectivity services</li>
                <li>DID numbers (local and toll-free) across multiple regions</li>
                <li>AI-powered voice agents and receptionist services</li>
                <li>IVR systems, call routing, and monitoring solutions</li>
                <li>WhatsApp Business API integration and automation</li>
                <li>API access for custom integrations</li>
              </ul>
            </div>

            {/* Account Responsibilities */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-text mb-6">Your Responsibilities</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-brand-surface rounded-lg p-6 border border-brand-border">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="text-brand-accent" size={24} />
                    <h3 className="text-xl font-heading font-bold text-brand-text">You Must:</h3>
                  </div>
                  <ul className="space-y-2 text-brand-text-muted">
                    <li>• Provide accurate registration information</li>
                    <li>• Complete KYC verification as per TRAI norms</li>
                    <li>• Maintain adequate prepaid balance</li>
                    <li>• Secure your account credentials</li>
                    <li>• Use services for lawful purposes only</li>
                    <li>• Comply with telecom regulations</li>
                  </ul>
                </div>

                <div className="bg-brand-surface rounded-lg p-6 border border-red-500/50">
                  <div className="flex items-center gap-2 mb-4">
                    <XCircle className="text-red-400" size={24} />
                    <h3 className="text-xl font-heading font-bold text-brand-text">You Must Not:</h3>
                  </div>
                  <ul className="space-y-2 text-brand-text-muted">
                    <li>• Engage in spam or unsolicited calling</li>
                    <li>• Make robocalls without consent</li>
                    <li>• Share account access unauthorized</li>
                    <li>• Attempt to hack or disrupt services</li>
                    <li>• Violate DND registry or DNC lists</li>
                    <li>• Use for fraudulent activities</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Billing & Payments */}
            <div className="mb-12 bg-brand-surface rounded-xl p-8 border border-brand-border">
              <h2 className="text-3xl font-heading font-bold text-brand-text mb-4">Billing & Payments</h2>
              
              <h3 className="text-xl font-heading font-bold text-brand-text mb-3">Prepaid Model</h3>
              <p className="text-brand-text-muted mb-4">
                Our services operate on a prepaid basis. You must maintain sufficient wallet balance for uninterrupted service:
              </p>
              <ul className="list-disc pl-6 text-brand-text-muted space-y-2 mb-6">
                <li>Minimum recharge: ₹1,000</li>
                <li>Charges deducted in real-time based on usage</li>
                <li>Low balance alerts at 10% threshold</li>
                <li>Services auto-suspend when balance reaches zero</li>
              </ul>

              <h3 className="text-xl font-heading font-bold text-brand-text mb-3">Pricing & Invoices</h3>
              <ul className="list-disc pl-6 text-brand-text-muted space-y-2">
                <li>Rates are as per your chosen pricing plan</li>
                <li>Monthly invoices generated for record-keeping</li>
                <li>GST applicable on all charges (18% currently)</li>
                <li>No refunds on prepaid balance (non-refundable)</li>
              </ul>
            </div>

            {/* Service Levels */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-text mb-4">Service Level Agreement (SLA)</h2>
              <div className="bg-brand-surface rounded-lg p-6 border border-brand-border">
                <ul className="space-y-3 text-brand-text-muted">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-accent font-bold">•</span>
                    <span><strong className="text-brand-text">Uptime Guarantee:</strong> 99.9% uptime (excluding scheduled maintenance)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-accent font-bold">•</span>
                    <span><strong className="text-brand-text">Support Response:</strong> Technical support within 4 business hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-accent font-bold">•</span>
                    <span><strong className="text-brand-text">Voice Quality:</strong> HD voice with &lt;4.1 MOS score</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-accent font-bold">•</span>
                    <span><strong className="text-brand-text">Maintenance Windows:</strong> Notified 48 hours in advance</span>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-brand-dark-light border border-brand-border rounded-lg">
                  <p className="text-sm text-brand-text-muted">
                    <strong className="text-brand-text">Note:</strong> SLA excludes downtime caused by third-party carriers, force majeure events, or customer misconfigurations.
                  </p>
                </div>
              </div>
            </div>

            {/* Prohibited Use */}
            <div className="mb-12 bg-brand-surface rounded-xl p-8 border border-red-500/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <AlertTriangle size={24} className="text-red-400" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-brand-text">Prohibited Activities</h2>
              </div>
              <p className="text-lg text-brand-text-muted leading-relaxed mb-4">
                The following activities will result in immediate account suspension:
              </p>
              <ul className="list-disc pl-6 text-brand-text-muted space-y-2">
                <li><strong className="text-brand-text">Spam & Robocalls:</strong> Unsolicited bulk calling or automated campaigns without consent</li>
                <li><strong className="text-brand-text">Fraud:</strong> Phishing, spoofing caller IDs, or impersonation</li>
                <li><strong className="text-brand-text">Harassment:</strong> Threatening, abusive, or harassing communications</li>
                <li><strong className="text-brand-text">Illegal Content:</strong> Promoting illegal activities or violating laws</li>
                <li><strong className="text-brand-text">DNC Violations:</strong> Calling numbers on Do Not Call registries</li>
                <li><strong className="text-brand-text">Network Abuse:</strong> Excessive traffic designed to disrupt services</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-text mb-4">Intellectual Property</h2>
              <p className="text-lg text-brand-text-muted leading-relaxed mb-4">
                All platform technology, software, APIs, documentation, and branding are owned by Callvia. You receive a limited, non-exclusive license to use our Services.
              </p>
              <ul className="list-disc pl-6 text-brand-text-muted space-y-2">
                <li>You may not reverse engineer or copy our platform</li>
                <li>White-label partners receive branding rights per agreement</li>
                <li>Your call data and content remain your property</li>
                <li>We may use anonymized data for analytics and improvements</li>
              </ul>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-text mb-4">Termination</h2>
              
              <h3 className="text-xl font-heading font-bold text-brand-text mb-3">By You:</h3>
              <p className="text-brand-text-muted mb-4">
                You may terminate your account at any time from the dashboard. Prepaid balance will not be refunded.
              </p>

              <h3 className="text-xl font-heading font-bold text-brand-text mb-3">By Us:</h3>
              <p className="text-brand-text-muted mb-4">
                We may suspend or terminate your account for:
              </p>
              <ul className="list-disc pl-6 text-brand-text-muted space-y-2">
                <li>Violation of these Terms or Acceptable Use Policy</li>
                <li>Fraudulent activity or payment disputes</li>
                <li>Non-compliance with regulatory requirements</li>
                <li>Extended period of inactivity (180 days)</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12 bg-brand-surface rounded-xl p-8 border border-brand-border">
              <h2 className="text-3xl font-heading font-bold text-brand-text mb-4">Limitation of Liability</h2>
              <p className="text-lg text-brand-text-muted leading-relaxed mb-4">
                Services are provided "as is" without warranties. To the maximum extent permitted by law:
              </p>
              <ul className="list-disc pl-6 text-brand-text-muted space-y-2">
                <li>We are not liable for indirect, incidental, or consequential damages</li>
                <li>Total liability limited to fees paid in the past 3 months</li>
                <li>We do not guarantee uninterrupted or error-free service</li>
                <li>You are responsible for backing up your data</li>
              </ul>
            </div>

            {/* Regulatory Compliance */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-text mb-4">Regulatory Compliance</h2>
              <p className="text-lg text-brand-text-muted leading-relaxed mb-4">
                Callvia operates as a licensed Virtual Network Operator (Class-B VNO). All services comply with:
              </p>
              <ul className="list-disc pl-6 text-brand-text-muted space-y-2">
                <li>TRAI (Telecom Regulatory Authority of India) regulations</li>
                <li>DoT (Department of Telecommunications) licensing requirements</li>
                <li>GDPR and Indian data protection laws</li>
                <li>National Do Not Call (NDNC) registry mandates</li>
                <li>Call recording and data retention policies</li>
              </ul>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-text mb-4">Changes to Terms</h2>
              <p className="text-lg text-brand-text-muted leading-relaxed">
                We may update these Terms periodically. Significant changes will be communicated via email 30 days in advance. Continued use of Services after changes constitutes acceptance. We recommend reviewing these Terms regularly.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-brand-dark-light rounded-xl p-8 border border-brand-border">
              <h2 className="text-3xl font-heading font-bold text-brand-text mb-4">Questions?</h2>
              <p className="text-lg text-brand-text-muted mb-4">
                For questions about these Terms or legal matters:
              </p>
              <div className="space-y-2 text-brand-text-muted">
                <p><strong className="text-brand-text">Legal Team:</strong> legal@callvia.in</p>
                <p><strong className="text-brand-text">Support:</strong> support@callvia.in</p>
                <p><strong className="text-brand-text">Address:</strong> 582/108, Badali Khera, Lucknow, Uttar Pradesh, India</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default TermsOfServicePage;
