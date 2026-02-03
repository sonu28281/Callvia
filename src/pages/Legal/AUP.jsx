import React from 'react';
import { ShieldAlert, XCircle, AlertTriangle, CheckCircle, Phone, MessageSquare } from 'lucide-react';

export function AUPPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-to-br from-red-900 to-red-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <ShieldAlert size={64} className="mx-auto mb-6 text-red-200" />
          <h1 className="text-5xl font-bold mb-6">Acceptable Use Policy</h1>
          <p className="text-xl text-red-100">
            Guidelines for responsible and lawful use of Callvia services
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Purpose of This Policy</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                This Acceptable Use Policy ("AUP") defines prohibited uses of Callvia's telecommunications services. This policy protects Callvia, our customers, and the general Internet and telecom community from unethical, irresponsible, and illegal activities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Violation of this AUP may result in service suspension or termination, with or without notice. We reserve the right to report any activity we suspect violates laws or regulations to appropriate law enforcement authorities.
              </p>
            </div>

            {/* Prohibited Activities */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <XCircle size={32} className="text-red-600" />
                <h2 className="text-3xl font-bold text-gray-900">Strictly Prohibited Activities</h2>
              </div>
              
              <div className="space-y-8">
                {/* Spam & Unsolicited Communications */}
                <div className="bg-red-50 rounded-xl p-8 border border-red-200">
                  <div className="flex items-center gap-2 mb-4">
                    <MessageSquare className="text-red-600" size={24} />
                    <h3 className="text-2xl font-bold text-gray-900">Spam & Unsolicited Communications</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Robocalls:</strong> Automated or pre-recorded calls without recipient consent</li>
                    <li>• <strong>Telemarketing Spam:</strong> Unsolicited sales or promotional calls to DND-registered numbers</li>
                    <li>• <strong>SMS Spam:</strong> Bulk unsolicited text messages or promotional SMS</li>
                    <li>• <strong>Do Not Call Violations:</strong> Calling numbers on TRAI's National Do Not Call (NDNC) registry</li>
                    <li>• <strong>Opt-out Bypass:</strong> Continuing to contact individuals who have requested no further communication</li>
                  </ul>
                </div>

                {/* Fraud & Illegal Activity */}
                <div className="bg-red-50 rounded-xl p-8 border border-red-200">
                  <div className="flex items-center gap-2 mb-4">
                    <ShieldAlert className="text-red-600" size={24} />
                    <h3 className="text-2xl font-bold text-gray-900">Fraud & Illegal Activity</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Caller ID Spoofing:</strong> Falsifying caller identification information to deceive recipients</li>
                    <li>• <strong>Phishing:</strong> Impersonating legitimate organizations to obtain sensitive information</li>
                    <li>• <strong>Scams:</strong> Lottery scams, tech support fraud, IRS/government impersonation</li>
                    <li>• <strong>Money Laundering:</strong> Using services to facilitate financial crimes</li>
                    <li>• <strong>Illegal Content:</strong> Promoting illegal drugs, weapons, or other prohibited goods/services</li>
                  </ul>
                </div>

                {/* Harassment & Abuse */}
                <div className="bg-red-50 rounded-xl p-8 border border-red-200">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="text-red-600" size={24} />
                    <h3 className="text-2xl font-bold text-gray-900">Harassment & Abuse</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Threatening Communications:</strong> Threats of violence or harm</li>
                    <li>• <strong>Harassment:</strong> Repeated unwanted calls or messages intended to annoy or distress</li>
                    <li>• <strong>Stalking:</strong> Using services to stalk or monitor individuals without consent</li>
                    <li>• <strong>Hate Speech:</strong> Communications promoting violence or discrimination based on protected characteristics</li>
                    <li>• <strong>Doxxing:</strong> Sharing private information without consent to cause harm</li>
                  </ul>
                </div>

                {/* Technical Abuse */}
                <div className="bg-red-50 rounded-xl p-8 border border-red-200">
                  <div className="flex items-center gap-2 mb-4">
                    <Phone className="text-red-600" size={24} />
                    <h3 className="text-2xl font-bold text-gray-900">Technical & Network Abuse</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Traffic Pumping:</strong> Artificially inflating call volumes to generate revenue</li>
                    <li>• <strong>Toll Fraud:</strong> Unauthorized use of services to place calls at Callvia's expense</li>
                    <li>• <strong>Network Attacks:</strong> DDoS attacks, port scanning, or attempts to disrupt services</li>
                    <li>• <strong>Unauthorized Access:</strong> Hacking, credential theft, or unauthorized system access attempts</li>
                    <li>• <strong>Resource Abuse:</strong> Excessive usage designed to degrade service for other users</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Compliance Requirements */}
            <div className="mb-12 bg-blue-50 rounded-xl p-8 border border-blue-200">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle size={32} className="text-blue-900" />
                <h2 className="text-3xl font-bold text-gray-900">Required Compliance</h2>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                All customers must comply with:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span><strong>TRAI Regulations:</strong> All Telecom Regulatory Authority of India regulations, including QoS standards, NDNC compliance, and CDR retention</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span><strong>Indian Telegraph Act 1885:</strong> Restrictions on message content and lawful use of telecommunications</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span><strong>IT Act 2000:</strong> Cyber law compliance, data protection, and prohibition of harmful content</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span><strong>Consumer Protection Laws:</strong> Truthful advertising, no deceptive practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span><strong>Data Privacy:</strong> Consent-based data collection, protection of personal information</span>
                </li>
              </ul>
            </div>

            {/* Responsible Use Guidelines */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Responsible Use Guidelines</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="text-green-600" size={24} />
                    Best Practices
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
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

                <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <AlertTriangle className="text-yellow-600" size={24} />
                    Avoid Gray Areas
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Monitoring & Enforcement</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Callvia actively monitors services to detect and prevent abuse:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Automated systems flag suspicious calling patterns or volumes</li>
                <li>Customer complaints are investigated promptly</li>
                <li>Regulatory violations trigger immediate review</li>
                <li>We cooperate with law enforcement and regulatory authorities</li>
              </ul>
              
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Enforcement Actions:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Warning:</strong> First-time minor violations may receive a warning and guidance</li>
                  <li>• <strong>Service Limitation:</strong> Restrictions on usage until compliance is restored</li>
                  <li>• <strong>Suspension:</strong> Temporary service suspension for serious or repeated violations</li>
                  <li>• <strong>Termination:</strong> Permanent account closure for severe violations</li>
                  <li>• <strong>Legal Action:</strong> Pursuit of civil or criminal remedies for illegal activity</li>
                </ul>
              </div>
            </div>

            {/* Reporting Violations */}
            <div className="mb-12 bg-blue-100 rounded-xl p-8 border border-blue-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Report Abuse</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                If you believe someone is violating this AUP or using Callvia services for harmful purposes, please report it immediately:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Abuse Team:</strong> abuse@callvia.in</p>
                <p><strong>Phone:</strong> +91 8418 828 125</p>
                <p><strong>Include:</strong> Date/time, phone numbers involved, description of activity, and any supporting evidence</p>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                All reports are reviewed confidentially. We may not be able to share investigation outcomes due to privacy policies.
              </p>
            </div>

            {/* Updates to Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Policy Updates</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Callvia reserves the right to modify this AUP at any time. Changes will be posted on this page with an updated effective date. Continued use of services after changes constitutes acceptance of the updated AUP. We recommend reviewing this policy periodically.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Questions About This Policy?</h2>
              <p className="text-lg text-red-100 mb-4">
                For clarification on acceptable use or compliance requirements:
              </p>
              <div className="space-y-2 text-red-100">
                <p><strong>Compliance Team:</strong> compliance@callvia.in</p>
                <p><strong>Support:</strong> support@callvia.in</p>
                <p><strong>Address:</strong> 582/108, Badali Khera, Lucknow, Uttar Pradesh, India</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default AUPPage;
