import React from 'react';
import { ArrowRight, Check, Bot, Clock, Users, MessageSquare, Calendar, Phone, TrendingUp, Sparkles } from 'lucide-react';
import { AnimatedBackground } from '../../components/sections/AnimatedBackground.jsx';

export function SmallBusinessSolutionPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden pt-32 pb-32 bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-500">
        <div className="absolute inset-0 opacity-70">
          <svg className="absolute bottom-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{height: '100%'}}>
            <path fill="rgba(255, 255, 255, 0.2)" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              <animate attributeName="d" dur="8s" repeatCount="indefinite" values="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,122.7C672,107,768,117,864,138.7C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
            </path>
            <path fill="rgba(255, 255, 255, 0.15)" d="M0,160L48,165.3C96,171,192,181,288,181.3C384,181,480,171,576,165.3C672,160,768,160,864,165.3C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              <animate attributeName="d" dur="12s" repeatCount="indefinite" values="M0,160L48,165.3C96,171,192,181,288,181.3C384,181,480,171,576,165.3C672,160,768,160,864,165.3C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,192L48,186.7C96,181,192,171,288,170.7C384,171,480,181,576,186.7C672,192,768,192,864,186.7C960,181,1056,171,1152,170.7C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,160L48,165.3C96,171,192,181,288,181.3C384,181,480,171,576,165.3C672,160,768,160,864,165.3C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
            </path>
            <path fill="rgba(255, 255, 255, 0.1)" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              <animate attributeName="d" dur="6s" repeatCount="indefinite" values="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,192L48,202.7C96,213,192,235,288,234.7C384,235,480,213,576,202.7C672,192,768,192,864,202.7C960,213,1056,235,1152,234.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
            </path>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold mb-6">
              FOR SMALL BUSINESSES
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI Receptionist - Never Miss a Call
            </h1>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              24/7 AI-powered call answering for small businesses. Capture leads, answer FAQs, schedule appointments—all without hiring staff.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-900 to-indigo-800 hover:from-indigo-950 hover:to-indigo-900 text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg">
                Try Free for 14 Days <ArrowRight size={20} />
              </button>
              <button className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                Listen to Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">What Your AI Receptionist Can Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: MessageSquare, title: 'Answer FAQs', desc: 'Pre-programmed responses for common questions about hours, services, pricing.' },
              { icon: Calendar, title: 'Schedule Appointments', desc: 'Integrates with Google Calendar to book appointments based on your availability.' },
              { icon: Phone, title: 'Transfer to Mobile', desc: 'Intelligently transfers urgent calls to your mobile when you\'re available.' },
              { icon: Users, title: 'Capture Lead Info', desc: 'Collects name, phone, email, and inquiry details. Sends instant notification.' },
              { icon: Clock, title: '24/7 Availability', desc: 'Never miss after-hours calls. AI handles weekends, holidays, and nights.' },
              { icon: Sparkles, title: 'Natural Conversations', desc: 'Hindi & English support with natural voice. Customers won\'t know it\'s AI.' },
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

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Perfect for These Businesses</h2>
              <p className="text-lg text-gray-600 mb-8">
                Any business that gets inbound calls but doesn't have dedicated staff to answer 24/7.
              </p>
              <div className="space-y-4">
                {[
                  'Clinics & Dental Practices',
                  'Salons & Spas',
                  'Restaurants & Cafes',
                  'Coaching Centers',
                  'Real Estate Agents',
                  'Home Services (Plumbers, Electricians)',
                  'Retail Stores',
                  'Freelancers & Consultants',
                ].map((biz, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={20} className="text-blue-900 flex-shrink-0" />
                    <span className="text-gray-900 font-medium">{biz}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-12 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Simple Pricing for SMBs</h3>
              <div className="bg-blue-900 text-white rounded-xl p-8 mb-6">
                <div className="text-5xl font-bold mb-2">₹999</div>
                <div className="text-blue-100 mb-4">per month</div>
                <div className="border-t border-blue-700 pt-4">
                  <div className="text-sm font-bold mb-2">Includes:</div>
                  <ul className="space-y-2 text-sm">
                    <li>✓ 1 Phone Number</li>
                    <li>✓ 100 minutes/month</li>
                    <li>✓ Lead capture form</li>
                    <li>✓ Custom greetings</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-gray-600">Additional minutes at ₹1/min. No setup fees.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Benefits for Small Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, title: 'Increase Revenue', desc: 'Capture every lead, even after hours' },
              { icon: Users, title: 'Better Customer Experience', desc: 'No busy signals or missed calls' },
              { icon: Clock, title: 'Save Time', desc: 'Stop answering repetitive questions' },
              { icon: Bot, title: 'No Hiring Needed', desc: 'Cheaper than hiring a receptionist' },
            ].map((benefit, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon size={32} className="text-blue-900" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-indigo-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Your 14-Day Free Trial
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            No credit card required. Setup in 5 minutes.
          </p>
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
            Get Started Free <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default SmallBusinessSolutionPage;