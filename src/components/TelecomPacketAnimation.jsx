import { useEffect, useRef, useState } from 'react';
import NetworkBackground from './NetworkBackground';
import NetworkBackgroundPremium from './NetworkBackgroundPremium';
import ParticleWaveBackground from './ParticleWaveBackground';

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
  networkType = 'organic', // 'organic', 'cellular', 'spiderweb', 'neural', 'grid', 'mesh', 'constellation', 'particleNetwork', 'premiumParticle', or 'particleWave'
  cellSize = 80, // Size of hexagonal cells for cellular network
  spiderWebRings = 6, // Number of concentric rings for spider web
  spiderWebSpokes = 12, // Number of radial spokes for spider web
  neuralLayers = 5, // Number of layers for neural network
  neuralNodesPerLayer = [8, 12, 16, 12, 8], // Nodes in each layer
  gridSpacingX = 100, // Horizontal spacing for grid network
  gridSpacingY = 80, // Vertical spacing for grid network
  meshNodeCount = 40, // Number of nodes for mesh network
  meshConnectionRadius = 150, // Max connection distance for mesh
  constellationStars = 35, // Number of stars for constellation
  constellationConnectionDistance = 200, // Max connection distance
  
  // Particle Network props (for particleNetwork type)
  particleCount = 80,
  connectionDistance = 120,
  particleSpeed = 0.3,
  enableParallax = true,
  particleSize = 2,
  glowIntensity = 0.6,
  
  // Premium Particle props (for premiumParticle type)
  particleSizeRange = [1.5, 4],
  speedFactor = 0.6,
  enablePulse = true,
  
  // Particle Wave props (for particleWave type - canvas-based)
  particleDensity = 160,
  particleColor = ['#EC4899', '#8B5CF6', '#3B82F6', '#10B981', '#F59E0B'],
  linkColor = '#EC4899',
  linkDistance = 80,
  waveAmplitude = 1.2,
  
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

    // Generate constellation network (star pattern - elegant and minimal)
    const generateConstellationNetwork = (width, height, starCount, maxDistance) => {
      const nodes = [];
      const edges = [];
      let nodeId = 0;

      // Use Poisson disk sampling for natural star distribution
      const minDist = Math.sqrt((width * height) / starCount) * 1.2; // More spacing than mesh
      const starPositions = poissonDiskSampling(width, height, minDist);
      
      // Create star nodes
      starPositions.slice(0, starCount).forEach((pos) => {
        nodes.push({
          id: nodeId++,
          x: pos.x,
          y: pos.y,
          connections: [],
          brightness: 0.5 + Math.random() * 0.5, // Varying star brightness
        });
      });

      // Connect stars to form constellations (minimal, elegant connections)
      nodes.forEach(node => {
        // Find nearby stars but connect to only 1-3 (creating sparse patterns)
        const nearbyStars = nodes
          .filter(n => n.id !== node.id && !node.connections.includes(n.id))
          .map(n => ({
            node: n,
            dist: Math.hypot(n.x - node.x, n.y - node.y),
          }))
          .filter(n => n.dist < maxDistance)
          .sort((a, b) => a.dist - b.dist);

        // Connect to 1-3 nearest stars only (creating constellation lines)
        const maxConnections = Math.min(1 + Math.floor(Math.random() * 2), 3);
        const connectTo = Math.min(maxConnections, nearbyStars.length);
        
        for (let i = 0; i < connectTo; i++) {
          const target = nearbyStars[i];
          if (node.connections.length < 3 && target.node.connections.length < 3) {
            edges.push({
              from: node.id,
              to: target.node.id,
              length: target.dist,
            });
            node.connections.push(target.node.id);
            target.node.connections.push(node.id);
          }
        }
      });

      return { nodes, edges };
    };

    // Generate mesh network (dense interconnected network)
    const generateMeshNetwork = (width, height, nodeCount, connectionRadius) => {
      const nodes = [];
      const edges = [];
      let nodeId = 0;

      // Use Poisson disk sampling for even distribution
      const minDist = Math.sqrt((width * height) / nodeCount) * 0.8;
      const nodePositions = poissonDiskSampling(width, height, minDist);
      
      // Create nodes
      nodePositions.slice(0, nodeCount).forEach((pos) => {
        nodes.push({
          id: nodeId++,
          x: pos.x,
          y: pos.y,
          connections: [],
        });
      });

      // Connect nearby nodes (mesh topology - high connectivity)
      nodes.forEach(node => {
        // Find all nodes within connection radius
        const nearbyNodes = nodes
          .filter(n => n.id !== node.id && !node.connections.includes(n.id))
          .map(n => ({
            node: n,
            dist: Math.hypot(n.x - node.x, n.y - node.y),
          }))
          .filter(n => n.dist < connectionRadius)
          .sort((a, b) => a.dist - b.dist);

        // Connect to multiple nearby nodes (creating mesh redundancy)
        nearbyNodes.forEach(({ node: targetNode, dist }) => {
          if (!node.connections.includes(targetNode.id) && 
              !targetNode.connections.includes(node.id)) {
            edges.push({
              from: node.id,
              to: targetNode.id,
              length: dist,
            });
            node.connections.push(targetNode.id);
            targetNode.connections.push(node.id);
          }
        });
      });

      return { nodes, edges };
    };

    // Generate grid network (power grid / circuit board style)
    const generateGridNetwork = (width, height, spacingX, spacingY) => {
      const nodes = [];
      const edges = [];
      let nodeId = 0;

      // Calculate number of rows and columns
      const cols = Math.ceil(width / spacingX) + 1;
      const rows = Math.ceil(height / spacingY) + 1;

      // Calculate offsets to center the grid
      const totalWidth = (cols - 1) * spacingX;
      const totalHeight = (rows - 1) * spacingY;
      const offsetX = (width - totalWidth) / 2;
      const offsetY = (height - totalHeight) / 2;

      // Create grid nodes
      const nodeMap = new Map(); // key: "col,row" -> nodeId

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = offsetX + col * spacingX;
          const y = offsetY + row * spacingY;

          nodes.push({
            id: nodeId,
            x: x,
            y: y,
            connections: [],
            gridPos: { col, row },
          });

          nodeMap.set(`${col},${row}`, nodeId);
          nodeId++;
        }
      }

      // Connect grid nodes (horizontal and vertical connections)
      nodes.forEach(node => {
        const { col, row } = node.gridPos;

        // Connect to right neighbor
        const rightId = nodeMap.get(`${col + 1},${row}`);
        if (rightId !== undefined) {
          const rightNode = nodes[rightId];
          const distance = Math.hypot(rightNode.x - node.x, rightNode.y - node.y);
          edges.push({
            from: node.id,
            to: rightId,
            length: distance,
            type: 'horizontal',
          });
          node.connections.push(rightId);
          rightNode.connections.push(node.id);
        }

        // Connect to bottom neighbor
        const bottomId = nodeMap.get(`${col},${row + 1}`);
        if (bottomId !== undefined) {
          const bottomNode = nodes[bottomId];
          const distance = Math.hypot(bottomNode.x - node.x, bottomNode.y - node.y);
          edges.push({
            from: node.id,
            to: bottomId,
            length: distance,
            type: 'vertical',
          });
          node.connections.push(bottomId);
          bottomNode.connections.push(node.id);
        }
      });

      return { nodes, edges };
    };

    // Generate neural network
    const generateNeuralNetwork = (width, height, layers, nodesPerLayer) => {
      const nodes = [];
      const edges = [];
      let nodeId = 0;

      // Zero padding for maximum coverage
      const paddingX = 0;
      const paddingY = 0;
      
      const usableWidth = width - 2 * paddingX;
      const usableHeight = height - 2 * paddingY;
      
      // Calculate layer spacing
      const layerSpacing = usableWidth / (layers - 1);
      
      // Store nodes by layer for connection logic
      const layerNodes = [];

      // Create nodes for each layer
      for (let layer = 0; layer < layers; layer++) {
        const numNodes = nodesPerLayer[layer] || 10;
        
        // Spread nodes evenly across full height
        const nodeSpacing = usableHeight / (numNodes - 1);
        const x = paddingX + layer * layerSpacing;
        
        layerNodes[layer] = [];
        
        for (let nodeIndex = 0; nodeIndex < numNodes; nodeIndex++) {
          // Distribute evenly from top to bottom
          const y = paddingY + nodeIndex * nodeSpacing;
          
          nodes.push({
            id: nodeId,
            x: x,
            y: y,
            connections: [],
            layer: layer,
            nodeIndex: nodeIndex,
          });
          
          layerNodes[layer].push(nodeId);
          nodeId++;
        }
      }

      // Connect layers (each node connects to 3-5 nodes in next layer)
      for (let layer = 0; layer < layers - 1; layer++) {
        const currentLayerNodes = layerNodes[layer];
        const nextLayerNodes = layerNodes[layer + 1];
        
        currentLayerNodes.forEach(currentNodeId => {
          const currentNode = nodes[currentNodeId];
          
          // Connect to 3-5 random nodes in next layer
          const numConnections = Math.min(
            3 + Math.floor(Math.random() * 3),
            nextLayerNodes.length
          );
          
          // Shuffle and pick nodes
          const shuffled = [...nextLayerNodes].sort(() => Math.random() - 0.5);
          const selectedNodes = shuffled.slice(0, numConnections);
          
          selectedNodes.forEach(targetId => {
            const targetNode = nodes[targetId];
            const distance = Math.hypot(targetNode.x - currentNode.x, targetNode.y - currentNode.y);
            
            edges.push({
              from: currentNodeId,
              to: targetId,
              length: distance,
            });
            
            currentNode.connections.push(targetId);
            targetNode.connections.push(currentNodeId);
          });
        });
      }

      return { nodes, edges };
    };

    // Generate spider web network
    const generateSpiderWebNetwork = (width, height, rings, spokes) => {
      const nodes = [];
      const edges = [];
      let nodeId = 0;

      // Calculate center and maximum radius
      const centerX = width / 2;
      const centerY = height / 2;
      // Use diagonal distance to ensure full coverage of entire hero section
      const maxRadius = Math.sqrt(width * width + height * height) / 2;
      const radiusStep = maxRadius / rings;

      // Create center node
      nodes.push({
        id: nodeId++,
        x: centerX,
        y: centerY,
        connections: [],
        ring: 0,
        spoke: -1,
      });

      // Create nodes in concentric rings
      for (let ring = 1; ring <= rings; ring++) {
        const radius = ring * radiusStep;
        const angleStep = (2 * Math.PI) / spokes;

        for (let spoke = 0; spoke < spokes; spoke++) {
          const angle = spoke * angleStep;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);

          nodes.push({
            id: nodeId++,
            x: x,
            y: y,
            connections: [],
            ring: ring,
            spoke: spoke,
          });
        }
      }

      // Connect nodes to form spider web pattern
      nodes.forEach(node => {
        if (node.ring === 0) {
          // Center node: connect to all inner ring nodes
          for (let spoke = 0; spoke < spokes; spoke++) {
            const targetId = 1 + spoke; // Ring 1 nodes start at id 1
            const targetNode = nodes[targetId];
            if (targetNode) {
              const distance = Math.hypot(targetNode.x - node.x, targetNode.y - node.y);
              edges.push({
                from: node.id,
                to: targetId,
                length: distance,
              });
              node.connections.push(targetId);
              targetNode.connections.push(node.id);
            }
          }
        } else if (networkType === 'neural') {
          // Draw neural network neurons
          const layerColors = [
            colors.node, // Input layer
            colors.node.replace(/[\d.]+\)$/g, '0.5)'), // Hidden layers
            colors.glow.replace(/[\d.]+\)$/g, '0.6)'), // Output layer
          ];
          
          const colorIndex = node.layer === 0 ? 0 : (node.layer === neuralLayers - 1 ? 2 : 1);
          const baseColor = layerColors[colorIndex];
          
          // Neuron size varies by layer (larger in middle)
          const sizeFactor = 1 + (0.3 * Math.sin((node.layer / (neuralLayers - 1)) * Math.PI));
          const nodeSize = (glow ? 5 : 3.5) * sizeFactor;
          
          // Draw outer glow for active neurons
          if (glow) {
            const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, nodeSize * 3);
            gradient.addColorStop(0, colors.glow.replace(/[\d.]+\)$/g, '0.6)'));
            gradient.addColorStop(0.5, colors.glow.replace(/[\d.]+\)$/g, '0.3)'));
            gradient.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(node.x, node.y, nodeSize * 3, 0, Math.PI * 2);
            ctx.fill();
            
            // Pulsing ring
            ctx.strokeStyle = colors.glow.replace(/[\d.]+\)$/g, '0.5)');
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(node.x, node.y, nodeSize + 3, 0, Math.PI * 2);
            ctx.stroke();
          }
          
          // Draw neuron body
          ctx.fillStyle = glow ? colors.glow : baseColor;
          ctx.beginPath();
          ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2);
          ctx.fill();
          
          // Inner highlight
          ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
          ctx.beginPath();
          ctx.arc(node.x - nodeSize * 0.3, node.y - nodeSize * 0.3, nodeSize * 0.4, 0, Math.PI * 2);
          ctx.fill();
        } else if (networkType === 'grid') {
          // Draw grid junction nodes
          const junctionSize = glow ? 4 : 3;
          
          // Draw glow for active junctions
          if (glow) {
            const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, junctionSize * 4);
            gradient.addColorStop(0, colors.glow.replace(/[\d.]+\)$/g, '0.8)'));
            gradient.addColorStop(0.5, colors.glow.replace(/[\d.]+\)$/g, '0.4)'));
            gradient.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(node.x, node.y, junctionSize * 4, 0, Math.PI * 2);
            ctx.fill();
            
            // Pulsing square around junction
            ctx.strokeStyle = colors.glow.replace(/[\d.]+\)$/g, '0.6)');
            ctx.lineWidth = 1.5;
            ctx.strokeRect(node.x - junctionSize - 2, node.y - junctionSize - 2, (junctionSize + 2) * 2, (junctionSize + 2) * 2);
          }
          
          // Draw junction point (square for grid aesthetic)
          ctx.fillStyle = glow ? colors.glow : colors.node;
          ctx.fillRect(node.x - junctionSize, node.y - junctionSize, junctionSize * 2, junctionSize * 2);
          
          // Inner highlight
          ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
          ctx.fillRect(node.x - junctionSize * 0.5, node.y - junctionSize * 0.5, junctionSize, junctionSize);
        } else if (networkType === 'constellation') {
          // Draw stars with varying sizes and brightness
          const baseBrightness = node.brightness || 0.7;
          const starSize = (glow ? 5 : 3) * baseBrightness;
          
          // Draw star glow when active
          if (glow) {
            const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, starSize * 6);
            gradient.addColorStop(0, colors.glow.replace(/[\d.]+\)$/g, '0.9)'));
            gradient.addColorStop(0.3, colors.glow.replace(/[\d.]+\)$/g, '0.5)'));
            gradient.addColorStop(0.7, colors.glow.replace(/[\d.]+\)$/g, '0.2)'));
            gradient.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(node.x, node.y, starSize * 6, 0, Math.PI * 2);
            ctx.fill();
          }
          
          // Draw star body (bright center)
          const starGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, starSize);
          if (glow) {
            starGradient.addColorStop(0, '#FFFFFF');
            starGradient.addColorStop(0.3, colors.glow);
            starGradient.addColorStop(1, colors.glow.replace(/[\d.]+\)$/g, '0.5)'));
          } else {
            const opacity = baseBrightness * 0.6;
            starGradient.addColorStop(0, colors.node.replace(/[\d.]+\)$/g, '0.9)'));
            starGradient.addColorStop(0.5, colors.node.replace(/[\d.]+\)$/g, `${opacity})`));
            starGradient.addColorStop(1, colors.node.replace(/[\d.]+\)$/g, '0.2)'));
          }
          ctx.fillStyle = starGradient;
          ctx.beginPath();
          ctx.arc(node.x, node.y, starSize, 0, Math.PI * 2);
          ctx.fill();
          
          // Draw star points (4-point star shape for larger stars)
          if (starSize > 3.5 || glow) {
            ctx.fillStyle = glow ? colors.glow.replace(/[\d.]+\)$/g, '0.6)') : colors.node.replace(/[\d.]+\)$/g, '0.4)');
            const points = 4;
            const outerRadius = starSize * (glow ? 1.8 : 1.5);
            const innerRadius = starSize * 0.6;
            
            ctx.beginPath();
            for (let i = 0; i < points * 2; i++) {
              const angle = (i * Math.PI) / points - Math.PI / 2;
              const radius = i % 2 === 0 ? outerRadius : innerRadius;
              const x = node.x + Math.cos(angle) * radius;
              const y = node.y + Math.sin(angle) * radius;
              if (i === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.fill();
          }
        } else if (networkType === 'mesh') {
          // Draw mesh network nodes (showing redundancy)
          const nodeSize = glow ? 4 : 3;
          const connectionCount = node.connections.length;
          
          // Size varies by number of connections (more connected = larger)
          const sizeFactor = 1 + (connectionCount / 10) * 0.5;
          const finalSize = nodeSize * sizeFactor;
          
          // Draw glow for active nodes
          if (glow) {
            const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, finalSize * 5);
            gradient.addColorStop(0, colors.glow.replace(/[\d.]+\)$/g, '0.8)'));
            gradient.addColorStop(0.5, colors.glow.replace(/[\d.]+\)$/g, '0.4)'));
            gradient.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(node.x, node.y, finalSize * 5, 0, Math.PI * 2);
            ctx.fill();
            
            // Pulsing rings showing mesh connections
            ctx.strokeStyle = colors.glow.replace(/[\d.]+\)$/g, '0.5)');
            ctx.lineWidth = 1.5;
            for (let i = 1; i <= 2; i++) {
              ctx.beginPath();
              ctx.arc(node.x, node.y, finalSize + i * 3, 0, Math.PI * 2);
              ctx.stroke();
            }
          }
          
          // Draw node (circle)
          ctx.fillStyle = glow ? colors.glow : colors.node;
          ctx.beginPath();
          ctx.arc(node.x, node.y, finalSize, 0, Math.PI * 2);
          ctx.fill();
          
          // Draw connection count indicator for highly connected nodes
          if (connectionCount > 5 && !glow) {
            ctx.strokeStyle = colors.node.replace(/[\d.]+\)$/g, '0.6)');
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(node.x, node.y, finalSize + 2, 0, Math.PI * 2);
            ctx.stroke();
          }
        } else {
          // Ring nodes: connect radially inward and circularly
          const currentRingStartId = 1 + spokes * (node.ring - 1);
          const prevRingStartId = node.ring === 1 ? 0 : 1 + spokes * (node.ring - 2);

          // Radial connection to inner ring
          if (node.ring > 1) {
            const innerNodeId = prevRingStartId + node.spoke;
            const innerNode = nodes[innerNodeId];
            if (innerNode && !node.connections.includes(innerNodeId)) {
              const distance = Math.hypot(innerNode.x - node.x, innerNode.y - node.y);
              edges.push({
                from: node.id,
                to: innerNodeId,
                length: distance,
              });
              node.connections.push(innerNodeId);
              innerNode.connections.push(node.id);
            }
          }

          // Circular connections (to adjacent spokes on same ring)
          const nextSpoke = (node.spoke + 1) % spokes;
          const nextNodeId = currentRingStartId + nextSpoke;
          const nextNode = nodes[nextNodeId];
          
          if (nextNode && !node.connections.includes(nextNodeId)) {
            const distance = Math.hypot(nextNode.x - node.x, nextNode.y - node.y);
            edges.push({
              from: node.id,
              to: nextNodeId,
              length: distance,
            });
            node.connections.push(nextNodeId);
            nextNode.connections.push(node.id);
          }
        }
      });

      return { nodes, edges };
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

      if (networkType === 'constellation') {
        // Generate constellation network
        const { nodes, edges } = generateConstellationNetwork(width, height, constellationStars, constellationConnectionDistance);
        networkRef.current = { nodes, edges };
      } else if (networkType === 'mesh') {
        // Generate mesh network
        const { nodes, edges } = generateMeshNetwork(width, height, meshNodeCount, meshConnectionRadius);
        networkRef.current = { nodes, edges };
      } else if (networkType === 'grid') {
        // Generate grid network
        const { nodes, edges } = generateGridNetwork(width, height, gridSpacingX, gridSpacingY);
        networkRef.current = { nodes, edges };
      } else if (networkType === 'neural') {
        // Generate neural network
        const { nodes, edges } = generateNeuralNetwork(width, height, neuralLayers, neuralNodesPerLayer);
        networkRef.current = { nodes, edges };
      } else if (networkType === 'spiderweb') {
        // Generate spider web network
        const { nodes, edges } = generateSpiderWebNetwork(width, height, spiderWebRings, spiderWebSpokes);
        networkRef.current = { nodes, edges };
      } else if (networkType === 'cellular') {
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

      // Draw constellation network
      if (networkType === 'constellation') {
        // Draw constellation lines (elegant, thin)
        ctx.lineWidth = 1;
        edges.forEach(edge => {
          const fromNode = nodes.find(n => n.id === edge.from);
          const toNode = nodes.find(n => n.id === edge.to);
          if (!fromNode || !toNode) return;

          // Elegant thin lines with subtle opacity
          const gradient = ctx.createLinearGradient(fromNode.x, fromNode.y, toNode.x, toNode.y);
          gradient.addColorStop(0, colors.edge.replace(/[\d.]+\)$/g, `${fromNode.brightness * 0.05})`));
          gradient.addColorStop(0.5, colors.edge.replace(/[\d.]+\)$/g, '0.03)'));
          gradient.addColorStop(1, colors.edge.replace(/[\d.]+\)$/g, `${toNode.brightness * 0.05})`));

          ctx.strokeStyle = gradient;
          ctx.beginPath();
          ctx.moveTo(fromNode.x, fromNode.y);
          ctx.lineTo(toNode.x, toNode.y);
          ctx.stroke();
        });
      }

      // Draw mesh network
      else if (networkType === 'mesh') {
        // Draw edges with opacity based on length
        ctx.lineWidth = 1;
        edges.forEach(edge => {
          const fromNode = nodes.find(n => n.id === edge.from);
          const toNode = nodes.find(n => n.id === edge.to);
          if (!fromNode || !toNode) return;

          // Vary opacity based on connection length (closer = more opaque)
          const maxDist = meshConnectionRadius;
          const opacity = 0.15 * (1 - edge.length / maxDist * 0.5);
          const edgeColorWithOpacity = colors.edge.replace(/[\d.]+\)$/g, `${opacity})`);

          ctx.strokeStyle = edgeColorWithOpacity;
          ctx.beginPath();
          ctx.moveTo(fromNode.x, fromNode.y);
          ctx.lineTo(toNode.x, toNode.y);
          ctx.stroke();
        });
      }

      // Draw grid network
      else if (networkType === 'grid') {
        // Draw grid lines
        ctx.lineWidth = 1.5;
        edges.forEach(edge => {
          const fromNode = nodes.find(n => n.id === edge.from);
          const toNode = nodes.find(n => n.id === edge.to);
          if (!fromNode || !toNode) return;

          ctx.strokeStyle = colors.edge;
          ctx.beginPath();
          ctx.moveTo(fromNode.x, fromNode.y);
          ctx.lineTo(toNode.x, toNode.y);
          ctx.stroke();
        });
      }

      // Draw neural network
      else if (networkType === 'neural') {
        // Draw edges with gradient and varying opacity
        edges.forEach(edge => {
          const fromNode = nodes.find(n => n.id === edge.from);
          const toNode = nodes.find(n => n.id === edge.to);
          if (!fromNode || !toNode) return;

          // Create gradient for synaptic connection
          const gradient = ctx.createLinearGradient(fromNode.x, fromNode.y, toNode.x, toNode.y);
          gradient.addColorStop(0, colors.edge);
          gradient.addColorStop(1, colors.edge.replace(/[\d.]+\)$/g, '0.01)'));

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(fromNode.x, fromNode.y);
          ctx.lineTo(toNode.x, toNode.y);
          ctx.stroke();
        });
      }

      // Draw spider web pattern
      else if (networkType === 'spiderweb') {
        // Draw edges with varying thickness (thicker toward center)
        edges.forEach(edge => {
          const fromNode = nodes.find(n => n.id === edge.from);
          const toNode = nodes.find(n => n.id === edge.to);
          if (!fromNode || !toNode) return;

          // Calculate line thickness based on rings (thicker closer to center)
          const avgRing = (fromNode.ring + toNode.ring) / 2;
          const maxRing = spiderWebRings;
          const thickness = 2.5 - (avgRing / maxRing) * 1.5; // 2.5px to 1px
          
          // Vary opacity (more opaque toward center)
          const opacity = 0.04 - (avgRing / maxRing) * 0.015;
          const edgeColorWithOpacity = colors.edge.replace(/[\d.]+\)$/g, `${opacity})`);

          ctx.strokeStyle = edgeColorWithOpacity;
          ctx.lineWidth = thickness;
          ctx.beginPath();
          ctx.moveTo(fromNode.x, fromNode.y);
          ctx.lineTo(toNode.x, toNode.y);
          ctx.stroke();
        });
      }

      // Draw hexagonal cells if cellular network
      else if (networkType === 'cellular') {
        // Draw cell coverage areas with gradient
        nodes.forEach(node => {
          // Draw coverage circle with gradient fade
          const coverageRadius = cellSize * 0.95;
          const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, coverageRadius);
          gradient.addColorStop(0, colors.edge.replace(/[\d.]+\)$/g, '0.02)'));
          gradient.addColorStop(0.5, colors.edge.replace(/[\d.]+\)$/g, '0.01)'));
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(node.x, node.y, coverageRadius, 0, Math.PI * 2);
          ctx.fill();
        });
        
        // Draw hexagon cell boundaries
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = colors.edge.replace(/[\d.]+\)$/g, '0.05)');
        nodes.forEach(node => {
          drawHexagon(node.x, node.y, cellSize * 0.87, colors.edge.replace(/[\d.]+\)$/g, '0.05)'));
        });
        
        // Draw tower interconnections (lighter dashed lines)
        ctx.strokeStyle = colors.edge.replace(/[\d.]+\)$/g, '0.02)');
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 5]);
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
          const towerHeight = glow ? 12 : 10;
          const towerWidth = glow ? 7 : 6;
          const towerBase = glow ? 4 : 3;
          
          // Tower mast (vertical line)
          ctx.strokeStyle = glow ? colors.glow : colors.node;
          ctx.lineWidth = glow ? 2.5 : 2;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(node.x, node.y + towerBase);
          ctx.lineTo(node.x, node.y - towerHeight);
          ctx.stroke();
          
          // Tower base (small rectangle)
          ctx.fillStyle = glow ? colors.glow.replace(/[\d.]+\)$/g, '0.9)') : colors.node;
          ctx.fillRect(node.x - towerBase, node.y, towerBase * 2, towerBase);
          
          // Antenna triangles (left and right)
          ctx.fillStyle = glow ? colors.glow.replace(/[\d.]+\)$/g, '0.8)') : colors.node.replace(/[\d.]+\)$/g, '0.7)');
          
          // Left antenna
          ctx.beginPath();
          ctx.moveTo(node.x, node.y - towerHeight + 2);
          ctx.lineTo(node.x - towerWidth / 2, node.y - towerHeight / 2);
          ctx.lineTo(node.x, node.y - towerHeight / 2 + 1);
          ctx.closePath();
          ctx.fill();
          
          // Right antenna
          ctx.beginPath();
          ctx.moveTo(node.x, node.y - towerHeight + 2);
          ctx.lineTo(node.x + towerWidth / 2, node.y - towerHeight / 2);
          ctx.lineTo(node.x, node.y - towerHeight / 2 + 1);
          ctx.closePath();
          ctx.fill();
          
          // Signal waves when active
          if (glow) {
            ctx.strokeStyle = colors.glow.replace(/[\d.]+\)$/g, '0.5)');
            ctx.lineWidth = 1.5;
            ctx.setLineDash([]);
            
            // Draw 3 signal arcs
            for (let i = 1; i <= 3; i++) {
              const radius = towerWidth + i * 4;
              const startAngle = -Math.PI * 0.6;
              const endAngle = -Math.PI * 0.4;
              
              ctx.globalAlpha = 0.6 - (i * 0.15);
              ctx.beginPath();
              ctx.arc(node.x, node.y - towerHeight / 2, radius, startAngle, endAngle);
              ctx.stroke();
            }
            ctx.globalAlpha = 1;
          }
          
          // Top light
          if (glow) {
            ctx.fillStyle = colors.glow;
            ctx.beginPath();
            ctx.arc(node.x, node.y - towerHeight, 2, 0, Math.PI * 2);
            ctx.fill();
          }
        } else if (networkType === 'spiderweb') {
          // Draw spider web nodes
          const isCenter = node.ring === 0;
          const nodeSize = isCenter ? (glow ? 6 : 5) : (glow ? 3.5 : 2.5);
          
          // Draw node with gradient if center
          if (isCenter) {
            const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, nodeSize * 2);
            gradient.addColorStop(0, glow ? colors.glow : colors.node);
            gradient.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(node.x, node.y, nodeSize * 2, 0, Math.PI * 2);
            ctx.fill();
          }
          
          // Draw node circle
          ctx.fillStyle = glow ? colors.glow.replace(/[\d.]+\)$/g, '0.9)') : colors.node;
          ctx.beginPath();
          ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2);
          ctx.fill();
          
          // Add ring around glowing nodes
          if (glow && !isCenter) {
            ctx.strokeStyle = colors.glow.replace(/[\d.]+\)$/g, '0.5)');
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(node.x, node.y, nodeSize + 2, 0, Math.PI * 2);
            ctx.stroke();
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
    spiderWebRings,
    spiderWebSpokes,
    neuralLayers,
    neuralNodesPerLayer,
    gridSpacingX,
    gridSpacingY,
    meshNodeCount,
    meshConnectionRadius,
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

  // Use NetworkBackground for particleNetwork type
  if (networkType === 'particleNetwork') {
    return (
      <NetworkBackground
        particleCount={particleCount}
        connectionDistance={connectionDistance}
        particleSpeed={particleSpeed}
        enableParallax={enableParallax}
        particleSize={particleSize}
        glowIntensity={glowIntensity}
      />
    );
  }

  // Use NetworkBackgroundPremium for premiumParticle type
  if (networkType === 'premiumParticle') {
    return (
      <NetworkBackgroundPremium
        particleCount={particleCount}
        particleSizeRange={particleSizeRange}
        connectionDistance={connectionDistance}
        speedFactor={speedFactor}
        enableParallax={enableParallax}
        enablePulse={enablePulse}
      />
    );
  }

  // Use ParticleWaveBackground for particleWave type (canvas-based dense nano particles)
  if (networkType === 'particleWave') {
    return (
      <ParticleWaveBackground
        particleDensity={particleDensity}
        particleColor={particleColor}
        linkColor={linkColor}
        linkDistance={linkDistance}
        particleSpeed={particleSpeed}
        waveAmplitude={waveAmplitude}
      />
    );
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
        zIndex: zIndex,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  );
};

export default TelecomPacketAnimation;
