import React from 'react';
import { ArrowRight, Check, Wallet, CreditCard, DollarSign, Bell, FileText, RefreshCw, TrendingUp, Shield } from 'lucide-react';
import { AnimatedBackground } from '../../components/sections/AnimatedBackground.jsx';

export function BillingPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden pt-32 pb-32 bg-gradient-to-br from-cyan-400 via-teal-400 to-emerald-500">
        <div className="absolute inset-0 opacity-70">
          <svg className="absolute bottom-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{height: '100%'}}>
            <path fill="rgba(255, 255, 255, 0.2)" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              <animate attributeName="d" dur="8s" repeatCount="indefinite" values="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,122.7C672,107,768,117,864,138.7C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
            </path>
            <path fill="rgba(255, 255, 255, 0.15)" d="M0,160L48,165.3C96,171,192,181,288,181.3C384,181,480,171,576,165.3C672,160,768,160,864,165.3C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              <animate attributeName="d" dur="12s" repeatCount="indefinite" values="M0,160L48,165.3C96,171,192,181,288,181.3C384,181,480,171,576,165.3C672,160,768,160,864,165.3C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,192L48,186.7C96,181,192,171,288,170.7C384,171,480,181,576,186.7C672,192,768,192,864,186.7C960,181,1056,171,1152,170.7C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,160L48,165.3C96,171,192,181,288,181.3C384,181,480,171,576,165.3C672,160,768,160,864,165.3C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
            </path>
            <path fill="rgba(255, 255, 255, 0.1)" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              <animate attributeName="d" dur="6s" repeatCount="indefinite" values="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,192L48,202.7C96,213,192,235,288,234.7C384,235,480,213,576,202.7C672,192,768,192,864,202.7C960,213,1056,235,1152,234.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
            </path>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-bold mb-6">
              PREPAID BILLING
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transparent Wallet-Based Billing
            </h1>
            <p className="text-xl text-teal-100 mb-8 leading-relaxed">
              Pay-as-you-go with complete cost control. Real-time wallet balance tracking, detailed CDRs, and flexible recharge options.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-gradient-to-r from-teal-900 to-teal-800 hover:from-teal-950 hover:to-teal-900 text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg">
                Start Free Trial <ArrowRight size={20} />
              </button>
              <button className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Wallet Features */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Prepaid Wallet System</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Wallet, title: 'Prepaid Balance', desc: 'Load wallet with flexible amounts. No monthly contracts or commitments required.' },
              { icon: RefreshCw, title: 'Auto-Recharge', desc: 'Set up automatic recharge when balance falls below threshold. Never run out of credit.' },
              { icon: DollarSign, title: 'Pay Per Use', desc: 'Charged only for actual usage. No wastage on unused services or hidden charges.' },
              { icon: Bell, title: 'Low Balance Alerts', desc: 'Email & SMS notifications when balance is low. Set custom alert thresholds.' },
              { icon: TrendingUp, title: 'Usage Analytics', desc: 'Detailed breakdowns by service, number, time. Optimize your telecom spend.' },
              { icon: Shield, title: 'Secure Payments', desc: 'PCI-DSS compliant payment gateway. Support for UPI, cards, net banking, NEFT.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-900 transition-all hover:shadow-lg">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <item.icon size={32} className="text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Billing Reports */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Detailed Billing Reports</h2>
              <p className="text-lg text-gray-600 mb-8">
                Access comprehensive CDRs and usage reports. Download in multiple formats for accounting and reconciliation.
              </p>
              <div className="space-y-6">
                {[
                  { icon: FileText, title: 'Call Detail Records', desc: 'Complete CDR with timestamp, duration, cost, destination, CLI' },
                  { icon: TrendingUp, title: 'Usage Trends', desc: 'Hourly, daily, monthly usage patterns. Identify peak hours and optimize.' },
                  { icon: CreditCard, title: 'Transaction History', desc: 'All recharge and deduction history with invoice generation' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="bg-blue-100 rounded-lg p-3 h-fit">
                      <item.icon size={24} className="text-blue-900" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-12 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Billing Features</h3>
              <ul className="space-y-4">
                {[
                  'Real-time wallet balance dashboard',
                  'Per-second billing accuracy',
                  'Multiple payment methods',
                  'Downloadable invoices with GST',
                  'Cost allocation by project/department',
                  'API access for billing integration',
                  'Customizable low-balance threshold',
                  'Scheduled auto-recharge options',
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={20} className="text-blue-900 flex-shrink-0 mt-1" />
                    <span className="text-gray-900">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Flexible Payment Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'UPI', desc: 'Instant wallet credit via any UPI app' },
              { title: 'Credit/Debit Card', desc: 'All major cards accepted' },
              { title: 'Net Banking', desc: '50+ banks supported' },
              { title: 'NEFT/RTGS', desc: 'Bank transfer for bulk recharge' },
            ].map((method, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard size={24} className="text-blue-900" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-sm text-gray-600">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-teal-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start with ₹500 Free Credit
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Test all services risk-free. No credit card required for trial.
          </p>
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
            Create Free Account <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default BillingPage;