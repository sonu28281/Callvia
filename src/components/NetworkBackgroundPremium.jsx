import { useEffect, useRef, useState } from 'react';

/**
 * NetworkBackgroundPremium - Premium AI-style animated network background
 * 
 * Features:
 * - Soft cyan/teal nodes with glow (matches video reference)
 * - Thin connecting lines with distance-based opacity
 * - Travelling pulse animation along connections
 * - Background gradient (near-white light mode, navy dark mode)
 * - Mouse parallax effect (desktop only)
 * - Theme-aware with smooth transitions
 * - Performance optimized (60fps, mobile adaptive)
 * 
 * @param {Object} props
 * @param {number} props.particleCount - Number of particles (default: 80, reduces on mobile)
 * @param {[number, number]} props.particleSizeRange - Min/max particle radius (default: [1.5, 4])
 * @param {number} props.connectionDistance - Max distance for connections (default: 120)
 * @param {number} props.speedFactor - Movement speed multiplier (default: 0.6)
 * @param {boolean} props.enableParallax - Enable mouse parallax (default: true)
 * @param {boolean} props.enablePulse - Enable travelling pulses (default: true)
 */
const NetworkBackgroundPremium = ({
  particleCount = 80,
  particleSizeRange = [1.5, 4],
  connectionDistance = 120,
  speedFactor = 0.6,
  enableParallax = true,
  enablePulse = true,
}) => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const particlesRef = useRef([]);
  const pulsesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const lastPulseSpawnRef = useRef(0);
  
  const [isDark, setIsDark] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  // Theme detection
  useEffect(() => {
    const checkTheme = () => {
      const isDarkMode = 
        document.documentElement.getAttribute('data-theme') === 'dark' ||
        document.documentElement.classList.contains('dark') ||
        document.body.classList.contains('dark') ||
        window.getComputedStyle(document.documentElement)
          .getPropertyValue('--theme')?.trim() === 'dark';
      setIsDark(isDarkMode);
    };
    
    checkTheme();
    
    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class', 'style', 'data-theme'] 
    });
    observer.observe(document.body, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });
    
    return () => observer.disconnect();
  }, []);
  
  // Mobile detection & reduced motion check
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);
    
    const handleMotionChange = (e) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener('change', handleMotionChange);
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);
  
  // Mouse tracking for parallax
  useEffect(() => {
    if (!enableParallax || isMobile || prefersReducedMotion) return;
    
    const handleMouseMove = (e) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [enableParallax, isMobile, prefersReducedMotion]);
  
  // Main animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || prefersReducedMotion) return;
    
    const ctx = canvas.getContext('2d', { alpha: true });
    const dpr = window.devicePixelRatio || 1;
    let width = 0;
    let height = 0;
    
    // Theme colors
    const getThemeColors = () => {
      if (isDark) {
        return {
          primaryNode: 'rgba(127, 209, 255, 0.95)', // Pale cyan #7FD1FF (increased opacity)
          secondaryNode: 'rgba(94, 230, 196, 0.85)', // Teal accent #5EE6C4 (increased opacity)
          line: 'rgba(127, 209, 255, 0.25)', // Connection lines (increased from 0.20)
          pulse: 'rgba(255, 255, 255, 0.98)', // Bright white pulse for dark mode
          pulseCore: 'rgba(127, 209, 255, 1)', // Cyan core
          glowColor: '#7FD1FF',
        };
      } else {
        return {
          primaryNode: 'rgba(47, 101, 226, 0.75)', // Electric blue #2F65E2
          secondaryNode: 'rgba(50, 227, 138, 0.65)', // Soft teal #32E38A
          line: 'rgba(47, 101, 226, 0.35)', // Connection lines
          pulse: 'rgba(47, 101, 226, 0.95)', // Electric blue pulse for light mode
          pulseCore: 'rgba(255, 255, 255, 0.95)', // White core for light mode
          glowColor: '#2F65E2',
        };
      }
    };
    
    // Resize handler
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      
      // Reinitialize particles on resize
      initParticles();
    };
    
    // Initialize particles
    const initParticles = () => {
      const adjustedCount = isMobile 
        ? Math.floor(particleCount * 0.55) // 45% reduction on mobile
        : particleCount;
      
      particlesRef.current = [];
      
      for (let i = 0; i < adjustedCount; i++) {
        const isPrimary = Math.random() > 0.3; // 70% primary, 30% secondary color
        const size = particleSizeRange[0] + Math.random() * (particleSizeRange[1] - particleSizeRange[0]);
        
        particlesRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * speedFactor * 0.3,
          vy: (Math.random() - 0.5) * speedFactor * 0.3,
          size: size,
          isPrimary: isPrimary,
          parallaxFactor: 0.3 + Math.random() * 0.7, // Depth variation for parallax
        });
      }
      
      // Clear pulses on resize
      pulsesRef.current = [];
    };
    
    // Spawn travelling pulse
    const spawnPulse = (timestamp) => {
      if (!enablePulse) return;
      if (timestamp - lastPulseSpawnRef.current < 1800) return; // Every 1.8 seconds max (increased frequency)
      
      const particles = particlesRef.current;
      if (particles.length < 2) return;
      
      // Find two connected particles randomly
      const attempts = 20;
      for (let i = 0; i < attempts; i++) {
        const p1 = particles[Math.floor(Math.random() * particles.length)];
        const p2 = particles[Math.floor(Math.random() * particles.length)];
        
        if (p1 === p2) continue;
        
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist > 0 && dist < connectionDistance * 0.8) { // Spawn on closer connections
          pulsesRef.current.push({
            p1: p1,
            p2: p2,
            progress: 0,
            speed: 0.012 + Math.random() * 0.008, // Slightly slower for better visibility
            brightness: 0.85 + Math.random() * 0.15,
          });
          lastPulseSpawnRef.current = timestamp;
          break;
        }
      }
    };
    
    // Draw particle with soft glow
    const drawParticle = (particle, colors) => {
      const color = particle.isPrimary ? colors.primaryNode : colors.secondaryNode;
      
      // Apply parallax offset (desktop only)
      let drawX = particle.x;
      let drawY = particle.y;
      
      if (enableParallax && !isMobile && mouseRef.current.x > 0) {
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 400;
        
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const offset = force * particle.parallaxFactor * 12; // Up to 12px offset
          drawX += dx / distance * offset;
          drawY += dy / distance * offset;
        }
      }
      
      // Soft glow (subtle on mobile to save performance)
      const blurAmount = isMobile ? particle.size * 1.5 : particle.size * 2.5;
      ctx.shadowBlur = blurAmount;
      ctx.shadowColor = colors.glowColor;
      
      // Main particle
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(drawX, drawY, particle.size, 0, Math.PI * 2);
      ctx.fill();
      
      // Reset shadow
      ctx.shadowBlur = 0;
      
      return { x: drawX, y: drawY };
    };
    
    // Draw connection line
    const drawConnection = (pos1, pos2, distance, colors) => {
      // Distance-based opacity
      const opacityFactor = 1 - (distance / connectionDistance);
      const alpha = parseFloat(colors.line.match(/[\d.]+\)$/)?.[0].slice(0, -1) || 0.35);
      const lineAlpha = alpha * opacityFactor;
      
      // Thin line with slight blur
      ctx.shadowBlur = isMobile ? 0.5 : 1.2;
      ctx.shadowColor = colors.glowColor;
      ctx.strokeStyle = colors.line.replace(/[\d.]+\)$/, `${lineAlpha})`);
      ctx.lineWidth = 0.6 + opacityFactor * 0.6; // 0.6px to 1.2px
      ctx.beginPath();
      ctx.moveTo(pos1.x, pos1.y);
      ctx.lineTo(pos2.x, pos2.y);
      ctx.stroke();
      
      ctx.shadowBlur = 0;
    };
    
    // Draw travelling pulse
    const drawPulse = (pulse, colors) => {
      const { p1, p2, progress, brightness } = pulse;
      
      // Interpolate position
      const x = p1.x + (p2.x - p1.x) * progress;
      const y = p1.y + (p2.y - p1.y) * progress;
      
      // Pulse appearance (bright dot with bloom)
      const pulseSize = 3.0 + Math.sin(progress * Math.PI) * 1.8; // Slightly larger for better visibility
      
      // Outer glow
      ctx.shadowBlur = isMobile ? 10 : 18;
      ctx.shadowColor = colors.pulse;
      ctx.fillStyle = colors.pulse.replace(/[\d.]+\)$/, `${brightness})`);
      
      ctx.beginPath();
      ctx.arc(x, y, pulseSize, 0, Math.PI * 2);
      ctx.fill();
      
      // Extra bright core (theme-aware)
      ctx.shadowBlur = isMobile ? 5 : 10;
      ctx.shadowColor = colors.pulseCore;
      ctx.fillStyle = colors.pulseCore.replace(/[\d.]+\)$/, `${brightness * 0.9})`);
      ctx.beginPath();
      ctx.arc(x, y, pulseSize * 0.5, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.shadowBlur = 0;
    };
    
    // Animation loop
    const animate = (timestamp) => {
      const colors = getThemeColors();
      
      // Clear canvas with transparency (hero provides background)
      ctx.clearRect(0, 0, width, height);
      
      // Update particles
      const particlePositions = [];
      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Soft bounce from edges
        if (particle.x < 0 || particle.x > width) {
          particle.vx *= -0.98;
          particle.x = Math.max(0, Math.min(width, particle.x));
        }
        if (particle.y < 0 || particle.y > height) {
          particle.vy *= -0.98;
          particle.y = Math.max(0, Math.min(height, particle.y));
        }
        
        // Draw particle and store rendered position
        const pos = drawParticle(particle, colors);
        particlePositions.push({ particle, pos });
      });
      
      // Draw connections
      for (let i = 0; i < particlePositions.length; i++) {
        for (let j = i + 1; j < particlePositions.length; j++) {
          const { particle: p1, pos: pos1 } = particlePositions[i];
          const { particle: p2, pos: pos2 } = particlePositions[j];
          
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            drawConnection(pos1, pos2, distance, colors);
          }
        }
      }
      
      // Update and draw pulses
      pulsesRef.current = pulsesRef.current.filter((pulse) => {
        pulse.progress += pulse.speed;
        
        if (pulse.progress > 1) return false; // Remove completed pulses
        
        drawPulse(pulse, colors);
        return true;
      });
      
      // Spawn new pulse occasionally
      spawnPulse(timestamp);
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    // Setup
    resizeCanvas();
    
    // Debounced resize observer
    let resizeTimeout;
    const resizeObserver = new ResizeObserver(() => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 150);
    });
    resizeObserver.observe(canvas);
    
    // Start animation
    animationFrameRef.current = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      resizeObserver.disconnect();
      clearTimeout(resizeTimeout);
    };
  }, [isDark, isMobile, prefersReducedMotion, particleCount, particleSizeRange, 
      connectionDistance, speedFactor, enableParallax, enablePulse]);
  
  // Fallback for unsupported browsers
  if (!HTMLCanvasElement.prototype.getContext) {
    return null;
  }
  
  // Reduced motion fallback
  if (prefersReducedMotion) {
    return null;
  }
  
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  );
};

export default NetworkBackgroundPremium;
