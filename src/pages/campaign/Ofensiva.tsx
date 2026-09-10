import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { FeedStudio, FilmPlayer, NinaFace, Reveal } from '../../components/campaign/Art';
import {
  OFENSIVA_BIO,
  OFENSIVA_ARC,
  OFENSIVA_DONT,
  OFENSIVA_FEED,
  OFENSIVA_FILM,
  OFENSIVA_FILM_NOTE,
  OFENSIVA_HIGHLIGHTS,
  OFENSIVA_LINE,
  OFENSIVA_MODELOS,
  OFENSIVA_PLAN,
  OFENSIVA_PLAY,
  OFENSIVA_REPLIES,
  OFENSIVA_SQUARES,
  OFENSIVA_STORIES,
  OFENSIVA_SUB,
} from '../../data/ofensiva';
import { LIMA, START_ACADEMY } from '../../data/feeds';

export function OfensivaCampaign(): React.ReactElement {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-white">
      <Helmet>
        <title>A Nina viu. — Academy</title>
        <meta name="robots" content="noindex" />
        <meta
          name="description"
          content="A Nina viu. Campanha social-first do OdontoHub Academy: a vida do odonter já é a campanha."
        />
      </Helmet>

      <section
        className="relative min-h-[100svh] overflow-hidden"
        style={{ background: 'radial-gradient(circle at 72% 28%, #5b2be0 0%, #251653 24%, #0b0c10 62%)' }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[18%] right-[8%] md:right-[18%] rotate-[7deg] rounded-[28px] bg-[#ec3323] px-7 py-6 w-[240px] md:w-[300px] shadow-2xl">
            <p className="text-[11px] font-black tracking-[.15em]">URGENTE</p>
            <p className="mt-3 text-[22px] md:text-[28px] font-black tracking-tight leading-[.95]">
              estudante diz “hoje eu durmo cedo”
            </p>
          </div>
          <div className="absolute top-[45%] right-[4%] md:right-[11%] -rotate-[5deg] rounded-[24px] bg-[#e8e2d9] text-[#111] p-4 w-[220px] md:w-[270px] shadow-2xl">
            <p className="rounded-[12px] bg-white px-3 py-2 text-[12px]">bom dia doutora, não vou conseguir ir hoje</p>
            <p className="mt-2 ml-auto rounded-[12px] bg-[#d9fdd3] px-3 py-2 text-[12px] w-fit">sem problemas 🥰</p>
          </div>
          <div className="absolute top-[22%] left-[8%] md:left-[17%]">
            <NinaFace size={120} />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-[#0b0c10]/25 to-transparent pointer-events-none" />
        <div className="relative min-h-[100svh] flex flex-col justify-end">
          <div className="max-w-[980px] mx-auto px-5 pt-28 pb-16 md:pb-20 w-full">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}>
              <p className="text-[13px] mb-3" style={{ color: LIMA.neo }}>
                @odontohub.academy · agora
              </p>
              <h1 className="text-[48px] sm:text-[64px] md:text-[80px] font-semibold tracking-tight leading-[0.92] lowercase mb-4">
                {OFENSIVA_LINE}
              </h1>
              <p className="text-[18px] md:text-[24px] max-w-[28ch] mb-8 text-white/70 leading-snug">{OFENSIVA_SUB}</p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
                <a
                  href="#ofensiva-filme"
                  className="inline-flex items-center rounded-full text-[#0b0c10] text-[16px] px-5 py-2.5 font-medium"
                  style={{ background: LIMA.neo }}
                >
                  o filme
                </a>
                <a href={START_ACADEMY} className="text-[16px] text-white/80 hover:text-white">
                  entra <span aria-hidden>›</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:py-32 border-t border-white/10">
        <div className="max-w-[980px] mx-auto">
          <Reveal className="mb-14">
            <p className="text-[13px] mb-4" style={{ color: LIMA.neo }}>
              o duo, sem ser o duo
            </p>
            <h2 className="text-[36px] md:text-[52px] font-semibold tracking-tight leading-[1.05] lowercase max-w-[16ch]">
              amigo chato. não startup.
            </h2>
            <p className="mt-5 text-[16px] md:text-[18px] text-white/55 leading-relaxed max-w-[540px]">
              o brasil ensinou o duolingo a transformar produto em personagem: primeira pessoa, escuta ativa,
              resposta rápida e liberdade pra entrar na cultura. a gente pega o método — não a coruja. a nina já
              estava no jogo. agora ela sabe tudo que aconteceu no box.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-12">
            {OFENSIVA_PLAY.map((item) => (
              <React.Fragment key={item.k}>
                <Reveal>
                  <p className="text-[13px] mb-3 lowercase" style={{ color: LIMA.neo }}>
                    {item.k}
                  </p>
                  <h3 className="text-[22px] md:text-[24px] font-semibold tracking-tight leading-[1.15]">{item.t}</h3>
                  <p className="mt-4 text-[15px] text-white/50 leading-relaxed">{item.d}</p>
                </Reveal>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:py-32 bg-[#111814]">
        <div className="max-w-[980px] mx-auto">
          <Reveal className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <NinaFace size={36} />
              <p className="text-[15px] font-semibold tracking-tight">nina</p>
            </div>
            <h2 className="text-[36px] md:text-[52px] font-semibold tracking-tight leading-[1.05] lowercase">
              a amiga que sabe demais.
            </h2>
            <p className="mt-5 text-[16px] md:text-[18px] text-white/55 leading-relaxed max-w-[540px]">
              não é professora. não é coruja. é a colega que viu o paciente cancelar às 7:03, o kit de resina em 10x
              e o hb20 lavado na véspera da prova. ela não humilha do nada: primeiro reconhece uma verdade, depois
              encontra o pior jeito possível de lembrar dela.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-3">
            {OFENSIVA_REPLIES.map((row) => (
              <React.Fragment key={row.they}>
                <Reveal>
                  <div className="rounded-[22px] px-5 py-5 bg-black/35">
                    <p className="text-[13px] text-white/40 mb-2">eles</p>
                    <p className="text-[16px] leading-snug">{row.they}</p>
                    <p className="text-[13px] mt-4 mb-2" style={{ color: LIMA.neo }}>
                      nina
                    </p>
                    <p className="text-[16px] leading-snug">{row.we}</p>
                  </div>
                </Reveal>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:py-32 bg-[#5b2be0]">
        <div className="max-w-[980px] mx-auto">
          <Reveal className="mb-14">
            <p className="text-[13px] text-[#d7ff52] mb-4">o arco de reativação</p>
            <h2 className="text-[36px] md:text-[56px] font-semibold tracking-tight leading-[1.02] lowercase max-w-[16ch]">
              caso em aberto.
            </h2>
            <p className="mt-5 text-[16px] md:text-[18px] text-white/65 leading-relaxed max-w-[560px]">
              o meme chama. o caso segura. a turma só descobre a conduta quando entra no jogo. curtida não resolve a
              história — xp resolve.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {OFENSIVA_ARC.map((item) => (
              <React.Fragment key={item.n}>
                <Reveal>
                  <div className="h-full rounded-[22px] bg-white/10 p-5 border border-white/10">
                    <p className="text-[12px] text-[#d7ff52] mb-8">{item.n}</p>
                    <h3 className="text-[21px] font-semibold tracking-tight leading-[1.08] lowercase">{item.title}</h3>
                    <p className="mt-4 text-[14px] text-white/55 leading-relaxed">{item.body}</p>
                  </div>
                </Reveal>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section id="ofensiva-filme" className="bg-black px-5 py-20 md:py-28 scroll-mt-24">
        <div className="max-w-[980px] mx-auto">
          <Reveal className="mb-12">
            <p className="text-[13px] mb-3" style={{ color: LIMA.neo }}>
              o filme
            </p>
            <h2 className="text-[40px] md:text-[64px] font-semibold tracking-tight lowercase">{OFENSIVA_LINE}</h2>
            <p className="mt-5 text-[16px] md:text-[19px] text-white/50 max-w-[520px] leading-relaxed">{OFENSIVA_FILM_NOTE}</p>
          </Reveal>
          <Reveal>
            <FilmPlayer shots={OFENSIVA_FILM} endSub="a nina viu." />
          </Reveal>
          <ol className="mt-16 divide-y divide-white/10 border-y border-white/10 max-w-[820px] mx-auto">
            {OFENSIVA_FILM.map((shot) => (
              <li key={`${shot.at}-${shot.beat}`} className="py-7 grid md:grid-cols-[88px_1fr] gap-3 md:gap-8">
                <p className="text-[13px] tabular-nums text-white/40 pt-1">{shot.at}</p>
                <div>
                  <p className="text-[20px] font-semibold tracking-tight whitespace-pre-line">{shot.beat}</p>
                  <p className="mt-2 text-[15px] text-white/45 leading-relaxed">{shot.picture}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-5 py-24 md:py-32 border-t border-white/10">
        <div className="max-w-[980px] mx-auto">
          <Reveal className="mb-10">
            <h2 className="text-[36px] md:text-[52px] font-semibold tracking-tight lowercase">não posta se</h2>
          </Reveal>
          <ul className="space-y-4 max-w-[640px]">
            {OFENSIVA_DONT.map((line) => (
              <li key={line} className="text-[16px] md:text-[18px] text-white/60 leading-snug pl-4 border-l-2" style={{ borderColor: LIMA.neo }}>
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="bg-[#f5f5f7] text-apple-ink">
        <FeedStudio
          handle="@odontohub.academy"
          bio={OFENSIVA_BIO}
          plan={OFENSIVA_PLAN}
          feed={OFENSIVA_FEED}
          stories={OFENSIVA_STORIES}
          squares={OFENSIVA_SQUARES}
          highlights={OFENSIVA_HIGHLIGHTS}
          modelos={OFENSIVA_MODELOS}
          academyOn
          accent={LIMA.neo}
          title="os posts."
          intro="plantão, whatsapp, starter pack, wrapped, quiz, comentário e uma única notificação. a personagem amarra; o layout muda."
          studioBg={LIMA.wash}
        />
      </div>

      <section className="px-5 py-28 md:py-40 text-center" style={{ background: LIMA.neo }}>
        <div className="max-w-[780px] mx-auto text-[#0b0c10]">
          <Reveal>
            <h2 className="text-[40px] md:text-[64px] font-semibold tracking-tight lowercase mb-4">a nina viu.</h2>
            <p className="text-[18px] md:text-[22px] mb-10 text-black/60">agora faz 3 casos antes que ela conte no grupo.</p>
            <a href={START_ACADEMY} className="inline-flex items-center rounded-full bg-[#0b0c10] text-white text-[16px] px-5 py-2.5">
              entra
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
