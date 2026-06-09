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
      role: 'Diretor de Clínica Multidisciplinar',
      location: 'Campinas - SP',
      avatarBg: 'bg-indigo-50 text-indigo-700',
      avatarText: 'RA',
      stars: 5,
      quote: 'Eu não conseguia me desligar do consultório aos fins de semana por causa da incerteza do caixa ou de faltas. O OdontoHub organizou tudo com tanta simplicidade que eliminou minha ansiedade de domingo à noite. Agora tenho paz real com a família.',
      featured: true,
      metric: 'Fim do estresse de domingo',
      category: 'owner',
      competitorComparison: 'Substituiu o Simples Dental'
    },
    {
      id: 4,
      name: 'Dra. Mariana Costa',
      role: 'Clínica Geral Solo',
      location: 'Salvador - BA',
      avatarBg: 'bg-brand-green-soft text-brand-green-dark',
      avatarText: 'MC',
      stars: 5,
      quote: 'Estava farta de softwares barulhentos mandando alertas no meu descanso. Com o Silêncio Ativo do OdontoHub, o sistema se mantém mudo se tudo corre bem. Chego em casa às 17h30, desligo o celular da clínica e posso dormir em paz.',
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
      role: 'Implantodontista & Dono de Consultório',
      location: 'Florentina - RS',
      avatarBg: 'bg-[#FAF9F5] text-brand-text',
      avatarText: 'HV',
      stars: 5,
      quote: 'Perdia horas mandando mensagem individual de confirmação ou ligando. Aquilo sugava minha energia diária. Com as automações integradas do OdontoHub, os próprios pacientes confirmam sozinhos. Ganhei 2 horas livres no meu dia.',
      featured: false,
      metric: '2 horas livres no dia',
      category: 'owner'
    }
  ];

  const filteredTestimonials = testimonials.filter(t => {
    if (activeFilter === 'all') return true;
    return t.category === activeFilter;
  });

  return (
    <div className="space-y-12" id="social-proof-landing-section">
      <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 text-brand-green-dark rounded-full text-xs font-bold uppercase tracking-wider">
          <Star size={12} className="fill-current text-brand-green" /> Prova Social Real
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-brand-text">
          Recomendado por quem busca clareza profissional.
        </h2>
        <p className="text-xs md:text-sm text-brand-text-muted font-medium">
          Dentistas independentes, donos de consultórios e acadêmicos que escolheram a simplicidade inteligente contra a poluição visual dos softwares obsoletos.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 justify-center items-center max-w-xl mx-auto p-1.5 bg-slate-50 border border-brand-border/60 rounded-2xl" id="testimonials-filter-bar">
        {[
          { id: 'all', label: 'Todos os Depoimentos' },
          { id: 'solo', label: 'Clínicos Solo' },
          { id: 'owner', label: 'Donos de Consultórios' },
          { id: 'academy', label: 'Estudantes (Academy)' }
        ].map(filter => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id as any)}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
              activeFilter === filter.id
                ? 'bg-white text-brand-text shadow-sm border border-brand-border/40'
                : 'text-brand-text-muted hover:text-brand-text'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Grid containing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch" id="testimonials-grid">
        <AnimatePresence mode="popLayout">
          {filteredTestimonials.map((testimonial) => (
            <motion.div
              layout
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`p-6 md:p-8 rounded-[2rem] border relative flex flex-col justify-between transition-all duration-300 ${
                testimonial.featured
                  ? 'bg-gradient-to-br from-white to-brand-green-soft/10 border-brand-green/30 shadow-md shadow-brand-green/5'
                  : 'bg-white border-brand-border/80 shadow-sm hover:border-slate-300'
              }`}
            >
              <div className="space-y-4">
                {/* Upper Star Rating and Metrics */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-0.5 text-brand-yellow">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} size={14} className="fill-current text-brand-yellow" />
                    ))}
                  </div>

                  {testimonial.competitorComparison && (
                    <span className="text-[9px] font-extrabold px-2.5 py-0.5 rounded-full bg-slate-100 text-brand-text-muted border border-brand-border/30 whitespace-nowrap">
                      {testimonial.competitorComparison}
                    </span>
                  )}
                </div>

                {/* Main Quote Text */}
                <p className="text-xs md:text-[13px] font-semibold text-brand-text/80 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Lower Profile detail with flex wrap to prevent horizontal spill */}
              <div className="pt-6 mt-6 border-t border-brand-border/40 flex flex-wrap items-center justify-between gap-y-3 gap-x-2">
                <div className="flex items-center gap-3 min-w-0 max-w-full">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-sm shrink-0 ${testimonial.avatarBg}`}>
                    {testimonial.avatarText}
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-black text-brand-text block truncate">{testimonial.name}</span>
                    <span className="text-[10px] font-bold text-brand-text-muted block truncate">{testimonial.role}</span>
                  </div>
                </div>

                {/* Metric Badge */}
                <div className="shrink-0 max-w-full">
                  <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-lg block whitespace-normal ${
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

      {/* Conversion Banner optimized for actions */}
      <div className="bg-brand-green-dark text-white rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative shadow-xl">
        <div className="space-y-2 text-left relative z-10 max-w-xl">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-green bg-white/10 px-3 py-1 rounded-full">
            Estabilidade & Crescimento
          </span>
          <h3 className="text-xl md:text-2xl font-black tracking-tight">
            Liberdade profissional começa a custar zero reais.
          </h3>
          <p className="text-xs text-white/70 font-semibold leading-relaxed">
            Mais de 94% dos clínicos relatam uma redução acentuada no cansaço mental diário já na primeira semana de uso do OdontoHub.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto relative z-10">
          <a href="https://sistema.odontohub.app.br" className="w-full sm:w-auto">
            <button className="w-full bg-white text-[#154639] hover:bg-white/95 border-none shadow-lg text-xs font-black uppercase tracking-wider py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 text-center flex items-center justify-center">
              Criar Conta Gratuita
            </button>
          </a>
          <a href="#planos" className="w-full sm:w-auto">
            <button className="w-full bg-transparent text-white border-2 border-white/30 hover:bg-white/10 text-xs font-black uppercase tracking-wider py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 text-center flex items-center justify-center">
              Ver Tabela de Preços
            </button>
          </a>
        </div>

        {/* Decorative background vectors */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none" />
      </div>
    </div>
  );
}
