import { useEffect, useRef, useState } from 'react';

/**
 * NetworkGridAnimation - Premium telecom network visualization
 * 
 * Renders a subtle grid-like network with vertical and horizontal lines,
 * nodes at intersections, and random glowing pulses to simulate network activity.
 */
const NetworkGridAnimation = ({ 
  spacing = 80,
  lineColor = 'rgba(29, 108, 244, 0.15)',
  nodeRadius = 3,
  glowRadius = 12,
  nodeColor = 'rgba(29, 108, 244, 0.8)',
  glowColor = 'rgba(29, 108, 244, 1)',
  activeNodesMin = 2,
  activeNodesMax = 5,
  pulseDurationMin = 800,
  pulseDurationMax = 1500,
  activationRate = 1200,
  irregularity = 0.15,
  zIndex = 1,
  // Dark mode colors (optional)
  darkModeLineColor = 'rgba(99, 102, 241, 0.2)',
  darkModeNodeColor = 'rgba(99, 102, 241, 0.9)',
  darkModeGlowColor = 'rgba(99, 102, 241, 1)',
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const linesRef = useRef({ vertical: [], horizontal: [] });
  const nodesRef = useRef([]);
  const activeNodesRef = useRef(new Map());
  const lastActivationRef = useRef(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);
    
    const handleMotionChange = (e) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener('change', handleMotionChange);

    // Check for dark mode
    const checkDarkMode = () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      setIsDarkMode(isDark);
    };
    
    checkDarkMode();
    
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });
    
    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    const dpr = window.devicePixelRatio || 1;

    // Get active colors based on theme
    const getActiveColors = () => ({
      line: isDarkMode ? darkModeLineColor : lineColor,
      node: isDarkMode ? darkModeNodeColor : nodeColor,
      glow: isDarkMode ? darkModeGlowColor : glowColor,
    });

    // Set canvas size with high DPI support
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
      generateNetwork();
    };

    // Generate network lines with irregularities
    const generateNetwork = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      
      linesRef.current = { vertical: [], horizontal: [] };
      nodesRef.current = [];

      // Generate vertical lines with irregularities
      for (let x = 0; x <= width; x += spacing) {
        const offset = (Math.random() - 0.5) * spacing * irregularity;
        const finalX = x + offset;
        
        // Sometimes break the line into segments
        if (Math.random() > 0.3) {
          linesRef.current.vertical.push({
            x: finalX,
            y1: 0,
            y2: height,
          });
        } else {
          // Create segmented line
          const breakPoint = Math.random() * height * 0.3 + height * 0.3;
          linesRef.current.vertical.push(
            { x: finalX, y1: 0, y2: breakPoint },
            { x: finalX, y1: breakPoint + spacing * 0.3, y2: height }
          );
        }
      }

      // Generate horizontal lines with irregularities
      for (let y = 0; y <= height; y += spacing) {
        const offset = (Math.random() - 0.5) * spacing * irregularity;
        const finalY = y + offset;
        
        if (Math.random() > 0.3) {
          linesRef.current.horizontal.push({
            y: finalY,
            x1: 0,
            x2: width,
          });
        } else {
          // Create segmented line
          const breakPoint = Math.random() * width * 0.3 + width * 0.3;
          linesRef.current.horizontal.push(
            { y: finalY, x1: 0, x2: breakPoint },
            { y: finalY, x1: breakPoint + spacing * 0.3, x2: width }
          );
        }
      }

      // Calculate intersection points (nodes)
      const nodes = [];
      linesRef.current.vertical.forEach(vLine => {
        linesRef.current.horizontal.forEach(hLine => {
          // Check if lines intersect
          if (
            vLine.x >= hLine.x1 && vLine.x <= hLine.x2 &&
            hLine.y >= vLine.y1 && hLine.y <= vLine.y2
          ) {
            nodes.push({
              x: vLine.x,
              y: hLine.y,
              id: `${vLine.x.toFixed(1)}-${hLine.y.toFixed(1)}`,
            });
          }
        });
      });

      nodesRef.current = nodes;
      activeNodesRef.current.clear();
    };

    // Activate random nodes
    const activateNodes = (timestamp) => {
      if (prefersReducedMotion) return;
      
      if (timestamp - lastActivationRef.current > activationRate) {
        lastActivationRef.current = timestamp;
        
        // Remove completed pulses
        activeNodesRef.current.forEach((pulse, nodeId) => {
          if (timestamp - pulse.startTime > pulse.duration) {
            activeNodesRef.current.delete(nodeId);
          }
        });

        // Activate new nodes
        const numToActivate = Math.floor(
          Math.random() * (activeNodesMax - activeNodesMin + 1) + activeNodesMin
        );

        for (let i = 0; i < numToActivate; i++) {
          const randomNode = nodesRef.current[
            Math.floor(Math.random() * nodesRef.current.length)
          ];
          
          if (randomNode && !activeNodesRef.current.has(randomNode.id)) {
            const duration = Math.random() * (pulseDurationMax - pulseDurationMin) + pulseDurationMin;
            activeNodesRef.current.set(randomNode.id, {
              node: randomNode,
              startTime: timestamp,
              duration: duration,
            });
          }
        }
      }
    };

    // Calculate pulse intensity
    const getPulseIntensity = (startTime, duration, currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = elapsed / duration;
      
      // Smooth ease-in-out pulse
      if (progress < 0.3) {
        // Fade in
        return (progress / 0.3);
      } else if (progress < 0.7) {
        // Hold at peak
        return 1;
      } else {
        // Fade out
        return 1 - ((progress - 0.7) / 0.3);
      }
    };

    // Draw everything
    const draw = (timestamp) => {
      const rect = canvas.getBoundingClientRect();
      const colors = getActiveColors();
      
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Draw lines
      ctx.strokeStyle = colors.line;
      ctx.lineWidth = 1;

      // Draw vertical lines
      linesRef.current.vertical.forEach(line => {
        ctx.beginPath();
        ctx.moveTo(line.x, line.y1);
        ctx.lineTo(line.x, line.y2);
        ctx.stroke();
      });

      // Draw horizontal lines
      linesRef.current.horizontal.forEach(line => {
        ctx.beginPath();
        ctx.moveTo(line.x1, line.y);
        ctx.lineTo(line.x2, line.y);
        ctx.stroke();
      });

      // Draw nodes
      nodesRef.current.forEach(node => {
        const activePulse = activeNodesRef.current.get(node.id);
        
        if (activePulse && !prefersReducedMotion) {
          // Active node with glow
          const intensity = getPulseIntensity(
            activePulse.startTime,
            activePulse.duration,
            timestamp
          );

          // Draw outer glow
          const gradient = ctx.createRadialGradient(
            node.x, node.y, 0,
            node.x, node.y, glowRadius * intensity
          );
          gradient.addColorStop(0, colors.glow.replace(/[\d.]+\)$/g, `${intensity * 0.8})`));
          gradient.addColorStop(0.5, colors.glow.replace(/[\d.]+\)$/g, `${intensity * 0.4})`));
          gradient.addColorStop(1, 'transparent');

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(node.x, node.y, glowRadius * intensity, 0, Math.PI * 2);
          ctx.fill();

          // Draw bright center
          ctx.fillStyle = colors.glow.replace(/[\d.]+\)$/g, `${intensity})`);
          ctx.beginPath();
          ctx.arc(node.x, node.y, nodeRadius * (1 + intensity * 0.5), 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Inactive node - subtle
          ctx.fillStyle = colors.node.replace(/[\d.]+\)$/g, '0.3)');
          ctx.beginPath();
          ctx.arc(node.x, node.y, nodeRadius * 0.7, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    };

    // Animation loop
    const animate = (timestamp) => {
      activateNodes(timestamp);
      draw(timestamp);
      animationId = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    animate(0);

    // Handle resize
    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });
    resizeObserver.observe(canvas);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      resizeObserver.disconnect();
    };
  }, [
    spacing,
    lineColor,
    nodeRadius,
    glowRadius,
    nodeColor,
    glowColor,
    activeNodesMin,
    activeNodesMax,
    pulseDurationMin,
    pulseDurationMax,
    activationRate,
    irregularity,
    prefersReducedMotion,
    isDarkMode,
    darkModeLineColor,
    darkModeNodeColor,
    darkModeGlowColor,
  ]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: zIndex,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  );
};

export default NetworkGridAnimation;
