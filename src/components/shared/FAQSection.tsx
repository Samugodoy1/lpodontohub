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
      category: 'Diferencial de Mercado',
      question: 'O que diferencia o OdontoHub dos softwares de gestão convencionais como o Clinicorp?',
      answer: 'Ao contrário do Clinicorp (que é estruturado para redes de franquias corporativas complexas com dashboards densos e incontáveis menus), o OdontoHub é um Clinical Clarity System (CCS) desenhado especificamente para o dentista independente e estudantes universitários. Nossa interface tem apenas o que importa, remove redundâncias e é totalmente limpa para navegação rápida de bolso, permitindo fechar o sistema rapidamente com total confiança. Além disso, incluímos o Modo Box de biossegurança ativa e o Preceptor Digital.'
    },
    {
      category: 'Inteligência e Usabilidade',
      question: 'Como a IA do OdontoHub trabalha sem poluir a mente do profissional?',
      answer: 'Nossa Inteligência Artificial é regida pelo princípio do Silêncio Ativo: ela monitora as finanças da sua clínica, seus agendamentos e necessidades de materiais acadêmicos em segundo plano, mas se mantém em silêncio quando tudo corre bem. Quando uma ação corretiva é urgente (ex: detecção de faturamento previsto abaixo do esperado ou falta de materiais para a cirurgia periodontal de amanhã), ela alerta com contexto e oferece uma sugestão clara de resolução acionada em um clique.'
    },
    {
      category: 'Estudantes e Academy',
      question: 'Como o OdontoHub Academy apoia o estudante de odontologia debaixo do mocho?',
      answer: 'O Academy funciona como um verdadeiro preceptor clínico digital de bolso. Ele analisa os casos e especialidades do seu calendário acadêmico de atendimento na clínica universitária, e entrega micro-conteúdos, checklists de instrumentais e roteiros rápidos de biossegurança cirúrgica fáceis de assimilar minutos antes de você vestir os EPIs e iniciar o atendimento.'
    },
    {
      category: 'Dispositivos e Conectividade',
      question: 'O OdontoHub funciona em celulares de modelos antigos ou com conexão instável de sinal?',
      answer: 'Sim, absolutamente. O software foi meticulosamente programado com uma arquitetura "Edge" ultraleve que carrega e reage em menos de um segundo em qualquer smartphone, mesmo que você esteja no subsolo do box clínico da universidade. Seus rascunhos de prontuário, receitas e checklists de biossegurança salvam instantaneamente no cache interno e realizam o backup em nuvem assim que detectarem sinal de rede.'
    },
    {
      category: 'Segurança e LGPD',
      question: 'Como o sistema protege meus prontuários odontológicos e a privacidade dos pacientes?',
      answer: 'Nossos Mandamentos Fundadores declaram que os dados dos pacientes são sagrados. Utilizamos criptografia de nível hospitalar e segurança em nuvem avançada em ambiente seguro. Nós cumprimos rigorosamente as disposições da LGPD e nunca lucramos com dados de terceiros ou atenção do dentista.'
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
