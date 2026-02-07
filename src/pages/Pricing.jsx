import { useState, useEffect } from 'react';
import pricingConfig from '../config/pricing_config.json';

const Pricing = () => {
  const [currency, setCurrency] = useState(pricingConfig.currency.default);
  const [callMinutes, setCallMinutes] = useState(pricingConfig.sliders.callMinutes.default);
  const [concurrentChannels, setConcurrentChannels] = useState(pricingConfig.sliders.concurrentChannels.default);
  const [services, setServices] = useState({
    sipTrunks: true,
    aiAgents: false,
    aiTranscription: false,
    callRecording: false,
    predictiveDialer: false,
    aiReceptionist: false,
    whatsappAutomation: false,
  });

  const toggleService = (service) => {
    setServices({
      ...services,
      [service]: !services[service],
    });
  };

  const calculateMargin = (totalCost) => {
    const usage = callMinutes / pricingConfig.sliders.callMinutes.max;
    const margin = pricingConfig.margin.maxMargin - 
      (usage * (pricingConfig.margin.maxMargin - pricingConfig.margin.minMargin));
    return Math.max(margin, pricingConfig.margin.minMargin);
  };

  const calculatePrice = () => {
    let totalCost = 0;

    // SIP Trunks (base)
    if (services.sipTrunks) {
      const sipCost = (pricingConfig.services.sipTrunks.buyCostPerMinute + 
        pricingConfig.services.sipTrunks.switchCostPerMinute) * callMinutes;
      totalCost += sipCost;
    }

    // AI Agents
    if (services.aiAgents) {
      totalCost += pricingConfig.services.aiAgents.buyCostPerMinute * callMinutes;
    }

    // AI Transcription
    if (services.aiTranscription) {
      totalCost += pricingConfig.services.aiTranscription.buyCostPerMinute * callMinutes;
    }

    // Call Recording
    if (services.callRecording) {
      totalCost += pricingConfig.services.callRecording.buyCostPerMinute * callMinutes;
    }

    // Apply margin
    const margin = calculateMargin(totalCost);
    const sellingPrice = totalCost / (1 - margin);

    // Convert to selected currency
    const convertedPrice = sellingPrice * pricingConfig.currency.rates[currency];

    return {
      total: convertedPrice,
      margin: margin * 100,
    };
  };

  const pricing = calculatePrice();
  const currencySymbol = pricingConfig.currency.symbols[currency];

  return (
    <div style={{ padding: '80px 0 0 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1
            style={{
              fontFamily: 'Sora, sans-serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              marginBottom: '16px',
              color: 'var(--color-text)',
            }}
          >
            [PRICING_PAGE_TITLE]
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto' }}>
            [PRICING_PAGE_DESCRIPTION]
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '32px', marginBottom: '48px' }}>
          {/* Calculator */}
          <div className="card">
            <h3
              style={{
                fontFamily: 'Sora, sans-serif',
                fontSize: '1.5rem',
                marginBottom: '24px',
                color: 'var(--color-text)',
              }}
            >
              Configure Your Plan
            </h3>

            {/* Currency Selector */}
            <div style={{ marginBottom: '32px' }}>
              <label style={{ display: 'block', marginBottom: '12px', fontWeight: 500, color: 'var(--color-text)' }}>
                Currency
              </label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  backgroundColor: 'var(--color-bg)',
                  color: 'var(--color-text)',
                  fontSize: '16px',
                  cursor: 'pointer',
                }}
              >
                {pricingConfig.currency.supported.map((curr) => (
                  <option key={curr} value={curr}>
                    {curr} ({pricingConfig.currency.symbols[curr]})
                  </option>
                ))}
              </select>
            </div>

            {/* Call Minutes Slider */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontWeight: 500, color: 'var(--color-text)' }}>
                  {pricingConfig.sliders.callMinutes.label}
                </label>
                <span style={{ fontWeight: 600, color: 'var(--color-accent)' }}>
                  {callMinutes.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={pricingConfig.sliders.callMinutes.min}
                max={pricingConfig.sliders.callMinutes.max}
                step={pricingConfig.sliders.callMinutes.step}
                value={callMinutes}
                onChange={(e) => setCallMinutes(Number(e.target.value))}
                style={{ width: '100%' }}
              />
            </div>

            {/* Concurrent Channels Slider */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontWeight: 500, color: 'var(--color-text)' }}>
                  {pricingConfig.sliders.concurrentChannels.label}
                </label>
                <span style={{ fontWeight: 600, color: 'var(--color-accent)' }}>
                  {concurrentChannels}
                </span>
              </div>
              <input
                type="range"
                min={pricingConfig.sliders.concurrentChannels.min}
                max={pricingConfig.sliders.concurrentChannels.max}
                step={pricingConfig.sliders.concurrentChannels.step}
                value={concurrentChannels}
                onChange={(e) => setConcurrentChannels(Number(e.target.value))}
                style={{ width: '100%' }}
              />
            </div>

            {/* Services */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontFamily: 'Sora, sans-serif', marginBottom: '16px', color: 'var(--color-text)' }}>
                Select Services
              </h4>
              {Object.entries(pricingConfig.services).map(([key, service]) => (
                <label
                  key={key}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '12px',
                    marginBottom: '8px',
                    borderRadius: '8px',
                    cursor: service.isBase ? 'not-allowed' : 'pointer',
                    backgroundColor: services[key] ? 'var(--color-accent-soft)' : 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    opacity: service.isBase ? 0.6 : 1,
                  }}
                >
                  <input
                    type="checkbox"
                    checked={services[key]}
                    onChange={() => !service.isBase && toggleService(key)}
                    disabled={service.isBase}
                    style={{ marginTop: '2px' }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 500, color: 'var(--color-text)' }}>
                      {service.label}
                      {service.isBase && ' (Required)'}
                    </div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                      {service.description}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Pricing Summary */}
          <div>
            <div className="card" style={{ position: 'sticky', top: '100px' }}>
              <h3
                style={{
                  fontFamily: 'Sora, sans-serif',
                  fontSize: '1.25rem',
                  marginBottom: '24px',
                  color: 'var(--color-text)',
                }}
              >
                Estimated Monthly Cost
              </h3>

              <div
                style={{
                  padding: '24px',
                  backgroundColor: 'var(--color-accent-soft)',
                  borderRadius: '12px',
                  marginBottom: '24px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '8px' }}>
                  Total
                </div>
                <div
                  style={{
                    fontFamily: 'Sora, sans-serif',
                    fontSize: '3rem',
                    fontWeight: 700,
                    color: 'var(--color-accent)',
                  }}
                >
                  {currencySymbol}{pricing.total.toFixed(2)}
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginTop: '8px' }}>
                  per month
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <h4
                  style={{
                    fontFamily: 'Sora, sans-serif',
                    fontSize: '1rem',
                    marginBottom: '12px',
                    color: 'var(--color-text)',
                  }}
                >
                  Included:
                </h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {Object.entries(services)
                    .filter(([_, enabled]) => enabled)
                    .map(([key]) => (
                      <li
                        key={key}
                        style={{
                          padding: '8px 0',
                          color: 'var(--color-text-muted)',
                          fontSize: '0.9375rem',
                        }}
                      >
                        ✓ {pricingConfig.services[key].label}
                      </li>
                    ))}
                </ul>
              </div>

              <button className="btn-primary" style={{ width: '100%' }}>
                Get Started
              </button>

              <p
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--color-text-muted)',
                  marginTop: '16px',
                  textAlign: 'center',
                }}
              >
                {pricingConfig.disclaimer}
              </p>
            </div>
          </div>
        </div>

        {/* Plans */}
        <div style={{ marginTop: '80px' }}>
          <h2
            style={{
              fontFamily: 'Sora, sans-serif',
              fontSize: '2.5rem',
              textAlign: 'center',
              marginBottom: '48px',
              color: 'var(--color-text)',
            }}
          >
            Pre-configured Plans
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {Object.entries(pricingConfig.plans).map(([key, plan]) => (
              <div key={key} className="card">
                <h3
                  style={{
                    fontFamily: 'Sora, sans-serif',
                    fontSize: '1.75rem',
                    marginBottom: '12px',
                    color: 'var(--color-text)',
                  }}
                >
                  {plan.label}
                </h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px' }}>
                  {plan.description}
                </p>

                {plan.contactSales ? (
                  <>
                    <div
                      style={{
                        fontFamily: 'Sora, sans-serif',
                        fontSize: '2rem',
                        fontWeight: 700,
                        marginBottom: '24px',
                        color: 'var(--color-accent)',
                      }}
                    >
                      Contact Sales
                    </div>
                    <button className="btn-primary" style={{ width: '100%' }}>
                      Talk to Sales
                    </button>
                  </>
                ) : (
                  <>
                    <div
                      style={{
                        fontFamily: 'Sora, sans-serif',
                        fontSize: '2.5rem',
                        fontWeight: 700,
                        marginBottom: '24px',
                        color: 'var(--color-accent)',
                      }}
                    >
                      {currencySymbol}
                      {(pricing.total * plan.multiplier).toFixed(2)}
                    </div>
                    <button className="btn-primary" style={{ width: '100%' }}>
                      Get Started
                    </button>
                  </>
                )}

                <ul style={{ listStyle: 'none', padding: 0, marginTop: '24px' }}>
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      style={{
                        padding: '8px 0',
                        color: 'var(--color-text-muted)',
                        fontSize: '0.9375rem',
                      }}
                    >
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
          height: 6px;
          background: var(--color-border);
          border-radius: 3px;
          outline: none;
        }

        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          background: var(--color-accent);
          cursor: pointer;
          border-radius: 50%;
        }

        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: var(--color-accent);
          cursor: pointer;
          border-radius: 50%;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default Pricing;
