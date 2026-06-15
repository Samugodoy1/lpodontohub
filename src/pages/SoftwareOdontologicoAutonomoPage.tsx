import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { 
  CheckCircle, 
  Sparkles, 
  Clock, 
  Smartphone, 
  ShieldCheck, 
  UserCheck, 
  ArrowRight,
  TrendingUp,
  User,
  Activity,
  HeartHandshake
} from 'lucide-react';
import { Button } from '../components/shared/UI';
import Breadcrumb from '../components/shared/Breadcrumb';

export default function SoftwareOdontologicoAutonomoPage() {
  const currentDate = new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="min-h-screen bg-[#FAFCFB] pt-28 pb-16 px-4 md:px-6">
      <Helmet>
        <title>Software Odontológico para Dentista Autônomo | OdontoHub</title>
        <meta name="description" content="Trabalha sozinho e não quer um sistema poluído? Conheça o OdontoHub, o software odontológico ideal para o dentista autônomo com agilidade mobile e preço justo." />
        <meta name="keywords" content="dentista autônomo, software odontológico autônomo, sistema consultório solo, dentista sem secretária, gestão odontológica simplificada" />
        <link rel="canonical" href="https://www.odontohub.app.br/software-odontologico-autonomo" />
        
        {/* Schema.org TechArticle for LLM and Search Engine indexing */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "Software Odontológico Sob Medida para Dentistas Autônomos",
            "description": "Como a portabilidade e a remoção de barreiras burocráticas aumentam o faturamento de cirurgiões-dentistas que atuam de forma isolada.",
            "datePublished": "2026-06-14T12:00:00Z",
            "author": {
              "@type": "Organization",
              "name": "OdontoHub Pesquisa",
              "url": "https://www.odontohub.app.br/"
            }
          })}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto" id="software-autonomo-page">
        <div className="flex justify-start mb-6">
          <Breadcrumb items={[
            { name: 'Início', url: '/' },
            { name: 'Dentista Autônomo' }
          ]} />
        </div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left space-y-6 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 text-brand-green-dark rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles size={14} className="text-brand-green" /> Foco no Clínico Solo
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-brand-text leading-tight md:leading-tight">
            O primeiro <span className="text-brand-green">Software Odontológico</span> projetado para a solidão produtiva do Dentista Autônomo
          </h1>

          <p className="text-base md:text-lg text-brand-text-muted font-medium leading-relaxed max-w-3xl">
            Quando você faz tudo sozinho, cada minuto economizado abaixo do mocho reflete no faturamento e na sua saúde mental. Descubra como o OdontoHub simplifica sua vida sem exigir treinamento de TI.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-brand-text-muted justify-center md:justify-start pt-2 border-b border-brand-border/60 pb-6">
            <span className="flex items-center gap-1">
              <UserCheck size={14} className="text-brand-green" /> Feito para profissionais independentes
            </span>
            <span className="hidden sm:inline text-brand-border">•</span>
            <span className="flex items-center gap-1">
              <Clock size={14} className="text-indigo-600" /> Leitura rápida: 5 min
            </span>
          </div>
        </motion.div>

        {/* Core Problem Narrative */}
        <div className="prose prose-slate max-w-none text-brand-text/80 space-y-6 md:space-y-8 text-sm md:text-base leading-relaxed font-semibold">
          <p className="text-lg font-bold text-brand-text leading-snug">
            Ser um <strong>dentista autônomo</strong> no Brasil significa acumular deveres: você divide seu tempo mudando de luvas entre tratamentos de periodontia ou ortodontia, respondendo agendamentos no Whatsapp, atualizando orçamentos e emitindo recibos. Por que, então, usar um software corporativo denso projetado para grandes franquias?
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-brand-text pt-4 border-l-4 border-brand-green pl-3">
            O desafio de atuar sem secretária ou sob sala alugada
          </h2>
          <p>
            Muitos sistemas tradicionais cobram mensalidades altíssimas cheias de relatórios empresariais tridimensionais de auditoria de funcionários. Se você trabalha sozinho, esse excesso visual atua como um sabotador. O que você de fato precisa é de um aplicativo ultra-leve de carregar no smartphone que permita:
          </p>

          {/* Key Pain Solvers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="p-6 bg-white rounded-2xl border border-brand-border premium-shadow space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-green-soft text-brand-green flex items-center justify-center">
                <Smartphone size={20} />
              </div>
              <h4 className="font-extrabold text-brand-text text-sm">Prontuário sob o Mocho</h4>
              <p className="text-xs text-brand-text-muted font-medium leading-relaxed">
                Tire fotos clínicas rápidas e monte a galeria cronológica do paciente sem misturar com sua galeria pessoal. Veja o histórico em 2 segundos enquanto o paciente enxágua a boca.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-brand-border premium-shadow space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF9F5] text-amber-600 flex items-center justify-center">
                <Activity size={20} />
              </div>
              <h4 className="font-extrabold text-brand-text text-sm">Confirmação Sem Interrupções</h4>
              <p className="text-xs text-brand-text-muted font-medium leading-relaxed">
                Pare de paralisar os atendimentos para digitar mensagens complexas. O sistema avisa o paciente e confirma o agendamento automaticamente, garantindo paz operacional.
              </p>
            </div>
          </div>

          <h2 className="text-xl md:text-2xl font-bold text-brand-text pt-4 border-l-4 border-indigo-500 pl-3">
            Clinical Clarity System: O segredo da simplicidade ativa
          </h2>
          <p>
            Criamos uma metodologia focada no essencial do trabalho autônomo. O OdontoHub não polui a tela com alertas desnecessários. Se o seu dinheiro entrou pelo Pix, se as confirmações estão em dia e se a sua terça-feira está agendada perfeitamente, o aplicativo se cala. Oferecemos o merecido descanso cognitivo que o profissional liberal tanto busca ao chegar em casa.
          </p>

          <blockquote className="border-l-4 border-brand-green bg-[#EAF4F0]/30 rounded-r-2xl p-5 my-6 italic text-brand-text font-medium leading-relaxed">
            "Eu gastava mais de uma hora por noite respondendo confirmações pelo Whatsapp. Com o OdontoHub, as respostas acontecem sozinhas enquanto faço as restaurações."<br />
            <span className="text-xs font-bold text-brand-text-muted not-italic block mt-1">— Relato de Cirurgião-Dentista (Clínica Geral, SP) • Revisado pela Equipe Editorial OdontoHub</span>
          </blockquote>

          <h2 className="text-xl md:text-2xl font-bold text-brand-text pt-4">
            Preço transparente, sem surpresas
          </h2>
          <p>
            Muitos sistemas começam com um preço simbólico e depois inserem tarifas extras por prontuário arquivado ou fotos anexadas. Nós acreditamos na ética comercial: taxas diretas, suporte ágil e um sistema que te ajuda a faturar mais cuidando da sua reputação com cada paciente atendido.
          </p>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 p-8 md:p-10 rounded-3xl bg-brand-green-dark text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20" />
          
          <div className="space-y-4 max-w-xl relative z-10 text-center md:text-left">
            <h3 className="text-2xl font-extrabold leading-tight font-sans">Retome as rédeas do seu tempo clínico</h3>
            <p className="text-xs md:text-sm text-brand-green-light font-medium leading-relaxed">
              Descubra por que somos o software mais recomendado por cirurgiões-dentistas solo no país. Cadastro 100% gratuito, sem cartão exigido na inscrição.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto relative z-10">
            <Link to="/" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full py-4 px-8 text-xs font-bold uppercase tracking-wider rounded-xl bg-white !text-brand-green-dark border-none hover:bg-white/95 shadow-lg">
                Começar Grátis
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
