import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence, motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Reveal, START_ACADEMY } from '../components/shared/Apple';
import { COLORWAYS, type NeoColorway } from '../components/academy/neo';
import {
  BoxDemo,
  DestaquesStrip,
  FeatureGallery,
  HighlightNav,
  MomentsExplorer,
  StickyTray,
} from '../components/academy/NeoInteractive';

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

function AcademyDevice({ name }: { name: string }) {
  const [ready, setReady] = useState(true);
  const greeting = name.trim() || 'Samuel';

  return (
    <div className="neo-device overflow-hidden text-left">
      <div className="p-7 md:p-10 bg-white">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <p className="text-[13px] text-apple-gray">Oi, {greeting}</p>
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
        <motion.div
          layout
          className="rounded-[22px] p-6 md:p-7 text-white"
          style={{ background: 'var(--neo)' }}
        >
          <p className="text-[11px] uppercase tracking-[0.14em] text-white/70 mb-2">Quinta, 14:00 · Cadeira 08</p>
          <p className="text-[22px] md:text-[26px] font-semibold tracking-tight">Marcos Roberto Jr.</p>
          <p className="mt-2 text-[14px] text-white/80">Dentística · Isolamento absoluto</p>
        </motion.div>
        <button
          type="button"
          onClick={() => setReady((value) => !value)}
          className="mt-4 w-full rounded-[18px] px-5 py-4 flex items-center justify-between text-left"
          style={{ background: 'var(--neo-wash)' }}
        >
          <div>
            <p className="text-[11px] text-apple-gray">O seu checklist</p>
            <p className="text-[14px] text-apple-ink">Kit de isolamento separado</p>
          </div>
          <span className="text-[13px] font-medium" style={{ color: 'var(--neo)' }}>
            {ready ? 'Pronto' : 'A separar'}
          </span>
        </button>
      </div>
    </div>
  );
}

export default function Academy() {
  const [color, setColor] = useState<NeoColorway>(COLORWAYS[0]);
  const [name, setName] = useState('Samuel');

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

      <section id="cores" className="relative overflow-hidden pt-28 md:pt-36 pb-16 md:pb-24 px-5 scroll-mt-24">
        <motion.div
          className="neo-blob w-[420px] h-[420px] -top-24 -left-24 opacity-70"
          animate={{ background: color.soft }}
          transition={{ duration: 0.55 }}
        />
        <motion.div
          className="neo-blob w-[360px] h-[360px] top-32 -right-16 opacity-55"
          animate={{ background: color.soft }}
          transition={{ duration: 0.55 }}
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
              <p className="mt-3 text-[13px] font-medium tracking-tight text-apple-ink h-5">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={color.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.22 }}
                    className="inline-block"
                  >
                    {color.name}
                  </motion.span>
                </AnimatePresence>
              </p>
            </fieldset>

            <label className="mt-8 inline-flex flex-col items-center gap-2">
              <span className="text-[13px] text-apple-gray">Como te chamamos?</span>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                maxLength={24}
                aria-label="O seu nome"
                className="w-[200px] text-center text-[17px] font-semibold tracking-tight bg-transparent outline-none border-b border-black/10 focus:border-[var(--neo)] pb-1"
              />
            </label>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative mt-14 md:mt-20 max-w-[640px] mx-auto"
          >
            <AcademyDevice name={name} />
          </motion.div>
        </div>
      </section>

      <HighlightNav color={color} />
      <DestaquesStrip color={color} />

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

      <section id="essencial" className="bg-white px-5 py-24 md:py-32 scroll-mt-28">
        <div className="max-w-[980px] mx-auto">
          <Reveal className="text-center mb-14">
            <h2 className="apple-display-ink text-[40px] md:text-[56px]">O essencial. O seu.</h2>
            <p className="apple-subhead text-[19px] mt-4">Explore os detalhes. Toque no que for seu.</p>
          </Reveal>
          <FeatureGallery color={color} />
        </div>
      </section>

      <section id="como-funciona" className="px-5 py-24 md:py-32 scroll-mt-28" style={{ background: color.wash }}>
        <div className="max-w-[980px] mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className="apple-display-ink text-[40px] md:text-[56px]">Três momentos. Seus.</h2>
          </Reveal>
          <MomentsExplorer color={color} />
        </div>
      </section>

      <section id="modo-box" className="px-5 py-24 md:py-32 text-white scroll-mt-28" style={{ background: color.neo }}>
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
            <p className="text-[14px] text-white/60 mt-6">Toque no passo. Ou deixe o Academy avançar sozinho.</p>
          </Reveal>
          <Reveal>
            <BoxDemo color={color} />
          </Reveal>
        </div>
      </section>

      <section id="planos" className="bg-white px-5 py-24 md:py-32 scroll-mt-28">
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

      <section id="academy-cta" className="px-5 py-24 md:py-36 text-white" style={{ background: color.neo }}>
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

      <StickyTray color={color} colorways={COLORWAYS} onColor={setColor} />
    </div>
  );
}
