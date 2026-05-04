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

const ProductMockup = ({ title, type = "mobile" }: { title: string, type?: "mobile" | "desktop" }) => (
  <div className={`relative ${type === "mobile" ? "max-w-[280px]" : "max-w-4xl"} mx-auto group`}>
    <div className="absolute -inset-4 bg-brand-academy/5 rounded-[2.5rem] blur-2xl group-hover:bg-brand-academy/10 transition-all duration-500" />
    <div className={`relative bg-white border border-brand-border rounded-[2rem] shadow-2xl overflow-hidden ${type === "mobile" ? "aspect-[9/19]" : "aspect-video"}`}>
      {/* App Header Area */}
      <div className="bg-brand-bg-alt border-b border-brand-border p-4 flex items-center justify-between">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-slate-200" />
          <div className="w-2 h-2 rounded-full bg-slate-200" />
          <div className="w-2 h-2 rounded-full bg-slate-200" />
        </div>
        <p className="text-[10px] font-bold text-brand-text/30 tracking-widest uppercase">{title}</p>
        <div className="w-4 h-4 rounded-full bg-brand-academy/10" />
      </div>
      
      {/* App Content Placeholder */}
      <div className="p-5 flex flex-col h-full bg-white">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-academy/10" />
            <div className="space-y-1.5">
              <div className="h-2 w-24 bg-slate-100 rounded" />
              <div className="h-2 w-16 bg-slate-50 rounded" />
            </div>
          </div>
          <div className="space-y-2 py-4">
            <div className="h-1.5 w-full bg-slate-50 rounded" />
            <div className="h-1.5 w-full bg-slate-50 rounded" />
            <div className="h-1.5 w-3/4 bg-slate-50 rounded" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="h-16 bg-brand-academy/5 rounded-xl border border-brand-academy/10" />
            <div className="h-16 bg-slate-50 rounded-xl" />
          </div>
        </div>
        {type === "mobile" && (
          <div className="mt-auto pb-4">
            <div className="w-full h-10 bg-brand-academy rounded-xl shadow-lg shadow-brand-academy/20" />
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
    className="p-10 bg-brand-bg-alt rounded-[2.5rem] border border-transparent hover:border-brand-academy/20 hover:bg-white hover:shadow-xl transition-all duration-500"
  >
    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-brand-academy transition-colors">
      <Icon className="text-brand-academy" size={28} />
    </div>
    <h4 className="text-2xl font-bold text-brand-text mb-4 tracking-tight">{title}</h4>
    <p className="text-brand-text/60 leading-relaxed font-medium">{desc}</p>
  </motion.div>
);

// --- Main Page ---

export default function Academy() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO: Apple-like refinement */}
      <Section className="pt-28 md:pt-40 pb-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-academy/5 border border-brand-academy/10 text-brand-academy rounded-full text-[10px] font-bold uppercase tracking-widest mb-10">
                <GraduationCap size={12} className="shrink-0" /> Academy: Criado para Estudantes
              </div>
              <h1 className="text-5xl md:text-[5.5rem] font-bold tracking-tight text-brand-text mb-8 leading-[1.05]">
                Chegue mais preparado<br className="hidden md:block" />
                na <span className="text-brand-academy">clínica da faculdade.</span>
              </h1>
              <p className="text-lg md:text-2xl text-brand-text/50 max-w-3xl mx-auto mb-12 md:mb-16 leading-relaxed font-medium">
                O Academy organiza seus casos, checklists e evolução clínica.<br className="hidden md:block" />
                Um sistema de apoio para você focar no que importa: aprender cuidando.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <a href="https://academy.odontohub.app.br" className="w-full sm:w-auto">
                  <Button variant="academy" className="w-full px-12 py-6 text-lg font-bold shadow-2xl shadow-brand-academy/25">
                    Começar grátis como aluno
                  </Button>
                </a>
                <Button variant="ghost" className="w-full sm:w-auto text-brand-text/60 hover:text-brand-academy flex items-center justify-center gap-2 font-bold group">
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
            {/* Main Mockup (Desktop/Tablet) */}
            <div className="relative z-10 p-2 md:p-4 bg-slate-100 rounded-[3rem] border border-brand-border shadow-2xl overflow-hidden max-w-5xl mx-auto">
              <div className="bg-white rounded-[2rem] overflow-hidden aspect-[16/10] shadow-inner flex flex-col">
                <div className="h-14 bg-slate-50 border-b border-slate-100 flex items-center px-6 justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/20" />
                    <div className="w-3 h-3 rounded-full bg-amber-400/20" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400/20" />
                  </div>
                  <div className="px-4 py-1.5 bg-brand-academy/5 text-brand-academy text-[9px] font-bold rounded-full">MODO CLÍNICA ATIVADO</div>
                  <div className="w-8 h-8 rounded-full bg-slate-100" />
                </div>
                
                <div className="flex-grow grid grid-cols-12">
                  <div className="col-span-3 border-r border-slate-50 p-6 space-y-8">
                     <div className="space-y-4">
                        <div className="h-10 w-full bg-slate-100 rounded-xl" />
                        <div className="h-8 w-2/3 bg-slate-50 rounded-xl" />
                     </div>
                     <div className="space-y-4 pt-10">
                        <div className="h-1 text-[10px] font-bold text-slate-300 tracking-widest uppercase">Próximos Casos</div>
                        <div className="h-12 w-full bg-slate-50 rounded-xl outline outline-1 outline-brand-academy/20" />
                        <div className="h-12 w-full bg-slate-50/50 rounded-xl" />
                     </div>
                  </div>
                  <div className="col-span-9 p-8 md:p-12">
                     <div className="flex justify-between items-start mb-12">
                        <div>
                          <p className="text-[10px] font-bold text-brand-academy tracking-widest uppercase mb-2">Paciente de Hoje</p>
                          <h4 className="text-4xl font-bold text-brand-text mb-2 tracking-tight">Maria das Dores</h4>
                          <p className="text-slate-400 font-medium">Extração de 16 • Técnica Anestésica Infiltrativa</p>
                        </div>
                        <div className="flex gap-2">
                           <div className="px-4 py-2 bg-slate-100 rounded-xl text-xs font-bold">Ver RX</div>
                           <div className="px-4 py-2 bg-brand-academy text-white rounded-xl text-xs font-bold shadow-lg shadow-brand-academy/20">Iniciar Modo Box</div>
                        </div>
                     </div>
                     
                     <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-2 space-y-6">
                            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Checklist de Materiais</p>
                               <div className="space-y-3">
                                  {[true, true, false].map((c, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${c ? 'bg-brand-academy border-brand-academy text-white' : 'border-slate-200 bg-white'}`}>
                                        {c && <CheckCircle2 size={12} />}
                                      </div>
                                      <div className={`h-2 rounded ${c ? 'w-24 bg-brand-academy/20' : 'w-32 bg-slate-200'}`} />
                                    </div>
                                  ))}
                               </div>
                            </div>
                        </div>
                        <div className="col-span-1 bg-brand-academy/5 rounded-3xl p-6 border border-brand-academy/10">
                            <p className="text-[10px] font-bold text-brand-academy uppercase mb-4">Observação Clínica</p>
                            <div className="h-1 w-full bg-brand-academy/10 rounded mb-2" />
                            <div className="h-1 w-full bg-brand-academy/10 rounded mb-2" />
                            <div className="h-1 w-2/3 bg-brand-academy/10 rounded" />
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Floaties for depth */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 md:right-0 bottom-10 md:bottom-20 z-20 hidden md:block"
            >
              <ProductMockup title="Modo Box" />
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* 2. THE PROBLEM: Empathy through clarity */}
      <Section className="bg-slate-50 py-32 md:py-48">
        <div className="max-w-6xl mx-auto px-5">
           <div className="max-w-3xl mb-24">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-brand-text mb-8">
                A clínica da faculdade já é tensa o suficiente.
              </h2>
              <p className="text-xl text-brand-text/50 font-medium">
                Agenda cheia, materiais esquecidos na esterilização ou evolução atrasada. O Academy resolve o "ruído" administrativo para você focar no paciente e no seu aprendizado.
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      <Section className="py-32 md:py-48">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-24">
             <p className="text-[10px] font-bold text-brand-academy uppercase mb-4 tracking-[0.2em]">O FLUXO Academy</p>
             <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-brand-text">Organização em 3 tempos.</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 md:gap-12 relative">
            {/* Progress line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-100 hidden lg:block -translate-y-12" />

            {[
              { 
                step: "01", 
                t: "Preparar", 
                d: "Revise o planejamento, separe os materiais via checklist e organize as fotos do caso anterior.",
                icon: Layout
              },
              { 
                step: "02", 
                t: "Atender", 
                d: "Use o Modo Box no tablet ou celular para guiar o atendimento e não esquecer etapas críticas.",
                icon: Smartphone
              },
              { 
                step: "03", 
                t: "Registrar", 
                d: "Finalize a clínica com a evolução pronta, seguindo os padrões exigidos pelos seus professores.",
                icon: Eye
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                <div className="w-24 h-24 rounded-[2rem] bg-white border border-brand-border shadow-xl flex items-center justify-center mb-10 text-brand-academy outline outline-1 outline-brand-academy/10 group hover:scale-105 transition-transform duration-500">
                  <item.icon size={40} strokeWidth={1.5} />
                </div>
                <div className="text-[10px] font-bold text-brand-academy/40 uppercase mb-2 tracking-widest">Passo {item.step}</div>
                <h4 className="text-3xl font-bold text-brand-text mb-4 tracking-tight">{item.t}</h4>
                <p className="text-brand-text/50 font-medium leading-relaxed">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. MODO BOX: Focused highlight */}
      <Section className="bg-brand-academy py-32 md:py-48 text-white rounded-[3rem] md:rounded-[5rem] mx-5 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="max-w-6xl mx-auto px-5 relative z-10">
           <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
              <div className="w-full lg:w-1/2">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/10 text-white rounded-full text-xs font-bold uppercase tracking-wider mb-8">
                  <Smartphone size={14} /> Modo Box
                </div>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
                  Menos estresse,<br/> mais apoio clínico.
                </h2>
                <p className="text-xl text-white/70 mb-10 leading-relaxed font-medium">
                  Ative o Modo Box durante o atendimento. Com interface simplificada e de alto contraste, você tem acesso rápido ao checklist do procedimento e observações cruciais do preceptor.
                </p>
                <div className="space-y-6">
                  {["Interface otimizada para iPad/Tablet", "Acesso rápido a checklists", "Resumo do planejamento", "Timer de procedimento"].map(f => (
                    <div key={f} className="flex items-center gap-3 font-semibold text-lg">
                      <CheckCircle2 size={24} className="text-white/30" /> {f}
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center">
                 <div className="relative p-3 bg-white/10 rounded-[3rem] backdrop-blur-xl border border-white/20 shadow-2xl">
                    <ProductMockup title="Modo Box" />
                 </div>
              </div>
           </div>
        </div>
      </Section>

      {/* 5. PRICING: Simple, clean */}
      <Section className="py-32 md:py-48" id="planos">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-24">
             <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-brand-text mb-6">Comece agora.</h2>
             <p className="text-xl text-brand-text/50 font-medium">Planos pensados para quem ainda está estudando.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
             {/* Plan 1 */}
             <div className="bg-slate-50 border border-brand-border rounded-[3rem] p-12 flex flex-col h-full hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="mb-10">
                  <h3 className="text-2xl font-bold mb-2">Academy Free</h3>
                  <p className="text-brand-text/40 font-medium uppercase text-[10px] tracking-widest mb-6">Para o básico</p>
                  <div className="text-5xl font-bold mb-2 tracking-tight">R$0 <span className="text-sm font-medium opacity-30">p/semestre</span></div>
                </div>
                <div className="flex-grow space-y-4 mb-12">
                   {["Até 5 casos ativos", "Checklists básicos", "Agenda de atendimentos", "Evolução básica"].map(f => (
                     <div key={f} className="flex items-center gap-3 text-brand-text/70 font-semibold">
                        <CheckCircle2 size={16} className="text-brand-academy/30" /> {f}
                     </div>
                   ))}
                </div>
                <Button variant="outline" className="w-full py-5 rounded-2xl border-2 font-bold hover:bg-brand-bg-alt">Começar grátis</Button>
             </div>
             
             {/* Plan 2 */}
             <div className="bg-brand-academy border border-brand-academy rounded-[3rem] p-12 flex flex-col h-full text-white shadow-2xl shadow-brand-academy/20 group hover:scale-[1.02] transition-transform duration-500">
                <div className="mb-10">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold">Academy Student</h3>
                    <div className="px-3 py-1 bg-white/10 rounded-full text-[9px] font-bold tracking-widest uppercase">Mais popular</div>
                  </div>
                  <p className="text-white/40 font-medium uppercase text-[10px] tracking-widest mb-6">Tudo ilimitado</p>
                  <div className="text-5xl font-bold mb-2 tracking-tight">R$25 <span className="text-sm font-medium opacity-30">/mês</span></div>
                </div>
                <div className="flex-grow space-y-4 mb-12 text-white/80">
                   {["Casos ilimitados", "Checklists completos", "Modo Box Premium", "Evolução pro", "Banco de fotos ilimitado", "Exportação de casos"].map(f => (
                     <div key={f} className="flex items-center gap-3 font-semibold">
                        <CheckCircle2 size={16} className="text-white/30" /> {f}
                     </div>
                   ))}
                </div>
                <Button variant="outline" className="w-full py-5 rounded-2xl !bg-white !text-brand-academy !border-none font-bold">Assinar Academy Student</Button>
             </div>
          </div>
        </div>
      </Section>

      {/* 6. FAQ: Elegant details */}
      <Section className="bg-slate-50 py-32 md:py-48 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-5">
          <SectionHeader title="Dúvidas comuns" />
          <div className="space-y-4">
            {[
              { q: "O Academy substitui o sistema da faculdade?", a: "Não. O Academy é uma ferramenta de organização pessoal do aluno. Ele ajuda você a chegar mais preparado no box. O registro oficial para a instituição continua sendo feito conforme as regras da sua faculdade." },
              { q: "Funciona no iPad ou Tablet?", a: "Sim! Ele foi desenhado especialmente para telas de tablets, com botões e interfaces focadas no uso clínico (Modo Box)." },
              { q: "E quando eu me formar?", a: "Ao se formar, você pode migrar todos os seus dados para o OdontoHub Pro com um clique, mantendo seu histórico e evoluções." },
              { q: "A faculdade precisa autorizar?", a: "Não. O Academy é de uso pessoal do estudante, como um caderno ou diário clínico, só que digital e inteligente." },
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-3xl border border-brand-border overflow-hidden">
                <summary className="flex items-center justify-between p-8 cursor-pointer font-bold text-brand-text list-none transition-all hover:bg-slate-50">
                  {faq.q}
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-open:rotate-180 transition-transform">
                    <ChevronRight size={20} />
                  </div>
                </summary>
                <div className="px-8 pb-8 text-brand-text/60 leading-relaxed font-medium text-lg">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
          
          <div className="mt-16 p-8 bg-white border border-brand-border rounded-[2rem] text-center">
             <p className="text-sm text-brand-text/40 flex items-center justify-center gap-2 font-medium">
                <AlertCircle size={14} className="text-brand-academy" /> O Academy é uma ferramenta de apoio. Nunca substitua a orientação do seu professor ou preceptor.
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
      <Section className="pb-24 md:pb-32">
        <div className="bg-brand-academy rounded-[3rem] md:rounded-[5rem] p-16 md:p-32 text-center text-white relative overflow-hidden mx-5">
           <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">O dentista de amanhã<br className="hidden md:block" /> se organiza hoje.</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                 <a href="https://academy.odontohub.app.br" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto !bg-white !text-brand-academy px-12 py-6 rounded-2xl font-bold shadow-2xl">Começar Grátis agora</Button>
                 </a>
                 <Button variant="ghost" className="text-white hover:bg-white/10 px-8 py-6 rounded-2xl font-bold">Ver Demonstração</Button>
              </div>
           </div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/[0.03] rounded-full blur-[100px] pointer-events-none" />
        </div>
      </Section>
    </div>
  );
}

const SectionHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="text-center mb-24 max-w-3xl mx-auto">
    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-brand-text mb-8">{title}</h2>
    {subtitle && <p className="text-xl text-brand-text/50 font-medium">{subtitle}</p>}
  </div>
);
