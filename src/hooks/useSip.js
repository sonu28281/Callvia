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
  const dialToneRef = useRef(null);
  const ringIntervalRef = useRef(null);
  const audioContextRef = useRef(null);
  const gainNodeRef = useRef(null);

  // Setup remote audio element
  useEffect(() => {
    if (!remoteAudioRef.current) {
      const audio = document.createElement('audio');
      audio.autoplay = true;
      audio.volume = 1.0; // Max volume (gain node will boost further)
      audio.style.display = 'none';
      document.body.appendChild(audio);
      remoteAudioRef.current = audio;
    }

    // Setup audio context for volume boost
    if (!audioContextRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioContextRef.current = new AudioContext();
      gainNodeRef.current = audioContextRef.current.createGain();
      gainNodeRef.current.gain.value = 2.5; // Boost volume by 2.5x
      gainNodeRef.current.connect(audioContextRef.current.destination);
    }

    return () => {
      if (remoteAudioRef.current) {
        remoteAudioRef.current.srcObject = null;
        remoteAudioRef.current.remove();
        remoteAudioRef.current = null;
      }
      if (ringIntervalRef.current) {
        clearInterval(ringIntervalRef.current);
        ringIntervalRef.current = null;
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
    };
  }, []);

  // Play ring tone (tring tring pattern)
  const playDialTone = useCallback(() => {
    try {
      if (!audioContextRef.current) return;
      
      // Stop any existing ring
      stopDialTone();

      // Function to play a single ring burst
      const playRingBurst = () => {
        const oscillator1 = audioContextRef.current.createOscillator();
        const oscillator2 = audioContextRef.current.createOscillator();
        const gainNode = audioContextRef.current.createGain();
        
        // Mix two frequencies for realistic ring sound
        oscillator1.type = 'sine';
        oscillator1.frequency.value = 440; // A4
        oscillator2.type = 'sine';
        oscillator2.frequency.value = 480; // Close harmony for ring effect
        
        gainNode.gain.value = 0.3;
        
        oscillator1.connect(gainNode);
        oscillator2.connect(gainNode);
        gainNode.connect(audioContextRef.current.destination);
        
        const now = audioContextRef.current.currentTime;
        oscillator1.start(now);
        oscillator2.start(now);
        oscillator1.stop(now + 0.4); // Ring for 400ms
        oscillator2.stop(now + 0.4);
        
        // Play second ring after short pause
        setTimeout(() => {
          const osc1 = audioContextRef.current.createOscillator();
          const osc2 = audioContextRef.current.createOscillator();
          const gain = audioContextRef.current.createGain();
          
          osc1.type = 'sine';
          osc1.frequency.value = 440;
          osc2.type = 'sine';
          osc2.frequency.value = 480;
          gain.gain.value = 0.3;
          
          osc1.connect(gain);
          osc2.connect(gain);
          gain.connect(audioContextRef.current.destination);
          
          const now2 = audioContextRef.current.currentTime;
          osc1.start(now2);
          osc2.start(now2);
          osc1.stop(now2 + 0.4);
          osc2.stop(now2 + 0.4);
        }, 600); // 200ms pause between rings
      };
      
      // Play first ring immediately
      playRingBurst();
      
      // Repeat every 4 seconds (tring-tring... pause... tring-tring)
      ringIntervalRef.current = setInterval(playRingBurst, 4000);
      
      console.log('[SIP] Playing ring tone (tring tring pattern)');
    } catch (err) {
      console.error('[SIP] Failed to play ring tone:', err);
    }
  }, []);

  // Stop ring tone
  const stopDialTone = useCallback(() => {
    try {
      if (ringIntervalRef.current) {
        clearInterval(ringIntervalRef.current);
        ringIntervalRef.current = null;
      }
      if (dialToneRef.current) {
        dialToneRef.current.stop();
        dialToneRef.current = null;
      }
      console.log('[SIP] Stopped ring tone');
    } catch (err) {
      console.error('[SIP] Failed to stop dial tone:', err);
    }
  }, []);

  // Play hangup tone
  const playHangupTone = useCallback(() => {
    try {
      if (!audioContextRef.current) return;

      const oscillator = audioContextRef.current.createOscillator();
      const gainNode = audioContextRef.current.createGain();
      
      oscillator.type = 'sine';
      oscillator.frequency.value = 480; // Busy tone frequency
      gainNode.gain.value = 0.3;
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContextRef.current.destination);
      
      oscillator.start();
      oscillator.stop(audioContextRef.current.currentTime + 0.5); // 500ms beep
      
      console.log('[SIP] Playing hangup tone');
    } catch (err) {
      console.error('[SIP] Failed to play hangup tone:', err);
    }
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

      // Attach to audio element with volume boost
      if (remoteAudioRef.current && remoteStream.getTracks().length > 0) {
        remoteAudioRef.current.srcObject = remoteStream;
        
        // Route through gain node for volume boost
        if (audioContextRef.current && gainNodeRef.current) {
          try {
            const source = audioContextRef.current.createMediaStreamSource(remoteStream);
            source.connect(gainNodeRef.current);
            console.log('[SIP] Remote audio routed through gain node (2.5x boost)');
          } catch (gainErr) {
            console.warn('[SIP] Could not apply gain boost:', gainErr);
          }
        }
        
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
            playDialTone(); // Play dialing tone
            break;
          case SessionState.Established:
            setCallStatus('connected');
            stopDialTone(); // Stop dialing tone
            // Setup remote audio stream for playback
            setupRemoteAudio(inviter);
            break;
          case SessionState.Terminated:
            setCallStatus('disconnected');
            setActiveCall(null);
            sessionRef.current = null;
            stopDialTone(); // Stop dialing tone if still playing
            playHangupTone(); // Play hangup tone
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
  }, [isRegistered, activeCall, playDialTone, stopDialTone, playHangupTone]);

  // Hang up call
  const hangUp = useCallback(async () => {
    try {
      stopDialTone(); // Stop dialing tone if playing
      
      if (sessionRef.current) {
        await sessionRef.current.bye();
        sessionRef.current = null;
      }
      
      playHangupTone(); // Play hangup tone
      
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
  }, [stopDialTone, playHangupTone]);

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
