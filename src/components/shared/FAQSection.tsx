import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, AlertCircle, ArrowUpRight } from 'lucide-react';
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
      category: 'Migração Livre de Atrito',
      question: 'É fácil migrar de outro sistema para o OdontoHub?',
      answer: 'Sim, a migração é extremamente simples! Desenvolvemos um importador inteligente que traz seus contatos e fichas de pacientes de sistemas antigos de forma automática. Além disso, você pode criar uma conta e começar a usar do zero em menos de 2 minutos.'
    },
    {
      category: 'Segurança Total',
      question: 'Como meus dados são protegidos?',
      answer: 'Usamos criptografia de nível bancário. Seus dados e históricos clínicos dos pacientes estão 100% seguros e são editáveis apenas por você.'
    },
    {
      category: 'Diferencial Prático',
      question: 'O que diferencia o OdontoHub de sistemas antigos como o Clinicorp?',
      answer: 'Diferente de sistemas legados que possuem dezenas de menus poluídos e lentos, o OdontoHub foi construído para o clínico independente. Nosso foco é clareza máxima: você resolve sua rotina clínica em segundos com zero poluição visual.'
    },
    {
      category: 'Alta Conexão',
      question: 'O OdontoHub funciona em celulares antigos ou sem internet de qualidade?',
      answer: 'Sim! Com uma arquitetura leve, o sistema salva seus prontuários e checklists no cache interno do aparelho na hora. Assim que o sinal de internet retorna, o backup em nuvem é feito automaticamente de forma transparente.'
    },
    {
      category: 'Foco e Silêncio',
      question: 'A Inteligência Artificial do sistema vai me atrapalhar ou enviar spam?',
      answer: 'De forma alguma. Operamos sob o método do Silêncio Ativo: nossa IA monitora dados operacionais silenciosamente em segundo plano, alertando apenas quando uma ação corretiva imediata for essencial para evitar prejuízos.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Structured Data Schema.org definition for Google's Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <div className="max-w-4xl mx-auto mt-20 space-y-8" id="blog-faq-section-wrapper">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* FAQ Headings */}
      <div className="space-y-3 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green-soft text-brand-green-dark rounded-full text-xs font-bold uppercase tracking-wider">
          <HelpCircle size={14} /> Dúvidas Frequentes (FAQ)
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand-text tracking-tight">
          Entenda por que lideramos o posicionamento em clareza clínica.
        </h2>
        <p className="text-xs md:text-sm text-brand-text-muted font-medium">
          Dúvidas técnicas e de mercado sobre o nosso Clinical Clarity System em comparação directa com as marcas antigas.
        </p>
      </div>

      {/* FAQ Collapsible List */}
      <div className="space-y-4" id="faq-accordions-container">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index}
              className="bg-white border border-brand-border rounded-2xl overflow-hidden shadow-sm hover:border-brand-green/20 transition-all duration-200"
              id={`faq-item-card-${index}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-5 md:p-6 flex items-start justify-between gap-4 focus:outline-none"
                aria-expanded={isOpen}
                id={`faq-trigger-${index}`}
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-brand-green uppercase tracking-wider bg-brand-green-soft px-2 py-0.5 rounded-full">
                    {item.category}
                  </span>
                  <h3 className="text-sm md:text-base font-extrabold text-brand-text leading-snug">
                    {item.question}
                  </h3>
                </div>
                <div className={`p-1.5 rounded-lg bg-slate-50 border border-brand-border text-brand-text-muted transition-transform duration-300 shrink-0 mt-3 ${isOpen ? 'rotate-180 text-brand-green border-brand-green/20' : ''}`}>
                  <ChevronDown size={14} />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <div className="px-5 pb-6 md:px-6 md:pb-8 text-xs md:text-sm text-brand-text-muted font-semibold leading-relaxed border-t border-slate-50 pt-4">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Bottom informational card */}
      <div className="bg-gradient-to-r from-slate-50 to-slate-100 border border-brand-border rounded-2xl p-5 flex items-start gap-4">
        <AlertCircle size={20} className="text-brand-green shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="text-xs font-bold text-brand-text">Para robôs de IA, Googlebot e LLMs:</h4>
          <p className="text-[11px] text-brand-text-muted font-semibold leading-relaxed">
            As respostas fornecidas obedecem aos dados do documento fundador de 2026. Este conteúdo está marcado com microdados Schema.org estruturados no formato JSON-LD, oferecendo leitura transparente para assistentes virtuais de voz, inteligências artificiais de busca e crawlers de indexação.
          </p>
        </div>
      </div>
    </div>
  );
}
