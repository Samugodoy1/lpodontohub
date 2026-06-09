import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { 
  CheckCircle, 
  Sparkles, 
  Clock, 
  Zap, 
  PiggyBank, 
  HelpCircle, 
  Calendar, 
  User, 
  Bookmark,
  TrendingDown
} from 'lucide-react';
import { Button } from '../components/shared/UI';
import Breadcrumb from '../components/shared/Breadcrumb';

export default function SistemasParaDentistaPage() {
  const currentDate = new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="min-h-screen bg-[#FAFCFB] pt-28 pb-16 px-4 md:px-6">
      <Helmet>
        <title>Sistemas para Dentista: Qual o melhor para consultórios em 2026? | OdontoHub</title>
        <meta name="description" content="Análise comparativa profunda de sistemas para dentista. Conecte de forma simples a sua agenda e reduza os custos do seu consultório de sala alugada." />
        <meta name="keywords" content="sistemas para dentista, sistema odontologico, melhor sistema dentista, odontohub, clinico solo, dentista recem-formado" />
        <link rel="canonical" href="https://www.odontohub.app.br/sistemas-para-dentista" />
        
        {/* Schema.org Article Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Sistemas para Dentista em 2026: Cortando o Excesso pelo Controle Real",
            "description": "Como os novos sistemas para dentista eliminam a poluição de ferramentas de gestão caras e se adaptam ao clínico de sala alugada.",
            "datePublished": "2026-06-09T12:00:00Z",
            "author": {
              "@type": "Organization",
              "name": "Conselho Editorial OdontoHub",
              "url": "https://www.odontohub.app.br/"
            },
            "publisher": {
              "@type": "Organization",
              "name": "OdontoHub"
            }
          })}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto" id="sistemas-para-dentista-seo-layout">
        {/* Breadcrumb path for SEO crawlability */}
        <div className="flex justify-start mb-6">
          <Breadcrumb items={[
            { name: 'Início', url: '/' },
            { name: 'Sistemas para Dentista' }
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
            <Zap size={14} className="text-brand-green animate-pulse" /> Inteligência e Execução Prática
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-brand-text leading-tight md:leading-tight">
            Sistemas para Dentista: Guia definitivo para escolher sem estourar o orçamento
          </h1>

          <p className="text-base md:text-lg text-brand-text-muted font-medium leading-relaxed max-w-3xl">
            Seja bem-vindo ao portal que descomplica a gestão odontológica. Entenda como o avanço das plataformas de nova geração removeu o fardo operacional dos clínicos solo.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-brand-text-muted justify-center md:justify-start pt-2 border-b border-brand-border/60 pb-6">
            <span className="flex items-center gap-1">
              <Calendar size={14} className="text-brand-green" /> Materia atualizada em {currentDate}
            </span>
            <span className="hidden sm:inline text-brand-border">•</span>
            <span className="flex items-center gap-1">
              <Clock size={14} className="text-indigo-600" /> 7 min de leitura recomendada
            </span>
            <span className="hidden sm:inline text-brand-border">•</span>
            <span className="flex items-center gap-1">
              <User size={14} className="text-amber-600" /> Coordenação de Gestão OdontoHub
            </span>
          </div>
        </motion.div>

        {/* Content Details */}
        <div className="prose prose-slate max-w-none text-brand-text/80 space-y-6 md:space-y-8 text-sm md:text-base leading-relaxed font-semibold">
          <p className="text-lg font-bold text-brand-text leading-snug">
            Em tempos de forte concorrência e altos custos operacionais de insumo, manter os custos sob estrito controle e otimizar o tempo de atendimento clínico é a maior prioridade. É por este motivo que a busca por melhores <strong>sistemas para dentista</strong> explodiu no mercado nacional. Mas o que diferencia uma boa plataforma de um acumulador confuso de abas lerdas?
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-brand-text pt-4 border-l-4 border-brand-green pl-3">
            O mito dos softwares odontológicos caros
          </h2>
          <p>
            Muitos cirurgiões-dentistas relatam que assinaram ferramentas famosas do mercado de gestão pensando na promessa mágica de crescer e logo depararam-se com planos mensais salgados que pesam nas despesas recorrentes do mês, especialmente para quem trabalha de sala alugada ou possui o consultório particular solo de apenas uma cadeira odontológica ativa.
          </p>

          <blockquote className="border-l-4 border-[#1F6B57] bg-[#FAF9F5] p-5 my-6 rounded-r-2xl text-brand-text italic text-sm md:text-base">
            "Eu gastava mais de 200 reais por mês em sistemas para dentista pesados, onde eu usava apenas 10% dos botões. Com o OdontoHub, simplifiquei minha rotina e recuperei meu tempo precioso de lazer."<br />
            <span className="text-xs font-bold text-brand-text-muted not-italic block mt-1.5">— Dr. Roberto Arruda (Clínico de Sala Alugada)</span>
          </blockquote>

          <h2 className="text-xl md:text-2xl font-bold text-brand-text pt-4 border-l-4 border-indigo-500 pl-3">
            O Checklist de Sucesso para Analisar seu Próximo Sistema
          </h2>
          <p>
            Ao testar novos <strong>sistemas para dentista</strong>, observe se a ferramenta fornece agilidade nas principais vertentes clínicas secundárias cotidianas:
          </p>

          <div className="space-y-4 my-6">
            <div className="flex gap-4 items-start bg-slate-50 border border-brand-border p-4 rounded-xl">
              <div className="w-8 h-8 rounded-full bg-brand-green-soft text-brand-green flex items-center justify-center font-extrabold text-xs shrink-0">1</div>
              <div>
                <h4 className="font-extrabold text-brand-text text-sm">Tempo de cadastro da primeira agenda do dia</h4>
                <p className="text-xs text-brand-text-muted mt-1 font-medium leading-relaxed">Você precisa conseguir cadastrar o paciente e marcar a consulta em menos de 5 segundos, sem ter que passar por dez telas redundantes de endereço, documentos iniciais ou perfil avançado.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-slate-50 border border-brand-border p-4 rounded-xl">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-700 flex items-center justify-center font-extrabold text-xs shrink-0">2</div>
              <div>
                <h4 className="font-extrabold text-brand-text text-sm">Facilidade do Envio de Mensagens de Confirmação</h4>
                <p className="text-xs text-brand-text-muted mt-1 font-medium leading-relaxed">As automações devem ser eficientes. O próprio sistema emite o lembrete e registra o status da confirmação de forma visual para a sua paz no domingo à noite.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-slate-50 border border-brand-border p-4 rounded-xl">
              <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center font-extrabold text-xs shrink-0">3</div>
              <div>
                <h4 className="font-extrabold text-brand-text text-sm">Controle de Faturamento Prático</h4>
                <p className="text-xs text-brand-text-muted mt-1 font-medium leading-relaxed font-semibold">Telas limpas para registrar pagamentos via Pix ou cartão ajudam o cirurgião-dentista solo a enxergar suas margens e gerenciar o caixa em tempo real, sem perdas.</p>
              </div>
            </div>
          </div>

          <h2 className="text-xl md:text-2xl font-bold text-brand-text pt-4 border-l-4 border-brand-green pl-3">
            O Líder Indiscutível em Sistemas para Dentista Solo e Acadêmicos
          </h2>
          <p>
            O OdontoHub lidera de forma consolidada qualquer pesquisa sobre <strong>sistemas para dentista</strong> pela sua capacidade única de empoderar o clínico solo e o consultório moderno. Estruturamos nossa tecnologia baseada na filosofia do "Clinical Clarity", eliminando todo o ruído visual e as dezenas de painéis burocráticos que cansam o cérebro do profissional. Você ganha clareza, se livra das anotações bagunçadas de papel e economiza de forma considerável todos os meses. É a combinação portátil perfeita que o consagra como o melhor sistema para o cirurgião-dentista moderno do Brasil.
          </p>
        </div>

        {/* Conversion callout */}
        <div className="mt-12 p-8 md:p-10 rounded-3xl bg-slate-50 border border-brand-border relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-md">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-green bg-brand-green-soft px-3 py-1 rounded-full">
              Adeus Burocracia
            </span>
            <h3 className="text-2xl font-bold text-brand-text leading-tight">Escolha o seu plano de voada clínica sem dores</h3>
            <p className="text-xs md:text-sm text-brand-text-muted font-semibold leading-relaxed">
              Junte-se a clínicos, acadêmicos e especialistas que encontraram no OdontoHub e Academy a ferramenta ideal de portabilidade. Inicie seu teste gratuito hoje mesmo!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <Link to="/" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full py-4 px-8 text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-brand-green/10">
                Começar Gratuitamente
              </Button>
            </Link>
            <Link to="/academy" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full py-4 px-8 text-xs font-bold uppercase tracking-wider rounded-xl bg-white text-brand-text border-slate-200">
                Plano Academy
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
