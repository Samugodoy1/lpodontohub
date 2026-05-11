import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Users, 
  Zap, 
  Trophy, 
  Handshake, 
  Megaphone, 
  Gift, 
  ArrowRight,
  Target,
  Rocket,
  ChevronLeft,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Plus,
  Minus,
  Smartphone,
  Layout,
  ClipboardCheck,
  Search,
  Instagram,
  Video
} from 'lucide-react';
import { Button, Section } from '../components/shared/UI';

const BenefitCard = ({ icon: Icon, title, desc, delay = 0 }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="p-8 bg-slate-50 rounded-[2.5rem] border border-transparent hover:border-brand-academy/20 hover:bg-white hover:shadow-xl transition-all duration-500 group"
  >
    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-brand-academy group-hover:text-white transition-all">
      <Icon size={28} />
    </div>
    <h4 className="text-xl font-bold text-brand-text mb-4 tracking-tight">{title}</h4>
    <p className="text-sm text-brand-text/60 leading-relaxed font-medium">{desc}</p>
  </motion.div>
);

const FaqItem = ({ question, answer }: { question: string, answer: string, key?: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left hover:text-brand-academy transition-colors transition-all"
      >
        <span className="font-bold text-brand-text">{question}</span>
        {isOpen ? <Minus size={18} className="text-brand-academy" /> : <Plus size={18} className="text-slate-300" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="pb-6 text-sm text-brand-text/50 font-medium leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Ambassadors() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Section className="pt-32 md:pt-48 pb-24 overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
             <Link to="/academy" className="inline-flex items-center gap-2 group mb-10 text-brand-text/40 hover:text-brand-academy transition-colors text-xs font-bold uppercase tracking-widest">
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Voltar para Academy
            </Link>
            
            <div className="block" />
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-academy/5 border border-brand-academy/10 text-brand-academy rounded-full text-[10px] font-bold uppercase tracking-widest mb-10 shadow-sm shadow-brand-academy/5">
              <Star size={12} className="fill-brand-academy" /> Programa seletivo para estudantes
            </div>
            
            <h1 className="text-[2.6rem] md:text-7xl font-bold tracking-tight text-brand-text mb-10 leading-[1.05]">
              Você vive a rotina da odonto.<br className="hidden md:block" />
              Agora pode <span className="text-brand-academy italic">representá-la.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-brand-text/50 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
              O OdontoHub Academy está selecionando estudantes criadores de conteúdo para representar uma plataforma feita para organizar pacientes, atendimentos, evoluções e materiais da clínica em um só lugar.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#form">
                <Button variant="academy" className="px-10 py-5 text-lg font-bold shadow-2xl shadow-brand-academy/20 rounded-2xl">
                  Quero ser embaixador
                </Button>
              </a>
              <a href="#como-funciona">
                <Button variant="ghost" className="text-brand-text/60 hover:text-brand-academy flex items-center justify-center gap-2 font-bold group">
                  Ver como funciona <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
            
            <p className="mt-10 text-[10px] md:text-xs font-bold text-slate-300 uppercase tracking-widest">
              A inscrição não garante aprovação. Perfis passam por análise.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Seção 1 — Ideia central */}
      <Section className="bg-slate-50/50 py-32 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-text mb-10">Antes de atender, clareza.</h2>
            <div className="space-y-6 text-lg text-brand-text/50 font-medium leading-relaxed">
              <p>Quem faz clínica sabe: o atendimento não começa quando o paciente senta na cadeira.</p>
              <p className="text-brand-text !text-brand-academy">Começa antes.</p>
              <p>Na hora de revisar o caso. Separar material. Lembrar a última evolução. Entender o próximo passo. Organizar o que ficou espalhado.</p>
              <p>O Academy existe para deixar esse caminho mais leve. E os embaixadores são os estudantes que ajudam essa ideia a chegar em mais pessoas.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Seção 2 — Para quem é */}
      <Section id="perfil" className="py-32">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-text mb-8">Procuramos quem vive a odonto de verdade.</h2>
            <p className="text-lg text-brand-text/50 font-medium max-w-2xl mx-auto">Não é sobre número de seguidores. É sobre uma comunicação verdadeira, constante e alinhada com a proposta da marca.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-10 md:p-14 bg-brand-academy-soft border border-brand-academy/10 rounded-[3rem]">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 bg-brand-academy text-white rounded-full flex items-center justify-center">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-brand-academy uppercase tracking-widest">Esse programa é para você se:</h3>
              </div>
              <ul className="space-y-6">
                {[
                  "Você cursa Odontologia e já está ou está chegando na fase de clínica;",
                  "Posta conteúdos sobre rotina, estudos, atendimentos ou bastidores;",
                  "Tem uma audiência formada por estudantes de odontologia;",
                  "Gosta de organização, estética e comunicação bem feita;",
                  "Acredita que a clínica pode ser menos caótica."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-brand-text font-medium leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-academy mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-10 md:p-14 bg-slate-50 border border-slate-100 rounded-[3rem]">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 bg-slate-200 text-slate-400 rounded-full flex items-center justify-center">
                  <XCircle size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-500 uppercase tracking-widest">Talvez não seja se:</h3>
              </div>
              <ul className="space-y-6">
                {[
                  "Seu conteúdo é muito apelativo ou sem critério;",
                  "Sua comunicação promete resultado fácil ou milagroso;",
                  "Você não tem constância em suas publicações;",
                  "Você não se identifica com uma proposta limpa e premium;",
                  "Apenas busca um cupom de desconto genérico."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-brand-text/50 font-medium leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-200 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Seção 3 — O que é ser embaixador */}
      <Section className="bg-brand-academy py-32 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-5 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-10 tracking-tight leading-tight">Ser embaixador não é só ter um cupom. É representar uma visão.</h2>
          <div className="text-lg md:text-xl font-medium leading-relaxed opacity-90 space-y-8 max-w-3xl mx-auto">
            <p>A gente acredita que a rotina clínica do estudante não precisa ser tão espalhada, ansiosa e improvisada.</p>
            <p>Como embaixador, você apresenta o Academy para sua audiência de um jeito natural, mostrando como a plataforma pode ajudar estudantes a se organizarem melhor antes, durante e depois da clínica.</p>
            <div className="h-px w-20 bg-white/20 mx-auto my-10" />
            <p className="text-2xl md:text-3xl font-bold">Você representa o Academy com a sua voz.</p>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none" />
      </Section>

      {/* Seção 4 — Como funciona */}
      <Section id="como-funciona" className="py-32 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-5">
           <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-text">Simples, transparente e com a sua cara.</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { n: "01", t: "Inscrição", d: "Envie seu perfil para análise. Queremos entender sua rotina.", icon: Instagram },
                { n: "02", t: "Avaliação", d: "Selecionamos perfis com conteúdo constante e estética limpa.", icon: Search },
                { n: "03", t: "Kit Oficial", d: "Receba orientações, ideias de conteúdo e regras de marca.", icon: Gift },
                { n: "04", t: "Seu Cupom", d: "Cada embaixador recebe um código personalizado para compartilhar.", icon: Zap },
                { n: "05", t: "Comissão", d: "Assinaturas feitas com seu cupom geram comissão recorrente.", icon: Trophy }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left group prose">
                   <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-academy mb-6 group-hover:bg-brand-academy group-hover:text-white transition-all shadow-sm">
                      <step.icon size={24} strokeWidth={1.5} />
                   </div>
                   <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-2">{step.n}</span>
                   <h4 className="text-lg font-bold text-brand-text mb-3 leading-none">{step.t}</h4>
                   <p className="text-xs text-brand-text/40 font-medium leading-relaxed">{step.d}</p>
                </div>
              ))}
           </div>
        </div>
      </Section>

      {/* Seção 5 — Benefícios */}
      <Section className="bg-slate-50/30 py-32">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-text mb-6">O que você recebe</h2>
            <p className="text-lg text-brand-text/50 font-medium max-w-2xl mx-auto">Queremos uma relação real. Não queremos perfis apenas "postando desconto". Queremos traduzir o Academy para a rotina clínica.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BenefitCard icon={Zap} title="Cupom Pessoal" desc="Um código único e personalizado com seu nome para sua audiência." />
            <BenefitCard icon={Trophy} title="Comissão Recorrente" desc="Receba por cada assinatura ativa vinda da sua indicação." />
            <BenefitCard icon={Gift} title="Kit de Conteúdo" desc="Pack oficial com ideias de Stories, Reels e legendas prontas." />
            <BenefitCard icon={Smartphone} title="Autoridade Digital" desc="Destaque no site oficial e possibilidade de campanhas pagas." />
            <BenefitCard icon={Layout} title="Beta Tester" desc="Acesso às novas funcionalidades antes de todo o mercado." />
            <BenefitCard icon={Video} title="Material HQ" desc="Acesso a ativos da marca em alta definição para compor seus posts." />
            <BenefitCard icon={Target} title="Incentivo HQ" desc="Bônus por metas de indicação alcançadas mensalmente." />
            <BenefitCard icon={Star} title="Status Partner" desc="Networking VIP com os fundadores e outros embaixadores." />
          </div>
        </div>
      </Section>

      {/* Seção 6 — O que é o Academy */}
      <Section className="py-32">
         <div className="max-w-6xl mx-auto px-5">
            <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-32">
               <div className="w-full lg:w-1/2">
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-text mb-10 leading-tight">Uma plataforma para organizar sua vida clínica.</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                     {[
                        { icon: Users, t: "Pacientes", d: "Organização total de prontuários e históricos." },
                        { icon: ClipboardCheck, t: "Evoluções", d: "Checklists guiados para cada procedimento." },
                        { icon: Zap, t: "Materiais", d: "Saiba o que levar para o box antes de sair." },
                        { icon: Smartphone, t: "Portabilidade", d: "Menos papel, mais clareza no atendimento." }
                     ].map((item, i) => (
                        <div key={i} className="space-y-3">
                           <item.icon size={32} className="text-brand-academy" strokeWidth={1} />
                           <h4 className="font-bold text-brand-text">{item.t}</h4>
                           <p className="text-sm text-brand-text/50 font-medium leading-relaxed">{item.d}</p>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="w-full lg:w-1/2">
                  <div className="p-10 md:p-14 bg-slate-900 rounded-[3rem] text-white">
                     <h3 className="text-2xl font-bold mb-6">Importante:</h3>
                     <p className="text-lg text-white/60 mb-8 font-medium leading-relaxed">
                        O Academy não substitui faculdade, professores ou protocolos oficiais. Ele funciona como uma camada de organização pessoal para ajudar o aluno a chegar menos perdido.
                     </p>
                     <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest">
                       Clinical Empowerment
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Section>

      {/* Seção 7 — Tom da comunidade */}
      <Section className="bg-slate-50 py-32 overflow-hidden">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-text mb-12">Uma comunidade real.</h2>
          <div className="flex flex-col gap-8">
            <div className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm">
              <p className="text-lg md:text-2xl font-bold text-brand-text leading-relaxed">
                "Não pedimos que você seja perfeito. Pedimos que seja real. Valorizamos quem mostra bastidores, erros, evolução e rotina com responsabilidade."
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-2xl border border-slate-100">
                <span className="block text-brand-academy font-bold mb-2 uppercase text-[10px] tracking-widest">Jovem</span>
                <span className="text-xs text-brand-text/60 font-medium">Mas não irresponsável.</span>
              </div>
              <div className="p-6 bg-white rounded-2xl border border-slate-100">
                <span className="block text-brand-academy font-bold mb-2 uppercase text-[10px] tracking-widest">Bonita</span>
                <span className="text-xs text-brand-text/60 font-medium">Mas não vazia.</span>
              </div>
              <div className="p-6 bg-white rounded-2xl border border-slate-100">
                <span className="block text-brand-academy font-bold mb-2 uppercase text-[10px] tracking-widest">Leve</span>
                <span className="text-xs text-brand-text/60 font-medium">Mas não superficial.</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Seção 8 — Regras rápidas */}
      <Section id="regras" className="py-32">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-text mb-8">O que esperamos de você</h2>
            <p className="text-lg text-brand-text/50 font-medium max-w-2xl mx-auto">Para proteger você, sua audiência e a marca, todo embaixador precisa seguir algumas direções básicas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
            <div className="space-y-10">
              <h3 className="text-2xl font-bold text-brand-academy border-b-2 border-brand-academy/20 pb-4 inline-block">Pode</h3>
              <ul className="space-y-6">
                {[
                  "Mostrar sua rotina usando o Academy no dia a dia;",
                  "Falar sobre organização clínica e preparação para atender;",
                  "Compartilhar como planeja seus casos e instrumentais;",
                  "Explicar como organiza evolução e pacientes;",
                  "Usar seu cupom como benefício exclusivo para sua audiência;",
                  "Adaptar as ideias do kit para sua própria voz e estilo."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start font-bold text-brand-text">
                    <CheckCircle2 size={24} className="text-brand-academy shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-10">
              <h3 className="text-2xl font-bold text-slate-400 border-b-2 border-slate-100 pb-4 inline-block">Não pode</h3>
              <ul className="space-y-6">
                {[
                  "Prometer resultado clínico ou diagnosticar tratamentos;",
                  "Dizer que o Academy substitui professores ou protocolos;",
                  "Expor pacientes ou dados sensíveis sem autorização;",
                  "Criar conteúdos sensacionalistas ou de baixo engajamento ético;",
                  "Vender a plataforma como um 'atalho' para o estudo;",
                  "Comunicar como se fosse apenas um cupom de desconto."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start font-bold text-slate-400">
                    <XCircle size={24} className="text-slate-100 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Seção 10 — Chamada emocional */}
      <Section className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-[2.6rem] md:text-7xl font-bold tracking-tight text-brand-text mb-12 leading-[1.05]">
            Sua rotina pode ir <span className="text-brand-academy">mais longe.</span>
          </h2>
          <div className="text-lg md:text-xl text-brand-text/50 font-medium leading-relaxed space-y-6 max-w-3xl mx-auto">
            <p>Se você compartilha a rotina da clínica, você ajuda alguém a se sentir menos sozinho. Uma dica de material, uma forma de organizar o caso, uma experiência real contada com responsabilidade.</p>
            <p>O Academy quer caminhar com pessoas assim. Se você acredita que a odontologia pode ser mais clara desde a faculdade, talvez esse seja o seu lugar.</p>
          </div>
          
          <div className="mt-16">
            <a href="#form">
              <Button variant="academy" className="px-16 py-6 rounded-[2rem] font-black text-xl shadow-2xl shadow-brand-academy/30">
                Quero me inscrever
              </Button>
            </a>
          </div>
        </div>
      </Section>

      {/* Seção 11 — Formulário */}
      <Section id="form" className="py-32">
        <div className="max-w-3xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-brand-text mb-4">Inscrever seu perfil</h2>
            <p className="text-brand-text/50 font-medium text-lg">Preencha seus dados para participar da seleção de embaixadores.</p>
          </div>

          <form className="space-y-8 bg-white p-10 md:p-14 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Nome Completo</label>
                <input type="text" className="w-full bg-slate-50 border-none rounded-2xl p-4 font-medium focus:ring-2 focus:ring-brand-academy outline-none" placeholder="Ex: Ana Souza" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Instagram</label>
                <input type="text" className="w-full bg-slate-50 border-none rounded-2xl p-4 font-medium focus:ring-2 focus:ring-brand-academy outline-none" placeholder="@seuusuario" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">TikTok</label>
                <input type="text" className="w-full bg-slate-50 border-none rounded-2xl p-4 font-medium focus:ring-2 focus:ring-brand-academy outline-none" placeholder="@seuusuario" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">WhatsApp</label>
                <input type="text" className="w-full bg-slate-50 border-none rounded-2xl p-4 font-medium focus:ring-2 focus:ring-brand-academy outline-none" placeholder="(00) 00000-0000" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Faculdade</label>
                <input type="text" className="w-full bg-slate-50 border-none rounded-2xl p-4 font-medium focus:ring-2 focus:ring-brand-academy outline-none" placeholder="Ex: USP" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Período</label>
                <input type="text" className="w-full bg-slate-50 border-none rounded-2xl p-4 font-medium focus:ring-2 focus:ring-brand-academy outline-none" placeholder="Ex: 7º Período" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Cidade / Estado</label>
                <input type="text" className="w-full bg-slate-50 border-none rounded-2xl p-4 font-medium focus:ring-2 focus:ring-brand-academy outline-none" placeholder="Cidade - UF" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Já atende em clínica?</label>
                <select className="w-full bg-slate-50 border-none rounded-2xl p-4 font-medium focus:ring-2 focus:ring-brand-academy outline-none appearance-none">
                  <option>Sim</option>
                  <option>Não, mas começo em breve</option>
                  <option>Ainda não</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Posts p/ semana</label>
                <input type="number" className="w-full bg-slate-50 border-none rounded-2xl p-4 font-medium focus:ring-2 focus:ring-brand-academy outline-none" placeholder="0" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Seguidores</label>
                <input type="text" className="w-full bg-slate-50 border-none rounded-2xl p-4 font-medium focus:ring-2 focus:ring-brand-academy outline-none" placeholder="Ex: 3k" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Views Stories</label>
                <input type="text" className="w-full bg-slate-50 border-none rounded-2xl p-4 font-medium focus:ring-2 focus:ring-brand-academy outline-none" placeholder="Média" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Por que você quer ser embaixador?</label>
              <textarea rows={4} className="w-full bg-slate-50 border-none rounded-2xl p-4 font-medium focus:ring-2 focus:ring-brand-academy outline-none resize-none" placeholder="Conte sobre sua conexão com o Academy." />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Como você fala sobre sua rotina?</label>
              <textarea rows={4} className="w-full bg-slate-50 border-none rounded-2xl p-4 font-medium focus:ring-2 focus:ring-brand-academy outline-none resize-none" placeholder="Como é o seu estilo de conteúdo?" />
            </div>

            <div className="flex items-start gap-3">
              <input type="checkbox" id="terms" className="w-5 h-5 rounded border-slate-200 text-brand-academy focus:ring-brand-academy mt-0.5" />
              <label htmlFor="terms" className="text-xs font-bold text-slate-500 cursor-pointer leading-relaxed">Eu aceito seguir as diretrizes éticas e de comunicação da marca e entendo que a inscrição passa por análise.</label>
            </div>

            <Button type="submit" className="w-full py-6 rounded-2xl font-black text-lg bg-brand-academy text-white shadow-xl shadow-brand-academy/20 uppercase tracking-widest">
              Enviar inscrição
            </Button>
            
            <p className="text-center text-[10px] font-bold text-slate-300 uppercase tracking-widest px-4 leading-relaxed">Selecionamos perfis com conteúdo constante, comunicação ética e conexão real com estudantes de odontologia.</p>
          </form>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-slate-50/50 py-32">
        <div className="max-w-4xl mx-auto px-5">
          <div className="flex items-center gap-4 mb-16">
            <HelpCircle size={32} className="text-brand-academy" />
            <h2 className="text-3xl font-bold tracking-tight text-brand-text">Dúvidas frequentes</h2>
          </div>
          <div className="bg-white rounded-[3rem] border border-slate-100 p-8 md:p-12">
            {[
              { q: "Preciso ter muitos seguidores?", a: "Não. A gente olha mais para alinhamento, constância, comunicação e conexão real com estudantes de odontologia. Microcriadores são muito bem-vindos." },
              { q: "O programa é pago?", a: "Não. Você não paga para se inscrever. Embaixadores aprovados recebem um cupom personalizado e comissão por assinaturas feitas com esse cupom." },
              { q: "Posso participar se ainda não estou na clínica?", a: "Pode se inscrever, mas damos prioridade para estudantes que já vivem ou estão próximos da rotina clínica." },
              { q: "O Academy substitui a faculdade?", a: "Não. O Academy não substitui professores, fichas oficiais, protocolos institucionais ou orientação clínica. Ele é uma ferramenta de apoio." },
              { q: "Como recebo comissão?", a: "As regras de comissão são enviadas aos aprovados. A comissão é vinculada às assinaturas realizadas com o seu código." },
              { q: "Posso divulgar do meu jeito?", a: "Sim, mas dentro das diretrizes da marca. A ideia é preservar sua voz sem perder clareza, ética e responsabilidade." }
            ].map((faq, i) => (
              <FaqItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </Section>

      <footer className="py-32 text-center border-t border-slate-100 px-5">
        <p className="text-lg md:text-xl font-bold text-brand-text max-w-2xl mx-auto mb-10 leading-relaxed">Não estamos procurando divulgadores. Estamos escolhendo representantes de uma forma mais clara de viver a odontologia.</p>
        <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em]">© 2026 ODONTOHUB ACADEMY S.A.</div>
      </footer>
    </div>
  );
}
