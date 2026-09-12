import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import {
  AmbassadorAvatar,
  AmbassadorAvatarTile,
  FeedStudio,
  FilmPlayer,
  Reveal,
} from '../../components/campaign/Art';
import {
  EMBAIXADORES_BENEFITS,
  EMBAIXADORES_BIO,
  EMBAIXADORES_FEED,
  EMBAIXADORES_FILM,
  EMBAIXADORES_FILM_NOTE,
  EMBAIXADORES_HIGHLIGHTS,
  EMBAIXADORES_INSIGHT,
  EMBAIXADORES_LINE,
  EMBAIXADORES_MODELOS,
  EMBAIXADORES_PLAN,
  EMBAIXADORES_PROCESS,
  EMBAIXADORES_RULES,
  EMBAIXADORES_SQUARES,
  EMBAIXADORES_STORIES,
  EMBAIXADORES_SUB,
} from '../../data/embaixadores';
import { VIOLETA } from '../../data/feeds';

const APPLY_URL = '/academy/embaixadores#form';

export function EmbaixadoresCampaign(): React.ReactElement {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Programa de Embaixadores — OdontoHub Academy</title>
        <meta name="robots" content="noindex" />
        <meta
          name="description"
          content="Campanha do Programa de Embaixadores OdontoHub Academy."
        />
      </Helmet>

      <section
        className="min-h-[100svh] flex items-center px-5 pt-28 pb-16"
        style={{
          background:
            'radial-gradient(95% 80% at 50% 16%, #5a256b 0%, #32143d 36%, #16091b 68%, #050205 100%)',
        }}
      >
        <div className="max-w-[1080px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-[13px] md:text-[15px] text-white/60 mb-8">
              OdontoHub Academy
            </p>
            <h1 className="text-[58px] sm:text-[82px] md:text-[118px] font-semibold tracking-[-0.06em] leading-[0.88] text-[#dfa8ea]">
              Embaixadores.
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="relative min-h-[92svh] overflow-hidden flex items-end">
        <img
          src="/campaign/academy-studio-violeta.png"
          alt="Estudante de odontologia usando o celular"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-black/5" />
        <div className="relative max-w-[1100px] mx-auto w-full px-6 pb-16 md:pb-24">
          <Reveal>
            <h2 className="text-[42px] sm:text-[58px] md:text-[78px] font-semibold tracking-[-0.045em] leading-[0.98] max-w-[15ch]">
              {EMBAIXADORES_LINE}
            </h2>
            <p className="mt-6 text-[19px] md:text-[24px] text-white/80 max-w-[38ch] leading-snug">
              {EMBAIXADORES_SUB}
            </p>
            <a
              href={APPLY_URL}
              className="mt-9 inline-flex rounded-full bg-white text-black px-6 py-3 text-[16px] font-medium"
            >
              Inscreva-se
            </a>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-28 md:py-40 bg-black">
        <div className="max-w-[1080px] mx-auto">
          <Reveal>
            <p className="text-[18px] md:text-[22px] text-white/55 mb-5">O seu papel</p>
            <h2 className="text-[42px] md:text-[68px] font-semibold tracking-[-0.045em] leading-[1.02] max-w-[18ch]">
              Faça a diferença antes mesmo de se formar.
            </h2>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-3 gap-4">
            {EMBAIXADORES_INSIGHT.map((item, index) => (
              <React.Fragment key={item.k}>
                <Reveal delay={index * 0.08}>
                  <div
                    className="min-h-[440px] md:min-h-[520px] rounded-[28px] p-7 md:p-9 flex flex-col overflow-hidden"
                    style={{
                      background:
                        index === 0
                          ? 'linear-gradient(150deg,#4e225c,#1b0e20)'
                          : index === 1
                            ? 'linear-gradient(150deg,#15394b,#07141b)'
                            : 'linear-gradient(150deg,#56213c,#1c0a12)',
                    }}
                  >
                    <p className="text-[28px] md:text-[34px] font-semibold tracking-tight">{item.k}</p>
                    <div className="mt-auto">
                      <h3 className="text-[25px] md:text-[30px] font-semibold tracking-tight leading-[1.08]">
                        {item.t}
                      </h3>
                      <p className="mt-5 text-[16px] text-white/58 leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                </Reveal>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-28 md:py-40 bg-[#f5f5f7] text-[#1d1d1f]">
        <div className="max-w-[1080px] mx-auto">
          <Reveal className="mb-16">
            <p className="text-[18px] text-black/50 mb-4">O caminho</p>
            <h2 className="text-[42px] md:text-[68px] font-semibold tracking-[-0.045em] leading-[1.02]">
              Comece com a sua história.
            </h2>
          </Reveal>
          <div className="divide-y divide-black/12 border-y border-black/12">
            {EMBAIXADORES_PROCESS.map((item) => (
              <div key={item.n} className="py-8 md:py-10 grid md:grid-cols-[90px_230px_1fr] gap-3 md:gap-8">
                <p className="text-[14px] text-black/38">{item.n}</p>
                <h3 className="text-[22px] md:text-[26px] font-semibold tracking-tight">{item.title}</h3>
                <p className="text-[16px] md:text-[18px] text-black/52 leading-relaxed max-w-[42ch]">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-[13px] text-black/42">
            A inscrição é gratuita e não garante aprovação. As regras completas de comissão são enviadas aos perfis aprovados.
          </p>
        </div>
      </section>

      <section className="px-5 py-28 md:py-40 bg-black">
        <div className="max-w-[1080px] mx-auto">
          <Reveal className="mb-16">
            <p className="text-[18px] text-white/52 mb-4">Identidade da campanha</p>
            <h2 className="text-[42px] md:text-[68px] font-semibold tracking-[-0.045em] leading-[1.02] max-w-[17ch]">
              Simples o bastante para deixar as pessoas aparecerem.
            </h2>
            <p className="mt-6 text-[18px] md:text-[21px] text-white/52 max-w-[43ch] leading-relaxed">
              Preto, violeta profundo, retratos em tela cheia e uma marca reduzida ao essencial. O programa não ganha
              uma personagem. Ganha pessoas.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] gap-8 items-start">
            <AmbassadorAvatarTile />
            <div className="rounded-[28px] bg-[#111] p-8 md:p-11">
              <div className="flex items-center gap-5">
                <AmbassadorAvatar size={76} />
                <div>
                  <p className="text-[19px] font-semibold">@odontohub.academy</p>
                  <p className="text-[14px] text-white/42">OdontoHub Academy</p>
                </div>
              </div>
              <p className="mt-10 text-[26px] md:text-[36px] font-semibold tracking-[-0.035em] leading-[1.12] whitespace-pre-line">
                {EMBAIXADORES_BIO}
              </p>
              <a href={APPLY_URL} className="mt-9 inline-flex text-[15px] text-[#dfa8ea]">
                Programa de Embaixadores <span className="ml-1">›</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="emb-filme" className="px-5 py-24 md:py-36 bg-[#090909] scroll-mt-24">
        <div className="max-w-[1080px] mx-auto">
          <Reveal className="mb-12">
            <p className="text-[18px] text-white/50 mb-4">Filme de lançamento</p>
            <h2 className="text-[42px] md:text-[68px] font-semibold tracking-[-0.045em] leading-[1.02]">
              Uma ideia pode começar com você.
            </h2>
            <p className="mt-6 text-[18px] text-white/48 max-w-[44ch] leading-relaxed">{EMBAIXADORES_FILM_NOTE}</p>
          </Reveal>
          <Reveal>
            <FilmPlayer shots={EMBAIXADORES_FILM} endSub="Inscreva-se." />
          </Reveal>
          <ol className="mt-14 divide-y divide-white/10 border-y border-white/10 max-w-[860px] mx-auto">
            {EMBAIXADORES_FILM.map((shot) => (
              <li key={`${shot.at}-${shot.beat}`} className="py-7 grid md:grid-cols-[90px_1fr] gap-3 md:gap-8">
                <p className="text-[13px] tabular-nums text-white/35 pt-1">{shot.at}</p>
                <div>
                  <p className="text-[20px] font-semibold tracking-tight whitespace-pre-line">{shot.beat}</p>
                  <p className="mt-2 text-[15px] text-white/42 leading-relaxed">{shot.picture}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-5 py-28 md:py-40 bg-black">
        <div className="max-w-[1080px] mx-auto">
          <Reveal className="mb-16">
            <h2 className="text-[42px] md:text-[68px] font-semibold tracking-[-0.045em] leading-[1.02]">
              Cresça junto.
            </h2>
          </Reveal>
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="rounded-[28px] bg-[#171717] p-8 md:p-11">
              <p className="text-[26px] md:text-[32px] font-semibold tracking-tight">O que você recebe</p>
              <ul className="mt-9 space-y-5">
                {EMBAIXADORES_BENEFITS.map((line) => (
                  <li key={line} className="text-[16px] md:text-[18px] text-white/58 leading-snug border-t border-white/10 pt-5">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[28px] bg-[#27112e] p-8 md:p-11">
              <p className="text-[26px] md:text-[32px] font-semibold tracking-tight">O que orienta o trabalho</p>
              <ul className="mt-9 space-y-5">
                {EMBAIXADORES_RULES.map((line) => (
                  <li key={line} className="text-[16px] md:text-[18px] text-white/62 leading-snug border-t border-white/12 pt-5">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#f5f5f7] text-apple-ink">
        <FeedStudio
          handle="@odontohub.academy"
          bio={EMBAIXADORES_BIO}
          plan={EMBAIXADORES_PLAN}
          feed={EMBAIXADORES_FEED}
          stories={EMBAIXADORES_STORIES}
          squares={EMBAIXADORES_SQUARES}
          highlights={EMBAIXADORES_HIGHLIGHTS}
          modelos={EMBAIXADORES_MODELOS}
          academyOn
          accent={VIOLETA.neo}
          title="A campanha completa."
          intro="Foto de perfil, filme, 12 posts, Stories, carrossel, destaques e modelos para representantes. Tudo pronto para baixar."
          studioBg="#f3edf5"
        />
      </div>

      <section
        className="px-5 py-32 md:py-44 text-center"
        style={{ background: 'linear-gradient(160deg,#5a256b 0%,#2b1033 48%,#080308 100%)' }}
      >
        <div className="max-w-[820px] mx-auto">
          <Reveal>
            <div className="flex justify-center">
              <AmbassadorAvatar size={96} />
            </div>
            <h2 className="mt-10 text-[44px] md:text-[72px] font-semibold tracking-[-0.05em] leading-[0.98]">
              Sua faculdade. Sua voz. Seu próximo passo.
            </h2>
            <p className="text-[19px] md:text-[23px] mt-7 mb-10 text-white/58">
              Programa de Embaixadores OdontoHub Academy.
            </p>
            <a href={APPLY_URL} className="inline-flex items-center rounded-full bg-white text-black text-[16px] px-6 py-3">
              Inscreva-se
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
