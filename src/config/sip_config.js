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
  server: obfuscate('sip.voip.garden'), // SIP domain for URI
  wsServer: obfuscate('voipgardende1.host.connexcs.net'), // WebSocket server
  transportType: 'WSS',
  port: 443,
  wsPath: ''
};

// Agent calling numbers configuration by language
// Each agent type maps to specific calling numbers for different languages
const AGENT_CALLING_NUMBERS = {
  english: {
    'real-estate': 'new-ai',
    'nbfc-loan': 'new-ai',
    'ecom-tracking': 'new-ai',
    'insurance-renewal': 'new-ai',
    'healthcare-booking': 'new-ai',
    'bank-card': 'new-ai'
  },
  hindi: {
    'real-estate': 'new-ai-hindi',
    'nbfc-loan': 'new-ai-hindi',
    'ecom-tracking': 'new-ai-hindi',
    'insurance-renewal': 'new-ai-hindi',
    'healthcare-booking': 'new-ai-hindi',
    'bank-card': 'new-ai-hindi'
  }
};

// Function to get decrypted SIP credentials
export const getSipCredentials = () => {
  try {
    return {
      username: deobfuscate(SIP_CONFIG.username),
      password: deobfuscate(SIP_CONFIG.password),
      callingNumber: deobfuscate(SIP_CONFIG.callingNumber),
      server: deobfuscate(SIP_CONFIG.server),
      wsServer: deobfuscate(SIP_CONFIG.wsServer),
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

// Function to get calling number for a specific agent type and language
export const getAgentCallingNumber = (agentType, language = 'english') => {
  const languageNumbers = AGENT_CALLING_NUMBERS[language];
  if (!languageNumbers) {
    console.warn(`[SIP Config] Language '${language}' not found, falling back to English`);
    return AGENT_CALLING_NUMBERS.english[agentType] || 'new-ai';
  }
  return languageNumbers[agentType] || AGENT_CALLING_NUMBERS.english[agentType] || 'new-ai';
};

// Function to update agent calling number for a specific language (for future use)
export const updateAgentCallingNumber = (agentType, newNumber, language = 'english') => {
  if (AGENT_CALLING_NUMBERS[language] && AGENT_CALLING_NUMBERS[language].hasOwnProperty(agentType)) {
    AGENT_CALLING_NUMBERS[language][agentType] = newNumber;
    return true;
  }
  return false;
};

// Function to get all available languages
export const getAvailableLanguages = () => {
  return Object.keys(AGENT_CALLING_NUMBERS);
};

// Function to get all calling numbers for a specific language
export const getLanguageCallingNumbers = (language = 'english') => {
  return AGENT_CALLING_NUMBERS[language] || AGENT_CALLING_NUMBERS.english;
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
