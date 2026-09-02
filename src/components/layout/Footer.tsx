import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../shared/Logo';

export const Footer = () => {
  const location = useLocation();
  const isAcademy = location.pathname.startsWith('/academy');

  const colTitle = 'text-[12px] font-semibold text-apple-ink mb-3';
  const linkClass = 'text-[12px] text-apple-gray-2 hover:text-apple-ink hover:underline underline-offset-2';

  return (
    <footer className="bg-apple-surface text-apple-gray-2">
      <div className="max-w-[980px] mx-auto px-5 pt-10 pb-8">
        <p className="text-[12px] leading-relaxed border-b border-apple-line pb-5 mb-7">
          OdontoHub é um sistema de gestão para dentistas e estudantes de odontologia.
          Agenda, prontuário, confirmações e finanças — com o mínimo de ruído.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <p className={colTitle}>Explorar</p>
            <div className="flex flex-col gap-2.5">
              <a href="/#agenda" className={linkClass}>Agenda</a>
              <a href="/#paciente" className={linkClass}>Paciente</a>
              <a href="/#planos" className={linkClass}>Planos</a>
              <Link to="/academy" className={linkClass}>Academy</Link>
              <Link to="/comparativo" className={linkClass}>Comparativo</Link>
              <Link to="/blog" className={linkClass}>Blog</Link>
            </div>
          </div>
          <div>
            <p className={colTitle}>OdontoHub</p>
            <div className="flex flex-col gap-2.5">
              <Link to="/software-odontologico" className={linkClass}>Software odontológico</Link>
              <Link to="/sistemas-para-dentista" className={linkClass}>Sistemas para dentista</Link>
              <Link to="/software-odontologico-autonomo" className={linkClass}>Dentista autônomo</Link>
              <Link to="/app-para-estudante-de-odontologia" className={linkClass}>App para estudantes</Link>
              <Link to="/presets" className={linkClass}>Kit social</Link>
            </div>
          </div>
          <div>
            <p className={colTitle}>Guia</p>
            <div className="flex flex-col gap-2.5">
              <Link to="/como-organizar-retornos-de-pacientes" className={linkClass}>Organizar retornos</Link>
              <Link to="/como-administrar-clinica-sem-secretaria" className={linkClass}>Clínica sem secretária</Link>
              <Link to="/como-evitar-pacientes-esquecidos" className={linkClass}>Pacientes esquecidos</Link>
              <Link to="/agenda-odontologica-recem-formados" className={linkClass}>Recém-formados</Link>
            </div>
          </div>
          <div>
            <p className={colTitle}>Conta</p>
            <div className="flex flex-col gap-2.5">
              <a href={isAcademy ? 'https://academy.odontohub.app.br' : 'https://sistema.odontohub.app.br'} className={linkClass}>
                Entrar
              </a>
              <a href={isAcademy ? 'https://academy.odontohub.app.br' : 'https://sistema.odontohub.app.br'} className={linkClass}>
                Começar grátis
              </a>
              <Link to="/academy/embaixadores" className={linkClass}>Embaixadores</Link>
              <a href="https://instagram.com/odontohub.app" target="_blank" rel="noreferrer" className={linkClass}>
                Instagram
              </a>
              <Link to="/" className={linkClass}>Privacidade</Link>
              <Link to="/" className={linkClass}>Termos</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-4 border-t border-apple-line">
          <div>
            <Logo isAcademy={isAcademy} className="mb-3 opacity-90" />
            <p className="text-[12px] text-apple-gray">
              Copyright © {new Date().getFullYear()} OdontoHub. Todos os direitos reservados.
            </p>
          </div>
          <p className="text-[12px] text-apple-gray">Brasil</p>
        </div>
      </div>
    </footer>
  );
};
