import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { 
  BookOpen, 
  Clock, 
  ArrowLeft, 
  User, 
  Calendar, 
  ChevronRight, 
  Sparkles, 
  Search, 
  SlidersHorizontal,
  Bookmark,
  Share2,
  CheckCircle,
  TrendingUp,
  FileText,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { Button } from '../components/shared/UI';
import Breadcrumb from '../components/shared/Breadcrumb';
import FAQSection from '../components/shared/FAQSection';

interface Article {
  slug: string;
  title: string;
  category: 'Gestão' | 'IA & Tecnologia' | 'Academy' | 'Comparativos';
  publishDate: string;
  readTime: string;
  author: string;
  authorRole: string;
  summary: string;
  content: React.ReactNode;
  seoKeywords: string[];
}

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPostSlug = searchParams.get('post');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [isCopied, setIsCopied] = useState(false);

  // Sync scroll on reading view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPostSlug]);

  const articles: Article[] = [
    {
      slug: 'o-que-e-clinical-clarity-system',
      title: 'O que é um Clinical Clarity System (CCS) e como ele redefine o Software Odontológico',
      category: 'IA & Tecnologia',
      publishDate: '09 de Junho, 2026',
      readTime: '6 min de leitura',
      author: 'Comitê de Arquitetura de Produto',
      authorRole: 'Núcleo de Engenharia de Usabilidade OdontoHub',
      summary: 'Entenda a nova categoria de tecnologia para consultórios que rejeita a poluição de dezenas de ferramentas e foca exclusivamente em reduzir decisões clínicas e administrativas do dentista.',
      seoKeywords: ['clinical clarity system', 'ccs odontologico', 'odontohub ccs', 'software odontologia moderno', 'tecnologia no consultorio'],
      content: (
        <div className="space-y-6 text-brand-text/80 leading-relaxed font-semibold text-sm md:text-base">
          <p className="text-lg text-brand-text font-bold mb-4">
            Em um mercado dominado por ferramentas de registro herdadas dos anos 2000, o OdontoHub surge inaugurando uma categoria inteiramente nova: o <strong>Clinical Clarity System (CCS)</strong> ou Sistema de Clareza Clínica e Operacional.
          </p>
          
          <h2 className="text-xl md:text-2xl font-bold text-brand-text pt-4">A Filosofia do Menos é Mais</h2>
          <p>
            Tradicionalmente, a maioria das startups de software odontológico compete através do preenchimento de extensos checklists. Elas ostentam dezenas de painéis, centenas de automações configuráveis, e notificações constantes sobre dados soltos. A lógica corporativa padrão dita que "mais funcionalidades = produto melhor". No entanto, o resultado prático disso não é clareza, mas sim <em>estafa cognitiva</em>.
          </p>
          
          <blockquote className="border-l-4 border-brand-green pl-4 italic text-brand-text/95 bg-brand-green/5 p-4 rounded-r-xl">
            "A complexidade de um sistema odontológico tradicional não é um problema de quantidade de ferramentas, mas sim de clareza das ações imediatas."
          </blockquote>

          <h2 className="text-xl md:text-2xl font-bold text-brand-text pt-4">O que define o CCS?</h2>
          <p>
            Ao contrário do software de gestão odontológica tradicional, que atua passivamente como um banco de dados cumulativo esperando que o profissional faça a consulta manual e interprete os números, um CCS é regido por princípios proativos de redução de carga mental:
          </p>

          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong>Proatividade Operacional:</strong> O sistema não aguarda você perguntar quantos pacientes confirmaram hoje. Ele identifica desvios (ex: 2 pacientes pendentes) e sugere disparar lembretes com 1 clique.
            </li>
            <li>
              <strong>Contexto sobre Dados:</strong> "Você tem 12 pacientes amanhã" é apenas um dado. "Você tem 12 pacientes, e 3 deles realizam cirurgias complexas necessitando de orientações prévias" é contexto de alto valor.
            </li>
            <li>
              <strong>Silêncio Ativo:</strong> Se o seu dia transcorre perfeitamente, o financeiro está sob controle e as consultas estão asseguradas, o sistema permanece em silêncio. Sem pop-ups irrelevantes, mensagens motivadoras ou notificações promocionais. O silêncio também é comunicação útil.
            </li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold text-brand-text pt-4">O Fim dos "Dashboards de Vaidade"</h2>
          <p>
            Muitas clínicas utilizam painéis volumosos que exibem porcentagem de ocupação acumulada ou gráficos tridimensionais cheios de números frios. Mas o dentista solo, no final da jornada, apenas se questiona: <em>"O que merece minha atenção agora? O que posso resolver em 1 minuto para poder deitar a cabeça no travesseiro tranquilo?"</em>
          </p>
          <p>
            O OdontoHub foi construído para que a melhor métrica de sucesso seja <strong>fechar o aplicativo o mais rápido possível com absoluta confiança de que nada ficou para trás</strong>. Nosso objetivo não é que você passe horas navegando na plataforma, mas sim que tenha clareza instantânea para cuidar de quem importa: o seu paciente.
          </p>
        </div>
      )
    },
    {
      slug: 'odontohub-vs-clinicorp-vs-simples-dental',
      title: 'OdontoHub vs Clinicorp vs Simples Dental: Qual o software ideal em 2026?',
      category: 'Comparativos',
      publishDate: '09 de Junho, 2026',
      readTime: '8 min de leitura',
      author: 'Conselho Clínico OdontoHub',
      authorRole: 'Análise Independente de Mercado',
      summary: 'Um comparativo honesto e direto focado na realidade dos dentistas solo e estudantes. Veja onde as grandes marcas encontram seus limites e como inovamos em biossegurança e facilidade de uso portátil.',
      seoKeywords: ['odontohub vs simples dental', 'odontohub vs clinicorp', 'melhor software odontologico', 'sistema de gestão odonto', 'clinicorp ou simples dental'],
      content: (
        <div className="space-y-6 text-brand-text/80 leading-relaxed font-semibold text-sm md:text-base">
          <p className="text-lg text-brand-text font-bold mb-4">
            Escolher a tecnologia que vai rodar no consultório é uma das decisões que mais afetam a velocidade do atendimento e o humor do dentista ao final do dia. Analisamos detalhadamente as maiores plataformas do Brasil.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-brand-text pt-4">1. Clinicorp: O Gigante Corporativo das Grandes Clínicas</h2>
          <p>
            O Clinicorp é uma solução muito robusta e amplamente conhecida, perfeita para clínicas com dezenas de profissionais integrados, recepcionistas simultâneas, e fluxo de franqueadoras complexas.
          </p>
          <p><strong>Os pontos fracos para o Clínico Solo:</strong></p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Curva de aprendizado pesada:</strong> A sua secretária ou você demorará dias para dominar os fluxos internos de faturamento, cadastro inicial e relatórios.</li>
            <li><strong>Lentidão Mobile:</strong> Desenvolvido primariamente para telas grandes de computador desktop. Tentar evoluir um prontuário rápido no celular no meio do dia é uma experiência frustrante e lenta.</li>
            <li><strong>Custo Elevado:</strong> Modelos de faturamento baseados em múltiplos adicionais que pesam no orçamento de quem está iniciando ou gerencia seu próprio espaço.</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold text-brand-text pt-4">2. Simples Dental: O Design Conhecido, mas Preso aos Modelos Antigos</h2>
          <p>
            O Simples Dental trouxe uma lufada de ar fresco na estética dos softwares na última década. É limpo, amigável e simplificado no quesito agendamentos.
          </p>
          <p><strong>Onde o sistema encontra gargalos atualmente:</strong></p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Exigência de Conexão Estrita:</strong> Se a internet do seu consultório oscilar minimamente, o sistema para de responder completamente. Você perde o histórico clínico das consultas no exato momento do diagnóstico.</li>
            <li><strong>Limitações Estudiantis:</strong> Não possui qualquer módulo adaptado para as necessidades acadêmicas, como listas de almoxarifados cirúrgicos e o Modo Box de biossegurança.</li>
            <li><strong>Poluição de Celular Pessoal:</strong> Exige o upload de fotos da boca do paciente direto do rolo de câmera do celular de forma manual, causando desorganização.</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold text-brand-text pt-4">3. OdontoHub: A Estreia da Velocidade e Arquitetura "Edge"</h2>
          <p>
            O <strong>OdontoHub</strong> foi estruturado especificamente para ser um sistema de alta clareza operacional que roda instantaneamente tanto no computador quanto em qualquer celular antigo, sem perdas de layout.
          </p>

          <div className="bg-slate-50 border border-brand-border rounded-2xl p-5 my-6">
            <h4 className="font-extrabold text-brand-text mb-3">Tabela Resumo Comparativa:</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between border-b border-slate-100 pb-1.5 font-bold">
                <span className="text-brand-text-muted">Requisito Clínico</span>
                <span className="text-brand-green">OdontoHub</span>
                <span>Simples Dental</span>
                <span>Clinicorp</span>
              </div>
              <div className="flex justify-between border-b border-indigo-50/20 pb-1.5">
                <span className="text-brand-text-muted">Tempo de Acesso</span>
                <span className="font-bold text-brand-green">Imediato (&lt;1s)</span>
                <span>Moderado</span>
                <span>Lento / Pesado</span>
              </div>
              <div className="flex justify-between border-b border-indigo-50/20 pb-1.5">
                <span className="text-brand-text-muted">Foco em Celular</span>
                <span className="font-bold text-brand-green">Excelente Portabilidade</span>
                <span>Limitado</span>
                <span>Apenas Prontuário Básico</span>
              </div>
              <div className="flex justify-between border-b border-indigo-50/20 pb-1.5">
                <span className="text-brand-text-muted">Fotos de Pacientes</span>
                <span className="font-bold text-brand-green">Linha Cronológica Segura</span>
                <span>Lista de Anexos</span>
                <span>Upload de Pasta Física</span>
              </div>
              <div className="flex justify-between border-b border-indigo-50/20 pb-1.5">
                <span className="text-brand-text-muted">Modo Box Biossegurança</span>
                <span className="font-bold text-brand-green">Sim, com timers</span>
                <span>Não possui</span>
                <span>Não possui</span>
              </div>
            </div>
          </div>

          <h2 className="text-xl md:text-2xl font-bold text-brand-text pt-4">Veredito: Qual escolher?</h2>
          <p>
            Se você possui uma corporação com dezenas de filiais de franquias físicas e necessita de relatórios consolidados complexos, o <strong>Clinicorp</strong> atenderá muito bem seus administradores de terno. 
          </p>
          <p>
            No entanto, se você é um <strong>dentista independente, gerencia seu próprio tempo político de atendimentos, ou é um estudante universitário</strong> precisando de rapidez absoluta entre uma consulta e outra na cadeira do mocho, o <strong>OdontoHub</strong> oferece a única arquitetura do mercado que diminui seus cliques diários e protege de forma inteligente sua sanidade cognitiva e financeira.
          </p>
        </div>
      )
    },
    {
      slug: 'manifesto-fundador-odontologia-sufocada',
      title: 'O Manifesto Fundador: Por que a Odontologia no Brasil está sufocada?',
      category: 'Gestão',
      publishDate: '08 de Junho, 2026',
      readTime: '5 min de leitura',
      author: 'Fundação OdontoHub',
      authorRole: 'Manifesto de Posicionamento e Propósito',
      summary: 'A análise crua das pressões administrativas e o excesso de micro-decisões que roubam o foco dos profissionais da saúde das suas verdadeiras competências diante do paciente.',
      seoKeywords: ['manifesto odontohub', 'odontologia sufocada', 'gestão de consultorio', 'marketing de dentista', 'redução de ansiedade odontologia'],
      content: (
        <div className="space-y-6 text-brand-text/80 leading-relaxed font-semibold text-sm md:text-base">
          <p className="text-lg text-brand-text font-bold mb-4">
            A odontologia brasileira está sufocada. E não é por falta de habilidade técnica dos nossos doutores. Temos alguns dos cirurgiões-dentistas e ortodontistas mais capacitados das Américas.
          </p>
          <p>
            O verdadeiro sufocamento nasce de uma cobrança invisível acumulada diariamente. O cenário clínico atual exige dos profissionais da saúde a assunção de papéis cruzados para os quais nunca receberam qualquer treino conceitual na faculdade:
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>Você precisa ser um <strong>clínico de excelência</strong>, dominando novas resinas e implantes modernos.</li>
            <li>Adicionalmente, precisa ser um <strong>gestor financeiro</strong>, fazendo o cálculo de comissões, faturamento de cartão e contas a pagar do laboratório de próteses.</li>
            <li>Precisa agir como <strong>redator publicitário</strong> criando publicações no Instagram para captação de clientes.</li>
            <li>Por fim, é obrigado a ser um <strong>especialista em agendamento</strong> respondendo dezenas de pacientes ansiosos no WhatsApp simultaneamente.</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold text-brand-text pt-4">O custo oculto da fadiga de decisão</h2>
          <p>
            Cada um desses papéis rouba fragmentos da sua atenção diária. Em termos neurológicos simples: <em>decisões cansam</em>. Quando o dentista chega diante do seu primeiro tratamento cirúrgico ou estético complexo do dia, sua capacidade refinada de manter a calma e precisão manual já está desgastada por cinquenta pequenas burocracias burocráticas resolvidas de manhã cedo.
          </p>
          
          <p>
            Infelizmente, os desenvolvedores de sistemas respondem a essa dor oferecendo pacotes com "mais complexidade". Entregam listas intermináveis de recursos sob a premissa de que "ter tudo em um único lugar" resolve suas angústias. Não resolve. Apenas transfere o caos físico do papel para o caos digital da tela piscando.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-brand-text pt-4">Escreva seu Próprio Futuro</h2>
          <p>
            O OdontoHub foi pavimentado sob pilares inegociáveis. Recusamos vender a atenção dos nossos usuários, recusamos inflacionar alertas falsos de urgência e, de forma categórica, defendemos a simplificação extrema das operações. 
          </p>
          <p>
            Queremos que você assuma de volta seu único, mais nobre e rentável papel: <strong>entregar o melhor tratamento clínico diante do mocho ao seu paciente, sabendo que o resto está resolvido com poucos toques no bolso de seu jaleco.</strong>
          </p>
        </div>
      )
    },
    {
      slug: 'inteligencia-artificial-silencio-ativo',
      title: 'Inteligência Artificial na Odontologia: O Princípio do Silêncio Ativo',
      category: 'IA & Tecnologia',
      publishDate: '07 de Junho, 2026',
      readTime: '7 min de leitura',
      author: 'Comitê Científico de IA',
      authorRole: 'Inovação e Processos Inteligentes',
      summary: 'Como organizamos a tecnologia e a IA para agir de forma cirúrgica e discreta nas finanças e diagnósticos, contra o ruído visual das notificações convencionais.',
      seoKeywords: ['inteligencia artificial odontologia', 'ia no consultorio', 'sistema inteligente dentes', 'ia odontologica', 'odontohub inteligencia artificial'],
      content: (
        <div className="space-y-6 text-brand-text/80 leading-relaxed font-semibold text-sm md:text-base">
          <p className="text-lg text-brand-text font-bold mb-4">
            A inteligência artificial tem sido vendida como uma panaceia capaz de reescrever qualquer fluxo clínico. No entanto, a maioria das integrações atuais de IA assemelha-se a robôs de chat genéricos que geram interações burocráticas e pouco personalizadas.
          </p>
          
          <h2 className="text-xl md:text-2xl font-bold text-brand-text pt-4">O que é a IA de Silêncio Ativo?</h2>
          <p>
            No OdontoHub, desenhamos a inteligência para que ela obedeça a princípios de conduta humanos. IA de qualidade é aquela que permanece invisível até o momento exato em que a sua ausência acarretaria um prejuízo real no seu fluxo operacional.
          </p>
          <p>Dividimos isso em três grandes pilares presentes na base do nosso ecossistema:</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
            <div className="bg-white p-4 rounded-xl border border-brand-border">
              <span className="text-xs font-bold text-brand-green block mb-2">1. Pergunte Antes de Responder</span>
              <p className="text-xs text-brand-text-muted">A IA do OdontoHub analisa o seu padrão de faturamento de tratamentos e sua rotina e, em vez de disparar dezenas de gráficos em PDFs chatos no seu e-mail, ela propõe diagnósticos preditivos focados em ação concreta.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-brand-border">
              <span className="text-xs font-bold text-brand-green block mb-2">2. Entrega Ativa de Contexto</span>
              <p className="text-xs text-brand-text-muted">"Doutor, reparei que João possui consultas agendadas de prótese, mas as coroas do laboratório ainda não foram marcadas como recebidas." A IA cruza os dados do agendamento com as finanças de insumos pendentes em segundo plano.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-brand-border">
              <span className="text-xs font-bold text-brand-green block mb-2">3. Calibração Precisa</span>
              <p className="text-xs text-brand-text-muted">A IA sabe classificar o que de fato exige sua leitura imediata (ex: cancelamentos abruptos de tratamentos cirúrgicos na agenda do dia) e o que pode aguardar o final das consultas clínicas para ser visualizado.</p>
            </div>
          </div>

          <h2 className="text-xl md:text-2xl font-bold text-brand-text pt-4">Exemplos de IA Útil vs. IA Obstrutiva</h2>
          <p>
            Um sistema obstrutivo típico costuma enviar alertas como: <em>"Você não acessa nossa ferramenta há 48 horas! Entre agora e complete seu perfil corporativo"</em>. Isso é uma notificação voltada unicamente ao engajamento forçado da plataforma.
          </p>
          <p>
            Em contraparte, a IA do OdontoHub atua silenciosamente. Na proximidade de diagnósticos complexos no consultório acadêmico ou particular, ela resgata de forma proativa diretrizes simplificadas da literatura científica (Preceptor Digital) para que você execute os procedimentos com máxima autoconfiança debaixo do mocho.
          </p>
        </div>
      )
    },
    {
      slug: 'metodo-preceptor-educacao-odontologica',
      title: 'O Método Preceptor: Por que acumular certificados não melhora sua prática clínica',
      category: 'Academy',
      publishDate: '06 de Junho, 2026',
      readTime: '6 min de leitura',
      author: 'Comissão Pedagógica Academy',
      authorRole: 'Educação para a Carreira Médica',
      summary: 'Dentistas em formação não precisam de mais cursos de dezenas de horas sem contexto. Precisam de orientação pontual na cadeira clínica sobre o paciente que irão atender amanhã.',
      seoKeywords: ['odontohub academy', 'metodo preceptor', 'estudante de odonto', 'timidez debaixo do mocho', 'periodontia checklist materials'],
      content: (
        <div className="space-y-6 text-brand-text/80 leading-relaxed font-semibold text-sm md:text-base">
          <p className="text-lg text-brand-text font-bold mb-4">
            O ensino tradicional de odontologia sofre com um grande descompasso entre a teoria assistida passivamente em auditórios repletos de alunos e a realidade prática, muitas vezes de angústia e insegurança, na primeira vez que se pega a turbina de alta rotação no box de atendimento.
          </p>
          
          <h2 className="text-xl md:text-2xl font-bold text-brand-text pt-4">A Ilusão da "Netflix de Cursos"</h2>
          <p>
            É muito comum que estudantes assinem e comprem repositórios de cursos online contendo 40 horas de gravações estáticas de procedimentos cirúrgicos complexos. Mas qual a taxa de retenção desse conteúdo quando o aluno divide o tempo com provas de microbiologia, relatórios e a separação de instrumentais do almoxarifado?
          </p>
          <p>
            Quase nula. O cérebro humano esquece rapidamente o que assiste sem aplicação operacional imediata. O verdadeiro aprendizado clínico exige a figura secular do <strong>Preceptor</strong>: o professor que se inclina na borda da cadeira odontológica, observa o seu caso específico e aponta de forma precisa a angulação da broca no exato instante do atendimento.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-brand-text pt-4">O Preceptor Digital do OdontoHub Academy</h2>
          <p>
            Idealizamos o <strong>OdontoHub Academy</strong> para ser o preceptor eletrônico de bolso de todos os futuros profissionais do Brasil:
          </p>
          
          <div className="space-y-4 my-6">
            <div className="flex gap-4 items-start bg-[#FAF9F5] p-4 rounded-xl border border-brand-border">
              <span className="w-8 h-8 rounded-full bg-brand-academy text-white flex items-center justify-center font-bold text-xs shrink-0">A</span>
              <div>
                <h4 className="font-bold text-brand-text text-sm">Previsão e Planejamento de Casos</h4>
                <p className="text-xs text-brand-text-muted mt-1">O sistema analisa quais especialidades cirúrgicas você tem agendadas para os próximos dias (ex: uma cirurgia periodontal ou restauração complexa) e sugere um guia de revisão com checklists de 5 minutos antes da aula clínico.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-[#FAF9F5] p-4 rounded-xl border border-brand-border">
              <span className="w-8 h-8 rounded-full bg-brand-academy text-white flex items-center justify-center font-bold text-xs shrink-0">B</span>
              <div>
                <h4 className="font-bold text-brand-text text-sm">Modo Box Ativo de Biossegurança</h4>
                <p className="text-xs text-brand-text-muted mt-1">Chega de folhear folhas de caderno rasgadas ou ter que tirar as luvas estéreis para segurar o celular nos checklists clínicos. O Modo Box exibe letras grandes de altíssimo contraste e timers precisos para ataque ácido que você lê a 1,5 metro de distância com facilidade.</p>
              </div>
            </div>
          </div>

          <h2 className="text-xl md:text-2xl font-bold text-brand-text pt-4">Entregando Autoconfiança "Debaixo do Mocho"</h2>
          <p>
            O sucesso do aluno de odontologia não se mede por dezenas de diplomas decorativos acumulados em gavetas. Ele reside na autonomia técnica e tranquilidade ao sentar no mocho, sabendo exatamente quais materiais solicitar ao almoxarifado da faculdade e sabendo realizar a evolução do prontuário acadêmico de forma assertiva e impecável para obter a rubrica de aprovação do seu professor preceptor de aula.
          </p>
        </div>
      )
    }
  ];

  const categories = ['Todos', 'Gestão', 'IA & Tecnologia', 'Academy', 'Comparativos'];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.seoKeywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'Todos' || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getArticleBySlug = (slug: string) => {
    return articles.find(a => a.slug === slug);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const currentPost = currentPostSlug ? getArticleBySlug(currentPostSlug) : null;

  return (
    <div className="min-h-screen bg-[#FAFCFB] pt-28 pb-16 px-4 md:px-6">
      
      {/* Dynamic SEO Structure per Page State */}
      <SchemaMarkup currentPost={currentPost} />

      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          
          {/* ARTICLE DETAIL VIEW */}
          {currentPost ? (
            <motion.article 
              key="article-detail"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto"
              id="blog-post-reader-layout"
            >
              {/* Dynamic Schema breadcrumbs */}
              <Breadcrumb items={[
                { name: 'Blog', url: '/blog' },
                { name: currentPost.category },
                { name: currentPost.title }
              ]} />

              {/* Back to Blog Button */}
              <button
                onClick={() => setSearchParams({})}
                className="inline-flex items-center gap-2 text-brand-text-muted hover:text-brand-green font-bold text-xs uppercase tracking-wider mb-8 transition-colors"
                id="btn-back-to-blog"
              >
                <ArrowLeft size={16} /> Voltar ao Canal de Notícias
              </button>

              {/* Category indicator / Tag badge */}
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                  currentPost.category === 'Academy' ? 'bg-brand-academy-soft text-brand-academy' :
                  currentPost.category === 'IA & Tecnologia' ? 'bg-indigo-50 text-indigo-700' :
                  currentPost.category === 'Gestão' ? 'bg-brand-green-soft text-brand-green' :
                  'bg-amber-50 text-amber-800'
                }`}>
                  {currentPost.category}
                </span>
                <span className="flex items-center gap-1.1 text-xs text-brand-text-muted font-bold">
                  <Clock size={12} className="inline mr-1" /> {currentPost.readTime}
                </span>
              </div>

              {/* Big Title */}
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-brand-text mb-6 leading-tight">
                {currentPost.title}
              </h1>

              {/* Author Credits Block */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 bg-slate-50 border border-brand-border rounded-2xl mb-8 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#Eaf4f0] text-brand-green flex items-center justify-center font-bold text-md">
                    <User size={18} />
                  </div>
                  <div>
                    <span className="text-sm font-extrabold text-brand-text block">{currentPost.author}</span>
                    <span className="text-xs font-semibold text-brand-text-muted block">{currentPost.authorRole}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-xs font-semibold text-brand-text-muted">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} className="inline" /> {currentPost.publishDate}
                  </span>
                  
                  {/* Share button */}
                  <button 
                    onClick={handleShare}
                    className="p-2 bg-white rounded-lg border border-brand-border hover:bg-slate-50 text-brand-text transition-colors flex items-center gap-1 active:scale-95 text-xs font-bold"
                    title="Copiar link"
                    id="btn-share-post"
                  >
                    <Share2 size={13} /> {isCopied ? 'Copiado!' : 'Compartilhar'}
                  </button>
                </div>
              </div>

              {/* Article Content Area */}
              <div className="prose prose-slate max-w-none pt-4 pb-12 border-b border-brand-border" id="blog-article-body">
                {currentPost.content}
              </div>

              {/* Call to Action banner at the foot of each post */}
              <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-[#1F6B57]/10 to-[#1F6B57]/5 border border-brand-green/20 text-left relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-3 max-w-lg">
                  <div className="inline-flex items-center gap-2 text-brand-green-dark text-xs uppercase font-extrabold px-3 py-1 bg-white/60 border border-brand-green/10 rounded-full">
                    <Sparkles size={12} /> Transforme seu Consultatório
                  </div>
                  <h3 className="text-xl font-bold text-brand-text">Pronto para ter clareza clínica e operacional total?</h3>
                  <p className="text-xs font-semibold text-brand-text-muted leading-relaxed">
                    Deixe para trás o excesso ou complexidade dos sistemas de odonto obsoletos. Junte-se a milhares de clínicos solo e estudantes que usam o OdontoHub todos os dias.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
                  <Link to="/" className="w-full sm:w-auto">
                    <Button variant="primary" className="w-full py-4 px-6 text-xs font-bold uppercase tracking-wider rounded-xl">Testar Grátis</Button>
                  </Link>
                  {currentPost.category === 'Academy' && (
                    <Link to="/academy" className="w-full sm:w-auto">
                      <Button variant="outline" className="w-full py-4 px-6 text-xs font-bold uppercase tracking-wider rounded-xl bg-white text-brand-academy border-brand-academy/30 hover:bg-slate-50">Explorar Academy</Button>
                    </Link>
                  )}
                </div>
              </div>

            </motion.article>
          ) : (
            
            // BLOG DIRECTORY & LISTINGS VIEW
            <motion.div
              key="blog-directory"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-12"
            >
              <div className="flex justify-start">
                <Breadcrumb items={[{ name: 'Blog' }]} />
              </div>

              {/* Blog Title Hero Section */}
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 text-brand-green-dark rounded-full text-xs font-bold uppercase tracking-wider">
                  <BookOpen size={14} className="text-brand-green" /> Conhecimento Odontológico
                </div>
                
                {/* Specific SEO optimized keywords in display heading */}
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-brand-text leading-tight">
                  Blog OdontoHub: <br className="hidden md:inline" />Sua rotina odontológica, sem rodeios.
                </h1>
                
                <p className="text-base md:text-lg text-brand-text-muted font-medium">
                  Artigos científicos de usabilidade, análises de concorrência com o Clinicorp e o Simples Dental, e metodologias exclusivas para estudantes dominarem as clínicas acadêmicas com segurança.
                </p>
              </div>

              {/* Search, Filters and Sorting toolbar */}
              <div className="bg-white border border-brand-border rounded-2xl p-4 md:p-6 premium-shadow max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between" id="blog-toolbar">
                
                {/* Custom Styled Search Input */}
                <div className="relative w-full md:w-80">
                  <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-text-muted" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Pesquisar artigos por palavra-chave..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-brand-border bg-slate-50 text-xs font-semibold text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all"
                    id="blog-search-field"
                  />
                </div>

                {/* Categories Tab Selector */}
                <div className="flex flex-wrap gap-2 justify-center w-full md:w-auto" id="blog-category-filter">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all transition-colors ${
                        selectedCategory === cat 
                          ? 'bg-brand-green text-white shadow-sm' 
                          : 'bg-slate-50 text-brand-text-muted hover:bg-slate-100 border border-brand-border/40'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic GRID list of cards */}
              {filteredArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4 items-stretch" id="blog-posts-grid">
                  {filteredArticles.map((article, idx) => (
                    <motion.div
                      key={article.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      className="bg-white border border-brand-border rounded-[2rem] overflow-hidden flex flex-col justify-between hover:border-brand-green/30 hover:shadow-xl hover:shadow-brand-green/5 transition-all duration-300 premium-shadow group"
                    >
                      {/* Card internal body wrapper */}
                      <div className="p-6 md:p-8 space-y-4">
                        <div className="flex justify-between items-center">
                          <span className={`px-2.5 py-1 rounded text-[9px] font-extrabold uppercase tracking-widest ${
                            article.category === 'Academy' ? 'bg-brand-academy-soft text-brand-academy' :
                            article.category === 'IA & Tecnologia' ? 'bg-indigo-50 text-indigo-700' :
                            article.category === 'Gestão' ? 'bg-brand-green-soft text-brand-green' :
                            'bg-amber-50 text-amber-800'
                          }`}>
                            {article.category}
                          </span>
                          
                          <span className="text-[10px] text-brand-text-muted font-bold flex items-center gap-1.1">
                            <Clock size={11} className="inline mr-1" /> {article.readTime}
                          </span>
                        </div>

                        <h3 className="text-lg md:text-xl font-bold text-brand-text leading-snug group-hover:text-brand-green transition-colors line-clamp-2">
                          {article.title}
                        </h3>

                        <p className="text-xs md:text-sm text-brand-text-muted leading-relaxed font-semibold line-clamp-3">
                          {article.summary}
                        </p>
                      </div>

                      {/* Card Lower actionable panel */}
                      <div className="p-6 md:p-8 pt-0 border-t border-brand-border/40 mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-1 text-[11px] text-brand-text font-bold">
                          <User size={12} className="text-brand-green" /> {article.author.split(' ')[0]}
                        </div>
                        
                        <button
                          onClick={() => setSearchParams({ post: article.slug })}
                          className="text-xs font-bold text-brand-green group-hover:translate-x-1.5 transition-transform duration-300 flex items-center gap-1 uppercase tracking-wider"
                          id={`btn-read-post-${article.slug}`}
                        >
                          Ler Artigo <ChevronRight size={14} />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 w-full max-w-sm mx-auto space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-brand-border flex items-center justify-center text-brand-text-muted mx-auto">
                    <SlidersHorizontal size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-text text-lg">Nenhum artigo localizado</h3>
                    <p className="text-xs text-brand-text-muted mt-1">Experimente buscar por outros termos de pesquisa como "CCS" ou "Clara" para encontrar conteúdo.</p>
                  </div>
                </div>
              )}

              {/* Dynamic Collapsible FAQ Component with Schema.org JSON-LD */}
              <FAQSection />

              {/* Institutional Statement based on page 10 and 13 of Constitution */}
              <div className="max-w-4xl mx-auto bg-slate-50 border border-brand-border rounded-[2rem] p-8 mt-12 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-brand-green font-bold text-2xl shrink-0 shadow-sm border border-brand-border/40">
                  <CheckCircle size={28} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-text uppercase tracking-wider">A Linha Editorial do Ecossistema</h4>
                  <p className="text-xs font-medium text-brand-text-muted mt-1 leading-relaxed">
                    Escrevemos como profissionais experientes escrevem para colegas competentes. Todos os conteúdos publicados no Blog OdontoHub passam pelo nosso conselho consultivo clínico e tecnológico. Recusamos publicidade de terceiros ou autopromoção desnecessária. Foco na clareza.
                  </p>
                </div>
              </div>

            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}

// Dedicated SEO engine that generates Structured Data markup dynamically in head for LLM / AI Overviews extraction
function SchemaMarkup({ currentPost }: { currentPost: Article | null }) {
  const pageTitle = currentPost 
    ? `${currentPost.title} | Blog OdontoHub`
    : 'Blog OdontoHub — Gestão Clínico-Odontológica, Tecnologia e IA para Dentistas';
    
  const pageDescription = currentPost
    ? currentPost.summary
    : 'Explore os melhores artigos e guias de usabilidade sobre gestão de consultórios odonto, Inteligência Artificial na odontologia acadêmica e o novo Clinical Clarity System (CCS).';

  const pageKeywords = currentPost
    ? currentPost.seoKeywords.join(', ')
    : 'blog odontohub, gestão odontológica, software odonto, clinicorp vs simples dental, ia dentes, modo box biossegurança, suporte odontologia';

  const pageUrl = currentPost
    ? `https://odontohub.app.br/blog?post=${currentPost.slug}`
    : 'https://odontohub.app.br/blog';

  const ogType = currentPost ? 'article' : 'website';

  const schemaJSON = currentPost
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": currentPost.title,
        "description": currentPost.summary,
        "datePublished": "2026-06-09T12:00:00Z",
        "author": {
          "@type": "Organization",
          "name": currentPost.author,
          "url": "https://odontohub.app.br/"
        },
        "publisher": {
          "@type": "Organization",
          "name": "OdontoHub",
          "logo": {
            "@type": "ImageObject",
            "url": "https://odontohub.app.br/logo.svg"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": pageUrl
        },
        "keywords": pageKeywords
      }
    : {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Blog OdontoHub",
        "url": pageUrl,
        "description": pageDescription,
        "publisher": {
          "@type": "Organization",
          "name": "OdontoHub",
          "logo": {
            "@type": "ImageObject",
            "url": "https://odontohub.app.br/logo.svg"
          }
        }
      };

  return (
    <Helmet>
      {/* Dynamic Title, Description, and Keywords */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <link rel="canonical" href={pageUrl} />

      {/* OpenGraph Protocol / Facebook / LinkedIn */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content="OdontoHub" />
      <meta property="og:image" content="https://odontohub.app.br/og-image.png" />

      {/* Twitter Cards Metadata */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content="https://odontohub.app.br/og-image.png" />
      <meta name="twitter:url" content={pageUrl} />

      {/* Schema Structured JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schemaJSON)}
      </script>
    </Helmet>
  );
}
