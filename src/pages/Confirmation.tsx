import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Confirmation() {
  const [searchParams] = useSearchParams();
  const plan = searchParams.get('plan') || 'pro';
  const isAcademy = plan === 'academy' || plan === 'ilimitado' || plan === 'clinico';

  const [countdown, setCountdown] = useState(10);
  const [isPaused, setIsPaused] = useState(false);

  const [receiptId] = useState(() => `ODH-${Math.floor(100000 + Math.random() * 900000)}`);
  const [currentDate] = useState(() =>
    new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })
  );

  const getPlanDetails = () => {
    switch (plan.toLowerCase()) {
      case 'essencial':
        return {
          name: 'OdontoHub Essencial',
          price: 'R$ 49,90',
          period: 'Mensal',
          subText: 'Para o consultório solo em crescimento',
          redirectUrl: 'https://sistema.odontohub.app.br',
        };
      case 'clinico':
        return {
          name: 'Academy Clínico',
          price: 'R$ 12,90',
          period: 'Mensal',
          subText: 'Para as clínicas da faculdade',
          redirectUrl: 'https://academy.odontohub.app.br',
        };
      case 'academy':
      case 'ilimitado':
        return {
          name: 'Academy Ilimitado',
          price: 'R$ 24,90',
          period: 'Mensal',
          subText: 'Arquivo completo da graduação',
          redirectUrl: 'https://academy.odontohub.app.br',
        };
      case 'pro':
      default:
        return {
          name: 'OdontoHub Pro',
          price: 'R$ 99,90',
          period: 'Mensal',
          subText: 'O consultório, sem ruído',
          redirectUrl: 'https://sistema.odontohub.app.br',
        };
    }
  };

  const details = getPlanDetails();

  useEffect(() => {
    if (countdown <= 0) {
      window.location.href = details.redirectUrl;
      return;
    }
    if (isPaused) return;
    const timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown, isPaused, details.redirectUrl]);

  return (
    <div className="min-h-screen bg-apple-surface text-apple-ink pt-28 pb-20 px-5">
      <div className="max-w-[720px] mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-[19px] font-semibold tracking-tight mb-3">Pronto.</p>
          <h1 className="apple-display-ink text-[40px] md:text-[56px] mb-4">Assinatura confirmada.</h1>
          <p className="apple-subhead text-[19px] max-w-[440px] mx-auto mb-12">
            O pagamento foi processado. Agora é criar o acesso.
          </p>
        </motion.div>

        <div className="rounded-[28px] bg-white p-8 md:p-10 text-left mb-6">
          <p className="text-[12px] text-apple-gray mb-1">Produto</p>
          <p className="text-[24px] font-semibold tracking-tight">{details.name}</p>
          <p className="text-[15px] text-apple-gray mt-1 mb-8">{details.subText}</p>
          <div className="divide-y divide-apple-line text-[15px]">
            <div className="flex justify-between py-3">
              <span className="text-apple-gray">Transação</span>
              <span className="tabular-nums">{receiptId}</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-apple-gray">Data</span>
              <span>{currentDate}</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-apple-gray">Ciclo</span>
              <span>{details.period}</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-apple-gray">Valor</span>
              <span className="font-semibold">{details.price}</span>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] bg-white p-8 md:p-10 text-left">
          <h2 className="text-[21px] font-semibold tracking-tight mb-2">Criar suas credenciais</h2>
          <p className="text-[15px] text-apple-gray mb-6 leading-relaxed">
            Em seguida, o ambiente seguro para e-mail e senha.
            {countdown > 0 ? ` Redirecionando em ${countdown}s.` : ' Redirecionando.'}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button onClick={() => (window.location.href = details.redirectUrl)} className="apple-btn">
              Continuar
            </button>
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="text-[15px] text-[#2997ff] hover:underline"
            >
              {isPaused ? 'Retomar' : 'Pausar'}
            </button>
          </div>
        </div>

        <p className="mt-8 text-[13px] text-apple-gray">
          Problemas?{' '}
          <a href="https://instagram.com/odontohub.app" className="apple-link !text-[13px]" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </p>
      </div>
    </div>
  );
}
