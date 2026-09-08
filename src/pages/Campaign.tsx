import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { toPng } from 'html-to-image';
import {
  ALWAYS,
  CHAPTERS,
  CLOSER,
  FILM,
  LINE,
  LINES,
  MANIFESTO,
  NEVER,
  PORTRAITS,
  SOUND,
  START_ACADEMY,
  START_PRO,
  type Shot,
} from '../data/campaign';
import {
  ACADEMY_FEED,
  ACADEMY_HIGHLIGHTS,
  ACADEMY_PROFILE,
  ACADEMY_SQUARES,
  ACADEMY_STORIES,
  APP_FEED,
  APP_HIGHLIGHTS,
  APP_PROFILE,
  APP_SQUARES,
  APP_STORIES,
  LARANJA,
  NEOS,
  type FeedPost,
  type Highlight,
  type Surface,
} from '../data/feeds';

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
  const shot = FILM[index];

  useEffect(() => {
    if (!playing) return;
    const id = window.setTimeout(() => {
      if (index < FILM.length - 1) {
        setIndex((current) => current + 1);
      } else {
        setPlaying(false);
      }
    }, shot.dur);
    return () => window.clearTimeout(id);
  }, [playing, index, shot.dur]);

  const play = () => {
    setStarted(true);
    if (index >= FILM.length - 1) setIndex(0);
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
            key={shot.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0"
          >
            {shot.src ? (
              <img src={shot.src} alt={shot.title} className="h-full w-full object-cover" />
            ) : (
              <div className="h-full w-full bg-black flex flex-col items-center justify-center px-8 text-center">
                <p className="text-[32px] md:text-[56px] font-semibold tracking-tight text-[#f5f5f7]">{LINE}</p>
                <p className="mt-4 text-[15px] md:text-[19px] text-white/45">{CLOSER}</p>
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
            {shot.at}
          </p>
        )}
      </div>

      <div className="mt-6 grid grid-cols-4 md:grid-cols-8 gap-1.5">
        {FILM.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => jump(i)}
            className="relative aspect-video overflow-hidden bg-black"
            aria-label={`${item.at} ${item.title}`}
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

function ShotList({ shots }: { shots: Shot[] }): React.ReactElement {
  return (
    <ol className="divide-y divide-white/10 border-y border-white/10">
      {shots.map((shot) => (
        <li key={shot.id} className="py-8 md:py-10 grid md:grid-cols-[88px_1fr] gap-3 md:gap-10">
          <p className="text-[13px] tabular-nums text-white/40 pt-1">{shot.at}</p>
          <div>
            <p className="text-[22px] md:text-[28px] font-semibold tracking-tight text-[#f5f5f7]">{shot.title}</p>
            <p className="mt-3 text-[15px] md:text-[17px] text-white/55 leading-relaxed max-w-[560px]">{shot.picture}</p>
            <p className="mt-3 text-[13px] text-white/35 leading-relaxed max-w-[520px]">{shot.sound}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function Campaign(): React.ReactElement {
  const [account, setAccount] = useState<'app' | 'academy'>('app');
  const [format, setFormat] = useState<'feed' | 'stories' | 'carrossel' | 'destaques'>('feed');
  const academyOn = account === 'academy';
  const profile = academyOn ? ACADEMY_PROFILE : APP_PROFILE;
  const feed = academyOn ? ACADEMY_FEED : APP_FEED;
  const stories = academyOn ? ACADEMY_STORIES : APP_STORIES;
  const squares = academyOn ? ACADEMY_SQUARES : APP_SQUARES;
  const highlights = academyOn ? ACADEMY_HIGHLIGHTS : APP_HIGHLIGHTS;

  const scrollToFilm = useCallback(() => {
    document.getElementById('filme')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Você atende. — OdontoHub</title>
        <meta name="robots" content="noindex" />
        <meta
          name="description"
          content="Você atende. O filme, as linhas e os cortes da campanha OdontoHub."
        />
      </Helmet>

      <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden">
        <img
          src="/campaign/campaign-hero-chair.png"
          alt="Uma cadeira odontológica vazia, de manhã."
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/20" />
        <div className="relative max-w-[980px] mx-auto px-5 pt-32 pb-16 md:pb-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-[19px] md:text-[21px] font-semibold tracking-tight text-[#f5f5f7] mb-3">OdontoHub</p>
            <h1 className="apple-display text-[52px] sm:text-[72px] md:text-[96px] mb-6">{LINE}</h1>
            <p className="apple-subhead text-[19px] md:text-[28px] max-w-[540px] mb-9">
              O filme. 60 segundos.
              <br className="hidden md:block" /> Três cortes. Uma linha.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
              <button type="button" onClick={scrollToFilm} className="apple-btn">
                Assista o filme
              </button>
              <a href="#feeds" className="apple-link !text-[#2997ff]">
                Os feeds <span aria-hidden>›</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="filme" className="bg-black px-5 py-20 md:py-28 scroll-mt-12">
        <div className="max-w-[980px] mx-auto">
          <Reveal className="text-center mb-12 md:mb-16">
            <p className="text-[19px] font-semibold tracking-tight mb-2">O filme</p>
            <h2 className="apple-display text-[40px] md:text-[64px]">60 segundos.</h2>
            <p className="apple-subhead text-[19px] md:text-[24px] mt-5 max-w-[480px] mx-auto">
              Sem locução. Sem música. O nome, no último quadro.
            </p>
          </Reveal>
          <Reveal>
            <FilmPlayer />
          </Reveal>
        </div>
      </section>

      <section className="bg-black px-5 pb-24 md:pb-32">
        <div className="max-w-[820px] mx-auto">
          <Reveal className="mb-12">
            <h2 className="apple-display text-[32px] md:text-[48px]">O quadro.</h2>
          </Reveal>
          <ShotList shots={FILM} />
        </div>
      </section>

      <section className="bg-black px-5 py-24 md:py-36">
        <div className="max-w-[720px] mx-auto">
          <Reveal>
            <p className="text-[13px] text-white/35 mb-10">A campanha</p>
            <div className="space-y-10 md:space-y-14">
              {MANIFESTO.map((line) => (
                <p key={line} className="text-[28px] md:text-[40px] font-semibold tracking-tight leading-[1.12] text-[#f5f5f7]">
                  {line}
                </p>
              ))}
            </div>
            <p className="mt-16 text-[28px] md:text-[40px] font-semibold tracking-tight text-[#f5f5f7]">{LINE}</p>
            <p className="mt-3 text-[19px] md:text-[24px] text-white/45">{CLOSER}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-apple-surface text-apple-ink">
        {CHAPTERS.map((chapter, i) => (
          <article key={chapter.id} className={i % 2 === 1 ? 'bg-white' : 'bg-apple-surface'}>
            <div className="max-w-[980px] mx-auto px-5 py-20 md:py-28">
              <Reveal className="mb-10 md:mb-14">
                <p className="text-[19px] font-semibold tracking-tight mb-2">{chapter.kicker}</p>
                <h2 className="apple-display-ink text-[40px] md:text-[64px]">{chapter.title}</h2>
                <p className="apple-subhead text-[19px] md:text-[24px] mt-4">{chapter.runtime}.</p>
              </Reveal>
              <Reveal>
                <img
                  src={chapter.still}
                  alt={chapter.title}
                  className="w-full aspect-video object-cover rounded-[4px] md:rounded-[8px]"
                />
              </Reveal>
              <Reveal className="mt-12 md:mt-16 grid md:grid-cols-2 gap-12 md:gap-16 items-start">
                <ol className="space-y-5">
                  {chapter.picture.map((beat, n) => (
                    <li key={beat}>
                      <p className="text-[12px] tabular-nums text-apple-gray mb-1">0{n + 1}</p>
                      <p className="text-[22px] md:text-[26px] font-semibold tracking-tight leading-[1.15]">{beat}</p>
                    </li>
                  ))}
                </ol>
                <div>
                  <p className="text-[32px] md:text-[40px] font-semibold tracking-tight leading-[1.08]">{chapter.line}</p>
                  <p className="mt-3 text-[19px] md:text-[21px] text-apple-gray">{chapter.sub}</p>
                  <a href={chapter.href} className="apple-btn mt-8">
                    {chapter.hrefLabel}
                  </a>
                </div>
              </Reveal>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-black px-5 py-24 md:py-32">
        <div className="max-w-[980px] mx-auto">
          <Reveal className="text-center mb-14">
            <h2 className="apple-display text-[40px] md:text-[56px]">As pessoas.</h2>
            <p className="apple-subhead text-[19px] mt-4 max-w-[440px] mx-auto">
              Como Think Different. O trabalho no rosto. Sem sorriso de campanha.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {PORTRAITS.map((person) => (
              <React.Fragment key={person.id}>
                <Reveal>
                  <img src={person.src} alt={person.name} className="w-full aspect-[3/4] object-cover" />
                  <blockquote className="mt-8">
                    <p className="text-[24px] md:text-[32px] font-semibold tracking-tight leading-[1.15] text-[#f5f5f7]">
                      “{person.quote}”
                    </p>
                    <footer className="mt-5 text-[14px] text-white/45">
                      {person.name}
                      <span className="mx-2 text-white/25">/</span>
                      {person.role}
                    </footer>
                  </blockquote>
                </Reveal>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section id="linha" className="bg-white text-apple-ink px-5 py-24 md:py-32 scroll-mt-12">
        <div className="max-w-[820px] mx-auto">
          <Reveal className="mb-14">
            <h2 className="apple-display-ink text-[40px] md:text-[56px]">A linha.</h2>
            <p className="apple-subhead text-[19px] md:text-[21px] mt-4">
              Onde ela vive. Outdoor, filme, story. Nunca uma frase a mais.
            </p>
          </Reveal>
          <div className="divide-y divide-apple-line border-y border-apple-line">
            {LINES.map((item) => (
              <React.Fragment key={item.where}>
                <Reveal>
                  <div className="py-10 md:py-12 grid md:grid-cols-[220px_1fr] gap-3 md:gap-10">
                    <p className="text-[13px] text-apple-gray pt-1">{item.where}</p>
                    <p className="text-[26px] md:text-[34px] font-semibold tracking-tight leading-[1.12] whitespace-pre-line">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section
        id="feeds"
        className="px-5 py-24 md:py-32"
        style={{ background: academyOn ? LARANJA.wash : '#f5f5f7', color: '#1d1d1f' }}
      >
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="mb-10 md:mb-14">
            <h2 className="apple-display-ink text-[40px] md:text-[56px]">Os dois feeds.</h2>
            <p className="apple-subhead text-[19px] mt-4 max-w-[560px]">
              Como a Apple abre uma conta. Do post 01. Uma ideia por quadro. O leitor entende no primeiro olhar.
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
            <div className="mt-10 max-w-[520px]">
              <p className="text-[19px] font-semibold tracking-tight">{profile.handle}</p>
              <p className="mt-3 text-[22px] md:text-[28px] font-semibold tracking-tight leading-[1.15] whitespace-pre-line">
                {profile.bio}
              </p>
              <p className="mt-4 text-[13px] text-apple-gray">{profile.note}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {(
                [
                  { id: 'feed', label: 'Feed' },
                  { id: 'stories', label: 'Stories' },
                  { id: 'carrossel', label: 'Carrossel' },
                  { id: 'destaques', label: 'Destaques' },
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
        </div>
      </section>

      <section className="bg-black px-5 py-24 md:py-32">
        <div className="max-w-[820px] mx-auto">
          <Reveal className="mb-14">
            <h2 className="apple-display text-[40px] md:text-[56px]">O som.</h2>
            <p className="apple-subhead text-[19px] mt-4 max-w-[520px]">
              A Apple trata o som como metade do filme. Aqui também. Se der para tirar, tira.
            </p>
          </Reveal>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {SOUND.map((item) => (
              <div key={item.t} className="py-7 grid grid-cols-[72px_1fr] gap-6">
                <p className="text-[13px] tabular-nums text-white/40">{item.t}</p>
                <p className="text-[17px] md:text-[19px] text-[#f5f5f7] leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-apple-surface text-apple-ink px-5 py-24 md:py-32">
        <div className="max-w-[980px] mx-auto grid md:grid-cols-2 gap-16 md:gap-20">
          <Reveal>
            <h2 className="apple-display-ink text-[32px] md:text-[40px] mb-8">Nunca.</h2>
            <ul className="space-y-5">
              {NEVER.map((item) => (
                <li key={item} className="text-[17px] md:text-[19px] text-apple-gray leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <h2 className="apple-display-ink text-[32px] md:text-[40px] mb-8">Sempre.</h2>
            <ul className="space-y-5">
              {ALWAYS.map((item) => (
                <li key={item} className="text-[17px] md:text-[19px] text-apple-gray leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-black px-5 py-28 md:py-40">
        <div className="max-w-[780px] mx-auto text-center">
          <Reveal>
            <h2 className="apple-display text-[40px] md:text-[72px] mb-5">{LINE}</h2>
            <p className="apple-subhead text-[19px] md:text-[24px] mb-10">{CLOSER}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <a href={START_PRO} className="apple-btn">
                Começar
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
