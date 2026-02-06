// Utility function to capture UTM parameters and other tracking data
export const captureTrackingData = () => {
  const urlParams = new URLSearchParams(window.location.search);
  
  return {
    utm_source: urlParams.get('utm_source') || '',
    utm_medium: urlParams.get('utm_medium') || '',
    utm_campaign: urlParams.get('utm_campaign') || '',
    utm_content: urlParams.get('utm_content') || '',
    utm_term: urlParams.get('utm_term') || '',
    page_path: window.location.pathname,
    referrer: document.referrer || '',
    timestamp: new Date().toISOString(),
  };
};

// Submit lead to webhook via API endpoint
export const submitLead = async (leadType, formData) => {
  try {
    const trackingData = captureTrackingData();
    
    const payload = {
      ...formData,
      ...trackingData,
      lead_type: leadType,
    };

    const response = await fetch('/api/webhook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Failed to submit lead');
    }

    return await response.json();
  } catch (error) {
    console.error('Lead submission error:', error);
    throw error;
  }
};
