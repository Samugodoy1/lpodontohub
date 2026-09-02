import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export const START_PRO = 'https://sistema.odontohub.app.br';
export const START_ACADEMY = 'https://academy.odontohub.app.br';

export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}): React.ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AppleLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  const className = `apple-link ${light ? '!text-[#2997ff]' : ''}`;
  if (href.startsWith('/') && !href.startsWith('//')) {
    return (
      <Link to={href} className={className}>
        {children} <span aria-hidden>›</span>
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {children} <span aria-hidden>›</span>
    </a>
  );
}

export function DarkCTA({
  title,
  subtitle,
  href,
  label = 'Começar',
}: {
  title: string;
  subtitle?: string;
  href: string;
  label?: string;
}) {
  return (
    <section className="bg-black px-5 py-24 md:py-36">
      <div className="max-w-[780px] mx-auto text-center">
        <h2 className="apple-display text-[36px] md:text-[56px] mb-5">{title}</h2>
        {subtitle && <p className="apple-subhead text-[19px] md:text-[21px] mb-9">{subtitle}</p>}
        <a href={href} className="apple-btn">
          {label}
        </a>
      </div>
    </section>
  );
}

export function PageShell({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`min-h-screen ${dark ? 'bg-black text-white' : 'bg-apple-surface text-apple-ink'}`}>
      {children}
    </div>
  );
}
