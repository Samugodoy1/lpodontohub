import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'academy';
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const variants = {
    primary: 'bg-[#0071e3] text-white hover:bg-[#0077ed]',
    secondary: 'bg-[#1d1d1f] text-white hover:bg-black',
    academy: 'bg-[#0071e3] text-white hover:bg-[#0077ed]',
    outline: 'bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#e8e8ed]',
    ghost: 'text-[#2997ff] hover:underline bg-transparent',
  };

  return (
    <button
      className={`inline-flex items-center justify-center px-[22px] py-3 rounded-full font-normal text-[17px] tracking-tight transition-colors duration-200 disabled:opacity-50 active:scale-[0.98] ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const Section = ({
  children,
  className = '',
  id = '',
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => (
  <section id={id} className={`py-20 md:py-28 px-5 scroll-mt-14 ${className}`}>
    <div className="max-w-[980px] mx-auto">{children}</div>
  </section>
);

export const SectionHeader = ({
  title,
  subtitle,
  centered = true,
  titleClassName = '',
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
  titleClassName?: string;
}) => (
  <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    <h2 className={`text-[32px] md:text-[48px] font-semibold tracking-tight text-apple-ink leading-[1.08] ${titleClassName}`}>
      {title}
    </h2>
    {subtitle && (
      <p className="text-[17px] md:text-[21px] text-apple-gray max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
        {subtitle}
      </p>
    )}
  </div>
);
