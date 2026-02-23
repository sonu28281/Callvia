import { useEffect, useRef, useState } from 'react';

/**
 * NetworkBackground - Premium AI-style particle network animation
 * 
 * Features:
 * - Floating particles with connecting lines
 * - Dark/Light mode adaptive colors
 * - Smooth 60fps animation
 * - Responsive design
 * - Optional mouse parallax effect
 * - Performance optimized for mobile
 */
const NetworkBackground = ({
  particleCount = 80, // Desktop particle count (40% less on mobile)
  connectionDistance = 120, // Max distance for particle connections
  particleSpeed = 0.3, // Movement speed multiplier
  enableParallax = true, // Mouse parallax effect
  particleSize = 2, // Base particle size
  glowIntensity = 0.6, // Glow effect strength (0-1)
}) => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isDark, setIsDark] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Theme detection
  useEffect(() => {
    const checkTheme = () => {
      const isDarkMode = 
        document.documentElement.getAttribute('data-theme') === 'dark' ||
        document.documentElement.classList.contains('dark') ||
        document.body.classList.contains('dark');
      setIsDark(isDarkMode);
    };
    
    checkTheme();
    
    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class', 'data-theme'] 
    });
    observer.observe(document.body, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });
    
    return () => observer.disconnect();
  }, []);
  
  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Mouse tracking for parallax
  useEffect(() => {
    if (!enableParallax || isMobile) return;
    
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
  }, [enableParallax, isMobile]);
  
  // Main animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    let width = 0;
    let height = 0;
    
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
        ? Math.floor(particleCount * 0.6) // 40% reduction on mobile
        : particleCount;
      
      particlesRef.current = [];
      
      for (let i = 0; i < adjustedCount; i++) {
        particlesRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * particleSpeed,
          vy: (Math.random() - 0.5) * particleSpeed,
          baseX: 0, // For parallax
          baseY: 0,
        });
      }
      
      // Set base positions for parallax
      particlesRef.current.forEach(p => {
        p.baseX = p.x;
        p.baseY = p.y;
      });
    };
    
    // Get theme-adaptive colors
    const getColors = () => {
      if (isDark) {
        return {
          particle: 'rgba(59, 130, 246, 0.95)', // Electric blue (increased opacity)
          line: 'rgba(6, 182, 212, 0.45)', // Cyan 45% opacity (increased from 40%)
          glow: 'rgba(59, 130, 246, 0.9)', // Blue glow (increased)
        };
      } else {
        return {
          particle: 'rgba(100, 116, 139, 0.7)', // Soft blue-gray
          line: 'rgba(71, 85, 105, 0.25)', // Gray-blue 25% opacity
          glow: 'rgba(148, 163, 184, 0.4)', // Subtle glow
        };
      }
    };
    
    // Draw particle with glow
    const drawParticle = (x, y, colors) => {
      // Glow effect
      if (glowIntensity > 0) {
        const glowSize = particleSize * 3 * glowIntensity;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowSize);
        gradient.addColorStop(0, colors.glow);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, glowSize, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Main particle
      ctx.fillStyle = colors.particle;
      ctx.beginPath();
      ctx.arc(x, y, particleSize, 0, Math.PI * 2);
      ctx.fill();
    };
    
    // Draw connection line
    const drawConnection = (x1, y1, x2, y2, distance, colors) => {
      // Fade line opacity based on distance
      const opacity = 1 - (distance / connectionDistance);
      const lineColor = colors.line.replace(/[\d.]+\)$/, `${opacity * 0.4})`);
      
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    };
    
    // Animation loop
    const animate = () => {
      const colors = getColors();
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw particles
      particlesRef.current.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce from edges with soft damping
        if (particle.x < 0 || particle.x > width) {
          particle.vx *= -0.95;
          particle.x = Math.max(0, Math.min(width, particle.x));
        }
        if (particle.y < 0 || particle.y > height) {
          particle.vy *= -0.95;
          particle.y = Math.max(0, Math.min(height, particle.y));
        }
        
        // Update base position for parallax
        particle.baseX = particle.x;
        particle.baseY = particle.y;
        
        // Apply mouse parallax (only on desktop)
        let drawX = particle.x;
        let drawY = particle.y;
        
        if (enableParallax && !isMobile && mouseRef.current.x > 0) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 300;
          
          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance;
            drawX += dx * force * 0.03;
            drawY += dy * force * 0.03;
          }
        }
        
        // Draw connections to nearby particles
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const other = particlesRef.current[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            drawConnection(drawX, drawY, other.x, other.y, distance, colors);
          }
        }
        
        // Draw particle
        drawParticle(drawX, drawY, colors);
      });
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    // Setup
    resizeCanvas();
    
    // Debounced resize observer
    let resizeTimeout;
    const resizeObserver = new ResizeObserver(() => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 100);
    });
    resizeObserver.observe(canvas);
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      resizeObserver.disconnect();
      clearTimeout(resizeTimeout);
    };
  }, [isDark, isMobile, particleCount, connectionDistance, particleSpeed, 
      enableParallax, particleSize, glowIntensity]);
  
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

export default NetworkBackground;
