import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { toPng } from 'html-to-image';
import { LARANJA, NEOS, type FeedPost, type Highlight, type Surface } from '../../data/feeds';

export function downloadNode(node: HTMLElement | null, filename: string) {
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

export function slug(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
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

export type Shot = {
  at: string;
  dur: number;
  src: string | null;
  picture: string;
  beat: string;
};

export function FilmPlayer({
  shots,
  endSub,
}: {
  shots: Shot[];
  endSub?: string;
}) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const shot = shots[index];

  useEffect(() => {
    if (!playing) return;
    const id = window.setTimeout(() => {
      if (index < shots.length - 1) {
        setIndex((current) => current + 1);
      } else {
        setPlaying(false);
      }
    }, shot.dur);
    return () => window.clearTimeout(id);
  }, [playing, index, shot.dur, shots.length]);

  const play = () => {
    setStarted(true);
    if (index >= shots.length - 1) setIndex(0);
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
                  {shot.beat}
                </p>
                {endSub && index === shots.length - 1 && (
                  <p className="mt-4 text-[15px] md:text-[19px] text-white/45">{endSub}</p>
                )}
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

      <div className="mt-6 grid gap-1.5" style={{ gridTemplateColumns: `repeat(${Math.min(shots.length, 9)}, minmax(0, 1fr))` }}>
        {shots.map((item, i) => (
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

export function surfaceFill(surface: Surface, neo?: FeedPost['neo']): string {
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

export function PostArt({ post }: { post: FeedPost }) {
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

export function HighlightCover({ item }: { item: Highlight }) {
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

export function Lockup({
  inverted = false,
  academy = false,
  neo,
  label,
}: {
  inverted?: boolean;
  academy?: boolean;
  neo?: string;
  label: string;
}) {
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

export function AvatarTile({ src, label, file }: { src: string; label: string; file: string }) {
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

export function MarkTile({ inverted = false }: { inverted?: boolean }) {
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

export type LaunchPlanBeat = { when: string; what: string };

export function FeedStudio({
  handle,
  bio,
  plan,
  feed,
  stories,
  squares,
  highlights,
  modelos,
  academyOn,
  accent,
}: {
  handle: string;
  bio: string;
  plan: readonly LaunchPlanBeat[];
  feed: FeedPost[];
  stories: FeedPost[];
  squares: FeedPost[];
  highlights: Highlight[];
  modelos: FeedPost[];
  academyOn: boolean;
  accent: string;
}) {
  const [format, setFormat] = useState<'feed' | 'stories' | 'carrossel' | 'destaques' | 'modelos'>('feed');

  return (
    <section
      id="feeds"
      className="px-5 py-24 md:py-32"
      style={{ background: academyOn ? LARANJA.wash : '#f5f5f7', color: '#1d1d1f' }}
    >
      <div className="max-w-[1100px] mx-auto">
        <Reveal className="mb-10 md:mb-14">
          <h2 className="apple-display-ink text-[40px] md:text-[56px]">Os primeiros posts.</h2>
          <p className="apple-subhead text-[19px] mt-4 max-w-[560px]">
            Fundo limpo. Tipo forte. Texto na arte, o mínimo.
          </p>
          <div className="mt-10 max-w-[560px]">
            <p className="text-[19px] font-semibold tracking-tight">{handle}</p>
            <p className="mt-3 text-[22px] md:text-[26px] font-semibold tracking-tight leading-[1.15] whitespace-pre-line">
              {bio}
            </p>
            <ol className="mt-8 space-y-3">
              {plan.map((beat) => (
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
                  format === item.id ? { background: accent, color: '#fff' } : { background: '#fff', color: '#1d1d1f' }
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
  );
}
