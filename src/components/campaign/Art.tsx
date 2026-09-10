import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { toBlob } from 'html-to-image';
import { LARANJA, NEOS, type FeedPost, type Highlight, type Surface } from '../../data/feeds';

export async function downloadNode(node: HTMLElement | null, filename: string): Promise<void> {
  if (!node) throw new Error('Arte não encontrada.');

  const blob = await toBlob(node, {
    cacheBust: true,
    pixelRatio: 2,
    backgroundColor: surfaceFill('white'),
  });
  if (!blob) throw new Error('Não foi possível gerar a imagem.');

  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.download = filename;
  link.href = url;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 10_000);
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
  bg?: string;
  sub?: string;
};

export function NinaFace({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden>
      <circle cx="20" cy="20" r="20" fill="#34C759" />
      <circle cx="13.5" cy="17" r="2.15" fill="#111" />
      <circle cx="26.5" cy="17" r="2.15" fill="#111" />
      <path d="M11 13.2l6.2 1.4" stroke="#111" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M14.5 25.5c2.6 2.8 8.4 2.8 11 0" stroke="#111" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </svg>
  );
}

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
              <div
                className="h-full w-full flex flex-col items-center justify-center px-8 text-center"
                style={{ background: shot.bg ?? '#000' }}
              >
                <p className="text-[28px] md:text-[48px] font-semibold tracking-tight text-[#f5f5f7] leading-[1.08] whitespace-pre-line">
                  {shot.beat}
                </p>
                {shot.sub && (
                  <p className="mt-4 text-[15px] md:text-[19px] text-white/70 max-w-[28ch] leading-snug">{shot.sub}</p>
                )}
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
              <span className="absolute inset-0" style={{ background: item.bg ?? '#000' }} />
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
    case 'lock':
      return '#0b0c10';
    case 'gradient':
      return neo?.neo ?? LARANJA.neo;
    default:
      return '#000';
  }
}

function isDarkSurface(post: FeedPost): boolean {
  if (post.kind === 'notify' || post.kind === 'comment' || post.kind === 'poster') return true;
  if (post.surface === 'photo') return post.photoTone === 'dark';
  return (
    post.surface === 'black' ||
    post.surface === 'blue' ||
    post.surface === 'neo' ||
    post.surface === 'lock' ||
    post.surface === 'gradient'
  );
}

export function NotifyLock({
  post,
  clock,
}: {
  post: FeedPost;
  clock?: boolean;
}) {
  const from = post.notifyFrom ?? 'nina';
  const time = post.notifyTime ?? 'agora';
  const body = post.notifyBody ?? post.headline;
  const lock = clock || post.format === 'story';

  return (
    <div
      className="absolute inset-0 flex flex-col"
      style={{
        background:
          'radial-gradient(90% 55% at 50% 12%, rgba(52,199,89,0.28) 0%, rgba(255,107,44,0.12) 36%, rgba(11,12,16,0) 62%), #0b0c10',
      }}
    >
      {lock ? (
        <>
          <div className="pt-14 px-8 text-center text-white">
            <p className="text-[64px] md:text-[72px] font-semibold tracking-tight leading-none">
              {post.kicker || '22:44'}
            </p>
            <p className="mt-2 text-[15px] text-white/55">quarta-feira, 9 de setembro</p>
          </div>
          <div className="mt-10 mx-5 rounded-[28px] px-4 py-3.5 flex gap-3 items-start" style={{ background: 'rgba(44,44,46,0.78)', backdropFilter: 'blur(22px)' }}>
            <div className="shrink-0 mt-0.5 overflow-hidden rounded-[12px]">
              <NinaFace size={42} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-[15px] font-semibold text-white tracking-tight">{from}</p>
                <p className="text-[12px] text-white/40">{time}</p>
              </div>
              <p className="mt-1 text-[14px] text-white/90 leading-snug whitespace-pre-line">{body}</p>
            </div>
          </div>
        </>
      ) : (
        <div className="flex-1 flex flex-col p-6 md:p-7">
          <div className="rounded-[32px] flex-1 flex flex-col overflow-hidden" style={{ background: 'rgba(22,22,24,0.92)' }}>
            <div className="px-5 pt-4 pb-2 flex items-center gap-3">
              <div className="overflow-hidden rounded-[11px] shrink-0">
                <NinaFace size={36} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[14px] font-semibold text-white tracking-tight">{from}</p>
                <p className="text-[11px] text-white/40">para você · {time}</p>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center py-6">
              <NinaFace size={post.format === 'square' ? 108 : 132} />
            </div>
            <p className="px-6 pb-8 text-[20px] md:text-[22px] font-semibold tracking-tight text-white leading-[1.2] text-center whitespace-pre-line">
              {body}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function CommentArt({ post }: { post: FeedPost }) {
  const thread = post.thread ?? [];

  return (
    <div className="absolute inset-0 flex flex-col bg-[#0b0c10] text-white px-6 py-8">
      <p className="text-[11px] uppercase tracking-[0.14em] text-white/35 mb-4">{post.kicker ?? 'a conversa'}</p>
      {post.quote && (
        <p className="text-[18px] md:text-[20px] font-semibold tracking-tight leading-[1.2] text-white/88 mb-8">
          {post.quote}
        </p>
      )}
      <div className="mt-auto space-y-5">
        {thread.map((row) => (
          <div key={`${row.user}-${row.text}`} className="flex gap-3 items-start">
            <div className="shrink-0 overflow-hidden rounded-full">
              {row.author ? <NinaFace size={28} /> : <span className="block w-7 h-7 rounded-full bg-white/15" />}
            </div>
            <div className="min-w-0">
              <p className="text-[13px] leading-snug">
                <span className="font-semibold" style={{ color: row.author ? '#34C759' : '#fff' }}>
                  {row.user}
                </span>{' '}
                <span className="text-white/80">{row.text}</span>
              </p>
              {row.likes && <p className="mt-1 text-[11px] text-white/35">{row.likes} curtidas</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PosterArt({ post }: { post: FeedPost }) {
  const neo = post.neo ?? LARANJA;

  return (
    <div
      className="absolute inset-0 flex flex-col px-8 py-10"
      style={{
        background: `linear-gradient(180deg, #24143c 0%, ${neo.neo} 52%, #ffb020 100%)`,
      }}
    >
      <div className="flex justify-center pt-4">
        <div className="overflow-hidden rounded-full" style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.25)' }}>
          <NinaFace size={108} />
        </div>
      </div>
      <div className="mt-auto text-center">
        <h3 className="text-[42px] md:text-[52px] font-bold tracking-tight leading-[0.92] lowercase text-white whitespace-pre-line">
          {post.headline}
        </h3>
        {post.sub && (
          <p className="mt-5 text-[15px] md:text-[16px] text-white/90 leading-snug max-w-[28ch] mx-auto">{post.sub}</p>
        )}
      </div>
    </div>
  );
}

function VarietyArt({ post }: { post: FeedPost }) {
  const items = post.items ?? [];
  const thread = post.thread ?? [];

  if (post.kind === 'breaking') {
    return (
      <div className="absolute inset-0 bg-[#f4efe5] text-[#111] flex flex-col">
        <div className="bg-[#ec3323] text-white px-6 py-3 text-[13px] font-black tracking-[0.16em]">
          URGENTE
        </div>
        <div className="px-7 pt-8 flex-1 flex flex-col">
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-black/45">
            plantão da clínica-escola
          </p>
          <h3 className="mt-4 text-[34px] md:text-[42px] font-black tracking-[-0.045em] leading-[0.95] whitespace-pre-line">
            {post.headline}
          </h3>
          <p className="mt-5 text-[15px] leading-snug text-black/60">{post.sub}</p>
          <div className="mt-auto mb-8 border-t-2 border-black pt-3 flex justify-between text-[11px] font-bold">
            <span>NINA NEWS</span>
            <span>fontes: o grupo da sala</span>
          </div>
        </div>
      </div>
    );
  }

  if (post.kind === 'chat') {
    return (
      <div className="absolute inset-0 bg-[#e8e2d9] text-[#111] flex flex-col">
        <div className="bg-[#075e54] text-white px-5 py-4 flex items-center gap-3">
          <NinaFace size={34} />
          <div>
            <p className="text-[14px] font-semibold">{post.label ?? 'Paciente — Clínica'}</p>
            <p className="text-[10px] text-white/60">online</p>
          </div>
        </div>
        <div className="flex-1 px-5 py-7 space-y-3 bg-[radial-gradient(rgba(0,0,0,.04)_1px,transparent_1px)] [background-size:10px_10px]">
          {thread.map((row, index) => (
            <div
              key={`${row.user}-${index}`}
              className={`max-w-[84%] rounded-[12px] px-3.5 py-2.5 text-[13px] leading-snug shadow-sm ${
                row.author ? 'ml-auto bg-[#d9fdd3]' : 'bg-white'
              }`}
            >
              <p>{row.text}</p>
              <p className="mt-1 text-right text-[9px] text-black/35">{row.likes ?? '07:03'}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (post.kind === 'receipt') {
    return (
      <div className="absolute inset-0 bg-[#d7ff52] text-[#111] p-7 flex items-center justify-center">
        <div className="w-full bg-[#fffdf5] px-6 py-8 shadow-[0_18px_45px_rgba(0,0,0,.18)] rotate-[-1deg] font-mono">
          <p className="text-center text-[12px]">ACADEMY WRAPPED</p>
          <p className="text-center text-[10px] mt-1 text-black/45">seu semestre até aqui</p>
          <div className="my-6 border-y border-dashed border-black/30 py-5 space-y-4">
            {items.map((item, index) => (
              <div key={item} className="flex gap-3 text-[13px] leading-tight">
                <span className="font-bold">{String(index + 1).padStart(2, '0')}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-[11px] font-bold whitespace-pre-line">{post.headline}</p>
        </div>
      </div>
    );
  }

  if (post.kind === 'starter') {
    return (
      <div className="absolute inset-0 bg-[#ffd7e2] text-[#28121a] p-7 flex flex-col">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-[31px] md:text-[38px] font-black tracking-[-0.05em] leading-[0.92] whitespace-pre-line">
            {post.headline}
          </h3>
          <span className="rounded-full bg-white px-3 py-1 text-[10px] font-bold">starter pack</span>
        </div>
        <div className="mt-7 grid grid-cols-2 gap-3 flex-1">
          {items.map((item, index) => (
            <div
              key={item}
              className="rounded-[18px] bg-white/75 px-3 py-4 flex flex-col items-center justify-center text-center"
            >
              <span className="text-[28px] mb-3">{['🎀', '🚗', '🧥', '💳'][index % 4]}</span>
              <span className="text-[12px] font-semibold leading-tight">{item}</span>
            </div>
          ))}
        </div>
        <p className="mt-5 text-[12px] font-semibold">{post.sub}</p>
      </div>
    );
  }

  if (post.kind === 'pov') {
    return (
      <div className="absolute inset-0 bg-[#ffb62e] text-[#17120a] p-7 flex flex-col">
        <p className="text-[12px] font-black tracking-[.14em]">POV · O SOTAQUE CHEGOU</p>
        <div className="mt-7 grid grid-rows-2 gap-3 flex-1">
          <div className="rounded-[22px] bg-white/88 p-5 flex flex-col justify-center">
            <p className="text-[11px] font-bold text-black/40 mb-3">fora da clínica</p>
            <p className="text-[24px] md:text-[30px] font-bold tracking-tight leading-none">{post.headline}</p>
          </div>
          <div className="rounded-[22px] bg-[#24143c] text-white p-5 flex flex-col justify-center">
            <p className="text-[11px] font-bold text-white/40 mb-3">no box</p>
            <p className="text-[24px] md:text-[30px] font-bold tracking-tight leading-none">{post.quote}</p>
          </div>
        </div>
        <p className="mt-5 text-[12px] font-semibold">{post.sub}</p>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 bg-[#5b2be0] text-white p-7 flex flex-col">
      <div className="flex items-center gap-3">
        <NinaFace size={34} />
        <p className="text-[13px] font-bold">NINA PERGUNTA</p>
      </div>
      <h3 className="mt-10 text-[27px] md:text-[34px] font-bold tracking-tight leading-[1.05] whitespace-pre-line">
        {post.headline}
      </h3>
      <div className="mt-auto space-y-2.5">
        {items.map((item, index) => (
          <div
            key={item}
            className={`rounded-[14px] border-2 px-4 py-3 text-[13px] font-semibold ${
              index === Number(post.value ?? '-1')
                ? 'border-[#d7ff52] bg-[#d7ff52] text-[#1a1a1a]'
                : 'border-white/30 bg-white/8'
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      {post.sub && <p className="mt-5 text-[12px] text-white/65">{post.sub}</p>}
    </div>
  );
}

export function PostArt({ post }: { post: FeedPost }) {
  const ref = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [downloadState, setDownloadState] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');
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
        {kind === 'notify' && <NotifyLock post={post} />}
        {kind === 'comment' && <CommentArt post={post} />}
        {kind === 'poster' && <PosterArt post={post} />}
        {['breaking', 'chat', 'receipt', 'starter', 'quiz', 'pov'].includes(kind) && <VarietyArt post={post} />}
        {!['notify', 'comment', 'poster', 'breaking', 'chat', 'receipt', 'starter', 'quiz', 'pov'].includes(kind) && (
          <>
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
          </>
        )}
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
            onClick={() => {
              if (downloadState === 'loading') return;
              setDownloadState('loading');
              void downloadNode(ref.current, `${post.account}-${post.n}-${slug(post.title)}.png`)
                .then(() => {
                  setDownloadState('done');
                  window.setTimeout(() => setDownloadState('idle'), 1800);
                })
                .catch(() => {
                  setDownloadState('error');
                  window.setTimeout(() => setDownloadState('idle'), 3000);
                });
            }}
            className="text-[13px]"
            style={{ color: link }}
            disabled={downloadState === 'loading'}
          >
            {downloadState === 'loading'
              ? 'Gerando…'
              : downloadState === 'done'
                ? 'Baixado ✓'
                : downloadState === 'error'
                  ? 'Tentar de novo'
                  : 'Baixar'}
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
  const dark =
    item.surface === 'black' ||
    item.surface === 'blue' ||
    item.surface === 'neo' ||
    item.surface === 'lock' ||
    item.surface === 'gradient';
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
  title = 'Os primeiros posts.',
  intro = 'Fundo limpo. Tipo forte. Texto na arte, o mínimo.',
  studioBg,
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
  title?: string;
  intro?: string;
  studioBg?: string;
}) {
  const [format, setFormat] = useState<'feed' | 'stories' | 'carrossel' | 'destaques' | 'modelos'>('feed');

  return (
    <section
      id="feeds"
      className="px-5 py-24 md:py-32"
      style={{ background: studioBg ?? (academyOn ? LARANJA.wash : '#f5f5f7'), color: '#1d1d1f' }}
    >
      <div className="max-w-[1100px] mx-auto">
        <Reveal className="mb-10 md:mb-14">
          <h2 className="apple-display-ink text-[40px] md:text-[56px]">{title}</h2>
          <p className="apple-subhead text-[19px] mt-4 max-w-[560px]">{intro}</p>
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
