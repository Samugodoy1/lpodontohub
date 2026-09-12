import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import {
  AmbassadorAvatar,
  AmbassadorAvatarTile,
  FeedStudio,
  FilmPlayer,
  NinaFace,
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
import { LIMA, VIOLETA } from '../../data/feeds';

const APPLY_URL = '/academy/embaixadores#form';

export function EmbaixadoresCampaign(): React.ReactElement {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-white">
      <Helmet>
        <title>Todo grupo tem essa pessoa. — Embaixadores Academy</title>
        <meta name="robots" content="noindex" />
        <meta
          name="description"
          content="Campanha de recrutamento de representantes do OdontoHub Academy."
        />
      </Helmet>

      <section
        className="relative min-h-[100svh] overflow-hidden"
        style={{
          background:
            'radial-gradient(circle at 78% 24%, rgba(91,43,224,.9) 0%, rgba(37,22,83,.82) 24%, #0b0c10 64%)',
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[14%] right-[5%] md:right-[14%] rotate-[6deg] rounded-[24px] bg-[#e8e2d9] text-[#111] p-4 w-[235px] md:w-[290px] shadow-2xl">
            <p className="rounded-[12px] bg-white px-3 py-2 text-[12px]">gente qual material amanhã???</p>
            <p className="mt-2 ml-auto rounded-[12px] bg-[#d9fdd3] px-3 py-2 text-[12px] w-fit">
              calma. fiz o checklist
            </p>
          </div>
          <div className="absolute top-[39%] right-[2%] md:right-[8%] -rotate-[5deg] rounded-[24px] bg-[#d7ff52] text-[#111] p-5 w-[220px] md:w-[270px] shadow-2xl">
            <p className="text-[11px] font-black tracking-[.14em]">NINA INVESTIGA</p>
            <p className="mt-3 text-[22px] md:text-[26px] font-black tracking-tight leading-[.95]">
              pessoa útil demais é vista salvando a turma
            </p>
          </div>
          <div className="absolute top-[18%] left-[8%] md:left-[16%]">
            <AmbassadorAvatar size={126} />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-[#0b0c10]/30 to-transparent pointer-events-none" />
        <div className="relative min-h-[100svh] flex flex-col justify-end">
          <div className="max-w-[980px] mx-auto px-5 pt-32 pb-16 md:pb-20 w-full">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className="text-[13px] mb-3" style={{ color: LIMA.neo }}>
                recrutamento · representantes Academy
              </p>
              <h1 className="text-[46px] sm:text-[62px] md:text-[80px] font-semibold tracking-tight leading-[0.92] lowercase max-w-[12ch] mb-5">
                {EMBAIXADORES_LINE}
              </h1>
              <p className="text-[18px] md:text-[23px] max-w-[35ch] mb-8 text-white/70 leading-snug">
                {EMBAIXADORES_SUB}
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
                <a
                  href={APPLY_URL}
                  className="inline-flex items-center rounded-full text-[#0b0c10] text-[16px] px-5 py-2.5 font-medium"
                  style={{ background: LIMA.neo }}
                >
                  inscrever meu perfil
                </a>
                <a href="#emb-filme" className="text-[16px] text-white/75 hover:text-white">
                  ver o filme <span aria-hidden>›</span>
                </a>
              </div>
              <p className="mt-6 text-[12px] text-white/35">
                inscrição gratuita · perfil sujeito a análise
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:py-32 border-t border-white/10">
        <div className="max-w-[980px] mx-auto">
          <Reveal className="mb-14">
            <p className="text-[13px] mb-4" style={{ color: LIMA.neo }}>
              a ideia
            </p>
            <h2 className="text-[36px] md:text-[54px] font-semibold tracking-tight leading-[1.02] lowercase max-w-[16ch]">
              recrutar quem já representa a turma.
            </h2>
            <p className="mt-5 text-[16px] md:text-[18px] text-white/55 leading-relaxed max-w-[590px]">
              Em vez de pedir “influenciadores apaixonados pela marca”, a Nina reconhece uma pessoa que toda sala
              conhece: quem organiza, explica e faz conteúdo que realmente circula. O desejo vem do reconhecimento —
              “essa pessoa sou eu” ou “essa pessoa é minha dupla”.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-10">
            {EMBAIXADORES_INSIGHT.map((item) => (
              <React.Fragment key={item.k}>
                <Reveal>
                  <p className="text-[13px] mb-3 lowercase" style={{ color: LIMA.neo }}>
                    {item.k}
                  </p>
                  <h3 className="text-[22px] font-semibold tracking-tight leading-[1.12]">{item.t}</h3>
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
              <NinaFace size={38} />
              <p className="text-[15px] font-semibold tracking-tight">nina · recrutadora nada corporativa</p>
            </div>
            <h2 className="text-[36px] md:text-[52px] font-semibold tracking-tight leading-[1.05] lowercase max-w-[17ch]">
              ela não procura currículo. procura evidência.
            </h2>
            <p className="mt-5 text-[16px] md:text-[18px] text-white/55 leading-relaxed max-w-[610px]">
              Checklist enviado, story salvo, dúvida respondida, conteúdo que chega no grupo. A Nina observa o
              comportamento, provoca a identificação e chama para o programa. O humor está no reconhecimento da
              rotina — não em humilhar o estudante.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              ['“mas eu só tenho 1.200 seguidores”', 'ótimo. e quantos deles realmente estão na sua faculdade?'],
              ['“não sei fazer publi”', 'melhor ainda. a gente está procurando gente, não intervalo comercial.'],
              ['“minha turma vive pedindo meu resumo”', 'isso não é uma frase. é uma candidatura.'],
              ['“posso falar do meu jeito?”', 'deve. roteiro engessado já basta a ficha clínica.'],
            ].map(([question, answer]) => (
              <React.Fragment key={question}>
                <Reveal>
                  <div className="h-full rounded-[22px] px-5 py-5 bg-black/35">
                    <p className="text-[13px] text-white/40 mb-2">odonter</p>
                    <p className="text-[16px] leading-snug">{question}</p>
                    <p className="text-[13px] mt-4 mb-2" style={{ color: LIMA.neo }}>
                      nina
                    </p>
                    <p className="text-[16px] leading-snug">{answer}</p>
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
            <p className="text-[13px] text-[#d7ff52] mb-4">a jornada</p>
            <h2 className="text-[36px] md:text-[56px] font-semibold tracking-tight leading-[1.02] lowercase">
              sem processo misterioso.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {EMBAIXADORES_PROCESS.map((item) => (
              <React.Fragment key={item.n}>
                <Reveal>
                  <div className="h-full rounded-[22px] bg-white/10 p-5 border border-white/10">
                    <p className="text-[12px] text-[#d7ff52] mb-8">{item.n}</p>
                    <h3 className="text-[20px] font-semibold tracking-tight leading-[1.08] lowercase">{item.title}</h3>
                    <p className="mt-4 text-[14px] text-white/55 leading-relaxed">{item.body}</p>
                  </div>
                </Reveal>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:py-32 bg-[#f5f5f7] text-[#1d1d1f]">
        <div className="max-w-[980px] mx-auto">
          <Reveal className="mb-12">
            <p className="text-[13px] mb-4 text-[#5b2be0]">identidade de campanha</p>
            <h2 className="text-[38px] md:text-[56px] font-semibold tracking-tight leading-[1.02] lowercase">
              a nina está recrutando.
            </h2>
            <p className="mt-5 text-[16px] md:text-[18px] text-black/50 leading-relaxed max-w-[590px]">
              Durante o lançamento, a foto do Academy vira a Nina com selo violeta de representante. O lima chama
              atenção no feed; o violeta separa o programa da campanha regular.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] gap-10 items-start">
            <AmbassadorAvatarTile />
            <div className="rounded-[28px] bg-white p-8 md:p-10">
              <div className="flex items-center gap-4">
                <AmbassadorAvatar size={72} />
                <div>
                  <p className="text-[18px] font-semibold">@odontohub.academy</p>
                  <p className="text-[13px] text-black/45">OdontoHub Academy</p>
                </div>
              </div>
              <p className="mt-8 text-[24px] md:text-[30px] font-semibold tracking-tight leading-[1.16] whitespace-pre-line">
                {EMBAIXADORES_BIO}
              </p>
              <a href={APPLY_URL} className="mt-8 inline-flex text-[14px] text-[#5b2be0]">
                odontohub.app/academy/embaixadores
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="emb-filme" className="bg-black px-5 py-20 md:py-28 scroll-mt-24">
        <div className="max-w-[980px] mx-auto">
          <Reveal className="mb-12">
            <p className="text-[13px] mb-3" style={{ color: LIMA.neo }}>
              filme de lançamento · 16s
            </p>
            <h2 className="text-[40px] md:text-[64px] font-semibold tracking-tight lowercase">
              todo grupo tem essa pessoa.
            </h2>
            <p className="mt-5 text-[16px] md:text-[19px] text-white/50 max-w-[570px] leading-relaxed">
              {EMBAIXADORES_FILM_NOTE}
            </p>
          </Reveal>
          <Reveal>
            <FilmPlayer shots={EMBAIXADORES_FILM} endSub="inscreva seu perfil." />
          </Reveal>
          <ol className="mt-16 divide-y divide-white/10 border-y border-white/10 max-w-[820px] mx-auto">
            {EMBAIXADORES_FILM.map((shot) => (
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
        <div className="max-w-[980px] mx-auto grid lg:grid-cols-2 gap-16">
          <Reveal>
            <p className="text-[13px] mb-4" style={{ color: LIMA.neo }}>
              o que chega para aprovados
            </p>
            <h2 className="text-[34px] md:text-[46px] font-semibold tracking-tight lowercase">benefício sem fumaça.</h2>
            <ul className="mt-8 space-y-4">
              {EMBAIXADORES_BENEFITS.map((line) => (
                <li key={line} className="text-[16px] text-white/65 leading-snug pl-4 border-l-2 border-[#d7ff52]">
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <p className="text-[13px] mb-4 text-[#ff6482]">o combinado</p>
            <h2 className="text-[34px] md:text-[46px] font-semibold tracking-tight lowercase">criatividade com limite ético.</h2>
            <ul className="mt-8 space-y-4">
              {EMBAIXADORES_RULES.map((line) => (
                <li key={line} className="text-[16px] text-white/65 leading-snug pl-4 border-l-2 border-[#ff6482]">
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>
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
          title="a campanha completa."
          intro="12 posts de feed, Stories, carrossel, destaques e modelos para quem for selecionado. Uma ideia; formatos que não parecem o mesmo post repetido."
          studioBg="#f0fbf3"
        />
      </div>

      <section className="px-5 py-28 md:py-40 text-center" style={{ background: LIMA.neo }}>
        <div className="max-w-[780px] mx-auto text-[#0b0c10]">
          <Reveal>
            <AmbassadorAvatar size={92} />
            <h2 className="mt-8 text-[40px] md:text-[64px] font-semibold tracking-tight lowercase leading-[.98]">
              talvez a nina já tenha encontrado.
            </h2>
            <p className="text-[18px] md:text-[22px] mt-5 mb-10 text-black/60">
              representa sua turma? representa o Academy.
            </p>
            <a
              href={APPLY_URL}
              className="inline-flex items-center rounded-full bg-[#0b0c10] text-white text-[16px] px-5 py-2.5"
            >
              inscrever meu perfil
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
