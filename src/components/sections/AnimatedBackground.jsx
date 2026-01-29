import React from 'react';

export function AnimatedBackground({ disabled = false }) {
  if (disabled) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <style>{`
        @keyframes waveFlow1 {
          0% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-15px) translateX(10px); }
          50% { transform: translateY(0) translateX(0); }
          75% { transform: translateY(15px) translateX(-10px); }
          100% { transform: translateY(0) translateX(0); }
        }
        
        @keyframes waveFlow2 {
          0% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(10px) translateX(-15px); }
          50% { transform: translateY(0) translateX(0); }
          75% { transform: translateY(-10px) translateX(15px); }
          100% { transform: translateY(0) translateX(0); }
        }
        
        @keyframes waveFlow3 {
          0% { transform: translateY(0) scaleY(1); }
          25% { transform: translateY(-20px) scaleY(1.1); }
          50% { transform: translateY(0) scaleY(1); }
          75% { transform: translateY(20px) scaleY(0.95); }
          100% { transform: translateY(0) scaleY(1); }
        }
        
        @keyframes shimmer {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        
        @keyframes rotatePattern {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .wave-saffron {
          animation: waveFlow1 8s ease-in-out infinite;
        }
        
        .wave-green {
          animation: waveFlow2 10s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .wave-white {
          animation: waveFlow3 12s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .shimmer-effect {
          animation: shimmer 6s ease-in-out infinite;
        }
        
        .rotate-slow {
          animation: rotatePattern 40s linear infinite;
        }
      `}</style>

      {/* Base light background */}
      <div className="absolute inset-0 bg-white" />

      {/* Horizontal flag-like stripes - Saffron top */}
      <div
        className="absolute wave-saffron shimmer-effect"
        style={{
          width: '100%',
          height: '33.33%',
          top: '0',
          left: '0',
          background: 'linear-gradient(180deg, rgba(255, 153, 51, 0.15) 0%, rgba(255, 153, 51, 0.08) 100%)',
        }}
      />

      {/* Horizontal flag-like stripes - White middle */}
      <div
        className="absolute wave-white"
        style={{
          width: '100%',
          height: '33.33%',
          top: '33.33%',
          left: '0',
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0) 100%)',
        }}
      />

      {/* Horizontal flag-like stripes - Green bottom */}
      <div
        className="absolute wave-green shimmer-effect"
        style={{
          width: '100%',
          height: '33.33%',
          top: '66.66%',
          left: '0',
          background: 'linear-gradient(180deg, rgba(19, 136, 8, 0.08) 0%, rgba(19, 136, 8, 0.15) 100%)',
        }}
      />

      {/* Saffron flowing wave - top left */}
      <div
        className="absolute wave-saffron shimmer-effect"
        style={{
          width: '150%',
          height: '150%',
          top: '-25%',
          left: '-10%',
          background: 'linear-gradient(135deg, rgba(255, 153, 51, 0.2) 0%, rgba(255, 179, 102, 0.1) 30%, transparent 70%)',
          borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
        }}
      />

      {/* Saffron flowing wave - bottom right */}
      <div
        className="absolute wave-saffron shimmer-effect"
        style={{
          width: '140%',
          height: '140%',
          bottom: '-20%',
          right: '-15%',
          background: 'radial-gradient(ellipse 600px 400px, rgba(255, 153, 51, 0.15) 0%, transparent 60%)',
          borderRadius: '50% 40% 50% 60% / 50% 50% 40% 50%',
          animationDelay: '3s',
        }}
      />

      {/* Green flowing wave - top right */}
      <div
        className="absolute wave-green shimmer-effect"
        style={{
          width: '160%',
          height: '160%',
          top: '-30%',
          right: '-20%',
          background: 'linear-gradient(225deg, rgba(19, 136, 8, 0.15) 0%, rgba(76, 175, 80, 0.08) 40%, transparent 75%)',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        }}
      />

      {/* Green flowing wave - bottom left */}
      <div
        className="absolute wave-green shimmer-effect"
        style={{
          width: '130%',
          height: '130%',
          bottom: '-15%',
          left: '-10%',
          background: 'radial-gradient(ellipse 550px 450px, rgba(19, 136, 8, 0.12) 0%, transparent 65%)',
          borderRadius: '40% 60% 40% 60% / 50% 40% 60% 50%',
          animationDelay: '2s',
        }}
      />

      {/* White flowing wave - center */}
      <div
        className="absolute wave-white"
        style={{
          width: '120%',
          height: '120%',
          top: '10%',
          left: '15%',
          background: 'radial-gradient(ellipse 700px 500px, rgba(255, 255, 255, 0.3) 0%, transparent 60%)',
          borderRadius: '45% 55% 52% 48% / 48% 45% 55% 52%',
        }}
      />

      {/* Taj Mahal silhouette - background right - TRANSPARENT */}
      <svg
        className="absolute opacity-30 pointer-events-none"
        style={{
          right: '5%',
          bottom: '-5%',
          width: '500px',
          height: '450px',
        }}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Taj Mahal dome and structure */}
        <defs>
          <linearGradient id="tajGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgba(100, 120, 140, 0.4)' }} />
            <stop offset="100%" style={{ stopColor: 'rgba(80, 100, 120, 0.2)' }} />
          </linearGradient>
        </defs>
        {/* Main structure */}
        <path
          d="M100 30 Q115 40 115 60 L115 90 Q120 85 135 90 L135 130 Q120 125 115 130 L115 160 L85 160 L85 130 Q80 125 65 130 L65 90 Q80 85 85 90 L85 60 Q85 40 100 30 Z"
          fill="rgba(100, 120, 140, 0.3)"
          stroke="rgba(100, 120, 140, 0.4)"
          strokeWidth="1"
        />
        {/* Dome */}
        <ellipse cx="100" cy="35" rx="20" ry="15" fill="rgba(120, 140, 160, 0.3)" />
        {/* Minarets */}
        <rect x="50" y="140" width="8" height="40" fill="rgba(100, 120, 140, 0.25)" />
        <rect x="142" y="140" width="8" height="40" fill="rgba(100, 120, 140, 0.25)" />
        {/* Base platform */}
        <rect x="70" y="160" width="60" height="20" fill="rgba(100, 120, 140, 0.2)" rx="2" />
      </svg>

      {/* India Gate silhouette - background left - TRANSPARENT */}
      <svg
        className="absolute opacity-30 pointer-events-none"
        style={{
          left: '-5%',
          bottom: '5%',
          width: '450px',
          height: '400px',
        }}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* India Gate arch structure */}
        <defs>
          <linearGradient id="gateGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgba(100, 120, 140, 0.4)' }} />
            <stop offset="100%" style={{ stopColor: 'rgba(80, 100, 120, 0.2)' }} />
          </linearGradient>
        </defs>
        {/* Main arch */}
        <path
          d="M60 120 Q60 70 100 55 Q140 70 140 120"
          stroke="rgba(100, 120, 140, 0.3)"
          strokeWidth="3"
          fill="none"
        />
        {/* Support pillars */}
        <rect x="55" y="115" width="10" height="65" fill="rgba(100, 120, 140, 0.25)" />
        <rect x="75" y="120" width="8" height="60" fill="rgba(100, 120, 140, 0.2)" />
        <rect x="117" y="120" width="8" height="60" fill="rgba(100, 120, 140, 0.2)" />
        <rect x="135" y="115" width="10" height="65" fill="rgba(100, 120, 140, 0.25)" />
        {/* Arch details */}
        <circle cx="100" cy="70" r="2" fill="rgba(100, 120, 140, 0.25)" />
        <circle cx="85" cy="80" r="2" fill="rgba(100, 120, 140, 0.25)" />
        <circle cx="115" cy="80" r="2" fill="rgba(100, 120, 140, 0.25)" />
        {/* Base platform */}
        <rect x="50" y="175" width="100" height="15" fill="rgba(100, 120, 140, 0.2)" rx="2" />
      </svg>

      {/* Ashoka Chakra inspired circular pattern - subtle */}
      <div
        className="absolute rotate-slow"
        style={{
          width: '300px',
          height: '300px',
          top: '20%',
          right: '15%',
          background: `
            radial-gradient(circle at center, transparent 25%, rgba(19, 136, 8, 0.1) 26%, rgba(19, 136, 8, 0.1) 30%, transparent 31%),
            radial-gradient(circle at center, transparent 40%, rgba(19, 136, 8, 0.08) 41%, rgba(19, 136, 8, 0.08) 45%, transparent 46%)
          `,
          opacity: 0.6,
        }}
      />

      {/* Indian temple pattern - subtle geometric */}
      <div
        className="absolute"
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: `
            linear-gradient(90deg, rgba(255, 153, 51, 0.03) 1px, transparent 1px),
            linear-gradient(0deg, rgba(19, 136, 8, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          opacity: 0.5,
        }}
      />

      {/* Gradient blend overlay - light */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 250, 245, 0.2) 50%, rgba(245, 245, 245, 0.1) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Top vignette for text readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.6) 0%, transparent 60%)',
        }}
      />
    </div>
  );
}

export default AnimatedBackground;
