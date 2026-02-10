# Animation Configuration Guide

## Overview
The website now uses a centralized animation configuration system that allows you to easily switch between different animation styles across all pages from a single location.

## How to Change Animation Type

### Quick Change
Edit `/workspaces/Callvia/src/config/site_config.json`:

```json
{
  "animation": {
    "type": "organic"    // Change this value
  }
}
```

### Available Animation Types

#### 1. `"organic"` - Original Network Animation
- Natural, organic node placement using Poisson disk sampling
- 35 nodes with 1-3 random connections each
- Blue/purple theme
- Subtle, flowing packet movement
- **Use when:** You want a more abstract, artistic network visualization

#### 2. `"cellular"` - Hexagonal Cell Network (Current)
- Hexagonal cell grid pattern (like real cellular networks)
- Even distribution across entire canvas
- Cell towers with signal animations
- Saffron-colored packets (#FC962A)
- 80px cell size for good visibility
- **Use when:** You want to emphasize telecom infrastructure and cellular technology

## Configuration Details

All animation presets are defined in:
```
/workspaces/Callvia/src/config/animation_config.js
```

### Adding New Animation Types

1. Open `src/config/animation_config.js`
2. Add a new preset to the `animationPresets` object:

```javascript
const animationPresets = {
  organic: { /* ... existing ... */ },
  cellular: { /* ... existing ... */ },
  
  // Your new animation type
  mynewtype: {
    networkType: 'organic', // or 'cellular'
    cellSize: 100,          // for cellular type
    nodeCount: 50,          // for organic type
    packetSpawnRate: 0.8,
    maxActivePackets: 12,
    packetSpeedMin: 60,
    packetSpeedMax: 120,
    // ... other properties
    packetColor: 'rgba(255, 100, 100, 0.9)', // Custom colors
    glowColor: 'rgba(255, 100, 100, 1)',
    // ... etc
  },
};
```

3. Update `site_config.json` to use your new type:
```json
{
  "animation": {
    "type": "mynewtype"
  }
}
```

### Customizing Existing Presets

Edit the values in `animation_config.js` for the preset you want to modify:

**Key Properties:**
- `networkType`: `'organic'` or `'cellular'`
- `cellSize`: Size of hexagonal cells (cellular only)
- `nodeCount`: Number of nodes (organic only)
- `packetSpawnRate`: Packets per second (0.1 - 2.0)
- `maxActivePackets`: Maximum packets visible at once
- `packetSpeedMin/Max`: Movement speed in pixels/second
- `tailLengthMin/Max`: Trail length behind packets
- `dropProbability`: Chance packet disconnects (0.0 - 1.0)
- `edgeColor`: Network lines color
- `nodeColor`: Tower/node color
- `packetColor`: Moving data packet color
- `glowColor`: Glow when packet arrives at tower

## Pages Using Animation

All 12 pages now use the centralized configuration:

**Products:**
- SIP Trunks
- DID Numbers
- Call Recording
- Predictive Dialer
- WhatsApp Automation
- AI Transcription
- AI Voice Agents

**Solutions:**
- CallFlo Suite
- CallFlo Desk AI
- Partners

**Other:**
- Home
- Contact

## Testing Changes

1. Edit `site_config.json` to change animation type
2. Save the file
3. Refresh your browser (Vite will hot-reload)
4. Navigate to any page to see the new animation

No need to restart the dev server!

## Color Reference

**Theme Colors:**
- Primary Blue: `#1D6CF4` / `rgba(29, 108, 244, ...)`
- Saffron/Premium: `#FC962A` / `rgba(252, 150, 42, ...)`
- Purple (Dark mode): `#6366F1` / `rgba(99, 102, 241, ...)`
- Secondary Pink: `#DF0C82`
- Info Cyan: `#06ACFD`
- Success Green: `#1DBE7A`

## Troubleshooting

**Animation not updating?**
- Clear browser cache
- Hard refresh (Ctrl/Cmd + Shift + R)
- Check browser console for errors

**Want different animations per page?**
- Currently set up for consistency across all pages
- Can be modified to allow per-page overrides if needed

**Performance issues?**
- Reduce `maxActivePackets`
- Reduce `packetSpawnRate`
- Increase `cellSize` (cellular) or reduce `nodeCount` (organic)
