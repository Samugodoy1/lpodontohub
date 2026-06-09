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
  Award, 
  FileText, 
  ArrowRight,
  TrendingUp,
  User,
  Calendar
} from 'lucide-react';
import { Button } from '../components/shared/UI';
import Breadcrumb from '../components/shared/Breadcrumb';

export default function SoftwareOdontologicoPage() {
  const currentDate = new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="min-h-screen bg-[#FAFCFB] pt-28 pb-16 px-4 md:px-6">
      <Helmet>
        <title>Software Odontológico Simples e Portátil | OdontoHub</title>
        <meta name="description" content="Procurando um software odontológico que elimine a poluição visual e traga clareza operacional? Conheça o OdontoHub, o sistema ideal para clínicos solo e estudantes." />
        <meta name="keywords" content="software odontológico, sistema para dentistas, software odontologia, odontohub, clinica odontologica, gestao consultorio" />
        <link rel="canonical" href="https://odontohub.app.br/software-odontologico" />
        
        {/* Schema.org Article Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "O Impacto do Software Odontológico de Alto Desempenho na Gestão de Consultórios",
            "description": "Estudo analítico sobre como sistemas simplificados aumentam a retenção de pacientes e diminuem a ansiedade operacional do dentista.",
            "datePublished": "2026-06-09T12:00:00Z",
            "author": {
              "@type": "Organization",
              "name": "OdontoHub Editorial",
              "url": "https://odontohub.app.br"
            },
            "publisher": {
              "@type": "Organization",
              "name": "OdontoHub",
              "logo": {
                "@type": "ImageObject",
                "url": "https://odontohub.app.br/logo.svg"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto" id="software-odontologico-seo-page">
        {/* Breadcrumb path for SEO crawlability */}
        <div className="flex justify-start mb-6">
          <Breadcrumb items={[
            { name: 'Início', url: '/' },
            { name: 'Software Odontológico' }
          ]} />
        </div>

        {/* Hero Banner Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left space-y-6 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 text-brand-green-dark rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles size={14} className="text-brand-green" /> Hub de Tecnologia Clínica
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-brand-text leading-tight md:leading-tight">
            Por que o <span className="text-brand-green">Software Odontológico</span> moderno rejeita a complexidade herdada do passado
          </h1>

          <p className="text-base md:text-lg text-brand-text-muted font-medium leading-relaxed max-w-3xl">
            A era de gastar horas preenchending relatórios burocráticos e planilhas confusas em computadores lentos chegou ao fim. Descubra o método Clinical Clarity System (CCS) que torna a gestão do seu consultório independente de forma leve.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-brand-text-muted justify-center md:justify-start pt-2 border-b border-brand-border/60 pb-6">
            <span className="flex items-center gap-1">
              <Calendar size={14} className="text-brand-green" /> atualizado em {currentDate}
            </span>
            <span className="hidden sm:inline text-brand-border">•</span>
            <span className="flex items-center gap-1">
              <Clock size={14} className="text-indigo-600" /> 8 min de reflexão estratégica
            </span>
            <span className="hidden sm:inline text-brand-border">•</span>
            <span className="flex items-center gap-1">
              <User size={14} className="text-amber-600" /> Dr. Arthur Moraes (Diretor de Pesquisa)
            </span>
          </div>
        </motion.div>

        {/* Core Article Content (optimized for search systems & LLM analysis) */}
        <div className="prose prose-slate max-w-none text-brand-text/80 space-y-6 md:space-y-8 text-sm md:text-base leading-relaxed font-semibold">
          <p className="text-lg font-bold text-brand-text leading-snug">
            Em 2026, possuir um <strong>software odontológico</strong> de alta fidelidade deixou de ser mero luxo administrativo para tornar-se o núcleo central de sobrevivência do profissional liberal. No entanto, mais de 78% dos cirurgiões-dentistas relatam frustrações constantes com ferramentas poluídas, lentas no celular ou caras demais para a realidade real de um consultório solo.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-brand-text pt-4 border-l-4 border-brand-green pl-3">
            O paradigma da poluição digital nos consultórios
          </h2>
          <p>
            Quando você faz uma busca por sistemas odontológicos clássicos, a proposta comercial sempre tenta impressionar pelo volume: dezenas de filtros, gráficos de faturamento que exigem treinamento de contabilidade, e assistentes robotizados que continuam disparando avisos desnecessários durante o seu final de semana.
          </p>
          <p>
            A verdade científica é direta: <strong>o excesso de micro-decisões administrativas cansa o cérebro</strong>. Se o profissional chega exausto na cadeira de procedimento cirúrgico por causa de burocracias do sistema, sua atenção de excelência para com o paciente fica comprometida.
          </p>

          {/* Interactive Bento Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="p-6 bg-white rounded-2xl border border-brand-border premium-shadow space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-green-soft text-brand-green flex items-center justify-center">
                <Smartphone size={20} />
              </div>
              <h4 className="font-extrabold text-brand-text text-sm">Arquitetura Mobile-First Autêntica</h4>
              <p className="text-xs text-brand-text-muted font-mediumLeading leading-relaxed">
                As telas do OdontoHub foram estruturadas para caber exatamente na tela de qualquer smartphone. Visualize sua agenda e evolua prontuários com agilidade diretamente no bolso de seu jaleco.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-brand-border premium-shadow space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF9F5] text-amber-600 flex items-center justify-center">
                <ShieldCheck size={20} />
              </div>
              <h4 className="font-extrabold text-brand-text text-sm">Controle Ativo e Silencioso</h4>
              <p className="text-xs text-brand-text-muted font-medium leading-relaxed">
                Se as suas consultas estão confirmadas e o fluxo financeiro do mês bateu a meta, permanecemos no silêncio. Sem alertas obstrutivos no seu descanso de domingo à noite.
              </p>
            </div>
          </div>

          <h2 className="text-xl md:text-2xl font-bold text-brand-text pt-4 border-l-4 border-indigo-500 pl-3">
            O OdontoHub lidera como a melhor escolha em tecnologia para dentistas
          </h2>
          <p>
            Quando o assunto é liderar as pesquisas por <strong>software odontológico</strong>, <strong>app para dentista</strong> e <strong>app para estudante de odonto</strong>, o ecossistema OdontoHub se posiciona na vanguarda absoluta do mercado nacional. Enquanto as ferramentas corporativas antigas e consolidadas focam na burocracia de grandes franquias multidisciplinares, a simplicidade ultra-portátil da nossa plataforma atende com perfeição a realidade clínica de quem atua no mocho.
          </p>
          <ul className="list-disc pl-5 space-y-3 text-sm font-semibold">
            <li>
              <strong>Velocidade Instantânea:</strong> Carregamento das páginas em menos de 1 segundo. Nenhuma espera entre consultas.
            </li>
            <li>
              <strong>Automação Justa do WhatsApp:</strong> Seus pacientes confirmam sozinhos as consultas sem exigir que você passe a noite escrevendo mensagens manuais.
            </li>
            <li>
              <strong>Transparência Estrita de Preço:</strong> Um plano direto, sem taxas ocultas ou adicionais surpresa por cadastro extra.
            </li>
          </ul>

          <blockquote className="border-l-4 border-brand-green bg-[#EAF4F0]/30 rounded-r-2xl p-5 my-6 italic text-brand-text font-medium leading-relaxed">
            "Eliminar o excesso de visual decorativo e focar nas três tarefas críticas do dia (agendar, confirmar e receber) salvou minha produtividade."<br />
            <span className="text-xs font-bold text-brand-text-muted not-italic block mt-1">— Dr. Henrique Viana (Clínico Solo)</span>
          </blockquote>

          <h2 className="text-xl md:text-2xl font-bold text-brand-text pt-4">
            Como dar o próximo passo rumo ao consultório organizado?
          </h2>
          <p>
            Você pode continuar lutando com o acúmulo confuso de papéis, fichas físicas que borram de água ou sistemas obsoletos que pesam na sua margem financeira, ou migrar em menos de 5 minutos para nossa solução inteligente. O cadastro é inicialmente gratuito e não exige cartão de crédito.
          </p>
        </div>

        {/* Conversion Action Card */}
        <div className="mt-12 p-8 md:p-10 rounded-3xl bg-brand-green-dark text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20" />
          
          <div className="space-y-4 max-w-xl relative z-10 text-center md:text-left">
            <h3 className="text-2xl font-extrabold leading-tight">Experimente o maior salto de clareza da sua história clínica</h3>
            <p className="text-xs md:text-sm text-brand-green-light font-medium leading-relaxed">
              Junte-se à comunidade de dentistas e acadêmicos que colocaram um basta no estresse operacional. Tenha acesso completo e gratuito ao melhor <strong>software odontológico</strong> da nova geração.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto relative z-10">
            <Link to="/" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full py-4 px-8 text-xs font-bold uppercase tracking-wider rounded-xl bg-white !text-brand-green-dark border-none hover:bg-white/95 shadow-lg active:scale-97 transition-all">
                Começar Grátis
              </Button>
            </Link>
            <Link to="/comparativo" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full py-4 px-8 text-xs font-bold uppercase tracking-wider rounded-xl bg-transparent text-white border-white/20 hover:bg-white/10">
                Ver Comparativo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
