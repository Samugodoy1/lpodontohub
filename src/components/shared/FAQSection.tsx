import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      category: 'Migração',
      question: 'É fácil migrar de outro sistema para o OdontoHub?',
      answer: 'Sim. Há um importador para contatos e fichas, e dá para começar do zero em poucos minutos.',
    },
    {
      category: 'Segurança',
      question: 'Como meus dados são protegidos?',
      answer: 'Criptografia, servidores protegidos. Sem anúncios. Sem venda de dados.',
    },
    {
      category: 'Diferença',
      question: 'O que diferencia o OdontoHub de sistemas tradicionais?',
      answer: 'Sistemas antigos acumulam menus. O OdontoHub mostra o que fazer em seguida — e some quando não há o que fazer.',
    },
    {
      category: 'Acesso',
      question: 'Funciona no celular, mesmo com internet fraca?',
      answer: 'Sim. O essencial fica no aparelho e sincroniza quando a conexão volta.',
    },
    {
      category: 'Silêncio',
      question: 'A inteligência artificial vai me interromper?',
      answer: 'Não. Ela observa em silêncio e só avisa quando uma ação realmente importa.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <div className="max-w-[680px] mx-auto mt-16" id="blog-faq-section-wrapper">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <h2 className="apple-display-ink text-[32px] md:text-[40px] text-center mb-8">Perguntas frequentes</h2>

      <div className="divide-y divide-apple-line border-y border-apple-line">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question}>
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full text-left py-5 flex items-center justify-between gap-6"
                aria-expanded={isOpen}
              >
                <span className="text-[17px] font-semibold tracking-tight text-apple-ink">{item.question}</span>
                <span className="text-apple-gray text-[22px] leading-none">{isOpen ? '–' : '+'}</span>
              </button>
              {isOpen && <p className="pb-5 pr-10 text-[15px] text-apple-gray leading-relaxed">{item.answer}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
