import React from 'react';
import { motion } from 'motion/react';
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
  Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Section } from '../components/shared/UI';

// --- Components ---

const ProductMockup = ({ title, content, type = "mobile" }: { title: string, content?: React.ReactNode, type?: "mobile" | "desktop" }) => (
  <div className={`relative ${type === "mobile" ? "max-w-[280px] xs:max-w-[300px]" : "max-w-4xl"} mx-auto group`}>
    <div className="absolute -inset-4 bg-brand-academy/5 rounded-[2.5rem] blur-2xl group-hover:bg-brand-academy/10 transition-all duration-500" />
    <div className={`relative bg-white border border-brand-border rounded-[2rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden ${type === "mobile" ? "aspect-[9/18.5]" : "aspect-video"}`}>
      {/* App Header Area / Status Bar */}
      <div className="h-10 px-6 flex items-center justify-between bg-white">
        <div className="text-[10px] font-bold text-slate-400">9:41</div>
        <div className="flex gap-1.5 items-center">
          <div className="w-4 h-2 bg-slate-200 rounded-full" />
          <div className="w-2 h-2 bg-slate-200 rounded-full" />
        </div>
      </div>
      
      {/* App Content */}
      <div className="flex flex-col h-full bg-slate-50/30">
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

const FeatureCard = ({ icon: Icon, title, desc, delay = 0 }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="p-6 md:p-10 bg-brand-bg-alt rounded-[2rem] md:rounded-[2.5rem] border border-transparent hover:border-brand-academy/20 hover:bg-white hover:shadow-xl transition-all duration-500"
  >
    <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-sm group-hover:bg-brand-academy transition-colors">
      <Icon className="text-brand-academy" size={24} />
    </div>
    <h4 className="text-xl md:text-2xl font-bold text-brand-text mb-3 md:mb-4 tracking-tight">{title}</h4>
    <p className="text-sm md:text-base text-brand-text/60 leading-relaxed font-medium">{desc}</p>
  </motion.div>
);

// --- Main Page ---

export default function Academy() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO: Apple-like refinement */}
      <Section className="pt-24 md:pt-40 pb-16 md:pb-20 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-academy/5 border border-brand-academy/10 text-brand-academy rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-6 md:mb-10">
                <GraduationCap size={12} className="shrink-0" /> Academy: Criado para Estudantes
              </div>
              <h1 className="text-4xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-brand-text mb-6 md:mb-8 leading-[1.1] md:leading-[1.05]">
                Chegue mais preparado<br className="hidden md:block" />
                na <span className="text-brand-academy">clínica da faculdade.</span>
              </h1>
              <p className="text-base md:text-xl lg:text-2xl text-brand-text/50 max-w-3xl mx-auto mb-10 md:mb-16 leading-relaxed font-medium px-4 md:px-0">
                O Academy organiza seus casos, checklists e evolução clínica.<br className="hidden md:block" />
                Um sistema de apoio para você focar no que importa: aprender cuidando.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5">
                <a href="https://academy.odontohub.app.br" className="w-full sm:w-auto">
                  <Button variant="academy" className="w-full px-10 md:px-12 py-5 md:py-6 text-base md:text-lg font-bold shadow-2xl shadow-brand-academy/25">
                    Começar grátis como aluno
                  </Button>
                </a>
                <Button variant="ghost" className="w-full sm:w-auto text-brand-text/60 hover:text-brand-academy flex items-center justify-center gap-2 font-bold group py-4">
                  Ver como funciona <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Main Mockup (Desktop/Tablet) - Adjusted for Mobile responsiveness */}
            <div className="relative z-10 p-1.5 md:p-4 bg-slate-50 rounded-[2.5rem] md:rounded-[3.5rem] border border-brand-border shadow-2xl overflow-hidden max-w-5xl mx-auto">
              <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden aspect-auto md:aspect-[16/10] shadow-inner flex flex-col">
                <div className="p-6 md:p-16 space-y-8 md:space-y-12">
                   <div className="space-y-2 md:space-y-4">
                      <p className="text-slate-400 font-medium text-sm md:text-lg">Boa noite, Samuel</p>
                      <h2 className="text-2xl md:text-6xl font-bold text-brand-text tracking-tight max-w-2xl leading-[1.2] md:leading-[1.1]">
                        Sem pressa. O próximo caso já está na mão.
                      </h2>
                   </div>

                   <div className="bg-brand-academy rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-10 text-white relative overflow-hidden group">
                      <div className="relative z-10">
                        <p className="text-[8px] font-bold text-white/50 uppercase tracking-widest mb-1 md:mb-2">Próximo</p>
                        <div className="flex justify-between items-start mb-6 md:mb-10">
                          <div>
                            <h4 className="text-xl md:text-5xl font-bold tracking-tight">Marcos Roberto Junior</h4>
                            <div className="flex gap-1.5 md:gap-2 mt-3 md:mt-4">
                              <span className="px-3 py-1 bg-white/20 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-widest">Agendado</span>
                              <span className="px-3 py-1 bg-white/10 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-widest">Amanhã, 09:30</span>
                            </div>
                          </div>
                          <div className="w-10 h-10 md:w-16 md:h-16 bg-white/20 rounded-lg md:rounded-2xl flex items-center justify-center text-lg md:text-2xl font-bold">M</div>
                        </div>
                      </div>
                      <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-white/5 rounded-full blur-3xl -mr-24 -mt-24 md:-mr-32 md:-mt-32" />
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className="p-4 md:p-8 bg-slate-50 rounded-2xl md:rounded-3xl border border-slate-100 flex items-center gap-3 md:gap-4">
                         <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg md:rounded-xl flex items-center justify-center text-brand-academy shadow-sm shrink-0">
                            <Clock size={20} />
                         </div>
                         <div>
                            <p className="text-[8px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Próxima Revisão</p>
                            <p className="font-bold text-brand-text text-xs md:text-base">Endo • Em 8 min</p>
                         </div>
                      </div>
                      <div className="p-4 md:p-8 bg-slate-50 rounded-2xl md:rounded-3xl border border-slate-100 flex items-center gap-3 md:gap-4">
                         <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg md:rounded-xl flex items-center justify-center text-brand-academy shadow-sm shrink-0">
                            <Target size={20} />
                         </div>
                         <div>
                            <p className="text-[8px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Casos Ativos</p>
                            <p className="font-bold text-brand-text text-xs md:text-base tracking-tight">14 casos este semestre</p>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="mt-auto h-16 md:h-20 bg-white border-t border-slate-100 flex items-center justify-around px-4 md:px-8">
                   <div className="flex flex-col items-center gap-1 text-brand-academy">
                      <Layout size={18} />
                      <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest">Rotina</span>
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

            {/* Mobile Floaties for depth - Hidden on very small screens, visible on md and up */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 md:right-0 bottom-10 md:bottom-20 z-20 hidden lg:block"
            >
              <ProductMockup 
                title="Modo Box" 
                content={
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-center mb-10">
                       <span className="text-xs font-bold text-slate-400">Modo Box</span>
                       <span className="px-2 py-0.5 bg-slate-100 rounded text-[8px] font-bold">DURANTE</span>
                    </div>
                    <div className="space-y-6">
                       <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest text-center">ETAPA 3 DE 4</p>
                       <h4 className="text-2xl font-bold text-brand-text leading-tight text-center">Agora é só seguir a próxima parte</h4>
                       
                       <div className="space-y-4 pt-4">
                          {[
                            "Selecionar cor antes de isolar",
                            "Isolar e controlar umidade",
                            "Remover tecido cariado/preparo"
                          ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                               <div className="w-5 h-5 rounded-full bg-brand-academy/10 flex items-center justify-center text-brand-academy text-[10px] font-bold">{i+1}</div>
                               <p className="text-[10px] font-bold text-slate-600">{item}</p>
                            </div>
                          ))}
                       </div>

                       <div className="pt-10 space-y-2">
                          <div className="w-full h-12 bg-brand-academy rounded-2xl flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-brand-academy/20">Terminei essa parte</div>
                          <div className="w-full h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 text-xs font-bold">Travei um pouco</div>
                       </div>
                    </div>
                  </div>
                }
              />
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* 2. THE PROBLEM: Empathy through clarity */}
      <Section className="bg-slate-50">
        <div className="max-w-6xl mx-auto">
           <div className="max-w-3xl mb-12 md:mb-24 px-2 md:px-0">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-text mb-6 md:mb-8 leading-[1.2] md:leading-tight">
                A clínica da faculdade já é tensa o suficiente.
              </h2>
              <p className="text-lg md:text-xl text-brand-text/50 font-medium leading-relaxed">
                Agenda cheia, materiais esquecidos na esterilização ou evolução atrasada. O Academy resolve o "ruído" administrativo para você focar no paciente e no seu aprendizado.
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <FeatureCard 
                icon={Target}
                title="Chega de casos perdidos."
                desc="Centralize o histórico, fotos e a evolução de todos os seus pacientes de todas as disciplinas em um só lugar. Nada de papéis perdidos na mochila."
                delay={0.1}
              />
              <FeatureCard 
                icon={ClipboardList}
                title="Materiais prontos?"
                desc="Checklists automáticos por procedimento. O Academy avisa o que você precisa separar e levar para a esterilização."
                delay={0.2}
              />
              <FeatureCard 
                icon={Brain}
                title="Segurança Clínica."
                desc="Revise os pontos críticos do caso antes de entrar no box. Saiba exatamente qual a conduta para aquele paciente específico."
                delay={0.3}
              />
              <FeatureCard 
                icon={Zap}
                title="Evolução sem esforço."
                desc="Registre o atendimento no final da clínica com uma estrutura guiada e clara. Ganhe tempo para estudar o que realmente importa."
                delay={0.4}
              />
           </div>
        </div>
      </Section>

      {/* 3. THE SOLUTION: The 3-Step Flow (Apple-ish visual) */}
      <Section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
             <p className="text-[10px] font-bold text-brand-academy uppercase mb-4 tracking-[0.2em]">O FLUXO Academy</p>
             <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-text">Organização em 3 tempos.</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-12 relative px-2 md:px-0">
            {/* Progress line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-100 hidden lg:block -translate-y-12" />

            {[
              { 
                step: "01", 
                t: "Preparar", 
                d: "Revise o planejamento, separe os materiais via checklist e organize as fotos do caso anterior.",
                icon: Layout,
                mockup: (
                  <div className="mt-8 p-6 bg-white border border-brand-border rounded-[2rem] shadow-sm space-y-4 w-full">
                    <div className="flex items-center gap-2">
                       <div className="w-5 h-5 bg-brand-academy/10 rounded flex items-center justify-center text-brand-academy">
                          <ClipboardList size={12} />
                       </div>
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">REVISÃO CURTA</p>
                    </div>
                    <div>
                       <h5 className="font-bold text-brand-text text-sm">Endo</h5>
                       <p className="text-[10px] text-slate-400 font-medium tracking-tight">Ligada ao atendimento de Marcos.</p>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                       <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
                          <Clock size={12} /> 8 min
                       </div>
                       <div className="px-5 py-2 bg-brand-academy text-white text-[10px] font-bold rounded-xl shadow-lg shadow-brand-academy/10">Revisar</div>
                    </div>
                  </div>
                )
              },
              { 
                step: "02", 
                t: "Atender", 
                d: "Use o Modo Box no tablet ou celular para guiar o atendimento e não esquecer etapas críticas.",
                icon: Smartphone,
                mockup: (
                  <div className="mt-8 p-6 bg-brand-academy rounded-[2rem] shadow-lg space-y-4 w-full text-white overflow-hidden relative">
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                         <div className="text-[8px] font-bold opacity-40 uppercase tracking-widest">Etapa 3 de 4</div>
                         <div className="w-2 h-2 rounded-full bg-white/20 animate-pulse" />
                      </div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full mb-6">
                         <div className="h-full w-3/4 bg-white rounded-full" />
                      </div>
                      <h5 className="font-bold text-sm tracking-tight mb-4 leading-tight">Procedimento em curso: Removendo tecido...</h5>
                      <div className="px-4 py-2.5 bg-white text-brand-academy text-[10px] font-bold rounded-xl text-center">Próximo Passo</div>
                    </div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16" />
                  </div>
                )
              },
              { 
                step: "03", 
                t: "Registrar", 
                d: "Finalize a clínica com a evolução pronta, seguindo os padrões exigidos pelos seus professores.",
                icon: Eye,
                mockup: (
                  <div className="mt-8 p-6 bg-slate-50 border border-slate-100 rounded-[2rem] space-y-3 w-full">
                    <div className="flex items-center gap-3">
                       <CheckCircle2 size={16} className="text-emerald-500" />
                       <div className="h-2 w-32 bg-slate-200 rounded-full" />
                    </div>
                    <div className="flex items-center gap-3">
                       <CheckCircle2 size={16} className="text-emerald-500" />
                       <div className="h-2 w-24 bg-slate-200 rounded-full" />
                    </div>
                    <div className="flex items-center gap-3 opacity-30">
                       <div className="w-4 h-4 rounded-md border border-slate-300" />
                       <div className="h-2 w-28 bg-slate-200 rounded-full" />
                    </div>
                    <div className="pt-2">
                       <div className="h-10 w-full bg-slate-200/50 rounded-xl border border-dashed border-slate-300 flex items-center justify-center text-[10px] font-bold text-slate-400">Assinatura do Preceptor</div>
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
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left w-full h-full"
              >
                <div className="w-24 h-24 rounded-[2rem] bg-white border border-brand-border shadow-xl flex items-center justify-center mb-10 text-brand-academy outline outline-1 outline-brand-academy/10 group hover:scale-105 transition-transform duration-500">
                  <item.icon size={40} strokeWidth={1.5} />
                </div>
                <div className="text-[10px] font-bold text-brand-academy/40 uppercase mb-2 tracking-widest">Passo {item.step}</div>
                <h4 className="text-3xl font-bold text-brand-text mb-4 tracking-tight">{item.t}</h4>
                <p className="text-brand-text/50 font-medium leading-relaxed mb-6">{item.d}</p>
                
                {/* Visual Mockup element */}
                <div className="w-full mt-auto">
                   {item.mockup}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. MODO BOX: Focused highlight */}
      <Section className="bg-brand-academy py-24 md:py-32 text-white rounded-[2rem] md:rounded-[5rem] mx-4 md:mx-5 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-white/5 rounded-full blur-[80px] md:blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="max-w-6xl mx-auto px-2 md:px-5 relative z-10">
           <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-32">
              <div className="w-full lg:w-1/2">
                <div className="inline-flex items-center gap-2.5 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 text-white rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider mb-6 md:mb-8">
                  <Smartphone size={14} /> Modo Box
                </div>
                <h2 className="text-3xl md:text-6xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.1]">
                  Menos estresse,<br/> mais apoio clínico.
                </h2>
                <p className="text-lg md:text-xl text-white/70 mb-8 md:mb-10 leading-relaxed font-medium">
                  Ative o Modo Box durante o atendimento. Com interface simplificada e de alto contraste, você tem acesso rápido ao checklist do procedimento e observações cruciais do preceptor.
                </p>
                <div className="space-y-4 md:space-y-6">
                  {["Interface otimizada para iPad/Tablet", "Acesso rápido a checklists", "Resumo do planejamento", "Timer de procedimento"].map(f => (
                    <div key={f} className="flex items-center gap-3 font-semibold text-base md:text-lg">
                      <CheckCircle2 size={20} className="text-white/30 shrink-0" /> {f}
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center mt-12 lg:mt-0">
                 <div className="relative p-2 md:p-3 bg-white/10 rounded-[2.5rem] md:rounded-[4rem] backdrop-blur-xl border border-white/20 shadow-2xl">
                    <ProductMockup 
                      title="Modo Box" 
                      content={
                        <div className="p-8 flex flex-col h-full bg-white">
                          <div className="flex justify-between items-center mb-12">
                             <span className="text-sm font-bold text-slate-400">Modo Box</span>
                             <span className="px-3 py-1 bg-brand-academy/10 text-brand-academy rounded text-[10px] font-bold">DURANTE</span>
                          </div>
                          
                          <div className="space-y-8">
                             <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 italic">PRONTUÁRIO</p>
                                <h4 className="text-3xl font-bold text-brand-text tracking-tight">Checklist de Endodontia</h4>
                             </div>

                             <div className="space-y-4">
                                {[
                                  { t: "Isolamento absoluto", c: true },
                                  { t: "Abertura coronária", c: true },
                                  { t: "Localização de canais", c: false },
                                  { t: "Odontometria", c: false }
                                ].map((item, i) => (
                                  <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                     <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center ${item.c ? 'bg-brand-academy border-brand-academy text-white' : 'border-slate-200 bg-white'}`}>
                                        {item.c && <CheckCircle2 size={14} />}
                                     </div>
                                     <p className="font-bold text-brand-text text-sm">{item.t}</p>
                                  </div>
                                ))}
                             </div>

                             <div className="pt-6">
                                <div className="w-full h-16 bg-brand-academy rounded-[1.2rem] flex items-center justify-center text-white font-bold shadow-xl shadow-brand-academy/20 group">
                                   Próxima Etapa <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
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

      {/* 5. PRICING: Simple, clean */}
      <Section id="planos">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-24">
             <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-text mb-4 md:mb-6 leading-tight">Comece agora.</h2>
             <p className="text-lg md:text-xl text-brand-text/50 font-medium px-4 md:px-0">Planos pensados para quem ainda está estudando.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto px-2 md:px-0">
             {/* Plan 1 */}
             <div className="bg-slate-50 border border-brand-border rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 flex flex-col h-full hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="mb-8 md:mb-10">
                  <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Academy Free</h3>
                  <p className="text-brand-text/40 font-medium uppercase text-[10px] tracking-widest mb-4 md:mb-6">Para o básico</p>
                  <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">R$0 <span className="text-sm font-medium opacity-30">p/semestre</span></div>
                </div>
                <div className="flex-grow space-y-3.5 md:space-y-4 mb-10 md:mb-12">
                   {["Até 5 casos ativos", "Checklists básicos", "Agenda de atendimentos", "Evolução básica"].map(f => (
                     <div key={f} className="flex items-center gap-3 text-brand-text/70 font-semibold text-sm md:text-base">
                        <CheckCircle2 size={16} className="text-brand-academy/30 shrink-0" /> {f}
                     </div>
                   ))}
                </div>
                <Button variant="outline" className="w-full py-4 md:py-5 rounded-2xl border-2 font-bold hover:bg-brand-bg-alt">Começar grátis</Button>
             </div>
             
             {/* Plan 2 */}
             <div className="bg-brand-academy border border-brand-academy rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 flex flex-col h-full text-white shadow-2xl shadow-brand-academy/20 group md:hover:scale-[1.02] transition-transform duration-500 mt-4 md:mt-0">
                <div className="mb-8 md:mb-10">
                  <div className="flex justify-between items-start mb-1 md:mb-2 text-white">
                    <h3 className="text-xl md:text-2xl font-bold">Academy Student</h3>
                    <div className="px-3 py-1 bg-white/10 rounded-full text-[8px] md:text-[9px] font-bold tracking-widest uppercase">Mais popular</div>
                  </div>
                  <p className="text-white/40 font-medium uppercase text-[10px] tracking-widest mb-4 md:mb-6">Tudo ilimitado</p>
                  <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">R$25 <span className="text-sm font-medium opacity-30">/mês</span></div>
                </div>
                <div className="flex-grow space-y-3.5 md:space-y-4 mb-10 md:mb-12 text-white/80">
                   {["Casos ilimitados", "Checklists completos", "Modo Box Premium", "Evolução pro", "Banco de fotos ilimitado", "Exportação de casos"].map(f => (
                     <div key={f} className="flex items-center gap-3 font-semibold text-sm md:text-base">
                        <CheckCircle2 size={16} className="text-white/30 shrink-0" /> {f}
                     </div>
                   ))}
                </div>
                <Button variant="outline" className="w-full py-4 md:py-5 rounded-2xl !bg-white !text-brand-academy !border-none font-bold">Assinar Academy Student</Button>
             </div>
          </div>
        </div>
      </Section>

      {/* 6. FAQ: Elegant details */}
      <Section className="bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Dúvidas comuns" />
          <div className="space-y-4 px-2 md:px-0">
            {[
              { q: "O Academy substitui o sistema da faculdade?", a: "Não. O Academy é uma ferramenta de organização pessoal do aluno. Ele ajuda você a chegar mais preparado no box. O registro oficial para a instituição continua sendo feito conforme as regras da sua faculdade." },
              { q: "Funciona no iPad ou Tablet?", a: "Sim! Ele foi desenhado especialmente para telas de tablets, com botões e interfaces focadas no uso clínico (Modo Box)." },
              { q: "E quando eu me formar?", a: "Ao se formar, você pode migrar todos os seus dados para o OdontoHub Pro com um clique, mantendo seu histórico e evoluções." },
              { q: "A faculdade precisa autorizar?", a: "Não. O Academy é de uso pessoal do estudante, como um caderno ou diário clínico, só que digital e inteligente." },
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-[1.5rem] md:rounded-3xl border border-brand-border overflow-hidden">
                <summary className="flex items-center justify-between p-6 md:p-8 cursor-pointer font-bold text-brand-text list-none transition-all hover:bg-slate-50">
                  <span className="text-base md:text-lg pr-4">{faq.q}</span>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 group-open:rotate-180 transition-transform">
                    <ChevronRight size={18} />
                  </div>
                </summary>
                <div className="px-6 pb-6 md:px-8 md:pb-8 text-brand-text/60 leading-relaxed font-medium text-sm md:text-lg border-t border-slate-50 pt-4 md:pt-0 md:border-none">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
          
          <div className="mt-12 md:mt-16 p-6 md:p-8 bg-white border border-brand-border rounded-[1.5rem] md:rounded-[2rem] text-center mx-2 md:mx-0">
             <p className="text-[10px] md:text-sm text-brand-text/40 flex items-center justify-center gap-2 font-medium">
                <AlertCircle size={14} className="text-brand-academy shrink-0" /> O Academy é uma ferramenta de apoio. Nunca substitua a orientação do seu professor ou preceptor.
             </p>
          </div>
        </div>
      </Section>

      {/* 7. TRANSITION: Refined PRO prompt */}
      <Section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-5 text-center">
           <div className="inline-block px-4 py-1.5 bg-slate-100 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8">OdontoHub para Profissionais</div>
           <h3 className="text-3xl md:text-5xl font-bold text-brand-text mb-8">Já se formou?</h3>
           <p className="text-xl text-brand-text/50 mb-12 font-medium">O OdontoHub Pro ajuda dentistas formados a gerir agenda, retornos e finanças com a mesma elegância e simplicidade.</p>
           <Link to="/">
              <Button variant="primary" className="px-10 py-5 rounded-2xl font-bold shadow-xl shadow-brand-green/20">
                Conhecer o OdontoHub Pro
              </Button>
           </Link>
        </div>
      </Section>

      {/* 8. CTA FINAL: The "Apple-ish" closure */}
      <Section className="pb-16 md:pb-32">
        <div className="bg-brand-academy rounded-[2.5rem] md:rounded-[5rem] p-10 md:p-32 text-center text-white relative overflow-hidden mx-4 md:mx-5">
           <div className="relative z-10">
              <h2 className="text-3xl md:text-7xl font-bold tracking-tight mb-8 md:mb-12 leading-tight">O dentista de amanhã<br className="hidden md:block" /> se organiza hoje.</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                 <a href="https://academy.odontohub.app.br" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto !bg-white !text-brand-academy px-10 md:px-12 py-5 md:py-6 rounded-2xl font-bold shadow-2xl">Começar Grátis agora</Button>
                 </a>
                 <Button variant="ghost" className="w-full sm:w-auto text-white hover:bg-white/10 px-8 py-5 md:py-6 rounded-2xl font-bold">Ver Demonstração</Button>
              </div>
           </div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/[0.03] rounded-full blur-[100px] pointer-events-none" />
        </div>
      </Section>
    </div>
  );
}

const SectionHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="text-center mb-12 md:mb-24 max-w-3xl mx-auto px-4 md:px-0">
    <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-brand-text mb-4 md:mb-8 leading-tight">{title}</h2>
    {subtitle && <p className="text-lg md:text-xl text-brand-text/50 font-medium">{subtitle}</p>}
  </div>
);
