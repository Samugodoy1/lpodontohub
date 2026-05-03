import React from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, 
  Users, 
  ClipboardList, 
  Bell, 
  ChevronRight, 
  CheckCircle2, 
  Brain, 
  Clock, 
  TrendingUp, 
  MessageSquare, 
  GraduationCap, 
  UserCircle,
  PlusCircle,
  LayoutDashboard,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Section, SectionHeader } from '../components/shared/UI';

const Mockup = () => (
  <div className="relative w-full max-w-4xl mx-auto mt-12 md:mt-20 p-1.5 md:p-3 bg-white rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border border-brand-border overflow-hidden">
    <div className="bg-brand-bg-alt rounded-[2rem] md:rounded-[2.5rem] border border-brand-border flex flex-col min-h-[500px] md:min-h-[600px] overflow-hidden relative">
      
      <div className="pt-8 md:pt-10 px-5 md:px-12 text-center">
        <p className="text-[10px] md:text-xs text-brand-text-muted mb-1.5 md:mb-2 font-medium">Boa tarde, Dr. Guilherme 👋</p>
        <h3 className="text-xl md:text-3xl font-bold text-brand-text mb-4 md:mb-6 leading-tight">
          Mais 2 e o dia está feito. Tá indo bem.
        </h3>
        
        <div className="bg-brand-yellow-soft/50 border border-brand-yellow/10 p-3.5 md:p-4 rounded-xl md:rounded-2xl flex items-center gap-2.5 md:gap-3 text-left max-w-lg mx-auto mb-8 md:mb-10 text-brand-text font-bold">
          <div className="w-2 md:w-2.5 h-2 md:h-2.5 bg-brand-yellow rounded-full shrink-0" />
          <p className="text-xs md:text-sm leading-tight">
            4 pacientes de amanhã ainda não confirmaram. Manda lembrete agora?
          </p>
        </div>

        <div className="bg-brand-green-dark text-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] text-left relative overflow-hidden shadow-xl max-w-xl mx-auto group">
          <div className="relative z-10">
            <p className="text-[8px] md:text-[10px] font-bold text-emerald-300/60 uppercase tracking-widest mb-1.5 md:mb-2">Próximo Atendimento</p>
            <div className="flex justify-between items-start mb-6 md:mb-10">
              <div>
                <h4 className="text-2xl md:text-4xl font-bold">Carlos Eduardo</h4>
                <div className="flex gap-1.5 md:gap-2 mt-2 md:mt-3">
                  <span className="px-2 md:px-3 py-0.5 md:py-1 bg-white/10 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-wider">Agendado</span>
                  <span className="px-2 md:px-3 py-0.5 md:py-1 bg-white/10 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-wider">em 22 min</span>
                </div>
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center text-lg md:text-xl font-bold">C</div>
            </div>

            <div className="flex justify-between items-end mb-6 md:mb-8">
              <div>
                <p className="text-[8px] md:text-[10px] font-bold text-emerald-300/60 uppercase tracking-widest mb-1">Procedimento</p>
                <p className="text-base md:text-lg font-bold">Profilaxia</p>
              </div>
              <div className="text-right">
                <p className="text-[8px] md:text-[10px] font-bold text-emerald-300/60 uppercase tracking-widest mb-1">Horário</p>
                <p className="text-xl md:text-2xl font-bold">17:00</p>
              </div>
            </div>

            <div className="space-y-2 md:space-y-3">
              <button className="w-full py-3.5 md:py-4 bg-white text-brand-green-dark rounded-xl md:rounded-2xl font-bold text-xs md:text-sm hover:bg-emerald-50 transition-colors">Atender</button>
              <div className="grid grid-cols-2 gap-2 md:gap-3">
                <button className="py-3.5 md:py-4 bg-white/10 text-white rounded-xl md:rounded-2xl font-bold text-xs md:text-sm border border-white/10 hover:bg-white/20 transition-colors">WhatsApp</button>
                <button className="py-3.5 md:py-4 bg-white/10 text-white rounded-xl md:rounded-2xl font-bold text-xs border border-white/10 md:hidden">Reagenda</button>
                <button className="hidden md:block py-3.5 md:py-4 bg-white/10 text-white rounded-xl md:rounded-2xl font-bold text-sm border border-white/10 hover:bg-white/20 transition-colors">Reagendar</button>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/20 rounded-full blur-3xl -mr-16 -mt-16" />
        </div>
      </div>

      <div className="mt-8 md:mt-12 px-5 md:px-12 pb-24 space-y-6 md:space-y-8 max-w-xl mx-auto w-full">
        <div>
          <h5 className="text-[9px] md:text-[10px] font-bold text-brand-text uppercase tracking-widest mb-3 md:mb-4 opacity-50">Precisam de atenção</h5>
          <div className="bg-white border border-brand-border p-3.5 md:p-4 rounded-xl md:rounded-2xl flex items-center gap-3 md:gap-4 group cursor-pointer hover:border-brand-green/30 transition-all">
            <div className="w-9 h-9 md:w-10 md:h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 font-bold text-[10px] md:text-xs">BA</div>
            <div className="flex-1">
              <p className="text-xs md:text-sm font-bold text-brand-text">Bruno Alencar</p>
              <p className="text-[8px] md:text-[10px] uppercase font-bold text-brand-text-muted mt-0.5 tracking-wider">Hoje • Pendente</p>
            </div>
            <MessageSquare size={14} className="text-brand-text-muted opacity-40 md:block hidden" />
            <MessageSquare size={12} className="text-brand-text-muted opacity-40 md:hidden" />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-3 md:mb-4">
            <h5 className="text-[9px] md:text-[10px] font-bold text-brand-text uppercase tracking-widest opacity-50">Sugestões de encaixe</h5>
            <span className="text-[9px] md:text-[10px] font-bold text-brand-green bg-brand-green-soft px-1.5 py-0.5 rounded">1</span>
          </div>
          <div className="bg-white border border-brand-border p-3.5 md:p-4 rounded-xl md:rounded-2xl flex items-center gap-3 md:gap-4">
            <div className="w-9 h-9 md:w-10 md:h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 font-bold text-[10px] md:text-xs">BA</div>
            <div className="flex-1">
              <p className="text-xs md:text-sm font-bold text-brand-text">Bruno Alencar</p>
              <p className="text-[8px] md:text-[10px] text-brand-text-muted uppercase font-bold tracking-wider mt-0.5">Amanhã • 08:00 • Restau...</p>
            </div>
            <button className="px-3.5 md:px-4 py-1.5 md:py-2 bg-brand-purple text-white text-[9px] md:text-[10px] font-bold rounded-lg md:rounded-xl">Agendar</button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-14 md:h-16 bg-white border-t border-brand-border flex items-center justify-around px-4 md:px-8">
        {[LayoutDashboard, Calendar, Users, TrendingUp, Menu].map((Icon, i) => (
          <div key={i} className={`flex flex-col items-center gap-0.5 md:gap-1 ${i === 0 ? 'text-brand-green' : 'text-slate-300'}`}>
            <Icon size={18} className="md:w-5 md:h-5" />
            <span className="text-[7px] md:text-[8px] font-bold uppercase tracking-wider">{['Início', 'Agenda', 'Pacientes', 'Financ.', 'Mais'][i]}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Menu = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>;

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 2. HERO */}
      <Section className="pt-32 md:pt-48 pb-10 md:pb-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-[2.5rem] md:text-7xl font-bold tracking-tight text-brand-text mb-6 md:mb-8 leading-[1.1] px-2 md:px-0">
              Pare de carregar sua clínica <br className="hidden md:block" />
              <span className="text-brand-green">na cabeça.</span>
            </h1>
            <p className="text-base md:text-xl text-brand-text-muted max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed px-4 md:px-0">
              OdontoHub organiza agenda, pacientes, retornos e pendências para mostrar o que você precisa fazer agora — sem transformar sua rotina em um sistema pesado.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-10 px-4 md:px-0">
              <a href="https://sistema.odontohub.app.br" className="w-full sm:w-auto">
                <Button className="w-full">Começar grátis</Button>
              </a>
              <Button variant="outline" className="w-full sm:w-auto">Ver como funciona</Button>
            </div>
            <p className="text-[10px] md:text-xs font-bold text-brand-text-muted uppercase tracking-widest px-8 md:px-0">
              Feito para dentistas recém-formados, profissionais solo e consultórios pequenos.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <Mockup />
          </motion.div>
        </div>
      </Section>

      {/* 3. PROBLEMA + COMPORTAMENTO INTELIGENTE */}
      <Section className="bg-brand-bg-alt" id="como-funciona">
        <SectionHeader 
          title="O problema não é falta de sistema. É excesso de coisa na sua cabeça."
          subtitle="Paciente que precisa voltar, consulta sem confirmação, horário livre, orçamento parado e mensagem para enviar. O OdontoHub lê tudo isso e transforma em próximas ações."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start mb-10 md:mb-20">
          <div className="space-y-4 md:space-y-6">
            <h4 className="text-[10px] md:text-xs font-bold text-brand-red uppercase tracking-widest mb-2 md:mb-4">O peso que você carrega</h4>
            {[
              { title: "Pacientes esquecidos", text: "Aquela lista de 'tenho que ligar' que só cresce no bloco de notas." },
              { title: "Agenda com buracos", text: "Horários vagos que poderiam ser faturamento se você lembrasse de quem chamar." },
              { title: "Consultas sem confirmação", text: "O medo de chegar na clínica e descobrir que o horário das 14h desmarcou." }
            ].map((item, i) => (
              <div key={i} className="p-5 md:p-6 bg-brand-red-soft/30 rounded-2xl border border-brand-red/10">
                <p className="font-bold text-brand-text text-sm md:text-base mb-1">{item.title}</p>
                <p className="text-xs md:text-sm text-brand-text-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4 md:space-y-6 mt-10 md:mt-0">
            <h4 className="text-[10px] md:text-xs font-bold text-brand-green uppercase tracking-widest mb-2 md:mb-4">Como o OdontoHub alivia seu dia</h4>
            {[
              { title: "Agenda vazia?", text: "Sugerimos automaticamente oportunidades de encaixe baseadas no perfil do seu paciente." },
              { title: "Pendências leves?", text: "Lembramos você apenas do que merece atenção no momento, sem ruído visual." },
              { title: "Rotina cheia?", text: "Filtramos o essencial para que você foque no atendimento, não na burocracia." }
            ].map((item, i) => (
              <div key={i} className="p-5 md:p-6 bg-brand-green-soft rounded-2xl border border-brand-green/10">
                <p className="font-bold text-brand-text text-sm md:text-base mb-1">{item.title}</p>
                <p className="text-xs md:text-sm text-brand-text-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. PRÓXIMA MELHOR AÇÃO */}
      <Section className="bg-white">
        <SectionHeader 
          title="Abra o OdontoHub e saiba o que fazer agora."
          subtitle="Nada de dashboard cheia de gráfico inútil. O sistema mostra poucas ações importantes, com contexto, prioridade e clareza."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { label: "Oportunidade", text: "Mariana Silva desmarcou. Temos 3 pacientes para encaixe.", color: "brand-purple", icon: PlusCircle },
            { label: "Atenção", text: "Uma consulta de amanhã ainda não foi confirmada.", color: "brand-yellow", icon: Bell },
            { label: "Retorno", text: "Fernanda Lima precisa voltar e estava esquecida.", color: "brand-green", icon: Clock },
            { label: "Encaixe", text: "O sistema sugere quem chamar primeiro para sua vaga.", color: "brand-green", icon: Brain }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -6 }}
              className="premium-card p-6 md:p-8 flex flex-col h-full"
            >
              <div className={`p-2 md:p-2.5 rounded-xl bg-brand-${item.color.split('-')[1]}-soft text-${item.color} w-fit mb-4 md:mb-6`}>
                <item.icon size={20} className="md:w-[22px] md:h-[22px]" />
              </div>
              <h5 className={`text-[9px] md:text-[10px] font-bold text-${item.color} uppercase tracking-widest mb-3 md:mb-4`}>{item.label}</h5>
              <p className="font-bold text-brand-text text-sm md:text-base leading-snug">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 5. RECURSOS ESSENCIAIS */}
      <Section className="bg-brand-bg-alt" id="recursos">
        <SectionHeader title="O essencial, com inteligência." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {[
            { t: "Agenda Inteligente", d: "Sabe quando você tem tempo livre e sugere como usá-lo." },
            { t: "Pacientes com contexto", d: "Histórico clínico e comportamental visível em segundos." },
            { t: "Prontuário simples", d: "Focado no que importa: exame clínico e evolução." },
            { t: "Portal do paciente", d: "Uma extensão simples para o paciente confirmar consultas, atualizar dados e receber orientações pré e pós-atendimento — tudo via WhatsApp, sem complicação." },
            { t: "Sugestões de encaixe", d: "O algortimo busca quem pode vir agora." },
            { t: "Visão agir agora", d: "Sua bússola diária para não esquecer de nada." }
          ].map((r, i) => (
            <div key={i} className="p-6 md:p-8 bg-white border border-brand-border rounded-[1.5rem] md:rounded-[2rem] hover:ring-2 hover:ring-brand-green/20 transition-all group">
              <h4 className="font-bold text-base md:text-lg text-brand-text mb-1.5 md:mb-2 group-hover:text-brand-green transition-colors">{r.t}</h4>
              <p className="text-brand-text-muted text-xs md:text-sm leading-relaxed">{r.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 6. PORTAL DO PACIENTE */}
      <Section className="bg-white overflow-hidden" id="portal">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="w-full md:w-5/12 order-2 md:order-1">
            <div className="relative mx-auto w-[280px] md:w-[320px] aspect-[9/19] bg-brand-bg border-[8px] border-brand-green-dark rounded-[3rem] shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-brand-green-dark rounded-b-2xl z-20" />
              <div className="p-6 pt-10 h-full flex flex-col bg-brand-bg">
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-6 h-6 bg-brand-green rounded-md flex items-center justify-center text-[10px] text-white font-bold">OH</div>
                  <span className="text-[10px] font-bold text-brand-green-dark uppercase tracking-widest">Portal do Paciente</span>
                </div>
                
                <h6 className="text-xl font-bold text-brand-text mb-6">Olá, Carlos Edu.<br/><span className="text-brand-green text-sm">Sua próxima visita é amanhã às 17h.</span></h6>
                
                <div className="space-y-3">
                  {[
                    { label: "Confirmar minha ida", icon: CheckCircle2, color: "bg-brand-green text-white" },
                    { label: "Orientações da cirurgia", icon: ClipboardList, color: "bg-white text-brand-text border border-brand-border" },
                    { label: "Atualizar ficha médica", icon: UserCircle, color: "bg-white text-brand-text border border-brand-border" },
                    { label: "Dúvidas pós-atendimento", icon: MessageSquare, color: "bg-white text-brand-text border border-brand-border" }
                  ].map((btn, i) => (
                    <div key={i} className={`p-4 rounded-2xl flex items-center gap-3 font-bold text-xs shadow-sm ${btn.color}`}>
                      <btn.icon size={16} />
                      {btn.label}
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto p-4 bg-brand-purple-soft rounded-2xl border border-brand-purple/10">
                  <p className="text-[10px] font-bold text-brand-purple uppercase mb-1">Dica de hoje</p>
                  <p className="text-[10px] text-brand-text/70 leading-relaxed font-medium">Beba bastante água após o procedimento de amanhã.</p>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-green/5 rounded-full blur-3xl" />
          </div>
          
          <div className="w-full md:w-7/12 order-1 md:order-2">
            <p className="text-[10px] md:text-xs font-bold text-brand-green uppercase tracking-[0.2em] mb-4">Experiência do Paciente</p>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-6 leading-tight">O paciente resolve o que precisa, sem ocupar sua linha.</h2>
            <p className="text-lg text-brand-text/80 mb-10 leading-relaxed font-medium">
              O Portal do Paciente não é apenas uma ficha online. É uma extensão do OdontoHub feita para reduzir burocracia e orientar o paciente de forma clara, desde a confirmação até o pós-atendimento.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {[
                { t: "Ação direta", d: "Confirmação de consultas e solicitações de retorno em um toque." },
                { t: "Preparo sem papel", d: "Anamnese e dados atualizados pelo celular, antes da consulta." },
                { t: "Cuidado guiado", d: "Orientações pré e pós-operatórias sempre à mão." },
                { t: "Clareza total", d: "Timeline de evolução e status de solicitações para zero ansiedade." }
              ].map((f, i) => (
                <div key={i}>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 size={16} className="text-brand-green" />
                    <span className="font-bold text-brand-text text-sm">{f.t}</span>
                  </div>
                  <p className="text-xs text-brand-text-muted leading-relaxed font-medium pl-6">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="planos">
        <SectionHeader title="Comece grátis. Assine o Pro quando quiser o OdontoHub completo." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto items-stretch px-2 md:px-0">
          <div className="premium-card p-8 md:p-10 flex flex-col">
            <p className="text-[10px] md:text-xs font-bold text-brand-text-muted uppercase tracking-widest mb-1.5 md:mb-2">Ideal para começar</p>
            <h3 className="text-xl md:text-2xl font-bold text-brand-text mb-1">OdontoHub Free</h3>
            <div className="flex items-baseline gap-1 my-5 md:my-6">
              <span className="text-3xl md:text-4xl font-bold">R$0</span>
              <span className="text-brand-text-muted text-xs md:text-sm italic">sempre</span>
            </div>
            
            <ul className="space-y-3.5 mb-8 md:mb-12 flex-grow">
              {["Agenda básica", "Pacientes limitados", "Prontuário básico", "Portal básico", "Inteligência limitada"].map((feat) => (
                <li key={feat} className="flex items-center gap-3 text-sm text-brand-text/90 font-medium">
                  <CheckCircle2 size={16} className="text-brand-green/60 shrink-0" /> {feat}
                </li>
              ))}
            </ul>
            
            <a href="https://sistema.odontohub.app.br" className="w-full">
              <Button variant="outline" className="w-full">Começar grátis</Button>
            </a>
          </div>

          <div className="premium-card p-8 md:p-10 flex flex-col !bg-brand-green-dark text-white border-none shadow-2xl relative mt-4 md:mt-0 md:scale-105">
            <div className="absolute -top-3 right-6 md:right-8 bg-brand-green text-[9px] md:text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg text-white">Popular</div>
            <p className="text-[10px] md:text-xs font-bold text-emerald-300 uppercase tracking-widest mb-1.5 md:mb-2 italic">O produto completo</p>
            <h3 className="text-xl md:text-2xl font-bold mb-1 text-white">OdontoHub Pro</h3>
            <div className="flex items-baseline gap-1 my-5 md:my-6">
              <span className="text-3xl md:text-4xl font-bold text-white">R$99,90</span>
              <span className="text-emerald-100/60 text-xs md:text-sm">/mês</span>
            </div>
            
            <ul className="space-y-4 mb-8 md:mb-12 flex-grow">
              {["Pacientes ilimitados", "Inteligência completa", "Sugestões de encaixe", "Pacientes esquecidos", "Visão agir agora", "Prontuário e Portal completos"].map((feat) => (
                <li key={feat} className="flex items-center gap-3 text-sm font-semibold text-white">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" /> {feat}
                </li>
              ))}
            </ul>
            
            <a href="https://sistema.odontohub.app.br" className="w-full">
              <Button className="w-full bg-brand-green text-white shadow-xl shadow-brand-green/40 hover:bg-emerald-400 border-none transition-colors py-5 text-base font-bold">Assinar Pro</Button>
            </a>
          </div>
        </div>
      </Section>

      {/* 7. TEASER ACADEMY */}
      <Section className="bg-brand-bg-alt border-y border-brand-border" id="academy">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 px-2 md:px-12">
          <div className="w-full md:w-1/2">
            <div className="p-2.5 md:p-3 bg-brand-purple-soft w-fit rounded-xl md:rounded-2xl mb-6 md:mb-8">
              <GraduationCap className="text-brand-purple w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-5 md:mb-6 leading-tight">Também existe o <br className="hidden md:block" /> <span className="text-brand-purple">OdontoHub Academy.</span></h2>
            <p className="text-base md:text-lg text-brand-text-muted leading-relaxed mb-6 md:mb-8">
              A mesma lógica de clareza e preparo, adaptada para alunos que atendem na clínica da faculdade. Menos bagunça, mais preparo.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 mb-8 md:mb-10">
              {["Atendimento de hoje", "Preparo do caso", "Checklist clínico", "Evolução do paciente"].map(t => (
                <div key={t} className="flex items-center gap-2.5 text-sm font-bold text-brand-text">
                  <div className="w-1.5 h-1.5 bg-brand-purple rounded-full shrink-0" /> {t}
                </div>
              ))}
            </div>
            <Link to="/academy">
              <Button variant="ghost" className="px-0 flex items-center gap-2 group text-brand-purple hover:text-brand-purple">
                Conhecer o Academy <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          <div className="w-full md:w-1/2 border border-brand-border rounded-[2rem] md:rounded-[3rem] p-4 md:p-6 bg-white overflow-hidden shadow-sm mt-8 md:mt-0">
             <div className="aspect-[4/3] md:aspect-[16/10] bg-brand-purple-soft/50 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center border border-brand-purple/5">
                <p className="text-brand-purple/30 font-bold tracking-widest uppercase text-[10px] md:text-xs italic px-6 text-center">Academy Interface Preview</p>
             </div>
          </div>
        </div>
      </Section>

      {/* 8. FAQ */}
      <Section className="bg-white">
        <SectionHeader title="Dúvidas comuns" />
        <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
          {[
            { q: "O OdontoHub é para clínica grande?", a: "Não. Focamos no dentista solo e em pequenos consultórios que buscam clareza operacional, não complexidade corporativa." },
            { q: "O plano grátis tem limite?", a: "Sim, há um limite de pacientes ativos e inteligência, ideal para quem está no início da carreira." },
            { q: "O paciente precisa baixar algum app?", a: "Não. O Portal do Paciente funciona direto no navegador do celular dele. Ele recebe um link por WhatsApp, clica e resolve o que precisa em segundos, seja para confirmar uma consulta ou ler uma orientação." },
            { q: "O Pro é o produto completo?", a: "Sim! No Pro você tem todas as automatizações, sugestões inteligentes e suporte do OdontoHub." },
            { q: "O Academy é um sistema de apoio clínico?", a: "Sim, é um sistema de apoio para auxiliar sua organização e aprendizado durante a graduação." },
            { q: "Posso começar grátis e migrar depois?", a: "Absolutamente. Seus dados migram com você para o Pro de forma instantânea." }
          ].map((faq, i) => (
            <details key={i} className="group rounded-2xl md:rounded-3xl border border-brand-border overflow-hidden bg-brand-bg-alt">
              <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer font-bold text-brand-text list-none group-open:bg-white transition-colors text-sm md:text-base">
                {faq.q}
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white flex items-center justify-center group-open:rotate-180 transition-transform shadow-sm shrink-0 ml-4">
                  <ChevronRight size={14} className="md:w-4 md:h-4" />
                </div>
              </summary>
              <div className="p-5 md:p-6 border-t border-brand-border bg-white text-xs md:text-sm text-brand-text/80 leading-relaxed font-medium">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </Section>

      {/* 9. CTA FINAL */}
      <Section className="pb-8 md:pb-10 pt-0">
        <div className="bg-brand-green-dark rounded-[2.5rem] md:rounded-[3.5rem] p-10 md:p-24 text-white text-center relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 leading-tight">Sua rotina clínica não precisa ficar toda na sua cabeça.</h2>
            <p className="text-base md:text-xl text-emerald-100/70 mb-10 md:mb-12 leading-relaxed px-4 md:px-0">
              Comece grátis e veja como o OdontoHub organiza agenda, pacientes e pendências com mais clareza e menos peso mental.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
              <a href="https://sistema.odontohub.app.br" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full px-8 md:px-10 py-5 !bg-white !text-brand-green-dark border-none flex items-center justify-center">Começar grátis agora</Button>
              </a>
              <Button variant="ghost" className="text-white hover:text-emerald-200">Ver demostração</Button>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-brand-green/10 rounded-full blur-[80px] md:blur-[120px]" />
        </div>
      </Section>
    </div>
  );
}
