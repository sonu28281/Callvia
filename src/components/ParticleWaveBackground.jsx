import { useEffect, useRef, useState } from 'react';

/**
 * ParticleWaveBackground - Canvas-based dense nano particle wave animation
 * 
 * Creates a flowing wave effect with tiny nano particles in logo pink/magenta tones.
 * High density particle system optimized for performance.
 */
const ParticleWaveBackground = ({
  particleDensity = 160,
  particleColor = ['#EC4899', '#8B5CF6', '#3B82F6', '#10B981', '#F59E0B'],
  linkColor = '#EC4899',
  linkDistance = 80,
  particleSpeed = 0.2,
  waveAmplitude = 1.2,
}) => {
  const canvasRef = useRef(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let time = 0;

    // Detect theme
    const detectTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      const hasClass = document.documentElement.classList.contains('dark') || 
                       document.body.classList.contains('dark');
      setIsDark(theme === 'dark' || hasClass);
    };

    detectTheme();

    // Watch for theme changes
    const observer = new MutationObserver(detectTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'class'],
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Setup canvas
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      initParticles();
    };

    // Initialize particles with wave properties
    const initParticles = () => {
      particles = [];
      const width = canvas.width;
      const height = canvas.height;
      const count = Math.floor(particleDensity * (width * height) / 100000); // Much higher density
      
      const colorCounts = [0, 0, 0, 0, 0];
      for (let i = 0; i < count; i++) {
        const randomColor = Math.floor(Math.random() * particleColor.length);
        colorCounts[randomColor]++;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          baseY: Math.random() * height,
          vx: (Math.random() - 0.5) * particleSpeed * 0.15,
          vy: (Math.random() - 0.5) * particleSpeed * 0.15,
          radius: Math.random() * 0.6 + 0.3, // Nano particles (0.3-0.9px)
          colorIndex: randomColor,
          phase: Math.random() * Math.PI * 2,
        });
      }
      console.log('🌈 Particle colors:', particleColor);
      console.log('🎨 Color distribution:', colorCounts);
    };

    // Get theme-aware colors (distinct logo color palette)
    const getColors = () => {
      if (isDark) {
        return {
          particles: ['#EC4899', '#8B5CF6', '#3B82F6', '#10B981', '#F59E0B'],
          links: '#EC4899',
          particleOpacity: 0.35,
          linkOpacity: 0.15,
        };
      }
      return {
        particles: ['#EC4899', '#8B5CF6', '#3B82F6', '#10B981', '#F59E0B'],
        links: '#EC4899',
        particleOpacity: 0.4,
        linkOpacity: 0.18,
      };
    };

    // Animation loop
    const animate = () => {
      const width = canvas.width;
      const height = canvas.height;
      
      ctx.clearRect(0, 0, width, height);
      
      time += 0.005; // Slower time progression for wave
      const colors = getColors();

      // Update and draw particles with wave motion
      particles.forEach((particle, i) => {
        // Apply wave motion
        const waveOffset = Math.sin(particle.phase + time * 1.2) * waveAmplitude * 18;
        particle.y = particle.baseY + waveOffset;

        // Move particle slowly
        particle.x += particle.vx * 0.4;
        particle.baseY += particle.vy * 0.4;

        // Wrap around edges
        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.baseY < 0) particle.baseY = height;
        if (particle.baseY > height) particle.baseY = 0;

        // Draw connections to nearby particles (very subtle)
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < linkDistance) {
            const distanceOpacity = (1 - distance / linkDistance);
            const opacity = distanceOpacity * colors.linkOpacity;
            ctx.globalAlpha = opacity;
            ctx.strokeStyle = colors.links;
            ctx.lineWidth = 0.6; // Slightly thicker for visibility
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        // Draw nano particle
        const color = colors.particles[particle.colorIndex];
        ctx.fillStyle = color;
        ctx.globalAlpha = colors.particleOpacity;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [isDark, particleDensity, particleColor, linkColor, linkDistance, particleSpeed, waveAmplitude]);

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

export default ParticleWaveBackground;

