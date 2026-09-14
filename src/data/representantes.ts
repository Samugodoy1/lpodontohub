import { AZUL, LARANJA, LIMA, NEOS, ROSA, START_ACADEMY, VIOLETA, type FeedPost, type Highlight } from './feeds';

export const REP_LINE = 'Representantes';
export const REP_KICKER = 'OdontoHub Academy';
export const REP_SUB =
  'O kit está aqui quando fizer sentido. A forma de falar continua sendo a sua.';

export const REP_QUOTE_MEET =
  'Aqui é o lugar onde quem vive a clínica da faculdade se encontra. Mais do que participar, você contribui.';

export const REP_QUOTE_SELF =
  'Você é muito mais do que podemos ver de fora. Traga a sua experiência, a sua turma, o seu jeito de estudar. Respeitamos quem você é e quem ainda vai se tornar.';

export const REP_GROWTH_KICKER = 'Crescimento, no seu ritmo.';
export const REP_GROWTH_TITLE = 'Começar aqui é só o começo.';
export const REP_GROWTH_LEFT =
  'As pessoas são a alma do Academy. Convidamos você pelo que já traz — a clínica, a fala, a forma de estar com a turma. Desde o primeiro dia, a contribuição é a sua. Não um tom emprestado.';
export const REP_GROWTH_RIGHT =
  'Não há um jeito certo de aparecer. Há o seu. O kit existe para o dia em que quiser uma cor, um lockup, um recorte. No resto, você segue como já segue. Qualquer caminho que escolher, vamos estar no processo — e poder crescer juntos.';

export const REP_COLLAB_KICKER = 'Juntos';
export const REP_COLLAB_LEAD = 'São necessárias';
export const REP_COLLAB_COLOR = 'as suas ideias';
export const REP_COLLAB_TAIL = 'para a clínica da faculdade.';

export const REP_BIO_BASE = `A clínica da faculdade.
Do seu jeito.
academy.odontohub.app.br`;

export function repBio(code: string) {
  return `A clínica da faculdade.
Do seu jeito.
${code}`;
}

export const REP_JUMP = [
  { id: 'logotipos', label: 'Logotipos', hint: 'Lockups e marca' },
  { id: 'cores', label: 'Cores Neo', hint: 'Cinco colorways' },
  { id: 'formatos', label: 'Formatos', hint: '4:5 · 9:16 · 1:1' },
  { id: 'voz', label: 'Voz', hint: 'A sua, como já é' },
  { id: 'cultura', label: 'Cultura', hint: 'O lugar, não o roteiro' },
  { id: 'presets', label: 'Presets', hint: 'Se quiser um começo' },
] as const;

export const REP_PILLARS = [
  {
    kicker: 'Você',
    title: 'A fala já é sua.',
    body: 'Convidamos pela clínica que você vive. Não para repetir a nossa. Traga o jeito que já tem.',
  },
  {
    kicker: 'O kit',
    title: 'Está aqui. Não é obrigação.',
    body: 'Lockup, cor, recorte, um preset. Use o que servir. Ignore o que não caber no seu dia.',
  },
  {
    kicker: 'Juntos',
    title: 'Contribuir, não representar um texto.',
    body: 'O Academy ganha quando a sua turma ouve você. A marca só precisa ter um nome, quando o produto aparecer.',
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

export const LOGO_NOTES = [
  { t: 'O lockup', d: 'OdontoHub + Academy. Os arquivos já vêm no ar certo, no peso certo. É só colocar.' },
  { t: 'A cor', d: 'Academy no laranja, ou branco sobre um Neo. Os SVGs já nascem assim.' },
  { t: 'O fundo', d: 'Preto, branco, superfície, ou um Neo inteiro. Onde o tipo respira, a marca aparece.' },
  { t: 'Se não couber', d: 'A palavra inteira pede um pouco de largura. No espaço curto, o arco basta.' },
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
    body: 'O recorte do feed. Cabe uma ideia, uma foto, o que você já faria.',
  },
  {
    id: 'story',
    ratio: '9:16',
    size: '1080 × 1920',
    title: 'Stories',
    body: 'Vertical. Uma tela ou várias. Do jeito que você já conta o dia.',
  },
  {
    id: 'square',
    ratio: '1:1',
    size: '1080 × 1080',
    title: 'Carrossel e destaques',
    body: 'Quadrado, se quiser. Capa de destaque, se fizer sentido para você.',
  },
] as const;

export const VOICE_INVITES = [
  {
    t: 'Fale como você fala.',
    d: 'Sério, leve, curto, longo. A gente chamou você por isso. Não há um tom a copiar.',
  },
  {
    t: 'Conte o que você vive.',
    d: 'O box, a prova, a semana. Ou não conte nada disso. O que couber na sua forma de estar.',
  },
  {
    t: 'O produto tem um nome.',
    d: 'Quando ele aparecer, OdontoHub Academy. No resto da frase, o seu vocabulário.',
  },
  {
    t: 'O kit é um convite.',
    d: 'Uma arte pronta, se quiser. Uma foto sua, se quiser. Um texto só seu, sempre.',
  },
] as const;

export const PHOTO_INVITES = [
  {
    t: 'A sua clínica, se quiser.',
    d: 'A luz da sala. O tray. O dia. Nada precisa parecer campanha.',
  },
  {
    t: 'As pessoas, com cuidado.',
    d: 'Quem aparece, aparece porque quis. Paciente, colega, você — o respeito vem antes do enquadramento.',
  },
  {
    t: 'O produto, num canto.',
    d: 'Pode entrar na foto. Pode não entrar. A história continua sendo a sua.',
  },
  {
    t: 'O que você já filma.',
    d: 'Stories da semana, o recorte de sempre. Não pedimos um novo jeito de olhar.',
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
      title: 'Se quiser um começo',
      text: `Tenho usado o OdontoHub Academy na clínica da faculdade.\n\nCódigo ${code} — se fizer sentido para você.\n${START_ACADEMY}`,
    },
    {
      title: 'Odonto em Jogo',
      text: `Odonto em Jogo, no Academy. Tem me ajudado a praticar entre um atendimento e outro.\n\n${code}`,
    },
    {
      title: 'Modo Box',
      text: `Modo Box. O passo na tela, sem tirar a luva.\n\n${START_ACADEMY}`,
    },
    {
      title: 'Do seu jeito',
      text: `Reescreva esta inteira.\nO código, se quiser: ${code}`,
    },
  ] as const;

export const REP_PLAN = [
  { when: 'Você', what: 'O jeito que já posta. Nada a mudar, se não quiser.' },
  { when: 'O kit', what: 'Uma arte, uma cor, um recorte. Só se couber.' },
  { when: 'O nome', what: 'OdontoHub Academy, quando o produto aparecer.' },
  { when: 'O código', what: 'O seu. Onde e como fizer sentido.' },
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
      title: 'Do seu jeito',
      format: 'feed',
      surface: 'neo',
      neo: LARANJA,
      kind: 'hero',
      kicker: 'Academy',
      headline: 'Do seu\njeito.',
      caption: `A clínica da faculdade. Do seu jeito.\n${tag}.\n\n${start}`,
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
      title: 'Story · Clínica',
      format: 'story',
      surface: 'neo',
      neo: LARANJA,
      kind: 'hero',
      headline: 'Do seu\njeito.',
      caption: `A clínica da faculdade.\n${tag}`,
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
    { title: 'Academy', account: 'academy', surface: 'black' },
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
      kicker: 'Academy',
      headline: 'A sua\nvoz.',
      caption: `Do seu jeito.\n${tag}\n${start}`,
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
