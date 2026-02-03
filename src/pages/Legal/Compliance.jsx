import React from 'react';
import { Shield, Award, CheckCircle, FileCheck, Lock, Globe } from 'lucide-react';

export function CompliancePage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-to-br from-green-900 to-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Shield size={64} className="mx-auto mb-6 text-green-200" />
          <h1 className="text-5xl font-bold mb-6">Compliance & Regulatory</h1>
          <p className="text-xl text-green-100">
            Certified, Compliant, and Secure Telecommunications
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Introduction */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Commitment to Compliance</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Callvia operates as a licensed Virtual Network Operator (Class-B VNO) in India, adhering to the highest standards of regulatory compliance, data security, and industry certifications.
            </p>
          </div>

          {/* Certifications & Licenses */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Certifications & Licenses</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: 'Class-B VNO License',
                  description: 'Licensed Virtual Network Operator by Department of Telecommunications (DoT), Government of India',
                  issuer: 'DoT, India'
                },
                {
                  icon: Shield,
                  title: 'ISO 27001:2013',
                  description: 'Certified for Information Security Management System (ISMS) ensuring data protection and security',
                  issuer: 'ISO Certified'
                },
                {
                  icon: CheckCircle,
                  title: 'SOC 2 Type II',
                  description: 'Compliance with security, availability, and confidentiality standards for service organizations',
                  issuer: 'AICPA Standards'
                },
                {
                  icon: Globe,
                  title: 'GDPR Compliant',
                  description: 'Adherence to General Data Protection Regulation for EU customer data protection',
                  issuer: 'EU Regulation'
                },
                {
                  icon: Lock,
                  title: 'PCI DSS Level 1',
                  description: 'Payment Card Industry Data Security Standard for secure payment processing',
                  issuer: 'PCI Council'
                },
                {
                  icon: FileCheck,
                  title: 'TRAI Compliant',
                  description: 'Full compliance with Telecom Regulatory Authority of India regulations and guidelines',
                  issuer: 'TRAI, India'
                },
              ].map((cert, idx) => (
                <div key={idx} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 border border-green-200 hover:shadow-xl transition-shadow">
                  <cert.icon size={48} className="text-green-900 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{cert.title}</h3>
                  <p className="text-gray-700 mb-4">{cert.description}</p>
                  <span className="inline-block px-3 py-1 bg-green-900 text-white text-sm rounded-full">
                    {cert.issuer}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Regulatory Compliance */}
          <div className="mb-20 bg-gray-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Regulatory Compliance Framework</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Shield className="text-green-900" size={28} />
                  TRAI Regulations
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span><strong>Quality of Service (QoS):</strong> Maintain call success rate, voice quality, and network availability standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span><strong>NDNC Registry:</strong> Strict adherence to National Do Not Call registry, preventing unsolicited calls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span><strong>Call Detail Records:</strong> Mandatory retention of CDRs for 12 months as per regulations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span><strong>Customer Verification:</strong> KYC compliance for all subscribers as mandated</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span><strong>Emergency Services:</strong> Priority routing for emergency numbers (100, 101, 102, 112)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Lock className="text-green-900" size={28} />
                  Data Protection Laws
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span><strong>IT Act 2000 (India):</strong> Compliance with Information Technology Act and its amendments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span><strong>SPDI Rules:</strong> Sensitive Personal Data protection as per Indian regulations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span><strong>GDPR (EU):</strong> Data protection and privacy for European customers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span><strong>Data Localization:</strong> Critical data stored in India as per RBI guidelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span><strong>Right to Privacy:</strong> User consent, data access, and deletion rights</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Security Measures */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Security & Infrastructure</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Encryption</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>In Transit:</strong> TLS 1.3 for all API and web communications</li>
                  <li>• <strong>At Rest:</strong> AES-256 encryption for stored data</li>
                  <li>• <strong>Call Recordings:</strong> Encrypted with customer-specific keys</li>
                  <li>• <strong>Database:</strong> Encrypted backups with secure key management</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Infrastructure Security</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Data Centers:</strong> Tier III+ certified facilities in India</li>
                  <li>• <strong>Network:</strong> Redundant connectivity with DDoS protection</li>
                  <li>• <strong>Monitoring:</strong> 24/7 SOC (Security Operations Center)</li>
                  <li>• <strong>Access Control:</strong> Multi-factor authentication mandatory</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-8 border border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Access & Audit</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>RBAC:</strong> Role-based access control for all users</li>
                  <li>• <strong>Audit Logs:</strong> Comprehensive logging of all actions</li>
                  <li>• <strong>Compliance Audits:</strong> Quarterly internal and annual external audits</li>
                  <li>• <strong>Penetration Testing:</strong> Regular security assessments</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-8 border border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Operational Security</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Incident Response:</strong> Defined SOP for security incidents</li>
                  <li>• <strong>Disaster Recovery:</strong> RTO of 4 hours, RPO of 1 hour</li>
                  <li>• <strong>Business Continuity:</strong> Geo-redundant infrastructure</li>
                  <li>• <strong>Vendor Management:</strong> All vendors security-assessed</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Industry Standards */}
          <div className="mb-20 bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">Industry Best Practices</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Voice Quality Standards',
                  points: [
                    'ITU-T G.711 codec support',
                    'MOS score >4.0 maintained',
                    'Jitter <30ms, Packet loss <1%',
                    'Network latency monitoring'
                  ]
                },
                {
                  title: 'Availability & Uptime',
                  points: [
                    '99.9% uptime SLA guarantee',
                    'Load balancing across nodes',
                    'Automatic failover systems',
                    'Real-time health monitoring'
                  ]
                },
                {
                  title: 'Operational Excellence',
                  points: [
                    'ITIL-based service management',
                    'Change management protocols',
                    'Capacity planning & forecasting',
                    'Continuous improvement process'
                  ]
                }
              ].map((standard, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-4">{standard.title}</h3>
                  <ul className="space-y-2 text-blue-100">
                    {standard.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle size={18} className="flex-shrink-0 mt-1" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Privacy & Data Handling */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Privacy & Data Handling</h2>
            <div className="bg-gray-50 rounded-xl p-10">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Data Collection</h3>
                  <p className="text-gray-700 mb-3">We collect only necessary data:</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✓ Account and billing information</li>
                    <li>✓ Call metadata (CDRs) for billing and compliance</li>
                    <li>✓ Call recordings only when explicitly enabled</li>
                    <li>✓ Technical logs for troubleshooting</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Data Retention</h3>
                  <p className="text-gray-700 mb-3">Retention periods per regulation:</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✓ CDRs: 12 months (TRAI requirement)</li>
                    <li>✓ Call recordings: Customer-defined (30-365 days)</li>
                    <li>✓ Financial records: 7 years (tax law)</li>
                    <li>✓ Audit logs: 90 days minimum</li>
                  </ul>
                </div>
              </div>
              <div className="bg-blue-100 border border-blue-300 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">Your Rights:</h4>
                <p className="text-gray-700">
                  Access, correct, delete, or export your data anytime. Contact <strong>privacy@callvia.in</strong> to exercise your rights under data protection laws.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Compliance Team */}
          <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-2xl p-10 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Compliance Inquiries</h2>
            <p className="text-xl text-green-100 mb-6 max-w-2xl mx-auto">
              For questions about our compliance, certifications, or security practices, contact our dedicated compliance team.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6 text-lg">
              <div>
                <span className="font-semibold">Compliance:</span> compliance@callvia.in
              </div>
              <div>
                <span className="font-semibold">Security:</span> security@callvia.in
              </div>
            </div>
            <p className="mt-6 text-green-100">
              582/108, Badali Khera, Lucknow, Uttar Pradesh, India
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

export default CompliancePage;
