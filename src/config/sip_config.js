// SIP Configuration with basic obfuscation
// Note: For production, move credentials to environment variables and use proper backend authentication

const obfuscate = (str) => {
  return btoa(str.split('').reverse().join(''));
};

const deobfuscate = (str) => {
  return atob(str).split('').reverse().join('');
};

// Obfuscated SIP credentials
const SIP_CONFIG = {
  // These are base64 encoded reversed strings for basic obfuscation
  username: obfuscate('brijesh'),
  password: obfuscate('fad42Loops;'),
  callingNumber: obfuscate('new-ai'),
  server: obfuscate('159.89.24.201'),
  transportType: 'WSS',
  port: 5060,
  wsPath: '/ws'
};

// Agent calling numbers configuration
// Each agent type maps to a specific calling number for different AI models
const AGENT_CALLING_NUMBERS = {
  'real-estate': 'new-ai',
  'nbfc-loan': 'new-ai',
  'ecom-tracking': 'new-ai',
  'insurance-renewal': 'new-ai',
  'healthcare-booking': 'new-ai',
  'bank-card': 'new-ai'
};

// Function to get decrypted SIP credentials
export const getSipCredentials = () => {
  try {
    return {
      username: deobfuscate(SIP_CONFIG.username),
      password: deobfuscate(SIP_CONFIG.password),
      callingNumber: deobfuscate(SIP_CONFIG.callingNumber),
      server: deobfuscate(SIP_CONFIG.server),
      transportType: SIP_CONFIG.transportType,
      port: SIP_CONFIG.port,
      wsPath: SIP_CONFIG.wsPath,
      uri: `sip:${deobfuscate(SIP_CONFIG.username)}@${deobfuscate(SIP_CONFIG.server)}`
    };
  } catch (error) {
    console.error('[SIP Config] Error decrypting credentials:', error);
    return null;
  }
};

// Function to get calling number for a specific agent type
export const getAgentCallingNumber = (agentType) => {
  return AGENT_CALLING_NUMBERS[agentType] || 'new-ai'; // fallback to default
};

// Function to update agent calling number (for future use)
export const updateAgentCallingNumber = (agentType, newNumber) => {
  if (AGENT_CALLING_NUMBERS.hasOwnProperty(agentType)) {
    AGENT_CALLING_NUMBERS[agentType] = newNumber;
    return true;
  }
  return false;
};

// SIP Error Logger
export const logSipError = (context, error, additionalInfo = {}) => {
  const errorLog = {
    timestamp: new Date().toISOString(),
    context,
    error: {
      message: error?.message || 'Unknown error',
      stack: error?.stack,
      name: error?.name
    },
    additionalInfo,
    userAgent: navigator.userAgent
  };

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.error('[SIP Error Log]', errorLog);
  }

  // Store in localStorage for debugging (limit to last 50 errors)
  try {
    const existingLogs = JSON.parse(localStorage.getItem('sip_error_logs') || '[]');
    existingLogs.unshift(errorLog);
    const limitedLogs = existingLogs.slice(0, 50);
    localStorage.setItem('sip_error_logs', JSON.stringify(limitedLogs));
  } catch (e) {
    console.error('[SIP Error Log] Failed to store log:', e);
  }

  // Return the log for potential backend submission
  return errorLog;
};

// Function to get all SIP error logs
export const getSipErrorLogs = () => {
  try {
    return JSON.parse(localStorage.getItem('sip_error_logs') || '[]');
  } catch (e) {
    console.error('[SIP Error Log] Failed to retrieve logs:', e);
    return [];
  }
};

// Function to clear SIP error logs
export const clearSipErrorLogs = () => {
  try {
    localStorage.removeItem('sip_error_logs');
    return true;
  } catch (e) {
    console.error('[SIP Error Log] Failed to clear logs:', e);
    return false;
  }
};

export default SIP_CONFIG;
