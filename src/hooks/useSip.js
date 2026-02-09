import { useState, useEffect, useCallback, useRef } from 'react';
import { Registerer, Inviter, SessionState } from 'sip.js';
import { Web } from 'sip.js/lib/platform/web';
import { getSipCredentials, logSipError } from '../config/sip_config';

export const useSip = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [activeCall, setActiveCall] = useState(null);
  const [callStatus, setCallStatus] = useState('idle'); // idle, calling, connected, disconnected
  const [error, setError] = useState(null);

  const userAgentRef = useRef(null);
  const registererRef = useRef(null);
  const sessionRef = useRef(null);

  // Initialize SIP User Agent
  const initializeUserAgent = useCallback(async () => {
    try {
      const credentials = getSipCredentials();
      if (!credentials) {
        throw new Error('Failed to get SIP credentials');
      }

      const server = `wss://${credentials.server}:${credentials.port}/ws`;
      
      const userAgentOptions = {
        uri: Web.UserAgent.makeURI(credentials.uri),
        transportOptions: {
          server,
          connectionTimeout: 10
        },
        authorizationUsername: credentials.username,
        authorizationPassword: credentials.password,
        sessionDescriptionHandlerFactoryOptions: {
          constraints: {
            audio: true,
            video: false
          }
        },
        displayName: credentials.username,
        logLevel: 'warn',
        delegate: {
          onConnect: () => {
            console.log('[SIP] Connected to server');
            register();
          },
          onDisconnect: (error) => {
            console.log('[SIP] Disconnected from server');
            setIsRegistered(false);
            if (error) {
              logSipError('UserAgent Disconnect', error);
            }
          }
        }
      };

      const userAgent = new Web.UserAgent(userAgentOptions);
      userAgentRef.current = userAgent;

      await userAgent.start();
      
      return userAgent;
    } catch (err) {
      const errorLog = logSipError('Initialize UserAgent', err);
      setError(errorLog.error.message);
      console.error('[SIP] Failed to initialize:', err);
      return null;
    }
  }, []);

  // Register with SIP server
  const register = useCallback(async () => {
    try {
      if (!userAgentRef.current) {
        console.error('[SIP] UserAgent not initialized');
        return false;
      }

      const registerer = new Registerer(userAgentRef.current);
      registererRef.current = registerer;

      registerer.stateChange.addListener((newState) => {
        console.log('[SIP] Registerer state:', newState);
        switch (newState) {
          case 'Registered':
            setIsRegistered(true);
            setIsConnecting(false);
            setError(null);
            break;
          case 'Unregistered':
            setIsRegistered(false);
            break;
          case 'Terminated':
            setIsRegistered(false);
            break;
          default:
            break;
        }
      });

      await registerer.register();
      return true;
    } catch (err) {
      const errorLog = logSipError('Register', err);
      setError(errorLog.error.message);
      setIsConnecting(false);
      console.error('[SIP] Registration failed:', err);
      return false;
    }
  }, []);

  // Make outgoing call
  const makeCall = useCallback(async (targetNumber, agentName) => {
    try {
      if (!userAgentRef.current) {
        throw new Error('SIP not initialized');
      }

      if (!isRegistered) {
        throw new Error('SIP not registered');
      }

      if (activeCall) {
        throw new Error('Call already in progress');
      }

      const credentials = getSipCredentials();
      const target = Web.UserAgent.makeURI(`sip:${targetNumber}@${credentials.server}`);
      
      if (!target) {
        throw new Error('Invalid target URI');
      }

      setCallStatus('calling');
      setActiveCall(agentName);

      const inviter = new Inviter(userAgentRef.current, target);
      sessionRef.current = inviter;

      // Setup session state change handler
      inviter.stateChange.addListener((newState) => {
        console.log('[SIP] Session state:', newState);
        switch (newState) {
          case SessionState.Establishing:
            setCallStatus('calling');
            break;
          case SessionState.Established:
            setCallStatus('connected');
            break;
          case SessionState.Terminated:
            setCallStatus('disconnected');
            setActiveCall(null);
            sessionRef.current = null;
            setTimeout(() => setCallStatus('idle'), 2000);
            break;
          default:
            break;
        }
      });

      // Send INVITE
      await inviter.invite();
      
      return true;
    } catch (err) {
      const errorLog = logSipError('Make Call', err, { targetNumber, agentName });
      setError(errorLog.error.message);
      setCallStatus('idle');
      setActiveCall(null);
      console.error('[SIP] Call failed:', err);
      return false;
    }
  }, [isRegistered, activeCall]);

  // Hang up call
  const hangUp = useCallback(async () => {
    try {
      if (sessionRef.current) {
        await sessionRef.current.bye();
        sessionRef.current = null;
      }
      setCallStatus('idle');
      setActiveCall(null);
    } catch (err) {
      logSipError('Hang Up', err);
      console.error('[SIP] Hang up failed:', err);
    }
  }, []);

  // Initialize on mount
  useEffect(() => {
    let mounted = true;

    const init = async () => {
      setIsConnecting(true);
      const ua = await initializeUserAgent();
      if (ua && mounted) {
        // UserAgent will auto-connect and trigger register via delegate
      } else if (mounted) {
        setIsConnecting(false);
      }
    };

    init();

    return () => {
      mounted = false;
      if (registererRef.current) {
        registererRef.current.unregister();
      }
      if (userAgentRef.current) {
        userAgentRef.current.stop();
      }
    };
  }, [initializeUserAgent]);

  return {
    isRegistered,
    isConnecting,
    activeCall,
    callStatus,
    error,
    makeCall,
    hangUp
  };
};
