import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Clock, 
  Calendar, 
  TrendingUp,
  MessageSquare,
  AlertTriangle,
  Heart,
  CheckCircle2
} from 'lucide-react';
import { Button } from '../components/shared/UI';
import Breadcrumb from '../components/shared/Breadcrumb';

export default function ComoOrganizarRetornosPage() {
  const currentDate = new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="min-h-screen bg-apple-surface pt-24 pb-20 px-5">
      <Helmet>
        <title>Como Organizar Retornos de Pacientes de Forma Automática | OdontoHub</title>
        <meta name="description" content="Perdendo pacientes que terminam o tratamento e não voltam? Aprenda a estruturar uma rotina de retornos odontológicos automáticos de 6 meses sem chatice." />
        <meta name="keywords" content="retornos de pacientes, recapturar paciente, retorno odontologico, pós-tratamento odontologia, organizar agenda dentista" />
        <link rel="canonical" href="https://www.odontohub.app.br/como-organizar-retornos-de-pacientes" />
        
        {/* Schema.org FAQ markup for great SEO integration */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Por que os pacientes esquecem de retornar ao dentista após 6 meses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pacientes saudáveis tendem ou esquecer da assistência profilática por não apresentarem sintomas físicos de dor. Por isso, cabe ao sistema disparar lembretes discretos na data adequada."
                }
              },
              {
                "@type": "Question",
                "name": "Qual o impacto financeiro de estruturar uma rotina de retornos regulares?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Estudos mostram que preencher a agenda com pacitentes recorrentes de profilaxia e raspagem custa 5x menos do que investir em tráfego pago constante para atrair novos clientes."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto" id="organizar-retornos-page">
        <div className="flex justify-start mb-6">
          <Breadcrumb items={[
            { name: 'Início', url: '/' },
            { name: 'Retornos de Pacientes' }
          ]} />
        </div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left space-y-6 mb-12"
        >
          <div className="text-[12px] text-apple-gray">
            <Sparkles size={14} className="text-brand-green" /> Estratégia de Faturamento Clínico
          </div>

          <h1 className="text-[40px] md:text-[48px] font-semibold tracking-tight text-apple-ink leading-[1.08]">
            Como organizar <span className="text-brand-green">Retornos de Pacientes</span> no consultório sem parecer chato ou inconveniente
          </h1>

          <p className="text-base md:text-lg text-brand-text-muted font-medium leading-relaxed max-w-3xl">
            O fim do tratamento não é o fim da relação. Aprenda a estruturar um funil de recall odontológico que preenche as suas terças-feiras ociosas com profilaxias recorrentes de forma ética e profissional.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-brand-text-muted justify-center md:justify-start pt-2 border-b border-brand-border/60 pb-6">
            <span className="flex items-center gap-1">
              <TrendingUp size={14} className="text-brand-green" /> Crescimento de recorrência em até 40%
            </span>
            <span className="hidden sm:inline text-brand-border">•</span>
            <span className="flex items-center gap-1">
              <Clock size={14} className="text-indigo-600" /> Leitura rápida: 6 min
            </span>
          </div>
        </motion.div>

        {/* Narrative & Practical Steps */}
        <div className="apple-prose max-w-none space-y-6">
          <p className="text-lg font-bold text-brand-text leading-snug">
            Um dos maiores vazamentos de caixa em pequenos consultórios particulares é a <strong>perda de retornos de pacientes</strong>. O paciente realiza uma restauração estética excelente ou uma cirurgia delicada, paga o tratamento, recebe alta clínica e vai embora. Se você não possui um sistema ativo de lembretes, ele simplesmente se esquecerá de voltar dali a seis meses.
          </p>

          <div className="p-5 bg-amber-50 rounded-2xl border border-amber-200 flex items-start gap-3 my-6">
            <AlertTriangle className="text-amber-600 shrink-0 mt-0.5" size={20} />
            <div className="text-xs font-semibold text-amber-900 leading-relaxed">
              <strong>O perigo do paciente "curado":</strong> Diferente de outras profissões, na odontologia a ausência de dor costuma desmotivar a visita de controle. Se o dentista não liga, o paciente deduz que tudo está perfeito — até que uma lesão de cárie mais séria ou perda óssea periodontal imperceptível se instale por falta de raspagem regular.
            </div>
          </div>

          <h2 className="text-[24px] md:text-[28px] font-semibold tracking-tight text-apple-ink pt-4">
            Passo a Passo: Como criar um funil de retornos ativo
          </h2>
          <p>
            Para garantir que sua agenda de retornos funcione sem que você precise telefonar manualmente ou ser inconveniente nas mensagens do Whatsapp, adote três pilares estratégicos:
          </p>

          <ol className="list-decimal pl-5 space-y-4 text-sm font-semibold">
            <li>
              <strong>Registro na alta clínica:</strong> No exato instante em que você assinar a finalização das evoluções de prontuário, a data limite do próximo retorno profilático de higienização ou conferência de implante deve ser agendada ou parametrizada no sistema.
            </li>
            <li>
              <strong>Disparo com propósito preventivo:</strong> Ao contatar o cliente seis meses após a alta, a mensagem não deve expor fins comerciais agressivos. Foque no cuidado com a saúde: lembre sobre a prevenção de perdas dentárias e manutenção da integridade das próteses.
            </li>
            <li>
              <strong>Crie lembretes transparentes e automáticos:</strong> Automatize esse monitoramento para que a própria ferramenta acompanhe quais pacientes completaram seis meses desde a última higienização e envie links de confirmação discretos.
            </li>
          </ol>

          {/* Bento Features Visual Representation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="p-6 bg-white rounded-[28px] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-apple-surface text-apple-ink flex items-center justify-center">
                <MessageSquare size={20} />
              </div>
              <h4 className="font-semibold text-apple-ink text-[17px]">Mensagens Personalizadas Preventivas</h4>
              <p className="text-xs text-brand-text-muted font-medium leading-relaxed">
                Configure modelos humanizados de mensagens preventivas no Whatsapp. Sem jargões chatos ou propostas agressivas, apenas zelo profissional de saúde.
              </p>
            </div>

            <div className="p-6 bg-white rounded-[28px] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF9F5] text-indigo-600 flex items-center justify-center">
                <Heart size={20} />
              </div>
              <h4 className="font-semibold text-apple-ink text-[17px]">Linha do Tempo Preventiva</h4>
              <p className="text-xs text-brand-text-muted font-medium leading-relaxed">
                Prontuário OdontoHub integrado à saúde do paciente. Nosso sistema sabe organizar listas dinâmicas de retornos baseadas no tratamento anterior e status do paciente.
              </p>
            </div>
          </div>

          <blockquote className="my-8 text-[24px] font-semibold tracking-tight leading-snug text-apple-ink">
            "O OdontoHub facilitou imensamente a identificação de pacientes inativos. Conseguimos estruturar um fluxo de retornos mais constante no trimestre usando lembretes do aplicativo, auxiliando a organizar faturamento e preencher horários livres."<br />
            <span className="text-xs font-bold text-brand-text-muted not-italic block mt-1">— Relato de Cirurgião-Dentista (Periodontia, MG) • Revisado pela Equipe Editorial OdontoHub</span>
          </blockquote>

          <h2 className="text-xl md:text-2xl font-bold text-brand-text pt-4">
            Como o OdontoHub automatiza esse processo?
          </h2>
          <p>
            Esqueça as planilhas manuais ou canetas marca-texto em agendas físicas de papel. O OdontoHub identifica proativamente os tratamentos finalizados e sugere os encaixes de novos retornos de forma inteligente. Ao se livrar desse monitoramento burocrático, você ganha paciência e precisão para focar na melhor entrega de procedimentos estéticos e preventivos debaixo do mocho.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-12 p-8 md:p-10 rounded-[28px] bg-black text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20" />
          
          <div className="space-y-4 max-w-xl relative z-10 text-center md:text-left">
            <h3 className="text-[24px] font-semibold tracking-tight">Elimine a agenda vazia nas terças-feiras</h3>
            <p className="text-[15px] text-white/60 leading-relaxed">
              Descubra o poder de manter os seus pacientes antigos conectados ativamente com o seu consultório de forma automatizada e ética.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto relative z-10">
            <Link to="/" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full py-4 px-8  bg-white !text-brand-green-dark border-none hover:bg-white/95 shadow-lg">
                Provar Gratuitamente
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
