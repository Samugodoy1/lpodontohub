import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  Gift,
  HelpCircle,
  Minus,
  Plus,
  Smartphone,
  Sparkles,
  Trophy,
  Users,
  Zap,
  XCircle,
} from 'lucide-react';
import { Button, Section } from '../components/shared/UI';
import { db } from '../lib/firebase';
import { collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from '../lib/firestoreUtils';

const Benefit = ({ icon: Icon, title, children }: any) => (
  <div className="rounded-[28px] bg-white p-8 border border-[#ece9e5]">
    <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1e9] text-[#ff6422]">
      <Icon size={24} strokeWidth={1.8} />
    </div>
    <h3 className="mb-3 text-lg font-bold tracking-tight text-[#171717]">{title}</h3>
    <p className="text-sm font-medium leading-relaxed text-[#171717]/55">{children}</p>
  </div>
);

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#ebe8e4] last:border-0">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-6 text-left">
        <span className="pr-6 font-bold text-[#171717]">{question}</span>
        {open ? <Minus size={18} className="shrink-0 text-[#ff6422]" /> : <Plus size={18} className="shrink-0 text-[#aaa]" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
            <p className="pb-6 pr-8 text-sm font-medium leading-relaxed text-[#171717]/55">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Ambassadors() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '', instagram: '', tiktok: '', whatsapp: '', faculty: '', period: '', cityState: '',
    attendingClinic: 'Sim', postsPerWeek: 0, followers: '', storyViews: '', motivation: '', contentStyle: '', termsAccepted: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      const ref = doc(collection(db, 'ambassador_applications'));
      await setDoc(ref, { ...formData, postsPerWeek: Number(formData.postsPerWeek), createdAt: serverTimestamp() });
      setSubmitted(true);
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'ambassador_applications');
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    ['fullName', 'Nome completo', 'text', 'Seu nome'],
    ['instagram', 'Instagram', 'text', '@seuusuario'],
    ['tiktok', 'TikTok', 'text', '@seuusuario'],
    ['whatsapp', 'WhatsApp', 'text', '(00) 00000-0000'],
    ['faculty', 'Faculdade', 'text', 'Ex.: USP'],
    ['period', 'Período', 'text', 'Ex.: 7º semestre'],
    ['cityState', 'Cidade / Estado', 'text', 'Cidade - UF'],
  ];

  return (
    <div className="min-h-screen bg-[#fbf8f5] text-[#171717]">
      <Section className="overflow-hidden px-5 pb-28 pt-12 md:pt-20">
        <div className="mx-auto max-w-5xl text-center">
          <Link to="/academy" className="mb-16 inline-flex items-center gap-2 text-xs font-bold text-[#171717]/40 transition hover:text-[#ff6422]">
            <ChevronLeft size={16} /> Voltar para o Academy
          </Link>
          <p className="mb-6 text-sm font-semibold text-[#ff6422]">OdontoHub Academy · Embaixadores</p>
          <h1 className="mx-auto max-w-4xl text-[2.8rem] font-bold leading-[1.02] tracking-[-0.04em] md:text-7xl">
            Faça parte do começo.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg font-medium leading-relaxed text-[#171717]/55 md:text-xl">
            O novo OdontoHub Academy está chegando. E queremos alguns estudantes ao nosso lado desde o primeiro capítulo.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#inscricao"><Button>Quero ser embaixador</Button></a>
            <Link to="/academy/representantes" className="inline-flex items-center gap-2 px-5 py-3 font-bold text-[#ff6422]">Já faço parte <ArrowRight size={17} /></Link>
          </div>
          <p className="mt-8 text-xs font-semibold text-[#171717]/30">Primeiro grupo de embaixadores · inscrições sujeitas a análise</p>
        </div>
      </Section>

      <Section id="programa" className="border-y border-[#ebe8e4] bg-white px-5 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-bold text-[#ff6422]">O que é o Academy?</p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl">Um jeito diferente de estudar e viver a clínica.</h2>
            <p className="mt-7 text-lg font-medium leading-relaxed text-[#171717]/55">
              O OdontoHub Academy é um assistente clínico para estudantes de Odontologia. Ele transforma a rotina da graduação em uma experiência mais prática: você revisa casos, toma decisões, organiza sua rotina clínica e continua evoluindo mesmo fora do box.
            </p>
            <p className="mt-5 text-lg font-medium leading-relaxed text-[#171717]/55">
              Na nova versão, o Academy ganhou uma camada de jogo: <strong className="text-[#171717]">XP, fases, desafios e ofensiva.</strong> A ideia é simples: praticar um pouco hoje para chegar mais preparado amanhã.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-[28px] bg-[#fff4ed] p-8"><Sparkles className="mb-6 text-[#ff6422]" size={25} /><h3 className="text-xl font-bold">Prática</h3><p className="mt-3 text-sm font-medium leading-relaxed text-[#171717]/55">Casos clínicos curtos para transformar conhecimento em decisão.</p></div>
            <div className="rounded-[28px] bg-[#fff4ed] p-8"><Trophy className="mb-6 text-[#ff6422]" size={25} /><h3 className="text-xl font-bold">Progressão</h3><p className="mt-3 text-sm font-medium leading-relaxed text-[#171717]/55">XP, fases e ofensiva para criar uma rotina que você queira manter.</p></div>
            <div className="rounded-[28px] bg-[#fff4ed] p-8"><Smartphone className="mb-6 text-[#ff6422]" size={25} /><h3 className="text-xl font-bold">Clínica</h3><p className="mt-3 text-sm font-medium leading-relaxed text-[#171717]/55">Organização para chegar no atendimento sabendo o que precisa ser feito.</p></div>
          </div>
        </div>
      </Section>

      <Section className="px-5 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 text-sm font-bold text-[#ff6422]">O Programa de Embaixadores</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Não é só um cupom.</h2>
            <p className="mt-7 text-lg font-medium leading-relaxed text-[#171717]/55">
              É uma forma de fazer parte do lançamento do novo Academy, apresentar a plataforma para outros estudantes e ter benefícios por ajudar a construir essa comunidade desde o início.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Benefit icon={Users} title="Faça parte">Entre para o primeiro grupo de estudantes que vai acompanhar essa nova fase do Academy.</Benefit>
            <Benefit icon={Zap} title="Código personalizado">Você recebe um código próprio para compartilhar com sua audiência.</Benefit>
            <Benefit icon={Trophy} title="Comissão recorrente">Cada assinatura realizada pelo seu código gera comissão recorrente enquanto permanecer ativa.</Benefit>
            <Benefit icon={Gift} title="Benefícios exclusivos">Kit oficial, acesso antecipado e materiais para ajudar você a apresentar o Academy.</Benefit>
          </div>
        </div>
      </Section>

      <Section className="bg-[#171717] px-5 py-28 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-6 text-sm font-bold text-[#ff8a55]">Como funciona</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Você entra. Conhece. Compartilha. Evolui junto.</h2>
          <div className="mt-16 grid gap-10 md:grid-cols-4">
            {[
              ['01', 'Inscrição', 'Envie seu perfil e conte um pouco sobre sua rotina.'],
              ['02', 'Seleção', 'Analisamos os perfis e formamos o primeiro grupo.'],
              ['03', 'Ativação', 'Você recebe seu código, materiais e orientações do programa.'],
              ['04', 'Indicação', 'Compartilhe o Academy com sua audiência e acompanhe suas indicações.'],
            ].map(([n, title, desc]) => (
              <div key={n} className="text-left">
                <span className="text-xs font-bold text-white/35">{n}</span>
                <h3 className="mt-4 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-white/55">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="px-5 py-28">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-5 text-sm font-bold text-[#ff6422]">Quem procuramos</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Estudantes que têm algo real para compartilhar.</h2>
            <p className="mt-7 text-lg font-medium leading-relaxed text-[#171717]/55">Não precisamos do maior perfil. Precisamos de pessoas que realmente vivam a Odontologia e tenham uma comunicação responsável com outros estudantes.</p>
          </div>
          <div className="rounded-[32px] bg-white p-8 md:p-10 border border-[#ebe8e4]">
            <div className="space-y-5">
              {['Cursa Odontologia e vive ou está chegando à clínica.', 'Produz conteúdo sobre estudos, rotina ou atendimentos.', 'Tem conexão real com outros estudantes.', 'Se identifica com uma comunicação simples, útil e responsável.'].map(item => <div key={item} className="flex gap-4"><CheckCircle2 className="mt-0.5 shrink-0 text-[#ff6422]" size={21} /><span className="font-semibold leading-relaxed">{item}</span></div>)}
            </div>
            <div className="my-8 h-px bg-[#ebe8e4]" />
            <p className="text-sm font-medium leading-relaxed text-[#171717]/45">Seguidores ajudam, mas não definem a seleção. A conexão com a comunidade vem primeiro.</p>
          </div>
        </div>
      </Section>

      <Section id="inscricao" className="border-t border-[#ebe8e4] bg-white px-5 py-28">
        <div className="mx-auto max-w-3xl">
          <div className="mb-14 text-center">
            <p className="mb-5 text-sm font-bold text-[#ff6422]">Primeiro grupo</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Quero fazer parte.</h2>
            <p className="mt-5 text-lg font-medium text-[#171717]/50">Conte um pouco sobre você. Vamos conhecer seu perfil.</p>
          </div>
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={handleSubmit} className="rounded-[32px] border border-[#ebe8e4] bg-[#fbf8f5] p-7 md:p-12">
                <div className="grid gap-6 md:grid-cols-2">
                  {fields.map(([name, label, type, placeholder]) => <label key={name} className="space-y-2"><span className="text-xs font-bold text-[#171717]/45">{label}</span><input required={['fullName','instagram','whatsapp','faculty','period','cityState'].includes(name)} type={type} name={name} value={(formData as any)[name]} onChange={handleChange} placeholder={placeholder} className="apple-input w-full" /></label>)}
                  <label className="space-y-2"><span className="text-xs font-bold text-[#171717]/45">Já atende em clínica?</span><select name="attendingClinic" value={formData.attendingClinic} onChange={handleChange} className="apple-input w-full"><option>Sim</option><option>Não, mas começo em breve</option><option>Ainda não</option></select></label>
                  <label className="space-y-2"><span className="text-xs font-bold text-[#171717]/45">Posts por semana</span><input required type="number" min="0" name="postsPerWeek" value={formData.postsPerWeek} onChange={handleChange} className="apple-input w-full" /></label>
                  <label className="space-y-2"><span className="text-xs font-bold text-[#171717]/45">Seguidores</span><input required type="text" name="followers" value={formData.followers} onChange={handleChange} placeholder="Ex.: 3k" className="apple-input w-full" /></label>
                  <label className="space-y-2"><span className="text-xs font-bold text-[#171717]/45">Média de views nos Stories</span><input required type="text" name="storyViews" value={formData.storyViews} onChange={handleChange} placeholder="Ex.: 500" className="apple-input w-full" /></label>
                </div>
                <div className="mt-6 space-y-6">
                  <label className="block space-y-2"><span className="text-xs font-bold text-[#171717]/45">Por que você quer ser embaixador?</span><textarea required rows={4} name="motivation" value={formData.motivation} onChange={handleChange} placeholder="Conte sobre sua conexão com o Academy." className="apple-input w-full resize-none" /></label>
                  <label className="block space-y-2"><span className="text-xs font-bold text-[#171717]/45">Como você fala sobre sua rotina?</span><textarea required rows={4} name="contentStyle" value={formData.contentStyle} onChange={handleChange} placeholder="Conte um pouco sobre seu estilo de conteúdo." className="apple-input w-full resize-none" /></label>
                  <label className="flex items-start gap-3"><input required type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} className="mt-1 h-4 w-4" /><span className="text-xs font-semibold leading-relaxed text-[#171717]/50">Li o programa. Minha comunicação com outros estudantes será responsável.</span></label>
                  <Button type="submit" disabled={loading} className="w-full py-6 rounded-2xl">{loading ? 'Enviando...' : 'Enviar inscrição'}</Button>
                </div>
              </motion.form>
            ) : (
              <motion.div key="success" initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} className="rounded-[32px] border border-[#ebe8e4] bg-[#fbf8f5] p-12 text-center md:p-20">
                <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-[#fff1e9] text-[#ff6422]"><CheckCircle2 size={34} /></div>
                <h3 className="text-3xl font-bold">Inscrição recebida.</h3>
                <p className="mx-auto mt-5 max-w-md text-base font-medium leading-relaxed text-[#171717]/50">Vamos analisar seu perfil e entrar em contato caso ele esteja alinhado com o primeiro grupo de embaixadores.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Section>

      <Section className="bg-[#171717] px-5 py-28 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-6 text-sm font-bold text-[#ff8a55]">Já faz parte</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">O lugar dos representantes.</h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg font-medium leading-relaxed text-white/55">
            Logotipos, cores, presets. A forma de falar continua sendo a sua.
          </p>
          <Link
            to="/academy/representantes"
            className="mt-10 inline-flex items-center rounded-full bg-white px-6 py-3 font-bold text-[#171717]"
          >
            Entrar no estúdio <ArrowRight size={17} className="ml-2" />
          </Link>
        </div>
      </Section>

      <Section className="px-5 py-28">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 flex items-center gap-4"><HelpCircle className="text-[#ff6422]" size={28} /><h2 className="text-3xl font-bold tracking-tight">Dúvidas frequentes</h2></div>
          <div className="rounded-[28px] border border-[#ebe8e4] bg-white px-7 md:px-10">
            <FaqItem question="Preciso ter muitos seguidores?" answer="Não. O número de seguidores é apenas uma parte da análise. Procuramos principalmente conexão real com estudantes, constância e uma comunicação responsável." />
            <FaqItem question="Preciso pagar para participar?" answer="Não. A inscrição no programa não tem custo." />
            <FaqItem question="O que eu ganho como embaixador?" answer="Você recebe um código personalizado, comissão recorrente pelas assinaturas feitas através dele, kit oficial e acesso antecipado a novidades e materiais do Academy." />
            <FaqItem question="Como funciona a comissão?" answer="Cada assinatura realizada através do seu código gera comissão recorrente enquanto essa assinatura permanecer ativa. As condições completas são apresentadas aos embaixadores aprovados." />
            <FaqItem question="Posso criar o conteúdo do meu jeito?" answer="Sim. A sua voz continua sendo sua. O estúdio de representantes oferece o kit — logotipos, cores, artes — para o dia em que quiser. Não há roteiro." />
            <FaqItem question="Já fui aprovado. Onde estão os materiais?" answer="Em /academy/representantes. O kit está lá. A forma de falar continua sendo a sua." />
          </div>
        </div>
      </Section>

      <footer className="border-t border-[#ebe8e4] bg-white px-5 py-20 text-center">
        <p className="mx-auto max-w-2xl text-xl font-bold leading-relaxed">O novo Academy começa agora. Faça parte de quem vai contar essa história desde o início.</p>
        <a href="#inscricao" className="mt-8 inline-flex items-center gap-2 font-bold text-[#ff6422]">Quero ser embaixador <ArrowRight size={17} /></a>
        <p className="mt-12 text-[10px] font-semibold tracking-[0.35em] text-[#171717]/25">© 2026 ODONTOHUB ACADEMY S.A.</p>
      </footer>
    </div>
  );
}
