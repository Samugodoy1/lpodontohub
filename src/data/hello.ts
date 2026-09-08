import { MODELOS_HUB, type Shot } from './brand';
import { START_PRO, type FeedPost, type Highlight } from './feeds';

export const HELLO_LINE = 'Hello OdontoHub.';
export const HELLO_SUB = 'O sistema para o consultório.';
export const HELLO_BIO = `Hello OdontoHub.
O sistema para o consultório.
sistema.odontohub.app.br`;

export const HELLO_PILLARS = [
  {
    kicker: 'Agenda',
    title: 'Ela antecipa. Você atende.',
    body: 'Janelas vazias, retornos, confirmações. O sistema encontra. Você só autoriza.',
  },
  {
    kicker: 'Paciente',
    title: 'A ficha, no lugar certo.',
    body: 'Sem planilha. Sem WhatsApp como prontuário. O paciente entra. O histórico já está.',
  },
  {
    kicker: 'Silêncio',
    title: 'Quando está tudo bem, some.',
    body: 'Sem alerta para parecer útil. Sem gráfico para prender você na tela. Paz é o produto.',
  },
] as const;

export const HELLO_STORY = [
  {
    n: '01',
    t: 'Formou.',
    d: 'A cadeira é sua. Não um ERP. Não uma secretária no primeiro mês. Um sistema que cabe no bolso.',
  },
  {
    n: '02',
    t: 'O dia aparece.',
    d: 'Oito atendimentos. Dois ainda não confirmaram. Você vê isso antes das 9h.',
  },
  {
    n: '03',
    t: 'Você atende.',
    d: 'O resto — lembrete, retorno, ficha — já saiu do caminho. Hello OdontoHub.',
  },
];

export const HELLO_FILM: Shot[] = [
  {
    at: '00:00',
    dur: 2800,
    src: null,
    picture: 'Preto. Uma palavra.',
    beat: 'Hello.',
  },
  {
    at: '00:03',
    dur: 2500,
    src: '/brand/hello-hub.png',
    picture: 'O vidro. A lista do dia. Dois ainda não confirmaram.',
    beat: 'O sistema.',
  },
  {
    at: '00:06',
    dur: 2500,
    src: '/brand/virada-human.png',
    picture: 'O recém-formado. Paletó. A cadeira, pela primeira vez, é dele.',
    beat: 'Formou.',
  },
  {
    at: '00:08',
    dur: 2500,
    src: '/brand/hub-glass.png',
    picture: 'Agenda. Confirmações. O próximo nome, grande.',
    beat: 'Você atende.',
  },
  {
    at: '00:11',
    dur: 2500,
    src: '/brand/presenca.png',
    picture: 'O paciente toca. Confirmado. Sem recepção no meio.',
    beat: 'Confirmado.',
  },
  {
    at: '00:14',
    dur: 4000,
    src: null,
    picture: 'Preto. Hello OdontoHub.',
    beat: HELLO_LINE,
  },
];

export const HELLO_FILM_NOTE =
  '20 segundos. Primeiro contato. Sem ecossistema, sem faculdade. Só o consultório. Referência: Hello. — o Macintosh, 1984, e o iPhone.';

export const HELLO_FEED: FeedPost[] = [
  {
    id: 'hello-01',
    n: '01',
    account: 'app',
    title: 'Hello',
    format: 'feed',
    surface: 'black',
    kind: 'hero',
    headline: 'Hello\nOdontoHub.',
    caption: `${HELLO_LINE}\n${HELLO_SUB}`,
    align: 'center',
  },
  {
    id: 'hello-02',
    n: '02',
    account: 'app',
    title: 'O nome',
    format: 'feed',
    surface: 'white',
    kind: 'hero',
    headline: 'OdontoHub.',
    sub: HELLO_SUB,
    caption: `OdontoHub.\n${HELLO_SUB}\n\nsistema.odontohub.app.br`,
    align: 'center',
  },
  {
    id: 'hello-03',
    n: '03',
    account: 'app',
    title: 'O vidro',
    format: 'feed',
    surface: 'photo',
    photo: '/brand/hello-hub.png',
    photoTone: 'dark',
    kind: 'hero',
    headline: 'O sistema para\no consultório.',
    caption: 'Agenda, confirmações, pacientes. O mínimo. Você atende.',
    align: 'end',
  },
  {
    id: 'hello-04',
    n: '04',
    account: 'app',
    title: 'Você atende',
    format: 'feed',
    surface: 'black',
    kind: 'hero',
    headline: 'Você atende.',
    sub: 'O resto, o sistema resolve.',
    caption: 'Você atende.\nO Hub some quando o dia está resolvido.',
    align: 'center',
  },
  {
    id: 'hello-05',
    n: '05',
    account: 'app',
    title: 'Hoje',
    format: 'feed',
    surface: 'photo',
    photo: '/brand/hub-glass.png',
    photoTone: 'dark',
    kind: 'hero',
    headline: 'Hoje, 8.\nDois ainda não.',
    caption: 'Hoje, 8 atendimentos. Dois ainda não confirmaram.\nVocê vê isso antes das 9h.',
    align: 'end',
  },
  {
    id: 'hello-06',
    n: '06',
    account: 'app',
    title: 'Formou',
    format: 'feed',
    surface: 'photo',
    photo: '/brand/virada-human.png',
    photoTone: 'light',
    kind: 'hero',
    headline: 'A cadeira\né sua.',
    caption: 'Recém-formado. Sem ERP. Sem secretária no primeiro mês.\nHello OdontoHub.',
    align: 'end',
  },
  {
    id: 'hello-07',
    n: '07',
    account: 'app',
    title: 'Silêncio',
    format: 'feed',
    surface: 'surface',
    kind: 'list',
    headline: 'O sistema some.',
    items: ['Sem alerta inútil.', 'Sem gráfico para prender.', 'Paz é o produto.'],
    caption: 'Quando está tudo bem, o OdontoHub permanece em silêncio.',
    align: 'center',
  },
  {
    id: 'hello-08',
    n: '08',
    account: 'app',
    title: 'Confirmado',
    format: 'feed',
    surface: 'photo',
    photo: '/brand/presenca.png',
    photoTone: 'light',
    kind: 'hero',
    headline: 'Confirmado.',
    caption: 'O paciente toca. Você atende. Sem recepção no meio.',
    align: 'end',
  },
  {
    id: 'hello-09',
    n: '09',
    account: 'app',
    title: 'Começar',
    format: 'feed',
    surface: 'blue',
    kind: 'cta',
    headline: 'Comece pelo\nconsultório.',
    cta: 'Começar',
    caption: `Comece em ${START_PRO}`,
    align: 'center',
  },
];

export const HELLO_STORIES: FeedPost[] = [
  {
    id: 'hello-st-01',
    n: '01',
    account: 'app',
    title: 'Story · Hello',
    format: 'story',
    surface: 'black',
    kind: 'hero',
    headline: 'Hello\nOdontoHub.',
    caption: HELLO_LINE,
    align: 'center',
  },
  {
    id: 'hello-st-02',
    n: '02',
    account: 'app',
    title: 'Story · Sistema',
    format: 'story',
    surface: 'photo',
    photo: '/brand/hello-hub.png',
    photoTone: 'dark',
    kind: 'hero',
    headline: 'O sistema.',
    caption: HELLO_SUB,
    align: 'end',
  },
  {
    id: 'hello-st-03',
    n: '03',
    account: 'app',
    title: 'Story · Você atende',
    format: 'story',
    surface: 'black',
    kind: 'hero',
    headline: 'Você atende.',
    caption: 'Você atende.',
    align: 'center',
  },
  {
    id: 'hello-st-04',
    n: '04',
    account: 'app',
    title: 'Story · Começar',
    format: 'story',
    surface: 'blue',
    kind: 'cta',
    headline: 'Comece.',
    cta: 'Começar',
    caption: START_PRO,
    align: 'center',
  },
];

export const HELLO_SQUARES: FeedPost[] = [
  {
    id: 'hello-sq-1',
    n: '01',
    account: 'app',
    title: 'Carrossel · 1',
    format: 'square',
    surface: 'black',
    kind: 'hero',
    headline: 'Hello\nOdontoHub.',
    caption: HELLO_LINE,
    align: 'center',
  },
  {
    id: 'hello-sq-2',
    n: '02',
    account: 'app',
    title: 'Carrossel · 2',
    format: 'square',
    surface: 'white',
    kind: 'hero',
    headline: 'Você atende.',
    caption: HELLO_SUB,
    align: 'center',
  },
  {
    id: 'hello-sq-3',
    n: '03',
    account: 'app',
    title: 'Carrossel · 3',
    format: 'square',
    surface: 'blue',
    kind: 'cta',
    headline: 'Comece.',
    cta: 'Começar',
    caption: START_PRO,
    align: 'center',
  },
];

export const HELLO_HIGHLIGHTS: Highlight[] = [
  { title: 'Hello', account: 'app', surface: 'black' },
  { title: 'Agenda', account: 'app', surface: 'surface' },
  { title: 'Você atende', account: 'app', surface: 'blue' },
  { title: 'Começar', account: 'app', surface: 'black' },
];

export const HELLO_PLAN = [
  { when: 'Antes', what: 'Avatar preto. Bio: Hello OdontoHub.' },
  { when: 'Dia 1', what: '01 Hello OdontoHub. Story Hello.' },
  { when: 'Dia 2', what: '02 O nome. 03 O sistema.' },
  { when: 'Dia 3', what: '04 Você atende. 05 Hoje, 8.' },
  { when: 'Dia 4', what: '06 A cadeira é sua. 07 O sistema some.' },
  { when: 'Dia 5', what: '08 Confirmado. 09 Comece.' },
];

export { MODELOS_HUB as HELLO_MODELOS };
