import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  AlertTriangle,
  ClipboardCheck,
  Smartphone
} from 'lucide-react';
import { Button } from '../components/shared/UI';
import Breadcrumb from '../components/shared/Breadcrumb';

export default function ComoEvitarPacientesEsquecidosPage() {
  const currentDate = new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="min-h-screen bg-[#FAFCFB] pt-28 pb-16 px-4 md:px-6">
      <Helmet>
        <title>Como Evitar Pacientes Esquecidos no Consultório | OdontoHub</title>
        <meta name="description" content="Perdendo pacientes que ficam esperando coroa ou remoção de suturas? Descubra o método Clinical Clarity para nunca mais esquecer de contatar um paciente." />
        <meta name="keywords" content="pacientes esquecidos, lembrar retorno de implante, odontologia pacientes pendentes, agenda odontologica automatica, organizacao prontuario" />
        <link rel="canonical" href="https://www.odontohub.app.br/como-evitar-pacientes-esquecidos" />
        
        {/* Schema.org TechArticle structure for search indexing */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "O Fim do Esquecimento de Pacientes em Tratamento Odontológico",
            "description": "Análise de processos de rastreamento de entregas de laboratório e exames clínicos de controle pós-cirúrgico para cirurgiões-dentistas solo.",
            "datePublished": "2026-06-14T12:00:00Z",
            "author": {
              "@type": "Organization",
              "name": "OdontoHub Editorial",
              "url": "https://www.odontohub.app.br/"
            }
          })}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto" id="pacientes-esquecidos-page">
        <div className="flex justify-start mb-6">
          <Breadcrumb items={[
            { name: 'Início', url: '/' },
            { name: 'Pacientes Esquecidos' }
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
            <Sparkles size={14} className="text-brand-green" /> Segurança Clínica & Reputação
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-brand-text leading-tight md:leading-tight">
            Como evitar <span className="text-brand-green">Pacientes Esquecidos</span> na entrega de próteses ou pós-operatórios
          </h1>

          <p className="text-base md:text-lg text-brand-text-muted font-medium leading-relaxed max-w-3xl">
            A dor de esquecer de ligar para tirar pontos ou entregar um trabalho de prótese abala a satisfação e fidelização do paciente. Entenda o método Clinical Clarity System que extingue esse erro humano do consultório.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-brand-text-muted justify-center md:justify-start pt-2 border-b border-brand-border/60 pb-6">
            <span className="flex items-center gap-1">
              <ClipboardCheck size={14} className="text-brand-green" /> Tratamento 100% monitorado e seguro
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
            Toda boa clínica já passou por isso: o paciente faz um molde ou escaneamento odontológico para confecção de coroa ou coroa provisória, e a peça vai ao laboratório de prótese. O tempo passa, a rotina com atendimentos avança e ninguém lembra de avisar o paciente sobre o retorno da coroa. Semanas depois, ele entra em contato constrangido e decepcionado.
          </p>

          <div className="p-5 bg-red-50 rounded-2xl border border-red-200 flex items-start gap-3 my-6">
            <AlertTriangle className="text-red-600 shrink-0 mt-0.5" size={20} />
            <div className="text-xs font-semibold text-red-900 leading-relaxed">
              <strong>O perigo da anotação perdida:</strong> Escrever recados em post-its coloridos ou agendas de espiral expostas à névoa de refrigeração da alta rotação debaixo do mocho é pedir para conviver com a desorganização de dados. Os papéis rasgam, borram com água ou simplesmente desaparecem no lixo da biossegurança.
            </div>
          </div>

          <h2 className="text-xl md:text-2xl font-bold text-brand-text pt-4 border-l-4 border-brand-green pl-3">
            O Método "Atendimento Sem Gargalos"
          </h2>
          <p>
            Para erradicar de vez a procrastinação que deixa pacientes pendentes ou soltos "no limbo" clínico, siga estas três diretrizes de usabilidade:
          </p>

          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong>Crie um status ativo de "Em Tratamento":</strong> Prontuários não devem ser apenas gavetas estáticas. No OdontoHub, seu prontuário clínico exibe de forma evidente quais pacientes estão aguardando coroas laboratoriais ou resultados de exames de patologia.
            </li>
            <li>
              <strong>Acompanhe pós-operatórios com agilidade:</strong> Nunca espere o paciente reclamar de dor. A clareza operacional exige que após cirurgias complexas de periodontia ou implantes convencionais, o sistema notifique de forma assertiva a necessidade de remoção de suturas em 7 ou 10 dias.
            </li>
            <li>
              <strong>Integração com o Celular no Bolso:</strong> Você precisa conseguir marcar essas tarefas críticas direto no celular, sem precisar levantar-se da cadeira de atendimento clinico para usar o notebook principal da clínica.
            </li>
          </ul>

          <blockquote className="border-l-4 border-brand-green bg-[#EAF4F0]/30 rounded-r-2xl p-5 my-6 italic text-brand-text font-medium leading-relaxed">
            "Esquecer de avisar um paciente que a coroa chegou do laboratório arruinava nossa reputação. O OdontoHub unificou nossos agendamentos operacionais de próteses de forma tão infalível que restabelecemos a satisfação dos nossos clientes."<br />
            <span className="text-xs font-bold text-brand-text-muted not-italic block mt-1">— Relato de Cirurgião-Dentista (Reabilitação Oral, RJ) • Revisado pela Equipe Editorial OdontoHub</span>
          </blockquote>

          <h2 className="text-xl md:text-2xl font-bold text-brand-text pt-4 border-l-4 border-indigo-500 pl-3">
            O OdontoHub é o guardião silencioso da sua tranquilidade
          </h2>
          <p>
            O OdontoHub foi construído para que nada fique para trás enquanto você foca na caneta de alta rotação ou no isolamento absoluto. Através de sugestões ativas e interface de carregamento instantâneo, você visualiza em um só painel quem são os pacientes que necessitam de intervenção ou aviso imediato sem precisar folhear relatórios financeiros intermináveis.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-12 p-8 md:p-10 rounded-3xl bg-brand-green-dark text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20" />
          
          <div className="space-y-4 max-w-xl relative z-10 text-center md:text-left">
            <h3 className="text-2xl font-extrabold leading-tight">Retome a reputação de excelência clínica do seu consultório</h3>
            <p className="text-xs md:text-sm text-brand-green-light font-medium leading-relaxed">
              Diga adeus à culpa de perder o cronograma de pós-operatórios de tratamentos de periodontia. Experimente o OdontoHub grátis agora mesmo.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto relative z-10">
            <Link to="/" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full py-4 px-8 text-xs font-bold uppercase tracking-wider rounded-xl bg-white !text-brand-green-dark border-none hover:bg-white/95 shadow-lg">
                Provar Grátis
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
