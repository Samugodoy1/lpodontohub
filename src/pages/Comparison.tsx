import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import {   Check, 
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
      name: "Interface Limpa e Rapidez",
      category: "Usabilidade",
      description: "Tempo de carregamento e facilidade de achar as informações sem poluição visual ou dezenas de cliques.",
      odontohub: { has: true, detail: "Carregamento instantâneo (< 1s), design focado no que importa e sem banners invasivos." },
      simples: { has: true, detail: "Interface amigável, mas lenta para carregar dados e relatórios mais pesados." },
      others: { has: false, detail: "Sistemas desktop antigos com telas cheias de botões e lentidão constante no dia a dia." }
    },
    {
      name: "Galeria de Fotos por Paciente",
      category: "Clínico",
      description: "Armazenamento e visualização das imagens clínicas separadas por caso clínico, direto na nuvem.",
      odontohub: { has: true, detail: "Linha do tempo visual cronológica por paciente. Esqueça misturar bocas com fotos pessoais no celular." },
      simples: { has: false, detail: "Exige upload de arquivos manual por anexo, sem visualização em forma de linha do tempo fluida." },
      others: { has: false, detail: "Arquivamento complexo em pastas locais na máquina física do consultório." }
    },
    {
      name: "Evolução do Prontuário Rápida",
      category: "Praticidade",
      description: "Rascunhar e finalizar os relatórios das sessões de forma ágil com modelos prontos.",
      odontohub: { has: true, detail: "Modelos estruturados por procedimento. Complete e salve a evolução clínica do paciente em menos de 1 minuto." },
      simples: { has: false, detail: "Editor de texto simples em branco, exigindo digitação manual de todo o relatório." },
      others: { has: false, detail: "Campos de digitação isolados e burocráticos sem preenchimento inteligente." }
    },
    {
      name: "Integração Direta com WhatsApp",
      category: "Agendamento",
      description: "Confirmar consultas e enviar lembretes sem precisar sair do sistema ou copiar e colar textos.",
      odontohub: { has: true, detail: "Modelos de confirmação automática integrados com um clique para disparar o WhatsApp do paciente." },
      simples: { has: true, detail: "Disparo automático por chat interno (cobrado como adicional ou pacote à parte)." },
      others: { has: false, detail: "Envio manual do celular da secretária sem qualquer tipo de modelo cadastrado no sistema." }
    },
    {
      name: "Acessibilidade Mobile Completa",
      category: "Tecnologia",
      description: "Uso do sistema inteiro em celulares, tablets ou notebooks sem quebras de layout ou zoom.",
      odontohub: { has: true, detail: "Totalmente responsivo e otimizado para o celular. Funciona perfeitamente onde você estiver." },
      simples: { has: false, detail: "Versão mobile bastante limitada ou focada apenas no agendamento diário, sem funções complexas." },
      others: { has: false, detail: "Incompatível com dispositivos móveis. Exige instalação em sistemas Windows." }
    },
    {
      name: "Controle Financeiro de Tratamentos",
      category: "Financeiro",
      description: "Registro de pagamentos parcelados, contas a pagar e a receber ligadas ao fluxo clínico.",
      odontohub: { has: true, detail: "Controle visual de parcelas, lançamentos automáticos integrados ao prontuário do paciente." },
      simples: { has: true, detail: "Ferramenta de fluxo de caixa, mas com lançamento financeiro complexo." },
      others: { has: false, detail: "Apenas lançamentos em tabelas brutas sem cruzamento com o andamento do tratamento." }
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
      <Helmet>
        <title>OdontoHub vs Concorrentes — Análise Técnica de Sistemas Dentários</title>
        <meta name="description" content="Comparativo técnico detalhado dos melhores softwares odontológicos. Descubra as diferenças entre OdontoHub, Simples Dental, Clinicorp e outras plataformas." />
        <meta name="keywords" content="sistemas odontológicos comparativo, software de odonto, melhor software odontologico, odontohub vs simples dental, clinicorp vs odontohub" />
        <link rel="canonical" href="https://www.odontohub.app.br/comparativo" />
        <meta property="og:title" content="OdontoHub vs Concorrentes — Análise de Sistemas Dentários" />
        <meta property="og:description" content="Análise comparativa imparcial e técnica. Escolha a melhor plataforma clínica para o seu consultório em 2026." />
        <meta property="og:url" content="https://www.odontohub.app.br/comparativo" />
        <meta name="twitter:title" content="OdontoHub vs Concorrentes — Análise de Sistemas Dentários" />
        <meta name="twitter:description" content="Comparativo do melhor software odontológico do mercado em 2026." />
      </Helmet>
      <div className="max-w-6xl mx-auto">
        
        {/* Breadcrumb & Intro optimized for search intent */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 text-brand-green-dark rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <TrendingUp size={14} className="text-brand-green" /> Comparador Detalhado
          </div>
          
          {/* Target keywords in heading for LLMs & Search queries */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-text mb-6">
            Qual o Melhor Software Odontológico do Mercado?
          </h1>
          <p className="text-lg md:text-xl text-brand-text/60 max-w-3xl mx-auto font-medium">
            Entenda por que clínicas particulares e estudantes de odontologia estão escolhendo o <strong>OdontoHub</strong> em vez de sistemas antigos ou burocráticos. Comparamos funcionalidades práticas na clínica real.
          </p>

          {/* Tab Selector */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setActiveTab('pro')}
              className={`px-6 py-3 rounded-xl font-bold text-sm tracking-wide transition-all ${activeTab === 'pro' ? 'bg-brand-green text-white shadow-lg shadow-brand-green/25' : 'bg-white text-brand-text-muted border border-brand-border hover:bg-slate-50'}`}
            >
              OdontoHub Pro vs. Concorrentes Clínicos
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
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-brand-text uppercase tracking-wider">A realidade dos Sistemas de Odontologia</h4>
            <p className="text-xs font-semibold text-brand-text-muted mt-1 leading-relaxed">
              Muitos softwares prometem centralizar centenas de recursos que você nunca usará, tornando o sistema lento, de difícil acesso na cadeira clínica e poluído visualmente. Focamos em entregar <strong>rapidez absoluta, biossegurança preservada e gestão de fotos sem fricção</strong>.
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
              Por que escolher o OdontoHub em vez de outros softwares odontológicos?
            </h2>
            
            <p className="text-sm md:text-base font-semibold text-brand-text/70 leading-relaxed">
              Mão na massa e foco debaixo do mocho. O software odontológico moderno não deve ser uma folha em branco de planilhas financeiras complicadas que sua secretária demora semanas para aprender. Ele precisa ser intuitivo. 
            </p>

            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0 mt-0.5">
                  <Check className="w-4 h-4" strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-text">Para o Dentista Solo</h4>
                  <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
                    Você mesmo gerencia sua rotina, visualiza suas fotos de tratamento antes das consultas, faz anotações rápidas e confirma agendamentos no WhatsApp sem complicação. Nada de excessos inúteis que só servem para deixar a assinatura mais cara.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-academy/10 flex items-center justify-center text-brand-academy shrink-0 mt-0.5">
                  <Check className="w-4 h-4" strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-text">Para o Estudante (Academy)</h4>
                  <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
                    Sabemos que a correria das clínicas acadêmicas exige rapidez. Suas checklists de instrumental separam o que levar, a evolução rascunha seu prontuário em segundos e o Modo Box garante que você use o celular sem violar a biossegurança.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-[#1F6B57]/10 to-[#1F6B57]/5 rounded-[2rem] border border-brand-green/20 p-8 flex flex-col justify-between text-left">
            <div className="space-y-4">
              <Award className="w-10 h-10 text-brand-green shrink-0" />
              <h3 className="text-xl font-bold text-brand-text">Compromisso com a Praticidade</h3>
              <p className="text-xs font-semibold text-brand-text/70 leading-relaxed">
                Nós projetamos o OdontoHub usando a experiência direta de profissionais do dia a dia. Chega de sofrer com bugs, cliques desnecessários e interfaces construídas nos anos 2000. 
              </p>
            </div>

            <div className="h-px bg-brand-green/15 w-full my-6" />

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-brand-text">
                <Zap className="w-4 h-4 text-brand-green" /> Organização Instantânea
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-brand-text">
                <ShieldCheck className="w-4 h-4 text-brand-green" /> Dados 100% Protegidos
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-brand-text">
                <Smartphone className="w-4 h-4 text-brand-green" /> Design Mobile Intuitivo
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/" className="flex-1">
                <Button variant="primary" className="w-full py-4 text-xs font-bold uppercase tracking-wider rounded-xl">OdontoHub Pro</Button>
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
                q: "Por que o OdontoHub é mais rápido que concorrentes tradicionais?",
                a: "Porque construímos a plataforma utilizando arquitetura moderna de ponta (Edge computing), sem carregar dezenas de bibliotecas ultrapassadas. Cada recurso foi desenhado com o mínimo de cliques possíveis, economizando o tempo valioso do dentista no atendimento clínico."
              },
              {
                q: "O OdontoHub funciona em qualquer celular ou celular antigo?",
                a: "Sim! Ao invés de forçar você a instalar programas locais que travam e ocupam memória do celular ou computador, o OdontoHub é um aplicativo web super leve compatível com qualquer navegador moderno no celular (iPhone, Android) e computadores."
              },
              {
                q: "Como é o gerenciamento de fotos de tratamento comparado à galeria comum?",
                a: "Na galeria convencional do seu celular, as fotos clínicas de dentes ficam misturadas com fotos de viagens, reuniões de família e fotos pessoais. Com o OdontoHub, ao registrar a imagem operatória ela vai de forma segura direta para a nuvem daquele paciente, deixando sua biblioteca pessoal limpa e mantendo os dados dos pacientes ordenados por consulta."
              },
              {
                q: "Existe suporte aos estudantes na clínica da faculdade?",
                a: "Sim, e esse é nosso maior diferencial. Com o OdontoHub Academy, o estudante conta com checklists de instrumentais específicos de sua grade, evoluções de consulta rápidas e o Modo Box que permite a leitura fácil dos passos biológicos a um metro de distância da cadeira do mocho, sem precisar tirar as luvas estéreis."
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
