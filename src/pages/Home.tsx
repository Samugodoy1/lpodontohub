import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import {
  Calendar,
  Users,
  ClipboardList,
  Bell,
  ChevronRight,
  CheckCircle2,
  Brain,
  Clock,
  TrendingUp,
  MessageSquare,
  GraduationCap,
  Layout,
  UserCircle,
  PlusCircle,
  LayoutDashboard,
  ArrowRight,
  Sparkles,
  Star,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Section, SectionHeader } from '../components/shared/UI';
import Testimonials from '../components/shared/Testimonials';
import SystemMockupShowcase from '../components/shared/SystemMockupShowcase';

// Scroll-triggered reveal wrapper for a layered, intentional entrance
const Reveal = ({
  children,
  delay = 0,
  y = 28,
  className = ''
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const Mockup = () => {
  const [scenario, setScenario] = React.useState(0);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-12 md:mt-20 p-1.5 md:p-3 bg-white rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border border-brand-border overflow-hidden">
      {/* Selector bar */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 md:gap-3 p-3 bg-slate-50/80 border-b border-brand-border rounded-t-[2.2rem] md:rounded-t-[2.7rem]">
        {[
          { label: "Segunda-feira às 7h30", desc: "Começando a semana" },
          { label: "Dia tranquilo", desc: "Silêncio ativo" },
          { label: "Análise preventiva", desc: "Visão de caixa de 3 semanas" }
        ].map((item, idx) => (
          <button
            key={idx}
            onClick={() => setScenario(idx)}
            className={`px-4 py-2.5 rounded-2xl transition-all duration-300 text-left flex flex-col gap-0.5 ${
              scenario === idx 
                ? 'bg-brand-green text-white shadow-lg shadow-brand-green/10 scale-102' 
                : 'hover:bg-slate-100 text-brand-text'
            }`}
          >
            <span className="text-[10px] md:text-xs font-bold leading-none">{item.label}</span>
            <span className={`text-[8px] md:text-[9px] ${scenario === idx ? 'text-white/60' : 'text-brand-text-muted font-medium'}`}>{item.desc}</span>
          </button>
        ))}
      </div>

      <div className="bg-brand-bg-alt rounded-b-[2rem] md:rounded-b-[2.5rem] flex flex-col min-h-[500px] md:min-h-[600px] overflow-hidden relative">
        {scenario === 0 && (
          <div className="pt-8 md:pt-14 px-5 md:px-12 text-center flex-1 pb-24">
            <p className="text-[10px] md:text-xs text-brand-text-muted mb-1.5 md:mb-2 font-medium">Bom dia, Dr. Guilherme 👋</p>
            <h3 className="text-xl md:text-3xl font-semibold text-brand-text mb-4 md:mb-6 leading-tight max-w-xl mx-auto">
              Hoje você tem 8 atendimentos. 2 pacientes ainda não confirmaram.
            </h3>
            
            <div className="bg-brand-yellow-soft/50 border border-brand-yellow/10 p-4 md:p-5 rounded-2xl flex items-center justify-between gap-3 text-left max-w-lg mx-auto mb-8 md:mb-10 text-brand-text">
              <div className="flex items-center gap-3 font-semibold">
                <div className="w-2.5 h-2.5 bg-brand-yellow rounded-full shrink-0 animate-pulse" />
                <p className="text-xs md:text-sm leading-tight font-medium">
                  Quer que eu envie lembretes automáticos agora?
                </p>
              </div>
              <button className="px-3.5 py-1.5 bg-brand-yellow text-white text-[10px] font-bold rounded-lg shrink-0 hover:bg-opacity-90">Confirmar</button>
            </div>

            <div className="bg-brand-green-dark text-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] text-left relative overflow-hidden shadow-xl max-w-xl mx-auto group">
              <div className="relative z-10">
                <p className="text-[8px] md:text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1.5 md:mb-2">Próximo Atendimento Clínico</p>
                <div className="flex justify-between items-start mb-6 md:mb-10">
                  <div>
                    <h4 className="text-2xl md:text-4xl font-bold tracking-tight">João Silva</h4>
                    <div className="flex gap-1.5 md:gap-2 mt-2 md:mt-3">
                      <span className="px-2 md:px-3 py-0.5 md:py-1 bg-white/15 rounded-lg text-[8px] md:text-[10px] font-bold uppercase tracking-wider">Extração avançada</span>
                      <span className="px-2 md:px-3 py-0.5 md:py-1 bg-white/10 rounded-lg text-[8px] md:text-[10px] font-bold uppercase tracking-wider">Última visita: 18 meses</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center text-lg md:text-xl font-bold">J</div>
                </div>

                <div className="flex justify-between items-end mb-6 md:mb-8">
                  <div>
                    <p className="text-[8px] md:text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">Procedimento</p>
                    <p className="text-base md:text-lg font-bold">Extração do 38 • Raiz Residual</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[8px] md:text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">Horário</p>
                    <p className="text-xl md:text-2xl font-bold">10:00</p>
                  </div>
                </div>

                <div className="space-y-2 md:space-y-3">
                  <button className="w-full py-3.5 md:py-4 bg-white text-brand-green-dark rounded-xl md:rounded-2xl font-bold text-xs md:text-sm hover:opacity-90 transition-opacity">Visualizar Histórico Resumido</button>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16" />
            </div>
          </div>
        )}

        {scenario === 1 && (
          <div className="pt-8 md:pt-16 px-5 md:px-12 text-center flex-1 pb-24 flex flex-col justify-center items-center">
            <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green mb-6">
              <CheckCircle2 size={32} />
            </div>
            <p className="text-[10px] md:text-xs text-brand-text-muted mb-1.5 md:mb-2 font-medium">Silêncio quando tudo está sob controle</p>
            <h3 className="text-xl md:text-4xl font-semibold text-brand-text mb-4 md:mb-6 tracking-tight max-w-lg leading-tight">
              Tudo certo para hoje. Nenhuma pendência urgente.
            </h3>
            <p className="text-sm text-brand-text-muted max-w-sm mb-8 leading-relaxed font-semibold">
              6 pacientes confirmados. O faturamento está em equilíbrio. Pode focar integralmente no cuidado clínico.
            </p>
            <div className="px-6 py-3 bg-white border border-brand-border rounded-2xl text-xs font-bold text-brand-text-muted">
              Fechar o aplicativo e focar no paciente
            </div>
          </div>
        )}

        {scenario === 2 && (
          <div className="pt-8 md:pt-14 px-5 md:px-12 text-center flex-1 pb-24">
            <p className="text-[10px] md:text-xs text-brand-text-muted mb-1.5 md:mb-2 font-medium">Seu caixa protegido de furos</p>
            <h3 className="text-xl md:text-3xl font-semibold text-brand-text mb-4 md:mb-6 leading-tight max-w-xl mx-auto">
              Sua previsão para fechar o mês no azul
            </h3>
            
            <div className="bg-brand-yellow-soft/50 border border-brand-yellow/10 p-5 rounded-2xl flex flex-col md:flex-row gap-4 items-center justify-between text-left max-w-xl mx-auto mb-8 text-brand-text">
              <div className="space-y-1">
                <span className="text-[8px] md:text-[9px] font-extrabold uppercase tracking-widest text-brand-yellow bg-white/80 py-1 px-2.5 rounded-full inline-block">Previsão para este mês</span>
                <p className="text-xs md:text-sm font-bold leading-snug">
                  Com base nos agendamentos confirmados e receitas a receber, o faturamento deste mês de junho pode fechar 15% abaixo do esperado.
                </p>
              </div>
              <button className="px-4 py-2 bg-brand-yellow text-white text-xs font-bold rounded-xl shrink-0 hover:bg-opacity-90">Ver Opções</button>
            </div>

            <div className="bg-white border border-brand-border rounded-2xl p-6 text-left max-w-xl mx-auto space-y-4">
              <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">O que fazer para garantir o fechamento:</h4>
              <div className="flex items-center gap-4 p-3 bg-brand-green-soft/40 border border-brand-green/10 rounded-xl cursor-pointer hover:bg-brand-green-soft/80 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-brand-green shrink-0 shadow-sm animate-pulse">
                  <Users size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-text">3 pacientes de prótese precisam de retorno</p>
                  <p className="text-[10px] text-brand-text-muted font-medium">Última consulta foi há 6 meses. Sugerir reagendamento?</p>
                </div>
                <button className="ml-auto px-3 py-1 bg-brand-green text-white text-[10px] font-bold rounded">Disparar</button>
              </div>
            </div>
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 h-14 md:h-16 bg-white border-t border-brand-border flex items-center justify-around px-4 md:px-8">
          {[LayoutDashboard, Calendar, Users, TrendingUp, Menu].map((Icon, i) => (
            <div key={i} className={`flex flex-col items-center gap-0.5 md:gap-1 ${i === 0 ? 'text-brand-green' : 'text-slate-300'}`}>
              <Icon size={18} className="md:w-5 md:h-5" />
              <span className="text-[7px] md:text-[8px] font-bold uppercase tracking-wider">{['Início', 'Agenda', 'Pacientes', 'Financ.', 'Mais'][i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Menu = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>;

export default function Home() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>OdontoHub — O Software Odontológico do Futuro</title>
        <meta name="description" content="O sistema moderno definitivo para gerenciar o seu consultório de odontologia e decolar sua produtividade. Agenda WhatsApp, Prontuário Clínico rápido, Evoluções Inteligentes e Modo Box para estudantes." />
        <meta name="keywords" content="odontohub, software odontologico, sistema para consultorio odontologico, prontuario odontologico digital, estudante de odontologia, biossegurança, odontohub academy" />
        <link rel="canonical" href="https://www.odontohub.app.br/" />
        <meta property="og:title" content="OdontoHub — Sua rotina clínica, simplificada" />
        <meta property="og:description" content="O software moderno definitivo para gerenciar seu consultório. Controle sua agenda de pacientes, registre evoluções clínicas rápidas e organize finanças." />
        <meta property="og:url" content="https://www.odontohub.app.br/" />
        <meta name="twitter:title" content="OdontoHub — Sua rotina clínica, simplificada" />
        <meta name="twitter:description" content="O software moderno definitivo para gerenciar seu consultório. Controle sua agenda, prontuários e organize checklists no Modo Box." />
      </Helmet>
      {/* 2. HERO */}
      <section className="relative overflow-hidden pt-32 md:pt-48 pb-0 px-5 md:px-6">
        {/* Ambient aurora background */}
        <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
          <div className="aurora-blob bg-brand-green/25 w-[42rem] h-[42rem] -top-40 -left-40" />
          <div className="aurora-blob bg-[#0D9488]/20 w-[34rem] h-[34rem] -top-20 right-[-10rem]" style={{ animationDelay: '-5s' }} />
          <div className="aurora-blob bg-[#10B981]/15 w-[30rem] h-[30rem] top-[24rem] left-1/3" style={{ animationDelay: '-9s' }} />
          <div className="absolute inset-0 dot-grid opacity-70" />
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Eyebrow badge */}
            <div className="flex justify-center mb-7 md:mb-9">
              <span className="glass inline-flex items-center gap-2 rounded-full pl-2 pr-4 py-1.5 text-[11px] md:text-xs font-bold text-brand-green-dark">
                <span className="inline-flex items-center gap-1.5 bg-brand-green text-white rounded-full px-2.5 py-1 uppercase tracking-wider text-[9px] md:text-[10px]">
                  <Sparkles size={11} /> Novo
                </span>
                Software odontológico que decide o que importa por você
              </span>
            </div>

            <h1 className="text-[2.9rem] sm:text-6xl md:text-[6.5rem] font-extrabold tracking-tight text-brand-text mb-6 md:mb-8 leading-[0.98] px-1 md:px-0">
              Menos cliques.<br className="hidden sm:block" />
              <span className="text-gradient-green text-gradient-animate">Mais clareza clínica.</span>
            </h1>
            <p className="text-base md:text-2xl text-brand-text-muted max-w-3xl mx-auto mb-9 md:mb-11 leading-relaxed px-2 md:px-0 font-semibold">
              O OdontoHub é o colega de confiança que cuida da agenda e das finanças e responde só o que importa: <span className="text-brand-text font-bold">o que merece atenção agora — e o que você já pode deixar quieto.</span> Sem nada urgente, ele silencia para você focar no paciente.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-9 px-4 md:px-0">
              <a href="https://sistema.odontohub.app.br" className="w-full sm:w-auto group">
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-2xl font-bold text-base text-white bg-gradient-to-r from-brand-green-dark via-brand-green to-[#0D9488] bg-[length:200%_100%] bg-left hover:bg-right shadow-glow-green transition-[background-position,transform] duration-500 active:scale-95">
                  Começar gratuitamente
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
              <a href="#como-funciona" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-9 py-4 rounded-2xl font-bold text-base text-brand-text glass hover:border-brand-green/30 transition-colors active:scale-95">
                  Ver comportamento do sistema
                </button>
              </a>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] md:text-xs font-bold text-brand-text-muted">
              <span className="inline-flex items-center gap-1.5">
                <span className="flex -space-x-0.5 text-brand-yellow">
                  {[0, 1, 2, 3, 4].map((i) => <Star key={i} size={13} className="fill-brand-yellow" />)}
                </span>
                Amado por dentistas autônomos
              </span>
              <span className="hidden md:inline-flex items-center gap-1.5"><ShieldCheck size={14} className="text-brand-green" /> Dados criptografados</span>
              <span className="inline-flex items-center gap-1.5"><Zap size={14} className="text-brand-green" /> Grátis para começar</span>
            </div>
          </motion.div>

          {/* Device on a dark stage with floating glass chips */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-14 md:mt-20"
          >
            <div className="surface-dark relative rounded-[2rem] md:rounded-[3.5rem] px-4 pt-10 md:px-12 md:pt-16 pb-0 overflow-hidden">
              <div aria-hidden className="absolute inset-0 grain opacity-60" />
              <div aria-hidden className="absolute left-1/2 top-10 -translate-x-1/2 w-[80%] max-w-3xl h-72 conic-glow blur-3xl rounded-full opacity-80" />

              {/* Floating chips — desktop only */}
              <div className="hidden lg:block">
                <div className="float-chip absolute top-24 left-10 glass rounded-2xl px-4 py-3 text-left shadow-glow-soft">
                  <p className="text-[10px] font-bold text-brand-green-dark uppercase tracking-widest">Confirmações</p>
                  <p className="text-sm font-extrabold text-brand-text flex items-center gap-1.5"><MessageSquare size={14} className="text-brand-green" /> 8 enviadas hoje</p>
                </div>
                <div className="float-chip absolute top-44 right-8 glass rounded-2xl px-4 py-3 text-left shadow-glow-soft" style={{ animationDelay: '-2s' }}>
                  <p className="text-[10px] font-bold text-brand-green-dark uppercase tracking-widest">Caixa do mês</p>
                  <p className="text-sm font-extrabold text-brand-text flex items-center gap-1.5"><TrendingUp size={14} className="text-brand-green" /> No azul</p>
                </div>
                <div className="float-chip absolute bottom-28 left-6 glass rounded-2xl px-4 py-3 text-left shadow-glow-soft" style={{ animationDelay: '-4s' }}>
                  <p className="text-sm font-extrabold text-brand-text flex items-center gap-1.5"><CheckCircle2 size={15} className="text-brand-green" /> Nada urgente</p>
                </div>
              </div>

              <div className="relative z-10">
                <Mockup />
              </div>
              {/* Fade device into the stage floor */}
              <div aria-hidden className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B2A22] to-transparent z-20 pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Feature marquee ticker */}
        <div className="relative mt-12 md:mt-16 border-y border-brand-border/70 bg-white/40 py-4 marquee-mask">
          <div className="marquee-track gap-3">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex gap-3 pr-3" aria-hidden={dup === 1}>
                {['Agenda inteligente', 'Confirmações no WhatsApp', 'Prontuário rápido', 'Previsão de caixa', 'Encaixes automáticos', 'Retornos sugeridos por IA', 'Silêncio ativo', 'Zero papelada'].map((t, i) => (
                  <span key={i} className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-brand-border bg-white px-5 py-2 text-sm font-bold text-brand-text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green" /> {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5 MANIFESTO / DESTAQUES — faixa escura de alto contraste */}
      <section className="relative overflow-hidden surface-dark text-white py-20 md:py-32 px-5 md:px-6">
        <div aria-hidden className="absolute inset-0 grain opacity-50" />
        <div aria-hidden className="aurora-blob bg-[#0D9488]/30 w-[36rem] h-[36rem] -top-40 right-[-8rem]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-end mb-14 md:mb-20">
            <Reveal>
              <p className="text-[11px] md:text-xs font-bold text-[#5EEAD4] uppercase tracking-[0.25em] mb-5 flex items-center gap-2">
                <span className="w-7 h-px bg-[#5EEAD4]/60" /> Por que o OdontoHub existe
              </p>
              <h2 className="text-3xl md:text-6xl font-extrabold tracking-tight leading-[1.04]">
                A tecnologia deveria devolver o seu tempo — não roubar a sua atenção.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-base md:text-xl text-white/70 leading-relaxed font-medium md:pb-3">
                A maioria dos softwares te prende na tela com gráficos e alertas que fingem urgência. Nós invertemos a lógica: filtramos o ruído, recomendamos a próxima ação e ficamos em silêncio quando está tudo certo. O lugar de um dentista é diante do paciente.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
            {[
              { big: '< 2 min', label: 'por dia para organizar o consultório' },
              { big: 'R$ 0', label: 'para começar — grátis para sempre' },
              { big: '0', label: 'alertas inúteis ou pop-ups invasivos' },
              { big: '100%', label: 'do seu foco onde importa: o paciente' }
            ].map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="h-full bg-[#0B2A22] p-6 md:p-9 text-left hover:bg-[#0e362b] transition-colors">
                  <p className="text-3xl md:text-5xl font-extrabold tracking-tight text-gradient-green text-gradient-animate">{s.big}</p>
                  <p className="text-xs md:text-sm text-white/55 font-semibold mt-2 leading-snug">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROBLEMA + COMPORTAMENTO INTELIGENTE */}
      <Section className="bg-white" id="como-funciona">
        <SectionHeader 
          title="A odontologia está sufocada por decisões administrativas e planilhas confusas."
          subtitle="A maioria dos softwares despeja dezenas de gráficos e notificações inúteis para prender sua atenção no computador. Nós fazemos o oposto: filtramos o ruído para que você foque onde realmente faz a diferença: diante do seu paciente."
        />

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start mb-20 md:mb-32 text-left">
          {/* Center VS divider */}
          <div aria-hidden className="hidden md:flex absolute left-1/2 top-14 -translate-x-1/2 z-10 w-12 h-12 rounded-full bg-white border border-brand-border shadow-glow-soft items-center justify-center text-[10px] font-extrabold uppercase tracking-widest text-brand-text-muted">
            vs
          </div>

          <div className="space-y-5 md:space-y-6">
            <h4 className="text-[10px] md:text-xs font-bold text-brand-text/40 uppercase tracking-[0.2em] mb-2 md:mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-brand-text/20" /> Sistemas tradicionais de papelada digital
            </h4>
            {[
              { title: "Acúmulo de dados sem utilidade prática", text: "Você abre o sistema e vê dezenas de relatórios vazios e históricos antigos. O esforço mental de tentar entender o que de fato precisa ser feito continua sendo inteiramente seu." },
              { title: "Gráficos e notificações para te prender na tela", text: "Alertas desnecessários que fingem urgência só para fazer parecer que o software é útil, deixando a sua rotina mais cansativa e gerando ansiedade desnecessária." },
              { title: "Celebrando pequenas tarefas normais", text: "Pop-ups invasivos de aprovação que sobrecarregam sua rotina e tratam você como criança, em vez de respeitarem o seu profissionalismo." }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="p-6 md:p-8 bg-slate-50/70 rounded-3xl border border-slate-100 flex flex-col gap-1.5 grayscale-[0.2] opacity-90">
                  <p className="font-bold text-brand-text/80 text-base md:text-lg tracking-tight line-through decoration-brand-red/40 decoration-1">{item.title}</p>
                  <p className="text-sm text-brand-text-muted leading-relaxed font-semibold">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="space-y-5 md:space-y-6 mt-10 md:mt-0">
            <h4 className="text-[10px] md:text-xs font-bold text-brand-green uppercase tracking-[0.2em] mb-2 md:mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-brand-green/40" /> O Jeito OdontoHub de trabalhar
            </h4>
            {[
              { title: "Contextos claros em vez de números soltos", text: "Não mostramos apenas 'você tem 12 pacientes amanhã'. Mostramos e destacamos o que importa: 'Você tem 12 pacientes amanhã, e 3 deles precisam de confirmação rígida ainda hoje'." },
              { title: "Direcionamento claro sobre o próximo passo", text: "Toda informação exibida pelo OdontoHub responde à pergunta essencial: 'O que eu preciso fazer com isso?'. Oferecemos a próxima melhor ação em segundos." },
              { title: "Silêncio ativo para a sua paz de espírito", text: "Proteger o seu sossego é o nosso dever. Se tudo na clínica está organizado e sob controle, o sistema silencia para você poder descansar sem peso na consciência." }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="card-lift p-6 md:p-8 !bg-gradient-to-br !from-brand-green-soft/80 !to-white !border-brand-green/10 flex gap-4">
                  <div className="shrink-0 mt-0.5 w-7 h-7 rounded-full bg-brand-green text-white flex items-center justify-center shadow-sm">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <p className="font-bold text-brand-green-dark text-base md:text-lg tracking-tight">{item.title}</p>
                    <p className="text-sm text-brand-green-dark/70 leading-relaxed font-semibold">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. PRÓXIMA MELHOR AÇÃO */}
      <Section className="bg-white">
        <SectionHeader 
          title="Nossos princípios de simplicidade"
          subtitle="O produto deve fazer o trabalho administrativo chato para o dentista não precisar se preocupar. Seguimos regras rígidas de respeito ao seu tempo e foco clínico."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 text-left">
          {[
            { label: "Diretriz 1", title: "O que fazer em seguida", text: "Dados soltos sem uma ação recomendada para a sua rotina clínica são apenas ruído e desperdício de tempo.", icon: Brain, tile: "bg-brand-academy-soft text-brand-academy", accent: "text-brand-academy" },
            { label: "Diretriz 2", title: "Ações bem definidas", text: "Se não houver uma solução prática sugerida, nós preferimos poupar você e não exibir o aviso.", icon: Bell, tile: "bg-brand-yellow-soft text-brand-yellow", accent: "text-brand-yellow" },
            { label: "Diretriz 3", title: "Preservar seu descanso", text: "Quando tudo no consultório estiver em ordem, nós não inventamos alertas falsos. Aproveite o seu silêncio.", icon: Clock, tile: "bg-brand-green-soft text-brand-green", accent: "text-brand-green" },
            { label: "Diretriz 4", title: "Sem enrolação técnica", text: "Toda a complexidade e programação de bastidores rodam longe dos seus olhos para deixar sua tela limpa.", icon: CheckCircle2, tile: "bg-brand-green-soft text-brand-green", accent: "text-brand-green" }
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.08} className="h-full">
              <div className="card-lift p-6 md:p-8 flex flex-col h-full text-left group">
                <div className={`p-2.5 md:p-3 rounded-2xl w-fit mb-4 md:mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 ${item.tile}`}>
                  <item.icon size={20} className="md:w-[22px] md:h-[22px]" />
                </div>
                <p className={`text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-1 ${item.accent}`}>{item.label}</p>
                <h3 className="font-bold text-brand-text text-base md:text-lg mb-3">{item.title}</h3>
                <p className="text-brand-text-muted text-xs md:text-sm leading-relaxed font-semibold">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 5. RECURSOS ESSENCIAIS — bento grid */}
      <Section className="bg-brand-bg-alt" id="recursos">
        <div className="mb-12 md:mb-16 text-center">
          <p className="text-[11px] md:text-xs font-bold text-brand-green uppercase tracking-[0.25em] mb-4 flex items-center justify-center gap-2">
            <span className="w-7 h-px bg-brand-green/40" /> Tudo o que importa, em um lugar <span className="w-7 h-px bg-brand-green/40" />
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-brand-text leading-tight">
            Sua rotina simplificada, de uma vez por todas.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 text-left auto-rows-[minmax(0,1fr)]">
          {/* Large dark feature tile */}
          <Reveal className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
            <div className="bento-dark relative h-full rounded-[1.75rem] p-7 md:p-10 overflow-hidden flex flex-col justify-between min-h-[20rem]">
              <div aria-hidden className="absolute inset-0 grain opacity-40" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#5EEAD4] flex items-center justify-center mb-6">
                  <LayoutDashboard size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">Painel inteligente do dia</h3>
                <p className="text-white/65 text-sm md:text-base leading-relaxed font-medium max-w-md">
                  Sua única lista diária de tarefas. Mostra o que precisa de atenção imediata e sai do seu caminho rapidamente.
                </p>
              </div>
              {/* Mini dashboard preview */}
              <div className="relative z-10 mt-8 space-y-2.5">
                {[
                  { t: 'Confirmar 2 pacientes de amanhã', tag: 'Agir agora', urgent: true },
                  { t: '3 retornos de prótese sugeridos', tag: 'Encaixe', urgent: false }
                ].map((row, i) => (
                  <div key={i} className="glass !bg-white/10 !border-white/10 rounded-2xl px-4 py-3 flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-white flex items-center gap-2.5">
                      <span className={`w-2 h-2 rounded-full ${row.urgent ? 'bg-[#FBBF24]' : 'bg-[#5EEAD4]'}`} /> {row.t}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/60 shrink-0">{row.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Small tiles */}
          {[
            { t: "Previsão inteligente de agenda", d: "Identifica janelas vazias na sua semana e sugere retornos de forma discreta.", icon: Calendar },
            { t: "Prontuário prático e rápido", d: "Sem campos desnecessários. Registre o histórico clínico de forma rápida e higiênica.", icon: ClipboardList },
            { t: "Reagendamentos simplificados", d: "Localiza automaticamente pacientes esperando vaga em desmarques de última hora.", icon: Users },
            { t: "Confirmações no WhatsApp", d: "Disparos elegantes para confirmações de consultas e levantamento pré-clínico.", icon: MessageSquare }
          ].map((r, i) => (
            <Reveal key={i} delay={(i % 2) * 0.08} className="h-full">
              <div className="card-lift relative p-6 md:p-7 h-full overflow-hidden group">
                <div className="w-11 h-11 rounded-2xl bg-brand-green-soft text-brand-green flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-brand-green group-hover:text-white">
                  <r.icon size={20} />
                </div>
                <h3 className="font-bold text-base md:text-lg text-brand-text mb-1.5 group-hover:text-brand-green transition-colors">{r.t}</h3>
                <p className="text-brand-text-muted text-xs md:text-sm leading-relaxed font-semibold">{r.d}</p>
              </div>
            </Reveal>
          ))}

          {/* Wide cashflow tile */}
          <Reveal className="sm:col-span-2 lg:col-span-4">
            <div className="card-lift relative h-full p-7 md:p-9 overflow-hidden group flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex-1">
                <div className="w-11 h-11 rounded-2xl bg-brand-green-soft text-brand-green flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-brand-green group-hover:text-white">
                  <TrendingUp size={20} />
                </div>
                <h3 className="font-bold text-lg md:text-xl text-brand-text mb-1.5 group-hover:text-brand-green transition-colors">Fluxo de caixa sob controle</h3>
                <p className="text-brand-text-muted text-xs md:text-sm leading-relaxed font-semibold max-w-sm">
                  Projeta contas e entradas das próximas semanas e avisa com antecedência discreta se houver risco de caixa.
                </p>
              </div>
              {/* Mini bar chart */}
              <div className="flex items-end gap-1.5 h-24 shrink-0" aria-hidden>
                {[40, 55, 48, 70, 62, 88, 100].map((h, i) => (
                  <span key={i} className="w-3 md:w-4 rounded-full bg-gradient-to-t from-brand-green/30 to-brand-green" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 6. PORTAL DO PACIENTE */}
      <Section className="bg-white overflow-hidden" id="portal">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="w-full md:w-5/12 order-2 md:order-1 relative overflow-hidden py-10">
            <div className="relative mx-auto w-[280px] md:w-[320px] aspect-[9/19] bg-brand-bg border-[8px] border-brand-green-dark rounded-[3rem] shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-brand-green-dark rounded-b-2xl z-20" />
              <div className="p-6 pt-10 h-full flex flex-col bg-brand-bg text-left">
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-6 h-6 bg-brand-green rounded-md flex items-center justify-center text-[10px] text-white font-bold">OH</div>
                  <span className="text-[10px] font-bold text-brand-green-dark uppercase tracking-widest">Confirmações no WhatsApp</span>
                </div>
                
                <h6 className="text-xl font-bold text-brand-text mb-6">Olá, Carlos Edu.<br/><span className="text-brand-green text-sm">Sua próxima visita é amanhã às 17h.</span></h6>
                
                <div className="space-y-3">
                  {[
                    { label: "Confirmar minha ida", icon: CheckCircle2, color: "bg-brand-green text-white" },
                    { label: "Orientações da cirurgia", icon: ClipboardList, color: "bg-white text-brand-text border border-brand-border" },
                    { label: "Atualizar ficha médica", icon: UserCircle, color: "bg-white text-brand-text border border-brand-border" },
                    { label: "Dúvidas pós-atendimento", icon: MessageSquare, color: "bg-white text-brand-text border border-brand-border" }
                  ].map((btn, i) => (
                    <div key={i} className={`p-4 rounded-2xl flex items-center gap-3 font-bold text-xs shadow-sm ${btn.color}`}>
                      <btn.icon size={16} />
                      {btn.label}
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto p-4 bg-brand-academy-soft rounded-2xl border border-brand-academy/10">
                  <p className="text-[10px] font-bold text-brand-academy uppercase mb-1">Dica de hoje</p>
                  <p className="text-[10px] text-brand-text/70 leading-relaxed font-medium">Beba bastante água após o procedimento de amanhã.</p>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />
          </div>
          
          <div className="w-full md:w-7/12 order-1 md:order-2 text-left">
            <p className="text-[10px] md:text-xs font-bold text-brand-green uppercase tracking-[0.2em] mb-4">Autonomia para o paciente</p>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-6 leading-tight">O paciente confirma o horário sem precisar ligar para a clínica.</h2>
            <p className="text-lg text-brand-text/80 mb-10 leading-relaxed font-medium">
              A página de confirmações do OdontoHub reduz a dependência de ligações telefônicas e trocas de mensagens manuais com a recepção. Pelo próprio celular, o paciente confirma seus horários, preenche o questionário de saúde prévio e recebe orientações de cuidados de forma direta e sem papelada física.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {[
                { t: "Confirmar com um toque", d: "Atualização automática e instantânea no painel do seu consultório." },
                { t: "Ficha clínica pré-preenchida", d: "Histórico básico de saúde preenchido pelo paciente antes do atendimento." },
                { t: "Alertas pós-procedimento", d: "Instruções importantes enviadas automaticamente após os tratamentos mais delicados." },
                { t: "Praticidade e discrição", d: "Uma experiência leve e confortável, valorizando o tempo e a privacidade de quem você atende." }
              ].map((f, i) => (
                <div key={i}>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 size={16} className="text-brand-green" />
                    <span className="font-bold text-brand-text text-sm">{f.t}</span>
                  </div>
                  <p className="text-xs text-brand-text-muted leading-relaxed font-semibold pl-6">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <Section className="bg-[#FAF9F5] border-y border-brand-border/30" id="demonstracao">
        <SectionHeader 
          title="O sistema de gestão por dentro"
          subtitle="Explore as principais telas reais do OdontoHub. Nossa interface tira a papelada do seu caminho para que você foque inteiramente no seu paciente."
        />
        <SystemMockupShowcase />
      </Section>

      <Section className="bg-white" id="depoimentos">
        <Testimonials />
      </Section>

      <Section id="planos" className="bg-gradient-to-b from-brand-green-soft/40 to-brand-bg">
        <div className="mb-12 md:mb-16 text-center">
          <p className="text-[11px] md:text-xs font-bold text-brand-green uppercase tracking-[0.25em] mb-4 flex items-center justify-center gap-2">
            <span className="w-7 h-px bg-brand-green/40" /> Planos &amp; preços <span className="w-7 h-px bg-brand-green/40" />
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-brand-text leading-tight mb-5">
            Comece com a organização básica. Evolua para a clareza total.
          </h2>
          <p className="text-base md:text-lg text-brand-text/80 max-w-2xl mx-auto leading-relaxed font-medium">
            Do gratuito ao Pro, escolha a cobertura ideal para as necessidades do seu consultório ou clínica solo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch px-2 md:px-0 text-left">
          <div className="premium-card p-8 md:p-10 flex flex-col">
            <p className="text-[10px] md:text-xs font-bold text-brand-text-muted uppercase tracking-widest mb-1.5 md:mb-2">Organização Essencial</p>
            <h3 className="text-xl md:text-2xl font-bold text-brand-text mb-1">OdontoHub Gratuito</h3>
            <div className="flex items-baseline gap-1 my-5 md:my-6">
              <span className="text-3xl md:text-4xl font-bold">R$ 0</span>
              <span className="text-brand-text-muted text-xs md:text-sm">grátis para sempre</span>
            </div>
            
            <ul className="space-y-3.5 mb-8 md:mb-12 flex-grow">
              {[
                "Limite de pacientes ativos",
                "Limite de agendamentos mensais",
                "Inteligência Artificial e previsões limitadas",
                "Histórico de pacientes centralizado",
                "Fichas clínicas e agendas básicas",
                "Visual limpo e sem anúncios"
              ].map((feat) => (
                <li key={feat} className="flex items-center gap-3 text-sm text-brand-text/90 font-medium">
                  <CheckCircle2 size={16} className="text-brand-green/60 shrink-0" /> {feat}
                </li>
              ))}
            </ul>
            
            <a href="https://sistema.odontohub.app.br" className="w-full">
              <Button variant="outline" className="w-full py-4 rounded-xl border-2 text-xs uppercase tracking-wider font-extrabold text-brand-green border-brand-green hover:bg-brand-green/5">Criar conta gratuita</Button>
            </a>
          </div>

          <div className="gradient-ring card-lift p-8 md:p-10 flex flex-col rounded-3xl relative lg:-mt-4 lg:mb-4 shadow-glow-soft">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-green text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md shadow-brand-green/30 whitespace-nowrap">Mais Popular Solo</div>
            <p className="text-[10px] md:text-xs font-bold text-brand-text-muted uppercase tracking-widest mb-1.5 md:mb-2">Crescimento Sustentável</p>
            <h3 className="text-xl md:text-2xl font-bold text-brand-text mb-1">OdontoHub Essencial</h3>
            <div className="flex items-baseline gap-1 my-5 md:my-6">
              <span className="text-3xl md:text-4xl font-bold text-brand-text">R$ 49,90</span>
              <span className="text-brand-text-muted text-xs md:text-sm">/mês</span>
            </div>
            
            <ul className="space-y-3.5 mb-8 md:mb-12 flex-grow">
              {[
                "Até 150 pacientes e prontuários ativos",
                "Até 150 agendamentos por mês",
                "Modelos de mensagens e confirmação manual no WhatsApp",
                "Histórico clínico e prontuário fotográfico",
                "Dashboard financeiro simplificado",
                "Suporte prioritário por e-mail e chat",
                "Envio avulso de receitas e atestados"
              ].map((feat) => (
                <li key={feat} className="flex items-center gap-3 text-sm text-brand-text/95 font-medium">
                  <CheckCircle2 size={16} className="text-brand-green shrink-0" /> {feat}
                </li>
              ))}
            </ul>
            
            <a href="https://sistema.odontohub.app.br" className="w-full">
              <Button variant="outline" className="w-full py-4 rounded-xl border-2 text-xs uppercase tracking-wider font-extrabold text-[#111827] border-slate-300 hover:bg-slate-50">Assinar Essencial</Button>
            </a>
          </div>

          <div className="p-8 md:p-10 flex flex-col rounded-3xl text-white border-none shadow-glow-green relative overflow-hidden bg-gradient-to-br from-brand-green-dark via-brand-green to-[#0D9488]">
            <div aria-hidden className="absolute -top-16 -right-16 w-56 h-56 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -top-3 right-6 md:right-8 bg-white/15 backdrop-blur-sm text-[9px] md:text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg text-white border border-white/20">Automação Inteligente</div>
            <p className="text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-widest mb-1.5 md:mb-2">Paz e automação completa</p>
            <h3 className="text-xl md:text-2xl font-bold mb-1 text-white">OdontoHub Pro</h3>
            <div className="flex items-baseline gap-1 my-5 md:my-6">
              <span className="text-3xl md:text-4xl font-bold text-white tracking-tight">R$ 99,90</span>
              <span className="text-white/40 text-xs md:text-sm">/mês</span>
            </div>
            
            <ul className="space-y-4 mb-8 md:mb-12 flex-grow">
              {[
                "Pacientes e prontuários ILIMITADOS",
                "Agendamentos e calendário ILIMITADOS",
                "Acesso total e IRRESTRITO à Inteligência Artificial",
                "Sugestões de encaixe automáticas por IA",
                "Lembretes e retornos inteligentes ativos",
                "Painel exclusivo do que fazer hoje",
                "Previsão financeira de caixa discreta"
              ].map((feat) => (
                <li key={feat} className="flex items-center gap-3 text-sm font-semibold text-white">
                  <CheckCircle2 size={16} className="text-white/30 shrink-0" /> {feat}
                </li>
              ))}
            </ul>
            
            <a href="https://sistema.odontohub.app.br" className="w-full">
              <Button className="w-full bg-brand-green-dark text-white shadow-xl shadow-brand-green-dark/20 hover:opacity-90 border-none transition-all py-5 text-base font-bold rounded-xl">Quero a tranquilidade do Pro</Button>
            </a>
          </div>
        </div>
      </Section>

      {/* 7. TEASER ACADEMY */}
      <Section className="bg-brand-bg-alt border-y border-brand-border" id="academy">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 px-2 md:px-12 text-left">
          <div className="w-full md:w-1/2">
            <div className="p-2.5 md:p-3 bg-brand-academy-soft w-fit rounded-xl md:rounded-2xl mb-6 md:mb-8">
              <GraduationCap className="text-brand-academy w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-5 md:mb-6 leading-tight">Para quem está na faculdade:<br className="hidden md:block" /> <span className="text-brand-academy">OdontoHub Academy.</span></h2>
            <p className="text-base md:text-lg text-brand-text-muted leading-relaxed mb-6 md:mb-8 font-medium">
              Especialmente planejado para a realidade das clínicas das universidades de odontologia. O Academy funciona guiando você em cada etapa clínica, organizando materiais e preparando suas anotações para desocupar sua mente do nervosismo operacional.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 mb-8 md:mb-10">
              {["Checklists de instrumental por clínica", "Registro rápido de evolução clínica", "Organização organizada por consultório", "Arquivamento fácil de fotos de tratamento"].map(t => (
                <div key={t} className="flex items-center gap-2.5 text-sm font-bold text-brand-text">
                  <div className="w-1.5 h-1.5 bg-brand-academy rounded-full shrink-0" /> {t}
                </div>
              ))}
            </div>
            <Link to="/academy">
              <Button variant="ghost" className="px-0 flex items-center gap-2 group text-brand-academy hover:text-brand-academy">
                Ver o OdontoHub Academy <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          <div className="w-full md:w-1/2 mt-12 md:mt-0">
             <div className="relative group mx-auto max-w-[400px] md:max-w-none">
                <div className="absolute -inset-4 bg-brand-academy/5 rounded-[3rem] blur-2xl group-hover:bg-brand-academy/10 transition-all duration-700" />
                <div className="relative bg-white border border-brand-border rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col group-hover:shadow-brand-academy/10 transition-all duration-700">
                  {/* Academy UI Mockup */}
                  <div className="p-6 md:p-10 space-y-6 md:space-y-8 bg-white">
                     <div className="space-y-1 md:space-y-1.5">
                        <p className="text-[9px] md:text-xs font-bold text-slate-400">Boa noite, Samuel</p>
                        <h3 className="text-lg md:text-3xl font-semibold text-brand-text tracking-tight leading-tight">Sem pressa. O próximo caso já está na mão.</h3>
                     </div>

                     <div className="bg-brand-academy rounded-[1.2rem] md:rounded-[2rem] p-4 md:p-8 text-white relative overflow-hidden">
                        <div className="relative z-10">
                           <p className="text-[7px] md:text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1.5 md:mb-2">Próximo</p>
                           <div className="flex justify-between items-start">
                              <div>
                                 <h4 className="text-base md:text-2xl font-bold tracking-tight">Marcos Roberto Junior</h4>
                                 <div className="flex gap-1.5 mt-2 md:mt-3">
                                    <span className="px-2 md:px-3 py-0.5 md:py-1 bg-white/20 rounded-full text-[6px] md:text-[9px] font-bold uppercase tracking-widest">Agendado</span>
                                    <span className="px-2 md:px-3 py-0.5 md:py-1 bg-white/10 rounded-full text-[6px] md:text-[9px] font-bold uppercase tracking-widest">Amanhã, 09:30</span>
                                 </div>
                              </div>
                              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-lg md:rounded-xl flex items-center justify-center text-xs md:text-lg font-bold shrink-0">M</div>
                           </div>
                        </div>
                        <div className="absolute top-0 right-0 w-32 md:w-48 h-32 md:h-48 bg-white/5 rounded-full blur-2xl md:blur-3xl -mr-16 md:-mr-24 -mt-16 md:-mt-24" />
                     </div>

                     <div className="bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl p-4 md:p-6 flex items-center gap-3 md:gap-4">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-lg md:rounded-xl flex items-center justify-center text-brand-academy shadow-sm shrink-0">
                           <Clock size={16} />
                        </div>
                        <div>
                           <p className="text-[7px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">Agenda a seguir</p>
                           <p className="font-bold text-brand-text text-[10px] md:text-sm">Lucas Medeiros • Extração</p>
                        </div>
                     </div>
                  </div>

                  {/* Tab Bar */}
                  <div className="h-12 md:h-16 bg-white border-t border-slate-100 flex items-center justify-around px-4 md:px-6">
                     <div className="flex flex-col items-center gap-0.5 md:gap-1 text-brand-academy">
                        <Layout size={14} className="md:size-4" />
                        <span className="text-[6px] md:text-[9px] font-bold uppercase">Rotina</span>
                     </div>
                     <div className="flex flex-col items-center gap-1 text-slate-300">
                        <Calendar size={14} />
                     </div>
                     <div className="flex flex-col items-center gap-1 text-slate-300">
                        <Users size={14} />
                     </div>
                     <div className="flex flex-col items-center gap-1 text-slate-300">
                        <ClipboardList size={14} />
                     </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* 8. FAQ */}
      <Section className="bg-white">
        <SectionHeader title="Dúvidas frequentes" />
        <div className="max-w-3xl mx-auto space-y-3 md:space-y-4 text-left">
          {[
            { q: "O OdontoHub é como um sistema odontológico tradicional?", a: "Não. Os sistemas tradicionais funcionam apenas como arquivos digitais para você preencher papéis e relatórios que raramente usa. O OdontoHub faz o oposto: ele lê os dados do seu consultório e transforma tudo em uma lista simples e organizada de afazeres. Se não houver nada pendente ou urgente, o sistema fica em total silêncio para você desligar a mente do trabalho." },
            { q: "O que eu recebo no plano Pro?", a: "O plano gratuito organiza perfeitamente sua agenda de consultas e fichas de pacientes. O plano Pro ativa os lembretes automáticos para pacientes faltantes, avisos discretos de previsão financeira para planejar o caixa das próximas semanas e facilidades adicionais para simplificar seu dia a dia." },
            { q: "Como meus dados são protegidos?", a: "Nós tratamos seus dados e os dados de seus pacientes com respeito máximo. Toda a informação é guardada de forma segura e criptografada em servidores protegidos. Nós não exibimos anúncios comerciais e jamais vendemos ou compartilhamos dados com terceiros." },
            { q: "Eu realmente vou gastar menos tempo na frente do computador?", a: "Esse é o nosso grande objetivo. Criamos o OdontoHub para que você consiga planejar os encaixes da sua semana, confirmar suas consultas e salvar as evoluções clínicas em menos de 2 minutos por dia. Nosso sucesso é ver você fechando o aplicativo sabendo que está tudo sob controle." }
          ].map((faq, i) => (
            <details key={i} className="group rounded-2xl md:rounded-3xl border border-brand-border overflow-hidden bg-brand-bg-alt">
              <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer font-bold text-brand-text list-none group-open:bg-white transition-colors text-sm md:text-base">
                {faq.q}
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white flex items-center justify-center group-open:rotate-180 transition-transform shadow-sm shrink-0 ml-4">
                  <ChevronRight size={14} className="md:w-4 md:h-4" />
                </div>
              </summary>
              <div className="p-5 md:p-6 border-t border-brand-border bg-white text-xs md:text-sm text-brand-text/80 leading-relaxed font-semibold">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </Section>

      {/* 9. CTA FINAL */}
      <Section className="pb-10 md:pb-20 pt-0">
        <div className="rounded-[2.5rem] md:rounded-[5rem] py-14 px-6 md:p-32 text-white text-center relative overflow-hidden bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-dark">
          {/* Ambient mesh */}
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <div className="aurora-blob bg-[#0D9488]/40 w-96 h-96 -top-24 -left-10" />
            <div className="aurora-blob bg-[#10B981]/30 w-96 h-96 -bottom-24 right-0" style={{ animationDelay: '-6s' }} />
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)', backgroundSize: '26px 26px', maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000, transparent 75%)', WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000, transparent 75%)' }} />
          </div>
          <Reveal className="relative z-10 max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-1.5 text-[11px] md:text-xs font-bold uppercase tracking-widest text-white/80 mb-7">
              <Sparkles size={13} /> Comece em minutos
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-7xl font-extrabold mb-8 md:mb-12 leading-[1.05] tracking-tight">Traga clareza e tranquilidade de volta para o seu consultório.</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <a href="https://sistema.odontohub.app.br" className="w-full sm:w-auto group">
                <button className="w-full inline-flex items-center justify-center gap-2 px-12 py-5 bg-white text-brand-green-dark font-extrabold shadow-2xl rounded-2xl hover:scale-[1.02] active:scale-95 transition-transform">
                  Começar gratuitamente
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
            </div>
            <p className="mt-6 text-xs md:text-sm font-semibold text-white/60">Sem cartão de crédito · Grátis para sempre no plano inicial</p>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
