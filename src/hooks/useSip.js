import { useState, useEffect, useCallback, useRef } from 'react';
import { Registerer, Inviter, SessionState, UserAgent } from 'sip.js';
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
  const remoteAudioRef = useRef(null);

  // Setup remote audio element
  useEffect(() => {
    if (!remoteAudioRef.current) {
      const audio = document.createElement('audio');
      audio.autoplay = true;
      audio.style.display = 'none';
      document.body.appendChild(audio);
      remoteAudioRef.current = audio;
    }

    return () => {
      if (remoteAudioRef.current) {
        remoteAudioRef.current.srcObject = null;
        remoteAudioRef.current.remove();
        remoteAudioRef.current = null;
      }
    };
  }, []);

  // Initialize SIP User Agent
  const initializeUserAgent = useCallback(async () => {
    try {
      const credentials = getSipCredentials();
      if (!credentials) {
        throw new Error('Failed to get SIP credentials');
      }

      // WebSocket server for connection (can be different from SIP domain)
      const server = `wss://${credentials.wsServer}${credentials.wsPath}`;
      // SIP URI uses the SIP domain
      const uri = `sip:${credentials.username}@${credentials.server}`;
      
      const userAgentOptions = {
        uri: UserAgent.makeURI(uri),
        transportOptions: {
          server,
          connectionTimeout: 15,
          keepAliveInterval: 30,
          keepAliveDebounce: 10,
          traceSip: false,
          maxReconnectionAttempts: 5,
          reconnectionDelay: 4
        },
        authorizationUsername: credentials.username,
        authorizationPassword: credentials.password,
        sessionDescriptionHandlerFactoryOptions: {
          constraints: {
            audio: true,
            video: false
          },
          peerConnectionConfiguration: {
            iceServers: [
              { urls: 'stun:stun.l.google.com:19302' },
              { urls: 'stun:stun1.l.google.com:19302' }
            ]
          }
        },
        displayName: credentials.username,
        logLevel: 'warn',
        delegate: {
          onConnect: () => {
            console.log('[SIP] Connected to WSS server');
            setIsConnecting(false);
            register();
          },
          onDisconnect: (error) => {
            console.log('[SIP] Disconnected from WSS server', error ? `Error: ${error.message}` : '');
            setIsRegistered(false);
            setIsConnecting(false);
            if (error) {
              const errorLog = logSipError('UserAgent Disconnect', error);
              setError(`Connection lost: ${error.message}`);
            }
          }
        }
      };

      const userAgent = new UserAgent(userAgentOptions);
      userAgentRef.current = userAgent;

      console.log(`[SIP] Starting UserAgent with WSS server: ${server}`);
      await userAgent.start();
      console.log('[SIP] UserAgent started successfully');
      
      return userAgent;
    } catch (err) {
      const errorLog = logSipError('Initialize UserAgent', err);
      const errorMessage = `Failed to connect to SIP server: ${err.message}. Please check your network connection.`;
      setError(errorMessage);
      setIsConnecting(false);
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

  // Setup remote audio stream for speaker playback
  const setupRemoteAudio = useCallback((session) => {
    try {
      const sessionDescriptionHandler = session.sessionDescriptionHandler;
      if (!sessionDescriptionHandler) {
        console.error('[SIP] No session description handler found');
        return;
      }

      const peerConnection = sessionDescriptionHandler.peerConnection;
      if (!peerConnection) {
        console.error('[SIP] No peer connection found');
        return;
      }

      // Get remote stream from peer connection
      const remoteStream = new MediaStream();
      peerConnection.getReceivers().forEach((receiver) => {
        if (receiver.track) {
          remoteStream.addTrack(receiver.track);
        }
      });

      // Attach to audio element
      if (remoteAudioRef.current && remoteStream.getTracks().length > 0) {
        remoteAudioRef.current.srcObject = remoteStream;
        remoteAudioRef.current.play().catch((err) => {
          console.error('[SIP] Failed to play remote audio:', err);
          logSipError('Play Remote Audio', err);
        });
        console.log('[SIP] Remote audio stream attached and playing');
      } else {
        console.error('[SIP] No remote audio element or no tracks in stream');
      }
    } catch (err) {
      console.error('[SIP] Failed to setup remote audio:', err);
      logSipError('Setup Remote Audio', err);
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
      const target = UserAgent.makeURI(`sip:${targetNumber}@${credentials.server}`);
      
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
            // Setup remote audio stream for playback
            setupRemoteAudio(inviter);
            break;
          case SessionState.Terminated:
            setCallStatus('disconnected');
            setActiveCall(null);
            sessionRef.current = null;
            // Clean up remote audio
            if (remoteAudioRef.current) {
              remoteAudioRef.current.srcObject = null;
            }
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
      // Clean up remote audio
      if (remoteAudioRef.current) {
        remoteAudioRef.current.srcObject = null;
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
