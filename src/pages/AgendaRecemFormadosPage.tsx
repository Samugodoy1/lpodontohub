import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Clock, 
  UserPlus, 
  HeartHandshake, 
  FileText,
  BadgePercent,
  ShieldCheck,
  CheckCircle,
  GraduationCap
} from 'lucide-react';
import { Button } from '../components/shared/UI';
import Breadcrumb from '../components/shared/Breadcrumb';

export default function AgendaRecemFormadosPage() {
  const currentDate = new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="min-h-screen bg-[#FAFCFB] pt-28 pb-16 px-4 md:px-6">
      <Helmet>
        <title>Agenda e Sistema Odontológico para Recém-Formados | OdontoHub</title>
        <meta name="description" content="Acabou de se formar em Odontologia e vai alugar salas? O OdontoHub oferece a melhor agenda digital com custo acessível e Preceptor Digital integrado." />
        <meta name="keywords" content="recem formado odontologia, agenda para jovem dentista, software odontologico barato, aluguel de consultorio odontologia, preceptor digital" />
        <link rel="canonical" href="https://www.odontohub.app.br/agenda-odontologica-recem-formados" />
        
        {/* Schema.org TechArticle structure for search indexing */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "A Transição da Universidade para o Mercado Odontológico Privado",
            "description": "Como ferramentas leves e suporte técnico clínico aceleram a inserção de recém-formados cirurgiões-dentistas no mercado solo.",
            "datePublished": "2026-06-14T12:00:00Z",
            "author": {
              "@type": "Organization",
              "name": "OdontoHub Editorial",
              "url": "https://www.odontohub.app.br/"
            }
          })}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto" id="agenda-recem-formados-page">
        <div className="flex justify-start mb-6">
          <Breadcrumb items={[
            { name: 'Início', url: '/' },
            { name: 'Recém-Formados' }
          ]} />
        </div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left space-y-6 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-academy-soft text-brand-academy rounded-full text-xs font-bold uppercase tracking-wider">
            <GraduationCap size={14} className="text-brand-academy" /> Apoio ao Jovem Cirurgião-Dentista
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-brand-text leading-tight md:leading-tight">
            A <span className="text-brand-green">Agenda Odontológica</span> pensada para a insegurança financeira do recém-formado
          </h1>

          <p className="text-base md:text-lg text-brand-text-muted font-medium leading-relaxed max-w-3xl">
            Sair da graduação para cobrir os enormes custos de aluguel de mochos clínicos por hora exige uma organização impecável. Descubra um sistema transparente que cresce junto com a sua clientela.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-brand-text-muted justify-center md:justify-start pt-2 border-b border-brand-border/60 pb-6">
            <span className="flex items-center gap-1">
              <BadgePercent size={14} className="text-brand-academy" /> Condições facilitadas de início de carreira
            </span>
            <span className="hidden sm:inline text-brand-border">•</span>
            <span className="flex items-center gap-1">
              <Clock size={14} className="text-indigo-600" /> Leitura rápida: 5 min
            </span>
          </div>
        </motion.div>

        {/* Narrative & Practical Guide */}
        <div className="prose prose-slate max-w-none text-brand-text/80 space-y-6 md:space-y-8 text-sm md:text-base leading-relaxed font-semibold">
          <p className="text-lg font-bold text-brand-text leading-snug">
            Passar no exame do CRO definitivo é uma conquista incrível, mas no dia seguinte começa a realidade da odontologia privada. Sem recursos para erguer uma clínica própria luxuosa, mais de 80% dos <strong>recém-formados em odontologia</strong> iniciam sublocando salas ou atendendo sob comissão em várias clínicas particulares. É aqui que moram os desafios de organização.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-brand-text pt-4 border-l-4 border-brand-academy pl-3">
            O problema dos softwares pesados e caros
          </h2>
          <p>
            Grandes corporações de software odontológico cobram mensalidades salgadas logo na largada e forçam planos anuais inflexíveis que asfixiam o caixa tímido de quem está atendendo seus primeiros pacientes. Você não precisa (e nem deve) arcar com esses custos fixos desnecessários nos primeiros meses.
          </p>
          <p>
            O OdontoHub reescreve essa dinâmica ao fornecer uma plataforma que roda impecavelmente em celulares de qualquer especificação, ideal para quem passa o dia trocando de transporte público entre consultórios alugados.
          </p>

          {/* Key Recem Formados Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="p-6 bg-white rounded-2xl border border-brand-border premium-shadow space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-academy-soft text-brand-academy flex items-center justify-center">
                <GraduationCap size={20} />
              </div>
              <h4 className="font-extrabold text-[#1F2937] text-sm font-sans">Preceptor Digital de Bolso</h4>
              <p className="text-xs text-brand-text-muted font-medium leading-relaxed">
                Ainda bate aquela dúvida sobre o sequenciamento clínico de ataque ácido, biossegurança ou instrumentais cirúrgicos de periodontia? O Preceptor Digital do OdontoHub resgata resumos rápidos de 3 minutos para você consultar debaixo do mocho com autoconfiança.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-brand-border premium-shadow space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF9F5] text-amber-600 flex items-center justify-center">
                <BadgePercent size={20} />
              </div>
              <h4 className="font-extrabold text-[#1F2937] text-sm font-sans">Sem Fidelidade ou Multa Recorrente</h4>
              <p className="text-xs text-brand-text-muted font-medium leading-relaxed">
                Temos planos ideais de entrada que respeitam oscilações iniciais de fluxo de pacientes. Cancele ou altere sua assinatura quando quiser, com suporte real e ético sem burocracia comercial.
              </p>
            </div>
          </div>

          <blockquote className="border-l-4 border-brand-academy bg-[#F3E8FF]/20 rounded-r-2xl p-5 my-6 italic text-brand-text font-medium leading-relaxed">
            "Sair da universidade e encarar a gestão clínica particular assustava muito mais do que os dentes em si. O OdontoHub unificou meus primeiros prontuários clínicos e confirmou minhas despesas pelo celular sem esvaziar minha carteira."<br />
            <span className="text-xs font-bold text-brand-text-muted not-italic block mt-1">— Relato de Cirurgião-Dentista (Clínico Geral, PE) • Revisado pela Equipe Editorial OdontoHub</span>
          </blockquote>

          <h2 className="text-xl md:text-2xl font-bold text-brand-text pt-4 border-l-4 border-brand-green pl-3">
            Comece do jeito certo: construindo seu legado profissional
          </h2>
          <p>
            Os primeiros pacientes ditarão a velocidade do seu crescimento por indicação boca-a-boca. Tratá-los com uma recepção digital rápida, fotos clínicas cronológicas e confirmações automáticas elegantes transmite extrema seriedade e maturidade profissional, mesmo que você tenha se formado há poucas semanas.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-12 p-8 md:p-10 rounded-3xl bg-brand-green-dark text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20" />
          
          <div className="space-y-4 max-w-xl relative z-10 text-center md:text-left">
            <h3 className="text-2xl font-extrabold leading-tight">O maior empurrão para o início da sua jornada clínica</h3>
            <p className="text-xs md:text-sm text-brand-green-light font-medium leading-relaxed">
              Diga adeus ao medo do descontrole clínico e financeiro. Cadastre-se em 1 minuto de forma totalmente gratuita e teste o melhor sistema para recém-formados.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto relative z-10">
            <Link to="/" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full py-4 px-8 text-xs font-bold uppercase tracking-wider rounded-xl bg-white !text-brand-green-dark border-none hover:bg-white/95 shadow-lg">
                Ativar Meu Teste Grátis
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
