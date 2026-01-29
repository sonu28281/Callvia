import React from 'react';

export function AnimatedBackground({ disabled = false }) {
  if (disabled) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-animated animate-wave" />
      <div
        className="absolute inset-0 pointer-events-none animate-wave"
        style={{
          background: 'radial-gradient(ellipse 800px 600px at 50% -20%, rgba(255, 167, 38, 0.08) 0%, transparent 70%)',
          animationDelay: '2s',
        }}
      />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, transparent 70%)',
      }} />
    </div>
  );
}

export default AnimatedBackground;
