import React from 'react';

interface LogoProps {
  className?: string;
  isAcademy?: boolean;
}

export const Logo = ({ className = "", isAcademy = false }: LogoProps) => {
  const brandColorClass = isAcademy ? "text-brand-purple" : "text-brand-green-dark";
  const subText = isAcademy ? "ACADEMY" : "GESTÃO PARA DENTISTAS";

  return (
    <div className={`flex flex-col leading-none ${className}`}>
      <span className={`text-xl md:text-2xl font-black tracking-tight ${brandColorClass}`}>
        ODONTOHUB
      </span>
      <span className={`text-[6px] md:text-[8px] font-medium tracking-[0.25em] mt-1 opacity-70 ${brandColorClass}`}>
        {subText}
      </span>
    </div>
  );
};
