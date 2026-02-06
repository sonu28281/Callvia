import React from 'react';
import { ShieldAlert, XCircle, AlertTriangle, CheckCircle, Phone, MessageSquare } from 'lucide-react';

export function AUPPage() {
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
          <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-6">
            <ShieldAlert size={32} className="text-red-400" />
          </div>
          <h1 className="text-5xl font-heading font-bold text-brand-text mb-6">Acceptable Use Policy</h1>
          <p className="text-xl text-brand-text-muted">
            Guidelines for responsible and lawful use of Callvia services
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-text mb-4">Purpose of This Policy</h2>
              <p className="text-lg text-brand-text-muted leading-relaxed mb-4">
                This Acceptable Use Policy ("AUP") defines prohibited uses of Callvia's telecommunications services. This policy protects Callvia, our customers, and the general Internet and telecom community from unethical, irresponsible, and illegal activities.
              </p>
              <p className="text-lg text-brand-text-muted leading-relaxed">
                Violation of this AUP may result in service suspension or termination, with or without notice. We reserve the right to report any activity we suspect violates laws or regulations to appropriate law enforcement authorities.
              </p>
            </div>

            {/* Prohibited Activities */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <XCircle size={24} className="text-red-400" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-brand-text">Strictly Prohibited Activities</h2>
              </div>
              
              <div className="space-y-8">
                {/* Spam & Unsolicited Communications */}
                <div className="bg-brand-surface rounded-xl p-8 border border-red-500/50">
                  <div className="flex items-center gap-2 mb-4">
                    <MessageSquare className="text-red-400" size={24} />
                    <h3 className="text-2xl font-heading font-bold text-brand-text">Spam & Unsolicited Communications</h3>
                  </div>
                  <ul className="space-y-2 text-brand-text-muted">
                    <li>• <strong className="text-brand-text">Robocalls:</strong> Automated or pre-recorded calls without recipient consent</li>
                    <li>• <strong className="text-brand-text">Telemarketing Spam:</strong> Unsolicited sales or promotional calls to DND-registered numbers</li>
                    <li>• <strong className="text-brand-text">SMS Spam:</strong> Bulk unsolicited text messages or promotional SMS</li>
                    <li>• <strong className="text-brand-text">Do Not Call Violations:</strong> Calling numbers on TRAI's National Do Not Call (NDNC) registry</li>
                    <li>• <strong className="text-brand-text">Opt-out Bypass:</strong> Continuing to contact individuals who have requested no further communication</li>
                  </ul>
                </div>

                {/* Fraud & Illegal Activity */}
                <div className="bg-brand-surface rounded-xl p-8 border border-red-500/50">
                  <div className="flex items-center gap-2 mb-4">
                    <ShieldAlert className="text-red-400" size={24} />
                    <h3 className="text-2xl font-heading font-bold text-brand-text">Fraud & Illegal Activity</h3>
                  </div>
                  <ul className="space-y-2 text-brand-text-muted">
                    <li>• <strong className="text-brand-text">Caller ID Spoofing:</strong> Falsifying caller identification information to deceive recipients</li>
                    <li>• <strong className="text-brand-text">Phishing:</strong> Impersonating legitimate organizations to obtain sensitive information</li>
                    <li>• <strong className="text-brand-text">Scams:</strong> Lottery scams, tech support fraud, IRS/government impersonation</li>
                    <li>• <strong className="text-brand-text">Money Laundering:</strong> Using services to facilitate financial crimes</li>
                    <li>• <strong className="text-brand-text">Illegal Content:</strong> Promoting illegal drugs, weapons, or other prohibited goods/services</li>
                  </ul>
                </div>

                {/* Harassment & Abuse */}
                <div className="bg-brand-surface rounded-xl p-8 border border-red-500/50">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="text-red-400" size={24} />
                    <h3 className="text-2xl font-heading font-bold text-brand-text">Harassment & Abuse</h3>
                  </div>
                  <ul className="space-y-2 text-brand-text-muted">
                    <li>• <strong className="text-brand-text">Threatening Communications:</strong> Threats of violence or harm</li>
                    <li>• <strong className="text-brand-text">Harassment:</strong> Repeated unwanted calls or messages intended to annoy or distress</li>
                    <li>• <strong className="text-brand-text">Stalking:</strong> Using services to stalk or monitor individuals without consent</li>
                    <li>• <strong className="text-brand-text">Hate Speech:</strong> Communications promoting violence or discrimination based on protected characteristics</li>
                    <li>• <strong className="text-brand-text">Doxxing:</strong> Sharing private information without consent to cause harm</li>
                  </ul>
                </div>

                {/* Technical Abuse */}
                <div className="bg-brand-surface rounded-xl p-8 border border-red-500/50">
                  <div className="flex items-center gap-2 mb-4">
                    <Phone className="text-red-400" size={24} />
                    <h3 className="text-2xl font-heading font-bold text-brand-text">Technical & Network Abuse</h3>
                  </div>
                  <ul className="space-y-2 text-brand-text-muted">
                    <li>• <strong className="text-brand-text">Traffic Pumping:</strong> Artificially inflating call volumes to generate revenue</li>
                    <li>• <strong className="text-brand-text">Toll Fraud:</strong> Unauthorized use of services to place calls at Callvia's expense</li>
                    <li>• <strong className="text-brand-text">Network Attacks:</strong> DDoS attacks, port scanning, or attempts to disrupt services</li>
                    <li>• <strong className="text-brand-text">Unauthorized Access:</strong> Hacking, credential theft, or unauthorized system access attempts</li>
                    <li>• <strong className="text-brand-text">Resource Abuse:</strong> Excessive usage designed to degrade service for other users</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Compliance Requirements */}
            <div className="mb-12 bg-brand-surface rounded-xl p-8 border border-brand-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center">
                  <CheckCircle size={24} className="text-brand-accent" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-brand-text">Required Compliance</h2>
              </div>
              <p className="text-lg text-brand-text-muted mb-4">
                All customers must comply with:
              </p>
              <ul className="space-y-3 text-brand-text-muted">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-brand-accent flex-shrink-0 mt-1" size={20} />
                  <span><strong className="text-brand-text">TRAI Regulations:</strong> All Telecom Regulatory Authority of India regulations, including QoS standards, NDNC compliance, and CDR retention</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-brand-accent flex-shrink-0 mt-1" size={20} />
                  <span><strong className="text-brand-text">Indian Telegraph Act 1885:</strong> Restrictions on message content and lawful use of telecommunications</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-brand-accent flex-shrink-0 mt-1" size={20} />
                  <span><strong className="text-brand-text">IT Act 2000:</strong> Cyber law compliance, data protection, and prohibition of harmful content</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-brand-accent flex-shrink-0 mt-1" size={20} />
                  <span><strong className="text-brand-text">Consumer Protection Laws:</strong> Truthful advertising, no deceptive practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-brand-accent flex-shrink-0 mt-1" size={20} />
                  <span><strong className="text-brand-text">Data Privacy:</strong> Consent-based data collection, protection of personal information</span>
                </li>
              </ul>
            </div>

            {/* Responsible Use Guidelines */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-text mb-6">Responsible Use Guidelines</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-brand-surface rounded-lg p-6 border border-brand-border">
                  <h3 className="text-xl font-heading font-bold text-brand-text mb-4 flex items-center gap-2">
                    <CheckCircle className="text-brand-accent" size={24} />
                    Best Practices
                  </h3>
                  <ul className="space-y-2 text-brand-text-muted text-sm">
                    <li>✓ Obtain explicit consent before calling or messaging</li>
                    <li>✓ Respect DND preferences and opt-out requests immediately</li>
                    <li>✓ Provide accurate caller ID information</li>
                    <li>✓ Maintain call quality and avoid excessive traffic</li>
                    <li>✓ Secure your account credentials</li>
                    <li>✓ Monitor your usage for anomalies</li>
                    <li>✓ Keep contact lists up-to-date with consents</li>
                    <li>✓ Train staff on compliance requirements</li>
                  </ul>
                </div>

                <div className="bg-brand-surface rounded-lg p-6 border border-yellow-500/50">
                  <h3 className="text-xl font-heading font-bold text-brand-text mb-4 flex items-center gap-2">
                    <AlertTriangle className="text-yellow-400" size={24} />
                    Avoid Gray Areas
                  </h3>
                  <ul className="space-y-2 text-brand-text-muted text-sm">
                    <li>⚠ Purchased contact lists (may contain DND numbers)</li>
                    <li>⚠ "Implied consent" without documentation</li>
                    <li>⚠ Excessive call attempts to unreachable numbers</li>
                    <li>⚠ Ambiguous or misleading caller ID names</li>
                    <li>⚠ Sharing account access with untrained users</li>
                    <li>⚠ Testing at scale without monitoring</li>
                    <li>⚠ Automated campaigns without human oversight</li>
                    <li>⚠ International calls to high-risk destinations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Monitoring & Enforcement */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-text mb-4">Monitoring & Enforcement</h2>
              <p className="text-lg text-brand-text-muted leading-relaxed mb-4">
                Callvia actively monitors services to detect and prevent abuse:
              </p>
              <ul className="list-disc pl-6 text-brand-text-muted space-y-2 mb-6">
                <li>Automated systems flag suspicious calling patterns or volumes</li>
                <li>Customer complaints are investigated promptly</li>
                <li>Regulatory violations trigger immediate review</li>
                <li>We cooperate with law enforcement and regulatory authorities</li>
              </ul>
              
              <div className="bg-brand-surface rounded-lg p-6 border border-brand-border">
                <h3 className="text-xl font-heading font-bold text-brand-text mb-3">Enforcement Actions:</h3>
                <ul className="space-y-2 text-brand-text-muted">
                  <li>• <strong className="text-brand-text">Warning:</strong> First-time minor violations may receive a warning and guidance</li>
                  <li>• <strong className="text-brand-text">Service Limitation:</strong> Restrictions on usage until compliance is restored</li>
                  <li>• <strong className="text-brand-text">Suspension:</strong> Temporary service suspension for serious or repeated violations</li>
                  <li>• <strong className="text-brand-text">Termination:</strong> Permanent account closure for severe violations</li>
                  <li>• <strong className="text-brand-text">Legal Action:</strong> Pursuit of civil or criminal remedies for illegal activity</li>
                </ul>
              </div>
            </div>

            {/* Reporting Violations */}
            <div className="mb-12 bg-brand-surface rounded-xl p-8 border border-brand-border">
              <h2 className="text-3xl font-heading font-bold text-brand-text mb-4">Report Abuse</h2>
              <p className="text-lg text-brand-text-muted leading-relaxed mb-4">
                If you believe someone is violating this AUP or using Callvia services for harmful purposes, please report it immediately:
              </p>
              <div className="space-y-2 text-brand-text-muted">
                <p><strong className="text-brand-text">Abuse Team:</strong> abuse@callvia.in</p>
                <p><strong className="text-brand-text">Phone:</strong> +91 8418 828 125</p>
                <p><strong className="text-brand-text">Include:</strong> Date/time, phone numbers involved, description of activity, and any supporting evidence</p>
              </div>
              <p className="text-sm text-brand-text-muted mt-4">
                All reports are reviewed confidentially. We may not be able to share investigation outcomes due to privacy policies.
              </p>
            </div>

            {/* Updates to Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-text mb-4">Policy Updates</h2>
              <p className="text-lg text-brand-text-muted leading-relaxed">
                Callvia reserves the right to modify this AUP at any time. Changes will be posted on this page with an updated effective date. Continued use of services after changes constitutes acceptance of the updated AUP. We recommend reviewing this policy periodically.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-brand-dark-light rounded-xl p-8 border border-brand-border">
              <h2 className="text-3xl font-heading font-bold text-brand-text mb-4">Questions About This Policy?</h2>
              <p className="text-lg text-brand-text-muted mb-4">
                For clarification on acceptable use or compliance requirements:
              </p>
              <div className="space-y-2 text-brand-text-muted">
                <p><strong className="text-brand-text">Compliance Team:</strong> compliance@callvia.in</p>
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

export default AUPPage;
