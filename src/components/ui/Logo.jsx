import React from 'react';

export function Logo({ 
  size = 'md',
  className = '',
  showText = true,
  href = '/',
}) {
  const sizes = {
    sm: { width: '40px', height: '40px', text: 'text-base' },
    md: { width: '52px', height: '52px', text: 'text-xl' },
    lg: { width: '64px', height: '64px', text: 'text-2xl' },
  };

  const sizeConfig = sizes[size] || sizes.md;

  const content = (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/logo.png"
        alt="Callvia Logo"
        style={{ width: sizeConfig.width, height: sizeConfig.height }}
        className="object-contain"
      />
      {showText && (
        <span className={`${sizeConfig.text} font-bold text-brand-text`}>
          Callvia
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="no-underline">
        {content}
      </a>
    );
  }

  return content;
}

export default Logo;
