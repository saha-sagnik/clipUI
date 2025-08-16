import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

export default function LogoFavicon({ size = 32, className = "" }: LogoProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background with gradient */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#8b5cf6' }} />
          <stop offset="100%" style={{ stopColor: '#3b82f6' }} />
        </linearGradient>
      </defs>
      
      {/* Rounded rectangle background */}
      <rect 
        x="2" 
        y="2" 
        width="28" 
        height="28" 
        rx="6" 
        fill="url(#logoGradient)"
      />
      
      {/* Letter "C" */}
      <text 
        x="16" 
        y="22" 
        textAnchor="middle" 
        fill="white" 
        fontSize="18" 
        fontWeight="bold"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        C
      </text>
    </svg>
  );
}
