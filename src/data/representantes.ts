import { AZUL, LARANJA, LIMA, NEOS, ROSA, START_ACADEMY, VIOLETA, type FeedPost, type Highlight } from './feeds';

export const REP_LINE = 'Representantes';
export const REP_KICKER = 'OdontoHub Academy';
export const REP_SUB =
  'Você não está divulgando um app. Você é a voz do Academy na sua faculdade — e parte de uma marca maior.';

export const REP_BIO_BASE = `A clínica da faculdade.
Do seu jeito.
academy.odontohub.app.br`;

export function repBio(code: string) {
  return `Embaixador Academy.
Código ${code}.
${START_ACADEMY.replace('https://', '')}`;
}

export const REP_JUMP = [
  { id: 'logotipos', label: 'Logotipos', hint: 'Lockups e marca' },
  { id: 'cores', label: 'Cores Neo', hint: 'Cinco colorways' },
  { id: 'presets', label: 'Presets', hint: 'Feed, stories, destaques' },
  { id: 'formatos', label: 'Formatos', hint: '4:5 · 9:16 · 1:1' },
  { id: 'voz', label: 'Voz + estilo', hint: 'Como a marca fala' },
  { id: 'diretrizes', label: 'Diretrizes', hint: 'O que vale. O que não.' },
] as const;

export const REP_PILLARS = [
  {
    kicker: 'Pertencer',
    title: 'A marca já está na sua mão.',
    body: 'O mesmo laranja do app. O mesmo tipo. O mesmo silêncio. Quando você posta, a faculdade vê o Academy — não um recorte.',
  },
  {
    kicker: 'Cuidar',
    title: 'Identidade não é enfeite.',
    body: 'Logotipo, cor, formato e frase andam juntos. Um fora do lugar e a marca some. O kit existe para você não improvisar.',
  },
  {
    kicker: 'Falar',
    title: 'A sua voz. A nossa precisão.',
    body: 'Conte a sua clínica. Use as palavras certas. Nunca prometa o que o produto não é. Representar é isso.',
  },
] as const;

export const KIT_LOGOS = [
  { href: '/brand/logo-academy.svg', label: 'Wordmark Academy', note: 'Fundo claro' },
  { href: '/brand/logo-academy-white.svg', label: 'Wordmark Academy branco', note: 'Fundo escuro' },
  { href: '/brand/mark.svg', label: 'Marca', note: 'Ícone, cor corrente' },
  { href: '/brand/mark-black.svg', label: 'Marca preta', note: 'Fundo claro' },
  { href: '/brand/mark-white.svg', label: 'Marca branca', note: 'Fundo escuro' },
  { href: '/brand/logo-odontohub.svg', label: 'Wordmark OdontoHub', note: 'Quando a conversa é a marca-mãe' },
] as const;

export const LOGO_RULES = [
  { t: 'Respiração', d: 'Deixe em volta, no mínimo, a altura da letra O. A marca precisa de ar.' },
  { t: 'Tamanho', d: 'No digital, a palavra Academy não pode ficar menor do que 11 px. Se não cabe, use só a marca.' },
  { t: 'Fundo', d: 'Preto, branco, superfície #f5f5f7, ou um Neo inteiro. Nunca um degradê inventado. Nunca foto ocupada.' },
  { t: 'Cor', d: 'Academy no laranja oficial, ou branco sobre Neo. Não recolorir de verde, dourado, neon.' },
] as const;

export const LOGO_DONT = [
  'Não estique, não incline, não coloque sombra.',
  'Não escreva “Odonto Hub”, “ODONTOHUB ACADEMY” em caixa alta, nem “o Hub da faculdade”.',
  'Não cole a marca sobre foto de procedimento, sangue ou rosto de paciente.',
  'Não misture o azul do Hub com o laranja do Academy no mesmo lockup.',
] as const;

export const COLOR_USES = [
  { id: 'laranja', use: 'A cor da casa. Avatares, CTAs, a primeira impressão.' },
  { id: 'lima', use: 'Ofensiva, acerto, o jogo em movimento.' },
  { id: 'azul', use: 'Clareza. Checklists, Modo Box, o passo seguinte.' },
  { id: 'rosa', use: 'Cuidado. Paciente, presença, o lado humano.' },
  { id: 'violeta', use: 'Estudo. Rounds, a trilha, a noite antes da prova.' },
] as const;

export const FORMATS = [
  {
    id: 'feed',
    ratio: '4:5',
    size: '1080 × 1350',
    title: 'Feed',
    body: 'A peça principal. Tipo grande. Uma ideia. Texto na arte, o mínimo.',
  },
  {
    id: 'story',
    ratio: '9:16',
    size: '1080 × 1920',
    title: 'Stories',
    body: 'Vertical, centro. Uma frase. Sem carrossel de oito telas. Um gesto.',
  },
  {
    id: 'square',
    ratio: '1:1',
    size: '1080 × 1080',
    title: 'Carrossel e destaques',
    body: 'Capa de destaque é um círculo. Carrossel: uma palavra por lâmina.',
  },
] as const;

export const VOICE_DO = [
  {
    t: 'Frases curtas.',
    d: 'Ponto final. Como a marca. “A clínica da faculdade.” Não um parágrafo de anúncio.',
  },
  {
    t: 'A sua rotina.',
    d: 'O box, o checklist, a prova. Você vive isso. A marca empresta o tipo. A história é sua.',
  },
  {
    t: 'O nome certo.',
    d: 'OdontoHub Academy. Na segunda menção, Academy. Nunca “o aplicativo da faculdade”.',
  },
  {
    t: 'Parceria visível.',
    d: '“Embaixador OdontoHub Academy.” Uma linha. Sempre. No story, na bio, no post pago.',
  },
] as const;

export const VOICE_DONT = [
  {
    t: 'Não é prontuário oficial.',
    d: 'Não diga que substitui a ficha da universidade, o sistema da preceptoria, ou o papel do professor.',
  },
  {
    t: 'Não é milagre.',
    d: 'Não prometa nota, aprovação, paciente, ou “passar em prova sem estudar”.',
  },
  {
    t: 'Não é ERP.',
    d: 'Não compare com Clinicorp, Simple Dental, ou “software de gestão”. Academy é a clínica da faculdade.',
  },
  {
    t: 'Não é piada com paciente.',
    d: 'Sem rosto, sem dado, sem caso reconhecível. Biossegurança também é de imagem.',
  },
] as const;

export const SAY_THIS = [
  { bad: 'O melhor software odontológico do Brasil.', good: 'A clínica da faculdade. Do seu jeito.' },
  { bad: 'Gamificação revolucionária para alunos.', good: 'Odonto em Jogo. Uma fase por vez.' },
  { bad: 'Substitua o prontuário da sua faculdade.', good: 'O seu organizador pessoal. A ficha oficial continua na universidade.' },
  { bad: 'Use meu cupom e ganhe desconto agora!!!', good: `Código ${'{código}'}. Grátis para começar.` },
  { bad: 'App da Apple para dentistas.', good: 'OdontoHub Academy. Para a clínica da faculdade.' },
] as const;

export const PHOTO_RULES = [
  {
    t: 'O box, de verdade.',
    d: 'Celular apoiado. Luva visível. Luz da clínica. Sem encenação de stock. O produto entra no quadro pequeno.',
  },
  {
    t: 'Mãos, não rostos.',
    d: 'Paciente nunca identificável. Sem radiografia com nome. Sem crachá de colega sem pedido.',
  },
  {
    t: 'Uma cor por peça.',
    d: 'Se a arte é laranja, a foto não compete. Prefira o wash, o Neo cheio, ou a foto com tipo por cima — nunca os dois gritando.',
  },
  {
    t: 'Sem filtro “odonto”.',
    d: 'Nada de dente 3D genérico, nada de estoque de sorriso. A marca já tem tipo. Deixe ela respirar.',
  },
] as const;

export const SURFACES = [
  {
    id: 'academy',
    kicker: 'Academy',
    title: 'A clínica da faculdade.',
    href: '/academy',
    tone: LARANJA.neo,
  },
  {
    id: 'hub',
    kicker: 'Hub',
    title: 'O consultório, em silêncio.',
    href: '/',
    tone: '#1d1d1f',
  },
  {
    id: 'presenca',
    kicker: 'Presença',
    title: 'O paciente já está aqui.',
    href: '/',
    tone: AZUL.neo,
  },
  {
    id: 'campanhas',
    kicker: 'Campanhas',
    title: 'Olá. A ofensiva. Hello.',
    href: '/presets',
    tone: LIMA.neo,
  },
] as const;

export const CAPTION_BANK = (code: string) =>
  [
    {
      title: 'Apresentação',
      text: `Embaixador OdontoHub Academy.\nA clínica da faculdade. Do seu jeito.\n\nCódigo ${code}\n${START_ACADEMY}`,
    },
    {
      title: 'Odonto em Jogo',
      text: `Odonto em Jogo. Como o Duolingo, para odontologia.\nTema. Situação clínica. XP, vidas, a próxima fase.\n\nCódigo ${code}`,
    },
    {
      title: 'Modo Box',
      text: `Modo Box. O passo, grande o suficiente.\nCelular apoiado. Sem tirar a luva.\n\n${START_ACADEMY}`,
    },
    {
      title: 'Convite',
      text: `Grátis para começar.\nCódigo ${code} — se fizer sentido para a sua clínica da faculdade.\n\n${START_ACADEMY}`,
    },
  ] as const;

export const REP_PLAN = [
  { when: 'Bio', what: 'Embaixador Academy. Código visível. Link na bio.' },
  { when: 'Sempre', what: 'Uma linha de parceria em todo post sobre o produto.' },
  { when: 'Feed', what: 'Uma ideia. Tipo grande. Preset do kit, ou foto do seu box.' },
  { when: 'Stories', what: 'Uma frase. Destaque “Academy” com a capa oficial.' },
  { when: 'Código', what: 'Claro, uma vez. Sem urgência falsa. Sem CAPS.' },
];

export function buildRepPresets(code: string): {
  feed: FeedPost[];
  stories: FeedPost[];
  squares: FeedPost[];
  highlights: Highlight[];
  modelos: FeedPost[];
} {
  const tag = `Código ${code}`;
  const start = START_ACADEMY;

  const feed: FeedPost[] = [
    {
      id: 'rep-01',
      n: '01',
      account: 'academy',
      title: 'Representante',
      format: 'feed',
      surface: 'neo',
      neo: LARANJA,
      kind: 'hero',
      kicker: 'Embaixador',
      headline: 'Representantes.',
      caption: `Embaixador OdontoHub Academy.\n${tag}.\n\n${start}`,
      align: 'center',
    },
    {
      id: 'rep-02',
      n: '02',
      account: 'academy',
      title: 'A clínica',
      format: 'feed',
      surface: 'wash',
      neo: LARANJA,
      kind: 'hero',
      headline: 'A clínica\nda faculdade.',
      sub: 'Do seu jeito.',
      caption: `OdontoHub Academy.\nA clínica da faculdade. Do seu jeito.\n\n${tag}`,
      align: 'center',
    },
    {
      id: 'rep-03',
      n: '03',
      account: 'academy',
      title: 'Odonto em Jogo',
      format: 'feed',
      surface: 'neo',
      neo: VIOLETA,
      kind: 'hero',
      kicker: 'Odonto em Jogo',
      headline: 'Uma fase\npor vez.',
      caption: `Odonto em Jogo.\nComo o Duolingo, para odontologia.\n\n${tag}`,
      align: 'center',
    },
    {
      id: 'rep-04',
      n: '04',
      account: 'academy',
      title: 'Modo Box',
      format: 'feed',
      surface: 'neo',
      neo: AZUL,
      kind: 'hero',
      kicker: 'Modo Box',
      headline: 'O passo,\na um metro.',
      caption: `Modo Box. Celular apoiado. Sem tirar a luva.\n\n${start}`,
      align: 'center',
    },
    {
      id: 'rep-05',
      n: '05',
      account: 'academy',
      title: 'As cores',
      format: 'feed',
      surface: 'wash',
      neo: LARANJA,
      kind: 'colors',
      headline: 'Do seu jeito.',
      sub: 'Laranja. Lima. Azul. Rosa. Violeta.',
      caption: 'Cinco cores. Uma conta. Academy Neo.',
      align: 'center',
    },
    {
      id: 'rep-06',
      n: '06',
      account: 'academy',
      title: 'Começar',
      format: 'feed',
      surface: 'wash',
      neo: LARANJA,
      kind: 'cta',
      headline: 'Grátis\npara começar.',
      cta: 'Começar',
      caption: `Grátis para começar.\n${tag}\n${start}`,
      align: 'center',
    },
  ];

  const stories: FeedPost[] = [
    {
      id: 'rep-st-01',
      n: '01',
      account: 'academy',
      title: 'Story · Representante',
      format: 'story',
      surface: 'neo',
      neo: LARANJA,
      kind: 'hero',
      headline: 'Representantes.',
      caption: `Embaixador OdontoHub Academy.\n${tag}`,
      align: 'center',
    },
    {
      id: 'rep-st-02',
      n: '02',
      account: 'academy',
      title: 'Story · Código',
      format: 'story',
      surface: 'wash',
      neo: LARANJA,
      kind: 'hero',
      kicker: 'Seu código',
      headline: code,
      sub: 'Grátis para começar.',
      caption: `${tag}\n${start}`,
      align: 'center',
    },
    {
      id: 'rep-st-03',
      n: '03',
      account: 'academy',
      title: 'Story · Jogo',
      format: 'story',
      surface: 'neo',
      neo: LIMA,
      kind: 'hero',
      headline: 'Odonto\nem Jogo.',
      caption: 'Uma fase por vez.',
      align: 'center',
    },
    {
      id: 'rep-st-04',
      n: '04',
      account: 'academy',
      title: 'Story · Box',
      format: 'story',
      surface: 'neo',
      neo: AZUL,
      kind: 'hero',
      headline: 'Modo Box.',
      caption: 'O passo, a um metro.',
      align: 'center',
    },
  ];

  const squares: FeedPost[] = [
    {
      id: 'rep-sq-01',
      n: '01',
      account: 'academy',
      title: 'Capa · Academy',
      format: 'square',
      surface: 'wash',
      neo: LARANJA,
      kind: 'hero',
      headline: 'Academy.',
      caption: 'Capa de destaque. Academy.',
      align: 'center',
    },
    {
      id: 'rep-sq-02',
      n: '02',
      account: 'academy',
      title: 'Capa · Código',
      format: 'square',
      surface: 'neo',
      neo: LARANJA,
      kind: 'hero',
      headline: code,
      caption: `${tag}. Uma lâmina.`,
      align: 'center',
    },
    ...NEOS.map((neo, i) => ({
      id: `rep-sq-c-${neo.id}`,
      n: String(i + 3).padStart(2, '0'),
      account: 'academy' as const,
      title: `Cor · ${neo.name}`,
      format: 'square' as const,
      surface: 'neo' as const,
      neo,
      kind: 'hero' as const,
      headline: `${neo.name}.`,
      caption: `${neo.name}. Academy Neo.`,
      align: 'center' as const,
    })),
  ];

  const highlights: Highlight[] = [
    { title: 'Academy', account: 'academy', surface: 'wash', neo: LARANJA },
    { title: 'Código', account: 'academy', surface: 'neo', neo: LARANJA },
    { title: 'Odonto em Jogo', account: 'academy', surface: 'neo', neo: VIOLETA },
    { title: 'Modo Box', account: 'academy', surface: 'neo', neo: AZUL },
    { title: 'Ofensiva', account: 'academy', surface: 'neo', neo: LIMA },
    { title: 'Rosa', account: 'academy', surface: 'neo', neo: ROSA },
  ];

  const modelos: FeedPost[] = [
    {
      id: 'rep-md-01',
      n: '01',
      account: 'academy',
      title: 'Modelo · Parceria',
      format: 'feed',
      surface: 'lock',
      kind: 'hero',
      kicker: 'Parceria',
      headline: 'Embaixador\nAcademy.',
      caption: `Embaixador OdontoHub Academy.\n${tag}\n${start}`,
      align: 'center',
    },
    {
      id: 'rep-md-02',
      n: '02',
      account: 'academy',
      title: 'Modelo · Convite',
      format: 'feed',
      surface: 'neo',
      neo: LARANJA,
      kind: 'cta',
      headline: 'Entra.',
      sub: tag,
      cta: 'Começar',
      caption: `Entra. ${tag}\n${start}`,
      align: 'center',
    },
    {
      id: 'rep-md-03',
      n: '03',
      account: 'academy',
      title: 'Modelo · Lista',
      format: 'feed',
      surface: 'wash',
      neo: LARANJA,
      kind: 'list',
      headline: 'O essencial.',
      items: ['Pacientes da faculdade', 'Checklists', 'Modo Box', 'Odonto em Jogo'],
      caption: 'Pacientes. Checklists. Modo Box. Odonto em Jogo.',
      align: 'start',
    },
  ];

  return { feed, stories, squares, highlights, modelos };
}
