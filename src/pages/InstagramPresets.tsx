import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { toPng } from 'html-to-image';
import { 
  Instagram, 
  Quote, 
  Sparkles, 
  Share2, 
  Download,
  Star,
  CheckCircle2,
  Clock,
  GraduationCap,
  Heart,
  MessageCircle,
  Bookmark,
  MoreHorizontal,
  Target,
  Camera,
  Copy,
  Check,
  Layout,
  Layers,
  ShieldCheck,
  Cpu,
  BookmarkCheck,
  Smartphone,
  MousePointer2,
  Zap,
  Brain,
  Calendar,
  Bell,
  Users,
  Search,
  ZapOff,
  ClipboardCheck,
  FileText,
  UserPlus,
  BarChart3,
  RefreshCw,
  Trophy,
  Coffee,
  Lightbulb,
  Workflow,
  LayoutDashboard,
  PlusCircle
} from 'lucide-react';
import { Button } from '../components/shared/UI';

const PresetSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="mb-24 lg:mb-32">
    <div className="flex items-center gap-6 mb-12 lg:mb-16">
      <h3 className="text-[10px] lg:text-xs font-black text-brand-text/40 uppercase tracking-[0.5em] whitespace-nowrap">{title}</h3>
      <div className="h-px w-full bg-slate-100" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
      {children}
    </div>
  </div>
);

const InstagramPost = ({ 
  children, 
  title, 
  caption, 
  variant = 'light'
}: { 
  children: React.ReactNode, 
  title: string, 
  caption: string, 
  variant?: 'light' | 'dark' | 'brand' | 'academy'
}) => {
  const [copied, setCopied] = useState(false);
  const postRef = useRef<HTMLDivElement>(null);

  const copyCaption = () => {
    navigator.clipboard.writeText(caption);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadArt = useCallback(() => {
    if (postRef.current === null) {
      return;
    }

    // Temporary fix for rounded borders during download if any were present, 
    // but here they are rounded-none so it's fine.
    toPng(postRef.current, { cacheBust: true, pixelRatio: 2 })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `${title.toLowerCase().replace(/\s+/g, '-')}-post.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error('oops, something went wrong!', err);
      });
  }, [postRef, title]);

  const variantStyles = {
    light: 'bg-white text-brand-text border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)]',
    dark: 'bg-[#0A0D10] text-white border-white/5 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)]',
    brand: 'bg-brand-green text-white border-brand-green shadow-[0_32px_64px_-16px_rgba(31,107,87,0.15)]',
    academy: 'bg-brand-academy text-white border-brand-academy shadow-[0_32px_64px_-16px_rgba(82,5,123,0.15)]'
  };

  return (
    <div className="flex flex-col group h-full">
      {/* 4:5 Instagram Portrait Canvas */}
      <div 
        ref={postRef}
        className={`relative aspect-[4/5] w-full overflow-hidden border transition-all duration-500 group-hover:shadow-2xl ${variantStyles[variant]} rounded-none`}
      >
         <div className="absolute inset-0 flex flex-col p-12 lg:p-16 items-center justify-center text-center">
            {children}
         </div>
      </div>
      
      {/* Post Metadata (Below Content) */}
      <div className="mt-8 px-4">
         <div className="flex justify-between items-start mb-4">
            <div className="space-y-1">
               <h4 className="font-black text-brand-text text-base lg:text-lg tracking-tight leading-none">{title}</h4>
               <p className="text-[10px] font-black text-brand-green uppercase tracking-widest">{variant === 'academy' ? 'Academy' : 'Pro Kit'}</p>
            </div>
            <div className="flex gap-2">
               <Button 
                  variant="ghost" 
                  onClick={downloadArt}
                  className="h-9 w-9 p-0 rounded-full hover:bg-brand-green/5 text-slate-300 hover:text-brand-green transition-colors"
               >
                  <Download size={18} />
               </Button>
               <Button 
                  variant="ghost" 
                  onClick={copyCaption}
                  className="h-9 px-4 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand-green border border-transparent hover:border-brand-green/10 flex items-center gap-2 transition-all"
               >
                  {copied ? <Check size={14} className="text-brand-green" /> : <Copy size={12} />}
                  <span>{copied ? 'Copiado' : 'Legenda'}</span>
               </Button>
            </div>
         </div>
         <p className="text-[11px] lg:text-xs text-brand-text/40 font-medium leading-[1.6] line-clamp-3 italic">
            "{caption}"
         </p>
      </div>
    </div>
  );
};

export default function InstagramPresets() {
  return (
    <div className="min-h-screen bg-[#FDFDFF]">
      {/* Minimal Header */}
      <header className="pt-24 lg:pt-32 pb-16 lg:pb-24 border-b border-slate-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-0.5 w-10 bg-brand-green" />
                <span className="text-[10px] font-black text-brand-green uppercase tracking-[0.4em]">Social Content Kit v2.0</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-brand-text mb-8 leading-[0.95]">
                Dê vida ao seu<br/> 
                <span className="text-brand-green">branding digital.</span>
              </h1>
              <p className="text-base md:text-lg text-brand-text/50 font-medium leading-relaxed">
                Posts premium configurados em 1080x1350 (4:5). Alinhados para máxima autoridade no Instagram. Clique em “Legenda” para copiar o texto pronto.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-4 py-2 px-6 bg-slate-50 rounded-full border border-slate-100">
               <Instagram size={16} className="text-brand-green" />
               <span className="text-xs font-black text-brand-text uppercase tracking-widest">Feed OdontoHub</span>
            </div>
          </div>
        </div>
      </header>

      <main className="py-20 lg:py-32 max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* ODONTOHUB PRO — PRODUCTIVITY */}
        <PresetSection title="OdontoHub PRO — Produtividade Implacável">
          <InstagramPost 
            title="Mindset Zero" variant="dark"
            caption="Menos caos. Mais clareza para cuidar. O OdontoHub organiza agenda, pacientes e pendências para mostrar o que realmente precisa da sua atenção hoje — sem transformar sua rotina em um sistema pesado. 🧠 #ProdutividadeOdonto #GestãoSemPeso"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-8">
                <Brain size={60} className="text-brand-green opacity-50" strokeWidth={1} />
                <h4 className="text-3xl lg:text-4xl font-black text-white tracking-tighter leading-[1.1]">
                   Sua cabeça não é<br/>um HD.
                </h4>
                <div className="h-0.5 w-12 bg-brand-green/40" />
                <p className="text-[10px] font-black text-brand-green uppercase tracking-[0.4em]">OdontoHub Pro — 2026</p>
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Focus Mode" variant="light"
            caption="O consultório não deveria depender só da sua memória. O OdontoHub filtra o essencial para que você foque no atendimento, não na burocracia. Clareza antes de volume. ✨ #FocoNoPaciente #OdontoHubPro"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-10">
                <div className="w-24 h-24 bg-slate-50 flex items-center justify-center text-slate-300 border border-slate-100">
                   <Target size={48} strokeWidth={1} />
                </div>
                <h4 className="text-3xl lg:text-4xl font-black text-brand-text tracking-tighter leading-[1.1]">
                   Menos Caos,<br/>Mais Atendimento.
                </h4>
                <p className="text-xs font-medium text-brand-text/40 italic">"Clareza antes de volume."</p>
             </div>
          </InstagramPost>

          <InstagramPost 
            title="The Paper Limit" variant="brand"
            caption="O papel é o limite da sua eficiência. Digitalize seu fluxo e escale sua autoridade. O futuro da odontologia é Pro. 🚀 #OdontologiaDigital #Performance"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-12">
                <ZapOff size={60} className="text-white opacity-20" strokeWidth={1} />
                <h4 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[0.9]">
                   O Papel é<br/>seu maior<br/>gargalo.
                </h4>
                <div className="px-6 py-2 bg-white text-brand-green text-[10px] font-black uppercase tracking-[0.2em] shadow-xl">Elimine-o agora</div>
             </div>
          </InstagramPost>
          
          <InstagramPost 
            title="Essential View" variant="light"
            caption="Agendas mostram horários. O OdontoHub mostra contexto. Veja quem vem, quem confirmou e qual a próxima ação agora — antes da rotina virar ruído. 🧭 #ContextoOdonto #GestãoClara"
          >
             <div className="flex flex-col items-start text-left space-y-10">
                <LayoutDashboard size={40} className="text-brand-green" />
                <h4 className="text-3xl lg:text-4xl font-black text-brand-text tracking-tighter leading-tight">
                   Design que respeita<br/>sua visão.
                </h4>
                <div className="space-y-3">
                   {[1,2,3].map(i => (
                     <div key={i} className="flex gap-4 items-center">
                        <div className="w-1.5 h-1.5 bg-brand-green" />
                        <div className="h-2 w-32 bg-slate-100" />
                     </div>
                   ))}
                </div>
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Quiet Tech" variant="dark"
            caption="A tecnologia deve ser silenciosa. O OdontoHub Pro trabalha nos bastidores para que sua rotina seja fluida e sem interrupções. 🤫 #TechOdonto #UserExperience"
          >
             <div className="flex flex-col items-center justify-center space-y-12">
                <div className="relative">
                   <div className="absolute inset-0 bg-brand-green blur-[40px] opacity-20" />
                   <ShieldCheck size={72} className="text-brand-green relative z-10" strokeWidth={1} />
                </div>
                <h4 className="text-3xl lg:text-4xl font-black text-white tracking-tighter text-center leading-[1.1]">
                   A Tecnologia é<br/>Silenciosa.
                </h4>
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Decision Clarity" variant="brand"
            caption="Abra o OdontoHub e saiba o que fazer agora. Sem cliques extras. Sem perda de tempo. 🎯 #AgirAgora #FocoOdonto"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-8">
                <Workflow size={50} className="text-white/30" />
                <h4 className="text-3xl lg:text-4xl font-black text-white tracking-tighter leading-none">
                   Próxima melhor<br/>ação visível.
                </h4>
                <p className="text-[10px] font-black text-white/50 uppercase tracking-[0.3em]">Decisão sem esforço</p>
             </div>
          </InstagramPost>
        </PresetSection>

        {/* ODONTOHUB PRO — GROWTH & FILLING */}
        <PresetSection title="OdontoHub PRO — Crescimento e Ocupação">
          <InstagramPost 
            title="Empty Slot Hack" variant="light"
            caption="Agenda com buracos? O OdontoHub sugere automaticamente oportunidades de encaixe baseadas no perfil do seu paciente. Faturamento garantido. 💰 #AgendaCheia #EncaixeInteligente"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-10">
                <div className="p-6 bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-green">
                   <PlusCircle size={48} strokeWidth={1} />
                </div>
                <h4 className="text-3xl lg:text-4xl font-black text-brand-text tracking-tighter leading-[1.1]">
                   Buraco na agenda?<br/>Nós preenchemos.
                </h4>
                <div className="flex gap-2">
                   <div className="h-1.5 w-8 bg-brand-green" />
                   <div className="h-1.5 w-8 bg-slate-100" />
                   <div className="h-1.5 w-8 bg-slate-100" />
                </div>
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Forgotten Patients" variant="dark"
            caption="Fernanda Lima precisa voltar e estava esquecida? O OdontoHub lembra você de quem merece atenção no momento certo. Nada de pacientes perdidos. 👥 #RecuperaçãoDePacientes #CRM"
          >
             <div className="flex flex-col items-start text-left space-y-8">
                <Users size={40} className="text-brand-green" strokeWidth={1} />
                <h4 className="text-3xl lg:text-4xl font-black text-white tracking-tighter leading-tight">
                   Recupere quem o<br/>tempo levou.
                </h4>
                <p className="text-xs text-white/40 font-medium leading-relaxed">Sugerimos retornos baseados no histórico clínico e comportamental.</p>
                <div className="h-0.25 w-full bg-white/10" />
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Smart Matching" variant="brand"
            caption="O algoritmo busca quem pode vir agora. Menos tempo ocioso, mais resultados financeiros para sua clínica. 📈 #AgendamentoInteligente #Profit"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-10">
                <RefreshCw size={50} className="text-white animate-spin-slow" strokeWidth={1} />
                <h4 className="text-3xl lg:text-4xl font-black text-white tracking-tighter leading-none">
                   Encaixe que faz<br/>sentido.
                </h4>
                <p className="text-[10px] font-black text-white/50 uppercase tracking-[0.4em]">Algoritmo de Prioridade</p>
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Opportunity Alert" variant="light"
            caption="Mariana Silva desmarcou? Temos 3 pacientes prontos para encaixe. O OdontoHub age antes do prejuízo. ⚡️ #AlertaDeVaga #GestãoDeAgenda"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-8">
                <div className="w-20 h-20 bg-brand-yellow-soft rounded-full flex items-center justify-center text-brand-yellow">
                   <Bell size={40} strokeWidth={1.5} />
                </div>
                <h4 className="text-3xl lg:text-4xl font-black text-brand-text tracking-tighter leading-tight">
                   Reaja antes do<br/>horário vagar.
                </h4>
                <div className="px-5 py-2 border border-brand-yellow/20 text-brand-yellow text-[10px] font-black uppercase tracking-widest">Ação Pró-ativa</div>
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Scale Authority" variant="dark"
            caption="Sua clínica é um negócio. Trate-a com o profissionalismo que o OdontoHub Pro proporciona. Suba de nível. 🏆 #ClínicaPremium #AutoridadeTotal"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-12">
                <Trophy size={60} className="text-brand-green" strokeWidth={1} />
                <h4 className="text-3xl lg:text-4xl font-black text-white tracking-tighter leading-[1.1]">
                   Domine o seu<br/>Mercado Local.
                </h4>
                <div className="flex gap-4">
                   <div className="w-1.5 h-1.5 bg-brand-green rounded-full" />
                   <div className="w-1.5 h-1.5 bg-brand-green rounded-full" />
                   <div className="w-1.5 h-1.5 bg-brand-green rounded-full" />
                </div>
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Revenue Control" variant="light"
            caption="Visão Acting-Now: sua bússola diária para não esquecer de faturar. Tudo sob controle, sem estresse. 📂 #ControleFinanceiro #GestãoOdonto"
          >
             <div className="flex flex-col items-start text-left space-y-10">
                <BarChart3 size={40} className="text-brand-text" strokeWidth={1.5} />
                <h4 className="text-4xl lg:text-5xl font-black text-brand-text tracking-tighter leading-[0.9]">
                   Finanças sob<br/>controle.
                </h4>
                <div className="h-1 w-12 bg-brand-green" />
             </div>
          </InstagramPost>
        </PresetSection>

        {/* ODONTOHUB PRO — PATIENT EXPERIENCE */}
        <PresetSection title="OdontoHub PRO — Experiência do Paciente">
          <InstagramPost 
            title="Digital Portal" variant="light"
            caption="O paciente resolve o que precisa, sem ocupar sua linha. Confirmações, anamnese e orientações via WhatsApp. Simples assim. 📱 #PortalDoPaciente #InovaçãoOdonto"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-10">
                <Smartphone size={54} className="text-brand-green" strokeWidth={1} />
                <h4 className="text-3xl lg:text-4xl font-black text-brand-text tracking-tighter leading-[1.1]">
                   Tudo no Celular do<br/>seu Paciente.
                </h4>
                <p className="text-[10px] font-black text-brand-text/30 uppercase tracking-[0.2em]">Zero Atrito • 100% Digital</p>
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Zero Anxiety" variant="brand"
            caption="Orientações pré e pós-operatórias sempre à mão. A clareza total reduz a ansiedade do seu paciente e aumenta a confiança no seu trabalho. 🤝 #CuidadoComOPaciente #Confiança"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-10 h-full">
                <div className="w-20 h-20 bg-white/10 flex items-center justify-center text-white">
                   <Heart size={440} className="fill-white" strokeWidth={0} />
                </div>
                <h4 className="text-3xl lg:text-4xl font-black text-white tracking-tighter leading-tight">
                   Segurança que gera<br/>fidelização.
                </h4>
                <div className="h-0.5 w-16 bg-white/20" />
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Smart Confirmation" variant="dark"
            caption="Confirmação de consultas em um toque. Melhore sua taxa de comparecimento sem fazer uma única ligação. 🚀 #TaxaDeComparecimento #Automatização"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-8">
                <div className="p-5 border border-brand-green/20 text-brand-green">
                   <CheckCircle2 size={48} strokeWidth={1} />
                </div>
                <h4 className="text-3xl lg:text-4xl font-black text-white tracking-tighter leading-none">
                   Confirmar nunca foi<br/>tão rápido.
                </h4>
                <p className="text-[10px] font-black text-brand-green uppercase tracking-[0.4em]">Whatsapp Integration</p>
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Modern History" variant="light"
            caption="Histórico clínico e comportamental visível em segundos. Conheça seu paciente de verdade, antes mesmo dele sentar na cadeira. 📂 #ProntuárioDigital #Contexto"
          >
             <div className="flex flex-col items-start text-left space-y-8">
                <Search size={40} className="text-brand-text/20" strokeWidth={1.5} />
                <h4 className="text-3xl lg:text-4xl font-black text-brand-text tracking-tighter leading-tight">
                   Conheça Cada<br/>Detalhe.
                </h4>
                <div className="space-y-2">
                   <div className="h-2 w-48 bg-slate-100" />
                   <div className="h-2 w-32 bg-slate-100" />
                   <div className="h-2 w-40 bg-brand-green/20" />
                </div>
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Guided Care" variant="brand"
            caption="Dê ao seu paciente o tratamento que ele merece: moderno, atencioso e digital. O OdontoHub Pro é seu diferencial competitivo. ✨ #ExcelênciaOdonto #Diferencial"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-12">
                <Sparkles size={60} className="text-white" strokeWidth={1} />
                <h4 className="text-3xl lg:text-4xl font-black text-white tracking-tighter leading-[1.1]">
                   A Melhor Versão da<br/>sua Clínica.
                </h4>
                <div className="h-px w-20 bg-white/20" />
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Human Tech" variant="dark"
            caption="Tecnologia que aproxima. Use as ferramentas do OdontoHub para fortalecer a relação com seus pacientes. ❤️ #OdontoHumanizada #Relacionamento"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-10">
                <Users size={54} className="text-brand-green" strokeWidth={1} />
                <h4 className="text-3xl lg:text-4xl font-black text-white tracking-tighter leading-tight">
                   Foco em quem<br/>importa: Pessoas.
                </h4>
                <p className="text-xs font-medium text-white/30 italic">A tecnologia serve à humanidade.</p>
             </div>
          </InstagramPost>
        </PresetSection>

        {/* ODONTOHUB ACADEMY — SURVIVAL */}
        <PresetSection title="OdontoHub ACADEMY — Sobrevivência Clínica">
          <InstagramPost 
            title="Clinics Noise" variant="academy"
            caption="A clínica começa antes do paciente sentar na cadeira. O Academy resolve o 'ruído' de fichas e materiais para você chegar na clínica menos perdido. 🎓 #OdontoAcademy #SobrevivênciaOdonto"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-10">
                <GraduationCap size={70} className="text-white" strokeWidth={1} />
                <h4 className="text-3xl lg:text-4xl font-black text-white tracking-tighter leading-[1.1]">
                   Menos Caos,<br/>Mais Clínica.
                </h4>
                <div className="flex gap-2">
                   <div className="w-1.5 h-1.5 bg-white rounded-full" />
                   <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                   <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                </div>
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Lost Records" variant="light"
            caption="Chega de casos perdidos. Centralize o histórico, fotos e a evolução de todos os seus pacientes de todas as disciplinas em um só lugar. 📂 #OrganizaçãoAcademica #ProntuárioEstudante"
          >
             <div className="flex flex-col items-start text-left space-y-8">
                <Search size={40} className="text-brand-academy" strokeWidth={1.5} />
                <h4 className="text-3xl lg:text-4xl font-black text-brand-text tracking-tighter leading-tight">
                   Nada se perde na<br/>mochila.
                </h4>
                <p className="text-xs text-brand-text/40 font-medium">Histórico, fotos e evolução em um só lugar.</p>
                <div className="h-1 w-12 bg-brand-academy" />
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Prep Master" variant="academy"
            caption="O dentista de amanhã se prepara hoje. Revise os pontos críticos do caso antes de entrar no box. Saiba exatamente qual a conduta. 🎯 #PreparaçãoClínica #FuturoDentista"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-8">
                <Target size={54} className="text-white/40" strokeWidth={1} />
                <h4 className="text-3xl lg:text-4xl font-black text-white tracking-tighter leading-none">
                   Entre no box com<br/>conhecimento.
                </h4>
                <div className="px-5 py-2 bg-white text-brand-academy text-[10px] font-black uppercase tracking-widest">Preparo é Sucesso</div>
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Sterilization Guard" variant="light"
            caption="Materiais prontos? Checklists automáticos por procedimento. O Academy avisa o que você precisa separar e levar para a esterilização. 🧪 #ChecklistMateriais #EstágioOdonto"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-10">
                <div className="w-20 h-20 bg-brand-academy-soft border border-brand-academy/10 flex items-center justify-center text-brand-academy">
                   <BookmarkCheck size={40} strokeWidth={1.5} />
                </div>
                <h4 className="text-3xl lg:text-4xl font-black text-brand-text tracking-tighter leading-tight">
                   Nenhum instrumental<br/>atrás.
                </h4>
                <div className="h-0.5 w-16 bg-brand-academy/20" />
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Study focus" variant="academy"
            caption="Ganhe tempo para estudar o que realmente importa. Automatize sua organização clínica e foque na sua nota e no seu paciente. 📚 #FocoNosEstudos #OdontoHub"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-12">
                <Coffee size={60} className="text-white/20" strokeWidth={1} />
                <h4 className="text-3xl lg:text-4xl font-black text-white tracking-tighter leading-[1.1]">
                   Menos papelada,<br/>Mais Estudo.
                </h4>
                <p className="text-[10px] font-black text-white uppercase tracking-[0.4em]">OdontoHub Academy — 2026</p>
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Safe Practice" variant="light"
            caption="Segurança clínica em primeiro lugar. O Academy é seu mentor digital durante cada etapa do atendimento. 🛡️ #SegurançaClínica #MentoriaDigital"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-10">
                <ShieldCheck size={54} className="text-brand-academy" strokeWidth={1} />
                <h4 className="text-3xl lg:text-4xl font-black text-brand-text tracking-tighter leading-tight">
                   Pratique com<br/>Confiança.
                </h4>
                <div className="flex gap-1.5">
                   {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-1.5 bg-brand-academy rounded-full" />)}
                </div>
             </div>
          </InstagramPost>
        </PresetSection>

        {/* ODONTOHUB ACADEMY — THE BOX */}
        <PresetSection title="OdontoHub ACADEMY — O Box Digital">
          <InstagramPost 
            title="Modo Box" variant="academy"
            caption="Ative o Modo Box no tablet ou celular para guiar o atendimento e não esquecer etapas críticas. Chegue na clínica menos perdido. 📱 #InterfaceBox #OdontoDigital"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-10">
                <Smartphone size={54} className="text-white" strokeWidth={1} />
                <h4 className="text-3xl lg:text-4xl font-black text-white tracking-tighter leading-[1.1]">
                   Tudo no Tablet no<br/>Meio do Box.
                </h4>
                <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em]">Interface em alto contraste</p>
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Step-by-step" variant="light"
            caption="Siga o fluxo. O Academy guia você passo a passo em cada procedimento complexo. Menos dúvida, mais execução. 🪜 #PassoAPassoClínico #OdontoGuide"
          >
             <div className="flex flex-col items-start text-left space-y-10">
                <Workflow size={40} className="text-brand-academy" strokeWidth={1} />
                <h4 className="text-3xl lg:text-4xl font-black text-brand-text tracking-tighter leading-tight">
                   Siga o Fluxo do<br/>Aprendizado.
                </h4>
                <div className="space-y-3">
                   <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-brand-academy" />
                      <div className="h-2 w-32 bg-slate-100" />
                   </div>
                   <div className="flex items-center gap-3 opacity-30">
                      <div className="w-4 h-4 bg-slate-200" />
                      <div className="h-2 w-48 bg-slate-100" />
                   </div>
                </div>
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Fast Evolution" variant="academy"
            caption="O sentimento de dar o 'check' na última evolução do dia é indescritível. Finalize a clínica com tudo registrado. ✅ #ChecklistSucesso #EvoluçãoConcluída"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-10">
                <ClipboardCheck size={60} className="text-white" strokeWidth={1} />
                <h4 className="text-3xl lg:text-4xl font-black text-white tracking-tighter leading-none">
                   Evolução Concluída<br/>em Segundos.
                </h4>
                <div className="h-1 w-12 bg-white/40" />
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Preceptor Ready" variant="light"
            caption="O Academy facilita a vida do seu preceptor. Apresente seus casos com clareza e organização impecável. 👔 #ApresentaçãoDeCasos #Preceptor"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-10">
                <FileText size={54} className="text-brand-academy" strokeWidth={1} />
                <h4 className="text-3xl lg:text-4xl font-black text-brand-text tracking-tighter leading-tight">
                   Casos Prontos para<br/>Avaliação.
                </h4>
                <div className="px-5 py-2 border border-brand-academy/20 text-brand-academy text-[10px] font-black uppercase tracking-widest">Qualidade Padrão Hub</div>
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Box Insight" variant="academy"
            caption="Dica de hoje: Organização antecipa o sucesso. Use o Academy para manter sua mente focada no paciente. 💡 #InsightAcademy #FocoOdonto"
          >
             <div className="flex flex-col justify-between h-full w-full text-left">
                <div className="space-y-6">
                   <div className="px-3 py-1 bg-white text-brand-academy text-[9px] font-black uppercase tracking-widest inline-block">Insight #04</div>
                   <h4 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[0.9]">
                      A Ordem gera<br/>Liberdade.
                   </h4>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <MousePointer2 size={12} className="text-white" />
                   </div>
                   <p className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em]">OdontoHub Academy</p>
                </div>
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Complete Circle" variant="light"
            caption="De preparo a registro. O ciclo completo do seu aprendizado clínico, organizado e seguro. 🔄 #CicloClinico #OdontoAcademy"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-12">
                <RefreshCw size={60} className="text-brand-academy animate-spin-slow" strokeWidth={1} />
                <h4 className="text-3xl lg:text-4xl font-black text-brand-text tracking-tighter leading-[1.1]">
                   O Ciclo que Abre<br/>suas Portas.
                </h4>
                <div className="flex gap-4">
                   <div className="w-2 h-2 bg-brand-academy" />
                   <div className="w-2 h-2 bg-brand-academy" />
                </div>
             </div>
          </InstagramPost>
        </PresetSection>

        {/* TESTIMONIALS & TRUST */}
        <PresetSection title="OdontoHub — Autoridade e Depoimentos">
          <InstagramPost 
            title="Amanda's Story" variant="brand"
            caption="Me libertou da burocracia para focar no que euamo: o paciente. O depoimento da Dra. Amanda reflete a realidade de centenas de clínicas Pro. ✨ #DepoimentoOdonto #Sucesso"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-8 h-full">
                <Quote size={40} className="text-white/20 mb-2" strokeWidth={1} />
                <h4 className="text-2xl lg:text-3xl font-black text-white tracking-tighter leading-tight italic">
                   "A gestão ficou invisível e o lucro apareceu."
                </h4>
                <div className="pt-4">
                   <p className="text-xs font-black text-white uppercase tracking-[0.2em]">Dra. Amanda Ferraz</p>
                   <p className="text-[10px] font-medium text-white/50 uppercase tracking-[0.1em]">Reabilitação Oral</p>
                </div>
             </div>
          </InstagramPost>

          <InstagramPost 
            title="The Elite" variant="dark"
            caption="Junte-se à elite. O OdontoHub Pro é a escolha de quem decidiu dominar o mercado local com tecnologia. 🏆 #EliteOdonto #Liderança"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-10">
                <div className="flex gap-2">
                   {[1,2,3,4,5].map(i => <Star key={i} size={18} className="fill-brand-green text-brand-green" />)}
                </div>
                <h4 className="text-3xl lg:text-4xl font-black text-white tracking-tighter leading-[1.1]">
                   Escolha dos<br/>Líderes.
                </h4>
                <p className="text-[10px] font-black text-brand-green uppercase tracking-[0.4em]">Rank #1 em Gestão Médica</p>
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Student to Pro" variant="academy"
            caption="Ao se formar, migre com um clique. O Academy prepara você para ser o profissional Pro de amanhã. 🚀 #StudentToPro #CarreiraOdonto"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-12">
                <UserPlus size={60} className="text-white" strokeWidth={1} />
                <h4 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-none">
                   Sua Carreira<br/>em Evolução.
                </h4>
                <div className="h-0.5 w-16 bg-white/40" />
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Daily Inspiration" variant="light"
            caption="Organização não é apenas sobre pastas, é sobre mente focada no paciente. Inspire-se com o Hub. 💡 #InspiraçãoOdonto #Foco"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-10">
                <Lightbulb size={60} className="text-brand-green" strokeWidth={1} />
                <h4 className="text-3xl lg:text-4xl font-black text-brand-text tracking-tighter leading-tight">
                   Brilho no<br/>Atendimento.
                </h4>
                <p className="text-xs font-medium text-brand-text/30 italic">A clareza gera brilho.</p>
             </div>
          </InstagramPost>

          <InstagramPost 
            title="The Hub Way" variant="brand"
            caption="Simplicidade, elegância e performance. O modo de agir do OdontoHub. 🏛️ #HubWay #Performance"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-8">
                <div className="w-16 h-2 bg-white" />
                <h4 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-none">
                   O Jeito Hub de<br/>Gerir.
                </h4>
                <div className="w-16 h-2 bg-white" />
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Future Ready" variant="dark"
            caption="O futuro da odontologia começa agora. Comece grátis e sinta o poder da organização inteligente. 🚀 #StartNow #OdontoFuture"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-12">
                <Zap size={60} className="text-brand-green animate-pulse" strokeWidth={1} />
                <h4 className="text-3xl lg:text-4xl font-black text-white tracking-tighter leading-[1.1]">
                   Pronto para o<br/>Próximo Nível?
                </h4>
                <div className="px-6 py-2 bg-brand-green text-white text-[10px] font-black uppercase tracking-[0.2em]">Começar Grátis</div>
             </div>
          </InstagramPost>
        </PresetSection>

        {/* EXTRA ODONTOHUB PRO — FEATURES */}
        <PresetSection title="OdontoHub PRO — Toolbox Premium">
          <InstagramPost 
            title="Smart Agenda" variant="light"
            caption="Ela sabe quando você tem tempo livre e sugere como usá-lo. Eficiência máxima na palma da mão. 🗓️ #AgendaInteligente #GestãoPro"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-8">
                <Calendar size={54} className="text-brand-green" strokeWidth={1} />
                <h4 className="text-3xl lg:text-4xl font-black text-brand-text tracking-tighter leading-none">
                   A Agenda que<br/>Trabalha por você.
                </h4>
                <div className="h-0.5 w-12 bg-brand-green/20" />
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Behavioral Context" variant="dark"
            caption="Contexto é tudo. Saiba o perfil comportamental do seu paciente antes da primeira palavra. 🧠 #ContextoClínico #PsicologiaOdonto"
          >
             <div className="flex flex-col items-start text-left space-y-8">
                <Brain size={40} className="text-brand-green" strokeWidth={1} />
                <h4 className="text-3xl lg:text-4xl font-black text-white tracking-tighter leading-tight">
                   Entenda o Perfil de<br/>cada Paciente.
                </h4>
                <div className="space-y-2 opacity-50">
                  <div className="h-1.5 w-32 bg-white" />
                  <div className="h-1.5 w-48 bg-white" />
                </div>
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Instant Evolution" variant="light"
            caption="Focado no que importa: exame clínico e evolução. Nosso prontuário foi feito para ser rápido. 🗒️ #EvoluçãoClínica #Prontuário"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-10">
                <div className="w-20 h-20 bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-text">
                   <FileText size={40} strokeWidth={1} />
                </div>
                <h4 className="text-3xl lg:text-4xl font-black text-brand-text tracking-tighter leading-tight">
                   Registro sem<br/>Burocracia.
                </h4>
                <div className="h-0.5 w-16 bg-brand-green" />
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Small Practice" variant="brand"
            caption="Focamos no dentista solo e em pequenos consultórios que buscam clareza operacional. 🏥 #DentistaSolo #PequenaClínica"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-10">
                <Users size={54} className="text-white" strokeWidth={1} />
                <h4 className="text-3xl lg:text-4xl font-black text-white tracking-tighter leading-none">
                   Feito para quem<br/>Cuidar de tudo.
                </h4>
                <p className="text-[10px] font-black text-white/50 uppercase tracking-[0.3em]">Clareza Operacional</p>
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Migrate Easy" variant="light"
            caption="Seus dados migram com você para o Pro de forma instantânea. Cresça com segurança. 🔄 #MigraçãoDigital #Crescimento"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-8">
                <RefreshCw size={54} className="text-brand-green" strokeWidth={1.5} />
                <h4 className="text-3xl lg:text-4xl font-black text-brand-text tracking-tighter leading-[1.1]">
                   Transição sem<br/>Atrito.
                </h4>
                <div className="px-5 py-2 bg-slate-50 text-[10px] font-black uppercase tracking-widest border border-slate-100">Click & Grow</div>
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Admin Freedom" variant="dark"
            caption="Liberte sua linha telefônica. Deixe o Portal do Paciente cuidar do agendamento. 📞 #LiberdadeAdmin #GestãoHub"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-10">
                <ShieldCheck size={60} className="text-brand-green" strokeWidth={1} />
                <h4 className="text-3xl lg:text-4xl font-black text-white tracking-tighter leading-none">
                   Fim da Linha<br/>Ocupada.
                </h4>
                <p className="text-xs font-medium text-white/30 italic">WhatsApp Automatizado</p>
             </div>
          </InstagramPost>
        </PresetSection>

        {/* EXTRA ODONTOHUB ACADEMY — MINDSET */}
        <PresetSection title="OdontoHub ACADEMY — Mindset Acadêmico">
          <InstagramPost 
            title="Box Master" variant="academy"
            caption="O Modo Box é sua interface de guerra. Focada no que você precisa ver com os olhos cansados. 📱 #InterfaceBox #OdontoAcademico"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-10">
                <div className="p-6 bg-white/10 border border-white/10 text-white">
                   <Smartphone size={40} />
                </div>
                <h4 className="text-3xl lg:text-4xl font-black text-white tracking-tighter leading-tight">
                   Interface Otimizada<br/>para Tablets.
                </h4>
                <div className="flex gap-2">
                   <div className="w-10 h-1bg-white/20" />
                   <div className="w-10 h-1bg-white" />
                   <div className="w-10 h-1bg-white/20" />
                </div>
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Procedure Guide" variant="light"
            caption="Checklists automáticos por disciplina. Do diagnóstico à cirurgia complexa. 🦷 #ChecklistClinico #Aprendizado"
          >
             <div className="flex flex-col items-start text-left space-y-8">
                <ClipboardCheck size={40} className="text-brand-academy" />
                <h4 className="text-3xl lg:text-4xl font-black text-brand-text tracking-tighter leading-tight">
                   Segurança em Cada<br/>Etapa Clínica.
                </h4>
                <div className="space-y-2">
                   <div className="h-1.5 w-32 bg-slate-100" />
                   <div className="h-1.5 w-40 bg-brand-academy/20" />
                </div>
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Academic Success" variant="academy"
            caption="Organization leads to success. Become a prepared student with Academy. 🎓 #AcademicSuccess #Odonto"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-12">
                <Trophy size={64} className="text-white" strokeWidth={1} />
                <h4 className="text-3xl lg:text-4xl font-black text-white tracking-tighter leading-none">
                   Organização antecipa<br/>o Sucesso.
                </h4>
                <div className="h-0.5 w-12 bg-white/40" />
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Digital Mentor" variant="light"
            caption="O Academy é seu mentor digital. Mantenha o foco no paciente e na técnica. 🤝 #MentorOdonto #Mentoria"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-10">
                <div className="w-20 h-20 rounded-full bg-brand-academy-soft border border-brand-academy/10 flex items-center justify-center text-brand-academy">
                   <UserPlus size={40} />
                </div>
                <h4 className="text-3xl lg:text-4xl font-black text-brand-text tracking-tighter leading-tight">
                   Sua Mente no<br/>Lugar Certo.
                </h4>
                <p className="text-[10px] font-black text-brand-text/30 uppercase tracking-[0.2em]">Foco Clínico Total</p>
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Photo Archive" variant="academy"
            caption="Banco de fotos ilimitado para seus casos clínicos. Documente tudo sem ocupar o rolo da câmera. 📸 #FotoClinical #PortfolioOdonto"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-10">
                <Camera size={54} className="text-white" strokeWidth={1} />
                <h4 className="text-3xl lg:text-4xl font-black text-white tracking-tighter leading-tight">
                   Seu Portfólio<br/>Começa Agora.
                </h4>
                <div className="flex gap-4">
                   <div className="w-1 h-8 bg-white/20" />
                   <div className="w-1 h-8 bg-white/20" />
                   <div className="w-1 h-8 bg-white" />
                </div>
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Evolution Ready" variant="light"
            caption="Evoluções guiadas e claras. O padrão que seus preceptores vão amar. 🖋️ #EvoluçãoGuiada #OdontoAcademy"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-10">
                <FileText size={54} className="text-brand-academy" strokeWidth={1} />
                <h4 className="text-3xl lg:text-4xl font-black text-brand-text tracking-tighter leading-none">
                   Evoluções que<br/>Impressonam.
                </h4>
                <div className="h-1 w-16 bg-brand-academy" />
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Box Mode Elite" variant="academy"
            caption="Prepare-se para ser o melhor dentista. Use ferramentas que elevam seu padrão clínico. 🚀 #PadrãoHub #EliteAcademy"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-12 h-full">
                <Zap size={60} className="text-white animate-pulse" />
                <h4 className="text-3xl lg:text-4xl font-black text-white tracking-tighter leading-[1.1]">
                   Eleve o Nível da<br/>sua Graduação.
                </h4>
                <div className="px-6 py-2 bg-white text-brand-academy text-[10px] font-black uppercase tracking-[0.2em]">Try Academy Free</div>
             </div>
          </InstagramPost>

          <InstagramPost 
            title="Final Check" variant="light"
            caption="Checklist de encerramento da clínica. Não esqueça nada e chegue em casa com dever cumprido. ✅ #DeffCheck #OdontoHub"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-8">
                <div className="w-20 h-20 bg-brand-academy-soft flex items-center justify-center text-brand-academy border border-brand-academy/20">
                   <Check size={40} strokeWidth={2} />
                </div>
                <h4 className="text-3xl lg:text-4xl font-black text-brand-text tracking-tighter leading-tight">
                   Clínica Encerrada.<br/>Mente Livre.
                </h4>
                <div className="h-0.5 w-12 bg-brand-academy/20" />
             </div>
          </InstagramPost>
        </PresetSection>
      </main>

      {/* Modern Guideline Footer */}
      <section className="bg-white py-24 border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
             <div className="lg:col-span-1">
                <div className="flex items-center gap-2 mb-10">
                  <span className="font-bold tracking-tight text-brand-text text-2xl italic underline decoration-brand-green decoration-[8px] underline-offset-4">Odonto</span>
                  <span className="font-bold tracking-tight text-brand-green text-2xl">Hub</span>
                </div>
                <p className="text-sm text-brand-text/40 font-medium leading-relaxed mb-10 max-w-sm">
                   Documentação oficial de marca para kits de redes sociais. O uso correto mantém a identidade do Hub forte em todos os pontos de contato.
                </p>
                <div className="flex gap-4">
                   <Button variant="ghost" className="bg-slate-50 border border-slate-100 rounded-2xl h-14 w-14 p-0 hover:bg-brand-green/5 hover:text-brand-green transition-all">
                      <Instagram size={22} />
                   </Button>
                   <Button variant="ghost" className="bg-slate-50 border border-slate-100 rounded-2xl h-14 w-14 p-0 hover:bg-brand-green/5 hover:text-brand-green transition-all text-slate-300">
                      <Share2 size={22} />
                   </Button>
                </div>
             </div>
             
             <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                   <h5 className="text-[10px] font-black text-brand-text/30 uppercase tracking-[0.4em] mb-8">Padrões Visuais</h5>
                   <ul className="space-y-6">
                      <li className="flex gap-4 items-start">
                         <div className="w-2 h-2 rounded-full bg-brand-green mt-1" />
                         <p className="text-sm font-medium text-brand-text leading-tight">Proporção 4:5 obrigatória para maior visibilidade no feed (Retrato).</p>
                      </li>
                      <li className="flex gap-4 items-start">
                         <div className="w-2 h-2 rounded-full bg-brand-green mt-1" />
                         <p className="text-sm font-medium text-brand-text leading-tight">Margens de segurança internas de 64px a 80px.</p>
                      </li>
                      <li className="flex gap-4 items-start">
                         <div className="w-2 h-2 rounded-full bg-brand-green mt-1" />
                         <p className="text-sm font-medium text-brand-text leading-tight">Tipografia sem serifa com tracking negativo (-0.05em).</p>
                      </li>
                   </ul>
                </div>
                <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
                   <BookmarkCheck size={32} className="text-brand-green mb-6 opacity-40" />
                   <h5 className="text-lg font-black text-brand-text mb-4">Kit de Ativos</h5>
                   <p className="text-xs text-brand-text/50 font-medium leading-relaxed mb-10">Baixe o pack de logotipos em alta definição (.svg e .png transparente) para compor seus posts.</p>
                   <Button className="w-full !bg-brand-green !text-white h-14 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-brand-green/20">Download Assets</Button>
                </div>
             </div>
          </div>
        </div>
      </section>

      <footer className="py-16 text-center border-t border-slate-50 bg-white">
          <p className="text-[9px] font-black text-brand-text/20 uppercase tracking-[0.6em]">© 2026 OdontoHub Software S.A. — Social Guidelines</p>
      </footer>
    </div>
  );
}
