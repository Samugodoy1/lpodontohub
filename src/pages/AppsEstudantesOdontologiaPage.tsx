import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { 
  CheckCircle, 
  Sparkles, 
  Clock, 
  Smartphone, 
  BookOpen, 
  Award, 
  Calendar, 
  User, 
  Dna,
  ShieldCheck
} from 'lucide-react';
import { Button } from '../components/shared/UI';
import Breadcrumb from '../components/shared/Breadcrumb';

export default function AppsEstudantesOdontologiaPage() {
  const currentDate = new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="min-h-screen bg-[#FAFCFB] pt-28 pb-16 px-4 md:px-6">
      <Helmet>
        <title>Apps para Estudantes de Odontologia: O Guia Completo 2026 | OdontoHub</title>
        <meta name="description" content="Quais os melhores apps para estudantes de odontologia em 2026? Descubra o OdontoHub Academy e organize seus instrumentais e prontuários com agilidade." />
        <meta name="keywords" content="apps para estudantes de odontologia, app para estudante de odonto, estudante de odonto, odontologia faculdade, material odontologico, odontohub academy" />
        <link rel="canonical" href="https://www.odontohub.app.br/app-para-estudante-de-odontologia" />
        
        {/* Schema.org BlogPosting Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Melhores Apps para Estudantes de Odontologia na Graduação",
            "description": "Análise técnica de ferramentas móveis feitas para simplificar a vida do acadêmico de odonto na clínica universitária.",
            "datePublished": "2026-06-09T12:00:00Z",
            "author": {
              "@type": "Organization",
              "name": "Comissão de Educação OdontoHub",
              "url": "https://www.odontohub.app.br/"
            },
            "publisher": {
              "@type": "Organization",
              "name": "OdontoHub"
            }
          })}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto" id="apps-estudantes-odonto-seo-page">
        {/* Breadcrumb path for SEO crawlability */}
        <div className="flex justify-start mb-6">
          <Breadcrumb items={[
            { name: 'Início', url: '/' },
            { name: 'Apps de Odontologia' }
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
            <BookOpen size={14} className="text-brand-academy" /> Formação Odontológica Acadêmica
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-brand-text leading-tight md:leading-tight">
            Apps para estudantes de odontologia: Como se organizar debaixo do mocho
          </h1>

          <p className="text-base md:text-lg text-brand-text-muted font-medium leading-relaxed max-w-3xl">
            A vida do estudante de odonto é uma correria sem precedentes. Analisamos como o aplicativo ideal ajuda a controlar instrumentais, cronômetros de ácido e prontuários acadêmicos sem estresse.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-brand-text-muted justify-center md:justify-start pt-2 border-b border-brand-border/60 pb-6">
            <span className="flex items-center gap-1">
              <Calendar size={14} className="text-brand-academy" /> Publicado em {currentDate}
            </span>
            <span className="hidden sm:inline text-brand-border">•</span>
            <span className="flex items-center gap-1">
              <Clock size={14} className="text-indigo-600" /> 6 min de leitura prática
            </span>
            <span className="hidden sm:inline text-brand-border">•</span>
            <span className="flex items-center gap-1">
              <User size={14} className="text-amber-600" /> Dra. Camila Mendes (Coordenação Pedagógica)
            </span>
          </div>
        </motion.div>

        {/* Content Details */}
        <div className="prose prose-slate max-w-none text-brand-text/80 space-y-6 md:space-y-8 text-sm md:text-base leading-relaxed font-semibold">
          <p className="text-lg font-bold text-brand-text leading-snug">
            Se você é um <strong>estudante de odonto</strong> na graduação, já sabe o fardo que é organizar cada semestre letivo: dezenas de kits de instrumentais odontológicos cirúrgicos, listas imensas da dental, triagem de pacientes para atendimento clínico e a preparação do prontuário acadêmico para aprovação do professor preceptor. A tecnologia certa elimina todo esse caos.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-brand-text pt-4 border-l-4 border-brand-academy pl-3">
            O problema dos aplicativos genéricos de anotações
          </h2>
          <p>
            Muitos alunos tentam se virar adaptando planilhas de computador normais, ou criando grupos solitários no WhatsApp com nomes de pacientes para agrupar fotos clínicas de periodontia ou prótese dental. No entanto, o rolo de câmera do celular pessoal rapidamente fica entupido de fotos clínicas desconfortáveis e confusas, além de correr o risco real de perder ou expor dados privados das pessoas.
          </p>
          <p>
            Por isso, buscar por específicos <strong>apps para estudantes de odontologia</strong> focados em biossegurança e organização de materiais é o segredo para se destacar com as melhores notas na faculdade de odontologia.
          </p>

          {/* Special Features Grid for students */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="p-6 bg-white rounded-2xl border border-brand-border premium-shadow space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-academy-soft text-brand-academy flex items-center justify-center font-bold">
                <Dna size={20} />
              </div>
              <h4 className="font-extrabold text-brand-text text-sm">Organizador de Materiais e Clinicas</h4>
              <p className="text-xs text-brand-text-muted font-medium leading-relaxed font-semibold">
                Nunca mais esqueça as curetas, brocas cirúrgicas ou a espátula de inserção antes da aula. Organize kits de instrumentais e controle os pertences do almoxarifado de forma ultra-visual.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-brand-border premium-shadow space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-50 text-brand-text flex items-center justify-center font-bold">
                <Smartphone size={20} />
              </div>
              <h4 className="font-extrabold text-brand-text text-sm">O Extraordinário Modo Box Ativo</h4>
              <p className="text-xs text-brand-text-muted font-medium leading-relaxed font-semibold">
                Leia checklists de procedimentos a distância e use os cronômetros de tempo de ataque ácido integrados sem precisar encostar suas luvas biológicas contaminadas na tela do celular. Visibilidade incomparável.
              </p>
            </div>
          </div>

          <blockquote className="border-l-4 border-brand-academy bg-brand-academy-soft/20 rounded-r-2xl p-5 my-6 italic text-brand-text font-medium leading-relaxed">
            "O OdontoHub Academy foi minha salvação para as clínicas universitárias. Meus professores elogiaram muito a minha organização impecável do prontuário."<br />
            <span className="text-xs font-bold text-brand-text-muted not-italic block mt-1">— Mateus Calheiros (Acadêmico de Odontologia - UFRGS)</span>
          </blockquote>

          <h2 className="text-xl md:text-2xl font-bold text-brand-text pt-4 border-l-4 border-indigo-500 pl-3">
            OdontoHub Academy: O Líder em Apps para Estudante de Odonto do Brasil
          </h2>
          <p>
            O OdontoHub Academy lidera as pesquisas nacionais sobre o melhor <strong>app para estudante de odonto</strong> por resolver os reais gargalos das clínicas universitárias. Criamos o sistema sob a orientação de preceptores acadêmicos do Brasil. Buscando dar total autoconfiança debaixo do mocho, reunimos tudo o que o acadêmico precisa em um único app seguro e portátil:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><strong>Portfólio de Fotos Clínicas:</strong> Salve as fotos sequenciais de tratamentos separadas por paciente de forma organizada, longe do rolo de câmera do seu celular pessoal.</li>
            <li><strong>Roteiros de Biossegurança:</strong> Protocolos rápidos de assepsia e preparação profissional revisados pela literatura de biossegurança de forma inteligente.</li>
            <li><strong>Preceptor Digital:</strong> Faça perguntas rápidas sobre materiais e tire dúvidas clínicas nos momentos de aperto e indecisão.</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold text-brand-text pt-4">
            Preço justo e acessível de estudante para estudante
          </h2>
          <p>
            Diferente dos pesados softwares comerciais, o plano Academy é inteiramente desenhado para caber no bolso de alunos e estagiários universitários. O cadastro inicial é gratuito e você já pode começar a organizar seus primeiros pacientes do ambulatório acadêmico hoje mesmo!
          </p>
        </div>

        {/* Action card for Academy conversion */}
        <div className="mt-12 p-8 md:p-10 rounded-3xl bg-brand-academy text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20" />
          
          <div className="space-y-4 max-w-xl relative z-10 text-center md:text-left">
            <h3 className="text-2xl font-extrabold leading-tight">Elimine a ansiedade debaixo do mocho clínico</h3>
            <p className="text-xs md:text-sm text-brand-academy-soft font-semibold leading-relaxed">
              Assuma de forma assertiva e impecável a organização de suas clínicas de graduação com o suporte do maior aplicativo voltado a estudantes do Brasil. Teste gratuitamente hoje mesmo!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto relative z-10">
            <Link to="/academy" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full py-4 px-8 text-xs font-bold uppercase tracking-wider rounded-xl bg-white !text-brand-academy border-none hover:bg-white/95 shadow-lg active:scale-97 transition-all">
                Acessar Academy
              </Button>
            </Link>
            <Link to="/" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full py-4 px-8 text-xs font-bold uppercase tracking-wider rounded-xl bg-transparent text-white border-white/20 hover:bg-white/10">
                Página Inicial
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
