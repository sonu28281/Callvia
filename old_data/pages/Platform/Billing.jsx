import React from 'react';
import { ArrowRight, Check, Wallet, CreditCard, DollarSign, Bell, FileText, RefreshCw, TrendingUp, Shield } from 'lucide-react';

export function BillingPage() {
  return (
    <div className="bg-brand-dark">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-b from-brand-dark to-brand-dark-light">
        {/* Routing Lines Decoration */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="routing-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="#EF8021" opacity="0.3"/>
                <line x1="0" y1="50" x2="100" y2="50" stroke="#EF8021" strokeWidth="0.5" opacity="0.2"/>
                <line x1="50" y1="0" x2="50" y2="100" stroke="#EF8021" strokeWidth="0.5" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#routing-pattern)"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block bg-brand-accent/10 border border-brand-accent/20 text-brand-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              PREPAID BILLING
            </div>
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-brand-text mb-6 leading-tight">
              Transparent Wallet-Based Billing
            </h1>
            <p className="text-xl text-brand-text-muted mb-8 leading-relaxed">
              Pay-as-you-go with complete cost control. Real-time wallet balance tracking, detailed CDRs, and flexible recharge options.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-200">
                Start Free Trial <ArrowRight size={20} />
              </button>
              <button className="border-2 border-brand-border text-brand-text hover:bg-brand-surface px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Wallet Features */}
      <section className="py-20 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-12 text-center">Prepaid Wallet System</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Wallet, title: 'Prepaid Balance', desc: 'Load wallet with flexible amounts. No monthly contracts or commitments required.' },
              { icon: RefreshCw, title: 'Auto-Recharge', desc: 'Set up automatic recharge when balance falls below threshold. Never run out of credit.' },
              { icon: DollarSign, title: 'Pay Per Use', desc: 'Charged only for actual usage. No wastage on unused services or hidden charges.' },
              { icon: Bell, title: 'Low Balance Alerts', desc: 'Email & SMS notifications when balance is low. Set custom alert thresholds.' },
              { icon: TrendingUp, title: 'Usage Analytics', desc: 'Detailed breakdowns by service, number, time. Optimize your telecom spend.' },
              { icon: Shield, title: 'Secure Payments', desc: 'PCI-DSS compliant payment gateway. Support for UPI, cards, net banking, NEFT.' },
            ].map((item, i) => (
              <div key={i} className="bg-brand-surface border border-brand-border hover:border-brand-border-light transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover rounded-xl p-8">
                <div className="w-14 h-14 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent rounded-lg flex items-center justify-center mb-6">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-text mb-3">{item.title}</h3>
                <p className="text-brand-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Billing Reports */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-brand-text mb-6">Detailed Billing Reports</h2>
              <p className="text-lg text-brand-text-muted mb-8">
                Access comprehensive CDRs and usage reports. Download in multiple formats for accounting and reconciliation.
              </p>
              <div className="space-y-6">
                {[
                  { icon: FileText, title: 'Call Detail Records', desc: 'Complete CDR with timestamp, duration, cost, destination, CLI' },
                  { icon: TrendingUp, title: 'Usage Trends', desc: 'Hourly, daily, monthly usage patterns. Identify peak hours and optimize.' },
                  { icon: CreditCard, title: 'Transaction History', desc: 'All recharge and deduction history with invoice generation' },
                ].map((item, i) => (
                  <div key={i} className="bg-brand-surface border border-brand-border hover:border-brand-border-light transition-all duration-200 rounded-xl p-6 flex gap-4 items-start">
                    <div className="w-12 h-12 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-brand-text mb-1">{item.title}</h3>
                      <p className="text-brand-text-muted text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-surface border border-brand-border rounded-xl p-12 shadow-card">
              <h3 className="text-2xl font-heading font-bold text-brand-text mb-8">Billing Features</h3>
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
                    <Check size={20} className="text-brand-accent flex-shrink-0 mt-1" />
                    <span className="text-brand-text">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-12 text-center">Flexible Payment Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'UPI', desc: 'Instant wallet credit via any UPI app' },
              { title: 'Credit/Debit Card', desc: 'All major cards accepted' },
              { title: 'Net Banking', desc: '50+ banks supported' },
              { title: 'NEFT/RTGS', desc: 'Bank transfer for bulk recharge' },
            ].map((method, i) => (
              <div key={i} className="bg-brand-surface border border-brand-border hover:border-brand-border-light transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CreditCard size={24} />
                </div>
                <h3 className="text-lg font-heading font-bold text-brand-text mb-2">{method.title}</h3>
                <p className="text-sm text-brand-text-muted">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-6">
            Start with ₹500 Free Credit
          </h2>
          <p className="text-xl text-brand-text-muted mb-8">
            Test all services risk-free. No credit card required for trial.
          </p>
          <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-200">
            Create Free Account <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default BillingPage;
