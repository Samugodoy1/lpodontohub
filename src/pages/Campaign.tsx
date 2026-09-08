import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { toPng } from 'html-to-image';
import {
  ACADEMY_BIO,
  ACADEMY_LAUNCH,
  ACADEMY_LAUNCH_HIGHLIGHTS,
  ACADEMY_LAUNCH_PLAN,
  ACADEMY_LAUNCH_SQUARES,
  ACADEMY_LAUNCH_STORIES,
  APP_BIO,
  APP_LAUNCH,
  APP_LAUNCH_HIGHLIGHTS,
  APP_LAUNCH_PLAN,
  APP_LAUNCH_SQUARES,
  APP_LAUNCH_STORIES,
  COLORS_HUB,
  COMMERCIAL,
  COMMERCIAL_NOTE,
  FRONTS,
  KIT_FILES,
  MODELOS_ACADEMY,
  MODELOS_HUB,
  SLOGAN,
  TERMS,
  VIRADA_STORY,
} from '../data/brand';
import { LARANJA, NEOS, START_ACADEMY, START_PRO, type FeedPost, type Highlight, type Surface } from '../data/feeds';

function downloadNode(node: HTMLElement | null, filename: string) {
  if (!node) return;
  toPng(node, { cacheBust: true, pixelRatio: 2 })
    .then((dataUrl) => {
      const link = document.createElement('a');
      link.download = filename;
      link.href = dataUrl;
      link.click();
    })
    .catch(() => undefined);
}

function slug(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}): React.ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FilmPlayer(): React.ReactElement {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const shot = COMMERCIAL[index];

  useEffect(() => {
    if (!playing) return;
    const id = window.setTimeout(() => {
      if (index < COMMERCIAL.length - 1) {
        setIndex((current) => current + 1);
      } else {
        setPlaying(false);
      }
    }, shot.dur);
    return () => window.clearTimeout(id);
  }, [playing, index, shot.dur]);

  const play = () => {
    setStarted(true);
    if (index >= COMMERCIAL.length - 1) setIndex(0);
    setPlaying(true);
  };

  const pause = () => setPlaying(false);

  const jump = (next: number) => {
    setIndex(next);
    setStarted(true);
    setPlaying(false);
  };

  return (
    <div>
      <div className="relative w-full aspect-video bg-black overflow-hidden rounded-[4px] md:rounded-[8px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${shot.at}-${shot.beat}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0"
          >
            {shot.src ? (
              <img src={shot.src} alt={shot.beat} className="h-full w-full object-cover" />
            ) : (
              <div className="h-full w-full bg-black flex flex-col items-center justify-center px-8 text-center">
                <p className="text-[28px] md:text-[48px] font-semibold tracking-tight text-[#f5f5f7] leading-[1.08]">
                  {SLOGAN}
                </p>
                <p className="mt-4 text-[15px] md:text-[19px] text-white/45">OdontoHub</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {(!started || !playing) && (
          <button
            type="button"
            onClick={playing ? pause : play}
            className="absolute inset-0 flex items-center justify-center group"
            aria-label={playing ? 'Pausar o filme' : 'Assistir o filme'}
          >
            <span className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full bg-white/92 flex items-center justify-center transition-transform group-hover:scale-105">
              {playing ? (
                <span className="flex gap-1.5">
                  <span className="w-[5px] h-5 bg-[#1d1d1f] rounded-sm" />
                  <span className="w-[5px] h-5 bg-[#1d1d1f] rounded-sm" />
                </span>
              ) : (
                <span className="ml-1 w-0 h-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-[#1d1d1f]" />
              )}
            </span>
          </button>
        )}

        {started && playing && (
          <button type="button" onClick={pause} className="absolute inset-0" aria-label="Pausar o filme" />
        )}

        {started && (
          <p className="absolute bottom-4 left-5 text-[11px] tabular-nums tracking-[0.14em] text-white/70">
            {shot.at} · {shot.beat}
          </p>
        )}
      </div>

      <div className="mt-6 grid grid-cols-3 md:grid-cols-9 gap-1.5">
        {COMMERCIAL.map((item, i) => (
          <button
            key={`${item.at}-${item.beat}`}
            type="button"
            onClick={() => jump(i)}
            className="relative aspect-video overflow-hidden bg-black"
            aria-label={`${item.at} ${item.beat}`}
          >
            {item.src ? (
              <img src={item.src} alt="" className="h-full w-full object-cover" />
            ) : (
              <span className="absolute inset-0 bg-black" />
            )}
            <span
              className="absolute inset-0"
              style={{ boxShadow: i === index ? 'inset 0 0 0 2px #f5f5f7' : 'inset 0 0 0 1px rgba(255,255,255,0.12)' }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function surfaceFill(surface: Surface, neo?: FeedPost['neo']): string {
  switch (surface) {
    case 'black':
      return '#000';
    case 'white':
      return '#fff';
    case 'surface':
      return '#f5f5f7';
    case 'blue':
      return '#0071e3';
    case 'neo':
      return neo?.neo ?? LARANJA.neo;
    case 'wash':
      return neo?.wash ?? LARANJA.wash;
    default:
      return '#000';
  }
}

function isDarkSurface(post: FeedPost): boolean {
  if (post.surface === 'photo') return post.photoTone === 'dark';
  return post.surface === 'black' || post.surface === 'blue' || post.surface === 'neo';
}

function PostArt({ post }: { post: FeedPost }): React.ReactElement {
  const ref = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const ratio =
    post.format === 'story' ? 'aspect-[9/16]' : post.format === 'square' ? 'aspect-square' : 'aspect-[4/5]';
  const dark = isDarkSurface(post);
  const color = dark ? '#f5f5f7' : '#1d1d1f';
  const muted = dark ? 'rgba(255,255,255,0.62)' : '#6e6e73';
  const academy = post.account === 'academy';
  const accent = dark
    ? academy
      ? 'rgba(255,255,255,0.78)'
      : '#2997ff'
    : academy
      ? post.neo?.neo ?? LARANJA.neo
      : '#0071e3';
  const academyMark = dark ? 'rgba(255,255,255,0.7)' : post.neo?.neo ?? LARANJA.neo;
  const align =
    post.align === 'center'
      ? 'flex-1 flex flex-col justify-center items-center text-center'
      : post.align === 'start'
        ? 'flex-1 flex flex-col justify-start pt-2'
        : 'flex-1 flex flex-col justify-end';
  const kind = post.kind ?? 'hero';
  const link = academy ? post.neo?.neo ?? LARANJA.neo : '#0066cc';

  return (
    <div>
      <div
        ref={ref}
        className={`relative w-full overflow-hidden ${ratio}`}
        style={{ background: surfaceFill(post.surface, post.neo), color }}
      >
        {post.surface === 'photo' && post.photo && (
          <>
            <img src={post.photo} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  post.photoTone === 'dark'
                    ? 'linear-gradient(to top, rgba(0,0,0,0.62) 0%, transparent 46%)'
                    : 'linear-gradient(to top, rgba(255,255,255,0.58) 0%, transparent 42%)',
              }}
            />
          </>
        )}
        <div className="absolute inset-0 flex flex-col p-10 md:p-12">
          <p className="text-[13px] font-semibold tracking-tight" style={{ color }}>
            OdontoHub
            {academy && (
              <span className="ml-1.5 font-normal" style={{ color: academyMark }}>
                Academy
              </span>
            )}
          </p>
          <div className={align}>
            {post.kicker && (
              <p className="text-[13px] mb-3" style={{ color: accent }}>
                {post.kicker}
              </p>
            )}
            {(kind === 'hero' || kind === 'cta' || kind === 'colors') && (
              <h3
                className="text-[32px] md:text-[40px] font-semibold tracking-tight leading-[1.05] whitespace-pre-line"
                style={{ color }}
              >
                {post.headline}
              </h3>
            )}
            {kind === 'list' && (
              <>
                <h3
                  className="text-[28px] md:text-[34px] font-semibold tracking-tight leading-[1.08] mb-7"
                  style={{ color }}
                >
                  {post.headline}
                </h3>
                <ul className="space-y-3">
                  {(post.items ?? []).map((item) => (
                    <li key={item} className="text-[16px] md:text-[17px]" style={{ color }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {kind === 'colors' && (
              <div className={`mt-8 flex gap-3 ${post.align === 'center' ? 'justify-center' : ''}`}>
                {NEOS.map((neo) => (
                  <span
                    key={neo.id}
                    className="w-8 h-8 rounded-full"
                    style={{ background: neo.neo, boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.55)' }}
                  />
                ))}
              </div>
            )}
            {post.sub && kind !== 'list' && (
              <p className="mt-4 text-[16px] md:text-[18px] leading-snug" style={{ color: muted }}>
                {post.sub}
              </p>
            )}
            {post.cta && (
              <div
                className={`mt-8 rounded-full px-5 py-2.5 text-[15px] ${post.align === 'center' ? 'self-center' : 'self-start'}`}
                style={{
                  background: dark ? '#fff' : academy ? post.neo?.neo ?? LARANJA.neo : '#0071e3',
                  color: dark ? '#1d1d1f' : '#fff',
                }}
              >
                {post.cta}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-5 flex items-start justify-between gap-3">
        <div>
          <p className="text-[15px] font-semibold tracking-tight text-apple-ink">
            {post.n ? `${post.n} · ${post.title}` : post.title}
          </p>
          <p className="text-[12px] text-apple-gray mt-0.5">
            {post.account === 'academy' ? '@odontohub.academy' : '@odontohub.app'}
            {' · '}
            {post.format === 'story' ? '9:16' : post.format === 'square' ? '1:1' : '4:5'}
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => downloadNode(ref.current, `${post.account}-${post.n}-${slug(post.title)}.png`)}
            className="text-[13px]"
            style={{ color: link }}
          >
            Baixar
          </button>
          <button
            type="button"
            onClick={() => {
              setCopied(true);
              window.setTimeout(() => setCopied(false), 1600);
              void navigator.clipboard?.writeText(post.caption).catch(() => undefined);
            }}
            className="text-[13px]"
            style={{ color: link }}
          >
            {copied ? 'Copiado' : 'Legenda'}
          </button>
        </div>
      </div>
      <p className="mt-2 text-[13px] text-apple-gray leading-relaxed whitespace-pre-line">{post.caption}</p>
    </div>
  );
}

function HighlightCover({ item }: { item: Highlight }): React.ReactElement {
  const ref = useRef<HTMLDivElement>(null);
  const dark = item.surface === 'black' || item.surface === 'blue' || item.surface === 'neo';
  const color = dark ? '#f5f5f7' : '#1d1d1f';
  const link = item.account === 'academy' ? item.neo?.neo ?? LARANJA.neo : '#0066cc';

  return (
    <div className="flex flex-col items-center">
      <div
        ref={ref}
        className="w-[168px] h-[168px] rounded-full flex items-center justify-center"
        style={{ background: surfaceFill(item.surface, item.neo) }}
      >
        <p className="text-[15px] font-semibold tracking-tight text-center px-6 leading-tight" style={{ color }}>
          {item.title}
        </p>
      </div>
      <p className="mt-4 text-[13px] text-apple-ink font-semibold tracking-tight">{item.title}</p>
      <button
        type="button"
        onClick={() => downloadNode(ref.current, `destaque-${slug(item.title)}.png`)}
        className="mt-2 text-[13px]"
        style={{ color: link }}
      >
        Baixar
      </button>
    </div>
  );
}

function Lockup({
  inverted = false,
  academy = false,
  neo,
  label,
}: {
  inverted?: boolean;
  academy?: boolean;
  neo?: string;
  label: string;
}): React.ReactElement {
  const ref = useRef<HTMLDivElement>(null);
  const color = inverted ? '#f5f5f7' : '#1d1d1f';

  return (
    <div>
      <div
        ref={ref}
        className="rounded-[22px] px-8 py-14 flex items-center justify-center"
        style={{ background: inverted ? '#000' : '#fff' }}
      >
        <p className="text-[28px] md:text-[34px] font-semibold tracking-tight" style={{ color }}>
          OdontoHub
          {academy && (
            <span className="ml-2 font-normal" style={{ color: inverted ? 'rgba(255,255,255,0.55)' : neo ?? LARANJA.neo }}>
              Academy
            </span>
          )}
        </p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-[13px] text-apple-gray">{label}</p>
        <button
          type="button"
          onClick={() => downloadNode(ref.current, `${slug(label)}.png`)}
          className="text-[13px] text-[#0066cc]"
        >
          Baixar
        </button>
      </div>
    </div>
  );
}

function AvatarTile({ src, label, file }: { src: string; label: string; file: string }): React.ReactElement {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div ref={ref} className="rounded-[22px] overflow-hidden aspect-square bg-black">
        <img src={src} alt={label} className="h-full w-full object-cover" />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-[13px] text-apple-gray">{label}</p>
        <button type="button" onClick={() => downloadNode(ref.current, file)} className="text-[13px] text-[#0066cc]">
          Baixar
        </button>
      </div>
    </div>
  );
}

function MarkTile({ inverted = false }: { inverted?: boolean }): React.ReactElement {
  const ref = useRef<HTMLDivElement>(null);
  const color = inverted ? '#f5f5f7' : '#1d1d1f';

  return (
    <div>
      <div
        ref={ref}
        className="rounded-[22px] aspect-square flex items-center justify-center"
        style={{ background: inverted ? '#000' : '#fff' }}
      >
        <svg width="88" height="88" viewBox="0 0 64 64" fill="none" aria-hidden>
          <path d="M50.5 32a18.5 18.5 0 1 1-13.08-17.68" stroke={color} strokeWidth="3.2" strokeLinecap="round" />
        </svg>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-[13px] text-apple-gray">{inverted ? 'Marca · Preto' : 'Marca · Branco'}</p>
        <button
          type="button"
          onClick={() => downloadNode(ref.current, inverted ? 'marca-preto.png' : 'marca-branco.png')}
          className="text-[13px] text-[#0066cc]"
        >
          Baixar
        </button>
      </div>
    </div>
  );
}

export default function Campaign(): React.ReactElement {
  const [account, setAccount] = useState<'app' | 'academy'>('app');
  const [format, setFormat] = useState<'feed' | 'stories' | 'carrossel' | 'destaques' | 'modelos'>('feed');
  const academyOn = account === 'academy';
  const feed = academyOn ? ACADEMY_LAUNCH : APP_LAUNCH;
  const stories = academyOn ? ACADEMY_LAUNCH_STORIES : APP_LAUNCH_STORIES;
  const squares = academyOn ? ACADEMY_LAUNCH_SQUARES : APP_LAUNCH_SQUARES;
  const highlights = academyOn ? ACADEMY_LAUNCH_HIGHLIGHTS : APP_LAUNCH_HIGHLIGHTS;
  const modelos = academyOn ? MODELOS_ACADEMY : MODELOS_HUB;

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>A clínica contínua. — OdontoHub</title>
        <meta name="robots" content="noindex" />
        <meta name="description" content="Bem-vindo à era da clínica contínua. Academy. Hub. Presença. Um arquivo." />
      </Helmet>

      <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden">
        <img src="/brand/eco-family.png" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25" />
        <div className="relative max-w-[980px] mx-auto px-5 pt-32 pb-16 md:pb-24 w-full">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.05, ease: [0.25, 0.1, 0.25, 1] }}>
            <p className="text-[19px] md:text-[21px] font-semibold tracking-tight text-[#f5f5f7] mb-3">OdontoHub</p>
            <h1 className="apple-display text-[40px] sm:text-[56px] md:text-[80px] mb-6 max-w-[16ch]">{SLOGAN}</h1>
            <p className="apple-subhead text-[19px] md:text-[28px] max-w-[540px] mb-9">
              Academy. Hub. Presença.
              <br className="hidden md:block" /> Um arquivo. Do box à cadeira.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
              <button type="button" onClick={() => scrollTo('filme')} className="apple-btn">
                Assista o filme
              </button>
              <a href="#kit" className="apple-link !text-[#2997ff]">
                O kit <span aria-hidden>›</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-black px-5 py-24 md:py-32">
        <div className="max-w-[980px] mx-auto">
          <Reveal className="mb-14 md:mb-20">
            <p className="text-[13px] text-white/35 mb-4">O ecossistema</p>
            <h2 className="apple-display text-[40px] md:text-[56px]">Três superfícies. Uma clínica.</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-12 md:gap-10">
            {FRONTS.map((front) => (
              <React.Fragment key={front.id}>
                <Reveal>
                  <p className="text-[13px] text-[#2997ff] mb-3">{front.kicker}</p>
                  <h3 className="text-[26px] md:text-[30px] font-semibold tracking-tight leading-[1.12]">{front.title}</h3>
                  <p className="mt-4 text-[16px] text-white/55 leading-relaxed">{front.body}</p>
                </Reveal>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-apple-ink px-5 py-24 md:py-32">
        <div className="max-w-[820px] mx-auto">
          <Reveal className="mb-14">
            <h2 className="apple-display-ink text-[40px] md:text-[56px]">O dicionário.</h2>
            <p className="apple-subhead text-[19px] mt-4">Três nomes. O resto, a gente não usa.</p>
          </Reveal>
          <div className="divide-y divide-apple-line border-y border-apple-line">
            {TERMS.map((term) => (
              <React.Fragment key={term.name}>
                <Reveal>
                  <div className="py-12 md:py-14">
                    <p className="text-[13px] text-apple-gray mb-2">Antes: {term.was}</p>
                    <h3 className="text-[36px] md:text-[48px] font-semibold tracking-tight">{term.name}</h3>
                    <p className="mt-3 text-[22px] md:text-[26px] font-semibold tracking-tight leading-[1.15]">{term.line}</p>
                    <p className="mt-5 text-[17px] text-apple-gray leading-relaxed max-w-[560px]">{term.body}</p>
                  </div>
                </Reveal>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-apple-surface text-apple-ink px-5 py-24 md:py-32">
        <div className="max-w-[980px] mx-auto">
          <Reveal className="mb-12">
            <h2 className="apple-display-ink text-[40px] md:text-[56px]">A Virada.</h2>
            <p className="apple-subhead text-[19px] mt-4 max-w-[520px]">
              A história não é o estudante num app e o dentista noutro. É o mesmo arquivo. A chave vira.
            </p>
          </Reveal>
          <Reveal>
            <img src="/brand/virada-human.png" alt="A Virada." className="w-full max-w-[420px] mx-auto rounded-[8px]" />
          </Reveal>
          <div className="mt-16 md:mt-20 grid md:grid-cols-2 gap-12 md:gap-16">
            {VIRADA_STORY.map((beat) => (
              <React.Fragment key={beat.n}>
                <Reveal>
                  <p className="text-[12px] tabular-nums text-apple-gray mb-2">{beat.n}</p>
                  <h3 className="text-[24px] md:text-[28px] font-semibold tracking-tight leading-[1.15]">{beat.t}</h3>
                  <p className="mt-3 text-[16px] text-apple-gray leading-relaxed">{beat.d}</p>
                </Reveal>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section id="filme" className="bg-black px-5 py-20 md:py-28 scroll-mt-12">
        <div className="max-w-[980px] mx-auto">
          <Reveal className="text-center mb-12">
            <p className="text-[19px] font-semibold tracking-tight mb-2">O filme</p>
            <h2 className="apple-display text-[40px] md:text-[64px]">30 segundos.</h2>
            <p className="apple-subhead text-[19px] md:text-[24px] mt-5 max-w-[520px] mx-auto">{COMMERCIAL_NOTE}</p>
          </Reveal>
          <Reveal>
            <FilmPlayer />
          </Reveal>
          <ol className="mt-16 divide-y divide-white/10 border-y border-white/10 max-w-[820px] mx-auto">
            {COMMERCIAL.map((shot) => (
              <li key={`${shot.at}-${shot.beat}`} className="py-7 grid md:grid-cols-[88px_1fr] gap-3 md:gap-8">
                <p className="text-[13px] tabular-nums text-white/40 pt-1">{shot.at}</p>
                <div>
                  <p className="text-[22px] font-semibold tracking-tight">{shot.beat}</p>
                  <p className="mt-2 text-[15px] text-white/55 leading-relaxed">{shot.picture}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="kit" className="bg-apple-surface text-apple-ink px-5 py-24 md:py-32 scroll-mt-12">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="mb-14">
            <h2 className="apple-display-ink text-[40px] md:text-[56px]">O kit.</h2>
            <p className="apple-subhead text-[19px] mt-4 max-w-[520px]">
              A marca é o nome. O símbolo é um círculo que não fecha — a clínica contínua. Baixe. Não distorça.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Lockup label="OdontoHub · Branco" />
            <Lockup inverted label="OdontoHub · Preto" />
            <Lockup academy neo={LARANJA.neo} label="Academy · Branco" />
            <Lockup academy inverted neo={LARANJA.neo} label="Academy · Preto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            <MarkTile />
            <MarkTile inverted />
            <AvatarTile src="/brand/avatar-hub.png" label="Avatar · Hub" file="avatar-odontohub.png" />
            <AvatarTile src="/brand/avatar-academy.png" label="Avatar · Academy" file="avatar-academy.png" />
          </div>
          <div className="mt-16">
            <p className="text-[13px] text-apple-gray mb-6">Hub</p>
            <div className="flex flex-wrap gap-4">
              {COLORS_HUB.map((c) => (
                <div key={c.hex} className="text-center">
                  <div className="w-16 h-16 rounded-full border border-black/5" style={{ background: c.hex }} />
                  <p className="mt-2 text-[12px] text-apple-gray">{c.name}</p>
                </div>
              ))}
            </div>
            <p className="text-[13px] text-apple-gray mb-6 mt-12">Academy Neo</p>
            <div className="flex flex-wrap gap-4">
              {NEOS.map((neo) => (
                <div key={neo.id} className="text-center">
                  <div className="w-16 h-16 rounded-full" style={{ background: neo.neo }} />
                  <p className="mt-2 text-[12px] text-apple-gray">{neo.name}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-10 text-[13px] text-apple-gray flex flex-wrap gap-x-4 gap-y-2">
            {KIT_FILES.map((file) => (
              <a key={file.href} href={file.href} className="text-[#0066cc]" download>
                {file.label}
              </a>
            ))}
          </p>
        </div>
      </section>

      <section
        id="feeds"
        className="px-5 py-24 md:py-32"
        style={{ background: academyOn ? LARANJA.wash : '#f5f5f7', color: '#1d1d1f' }}
      >
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="mb-10 md:mb-14">
            <h2 className="apple-display-ink text-[40px] md:text-[56px]">Os primeiros posts.</h2>
            <p className="apple-subhead text-[19px] mt-4 max-w-[560px]">
              As duas contas nascem agora. Fundo limpo. Tipo forte. Texto na arte, o mínimo.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {(
                [
                  { id: 'app', label: '@odontohub.app' },
                  { id: 'academy', label: '@odontohub.academy' },
                ] as const
              ).map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setAccount(item.id)}
                  className="rounded-full px-4 py-2 text-[13px] transition-colors"
                  style={
                    account === item.id
                      ? academyOn && item.id === 'academy'
                        ? { background: LARANJA.neo, color: '#fff' }
                        : { background: '#1d1d1f', color: '#fff' }
                      : { background: '#fff', color: '#1d1d1f' }
                  }
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="mt-10 max-w-[560px]">
              <p className="text-[19px] font-semibold tracking-tight">
                {academyOn ? '@odontohub.academy' : '@odontohub.app'}
              </p>
              <p className="mt-3 text-[22px] md:text-[26px] font-semibold tracking-tight leading-[1.15] whitespace-pre-line">
                {academyOn ? ACADEMY_BIO : APP_BIO}
              </p>
              <ol className="mt-8 space-y-3">
                {(academyOn ? ACADEMY_LAUNCH_PLAN : APP_LAUNCH_PLAN).map((beat) => (
                  <li key={beat.when} className="flex gap-4 text-[15px] leading-snug">
                    <span className="w-16 shrink-0 text-apple-gray">{beat.when}</span>
                    <span>{beat.what}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {(
                [
                  { id: 'feed', label: 'Feed' },
                  { id: 'stories', label: 'Stories' },
                  { id: 'carrossel', label: 'Carrossel' },
                  { id: 'destaques', label: 'Destaques' },
                  { id: 'modelos', label: 'Modelos' },
                ] as const
              ).map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setFormat(item.id)}
                  className="rounded-full px-4 py-2 text-[13px] transition-colors"
                  style={
                    format === item.id
                      ? academyOn
                        ? { background: LARANJA.neo, color: '#fff' }
                        : { background: '#1d1d1f', color: '#fff' }
                      : { background: '#fff', color: '#1d1d1f' }
                  }
                >
                  {item.label}
                </button>
              ))}
            </div>
          </Reveal>

          {format === 'feed' && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-12">
              {feed.map((post) => (
                <React.Fragment key={post.id}>
                  <PostArt post={post} />
                </React.Fragment>
              ))}
            </div>
          )}
          {format === 'stories' && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-12">
              {stories.map((post) => (
                <React.Fragment key={post.id}>
                  <PostArt post={post} />
                </React.Fragment>
              ))}
            </div>
          )}
          {format === 'carrossel' && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-12">
              {squares.map((post) => (
                <React.Fragment key={post.id}>
                  <PostArt post={post} />
                </React.Fragment>
              ))}
            </div>
          )}
          {format === 'destaques' && (
            <div className="flex flex-wrap gap-10">
              {highlights.map((item) => (
                <React.Fragment key={`${item.account}-${item.title}`}>
                  <HighlightCover item={item} />
                </React.Fragment>
              ))}
            </div>
          )}
          {format === 'modelos' && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-12">
              {modelos.map((post) => (
                <React.Fragment key={post.id}>
                  <PostArt post={post} />
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-black px-5 py-28 md:py-40">
        <div className="max-w-[780px] mx-auto text-center">
          <Reveal>
            <h2 className="apple-display text-[36px] md:text-[64px] mb-5">{SLOGAN}</h2>
            <p className="apple-subhead text-[19px] md:text-[24px] mb-10">Academy. Hub. Presença.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <a href={START_PRO} className="apple-btn">
                Hub
              </a>
              <a href={START_ACADEMY} className="apple-link !text-[#2997ff]">
                Academy <span aria-hidden>›</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
