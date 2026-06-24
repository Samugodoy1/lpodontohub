import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, User, Quote, Check, ArrowRight } from 'lucide-react';
import { Button } from './UI';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  avatarBg: string;
  avatarText: string;
  stars: number;
  quote: string;
  featured: boolean;
  metric: string;
  category: 'solo' | 'academy' | 'owner';
  competitorComparison?: string;
}

export default function Testimonials() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'solo' | 'academy' | 'owner'>('all');

  const testimonials: Testimonial[] = [
    {
      id: 7,
      name: 'Dr. Mateus',
      role: 'Clínico Geral solo',
      location: 'Taubaté - SP',
      avatarBg: 'bg-emerald-50 text-emerald-700',
      avatarText: 'DM',
      stars: 5,
      quote: 'Antes eu ficava até 21h respondendo paciente no WhatsApp para confirmar o dia seguinte. Com o OdontoHub, eu fecho o consultório às 18h e vou direto para a academia. O sistema faz tudo.',
      featured: true,
      metric: 'Consultório fechado às 18h',
      category: 'solo',
      competitorComparison: 'Confirmação Automática'
    },
    {
      id: 1,
      name: 'Dra. Larissa Fernandes',
      role: 'Ortodontista Independente',
      location: 'Curitiba - PR',
      avatarBg: 'bg-brand-green-soft text-brand-green-dark',
      avatarText: 'LF',
      stars: 5,
      quote: 'Eu estava exausta de sistemas complexos como o Clinicorp, cheios de menus e abas impossíveis de mexer correndo. Com o OdontoHub, eu atendo, resolvo a agenda de bolso em segundos e vou para casa com a cabeça 100% vazia e em paz.',
      featured: true,
      metric: 'Salva 45 min por dia',
      category: 'solo',
      competitorComparison: 'Migrou do Clinicorp'
    },
    {
      id: 2,
      name: 'Lucas Brandão',
      role: 'Estudante de Odontologia - 8º Período',
      location: 'UFMG - Belo Horizonte',
      avatarBg: 'bg-brand-academy-soft text-brand-academy',
      avatarText: 'LB',
      stars: 5,
      quote: 'Minha maior ansiedade antes da clínica universitária era esquecer instrumental cirúrgico ou errar lista sob pressão. O OdontoHub de bolso tirou esse peso gigante das minhas costas. Coloco o Modo Box no suporte e trabalho respirando calmo.',
      featured: false,
      metric: 'Segurança total sob o mocho',
      category: 'academy'
    },
    {
      id: 3,
      name: 'Dr. Roberto Arruda',
      role: 'Clínico Solo (Sala Alugada)',
      location: 'Campinas - SP',
      avatarBg: 'bg-indigo-50 text-indigo-700',
      avatarText: 'RA',
      stars: 5,
      quote: 'O Simples Dental era caro demais para o meu momento de sala alugada, e controlar no papel era uma bagunça que me fazia perder pacientes. O OdontoHub se encaixou perfeito no meu bolso, é incrivelmente simples e me deu o controle total.',
      featured: true,
      metric: 'Economia e controle de bolso',
      category: 'owner',
      competitorComparison: 'Focou no Essencial'
    },
    {
      id: 4,
      name: 'Dra. Mariana Costa',
      role: 'Clínica Geral Solo',
      location: 'Salvador - BA',
      avatarBg: 'bg-brand-green-soft text-brand-green-dark',
      avatarText: 'MC',
      stars: 5,
      quote: 'Estava farta de softwares barulhentos mandando alertas no meu descanso. Com o Silêncio Ativo do OdontoHub, o sistema se mantém mudo se tudo corre bem. Chego em casa às 17h30, desligo o celular da clínica e posso dormir in paz.',
      featured: false,
      metric: 'Menos ansiedade operacional',
      category: 'solo'
    },
    {
      id: 5,
      name: 'Gabriela Vasconcellos',
      role: 'Estudante de Odontologia - 9º Período',
      location: 'USP - São Paulo',
      avatarBg: 'bg-brand-academy-soft text-brand-academy',
      avatarText: 'GV',
      stars: 5,
      quote: 'O medo de esquecer brocas e ser reprovada me assombrava. Desde que comecei com o OdontoHub, arrumo meu almoxarifado em 10 segundos pelo roteiro automatizado e vou dormir tranquila. Minhas faltas de materiais caíram para zero absoluta.',
      featured: false,
      metric: 'Faltas de materiais zeradas',
      category: 'academy'
    },
    {
      id: 6,
      name: 'Dr. Henrique Viana',
      role: 'Dentista Recém-Formado',
      location: 'Novo Hamburgo - RS',
      avatarBg: 'bg-[#FAF9F5] text-brand-text',
      avatarText: 'HV',
      stars: 5,
      quote: 'Assim que me formei, me assustei com o custo dos sistemas tradicionais. O OdontoHub foi a salvação para organizar meus primeiros pacientes sem falir. É super direto, prático no celular e não tem aquela poluição visual insuportável.',
      featured: false,
      metric: 'Zero dívidas de software',
      category: 'owner'
    }
  ];

  const filteredTestimonials = testimonials.filter(t => {
    if (activeFilter === 'all') return true;
    return t.category === activeFilter;
  });

  return (
    <div className="space-y-12" id="social-proof-landing-section">
      <div className="flex flex-col items-center text-center space-y-5 max-w-2xl mx-auto">
        <p className="section-index text-brand-green">Depoimentos</p>
        <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-brand-text leading-tight">
          Recomendado por quem busca <em className="italic text-brand-green font-medium">clareza profissional.</em>
        </h2>
        <p className="text-base md:text-lg text-brand-text-muted font-medium leading-relaxed">
          Dentistas recém-formados, clínicos solo de salas alugadas e acadêmicos que escolheram a simplicidade inteligente — no lugar do custo e da complexidade dos softwares obsoletos.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-1.5 justify-center items-center max-w-2xl mx-auto p-1.5 bg-white border border-brand-border rounded-full" id="testimonials-filter-bar">
        {[
          { id: 'all', label: 'Todos' },
          { id: 'solo', label: 'Clínicos Solo' },
          { id: 'owner', label: 'Recém-Formados' },
          { id: 'academy', label: 'Estudantes' }
        ].map(filter => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id as any)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              activeFilter === filter.id
                ? 'bg-brand-green text-white shadow-sm'
                : 'text-brand-text-muted hover:text-brand-text'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Grid containing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-stretch" id="testimonials-grid">
        <AnimatePresence mode="popLayout">
          {filteredTestimonials.map((testimonial) => (
            <motion.div
              layout
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`p-7 md:p-8 rounded-[2rem] border relative flex flex-col justify-between transition-all duration-300 ${
                testimonial.featured
                  ? 'bg-gradient-to-br from-brand-green-soft/50 to-white border-brand-green/20 shadow-glow-soft'
                  : 'bg-white border-brand-border shadow-sm hover:border-brand-green/20'
              }`}
            >
              <div className="space-y-5">
                {/* Upper Star Rating and Metrics */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-0.5 text-brand-yellow">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} size={15} className="fill-current text-brand-yellow" />
                    ))}
                  </div>

                  {testimonial.competitorComparison && (
                    <span className="section-index !text-[9px] px-2.5 py-1 rounded-full bg-brand-bg text-brand-text-muted border border-brand-border whitespace-nowrap">
                      {testimonial.competitorComparison}
                    </span>
                  )}
                </div>

                {/* Main Quote Text */}
                <Quote size={22} className="text-brand-green/20" />
                <p className="font-display text-base md:text-lg font-normal text-brand-text leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>

              {/* Lower Profile detail */}
              <div className="pt-6 mt-6 border-t border-brand-border/60 flex flex-wrap items-center justify-between gap-y-3 gap-x-2">
                <div className="flex items-center gap-3 min-w-0 max-w-full">
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${testimonial.avatarBg}`}>
                    {testimonial.avatarText}
                  </div>
                  <div className="min-w-0">
                    <span className="text-sm font-bold text-brand-text block truncate">{testimonial.name}</span>
                    <span className="text-[11px] font-semibold text-brand-text-muted block truncate">{testimonial.role} · {testimonial.location}</span>
                  </div>
                </div>

                {/* Metric Badge */}
                <div className="shrink-0 max-w-full">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full block whitespace-normal ${
                    testimonial.category === 'academy' ? 'bg-brand-academy-soft text-brand-academy' : 'bg-brand-green-soft text-brand-green-dark'
                  }`}>
                    {testimonial.metric}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Conversion Banner */}
      <div className="surface-dark text-white rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-7 overflow-hidden relative">
        <div aria-hidden className="absolute inset-0 grain opacity-40" />
        <div className="space-y-3 text-left relative z-10 max-w-xl">
          <p className="section-index text-[#7FD9C4]">Estabilidade &amp; crescimento</p>
          <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
            Liberdade profissional começa a <em className="italic text-[#7FD9C4] font-medium">custar zero reais.</em>
          </h3>
          <p className="text-sm text-white/70 font-medium leading-relaxed">
            A maioria dos clínicos relata uma redução acentuada no cansaço mental diário já na primeira semana de uso do OdontoHub.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto relative z-10 shrink-0">
          <a href="https://sistema.odontohub.app.br" className="w-full sm:w-auto">
            <button className="w-full bg-white text-brand-green-dark hover:bg-white/90 shadow-lg text-sm font-extrabold py-4 px-7 rounded-2xl transition-all active:scale-95 inline-flex items-center justify-center gap-2">
              Criar conta gratuita <ArrowRight size={16} />
            </button>
          </a>
          <a href="#planos" className="w-full sm:w-auto">
            <button className="w-full bg-white/10 text-white border border-white/20 hover:bg-white/15 text-sm font-bold py-4 px-7 rounded-2xl transition-all active:scale-95">
              Ver os planos
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
