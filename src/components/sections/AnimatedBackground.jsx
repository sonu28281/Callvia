import React from 'react';

export function AnimatedBackground({ disabled = false }) {
  if (disabled) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Subtle saffron gradient - desaturated */}
      <div
        className="absolute inset-0 pointer-events-none animate-wave"
        style={{
          background: 'radial-gradient(ellipse 900px 700px at 50% -10%, rgba(255, 153, 51, 0.06) 0%, transparent 70%)',
          animationDelay: '0s',
        }}
      />
      {/* Soft green accent - very desaturated */}
      <div
        className="absolute inset-0 pointer-events-none animate-wave"
        style={{
          background: 'radial-gradient(ellipse 800px 600px at 30% 80%, rgba(76, 175, 80, 0.04) 0%, transparent 70%)',
          animationDelay: '2s',
        }}
      />
      {/* White overlay for brightness */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, transparent 80%)',
      }} />
    </div>
  );
}

export default AnimatedBackground;
