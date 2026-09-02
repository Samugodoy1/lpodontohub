import React from 'react';

interface LogoProps {
  className?: string;
  isAcademy?: boolean;
  inverted?: boolean;
}

export const Logo = ({ className = '', isAcademy = false, inverted = false }: LogoProps) => {
  const color = inverted ? 'text-white' : 'text-apple-ink';

  return (
    <div className={`flex items-baseline gap-1.5 leading-none ${className}`}>
      <span className={`text-[19px] md:text-[21px] font-semibold tracking-tight ${color}`}>
        OdontoHub
      </span>
      {isAcademy && (
        <span
          className={`text-[11px] font-normal tracking-tight ${inverted ? 'text-white/60' : ''}`}
          style={inverted ? undefined : { color: 'var(--neo)' }}
        >
          Academy
        </span>
      )}
    </div>
  );
};
