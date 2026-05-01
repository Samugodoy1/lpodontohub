import React from 'react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}: { 
  children: React.ReactNode, 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'purple', 
  className?: string 
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const variants = {
    primary: 'bg-brand-green text-white hover:bg-brand-green/90 shadow-lg shadow-brand-green/20 active:scale-95',
    secondary: 'bg-brand-green-dark text-white hover:bg-brand-green-dark/90 active:scale-95',
    purple: 'bg-brand-purple text-white hover:bg-brand-purple/90 shadow-lg shadow-brand-purple/20 active:scale-95',
    outline: 'border border-brand-border bg-white text-brand-text hover:bg-brand-bg-alt active:scale-95',
    ghost: 'text-brand-text-muted hover:text-brand-green transition-colors'
  };

  return (
    <button 
      className={`px-5 py-4 md:px-6 md:py-3.5 rounded-2xl font-bold transition-all duration-200 disabled:opacity-50 text-base md:text-sm ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const Section = ({ 
  children, 
  className = '', 
  id = '' 
}: { 
  children: React.ReactNode, 
  className?: string, 
  id?: string 
}) => (
  <section id={id} className={`py-16 md:py-32 px-5 md:px-6 scroll-mt-20 md:scroll-mt-24 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

export const SectionHeader = ({ 
  title, 
  subtitle, 
  centered = true,
  titleClassName = ''
}: { 
  title: string, 
  subtitle?: string, 
  centered?: boolean,
  titleClassName?: string
}) => (
  <div className={`mb-12 md:mb-20 ${centered ? 'text-center' : 'text-left'}`}>
    <h2 className={`text-3xl md:text-5xl font-bold tracking-tight text-brand-text mb-5 md:mb-6 leading-tight ${titleClassName}`}>
      {title}
    </h2>
    {subtitle && (
      <p className="text-base md:text-lg text-brand-text/80 max-w-2xl mx-auto leading-relaxed font-medium">
        {subtitle}
      </p>
    )}
  </div>
);
