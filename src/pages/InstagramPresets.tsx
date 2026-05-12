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

const InstagramStory = ({ 
  children, 
  title, 
  variant = 'light'
}: { 
  children: React.ReactNode, 
  title: string, 
  variant?: 'light' | 'offwhite' | 'dark' | 'brand' | 'academy'
}) => {
  const storyRef = useRef<HTMLDivElement>(null);

  const downloadArt = useCallback(() => {
    if (storyRef.current === null) return;

    toPng(storyRef.current, { cacheBust: true, pixelRatio: 2 })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `${title.toLowerCase().replace(/\s+/g, '-')}-story.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => console.error(err));
  }, [storyRef, title]);

  const variantStyles = {
    light: 'bg-white text-brand-text border-slate-100',
    offwhite: 'bg-brand-bg text-brand-text border-brand-border',
    dark: 'bg-[#0A0D10] text-white border-white/5',
    brand: 'bg-brand-green text-white border-brand-green',
    academy: 'bg-brand-academy text-white border-brand-academy'
  };

  return (
    <div className="flex flex-col group h-full">
      <div 
        ref={storyRef}
        className={`relative aspect-[9/16] w-full overflow-hidden border transition-all duration-500 group-hover:shadow-2xl ${variantStyles[variant]} rounded-none`}
      >
         <div className="absolute inset-0 flex flex-col p-12 items-center justify-center text-center">
            {children}
            <div className="absolute bottom-12 left-0 right-0 flex justify-center">
              <p className={`text-[10px] font-black uppercase tracking-[0.5em] ${variant === 'light' || variant === 'offwhite' ? 'text-brand-text/10' : 'text-white/10'}`}>
                @odontohub.app
              </p>
            </div>
         </div>
      </div>
      <div className="mt-6 px-4 flex justify-between items-center">
        <h4 className="font-black text-brand-text text-sm uppercase tracking-widest">{title}</h4>
        <Button 
          variant="ghost" 
          onClick={downloadArt}
          className="h-8 w-8 p-0 rounded-full hover:bg-brand-green/5 text-slate-300 hover:text-brand-green transition-colors"
        >
          <Download size={16} />
        </Button>
      </div>
    </div>
  );
};

const InstagramHighlight = ({ 
  icon: Icon, 
  title, 
  variant = 'brand'
}: { 
  icon: any, 
  title: string, 
  variant?: 'brand' | 'academy' | 'dark'
}) => {
  const highlightRef = useRef<HTMLDivElement>(null);

  const downloadArt = useCallback(() => {
    if (highlightRef.current === null) return;
    toPng(highlightRef.current, { cacheBust: true, pixelRatio: 3 })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `highlight-${title.toLowerCase()}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => console.error(err));
  }, [highlightRef, title]);

  const themes = {
    brand: 'bg-brand-green text-white',
    academy: 'bg-brand-academy text-white',
    dark: 'bg-[#0A0D10] text-brand-green'
  };

  return (
    <div className="flex flex-col items-center group">
      <div 
        ref={highlightRef}
        className={`w-40 h-40 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-105 border-4 border-white shadow-xl ${themes[variant]}`}
      >
        <Icon size={64} strokeWidth={1} />
      </div>
      <div className="mt-6 flex flex-col items-center gap-2">
        <p className="text-[10px] font-black text-brand-text uppercase tracking-widest">{title}</p>
        <Button 
          variant="ghost" 
          onClick={downloadArt}
          className="h-8 px-4 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-300 hover:text-brand-green flex items-center gap-2"
        >
          <Download size={12} /> Baixar
        </Button>
      </div>
    </div>
  );
};

export default function InstagramPresets() {
  const [activeTab, setActiveTab] = useState<'feed' | 'stories' | 'highlights'>('feed');

  return (
    <div className="min-h-screen bg-[#FDFDFF]">
      {/* Minimal Header */}
      <header className="pt-24 lg:pt-32 pb-12 border-b border-slate-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-16">
            <div className="max-w-3xl">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
                <div className="h-0.5 w-10 bg-brand-green" />
                <span className="text-[10px] font-black text-brand-green uppercase tracking-[0.4em]">Social Content Kit v2.5</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-brand-text mb-8 leading-[0.95]">
                Dê vida ao seu<br/> 
                <span className="text-brand-green">branding digital.</span>
              </h1>
              <p className="text-base md:text-lg text-brand-text/50 font-medium leading-relaxed">
                Pack de artes profissionais para feed, stories e destaques. Otimizado para máxima autoridade no Instagram @odontohub.app.
              </p>
            </div>
            <div className="shrink-0 flex items-center justify-center lg:justify-start gap-4 py-2 px-6 bg-slate-50 rounded-full border border-slate-100">
               <Instagram size={16} className="text-brand-green" />
               <span className="text-xs font-black text-brand-text uppercase tracking-widest">Brand Kit Oficial</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-16">
          <div className="flex items-center justify-center lg:justify-start gap-1 p-1 bg-slate-100/50 rounded-2xl w-fit mx-auto lg:mx-0 border border-slate-100">
            {(['feed', 'stories', 'highlights'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeTab === tab 
                    ? 'bg-white text-brand-text shadow-sm ring-1 ring-slate-200/50' 
                    : 'text-slate-400 hover:text-brand-text hover:bg-white/50'
                }`}
              >
                {tab === 'feed' && 'Feed (4:5)'}
                {tab === 'stories' && 'Stories (9:16)'}
                {tab === 'highlights' && 'Destaques'}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="py-20 lg:py-32 max-w-7xl mx-auto px-6 lg:px-12">
        
        {activeTab === 'feed' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-32"
          >
            {/* ODONTOHUB PRO — PRODUCTIVITY */}
            <PresetSection title="OdontoHub PRO — Produtividade Implacável">
          <InstagramPost 
            title="Mindset Zero" variant="dark"
            caption="Menos caos. Mais clareza para cuidar. O OdontoHub organiza agenda, pacientes e pendências para mostrar o que realmente precisa da sua atenção hoje — sem transformar sua rotina em um sistema pesado. 🧠 #ProdutividadeOdonto #GestãoSemPeso"
          >
             <div className="flex flex-col items-center justify-center text-center space-y-8">
                <div className="relative">
                   <div className="absolute inset-0 bg-brand-green/20 blur-2xl rounded-full" />
                   <Brain size={60} className="text-brand-green relative z-10" strokeWidth={1.5} />
                </div>
                <h4 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[0.95]">
                   A desordem tem<br/>um custo alto.
                </h4>
                <p className="text-[10px] font-bold text-brand-green uppercase tracking-[0.5em]">Silencie o ruído.</p>
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
        </PresetSection>
      </motion.div>
    )}

    {activeTab === 'stories' && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-40"
      >
        {/* DESTAQUE 1 — SISTEMA */}
        <PresetSection title="Destaque 01 — Sistema">
          <InstagramStory title="Sistema 01" variant="offwhite">
            <div className="flex flex-col items-center gap-12 max-w-[280px]">
              <h4 className="text-5xl font-black text-brand-text tracking-tighter leading-[0.9] text-center">
                Você abre.<br/>
                <span className="text-brand-green/30">Ele já entendeu o dia.</span>
              </h4>
              <div className="w-12 h-0.5 bg-brand-green/20" />
            </div>
          </InstagramStory>

          <InstagramStory title="Sistema 02" variant="brand">
            <div className="flex flex-col items-start text-left px-4 gap-12 w-full">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-brand-green-soft rounded-full" />
                  <p className="text-lg font-medium text-white/90">Tem paciente chegando.</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-brand-green-soft rounded-full" />
                  <p className="text-lg font-medium text-white/90">Tem retorno esquecido.</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-brand-green-soft rounded-full" />
                  <p className="text-lg font-medium text-white/90">Tem consulta sem confirmar.</p>
                </div>
              </div>
              <p className="text-sm font-black text-brand-green-soft/40 uppercase tracking-[0.3em] mt-4">O OdontoHub separa isso por você.</p>
            </div>
          </InstagramStory>

          <InstagramStory title="Sistema 03" variant="offwhite">
            <div className="flex flex-col items-center gap-8 text-center max-w-[260px]">
              <div className="w-20 h-20 rounded-full bg-brand-green-soft border border-brand-green/10 flex items-center justify-center mb-4">
                <Zap size={32} className="text-brand-green" />
              </div>
              <h4 className="text-4xl font-black text-brand-text tracking-tighter leading-[1.1]">
                O importante aparece antes de virar problema.
              </h4>
            </div>
          </InstagramStory>

          <InstagramStory title="Sistema 04" variant="dark">
            <div className="flex flex-col items-center gap-12 text-center max-w-[280px]">
              <h4 className="text-5xl font-black text-white tracking-tighter leading-[0.95]">
                Não é sobre ter mais telas.
              </h4>
              <p className="text-lg text-white/40 font-medium leading-relaxed">
                É sobre pensar menos sozinho.
              </p>
            </div>
          </InstagramStory>

          <InstagramStory title="Sistema 05" variant="offwhite">
            <div className="flex flex-col items-start text-left px-4 gap-10 w-full justify-center h-full">
               <div className="premium-card p-10 w-full space-y-8">
                  <div className="space-y-2">
                    <p className="text-[10px] font-black text-brand-green uppercase tracking-widest">Próxima Ação</p>
                    <h4 className="text-2xl font-black text-brand-text tracking-tight uppercase">Confirmar Agenda</h4>
                  </div>
                  <div className="h-px w-full bg-brand-border" />
                  <div className="flex justify-between items-center text-[10px] font-black text-brand-text/30 uppercase tracking-[0.2em]">
                    <span>Agenda • Pacientes • Pendências</span>
                  </div>
               </div>
               <p className="text-sm text-brand-text/40 font-medium px-2 italic">Uma próxima ação clara em cada detalhe.</p>
            </div>
          </InstagramStory>

          <InstagramStory title="Sistema 06" variant="brand">
            <div className="flex flex-col items-center gap-16 text-center">
               <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-white blur-3xl opacity-20" />
                  <Check size={48} className="text-white relative z-10" />
               </div>
               <div className="space-y-6">
                 <h4 className="text-5xl font-black text-white tracking-tighter leading-none">
                   Menos peso mental.<br/>
                   <span className="opacity-40">Mais clareza.</span>
                 </h4>
                 <Button className="!bg-white !text-brand-green h-14 px-12 rounded-full font-black text-[10px] uppercase tracking-widest transform hover:scale-105 transition-all">Teste Grátis</Button>
               </div>
            </div>
          </InstagramStory>
        </PresetSection>

        {/* DESTAQUE 2 — DEMONSTRAÇÃO */}
        <PresetSection title="Destaque 02 — Demonstração">
          <InstagramStory title="Demo 01" variant="offwhite">
            <div className="flex flex-col items-center gap-12 text-center max-w-[300px]">
              <div className="space-y-4">
                <p className="text-[11px] font-black text-brand-green uppercase tracking-[0.5em]">Na prática, é simples.</p>
                <h4 className="text-5xl font-black text-brand-text tracking-tighter leading-[0.9]">
                  O que precisa da sua atenção agora.
                </h4>
              </div>
            </div>
          </InstagramStory>

          <InstagramStory title="Demo 02" variant="light">
            <div className="flex flex-col items-start text-left px-4 gap-12 w-full justify-center h-full">
              <div className="space-y-6">
                <p className="text-[11px] font-black text-brand-green uppercase tracking-[0.5em]">Próximo atendimento</p>
                <div className="premium-card p-10 w-full space-y-6">
                   <div className="flex justify-between items-center">
                      <div className="space-y-1">
                        <p className="text-xs font-black text-brand-text">Maria Oliveira</p>
                        <p className="text-[10px] text-brand-text/40 font-bold uppercase tracking-widest">14:00 • Box 03</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-brand-green-soft flex items-center justify-center text-brand-green">
                        <Calendar size={18} />
                      </div>
                   </div>
                   <div className="h-px w-full bg-brand-border" />
                   <p className="text-[10px] font-bold text-brand-text/40 uppercase tracking-widest leading-relaxed">
                     Paciente confirmada.<br/>Revisão de implante.
                   </p>
                </div>
              </div>
              <p className="text-lg text-brand-text/40 font-medium">Sem procurar.</p>
            </div>
          </InstagramStory>

          <InstagramStory title="Demo 03" variant="brand">
            <div className="flex flex-col items-center gap-12 text-center max-w-[280px]">
              <div className="relative">
                <div className="absolute inset-0 bg-white blur-3xl opacity-20" />
                <Users size={80} className="text-white relative z-10" strokeWidth={1} />
              </div>
              <h4 className="text-4xl font-black text-white tracking-tighter leading-[1.1]">
                Paciente que sumiu.
              </h4>
              <p className="text-base text-white/60 font-medium leading-relaxed">
                O sistema lembra quem precisa voltar antes que você esqueça.
              </p>
            </div>
          </InstagramStory>

          <InstagramStory title="Demo 04" variant="dark">
             <div className="flex flex-col items-start text-left px-4 gap-12 w-full h-full justify-center">
                <div className="space-y-4">
                  <p className="text-[11px] font-black text-brand-green uppercase tracking-[0.5em]">Consulta sem confirmação</p>
                  <h4 className="text-5xl font-black text-white tracking-tighter leading-[0.9]">
                    Você vê o risco antes da cadeira ficar vazia.
                  </h4>
                </div>
                <div className="flex flex-col gap-4 w-full opacity-40">
                  <div className="h-10 w-full border border-white/10 rounded-xl" />
                  <div className="h-10 w-2/3 border border-white/10 rounded-xl" />
                </div>
             </div>
          </InstagramStory>

          <InstagramStory title="Demo 05" variant="offwhite">
            <div className="flex flex-col items-center gap-10 text-center max-w-[280px]">
              <div className="p-8 bg-white border border-brand-green/20 rounded-[2.5rem] shadow-xl shadow-brand-green/5">
                <PlusCircle size={60} className="text-brand-green" strokeWidth={1} />
              </div>
              <div className="space-y-4">
                <h4 className="text-4xl font-black text-brand-text tracking-tighter leading-none">Horário livre?</h4>
                <p className="text-base text-brand-text/40 font-medium leading-relaxed">
                  O OdontoHub sugere quem pode ser chamado para encaixe.
                </p>
              </div>
            </div>
          </InstagramStory>

          <InstagramStory title="Demo 06" variant="brand">
            <div className="flex flex-col items-center gap-12 text-center">
               <h4 className="text-6xl font-black text-white tracking-tighter leading-[0.85]">
                 Você não entra para procurar.<br/>
                 <span className="text-brand-green-soft/40">Você entra para decidir.</span>
               </h4>
               <Button className="!bg-white !text-brand-green h-16 px-16 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl">Download Demo</Button>
            </div>
          </InstagramStory>
        </PresetSection>

        {/* DESTAQUE 3 — ACADEMY */}
        <PresetSection title="Destaque 03 — Academy">
          <InstagramStory title="Academy 01" variant="academy">
            <div className="flex flex-col items-center gap-12 text-center max-w-[280px]">
              <div className="relative">
                <div className="absolute inset-0 bg-white blur-3xl opacity-20" />
                <GraduationCap size={100} className="text-white relative z-10" strokeWidth={1} />
              </div>
              <h4 className="text-4xl font-black text-white tracking-tighter leading-[1.1]">
                A clínica da faculdade não precisa ser tão confusa.
              </h4>
            </div>
          </InstagramStory>

          <InstagramStory title="Academy 02" variant="offwhite">
            <div className="flex flex-col items-start text-left px-4 gap-12 w-full justify-center h-full">
              <div className="space-y-8">
                <p className="text-[11px] font-black text-brand-academy uppercase tracking-[0.5em]">Paciente chegou</p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 opacity-100">
                    <div className="w-1.5 h-1.5 bg-brand-academy rounded-full" />
                    <p className="text-lg font-medium text-brand-text">Você abre o caso.</p>
                  </div>
                  <div className="flex items-center gap-4 opacity-50">
                    <div className="w-1.5 h-1.5 bg-brand-academy rounded-full" />
                    <p className="text-lg font-medium text-brand-text">Revê o histórico.</p>
                  </div>
                  <div className="flex items-center gap-4 opacity-30">
                    <div className="w-1.5 h-1.5 bg-brand-academy rounded-full" />
                    <p className="text-lg font-medium text-brand-text">Entende o que vai fazer.</p>
                  </div>
                </div>
              </div>
            </div>
          </InstagramStory>

          <InstagramStory title="Academy 03" variant="academy">
             <div className="flex flex-col items-center gap-12 text-center">
                <div className="h-px w-20 bg-white/20" />
                <h4 className="text-4xl font-black text-white tracking-tighter leading-[1.1] max-w-[260px]">
                  Durante o atendimento, você não fica perdido.
                </h4>
                <div className="p-8 border border-white/10 rounded-3xl w-full max-w-[240px] space-y-4">
                   <div className="h-2 w-full bg-white/20 rounded-full" />
                   <div className="h-2 w-2/3 bg-white/20 rounded-full" />
                </div>
                <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">Checklist • Caso • Evolução</p>
             </div>
          </InstagramStory>

          <InstagramStory title="Academy 04" variant="light">
            <div className="flex flex-col items-center gap-14 text-center max-w-[280px]">
              <div className="w-24 h-24 bg-brand-academy/5 rounded-[2rem] flex items-center justify-center">
                <ClipboardCheck size={60} className="text-brand-academy" strokeWidth={1} />
              </div>
              <div className="space-y-6">
                <h4 className="text-5xl font-black text-brand-text tracking-tighter leading-none">Terminou?</h4>
                <p className="text-base text-brand-text/40 font-medium leading-relaxed">
                  Registra a evolução. Marca o retorno. Segue com mais segurança.
                </p>
              </div>
            </div>
          </InstagramStory>

          <InstagramStory title="Academy 05" variant="offwhite">
            <div className="flex flex-col items-center gap-10 text-center max-w-[280px]">
              <h4 className="text-4xl font-black text-brand-text tracking-tighter leading-[1.1]">
                Não é só organizar matéria.
              </h4>
              <h4 className="text-4xl font-black text-brand-academy tracking-tighter leading-[1.1]">
                É organizar a vida clínica.
              </h4>
              <div className="w-1.5 h-1.5 bg-brand-academy rounded-full" />
            </div>
          </InstagramStory>

          <InstagramStory title="Academy 06" variant="academy">
            <div className="flex flex-col items-center gap-16 text-center">
               <h4 className="text-6xl font-black text-white tracking-tighter leading-[0.85]">
                 Do primeiro paciente ao primeiro consultório.
               </h4>
               <Button className="!bg-white !text-brand-academy h-16 px-16 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl">Try Academy</Button>
            </div>
          </InstagramStory>
        </PresetSection>

        {/* DESTAQUE 4 — EMBAIXADORES */}
        <PresetSection title="Destaque 04 — Embaixadores">
          <InstagramStory title="Ambassador 01" variant="offwhite">
             <div className="flex flex-col items-center gap-12 text-center max-w-[280px]">
                <div className="relative">
                   <div className="absolute inset-0 bg-brand-green/20 blur-3xl opacity-50" />
                   <Star size={100} className="text-brand-green relative z-10 fill-brand-green" strokeWidth={0} />
                </div>
                <h4 className="text-5xl font-black text-brand-text tracking-tighter leading-[0.9]">
                  Para quem vive a Odontologia de verdade.
                </h4>
             </div>
          </InstagramStory>

          <InstagramStory title="Ambassador 02" variant="brand">
            <div className="flex flex-col items-center gap-12 text-center max-w-[300px]">
              <h4 className="text-5xl font-black text-white tracking-tighter leading-[0.9]">
                O OdontoHub não nasceu para parecer grande.
              </h4>
              <p className="text-lg text-white/40 font-medium italic underline decoration-white/20 underline-offset-8">Nasceu para ajudar na rotina real.</p>
            </div>
          </InstagramStory>

          <InstagramStory title="Ambassador 03" variant="offwhite">
             <div className="flex flex-col items-center gap-12 text-center max-w-[320px]">
                <div className="p-10 premium-card space-y-6">
                   <Heart size={48} className="text-brand-red animate-pulse mx-auto" />
                   <h4 className="text-3xl font-black text-brand-text tracking-tight leading-tight">
                     Se você mostra a vida clínica com verdade...
                   </h4>
                </div>
                <p className="text-xl font-bold text-brand-text/40 tracking-tighter">Você entende essa dor.</p>
             </div>
          </InstagramStory>

          <InstagramStory title="Ambassador 04" variant="dark">
            <div className="flex flex-col items-start text-left px-4 gap-12 h-full justify-center">
              <div className="space-y-4">
                <h4 className="text-4xl font-black text-white tracking-tighter leading-[1.1]">Menos bagunça.</h4>
                <h4 className="text-4xl font-black text-white/60 tracking-tighter leading-[1.1]">Menos improviso.</h4>
                <h4 className="text-5xl font-black text-brand-green tracking-tighter leading-[1.1]">Mais clareza.</h4>
              </div>
              <p className="text-[11px] font-black text-white/20 uppercase tracking-[0.5em] mt-8">Essa é a ideia que você representa.</p>
            </div>
          </InstagramStory>

          <InstagramStory title="Ambassador 05" variant="offwhite">
             <div className="flex flex-col items-start text-left px-4 gap-10 w-full justify-center">
                <p className="text-[11px] font-black text-brand-green uppercase tracking-[0.5em]">Benefícios de Embaixador</p>
                <div className="space-y-6">
                   {['Cupom próprio', 'Comissão', 'Materiais oficiais', 'Proximidade com o projeto'].map(perk => (
                     <div key={perk} className="flex items-center gap-4">
                        <div className="w-1.5 h-1.5 bg-brand-green rounded-full shadow-lg shadow-brand-green/40" />
                        <p className="text-xl font-black text-brand-text uppercase tracking-tight">{perk}</p>
                     </div>
                   ))}
                </div>
             </div>
          </InstagramStory>

          <InstagramStory title="Ambassador 06" variant="brand">
            <div className="flex flex-col items-center gap-14 text-center">
               <div className="relative">
                 <div className="absolute inset-0 bg-white blur-[80px] opacity-20" />
                 <Share2 size={64} className="text-white relative z-10" />
               </div>
               <h4 className="text-6xl font-black text-white tracking-tighter leading-[0.85]">
                 Quer representar o OdontoHub?
               </h4>
               <Button className="!bg-white !text-brand-green h-16 px-16 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl">Apply Program</Button>
            </div>
          </InstagramStory>
        </PresetSection>

        {/* DESTAQUE 5 — SUPORTE */}
        <PresetSection title="Destaque 05 — Suporte">
          <InstagramStory title="Support 01" variant="offwhite">
             <div className="flex flex-col items-center gap-12 text-center max-w-[280px]">
                <div className="w-20 h-20 bg-brand-green-soft rounded-full flex items-center justify-center border border-brand-green/5">
                   <Target size={32} className="text-brand-green" />
                </div>
                <h4 className="text-5xl font-black text-brand-text tracking-tighter leading-[0.9]">
                  Começar não deve ser difícil.
                </h4>
             </div>
          </InstagramStory>

          <InstagramStory title="Support 02" variant="brand">
            <div className="flex flex-col items-center gap-12 text-center max-w-[300px]">
              <h4 className="text-5xl font-black text-white tracking-tighter leading-[0.9]">
                A gente te ajuda a colocar sua rotina no sistema.
              </h4>
              <div className="w-12 h-1 bg-white/20 rounded-full" />
            </div>
          </InstagramStory>

          <InstagramStory title="Support 03" variant="offwhite">
             <div className="flex flex-col items-start px-4 gap-12 w-full justify-center h-full">
                <div className="space-y-6">
                   {['Cadastro', 'Agenda', 'Pacientes', 'Primeiros passos'].map((item, i) => (
                     <div key={item} className="flex items-center gap-4" style={{ opacity: 1 - (i * 0.2) }}>
                        <div className="w-2 h-2 bg-brand-green rounded-full" />
                        <p className="text-2xl font-black text-brand-text uppercase tracking-tighter">{item}</p>
                     </div>
                   ))}
                </div>
                <p className="text-lg text-brand-text/40 font-medium mt-4">Sem complicar.</p>
             </div>
          </InstagramStory>

          <InstagramStory title="Support 04" variant="dark">
            <div className="flex flex-col items-center gap-12 text-center max-w-[280px]">
              <div className="w-24 h-24 bg-brand-green/10 rounded-full flex items-center justify-center border border-brand-green/20">
                <MessageCircle size={48} className="text-brand-green" />
              </div>
              <div className="space-y-4">
                <h4 className="text-5xl font-black text-white tracking-tighter leading-none">Suporte humano.</h4>
                <p className="text-xl text-white/40 font-medium">Resposta direta.</p>
              </div>
            </div>
          </InstagramStory>

          <InstagramStory title="Support 05" variant="brand">
            <div className="flex flex-col items-center gap-14 text-center h-full justify-center">
               <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                  <PlusCircle size={48} className="text-white" />
               </div>
               <div className="space-y-6">
                 <h4 className="text-6xl font-black text-white tracking-tighter leading-none">
                   Quando travar,<br/>chame a gente.
                 </h4>
                 <Button className="!bg-white !text-brand-text h-16 px-16 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl">Get Help</Button>
               </div>
            </div>
          </InstagramStory>
        </PresetSection>
      </motion.div>
    )}

    {activeTab === 'highlights' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-32"
          >
            {/* HIGHLIGHTS */}
            <div className="mb-24 lg:mb-32">
              <div className="flex items-center gap-6 mb-16 lg:mb-20">
                <h3 className="text-[10px] lg:text-xs font-black text-brand-text/40 uppercase tracking-[0.5em] whitespace-nowrap">Capas para Destaques</h3>
                <div className="h-px w-full bg-slate-100" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-14">
                <InstagramHighlight title="Agenda" icon={Calendar} variant="brand" />
                <InstagramHighlight title="Pacientes" icon={Users} variant="brand" />
                <InstagramHighlight title="Finanças" icon={BarChart3} variant="brand" />
                <InstagramHighlight title="Academy" icon={GraduationCap} variant="academy" />
                <InstagramHighlight title="Embaixadores" icon={Star} variant="academy" />
                <InstagramHighlight title="Suporte" icon={MessageCircle} variant="dark" />
              </div>
            </div>

            <div className="p-12 lg:p-20 bg-slate-50 border border-slate-100 rounded-[4rem] text-center max-w-4xl mx-auto">
              <Sparkles size={48} className="text-brand-green mb-8 mx-auto" />
              <h2 className="text-3xl lg:text-4xl font-black text-brand-text mb-6">Mantenha a Coerência.</h2>
              <p className="text-brand-text/40 font-medium leading-relaxed mb-10">
                Um perfil com destaques organizados converte 3x mais. Use as capas que combinam com o seu plano (Pro ou Academy) e mantenha uma paleta de cores consistente.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                 <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <Check size={14} className="text-brand-green" /> Hub Pro (Verde)
                 </div>
                 <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <Check size={14} className="text-brand-academy" /> Academy (Roxo)
                 </div>
              </div>
            </div>
          </motion.div>
        )}
        {/* NO TAB SELECTED FALLBACK - SHOULDN'T HAPPEN */}
        {/* NO TAB SELECTED FALLBACK - SHOULDN'T HAPPEN */}
        {activeTab === undefined && <div className="text-center py-20 text-brand-text/20">Selecione uma categoria acima</div>}
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
