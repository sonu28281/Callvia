import React, { useState } from 'react';
import { ArrowRight, Code, Lock, Zap, Book, Webhook, FileText, Phone, MessageSquare, Key, Terminal, Copy, Check } from 'lucide-react';
import { AnimatedBackground } from '../../components/sections/AnimatedBackground.jsx';

export function ApiPage() {
  const [copiedCode, setCopiedCode] = useState(null);

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const codeExamples = {
    makeCall: `curl -X POST https://api.callvia.in/v1/calls \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "from": "+918XXXXXXXXX",
    "to": "+919XXXXXXXXX",
    "callback_url": "https://yourapp.com/webhook"
  }'`,
    
    sendSMS: `curl -X POST https://api.callvia.in/v1/sms \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "from": "CALLVIA",
    "to": "+919XXXXXXXXX",
    "message": "Your OTP is 123456"
  }'`,
    
    getCDR: `curl -X GET "https://api.callvia.in/v1/cdr?start_date=2024-01-01&end_date=2024-01-31" \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
    
    webhook: `{
  "event": "call.completed",
  "call_id": "call_abc123xyz",
  "from": "+918XXXXXXXXX",
  "to": "+919XXXXXXXXX",
  "start_time": "2024-01-15T10:30:00Z",
  "end_time": "2024-01-15T10:35:00Z",
  "duration": 300,
  "status": "completed",
  "recording_url": "https://recordings.callvia.in/abc123.mp3"
}`,

    nodejs: `const axios = require('axios');

const makeCall = async () => {
  const response = await axios.post(
    'https://api.callvia.in/v1/calls',
    {
      from: '+918XXXXXXXXX',
      to: '+919XXXXXXXXX',
      callback_url: 'https://yourapp.com/webhook'
    },
    {
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
      }
    }
  );
  
  console.log('Call initiated:', response.data);
};`,

    python: `import requests

url = "https://api.callvia.in/v1/calls"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "from": "+918XXXXXXXXX",
    "to": "+919XXXXXXXXX",
    "callback_url": "https://yourapp.com/webhook"
}

response = requests.post(url, json=data, headers=headers)
print("Call initiated:", response.json())`
  };

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden pt-32 pb-32 bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-500">
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
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold mb-6">
              REST API
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Build with Callvia API
            </h1>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Comprehensive REST API for voice, SMS, and call management. OAuth 2.0 authentication, webhooks, and complete documentation.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-900 to-emerald-800 hover:from-emerald-950 hover:to-emerald-900 text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg">
                Get API Key <ArrowRight size={20} />
              </button>
              <button className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                View Docs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* API Capabilities */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">What You Can Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Phone, title: 'Outbound Calling', desc: 'Programmatically initiate calls with callback URLs for call control' },
              { icon: MessageSquare, title: 'SMS Integration', desc: 'Send transactional SMS, OTPs, and alerts via simple REST API' },
              { icon: FileText, title: 'CDR Retrieval', desc: 'Pull call detail records with filters for date, number, status' },
              { icon: Webhook, title: 'Real-time Webhooks', desc: 'Get instant notifications for call events (start, end, recording)' },
              { icon: Code, title: 'Click-to-Call', desc: 'Add click-to-call widgets to websites with JavaScript SDK' },
              { icon: Lock, title: 'Number Masking', desc: 'Privacy API for masking caller ID in marketplace applications' },
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

      {/* Code Examples */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Quick Start Examples</h2>
          
          {/* Make Call Example */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Phone size={28} className="text-blue-900" />
              <h3 className="text-2xl font-bold text-gray-900">Initiate Outbound Call</h3>
            </div>
            <div className="bg-gray-900 rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-6 py-3 bg-gray-800 border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <Terminal size={16} className="text-gray-400" />
                  <span className="text-gray-400 text-sm font-mono">POST /v1/calls</span>
                </div>
                <button
                  onClick={() => copyToClipboard(codeExamples.makeCall, 'makeCall')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {copiedCode === 'makeCall' ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>
              <pre className="p-6 text-gray-100 font-mono text-sm overflow-x-auto">
                <code>{codeExamples.makeCall}</code>
              </pre>
            </div>
          </div>

          {/* Send SMS Example */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare size={28} className="text-blue-900" />
              <h3 className="text-2xl font-bold text-gray-900">Send Transactional SMS</h3>
            </div>
            <div className="bg-gray-900 rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-6 py-3 bg-gray-800 border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <Terminal size={16} className="text-gray-400" />
                  <span className="text-gray-400 text-sm font-mono">POST /v1/sms</span>
                </div>
                <button
                  onClick={() => copyToClipboard(codeExamples.sendSMS, 'sendSMS')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {copiedCode === 'sendSMS' ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>
              <pre className="p-6 text-gray-100 font-mono text-sm overflow-x-auto">
                <code>{codeExamples.sendSMS}</code>
              </pre>
            </div>
          </div>

          {/* Webhook Example */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Webhook size={28} className="text-blue-900" />
              <h3 className="text-2xl font-bold text-gray-900">Webhook Payload Example</h3>
            </div>
            <div className="bg-gray-900 rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-6 py-3 bg-gray-800 border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <Terminal size={16} className="text-gray-400" />
                  <span className="text-gray-400 text-sm font-mono">call.completed event</span>
                </div>
                <button
                  onClick={() => copyToClipboard(codeExamples.webhook, 'webhook')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {copiedCode === 'webhook' ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>
              <pre className="p-6 text-gray-100 font-mono text-sm overflow-x-auto">
                <code>{codeExamples.webhook}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* SDK Examples */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Language-Specific Examples</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Node.js */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Code size={28} className="text-blue-900" />
                <h3 className="text-2xl font-bold text-gray-900">Node.js</h3>
              </div>
              <div className="bg-gray-900 rounded-xl overflow-hidden">
                <div className="flex items-center justify-between px-6 py-3 bg-gray-800 border-b border-gray-700">
                  <span className="text-gray-400 text-sm font-mono">callvia-example.js</span>
                  <button
                    onClick={() => copyToClipboard(codeExamples.nodejs, 'nodejs')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedCode === 'nodejs' ? <Check size={18} /> : <Copy size={18} />}
                  </button>
                </div>
                <pre className="p-6 text-gray-100 font-mono text-sm overflow-x-auto">
                  <code>{codeExamples.nodejs}</code>
                </pre>
              </div>
            </div>

            {/* Python */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Code size={28} className="text-blue-900" />
                <h3 className="text-2xl font-bold text-gray-900">Python</h3>
              </div>
              <div className="bg-gray-900 rounded-xl overflow-hidden">
                <div className="flex items-center justify-between px-6 py-3 bg-gray-800 border-b border-gray-700">
                  <span className="text-gray-400 text-sm font-mono">callvia_example.py</span>
                  <button
                    onClick={() => copyToClipboard(codeExamples.python, 'python')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedCode === 'python' ? <Check size={18} /> : <Copy size={18} />}
                  </button>
                </div>
                <pre className="p-6 text-gray-100 font-mono text-sm overflow-x-auto">
                  <code>{codeExamples.python}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authentication */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Key size={40} className="text-blue-900" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Authentication</h2>
            <p className="text-lg text-gray-600">
              Callvia API uses Bearer token authentication. Include your API key in the Authorization header.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-12 border border-blue-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Getting Your API Key</h3>
            <ol className="space-y-4 mb-8">
              {[
                'Sign up for a Callvia account',
                'Navigate to Settings → API Keys',
                'Click "Generate New API Key"',
                'Copy and securely store your key',
                'Add key to Authorization header as "Bearer YOUR_KEY"',
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    {i + 1}
                  </div>
                  <span className="text-gray-900 pt-1">{step}</span>
                </li>
              ))}
            </ol>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-900">
                <strong>Security Note:</strong> Never expose your API key in client-side code. Always make API calls from your backend server.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Developer Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Book, title: 'API Documentation', desc: 'Complete reference for all endpoints, parameters, and responses', link: 'View Docs' },
              { icon: Code, title: 'Code Libraries', desc: 'Official SDKs for Node.js, Python, PHP, and Java', link: 'Download SDKs' },
              { icon: Zap, title: 'Postman Collection', desc: 'Import our Postman collection to test APIs instantly', link: 'Get Collection' },
            ].map((resource, i) => (
              <div key={i} className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-900 transition-all hover:shadow-lg">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <resource.icon size={32} className="text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-6">{resource.desc}</p>
                <button className="text-blue-900 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  {resource.link} <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-emerald-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Building with Callvia API
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get your API key and start integrating in minutes
          </p>
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
            Create Developer Account <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default ApiPage;
