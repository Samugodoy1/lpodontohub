import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  CreditCard, 
  Calendar, 
  User, 
  ChevronRight, 
  HelpCircle,
  Sparkles,
  ClipboardCheck,
  Pause,
  Play,
  RotateCcw
} from 'lucide-react';
import { Button } from '../components/shared/UI';

export default function Confirmation() {
  const [searchParams] = useSearchParams();
  const plan = searchParams.get('plan') || 'pro'; // default to 'pro', can be 'academy'
  const isAcademy = plan === 'academy';
  
  const [countdown, setCountdown] = useState(10);
  const [isPaused, setIsPaused] = useState(false);
  
  // Create randomized realistic receipt info
  const [receiptId] = useState(() => `ODH-${Math.floor(100000 + Math.random() * 900000)}`);
  const [currentDate] = useState(() => {
    const d = new Date();
    return d.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });
  });

  const getPlanDetails = () => {
    switch (plan.toLowerCase()) {
      case 'essencial':
        return {
          name: 'Plano OdontoHub Essencial',
          price: 'R$ 49,90',
          period: 'Mensal',
          targetColor: 'brand-green',
          bgSoft: 'bg-brand-green-soft',
          subText: 'Gestão ideal para consultórios solo em crescimento',
          redirectUrl: 'https://sistema.odontohub.app.br',
          buttonStyle: 'bg-brand-green text-white hover:bg-brand-green/95 shadow-lg shadow-brand-green/25'
        };
      case 'clinico':
        return {
          name: 'Plano OdontoHub Academy Clínico',
          price: 'R$ 12,90',
          period: 'Mensal',
          targetColor: 'brand-academy',
          bgSoft: 'bg-brand-academy-soft',
          subText: 'A organização ideal para as suas clínicas universitárias',
          redirectUrl: 'https://academy.odontohub.app.br',
          buttonStyle: 'bg-brand-academy text-white hover:bg-brand-academy/95 shadow-lg shadow-brand-academy/25'
        };
      case 'academy':
      case 'ilimitado':
         return {
          name: 'Plano OdontoHub Academy Ilimitado',
          price: 'R$ 24,90',
          period: 'Mensal',
          targetColor: 'brand-academy',
          bgSoft: 'bg-brand-academy-soft',
          subText: 'Foco exclusivo na autoconfiança debaixo do mocho',
          redirectUrl: 'https://academy.odontohub.app.br',
          buttonStyle: 'bg-brand-academy text-white hover:bg-brand-academy/95 shadow-lg shadow-brand-academy/25'
        };
      case 'pro':
      default:
        return {
          name: 'Plano OdontoHub Pro Ilimitado',
          price: 'R$ 99,90',
          period: 'Mensal',
          targetColor: 'brand-green',
          bgSoft: 'bg-brand-green-soft',
          subText: 'O sistema definitivo para gestão do seu consultório odonto',
          redirectUrl: 'https://sistema.odontohub.app.br',
          buttonStyle: 'bg-brand-green text-white hover:bg-brand-green/95 shadow-lg shadow-brand-green/25'
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

    const timer = setTimeout(() => {
      setCountdown(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, isPaused, details.redirectUrl]);

  const handleManualRedirect = () => {
    window.location.href = details.redirectUrl;
  };

  return (
    <div className="min-h-screen pt-28 pb-16 sm:pb-24 px-5 bg-[#FAFCFB] flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto" id="checkout-confirmation-container">
        
        {/* Upper Visual Greeting */}
        <div className="text-center mb-8 md:mb-12">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#EAF4F0] mb-4 relative"
          >
            <div className={`absolute inset-0 rounded-full ${isAcademy ? 'bg-brand-academy/10 animate-ping' : 'bg-[#1F6B57]/10 animate-ping'}`} />
            <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white ${isAcademy ? 'bg-brand-academy' : 'bg-brand-green'}`}>
              <Check className="w-8 h-8" strokeWidth={3} />
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-brand-text tracking-tight mb-3"
          >
            Assinatura Confirmada!
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-brand-text-muted max-w-lg mx-auto font-medium"
          >
            Tudo pronto. O seu pagamento foi processado eletronicamente com sucesso e sua conta Premium já pode ser criada.
          </motion.p>
        </div>

        {/* Dynamic Split Layout: Invoice + Registration Portal */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Action Card & Redirection (7cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-7 bg-white rounded-[2rem] border border-brand-border p-6 md:p-10 flex flex-col justify-between premium-shadow"
            id="activation-steps-panel"
          >
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className={`w-5 h-5 ${isAcademy ? 'text-brand-academy' : 'text-brand-green'}`} />
                <span className={`text-xs font-bold uppercase tracking-widest ${isAcademy ? 'text-brand-academy' : 'text-brand-green'}`}>
                  Próximo passo obrigatório
                </span>
              </div>
              
              <h2 className="text-xl md:text-2xl font-bold text-brand-text mb-4">
                Crie suas credenciais para acessar o sistema
              </h2>
              
              <p className="text-sm font-medium text-brand-text/70 mb-8 leading-relaxed">
                Para começar a usar os recursos, você deve ser redirecionado para o nosso ambiente seguro para criar seu e-mail de acesso e senha criptografada.
              </p>

              {/* Steps indicators */}
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5 ${isAcademy ? 'bg-brand-academy-soft text-brand-academy' : 'bg-brand-green-soft text-brand-green'}`}>
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-text">Redirecionamento Seguro</h4>
                    <p className="text-xs font-medium text-brand-text/50">Você será levado ao subdomínio oficial do seu produto odontológico.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5 ${isAcademy ? 'bg-brand-academy-soft text-brand-academy' : 'bg-brand-green-soft text-brand-green'}`}>
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-text">Criação da Conta</h4>
                    <p className="text-xs font-medium text-brand-text/50">Digite o seu melhor e-mail e ative sua assinatura Premium vinculada.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5 ${isAcademy ? 'bg-brand-academy-soft text-brand-academy' : 'bg-brand-green-soft text-brand-green'}`}>
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-text">Uso Ilimitado</h4>
                    <p className="text-xs font-medium text-brand-text/50">Aproveite todo o histórico de consultas, checklists e registros clínicos.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Redirection area */}
            <div className="pt-6 border-t border-brand-border mt-6">
              {/* Countdown counter bar */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-brand-text-muted">Redirecionando em</span>
                  <span className="text-xs font-mono font-bold text-brand-text">
                    {countdown > 0 ? `${countdown}s` : 'Pronto'}
                  </span>
                </div>
                
                {/* Visual smooth progress bar */}
                <div className="w-full bg-[#EAF4F0] h-1.5 rounded-full overflow-hidden mb-3">
                  <motion.div 
                    initial={{ width: "100%" }}
                    animate={{ width: `${(countdown / 10) * 100}%` }}
                    transition={{ ease: "linear", duration: 1 }}
                    className={`h-full ${isAcademy ? 'bg-brand-academy' : 'bg-brand-green'}`}
                  />
                </div>

                {/* Control buttons */}
                <div className="flex items-center gap-4 justify-between">
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setIsPaused(!isPaused)}
                      className="p-1 px-2.5 rounded-lg bg-white border border-brand-border text-brand-text-muted hover:text-brand-text flex items-center gap-1.5 text-[11px] font-bold transition-all transition-colors active:scale-95"
                      title={isPaused ? "Retomar contagem" : "Pausar contagem"}
                      id="btn-toggle-countdown"
                    >
                      {isPaused ? (
                        <>
                          <Play className="w-3 h-3 text-brand-green" /> Retomar
                        </>
                      ) : (
                        <>
                          <Pause className="w-3 h-3 text-yellow-600" /> Pausar
                        </>
                      )}
                    </button>
                    
                    <button 
                      onClick={() => setCountdown(10)}
                      className="p-1 px-2 rounded-lg bg-white border border-brand-border text-brand-text-muted hover:text-brand-text flex items-center gap-1.5 text-[11px] font-bold transition-colors active:scale-95"
                      title="Reiniciar contagem"
                      id="btn-reset-countdown"
                    >
                      <RotateCcw className="w-3 h-3" />
                    </button>
                  </div>

                  <span className="text-[10px] text-brand-text-muted/70 italic font-medium">
                    {isPaused ? 'Contagem pausada' : 'Aguardando redirecionamento...'}
                  </span>
                </div>
              </div>

              {/* Direct Click Call to Action button */}
              <button
                onClick={handleManualRedirect}
                className={`w-full py-4 px-6 rounded-2xl font-bold flex items-center justify-center gap-2 tracking-wide transition-all uppercase text-xs ${details.buttonStyle}`}
                id="btn-confirm-and-register"
              >
                Criar Minha Conta Agora <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Premium Digital Invoice / Receipt Card (5cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="md:col-span-5 flex flex-col justify-between bg-[#FAF9F5] border border-brand-border rounded-[2rem] p-6 md:p-8"
            id="invoice-receipt-panel"
          >
            <div>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-[10px] font-bold text-brand-text-muted uppercase tracking-widest block">Comprovante</span>
                  <h3 className="text-lg font-bold text-brand-text leading-none mt-1">Dados Clínicos</h3>
                </div>
                <div className="px-3 py-1 bg-white border border-brand-border rounded-full text-[9px] font-bold text-[#1F6B57] flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> 100% Seguro
                </div>
              </div>

              {/* Premium Receipt Layout wrapper */}
              <div className="bg-white border border-brand-border rounded-2xl p-5 mb-6 space-y-4 shadow-sm">
                
                {/* Product display */}
                <div className="pb-4 border-b border-dashed border-brand-border">
                  <p className="text-[10px] font-bold text-brand-text-muted uppercase tracking-wider mb-1">Produto Assinado</p>
                  <p className="font-bold text-brand-text text-sm break-words">{details.name}</p>
                  <p className="text-xs font-semibold text-brand-text-muted mt-1">{details.subText}</p>
                </div>

                {/* Specifics list details */}
                <div className="space-y-3 pt-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-brand-text-muted flex items-center gap-1.5">
                      <CreditCard className="w-3.5 h-3.5" /> ID Transação
                    </span>
                    <span className="font-mono text-brand-text font-bold">{receiptId}</span>
                  </div>

                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-brand-text-muted flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" /> Data Geral
                    </span>
                    <span className="text-brand-text font-bold">{currentDate}</span>
                  </div>

                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-brand-text-muted flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" /> Faturamento
                    </span>
                    <span className="text-brand-text font-bold">Cartão ou Pix</span>
                  </div>

                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-brand-text-muted flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5" /> Ciclo de Cobrança
                    </span>
                    <span className="text-brand-text font-bold">{details.period}</span>
                  </div>
                </div>

                {/* Total box block */}
                <div className={`p-3 rounded-xl flex justify-between items-center ${isAcademy ? 'bg-brand-academy-soft/40' : 'bg-brand-green-soft/40'}`}>
                  <span className="text-xs font-bold text-brand-text">Valor Cobrado</span>
                  <span className={`text-lg font-extrabold ${isAcademy ? 'text-brand-academy' : 'text-brand-green'}`}>{details.price}</span>
                </div>
              </div>

              {/* Simple toggles for previewing other plans in same confirmation file */}
              <div className="space-y-2 mt-4 pt-4 border-t border-brand-border">
                <span className="text-[9px] font-bold text-brand-text-muted uppercase tracking-widest block mb-1">Alternar visualização de teste</span>
                <div className="flex gap-2">
                  <button 
                    onClick={() => {
                      const params = new URLSearchParams(window.location.search);
                      params.set('plan', 'pro');
                      window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
                      setCountdown(10);
                    }}
                    className={`flex-1 py-1.5 rounded-lg border text-[10px] font-bold text-center transition-colors ${!isAcademy ? 'bg-brand-green text-white border-brand-green' : 'bg-white text-brand-text-muted border-brand-border hover:bg-slate-50'}`}
                  >
                    OdontoHub Pro
                  </button>
                  <button 
                    onClick={() => {
                      const params = new URLSearchParams(window.location.search);
                      params.set('plan', 'academy');
                      window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
                      setCountdown(10);
                    }}
                    className={`flex-1 py-1.5 rounded-lg border text-[10px] font-bold text-center transition-colors ${isAcademy ? 'bg-brand-academy text-white border-brand-academy' : 'bg-white text-brand-text-muted border-brand-border hover:bg-slate-50'}`}
                  >
                    Academy Student
                  </button>
                </div>
              </div>
            </div>

            {/* Assistance block link */}
            <div className="bg-white border border-brand-border rounded-2xl p-4 mt-6 text-center shadow-sm">
              <p className="text-[11px] font-bold text-brand-text-muted mb-2">Com problemas com o redirecionamento?</p>
              <a 
                href="https://instagram.com/odontohub.app" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1F6B57] hover:underline"
              >
                Falar com suporte no Instagram <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
