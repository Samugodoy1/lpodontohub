export const START_PRO = 'https://sistema.odontohub.app.br';

export type HubPlan = {
  id: 'odontohub' | 'plus';
  name: string;
  monthly: number;
  yearly: number;
  line: string;
  cta: string;
  featured: boolean;
  features: readonly string[];
};

export const HUB_PLANS: HubPlan[] = [
  {
    id: 'odontohub',
    name: 'OdontoHub',
    monthly: 190,
    yearly: 1900,
    line: 'O sistema para o consultório.',
    cta: 'Assinar OdontoHub',
    featured: false,
    features: [
      'Agenda e confirmações',
      'Prontuário e fotos',
      'Pacientes ilimitados',
      'O dia, numa lista',
    ],
  },
  {
    id: 'plus',
    name: 'OdontoHub+',
    monthly: 290,
    yearly: 2900,
    line: 'Inteligência. O dia, resolvido.',
    cta: 'Assinar OdontoHub+',
    featured: true,
    features: [
      'Tudo no OdontoHub',
      'A inteligência que antecipa',
      'Encaixes e retornos',
      'Previsão de caixa',
    ],
  },
];

export const HUB_FROM_MONTHLY = HUB_PLANS[0].monthly;
export const HUB_FROM_YEARLY = HUB_PLANS[0].yearly;

export function brl(value: number): string {
  return value.toLocaleString('pt-BR');
}

export function hubPlanByQuery(plan: string): {
  name: string;
  price: string;
  period: string;
  subText: string;
  redirectUrl: string;
} | null {
  const key = plan.toLowerCase();
  const yearly = key.includes('anual') || key.includes('year');
  const isPlus = key === 'plus' || key === 'pro' || key === 'plus-anual' || key === 'pro-anual';
  const isBase =
    key === 'odontohub' ||
    key === 'essencial' ||
    key === 'odontohub-anual' ||
    key === 'essencial-anual';

  const match = isPlus ? HUB_PLANS[1] : isBase ? HUB_PLANS[0] : null;
  if (!match) return null;

  return {
    name: match.name,
    price: yearly ? `R$ ${brl(match.yearly)}` : `R$ ${brl(match.monthly)}`,
    period: yearly ? 'Anual' : 'Mensal',
    subText: match.line,
    redirectUrl: START_PRO,
  };
}
