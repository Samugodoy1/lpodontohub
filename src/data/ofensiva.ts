import { type Shot as BrandShot } from './brand';
import { LARANJA, LIMA, ROSA, START_ACADEMY, VIOLETA, type FeedPost, type Highlight } from './feeds';

type Shot = BrandShot & { bg?: string; sub?: string };

export const OFENSIVA_LINE = 'a nina viu.';
export const OFENSIVA_SUB = 'a vida do odonter já é a campanha.';
export const OFENSIVA_BIO = `a nina viu.
clínica, jogo e fofoca acadêmica
${START_ACADEMY.replace('https://', '')}`;

export const OFENSIVA_PLAY = [
  {
    k: 'a personagem',
    t: 'nina é a amiga que sabe demais.',
    d: 'ela viu o paciente cancelar às 7:03, o kit de resina parcelado e o hb20 lavado na véspera da prova. não é professora, coach ou mascote fofa. é do grupo da sala.',
  },
  {
    k: 'a matéria-prima',
    t: 'a rotina entrega o roteiro.',
    d: 'clínica-escola, preceptor, esterilização, instrumentais, prova prática, close friends. cada post parte de uma verdade específica. sem contexto real, não tem piada.',
  },
  {
    k: 'o método duo',
    t: 'social-first. formato antes de campanha.',
    d: 'plantão urgente, whatsapp, wrapped, starter pack, quiz, comentário e vídeo curto. a nina reage ao meme enquanto ele está vivo. “ofensiva” aparece quando o produto entra — não em todo post.',
  },
] as const;

export const OFENSIVA_DONT = [
  'não enfia gíria em frase corporativa. “bora revolucionar, odonters” continua sendo powerpoint.',
  'não explica a piada na legenda. se precisou de “entenda”, morreu.',
  'não chama todo mundo de loira odonto. usa o arquétipo como autozoação, não como ataque.',
  'não faz piada com condição clínica, dor ou aparência de paciente.',
  'não promete aprovação, diagnóstico ou conduta clínica.',
  'não caça toda trend. a nina entra quando existe uma ponte real com odonto.',
  'não repete o mesmo layout. duolingo é personagem, não card de notificação.',
];

export const OFENSIVA_REPLIES = [
  { they: 'meu paciente acabou de desmarcar', we: 'coloca “disponível para novas oportunidades” no linkedin' },
  { they: 'nina eu sei o 36 juro', we: 'direita ou esquerda. valendo sua aura.' },
  { they: 'o kit de resina foi 2 mil', we: 'mas o café de 12 reais você achou caro. coerente.' },
  { they: 'kkkkkkkkkkkk', we: 'riu porque esterilizou o kit errado né' },
  { they: 'sou loira odonto com orgulho', we: 'o hb20 branco já entregou antes de você' },
];

export const OFENSIVA_ARC = [
  {
    n: '01',
    title: 'a nina solta o caso.',
    body: 'reel curto, manequim ou ilustração. uma decisão clínica real. a conduta fica em aberto.',
  },
  {
    n: '02',
    title: 'os comentários viram banca.',
    body: 'a turma vota e justifica. a nina responde as hipóteses boas, ruins e confiantes demais.',
  },
  {
    n: '03',
    title: 'a resposta mora no jogo.',
    body: 'a fase completa abre no Odonto em Jogo. cada caso concluído soma no placar coletivo.',
  },
  {
    n: '04',
    title: 'a sala libera o próximo.',
    body: 'bateu a meta de XP, sai o desfecho e um novo caso. alcance vira retorno ao produto.',
  },
] as const;

export const OFENSIVA_FILM: Shot[] = [
  {
    at: '00:00',
    dur: 2200,
    src: null,
    picture: 'Tela de WhatsApp. 07:03.',
    beat: 'bom dia doutora',
    bg: '#075e54',
    sub: 'não vou conseguir ir hoje',
  },
  {
    at: '00:02',
    dur: 2200,
    src: null,
    picture: 'Corta seco. Silêncio.',
    beat: 'ela acordou 5:20.',
    bg: '#0b0c10',
    sub: 'esterilizou 14 instrumentais.',
  },
  {
    at: '00:04',
    dur: 2400,
    src: null,
    picture: 'GC de plantão urgente.',
    beat: 'URGENTE',
    bg: '#ec3323',
    sub: 'estudante responde “sem problemas 🥰”',
  },
  {
    at: '00:07',
    dur: 2400,
    src: null,
    picture: 'Nina entra no quadro.',
    beat: 'a nina viu.',
    bg: '#34C759',
    sub: 'ela viu tudo.',
  },
  {
    at: '00:09',
    dur: 2600,
    src: null,
    picture: 'Trilha do Odonto em Jogo.',
    beat: 'já que você acordou…',
    bg: '#5b2be0',
    sub: 'faz 3 casos e salva a ofensiva.',
  },
  {
    at: '00:12',
    dur: 3200,
    src: null,
    picture: 'Assinatura curta.',
    beat: 'odontohub academy',
    bg: '#0b0c10',
    sub: 'a clínica da faculdade. sem a parte triste.',
  },
];

export const OFENSIVA_FILM_NOTE =
  '15 segundos. começa com uma verdade reconhecível, escala como meme e só então puxa o produto. a graça vem antes do link.';

export const OFENSIVA_FEED: FeedPost[] = [
  {
    id: 'nina-01',
    n: '01',
    account: 'academy',
    title: 'plantão 00:47',
    format: 'feed',
    surface: 'white',
    neo: LARANJA,
    kind: 'breaking',
    headline: 'estudante de odonto diz “hoje eu durmo cedo”',
    sub: 'testemunhas confirmam que ela abriu o tiktok às 00:47 e ainda chamou de “só um vídeo”.',
    caption: `URGENTE: ela também colocou três alarmes.

a nina acompanha o caso.`,
    align: 'start',
  },
  {
    id: 'nina-02',
    n: '02',
    account: 'academy',
    title: 'o cancelamento',
    format: 'feed',
    surface: 'white',
    neo: LIMA,
    kind: 'chat',
    label: 'Paciente — Clínica',
    headline: '07:03',
    thread: [
      { user: 'paciente', text: 'bom dia doutora, não vou conseguir ir hoje', likes: '07:03' },
      { user: 'aluna', text: 'sem problemas 🥰 podemos remarcar sim', author: true, likes: '07:04 ✓✓' },
      { user: 'paciente', text: 'obrigada pela compreensão', likes: '07:04' },
    ],
    caption: `ela acordou 5:20.
imprimiu 14 páginas.
esterilizou o kit.

“sem problemas 🥰”

a nina viu.`,
    align: 'start',
  },
  {
    id: 'nina-03',
    n: '03',
    account: 'academy',
    title: 'loira odonto starter pack',
    format: 'feed',
    surface: 'white',
    neo: ROSA,
    kind: 'starter',
    headline: `loira odonto
starter pack`,
    items: ['presilha que sobrevive à clínica', 'hb20 branco no sol', 'scrub “só pra aula prática”', 'resina em 10x sem juros'],
    sub: 'não é estereótipo se o hb20 estiver no estacionamento.',
    caption: `faltou o gloss no bolso do jaleco.

marca a dona do hb20. ela sabe quem é.`,
    align: 'start',
  },
  {
    id: 'nina-04',
    n: '04',
    account: 'academy',
    title: 'wrapped do semestre',
    format: 'feed',
    surface: 'white',
    neo: LIMA,
    kind: 'receipt',
    headline: `parabéns.
você ainda está aqui.`,
    items: [
      '17 cafés da cantina',
      '9 “confirmo sim” que não chegaram',
      'R$ 2.184 em material',
      '1 isolamento elogiado pelo professor',
      '46 vezes lembrando desse elogio',
    ],
    caption: `seu semestre wrapped.

o elogio foi em março. ela ainda pensa nele.`,
    align: 'center',
  },
  {
    id: 'nina-05',
    n: '05',
    account: 'academy',
    title: 'farmou aura',
    format: 'feed',
    surface: 'gradient',
    neo: VIOLETA,
    kind: 'poster',
    headline: '+500 aura',
    sub: 'chegou de scrub. perdeu 800 perguntando se o 36 é direita ou esquerda.',
    caption: `saldo: -300 aura e uma prova prática.

agora “farmar aura” fez sentido em odonto. semana que vem a nina troca de meme.`,
    align: 'center',
  },
  {
    id: 'nina-06',
    n: '06',
    account: 'academy',
    title: 'quiz anestesia',
    format: 'feed',
    surface: 'neo',
    neo: VIOLETA,
    kind: 'quiz',
    headline: `“essa anestesia nunca pega em mim”

qual a melhor resposta?`,
    items: [
      'revisar técnica e referências anatômicas',
      'aplicar mais e torcer',
      'culpar o metabolismo',
      'olhar pro professor como criança perdida',
    ],
    value: '0',
    sub: 'o odonto em jogo marca a primeira. a sua alma marcou a quarta.',
    caption: `a resposta certa não é olhar pro professor.

casos curtos. quatro caminhos. xp, vidas e uma chance menor de travar no box.

${START_ACADEMY}`,
    align: 'start',
  },
  {
    id: 'nina-07',
    n: '07',
    account: 'academy',
    title: 'elogio do preceptor',
    format: 'feed',
    surface: 'white',
    neo: LARANJA,
    kind: 'breaking',
    headline: 'preceptor elogia isolamento absoluto',
    sub: 'aluna deve viver emocionalmente desse momento até a formatura. família prepara comemoração.',
    caption: `“ficou bom.”

foram duas palavras. ela ouviu um discurso inteiro.`,
    align: 'start',
  },
  {
    id: 'nina-08',
    n: '08',
    account: 'academy',
    title: 'depois',
    format: 'feed',
    surface: 'lock',
    neo: LIMA,
    kind: 'notify',
    headline: 'depois',
    notifyFrom: 'nina',
    notifyTime: 'agora',
    notifyBody: `você falou que estudava depois.
depois pediu pra não ser envolvido.`,
    caption: `ele não quer mais essa responsabilidade.

3 casos. 5 minutos. salva a ofensiva.`,
    align: 'center',
  },
  {
    id: 'nina-09',
    n: '09',
    account: 'academy',
    title: 'economia odonter',
    format: 'feed',
    surface: 'lock',
    neo: LIMA,
    kind: 'comment',
    kicker: 'economia odonter',
    headline: 'prioridades',
    quote: `kit de resina: R$ 2.184 — “preciso”
jantar: R$ 82 — “não posso gastar agora”`,
    thread: [
      { user: 'nina', text: 'a dentística tem acesso direto à conta dela', author: true, likes: '2.184' },
      { user: 'loiraodonto', text: 'o jantar não dá ponto na prática', likes: '312' },
      { user: 'nina', text: 'argumento aceito', author: true, likes: '890' },
    ],
    caption: `sem perguntas. a contabilidade está correta.`,
    align: 'start',
  },
  {
    id: 'nina-10',
    n: '10',
    account: 'academy',
    title: 'grupo da clínica',
    format: 'feed',
    surface: 'white',
    neo: LIMA,
    kind: 'chat',
    label: 'Clínica Integrada 🤡',
    headline: '23:48',
    thread: [
      { user: 'bia', text: 'gente qual material amanhã?', likes: '23:48' },
      { user: 'lu', text: 'tá no academy', author: true, likes: '23:49 ✓✓' },
      { user: 'bia', text: 'manda print', likes: '23:49' },
      { user: 'lu', text: 'eu vou fingir que não li', author: true, likes: '23:50 ✓✓' },
    ],
    caption: `o link estava duas mensagens acima.

a nina também vai fingir que não viu.`,
    align: 'start',
  },
  {
    id: 'nina-11',
    n: '11',
    account: 'academy',
    title: 'sotaque de dentista',
    format: 'feed',
    surface: 'gradient',
    neo: LARANJA,
    kind: 'pov',
    headline: 'abre a boca.',
    quote: 'abre só mais um pouquinho pra mim, tá?',
    sub: 'o “pra mim” aparece no terceiro período e nunca mais vai embora.',
    caption: `você não escolhe o sotaque de dentista.

o sotaque de dentista escolhe você.

(abre só mais um pouquinho pra mim, tá?)`,
    align: 'start',
  },
  {
    id: 'nina-12',
    n: '12',
    account: 'academy',
    title: 'entra no jogo',
    format: 'feed',
    surface: 'neo',
    neo: LIMA,
    kind: 'quiz',
    headline: 'você tem 5 minutos antes de dormir.',
    items: ['abrir 34 stories', 'fazer 3 casos e salvar a ofensiva', 'pesquisar “vou reprovar?”', 'lavar o hb20'],
    value: '1',
    sub: 'pela primeira vez, a segunda opção.',
    caption: `3 casos. 5 minutos.

menos uma chance de olhar pro professor como criança perdida.

${START_ACADEMY}`,
    align: 'start',
  },
];

export const OFENSIVA_STORIES: FeedPost[] = [
  {
    id: 'nina-st-01',
    n: '01',
    account: 'academy',
    title: 'plantão story',
    format: 'story',
    surface: 'white',
    neo: LARANJA,
    kind: 'breaking',
    headline: 'paciente confirma presença',
    sub: 'estudante acredita pela oitava vez. mais informações às 7:03.',
    caption: 'enquete: ele vai? / claro que não',
    align: 'start',
  },
  {
    id: 'nina-st-02',
    n: '02',
    account: 'academy',
    title: 'chat story',
    format: 'story',
    surface: 'white',
    neo: LIMA,
    kind: 'chat',
    label: 'Paciente — Clínica',
    headline: '07:03',
    thread: [
      { user: 'paciente', text: 'bom dia doutora, não vou conseguir ir hoje', likes: '07:03' },
      { user: 'aluna', text: 'sem problemas 🥰', author: true, likes: '07:04 ✓✓' },
    ],
    caption: 'reposta livre: o que ela realmente queria responder?',
    align: 'start',
  },
  {
    id: 'nina-st-03',
    n: '03',
    account: 'academy',
    title: 'aura story',
    format: 'story',
    surface: 'gradient',
    neo: VIOLETA,
    kind: 'poster',
    headline: '+500 aura',
    sub: 'scrub impecável. bandeja errada. saldo: -800.',
    caption: 'slider de aura.',
    align: 'center',
  },
  {
    id: 'nina-st-04',
    n: '04',
    account: 'academy',
    title: 'quiz story',
    format: 'story',
    surface: 'neo',
    neo: VIOLETA,
    kind: 'quiz',
    headline: 'o paciente faltou. você:',
    items: ['estuda', 'chora', 'vai embora', 'posta “dia de clínica” mesmo assim'],
    value: '3',
    sub: 'a nina sabe.',
    caption: 'quiz nativo. resposta 4.',
    align: 'start',
  },
  {
    id: 'nina-st-05',
    n: '05',
    account: 'academy',
    title: 'notify story',
    format: 'story',
    surface: 'lock',
    neo: LIMA,
    kind: 'notify',
    kicker: '00:47',
    headline: 'depois',
    notifyFrom: 'nina',
    notifyTime: 'agora',
    notifyBody: `você falou que estudava depois.
depois pediu pra não ser envolvido.`,
    caption: 'link: salvar ofensiva',
    align: 'center',
  },
  {
    id: 'nina-st-06',
    n: '06',
    account: 'academy',
    title: '3 casos',
    format: 'story',
    surface: 'neo',
    neo: LIMA,
    kind: 'hero',
    headline: `3 casos.
5 minutos.`,
    sub: 'e você volta pro tiktok.',
    cta: 'jogar',
    caption: START_ACADEMY,
    align: 'center',
  },
];

export const OFENSIVA_SQUARES: FeedPost[] = [
  {
    id: 'nina-sq-01',
    n: '01',
    account: 'academy',
    title: 'carrossel · sem problemas',
    format: 'square',
    surface: 'white',
    neo: LIMA,
    kind: 'chat',
    label: 'Paciente — Clínica',
    headline: '07:03',
    thread: [
      { user: 'paciente', text: 'não vou conseguir ir hoje', likes: '07:03' },
      { user: 'aluna', text: 'sem problemas 🥰', author: true, likes: '07:04 ✓✓' },
    ],
    caption: '1/3',
    align: 'start',
  },
  {
    id: 'nina-sq-02',
    n: '02',
    account: 'academy',
    title: 'carrossel · os fatos',
    format: 'square',
    surface: 'white',
    neo: LARANJA,
    kind: 'breaking',
    headline: 'os fatos',
    sub: 'acordou 5:20. imprimiu 14 páginas. esterilizou o kit. ficou sem box.',
    caption: '2/3',
    align: 'start',
  },
  {
    id: 'nina-sq-03',
    n: '03',
    account: 'academy',
    title: 'carrossel · nina viu',
    format: 'square',
    surface: 'gradient',
    neo: LIMA,
    kind: 'poster',
    headline: 'a nina viu.',
    sub: 'já que acordou, faz 3 casos.',
    caption: `3/3

${START_ACADEMY}`,
    align: 'center',
  },
];

export const OFENSIVA_HIGHLIGHTS: Highlight[] = [
  { title: 'nina viu', account: 'academy', surface: 'neo', neo: LIMA },
  { title: 'o box', account: 'academy', surface: 'lock' },
  { title: 'fofocas', account: 'academy', surface: 'neo', neo: ROSA },
  { title: 'o jogo', account: 'academy', surface: 'neo', neo: VIOLETA },
  { title: 'entra', account: 'academy', surface: 'neo', neo: LARANJA },
];

export const OFENSIVA_MODELOS: FeedPost[] = [
  {
    id: 'nina-md-01',
    n: 'm1',
    account: 'academy',
    title: 'modelo · trend',
    format: 'feed',
    surface: 'white',
    neo: LARANJA,
    kind: 'breaking',
    headline: '[frase da trend] chega à clínica-escola',
    sub: 'a segunda linha precisa ser uma verdade de odonto. se não encaixa, deixa a trend passar.',
    caption: 'template reactive. validade: 72 horas.',
    align: 'start',
  },
  {
    id: 'nina-md-02',
    n: 'm2',
    account: 'academy',
    title: 'modelo · comentário',
    format: 'feed',
    surface: 'lock',
    neo: LIMA,
    kind: 'comment',
    kicker: 'resposta da nina',
    headline: 'comentário',
    quote: '[o odonter conta um desastre específico]',
    thread: [{ user: 'nina', text: '[resposta curta que piora a situação]', author: true, likes: '0' }],
    caption: 'não responde “kkkk”. adiciona uma segunda piada.',
    align: 'start',
  },
  {
    id: 'nina-md-03',
    n: 'm3',
    account: 'academy',
    title: 'modelo · produto',
    format: 'feed',
    surface: 'neo',
    neo: VIOLETA,
    kind: 'quiz',
    headline: '[caso clínico curto]',
    items: ['conduta plausível', 'erro comum', 'absurdo confiante', 'pedir socorro pro preceptor'],
    value: '0',
    sub: 'a piada abre. o odonto em jogo fecha.',
    caption: 'um post de produto a cada três de cultura.',
    align: 'start',
  },
];

export const OFENSIVA_PLAN = [
  { when: 'antes', what: 'bio “a nina viu”. destaques: nina viu, o box, fofocas, o jogo. nenhum manifesto.' },
  { when: 'dia 1', what: 'plantão 00:47 + cancelamento 07:03. nina responde os relatos reais nos comentários.' },
  { when: 'dia 2', what: 'starter pack loira odonto + wrapped. pedir nos stories: “o que faltou?”' },
  { when: 'dia 3', what: 'farmou aura + quiz anestesia. primeiro vínculo claro com Odonto em Jogo.' },
  { when: 'dia 4', what: 'elogio do preceptor + economia odonter + grupo da clínica.' },
  { when: 'dia 5', what: 'nervosismo surreal + 3 casos. CTA só depois que a personagem já ganhou o feed.' },
  { when: 'sempre', what: '70% cultura da faculdade, 20% resposta/reactive, 10% produto. uma trend por vez.' },
];
