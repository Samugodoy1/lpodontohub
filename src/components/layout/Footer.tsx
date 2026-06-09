import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../shared/Logo';

export const Footer = () => {
  const location = useLocation();
  const isAcademy = location.pathname.startsWith('/academy');
  const brandColor = isAcademy ? 'text-brand-academy' : 'text-brand-green-dark';
  const iconBg = isAcademy ? 'bg-brand-academy' : 'bg-brand-green';

  return (
    <footer className="py-12 md:py-16 px-5 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto pt-12 md:pt-16 border-t border-brand-border">
          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-12 mb-12 md:mb-16">
            <div className="max-w-xs">
              <Logo isAcademy={isAcademy} className="!items-start mb-5 md:mb-6" />
              <p className="text-xs md:text-sm text-brand-text-muted leading-relaxed">A próxima melhor ação para o dentista {isAcademy ? 'que está aprendendo' : 'solo'}. Tecnologia que entende a rotina clínica real.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-xs">
              <div className="space-y-3 md:space-y-4">
                <p className="font-bold text-brand-text tracking-wider uppercase text-[10px]">Produto</p>
                <div className="flex flex-col gap-2.5 md:gap-3 text-brand-text-muted">
                  <a href="#recursos" className="hover:text-brand-green">Recursos</a>
                  <a href="#planos" className="hover:text-brand-green">Planos</a>
                  <Link to={isAcademy ? "/" : "/academy"} className={isAcademy ? "hover:text-brand-academy" : "hover:text-brand-green"}>{isAcademy ? "OdontoHub Pro" : "Academy"}</Link>
                  <Link to="/comparativo" className={isAcademy ? "hover:text-brand-academy" : "hover:text-brand-green"}>Comparativos</Link>
                  <Link to="/blog" className={isAcademy ? "hover:text-brand-academy" : "hover:text-brand-green"}>Blog</Link>
                  <Link to="/presets" className="hover:text-brand-green">Kit Social (Instagram)</Link>
                </div>
              </div>
              <div className="space-y-3 md:space-y-4">
                <p className="font-bold text-brand-text tracking-wider uppercase text-[10px]">Imprensa & SEO</p>
                <div className="flex flex-col gap-2.5 md:gap-3 text-brand-text-muted">
                  <Link to="/software-odontologico" className="hover:text-brand-green">Software Odontológico</Link>
                  <Link to="/sistemas-para-dentista" className="hover:text-brand-green">Sistemas para Dentista</Link>
                  <Link to="/app-para-estudante-de-odontologia" className="hover:text-brand-green">App de Odontologia</Link>
                </div>
              </div>
              <div className="space-y-3 md:space-y-4">
                <p className="font-bold text-brand-text tracking-wider uppercase text-[10px]">Empresa</p>
                <div className="flex flex-col gap-2.5 md:gap-3 text-brand-text-muted">
                  <Link to="/#recursos" className="hover:text-brand-green">Sobre</Link>
                  <a href="https://instagram.com/odontohub.app" target="_blank" rel="noreferrer" className={isAcademy ? "hover:text-brand-academy" : "hover:text-brand-green"}>Contato</a>
                  <Link to="/academy/embaixadores" className="hover:text-brand-academy">Embaixadores Academy</Link>
                  <Link to="/blog?post=manifesto-fundador-odontologia-sufocada" className={isAcademy ? "hover:text-brand-academy" : "hover:text-brand-green"}>Manifesto</Link>
                </div>
              </div>
              <div className="space-y-3 md:space-y-4">
                <p className="font-bold text-brand-text tracking-wider uppercase text-[10px]">Legal</p>
                <div className="flex flex-col gap-2.5 md:gap-3 text-brand-text-muted">
                  <Link to="/" className="hover:text-brand-green">Termos</Link>
                  <Link to="/" className="hover:text-brand-green">Privacidade</Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] md:text-[10px] font-bold text-brand-text-muted uppercase tracking-[0.2em] text-center md:text-left">
            <p>© {new Date().getFullYear()} OdontoHub. Todos os direitos reservados.</p>
            <p>Feito para ajudar dentistas {isAcademy ? 'estudantes' : ''} a dormirem melhor.</p>
          </div>
        </div>
      </footer>
  );
};
