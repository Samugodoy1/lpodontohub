import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../shared/UI';
import { Logo } from '../shared/Logo';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isAcademy = location.pathname.startsWith('/academy');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = isAcademy ? [
    { label: 'O problema', href: '#como-funciona' },
    { label: 'Fluxo Academy', href: '#fluxo' },
    { label: 'Embaixadores', href: '/academy/embaixadores', isLink: true },
    { label: 'Blog', href: '/blog', isLink: true },
    { label: 'Planos', href: '#planos' },
  ] : [
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Recursos', href: '#recursos' },
    { label: 'Comparativo', href: '/comparativo', isLink: true },
    { label: 'Blog', href: '/blog', isLink: true },
    { label: 'Planos', href: '#planos' },
  ];

  const brandColor = isAcademy ? 'brand-academy' : 'brand-green';
  const brandTextColor = isAcademy ? 'text-brand-academy' : 'text-brand-green-dark';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg border-b border-brand-border py-3 md:py-4' : 'bg-transparent py-5 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-6 flex items-center justify-between">
        <Link to="/" className="group">
          <Logo isAcademy={isAcademy} className="items-start" />
        </Link>

        <div className="hidden lg:flex items-center gap-10 text-sm font-semibold text-brand-text-muted">
          {links.map(link => (
            link.isLink ? (
              <Link key={link.label} to={link.href} className={`hover:${isAcademy ? 'text-brand-academy' : 'text-brand-green'} transition-colors font-semibold`}>
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href} className={`hover:${isAcademy ? 'text-brand-academy' : 'text-brand-green'} transition-colors font-semibold`}>
                {link.label}
              </a>
            )
          ))}
          {!isAcademy && (
            <Link to="/academy" className="px-3 py-1 bg-brand-academy-soft text-brand-academy rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-brand-academy hover:text-white transition-all">
               Academy: Para Alunos
            </Link>
          )}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href={isAcademy ? "https://academy.odontohub.app.br" : "https://sistema.odontohub.app.br"}>
            <Button variant="ghost" className="px-5 py-2 md:py-2.5 text-sm font-bold">Entrar</Button>
          </a>
          <a href={isAcademy ? "https://academy.odontohub.app.br" : "https://sistema.odontohub.app.br"}>
            <Button variant={isAcademy ? 'academy' : 'primary'} className="px-5 py-2 md:py-2.5 text-sm">Começar grátis</Button>
          </a>
        </div>

        <button className="lg:hidden p-1.5 text-brand-text" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-brand-border p-6 shadow-xl lg:hidden flex flex-col gap-5 font-bold text-base md:text-lg"
          >
            {links.map(link => (
              link.isLink ? (
                <Link key={link.label} to={link.href} className="py-1" onClick={() => setIsMenuOpen(false)}>{link.label}</Link>
              ) : (
                <a key={link.label} href={link.href} className="py-1" onClick={() => setIsMenuOpen(false)}>{link.label}</a>
              )
            ))}
            {!isAcademy && (
               <Link to="/academy" className="text-brand-academy" onClick={() => setIsMenuOpen(false)}>OdontoHub Academy (Alunos)</Link>
            )}
            <hr className="border-brand-border my-1" />
            <div className="flex flex-col gap-2">
              <a href={isAcademy ? "https://academy.odontohub.app.br" : "https://sistema.odontohub.app.br"}>
                <Button className="w-full" variant={isAcademy ? 'academy' : 'primary'} onClick={() => setIsMenuOpen(false)}>Começar grátis</Button>
              </a>
              <a href={isAcademy ? "https://academy.odontohub.app.br" : "https://sistema.odontohub.app.br"}>
                <Button className="w-full" variant="ghost" onClick={() => setIsMenuOpen(false)}>Entrar</Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
