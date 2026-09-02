import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Reveal, START_ACADEMY } from '../components/shared/Apple';

type NeoColorway = {
  id: string;
  name: string;
  neo: string;
  soft: string;
  wash: string;
};

const COLORWAYS: NeoColorway[] = [
  { id: 'laranja', name: 'Laranja', neo: '#FF6B2C', soft: '#FFD8C4', wash: '#FFF4ED' },
  { id: 'lima', name: 'Lima', neo: '#34C759', soft: '#C8F5D4', wash: '#F0FBF3' },
  { id: 'azul', name: 'Azul', neo: '#32ADE6', soft: '#C5EBFA', wash: '#F0F9FD' },
  { id: 'rosa', name: 'Rosa', neo: '#FF6482', soft: '#FFD0D9', wash: '#FFF0F3' },
  { id: 'violeta', name: 'Violeta', neo: '#BF5AF2', soft: '#E8C8FA', wash: '#F8F0FD' },
];

const FEATURES = [
  { t: 'Dossiê de pacientes', d: 'Dados, planejamento e anotações. Um lugar. Sem papéis soltos.' },
  { t: 'Checklists por disciplina', d: 'O que levar. O que esterilizar. Sem esquecer o instrumental.' },
  { t: 'Modo Box', d: 'Letras grandes. Celular apoiado. Sem tocar a tela de luvas.' },
  { t: 'Galeria segura', d: 'Fotos do caso no paciente. Fora do rolo pessoal.' },
  { t: 'Evoluções prontas', d: 'Modelos limpos. Assinatura do preceptor em segundos.' },
  { t: 'Progresso sem cobrança', d: 'O que você já fez. Sem ranking. Sem gamificação.' },
];

const MOMENTS = [
  { n: '01', t: 'Antes.', d: 'Separe o instrumental pelo checklist da disciplina. Nada esquecido na esterilização.' },
  { n: '02', t: 'No box.', d: 'Modo Box: alto contraste, passos visíveis a um metro. Biossegurança intacta.' },
  { n: '03', t: 'Depois.', d: 'Fotos no paciente. Evolução rascunhada. Feche o app e vá embora.' },
];

const PLANS = [
  {
    name: 'Grátis',
    price: 'R$ 0',
    note: 'Para sempre',
    feats: ['Até 3 pacientes', 'Agenda básica', 'Checklists essenciais', 'Até 50 fotos'],
    featured: false,
  },
  {
    name: 'Clínico',
    price: 'R$ 12,90',
    note: '/mês',
    feats: ['Até 15 pacientes', 'Até 500 fotos', 'Todas as disciplinas', 'Evolução em PDF'],
    featured: false,
  },
  {
    name: 'Ilimitado',
    price: 'R$ 24,90',
    note: '/mês',
    feats: ['Tudo ilimitado', 'Modo Box', 'Ficha completa em PDF', 'Suporte na clínica'],
    featured: true,
  },
];

const FAQS = [
  {
    q: 'O Academy substitui o prontuário da faculdade?',
    a: 'Não. É o seu organizador pessoal. A ficha oficial continua no sistema ou no papel da universidade.',
  },
  {
    q: 'A conta grátis expira?',
    a: 'Não. Até 3 pacientes e 50 fotos, para sempre. O Ilimitado existe quando o arquivo crescer.',
  },
  {
    q: 'Funciona sem internet na clínica?',
    a: 'Sim. Salva no aparelho e sincroniza quando o sinal volta.',
  },
  {
    q: 'Como montar o relatório de fim de semestre?',
    a: 'No Ilimitado, cada caso vira um PDF com histórico e fotos em ordem.',
  },
];

function applyNeoVars(color: NeoColorway) {
  const root = document.documentElement;
  root.style.setProperty('--neo', color.neo);
  root.style.setProperty('--neo-soft', color.soft);
  root.style.setProperty('--neo-wash', color.wash);
}

function clearNeoVars() {
  const root = document.documentElement;
  root.style.removeProperty('--neo');
  root.style.removeProperty('--neo-soft');
  root.style.removeProperty('--neo-wash');
}

function AcademyDevice() {
  return (
    <div className="neo-device overflow-hidden text-left">
      <div className="p-7 md:p-10 bg-white">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <p className="text-[13px] text-apple-gray">Oi, Samuel</p>
            <p className="text-[15px] font-semibold tracking-tight text-apple-ink">7º semestre · UNIFOR</p>
          </div>
          <span
            className="inline-flex items-center rounded-full px-3 py-1 text-[12px] font-medium text-white"
            style={{ background: 'var(--neo)' }}
          >
            47 pacientes
          </span>
        </div>
        <h3 className="text-[22px] md:text-[28px] font-semibold tracking-tight text-apple-ink leading-[1.12] mb-7">
          Tudo pronto para o seu próximo atendimento.
        </h3>
        <div
          className="rounded-[22px] p-6 md:p-7 text-white"
          style={{ background: 'var(--neo)' }}
        >
          <p className="text-[11px] uppercase tracking-[0.14em] text-white/70 mb-2">Quinta, 14:00 · Cadeira 08</p>
          <p className="text-[22px] md:text-[26px] font-semibold tracking-tight">Marcos Roberto Jr.</p>
          <p className="mt-2 text-[14px] text-white/80">Dentística · Isolamento absoluto</p>
        </div>
        <div className="mt-4 rounded-[18px] px-5 py-4 flex items-center justify-between" style={{ background: 'var(--neo-wash)' }}>
          <div>
            <p className="text-[11px] text-apple-gray">O seu checklist</p>
            <p className="text-[14px] text-apple-ink">Kit de isolamento separado</p>
          </div>
          <span className="text-[13px] font-medium" style={{ color: 'var(--neo)' }}>
            Pronto
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Academy() {
  const [color, setColor] = useState<NeoColorway>(COLORWAYS[0]);

  useEffect(() => {
    applyNeoVars(color);
    return () => clearNeoVars();
  }, [color]);

  return (
    <div
      className="neo-page min-h-screen"
      style={
        {
          '--neo': color.neo,
          '--neo-soft': color.soft,
          '--neo-wash': color.wash,
          background: color.wash,
        } as React.CSSProperties
      }
    >
      <Helmet>
        <title>OdontoHub Academy — Para a clínica da faculdade</title>
        <meta
          name="description"
          content="OdontoHub Academy organiza checklists, evoluções e o Modo Box para estudantes de odontologia. Grátis para começar."
        />
        <link rel="canonical" href="https://www.odontohub.app.br/academy" />
        <meta property="og:title" content="OdontoHub Academy — Para a clínica da faculdade" />
        <meta property="og:url" content="https://www.odontohub.app.br/academy" />
      </Helmet>

      <section className="relative overflow-hidden pt-28 md:pt-36 pb-16 md:pb-24 px-5">
        <div
          className="neo-blob w-[420px] h-[420px] -top-24 -left-24 opacity-70"
          style={{ background: color.soft }}
        />
        <div
          className="neo-blob w-[360px] h-[360px] top-32 -right-16 opacity-55"
          style={{ background: color.soft }}
        />
        <div className="relative max-w-[980px] mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}>
            <p className="text-[19px] md:text-[21px] font-semibold tracking-tight mb-3" style={{ color: color.neo }}>
              Academy
            </p>
            <h1 className="apple-display-ink text-[40px] sm:text-[56px] md:text-[72px] mb-5">
              A clínica da faculdade.
              <br />
              Do seu jeito.
            </h1>
            <p className="apple-subhead text-[19px] md:text-[24px] max-w-[560px] mx-auto mb-9">
              Checklists. Evolução. Modo Box.
              <br className="hidden md:block" /> Você entra no atendimento com a cabeça limpa.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <a href={START_ACADEMY} className="neo-btn">
                Começar
              </a>
              <a href="#como-funciona" className="neo-link">
                Saiba mais <span aria-hidden>›</span>
              </a>
            </div>

            <fieldset className="mt-12 border-0 p-0">
              <legend className="text-[13px] text-apple-gray mb-4">Escolha a sua cor</legend>
              <div className="flex items-center justify-center gap-3">
                {COLORWAYS.map((swatch) => (
                  <button
                    key={swatch.id}
                    type="button"
                    className="neo-swatch"
                    style={{ background: swatch.neo }}
                    aria-label={swatch.name}
                    aria-pressed={color.id === swatch.id}
                    onClick={() => setColor(swatch)}
                  />
                ))}
              </div>
              <p className="mt-3 text-[13px] font-medium tracking-tight text-apple-ink">{color.name}</p>
            </fieldset>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative mt-14 md:mt-20 max-w-[640px] mx-auto"
          >
            <AcademyDevice />
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-24 md:py-32" style={{ background: color.wash }}>
        <div className="max-w-[820px] mx-auto text-center">
          <Reveal>
            <h2 className="apple-display-ink text-[34px] md:text-[52px]">
              Menos nervosismo
              <br />
              antes de entrar no box.
            </h2>
            <p className="apple-subhead text-[19px] md:text-[24px] mt-6 max-w-[520px] mx-auto">
              A faculdade já exige o suficiente. O Academy organiza o caso. Você atende.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-5 py-24 md:py-32">
        <div className="max-w-[980px] mx-auto">
          <Reveal className="text-center mb-14">
            <h2 className="apple-display-ink text-[40px] md:text-[56px]">O essencial. O seu.</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {FEATURES.map((item) => (
              <React.Fragment key={item.t}>
                <Reveal className="h-full">
                  <div
                    className="h-full rounded-[28px] px-8 py-10"
                    style={{ background: item.t === 'Modo Box' ? color.soft : color.wash }}
                  >
                    <h3 className="text-[24px] font-semibold tracking-tight mb-3">{item.t}</h3>
                    <p className="text-[17px] text-apple-gray leading-relaxed">{item.d}</p>
                  </div>
                </Reveal>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="px-5 py-24 md:py-32 scroll-mt-12" style={{ background: color.wash }}>
        <div className="max-w-[980px] mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className="apple-display-ink text-[40px] md:text-[56px]">Três momentos. Seus.</h2>
          </Reveal>
          <div className="space-y-16 md:space-y-20">
            {MOMENTS.map((item) => (
              <React.Fragment key={item.n}>
                <Reveal>
                  <p className="text-[13px] mb-3 tabular-nums" style={{ color: color.neo }}>
                    {item.n}
                  </p>
                  <h3 className="text-[28px] md:text-[40px] font-semibold tracking-tight leading-[1.12]">{item.t}</h3>
                  <p className="apple-subhead text-[17px] md:text-[21px] mt-3 max-w-[560px]">{item.d}</p>
                </Reveal>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:py-32 text-white" style={{ background: color.neo }}>
        <div className="max-w-[980px] mx-auto grid md:grid-cols-2 gap-14 items-center">
          <Reveal>
            <p className="text-[19px] font-semibold tracking-tight text-white/80 mb-2">Modo Box</p>
            <h2 className="text-[40px] md:text-[56px] font-semibold tracking-tight leading-[1.05]">
              A lista de passos,
              <br />
              visível de longe.
            </h2>
            <p className="text-[19px] mt-5 max-w-[440px] text-white/80 leading-snug">
              Luvas. Sem toque. O celular apoiado. O próximo passo, grande o suficiente para só olhar.
            </p>
          </Reveal>
          <Reveal>
            <div className="mx-auto w-[260px] aspect-[9/19] rounded-[44px] bg-white p-[10px] shadow-[0_28px_60px_-20px_rgba(0,0,0,0.28)]">
              <div className="relative h-full w-full rounded-[36px] overflow-hidden bg-[#fbfbfd] text-left px-6 pt-14">
                <p className="text-[12px] text-apple-gray mb-6">Exodontia simples</p>
                <h6 className="text-[22px] font-semibold tracking-tight text-apple-ink mb-8">Passo 3 de 4</h6>
                <div className="space-y-3 text-[14px] text-apple-ink">
                  <p className="text-apple-gray line-through">Antissepsia</p>
                  <p className="text-apple-gray line-through">Anestesia</p>
                  <p className="font-semibold">Sindesmotomia</p>
                  <p className="text-apple-gray">Luxação</p>
                </div>
                <div
                  className="absolute bottom-6 left-6 right-6 rounded-2xl px-4 py-3 text-[13px] font-medium text-white text-center"
                  style={{ background: color.neo }}
                >
                  O seu passo
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="planos" className="bg-white px-5 py-24 md:py-32 scroll-mt-12">
        <div className="max-w-[980px] mx-auto">
          <Reveal className="text-center mb-14">
            <h2 className="apple-display-ink text-[40px] md:text-[56px]">Escolha o seu Academy.</h2>
            <p className="apple-subhead text-[19px] mt-4">Grátis para começar. Sem anúncios. Sem venda de dados.</p>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className="rounded-[28px] p-8 md:p-10 flex flex-col"
                style={
                  plan.featured
                    ? { background: color.neo, color: '#fff' }
                    : { background: color.wash, color: '#1d1d1f' }
                }
              >
                <h3 className="text-[24px] font-semibold tracking-tight">{plan.name}</h3>
                <p className="mt-4 text-[40px] font-semibold tracking-tight">
                  {plan.price}
                  <span className={`text-[17px] font-normal ${plan.featured ? 'text-white/70' : 'text-apple-gray'}`}> {plan.note}</span>
                </p>
                <ul className={`space-y-3 text-[14px] mt-8 mb-10 flex-grow ${plan.featured ? 'text-white/90' : 'text-apple-ink/80'}`}>
                  {plan.feats.map((f) => (
                    <li key={f}>– {f}</li>
                  ))}
                </ul>
                <a href={START_ACADEMY} className={plan.featured ? 'apple-btn-light w-full' : 'neo-btn w-full'}>
                  Começar
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:py-32" style={{ background: color.wash }}>
        <div className="max-w-[680px] mx-auto">
          <h2 className="apple-display-ink text-[34px] md:text-[48px] text-center mb-10">Perguntas frequentes</h2>
          <div className="divide-y divide-black/10 border-y border-black/10">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none text-[17px] font-semibold tracking-tight">
                  {faq.q}
                  <span className="text-apple-gray text-[22px] ml-6 group-open:rotate-45 transition-transform leading-none">+</span>
                </summary>
                <p className="pt-3 pr-10 text-[15px] text-apple-gray leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-10 text-[13px] text-apple-gray text-center">
            Ferramenta de apoio pessoal. Siga sempre os preceptores da sua universidade.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-24">
        <div className="max-w-[680px] mx-auto text-center">
          <h2 className="apple-display-ink text-[34px] md:text-[48px] mb-4">Acabou de se formar?</h2>
          <p className="apple-subhead text-[19px] mb-8">Leve o arquivo do Academy para o OdontoHub. Sem recomeçar do zero.</p>
          <Link to="/" className="apple-link">
            Conhecer o OdontoHub <span aria-hidden>›</span>
          </Link>
        </div>
      </section>

      <section className="px-5 py-24 md:py-36 text-white" style={{ background: color.neo }}>
        <div className="max-w-[780px] mx-auto text-center">
          <h2 className="text-[36px] md:text-[56px] font-semibold tracking-tight leading-[1.05] mb-5">
            Entre na clínica do seu jeito.
          </h2>
          <p className="text-[19px] md:text-[21px] text-white/80 mb-9">Grátis para começar.</p>
          <a href={START_ACADEMY} className="apple-btn-light">
            Começar
          </a>
        </div>
      </section>
    </div>
  );
}
