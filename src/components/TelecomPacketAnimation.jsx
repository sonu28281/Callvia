import { useEffect, useRef, useState } from 'react';

/**
 * TelecomPacketAnimation - Network packet visualization
 * 
 * Simulates a sparse telecom network with packets traveling along edges,
 * node glows, and organic network behavior.
 */
const TelecomPacketAnimation = ({
  // Network structure
  nodeCount = null, // null = auto-calculate based on size
  maxConnectionsPerNode = 3,
  edgeOpacity = 0.12,
  networkType = 'organic', // 'organic' or 'cellular'
  cellSize = 80, // Size of hexagonal cells for cellular network
  
  // Packet behavior
  packetSpawnRate = 0.8, // packets per second
  maxActivePackets = 8,
  packetSpeedMin = 40, // pixels per second
  packetSpeedMax = 100,
  tailLengthMin = 30,
  tailLengthMax = 80,
  tailWidthMin = 2,
  tailWidthMax = 4,
  dropProbability = 0.15, // probability per hop
  
  // Visual styling
  nodeGlowDuration = 500, // ms
  nodeGlowIntensity = 1.0,
  edgeColor = 'rgba(29, 108, 244, 0.12)',
  nodeColor = 'rgba(29, 108, 244, 0.4)',
  packetColor = 'rgba(29, 108, 244, 1)',
  glowColor = 'rgba(29, 108, 244, 1)',
  
  // Dark mode colors
  darkModeEdgeColor = 'rgba(99, 102, 241, 0.15)',
  darkModeNodeColor = 'rgba(99, 102, 241, 0.5)',
  darkModePacketColor = 'rgba(99, 102, 241, 1)',
  darkModeGlowColor = 'rgba(99, 102, 241, 1)',
  
  zIndex = 1,
}) => {
  const canvasRef = useRef(null);
  const networkRef = useRef({ nodes: [], edges: [] });
  const packetsRef = useRef([]);
  const nodeGlowsRef = useRef(new Map());
  const lastSpawnRef = useRef(0);
  const prefersReducedMotionRef = useRef(false);
  const isDarkModeRef = useRef(false);

  // Check for reduced motion and dark mode
  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotionRef.current = motionQuery.matches;
    
    const handleMotionChange = (e) => {
      prefersReducedMotionRef.current = e.matches;
    };
    motionQuery.addEventListener('change', handleMotionChange);

    const checkDarkMode = () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      isDarkModeRef.current = isDark;
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

    // Get active colors
    const getActiveColors = () => ({
      edge: isDarkModeRef.current ? darkModeEdgeColor : edgeColor,
      node: isDarkModeRef.current ? darkModeNodeColor : nodeColor,
      packet: isDarkModeRef.current ? darkModePacketColor : packetColor,
      glow: isDarkModeRef.current ? darkModeGlowColor : glowColor,
    });

    // Resize canvas with high DPI support
    const resizeCanvas = () => {
      if (!canvas) return;
      
      const rect = canvas.getBoundingClientRect();
      // Skip if canvas has no dimensions (can happen during DOM manipulation)
      if (rect.width === 0 || rect.height === 0) return;
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
      generateNetwork();
    };

    // Poisson disk sampling for node placement
    const poissonDiskSampling = (width, height, minDist, maxAttempts = 30) => {
      const points = [];
      const grid = [];
      const cellSize = minDist / Math.sqrt(2);
      const cols = Math.ceil(width / cellSize);
      const rows = Math.ceil(height / cellSize);

      // Initialize grid
      for (let i = 0; i < cols * rows; i++) grid[i] = null;

      // Helper to get grid index
      const getGridIndex = (x, y) => {
        const col = Math.floor(x / cellSize);
        const row = Math.floor(y / cellSize);
        return row * cols + col;
      };

      // First point
      const firstPoint = {
        x: width * (0.3 + Math.random() * 0.4),
        y: height * (0.3 + Math.random() * 0.4),
      };
      points.push(firstPoint);
      grid[getGridIndex(firstPoint.x, firstPoint.y)] = points.length - 1;

      const active = [firstPoint];

      while (active.length > 0 && points.length < 100) {
        const randomIndex = Math.floor(Math.random() * active.length);
        const point = active[randomIndex];
        let found = false;

        for (let i = 0; i < maxAttempts; i++) {
          const angle = Math.random() * Math.PI * 2;
          const radius = minDist * (1 + Math.random());
          const newPoint = {
            x: point.x + radius * Math.cos(angle),
            y: point.y + radius * Math.sin(angle),
          };

          // Check bounds
          if (newPoint.x < 0 || newPoint.x >= width || newPoint.y < 0 || newPoint.y >= height) {
            continue;
          }

          // Check minimum distance
          let valid = true;
          const gridX = Math.floor(newPoint.x / cellSize);
          const gridY = Math.floor(newPoint.y / cellSize);

          // Check surrounding cells
          for (let dy = -2; dy <= 2; dy++) {
            for (let dx = -2; dx <= 2; dx++) {
              const nx = gridX + dx;
              const ny = gridY + dy;
              if (nx >= 0 && nx < cols && ny >= 0 && ny < rows) {
                const neighborIndex = grid[ny * cols + nx];
                if (neighborIndex !== null) {
                  const neighbor = points[neighborIndex];
                  const dist = Math.hypot(newPoint.x - neighbor.x, newPoint.y - neighbor.y);
                  if (dist < minDist) {
                    valid = false;
                    break;
                  }
                }
              }
            }
            if (!valid) break;
          }

          if (valid) {
            points.push(newPoint);
            grid[getGridIndex(newPoint.x, newPoint.y)] = points.length - 1;
            active.push(newPoint);
            found = true;
            break;
          }
        }

        if (!found) {
          active.splice(randomIndex, 1);
        }
      }

      return points;
    };

    // Generate hexagonal cellular network
    const generateCellularNetwork = (width, height, cellSize) => {
      const nodes = [];
      const edges = [];
      let nodeId = 0;

      // Calculate hexagon dimensions
      const hexWidth = cellSize * Math.sqrt(3);
      const hexHeight = cellSize * 2;
      const vertSpacing = hexHeight * 0.75;

      // Calculate how many hexagons we need
      const cols = Math.ceil(width / hexWidth) + 2;
      const rows = Math.ceil(height / vertSpacing) + 2;

      // Create hexagonal grid
      const nodeMap = new Map(); // key: "col,row" -> nodeId

      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
          // Offset every other row for hexagonal packing
          const xOffset = (row % 2) * (hexWidth / 2);
          const x = col * hexWidth + xOffset;
          const y = row * vertSpacing;

          nodes.push({
            id: nodeId,
            x: x,
            y: y,
            connections: [],
            gridPos: { col, row }
          });

          nodeMap.set(`${col},${row}`, nodeId);
          nodeId++;
        }
      }

      // Connect hexagonal neighbors
      nodes.forEach(node => {
        const { col, row } = node.gridPos;
        
        // Six possible neighbors in a hexagonal grid
        const neighbors = [];
        
        if (row % 2 === 0) {
          // Even row
          neighbors.push(
            { col: col + 1, row: row },     // Right
            { col: col - 1, row: row },     // Left
            { col: col, row: row - 1 },     // Top-left
            { col: col + 1, row: row - 1 }, // Top-right
            { col: col, row: row + 1 },     // Bottom-left
            { col: col + 1, row: row + 1 }  // Bottom-right
          );
        } else {
          // Odd row
          neighbors.push(
            { col: col + 1, row: row },     // Right
            { col: col - 1, row: row },     // Left
            { col: col - 1, row: row - 1 }, // Top-left
            { col: col, row: row - 1 },     // Top-right
            { col: col - 1, row: row + 1 }, // Bottom-left
            { col: col, row: row + 1 }      // Bottom-right
          );
        }

        neighbors.forEach(neighbor => {
          const neighborId = nodeMap.get(`${neighbor.col},${neighbor.row}`);
          if (neighborId !== undefined && neighborId > node.id) {
            const neighborNode = nodes[neighborId];
            const distance = Math.hypot(neighborNode.x - node.x, neighborNode.y - node.y);
            
            edges.push({
              from: node.id,
              to: neighborId,
              length: distance,
            });
            
            node.connections.push(neighborId);
            neighborNode.connections.push(node.id);
          }
        });
      });

      return { nodes, edges };
    };

    // Generate network graph
    const generateNetwork = () => {
      if (!canvas) return;
      
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      
      // Skip if canvas has no dimensions
      if (width === 0 || height === 0) return;

      if (networkType === 'cellular') {
        // Generate hexagonal cellular network
        const { nodes, edges } = generateCellularNetwork(width, height, cellSize);
        networkRef.current = { nodes, edges };
      } else {
        // Original organic network generation
        // Calculate node count based on area
        const area = width * height;
        const calculatedNodeCount = nodeCount || Math.floor(area / 8000) + 20;
        const minDist = Math.sqrt(area / calculatedNodeCount) * 0.8;

        // Generate nodes with Poisson distribution
        const nodePositions = poissonDiskSampling(width, height, minDist);
        
        const nodes = nodePositions.slice(0, calculatedNodeCount).map((pos, i) => ({
          id: i,
          x: pos.x,
          y: pos.y,
          connections: [],
        }));

        // Connect nodes to nearest neighbors
        const edges = [];
        nodes.forEach(node => {
          // Find nearest neighbors
          const distances = nodes
            .filter(n => n.id !== node.id && !node.connections.includes(n.id))
            .map(n => ({
              node: n,
              dist: Math.hypot(n.x - node.x, n.y - node.y),
            }))
            .sort((a, b) => a.dist - b.dist);

          // Connect to 1-3 nearest neighbors
          const numConnections = Math.min(
            Math.floor(Math.random() * maxConnectionsPerNode) + 1,
            maxConnectionsPerNode
          );

          for (let i = 0; i < Math.min(numConnections, distances.length); i++) {
            const target = distances[i].node;
            const maxDist = minDist * 3;
            
            if (distances[i].dist < maxDist && target.connections.length < maxConnectionsPerNode) {
              // Create edge
              const edge = {
                from: node.id,
                to: target.id,
                length: distances[i].dist,
              };
              edges.push(edge);
              node.connections.push(target.id);
              target.connections.push(node.id);
            }
          }
        });

        networkRef.current = { nodes, edges };
      }
      
      packetsRef.current = [];
      nodeGlowsRef.current.clear();
    };

    // Spawn new packet
    const spawnPacket = () => {
      const { nodes } = networkRef.current;
      if (nodes.length === 0) return null;

      // Find a node with connections
      const validNodes = nodes.filter(n => n.connections.length > 0);
      if (validNodes.length === 0) return null;

      const startNode = validNodes[Math.floor(Math.random() * validNodes.length)];
      const nextNodeId = startNode.connections[Math.floor(Math.random() * startNode.connections.length)];

      return {
        id: Date.now() + Math.random(),
        currentNodeId: startNode.id,
        targetNodeId: nextNodeId,
        progress: 0, // 0 to 1 along current edge
        speed: packetSpeedMin + Math.random() * (packetSpeedMax - packetSpeedMin),
        tailLength: tailLengthMin + Math.random() * (tailLengthMax - tailLengthMin),
        tailWidth: tailWidthMin + Math.random() * (tailWidthMax - tailWidthMin),
        hops: 0,
        maxHops: 5 + Math.floor(Math.random() * 10),
        opacity: 1,
        dropping: false,
      };
    };

    // Update packets
    const updatePackets = (deltaTime) => {
      if (prefersReducedMotionRef.current) return;

      const { nodes, edges } = networkRef.current;

      // Spawn new packets
      if (packetsRef.current.length < maxActivePackets) {
        const spawnProb = packetSpawnRate * deltaTime;
        if (Math.random() < spawnProb) {
          const newPacket = spawnPacket();
          if (newPacket) packetsRef.current.push(newPacket);
        }
      }

      // Update existing packets
      packetsRef.current = packetsRef.current.filter(packet => {
        if (packet.dropping) {
          packet.opacity -= deltaTime * 3;
          return packet.opacity > 0;
        }

        // Move packet
        const currentNode = nodes.find(n => n.id === packet.currentNodeId);
        const targetNode = nodes.find(n => n.id === packet.targetNodeId);
        
        if (!currentNode || !targetNode) return false;

        const distance = Math.hypot(targetNode.x - currentNode.x, targetNode.y - currentNode.y);
        const progressDelta = (packet.speed * deltaTime) / distance;
        packet.progress += progressDelta;

        // Reached target node
        if (packet.progress >= 1) {
          packet.hops++;
          
          // Trigger node glow
          triggerNodeGlow(packet.targetNodeId);

          // Check if packet should be dropped
          if (Math.random() < dropProbability || packet.hops >= packet.maxHops) {
            packet.dropping = true;
            return true;
          }

          // Choose next node
          const nextConnections = targetNode.connections.filter(id => id !== packet.currentNodeId);
          if (nextConnections.length === 0) {
            packet.dropping = true;
            return true;
          }

          packet.currentNodeId = packet.targetNodeId;
          packet.targetNodeId = nextConnections[Math.floor(Math.random() * nextConnections.length)];
          packet.progress = 0;
        }

        return true;
      });
    };

    // Trigger node glow
    const triggerNodeGlow = (nodeId) => {
      const existing = nodeGlowsRef.current.get(nodeId);
      const now = Date.now();
      
      if (existing && now - existing.startTime < nodeGlowDuration * 0.5) {
        // Multiple packets at same node - boost intensity
        existing.intensity = Math.min(existing.intensity * 1.5, nodeGlowIntensity * 2);
        existing.startTime = now;
      } else {
        nodeGlowsRef.current.set(nodeId, {
          startTime: now,
          intensity: nodeGlowIntensity,
        });
      }
    };

    // Update node glows
    const updateNodeGlows = () => {
      const now = Date.now();
      nodeGlowsRef.current.forEach((glow, nodeId) => {
        if (now - glow.startTime > nodeGlowDuration) {
          nodeGlowsRef.current.delete(nodeId);
        }
      });
    };

    // Draw hexagon cell
    const drawHexagon = (x, y, size, strokeColor, fillColor = null) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6;
        const hx = x + size * Math.cos(angle);
        const hy = y + size * Math.sin(angle);
        if (i === 0) {
          ctx.moveTo(hx, hy);
        } else {
          ctx.lineTo(hx, hy);
        }
      }
      ctx.closePath();
      
      if (fillColor) {
        ctx.fillStyle = fillColor;
        ctx.fill();
      }
      
      ctx.strokeStyle = strokeColor;
      ctx.stroke();
    };

    // Draw network
    const draw = () => {
      if (!canvas || !ctx) return;
      
      const rect = canvas.getBoundingClientRect();
      // Skip if canvas has no dimensions
      if (rect.width === 0 || rect.height === 0) return;
      
      const colors = getActiveColors();
      
      ctx.clearRect(0, 0, rect.width, rect.height);

      const { nodes, edges } = networkRef.current;

      // Draw hexagonal cells if cellular network
      if (networkType === 'cellular') {
        ctx.lineWidth = 1.5;
        nodes.forEach(node => {
          drawHexagon(node.x, node.y, cellSize * 0.87, colors.edge);
        });
        
        // Draw tower interconnections (lighter lines)
        ctx.strokeStyle = colors.edge.replace(/[\d.]+\)$/g, '0.05)');
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        edges.forEach(edge => {
          const fromNode = nodes.find(n => n.id === edge.from);
          const toNode = nodes.find(n => n.id === edge.to);
          if (!fromNode || !toNode) return;

          ctx.beginPath();
          ctx.moveTo(fromNode.x, fromNode.y);
          ctx.lineTo(toNode.x, toNode.y);
          ctx.stroke();
        });
        ctx.setLineDash([]);
      }

      // Draw edges (connections between towers)
      if (networkType !== 'cellular') {
        ctx.strokeStyle = colors.edge;
        ctx.lineWidth = 1;
        edges.forEach(edge => {
          const fromNode = nodes.find(n => n.id === edge.from);
          const toNode = nodes.find(n => n.id === edge.to);
          if (!fromNode || !toNode) return;

          ctx.beginPath();
          ctx.moveTo(fromNode.x, fromNode.y);
          ctx.lineTo(toNode.x, toNode.y);
          ctx.stroke();
        });
      }

      // Draw packets with trails
      packetsRef.current.forEach(packet => {
        const currentNode = nodes.find(n => n.id === packet.currentNodeId);
        const targetNode = nodes.find(n => n.id === packet.targetNodeId);
        if (!currentNode || !targetNode) return;

        // Calculate packet position
        const x = currentNode.x + (targetNode.x - currentNode.x) * packet.progress;
        const y = currentNode.y + (targetNode.y - currentNode.y) * packet.progress;

        // Draw trail
        const trailSteps = 15;
        for (let i = 0; i < trailSteps; i++) {
          const trailProgress = packet.progress - (i / trailSteps) * (packet.tailLength / Math.hypot(targetNode.x - currentNode.x, targetNode.y - currentNode.y));
          if (trailProgress < 0) break;

          const trailX = currentNode.x + (targetNode.x - currentNode.x) * trailProgress;
          const trailY = currentNode.y + (targetNode.y - currentNode.y) * trailProgress;
          const alpha = (1 - i / trailSteps) * packet.opacity;
          const width = packet.tailWidth * (1 - i / trailSteps);

          ctx.strokeStyle = colors.packet.replace(/[\d.]+\)$/g, `${alpha})`);
          ctx.lineWidth = width;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(trailX, trailY);
          ctx.lineTo(trailX, trailY);
          ctx.stroke();
        }

        // Draw packet head
        ctx.fillStyle = colors.packet.replace(/[\d.]+\)$/g, `${packet.opacity})`);
        ctx.beginPath();
        ctx.arc(x, y, packet.tailWidth * 0.7, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw nodes with glows
      const now = Date.now();
      nodes.forEach(node => {
        const glow = nodeGlowsRef.current.get(node.id);
        
        if (glow && !prefersReducedMotionRef.current) {
          const elapsed = now - glow.startTime;
          const progress = elapsed / nodeGlowDuration;
          const intensity = glow.intensity * (1 - Math.pow(progress, 2));

          // Draw glow
          const glowRadius = networkType === 'cellular' ? 20 : 15;
          const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowRadius * intensity);
          gradient.addColorStop(0, colors.glow.replace(/[\d.]+\)$/g, `${intensity * 0.8})`));
          gradient.addColorStop(0.5, colors.glow.replace(/[\d.]+\)$/g, `${intensity * 0.4})`));
          gradient.addColorStop(1, 'transparent');

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(node.x, node.y, glowRadius * intensity, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw node (cell tower)
        if (networkType === 'cellular') {
          // Draw cell tower symbol
          const towerHeight = glow ? 10 : 8;
          const towerWidth = glow ? 6 : 5;
          
          ctx.fillStyle = glow ? colors.glow.replace(/[\d.]+\)$/g, '0.9)') : colors.node;
          ctx.strokeStyle = glow ? colors.glow : colors.node;
          ctx.lineWidth = 1.5;
          
          // Tower base (triangle)
          ctx.beginPath();
          ctx.moveTo(node.x, node.y - towerHeight);
          ctx.lineTo(node.x - towerWidth / 2, node.y);
          ctx.lineTo(node.x + towerWidth / 2, node.y);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          
          // Signal rings
          if (glow) {
            ctx.strokeStyle = colors.glow.replace(/[\d.]+\)$/g, '0.4)');
            ctx.lineWidth = 1;
            for (let i = 1; i <= 2; i++) {
              ctx.beginPath();
              ctx.arc(node.x, node.y - towerHeight / 2, towerWidth + i * 3, 0, Math.PI * 2);
              ctx.stroke();
            }
          }
        } else {
          // Draw regular node
          ctx.fillStyle = glow ? colors.glow.replace(/[\d.]+\)$/g, '0.8)') : colors.node;
          ctx.beginPath();
          ctx.arc(node.x, node.y, glow ? 3 : 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    };

    // Animation loop
    let lastTime = 0;
    const animate = (timestamp) => {
      // Check if canvas is still valid
      if (!canvasRef.current) {
        if (animationId) cancelAnimationFrame(animationId);
        return;
      }
      
      try {
        const deltaTime = lastTime ? Math.min((timestamp - lastTime) / 1000, 0.1) : 0;
        lastTime = timestamp;

        updatePackets(deltaTime);
        updateNodeGlows();
        draw();
      } catch (error) {
        console.error('TelecomPacketAnimation error:', error);
      }

      animationId = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    animate(0);

    // Handle resize with error handling
    const resizeObserver = new ResizeObserver(() => {
      try {
        resizeCanvas();
      } catch (error) {
        console.error('TelecomPacketAnimation resize error:', error);
      }
    });
    resizeObserver.observe(canvas);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
    };
  }, [
    nodeCount,
    maxConnectionsPerNode,
    edgeOpacity,
    networkType,
    cellSize,
    packetSpawnRate,
    maxActivePackets,
    packetSpeedMin,
    packetSpeedMax,
    tailLengthMin,
    tailLengthMax,
    tailWidthMin,
    tailWidthMax,
    dropProbability,
    nodeGlowDuration,
    nodeGlowIntensity,
    edgeColor,
    nodeColor,
    packetColor,
    glowColor,
    darkModeEdgeColor,
    darkModeNodeColor,
    darkModePacketColor,
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

export default TelecomPacketAnimation;
