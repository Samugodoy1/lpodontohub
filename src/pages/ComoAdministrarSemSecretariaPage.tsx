import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Clock, 
  Smartphone, 
  AlertCircle,
  HelpCircle,
  MessageSquare,
  ShieldAlert,
  ClipboardList,
  CalendarCheck
} from 'lucide-react';
import { Button } from '../components/shared/UI';
import Breadcrumb from '../components/shared/Breadcrumb';

export default function ComoAdministrarSemSecretariaPage() {
  const currentDate = new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="min-h-screen bg-[#FAFCFB] pt-28 pb-16 px-4 md:px-6">
      <Helmet>
        <title>Como Administrar uma Clínica sem Secretária com Sucesso | OdontoHub</title>
        <meta name="description" content="Atender no mocho e gerenciar consultório sem secretária é exaustivo. Aprenda dicas de automação odontológica para comandar a recepção pelo celular com o OdontoHub." />
        <meta name="keywords" content="consultorio sem secretaria, dentista solo organizacao, gerenciar consultorio sozinho, automacao de whatsapp odontologia, agenda digital para dentista" />
        <link rel="canonical" href="https://www.odontohub.app.br/como-administrar-clinica-sem-secretaria" />
        
        {/* Schema.org TechArticle structure for SEO crawlability */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "Gestão Clínica Eficiente para Dentistas que Escolhem Atuar sem Secretária",
            "description": "Estudo sobre como a delegação para ferramentas automatizadas de comunicação liberta o dentista para maior aproveitamento estético de procedimentos.",
            "datePublished": "2026-06-14T12:00:00Z",
            "author": {
              "@type": "Organization",
              "name": "OdontoHub Editorial",
              "url": "https://www.odontohub.app.br/"
            }
          })}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto" id="clinica-sem-secretaria-page">
        <div className="flex justify-start mb-6">
          <Breadcrumb items={[
            { name: 'Início', url: '/' },
            { name: 'Clínica sem Secretária' }
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
            <Sparkles size={14} className="text-brand-green" /> Liberdade de Operação e Custos
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-brand-text leading-tight md:leading-tight">
            Como administrar uma <span className="text-brand-green">Clínica sem Secretária</span> sem enlouquecer com o Whatsapp
          </h1>

          <p className="text-base md:text-lg text-brand-text-muted font-medium leading-relaxed max-w-3xl">
            Atender com as mãos ocupadas e o celular tocando no balcão é uma fonte constante de estresse. Descubra como configurar um fluxo inteligente de recepção digital que mantem sua agenda cheia e seu tempo livre.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-brand-text-muted justify-center md:justify-start pt-2 border-b border-brand-border/60 pb-6">
            <span className="flex items-center gap-1">
              <ShieldAlert size={14} className="text-brand-green" /> Redução de 90% da perda de agendamentos
            </span>
            <span className="hidden sm:inline text-brand-border">•</span>
            <span className="flex items-center gap-1">
              <Clock size={14} className="text-indigo-600" /> Leitura rápida: 6 min
            </span>
          </div>
        </motion.div>

        {/* Storytelling & Real Issues */}
        <div className="prose prose-slate max-w-none text-brand-text/80 space-y-6 md:space-y-8 text-sm md:text-base leading-relaxed font-semibold">
          <p className="text-lg font-bold text-brand-text leading-snug">
            Trabalhar sem secretária é uma escolha comum e inteligente de muitos cirurgiões-dentistas: reduz as despesas de folha de pagamento, elimina desentendimentos internos de recepção e permite manter um contato extremamente próximo e humanizado com seus pacientes. No entanto, o custo disso costuma ser a <strong>estafa de tempo</strong>.
          </p>

          <p>
            O grande caos ocorre quando você está realizando um procedimento delicado — como uma endodontia complexa ou colocação de lentes de contato dentárias — e seu Whatsapp ferve de mensagens pedindo orçamentos ou horários. Responder tarde significa perder o paciente para o concorrente que respondeu em minutos. Responder durante os atendimentos compromete a biossegurança e o foco técnico.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-brand-text pt-4 border-l-4 border-brand-green pl-3">
            O Método da "Secretária Virtual Silenciosa"
          </h2>
          <p>
            Para dominar a recepção sem contratar uma pessoa física integral logo no início, o cirurgião-dentista moderno necessita de um fluxo automatizado que execute três papéis primários:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="p-6 bg-white rounded-2xl border border-brand-border premium-shadow space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-green-soft text-brand-green flex items-center justify-center">
                <CalendarCheck size={20} />
              </div>
              <h4 className="font-extrabold text-[#1F2937] text-sm">Agendamento autônomo guiado</h4>
              <p className="text-xs text-brand-text-muted font-medium leading-relaxed">
                Envie um link personalizado onde o próprio paciente visualiza as suas vagas abertas de forma discreta e realiza a reserva, integrando diretamente com o seu calendário clínico do OdontoHub.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-brand-border premium-shadow space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF9F5] text-indigo-600 flex items-center justify-center">
                <MessageSquare size={20} />
              </div>
              <h4 className="font-extrabold text-[#1F2937] text-sm">Confirmações automáticas integradas</h4>
              <p className="text-xs text-brand-text-muted font-medium leading-relaxed">
                O sistema entra em contato na véspera com links de confirmação em 1 clique. Você sabe exatamente quem confirmou sem ter que gastar tempo digitando de noite ou no almoço.
              </p>
            </div>
          </div>

          <h2 className="text-xl md:text-2xl font-bold text-brand-text pt-4 border-l-4 border-indigo-500 pl-3">
            Vantagens do modelo Clinical Clarity System
          </h2>
          <p>
            Diferente de sistemas odontológicos genéricos que entulham o profissional com dezenas de gráficos e recursos burocráticos de faturamento corporativo, o OdontoHub foca rigorosamente na jornada solo.
          </p>
          <ul className="list-disc pl-5 space-y-3 text-sm font-semibold">
            <li><strong>Filtros rápidos e legíveis:</strong> Encontre históricos e prontuários digitais do paciente em menos de dois segundos diretamente no celular.</li>
            <li><strong>Galeria clínica restrita:</strong> Não polua a galeria do seu telefone com bocas ou exames de tomografia. O OdontoHub organiza tudo em pastas protegidas por prontuários individuais.</li>
            <li><strong>Design calmo e limpo:</strong> Seus olhos merecem paz. Nossas cores e espaçamentos foram balanceados para reduzir a tensão no final do dia de trabalho.</li>
          </ul>

          <blockquote className="border-l-4 border-brand-green bg-[#EAF4F0]/30 rounded-r-2xl p-5 my-6 italic text-brand-text font-medium leading-relaxed">
            "Eu hesitei muito em montar meu consultório sozinha com medo de não dar conta da recepção. O OdontoHub cuida das minhas confirmações e agendamentos de forma tão lisa que meus pacientes pensam que tenho uma secretária dedicada nos bastidores do WhatsApp."<br />
            <span className="text-xs font-bold text-brand-text-muted not-italic block mt-1">— Relato de Cirurgião-Dentista (Ortodontia, PR) • Revisado pela Equipe Editorial OdontoHub</span>
          </blockquote>

          <h2 className="text-xl md:text-2xl font-bold text-brand-text pt-4">
            Recupere o controle da sua rotina clínica amanhã
          </h2>
          <p>
            Você não precisa se sobrecarregar com secretárias caras ou lutar diariamente com a bagunça do celular. Experimente o maior salto de produtividade e paz operacional que a tecnologia pode oferecer para cirurgiões-dentistas solo.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-12 p-8 md:p-10 rounded-3xl bg-brand-green-dark text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20" />
          
          <div className="space-y-4 max-w-xl relative z-10 text-center md:text-left">
            <h3 className="text-2xl font-extrabold leading-tight">Experimente a paz de um consultório automatizado</h3>
            <p className="text-xs md:text-sm text-brand-green-light font-medium leading-relaxed">
              Descubra hoje mesmo o sistema que entende o silêncio e zela pelo seu tempo clínico sob o mocho. Inicialmente gratuito de experimentar.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto relative z-10">
            <Link to="/" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full py-4 px-8 text-xs font-bold uppercase tracking-wider rounded-xl bg-white !text-brand-green-dark border-none hover:bg-white/95 shadow-lg">
                Começar Teste Grátis
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
