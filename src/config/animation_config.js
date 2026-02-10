import siteConfig from './site_config.json';

// Animation presets for different types
const animationPresets = {
  // Original organic network animation
  organic: {
    networkType: 'organic',
    nodeCount: 35,
    maxConnectionsPerNode: 3,
    packetSpawnRate: 0.5,
    maxActivePackets: 6,
    packetSpeedMin: 30,
    packetSpeedMax: 70,
    tailLengthMin: 40,
    tailLengthMax: 90,
    dropProbability: 0.15,
    nodeGlowDuration: 600,
    nodeGlowIntensity: 1.0,
    edgeColor: 'rgba(29, 108, 244, 0.06)',
    nodeColor: 'rgba(29, 108, 244, 0.25)',
    packetColor: 'rgba(29, 108, 244, 0.8)',
    glowColor: 'rgba(29, 108, 244, 1)',
    darkModeEdgeColor: 'rgba(99, 102, 241, 0.1)',
    darkModeNodeColor: 'rgba(99, 102, 241, 0.35)',
    darkModePacketColor: 'rgba(99, 102, 241, 0.9)',
    darkModeGlowColor: 'rgba(99, 102, 241, 1)',
  },

  // Cellular/hexagonal network animation
  cellular: {
    networkType: 'cellular',
    cellSize: 80,
    packetSpawnRate: 0.7,
    maxActivePackets: 10,
    packetSpeedMin: 50,
    packetSpeedMax: 90,
    tailLengthMin: 35,
    tailLengthMax: 75,
    dropProbability: 0.08,
    nodeGlowDuration: 700,
    nodeGlowIntensity: 1.3,
    edgeColor: 'rgba(29, 108, 244, 0.15)',
    nodeColor: 'rgba(29, 108, 244, 0.45)',
    packetColor: 'rgba(252, 150, 42, 0.9)', // Saffron color
    glowColor: 'rgba(252, 150, 42, 1)',
    darkModeEdgeColor: 'rgba(99, 102, 241, 0.18)',
    darkModeNodeColor: 'rgba(99, 102, 241, 0.5)',
    darkModePacketColor: 'rgba(252, 150, 42, 0.95)', // Saffron color
    darkModeGlowColor: 'rgba(252, 150, 42, 1)',
  },

  // Spider web radial network animation
  spiderweb: {
    networkType: 'spiderweb',
    spiderWebRings: 6,
    spiderWebSpokes: 16,
    packetSpawnRate: 0.8,
    maxActivePackets: 12,
    packetSpeedMin: 40,
    packetSpeedMax: 85,
    tailLengthMin: 40,
    tailLengthMax: 85,
    dropProbability: 0.12,
    nodeGlowDuration: 650,
    nodeGlowIntensity: 1.4,
    edgeColor: 'rgba(29, 108, 244, 0.12)',
    nodeColor: 'rgba(29, 108, 244, 0.4)',
    packetColor: 'rgba(252, 150, 42, 0.85)', // Saffron color
    glowColor: 'rgba(252, 150, 42, 1)',
    darkModeEdgeColor: 'rgba(99, 102, 241, 0.15)',
    darkModeNodeColor: 'rgba(99, 102, 241, 0.45)',
    darkModePacketColor: 'rgba(252, 150, 42, 0.9)', // Saffron color
    darkModeGlowColor: 'rgba(252, 150, 42, 1)',
  },

  // Neural network / AI brain animation
  neural: {
    networkType: 'neural',
    neuralLayers: 5,
    neuralNodesPerLayer: [10, 16, 20, 16, 10],
    packetSpawnRate: 0.9,
    maxActivePackets: 15,
    packetSpeedMin: 50,
    packetSpeedMax: 100,
    tailLengthMin: 30,
    tailLengthMax: 70,
    dropProbability: 0.05,
    nodeGlowDuration: 600,
    nodeGlowIntensity: 1.5,
    edgeColor: 'rgba(29, 108, 244, 0.08)',
    nodeColor: 'rgba(29, 108, 244, 0.35)',
    packetColor: 'rgba(252, 150, 42, 0.9)', // Saffron color
    glowColor: 'rgba(252, 150, 42, 1)',
    darkModeEdgeColor: 'rgba(99, 102, 241, 0.12)',
    darkModeNodeColor: 'rgba(99, 102, 241, 0.4)',
    darkModePacketColor: 'rgba(252, 150, 42, 0.95)', // Saffron color
    darkModeGlowColor: 'rgba(252, 150, 42, 1)',
  },

  // Grid network / power grid / circuit board animation
  grid: {
    networkType: 'grid',
    gridSpacingX: 90,
    gridSpacingY: 75,
    packetSpawnRate: 0.7,
    maxActivePackets: 12,
    packetSpeedMin: 45,
    packetSpeedMax: 90,
    tailLengthMin: 35,
    tailLengthMax: 75,
    dropProbability: 0.1,
    nodeGlowDuration: 550,
    nodeGlowIntensity: 1.3,
    edgeColor: 'rgba(29, 108, 244, 0.12)',
    nodeColor: 'rgba(29, 108, 244, 0.4)',
    packetColor: 'rgba(252, 150, 42, 0.9)', // Saffron color
    glowColor: 'rgba(252, 150, 42, 1)',
    darkModeEdgeColor: 'rgba(99, 102, 241, 0.15)',
    darkModeNodeColor: 'rgba(99, 102, 241, 0.45)',
    darkModePacketColor: 'rgba(252, 150, 42, 0.95)', // Saffron color
    darkModeGlowColor: 'rgba(252, 150, 42, 1)',
  },

  // Mesh network / dense interconnected network animation
  mesh: {
    networkType: 'mesh',
    meshNodeCount: 45,
    meshConnectionRadius: 180,
    packetSpawnRate: 0.85,
    maxActivePackets: 14,
    packetSpeedMin: 45,
    packetSpeedMax: 95,
    tailLengthMin: 35,
    tailLengthMax: 80,
    dropProbability: 0.08,
    nodeGlowDuration: 600,
    nodeGlowIntensity: 1.4,
    edgeColor: 'rgba(29, 108, 244, 0.10)',
    nodeColor: 'rgba(29, 108, 244, 0.38)',
    packetColor: 'rgba(252, 150, 42, 0.9)', // Saffron color
    glowColor: 'rgba(252, 150, 42, 1)',
    darkModeEdgeColor: 'rgba(99, 102, 241, 0.13)',
    darkModeNodeColor: 'rgba(99, 102, 241, 0.42)',
    darkModePacketColor: 'rgba(252, 150, 42, 0.95)', // Saffron color
    darkModeGlowColor: 'rgba(252, 150, 42, 1)',
  },

  // Constellation / star field animation
  constellation: {
    networkType: 'constellation',
    constellationStars: 35,
    constellationConnectionDistance: 250,
    packetSpawnRate: 0.4,
    maxActivePackets: 8,
    packetSpeedMin: 35,
    packetSpeedMax: 75,
    tailLengthMin: 50,
    tailLengthMax: 100,
    dropProbability: 0.18,
    nodeGlowDuration: 800,
    nodeGlowIntensity: 1.6,
    edgeColor: 'rgba(29, 108, 244, 0.06)',
    nodeColor: 'rgba(29, 108, 244, 0.3)',
    packetColor: 'rgba(252, 150, 42, 0.85)', // Saffron color
    glowColor: 'rgba(252, 150, 42, 1)',
    darkModeEdgeColor: 'rgba(99, 102, 241, 0.08)',
    darkModeNodeColor: 'rgba(99, 102, 241, 0.35)',
    darkModePacketColor: 'rgba(252, 150, 42, 0.9)', // Saffron color
    darkModeGlowColor: 'rgba(252, 150, 42, 1)',
  },
};

// Get current animation configuration from site config
export const getAnimationConfig = () => {
  const animationType = siteConfig.animation?.type || 'organic';
  return {
    ...animationPresets[animationType],
    zIndex: 1,
  };
};

// Export presets for reference
export const availableAnimationTypes = Object.keys(animationPresets);

export default getAnimationConfig;
