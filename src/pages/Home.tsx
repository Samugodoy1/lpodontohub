import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const START = 'https://sistema.odontohub.app.br';

function Reveal({
  children,
  delay = 0,
  y = 24,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}): React.ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const AppleLink = ({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) => {
  const isExternal = href.startsWith('http');
  const className = `apple-link ${light ? '!text-[#2997ff]' : ''}`;
  if (isExternal) {
    return (
      <a href={href} className={className}>
        {children} <span aria-hidden>›</span>
      </a>
    );
  }
  if (href.startsWith('/')) {
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
};

/* ——— Product surfaces ——— */

const StudioDashboard = () => (
  <div className="apple-device overflow-hidden text-left">
    <div className="px-6 md:px-10 pt-7 md:pt-10 pb-8 md:pb-12 bg-[#fbfbfd]">
      <p className="text-[13px] md:text-[15px] text-apple-gray mb-2">Bom dia, doutor.</p>
      <h3 className="text-[22px] md:text-[34px] font-semibold tracking-tight text-apple-ink leading-[1.12] max-w-xl">
        Hoje, 8 atendimentos.
        <br />
        Dois ainda não confirmaram.
      </h3>

      <div className="mt-7 md:mt-9 flex flex-col sm:flex-row gap-3 sm:items-center justify-between rounded-2xl bg-white px-5 py-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <p className="text-[14px] md:text-[15px] text-apple-ink/80">Enviar lembretes agora?</p>
        <span className="inline-flex self-start sm:self-auto items-center rounded-full bg-[#0071e3] text-white text-[13px] px-4 py-1.5">
          Enviar
        </span>
      </div>

      <div className="mt-5 md:mt-6 rounded-[22px] bg-[#1d1d1f] text-white p-6 md:p-8">
        <p className="text-[11px] uppercase tracking-[0.14em] text-white/40 mb-3">Próximo</p>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[26px] md:text-[32px] font-semibold tracking-tight leading-none">João Silva</p>
            <p className="mt-3 text-[14px] md:text-[15px] text-white/60">Extração do 38 · 10:00</p>
          </div>
          <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-[14px] font-medium">
            JS
          </div>
        </div>
        <div className="mt-7 h-10 rounded-full bg-white text-apple-ink text-[13px] font-medium flex items-center justify-center">
          Abrir prontuário
        </div>
      </div>
    </div>
  </div>
);

const QuietDashboard = () => (
  <div className="apple-device overflow-hidden text-center bg-[#fbfbfd]">
    <div className="px-8 py-16 md:py-24 flex flex-col items-center">
      <div className="w-14 h-14 rounded-full bg-[#30d158]/15 text-[#248a3d] flex items-center justify-center mb-7">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </div>
      <p className="text-[13px] text-apple-gray mb-3">Silêncio ativo</p>
      <h3 className="text-[26px] md:text-[36px] font-semibold tracking-tight text-apple-ink leading-[1.12] max-w-md">
        Tudo certo para hoje.
      </h3>
      <p className="mt-4 text-[15px] md:text-[17px] text-apple-gray max-w-sm leading-relaxed">
        Seis pacientes confirmados. O caixa está em equilíbrio. Pode fechar o sistema.
      </p>
    </div>
  </div>
);

const PatientPhone = () => (
  <div className="apple-phone mx-auto w-[280px] md:w-[300px] aspect-[9/19]">
    <div className="relative h-full w-full rounded-[36px] overflow-hidden bg-[#fbfbfd] text-left">
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[92px] h-[28px] bg-black rounded-full z-10" />
      <div className="px-6 pt-14 pb-8 h-full flex flex-col">
        <p className="text-[12px] text-apple-gray mb-6">OdontoHub</p>
        <h6 className="text-[26px] font-semibold tracking-tight text-apple-ink leading-[1.12] mb-8">
          Olá, Carlos.
          <span className="block text-[15px] font-normal text-apple-gray mt-2">Amanhã, 17:00.</span>
        </h6>
        <div className="space-y-2.5">
          <div className="rounded-full bg-[#0071e3] text-white text-[14px] py-3.5 text-center">Confirmar presença</div>
          <div className="rounded-full bg-[#f5f5f7] text-apple-ink text-[14px] py-3.5 text-center">Orientações</div>
          <div className="rounded-full bg-[#f5f5f7] text-apple-ink text-[14px] py-3.5 text-center">Ficha de saúde</div>
        </div>
        <div className="mt-auto rounded-2xl bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <p className="text-[11px] text-apple-gray mb-1">Depois do procedimento</p>
          <p className="text-[13px] text-apple-ink leading-snug">Beba bastante água. Evite alimentos duros.</p>
        </div>
      </div>
    </div>
  </div>
);

const AcademyDevice = () => (
  <div className="apple-device-dark overflow-hidden text-left">
    <div className="p-7 md:p-10">
      <p className="text-[13px] text-white/40 mb-2">Boa noite, Samuel</p>
      <h3 className="text-[22px] md:text-[28px] font-semibold tracking-tight text-white leading-[1.12] mb-8">
        O próximo caso já está na mão.
      </h3>
      <div className="rounded-[22px] bg-white/[0.08] p-6 md:p-7">
        <p className="text-[11px] uppercase tracking-[0.14em] text-white/35 mb-2">Amanhã, 09:30</p>
        <p className="text-[22px] md:text-[26px] font-semibold text-white tracking-tight">Marcos Roberto</p>
        <p className="mt-2 text-[14px] text-white/50">Endodontia · Box 3</p>
      </div>
      <div className="mt-4 rounded-[18px] bg-white/5 px-5 py-4 flex items-center justify-between">
        <div>
          <p className="text-[11px] text-white/35">Checklist</p>
          <p className="text-[14px] text-white/80">Instrumental completo</p>
        </div>
        <span className="text-[#30d158] text-[13px]">Pronto</span>
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>OdontoHub — O sistema para o consultório</title>
        <meta
          name="description"
          content="OdontoHub é o sistema para dentistas. Agenda, prontuário, confirmações e finanças — com o mínimo de ruído. Comece gratuitamente."
        />
        <meta
          name="keywords"
          content="odontohub, software odontologico, sistema para consultorio odontologico, prontuario odontologico digital, estudante de odontologia"
        />
        <link rel="canonical" href="https://www.odontohub.app.br/" />
        <meta property="og:title" content="OdontoHub — O sistema para o consultório" />
        <meta property="og:description" content="Menos decisões. Mais presença. O sistema que cuida da rotina para o dentista cuidar do paciente." />
        <meta property="og:url" content="https://www.odontohub.app.br/" />
        <meta name="twitter:title" content="OdontoHub — O sistema para o consultório" />
        <meta name="twitter:description" content="Menos decisões. Mais presença. O sistema que cuida da rotina para o dentista cuidar do paciente." />
      </Helmet>

      {/* HERO */}
      <section className="relative overflow-hidden bg-black pt-28 md:pt-36 pb-16 md:pb-24 px-5">
        <div className="max-w-[980px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-[19px] md:text-[21px] font-semibold tracking-tight text-[#f5f5f7] mb-3">OdontoHub</p>
            <h1 className="apple-display text-[40px] sm:text-[56px] md:text-[80px] mb-5 md:mb-6">
              O sistema
              <br className="sm:hidden" /> para o consultório.
            </h1>
            <p className="apple-subhead text-[19px] md:text-[28px] max-w-[640px] mx-auto mb-8 md:mb-10">
              Ele cuida da agenda, do paciente e do caixa.
              <br className="hidden md:block" /> Você cuida de quem está na cadeira.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <a href={START} className="apple-btn">
                Começar
              </a>
              <AppleLink href="#agenda" light>
                Saiba mais
              </AppleLink>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative mt-14 md:mt-20"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] rounded-full bg-[#0071e3]/20 blur-[90px]"
            />
            <div className="relative max-w-[720px] mx-auto">
              <StudioDashboard />
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="bg-black px-5 py-24 md:py-36">
        <div className="max-w-[820px] mx-auto text-center">
          <Reveal>
            <h2 className="apple-display text-[34px] md:text-[56px]">
              O consultório não precisa de mais dados.
              <span className="block mt-2 text-white/90">Precisa de menos decisões.</span>
            </h2>
            <p className="apple-subhead text-[19px] md:text-[24px] mt-8 max-w-[560px] mx-auto">
              Se não houver nada urgente, o OdontoHub permanece em silêncio.
            </p>
          </Reveal>
        </div>
      </section>

      {/* AGENDA */}
      <section id="agenda" className="bg-apple-surface text-apple-ink px-5 py-24 md:py-32 scroll-mt-12">
        <div className="max-w-[980px] mx-auto">
          <Reveal className="text-center mb-14 md:mb-20">
            <p className="text-[19px] md:text-[21px] font-semibold tracking-tight mb-2">Agenda</p>
            <h2 className="apple-display-ink text-[40px] md:text-[64px]">
              Ela antecipa.
              <br />
              Você atende.
            </h2>
            <p className="apple-subhead text-[19px] md:text-[24px] mt-5 max-w-[540px] mx-auto">
              Janelas vazias, retornos esquecidos, confirmações pendentes. O sistema encontra. Você só autoriza.
            </p>
            <div className="mt-6">
              <AppleLink href={START}>Começar com a agenda</AppleLink>
            </div>
          </Reveal>
          <Reveal>
            <StudioDashboard />
          </Reveal>
        </div>
      </section>

      {/* SILENCE */}
      <section className="bg-black px-5 py-24 md:py-32">
        <div className="max-w-[980px] mx-auto">
          <Reveal className="text-center mb-14 md:mb-20">
            <p className="text-[19px] md:text-[21px] font-semibold tracking-tight text-[#f5f5f7] mb-2">Silêncio ativo</p>
            <h2 className="apple-display text-[40px] md:text-[64px]">
              Quando está tudo bem,
              <br />
              o sistema some.
            </h2>
            <p className="apple-subhead text-[19px] md:text-[24px] mt-5 max-w-[520px] mx-auto">
              Sem alertas para parecer útil. Sem gráficos para prender você na tela. Paz é o produto.
            </p>
          </Reveal>
          <Reveal>
            <div className="max-w-[640px] mx-auto">
              <QuietDashboard />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PATIENT */}
      <section id="paciente" className="bg-apple-surface text-apple-ink px-5 py-24 md:py-32 scroll-mt-12">
        <div className="max-w-[980px] mx-auto grid md:grid-cols-2 gap-16 md:gap-10 items-center">
          <Reveal className="order-2 md:order-1">
            <PatientPhone />
          </Reveal>
          <Reveal className="order-1 md:order-2 text-center md:text-left">
            <p className="text-[19px] md:text-[21px] font-semibold tracking-tight mb-2">Paciente</p>
            <h2 className="apple-display-ink text-[40px] md:text-[56px]">
              Ele confirma.
              <br />
              Sozinho.
            </h2>
            <p className="apple-subhead text-[19px] md:text-[21px] mt-5 max-w-[440px] md:max-w-none mx-auto md:mx-0">
              Um toque no celular. A ficha preenchida antes de sentar. Orientações depois do procedimento. Sem ligar para a recepção.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-5">
              <a href={START} className="apple-btn">
                Começar
              </a>
              <AppleLink href="#planos">Ver os planos</AppleLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-black px-5 py-24 md:py-36">
        <div className="max-w-[820px] mx-auto">
          <Reveal className="text-center mb-16 md:mb-24">
            <h2 className="apple-display text-[40px] md:text-[56px]">Três princípios.</h2>
          </Reveal>
          <div className="space-y-16 md:space-y-24">
            {[
              { n: '01', t: 'O que fazer em seguida.', d: 'Dados sem ação são ruído. Cada tela do OdontoHub responde a uma pergunta: o que merece atenção agora?' },
              { n: '02', t: 'Se não houver ação, não há aviso.', d: 'Nada de notificações para justificar o software. Se não há o que fazer, não há o que mostrar.' },
              { n: '03', t: 'Quando está tudo bem, silêncio.', d: 'O sucesso do sistema é você fechá-lo. Encerrar o dia sabendo que nada importante ficou para trás.' },
            ].map((item, i) => (
              <React.Fragment key={item.n}>
                <Reveal delay={i * 0.06}>
                  <p className="text-[13px] text-white/35 mb-3 tabular-nums">{item.n}</p>
                  <h3 className="text-[28px] md:text-[40px] font-semibold tracking-tight leading-[1.12] text-[#f5f5f7]">
                    {item.t}
                  </h3>
                  <p className="apple-subhead text-[17px] md:text-[21px] mt-4 max-w-[560px]">{item.d}</p>
                </Reveal>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE BENTO */}
      <section id="recursos" className="bg-apple-surface text-apple-ink px-5 py-24 md:py-32 scroll-mt-12">
        <div className="max-w-[980px] mx-auto">
          <Reveal className="text-center mb-14 md:mb-16">
            <h2 className="apple-display-ink text-[40px] md:text-[56px]">A rotina, reduzida ao essencial.</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {[
              { t: 'Painel do dia', d: 'Uma lista. O que precisa de você. Depois, some.' },
              { t: 'Prontuário', d: 'Sem campos inúteis. Histórico clínico em segundos.' },
              { t: 'WhatsApp', d: 'Confirmações e lembretes no canal que o paciente já usa.' },
              { t: 'Reagendamentos', d: 'Alguém desmarcou. O próximo da fila já está à espera.' },
              { t: 'Caixa', d: 'A previsão das próximas semanas. Um aviso, só se houver risco.' },
              { t: 'Retornos', d: 'Pacientes que deveriam voltar. Encontrados. Discretamente.' },
            ].map((item, i) => (
              <React.Fragment key={item.t}>
                <Reveal delay={(i % 2) * 0.08} className="h-full">
                  <div className="h-full rounded-[28px] bg-white px-8 py-10 md:px-10 md:py-12">
                    <h3 className="text-[24px] md:text-[28px] font-semibold tracking-tight mb-3">{item.t}</h3>
                    <p className="text-[17px] md:text-[19px] text-apple-gray leading-relaxed">{item.d}</p>
                  </div>
                </Reveal>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ACADEMY */}
      <section id="academy" className="bg-[#010101] px-5 py-24 md:py-32">
        <div className="max-w-[980px] mx-auto grid md:grid-cols-2 gap-14 md:gap-16 items-center">
          <Reveal>
            <p className="text-[19px] md:text-[21px] font-semibold tracking-tight text-[#f5f5f7] mb-2">Academy</p>
            <h2 className="apple-display text-[40px] md:text-[56px]">
              Para quem
              <br />
              ainda está
              <br />
              aprendendo.
            </h2>
            <p className="apple-subhead text-[19px] md:text-[21px] mt-5 max-w-[440px]">
              Checklists de instrumental. Evolução clínica. Modo Box. Feito para a clínica da faculdade — não para o ERP de uma rede.
            </p>
            <div className="mt-8">
              <AppleLink href="/academy" light>
                Conhecer o Academy
              </AppleLink>
            </div>
          </Reveal>
          <Reveal>
            <AcademyDevice />
          </Reveal>
        </div>
      </section>

      {/* QUOTES */}
      <section id="depoimentos" className="bg-apple-surface text-apple-ink px-5 py-24 md:py-32">
        <div className="max-w-[820px] mx-auto">
          <Reveal className="text-center mb-16 md:mb-20">
            <h2 className="apple-display-ink text-[40px] md:text-[56px]">Quem usa, fecha mais cedo.</h2>
          </Reveal>
          <div className="space-y-16 md:space-y-24">
            {[
              {
                q: 'Antes eu ficava até 21h confirmando o dia seguinte no WhatsApp. Agora fecho às 18h.',
                n: 'Dr. Mateus',
                r: 'Clínico geral, Taubaté',
              },
              {
                q: 'Sistemas cheios de menus. Aqui eu atendo, resolvo a agenda no bolso e vou embora com a cabeça vazia.',
                n: 'Dra. Larissa Fernandes',
                r: 'Ortodontista, Curitiba',
              },
              {
                q: 'Se está tudo bem, o sistema se cala. Chego em casa e desligo o celular da clínica.',
                n: 'Dra. Mariana Costa',
                r: 'Clínica geral, Salvador',
              },
            ].map((item, i) => (
              <React.Fragment key={item.n}>
                <Reveal delay={i * 0.05}>
                  <blockquote>
                    <p className="text-[28px] md:text-[40px] font-semibold tracking-tight leading-[1.15] text-apple-ink">
                      “{item.q}”
                    </p>
                    <footer className="mt-6 text-[14px] md:text-[15px] text-apple-gray">
                      {item.n}
                      <span className="text-apple-line mx-2">/</span>
                      {item.r}
                    </footer>
                  </blockquote>
                </Reveal>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="planos" className="bg-white text-apple-ink px-5 py-24 md:py-32 scroll-mt-12">
        <div className="max-w-[980px] mx-auto">
          <Reveal className="text-center mb-14 md:mb-16">
            <h2 className="apple-display-ink text-[40px] md:text-[56px]">Escolha o OdontoHub.</h2>
            <p className="apple-subhead text-[19px] md:text-[21px] mt-4">Do gratuito ao Pro. Sem contrato. Sem cartão para começar.</p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5 items-stretch">
            <Reveal className="h-full">
              <div className="h-full rounded-[28px] bg-apple-surface p-8 md:p-10 flex flex-col">
                <h3 className="text-[24px] font-semibold tracking-tight">Gratuito</h3>
                <p className="mt-4 text-[40px] font-semibold tracking-tight">R$&nbsp;0</p>
                <p className="text-[14px] text-apple-gray mt-1 mb-8">Para sempre</p>
                <ul className="space-y-3 text-[14px] text-apple-ink/80 flex-grow mb-10">
                  {[
                    'Pacientes e agendamentos com limite',
                    'Histórico centralizado',
                    'Fichas e agenda básicas',
                    'Interface limpa, sem anúncios',
                  ].map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-apple-gray">–</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={START} className="apple-btn w-full">
                  Criar conta
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.06} className="h-full">
              <div className="h-full rounded-[28px] bg-apple-surface p-8 md:p-10 flex flex-col">
                <h3 className="text-[24px] font-semibold tracking-tight">Essencial</h3>
                <p className="mt-4 text-[40px] font-semibold tracking-tight">
                  R$&nbsp;49,90<span className="text-[17px] font-normal text-apple-gray">/mês</span>
                </p>
                <p className="text-[14px] text-apple-gray mt-1 mb-8">Até 150 pacientes</p>
                <ul className="space-y-3 text-[14px] text-apple-ink/80 flex-grow mb-10">
                  {[
                    'Até 150 prontuários ativos',
                    'Até 150 agendamentos por mês',
                    'Confirmação no WhatsApp',
                    'Prontuário fotográfico',
                    'Dashboard financeiro',
                  ].map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-apple-gray">–</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={START} className="apple-btn w-full">
                  Assinar Essencial
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="h-full">
              <div className="h-full rounded-[28px] bg-[#1d1d1f] text-white p-8 md:p-10 flex flex-col">
                <h3 className="text-[24px] font-semibold tracking-tight">Pro</h3>
                <p className="mt-4 text-[40px] font-semibold tracking-tight">
                  R$&nbsp;99,90<span className="text-[17px] font-normal text-white/40">/mês</span>
                </p>
                <p className="text-[14px] text-white/45 mt-1 mb-8">Ilimitado</p>
                <ul className="space-y-3 text-[14px] text-white/80 flex-grow mb-10">
                  {[
                    'Pacientes e agenda ilimitados',
                    'Inteligência artificial completa',
                    'Encaixes e retornos automáticos',
                    'Painel do que fazer hoje',
                    'Previsão de caixa',
                  ].map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-white/35">–</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={START} className="apple-btn-light w-full">
                  Assinar Pro
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-apple-surface text-apple-ink px-5 py-24 md:py-32">
        <div className="max-w-[680px] mx-auto">
          <Reveal className="mb-10 md:mb-14">
            <h2 className="apple-display-ink text-[34px] md:text-[48px] text-center">Perguntas frequentes</h2>
          </Reveal>
          <div className="divide-y divide-apple-line border-y border-apple-line">
            {[
              {
                q: 'O OdontoHub é um sistema odontológico tradicional?',
                a: 'Não. Sistemas tradicionais arquivam papéis digitais. O OdontoHub transforma a rotina em uma lista curta do que fazer. Se não houver pendência, ele some.',
              },
              {
                q: 'O que muda no plano Pro?',
                a: 'O gratuito organiza agenda e fichas. O Pro ativa lembretes automáticos, previsão de caixa e a inteligência que encontra o próximo passo — e cala quando não há um.',
              },
              {
                q: 'Como os dados são protegidos?',
                a: 'Criptografados, em servidores protegidos. Sem anúncios. Sem venda de dados. Sem compartilhamento com terceiros.',
              },
              {
                q: 'Vou gastar menos tempo no computador?',
                a: 'Esse é o objetivo. Planejar a semana, confirmar consultas e registrar evoluções em poucos minutos. O sucesso é fechar o aplicativo.',
              },
            ].map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none text-[17px] md:text-[19px] font-semibold tracking-tight text-apple-ink">
                  {faq.q}
                  <span className="text-apple-gray text-[22px] font-normal ml-6 group-open:rotate-45 transition-transform leading-none">
                    +
                  </span>
                </summary>
                <p className="pt-3 pr-10 text-[15px] md:text-[17px] text-apple-gray leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-black px-5 py-28 md:py-40">
        <div className="max-w-[780px] mx-auto text-center">
          <Reveal>
            <h2 className="apple-display text-[40px] md:text-[72px] mb-6">Comece hoje.</h2>
            <p className="apple-subhead text-[19px] md:text-[24px] mb-10">
              Grátis para começar. Sem cartão de crédito.
            </p>
            <a href={START} className="apple-btn">
              Começar
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
