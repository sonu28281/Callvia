import React from 'react';

export function Logo({ 
  size = 'md',
  className = '',
  showText = true,
  href = '/',
}) {
  const sizes = {
    sm: { box: '20px', text: 'text-base', icon: 'text-sm' },
    md: { box: '24px', text: 'text-lg', icon: 'text-base' },
    lg: { box: '32px', text: 'text-xl', icon: 'text-lg' },
  };

  const sizeConfig = sizes[size] || sizes.md;

  const content = (
    <div className={`flex items-center gap-2 ${className}`}>
      <div
        className="bg-primary rounded-md flex items-center justify-center text-white font-bold"
        style={{ width: sizeConfig.box, height: sizeConfig.box }}
      >
        <span className={sizeConfig.icon}>C</span>
      </div>
      {showText && (
        <span className={`${sizeConfig.text} font-semibold text-text`}>
          Callvia
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="text-decoration-none">
        {content}
      </a>
    );
  }

  return content;
}

export default Logo;
