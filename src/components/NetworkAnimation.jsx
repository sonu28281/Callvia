import { useEffect, useRef } from 'react';

const NetworkAnimation = ({ 
  nodeCount = 30, 
  connectionDistance = 150,
  nodeColor = 'rgba(99, 102, 241, 0.8)',
  lineColor = 'rgba(99, 102, 241, 0.2)',
  glowColor = 'rgba(99, 102, 241, 1)',
  speed = 0.3,
  zIndex = 1 
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const nodesRef = useRef([]);
  const connectionsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initNodes();
    };

    // Initialize nodes
    const initNodes = () => {
      nodesRef.current = [];
      for (let i = 0; i < nodeCount; i++) {
        nodesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          radius: Math.random() * 2 + 2,
        });
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update node positions
      nodesRef.current.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Keep within bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));
      });

      // Collect all connections for this frame
      const currentConnections = [];
      
      // Draw connections with varying opacity
      nodesRef.current.forEach((node, i) => {
        nodesRef.current.slice(i + 1).forEach((otherNode) => {
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            // Calculate opacity based on distance (closer = more visible)
            const baseOpacity = 1 - distance / connectionDistance;
            const lineOpacity = baseOpacity * 0.4; // Lines are semi-transparent
            
            // Draw connection line with varying opacity
            ctx.strokeStyle = lineColor.replace(/[\d.]+\)$/g, `${lineOpacity})`);
            ctx.lineWidth = baseOpacity * 1.5;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.stroke();

            // Store connection for glow rendering
            currentConnections.push({
              x1: node.x,
              y1: node.y,
              x2: otherNode.x,
              y2: otherNode.y,
              opacity: baseOpacity
            });
          }
        });
      });

      // Draw glowing connection points where lines meet
      currentConnections.forEach((conn) => {
        // Draw glow at both ends of connection
        [
          { x: conn.x1, y: conn.y1 },
          { x: conn.x2, y: conn.y2 }
        ].forEach(point => {
          // Outer glow (larger, more transparent)
          const outerGradient = ctx.createRadialGradient(
            point.x, point.y, 0,
            point.x, point.y, 8 * conn.opacity
          );
          outerGradient.addColorStop(0, glowColor.replace(/[\d.]+\)$/g, `${conn.opacity * 0.6})`));
          outerGradient.addColorStop(0.5, glowColor.replace(/[\d.]+\)$/g, `${conn.opacity * 0.3})`));
          outerGradient.addColorStop(1, 'rgba(99, 102, 241, 0)');

          ctx.fillStyle = outerGradient;
          ctx.beginPath();
          ctx.arc(point.x, point.y, 8 * conn.opacity, 0, Math.PI * 2);
          ctx.fill();

          // Inner glow (smaller, brighter)
          const innerGradient = ctx.createRadialGradient(
            point.x, point.y, 0,
            point.x, point.y, 4 * conn.opacity
          );
          innerGradient.addColorStop(0, glowColor);
          innerGradient.addColorStop(0.7, glowColor.replace(/[\d.]+\)$/g, `${conn.opacity * 0.7})`));
          innerGradient.addColorStop(1, 'rgba(99, 102, 241, 0)');

          ctx.fillStyle = innerGradient;
          ctx.beginPath();
          ctx.arc(point.x, point.y, 4 * conn.opacity, 0, Math.PI * 2);
          ctx.fill();
        });
      });

      // Draw nodes (network endpoints)
      nodesRef.current.forEach((node) => {
        // Outer glow for nodes
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.radius * 3
        );
        gradient.addColorStop(0, glowColor.replace(/[\d.]+\)$/g, '0.9)'));
        gradient.addColorStop(0.5, glowColor.replace(/[\d.]+\)$/g, '0.4)'));
        gradient.addColorStop(1, 'rgba(99, 102, 241, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
        ctx.fill();

        // Inner node with bright center
        const nodeGradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.radius
        );
        nodeGradient.addColorStop(0, '#FFFFFF');
        nodeGradient.addColorStop(0.4, nodeColor);
        nodeGradient.addColorStop(1, nodeColor.replace(/[\d.]+\)$/g, '0.6)'));

        ctx.fillStyle = nodeGradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    animate();

    // Handle resize
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [nodeCount, connectionDistance, nodeColor, lineColor, glowColor, speed]);

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
    />
  );
};

export default NetworkAnimation;
