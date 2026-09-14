import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FeedStudio, Lockup, MarkTile, Reveal } from '../components/campaign/Art';
import { LARANJA, NEOS } from '../data/feeds';
import {
  CAPTION_BANK,
  COLOR_USES,
  FORMATS,
  KIT_LOGOS,
  LOGO_DONT,
  LOGO_RULES,
  PHOTO_RULES,
  REP_BIO_BASE,
  REP_JUMP,
  REP_KICKER,
  REP_LINE,
  REP_PILLARS,
  REP_PLAN,
  REP_SUB,
  SAY_THIS,
  SURFACES,
  VOICE_DO,
  VOICE_DONT,
  buildRepPresets,
  repBio,
} from '../data/representantes';

function JumpIcon({ id }: { id: string }) {
  const common = {
    width: 36,
    height: 36,
    viewBox: '0 0 36 36',
    fill: 'none',
    'aria-hidden': true as const,
  };
  const stroke = '#1d1d1f';
  if (id === 'logotipos') {
    return (
      <svg {...common}>
        <rect x="6" y="11" width="24" height="14" rx="4" stroke={stroke} strokeWidth="1.6" />
        <path d="M12.5 18.2c2.4-3.2 8.6-3.2 11 0" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (id === 'cores') {
    return (
      <svg {...common}>
        <circle cx="14" cy="16" r="5.2" stroke={stroke} strokeWidth="1.6" />
        <circle cx="22" cy="16" r="5.2" stroke={stroke} strokeWidth="1.6" />
        <circle cx="18" cy="22.5" r="5.2" stroke={stroke} strokeWidth="1.6" />
      </svg>
    );
  }
  if (id === 'presets') {
    return (
      <svg {...common}>
        <rect x="8" y="8" width="20" height="20" rx="4" stroke={stroke} strokeWidth="1.6" />
        <path d="M8 14.5h20M14.5 8v20" stroke={stroke} strokeWidth="1.6" />
      </svg>
    );
  }
  if (id === 'formatos') {
    return (
      <svg {...common}>
        <rect x="11" y="7" width="14" height="22" rx="3" stroke={stroke} strokeWidth="1.6" />
        <path d="M15 11h6" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (id === 'voz') {
    return (
      <svg {...common}>
        <path d="M11 26l2.2-7.4L24.8 9.2a1.8 1.8 0 0 1 2.5 2.5L16.4 22.8 11 26z" stroke={stroke} strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M21.2 11.4l3.4 3.4" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <circle cx="18" cy="18" r="9" stroke={stroke} strokeWidth="1.6" />
      <path d="M18 13.5v7M18 23.2v.4" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CopyLine({ value, label }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        void navigator.clipboard?.writeText(value).catch(() => undefined);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1400);
      }}
      className="text-[13px] text-[#0066cc] hover:underline underline-offset-2"
    >
      {copied ? 'Copiado' : label ?? value}
    </button>
  );
}

function hexToRgb(hex: string) {
  const n = hex.replace('#', '');
  const r = parseInt(n.slice(0, 2), 16);
  const g = parseInt(n.slice(2, 4), 16);
  const b = parseInt(n.slice(4, 6), 16);
  return `${r}, ${g}, ${b}`;
}

export default function Representantes(): React.ReactElement {
  const [code, setCode] = useState('ACADEMY');
  const safeCode = code.trim().toUpperCase() || 'ACADEMY';
  const presets = useMemo(() => buildRepPresets(safeCode), [safeCode]);
  const captions = useMemo(() => CAPTION_BANK(safeCode), [safeCode]);
  const useFor = Object.fromEntries(COLOR_USES.map((item) => [item.id, item.use]));

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-apple-ink">
      <Helmet>
        <title>Representantes — Recursos de marca · OdontoHub Academy</title>
        <meta
          name="description"
          content="Recursos de marca e diretrizes de identidade para representantes do OdontoHub Academy. Logotipos, cores Neo, presets, formatos e voz."
        />
        <link rel="canonical" href="https://www.odontohub.app.br/academy/representantes" />
        <meta property="og:title" content="Representantes — OdontoHub Academy" />
        <meta property="og:url" content="https://www.odontohub.app.br/academy/representantes" />
      </Helmet>

      <div className="fixed top-12 md:top-[44px] left-0 right-0 z-40 border-b border-white/10 bg-[rgba(10,6,16,0.92)] backdrop-blur-[20px]">
        <div className="max-w-[980px] mx-auto px-5 h-12 flex items-center gap-4">
          <p className="hidden sm:block text-[12px] font-semibold tracking-tight text-[#f5f5f7] shrink-0">
            Representantes Academy
          </p>
          <div className="flex-1 flex items-center gap-5 md:gap-6 text-[12px] text-[#f5f5f7]/70 overflow-x-auto scrollbar-none">
            {REP_JUMP.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="hover:text-white transition-colors whitespace-nowrap">
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#logotipos"
            className="shrink-0 inline-flex items-center rounded-full bg-white text-[#1d1d1f] text-[12px] px-3.5 py-[5px] hover:bg-[#f5f5f7]"
          >
            O kit
          </a>
        </div>
      </div>

      <section className="relative min-h-[92svh] flex items-center justify-center overflow-hidden pt-24">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(90% 70% at 50% 40%, #5a1a78 0%, #2a0b3d 42%, #120412 100%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              'radial-gradient(60% 50% at 78% 80%, rgba(255,107,44,0.38) 0%, transparent 58%), radial-gradient(50% 40% at 12% 20%, rgba(191,90,242,0.4) 0%, transparent 60%)',
          }}
        />
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative px-5 text-center font-semibold tracking-[-0.045em] leading-[0.92] text-[18vw] sm:text-[120px] md:text-[160px]"
          style={{ color: '#e4b8ff' }}
        >
          {REP_LINE}
        </motion.h1>
      </section>

      <section className="relative overflow-hidden min-h-[78svh] flex items-end">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, #1a0a22 0%, #3b1048 38%, #ff6b2c 100%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(ellipse at 30% 40%, rgba(255,255,255,0.18), transparent 42%)',
          }}
        />
        <div className="relative max-w-[980px] mx-auto px-5 pb-16 md:pb-24 w-full">
          <Reveal>
            <p className="text-[32px] sm:text-[44px] md:text-[56px] font-semibold tracking-tight leading-[1.08] text-white max-w-[18ch]">
              Uma clínica na faculdade pode inspirar a turma inteira.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="visao" className="bg-[#f5f5f7] px-5 pt-20 md:pt-28 pb-10 scroll-mt-28">
        <div className="max-w-[820px] mx-auto text-center">
          <Reveal>
            <h2 className="apple-display-ink text-[40px] md:text-[56px] mb-6">
              Recursos de marca e diretrizes de identidade
            </h2>
            <p className="text-[17px] md:text-[21px] leading-relaxed text-apple-ink/80 max-w-[640px] mx-auto">
              {REP_SUB} Use os logotipos, as cores Neo, os presets e estas orientações para apresentar o Academy em
              qualquer comunicação — com a mesma precisão de quem já trabalha aqui.
            </p>
          </Reveal>
          <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-4">
            {REP_JUMP.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="group flex flex-col items-center text-center">
                <span className="mb-3 opacity-90 group-hover:opacity-100 transition-opacity">
                  <JumpIcon id={item.id} />
                </span>
                <span className="text-[13px] font-medium tracking-tight text-apple-ink">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f7] px-5 py-20 md:py-28">
        <div className="max-w-[980px] mx-auto">
          <div className="grid md:grid-cols-3 gap-12 md:gap-10">
            {REP_PILLARS.map((item) => (
              <React.Fragment key={item.kicker}>
                <Reveal>
                  <p className="text-[13px] mb-3" style={{ color: LARANJA.neo }}>
                    {item.kicker}
                  </p>
                  <h3 className="text-[24px] md:text-[28px] font-semibold tracking-tight leading-[1.12]">{item.title}</h3>
                  <p className="mt-4 text-[16px] text-apple-gray leading-relaxed">{item.body}</p>
                </Reveal>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section id="logotipos" className="bg-white px-5 py-24 md:py-32 scroll-mt-28">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="mb-14 max-w-[640px]">
            <h2 className="apple-display-ink text-[40px] md:text-[56px]">Logotipos</h2>
            <p className="apple-subhead text-[19px] mt-4">
              O lockup é OdontoHub + Academy. A marca é o arco. Em fundo claro, tinta. Em fundo Neo, branco.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Lockup academy neo={LARANJA.neo} label="Academy · Branco" />
            <Lockup academy inverted neo={LARANJA.neo} label="Academy · Preto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <MarkTile />
            <MarkTile inverted />
            <div>
              <div className="rounded-[22px] aspect-square flex items-center justify-center bg-white">
                <img src="/brand/logo-academy.svg" alt="OdontoHub Academy" className="w-[78%] max-w-[200px]" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-[13px] text-apple-gray">Wordmark · SVG</p>
                <a href="/brand/logo-academy.svg" download className="text-[13px] text-[#0066cc]">
                  Baixar
                </a>
              </div>
            </div>
            <div>
              <div className="rounded-[22px] aspect-square flex items-center justify-center bg-black">
                <img src="/brand/logo-academy-white.svg" alt="OdontoHub Academy branco" className="w-[78%] max-w-[200px]" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-[13px] text-apple-gray">Wordmark branco · SVG</p>
                <a href="/brand/logo-academy-white.svg" download className="text-[13px] text-[#0066cc]">
                  Baixar
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-[21px] font-semibold tracking-tight mb-6">Como usar</h3>
              <ul className="space-y-5">
                {LOGO_RULES.map((rule) => (
                  <li key={rule.t}>
                    <p className="text-[17px] font-semibold tracking-tight">{rule.t}</p>
                    <p className="mt-1 text-[15px] text-apple-gray leading-relaxed">{rule.d}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[21px] font-semibold tracking-tight mb-6">O que não fazer</h3>
              <ul className="space-y-4">
                {LOGO_DONT.map((line) => (
                  <li key={line} className="text-[15px] text-apple-gray leading-relaxed pl-4 border-l border-black/10">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-apple-line">
            <p className="text-[13px] text-apple-gray mb-4">Arquivos</p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {KIT_LOGOS.map((file) => (
                <a key={file.href} href={file.href} download className="text-[15px] text-[#0066cc]">
                  {file.label}
                  <span className="ml-2 text-apple-gray">{file.note}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="cores" className="px-5 py-24 md:py-32 scroll-mt-28" style={{ background: LARANJA.wash }}>
        <div className="max-w-[980px] mx-auto">
          <Reveal className="mb-14 max-w-[560px]">
            <h2 className="apple-display-ink text-[40px] md:text-[56px]">Cores Neo</h2>
            <p className="apple-subhead text-[19px] mt-4">
              Cinco colorways. Uma conta. A pessoa escolhe a sua. Você representa todas — e usa uma por peça.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {NEOS.map((neo) => (
              <div key={neo.id} className="rounded-[28px] overflow-hidden bg-white">
                <div className="h-36" style={{ background: neo.neo }} />
                <div className="h-10" style={{ background: neo.soft }} />
                <div className="h-8" style={{ background: neo.wash }} />
                <div className="p-5">
                  <p className="text-[19px] font-semibold tracking-tight">{neo.name}</p>
                  <p className="mt-3 text-[13px] tabular-nums text-apple-gray">{neo.neo}</p>
                  <p className="text-[12px] tabular-nums text-apple-gray">RGB {hexToRgb(neo.neo)}</p>
                  <p className="mt-3 text-[13px] text-apple-gray leading-snug">{useFor[neo.id]}</p>
                  <div className="mt-4">
                    <CopyLine value={neo.neo} label="Copiar hex" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-[15px] text-apple-gray max-w-[640px] leading-relaxed">
            Superfície da marca: #f5f5f7. Tinta: #1d1d1f. Cinza: #86868b. O laranja é a casa. As outras quatro cores
            existem para a pessoa se reconhecer — não para um arco-íris no mesmo post.
          </p>
        </div>
      </section>

      <section id="formatos" className="bg-white px-5 py-24 md:py-32 scroll-mt-28">
        <div className="max-w-[980px] mx-auto">
          <Reveal className="mb-14">
            <h2 className="apple-display-ink text-[40px] md:text-[56px]">Formatos</h2>
            <p className="apple-subhead text-[19px] mt-4 max-w-[540px]">
              Três recortes. Sempre. O tipo ocupa o quadro. A arte já nasce no tamanho certo — não recorte depois.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-10 items-end">
            {FORMATS.map((item) => (
              <React.Fragment key={item.id}>
                <Reveal>
                  <div
                    className="mx-auto w-full max-w-[220px] rounded-[18px] mb-6 flex items-end justify-center overflow-hidden"
                    style={{
                      aspectRatio: item.ratio.replace(':', ' / '),
                      background: item.id === 'story' ? LARANJA.neo : item.id === 'square' ? LARANJA.soft : LARANJA.wash,
                    }}
                  >
                    <p className="pb-8 text-[22px] font-semibold tracking-tight text-apple-ink">{item.ratio}</p>
                  </div>
                  <p className="text-[13px] tabular-nums text-apple-gray mb-2">{item.size}</p>
                  <h3 className="text-[24px] font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-[15px] text-apple-gray leading-relaxed">{item.body}</p>
                </Reveal>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f7] px-5 py-24 md:py-32">
        <div className="max-w-[980px] mx-auto">
          <Reveal className="mb-14 max-w-[640px]">
            <h2 className="apple-display-ink text-[40px] md:text-[56px]">Fotografia</h2>
            <p className="apple-subhead text-[19px] mt-4">
              A clínica real. A luz da sala. O telefone no tray. Nada de banco de imagens de sorriso.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {PHOTO_RULES.map((rule) => (
              <React.Fragment key={rule.t}>
                <Reveal>
                  <h3 className="text-[24px] font-semibold tracking-tight">{rule.t}</h3>
                  <p className="mt-3 text-[16px] text-apple-gray leading-relaxed">{rule.d}</p>
                </Reveal>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section id="voz" className="bg-white px-5 py-24 md:py-32 scroll-mt-28">
        <div className="max-w-[980px] mx-auto">
          <Reveal className="mb-14 max-w-[560px]">
            <h2 className="apple-display-ink text-[40px] md:text-[56px]">Voz + estilo</h2>
            <p className="apple-subhead text-[19px] mt-4">
              A marca fala baixo e certo. Você conta a sua clínica. As duas coisas no mesmo post.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {VOICE_DO.map((item) => (
              <div key={item.t} className="rounded-[28px] bg-[#f5f5f7] p-8 md:p-10">
                <h3 className="text-[22px] font-semibold tracking-tight">{item.t}</h3>
                <p className="mt-3 text-[15px] text-apple-gray leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
          <h3 className="text-[21px] font-semibold tracking-tight mb-6">Diga isto. Não aquilo.</h3>
          <div className="divide-y divide-black/10 border-y border-black/10">
            {SAY_THIS.map((row) => (
              <div key={row.bad} className="py-6 grid md:grid-cols-2 gap-4 md:gap-10">
                <p className="text-[15px] text-apple-gray leading-relaxed">
                  <span className="block text-[12px] font-medium text-apple-gray mb-1">Evite</span>
                  {row.bad}
                </p>
                <p className="text-[15px] text-apple-ink leading-relaxed">
                  <span className="block text-[12px] font-medium mb-1" style={{ color: LARANJA.neo }}>
                    Use
                  </span>
                  {row.good}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="diretrizes" className="bg-black text-white px-5 py-24 md:py-32 scroll-mt-28">
        <div className="max-w-[980px] mx-auto">
          <Reveal className="mb-14 max-w-[620px]">
            <h2 className="apple-display text-[40px] md:text-[56px]">Diretrizes</h2>
            <p className="apple-subhead text-[19px] mt-4 !text-white/55">
              Representar o Academy é um cargo de confiança. A liberdade é a sua história. O limite é a verdade do
              produto.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-12">
            {VOICE_DONT.map((item) => (
              <div key={item.t}>
                <h3 className="text-[24px] font-semibold tracking-tight">{item.t}</h3>
                <p className="mt-3 text-[16px] text-white/55 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-16 text-[15px] text-white/45 max-w-[640px] leading-relaxed">
            O Academy é ferramenta de apoio pessoal. A ficha oficial, a avaliação e a preceptoria continuam na
            universidade. Paciente nenhum entra em conteúdo sem consentimento. A parceria se declara. Sempre.
          </p>
        </div>
      </section>

      <section className="bg-[#f5f5f7] px-5 pt-16 pb-4">
        <div className="max-w-[1100px] mx-auto">
          <div className="rounded-[28px] bg-white p-6 md:p-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <label className="flex-1">
              <span className="block text-[13px] text-apple-gray mb-2">Seu código de representante</span>
              <input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                maxLength={18}
                className="apple-input max-w-[280px] !bg-[#f5f5f7] uppercase tracking-[0.08em]"
                placeholder="ACADEMY"
                aria-label="Código de representante"
              />
            </label>
            <p className="text-[15px] text-apple-gray max-w-[420px] leading-relaxed">
              Os presets e as legendas já saem com o código {safeCode}. Baixe a arte. Copie a legenda. Declare a
              parceria.
            </p>
          </div>
        </div>
      </section>

      <div id="presets" className="scroll-mt-28">
        <FeedStudio
          handle="@odontohub.academy"
          bio={repBio(safeCode)}
          plan={REP_PLAN}
          feed={presets.feed}
          stories={presets.stories}
          squares={presets.squares}
          highlights={presets.highlights}
          modelos={presets.modelos}
          academyOn
          accent={LARANJA.neo}
          title="Presets"
          intro="Peças prontas. Fundo limpo. Tipo forte. Coloque o seu código e baixe."
        />
      </div>

      <section className="bg-white px-5 py-24 md:py-28">
        <div className="max-w-[980px] mx-auto">
          <Reveal className="mb-10">
            <h2 className="apple-display-ink text-[34px] md:text-[48px]">Legendas</h2>
            <p className="apple-subhead text-[19px] mt-3 max-w-[520px]">
              Copie. Adapte o começo, se quiser. Mantenha o nome, o código e o que o produto é.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {captions.map((item) => (
              <div key={item.title} className="rounded-[24px] bg-[#f5f5f7] p-7">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <h3 className="text-[17px] font-semibold tracking-tight">{item.title}</h3>
                  <CopyLine value={item.text} label="Copiar" />
                </div>
                <p className="text-[15px] text-apple-gray leading-relaxed whitespace-pre-line">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-[15px] text-apple-gray">{REP_BIO_BASE}</p>
        </div>
      </section>

      <section className="bg-black text-white px-5 py-24 md:py-32">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="mb-12">
            <h2 className="apple-display text-[40px] md:text-[56px]">Conheça as outras superfícies.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SURFACES.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className="group relative min-h-[340px] rounded-[28px] overflow-hidden p-7 flex flex-col justify-between"
                style={{ background: item.tone }}
              >
                <div>
                  <p className="text-[13px] text-white/70 mb-3">{item.kicker}</p>
                  <h3 className="text-[28px] font-semibold tracking-tight leading-[1.1] text-white">{item.title}</h3>
                </div>
                <span className="self-start rounded-full bg-white text-[#1d1d1f] text-[14px] px-4 py-2 group-hover:bg-[#f5f5f7]">
                  Saiba mais
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-28 md:py-40" style={{ background: LARANJA.neo }}>
        <div className="max-w-[780px] mx-auto text-center text-white">
          <Reveal>
            <p className="text-[19px] font-semibold tracking-tight text-white/80 mb-4">{REP_KICKER}</p>
            <h2 className="text-[36px] md:text-[64px] font-semibold tracking-tight leading-[1.04] mb-6">
              Você já faz parte.
            </h2>
            <p className="text-[19px] md:text-[24px] text-white/80 mb-10 max-w-[22ch] mx-auto">
              A marca é maior do que um story. Use ela como quem trabalha aqui.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <a href="#presets" className="apple-btn-light">
                Abrir os presets
              </a>
              <Link to="/academy/embaixadores" className="text-[17px] text-white/90 hover:underline underline-offset-2">
                O programa <span aria-hidden>›</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
