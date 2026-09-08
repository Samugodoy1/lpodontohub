export const START_PRO = 'https://sistema.odontohub.app.br';
export const START_ACADEMY = 'https://academy.odontohub.app.br';

export const LINE = 'Você atende.';
export const CLOSER = 'Isso é OdontoHub.';

export type Shot = {
  id: string;
  at: string;
  dur: number;
  src: string | null;
  title: string;
  picture: string;
  sound: string;
};

export const FILM: Shot[] = [
  {
    id: 'cadeira',
    at: '00:00',
    dur: 7000,
    src: '/campaign/campaign-hero-chair.png',
    title: 'A cadeira.',
    picture: 'Consultório vazio. 7:12. A luz entra pelo vidro fosco. A cadeira no centro. Um telefone virado no balcão, pequeno demais para o plano.',
    sound: 'Room tone de clínica às sete da manhã. Um compressor distante. Nada de música.',
  },
  {
    id: 'manha',
    at: '00:07',
    dur: 7000,
    src: '/campaign/campaign-morning.png',
    title: 'Ele chega.',
    picture: 'O paletó sai da mochila. Ele não olha o computador. Não olha o telefone. A cadeira espera.',
    sound: 'Chave na fechadura. Tecido. Um passo no piso frio.',
  },
  {
    id: 'aviso',
    at: '00:14',
    dur: 6000,
    src: '/campaign/campaign-phone-counter.png',
    title: 'Um aviso.',
    picture: 'O telefone acende uma vez, de lado. A tela é só um clarão. Não lemos o que está escrito.',
    sound: 'Uma vibração. Uma. Depois, nada.',
  },
  {
    id: 'maos',
    at: '00:20',
    dur: 8000,
    src: '/campaign/campaign-hands.png',
    title: 'O trabalho.',
    picture: 'Luvas. O espelho. A boca. Ninguém olha para a câmera. Ninguém precisa.',
    sound: 'Aspirador baixo. Metal curto. Respiração do paciente.',
  },
  {
    id: 'box',
    at: '00:28',
    dur: 7000,
    src: '/campaign/campaign-box.png',
    title: 'O passo.',
    picture: 'Clínica da faculdade. O celular no tabuleiro, letras grandes, ilegíveis para nós. Ela olha o paciente. Não toca a tela.',
    sound: 'Fluorescente. Uma voz no corredor. O clique de uma bandeja.',
  },
  {
    id: 'corredor',
    at: '00:35',
    dur: 5000,
    src: '/campaign/campaign-corridor.png',
    title: 'Depois.',
    picture: 'O corredor da faculdade, vazio. Luvas no carrinho. O telefone de bruços.',
    sound: 'Passos se afastando. A lâmpada.',
  },
  {
    id: 'noite',
    at: '00:40',
    dur: 8000,
    src: '/campaign/campaign-night.png',
    title: 'Uma pergunta.',
    picture: 'A cama. A tela. Ele responde uma. A tela apaga. Dorme.',
    sound: 'O chiado fino de um alto-falante em 2%. Depois, o quarto.',
  },
  {
    id: 'fim',
    at: '00:48',
    dur: 12000,
    src: null,
    title: LINE,
    picture: 'Preto. A linha. O nome.',
    sound: 'Silêncio digital. Quatro segundos. Nenhum piano.',
  },
];

export const MANIFESTO = [
  'Não é para quem quer mais tela.',
  'É para quem quer a cadeira.',
  'De manhã, o sistema abre o dia. Mostra os dois que ainda não confirmaram. Some.',
  'No box, o passo está a um metro. Sem tirar a luva.',
  'De noite, uma pergunta. Amanhã, a clínica.',
];

export type Chapter = {
  id: string;
  kicker: string;
  title: string;
  runtime: string;
  still: string;
  story: string;
  picture: string[];
  line: string;
  sub: string;
  href: string;
  hrefLabel: string;
};

export const CHAPTERS: Chapter[] = [
  {
    id: 'consultorio',
    kicker: 'OdontoHub · 15s',
    title: 'Consultório.',
    runtime: '15 segundos',
    still: '/campaign/campaign-morning.png',
    story: '/campaign/campaign-story-chair.png',
    picture: [
      'Ele tranca a porta. O paletó.',
      'O telefone, de bruços, acende uma vez.',
      'Seis confirmados. Dois ainda não.',
      'Ele vira o telefone. Senta.',
    ],
    line: 'Dois ainda não confirmaram.',
    sub: 'Você já sabe.',
    href: START_PRO,
    hrefLabel: 'Começar',
  },
  {
    id: 'box',
    kicker: 'Academy · 15s',
    title: 'Box.',
    runtime: '15 segundos',
    still: '/campaign/campaign-box.png',
    story: '/campaign/campaign-story-box.png',
    picture: [
      'Luvas. O celular no tabuleiro.',
      'Sindesmotomia. Letras a um metro.',
      'Ela não toca. Olha o paciente.',
      'O passo seguinte já está lá.',
    ],
    line: 'O passo, a um metro.',
    sub: 'Sem tirar a luva.',
    href: START_ACADEMY,
    hrefLabel: 'Começar',
  },
  {
    id: 'noite',
    kicker: 'Odonto em Jogo · 15s',
    title: 'Noite.',
    runtime: '15 segundos',
    still: '/campaign/campaign-night.png',
    story: '/campaign/campaign-story-night.png',
    picture: [
      'A cama. Uma pergunta de radiologia.',
      'Ele responde. A tela apaga.',
      'De manhã, o mesmo caso. No box.',
      'A mão não treme.',
    ],
    line: 'Antes de dormir, uma pergunta.',
    sub: 'Amanhã, a clínica.',
    href: START_ACADEMY,
    hrefLabel: 'Jogar',
  },
];

export type CampaignPost = {
  id: string;
  title: string;
  format: 'feed' | 'square' | 'story';
  surface: 'black' | 'white' | 'photo';
  photo?: string;
  photoTone?: 'light' | 'dark';
  kicker?: string;
  headline: string;
  sub?: string;
  caption: string;
  cta?: string;
  align?: 'end' | 'center' | 'start';
};

export const FEED: CampaignPost[] = [
  {
    id: 'feed-line',
    title: 'A linha',
    format: 'feed',
    surface: 'black',
    headline: 'Você atende.',
    caption: 'Você atende.\n\nOdontoHub',
    align: 'center',
  },
  {
    id: 'feed-chair',
    title: 'A cadeira',
    format: 'feed',
    surface: 'photo',
    photo: '/campaign/campaign-hero-chair.png',
    photoTone: 'light',
    headline: 'Você atende.',
    caption: 'A cadeira é o único lugar que importa.\n\nVocê atende. Isso é OdontoHub.',
    align: 'end',
  },
  {
    id: 'feed-hands',
    title: 'As mãos',
    format: 'feed',
    surface: 'photo',
    photo: '/campaign/campaign-feed-hands.png',
    photoTone: 'dark',
    headline: 'O sistema some.',
    sub: 'A cadeira fica.',
    caption: 'O sistema some. A cadeira fica.\n\nOdontoHub',
    align: 'end',
  },
  {
    id: 'feed-two',
    title: 'Os dois',
    format: 'feed',
    surface: 'photo',
    photo: '/campaign/campaign-morning.png',
    photoTone: 'light',
    kicker: '7:12',
    headline: 'Dois ainda não\nconfirmaram.',
    caption: 'Dois ainda não confirmaram. Você já sabe.\n\nsistema.odontohub.app.br',
    align: 'end',
  },
  {
    id: 'feed-step',
    title: 'O passo',
    format: 'feed',
    surface: 'photo',
    photo: '/campaign/campaign-box.png',
    photoTone: 'light',
    kicker: 'Academy',
    headline: 'O passo,\na um metro.',
    caption: 'O passo, a um metro. Sem tirar a luva.\n\nAcademy — academy.odontohub.app.br',
    align: 'end',
  },
  {
    id: 'feed-five',
    title: 'Cinco minutos',
    format: 'feed',
    surface: 'photo',
    photo: '/campaign/campaign-feed-night.png',
    photoTone: 'dark',
    headline: 'Cinco minutos.',
    sub: 'A matéria fica.',
    caption: 'Antes de dormir, uma pergunta. Amanhã, a clínica.\n\nOdonto em Jogo — academy.odontohub.app.br',
    align: 'end',
  },
  {
    id: 'feed-closer',
    title: 'O fecho',
    format: 'feed',
    surface: 'black',
    headline: 'Isso é OdontoHub.',
    caption: 'Você atende. Isso é OdontoHub.\n\nsistema.odontohub.app.br',
    align: 'center',
  },
  {
    id: 'feed-start',
    title: 'Começar',
    format: 'feed',
    surface: 'white',
    headline: 'Comece pelo\nconsultório.',
    sub: 'Grátis para começar.',
    cta: 'Começar',
    caption: `Comece em ${START_PRO}`,
    align: 'center',
  },
];

export const SQUARES: CampaignPost[] = [
  {
    id: 'sq-1',
    title: 'Carrossel · 1',
    format: 'square',
    surface: 'black',
    headline: 'Você.',
    caption: 'Você.',
    align: 'center',
  },
  {
    id: 'sq-2',
    title: 'Carrossel · 2',
    format: 'square',
    surface: 'photo',
    photo: '/campaign/campaign-square-chair.png',
    photoTone: 'light',
    headline: 'Atende.',
    caption: 'Atende.',
    align: 'end',
  },
  {
    id: 'sq-3',
    title: 'Carrossel · 3',
    format: 'square',
    surface: 'black',
    headline: 'OdontoHub.',
    caption: START_PRO,
    align: 'center',
  },
];

export const STORIES: CampaignPost[] = [
  {
    id: 'st-line',
    title: 'Story · Linha',
    format: 'story',
    surface: 'black',
    headline: 'Você atende.',
    caption: 'Você atende.',
    align: 'center',
  },
  {
    id: 'st-chair',
    title: 'Story · Cadeira',
    format: 'story',
    surface: 'photo',
    photo: '/campaign/campaign-story-chair.png',
    photoTone: 'light',
    headline: 'Você atende.',
    caption: 'A cadeira. Você atende.',
    align: 'end',
  },
  {
    id: 'st-hands',
    title: 'Story · Mãos',
    format: 'story',
    surface: 'photo',
    photo: '/campaign/campaign-feed-hands.png',
    photoTone: 'dark',
    headline: 'O sistema some.',
    caption: 'O sistema some. A cadeira fica.',
    align: 'end',
  },
  {
    id: 'st-box',
    title: 'Story · Box',
    format: 'story',
    surface: 'photo',
    photo: '/campaign/campaign-story-box.png',
    photoTone: 'light',
    headline: 'O passo,\na um metro.',
    caption: 'Sem tirar a luva. Academy.',
    align: 'end',
  },
  {
    id: 'st-night',
    title: 'Story · Noite',
    format: 'story',
    surface: 'photo',
    photo: '/campaign/campaign-story-night.png',
    photoTone: 'dark',
    headline: 'Uma pergunta.',
    sub: 'Amanhã, a clínica.',
    caption: 'Odonto em Jogo. Academy.',
    align: 'end',
  },
  {
    id: 'st-cta',
    title: 'Story · Começar',
    format: 'story',
    surface: 'black',
    headline: 'Comece.',
    cta: 'Começar',
    caption: START_PRO,
    align: 'center',
  },
];

export const PORTRAITS = [
  {
    id: 'pro',
    src: '/campaign/campaign-portrait-pro.png',
    name: 'Dra. Amanda Ferraz',
    role: 'Reabilitação oral',
    quote: 'A gestão ficou quieta. O atendimento ficou inteiro.',
  },
  {
    id: 'academy',
    src: '/campaign/campaign-portrait-academy.png',
    name: 'Samuel, 7º semestre',
    role: 'UNIFOR',
    quote: 'A faculdade já exige o suficiente. O caso, eu levo pronto.',
  },
];

export const LINES = [
  { where: 'Outdoor. Preto. Nada mais.', text: 'Você atende.' },
  { where: 'Fim do filme. 00:58.', text: 'Você atende.\nIsso é OdontoHub.' },
  { where: 'Consultório. 15s.', text: 'Dois ainda não confirmaram.\nVocê já sabe.' },
  { where: 'Academy. 15s.', text: 'O passo, a um metro.\nSem tirar a luva.' },
  { where: 'Odonto em Jogo. 15s.', text: 'Antes de dormir, uma pergunta.\nAmanhã, a clínica.' },
  { where: 'Quando o dia está resolvido.', text: 'Tudo certo para hoje.\nPode fechar.' },
  { where: 'Instagram. Só isso.', text: 'O sistema some.\nA cadeira fica.' },
];

export const SOUND = [
  { t: '00:00', d: 'Room tone de clínica às 7:12. Um compressor, longe. Sem música.' },
  { t: '00:14', d: 'Uma vibração de WhatsApp. Uma. O telefone vira de bruços.' },
  { t: '00:20', d: 'Aspirador. Metal. A respiração de quem está na cadeira.' },
  { t: '00:28', d: 'Fluorescente da faculdade. Uma voz no corredor, que passa.' },
  { t: '00:40', d: 'O chiado fino da tela em 2%. O quarto. A tela apaga.' },
  { t: '00:48', d: 'Silêncio digital. Quatro segundos. Nenhum piano. A linha.' },
];

export const NEVER = [
  'Inovação. Revolucionário. O futuro da odontologia.',
  'Gestão inteligente. Potencialize. Jornada.',
  'Exclamação. Emoji. Sorriso para a câmera.',
  'Lista de funcionalidades no anúncio.',
  'Música no filme, até o último quadro.',
  'O nome do produto antes de 00:58.',
];

export const ALWAYS = [
  'Um período no fim da linha.',
  'Uma hora do dia. Um gesto. Um nome próprio, se houver.',
  'A cadeira, as mãos, o box, a cama. Nunca o dashboard.',
  'Pessoa absorvida no trabalho. Nunca posando com o app.',
  'Preto, branco, a luz que já estava no quarto.',
];
