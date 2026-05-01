import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  CheckCircle2, 
  Brain, 
  Clock, 
  Calendar,
  PlusCircle, 
  ArrowRight,
  ClipboardList,
  AlertCircle,
  ShieldCheck,
  ChevronRight,
  UserCircle,
  BookOpen,
  Zap,
  Target,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Section, SectionHeader } from '../components/shared/UI';

const AcademyMockup = () => (
  <div className="relative w-full max-w-4xl mx-auto mt-12 md:mt-20 p-1.5 md:p-3 bg-white rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border border-brand-border overflow-hidden">
    <div className="bg-brand-bg-alt rounded-[2rem] md:rounded-[2.5rem] border border-brand-border flex flex-col min-h-[500px] md:min-h-[600px] overflow-hidden relative">
      <div className="pt-8 md:pt-10 px-5 md:px-12 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-brand-purple/10 text-brand-purple text-[10px] font-bold rounded uppercase tracking-wider">Modo Clínica Faculdade</span>
        </div>
        <h3 className="text-xl md:text-3xl font-bold text-brand-text mb-4 md:mb-6 leading-tight">
          Próximo paciente: Extração 16. <br/><span className="text-brand-purple text-base md:text-xl">Checklist de materiais pronto?</span>
        </h3>
        
        <div className="bg-white border border-brand-purple/10 p-4 md:p-5 rounded-2xl flex flex-col gap-4 text-left max-w-lg mx-auto mb-8 shadow-sm">
          <div className="flex justify-between items-center">
            <p className="text-[10px] font-bold text-brand-text uppercase tracking-widest opacity-40">Checklist Preparo</p>
            <span className="text-[10px] font-bold text-brand-purple">75% completo</span>
          </div>
          <div className="space-y-2">
            {[
              { t: "Instrumental cirúrgico esterilizado", c: true },
              { t: "Anamnese revisada pelo preceptor", c: true },
              { t: "RX impresso/na tela", c: true },
              { t: "Assinatura do termo de consentimento", c: false },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded border flex items-center justify-center ${item.c ? 'bg-brand-purple border-brand-purple text-white' : 'border-slate-200'}`}>
                   {item.c && <CheckCircle2 size={10} />}
                </div>
                <span className={`text-[11px] font-medium ${item.c ? 'text-brand-text opacity-50 line-through' : 'text-brand-text'}`}>{item.t}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-brand-purple text-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] text-left relative overflow-hidden shadow-xl max-w-xl mx-auto group">
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-[8px] md:text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1.5">Atendimento do dia</p>
                <h4 className="text-2xl md:text-3xl font-bold">Maria das Dores</h4>
                <p className="text-xs text-white/70 mt-1">Sexto Semestre • Clínica II</p>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                 <ClipboardList size={20} />
              </div>
            </div>

            <div className="p-4 bg-white/10 rounded-xl mb-6">
                <p className="text-[8px] font-bold uppercase tracking-widest mb-2 opacity-50">Revisão do Caso</p>
                <p className="text-xs font-medium leading-relaxed italic">"Paciente hipertensa controlada. Verifique pressão antes de iniciar. Técnica anestésica infiltrativa supraperiosteal."</p>
            </div>

            <button className="w-full py-4 bg-white text-brand-purple rounded-xl font-bold text-sm hover:bg-purple-50 transition-colors">Iniciar Evolução</button>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />
        </div>
      </div>
      
      <div className="mt-8 px-5 md:px-12 pb-24 space-y-6 max-w-xl mx-auto w-full opacity-40 grayscale pointer-events-none">
          <div className="h-20 bg-white border border-brand-border rounded-xl"></div>
          <div className="h-20 bg-white border border-brand-border rounded-xl"></div>
      </div>
    </div>
  </div>
);

export default function Academy() {
  return (
    <div className="min-h-screen pt-24 md:pt-32">
      {/* 1. HERO */}
      <Section className="pb-10 md:pb-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-brand-purple-soft text-brand-purple rounded-full text-xs font-bold uppercase tracking-wider mb-8">
              <GraduationCap size={14} /> Exclusivo para estudantes
            </div>
            <h1 className="text-[2.5rem] md:text-7xl font-bold tracking-tight text-brand-text mb-6 md:mb-8 leading-[1.1]">
              Chegue mais preparado<br className="hidden md:block" />
              na <span className="text-brand-purple">clínica da faculdade.</span>
            </h1>
            <p className="text-base md:text-xl text-brand-text/70 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed font-medium">
              O OdontoHub Academy organiza seus casos, checklists e evoluções para você chegar mais preparado, atender com mais segurança e aprender com mais clareza. Você continua seguindo sua faculdade, o Academy só faz você chegar menos perdido.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button variant="purple" className="w-full sm:w-auto">Começar grátis como aluno</Button>
              <Button variant="outline" className="w-full sm:w-auto">Ver como funciona</Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <AcademyMockup />
          </motion.div>
        </div>
      </Section>

      {/* 2. DORES DO ALUNO */}
      <Section className="bg-brand-bg-alt" id="como-funciona">
        <SectionHeader 
          title="A clínica da faculdade já é tensa o suficiente."
          subtitle="Agenda cheia, materiais esquecidos ou evolução atrasada. Nós resolvemos a bagunça para você focar no paciente."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            { t: "Casos espalhados", d: "Centralize o histórico e a evolução de todos os seus pacientes da faculdade em um só lugar.", icon: Target },
            { t: "Materiais esquecidos", d: "Checklists automáticos baseados no procedimento para você nunca mais esquecer nada na esterilização.", icon: ClipboardList },
            { t: "Insegurança clínica", d: "Chegue para o atendimento sabendo exatamente o que precisa ser feito em cada etapa.", icon: Brain },
            { t: "Evoluções atrasadas", d: "Registre o atendimento na hora com uma estrutura organizada e ganhe tempo livre.", icon: Zap },
          ].map((item, i) => (
            <div key={i} className="p-8 bg-white rounded-3xl border border-brand-border shadow-sm">
              <div className="w-12 h-12 bg-brand-purple-soft text-brand-purple rounded-2xl flex items-center justify-center mb-6">
                <item.icon size={24} />
              </div>
              <h4 className="font-bold text-xl text-brand-text mb-4">{item.t}</h4>
              <p className="text-brand-text/70 text-sm leading-relaxed font-medium">{item.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 3. FLUXO ACADEMY */}
      <Section id="fluxo">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
                <p className="text-[10px] md:text-xs font-bold text-brand-purple uppercase tracking-[0.2em] mb-4">Metodologia Academy</p>
                <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-8 leading-tight">Apoio antes, durante e depois.</h2>
                <div className="space-y-10">
                    {[
                        { step: "Antes", t: "Preparo do caso", d: "Revise informações importantes, materiais e pontos de atenção antes de atender." },
                        { step: "Durante", t: "Checklist clínico", d: "Siga um roteiro organizado para não esquecer etapas importantes do atendimento." },
                        { step: "Depois", t: "Evolução organizada", d: "Registre o que foi feito com mais clareza, usando uma estrutura pensada para a rotina acadêmica." }
                    ].map((item, i) => (
                        <div key={i} className="relative pl-12">
                            <div className="absolute left-0 top-0 w-8 h-8 bg-brand-purple text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                                {i + 1}
                            </div>
                            <h4 className="text-lg font-bold text-brand-text mb-1">{item.t} <span className="text-[10px] uppercase text-brand-purple opacity-50 ml-2">— {item.step}</span></h4>
                            <p className="text-sm text-brand-text/70 font-medium leading-relaxed">{item.d}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-brand-purple/5 rounded-[3rem] p-8 md:p-12 aspect-square flex items-center justify-center">
                <div className="w-full aspect-[4/5] bg-white rounded-[2rem] shadow-2xl border border-brand-purple/10 p-8 flex flex-col justify-center gap-6">
                    <BookOpen size={48} className="text-brand-purple mb-4" />
                    <h5 className="text-2xl font-bold text-brand-text">Seu diário clínico, <br/>só que inteligente.</h5>
                    <div className="space-y-4">
                        <div className="h-2 w-full bg-slate-100 rounded"></div>
                        <div className="h-2 w-10/12 bg-slate-100 rounded"></div>
                        <div className="h-2 w-8/12 bg-brand-purple/20 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
      </Section>

      {/* 4. RECURSOS ACADEMY */}
      <Section className="bg-brand-bg-alt" id="recursos">
        <SectionHeader title="O que você ganha com o Academy" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
          {[
            { t: "Agenda clínica", d: "Controle seus horários e pacientes por semestre.", icon: Calendar },
            { t: "Gestão de casos", d: "Organize seus pacientes por disciplina.", icon: Users },
            { t: "Checklists por procedimento", d: "Listas pré-definidas para cada especialidade.", icon: ClipboardList },
            { t: "Evolução organizada", d: "Estrutura clara para registrar seus atendimentos acadêmicos.", icon: Clock },
            { t: "Banco de fotos do caso", d: "Organize o registro clínico com segurança e cuidado.", icon: PlusCircle },
          ].map((r, i) => (
            <div key={i} className="p-6 bg-white border border-brand-border rounded-3xl hover:border-brand-purple/30 transition-all flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-brand-purple-soft text-brand-purple rounded-xl flex items-center justify-center mb-6">
                 <r.icon size={20} />
              </div>
              <h4 className="font-bold text-brand-text mb-2">{r.t}</h4>
              <p className="text-brand-text/60 text-xs leading-relaxed font-medium">{r.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. PLANOS ACADEMY */}
      <Section id="planos">
        <SectionHeader title="Preços pensados para estudantes" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Academy Free */}
          <div className="premium-card p-10 flex flex-col bg-white border-brand-border">
            <p className="text-[10px] font-bold text-brand-text/40 uppercase tracking-widest mb-2">Para organizar o básico</p>
            <h3 className="text-2xl font-bold text-brand-text mb-1">Academy Free</h3>
            <div className="flex items-baseline gap-1 my-6">
              <span className="text-4xl font-bold">R$0</span>
              <span className="text-brand-text/40 text-sm italic">sempre</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              {["Até 5 casos ativos", "Checklists básicos", "Agenda de atendimentos", "Evolução básica"].map(f => (
                <li key={f} className="flex items-center gap-3 text-sm font-medium text-brand-text/80">
                  <CheckCircle2 size={16} className="text-brand-purple/40 shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full">Começar grátis</Button>
          </div>

          {/* Academy Student */}
          <div className="premium-card p-10 flex flex-col !bg-brand-purple text-white border-none shadow-2xl relative">
            <div className="absolute -top-3 right-8 bg-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest text-white">Rotina clínica completa</div>
            <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2">Preparo e organização</p>
            <h3 className="text-2xl font-bold text-white mb-1">Academy Student</h3>
            <div className="flex items-baseline gap-1 my-6">
              <span className="text-4xl font-bold">R$25</span>
              <span className="text-white/50 text-sm">/mês</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              {["Casos ilimitados", "Checklists completos", "Preparo do caso", "Evolução organizada", "Histórico de atendimentos", "Banco de fotos do caso", "Revisões guiadas por caso"].map(f => (
                <li key={f} className="flex items-center gap-3 text-sm font-semibold text-white">
                  <CheckCircle2 size={16} className="text-white/40 shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <Button className="w-full !bg-white !text-brand-purple hover:bg-purple-50 transition-colors py-4 font-bold">Assinar Student</Button>
          </div>
        </div>
      </Section>

      {/* 6. FAQ ACADEMY */}
      <Section className="bg-white">
        <SectionHeader title="Dúvidas dos alunos" />
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: "O Academy substitui o sistema da faculdade?", a: "Não. O Academy é uma camada de organização pessoal para o aluno. Ele ajuda você a preparar casos, seguir checklists e estruturar evoluções. O registro oficial continua sendo feito conforme as regras da sua faculdade." },
            { q: "Posso usar no tablet/iPad?", a: "Sim! O OdontoHub Academy funciona perfeitamente no iPad ou tablet, ideal para levar para a clínica." },
            { q: "O Academy ajuda no preparo clínico?", a: "Sim. As revisões guiadas ajudam a identificar pontos críticos do caso antes do atendimento e sugerem uma estrutura para a sua evolução clínica." },
            { q: "Vou perder meus dados quando me formar?", a: "Não. Quando você se formar, pode migrar sua conta Academy para uma conta Profissional OdontoHub com um clique." },
            { q: "A faculdade precisa ter convênio?", a: "Não. O OdontoHub Academy é uma ferramenta pessoal do aluno para organizar seus próprios atendimentos." },
          ].map((faq, i) => (
            <details key={i} className="group rounded-3xl border border-brand-border overflow-hidden bg-brand-bg-alt">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-brand-text list-none group-open:bg-white transition-colors">
                {faq.q}
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-open:rotate-180 transition-transform shadow-sm">
                  <ChevronRight size={16} />
                </div>
              </summary>
              <div className="p-6 border-t border-brand-border bg-white text-sm text-brand-text/80 leading-relaxed font-medium">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
        <div className="max-w-3xl mx-auto mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100 italic">
          <p className="text-xs text-slate-500 text-center leading-relaxed">
            <AlertCircle size={14} className="inline mr-1 text-slate-400" />
            O Academy apoia sua organização clínica, mas não substitui a orientação de professores, preceptores ou protocolos da sua instituição.
          </p>
        </div>
      </Section>

      {/* 7. TRANSITION TO PRO */}
      <Section className="bg-brand-green-dark border-y border-brand-green/10">
         <div className="max-w-3xl mx-auto text-center py-6 md:py-10 text-white">
            <h3 className="text-2xl md:text-4xl font-bold mb-6 italic">Já é dentista formado?</h3>
            <p className="text-emerald-50/70 mb-10 font-medium text-lg md:text-xl">Conheça o OdontoHub Pro para organizar agenda, pacientes, retornos e pendências no consultório real.</p>
            <Link to="/">
               <Button className="bg-brand-green text-white hover:bg-emerald-400 border-none transition-all px-10 py-5 scale-110 shadow-2xl shadow-black/20 flex items-center gap-2 mx-auto font-bold">
                  Conhecer OdontoHub Pro <ArrowRight size={18} />
               </Button>
            </Link>
         </div>
      </Section>

      {/* 8. CTA FINAL ACADEMY */}
      <Section className="pb-16">
        <div className="bg-brand-purple rounded-[3.5rem] p-10 md:p-24 text-white text-center relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-6xl font-bold mb-8 leading-tight">Organize-se agora para ser o dentista que você quer ser amanhã.</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="w-full sm:w-auto px-10 py-5 !bg-white !text-brand-purple hover:bg-purple-50 font-bold border-none">Começar Grátis agora</Button>
              <Button variant="ghost" className="text-white hover:text-purple-200">Ver demostração para alunos</Button>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px]" />
        </div>
      </Section>
    </div>
  );
}
