import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../shared/Logo';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isAcademy = location.pathname.startsWith('/academy');
  const isHome = location.pathname === '/';
  const dark = isHome;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const links = isAcademy
    ? [
        { label: 'Como funciona', href: '#como-funciona' },
        { label: 'App para Estudantes', href: '/app-para-estudante-de-odontologia', isLink: true },
        { label: 'Embaixadores', href: '/academy/embaixadores', isLink: true },
        { label: 'Blog', href: '/blog', isLink: true },
        { label: 'Planos', href: '#planos' },
      ]
    : [
        { label: 'Agenda', href: isHome ? '#agenda' : '/#agenda' },
        { label: 'Paciente', href: isHome ? '#paciente' : '/#paciente' },
        { label: 'Academy', href: '/academy', isLink: true },
        { label: 'Planos', href: isHome ? '#planos' : '/#planos' },
      ];

  const loginHref = isAcademy ? 'https://academy.odontohub.app.br' : 'https://sistema.odontohub.app.br';
  const startHref = loginHref;

  const barClass = dark
    ? `${isScrolled || isMenuOpen ? 'bg-[rgba(22,22,23,0.86)]' : 'bg-[rgba(22,22,23,0.72)]'} text-[#f5f5f7] border-b border-white/[0.08]`
    : `${isScrolled || isMenuOpen ? 'bg-white/80' : 'bg-white/50'} text-apple-ink border-b border-black/[0.08]`;

  const linkHover = dark ? 'hover:text-white' : isAcademy ? 'hover:text-brand-academy' : 'hover:text-black';
  const muted = dark ? 'text-[#f5f5f7]/80' : 'text-apple-ink/80';

  return (
    <header role="banner" className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-[20px] backdrop-saturate-150 transition-colors duration-300 ${barClass}`}>
      <nav
        id="primary-navigation"
        aria-label="Menu Principal"
        className="max-w-[980px] mx-auto px-5 h-12 md:h-[44px] flex items-center justify-between gap-4"
      >
        <Link to="/" className="shrink-0" aria-label="OdontoHub Página Inicial">
          <Logo isAcademy={isAcademy} inverted={dark} />
        </Link>

        <div className={`hidden md:flex items-center gap-7 text-[12px] font-normal ${muted}`}>
          {links.map((link) =>
            link.isLink ? (
              <Link key={link.label} to={link.href} className={`${linkHover} transition-colors`}>
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href} className={`${linkHover} transition-colors`}>
                {link.label}
              </a>
            )
          )}
        </div>

        <div className="hidden md:flex items-center gap-5">
          <a href={loginHref} className={`text-[12px] ${muted} ${linkHover} transition-colors`}>
            Entrar
          </a>
          <a
            href={startHref}
            className="inline-flex items-center rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-[12px] px-3.5 py-[5px] transition-colors"
          >
            Começar
          </a>
        </div>

        <button
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          className={`md:hidden p-1 ${dark ? 'text-white' : 'text-apple-ink'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden overflow-hidden ${dark ? 'bg-[#161617] text-[#f5f5f7]' : 'bg-white text-apple-ink'}`}
          >
            <div className="px-6 pb-7 pt-2 flex flex-col gap-4 text-[28px] font-semibold tracking-tight">
              {links.map((link) =>
                link.isLink ? (
                  <Link key={link.label} to={link.href} onClick={() => setIsMenuOpen(false)}>
                    {link.label}
                  </Link>
                ) : (
                  <a key={link.label} href={link.href} onClick={() => setIsMenuOpen(false)}>
                    {link.label}
                  </a>
                )
              )}
              <div className="flex gap-3 pt-4 text-[17px] font-normal">
                <a href={startHref} className="apple-btn !text-[15px] !py-2.5 !px-5">
                  Começar
                </a>
                <a href={loginHref} className={`self-center ${dark ? 'text-[#2997ff]' : 'text-[#0066cc]'}`}>
                  Entrar
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
