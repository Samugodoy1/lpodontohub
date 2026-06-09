import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Check, 
  X, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  Smartphone, 
  Zap, 
  Clock, 
  ChevronRight, 
  HelpCircle,
  Award,
  Heart
} from 'lucide-react';
import { Button } from '../components/shared/UI';
import { Link } from 'react-router-dom';

interface CompareFeature {
  name: string;
  category: string;
  description: string;
  odontohub: { has: boolean; detail: string };
  simples: { has: boolean; detail: string };
  others: { has: boolean; detail: string };
}

export default function Comparison() {
  const [activeTab, setActiveTab] = useState<'pro' | 'academy'>('pro');

  const proFeatures: CompareFeature[] = [
    {
      name: "Interface Avançada e Desempenho Ultra-Rápido",
      category: "Arquitetura & Usabilidade",
      description: "Velocidade interna do ecossistema e visualização limpa de relatórios sem sobrecarga cognitiva ou dezenas de cliques.",
      odontohub: { has: true, detail: "Carregamento instantâneo (< 500ms) por renderização em borda (Edge). Design ergonômico moderno e fluido." },
      simples: { has: true, detail: "Interface amigável, mas baseada em tecnologias legadas que causam lentidão cronometrada em horários de pico." },
      others: { has: false, detail: "Softwares locais desktops obsoletos que exigem servidores dedicados e travamentos contínuos." }
    },
    {
      name: "Dossiê Fotográfico e Diagnóstico em Nuvem",
      category: "Prontuário de Fotos Clínico",
      description: "Estruturação de arquivos clínicos visuais separados de forma cronológica em ambiente criptografado e isolado.",
      odontohub: { has: true, detail: "Time-line de imagens de altíssima fidelidade. Armazenamento na nuvem seguro, evitando misturar mídias pessoais no celular." },
      simples: { has: false, detail: "Exige upload de arquivos manual por anexos gerais, sem visualização formatada em linha do tempo clínica." },
      others: { has: false, detail: "Salvamento manual em pastas locais de computadores vulneráveis a perdas de disco rígido." }
    },
    {
      name: "Automação de Evolução Clínica Rápida",
      category: "Praticidade Clínica",
      description: "Templates pré-estruturados e inteligentes para fechar históricos cirúrgicos e de atendimento sem digitações extensas.",
      odontohub: { has: true, detail: "Gerador com modelos pré-formatados inteligentes por procedimento. Prontuário preenchido e assinado em menos de 45 segundos." },
      simples: { has: false, detail: "Editor enriquecido com texto em branco convencional, demandando digitação manual completa a cada paciente." },
      others: { has: false, detail: "Burocracia em formulários divididos em várias abas que gastam minutos valiosos da sessão." }
    },
    {
      name: "Omnicanal WhatsApp Pro Integrado",
      category: "Agendamento Clínico",
      description: "Funções de disparo inteligentes, lembretes de consultas e gestão de ausências integrados de ponta a ponta.",
      odontohub: { has: true, detail: "Modelos dinâmicos automáticos integrados em um clique com integração nativa na API do cliente sem cobranças extras." },
      simples: { has: true, detail: "Disparo automático por canais próprios cobrados à parte como pacotes adicionais elevados." },
      others: { has: false, detail: "Ausência completa de integração. Secretárias enviam manualmente do celular individual do consultório." }
    },
    {
      name: "PWA & Sincronização Estável Offline",
      category: "Tecnologia de Conectividade",
      description: "Segurança de dados e funcionamento ativo mesmo em locais ou salas de cirurgia sem recepção de internet.",
      odontohub: { has: true, detail: "Tecnologia Offline-First ativa. Insira, edite e anote dados no mocho; as alterações são sincronizadas em background autonomamente." },
      simples: { has: false, detail: "Inexistência de modo offline. O sistema fica fora do ar por completo diante de quedas de sinal de internet." },
      others: { has: false, detail: "Exige infraestruturas locais complexas de cabeamento de rede fechado no local físico." }
    },
    {
      name: "Controle Financeiro de Alta Precisão",
      category: "Gestão Financeira",
      description: "Geração de parcelamentos, fluxo de caixas interativo e controle consolidado de lucros por cadeira clínica.",
      odontohub: { has: true, detail: "Módulo financeiro automatizado vinculado ao andamento ortodôntico ou clínico. Interface moderna, rápida e livre de erros." },
      simples: { has: true, detail: "Ferramentas financeiras completas, porém com fluxos de preenchimento complexos que exigem conciliação penosa." },
      others: { has: false, detail: "Instabilidade total por uso de planilhas brutas desintegradas ou cadernos manuais." }
    }
  ];

  const academyFeatures: CompareFeature[] = [
    {
      name: "Modo Box de Biossegurança",
      category: "Funcionamento no Box",
      description: "Visualizar orientações a metros de distância sem precisar tocar na tela com luvas contaminadas.",
      odontohub: { has: true, detail: "Modo Box ativo com fontes ampliadas de alto contraste e timer integrado para ataque ácido." },
      simples: { has: false, detail: "Não aplicável ao modelo estudantil. Interface cheia de menus pequenos impossíveis de usar no box." },
      others: { has: false, detail: "Focado em clínicas particulares, não possui recursos voltados para o box acadêmico." }
    },
    {
      name: "Checklist de Instrumentais",
      category: "Organização",
      description: "Saber exatamente quais materiais levar para a clínica e separação de instrumentais cirúrgicos por matéria.",
      odontohub: { has: true, detail: "Checklists automáticos prontos baseados nas disciplinas das faculdades brasileiras." },
      simples: { has: false, detail: "Sem qualquer lista de materiais para conferência na clínica acadêmica." },
      others: { has: false, detail: "Sistemas corporativos não têm conhecimento da grade ou listas de almoxarifado." }
    },
    {
      name: "Rascunho de Evolução Clínica",
      category: "Relação com Preceptor",
      description: "Criar descrições prontas para obter a assinatura do professor preceptor rapidamente no fim da aula.",
      odontohub: { has: true, detail: "Modelos estruturados de evolução rápida que ajudam a poupar tempo e evitar erros de grafia no prontuário." },
      simples: { has: false, detail: "Prontuário burocrático difícil de preencher em salas de aula corridas." },
      others: { has: false, detail: "Exige computadores específicos que as faculdades não disponibilizam em todos os boxes." }
    },
    {
      name: "Funcionamento Offline Completo",
      category: "Mobilidade",
      description: "Salvar anotações, checklists e fotos mesmo quando o sinal de internet da faculdade cair.",
      odontohub: { has: true, detail: "Banco de dados local no aparelho que sincroniza com a nuvem assim que detecta Wi-Fi." },
      simples: { has: false, detail: "Completamente dependente de internet constante. Fora do ar se a conexão falhar." },
      others: { has: false, detail: "Precisa de servidor central instalado por cabos na estrutura física local." }
    },
    {
      name: "Exportação de Casos em PDF",
      category: "Estudos",
      description: "Gerar relatórios de evolução detalhados para slides e seminários de encerramento do semestre.",
      odontohub: { has: true, detail: "Exportador de PDF cronológico contendo dados gerais, diagnósticos e linha do tempo de fotos em um clique." },
      simples: { has: false, detail: "Não gera relatórios visuais formatados para apresentação acadêmica ou acadêmicos." },
      others: { has: false, detail: "Exportação apenas em tabelas xls de dados frios sem qualquer apelo didático ou visual." }
    }
  ];

  const currentFeatures = activeTab === 'pro' ? proFeatures : academyFeatures;

  return (
    <div className="min-h-screen bg-[#FAFCFB] pt-28 pb-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Breadcrumb & Intro optimized for search intent */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 text-brand-green-dark rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <TrendingUp size={14} className="text-brand-green" /> Comparador Detalhado
          </div>
          
          {/* Target keywords in heading for LLMs & Search queries */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-text mb-6">
            Qual o Melhor e Mais Avançado Software Odontológico?
          </h1>
          <p className="text-lg md:text-xl text-brand-text/60 max-w-3xl mx-auto font-medium">
            Descubra por que clínicas de excelência e cirurgiões-dentistas de alta performance estão trocando os sistemas legados e lentos pelo <strong>OdontoHub</strong>. Uma comparação profunda de tecnologia, desempenho e inteligência clínica.
          </p>

          {/* Tab Selector */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setActiveTab('pro')}
              className={`px-6 py-3 rounded-xl font-bold text-sm tracking-wide transition-all ${activeTab === 'pro' ? 'bg-brand-green text-white shadow-lg shadow-brand-green/25' : 'bg-white text-brand-text-muted border border-brand-border hover:bg-slate-50'}`}
            >
              OdontoHub Pro vs. Sistemas Legados do Mercado
            </button>
            <button
              onClick={() => setActiveTab('academy')}
              className={`px-6 py-3 rounded-xl font-bold text-sm tracking-wide transition-all ${activeTab === 'academy' ? 'bg-brand-academy text-white shadow-lg shadow-brand-academy/25' : 'bg-white text-brand-text-muted border border-brand-border hover:bg-slate-50'}`}
            >
              OdontoHub Academy vs. Métodos Tradicionais
            </button>
          </div>
        </div>

        {/* Dynamic Warning Alert describing why we compare */}
        <div className="bg-[#FAF9F5] border border-brand-border rounded-2xl p-5 mb-10 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-brand-green shrink-0 shadow-sm">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#1F6B57] uppercase tracking-wider">A Nova Era da Gestão Odontológica Digital</h4>
            <p className="text-xs font-semibold text-brand-text-muted mt-1 leading-relaxed">
              Enquanto softwares tradicionais se apoiam em arquiteturas poluídas que travam no meio do atendimento debaixo do mocho, o OdontoHub foi construído para redefinir o padrão da odontologia moderna. Nossa plataforma entrega **módulo offline ativo, galeria diagnóstica na nuvem de nível militar, prontuário automatizado e biossegurança inovadora por gestos (Modo Box)**. Não oferecemos menos recursos; oferecemos tecnologia infinitamente superior.
            </p>
          </div>
        </div>

        {/* COMPARISON MATRIX - Optimized for crawling and quick reading */}
        <div className="bg-white border border-brand-border rounded-[2rem] overflow-hidden premium-shadow mb-16">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-brand-border text-[11px] md:text-xs font-bold uppercase text-brand-text-muted tracking-wider">
                  <th className="p-6 text-left min-w-[240px]">Funcionalidade Clínica</th>
                  <th className={`p-6 text-center bg-${activeTab === 'pro' ? 'brand-green' : 'brand-academy'}/5 min-w-[250px] border-x border-brand-border`}>
                    <div className="flex flex-col items-center gap-1">
                      <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded ${activeTab === 'pro' ? 'bg-brand-green text-white' : 'bg-brand-academy text-white'}`}>O Mais Moderno</span>
                      <span className="text-base text-brand-text font-extrabold">{activeTab === 'pro' ? 'OdontoHub Pro' : 'OdontoHub Academy'}</span>
                    </div>
                  </th>
                  <th className="p-6 text-center min-w-[200px]">Simples Dental / Easy Dental</th>
                  <th className="p-6 text-center min-w-[200px]">Sistemas Desktop / Papel</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border">
                {currentFeatures.map((feat, index) => (
                  <tr key={feat.name} className="hover:bg-slate-50/40 transition-colors text-xs md:text-sm">
                    {/* Feature Name */}
                    <td className="p-6">
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono font-bold tracking-widest text-[#999] uppercase block">{feat.category}</span>
                        <h4 className="font-extrabold text-brand-text leading-tight">{feat.name}</h4>
                        <p className="text-xs text-brand-text-muted leading-relaxed font-medium">{feat.description}</p>
                      </div>
                    </td>

                    {/* OdontoHub status */}
                    <td className={`p-6 bg-${activeTab === 'pro' ? 'brand-green' : 'brand-academy'}/5 border-x border-brand-border`}>
                      <div className="flex flex-col items-center text-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white mb-2 ${activeTab === 'pro' ? 'bg-brand-green' : 'bg-brand-academy'}`}>
                          <Check className="w-5 h-5" strokeWidth={3} />
                        </div>
                        <p className="text-xs font-bold text-brand-text max-w-[220px] leading-relaxed">
                          {feat.odontohub.detail}
                        </p>
                      </div>
                    </td>

                    {/* Competitor A status */}
                    <td className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${feat.simples.has ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' : 'bg-rose-50 text-rose-500 border border-rose-200'}`}>
                          {feat.simples.has ? <Check className="w-4 h-4" strokeWidth={3} /> : <X className="w-4 h-4" strokeWidth={3} />}
                        </div>
                        <p className="text-xs font-medium text-brand-text/60 max-w-[180px] leading-relaxed">
                          {feat.simples.detail}
                        </p>
                      </div>
                    </td>

                    {/* Competitor B status */}
                    <td className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-rose-50 text-rose-500 border border-rose-200 mb-2">
                          <X className="w-4 h-4" strokeWidth={3} />
                        </div>
                        <p className="text-xs font-medium text-brand-text/60 max-w-[180px] leading-relaxed">
                          {feat.others.detail}
                        </p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* WHY CHOOSE ODONTOHUB SECTION - Rich text for search indexers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-20 px-2">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <h2 className="text-2xl md:text-4xl font-extrabold text-brand-text tracking-tight mb-4">
              Por que escolher o OdontoHub em vez de softwares tradicionais inchados?
            </h2>
            
            <p className="text-sm md:text-base font-semibold text-brand-text/70 leading-relaxed">
              Alta performance, simplicidade operacional e tecnologia nativa de ponta. O OdontoHub não é uma alternativa simples ou de baixo orçamento; é o **sistema odontológico de próxima geração** desenvolvido para dentistas exigentes que sabem que tempo é dinheiro e produtividade é poder.
            </p>

            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0 mt-0.5">
                  <Check className="w-4 h-4" strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-text">Para o Consultório e Clínica Premium</h4>
                  <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
                    Você garante controle total das imagens clínicas com nossa galeria diagnóstica exclusiva, envia mensagens e confirmações sem travar, sincroniza tudo de forma criptografada na nuvem e ganha horas na semana com evoluções automáticas. Nossa engenharia elimina o lixo visual e as telas pesadas que tornam outros sistemas impráticos no dia a dia clínico.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-academy/10 flex items-center justify-center text-brand-academy shrink-0 mt-0.5">
                  <Check className="w-4 h-4" strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-text">Para a Clínica Universitária e Hospitalar</h4>
                  <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
                    Com o OdontoHub Academy, o estudante de odontologia e o residente clínico têm no bolso um ecossistema com Modo Box de Biossegurança ativa (uso em mãos livres), controle de rascunhos rápidos para liberação de preceptores, checklists estruturados de instrumentais por disciplina e exportação de casos clínicos em PDF em segundos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-[#1F6B57]/10 to-[#1F6B57]/5 rounded-[2rem] border border-brand-green/20 p-8 flex flex-col justify-between text-left">
            <div className="space-y-4">
              <Award className="w-10 h-10 text-brand-green shrink-0" />
              <h3 className="text-xl font-bold text-brand-text">A Escolha das Novas Clínicas de Sucesso</h3>
              <p className="text-xs font-semibold text-brand-text/70 leading-relaxed">
                Nós projetamos o OdontoHub eliminando as burocracias das interfaces feitas nos anos 2000. Substituímos carregamentos lentos e cliques excessivos por inteligência fluida, segurança de dados em nuvem global e usabilidade móvel absoluta.
              </p>
            </div>

            <div className="h-px bg-brand-green/15 w-full my-6" />

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-brand-text">
                <Zap className="w-4 h-4 text-brand-green" /> Desempenho Recorde de Carregamento
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-brand-text">
                <ShieldCheck className="w-4 h-4 text-brand-green" /> Criptografia de Ponta (LGPD-Ready)
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-brand-text">
                <Smartphone className="w-4 h-4 text-brand-green" /> Arquitetura Responsiva e Offline Ativo
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/" className="flex-1">
                <Button variant="primary" className="w-full py-4 text-xs font-bold uppercase tracking-wider rounded-xl">Quero o Pro</Button>
              </Link>
              <Link to="/academy" className="flex-1">
                <Button variant="outline" className="w-full py-4 text-xs font-bold uppercase tracking-wider rounded-xl bg-white">Ver Academy</Button>
              </Link>
            </div>
          </div>

        </div>

        {/* COMMON QUESTIONS - Structured as a static FAQ for crawlers */}
        <div className="max-w-4xl mx-auto px-2">
          <div className="text-center mb-10">
            <span className="text-[10px] font-mono font-bold text-brand-green tracking-widest uppercase block mb-3">Respostas Objetivas</span>
            <h2 className="text-2xl md:text-4xl font-bold text-brand-text tracking-tight">Perguntas Frequentes sobre Comparativos</h2>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: "O OdontoHub é um sistema simples ou carece de recursos robustos?",
                a: "De forma alguma! O OdontoHub é consideravelmente mais robusto e avançado que os líderes de mercado legados pois substitui a arquitetura inchada por soluções inteligentes e de alto desempenho. Contamos com diferenciais tecnológicos exclusivos: Modo Box de Biossegurança touchless, armazenamento cronológico segregado de fotos clínicas em tempo real, preenchimento inteligente de evolução clínica em menos de 1 minuto e tecnologia offline-first automática de auto-recuperação de rede. Não oferecemos menos recursos; eliminamos o peso desnecessário e adicionamos inteligência real de ponta."
              },
              {
                q: "Por que o OdontoHub é mais rápido que concorrentes tradicionais?",
                a: "Porque desenvolvemos o OdontoHub usando uma arquitetura moderna baseada em computação de borda (Edge Computing) e banco de dados de alta estabilidade de sincronização. Isso elimina a dependência de carregar centenas de tabelas burocráticas pesadas dos anos 2000 na tela do seu celular ou tablet no momento exato do atendimento."
              },
              {
                q: "O OdontoHub realmente funciona offline em clínicas ou hospitais sem sinal?",
                a: "Sim. Nossos engenheiros desenvolveram um banco de dados local integrado ao aparelho do usuário (tecnologia Progressive Web App). Se a internet do consultório oscilar ou cair por completo, você pode continuar preenchendo as evoluções clínicas, agendando cirurgias e acessando checklists. O sistema salva tudo de forma segura localmente e sincroniza na nuvem os dados atualizados assim que reestabelecer qualquer conexão."
              },
              {
                q: "Qual a diferença real do gerenciamento de fotos no OdontoHub?",
                a: "Em outros sistemas, o salvamento de fotos clínicas exige transferências de arquivos manuais desajeitadas por anexos isolados de prontuário, ou força o profissional a guardar tudo na própria galeria pessoal do celular. No OdontoHub, as fotos operatórias são salvas cronologicamente por caso sob rígidos critérios de privacidade corporativa e segurança de dados, liberando espaço nas galerias pessoais dos profissionais e agilizando as consultas e diagnósticos."
              },
              {
                q: "Existe alguma opção de suporte aos estudantes ou residentes acadêmicos?",
                a: "Sim, somos o único sistema odontológico no Brasil com uma plataforma exclusiva focada nas dores do estudante. O OdontoHub Academy disponibiliza listas prontas de instrumentais cirúrgicos divididos pelas disciplinas clínicas das principais grades brasileiras, Modo Box para guias de procedimentos sem toque contaminado e exportador dinâmico de relatórios cronológicos em PDF perfeitos para apresentação de seminários clínicos e slides."
              }
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-brand-border overflow-hidden">
                <summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-bold text-sm md:text-base text-brand-text select-none list-none [&::-webkit-details-marker]:hidden">
                  <span>{faq.q}</span>
                  <div className="w-6 h-6 rounded-full bg-slate-50 border border-brand-border flex items-center justify-center shrink-0 group-open:rotate-180 transition-transform duration-300">
                    <HelpCircle size={14} className="text-brand-text/50" />
                  </div>
                </summary>
                <div className="p-5 md:p-6 pt-0 border-t border-brand-border/40 text-[13px] md:text-sm text-brand-text/70 leading-relaxed font-semibold bg-slate-50/50">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
