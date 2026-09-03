import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { START_ACADEMY } from '../shared/Apple';
import type { NeoColorway } from './neo';

export const HIGHLIGHTS = [
  { id: 'cores', label: 'Cores' },
  { id: 'essencial', label: 'Essencial' },
  { id: 'como-funciona', label: 'Momentos' },
  { id: 'modo-box', label: 'Modo Box' },
  { id: 'planos', label: 'Planos' },
];

const DESTAQUES = [
  { id: 'cores', kicker: 'Cores', t: 'Cinco jeitos de ser o seu.', d: 'Laranja, lima, azul, rosa, violeta.' },
  { id: 'essencial', kicker: 'Dossiê', t: 'Um lugar para o caso.', d: 'Pacientes, planejamento, anotações.' },
  { id: 'essencial', kicker: 'Checklist', t: 'O que levar. Sem esquecer.', d: 'Por disciplina, antes da esterilização.' },
  { id: 'modo-box', kicker: 'Modo Box', t: 'O passo, visível de longe.', d: 'Luvas. Sem toque. Celular apoiado.' },
  { id: 'essencial', kicker: 'Evoluções', t: 'O texto do preceptor.', d: 'Modelo limpo. Assinatura em segundos.' },
  { id: 'planos', kicker: 'Começar', t: 'Grátis para o primeiro caso.', d: 'Sem anúncios. Sem venda de dados.' },
];

type FeatureSlide = {
  t: string;
  short: string;
  d: string;
  kind: 'dossier' | 'checklist' | 'box' | 'gallery' | 'evolution' | 'progress';
};

export const FEATURE_SLIDES: FeatureSlide[] = [
  { t: 'Dossiê de pacientes', short: 'Dossiê', d: 'Dados, planejamento e anotações. Um lugar. Sem papéis soltos.', kind: 'dossier' },
  { t: 'Checklists por disciplina', short: 'Checklists', d: 'O que levar. O que esterilizar. Sem esquecer o instrumental.', kind: 'checklist' },
  { t: 'Modo Box', short: 'Modo Box', d: 'Letras grandes. Celular apoiado. Sem tocar a tela de luvas.', kind: 'box' },
  { t: 'Galeria segura', short: 'Galeria', d: 'Fotos do caso no paciente. Fora do rolo pessoal.', kind: 'gallery' },
  { t: 'Evoluções prontas', short: 'Evoluções', d: 'Modelos limpos. Assinatura do preceptor em segundos.', kind: 'evolution' },
  { t: 'Progresso sem cobrança', short: 'Progresso', d: 'O que você já fez. Sem ranking. Sem gamificação.', kind: 'progress' },
];

export const MOMENTS = [
  {
    n: '01',
    t: 'Antes.',
    d: 'Separe o instrumental pelo checklist da disciplina. Nada esquecido na esterilização.',
  },
  {
    n: '02',
    t: 'No box.',
    d: 'Modo Box: alto contraste, passos visíveis a um metro. Biossegurança intacta.',
  },
  {
    n: '03',
    t: 'Depois.',
    d: 'Fotos no paciente. Evolução rascunhada. Feche o app e vá embora.',
  },
];

const BOX_STEPS = ['Antissepsia', 'Anestesia', 'Sindesmotomia', 'Luxação'];

const ease = [0.25, 0.1, 0.25, 1] as const;

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function useSectionSpy(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? '');

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: '-28% 0px -58% 0px', threshold: [0.1, 0.25, 0.5, 0.75] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export function HighlightNav({ color }: { color: NeoColorway }) {
  const active = useSectionSpy(HIGHLIGHTS.map((item) => item.id));

  return (
    <div className="sticky top-12 z-40">
      <div
        className="border-b border-black/[0.06] backdrop-blur-[20px] backdrop-saturate-150"
        style={{ background: `color-mix(in srgb, ${color.wash} 82%, white)` }}
      >
        <div className="max-w-[980px] mx-auto px-5 h-12 flex items-center justify-between gap-6">
          <p className="hidden sm:block text-[12px] text-apple-gray shrink-0">Comece pelos destaques</p>
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-none">
            {HIGHLIGHTS.map((item) => {
              const isActive = active === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToId(item.id)}
                  className="text-[12px] px-3 py-1.5 rounded-full transition-colors whitespace-nowrap"
                  style={
                    isActive
                      ? { background: color.neo, color: '#fff' }
                      : { color: '#1d1d1f' }
                  }
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function DestaquesStrip({ color }: { color: NeoColorway }) {
  return (
    <section className="px-5 pt-10 pb-6 md:pt-14 md:pb-8" style={{ background: color.wash }}>
      <div className="max-w-[980px] mx-auto">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-2 -mx-1 px-1">
          {DESTAQUES.map((item, index) => (
            <button
              key={`${item.kicker}-${index}`}
              type="button"
              onClick={() => scrollToId(item.id)}
              className="snap-start shrink-0 w-[260px] md:w-[280px] rounded-[28px] p-7 text-left bg-white/80 hover:bg-white transition-colors"
            >
              <p className="text-[13px] mb-3" style={{ color: color.neo }}>
                {item.kicker}
              </p>
              <h3 className="text-[21px] font-semibold tracking-tight leading-[1.15] mb-2">{item.t}</h3>
              <p className="text-[14px] text-apple-gray leading-relaxed">{item.d}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function DossierStage() {
  const [selected, setSelected] = useState(1);
  const patients = [
    { n: 'Ana Lima', p: 'Endodontia · 22' },
    { n: 'Marcos Roberto Jr.', p: 'Dentística · Isolamento' },
    { n: 'Beatriz Nunes', p: 'Periodontia · 16' },
  ];

  return (
    <div className="space-y-2 text-left">
      <p className="text-[12px] text-apple-gray mb-3">Pacientes deste semestre</p>
      {patients.map((patient, index) => (
        <button
          key={patient.n}
          type="button"
          onClick={() => setSelected(index)}
          className="w-full rounded-[18px] px-5 py-4 text-left transition-colors"
          style={
            selected === index
              ? { background: 'var(--neo)', color: '#fff' }
              : { background: 'var(--neo-wash)', color: '#1d1d1f' }
          }
        >
          <p className="text-[16px] font-semibold tracking-tight">{patient.n}</p>
          <p className={`text-[13px] mt-0.5 ${selected === index ? 'text-white/80' : 'text-apple-gray'}`}>{patient.p}</p>
        </button>
      ))}
    </div>
  );
}

function ChecklistStage() {
  const [done, setDone] = useState([true, true, false, false]);
  const items = ['Espelho e sonda', 'Pinça clínica', 'Isolamento absoluto', 'Resina A2'];

  return (
    <div className="text-left">
      <p className="text-[12px] text-apple-gray mb-4">Dentística · o que levar</p>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={item}>
            <button
              type="button"
              onClick={() => setDone((prev) => prev.map((value, i) => (i === index ? !value : value)))}
              className="flex w-full items-center gap-3 text-left"
            >
              <span
                className="w-[22px] h-[22px] rounded-full border flex items-center justify-center text-[11px] text-white"
                style={{
                  background: done[index] ? 'var(--neo)' : 'transparent',
                  borderColor: done[index] ? 'var(--neo)' : '#d2d2d7',
                }}
              >
                {done[index] ? '✓' : ''}
              </span>
              <span className={`text-[16px] ${done[index] ? 'text-apple-gray line-through' : 'text-apple-ink'}`}>{item}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BoxMiniStage() {
  return (
    <div className="text-left">
      <p className="text-[12px] text-apple-gray mb-2">Exodontia simples</p>
      <p className="text-[28px] font-semibold tracking-tight leading-[1.1] mb-6">Passo 3 de 4</p>
      <p className="text-apple-gray line-through text-[15px]">Antissepsia</p>
      <p className="text-apple-gray line-through text-[15px] mt-2">Anestesia</p>
      <p className="text-[20px] font-semibold mt-3">Sindesmotomia</p>
      <p className="text-apple-gray text-[15px] mt-2">Luxação</p>
    </div>
  );
}

function GalleryStage() {
  const [open, setOpen] = useState(0);
  const shots = ['Antes', 'Isolamento', 'Resina', 'Final'];

  return (
    <div className="text-left">
      <p className="text-[12px] text-apple-gray mb-4">Marcos Roberto Jr. · fotos no paciente</p>
      <div className="grid grid-cols-4 gap-2 mb-4">
        {shots.map((shot, index) => (
          <button
            key={shot}
            type="button"
            onClick={() => setOpen(index)}
            className="aspect-square rounded-2xl text-[11px] font-medium"
            style={{
              background: open === index ? 'var(--neo)' : 'var(--neo-wash)',
              color: open === index ? '#fff' : '#86868b',
            }}
          >
            {shot}
          </button>
        ))}
      </div>
      <div className="rounded-[22px] px-5 py-8 text-center" style={{ background: 'var(--neo-wash)' }}>
        <p className="text-[13px] text-apple-gray">Foto {open + 1} de 4</p>
        <p className="text-[22px] font-semibold tracking-tight mt-1">{shots[open]}</p>
      </div>
    </div>
  );
}

function EvolutionStage() {
  const [signed, setSigned] = useState(false);

  return (
    <div className="text-left">
      <p className="text-[12px] text-apple-gray mb-3">Evolução · Dentística</p>
      <div className="rounded-[22px] px-5 py-5" style={{ background: 'var(--neo-wash)' }}>
        <p className="text-[15px] leading-relaxed text-apple-ink">
          Isolamento absoluto. Restauração classe II em resina composta A2. Oclusão conferida. Paciente orientado.
        </p>
      </div>
      <button
        type="button"
        onClick={() => setSigned((value) => !value)}
        className="mt-4 rounded-full px-5 py-2.5 text-[14px] text-white"
        style={{ background: 'var(--neo)' }}
      >
        {signed ? 'Assinado pelo preceptor' : 'Pedir assinatura'}
      </button>
    </div>
  );
}

function ProgressStage() {
  return (
    <div className="text-left grid grid-cols-3 gap-3">
      {[
        { n: '12', l: 'casos' },
        { n: '4', l: 'disciplinas' },
        { n: '47', l: 'pacientes' },
      ].map((item) => (
        <div key={item.l} className="rounded-[22px] px-4 py-6 text-center" style={{ background: 'var(--neo-wash)' }}>
          <p className="text-[28px] font-semibold tracking-tight" style={{ color: 'var(--neo)' }}>
            {item.n}
          </p>
          <p className="text-[13px] text-apple-gray mt-1">{item.l}</p>
        </div>
      ))}
      <p className="col-span-3 text-[14px] text-apple-gray pt-2">O que você já fez. Sem ranking.</p>
    </div>
  );
}

function FeatureStage({ kind }: { kind: FeatureSlide['kind'] }) {
  switch (kind) {
    case 'dossier':
      return <DossierStage />;
    case 'checklist':
      return <ChecklistStage />;
    case 'box':
      return <BoxMiniStage />;
    case 'gallery':
      return <GalleryStage />;
    case 'evolution':
      return <EvolutionStage />;
    case 'progress':
      return <ProgressStage />;
    default:
      return null;
  }
}

export function FeatureGallery({ color }: { color: NeoColorway }) {
  const [index, setIndex] = useState(2);
  const slide = FEATURE_SLIDES[index];

  const go = (next: number) => {
    const total = FEATURE_SLIDES.length;
    setIndex((next + total) % total);
  };

  return (
    <div>
      <div
        className="rounded-[28px] p-6 md:p-10 outline-none"
        style={{ background: color.wash }}
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft') go(index - 1);
          if (event.key === 'ArrowRight') go(index + 1);
        }}
      >
        <div className="flex items-center justify-between gap-4 mb-8">
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => go(index - 1)}
            className="text-[28px] leading-none text-apple-gray hover:text-apple-ink px-1"
          >
            ‹
          </button>
          <p className="text-[19px] md:text-[24px] font-semibold tracking-tight text-center">{slide.t}</p>
          <button
            type="button"
            aria-label="Próximo"
            onClick={() => go(index + 1)}
            className="text-[28px] leading-none text-apple-gray hover:text-apple-ink px-1"
          >
            ›
          </button>
        </div>
        <div className="max-w-[520px] mx-auto min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.kind}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease }}
            >
              <FeatureStage kind={slide.kind} />
            </motion.div>
          </AnimatePresence>
        </div>
        <p className="text-[15px] md:text-[17px] text-apple-gray text-center mt-8 max-w-[480px] mx-auto leading-relaxed">
          {slide.d}
        </p>
        <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="O essencial">
          {FEATURE_SLIDES.map((item, i) => (
            <button
              key={item.t}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={item.t}
              onClick={() => setIndex(i)}
              className="h-1.5 rounded-full transition-all"
              style={{
                width: i === index ? 22 : 8,
                background: i === index ? color.neo : 'rgba(0,0,0,0.15)',
              }}
            />
          ))}
        </div>
      </div>
      <div className="flex gap-2 overflow-x-auto scrollbar-none mt-5 -mx-1 px-1">
        {FEATURE_SLIDES.map((item, i) => (
          <button
            key={item.t}
            type="button"
            onClick={() => setIndex(i)}
            className="shrink-0 rounded-full px-4 py-2 text-[13px] transition-colors"
            style={
              i === index
                ? { background: color.neo, color: '#fff' }
                : { background: color.wash, color: '#1d1d1f' }
            }
          >
            {item.short}
          </button>
        ))}
      </div>
    </div>
  );
}

function MomentStage({ index }: { index: number }) {
  if (index === 0) return <ChecklistStage />;
  if (index === 1) return <BoxMiniStage />;
  return <EvolutionStage />;
}

export function MomentsExplorer({ color }: { color: NeoColorway }) {
  const [index, setIndex] = useState(0);
  const moment = MOMENTS[index];

  return (
    <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
      <div className="space-y-2">
        {MOMENTS.map((item, i) => {
          const selected = i === index;
          return (
            <button
              key={item.n}
              type="button"
              onClick={() => setIndex(i)}
              className="w-full text-left rounded-[24px] px-5 py-6 transition-colors"
              style={selected ? { background: 'white' } : undefined}
            >
              <p className="text-[13px] mb-2 tabular-nums" style={{ color: color.neo }}>
                {item.n}
              </p>
              <h3 className="text-[28px] md:text-[36px] font-semibold tracking-tight leading-[1.12]">{item.t}</h3>
              <AnimatePresence initial={false}>
                {selected && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="apple-subhead text-[17px] md:text-[19px] mt-3 overflow-hidden"
                  >
                    {item.d}
                  </motion.p>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </div>
      <div className="rounded-[28px] bg-white p-7 md:p-9 min-h-[320px]">
        <p className="text-[13px] mb-5" style={{ color: color.neo }}>
          {moment.n} {moment.t}
        </p>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease }}
          >
            <MomentStage index={index} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function BoxDemo({ color }: { color: NeoColorway }) {
  const [step, setStep] = useState(2);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || paused) return undefined;
    const timer = window.setInterval(() => {
      setStep((current) => (current + 1) % BOX_STEPS.length);
    }, 2600);
    return () => window.clearInterval(timer);
  }, [reduce, paused]);

  return (
    <div
      className="mx-auto w-[260px] aspect-[9/19] rounded-[44px] bg-white p-[10px] shadow-[0_28px_60px_-20px_rgba(0,0,0,0.28)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-full w-full rounded-[36px] overflow-hidden bg-[#fbfbfd] text-left px-6 pt-14">
        <p className="text-[12px] text-apple-gray mb-6">Exodontia simples</p>
        <h6 className="text-[22px] font-semibold tracking-tight text-apple-ink mb-8">
          Passo {step + 1} de {BOX_STEPS.length}
        </h6>
        <div className="space-y-3 text-[14px] text-apple-ink">
          {BOX_STEPS.map((label, i) => (
            <button
              key={label}
              type="button"
              onClick={() => setStep(i)}
              className="block w-full text-left"
            >
              <span
                className={
                  i < step ? 'text-apple-gray line-through' : i === step ? 'font-semibold' : 'text-apple-gray'
                }
              >
                {label}
              </span>
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setStep((current) => (current + 1) % BOX_STEPS.length)}
          className="absolute bottom-6 left-6 right-6 rounded-2xl px-4 py-3 text-[13px] font-medium text-white text-center"
          style={{ background: color.neo }}
        >
          {step === BOX_STEPS.length - 1 ? 'Começar de novo' : 'O seu passo'}
        </button>
      </div>
    </div>
  );
}

export function StickyTray({
  color,
  colorways,
  onColor,
}: {
  color: NeoColorway;
  colorways: NeoColorway[];
  onColor: (next: NeoColorway) => void;
}) {
  const [show, setShow] = useState(false);
  const [hideForCta, setHideForCta] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('cores');
    const cta = document.getElementById('academy-cta');
    if (!hero) return undefined;

    const heroObs = new IntersectionObserver(
      ([entry]) => setShow(!entry.isIntersecting),
      { threshold: 0.15 },
    );
    heroObs.observe(hero);

    let ctaObs: IntersectionObserver | undefined;
    if (cta) {
      ctaObs = new IntersectionObserver(
        ([entry]) => setHideForCta(entry.isIntersecting),
        { threshold: 0.2 },
      );
      ctaObs.observe(cta);
    }

    return () => {
      heroObs.disconnect();
      ctaObs?.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {show && !hideForCta && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease }}
          className="fixed bottom-0 left-0 right-0 z-40"
        >
          <div
            className="border-t border-black/[0.06] backdrop-blur-[20px] backdrop-saturate-150"
            style={{ background: `color-mix(in srgb, ${color.wash} 88%, white)` }}
          >
            <div className="max-w-[980px] mx-auto px-5 h-[64px] flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="text-[13px] md:text-[15px] font-semibold tracking-tight truncate">
                  O seu Academy · {color.name}
                </p>
                <div className="hidden sm:flex items-center gap-1.5 mt-1">
                  {colorways.map((swatch) => (
                    <button
                      key={swatch.id}
                      type="button"
                      aria-label={swatch.name}
                      aria-pressed={color.id === swatch.id}
                      onClick={() => onColor(swatch)}
                      className="neo-swatch !w-4 !h-4"
                      style={{ background: swatch.neo }}
                    />
                  ))}
                </div>
              </div>
              <a href={START_ACADEMY} className="neo-btn !text-[15px] !py-2.5 !px-5 shrink-0">
                Começar
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
