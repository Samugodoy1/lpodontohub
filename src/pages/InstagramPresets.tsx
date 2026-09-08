import React, { useCallback, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { toPng } from 'html-to-image';

type Line = 'pro' | 'academy' | 'cola';
type Tab = 'feed' | 'stories' | 'destaques' | 'modelos' | 'cola' | 'pessoas';
type Surface = 'black' | 'white' | 'surface' | 'blue' | 'neo' | 'wash' | 'cola' | 'colaWash';

const COLA = {
  id: 'cola',
  name: 'Odonto em Jogo',
  neo: '#6D4AFF',
  soft: '#EDE7FF',
  wash: '#F6F3FF',
} as const;

type Neo = {
  id: string;
  name: string;
  neo: string;
  soft: string;
  wash: string;
};

const NEOS: Neo[] = [
  { id: 'laranja', name: 'Laranja', neo: '#FF6B2C', soft: '#FFD8C4', wash: '#FFF4ED' },
  { id: 'lima', name: 'Lima', neo: '#34C759', soft: '#C8F5D4', wash: '#F0FBF3' },
  { id: 'azul', name: 'Azul', neo: '#32ADE6', soft: '#C5EBFA', wash: '#F0F9FD' },
  { id: 'rosa', name: 'Rosa', neo: '#FF6482', soft: '#FFD0D9', wash: '#FFF0F3' },
  { id: 'violeta', name: 'Violeta', neo: '#BF5AF2', soft: '#E8C8FA', wash: '#F8F0FD' },
];

const START_PRO = 'https://sistema.odontohub.app.br';
const START_ACADEMY = 'https://academy.odontohub.app.br';

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
  return value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

function surfaceStyle(surface: Surface, neo?: Neo): React.CSSProperties {
  switch (surface) {
    case 'black':
      return { background: '#000', color: '#f5f5f7' };
    case 'white':
      return { background: '#fff', color: '#1d1d1f' };
    case 'surface':
      return { background: '#f5f5f7', color: '#1d1d1f' };
    case 'blue':
      return { background: '#0071e3', color: '#fff' };
    case 'neo':
      return { background: neo?.neo ?? '#FF6B2C', color: '#fff' };
    case 'wash':
      return { background: neo?.wash ?? '#FFF4ED', color: '#1d1d1f' };
    case 'cola':
      return { background: COLA.neo, color: '#fff' };
    case 'colaWash':
      return { background: COLA.wash, color: '#1d1d1f' };
    default:
      return { background: '#fff', color: '#1d1d1f' };
  }
}

function muted(surface: Surface) {
  return surface === 'black' || surface === 'blue' || surface === 'neo' || surface === 'cola'
    ? 'rgba(255,255,255,0.55)'
    : '#86868b';
}

function ink(surface: Surface) {
  return surface === 'black' || surface === 'blue' || surface === 'neo' || surface === 'cola' ? '#f5f5f7' : '#1d1d1f';
}

function ArtMeta({
  title,
  line,
  caption,
  onDownload,
}: {
  title: string;
  line: Line;
  caption?: string;
  onDownload: () => void;
}) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="mt-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[15px] font-semibold tracking-tight text-apple-ink">{title}</p>
          <p className="text-[12px] text-apple-gray mt-0.5">
            {line === 'cola' ? 'Odonto em Jogo' : line === 'academy' ? 'Academy' : 'Pro'}
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button type="button" onClick={onDownload} className="text-[13px] neo-link !text-[#0066cc]">
            Baixar
          </button>
          {caption && (
            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(caption);
                setCopied(true);
                window.setTimeout(() => setCopied(false), 1600);
              }}
              className="text-[13px] neo-link !text-[#0066cc]"
            >
              {copied ? 'Copiado' : 'Legenda'}
            </button>
          )}
        </div>
      </div>
      {caption && <p className="mt-2 text-[13px] text-apple-gray leading-relaxed line-clamp-3">{caption}</p>}
    </div>
  );
}

function Canvas({
  format,
  surface,
  neo,
  photo,
  photoTone,
  children,
  canvasRef,
}: {
  format: 'feed' | 'square' | 'story';
  surface: Surface;
  neo?: Neo;
  photo?: string;
  photoTone?: 'light' | 'dark';
  children: React.ReactNode;
  canvasRef: React.RefObject<HTMLDivElement | null>;
}) {
  const ratio = format === 'story' ? 'aspect-[9/16]' : format === 'square' ? 'aspect-square' : 'aspect-[4/5]';
  return (
    <div
      ref={canvasRef}
      className={`relative w-full overflow-hidden ${ratio}`}
      style={{
        ...surfaceStyle(surface, neo),
        ...(photo
          ? {
              backgroundImage: `url(${photo})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {}),
      }}
    >
      {photo && (
        <div
          className="absolute inset-0"
          style={{
            background:
              photoTone === 'dark'
                ? 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 48%)'
                : 'linear-gradient(to top, rgba(255,255,255,0.55) 0%, transparent 42%)',
          }}
        />
      )}
      <div className="absolute inset-0 flex flex-col p-10 md:p-12">{children}</div>
    </div>
  );
}

function Wordmark({
  surface,
  academy = false,
  neo,
  tone,
}: {
  surface: Surface;
  academy?: boolean;
  neo?: Neo;
  tone?: 'light' | 'dark';
}) {
  const color = tone === 'dark' ? '#f5f5f7' : tone === 'light' ? '#1d1d1f' : ink(surface);
  const academyColor =
    tone === 'dark'
      ? 'rgba(255,255,255,0.7)'
      : tone === 'light'
        ? neo?.neo ?? COLA.neo
        : surface === 'wash' || surface === 'white' || surface === 'surface' || surface === 'colaWash'
          ? neo?.neo ?? COLA.neo
          : 'rgba(255,255,255,0.7)';
  return (
    <p className="text-[13px] font-semibold tracking-tight" style={{ color }}>
      OdontoHub
      {academy && (
        <span className="ml-1.5 font-normal" style={{ color: academyColor }}>
          Academy
        </span>
      )}
    </p>
  );
}

type Preset = {
  id: string;
  title: string;
  line: Line;
  format: 'feed' | 'square' | 'story';
  surface: Surface;
  neo?: Neo;
  caption: string;
  kicker?: string;
  headline: string;
  sub?: string;
  kind: 'hero' | 'quote' | 'list' | 'stat' | 'device' | 'cta' | 'steps' | 'blank' | 'speech' | 'hud' | 'path';
  items?: string[];
  quoteName?: string;
  quoteRole?: string;
  stat?: string;
  statLabel?: string;
  cta?: string;
  placeholder?: string;
  speaker?: string;
  photo?: string;
  photoTone?: 'light' | 'dark';
  photoLayout?: 'billboard' | 'poem' | 'split' | 'center';
  ctaAlt?: string;
};

function PresetArt({ preset }: { preset: Preset }) {
  const ref = useRef<HTMLDivElement>(null);
  const photoTone = preset.photoTone;
  const tone = photoTone === 'dark' ? 'rgba(255,255,255,0.68)' : photoTone === 'light' ? '#6e6e73' : muted(preset.surface);
  const color = photoTone === 'dark' ? '#f5f5f7' : photoTone === 'light' ? '#1d1d1f' : ink(preset.surface);
  const accent =
    photoTone === 'dark'
      ? '#f5f5f7'
      : photoTone === 'light'
        ? preset.line === 'cola'
          ? COLA.neo
          : '#0071e3'
        : preset.line === 'cola'
          ? preset.surface === 'cola'
            ? '#fff'
            : COLA.neo
          : preset.line === 'academy'
            ? preset.surface === 'neo'
              ? '#fff'
              : preset.neo?.neo ?? '#FF6B2C'
            : preset.surface === 'black'
              ? '#2997ff'
              : '#0071e3';

  const lightCard = preset.surface === 'wash' || preset.surface === 'white' || preset.surface === 'surface' || preset.surface === 'colaWash';
  const layout = preset.photoLayout;
  const bodyAlign =
    layout === 'poem'
      ? 'flex-1 flex flex-col justify-start items-end text-right pt-2'
      : layout === 'center'
        ? 'flex-1 flex flex-col justify-center items-center text-center'
        : preset.photo
          ? 'flex-1 flex flex-col justify-end'
          : 'flex-1 flex flex-col justify-center';

  return (
    <div>
      <Canvas
        format={preset.format}
        surface={preset.surface}
        neo={preset.neo}
        photo={preset.photo}
        photoTone={preset.photoLayout === 'split' ? undefined : preset.photoTone}
        canvasRef={ref}
      >
        {layout !== 'split' && (
          <Wordmark
            surface={preset.surface}
            academy={preset.line !== 'pro'}
            neo={preset.line === 'cola' ? COLA : preset.neo}
            tone={photoTone}
          />
        )}

        {preset.photoLayout === 'split' && (
          <div className="flex-1 flex items-center -mx-10 md:-mx-12">
            {(preset.items ?? ['A matéria.', 'O jogo.']).map((item, index) => (
              <p
                key={item}
                className="w-1/2 text-center text-[22px] md:text-[26px] font-semibold tracking-tight"
                style={{ color: index === 0 ? '#f5f5f7' : '#fff' }}
              >
                {item}
              </p>
            ))}
          </div>
        )}

        {preset.photoLayout !== 'split' && preset.kind === 'hero' && (
          <div className={bodyAlign}>
            {preset.kicker && (
              <p className="text-[13px] mb-3" style={{ color: accent }}>
                {preset.kicker}
              </p>
            )}
            <h3 className="text-[32px] md:text-[40px] font-semibold tracking-tight leading-[1.05] whitespace-pre-line" style={{ color }}>
              {preset.headline}
            </h3>
            {preset.sub && (
              <p className="mt-5 text-[16px] md:text-[18px] leading-snug" style={{ color: tone }}>
                {preset.sub}
              </p>
            )}
          </div>
        )}

        {preset.kind === 'quote' && (
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-[26px] md:text-[32px] font-semibold tracking-tight leading-[1.15]" style={{ color }}>
              “{preset.headline}”
            </p>
            <p className="mt-8 text-[14px] font-semibold tracking-tight" style={{ color }}>
              {preset.quoteName}
            </p>
            {preset.quoteRole && (
              <p className="mt-1 text-[13px]" style={{ color: tone }}>
                {preset.quoteRole}
              </p>
            )}
          </div>
        )}

        {preset.photoLayout !== 'split' && preset.kind === 'list' && (
          <div className={bodyAlign}>
            <h3 className="text-[28px] md:text-[34px] font-semibold tracking-tight leading-[1.08] mb-8" style={{ color }}>
              {preset.headline}
            </h3>
            <ul className="space-y-3">
              {(preset.items ?? []).map((item) => (
                <li key={item} className="text-[16px] md:text-[17px]" style={{ color }}>
                  {item}
                </li>
              ))}
            </ul>
            {preset.sub && (
              <p className="mt-8 text-[13px] font-semibold tracking-tight" style={{ color }}>
                {preset.sub}
              </p>
            )}
          </div>
        )}

        {preset.kind === 'stat' && (
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-[64px] md:text-[80px] font-semibold tracking-tight leading-none" style={{ color: accent }}>
              {preset.stat}
            </p>
            <p className="mt-4 text-[22px] md:text-[26px] font-semibold tracking-tight leading-[1.15]" style={{ color }}>
              {preset.headline}
            </p>
            {preset.statLabel && (
              <p className="mt-3 text-[15px]" style={{ color: tone }}>
                {preset.statLabel}
              </p>
            )}
          </div>
        )}

        {preset.kind === 'device' && (
          <div className="flex-1 flex flex-col justify-end">
            <p className="text-[13px] mb-2" style={{ color: tone }}>
              {preset.kicker}
            </p>
            <h3 className="text-[26px] md:text-[30px] font-semibold tracking-tight leading-[1.1] mb-6" style={{ color }}>
              {preset.headline}
            </h3>
            <div
              className="rounded-[22px] p-5 text-left"
              style={{
                background: lightCard ? '#fff' : 'rgba(255,255,255,0.1)',
                color: lightCard ? '#1d1d1f' : '#fff',
              }}
            >
              {(preset.items ?? []).map((item) => (
                <p key={item} className="text-[14px] py-1.5">
                  {item}
                </p>
              ))}
            </div>
          </div>
        )}

        {preset.photoLayout !== 'split' && preset.kind === 'cta' && (
          <div className={bodyAlign}>
            {preset.kicker && (
              <p className="text-[13px] mb-3" style={{ color: accent }}>
                {preset.kicker}
              </p>
            )}
            <h3 className="text-[32px] md:text-[40px] font-semibold tracking-tight leading-[1.05] whitespace-pre-line" style={{ color }}>
              {preset.headline}
            </h3>
            {preset.sub && (
              <p className="mt-4 text-[16px] whitespace-pre-line" style={{ color: tone }}>
                {preset.sub}
              </p>
            )}
            <div className={`mt-8 flex flex-wrap gap-3 ${layout === 'center' ? 'justify-center' : ''}`}>
              <div
                className="rounded-full px-5 py-2.5 text-[15px]"
                style={{
                  background:
                    preset.photo && photoTone === 'light'
                      ? '#0071e3'
                      : preset.surface === 'black' || preset.surface === 'neo' || preset.surface === 'cola'
                        ? '#fff'
                        : accent,
                  color:
                    preset.photo && photoTone === 'light'
                      ? '#fff'
                      : preset.surface === 'black' || preset.surface === 'neo' || preset.surface === 'cola'
                        ? '#1d1d1f'
                        : '#fff',
                }}
              >
                {preset.cta ?? 'Começar'}
              </div>
              {preset.ctaAlt && (
                <div
                  className="rounded-full px-5 py-2.5 text-[15px]"
                  style={{
                    border: `1.5px solid ${preset.photo && photoTone === 'light' ? '#0071e3' : accent}`,
                    color: preset.photo && photoTone === 'light' ? '#0071e3' : accent,
                    background: photoTone === 'dark' ? 'transparent' : '#fff',
                  }}
                >
                  {preset.ctaAlt}
                </div>
              )}
            </div>
          </div>
        )}

        {preset.kind === 'steps' && (
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-[13px] mb-6" style={{ color: accent }}>
              {preset.kicker}
            </p>
            <ol className="space-y-5">
              {(preset.items ?? []).map((item, i) => (
                <li key={item}>
                  <p className="text-[12px] tabular-nums mb-1" style={{ color: accent }}>
                    0{i + 1}
                  </p>
                  <p className="text-[22px] md:text-[26px] font-semibold tracking-tight" style={{ color }}>
                    {item}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        )}

        {preset.kind === 'speech' && (
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-[12px] font-semibold tracking-[0.14em] uppercase mb-4" style={{ color: accent }}>
              {preset.speaker}
            </p>
            <div
              className="rounded-[22px] px-5 py-5 text-[20px] md:text-[24px] font-semibold tracking-tight leading-[1.2]"
              style={{
                background: lightCard ? '#fff' : 'rgba(255,255,255,0.14)',
                color: lightCard ? '#1d1d1f' : '#fff',
              }}
            >
              {preset.headline}
            </div>
            {preset.sub && (
              <p className="mt-5 text-[15px]" style={{ color: tone }}>
                {preset.sub}
              </p>
            )}
          </div>
        )}

        {preset.kind === 'hud' && (
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-[13px] mb-6" style={{ color: accent }}>
              {preset.kicker}
            </p>
            <div className="grid grid-cols-3 gap-3">
              {(preset.items ?? []).map((item) => {
                const [value, label] = item.split('|');
                return (
                  <div
                    key={item}
                    className="rounded-[20px] px-3 py-5 text-center"
                    style={{ background: lightCard ? '#fff' : 'rgba(255,255,255,0.12)' }}
                  >
                    <p className="text-[28px] font-semibold tracking-tight" style={{ color: accent }}>
                      {value}
                    </p>
                    <p className="text-[12px] mt-1" style={{ color: tone }}>
                      {label}
                    </p>
                  </div>
                );
              })}
            </div>
            {preset.sub && (
              <p className="mt-6 text-[16px] leading-snug" style={{ color }}>
                {preset.sub}
              </p>
            )}
          </div>
        )}

        {preset.kind === 'path' && (
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-11 h-11 rounded-full flex items-center justify-center text-white text-[16px]" style={{ background: '#34C759' }}>
                ✓
              </span>
              <span className="w-11 h-11 rounded-full flex items-center justify-center text-white text-[16px]" style={{ background: '#34C759' }}>
                ✓
              </span>
              <span className="w-11 h-11 rounded-full flex items-center justify-center text-white text-[18px]" style={{ background: '#FFB020' }}>
                ★
              </span>
              <span className="w-11 h-11 rounded-full flex items-center justify-center text-white text-[16px]" style={{ background: COLA.neo }}>
                ·
              </span>
            </div>
            <p className="text-[13px] mb-2" style={{ color: accent }}>
              {preset.kicker}
            </p>
            <h3 className="text-[28px] md:text-[34px] font-semibold tracking-tight leading-[1.08]" style={{ color }}>
              {preset.headline}
            </h3>
            {preset.sub && (
              <p className="mt-3 text-[15px]" style={{ color: tone }}>
                {preset.sub}
              </p>
            )}
          </div>
        )}

        {preset.kind === 'blank' && (
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-[13px] mb-4" style={{ color: tone }}>
              {preset.kicker ?? 'Título'}
            </p>
            <p className="text-[32px] md:text-[38px] font-semibold tracking-tight leading-[1.08]" style={{ color, opacity: 0.22 }}>
              {preset.placeholder ?? 'Escreva aqui.'}
            </p>
          </div>
        )}

        {!preset.photo && (
          <p className="text-[11px] mt-auto pt-6" style={{ color: tone }}>
            @odontohub.app
          </p>
        )}
      </Canvas>
      <ArtMeta
        title={preset.title}
        line={preset.line}
        caption={preset.caption}
        onDownload={() => downloadNode(ref.current, `${slug(preset.title)}.png`)}
      />
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-[12px] text-apple-gray mb-8">{children}</h2>;
}

function Grid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-12">{children}</div>;
}

const FEED_PRO: Preset[] = [
  {
    id: 'pro-sistema',
    title: 'O sistema',
    line: 'pro',
    format: 'feed',
    surface: 'black',
    kind: 'hero',
    kicker: 'OdontoHub',
    headline: 'O sistema\npara o consultório.',
    sub: 'Agenda. Paciente. Confirmações.',
    caption: 'O sistema para o consultório. Agenda, paciente e confirmações — com o mínimo de ruído. Comece em sistema.odontohub.app.br',
  },
  {
    id: 'pro-hoje',
    title: 'Hoje',
    line: 'pro',
    format: 'feed',
    surface: 'surface',
    kind: 'hero',
    kicker: 'Bom dia, doutor.',
    headline: 'Hoje, 8 atendimentos.\nDois ainda não confirmaram.',
    caption: 'Abra o dia já sabendo o que falta. OdontoHub mostra quem ainda não confirmou — antes da cadeira ficar vazia.',
  },
  {
    id: 'pro-silencio',
    title: 'Silêncio',
    line: 'pro',
    format: 'feed',
    surface: 'white',
    kind: 'hero',
    headline: 'Tudo certo\npara hoje.',
    sub: 'Seis pacientes confirmados. Pode fechar o sistema.',
    caption: 'Quando o dia está resolvido, o sistema some. OdontoHub existe para isso.',
  },
  {
    id: 'pro-lembrar',
    title: 'Lembretes',
    line: 'pro',
    format: 'feed',
    surface: 'black',
    kind: 'device',
    kicker: 'Próximo',
    headline: 'Enviar lembretes agora?',
    items: ['João Silva · Extração do 38 · 10:00', 'Ana Costa · Retorno · 11:30', 'Dois ainda não confirmaram'],
    caption: 'Um toque. Os lembretes saem. Você atende.',
  },
  {
    id: 'pro-retorno',
    title: 'Retornos',
    line: 'pro',
    format: 'feed',
    surface: 'blue',
    kind: 'hero',
    headline: 'Quem precisa\nvoltar.',
    sub: 'Antes de virar paciente esquecido.',
    caption: 'OdontoHub lembra quem precisa de retorno. Sem lista paralela. Sem caderno.',
  },
  {
    id: 'pro-encaixe',
    title: 'Encaixe',
    line: 'pro',
    format: 'feed',
    surface: 'surface',
    kind: 'list',
    headline: 'Horário livre.',
    items: ['Alguém desmarcou.', 'O sistema sugere quem pode vir.', 'Você decide.'],
    caption: 'Buraco na agenda não precisa virar prejuízo. OdontoHub sugere o encaixe.',
  },
  {
    id: 'pro-whatsapp',
    title: 'Confirmação',
    line: 'pro',
    format: 'feed',
    surface: 'white',
    kind: 'cta',
    headline: 'Confirmar\nno WhatsApp.',
    sub: 'Sem ocupar a linha da clínica.',
    cta: 'Começar',
    caption: 'Confirmação no WhatsApp do paciente. Sem ligação. Sem planilha.',
  },
  {
    id: 'pro-quote',
    title: 'Depoimento',
    line: 'pro',
    format: 'feed',
    surface: 'black',
    kind: 'quote',
    headline: 'A gestão ficou quieta. O atendimento ficou inteiro.',
    quoteName: 'Dra. Amanda Ferraz',
    quoteRole: 'Reabilitação oral',
    caption: '“A gestão ficou quieta. O atendimento ficou inteiro.” — Dra. Amanda Ferraz',
  },
  {
    id: 'pro-prontuario',
    title: 'Paciente',
    line: 'pro',
    format: 'feed',
    surface: 'surface',
    kind: 'hero',
    headline: 'O prontuário.\nNo paciente.',
    sub: 'Histórico, fotos e evolução. Um lugar.',
    caption: 'Abra o paciente. Está tudo lá. OdontoHub.',
  },
  {
    id: 'pro-numero',
    title: 'Comparecimento',
    line: 'pro',
    format: 'feed',
    surface: 'white',
    kind: 'stat',
    stat: '2',
    headline: 'ainda não confirmaram.',
    statLabel: 'Você vê isso antes das 9h.',
    caption: 'Dois ainda não confirmaram. OdontoHub mostra antes do horário.',
  },
  {
    id: 'pro-comecar',
    title: 'Começar',
    line: 'pro',
    format: 'feed',
    surface: 'black',
    kind: 'cta',
    headline: 'Comece pelo\nconsultório.',
    sub: 'Grátis para começar.',
    cta: 'Começar',
    caption: `Comece em ${START_PRO}`,
  },
  {
    id: 'pro-formou',
    title: 'Recém-formado',
    line: 'pro',
    format: 'feed',
    surface: 'surface',
    kind: 'hero',
    headline: 'Acabou de\nse formar?',
    sub: 'Leve o arquivo do Academy. Sem recomeçar.',
    caption: 'Formou? O arquivo do Academy vai com você para o OdontoHub.',
  },
];

const FEED_ACADEMY: Preset[] = NEOS.flatMap((neo, i) => {
  const surfaces: Surface[] = i % 2 === 0 ? ['wash', 'neo'] : ['neo', 'wash'];
  const pair: Preset[] = [
    {
      id: `ac-hero-${neo.id}`,
      title: `Do seu jeito · ${neo.name}`,
      line: 'academy',
      format: 'feed',
      surface: surfaces[0],
      neo,
      kind: 'hero',
      kicker: 'Academy',
      headline: 'A clínica da faculdade.\nDo seu jeito.',
      sub: 'Checklists. Evolução. Modo Box.',
      caption: 'A clínica da faculdade. Do seu jeito. OdontoHub Academy — grátis para começar. academy.odontohub.app.br',
    },
    {
      id: `ac-box-${neo.id}`,
      title: `Modo Box · ${neo.name}`,
      line: 'academy',
      format: 'feed',
      surface: surfaces[1],
      neo,
      kind: 'device',
      kicker: 'Modo Box',
      headline: 'A lista de passos, visível de longe.',
      items: ['Antissepsia', 'Anestesia', 'Sindesmotomia', 'Luxação'],
      caption: 'Luvas. Sem toque. O celular apoiado. Academy Modo Box.',
    },
  ];
  return pair;
});

const FEED_ACADEMY_MORE: Preset[] = [
  {
    id: 'ac-samuel',
    title: 'Oi, Samuel',
    line: 'academy',
    format: 'feed',
    surface: 'wash',
    neo: NEOS[0],
    kind: 'device',
    kicker: 'Oi, Samuel · 7º semestre',
    headline: 'Tudo pronto para o seu próximo atendimento.',
    items: ['Quinta, 14:00 · Cadeira 08', 'Marcos Roberto Jr.', 'Dentística · Isolamento'],
    caption: 'O seu Academy. Checklists e o próximo caso, antes de entrar no box.',
  },
  {
    id: 'ac-checklist',
    title: 'Checklist',
    line: 'academy',
    format: 'feed',
    surface: 'white',
    neo: NEOS[1],
    kind: 'list',
    headline: 'O que levar.',
    items: ['Espelho e sonda', 'Pinça clínica', 'Isolamento absoluto', 'Resina A2'],
    caption: 'Checklist por disciplina. Nada esquecido na esterilização.',
  },
  {
    id: 'ac-momentos',
    title: 'Três momentos',
    line: 'academy',
    format: 'feed',
    surface: 'wash',
    neo: NEOS[2],
    kind: 'steps',
    kicker: 'O seu semestre',
    headline: 'Três momentos.',
    items: ['Antes.', 'No box.', 'Depois.'],
    caption: 'Antes, no box, depois. O Academy organiza o caso. Você atende.',
  },
  {
    id: 'ac-evolucao',
    title: 'Evolução',
    line: 'academy',
    format: 'feed',
    surface: 'neo',
    neo: NEOS[3],
    kind: 'hero',
    headline: 'A evolução.\nPronta.',
    sub: 'Modelo limpo. Assinatura do preceptor em segundos.',
    caption: 'Evolução rascunhada. Fotos no paciente. Feche o app e vá embora.',
  },
  {
    id: 'ac-gratis',
    title: 'Grátis',
    line: 'academy',
    format: 'feed',
    surface: 'wash',
    neo: NEOS[4],
    kind: 'cta',
    headline: 'Grátis\npara começar.',
    sub: 'Sem anúncios. Sem venda de dados.',
    cta: 'Começar',
    caption: `Grátis para começar. ${START_ACADEMY}`,
  },
  {
    id: 'ac-nervosismo',
    title: 'Antes do box',
    line: 'academy',
    format: 'feed',
    surface: 'surface',
    neo: NEOS[0],
    kind: 'hero',
    headline: 'Menos nervosismo\nantes de entrar no box.',
    sub: 'A faculdade já exige o suficiente.',
    caption: 'A faculdade já exige o suficiente. O Academy organiza o caso.',
  },
];

const STORIES_PRO: Preset[] = [
  {
    id: 'st-pro-1',
    title: 'Story · Sistema',
    line: 'pro',
    format: 'story',
    surface: 'black',
    kind: 'hero',
    headline: 'Você abre.\nEle já entendeu o dia.',
    caption: 'OdontoHub. O sistema para o consultório.',
  },
  {
    id: 'st-pro-2',
    title: 'Story · Lista',
    line: 'pro',
    format: 'story',
    surface: 'surface',
    kind: 'list',
    headline: 'Hoje.',
    items: ['Tem paciente chegando.', 'Tem retorno esquecido.', 'Tem consulta sem confirmar.'],
    caption: 'O OdontoHub separa isso por você.',
  },
  {
    id: 'st-pro-3',
    title: 'Story · Próximo',
    line: 'pro',
    format: 'story',
    surface: 'white',
    kind: 'device',
    kicker: 'Próximo atendimento',
    headline: 'Maria Oliveira',
    items: ['14:00 · Box 03', 'Confirmada', 'Revisão de implante'],
    caption: 'Sem procurar. O próximo já está na frente.',
  },
  {
    id: 'st-pro-4',
    title: 'Story · Risco',
    line: 'pro',
    format: 'story',
    surface: 'black',
    kind: 'hero',
    headline: 'Você vê o risco\nantes da cadeira\nficar vazia.',
    caption: 'Confirmação no WhatsApp. OdontoHub.',
  },
  {
    id: 'st-pro-5',
    title: 'Story · CTA',
    line: 'pro',
    format: 'story',
    surface: 'blue',
    kind: 'cta',
    headline: 'Menos peso\nmental.',
    sub: 'Mais clareza.',
    cta: 'Começar',
    caption: START_PRO,
  },
  {
    id: 'st-pro-6',
    title: 'Story · Decidir',
    line: 'pro',
    format: 'story',
    surface: 'surface',
    kind: 'hero',
    headline: 'Você não entra\npara procurar.',
    sub: 'Você entra para decidir.',
    caption: 'OdontoHub. Comece grátis.',
  },
];

const STORIES_ACADEMY: Preset[] = [
  {
    id: 'st-ac-1',
    title: 'Story · Academy',
    line: 'academy',
    format: 'story',
    surface: 'wash',
    neo: NEOS[0],
    kind: 'hero',
    kicker: 'Academy',
    headline: 'A clínica da faculdade não precisa ser tão confusa.',
    caption: 'OdontoHub Academy.',
  },
  {
    id: 'st-ac-2',
    title: 'Story · Caso',
    line: 'academy',
    format: 'story',
    surface: 'neo',
    neo: NEOS[0],
    kind: 'steps',
    kicker: 'Paciente chegou',
    headline: 'O caso',
    items: ['Você abre o caso.', 'Revê o histórico.', 'Entende o que vai fazer.'],
    caption: 'Checklist, caso, evolução.',
  },
  {
    id: 'st-ac-3',
    title: 'Story · Box',
    line: 'academy',
    format: 'story',
    surface: 'wash',
    neo: NEOS[2],
    kind: 'hero',
    headline: 'Durante o atendimento, você não fica perdido.',
    sub: 'Modo Box. Alto contraste.',
    caption: 'Letras grandes. Celular apoiado.',
  },
  {
    id: 'st-ac-4',
    title: 'Story · Terminou',
    line: 'academy',
    format: 'story',
    surface: 'white',
    neo: NEOS[1],
    kind: 'cta',
    headline: 'Terminou?',
    sub: 'Registra a evolução. Marca o retorno.',
    cta: 'Começar',
    caption: START_ACADEMY,
  },
  {
    id: 'st-ac-5',
    title: 'Story · Vida clínica',
    line: 'academy',
    format: 'story',
    surface: 'wash',
    neo: NEOS[4],
    kind: 'hero',
    headline: 'Não é só organizar matéria.',
    sub: 'É organizar a vida clínica.',
    caption: 'OdontoHub Academy.',
  },
  {
    id: 'st-ac-6',
    title: 'Story · Formar',
    line: 'academy',
    format: 'story',
    surface: 'neo',
    neo: NEOS[3],
    kind: 'hero',
    headline: 'Do primeiro paciente ao primeiro consultório.',
    caption: 'Academy agora. OdontoHub depois.',
  },
];

const SQUARES: Preset[] = [
  {
    id: 'sq-pro-1',
    title: 'Carrossel 1 · Capa',
    line: 'pro',
    format: 'square',
    surface: 'black',
    kind: 'hero',
    headline: 'O que precisa\nda sua atenção\nagora.',
    caption: 'Carrossel Pro — slide 1.',
  },
  {
    id: 'sq-pro-2',
    title: 'Carrossel 2 · Agenda',
    line: 'pro',
    format: 'square',
    surface: 'surface',
    kind: 'list',
    headline: 'Agenda',
    items: ['Quem vem.', 'Quem confirmou.', 'O que fazer agora.'],
    caption: 'Carrossel Pro — slide 2.',
  },
  {
    id: 'sq-pro-3',
    title: 'Carrossel 3 · Fim',
    line: 'pro',
    format: 'square',
    surface: 'blue',
    kind: 'cta',
    headline: 'Comece\ngratis.',
    cta: 'Começar',
    caption: START_PRO,
  },
  {
    id: 'sq-ac-1',
    title: 'Carrossel Academy · Capa',
    line: 'academy',
    format: 'square',
    surface: 'wash',
    neo: NEOS[0],
    kind: 'hero',
    kicker: 'Academy',
    headline: 'Do seu jeito.',
    caption: 'Carrossel Academy — slide 1.',
  },
  {
    id: 'sq-ac-2',
    title: 'Carrossel Academy · Box',
    line: 'academy',
    format: 'square',
    surface: 'neo',
    neo: NEOS[2],
    kind: 'hero',
    headline: 'Modo Box.',
    sub: 'O passo, visível de longe.',
    caption: 'Carrossel Academy — slide 2.',
  },
  {
    id: 'sq-ac-3',
    title: 'Carrossel Academy · Fim',
    line: 'academy',
    format: 'square',
    surface: 'wash',
    neo: NEOS[4],
    kind: 'cta',
    headline: 'Grátis para\ncomeçar.',
    cta: 'Começar',
    caption: START_ACADEMY,
  },
];

const MODELOS: Preset[] = [
  {
    id: 'md-pro-black',
    title: 'Modelo Pro · Preto',
    line: 'pro',
    format: 'feed',
    surface: 'black',
    kind: 'blank',
    kicker: 'OdontoHub',
    headline: '',
    placeholder: 'A sua frase.',
    caption: '',
  },
  {
    id: 'md-pro-white',
    title: 'Modelo Pro · Branco',
    line: 'pro',
    format: 'feed',
    surface: 'white',
    kind: 'blank',
    kicker: 'OdontoHub',
    headline: '',
    placeholder: 'A sua frase.',
    caption: '',
  },
  {
    id: 'md-pro-surface',
    title: 'Modelo Pro · Cinza',
    line: 'pro',
    format: 'feed',
    surface: 'surface',
    kind: 'blank',
    kicker: 'OdontoHub',
    headline: '',
    placeholder: 'A sua frase.',
    caption: '',
  },
  {
    id: 'md-pro-blue',
    title: 'Modelo Pro · Azul',
    line: 'pro',
    format: 'feed',
    surface: 'blue',
    kind: 'blank',
    kicker: 'OdontoHub',
    headline: '',
    placeholder: 'A sua frase.',
    caption: '',
  },
  {
    id: 'md-pro-story',
    title: 'Modelo Story Pro',
    line: 'pro',
    format: 'story',
    surface: 'black',
    kind: 'blank',
    kicker: 'OdontoHub',
    headline: '',
    placeholder: 'A sua frase.',
    caption: '',
  },
  ...NEOS.map((neo) => ({
    id: `md-ac-${neo.id}`,
    title: `Modelo Academy · ${neo.name}`,
    line: 'academy' as const,
    format: 'feed' as const,
    surface: 'wash' as const,
    neo,
    kind: 'blank' as const,
    kicker: 'Academy',
    headline: '',
    placeholder: 'A sua frase.',
    caption: '',
  })),
  ...NEOS.map((neo) => ({
    id: `md-ac-fill-${neo.id}`,
    title: `Modelo Academy cheio · ${neo.name}`,
    line: 'academy' as const,
    format: 'feed' as const,
    surface: 'neo' as const,
    neo,
    kind: 'blank' as const,
    kicker: 'Academy',
    headline: '',
    placeholder: 'A sua frase.',
    caption: '',
  })),
  ...NEOS.map((neo) => ({
    id: `md-ac-story-${neo.id}`,
    title: `Modelo Story Academy · ${neo.name}`,
    line: 'academy' as const,
    format: 'story' as const,
    surface: 'wash' as const,
    neo,
    kind: 'blank' as const,
    kicker: 'Academy',
    headline: '',
    placeholder: 'A sua frase.',
    caption: '',
  })),
];

const COLA_FEED: Preset[] = [
  {
    id: 'cola-treino',
    title: 'Odonto em Jogo',
    line: 'cola',
    format: 'feed',
    surface: 'colaWash',
    kind: 'hero',
    kicker: 'Novidade',
    headline: 'Odonto em Jogo.',
    sub: 'O Duolingo da odontologia. Casos rápidos, vidas, XP e uma trilha para avançar.',
    caption: 'Odonto em Jogo é o Duolingo da odontologia: situações clínicas rápidas, vidas, XP e uma trilha para avançar. academy.odontohub.app.br',
  },
  {
    id: 'cola-jogando',
    title: 'Aprenda jogando',
    line: 'cola',
    format: 'feed',
    surface: 'cola',
    kind: 'hero',
    headline: 'Da teoria para\na clínica.',
    sub: 'Uma fase por vez. Com trilha, XP e vidas.',
    caption: 'Escolha um tema, responda situações clínicas e avance uma fase por vez. Odonto em Jogo, no Academy. academy.odontohub.app.br',
  },
  {
    id: 'cola-nina',
    title: 'Nina',
    line: 'cola',
    format: 'feed',
    surface: 'colaWash',
    kind: 'speech',
    speaker: 'Nina',
    headline: 'Mandou bem. Bora para a próxima?',
    sub: 'Pré-clínica · Nível 2',
    caption: 'Mandou bem. Bora para a próxima? Nina acompanha você no Odonto em Jogo.',
  },
  {
    id: 'cola-hud',
    title: 'Vidas e sequência',
    line: 'cola',
    format: 'feed',
    surface: 'white',
    kind: 'hud',
    kicker: 'O seu jogo',
    headline: '',
    items: ['1|sequência', '37|XP', '5|vidas'],
    sub: 'Uma fase por vez. Cinco minutos já contam.',
    caption: 'Sequência, XP e vidas. O Odonto em Jogo acompanha o seu ritmo na faculdade.',
  },
  {
    id: 'cola-nivel',
    title: 'Nível 2',
    line: 'cola',
    format: 'feed',
    surface: 'colaWash',
    kind: 'stat',
    stat: '2',
    headline: 'Pré-clínica.',
    statLabel: '41 de 150 XP neste nível.',
    caption: 'Nível 2 · Pré-clínica. Você ganha XP e avança pela trilha no seu ritmo.',
  },
  {
    id: 'cola-meta',
    title: 'Meta do dia',
    line: 'cola',
    format: 'feed',
    surface: 'cola',
    kind: 'stat',
    stat: '141',
    headline: 'XP hoje.',
    statLabel: 'Meta do dia batida.',
    caption: 'Meta do dia batida. Se quiser mais uma, o Academy topa.',
  },
  {
    id: 'cola-val',
    title: 'Exame clínico',
    line: 'cola',
    format: 'feed',
    surface: 'colaWash',
    kind: 'path',
    kicker: 'Com Dra. Val',
    headline: 'Exame clínico.',
    sub: 'Ouvir, examinar e transformar achado em plano. 2/2 lições.',
    caption: 'Exame clínico com a Dra. Val. Ouça, examine e transforme o achado em plano no Odonto em Jogo.',
  },
  {
    id: 'cola-kaio',
    title: 'Radiologia',
    line: 'cola',
    format: 'feed',
    surface: 'white',
    kind: 'path',
    kicker: 'Com Kaio, residente',
    headline: 'Radiologia.',
    sub: 'Pedir a tomada certa e ler sem pular etapa. 0/2 lições.',
    caption: 'Radiologia com o Kaio. Pedir a tomada certa e ler sem pular etapa.',
  },
  {
    id: 'cola-principio',
    title: 'Kaio',
    line: 'cola',
    format: 'feed',
    surface: 'colaWash',
    kind: 'speech',
    speaker: 'Kaio',
    headline: 'Princípio primeiro; o resto é consequência.',
    sub: 'Radiologia · Lição 1',
    caption: 'Kaio: “Princípio primeiro; o resto é consequência.” Odonto em Jogo.',
  },
  {
    id: 'cola-ordem',
    title: 'Lição',
    line: 'cola',
    format: 'feed',
    surface: 'white',
    kind: 'list',
    headline: 'Na ordem certa.',
    items: [
      'Conferir a qualidade da imagem',
      'Identificar a anatomia normal',
      'Descrever o achado',
      'Correlacionar com a clínica',
    ],
    caption: 'Coloque a leitura radiográfica na ordem. Lições curtas, no Academy.',
  },
  {
    id: 'cola-relampago',
    title: 'Desafio relâmpago',
    line: 'cola',
    format: 'feed',
    surface: 'cola',
    kind: 'hero',
    kicker: '60 segundos',
    headline: 'Desafio\nrelâmpago.',
    sub: 'Sem gastar vidas.',
    caption: 'Desafio relâmpago: 60 segundos, sem gastar vidas. Odonto em Jogo.',
  },
  {
    id: 'cola-treinar',
    title: 'Jogar',
    line: 'cola',
    format: 'feed',
    surface: 'colaWash',
    kind: 'cta',
    headline: 'Cinco minutos.\nUma fase.',
    sub: 'Escolha um tema e comece.',
    cta: 'Jogar agora',
    caption: 'Cinco minutos. Uma fase. Escolha um tema e comece no Odonto em Jogo. academy.odontohub.app.br',
  },
];

const PHOTO_FEED: Preset[] = [
  {
    id: 'photo-studio-hero',
    title: 'Estúdio · Academy',
    line: 'academy',
    format: 'feed',
    surface: 'white',
    neo: NEOS[0],
    kind: 'cta',
    photo: '/presets/apple-studio-student.png',
    photoTone: 'light',
    photoLayout: 'billboard',
    kicker: 'OdontoHub Academy',
    headline: 'Academy',
    sub: 'A clínica da faculdade.\nDo seu jeito.',
    cta: 'Saiba mais',
    ctaAlt: 'Começar',
    caption: 'A clínica da faculdade. Do seu jeito.\n\nComece em academy.odontohub.app.br',
  },
  {
    id: 'photo-glow-poem',
    title: 'Luz · Cinco minutos',
    line: 'academy',
    format: 'feed',
    surface: 'black',
    kind: 'list',
    photo: '/presets/apple-glow-study.png',
    photoTone: 'dark',
    photoLayout: 'poem',
    headline: 'Cinco minutos.',
    items: ['Antes de dormir.', 'Uma pergunta.', 'Uma resposta.', 'A clínica fica.'],
    sub: 'Feito para dentistas pela Odontohub.',
    caption: 'Cinco minutos. A clínica fica.\n\nOdonto em Jogo — academy.odontohub.app.br',
  },
  {
    id: 'photo-phone-line',
    title: 'Privacidade · Jogo',
    line: 'cola',
    format: 'feed',
    surface: 'black',
    kind: 'hero',
    photo: '/presets/apple-phone-hand.png',
    photoTone: 'dark',
    photoLayout: 'center',
    headline: 'Odonto em Jogo.\nÉ Academy.',
    caption: 'Odonto em Jogo. É Academy.\n\nacademy.odontohub.app.br',
  },
  {
    id: 'photo-split',
    title: 'Split · Matéria e jogo',
    line: 'cola',
    format: 'feed',
    surface: 'white',
    kind: 'hero',
    photo: '/presets/apple-split-learning.png',
    photoTone: 'light',
    photoLayout: 'split',
    headline: '',
    items: ['A matéria.', 'O jogo.'],
    caption: 'A matéria. O jogo.\n\nOdonto em Jogo no Academy — academy.odontohub.app.br',
  },
  {
    id: 'photo-clinic',
    title: 'Clínica · Jogo',
    line: 'academy',
    format: 'feed',
    surface: 'white',
    neo: NEOS[1],
    kind: 'cta',
    photo: '/presets/apple-clinic-phone.png',
    photoTone: 'light',
    photoLayout: 'billboard',
    kicker: 'OdontoHub Academy',
    headline: 'Odonto em Jogo',
    sub: 'Da teoria para a clínica.\nUma fase por vez.',
    cta: 'Jogar agora',
    ctaAlt: 'Como funciona',
    caption: 'Da teoria para a clínica. Uma fase por vez.\n\nComece em academy.odontohub.app.br',
  },
];

const PHOTO_STORIES: Preset[] = [
  {
    id: 'photo-story-studio',
    title: 'Story · Estúdio',
    line: 'academy',
    format: 'story',
    surface: 'white',
    neo: NEOS[0],
    kind: 'cta',
    photo: '/presets/apple-studio-story.png',
    photoTone: 'light',
    photoLayout: 'billboard',
    kicker: 'OdontoHub Academy',
    headline: 'Academy',
    sub: 'A clínica da faculdade.\nDo seu jeito.',
    cta: 'Saiba mais',
    ctaAlt: 'Começar',
    caption: 'A clínica da faculdade. Do seu jeito.\n\nacademy.odontohub.app.br',
  },
  {
    id: 'photo-story-glow',
    title: 'Story · Luz',
    line: 'academy',
    format: 'story',
    surface: 'black',
    kind: 'list',
    photo: '/presets/apple-glow-study.png',
    photoTone: 'dark',
    photoLayout: 'poem',
    headline: 'Uma pergunta.',
    items: ['Uma vida.', 'Uma sequência.', 'A clínica.'],
    sub: 'Feito para dentistas pela Odontohub.',
    caption: 'Uma pergunta. A clínica.\n\nOdonto em Jogo — academy.odontohub.app.br',
  },
  {
    id: 'photo-story-phone',
    title: 'Story · Jogo',
    line: 'cola',
    format: 'story',
    surface: 'black',
    kind: 'hero',
    photo: '/presets/apple-phone-hand.png',
    photoTone: 'dark',
    photoLayout: 'center',
    headline: 'Odonto em Jogo.\nÉ Academy.',
    caption: 'Odonto em Jogo. É Academy.\n\nacademy.odontohub.app.br',
  },
  {
    id: 'photo-story-split',
    title: 'Story · Split',
    line: 'cola',
    format: 'story',
    surface: 'white',
    kind: 'hero',
    photo: '/presets/apple-split-learning.png',
    photoTone: 'light',
    photoLayout: 'split',
    headline: '',
    items: ['A matéria.', 'O jogo.'],
    caption: 'A matéria. O jogo.\n\nOdonto em Jogo no Academy — academy.odontohub.app.br',
  },
];

const COLA_STORIES: Preset[] = [
  {
    id: 'st-cola-1',
    title: 'Story · Jogo',
    line: 'cola',
    format: 'story',
    surface: 'cola',
    kind: 'hero',
    headline: 'Odonto em Jogo.',
    sub: 'Casos rápidos. Vidas. XP. Uma trilha para avançar.',
    caption: 'Chegou o Odonto em Jogo.',
  },
  {
    id: 'st-cola-2',
    title: 'Story · Nina',
    line: 'cola',
    format: 'story',
    surface: 'colaWash',
    kind: 'speech',
    speaker: 'Nina',
    headline: 'Mandou bem. Bora para a próxima?',
    caption: 'Nina, no Odonto em Jogo.',
  },
  {
    id: 'st-cola-3',
    title: 'Story · Trilha',
    line: 'cola',
    format: 'story',
    surface: 'white',
    kind: 'path',
    kicker: 'A sua trilha',
    headline: 'Uma lição depois da outra.',
    sub: 'Verde é feito. Roxo é o próximo.',
    caption: 'A sua trilha no Odonto em Jogo.',
  },
  {
    id: 'st-cola-4',
    title: 'Story · Lição',
    line: 'cola',
    format: 'story',
    surface: 'colaWash',
    kind: 'hero',
    kicker: 'Radiologia · Lição 1',
    headline: 'Coloque a leitura na ordem.',
    sub: 'Toque nos passos. Verifique.',
    caption: 'Fase de radiologia no Odonto em Jogo.',
  },
  {
    id: 'st-cola-5',
    title: 'Story · Vidas',
    line: 'cola',
    format: 'story',
    surface: 'cola',
    kind: 'stat',
    stat: '5',
    headline: 'vidas.',
    statLabel: 'Errar faz parte. Acabar as vidas, também.',
    caption: 'Cinco vidas. Odonto em Jogo.',
  },
  {
    id: 'st-cola-6',
    title: 'Story · CTA',
    line: 'cola',
    format: 'story',
    surface: 'colaWash',
    kind: 'cta',
    headline: 'Escolha um tema\ne jogue.',
    cta: 'Jogar agora',
    caption: START_ACADEMY,
  },
];

const COLA_SQUARES: Preset[] = [
  {
    id: 'sq-cola-1',
    title: 'Carrossel Jogo · 1',
    line: 'cola',
    format: 'square',
    surface: 'cola',
    kind: 'hero',
    headline: 'Odonto\nem Jogo.',
    caption: 'Odonto em Jogo — 1.',
  },
  {
    id: 'sq-cola-2',
    title: 'Carrossel Jogo · 2',
    line: 'cola',
    format: 'square',
    surface: 'colaWash',
    kind: 'list',
    headline: 'Como funciona',
    items: ['Escolha um tema', 'Responda casos rápidos', 'Ganhe XP', 'Avance pela trilha'],
    caption: 'Odonto em Jogo — 2.',
  },
  {
    id: 'sq-cola-3',
    title: 'Carrossel Jogo · 3',
    line: 'cola',
    format: 'square',
    surface: 'white',
    kind: 'cta',
    headline: 'Jogar.',
    sub: 'No Academy.',
    cta: 'Começar',
    caption: START_ACADEMY,
  },
];

const COLA_MODELOS: Preset[] = [
  {
    id: 'md-cola-wash',
    title: 'Modelo Jogo · Claro',
    line: 'cola',
    format: 'feed',
    surface: 'colaWash',
    kind: 'blank',
    kicker: 'Odonto em Jogo',
    headline: '',
    placeholder: 'A sua frase.',
    caption: '',
  },
  {
    id: 'md-cola-fill',
    title: 'Modelo Jogo · Roxo',
    line: 'cola',
    format: 'feed',
    surface: 'cola',
    kind: 'blank',
    kicker: 'Odonto em Jogo',
    headline: '',
    placeholder: 'A sua frase.',
    caption: '',
  },
  {
    id: 'md-cola-story',
    title: 'Modelo Story Jogo',
    line: 'cola',
    format: 'story',
    surface: 'colaWash',
    kind: 'blank',
    kicker: 'Odonto em Jogo',
    headline: '',
    placeholder: 'A sua frase.',
    caption: '',
  },
];

function HighlightCover({
  title,
  line,
  neo,
  surface,
}: {
  title: string;
  line: Line;
  neo?: Neo;
  surface: Surface;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const color = ink(surface);

  return (
    <div className="flex flex-col items-center">
      <div
        ref={ref}
        className="w-[168px] h-[168px] rounded-full flex items-center justify-center"
        style={surfaceStyle(surface, neo)}
      >
        <p className="text-[15px] font-semibold tracking-tight text-center px-6 leading-tight" style={{ color }}>
          {title}
        </p>
      </div>
      <p className="mt-4 text-[13px] text-apple-ink font-semibold tracking-tight">{title}</p>
      <p className="text-[12px] text-apple-gray">{line === 'cola' ? 'Odonto em Jogo' : line === 'academy' ? 'Academy' : 'Pro'}</p>
      <button
        type="button"
        onClick={() => downloadNode(ref.current, `destaque-${slug(title)}.png`)}
        className="mt-2 text-[13px] neo-link !text-[#0066cc]"
      >
        Baixar
      </button>
    </div>
  );
}

export default function InstagramPresets() {
  const [tab, setTab] = useState<Tab>('feed');

  const tabs: { id: Tab; label: string }[] = [
    { id: 'feed', label: 'Feed' },
    { id: 'stories', label: 'Stories' },
    { id: 'cola', label: 'Jogo' },
    { id: 'pessoas', label: 'Pessoas' },
    { id: 'destaques', label: 'Destaques' },
    { id: 'modelos', label: 'Modelos' },
  ];

  return (
    <div className="min-h-screen bg-apple-surface text-apple-ink">
      <Helmet>
        <title>Kit Instagram — OdontoHub</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <header className="pt-28 md:pt-32 pb-12 px-5">
        <div className="max-w-[980px] mx-auto">
          <p className="text-[19px] font-semibold tracking-tight text-apple-ink mb-3">Kit social</p>
          <h1 className="apple-display-ink text-[40px] md:text-[56px] mb-4">
            Posts na língua
            <br />
            do OdontoHub.
          </h1>
          <p className="apple-subhead text-[19px] max-w-[520px]">
            Pro em preto e azul. Academy nas cinco cores. Odonto em Jogo no roxo. Pessoas no recorte Apple. Baixe a arte. Copie a legenda.
          </p>
          <div className="mt-10 flex flex-wrap gap-2">
            {tabs.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setTab(item.id)}
                className="rounded-full px-4 py-2 text-[13px] transition-colors"
                style={
                  tab === item.id
                    ? { background: '#1d1d1f', color: '#fff' }
                    : { background: '#fff', color: '#1d1d1f' }
                }
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="px-5 pb-28">
        <div className="max-w-[1100px] mx-auto">
          {tab === 'feed' && (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-20">
              <section>
                <SectionTitle>Feed Pro · 4:5</SectionTitle>
                <Grid>
                  {FEED_PRO.map((preset) => (
                    <PresetArt key={preset.id} preset={preset} />
                  ))}
                </Grid>
              </section>
              <section>
                <SectionTitle>Feed Academy · 4:5</SectionTitle>
                <Grid>
                  {[...FEED_ACADEMY, ...FEED_ACADEMY_MORE].map((preset) => (
                    <PresetArt key={preset.id} preset={preset} />
                  ))}
                </Grid>
              </section>
              <section>
                <SectionTitle>Feed Odonto em Jogo · 4:5</SectionTitle>
                <Grid>
                  {COLA_FEED.map((preset) => (
                    <PresetArt key={preset.id} preset={preset} />
                  ))}
                </Grid>
              </section>
              <section>
                <SectionTitle>Carrossel · 1:1</SectionTitle>
                <Grid>
                  {SQUARES.map((preset) => (
                    <PresetArt key={preset.id} preset={preset} />
                  ))}
                </Grid>
              </section>
            </motion.div>
          )}

          {tab === 'stories' && (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-20">
              <section>
                <SectionTitle>Stories Pro · 9:16</SectionTitle>
                <Grid>
                  {STORIES_PRO.map((preset) => (
                    <PresetArt key={preset.id} preset={preset} />
                  ))}
                </Grid>
              </section>
              <section>
                <SectionTitle>Stories Academy · 9:16</SectionTitle>
                <Grid>
                  {STORIES_ACADEMY.map((preset) => (
                    <PresetArt key={preset.id} preset={preset} />
                  ))}
                </Grid>
              </section>
              <section>
                <SectionTitle>Stories Odonto em Jogo · 9:16</SectionTitle>
                <Grid>
                  {COLA_STORIES.map((preset) => (
                    <PresetArt key={preset.id} preset={preset} />
                  ))}
                </Grid>
              </section>
            </motion.div>
          )}

          {tab === 'cola' && (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-20">
              <section>
                <SectionTitle>Odonto em Jogo · feed</SectionTitle>
                <Grid>
                  {COLA_FEED.map((preset) => (
                    <PresetArt key={preset.id} preset={preset} />
                  ))}
                </Grid>
              </section>
              <section>
                <SectionTitle>Stories</SectionTitle>
                <Grid>
                  {COLA_STORIES.map((preset) => (
                    <PresetArt key={preset.id} preset={preset} />
                  ))}
                </Grid>
              </section>
              <section>
                <SectionTitle>Carrossel</SectionTitle>
                <Grid>
                  {COLA_SQUARES.map((preset) => (
                    <PresetArt key={preset.id} preset={preset} />
                  ))}
                </Grid>
              </section>
            </motion.div>
          )}

          {tab === 'pessoas' && (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-20">
              <section>
                <SectionTitle>Pessoas · feed 4:5</SectionTitle>
                <p className="mb-8 text-[15px] leading-7 text-[#86868b] max-w-2xl">
                  Fotos de pessoas, no recorte Apple. Estúdio branco, luz do celular, split, clínica. Texto curto por cima.
                </p>
                <Grid>
                  {PHOTO_FEED.map((preset) => (
                    <PresetArt key={preset.id} preset={preset} />
                  ))}
                </Grid>
              </section>
              <section>
                <SectionTitle>Pessoas · stories 9:16</SectionTitle>
                <Grid>
                  {PHOTO_STORIES.map((preset) => (
                    <PresetArt key={preset.id} preset={preset} />
                  ))}
                </Grid>
              </section>
            </motion.div>
          )}

          {tab === 'destaques' && (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-16">
              <section>
                <SectionTitle>Pro</SectionTitle>
                <div className="flex flex-wrap gap-10">
                  <HighlightCover title="Agenda" line="pro" surface="black" />
                  <HighlightCover title="Paciente" line="pro" surface="surface" />
                  <HighlightCover title="Confirmar" line="pro" surface="blue" />
                  <HighlightCover title="Retornos" line="pro" surface="white" />
                  <HighlightCover title="Começar" line="pro" surface="black" />
                </div>
              </section>
              <section>
                <SectionTitle>Academy</SectionTitle>
                <div className="flex flex-wrap gap-10">
                  {NEOS.map((neo) => (
                    <HighlightCover key={neo.id} title={neo.name} line="academy" surface="neo" neo={neo} />
                  ))}
                  <HighlightCover title="Modo Box" line="academy" surface="wash" neo={NEOS[0]} />
                  <HighlightCover title="Checklist" line="academy" surface="wash" neo={NEOS[1]} />
                  <HighlightCover title="Academy" line="academy" surface="neo" neo={NEOS[4]} />
                </div>
              </section>
              <section>
                <SectionTitle>Odonto em Jogo</SectionTitle>
                <div className="flex flex-wrap gap-10">
                  <HighlightCover title="Jogo" line="cola" surface="cola" />
                  <HighlightCover title="Jogar" line="cola" surface="colaWash" />
                  <HighlightCover title="Nina" line="cola" surface="cola" />
                  <HighlightCover title="Trilha" line="cola" surface="colaWash" />
                  <HighlightCover title="Vidas" line="cola" surface="white" />
                </div>
              </section>
            </motion.div>
          )}

          {tab === 'modelos' && (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
              <SectionTitle>Fundos vazios para a sua frase</SectionTitle>
              <Grid>
                {[...MODELOS, ...COLA_MODELOS].map((preset) => (
                  <PresetArt key={preset.id} preset={preset} />
                ))}
              </Grid>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}
