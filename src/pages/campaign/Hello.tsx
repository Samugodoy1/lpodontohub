import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import {
  AvatarTile,
  FeedStudio,
  FilmPlayer,
  Lockup,
  MarkTile,
  Reveal,
} from '../../components/campaign/Art';
import {
  HELLO_BIO,
  HELLO_FEED,
  HELLO_FILM,
  HELLO_FILM_NOTE,
  HELLO_HIGHLIGHTS,
  HELLO_LINE,
  HELLO_MODELOS,
  HELLO_PILLARS,
  HELLO_PLAN,
  HELLO_SQUARES,
  HELLO_STORIES,
  HELLO_STORY,
  HELLO_SUB,
} from '../../data/hello';
import { COLORS_HUB } from '../../data/brand';
import { START_PRO } from '../../data/feeds';

export function HelloCampaign(): React.ReactElement {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Hello OdontoHub. — Campanhas</title>
        <meta name="robots" content="noindex" />
        <meta name="description" content="Hello OdontoHub. O sistema para o consultório." />
      </Helmet>

      <section className="relative min-h-[88svh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="relative max-w-[980px] mx-auto px-5 pt-28 pb-16 md:pb-24 w-full">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.05, ease: [0.25, 0.1, 0.25, 1] }}>
            <p className="text-[19px] md:text-[21px] font-semibold tracking-tight text-[#f5f5f7] mb-3">Lançamento · @odontohub.app</p>
            <h1 className="apple-display text-[48px] sm:text-[64px] md:text-[88px] mb-6">{HELLO_LINE}</h1>
            <p className="apple-subhead text-[19px] md:text-[28px] max-w-[520px] mb-9">{HELLO_SUB}</p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
              <a href="#hello-filme" className="apple-btn">
                Assista o filme
              </a>
              <a href={START_PRO} className="apple-link !text-[#2997ff]">
                Começar <span aria-hidden>›</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-black px-5 py-24 md:py-32">
        <div className="max-w-[980px] mx-auto">
          <Reveal className="mb-14">
            <p className="text-[13px] text-white/35 mb-4">O primeiro contato</p>
            <h2 className="apple-display text-[40px] md:text-[56px]">Não é um ERP. É o consultório, em silêncio.</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-12">
            {HELLO_PILLARS.map((item) => (
              <React.Fragment key={item.kicker}>
                <Reveal>
                  <p className="text-[13px] text-[#2997ff] mb-3">{item.kicker}</p>
                  <h3 className="text-[26px] md:text-[30px] font-semibold tracking-tight leading-[1.12]">{item.title}</h3>
                  <p className="mt-4 text-[16px] text-white/55 leading-relaxed">{item.body}</p>
                </Reveal>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-apple-ink px-5 py-24 md:py-32">
        <div className="max-w-[980px] mx-auto">
          <Reveal className="mb-12">
            <h2 className="apple-display-ink text-[40px] md:text-[56px]">Formou. A cadeira é sua.</h2>
            <p className="apple-subhead text-[19px] mt-4 max-w-[520px]">
              O público ainda não conhece o nome. Hello. é o cumprimento. Depois, o sistema.
            </p>
          </Reveal>
          <Reveal>
            <img src="/brand/virada-human.png" alt="" className="w-full max-w-[420px] mx-auto rounded-[8px]" />
          </Reveal>
          <div className="mt-16 grid md:grid-cols-3 gap-12">
            {HELLO_STORY.map((beat) => (
              <React.Fragment key={beat.n}>
                <Reveal>
                  <p className="text-[12px] tabular-nums text-apple-gray mb-2">{beat.n}</p>
                  <h3 className="text-[24px] font-semibold tracking-tight leading-[1.15]">{beat.t}</h3>
                  <p className="mt-3 text-[16px] text-apple-gray leading-relaxed">{beat.d}</p>
                </Reveal>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section id="hello-filme" className="bg-black px-5 py-20 md:py-28 scroll-mt-24">
        <div className="max-w-[980px] mx-auto">
          <Reveal className="text-center mb-12">
            <p className="text-[19px] font-semibold tracking-tight mb-2">O filme</p>
            <h2 className="apple-display text-[40px] md:text-[64px]">Hello.</h2>
            <p className="apple-subhead text-[19px] md:text-[24px] mt-5 max-w-[520px] mx-auto">{HELLO_FILM_NOTE}</p>
          </Reveal>
          <Reveal>
            <FilmPlayer shots={HELLO_FILM} endSub="OdontoHub" />
          </Reveal>
          <ol className="mt-16 divide-y divide-white/10 border-y border-white/10 max-w-[820px] mx-auto">
            {HELLO_FILM.map((shot) => (
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

      <section className="bg-apple-surface text-apple-ink px-5 py-24 md:py-32">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="mb-14">
            <h2 className="apple-display-ink text-[40px] md:text-[56px]">O kit · Hub</h2>
            <p className="apple-subhead text-[19px] mt-4 max-w-[520px]">Preto, branco, azul. A marca é o nome.</p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Lockup label="OdontoHub · Branco" />
            <Lockup inverted label="OdontoHub · Preto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            <MarkTile />
            <MarkTile inverted />
            <AvatarTile src="/brand/avatar-hub.png" label="Avatar · Hub" file="avatar-odontohub.png" />
          </div>
          <div className="mt-16 flex flex-wrap gap-4">
            {COLORS_HUB.map((c) => (
              <div key={c.hex} className="text-center">
                <div className="w-16 h-16 rounded-full border border-black/5" style={{ background: c.hex }} />
                <p className="mt-2 text-[12px] text-apple-gray">{c.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeedStudio
        handle="@odontohub.app"
        bio={HELLO_BIO}
        plan={HELLO_PLAN}
        feed={HELLO_FEED}
        stories={HELLO_STORIES}
        squares={HELLO_SQUARES}
        highlights={HELLO_HIGHLIGHTS}
        modelos={HELLO_MODELOS}
        academyOn={false}
        accent="#1d1d1f"
      />

      <section className="bg-black px-5 py-28 md:py-40">
        <div className="max-w-[780px] mx-auto text-center">
          <Reveal>
            <h2 className="apple-display text-[36px] md:text-[64px] mb-5">{HELLO_LINE}</h2>
            <p className="apple-subhead text-[19px] md:text-[24px] mb-10">{HELLO_SUB}</p>
            <a href={START_PRO} className="apple-btn">
              Começar
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
