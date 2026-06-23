import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import {
  Calendar,
  Users,
  ClipboardList,
  CheckCircle2,
  Clock,
  TrendingUp,
  MessageSquare,
  GraduationCap,
  Layout,
  ArrowRight,
  ChevronRight,
  CalendarPlus,
  HeartPulse,
  FileText,
  Plus,
  ShieldCheck,
  CircleDollarSign
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/shared/UI';
import Testimonials from '../components/shared/Testimonials';
import SystemMockupShowcase from '../components/shared/SystemMockupShowcase';

/* ---------------------------------------------------------------- helpers */

const Reveal = ({
  children,
  delay = 0,
  y = 24,
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

const Check = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3 text-[15px] md:text-base font-semibold text-brand-text">
    <CheckCircle2 size={18} className="text-brand-green shrink-0 mt-0.5" /> {children}
  </li>
);

const Avatar = ({ initials, ring = false }: { initials: string; ring?: boolean }) => (
  <div className="relative shrink-0">
    <div className="w-9 h-9 rounded-full bg-brand-green-soft text-brand-green-dark border border-brand-green/15 flex items-center justify-center font-bold text-xs">
      {initials}
    </div>
    {ring && <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-brand-yellow border-2 border-white rounded-full" />}
  </div>
);

/* The green "next appointment" card — the brand's signature block */
const NextAppointment = ({ compact = false }: { compact?: boolean }) => (
  <div className={`bg-gradient-to-br from-brand-green-dark to-[#0d3a2f] text-white rounded-3xl relative overflow-hidden ${compact ? 'p-5' : 'p-6 md:p-7'}`}>
    <div aria-hidden className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
    <p className="text-[10px] font-bold text-white/50 uppercase tracking-[0.15em] mb-2">Próximo atendimento</p>
    <h4 className="font-display text-2xl md:text-3xl font-semibold tracking-tight leading-none">Roberto Carlos</h4>
    <div className="flex gap-2 mt-3">
      <span className="px-3 py-1 bg-white/12 rounded-full text-[10px] font-bold uppercase tracking-wider">Agendado</span>
      <span className="px-3 py-1 bg-white/8 rounded-full text-[10px] font-bold uppercase tracking-wider">em 41 min</span>
    </div>
    <div className="flex items-end justify-between mt-6">
      <div>
        <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.15em] mb-1">Procedimento</p>
        <p className="font-bold text-sm md:text-base">Canal · dente 23</p>
      </div>
      <div className="text-right">
        <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.15em] mb-1">Horário</p>
        <p className="font-display text-2xl md:text-3xl font-semibold leading-none">16:00</p>
      </div>
    </div>
    {!compact && (
      <button className="mt-6 w-full py-3.5 bg-white text-brand-green-dark rounded-2xl font-bold text-sm hover:bg-white/90 transition-colors">
        Atender
      </button>
    )}
  </div>
);

/* Editorial section header with mono index label */
const FeatureRow = ({
  index,
  label,
  title,
  body,
  bullets,
  flip = false,
  children
}: {
  index: string;
  label: string;
  title: React.ReactNode;
  body: React.ReactNode;
  bullets: string[];
  flip?: boolean;
  children: React.ReactNode;
}) => (
  <section className="py-16 md:py-28 px-5 md:px-6 scroll-mt-24">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <Reveal className={flip ? 'lg:order-2' : ''}>
        <p className="section-index text-brand-green mb-5">
          {index} <span className="text-brand-text-muted/50">— {label}</span>
        </p>
        <h2 className="font-display text-3xl md:text-[2.75rem] font-semibold text-brand-text leading-[1.08] tracking-tight mb-6">
          {title}
        </h2>
        <p className="text-base md:text-lg text-brand-text-muted leading-relaxed font-medium mb-8 max-w-xl">
          {body}
        </p>
        <ul className="space-y-3.5">
          {bullets.map((b) => <Check key={b}>{b}</Check>)}
        </ul>
      </Reveal>
      <Reveal delay={0.1} className={`relative ${flip ? 'lg:order-1' : ''}`}>
        <div aria-hidden className="absolute -inset-6 bg-brand-green/[0.04] rounded-[3rem] blur-2xl -z-10" />
        {children}
      </Reveal>
    </div>
  </section>
);

/* ---------------------------------------------------------------- page */

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

      {/* ============================================ HERO */}
      <section className="relative overflow-hidden pt-32 md:pt-44 pb-16 md:pb-24 px-5 md:px-6">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 dot-grid opacity-50" />
          <div className="absolute top-[-12rem] right-[-10rem] w-[40rem] h-[40rem] bg-brand-green/[0.07] rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-green-soft border border-brand-green/15 pl-3 pr-4 py-1.5 text-[11px] md:text-xs font-bold text-brand-green-dark uppercase tracking-[0.12em] mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
              Software de gestão para consultório odontológico
            </span>

            <h1 className="font-display text-5xl sm:text-6xl md:text-[5.5rem] font-semibold text-brand-text leading-[0.98] tracking-tight mb-7">
              Menos caos.<br />
              <em className="not-italic md:italic text-brand-green font-medium">Mais clareza para cuidar.</em>
            </h1>

            <p className="text-lg md:text-xl text-brand-text-muted leading-relaxed font-medium max-w-xl mb-9">
              Você se formou para cuidar de gente, não para virar gestor da noite para o dia. O <span className="font-bold text-brand-text">OdontoHub</span> cuida da agenda, dos pacientes, do prontuário e do financeiro — e mostra o que precisa da sua atenção hoje.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-7">
              <a href="https://sistema.odontohub.app.br" className="w-full sm:w-auto group">
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-base text-white bg-brand-green-dark hover:bg-brand-green shadow-glow-soft transition-colors active:scale-95">
                  Começar grátis
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
              <a href="#como-funciona" className="text-sm font-bold text-brand-text hover:text-brand-green transition-colors inline-flex items-center gap-1.5">
                Ver como funciona <ChevronRight size={16} />
              </a>
            </div>

            <p className="section-index text-brand-text-muted/70">
              Grátis para começar · Sem cartão de crédito · Pronto em minutos
            </p>
          </motion.div>

          {/* Phone mockup + floating finance chip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div aria-hidden className="absolute inset-0 bg-brand-green/[0.06] rounded-full blur-3xl scale-90" />
            {/* Phone frame */}
            <div className="relative w-[290px] sm:w-[320px] bg-[#0f1714] rounded-[2.8rem] p-2.5 shadow-2xl border border-black/5">
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#0f1714] rounded-b-2xl z-20" />
              <div className="bg-brand-bg rounded-[2.3rem] overflow-hidden h-[560px] px-5 pt-12 pb-5 flex flex-col">
                <p className="text-xs text-brand-text-muted font-semibold mb-1">Boa tarde, doutor 👋</p>
                <h3 className="font-display text-2xl font-semibold text-brand-text leading-tight tracking-tight mb-5">
                  Mais 2 e o dia está feito.
                </h3>
                <NextAppointment compact />
                <div className="mt-4 flex items-center justify-between bg-white border border-brand-border rounded-2xl px-4 py-3">
                  <span className="text-xs font-bold text-brand-text">Precisam de atenção</span>
                  <span className="text-xs font-bold text-brand-yellow">5</span>
                </div>
                <div className="mt-3 flex items-center gap-3 px-1">
                  <Avatar initials="M" ring />
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-brand-text leading-none">Moacir Gonçalves</p>
                    <p className="text-[10px] text-brand-text-muted mt-1">1 sem · sem retorno</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating finance chip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="float-chip absolute top-16 -right-2 sm:right-0 lg:-right-6 glass rounded-2xl pl-3 pr-4 py-3 flex items-center gap-3 shadow-glow-soft"
            >
              <span className="w-9 h-9 rounded-xl bg-brand-green-soft text-brand-green flex items-center justify-center">
                <CircleDollarSign size={18} />
              </span>
              <div className="text-left">
                <p className="text-[10px] font-bold text-brand-text-muted uppercase tracking-wider">Faturamento hoje</p>
                <p className="font-display text-lg font-semibold text-brand-text leading-none">R$ 2.250</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================ 01 — INÍCIO */}
      <div className="bg-white border-y border-brand-border/60" id="como-funciona">
        <FeatureRow
          index="01"
          label="Início"
          title={<>Abre o app e <em className="italic text-brand-green font-medium">já sabe o que fazer agora.</em></>}
          body="Próximo paciente, quem precisa de retorno, quanto entrou hoje. A tela inicial não é um painel cheio de gráfico — é o seu dia, em ordem."
          bullets={[
            'Próximo atendimento sempre no topo',
            'Lista de quem precisa de atenção',
            'Adicionar paciente ou consulta em 1 toque'
          ]}
        >
          <div className="bg-white border border-brand-border rounded-[2rem] shadow-glow-soft p-5 md:p-6 max-w-md mx-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="font-display text-xl font-semibold text-brand-text">Hoje</span>
              <span className="section-index text-brand-text-muted">2 consultas</span>
            </div>
            <NextAppointment />
            <div className="flex items-center justify-between mt-6 mb-3">
              <span className="flex items-center gap-2 text-sm font-bold text-brand-text">
                <span className="w-[3px] h-4 bg-brand-yellow rounded-full" /> Precisam de atenção
              </span>
              <span className="text-xs font-bold text-brand-yellow">5</span>
            </div>
            <div className="space-y-3">
              {[
                { n: 'Moacir Gonçalves', m: '1 sem · sem retorno', i: 'M' },
                { n: 'Juraci Alvarenga', m: '4 dias · sem retorno', i: 'J' }
              ].map((p) => (
                <div key={p.n} className="flex items-center gap-3">
                  <Avatar initials={p.i} ring />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-brand-text leading-none">{p.n}</p>
                    <p className="text-xs text-brand-text-muted mt-1">{p.m}</p>
                  </div>
                  <ChevronRight size={16} className="text-brand-border" />
                </div>
              ))}
            </div>
          </div>
        </FeatureRow>
      </div>

      {/* ============================================ 02 — AGENDA */}
      <FeatureRow
        index="02"
        label="Agenda"
        flip
        title={<>Sua semana inteira <em className="italic text-brand-green font-medium">numa olhada.</em></>}
        body="Veja os horários livres, encaixe quem está esperando e deixe o sistema sugerir os melhores momentos. Desmarcou? Ele já avisa quem pode entrar no lugar."
        bullets={[
          'Visão de dia, semana e mês',
          'Encaixes inteligentes sugeridos por IA',
          'Confirmações automáticas no WhatsApp'
        ]}
      >
        <div className="bg-white border border-brand-border rounded-[2rem] shadow-glow-soft p-5 md:p-6 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="font-display text-xl font-semibold text-brand-text">Quinta · 11 jun</span>
            <span className="px-3 py-1 bg-brand-green text-white rounded-full text-[10px] font-bold uppercase tracking-wider">Hoje</span>
          </div>
          <div className="space-y-2.5">
            {[
              { h: '08:00', n: 'Benedito Souza', p: 'Profilaxia', tone: 'blue' },
              { h: '11:00', n: 'Moacir Gonçalves', p: 'Restauração · 32', tone: 'purple' },
              { h: '16:00', n: 'Roberto Carlos', p: 'Canal · 23', tone: 'green' }
            ].map((s) => (
              <div key={s.h} className="flex items-stretch gap-3">
                <span className="section-index text-brand-text-muted/70 pt-2 w-12 shrink-0">{s.h}</span>
                <div className={`flex-1 rounded-2xl px-4 py-3 border-l-4 ${
                  s.tone === 'green' ? 'bg-brand-green-soft border-brand-green' :
                  s.tone === 'purple' ? 'bg-brand-academy-soft border-brand-academy' :
                  'bg-sky-50 border-sky-400'
                }`}>
                  <p className="text-sm font-bold text-brand-text leading-none">{s.n}</p>
                  <p className="text-xs text-brand-text-muted mt-1.5">{s.p}</p>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-3">
              <span className="section-index text-brand-text-muted/40 w-12 shrink-0 pl-0.5">17:00</span>
              <button className="flex-1 rounded-2xl border border-dashed border-brand-border text-brand-text-muted text-xs font-bold py-3 flex items-center justify-center gap-1.5 hover:border-brand-green hover:text-brand-green transition-colors">
                <Plus size={14} /> Horário livre
              </button>
            </div>
          </div>
        </div>
      </FeatureRow>

      {/* ============================================ 03 — FINANCEIRO */}
      <div className="bg-white border-y border-brand-border/60">
        <FeatureRow
          index="03"
          label="Financeiro"
          title={<>Quanto entrou, quanto entra <em className="italic text-brand-green font-medium">e o que falta receber.</em></>}
          body="Sem planilha paralela. Cada atendimento vira lançamento, e você vê o caixa do mês fechar no azul — com projeção e aviso antecipado se algo sair do esperado."
          bullets={[
            'Receitas e despesas em um só lugar',
            'Projeção de caixa das próximas semanas',
            'Controle de convênios, Pix e inadimplência'
          ]}
        >
          <div className="bg-white border border-brand-border rounded-[2rem] shadow-glow-soft p-6 md:p-7 max-w-md mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-green-soft text-brand-green-dark text-[11px] font-bold rounded-full border border-brand-green/15 mb-4">
              <TrendingUp size={12} /> +80% vs. mês passado 🔥
            </span>
            <p className="font-display text-5xl md:text-6xl font-semibold text-brand-text tracking-tight leading-none">R$ 2.250</p>
            <p className="text-sm text-brand-text-muted font-medium mt-3">
              Projeção: <span className="font-bold text-brand-text">R$ 2.935</span> · Margem: <span className="font-bold text-brand-text">91%</span>
            </p>
            <div className="mt-6 space-y-2.5">
              {[
                { n: 'Afonso Torres', d: 'Profilaxia', v: '+ R$ 150' },
                { n: 'Beatriz Helena', d: 'Restauração', v: '+ R$ 320' }
              ].map((m) => (
                <div key={m.n} className="flex items-center justify-between bg-brand-bg rounded-2xl px-4 py-3">
                  <div>
                    <p className="text-sm font-bold text-brand-text leading-none">{m.n}</p>
                    <p className="text-[11px] text-brand-text-muted mt-1">{m.d}</p>
                  </div>
                  <span className="text-sm font-bold text-brand-green">{m.v}</span>
                </div>
              ))}
            </div>
          </div>
        </FeatureRow>
      </div>

      {/* ============================================ 04 — PORTAL DO PACIENTE */}
      <FeatureRow
        index="04"
        label="Portal do paciente"
        flip
        title={<>Seu paciente com um portal só dele. <em className="italic text-brand-green font-medium">Você com cara de clínica grande.</em></>}
        body="Cada paciente recebe um link próprio pra pedir consulta, atualizar a ficha e ver o tratamento. Profissionalismo que normalmente só consultório grande tem — no seu, desde o primeiro dia."
        bullets={[
          'Pedido de consulta direto pelo link',
          'Ficha médica que o paciente atualiza sozinho',
          'Cuidados pós-atendimento e contato rápido'
        ]}
      >
        <div className="bg-white border border-brand-border rounded-[2rem] shadow-glow-soft p-6 md:p-8 max-w-md mx-auto">
          <div className="flex items-center gap-3 mb-7">
            <div className="w-11 h-11 rounded-full bg-brand-green-dark text-white flex items-center justify-center font-bold text-sm">SG</div>
            <div>
              <p className="text-sm font-bold text-brand-text leading-none">Dr. Samuel Godoy</p>
              <p className="text-xs text-brand-text-muted mt-1">Portal do Paciente</p>
            </div>
          </div>
          <h4 className="font-display text-3xl font-semibold text-brand-text tracking-tight">Olá, Gabriel 👋</h4>
          <p className="text-sm text-brand-text-muted font-medium mt-2 mb-6">Você não tem consultas marcadas.</p>
          <div className="space-y-3">
            {[
              { l: 'Pedir uma consulta', i: CalendarPlus },
              { l: 'Atualizar minha ficha médica', i: FileText },
              { l: 'Cuidados após o atendimento', i: HeartPulse }
            ].map((a) => (
              <button key={a.l} className="w-full flex items-center gap-3 px-4 py-4 rounded-2xl border border-brand-border text-left font-bold text-sm text-brand-text hover:border-brand-green hover:bg-brand-green-soft/40 transition-colors">
                <a.i size={18} className="text-brand-green shrink-0" /> {a.l}
              </button>
            ))}
          </div>
        </div>
      </FeatureRow>

      {/* ============================================ POR DENTRO DO SISTEMA */}
      <section className="bg-[#FAF9F5] border-y border-brand-border/40 py-20 md:py-28 px-5 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
            <p className="section-index text-brand-green mb-4">Demonstração</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-brand-text tracking-tight leading-tight mb-5">
              O sistema de gestão <em className="italic text-brand-green font-medium">por dentro.</em>
            </h2>
            <p className="text-base md:text-lg text-brand-text-muted leading-relaxed font-medium">
              Explore as telas reais do OdontoHub. A interface tira a papelada do caminho para você focar inteiramente no seu paciente.
            </p>
          </div>
          <SystemMockupShowcase />
        </div>
      </section>

      {/* ============================================ PLANOS */}
      <section id="planos" className="py-20 md:py-32 px-5 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
            <p className="section-index text-brand-green mb-4">Planos &amp; preços</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-brand-text tracking-tight leading-tight mb-5">
              Comece de graça. <em className="italic text-brand-green font-medium">Evolua quando fizer sentido.</em>
            </h2>
            <p className="text-base md:text-lg text-brand-text-muted leading-relaxed font-medium">
              Do gratuito ao Pro, escolha a cobertura ideal para o seu consultório ou clínica solo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7 max-w-6xl mx-auto items-stretch text-left">
            {/* Free */}
            <div className="bg-white border border-brand-border rounded-[2rem] p-8 md:p-10 flex flex-col">
              <p className="section-index text-brand-text-muted mb-2">Organização essencial</p>
              <h3 className="font-display text-2xl font-semibold text-brand-text mb-1">Gratuito</h3>
              <div className="flex items-baseline gap-1.5 my-5">
                <span className="font-display text-4xl font-semibold">R$ 0</span>
                <span className="text-brand-text-muted text-sm">grátis para sempre</span>
              </div>
              <ul className="space-y-3 mb-10 flex-grow">
                {['Limite de pacientes ativos', 'Limite de agendamentos mensais', 'IA e previsões limitadas', 'Histórico de pacientes centralizado', 'Fichas clínicas e agendas básicas', 'Visual limpo e sem anúncios'].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-brand-text/90 font-medium">
                    <CheckCircle2 size={16} className="text-brand-green/50 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <a href="https://sistema.odontohub.app.br" className="w-full">
                <Button variant="outline" className="w-full py-4 rounded-2xl border-2 text-xs uppercase tracking-wider font-extrabold text-brand-green border-brand-green hover:bg-brand-green/5">Criar conta gratuita</Button>
              </a>
            </div>

            {/* Essencial */}
            <div className="gradient-ring card-lift rounded-[2rem] p-8 md:p-10 flex flex-col relative lg:-mt-4 lg:mb-4 shadow-glow-soft">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-green text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md shadow-brand-green/30 whitespace-nowrap">Mais popular solo</div>
              <p className="section-index text-brand-text-muted mb-2">Crescimento sustentável</p>
              <h3 className="font-display text-2xl font-semibold text-brand-text mb-1">Essencial</h3>
              <div className="flex items-baseline gap-1.5 my-5">
                <span className="font-display text-4xl font-semibold text-brand-text">R$ 49,90</span>
                <span className="text-brand-text-muted text-sm">/mês</span>
              </div>
              <ul className="space-y-3 mb-10 flex-grow">
                {['Até 150 pacientes e prontuários ativos', 'Até 150 agendamentos por mês', 'Modelos de mensagens e confirmação no WhatsApp', 'Histórico clínico e prontuário fotográfico', 'Dashboard financeiro simplificado', 'Suporte prioritário por e-mail e chat', 'Envio avulso de receitas e atestados'].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-brand-text/95 font-medium">
                    <CheckCircle2 size={16} className="text-brand-green shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <a href="https://sistema.odontohub.app.br" className="w-full">
                <Button variant="outline" className="w-full py-4 rounded-2xl border-2 text-xs uppercase tracking-wider font-extrabold text-[#111827] border-slate-300 hover:bg-slate-50">Assinar Essencial</Button>
              </a>
            </div>

            {/* Pro */}
            <div className="p-8 md:p-10 flex flex-col rounded-[2rem] text-white border-none shadow-glow-green relative overflow-hidden bg-gradient-to-br from-brand-green-dark via-brand-green to-[#0D9488]">
              <div aria-hidden className="absolute -top-16 -right-16 w-56 h-56 bg-white/10 rounded-full blur-3xl pointer-events-none" />
              <p className="section-index text-white/50 mb-2">Paz e automação completa</p>
              <h3 className="font-display text-2xl font-semibold mb-1 text-white">Pro</h3>
              <div className="flex items-baseline gap-1.5 my-5">
                <span className="font-display text-4xl font-semibold text-white tracking-tight">R$ 99,90</span>
                <span className="text-white/40 text-sm">/mês</span>
              </div>
              <ul className="space-y-3.5 mb-10 flex-grow">
                {['Pacientes e prontuários ILIMITADOS', 'Agendamentos e calendário ILIMITADOS', 'Acesso total e irrestrito à IA', 'Sugestões de encaixe automáticas por IA', 'Lembretes e retornos inteligentes ativos', 'Painel exclusivo do que fazer hoje', 'Previsão financeira de caixa discreta'].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm font-semibold text-white">
                    <CheckCircle2 size={16} className="text-white/40 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <a href="https://sistema.odontohub.app.br" className="w-full">
                <Button className="w-full bg-white text-brand-green-dark shadow-xl hover:bg-white/90 border-none transition-all py-4 text-sm font-extrabold rounded-2xl uppercase tracking-wider">Quero o Pro</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ ACADEMY */}
      <section className="bg-white border-y border-brand-border py-20 md:py-28 px-5 md:px-6" id="academy">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <Reveal className="w-full md:w-1/2">
            <div className="p-3 bg-brand-academy-soft w-fit rounded-2xl mb-7">
              <GraduationCap className="text-brand-academy w-6 h-6" />
            </div>
            <p className="section-index text-brand-academy mb-4">Para estudantes</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-brand-text mb-6 leading-tight tracking-tight">
              Ainda na faculdade?<br /><em className="italic text-brand-academy font-medium">Conheça o Academy.</em>
            </h2>
            <p className="text-base md:text-lg text-brand-text-muted leading-relaxed mb-8 font-medium max-w-xl">
              Planejado para a realidade das clínicas das universidades. O Academy guia você em cada etapa clínica, organiza materiais e prepara suas anotações para desocupar a mente do nervosismo operacional.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 mb-9">
              {['Checklists de instrumental por clínica', 'Registro rápido de evolução clínica', 'Organização por consultório', 'Arquivamento fácil de fotos'].map((t) => (
                <div key={t} className="flex items-center gap-2.5 text-sm font-bold text-brand-text">
                  <div className="w-1.5 h-1.5 bg-brand-academy rounded-full shrink-0" /> {t}
                </div>
              ))}
            </div>
            <Link to="/academy" className="inline-flex items-center gap-2 font-bold text-brand-academy group">
              Ver o OdontoHub Academy <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>

          <Reveal delay={0.1} className="w-full md:w-1/2">
            <div className="relative mx-auto max-w-[420px]">
              <div aria-hidden className="absolute -inset-4 bg-brand-academy/5 rounded-[3rem] blur-2xl" />
              <div className="relative bg-white border border-brand-border rounded-[2.5rem] shadow-glow-soft overflow-hidden">
                <div className="p-7 md:p-9 space-y-6">
                  <div>
                    <p className="text-xs font-bold text-brand-text-muted">Boa noite, Samuel</p>
                    <h3 className="font-display text-2xl font-semibold text-brand-text tracking-tight leading-tight mt-1">Sem pressa. O próximo caso já está na mão.</h3>
                  </div>
                  <div className="bg-brand-academy rounded-[1.5rem] p-6 text-white relative overflow-hidden">
                    <div aria-hidden className="absolute -top-12 -right-12 w-36 h-36 bg-white/10 rounded-full blur-2xl" />
                    <p className="text-[10px] font-bold text-white/50 uppercase tracking-[0.15em] mb-2">Próximo</p>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-display text-xl font-semibold tracking-tight">Marcos Roberto Jr.</h4>
                        <div className="flex gap-1.5 mt-3">
                          <span className="px-3 py-1 bg-white/20 rounded-full text-[9px] font-bold uppercase tracking-widest">Agendado</span>
                          <span className="px-3 py-1 bg-white/10 rounded-full text-[9px] font-bold uppercase tracking-widest">Amanhã, 09:30</span>
                        </div>
                      </div>
                      <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center font-bold shrink-0">M</div>
                    </div>
                  </div>
                  <div className="bg-brand-bg border border-brand-border rounded-2xl p-5 flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-academy shadow-sm shrink-0"><Clock size={18} /></div>
                    <div>
                      <p className="text-[10px] font-bold text-brand-text-muted uppercase tracking-[0.15em]">Agenda a seguir</p>
                      <p className="font-bold text-brand-text text-sm">Lucas Medeiros · Extração</p>
                    </div>
                  </div>
                </div>
                <div className="h-14 bg-white border-t border-brand-border flex items-center justify-around px-6">
                  <div className="flex flex-col items-center gap-1 text-brand-academy"><Layout size={16} /><span className="text-[8px] font-bold uppercase">Rotina</span></div>
                  <Calendar size={16} className="text-slate-300" />
                  <Users size={16} className="text-slate-300" />
                  <ClipboardList size={16} className="text-slate-300" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================ DEPOIMENTOS */}
      <section className="py-20 md:py-28 px-5 md:px-6" id="depoimentos">
        <div className="max-w-7xl mx-auto">
          <Testimonials />
        </div>
      </section>

      {/* ============================================ FAQ */}
      <section className="bg-white border-t border-brand-border py-20 md:py-28 px-5 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="section-index text-brand-green mb-4">Dúvidas frequentes</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-brand-text tracking-tight leading-tight">
              Perguntas que <em className="italic text-brand-green font-medium">todo dentista faz.</em>
            </h2>
          </div>
          <div className="space-y-3">
            {[
              { q: 'O OdontoHub é como um sistema odontológico tradicional?', a: 'Não. Os sistemas tradicionais funcionam como arquivos digitais para você preencher papéis e relatórios que raramente usa. O OdontoHub faz o oposto: lê os dados do seu consultório e transforma tudo em uma lista simples de afazeres. Se não houver nada urgente, ele fica em silêncio para você desligar a mente do trabalho.' },
              { q: 'O que eu recebo no plano Pro?', a: 'O plano gratuito organiza sua agenda e fichas de pacientes. O Pro ativa lembretes automáticos para pacientes faltantes, avisos discretos de previsão financeira para planejar o caixa das próximas semanas e facilidades adicionais para simplificar seu dia a dia.' },
              { q: 'Como meus dados são protegidos?', a: 'Tratamos seus dados e os de seus pacientes com respeito máximo. Toda a informação é guardada de forma segura e criptografada em servidores protegidos. Não exibimos anúncios e jamais vendemos ou compartilhamos dados com terceiros.' },
              { q: 'Eu realmente vou gastar menos tempo no computador?', a: 'Esse é o nosso objetivo. Criamos o OdontoHub para você planejar encaixes, confirmar consultas e salvar evoluções em menos de 2 minutos por dia. Nosso sucesso é ver você fechando o app sabendo que está tudo sob controle.' }
            ].map((faq, i) => (
              <details key={i} className="group rounded-3xl border border-brand-border overflow-hidden bg-brand-bg-alt">
                <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer font-bold text-brand-text list-none group-open:bg-white transition-colors text-base">
                  {faq.q}
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-open:rotate-90 transition-transform shadow-sm shrink-0 ml-4">
                    <ChevronRight size={16} />
                  </div>
                </summary>
                <div className="p-5 md:p-6 border-t border-brand-border bg-white text-sm text-brand-text/80 leading-relaxed font-medium">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ CTA FINAL */}
      <section className="px-5 md:px-6 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="surface-dark relative overflow-hidden rounded-[2.5rem] md:rounded-[4rem] py-20 md:py-32 px-6 md:px-16 text-center text-white">
            <div aria-hidden className="absolute inset-0 grain opacity-40" />
            <div aria-hidden className="aurora-blob bg-[#0D9488]/30 w-[30rem] h-[30rem] -top-20 -left-10" />
            <Reveal className="relative z-10 max-w-4xl mx-auto">
              <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.04] tracking-tight mb-7">
                Sistemas controlam a clínica.<br />
                <em className="italic text-[#7FD9C4] font-medium">O OdontoHub te ajuda a conduzir o dia.</em>
              </h2>
              <p className="text-lg md:text-xl text-white/70 font-medium max-w-2xl mx-auto mb-10">
                Crie sua conta e organize seu primeiro paciente, sua primeira consulta e seu primeiro dia. De graça, sem cartão.
              </p>
              <a href="https://sistema.odontohub.app.br" className="group inline-block">
                <button className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-brand-green-dark font-extrabold text-base rounded-2xl shadow-2xl hover:scale-[1.02] active:scale-95 transition-transform">
                  Criar minha conta grátis
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
              <p className="section-index text-white/50 mt-7 flex items-center justify-center gap-2 flex-wrap">
                <ShieldCheck size={14} /> Grátis para começar · Sem cartão de crédito · Pronto em minutos
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
