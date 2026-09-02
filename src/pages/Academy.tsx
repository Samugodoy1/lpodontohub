import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { DarkCTA, Reveal, START_ACADEMY } from '../components/shared/Apple';

const AcademyDevice = () => (
  <div className="apple-device-dark overflow-hidden text-left">
    <div className="p-7 md:p-10">
      <p className="text-[13px] text-white/40 mb-2">Boa noite, Samuel · 7º semestre</p>
      <h3 className="text-[22px] md:text-[28px] font-semibold tracking-tight text-white leading-[1.12] mb-8">
        Tudo pronto para o próximo atendimento.
      </h3>
      <div className="rounded-[22px] bg-white/[0.08] p-6 md:p-7">
        <p className="text-[11px] uppercase tracking-[0.14em] text-white/35 mb-2">Quinta, 14:00 · Cadeira 08</p>
        <p className="text-[22px] md:text-[26px] font-semibold text-white tracking-tight">Marcos Roberto Jr.</p>
        <p className="mt-2 text-[14px] text-white/50">Dentística · Isolamento absoluto</p>
      </div>
      <div className="mt-4 rounded-[18px] bg-white/5 px-5 py-4 flex items-center justify-between">
        <div>
          <p className="text-[11px] text-white/35">Checklist</p>
          <p className="text-[14px] text-white/80">Kit de isolamento separado</p>
        </div>
        <span className="text-[#30d158] text-[13px]">Pronto</span>
      </div>
    </div>
  </div>
);

export default function Academy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>OdontoHub Academy — Para a clínica da faculdade</title>
        <meta
          name="description"
          content="OdontoHub Academy organiza checklists, evoluções e o Modo Box para estudantes de odontologia. Grátis para começar."
        />
        <link rel="canonical" href="https://www.odontohub.app.br/academy" />
        <meta property="og:title" content="OdontoHub Academy — Para a clínica da faculdade" />
        <meta property="og:url" content="https://www.odontohub.app.br/academy" />
      </Helmet>

      <section className="relative overflow-hidden bg-black pt-28 md:pt-36 pb-16 md:pb-24 px-5">
        <div className="max-w-[980px] mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}>
            <p className="text-[19px] md:text-[21px] font-semibold tracking-tight text-[#f5f5f7] mb-3">Academy</p>
            <h1 className="apple-display text-[40px] sm:text-[56px] md:text-[72px] mb-5">
              Para a clínica
              <br />
              da faculdade.
            </h1>
            <p className="apple-subhead text-[19px] md:text-[24px] max-w-[560px] mx-auto mb-9">
              Checklists. Evolução. Modo Box.
              <br className="hidden md:block" /> Você entra no atendimento com a cabeça limpa.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <a href={START_ACADEMY} className="apple-btn">
                Começar
              </a>
              <a href="#como-funciona" className="apple-link !text-[#2997ff]">
                Saiba mais <span aria-hidden>›</span>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative mt-14 md:mt-20 max-w-[640px] mx-auto"
          >
            <AcademyDevice />
          </motion.div>
        </div>
      </section>

      <section className="bg-black px-5 py-24 md:py-32">
        <div className="max-w-[820px] mx-auto text-center">
          <Reveal>
            <h2 className="apple-display text-[34px] md:text-[52px]">
              Menos nervosismo
              <br />
              antes de entrar no box.
            </h2>
            <p className="apple-subhead text-[19px] md:text-[24px] mt-6 max-w-[520px] mx-auto">
              A faculdade já exige o suficiente. O Academy organiza o caso. Você atende.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-apple-surface text-apple-ink px-5 py-24 md:py-32">
        <div className="max-w-[980px] mx-auto">
          <Reveal className="text-center mb-14">
            <h2 className="apple-display-ink text-[40px] md:text-[56px]">O essencial. Nada além.</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {[
              { t: 'Dossiê de pacientes', d: 'Dados, planejamento e anotações. Um lugar. Sem papéis soltos.' },
              { t: 'Checklists por disciplina', d: 'O que levar. O que esterilizar. Sem esquecer o instrumental.' },
              { t: 'Modo Box', d: 'Letras grandes. Celular apoiado. Sem tocar a tela de luvas.' },
              { t: 'Galeria segura', d: 'Fotos do caso no paciente. Fora do rolo pessoal.' },
              { t: 'Evoluções prontas', d: 'Modelos limpos. Assinatura do preceptor em segundos.' },
              { t: 'Progresso sem cobrança', d: 'O que você já fez. Sem ranking. Sem gamificação.' },
            ].map((item) => (
              <React.Fragment key={item.t}>
                <Reveal className="h-full">
                  <div className="h-full rounded-[28px] bg-white px-8 py-10">
                    <h3 className="text-[24px] font-semibold tracking-tight mb-3">{item.t}</h3>
                    <p className="text-[17px] text-apple-gray leading-relaxed">{item.d}</p>
                  </div>
                </Reveal>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="bg-white text-apple-ink px-5 py-24 md:py-32 scroll-mt-12">
        <div className="max-w-[980px] mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className="apple-display-ink text-[40px] md:text-[56px]">Três momentos.</h2>
          </Reveal>
          <div className="space-y-16 md:space-y-20">
            {[
              { n: '01', t: 'Antes.', d: 'Separe o instrumental pelo checklist da disciplina. Nada esquecido na esterilização.' },
              { n: '02', t: 'No box.', d: 'Modo Box: alto contraste, passos visíveis a um metro. Biossegurança intacta.' },
              { n: '03', t: 'Depois.', d: 'Fotos no paciente. Evolução rascunhada. Feche o app e vá embora.' },
            ].map((item) => (
              <React.Fragment key={item.n}>
                <Reveal>
                  <p className="text-[13px] text-apple-gray mb-3 tabular-nums">{item.n}</p>
                  <h3 className="text-[28px] md:text-[40px] font-semibold tracking-tight leading-[1.12]">{item.t}</h3>
                  <p className="apple-subhead text-[17px] md:text-[21px] mt-3 max-w-[560px]">{item.d}</p>
                </Reveal>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-24 md:py-32">
        <div className="max-w-[980px] mx-auto grid md:grid-cols-2 gap-14 items-center">
          <Reveal>
            <p className="text-[19px] font-semibold tracking-tight text-[#f5f5f7] mb-2">Modo Box</p>
            <h2 className="apple-display text-[40px] md:text-[56px]">
              A lista de passos,
              <br />
              visível de longe.
            </h2>
            <p className="apple-subhead text-[19px] mt-5 max-w-[440px]">
              Luvas. Sem toque. O celular apoiado. O próximo passo, grande o suficiente para só olhar.
            </p>
          </Reveal>
          <Reveal>
            <div className="apple-phone mx-auto w-[260px] aspect-[9/19]">
              <div className="h-full w-full rounded-[36px] overflow-hidden bg-[#fbfbfd] text-left px-6 pt-14">
                <div className="absolute" />
                <p className="text-[12px] text-apple-gray mb-6">Exodontia simples</p>
                <h6 className="text-[22px] font-semibold tracking-tight text-apple-ink mb-8">Passo 3 de 4</h6>
                <div className="space-y-3 text-[14px] text-apple-ink">
                  <p className="text-apple-gray line-through">Antissepsia</p>
                  <p className="text-apple-gray line-through">Anestesia</p>
                  <p className="font-semibold">Sindesmotomia</p>
                  <p className="text-apple-gray">Luxação</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="planos" className="bg-white text-apple-ink px-5 py-24 md:py-32 scroll-mt-12">
        <div className="max-w-[980px] mx-auto">
          <Reveal className="text-center mb-14">
            <h2 className="apple-display-ink text-[40px] md:text-[56px]">Escolha o Academy.</h2>
            <p className="apple-subhead text-[19px] mt-4">Grátis para começar. Sem anúncios. Sem venda de dados.</p>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {[
              {
                name: 'Grátis',
                price: 'R$ 0',
                note: 'Para sempre',
                feats: ['Até 3 pacientes', 'Agenda básica', 'Checklists essenciais', 'Até 50 fotos'],
                dark: false,
              },
              {
                name: 'Clínico',
                price: 'R$ 12,90',
                note: '/mês',
                feats: ['Até 15 pacientes', 'Até 500 fotos', 'Todas as disciplinas', 'Evolução em PDF'],
                dark: false,
              },
              {
                name: 'Ilimitado',
                price: 'R$ 24,90',
                note: '/mês',
                feats: ['Tudo ilimitado', 'Modo Box', 'Ficha completa em PDF', 'Suporte na clínica'],
                dark: true,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[28px] p-8 md:p-10 flex flex-col ${plan.dark ? 'bg-[#1d1d1f] text-white' : 'bg-apple-surface text-apple-ink'}`}
              >
                <h3 className="text-[24px] font-semibold tracking-tight">{plan.name}</h3>
                <p className="mt-4 text-[40px] font-semibold tracking-tight">
                  {plan.price}
                  <span className={`text-[17px] font-normal ${plan.dark ? 'text-white/40' : 'text-apple-gray'}`}> {plan.note}</span>
                </p>
                <ul className={`space-y-3 text-[14px] mt-8 mb-10 flex-grow ${plan.dark ? 'text-white/80' : 'text-apple-ink/80'}`}>
                  {plan.feats.map((f) => (
                    <li key={f}>– {f}</li>
                  ))}
                </ul>
                <a href={START_ACADEMY} className={plan.dark ? 'apple-btn-light w-full' : 'apple-btn w-full'}>
                  Começar
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-apple-surface text-apple-ink px-5 py-24 md:py-32">
        <div className="max-w-[680px] mx-auto">
          <h2 className="apple-display-ink text-[34px] md:text-[48px] text-center mb-10">Perguntas frequentes</h2>
          <div className="divide-y divide-apple-line border-y border-apple-line">
            {[
              {
                q: 'O Academy substitui o prontuário da faculdade?',
                a: 'Não. É o seu organizador pessoal. A ficha oficial continua no sistema ou no papel da universidade.',
              },
              {
                q: 'A conta grátis expira?',
                a: 'Não. Até 3 pacientes e 50 fotos, para sempre. O Ilimitado existe quando o arquivo crescer.',
              },
              {
                q: 'Funciona sem internet na clínica?',
                a: 'Sim. Salva no aparelho e sincroniza quando o sinal volta.',
              },
              {
                q: 'Como montar o relatório de fim de semestre?',
                a: 'No Ilimitado, cada caso vira um PDF com histórico e fotos em ordem.',
              },
            ].map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none text-[17px] font-semibold tracking-tight">
                  {faq.q}
                  <span className="text-apple-gray text-[22px] ml-6 group-open:rotate-45 transition-transform leading-none">+</span>
                </summary>
                <p className="pt-3 pr-10 text-[15px] text-apple-gray leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-10 text-[13px] text-apple-gray text-center">
            Ferramenta de apoio pessoal. Siga sempre os preceptores da sua universidade.
          </p>
        </div>
      </section>

      <section className="bg-white text-apple-ink px-5 py-24">
        <div className="max-w-[680px] mx-auto text-center">
          <h2 className="apple-display-ink text-[34px] md:text-[48px] mb-4">Acabou de se formar?</h2>
          <p className="apple-subhead text-[19px] mb-8">Leve o arquivo do Academy para o OdontoHub. Sem recomeçar do zero.</p>
          <Link to="/" className="apple-link">
            Conhecer o OdontoHub <span aria-hidden>›</span>
          </Link>
        </div>
      </section>

      <DarkCTA title="Entre na clínica com tudo sob controle." subtitle="Grátis para começar." href={START_ACADEMY} />
    </div>
  );
}
