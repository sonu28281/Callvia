import React, { useState } from 'react';
import { ArrowRight, Check, Phone, Building2, Briefcase, ShoppingCart, Shield, Heart, Zap } from 'lucide-react';

export function AiVoiceAgentsPage() {
  const [callStatus, setCallStatus] = useState(null); // null, 'ringing', 'connected', 'disconnected'
  const [currentAgent, setCurrentAgent] = useState(null);
  const [activeCall, setActiveCall] = useState(null); // Track which agent is currently in call

  /**
   * 🔥 CONNEXCS WEB CALL INTEGRATION
   * 
   * TODO: Replace placeholder endpoint with actual ConnexCS Web Call URL
   * 
   * How to find the endpoint:
   * 1. Open your ConnexCS UI/dialer in browser
   * 2. Open DevTools → Network tab
   * 3. Click the "Call" button in ConnexCS
   * 4. Look for POST request (usually to /webrtc/call or /cp/webcall/start)
   * 5. Copy that URL and replace the placeholder below
   * 
   * Example endpoints:
   * - https://your-domain.connexcs.com/webrtc/call
   * - https://your-domain.connexcs.com/cp/webcall/start
   */
  const CONNEXCS_ENDPOINT = 'https://YOUR-CONNEXCS-DOMAIN.com/webrtc/call'; // 👈 REPLACE THIS

  const handleCallAgent = async (agentName, destination) => {
    // If already in call with this agent, disconnect
    if (activeCall === destination) {
      handleDisconnect();
      return;
    }

    // If in call with another agent, disconnect first
    if (activeCall) {
      handleDisconnect();
    }

    try {
      setCallStatus('ringing');
      setCurrentAgent(agentName);

      // Check if endpoint is configured
      if (CONNEXCS_ENDPOINT.includes('YOUR-CONNEXCS-DOMAIN')) {
        // Simulate call for demo
        setTimeout(() => {
          setCallStatus('connected');
          setActiveCall(destination);
        }, 2000);
        return;
      }

      // TODO: Replace with actual ConnexCS Web Call API
      const response = await fetch(CONNEXCS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          destination: destination,
          caller_name: 'Website Visitor',
        }),
      });

      if (!response.ok) {
        throw new Error('Call failed');
      }

      // Call initiated successfully
      setCallStatus('connected');
      setActiveCall(destination);
      
      // Don't auto-reset - user will disconnect manually

    } catch (error) {
      console.error('Call error:', error);
      setCallStatus('error');
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setCallStatus(null);
        setCurrentAgent(null);
        setActiveCall(null);
      }, 3000);
    }
  };

  const handleDisconnect = () => {
    // TODO: Add actual disconnect API call if needed
    setCallStatus('disconnected');
    setActiveCall(null);
    
    // Reset after 2 seconds
    setTimeout(() => {
      setCallStatus(null);
      setCurrentAgent(null);
    }, 2000);
  };

  const useCases = [
    { icon: Building2, title: 'Real Estate', subtitle: 'Site Visits', destination: 'new-ai' },
    { icon: Briefcase, title: 'NBFC', subtitle: 'Loan Inquiry', destination: 'AI_NBFC' },
    { icon: ShoppingCart, title: 'eCommerce', subtitle: 'Order Tracking', destination: 'AI_ECOMMERCE' },
    { icon: Shield, title: 'Insurance', subtitle: 'Policy Renewals', destination: 'AI_INSURANCE' },
    { icon: Heart, title: 'Healthcare', subtitle: 'Appointment Booking', destination: 'AI_HEALTHCARE' },
    { icon: Building2, title: 'Banks', subtitle: 'Card Activation', destination: 'AI_BANKS' },
  ];

  return (
    <div className="bg-brand-dark">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-brand-dark to-brand-dark-light pt-32 pb-24 px-6">
        {/* Subtle routing lines */}
        <div className="absolute inset-0 routing-lines opacity-30" aria-hidden="true" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-brand-surface border border-brand-border px-4 py-2 rounded-lg mb-6">
              <Zap size={18} className="text-brand-accent" />
              <span className="text-sm font-semibold text-brand-text-muted">AI Voice Agents</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-brand-text mb-6 leading-tight tracking-tight">
              Intelligent Voice Agents for Every Business
            </h1>
            <p className="text-xl text-brand-text-muted mb-10 leading-relaxed">
              Deploy AI-powered voice agents that handle customer interactions, qualify leads, and provide support—24/7, in 24+ languages.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-10 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200">
                Book Demo <ArrowRight size={20} />
              </button>
              <button className="border-2 border-brand-border text-brand-text hover:bg-brand-surface px-10 py-4 rounded-lg font-semibold transition-all duration-200">
                Explore Features
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Our AI Agents Section */}
      <section className="py-24 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-brand-text mb-4 tracking-tight">Experience Our Voice AI Agents in Action</h2>
            <p className="text-xl text-brand-text-muted">See how businesses across industries are using AI voice agents</p>
          </div>

          {/* Use Case Cards - 6 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-12">
            {useCases.map((useCase, idx) => {
              const isInCall = activeCall === useCase.destination;
              const isCurrentCard = currentAgent === useCase.title || isInCall;
              
              return (
                <div
                  key={idx}
                  className={`group bg-brand-surface rounded-xl p-6 text-center transition-all duration-200 border flex flex-col ${
                    isInCall 
                      ? 'border-green-500 shadow-card-hover' 
                      : 'border-brand-border hover:border-brand-border-light'
                  }`}
                >
                  {/* Icon Circle */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-200 ${
                    isInCall 
                      ? 'bg-green-500/10 border border-green-500/30' 
                      : 'bg-brand-accent/10 border border-brand-accent/20'
                  }`}>
                    <useCase.icon size={32} className={isInCall ? 'text-green-500' : 'text-brand-accent'} />
                  </div>
                  
                  {/* Title and Subtitle */}
                  <h3 className="text-base font-heading font-semibold text-brand-text mb-1">{useCase.title}</h3>
                  <p className="text-sm text-brand-text-muted mb-3 flex-grow">{useCase.subtitle}</p>
                  
                  {/* Status Display */}
                  {isCurrentCard && (
                    <div className="mb-3">
                      {callStatus === 'ringing' && (
                        <p className="text-xs font-semibold text-blue-400">Ringing...</p>
                      )}
                      {callStatus === 'connected' && (
                        <p className="text-xs font-semibold text-green-400">Connected</p>
                      )}
                      {callStatus === 'disconnected' && (
                        <p className="text-xs font-semibold text-brand-text-dim">Disconnected</p>
                      )}
                    </div>
                  )}
                  
                  {/* Call/Disconnect Button */}
                  <div className="flex justify-center">
                    <button 
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
                        isInCall
                          ? 'bg-red-500 hover:bg-red-600 text-white'
                          : 'bg-brand-accent hover:bg-brand-accent-hover text-brand-dark'
                      }`}
                      onClick={() => handleCallAgent(useCase.title, useCase.destination)}
                    >
                      <Phone size={20} className={isInCall ? 'rotate-135 transition-transform' : ''} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Feature Bar */}
          <div className="bg-brand-surface border border-brand-border rounded-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { title: 'Hire Specialized AI Agents', desc: 'Deploy pre-trained or custom agents for your industry' },
              { title: 'Human-like Conversations', desc: 'Natural, context-aware dialogue that feels real' },
              { title: '24 Vernacular Languages', desc: 'Support customers in their preferred language' },
            ].map((feature, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-heading font-semibold text-brand-text mb-2">{feature.title}</h3>
                <p className="text-brand-text-muted text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 px-6 bg-brand-dark-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-12 text-center tracking-tight">Powerful AI Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Programmable Conversations', desc: 'Define custom conversation flows and dialogue patterns' },
              { title: 'Context-Aware Responses', desc: 'AI understands context and provides intelligent replies' },
              { title: 'Lead Qualification', desc: 'Automatically qualify and score leads in real-time' },
              { title: 'Appointment Scheduling', desc: 'Book appointments directly without human intervention' },
              { title: 'CRM Integration', desc: 'Seamlessly integrate with your existing CRM systems' },
              { title: 'Performance Analytics', desc: 'Get detailed insights on agent performance and outcomes' },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-brand-surface rounded-xl p-8 border border-brand-border hover:border-brand-border-light transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover"
              >
                <div className="w-12 h-12 bg-brand-accent/10 border border-brand-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Check size={24} className="text-brand-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-brand-text mb-2">{feature.title}</h3>
                <p className="text-brand-text-muted">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Benefits */}
      <section className="py-24 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-6 tracking-tight">Transform Your Customer Interactions</h2>
          <p className="text-xl text-brand-text-muted mb-12 max-w-3xl mx-auto leading-relaxed">
            AI Voice Agents reduce costs by 60%, improve response times by 80%, and increase customer satisfaction
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { stat: '24/7', label: 'Always Available' },
              { stat: '60%', label: 'Cost Reduction' },
              { stat: '80%', label: 'Faster Response' },
              { stat: '24+', label: 'Languages Supported' },
            ].map((item, idx) => (
              <div key={idx} className="bg-brand-surface border border-brand-border rounded-xl p-8 transition-all duration-200 hover:border-brand-border-light hover:-translate-y-0.5 shadow-card hover:shadow-card-hover">
                <div className="text-5xl font-heading font-bold text-brand-accent mb-3">{item.stat}</div>
                <div className="text-brand-text-muted">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-brand-dark-light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold text-brand-text mb-6 tracking-tight">Ready to Deploy AI Voice Agents?</h2>
          <p className="text-xl text-brand-text-muted mb-10 leading-relaxed">
            Join leading companies using Callvia's AI voice agents for customer service automation
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark px-12 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2">
              Start Free Trial <ArrowRight size={20} />
            </button>
            <button className="border-2 border-brand-border text-brand-text hover:bg-brand-surface px-12 py-4 rounded-lg font-semibold transition-all duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
