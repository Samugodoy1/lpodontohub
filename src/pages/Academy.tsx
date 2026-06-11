import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { 
  GraduationCap, 
  CheckCircle2, 
  Brain, 
  Clock, 
  ArrowRight,
  ClipboardList,
  AlertCircle,
  ChevronRight,
  BookOpen,
  Zap,
  Target,
  Users,
  Layout,
  Smartphone,
  Eye,
  Camera,
  Heart,
  ClipboardCheck,
  PlusCircle,
  Calendar,
  Lock,
  Sparkles,
  ShieldCheck,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Section } from '../components/shared/UI';

// --- Shared Components for Clinical Depth ---

const ProductMockup = ({ title, content, type = "mobile" }: { title: string, content?: React.ReactNode, type?: "mobile" | "desktop" }) => (
  <div id={`mockup-container-${title.toLowerCase().replace(/\s+/g, '-')}`} className={`relative ${type === "mobile" ? "max-w-[280px] xs:max-w-[300px]" : "max-w-4xl"} mx-auto group`}>
    <div className="absolute -inset-4 bg-brand-academy/5 rounded-[2.5rem] blur-2xl group-hover:bg-brand-academy/10 transition-all duration-500" />
    <div className={`relative bg-white border border-brand-border rounded-[2rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden ${type === "mobile" ? "aspect-[9/18.5]" : "aspect-video"}`}>
      {/* App Header Area / Status Bar */}
      <div className="h-10 px-6 flex items-center justify-between bg-white border-b border-slate-50">
        <div className="text-[10px] font-bold text-slate-400">09:41</div>
        <div className="flex gap-1.5 items-center">
          <div className="w-4 h-2 bg-slate-200 rounded-full" />
          <div className="w-2 h-2 bg-slate-200 rounded-full" />
        </div>
      </div>
      
      {/* App Content */}
      <div className="flex flex-col h-full bg-slate-50/30 overflow-y-auto scrollbar-none">
        {content || (
          <div className="p-6 flex flex-col h-full">
            <div className="space-y-4">
              <div className="h-4 w-32 bg-slate-100 rounded-full" />
              <div className="h-8 w-48 bg-slate-200 rounded-lg" />
              <div className="h-32 w-full bg-brand-academy rounded-3xl" />
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, desc, delay = 0, badge }: { icon: any, title: string, desc: string, delay?: number, badge?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="p-8 md:p-10 bg-[#FAF9F5] rounded-[2rem] md:rounded-[2.5rem] border border-brand-border/40 hover:border-brand-academy/2 w-full text-left flex flex-col h-full hover:bg-white hover:shadow-xl transition-all duration-500 group"
  >
    <div className="flex justify-between items-start mb-6 md:mb-8">
      <div className="w-12 h-12 md:h-14 md:w-14 bg-white border border-brand-border/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-brand-academy/5 transition-colors">
        <Icon className="text-brand-academy" size={24} />
      </div>
      {badge && (
        <span className="text-[9px] font-bold tracking-widest text-brand-academy uppercase px-2.5 py-1 bg-brand-academy/5 border border-brand-academy/10 rounded-full">
          {badge}
        </span>
      )}
    </div>
    <h4 className="text-xl md:text-2xl font-bold text-brand-text mb-3 md:mb-4 tracking-tight leading-snug">{title}</h4>
    <p className="text-sm md:text-base text-brand-text/60 leading-relaxed font-semibold mt-auto">{desc}</p>
  </motion.div>
);

// --- Main Page ---

export default function Academy() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <Helmet>
        <title>OdontoHub Academy — O Melhor App para Estudante de Odonto do Brasil</title>
        <meta name="description" content="O aplicativo definitivo feito sob medida para estudantes de odontologia. Organize checklists de matérias e instrumentais, use o Modo Box de biossegurança inteligente sem toques de luvas." />
        <meta name="keywords" content="app para estudante de odonto, estudante de odonto, odontologia faculdade, material odontologico, checklist odontologia, biossegurança clinica, odontohub academy" />
        <link rel="canonical" href="https://www.odontohub.app.br/academy" />
        <meta property="og:title" content="OdontoHub Academy — Seu assistente na clínica da faculdade" />
        <meta property="og:description" content="O aplicativo definitivo feito sob medida para estudantes de odontologia. Organize checklists de matérias e instrumentais, use o Modo Box de biossegurança." />
        <meta property="og:url" content="https://www.odontohub.app.br/academy" />
        <meta name="twitter:title" content="OdontoHub Academy — Seu assistente na clínica da faculdade" />
        <meta name="twitter:description" content="Organize checklists de matérias e instrumentais, use o Modo Box de biossegurança inteligente sem toques de luvas." />
      </Helmet>
      {/* 1. HERO SECTION: Re-anchored for instant conversion */}
      <Section className="pt-20 sm:pt-24 md:pt-40 pb-16 md:pb-24 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-16 md:mb-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="px-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-academy/5 border border-brand-academy/10 text-brand-academy rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-6 md:mb-10">
                <GraduationCap size={12} className="shrink-0" /> Apoio prático e organização para estudantes de odontologia
              </div>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-brand-text mb-6 md:mb-8 leading-[1.15] md:leading-[1.05] px-2 md:px-0">
                O Academy não é uma biblioteca.<br className="hidden md:block" />
                <span className="text-brand-academy">É o seu assistente na clínica da faculdade.</span>
              </h1>
              <p className="text-sm xs:text-base md:text-xl lg:text-2xl text-brand-text/50 max-w-4xl mx-auto mb-10 md:mb-16 leading-relaxed font-semibold px-4 md:px-0">
                O único resultado que importa para nós é ver você entrar na clínica com segurança e sem aquele frio na barriga. Organizamos seus checklists de materiais, fotos de pacientes e anotações para você focar no que realmente interessa: o seu aprendizado e o paciente.
              </p>
              
              {/* Core Real-Use Bullet Cards - Visual Anchors built for instant comprehension */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto mb-12 md:mb-16 text-left">
                <div className="p-5 md:p-6 bg-[#FAF9F5] border border-brand-border/40 rounded-2xl flex flex-col justify-between hover:bg-white hover:border-brand-academy/30 hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 bg-white border border-brand-border/60 rounded-xl flex items-center justify-center text-brand-academy mb-4 shadow-sm">
                    <ClipboardList size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-extrabold text-brand-text uppercase tracking-tight mb-1">Checklists de materiais</h4>
                    <p className="text-[10px] md:text-xs text-brand-text/50 font-semibold leading-relaxed">Checklists rápidos para separar seu instrumental e não esquecer nada para esterilização.</p>
                  </div>
                </div>

                <div className="p-5 md:p-6 bg-[#FAF9F5] border border-brand-border/40 rounded-2xl flex flex-col justify-between hover:bg-white hover:border-brand-academy/30 hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 bg-white border border-brand-border/60 rounded-xl flex items-center justify-center text-brand-academy mb-4 shadow-sm">
                    <Smartphone size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-extrabold text-brand-text uppercase tracking-tight mb-1">Evolução de Prontuário</h4>
                    <p className="text-[10px] md:text-xs text-brand-text/50 font-semibold leading-relaxed">Modelos prontos para preencher sua evolução clínica rápida e colher a assinatura do preceptor.</p>
                  </div>
                </div>

                <div className="p-5 md:p-6 bg-[#FAF9F5] border border-brand-border/40 rounded-2xl flex flex-col justify-between hover:bg-white hover:border-brand-academy/30 hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 bg-white border border-brand-border/60 rounded-xl flex items-center justify-center text-brand-academy mb-4 shadow-sm">
                    <Camera size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-extrabold text-brand-text uppercase tracking-tight mb-1">Fotos Organizadas</h4>
                    <p className="text-[10px] md:text-xs text-brand-text/50 font-semibold leading-relaxed">Guarde e organize fotos dos casos por paciente, sem misturar com sua galeria pessoal.</p>
                  </div>
                </div>

                <div className="p-5 md:p-6 bg-[#FAF9F5] border border-brand-border/40 rounded-2xl flex flex-col justify-between hover:bg-white hover:border-brand-academy/30 hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 bg-white border border-brand-border/60 rounded-xl flex items-center justify-center text-brand-academy mb-4 shadow-sm">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-extrabold text-brand-text uppercase tracking-tight mb-1">Passo a Passo das Clínicas</h4>
                    <p className="text-[10px] md:text-xs text-brand-text/50 font-semibold leading-relaxed">Consulte os passos e alertas de cada procedimento de forma rápida, ao lado do mocho.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 max-w-md mx-auto sm:max-w-none">
                <a href="https://academy.odontohub.app.br" id="btn-hero-cta" className="w-full sm:w-auto">
                  <Button variant="academy" className="w-full px-6 sm:px-10 md:px-12 py-4.5 md:py-6 text-sm sm:text-base md:text-lg font-bold shadow-2xl shadow-brand-academy/25">
                    Criar minha conta gratuita
                  </Button>
                </a>
                <a href="#fluxo" id="btn-hero-learn" className="w-full sm:w-auto">
                  <Button variant="ghost" className="text-brand-text/60 hover:text-brand-text flex items-center justify-center gap-2 font-bold group py-4">
                    Ver como funciona <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative px-4"
          >
            {/* Main Mockup representing the user status board */}
            <div className="relative z-10 p-1.5 md:p-4 bg-slate-100 rounded-[2.5rem] md:rounded-[3.5rem] border border-brand-border shadow-2xl overflow-hidden max-w-5xl mx-auto">
              <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden aspect-auto md:aspect-[16/10] shadow-inner flex flex-col">
                <div className="p-4 sm:p-8 md:p-16 space-y-6 sm:space-y-8 md:space-y-12">
                    <div className="space-y-2 md:space-y-4">
                      <p className="text-slate-400 font-bold text-sm md:text-lg">Boa noite, Samuel • 7º Semestre</p>
                      <h2 className="text-2xl md:text-6xl font-bold text-brand-text tracking-tight max-w-2xl leading-[1.2] md:leading-[1.1]">
                        Tudo pronto para o seu próximo atendimento clínico.
                      </h2>
                   </div>

                   <div className="bg-brand-academy rounded-[1.5rem] md:rounded-[2.5rem] p-4 sm:p-6 md:p-10 text-white relative overflow-hidden group">
                      <div className="relative z-10">
                        <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1 md:mb-2">Próximo atendimento • Quinta-feira</p>
                        <div className="flex flex-row justify-between items-start gap-4 mb-6 md:mb-8">
                          <div>
                            <h4 className="text-lg xs:text-xl md:text-5xl font-bold tracking-tight">Marcos Roberto Jr.</h4>
                            <p className="text-[11px] font-medium text-white/85 mt-2">Lembrete para o procedimento:</p>
                            <p className="text-[12px] font-bold italic text-white/95 leading-relaxed mt-0.5">"Revisar o protocolo de cimentação adesiva e testar o isolamento absoluto antes de começar o preparo."</p>
                            <div className="flex flex-wrap gap-1.5 md:gap-2 mt-3 tracking-wide">
                              <span className="px-2.5 py-1 bg-white/20 rounded-full text-[8px] md:text-[10px] font-bold uppercase">Clínica de Dentística</span>
                              <span className="px-2.5 py-1 bg-white/10 rounded-full text-[8px] md:text-[10px] font-bold uppercase">Cadeira 08 • 14:00</span>
                            </div>
                          </div>
                          <div className="w-10 h-10 md:w-16 md:h-16 bg-white/20 border border-white/20 rounded-xl md:rounded-2xl flex items-center justify-center text-sm md:text-2xl font-bold shrink-0">M</div>
                        </div>
                      </div>
                      <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-white/5 rounded-full blur-3xl -mr-24 -mt-24 md:-mr-32 md:-mt-32" />
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className="p-4 md:p-8 bg-slate-50 rounded-2xl md:rounded-3xl border border-slate-100 flex items-center gap-3 md:gap-4">
                         <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg md:rounded-xl flex items-center justify-center text-brand-academy shadow-sm shrink-0">
                            <ClipboardCheck size={20} />
                         </div>
                         <div>
                            <p className="text-[8px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Preparo do Box</p>
                            <p className="font-bold text-brand-text text-xs md:text-base">Kit de isolamento separado</p>
                         </div>
                      </div>
                      <div className="p-4 md:p-8 bg-slate-50 rounded-2xl md:rounded-3xl border border-slate-100 flex items-center gap-3 md:gap-4">
                         <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg md:rounded-xl flex items-center justify-center text-brand-academy shadow-sm shrink-0">
                            <Camera size={20} />
                         </div>
                         <div>
                            <p className="text-[8px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Fotos do caso</p>
                            <p className="font-bold text-brand-text text-xs md:text-base tracking-tight">Fotos iniciais salvas</p>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="mt-auto h-16 md:h-20 bg-white border-t border-slate-100 flex items-center justify-around px-4 md:px-8">
                   <div className="flex flex-col items-center gap-1 text-brand-academy">
                      <Layout size={18} />
                      <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest">Organizar</span>
                   </div>
                   <div className="flex flex-col items-center gap-1 text-slate-300">
                      <Clock size={18} />
                   </div>
                   <div className="flex flex-col items-center gap-1 text-slate-300">
                      <Users size={18} />
                   </div>
                </div>
              </div>
            </div>

            {/* Mobile Mockup positioned on the right to demonstrate inside-app-view on real devices */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 md:right-0 bottom-10 md:bottom-20 z-20 hidden lg:block"
            >
              <ProductMockup 
                title="Modo Box Dinâmico" 
                content={
                  <div className="p-6 flex flex-col h-full bg-white">
                    <div className="flex justify-between items-center mb-8">
                       <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Modo de Box</span>
                       <span className="px-2 py-0.5 bg-brand-academy/10 text-brand-academy rounded text-[8px] font-bold uppercase">Durante</span>
                    </div>
                    <div className="space-y-6">
                       <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest text-center">PASSO 2 DE 4</p>
                       <h4 className="text-xl font-bold text-brand-text leading-tight text-center">Isolamento Absoluto</h4>
                       
                       <div className="space-y-3 pt-2">
                          {[
                            "Selecionar e testar o grampo",
                            "Perfurar e lubrificar o dique",
                            "Posicionar o lençol e passar fio dental"
                          ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                               <div className="w-5 h-5 rounded-full bg-brand-academy/10 flex items-center justify-center text-brand-academy text-[9px] font-bold">{i+1}</div>
                               <p className="text-[10px] font-bold text-slate-600">{item}</p>
                            </div>
                          ))}
                       </div>

                       <div className="pt-8 space-y-2">
                          <div className="w-full h-11 bg-brand-academy rounded-xl flex items-center justify-center text-white text-[10px] font-bold shadow-lg shadow-brand-academy/20 uppercase tracking-wider">Isolamento Concluído</div>
                          <div className="w-full h-11 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-slate-400 text-[10px] font-bold uppercase tracking-wider">Ver Guia do Procedimento</div>
                       </div>
                    </div>
                  </div>
                }
              />
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* 2. THE PROBLEM TO VALUE: De-abstracting clinical pain points */}
      <Section className="bg-[#FAF9F5] border-y border-brand-border/30">
        <div className="max-w-6xl mx-auto">
           <div className="max-w-3xl mb-12 md:mb-20 px-4 md:px-0 text-left">
              <span className="text-[10px] font-bold text-brand-academy tracking-widest uppercase block mb-4">A realidade prática</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-text mb-6 md:mb-8 leading-[1.15]">
                Menos nervosismo antes de entrar na clínica da faculdade.
              </h2>
              <p className="text-sm md:text-xl text-brand-text/50 font-semibold leading-relaxed">
                A faculdade de odontologia já é estressante o suficiente por si só. Você não precisa de mais um aplicativo despejando notificações vazias ou cobrando metas artificiais de estudo. O Academy ajuda você a organizar cada caso clínico de forma direta, simples e com foco onde realmente faz a diferença: na sua autoconfiança debaixo do mocho.
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
              <FeatureCard 
                icon={Target}
                title="Dossiê Simples de Pacientes"
                desc="Centralize os dados, planejamentos e anotações dos seus pacientes em um só lugar. Tenha tudo na ponta dos dedos de forma rápida, sem perder tempo procurando papéis perdidos."
                badge="Sem papéis soltos"
                delay={0.1}
              />
              <FeatureCard 
                icon={ClipboardList}
                title="Checklists por Disciplina"
                desc="Chega de esquecer instrumentais essenciais na hora do atendimento. Monte sua lista de acordo com o procedimento do dia e tenha a certeza de levar o material completo para o box."
                badge="Kit completo"
                delay={0.2}
              />
              <FeatureCard 
                icon={Smartphone}
                title="Modo Box Inteligente"
                desc="Uma tela limpa, desenhada para você deixar o celular apoiado no mocho e consultar os passos e checklists de longe, sem precisar encostar os dedos na tela contaminada."
                badge="Foco no paciente"
                delay={0.3}
              />
              <FeatureCard 
                icon={Camera}
                title="Galeria de Fotos Segura"
                desc="Guarde as fotografias de evolução dos tratamentos organizadas por paciente. Esqueça misturar bocas e procedimentos com as fotos das suas viagens ou momentos pessoais."
                badge="Organização visual"
                delay={0.4}
              />
              <FeatureCard 
                icon={BookOpen}
                title="Evoluções Clínicas Prontas"
                desc="Rascunhe as descrições de evolução do seu atendimento em segundos através de modelos estruturados e limpos. Garanta a assinatura do seu preceptor de forma rápida."
                badge="Anotações rápidas"
                delay={0.5}
              />
              <FeatureCard 
                icon={Clock}
                title="Progresso sem cobrança"
                desc="Acompanhe quais especialidades e procedimentos você já realizou sem sistemas artificiais de pontuação ou gamificações bobas. Respeitamos a sua maturidade profissional."
                badge="Foco na competência"
                delay={0.6}
              />
           </div>
        </div>
      </Section>

      <Section id="fluxo" className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-24 px-4">
             <p className="text-[10px] font-bold text-brand-academy uppercase mb-4 tracking-[0.25em]">Comportamento Ideal</p>
             <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-text">Sua rotina organizada em 3 passos simples.</h2>
             <p className="text-base md:text-lg text-brand-text/50 font-medium mt-4 max-w-2xl mx-auto">Simplificamos as etapas antes, durante e no final de cada atendimento para você focar no que interessa.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 relative px-4 md:px-0">
            {/* Elegant visual separation line for desktop view */}
            <div className="absolute top-1/3 left-0 right-0 h-px bg-slate-100 hidden lg:block" />

            {[
              { 
                step: "01", 
                t: "Antes de cada atendimento", 
                d: "Separe os materiais do procedimento do dia de acordo com checklists de instrumental prontos da sua especialidade, sem correr risco de esquecer algo importante.",
                icon: Layout,
                mockup: (
                  <div className="mt-8 p-6 bg-white border border-brand-border rounded-[2rem] shadow-sm space-y-4 w-full max-w-sm mx-auto text-left">
                    <div className="flex items-center gap-2">
                       <div className="w-5 h-5 bg-brand-academy/10 rounded flex items-center justify-center text-brand-academy">
                          <ClipboardList size={12} />
                       </div>
                       <p className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest">Checklist de Endodontia</p>
                    </div>
                    <div>
                       <h5 className="font-bold text-brand-text text-sm">Discos, Limas e Brocas</h5>
                       <p className="text-[10px] text-slate-400 font-semibold tracking-tight">Levar para esterilizar antes das 11h.</p>
                    </div>
                    <div className="grid grid-cols-3 gap-1 pt-1">
                      <div className="h-1.5 bg-brand-academy rounded-full" />
                      <div className="h-1.5 bg-brand-academy rounded-full" />
                      <div className="h-1.5 bg-slate-100 rounded-full" />
                    </div>
                  </div>
                )
              },
              { 
                step: "02", 
                t: "Foco total no box clínico", 
                d: "Ative o Modo Box com letras ampliadas e de alto contraste. Veja orientações e protocolos com o celular apoiado no aparelho, sem encostar na tela contaminada.",
                icon: Smartphone,
                mockup: (
                  <div className="mt-8 p-6 bg-brand-academy rounded-[2rem] shadow-lg space-y-4 w-full max-w-sm mx-auto text-white text-left overflow-hidden relative">
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                         <div className="text-[9px] font-extrabold opacity-40 uppercase tracking-widest">Protocolo de Cimento</div>
                         <div className="w-2 h-2 rounded-full bg-white/40 animate-pulse" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-[8px] font-bold text-white/50 uppercase">ALERTA CRÍTICO</p>
                        <h5 className="font-bold text-sm tracking-tight leading-tight">Secar a cavidade sem desidratar a dentina.</h5>
                      </div>
                    </div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16" />
                  </div>
                )
              },
              { 
                step: "03", 
                t: "Rápido fechamento do caso", 
                d: "Guarde as fotos de evolução de forma segura no perfil do paciente, anote a descrição do prontuário oficial e feche o aplicativo em segundos para ir descansar.",
                icon: Eye,
                mockup: (
                  <div className="mt-8 p-6 bg-slate-50 border border-slate-100 rounded-[2rem] space-y-3 w-full max-w-sm mx-auto text-left">
                    <div className="flex items-center gap-3">
                       <CheckCircle2 size={16} className="text-brand-academy shrink-0" />
                       <div className="h-2 w-32 bg-slate-300 rounded-full" />
                    </div>
                    <div className="flex items-center gap-3">
                       <CheckCircle2 size={16} className="text-brand-academy shrink-0" />
                       <div className="h-2 w-24 bg-slate-300 rounded-full" />
                    </div>
                    <div className="pt-2 border-t border-slate-200/60 mt-2">
                       <span className="text-[9px] font-bold text-slate-400 block mb-1">ARQUIVO GABARITADO</span>
                       <div className="h-8 w-full bg-white rounded-lg border border-slate-200 flex items-center justify-center text-[10px] font-extrabold text-[#111]">Evolucao_Clinica.pdf</div>
                    </div>
                  </div>
                )
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left w-full h-full"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] md:rounded-[2rem] bg-white border border-brand-border shadow-md flex items-center justify-center mb-8 text-brand-academy outline outline-1 outline-brand-academy/5 group hover:scale-105 transition-transform duration-500">
                  <item.icon size={30} strokeWidth={1.5} />
                </div>
                <div className="text-[10px] font-bold text-brand-academy/50 uppercase mb-2 tracking-widest font-mono">Etapa {item.step}</div>
                <h4 className="text-2xl font-bold text-brand-text mb-4 tracking-tight leading-none">{item.t}</h4>
                <p className="text-brand-text/50 font-semibold leading-relaxed mb-6 text-sm">{item.d}</p>
                
                {/* Embedded mockup visual to give instant functional preview */}
                <div className="w-full mt-auto">
                   {item.mockup}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. MODO BOX DEEP DIVE: Clear demonstration of device utility */}
      <Section className="bg-brand-academy py-24 md:py-32 text-white rounded-[2rem] md:rounded-[5rem] mx-4 md:mx-5 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-white/5 rounded-full blur-[80px] md:blur-[120px] -translate-y-1/2 translate-x-1/3 animate-pulse" />
        
        <div className="max-w-6xl mx-auto px-4 md:px-5 relative z-10">
           <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
              <div className="w-full lg:w-1/2 text-left">
                <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-white/10 text-white rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider mb-6 md:mb-8">
                  <Smartphone size={14} /> Modo Box
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.1] md:leading-[1.15]">
                  Sua lista de passos, visível de longe.
                </h2>
                <p className="text-lg md:text-xl text-white/80 mb-8 md:mb-10 leading-relaxed font-semibold">
                  No meio do atendimento clínico, você está de luvas e não pode encostar no celular. O Modo Box ativa uma interface de alto contraste e letras grandes para você apoiar o celular na mesa clínica e apenas olhar o próximo passo ou checklist preparatório sem ter de quebrar a biossegurança.
                </p>
                <div className="space-y-4 md:space-y-6">
                  {[
                    "Fontes ampliadas fáceis de ler a um metro de distância",
                    "Listas de instrumentais separadas por especialidade",
                    "Biossegurança preservada sem precisar tocar na tela",
                    "Timer acessível para tempo de ataque ácido ou fotopolimerização"
                  ].map(f => (
                    <div key={f} className="flex items-center gap-3 font-bold text-sm sm:text-base md:text-lg">
                      <CheckCircle2 size={20} className="text-white/40 shrink-0" /> {f}
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center mt-12 lg:mt-0">
                 <div className="relative p-2 md:p-3 bg-white/10 rounded-[2.5rem] md:rounded-[4rem] backdrop-blur-xl border border-white/20 shadow-2xl">
                    <ProductMockup 
                      title="Modo Box Interativo" 
                      content={
                        <div className="p-5 sm:p-8 flex flex-col h-full bg-white text-left">
                          <div className="flex justify-between items-center mb-8">
                             <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Procedimento Clínico</span>
                             <span className="px-2.5 py-0.5 bg-brand-academy/10 text-brand-academy rounded text-[9px] font-bold uppercase">Durante</span>
                          </div>
                          
                          <div className="space-y-6">
                             <div>
                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1 italic">Cirurgia Oral Menor</p>
                                <h4 className="text-2xl font-bold text-brand-text tracking-tight uppercase leading-none">Exodontia Simples</h4>
                             </div>

                             <div className="space-y-3">
                                {[
                                  { t: "Antissepsia extra/intra-bucal", c: true },
                                  { t: "Anestesia infiltrativa/bloqueio", c: true },
                                  { t: "Sindicotomia descolando gengiva", c: false },
                                  { t: "Luxação com alavanca reta", c: false }
                                ].map((item, i) => (
                                  <div key={i} className="flex items-center gap-4 p-3.5 bg-slate-50 border border-slate-100 rounded-xl">
                                     <div className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center ${item.c ? 'bg-brand-academy border-brand-academy text-white' : 'border-slate-200 bg-white'}`}>
                                        {item.c && <CheckCircle2 size={12} />}
                                     </div>
                                     <p className="font-extrabold text-brand-text text-xs uppercase tracking-tight">{item.t}</p>
                                  </div>
                                ))}
                             </div>

                             <div className="pt-4">
                                <div className="w-full h-14 bg-brand-academy rounded-xl flex items-center justify-center text-white text-xs font-bold shadow-xl shadow-brand-academy/20 group uppercase tracking-widest">
                                   Ver Próximo Passo <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                             </div>
                          </div>
                        </div>
                      }
                    />
                 </div>
              </div>
           </div>
        </div>
      </Section>

      {/* 5. PRICING: No friction, focus on conversion */}
      <Section id="planos" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-24 px-4">
             <span className="text-[10px] font-bold text-brand-academy tracking-widest uppercase block mb-3">Transparência total</span>
             <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-text mb-4 md:mb-6 leading-tight">Planos honestos, feitos para estudantes.</h2>
             <p className="text-base md:text-xl text-brand-text/50 font-semibold max-w-3xl mx-auto leading-relaxed">Não vendemos seus dados nem exibimos anúncios irritantes. O plano Grátis oferece tudo o que você precisa para começar a organizar sua rotina, e o plano Ilimitado existe para quando você quiser guardar todo seu histórico clínico acadêmico.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto px-4 md:px-0">
             {/* Plan 1 - Free */}
             <div className="bg-[#FAF9F5] border border-brand-border rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 flex flex-col h-full hover:bg-white hover:shadow-2xl transition-all duration-500 text-left">
                <div className="mb-8 md:mb-10">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-brand-text">Plano Grátis</h3>
                    <span className="text-[9px] font-bold tracking-widest text-[#999] uppercase">Uso individual</span>
                  </div>
                  <p className="text-brand-text/50 font-semibold text-sm mb-6 leading-relaxed">Organize seus instrumentais e comece a montar seus checklists sem pagar nada.</p>
                  <div className="text-4xl md:text-5xl font-extrabold text-brand-text mb-2 tracking-tight">Grátis <span className="text-sm font-semibold opacity-40">para sempre</span></div>
                </div>

                <div className="h-px bg-slate-100 w-full mb-8" />

                <div className="flex-grow space-y-4 mb-10 md:mb-12">
                   {[
                     "Até 3 pacientes ativos de uma vez",
                     "Agenda básica de clínicas e matérias",
                     "Checklists de instrumentais básicos",
                     "Rascunho simples de evoluções clínicas",
                     "Organize até 50 fotos na galeria",
                     "Lista de materiais de consumo para separar"
                   ].map(f => (
                     <div key={f} className="flex items-start gap-3 text-brand-text/70 font-semibold text-sm">
                        <CheckCircle2 size={16} className="text-brand-academy/40 shrink-0 mt-0.5" /> <span>{f}</span>
                     </div>
                   ))}
                </div>
                
                <a href="https://academy.odontohub.app.br" id="btn-pricing-free" className="w-full mt-auto">
                  <Button variant="outline" className="w-full py-4 md:py-5 rounded-2xl border-2 font-bold hover:bg-brand-bg-alt uppercase text-xs tracking-wider">Começar gratuitamente</Button>
                </a>
             </div>
             
             {/* Plan 2 - Student Pro/Unlimited */}
             <div className="bg-brand-academy border border-brand-academy rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 flex flex-col h-full text-white shadow-2xl shadow-brand-academy/25 group md:hover:scale-[1.02] transition-transform duration-500 mt-4 md:mt-0 text-left">
                <div className="mb-8 md:mb-10">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl md:text-3xl font-bold">Plano Ilimitado</h3>
                    <div className="px-3 py-1 bg-white/10 rounded-full text-[8px] md:text-[9px] font-bold tracking-widest uppercase font-mono">Mais Recomendado</div>
                  </div>
                  <p className="text-white/70 font-semibold text-sm mb-6 leading-relaxed bg-white/5 py-1.5 px-3 rounded-lg border border-white/5">Para quem quer salvar todas as fotos e ter o arquivo clínico completo de toda a faculdade.</p>
                  <div className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight">R$ 24,90 <span className="text-sm font-medium opacity-50">/mês</span></div>
                </div>

                <div className="h-px bg-white/10 w-full mb-8" />

                <div className="flex-grow space-y-4 mb-10 md:mb-12">
                   {[
                     "Pacientes e casos clínicos ilimitados",
                     "Espaço ilimitado para fotos clínicas",
                     "Modo Box liberado em celulares e tablets",
                     "Exportar ficha clínica completa em PDF",
                     "Modelos completos de redação e evolução",
                     "Recomendações e guias de materiais",
                     "Suporte prioritário na clínica acadêmica"
                   ].map(f => (
                     <div key={f} className="flex items-start gap-3 font-semibold text-sm text-white/90">
                        <CheckCircle2 size={16} className="text-white/40 shrink-0" /> <span>{f}</span>
                     </div>
                   ))}
                </div>
                
                <a href="https://academy.odontohub.app.br" id="btn-pricing-pro" className="w-full mt-auto">
                  <Button variant="outline" className="w-full py-4 md:py-5 rounded-2xl !bg-white !text-brand-academy !border-none font-bold uppercase text-xs tracking-wider">Ativar plano ilimitado</Button>
                </a>
             </div>
          </div>
        </div>
      </Section>

      {/* 6. FAQ: Structured objection busters */}
      <Section className="bg-[#FAF9F5] border-y border-brand-border/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 md:mb-24 px-4">
             <span className="text-[10px] font-mono font-bold text-brand-academy tracking-widest uppercase block mb-3">Dúvidas comuns</span>
             <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-text leading-tight">Perguntas frequentes</h2>
          </div>
          
          <div className="space-y-4 px-4 md:px-0">
            {[
              { 
                q: "O Academy substitui o prontuário oficial da minha faculdade?", 
                a: "De jeito nenhum. O Academy é o seu organizador pessoal extraoficial — um caderno inteligente de apoio. Nele você programa seus checklists de materiais e arquiva suas fotos. O preenchimento da ficha clínica oficial continua sendo feito no sistema ou papel exigido pelos professores da sua faculdade." 
              },
              { 
                q: "A minha conta grátis vai expirar depois de um tempo?", 
                a: "Nunca. O plano gratuito é grátis de verdade e continuará assim. Você pode organizar até 3 pacientes ativos simultaneamente e armazenar 50 fotos. Se quiser controlar mais casos e guardar mais registros ao longo do curso, você pode assinar o Ilimitado quando sentir necessidade." 
              },
              { 
                q: "Funciona sem sinal de internet dentro da clínica?", 
                a: "Sim, perfeitamente. Sabemos que o Wi-Fi e o sinal de celular costumam falhar dentro dos prédios das clínicas universitárias. O Academy salva suas anotações, checklists e fotos localmente no aparelho de forma offline e sincroniza tudo na nuvem assim que você se conectar à internet novamente." 
              },
              { 
                q: "Como esse aplicativo me ajuda a montar relatórios de fim de semestre?", 
                a: "No plano Ilimitado você consegue exportar um arquivo em PDF completo de cada caso, contendo o histórico estruturado dos procedimentos e a galeria de fotos em ordem cronológica. Em vez de perder horas procurando arquivos misturados no celular na véspera de apresentar o seminário, você gera tudo pronto com poucos cliques." 
              },
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-3xl border border-brand-border overflow-hidden">
                <summary className="flex items-center justify-between p-5 md:p-8 cursor-pointer font-bold text-brand-text list-none transition-all hover:bg-slate-50/40">
                  <span className="text-base md:text-lg pr-4">{faq.q}</span>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 group-open:rotate-180 transition-transform">
                    <ChevronRight size={18} />
                  </div>
                </summary>
                <div className="px-5 pb-5 md:px-8 md:pb-8 text-brand-text/60 leading-relaxed font-semibold text-sm md:text-lg border-t border-slate-50/50 pt-4 md:pt-0 md:border-none">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
          
          <div className="mt-12 md:mt-16 p-6 md:p-8 bg-white border border-brand-border rounded-[1.5rem] md:rounded-[2.5rem] text-center mx-4 md:mx-0">
             <p className="text-[11px] md:text-sm text-brand-text/40 flex items-center justify-center gap-2 font-bold">
                <AlertCircle size={14} className="text-brand-academy shrink-0" /> O Academy é uma ferramenta de apoio clínico de uso pessoal do aluno. Siga sempre as orientações oficiais dos professores e preceptores da sua universidade.
             </p>
          </div>
        </div>
      </Section>

      {/* 7. TRANSITION ZONE: For graduate convertibility */}
      <Section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <div className="inline-block px-4 py-1.5 bg-brand-green/5 rounded-full text-[10px] font-mono font-bold text-brand-green uppercase tracking-widest mb-8">Pós-Formatura</div>
           <h3 className="text-3xl md:text-5xl font-bold text-brand-text tracking-tight mb-6">Está no último ano ou acabou de se formar?</h3>
           <p className="text-base md:text-xl text-brand-text/50 mb-12 font-semibold leading-relaxed max-w-2xl mx-auto">Quando colar grau, você não precisará trocar de sistema nem começar do zero. Transfira seus dados do Academy para o OdontoHub Pro com apenas um clique e continue organizando sua agenda de consultório, financeiro e tratamentos de forma simples.</p>
           <Link to="/" id="link-pro-conversion">
              <Button variant="primary" className="px-10 py-5 rounded-2xl font-bold shadow-xl shadow-brand-green/20">
                Conhecer o OdontoHub Pro
              </Button>
           </Link>
        </div>
      </Section>

      {/* 8. CTA FINAL: Focus on instant conversion, not generic branding slogans */}
      <Section className="pb-16 md:pb-32">
        <div className="bg-brand-academy rounded-[2.5rem] md:rounded-[5rem] p-8 md:p-24 text-center text-white relative overflow-hidden mx-4 md:mx-5">
           <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center border border-white/20 mb-8">
                 <GraduationCap size={32} />
              </div>
              <h2 className="text-3xl md:text-6xl font-bold tracking-tight mb-6 md:mb-10 leading-tight">Entre na clínica com tudo sob controle.<br />Experimente o seu Academy.</h2>
              <p className="text-base md:text-xl text-white/70 mb-12 font-medium leading-relaxed max-w-2xl">
                 Sem cadernos bagunçados, sem desespero com instrumentais perdidos e sem ansiedade antes do atendimento clínico começar. Organize sua rotina a partir de hoje.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                 <a href="https://academy.odontohub.app.br" id="btn-final-register" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto !bg-white !text-brand-academy px-10 md:px-12 py-5 md:py-6 rounded-2xl font-bold shadow-2xl">Criar conta gratuita de aluno</Button>
                 </a>
                 <a href="#fluxo" id="btn-final-learn" className="w-full sm:w-auto">
                    <Button variant="ghost" className="w-full sm:w-auto text-white hover:bg-white/10 px-8 py-5 md:py-6 rounded-2xl font-bold">Ver funcionamento</Button>
                  </a>
              </div>
           </div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/[0.03] rounded-full blur-[100px] pointer-events-none" />
        </div>
      </Section>
    </div>
  );
}
