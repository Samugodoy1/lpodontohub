import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { DarkCTA, START_PRO } from '../components/shared/Apple';

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
      name: 'Interface limpa',
      category: 'Usabilidade',
      description: 'Tempo de carregamento e facilidade de achar o que importa.',
      odontohub: { has: true, detail: 'Carrega em menos de um segundo. Sem banners.' },
      simples: { has: true, detail: 'Amigável, mais lenta em relatórios pesados.' },
      others: { has: false, detail: 'Telas cheias de botões. Lentidão no dia a dia.' },
    },
    {
      name: 'Galeria por paciente',
      category: 'Clínico',
      description: 'Imagens clínicas na nuvem, por caso.',
      odontohub: { has: true, detail: 'Linha do tempo visual. Fora do rolo pessoal.' },
      simples: { has: false, detail: 'Anexo manual. Sem linha do tempo.' },
      others: { has: false, detail: 'Pastas locais no computador da clínica.' },
    },
    {
      name: 'Evolução rápida',
      category: 'Praticidade',
      description: 'Relatórios da sessão com modelos prontos.',
      odontohub: { has: true, detail: 'Modelos por procedimento. Menos de um minuto.' },
      simples: { has: false, detail: 'Editor em branco. Tudo digitado à mão.' },
      others: { has: false, detail: 'Campos isolados, sem estrutura.' },
    },
    {
      name: 'WhatsApp',
      category: 'Agendamento',
      description: 'Confirmar e lembrar sem sair do sistema.',
      odontohub: { has: true, detail: 'Modelos prontos. Um toque.' },
      simples: { has: true, detail: 'Chat interno, muitas vezes à parte.' },
      others: { has: false, detail: 'Celular da secretária. Manual.' },
    },
    {
      name: 'Mobile completo',
      category: 'Tecnologia',
      description: 'O sistema inteiro no telefone.',
      odontohub: { has: true, detail: 'Feito para o bolso do jaleco.' },
      simples: { has: false, detail: 'Mobile limitado ao agendamento.' },
      others: { has: false, detail: 'Só Windows. Instalação local.' },
    },
    {
      name: 'Financeiro do tratamento',
      category: 'Financeiro',
      description: 'Parcelas ligadas ao fluxo clínico.',
      odontohub: { has: true, detail: 'Lançamentos no prontuário.' },
      simples: { has: true, detail: 'Caixa completo, fluxo mais pesado.' },
      others: { has: false, detail: 'Tabelas soltas, sem cruzamento.' },
    },
  ];

  const academyFeatures: CompareFeature[] = [
    {
      name: 'Modo Box',
      category: 'Box',
      description: 'Ler de longe, sem tocar a tela de luvas.',
      odontohub: { has: true, detail: 'Alto contraste. Timer de ácido.' },
      simples: { has: false, detail: 'Menus pequenos. Impróprio para o box.' },
      others: { has: false, detail: 'Feito para clínica particular.' },
    },
    {
      name: 'Checklist de instrumentais',
      category: 'Organização',
      description: 'O que levar, por disciplina.',
      odontohub: { has: true, detail: 'Listas das faculdades brasileiras.' },
      simples: { has: false, detail: 'Sem lista acadêmica.' },
      others: { has: false, detail: 'Sem grade, sem almoxarifado.' },
    },
    {
      name: 'Rascunho de evolução',
      category: 'Preceptor',
      description: 'Texto pronto para assinar no fim da aula.',
      odontohub: { has: true, detail: 'Modelos estruturados.' },
      simples: { has: false, detail: 'Prontuário burocrático.' },
      others: { has: false, detail: 'Exige computador da faculdade.' },
    },
    {
      name: 'Offline',
      category: 'Mobilidade',
      description: 'Anotar quando o Wi-Fi da clínica cai.',
      odontohub: { has: true, detail: 'Local no aparelho. Sincroniza depois.' },
      simples: { has: false, detail: 'Depende da internet o tempo todo.' },
      others: { has: false, detail: 'Servidor no prédio.' },
    },
    {
      name: 'PDF do caso',
      category: 'Estudos',
      description: 'Relatório para seminário.',
      odontohub: { has: true, detail: 'Histórico e fotos em um arquivo.' },
      simples: { has: false, detail: 'Sem relatório acadêmico.' },
      others: { has: false, detail: 'Planilha fria.' },
    },
  ];

  const currentFeatures = activeTab === 'pro' ? proFeatures : academyFeatures;

  return (
    <div className="min-h-screen bg-apple-surface text-apple-ink">
      <Helmet>
        <title>OdontoHub vs outros sistemas odontológicos</title>
        <meta
          name="description"
          content="Compare OdontoHub, Simples Dental e sistemas tradicionais. O que muda na clínica real."
        />
        <link rel="canonical" href="https://www.odontohub.app.br/comparativo" />
      </Helmet>

      <section className="pt-28 md:pt-36 pb-12 px-5 text-center">
        <div className="max-w-[820px] mx-auto">
          <p className="text-[19px] font-semibold tracking-tight mb-3">Comparativo</p>
          <h1 className="apple-display-ink text-[40px] md:text-[64px] mb-5">Compare o OdontoHub.</h1>
          <p className="apple-subhead text-[19px] md:text-[21px] max-w-[540px] mx-auto">
            O que importa na cadeira. Não o que cabe no folder.
          </p>
          <div className="mt-8 inline-flex p-1 rounded-full bg-white">
            <button
              onClick={() => setActiveTab('pro')}
              className={`px-5 py-2 rounded-full text-[14px] transition-colors ${
                activeTab === 'pro' ? 'bg-[#1d1d1f] text-white' : 'text-apple-gray'
              }`}
            >
              Consultório
            </button>
            <button
              onClick={() => setActiveTab('academy')}
              className={`px-5 py-2 rounded-full text-[14px] transition-colors ${
                activeTab === 'academy' ? 'bg-[#1d1d1f] text-white' : 'text-apple-gray'
              }`}
            >
              Academy
            </button>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20">
        <div className="max-w-[980px] mx-auto overflow-x-auto">
          <table className="w-full min-w-[720px] text-left border-collapse">
            <thead>
              <tr className="text-[12px] text-apple-gray border-b border-apple-line">
                <th className="py-4 pr-4 font-normal">Recurso</th>
                <th className="py-4 px-4 font-semibold text-apple-ink text-center">
                  {activeTab === 'pro' ? 'OdontoHub' : 'Academy'}
                </th>
                <th className="py-4 px-4 font-normal text-center">Simples Dental</th>
                <th className="py-4 pl-4 font-normal text-center">Desktop / papel</th>
              </tr>
            </thead>
            <tbody>
              {currentFeatures.map((feat) => (
                <tr key={feat.name} className="border-b border-apple-line align-top">
                  <td className="py-6 pr-4">
                    <p className="text-[12px] text-apple-gray mb-1">{feat.category}</p>
                    <p className="text-[17px] font-semibold tracking-tight">{feat.name}</p>
                    <p className="text-[13px] text-apple-gray mt-1 max-w-[240px]">{feat.description}</p>
                  </td>
                  <td className="py-6 px-4 text-center">
                    <p className="text-[15px] font-semibold mb-1">Sim</p>
                    <p className="text-[13px] text-apple-gray">{feat.odontohub.detail}</p>
                  </td>
                  <td className="py-6 px-4 text-center">
                    <p className="text-[15px] font-semibold mb-1">{feat.simples.has ? 'Parcial' : 'Não'}</p>
                    <p className="text-[13px] text-apple-gray">{feat.simples.detail}</p>
                  </td>
                  <td className="py-6 pl-4 text-center">
                    <p className="text-[15px] font-semibold mb-1">Não</p>
                    <p className="text-[13px] text-apple-gray">{feat.others.detail}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-white px-5 py-24">
        <div className="max-w-[680px] mx-auto">
          <h2 className="apple-display-ink text-[34px] md:text-[48px] mb-8">Por que o OdontoHub.</h2>
          <p className="text-[19px] text-apple-ink leading-relaxed mb-6">
            O software da clínica não deveria ser uma planilha com login. Deveria caber no intervalo entre um paciente e outro.
          </p>
          <p className="text-[17px] text-apple-gray leading-relaxed mb-10">
            Para o dentista solo: agenda, fotos e WhatsApp sem excesso. Para o estudante: checklist, evolução e Modo Box — sem fingir que a faculdade é uma rede de clínicas.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href={START_PRO} className="apple-btn">
              Começar
            </a>
            <Link to="/academy" className="apple-link">
              Ver Academy <span aria-hidden>›</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-apple-surface px-5 py-24">
        <div className="max-w-[680px] mx-auto">
          <h2 className="apple-display-ink text-[34px] md:text-[48px] text-center mb-10">Perguntas frequentes</h2>
          <div className="divide-y divide-apple-line border-y border-apple-line">
            {[
              {
                q: 'Por que o OdontoHub é mais rápido?',
                a: 'Arquitetura leve. Cada tela pergunta só o que fazer em seguida.',
              },
              {
                q: 'Funciona em celular antigo?',
                a: 'Sim. É web. iPhone, Android, qualquer navegador moderno. Sem instalador.',
              },
              {
                q: 'Onde ficam as fotos?',
                a: 'No prontuário do paciente. Não na galeria pessoal.',
              },
              {
                q: 'E o estudante?',
                a: 'Academy: checklists, evoluções e Modo Box. Feito para a clínica da faculdade.',
              },
            ].map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none text-[17px] font-semibold tracking-tight">
                  {faq.q}
                  <span className="text-apple-gray text-[22px] ml-6 group-open:rotate-45 transition-transform leading-none">+</span>
                </summary>
                <p className="pt-3 pr-10 text-[15px] text-apple-gray leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <DarkCTA title="Escolha o essencial." subtitle="Comece grátis. Sem cartão." href={START_PRO} />
    </div>
  );
}
