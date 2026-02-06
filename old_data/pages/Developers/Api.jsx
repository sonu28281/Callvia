import React, { useState } from 'react';
import { Code, Copy, Check, Send, Phone, MessageSquare, Shield, BookOpen, Zap, Key, ArrowRight } from 'lucide-react';

export function ApiPage() {
  const [copiedId, setCopiedId] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

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
            <Code size={32} className="text-brand-accent" />
          </div>
          <h1 className="text-5xl font-heading font-bold text-brand-text mb-6">API Documentation</h1>
          <p className="text-xl text-brand-text-muted mb-8">
            Build powerful voice and messaging applications with our RESTful API
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#getting-started" 
              className="px-6 py-3 bg-brand-accent text-white rounded-lg hover:bg-brand-accent-hover transition-colors font-medium"
            >
              Get Started
            </a>
            <a 
              href="#examples" 
              className="px-6 py-3 bg-brand-surface border border-brand-border text-brand-text rounded-lg hover:border-brand-accent transition-colors font-medium"
            >
              View Examples
            </a>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section id="getting-started" className="py-20 px-6 bg-brand-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-brand-text mb-4">Quick Start</h2>
            <p className="text-xl text-brand-text-muted">
              Get up and running in minutes with our simple REST API
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-brand-surface rounded-xl p-6 border border-brand-border hover:border-brand-accent transition-all duration-300 hover:-translate-y-0.5">
              <div className="w-12 h-12 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-4">
                <Key className="text-brand-accent" size={24} />
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-text mb-2">1. Get API Key</h3>
              <p className="text-brand-text-muted">
                Sign up and generate your API key from the dashboard
              </p>
            </div>

            <div className="bg-brand-surface rounded-xl p-6 border border-brand-border hover:border-brand-accent transition-all duration-300 hover:-translate-y-0.5">
              <div className="w-12 h-12 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-4">
                <Code className="text-brand-accent" size={24} />
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-text mb-2">2. Make Request</h3>
              <p className="text-brand-text-muted">
                Use your favorite HTTP client to make API calls
              </p>
            </div>

            <div className="bg-brand-surface rounded-xl p-6 border border-brand-border hover:border-brand-accent transition-all duration-300 hover:-translate-y-0.5">
              <div className="w-12 h-12 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-4">
                <Zap className="text-brand-accent" size={24} />
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-text mb-2">3. Go Live</h3>
              <p className="text-brand-text-muted">
                Deploy your application with confidence
              </p>
            </div>
          </div>

          {/* Authentication */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="text-brand-accent" size={32} />
              <h3 className="text-3xl font-heading font-bold text-brand-text">Authentication</h3>
            </div>
            <p className="text-lg text-brand-text-muted mb-6">
              All API requests must include your API key in the Authorization header:
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 border border-brand-border relative">
              <button
                onClick={() => copyToClipboard('Authorization: Bearer YOUR_API_KEY', 'auth')}
                className="absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                title="Copy to clipboard"
              >
                {copiedId === 'auth' ? (
                  <Check size={18} className="text-green-400" />
                ) : (
                  <Copy size={18} className="text-brand-text-muted" />
                )}
              </button>
              <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                <code>Authorization: Bearer YOUR_API_KEY</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* API Examples */}
      <section id="examples" className="py-20 px-6 bg-brand-dark-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-brand-text mb-4">API Examples</h2>
            <p className="text-xl text-brand-text-muted">
              Simple examples to get you started quickly
            </p>
          </div>

          {/* Make a Call Example */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Phone className="text-brand-accent" size={28} />
              <h3 className="text-2xl font-heading font-bold text-brand-text">Make a Call</h3>
            </div>
            
            {/* cURL */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-semibold text-brand-text">cURL</h4>
              </div>
              <div className="bg-gray-900 rounded-lg p-6 border border-brand-border relative">
                <button
                  onClick={() => copyToClipboard(`curl -X POST 'https://api.callvia.in/v1/calls' \\
  -H 'Authorization: Bearer YOUR_API_KEY' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "to": "+919876543210",
    "from": "+918418828125",
    "url": "https://yourdomain.com/voice-instructions.xml"
  }'`, 'curl-call')}
                  className="absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  title="Copy to clipboard"
                >
                  {copiedId === 'curl-call' ? (
                    <Check size={18} className="text-green-400" />
                  ) : (
                    <Copy size={18} className="text-brand-text-muted" />
                  )}
                </button>
                <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                  <code>{`curl -X POST 'https://api.callvia.in/v1/calls' \\
  -H 'Authorization: Bearer YOUR_API_KEY' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "to": "+919876543210",
    "from": "+918418828125",
    "url": "https://yourdomain.com/voice-instructions.xml"
  }'`}</code>
                </pre>
              </div>
            </div>

            {/* Node.js */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-semibold text-brand-text">Node.js</h4>
              </div>
              <div className="bg-gray-900 rounded-lg p-6 border border-brand-border relative">
                <button
                  onClick={() => copyToClipboard(`const axios = require('axios');

const makeCall = async () => {
  try {
    const response = await axios.post(
      'https://api.callvia.in/v1/calls',
      {
        to: '+919876543210',
        from: '+918418828125',
        url: 'https://yourdomain.com/voice-instructions.xml'
      },
      {
        headers: {
          'Authorization': 'Bearer YOUR_API_KEY',
          'Content-Type': 'application/json'
        }
      }
    );
    console.log('Call initiated:', response.data);
  } catch (error) {
    console.error('Error:', error.response.data);
  }
};

makeCall();`, 'node-call')}
                  className="absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  title="Copy to clipboard"
                >
                  {copiedId === 'node-call' ? (
                    <Check size={18} className="text-green-400" />
                  ) : (
                    <Copy size={18} className="text-brand-text-muted" />
                  )}
                </button>
                <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                  <code>{`const axios = require('axios');

const makeCall = async () => {
  try {
    const response = await axios.post(
      'https://api.callvia.in/v1/calls',
      {
        to: '+919876543210',
        from: '+918418828125',
        url: 'https://yourdomain.com/voice-instructions.xml'
      },
      {
        headers: {
          'Authorization': 'Bearer YOUR_API_KEY',
          'Content-Type': 'application/json'
        }
      }
    );
    console.log('Call initiated:', response.data);
  } catch (error) {
    console.error('Error:', error.response.data);
  }
};

makeCall();`}</code>
                </pre>
              </div>
            </div>

            {/* Python */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-semibold text-brand-text">Python</h4>
              </div>
              <div className="bg-gray-900 rounded-lg p-6 border border-brand-border relative">
                <button
                  onClick={() => copyToClipboard(`import requests

def make_call():
    url = 'https://api.callvia.in/v1/calls'
    headers = {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    }
    data = {
        'to': '+919876543210',
        'from': '+918418828125',
        'url': 'https://yourdomain.com/voice-instructions.xml'
    }
    
    response = requests.post(url, json=data, headers=headers)
    
    if response.status_code == 201:
        print('Call initiated:', response.json())
    else:
        print('Error:', response.json())

make_call()`, 'python-call')}
                  className="absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  title="Copy to clipboard"
                >
                  {copiedId === 'python-call' ? (
                    <Check size={18} className="text-green-400" />
                  ) : (
                    <Copy size={18} className="text-brand-text-muted" />
                  )}
                </button>
                <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                  <code>{`import requests

def make_call():
    url = 'https://api.callvia.in/v1/calls'
    headers = {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    }
    data = {
        'to': '+919876543210',
        'from': '+918418828125',
        'url': 'https://yourdomain.com/voice-instructions.xml'
    }
    
    response = requests.post(url, json=data, headers=headers)
    
    if response.status_code == 201:
        print('Call initiated:', response.json())
    else:
        print('Error:', response.json())

make_call()`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Send SMS Example */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="text-brand-accent" size={28} />
              <h3 className="text-2xl font-heading font-bold text-brand-text">Send SMS</h3>
            </div>
            
            {/* cURL */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-semibold text-brand-text">cURL</h4>
              </div>
              <div className="bg-gray-900 rounded-lg p-6 border border-brand-border relative">
                <button
                  onClick={() => copyToClipboard(`curl -X POST 'https://api.callvia.in/v1/messages' \\
  -H 'Authorization: Bearer YOUR_API_KEY' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "to": "+919876543210",
    "from": "+918418828125",
    "body": "Hello from Callvia API!"
  }'`, 'curl-sms')}
                  className="absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  title="Copy to clipboard"
                >
                  {copiedId === 'curl-sms' ? (
                    <Check size={18} className="text-green-400" />
                  ) : (
                    <Copy size={18} className="text-brand-text-muted" />
                  )}
                </button>
                <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                  <code>{`curl -X POST 'https://api.callvia.in/v1/messages' \\
  -H 'Authorization: Bearer YOUR_API_KEY' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "to": "+919876543210",
    "from": "+918418828125",
    "body": "Hello from Callvia API!"
  }'`}</code>
                </pre>
              </div>
            </div>

            {/* Node.js */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-semibold text-brand-text">Node.js</h4>
              </div>
              <div className="bg-gray-900 rounded-lg p-6 border border-brand-border relative">
                <button
                  onClick={() => copyToClipboard(`const axios = require('axios');

const sendSMS = async () => {
  try {
    const response = await axios.post(
      'https://api.callvia.in/v1/messages',
      {
        to: '+919876543210',
        from: '+918418828125',
        body: 'Hello from Callvia API!'
      },
      {
        headers: {
          'Authorization': 'Bearer YOUR_API_KEY',
          'Content-Type': 'application/json'
        }
      }
    );
    console.log('Message sent:', response.data);
  } catch (error) {
    console.error('Error:', error.response.data);
  }
};

sendSMS();`, 'node-sms')}
                  className="absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  title="Copy to clipboard"
                >
                  {copiedId === 'node-sms' ? (
                    <Check size={18} className="text-green-400" />
                  ) : (
                    <Copy size={18} className="text-brand-text-muted" />
                  )}
                </button>
                <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                  <code>{`const axios = require('axios');

const sendSMS = async () => {
  try {
    const response = await axios.post(
      'https://api.callvia.in/v1/messages',
      {
        to: '+919876543210',
        from: '+918418828125',
        body: 'Hello from Callvia API!'
      },
      {
        headers: {
          'Authorization': 'Bearer YOUR_API_KEY',
          'Content-Type': 'application/json'
        }
      }
    );
    console.log('Message sent:', response.data);
  } catch (error) {
    console.error('Error:', error.response.data);
  }
};

sendSMS();`}</code>
                </pre>
              </div>
            </div>

            {/* Python */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-semibold text-brand-text">Python</h4>
              </div>
              <div className="bg-gray-900 rounded-lg p-6 border border-brand-border relative">
                <button
                  onClick={() => copyToClipboard(`import requests

def send_sms():
    url = 'https://api.callvia.in/v1/messages'
    headers = {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    }
    data = {
        'to': '+919876543210',
        'from': '+918418828125',
        'body': 'Hello from Callvia API!'
    }
    
    response = requests.post(url, json=data, headers=headers)
    
    if response.status_code == 201:
        print('Message sent:', response.json())
    else:
        print('Error:', response.json())

send_sms()`, 'python-sms')}
                  className="absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  title="Copy to clipboard"
                >
                  {copiedId === 'python-sms' ? (
                    <Check size={18} className="text-green-400" />
                  ) : (
                    <Copy size={18} className="text-brand-text-muted" />
                  )}
                </button>
                <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                  <code>{`import requests

def send_sms():
    url = 'https://api.callvia.in/v1/messages'
    headers = {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    }
    data = {
        'to': '+919876543210',
        'from': '+918418828125',
        'body': 'Hello from Callvia API!'
    }
    
    response = requests.post(url, json=data, headers=headers)
    
    if response.status_code == 201:
        print('Message sent:', response.json())
    else:
        print('Error:', response.json())

send_sms()`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Response Format */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading font-bold text-brand-text mb-6">Response Format</h3>
            <p className="text-lg text-brand-text-muted mb-6">
              All API responses are returned in JSON format:
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 border border-brand-border relative">
              <button
                onClick={() => copyToClipboard(`{
  "success": true,
  "data": {
    "id": "call_abc123def456",
    "to": "+919876543210",
    "from": "+918418828125",
    "status": "queued",
    "created_at": "2024-01-15T10:30:00Z"
  }
}`, 'response')}
                className="absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                title="Copy to clipboard"
              >
                {copiedId === 'response' ? (
                  <Check size={18} className="text-green-400" />
                ) : (
                  <Copy size={18} className="text-brand-text-muted" />
                )}
              </button>
              <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                <code>{`{
  "success": true,
  "data": {
    "id": "call_abc123def456",
    "to": "+919876543210",
    "from": "+918418828125",
    "status": "queued",
    "created_at": "2024-01-15T10:30:00Z"
  }
}`}</code>
              </pre>
            </div>
          </div>

          {/* Webhooks */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Send className="text-brand-accent" size={28} />
              <h3 className="text-2xl font-heading font-bold text-brand-text">Webhooks</h3>
            </div>
            <p className="text-lg text-brand-text-muted mb-6">
              Receive real-time notifications about call and message events:
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 border border-brand-border relative">
              <button
                onClick={() => copyToClipboard(`{
  "event": "call.completed",
  "timestamp": "2024-01-15T10:35:30Z",
  "data": {
    "id": "call_abc123def456",
    "to": "+919876543210",
    "from": "+918418828125",
    "duration": 125,
    "status": "completed",
    "recording_url": "https://recordings.callvia.in/rec_xyz789.mp3"
  }
}`, 'webhook')}
                className="absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                title="Copy to clipboard"
              >
                {copiedId === 'webhook' ? (
                  <Check size={18} className="text-green-400" />
                ) : (
                  <Copy size={18} className="text-brand-text-muted" />
                )}
              </button>
              <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                <code>{`{
  "event": "call.completed",
  "timestamp": "2024-01-15T10:35:30Z",
  "data": {
    "id": "call_abc123def456",
    "to": "+919876543210",
    "from": "+918418828125",
    "duration": 125,
    "status": "completed",
    "recording_url": "https://recordings.callvia.in/rec_xyz789.mp3"
  }
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-brand-text mb-4">Resources</h2>
            <p className="text-xl text-brand-text-muted">
              Everything you need to build with Callvia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <a 
              href="https://docs.callvia.in" 
              className="bg-brand-surface rounded-xl p-6 border border-brand-border hover:border-brand-accent transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-4 group-hover:bg-brand-accent/20 transition-colors">
                <BookOpen className="text-brand-accent" size={24} />
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-text mb-2">Full Documentation</h3>
              <p className="text-brand-text-muted mb-4">
                Complete API reference with detailed endpoint documentation
              </p>
              <div className="flex items-center text-brand-accent font-medium">
                View Docs <ArrowRight size={18} className="ml-2" />
              </div>
            </a>

            <a 
              href="https://github.com/callvia" 
              className="bg-brand-surface rounded-xl p-6 border border-brand-border hover:border-brand-accent transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-4 group-hover:bg-brand-accent/20 transition-colors">
                <Code className="text-brand-accent" size={24} />
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-text mb-2">SDKs & Libraries</h3>
              <p className="text-brand-text-muted mb-4">
                Official libraries for Node.js, Python, PHP, Ruby, and more
              </p>
              <div className="flex items-center text-brand-accent font-medium">
                Browse SDKs <ArrowRight size={18} className="ml-2" />
              </div>
            </a>

            <a 
              href="/support" 
              className="bg-brand-surface rounded-xl p-6 border border-brand-border hover:border-brand-accent transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-4 group-hover:bg-brand-accent/20 transition-colors">
                <MessageSquare className="text-brand-accent" size={24} />
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-text mb-2">Developer Support</h3>
              <p className="text-brand-text-muted mb-4">
                Get help from our developer support team
              </p>
              <div className="flex items-center text-brand-accent font-medium">
                Contact Support <ArrowRight size={18} className="ml-2" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-brand-dark-light border-t border-brand-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-brand-text-muted mb-8">
            Sign up for free and get your API key in seconds
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="https://dashboard.callvia.in/signup" 
              className="px-8 py-4 bg-brand-accent text-white rounded-lg hover:bg-brand-accent-hover transition-colors font-medium text-lg"
            >
              Get API Key
            </a>
            <a 
              href="https://docs.callvia.in" 
              className="px-8 py-4 bg-brand-surface border border-brand-border text-brand-text rounded-lg hover:border-brand-accent transition-colors font-medium text-lg"
            >
              Read Full Docs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ApiPage;
