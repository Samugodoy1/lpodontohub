import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import {
  AvatarTile,
  FilmPlayer,
  HighlightCover,
  Lockup,
  MarkTile,
  PostArt,
  Reveal,
} from '../../components/campaign/Art';
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
} from '../../data/brand';
import { LARANJA, NEOS, START_ACADEMY, START_PRO } from '../../data/feeds';

export function ContinuaCampaign(): React.ReactElement {
  const [account, setAccount] = useState<'app' | 'academy'>('app');
  const [format, setFormat] = useState<'feed' | 'stories' | 'carrossel' | 'destaques' | 'modelos'>('feed');
  const academyOn = account === 'academy';
  const feed = academyOn ? ACADEMY_LAUNCH : APP_LAUNCH;
  const stories = academyOn ? ACADEMY_LAUNCH_STORIES : APP_LAUNCH_STORIES;
  const squares = academyOn ? ACADEMY_LAUNCH_SQUARES : APP_LAUNCH_SQUARES;
  const highlights = academyOn ? ACADEMY_LAUNCH_HIGHLIGHTS : APP_LAUNCH_HIGHLIGHTS;
  const modelos = academyOn ? MODELOS_ACADEMY : MODELOS_HUB;

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>A clínica contínua. — Campanhas</title>
        <meta name="robots" content="noindex" />
        <meta name="description" content="Arquivo. Bem-vindo à era da clínica contínua. Academy. Hub. Presença. Um arquivo." />
      </Helmet>

      <section className="relative min-h-[88svh] flex flex-col justify-end overflow-hidden">
        <img src="/brand/eco-family.png" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25" />
        <div className="relative max-w-[980px] mx-auto px-5 pt-28 pb-16 md:pb-24 w-full">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.05, ease: [0.25, 0.1, 0.25, 1] }}>
            <p className="text-[19px] md:text-[21px] font-semibold tracking-tight text-[#f5f5f7] mb-3">Arquivo · futuro</p>
            <h1 className="apple-display text-[40px] sm:text-[56px] md:text-[80px] mb-6 max-w-[16ch]">{SLOGAN}</h1>
            <p className="apple-subhead text-[19px] md:text-[28px] max-w-[540px] mb-9">
              Academy. Hub. Presença.
              <br className="hidden md:block" /> Um arquivo. Do box à cadeira.
            </p>
            <p className="text-[15px] text-white/45 max-w-[480px]">
              Guardada. O lançamento agora é Hello OdontoHub. e Olá Academy. Esta campanha volta quando o público já conhecer os dois nomes.
            </p>
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

      <section id="filme" className="bg-black px-5 py-20 md:py-28 scroll-mt-24">
        <div className="max-w-[980px] mx-auto">
          <Reveal className="text-center mb-12">
            <p className="text-[19px] font-semibold tracking-tight mb-2">O filme</p>
            <h2 className="apple-display text-[40px] md:text-[64px]">30 segundos.</h2>
            <p className="apple-subhead text-[19px] md:text-[24px] mt-5 max-w-[520px] mx-auto">{COMMERCIAL_NOTE}</p>
          </Reveal>
          <Reveal>
            <FilmPlayer shots={COMMERCIAL} endSub="OdontoHub" />
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

      <section id="kit" className="bg-apple-surface text-apple-ink px-5 py-24 md:py-32 scroll-mt-24">
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
            <p className="apple-subhead text-[19px] mt-4 max-w-[560px]">Arquivo da campanha do ecossistema. Não é o lançamento atual.</p>
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
