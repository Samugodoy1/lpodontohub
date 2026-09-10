import { type Shot as BrandShot } from './brand';
import { LARANJA, LIMA, START_ACADEMY, type FeedPost, type Highlight } from './feeds';

type Shot = BrandShot & { bg?: string; sub?: string };

export const OFENSIVA_LINE = 'sumiu né.';
export const OFENSIVA_SUB = 'o paciente da faculdade também.';
export const OFENSIVA_BIO = `sumiu né
de volta pro box
${START_ACADEMY.replace('https://', '')}`;

export const OFENSIVA_PLAY = [
  {
    k: 'fala como gente',
    t: 'nina. primeira pessoa. nunca “nós da equipe”.',
    d: 'o duo descobriu isso no brasil: a marca vira um amigo chato. a nina mora na notificação. se a frase puder ir num print de whatsapp, posta. se parecer pitch, apaga.',
  },
  {
    k: 'entra no que já existe',
    t: 'odonter. loira odonto. hb20 branco. box. ofensiva.',
    d: 'não inventa persona de agência. zoa o uniforme que a gente já veste. o carro na frente da faculdade. o jaleco no banco de trás. o paciente que faltou. a gente é isso. não aponta o dedo de fora.',
  },
  {
    k: 'o formato é o meme',
    t: 'print de notificação. não cartaz de marca.',
    d: 'o duo não ganhou o brasil com lockup. ganhou com culpa gostosa, ofensiva zerada e resposta em uma linha. 3 lições. de volta pro box. o resto é trend da semana — um post, no máximo.',
  },
] as const;

export const OFENSIVA_DONT = [
  'falar como o hub. isso aqui não é apple.',
  '“revolucionar a odontologia”, “jornada”, “ecossistema”, “plataforma”.',
  '“e aí odonters 🦷 vamos juntos”.',
  'copiar coruja, vó, sequestro. a nina não é o duo de fantasia.',
  'zoar quem tá duro. hb20 é uniforme, não piada de classe.',
  'post político. nikolas, vorcaro, esse tipo de coisa. a nina não debate.',
  'explicar o produto. se a pessoa riu, ela já entendeu.',
];

export const OFENSIVA_REPLIES = [
  { they: 'impressionante como vocês me humilham e eu continuo', we: 'obrigada. 3 lições.' },
  { they: 'é o app ou o preceptor no corredor', we: 'os dois. um pelo menos deixa você sentar.' },
  { they: 'kkkkkkkkkkkk', we: 'isso não recupera ofensiva.' },
  { they: 'juro que era só hoje', we: 'o paciente da faculdade também falou isso.' },
  { they: 'to no 8º e ainda não sei anestesiar', we: 'então para de farmar stories e abre a trilha.' },
];

export const OFENSIVA_FILM: Shot[] = [
  {
    at: '00:00',
    dur: 2200,
    src: null,
    picture: 'Tela preta. 22:44.',
    beat: '22:44',
    bg: '#0b0c10',
    sub: 'quarta-feira',
  },
  {
    at: '00:02',
    dur: 2800,
    src: null,
    picture: 'Notificação da nina.',
    beat: 'sumiu né.',
    bg: '#111814',
    sub: 'o paciente da faculdade também.',
  },
  {
    at: '00:05',
    dur: 2600,
    src: null,
    picture: 'Segunda notificação.',
    beat: 'sua ofensiva: 0',
    bg: '#0b0c10',
    sub: 'o hb20: brilhando.',
  },
  {
    at: '00:08',
    dur: 3000,
    src: null,
    picture: 'Cartaz laranja. De volta.',
    beat: 'de volta\npro box.',
    bg: '#FF6B2C',
    sub: '3 lições. a maior ofensiva volta.',
  },
  {
    at: '00:11',
    dur: 2400,
    src: null,
    picture: 'A nina de novo.',
    beat: 'a gente se fala amanhã.',
    bg: '#14532d',
    sub: 'ou agora.',
  },
  {
    at: '00:14',
    dur: 3600,
    src: null,
    picture: 'Url.',
    beat: 'academy.odontohub.app.br',
    bg: '#0b0c10',
    sub: 'nina · odontohub academy',
  },
];

export const OFENSIVA_FILM_NOTE =
  '16 segundos. parece print, não comercial. a nina chama. 3 lições. de volta pro box. se parecer apple, cortou errado.';

export const OFENSIVA_FEED: FeedPost[] = [
  {
    id: 'of-01',
    n: '01',
    account: 'academy',
    title: 'sumiu né',
    format: 'feed',
    surface: 'lock',
    neo: LIMA,
    kind: 'notify',
    headline: 'sumiu né.',
    notifyFrom: 'nina',
    notifyTime: 'agora',
    notifyBody: 'sumiu né.\no paciente da faculdade também.',
    caption: `sumiu né

o paciente da faculdade também. a nina não.

3 lições e a ofensiva volta.

${START_ACADEMY}`,
    align: 'center',
  },
  {
    id: 'of-02',
    n: '02',
    account: 'academy',
    title: 'hb20',
    format: 'feed',
    surface: 'lock',
    neo: LIMA,
    kind: 'notify',
    headline: 'sua ofensiva: 0',
    notifyFrom: 'nina',
    notifyTime: '00:37',
    notifyBody: 'sua ofensiva: 0\no hb20: brilhando',
    caption: `prioridades.

o branco tá limpo. a ofensiva, não.

a nina anotou. academy.odontohub.app.br`,
    align: 'center',
  },
  {
    id: 'of-03',
    n: '03',
    account: 'academy',
    title: 'endo',
    format: 'feed',
    surface: 'lock',
    neo: LIMA,
    kind: 'notify',
    headline: 'em endo',
    notifyFrom: 'nina',
    notifyTime: 'agora',
    notifyBody: 'queria escrever isso em endo\nmas você não ia entender 👍',
    caption: `então vai de radiologia.

3 lições. a ofensiva volta. ou a gente se fala de novo às 00:37`,
    align: 'center',
  },
  {
    id: 'of-04',
    n: '04',
    account: 'academy',
    title: 'de volta pro box',
    format: 'feed',
    surface: 'gradient',
    neo: LARANJA,
    kind: 'poster',
    headline: 'de volta\npro box',
    sub: 'faz 3 lições rápidas no app e coloca sua maior ofensiva de volta no jogo',
    caption: `de volta pro box

e digo mais: recupera essa ofensiva logo porque essa alegria eu só garanto essa semana 👍

#odontohubacademy`,
    align: 'center',
  },
  {
    id: 'of-05',
    n: '05',
    account: 'academy',
    title: 'jaleco',
    format: 'feed',
    surface: 'lock',
    neo: LIMA,
    kind: 'notify',
    headline: 'jaleco',
    notifyFrom: 'nina',
    notifyTime: 'agora',
    notifyBody: 'o jaleco tá no banco de trás.\nvocê tá no close friends.',
    caption: `a clínica é amanhã. a trilha é agora.

escolhe.

${START_ACADEMY}`,
    align: 'center',
  },
  {
    id: 'of-06',
    n: '06',
    account: 'academy',
    title: 'preceptor',
    format: 'feed',
    surface: 'lock',
    neo: LIMA,
    kind: 'comment',
    kicker: 'a conversa',
    headline: 'preceptor',
    quote: 'é impressionante como perder um box te destrói mais que término.',
    thread: [
      { user: 'nina', text: 'é isso ou o preceptor te chama no corredor', author: true, likes: '1.458' },
      { user: 'cau', text: 'impressionante como você me humilha e eu continuo te pagando', likes: '36' },
      { user: 'kel', text: 'kkkkkk', likes: '12' },
    ],
    caption: `os dois.

nina responde em uma linha. se ficou educado, reescreve.`,
    align: 'start',
  },
  {
    id: 'of-07',
    n: '07',
    account: 'academy',
    title: 'o que zerou',
    format: 'feed',
    surface: 'lock',
    neo: LIMA,
    kind: 'notify',
    headline: 'o que zerou',
    notifyFrom: 'nina',
    notifyTime: 'agora',
    notifyBody: 'coisas que zeraram sua ofensiva:\nprova de histo\npaciente faltou\na atlética\n“só um tiktok”',
    caption: `a nina não briga com a atlética.

briga com o “só um tiktok”.

3 lições. de volta pro box.`,
    align: 'center',
  },
  {
    id: 'of-08',
    n: '08',
    account: 'academy',
    title: 'oclusão',
    format: 'feed',
    surface: 'lock',
    neo: LIMA,
    kind: 'notify',
    headline: 'oclusão',
    notifyFrom: 'nina',
    notifyTime: 'agora',
    notifyBody: 'você vai desistir da oclusão\nassim tão fácil né',
    caption: `não é cobrança de amigo.

é pior.

${START_ACADEMY}`,
    align: 'center',
  },
  {
    id: 'of-09',
    n: '09',
    account: 'academy',
    title: 'loira odonto',
    format: 'feed',
    surface: 'lock',
    neo: LIMA,
    kind: 'notify',
    headline: 'loira odonto',
    notifyFrom: 'nina',
    notifyTime: 'agora',
    notifyBody: 'a loira odonto do 7º saiu no jaleco.\na ofensiva ficou em casa.',
    caption: `sim, a gente é isso.

foto no box depois. 3 lições agora.`,
    align: 'center',
  },
  {
    id: 'of-10',
    n: '10',
    account: 'academy',
    title: 'tiktok',
    format: 'feed',
    surface: 'lock',
    neo: LIMA,
    kind: 'notify',
    headline: 'vi no tiktok',
    notifyFrom: 'nina',
    notifyTime: 'agora',
    notifyBody: 'vi no tiktok que clareia.\na nina viu que você zerou a ofensiva.',
    caption: `a fita não passa na prova de dentística.

a trilha, talvez.`,
    align: 'center',
  },
  {
    id: 'of-11',
    n: '11',
    account: 'academy',
    title: '3 lições',
    format: 'feed',
    surface: 'neo',
    neo: LIMA,
    kind: 'hero',
    headline: '3 lições.',
    sub: 'é o tempo de um café ruim da cantina.',
    caption: `3 lições.

sua maior ofensiva volta pro jogo. ou a nina volta amanhã.

${START_ACADEMY}`,
    align: 'center',
  },
  {
    id: 'of-12',
    n: '12',
    account: 'academy',
    title: 'entra',
    format: 'feed',
    surface: 'lock',
    neo: LIMA,
    kind: 'cta',
    headline: 'entra.',
    sub: 'grátis. sem anúncio. a nina é o único spam.',
    cta: 'entrar',
    caption: `entra.

grátis pra começar. sem anúncio. sem enrolação.

${START_ACADEMY}`,
    align: 'center',
  },
];

export const OFENSIVA_STORIES: FeedPost[] = [
  {
    id: 'of-st-01',
    n: '01',
    account: 'academy',
    title: '00:37',
    format: 'story',
    surface: 'lock',
    neo: LIMA,
    kind: 'notify',
    kicker: '00:37',
    headline: 'sumiu né.',
    notifyFrom: 'nina',
    notifyTime: 'agora',
    notifyBody: 'sumiu né.\no paciente da faculdade também.',
    caption: 'story 9:16. trava a tela. não coloca logo.',
    align: 'center',
  },
  {
    id: 'of-st-02',
    n: '02',
    account: 'academy',
    title: 'hb20 story',
    format: 'story',
    surface: 'lock',
    neo: LIMA,
    kind: 'notify',
    kicker: '22:44',
    headline: 'hb20',
    notifyFrom: 'nina',
    notifyTime: 'agora',
    notifyBody: 'sua ofensiva: 0\no hb20: brilhando',
    caption: 'sticker de enquete: ofensiva hoje 🔥 ou 💀',
    align: 'center',
  },
  {
    id: 'of-st-03',
    n: '03',
    account: 'academy',
    title: 'de volta story',
    format: 'story',
    surface: 'gradient',
    neo: LARANJA,
    kind: 'poster',
    headline: 'de volta\npro box',
    sub: '3 lições. a ofensiva volta.',
    caption: 'o post que pode ir pro explore. story em cima com link.',
    align: 'center',
  },
  {
    id: 'of-st-04',
    n: '04',
    account: 'academy',
    title: 'stories',
    format: 'story',
    surface: 'lock',
    neo: LIMA,
    kind: 'notify',
    kicker: 'agora',
    headline: 'stories',
    notifyFrom: 'nina',
    notifyTime: 'agora',
    notifyBody: 'to vendo o stories.\na trilha também precisava de você.',
    caption: 'manda no pico de stories da sala. 23h.',
    align: 'center',
  },
  {
    id: 'of-st-05',
    n: '05',
    account: 'academy',
    title: '3 lições story',
    format: 'story',
    surface: 'neo',
    neo: LIMA,
    kind: 'hero',
    headline: '3 lições.',
    sub: 'depois você volta pro tiktok.',
    caption: 'link direto. sem “saiba mais”.',
    align: 'center',
  },
  {
    id: 'of-st-06',
    n: '06',
    account: 'academy',
    title: 'entra story',
    format: 'story',
    surface: 'lock',
    neo: LIMA,
    kind: 'cta',
    headline: 'entra.',
    cta: 'entrar',
    caption: START_ACADEMY,
    align: 'center',
  },
];

export const OFENSIVA_SQUARES: FeedPost[] = [
  {
    id: 'of-sq-1',
    n: '01',
    account: 'academy',
    title: 'carrossel 1',
    format: 'square',
    surface: 'lock',
    neo: LIMA,
    kind: 'notify',
    headline: 'sumiu né.',
    notifyFrom: 'nina',
    notifyTime: 'agora',
    notifyBody: 'sumiu né.',
    caption: '1/3',
    align: 'center',
  },
  {
    id: 'of-sq-2',
    n: '02',
    account: 'academy',
    title: 'carrossel 2',
    format: 'square',
    surface: 'lock',
    neo: LIMA,
    kind: 'notify',
    headline: 'hb20',
    notifyFrom: 'nina',
    notifyTime: 'agora',
    notifyBody: 'sua ofensiva: 0\no hb20: brilhando',
    caption: '2/3',
    align: 'center',
  },
  {
    id: 'of-sq-3',
    n: '03',
    account: 'academy',
    title: 'carrossel 3',
    format: 'square',
    surface: 'gradient',
    neo: LARANJA,
    kind: 'poster',
    headline: 'de volta\npro box',
    sub: '3 lições.',
    caption: '3/3 · puxa o link na bio',
    align: 'center',
  },
];

export const OFENSIVA_HIGHLIGHTS: Highlight[] = [
  { title: 'nina', account: 'academy', surface: 'neo', neo: LIMA },
  { title: 'ofensiva', account: 'academy', surface: 'neo', neo: LARANJA },
  { title: 'o box', account: 'academy', surface: 'lock' },
  { title: '3 lições', account: 'academy', surface: 'neo', neo: LIMA },
  { title: 'entra', account: 'academy', surface: 'lock' },
];

export const OFENSIVA_MODELOS: FeedPost[] = [
  {
    id: 'of-md-1',
    n: 'm1',
    account: 'academy',
    title: 'modelo · notify',
    format: 'feed',
    surface: 'lock',
    neo: LIMA,
    kind: 'notify',
    headline: 'modelo',
    notifyFrom: 'nina',
    notifyTime: 'agora',
    notifyBody: '[trend da semana].\na ofensiva não.',
    caption: `cola a trend no primeiro verso. a ofensiva no segundo.

se a nina não falaria isso no grupo da sala, não posta.`,
    align: 'center',
  },
  {
    id: 'of-md-2',
    n: 'm2',
    account: 'academy',
    title: 'modelo · é isso ou',
    format: 'feed',
    surface: 'lock',
    neo: LIMA,
    kind: 'comment',
    kicker: 'resposta',
    headline: 'é isso ou',
    quote: '[print que o odonter já tá mandando no grupo]',
    thread: [{ user: 'nina', text: 'é isso ou [completar]', author: true, likes: '0' }],
    caption: 'responde o meme dos outros. não espera o briefing.',
    align: 'start',
  },
  {
    id: 'of-md-3',
    n: 'm3',
    account: 'academy',
    title: 'modelo · winback',
    format: 'feed',
    surface: 'gradient',
    neo: LARANJA,
    kind: 'poster',
    headline: 'de volta\npro box',
    sub: '3 lições. [ameaça leve].',
    caption: 'toda segunda. ou quando a ofensiva coletiva da sala cair.',
    align: 'center',
  },
];

export const OFENSIVA_PLAN = [
  { when: 'antes', what: 'avatar lima. bio: sumiu né / de volta pro box. destaques: nina, ofensiva, o box.' },
  { when: 'dia 1', what: '01 sumiu né. story 00:37. responde todo comentário em uma linha.' },
  { when: 'dia 2', what: '02 hb20. 03 endo. story do jaleco.' },
  { when: 'dia 3', what: '04 de volta pro box. o post do explore. story com link.' },
  { when: 'dia 4', what: '06 preceptor. 05 jaleco. 09 loira odonto. entra no comentário dos outros.' },
  { when: 'dia 5', what: '11 3 lições. 12 entra. e daí em diante: um notify quando a sala zerar.' },
];
