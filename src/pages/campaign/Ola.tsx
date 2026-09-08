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
  OLA_BIO,
  OLA_FEED,
  OLA_FILM,
  OLA_FILM_NOTE,
  OLA_HIGHLIGHTS,
  OLA_JOGO,
  OLA_LINE,
  OLA_MODELOS,
  OLA_PILLARS,
  OLA_PLAN,
  OLA_SQUARES,
  OLA_STORIES,
  OLA_SUB,
} from '../../data/ola';
import { LARANJA, NEOS, START_ACADEMY } from '../../data/feeds';

export function OlaCampaign(): React.ReactElement {
  return (
    <div className="min-h-screen text-apple-ink" style={{ background: LARANJA.wash }}>
      <Helmet>
        <title>Olá OdontoHub Academy. — Campanhas</title>
        <meta name="robots" content="noindex" />
        <meta name="description" content="Olá OdontoHub Academy. A clínica da faculdade. Odonto em Jogo: um Duolingo para odontologia." />
      </Helmet>

      <section className="relative min-h-[88svh] flex flex-col justify-end overflow-hidden" style={{ background: LARANJA.neo }}>
        <div className="relative max-w-[980px] mx-auto px-5 pt-28 pb-16 md:pb-24 w-full text-white">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.05, ease: [0.25, 0.1, 0.25, 1] }}>
            <p className="text-[19px] md:text-[21px] font-semibold tracking-tight mb-3">Lançamento · @odontohub.academy</p>
            <h1 className="apple-display text-[40px] sm:text-[56px] md:text-[80px] mb-6 max-w-[12ch]">{OLA_LINE}</h1>
            <p className="apple-subhead text-[19px] md:text-[28px] max-w-[520px] mb-9 text-white/85">{OLA_SUB}</p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
              <a href="#ola-filme" className="inline-flex items-center rounded-full bg-white text-[#1d1d1f] text-[17px] px-5 py-2.5 hover:bg-white/92">
                Assista o filme
              </a>
              <a href={START_ACADEMY} className="text-[17px] text-white/90 hover:underline underline-offset-2">
                Começar <span aria-hidden>›</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-24 md:py-32" style={{ background: LARANJA.wash }}>
        <div className="max-w-[980px] mx-auto">
          <Reveal className="mb-14">
            <p className="text-[13px] mb-4" style={{ color: LARANJA.neo }}>
              O primeiro contato
            </p>
            <h2 className="apple-display-ink text-[40px] md:text-[56px]">A clínica começa no box. O jogo, na trilha.</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-12">
            {OLA_PILLARS.map((item) => (
              <React.Fragment key={item.kicker}>
                <Reveal>
                  <p className="text-[13px] mb-3" style={{ color: LARANJA.neo }}>
                    {item.kicker}
                  </p>
                  <h3 className="text-[26px] md:text-[30px] font-semibold tracking-tight leading-[1.12]">{item.title}</h3>
                  <p className="mt-4 text-[16px] text-apple-gray leading-relaxed">{item.body}</p>
                </Reveal>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 md:py-32">
        <div className="max-w-[980px] mx-auto">
          <Reveal className="mb-12">
            <p className="text-[19px] font-semibold tracking-tight mb-2" style={{ color: LARANJA.neo }}>
              Odonto em Jogo
            </p>
            <h2 className="apple-display-ink text-[40px] md:text-[56px]">Não é um baralho. É uma trilha.</h2>
            <p className="apple-subhead text-[19px] mt-4 max-w-[540px]">
              Como o Duolingo, feito para quem estuda odontologia. Tema. Situação clínica. XP, vidas, a próxima fase.
            </p>
          </Reveal>
          <Reveal>
            <img src="/brand/jogo-trilha.png" alt="Odonto em Jogo. A trilha." className="w-full rounded-[8px]" />
          </Reveal>
          <div className="mt-16 grid md:grid-cols-3 gap-12">
            {OLA_JOGO.map((beat) => (
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

      <section id="ola-filme" className="bg-black px-5 py-20 md:py-28 scroll-mt-24 text-white">
        <div className="max-w-[980px] mx-auto">
          <Reveal className="text-center mb-12">
            <p className="text-[19px] font-semibold tracking-tight mb-2">O filme</p>
            <h2 className="apple-display text-[40px] md:text-[64px]">Olá.</h2>
            <p className="apple-subhead text-[19px] md:text-[24px] mt-5 max-w-[520px] mx-auto">{OLA_FILM_NOTE}</p>
          </Reveal>
          <Reveal>
            <FilmPlayer shots={OLA_FILM} endSub="OdontoHub Academy" />
          </Reveal>
          <ol className="mt-16 divide-y divide-white/10 border-y border-white/10 max-w-[820px] mx-auto">
            {OLA_FILM.map((shot) => (
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

      <section className="bg-apple-surface px-5 py-24 md:py-32">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="mb-14">
            <h2 className="apple-display-ink text-[40px] md:text-[56px]">O kit · Academy</h2>
            <p className="apple-subhead text-[19px] mt-4 max-w-[520px]">Laranja. Lima. Azul. Rosa. Violeta. Do seu jeito.</p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Lockup academy neo={LARANJA.neo} label="Academy · Branco" />
            <Lockup academy inverted neo={LARANJA.neo} label="Academy · Preto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            <MarkTile />
            <AvatarTile src="/brand/avatar-academy.png" label="Avatar · Academy" file="avatar-academy.png" />
          </div>
          <div className="mt-16 flex flex-wrap gap-4">
            {NEOS.map((neo) => (
              <div key={neo.id} className="text-center">
                <div className="w-16 h-16 rounded-full" style={{ background: neo.neo }} />
                <p className="mt-2 text-[12px] text-apple-gray">{neo.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeedStudio
        handle="@odontohub.academy"
        bio={OLA_BIO}
        plan={OLA_PLAN}
        feed={OLA_FEED}
        stories={OLA_STORIES}
        squares={OLA_SQUARES}
        highlights={OLA_HIGHLIGHTS}
        modelos={OLA_MODELOS}
        academyOn
        accent={LARANJA.neo}
      />

      <section className="px-5 py-28 md:py-40" style={{ background: LARANJA.neo }}>
        <div className="max-w-[780px] mx-auto text-center text-white">
          <Reveal>
            <h2 className="apple-display text-[36px] md:text-[64px] mb-5">{OLA_LINE}</h2>
            <p className="apple-subhead text-[19px] md:text-[24px] mb-10 text-white/85">{OLA_SUB}</p>
            <a href={START_ACADEMY} className="inline-flex items-center rounded-full bg-white text-[#1d1d1f] text-[17px] px-5 py-2.5">
              Começar
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
