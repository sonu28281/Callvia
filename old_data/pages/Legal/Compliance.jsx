import React from 'react';
import { Shield, Award, CheckCircle, FileCheck, Lock, Globe } from 'lucide-react';

export function CompliancePage() {
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
          <h1 className="text-5xl font-heading font-bold text-brand-text mb-6">Compliance & Regulatory</h1>
          <p className="text-xl text-brand-text-muted">
            Certified, Compliant, and Secure Telecommunications
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="max-w-6xl mx-auto">
          
          {/* Introduction */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-heading font-bold text-brand-text mb-6">Our Commitment to Compliance</h2>
            <p className="text-xl text-brand-text-muted leading-relaxed">
              Callvia operates as a licensed Virtual Network Operator (Class-B VNO) in India, adhering to the highest standards of regulatory compliance, data security, and industry certifications.
            </p>
          </div>

          {/* Certifications & Licenses */}
          <div className="mb-20">
            <h2 className="text-3xl font-heading font-bold text-brand-text mb-8 text-center">Certifications & Licenses</h2>
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
                <div key={idx} className="bg-brand-surface rounded-xl p-8 border border-brand-border hover:border-brand-border-light transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover">
                  <div className="w-14 h-14 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-4">
                    <cert.icon size={32} className="text-brand-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-brand-text mb-3">{cert.title}</h3>
                  <p className="text-brand-text-muted mb-4">{cert.description}</p>
                  <span className="inline-block px-3 py-1 bg-brand-accent/20 text-brand-accent text-sm rounded-full">
                    {cert.issuer}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Regulatory Compliance */}
          <div className="mb-20 bg-brand-surface rounded-2xl p-12 border border-brand-border">
            <h2 className="text-3xl font-heading font-bold text-brand-text mb-8 text-center">Regulatory Compliance Framework</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-heading font-bold text-brand-text mb-4 flex items-center gap-2">
                  <Shield className="text-brand-accent" size={28} />
                  TRAI Regulations
                </h3>
                <ul className="space-y-3 text-brand-text-muted">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-brand-accent flex-shrink-0 mt-1" size={20} />
                    <span><strong className="text-brand-text">Quality of Service (QoS):</strong> Maintain call success rate, voice quality, and network availability standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-brand-accent flex-shrink-0 mt-1" size={20} />
                    <span><strong className="text-brand-text">NDNC Registry:</strong> Strict adherence to National Do Not Call registry, preventing unsolicited calls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-brand-accent flex-shrink-0 mt-1" size={20} />
                    <span><strong className="text-brand-text">Call Detail Records:</strong> Mandatory retention of CDRs for 12 months as per regulations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-brand-accent flex-shrink-0 mt-1" size={20} />
                    <span><strong className="text-brand-text">Customer Verification:</strong> KYC compliance for all subscribers as mandated</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-brand-accent flex-shrink-0 mt-1" size={20} />
                    <span><strong className="text-brand-text">Emergency Services:</strong> Priority routing for emergency numbers (100, 101, 102, 112)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold text-brand-text mb-4 flex items-center gap-2">
                  <Lock className="text-brand-accent" size={28} />
                  Data Protection Laws
                </h3>
                <ul className="space-y-3 text-brand-text-muted">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-brand-accent flex-shrink-0 mt-1" size={20} />
                    <span><strong className="text-brand-text">IT Act 2000 (India):</strong> Compliance with Information Technology Act and its amendments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-brand-accent flex-shrink-0 mt-1" size={20} />
                    <span><strong className="text-brand-text">SPDI Rules:</strong> Sensitive Personal Data protection as per Indian regulations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-brand-accent flex-shrink-0 mt-1" size={20} />
                    <span><strong className="text-brand-text">GDPR (EU):</strong> Data protection and privacy for European customers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-brand-accent flex-shrink-0 mt-1" size={20} />
                    <span><strong className="text-brand-text">Data Localization:</strong> Critical data stored in India as per RBI guidelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-brand-accent flex-shrink-0 mt-1" size={20} />
                    <span><strong className="text-brand-text">Right to Privacy:</strong> User consent, data access, and deletion rights</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Security Measures */}
          <div className="mb-20">
            <h2 className="text-3xl font-heading font-bold text-brand-text mb-8 text-center">Security & Infrastructure</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-brand-surface rounded-xl p-8 border border-brand-border">
                <h3 className="text-2xl font-heading font-bold text-brand-text mb-4">Data Encryption</h3>
                <ul className="space-y-2 text-brand-text-muted">
                  <li>• <strong className="text-brand-text">In Transit:</strong> TLS 1.3 for all API and web communications</li>
                  <li>• <strong className="text-brand-text">At Rest:</strong> AES-256 encryption for stored data</li>
                  <li>• <strong className="text-brand-text">Call Recordings:</strong> Encrypted with customer-specific keys</li>
                  <li>• <strong className="text-brand-text">Database:</strong> Encrypted backups with secure key management</li>
                </ul>
              </div>

              <div className="bg-brand-surface rounded-xl p-8 border border-brand-border">
                <h3 className="text-2xl font-heading font-bold text-brand-text mb-4">Infrastructure Security</h3>
                <ul className="space-y-2 text-brand-text-muted">
                  <li>• <strong className="text-brand-text">Data Centers:</strong> Tier III+ certified facilities in India</li>
                  <li>• <strong className="text-brand-text">Network:</strong> Redundant connectivity with DDoS protection</li>
                  <li>• <strong className="text-brand-text">Monitoring:</strong> 24/7 SOC (Security Operations Center)</li>
                  <li>• <strong className="text-brand-text">Access Control:</strong> Multi-factor authentication mandatory</li>
                </ul>
              </div>

              <div className="bg-brand-surface rounded-xl p-8 border border-brand-border">
                <h3 className="text-2xl font-heading font-bold text-brand-text mb-4">Access & Audit</h3>
                <ul className="space-y-2 text-brand-text-muted">
                  <li>• <strong className="text-brand-text">RBAC:</strong> Role-based access control for all users</li>
                  <li>• <strong className="text-brand-text">Audit Logs:</strong> Comprehensive logging of all actions</li>
                  <li>• <strong className="text-brand-text">Compliance Audits:</strong> Quarterly internal and annual external audits</li>
                  <li>• <strong className="text-brand-text">Penetration Testing:</strong> Regular security assessments</li>
                </ul>
              </div>

              <div className="bg-brand-surface rounded-xl p-8 border border-brand-border">
                <h3 className="text-2xl font-heading font-bold text-brand-text mb-4">Operational Security</h3>
                <ul className="space-y-2 text-brand-text-muted">
                  <li>• <strong className="text-brand-text">Incident Response:</strong> Defined SOP for security incidents</li>
                  <li>• <strong className="text-brand-text">Disaster Recovery:</strong> RTO of 4 hours, RPO of 1 hour</li>
                  <li>• <strong className="text-brand-text">Business Continuity:</strong> Geo-redundant infrastructure</li>
                  <li>• <strong className="text-brand-text">Vendor Management:</strong> All vendors security-assessed</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Industry Standards */}
          <div className="mb-20 bg-brand-dark-light rounded-2xl p-12 border border-brand-border">
            <h2 className="text-3xl font-heading font-bold text-brand-text mb-8  text-center">Industry Best Practices</h2>
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
                <div key={idx} className="bg-brand-surface rounded-xl p-6 border border-brand-border">
                  <h3 className="text-xl font-heading font-bold text-brand-text mb-4">{standard.title}</h3>
                  <ul className="space-y-2 text-brand-text-muted">
                    {standard.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle size={18} className="text-brand-accent flex-shrink-0 mt-1" />
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
            <h2 className="text-3xl font-heading font-bold text-brand-text mb-8 text-center">Privacy & Data Handling</h2>
            <div className="bg-brand-surface rounded-xl p-10 border border-brand-border">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-heading font-bold text-brand-text mb-4">Data Collection</h3>
                  <p className="text-brand-text-muted mb-3">We collect only necessary data:</p>
                  <ul className="space-y-2 text-brand-text-muted text-sm">
                    <li>✓ Account and billing information</li>
                    <li>✓ Call metadata (CDRs) for billing and compliance</li>
                    <li>✓ Call recordings only when explicitly enabled</li>
                    <li>✓ Technical logs for troubleshooting</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-brand-text mb-4">Data Retention</h3>
                  <p className="text-brand-text-muted mb-3">Retention periods per regulation:</p>
                  <ul className="space-y-2 text-brand-text-muted text-sm">
                    <li>✓ CDRs: 12 months (TRAI requirement)</li>
                    <li>✓ Call recordings: Customer-defined (30-365 days)</li>
                    <li>✓ Financial records: 7 years (tax law)</li>
                    <li>✓ Audit logs: 90 days minimum</li>
                  </ul>
                </div>
              </div>
              <div className="bg-brand-dark-light border border-brand-border rounded-lg p-6">
                <h4 className="font-bold text-brand-text mb-2">Your Rights:</h4>
                <p className="text-brand-text-muted">
                  Access, correct, delete, or export your data anytime. Contact <strong className="text-brand-text">privacy@callvia.in</strong> to exercise your rights under data protection laws.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Compliance Team */}
          <div className="bg-brand-dark-light rounded-2xl p-10 border border-brand-border text-center">
            <h2 className="text-3xl font-heading font-bold text-brand-text mb-4">Compliance Inquiries</h2>
            <p className="text-xl text-brand-text-muted mb-6 max-w-2xl mx-auto">
              For questions about our compliance, certifications, or security practices, contact our dedicated compliance team.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6 text-lg text-brand-text-muted">
              <div>
                <span className="font-semibold text-brand-text">Compliance:</span> compliance@callvia.in
              </div>
              <div>
                <span className="font-semibold text-brand-text">Security:</span> security@callvia.in
              </div>
            </div>
            <p className="mt-6 text-brand-text-muted">
              582/108, Badali Khera, Lucknow, Uttar Pradesh, India
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

export default CompliancePage;
