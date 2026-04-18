// VORTX — Quiz Data v8 (Copy estilo Gary Halbert: curiosidade, tensão, linguagem crua, impossível de abandonar)

const BRAND = {
  name: "VORTX",
  tagline: "O Segredo Que Sua Mulher Não Sabe Que Existe",
  year: new Date().getFullYear(),
};

// ============================================================
// GATE — Hook A (principal)
// ============================================================
const GATE_DATA = {
  headline: "Um urologista militar revelou o motivo real pelo qual os homens estão encolhendo e brochando depois dos 40.",
  subheadline: "Não tem nada a ver com idade, genética ou estresse. O culpado é algo que 97% dos médicos nunca vão te contar — porque eles também não sabem. Responde 12 perguntas e descobre se ainda dá tempo no seu caso.",
  cta: "QUERO DESCOBRIR O QUE ESTÁ ACONTECENDO COMIGO",
  socialProof: "14.281 homens usaram esse diagnóstico. Resultado médio: 18 dias.",
  privacySeal: "100% sigiloso • Anônimo • Nenhum dado compartilhado",
  badge: "Baseado em 14.281 diagnósticos reais",
};

// ============================================================
// HOOKS A/B (variações para teste)
// ============================================================
const GATE_HOOKS = {
  hookA: {
    headline: "Um urologista militar revelou o motivo real pelo qual os homens estão encolhendo e brochando depois dos 40.",
    subheadline: "Não tem nada a ver com idade, genética ou estresse. O culpado é algo que 97% dos médicos nunca vão te contar — porque eles também não sabem. Responde 12 perguntas e descobre se ainda dá tempo no seu caso.",
  },
  hookB: {
    headline: "Existe um músculo escondido na base do pênis que, quando destrava, faz o homem parecer 3cm maior e durar o dobro na cama.",
    subheadline: "Nenhum médico de plano vai te falar sobre ele. Nenhum remedinho resolve. E a cada ano que você ignora, ele atrofia mais. Em 3 minutos você descobre se o seu ainda tem salvação.",
  },
  hookC: {
    headline: "Por que homens de 55 que descobriram esse método estão transando melhor do que quando tinham 30?",
    subheadline: "A resposta não é remédio, não é reposição hormonal e não é bomba de farmácia. É algo tão simples que você vai ficar com raiva de não ter sabido antes. Faça o diagnóstico e descubra se funciona pra você.",
  },
};

// ============================================================
// FASES
// ============================================================
const PHASES = [
  { id: 1, label: "REVELAÇÃO",   steps: [1, 2, 3, 4] },
  { id: 2, label: "VERDADE",     steps: [5, 6, 7, 8, 9, 10, 11] },
  { id: 3, label: "CONFISSÃO",   steps: [12, 13, 14, 15, 16, 17] },
  { id: 4, label: "VEREDICTO",   steps: [18, 19] },
  { id: 5, label: "RESGATE",     steps: [20, 21, 22] },
];

// ============================================================
// STEPS
// ============================================================
const STEPS = [

  // ══════════════════════════════════════════════
  // FASE 1: REVELAÇÃO — Curiosidade + Identificação
  // ══════════════════════════════════════════════

  {
    id: 1,
    phase: 1,
    type: "text-input",
    question: "Antes de qualquer coisa — como eu te chamo?",
    microcopy: "O que você vai ver aqui é pessoal. Cada resposta gera um resultado único pro seu caso.",
    field: { name: "userName", placeholder: "Seu primeiro nome...", maxLength: 30 },
    weight: 0,
  },

  {
    id: 2,
    phase: 1,
    type: "single-select",
    question: "{name}, quantos anos você tem hoje?",
    microcopy: "Isso muda tudo. O estrago que acontece aos 45 é completamente diferente do que acontece aos 55. Preciso saber exatamente onde você está.",
    options: [
      { value: "40-44", label: "40 — 44 anos",  icon: "⚠️" },
      { value: "45-49", label: "45 — 49 anos",  icon: "⚠️" },
      { value: "50-54", label: "50 — 54 anos",  icon: "🚨" },
      { value: "55-59", label: "55 — 59 anos",  icon: "🚨" },
      { value: "60-65", label: "60 — 65 anos",  icon: "🛑" },
    ],
    triggers: {
      "40-44": "⚠ Aos 40 a maioria dos homens acha que ainda tá bem. É exatamente aí que o estrago começa — silencioso, invisível. E quando percebe, já perdeu anos. Você ainda tá na janela.",
      "45-49": "⚠ Essa é a faixa onde o homem percebe que algo mudou — mas finge que é estresse. Não é. E cada mês que passa a porta fecha mais um pouco.",
      "50-54": "🛑 Aos 50 o corpo já perdeu mais da metade da capacidade que tinha. A barriga, a moleza, o desinteresse — nada disso é normal. É dano acumulado. Mas ainda tem como reverter.",
      "55-59": "🛑 Faixa crítica. Aqui a maioria dos homens já desistiu. Mas os que agem nessa fase são os que mais surpreendem. O protocolo foi feito pra esse estágio.",
      "60-65": "🛑 A maioria dos médicos ia te mandar aceitar e conviver. Mas 14.281 homens provaram que não precisa aceitar nada. Funciona — inclusive nessa idade.",
    },
    weight: 0,
  },

  {
    id: 3,
    phase: 1,
    type: "single-select",
    question: "Agora me diz a verdade — o que tá tirando seu sono de noite?",
    microcopy: "Ninguém vai ver isso. Só eu e você aqui.",
    options: [
      { value: "libido",  label: "Meu desempenho na cama despencou — e eu sei disso",       icon: "🔥" },
      { value: "corpo",   label: "Meu corpo tá diferente — barriga, moleza, sem forma",      icon: "⚖️" },
      { value: "energia", label: "Não tenho energia pra nada — acordo destruído todo dia",   icon: "⚡" },
      { value: "mental",  label: "Perdi a vontade de lutar — o fogo apagou",                icon: "🧠" },
    ],
    weight: 0,
  },

  {
    id: 4,
    phase: 1,
    type: "single-select",
    question: "Há quanto tempo você sabe que algo tá errado — mas não fez nada?",
    microcopy: null,
    options: [
      { value: "6m",  label: "Menos de 6 meses",                         icon: "🕐", score: 3 },
      { value: "1a",  label: "Faz cerca de 1 ano",                       icon: "🕐", score: 2 },
      { value: "3a",  label: "Já são alguns anos",                       icon: "🕐", score: 1 },
      { value: "3a+", label: "Tanto tempo que já nem penso mais nisso",  icon: "🕐", score: 0 },
    ],
    triggers: {
      "3a":  "⚠ Anos engolindo seco e fingindo que tá tudo bem. Enquanto isso o estrago foi se empilhando. A boa notícia: ainda não é tarde.",
      "3a+": "🛑 O pior dano não é o físico — é o homem que para de se importar. Você tá aqui. Isso prova que ainda não desistiu.",
    },
    weight: 5,
  },

  // ══════════════════════════════════════════════
  // FASE 2: VERDADE — Tensão + Micro-compromissos
  // ══════════════════════════════════════════════

  {
    id: 5,
    phase: 2,
    type: "single-select",
    question: "Quando foi a última vez que você acordou com uma ereção dura, sem tomar nada?",
    microcopy: "Isso é o termômetro mais honesto que existe. Homem saudável acorda assim todo santo dia. Se parou — o problema não é vontade. É circulação.",
    options: [
      { value: "sempre", label: "Todo dia — acordo pronto",                                  icon: "✅", score: 3 },
      { value: "raro",   label: "De vez em quando — mas não como antes",                     icon: "⚠️", score: 1 },
      { value: "nunca",  label: "Faz tanto tempo que nem lembro",                            icon: "🛑", score: 0 },
    ],
    triggers: {
      "nunca": "🛑 Quando isso para de acontecer, significa que o sangue não tá chegando lá embaixo com força. O tecido tá murchando por dentro — e diminui de tamanho com o tempo. Mas tem reversão.",
      "raro":  "⚠ De vez em quando não é o bastante. É sinal que a circulação tá falhando. Ainda dá tempo — mas a janela tá se fechando.",
    },
    weight: 20,
    category: "libido",
  },

  {
    id: 6,
    phase: 2,
    type: "single-select",
    question: "Na hora H — como tá de verdade?",
    microcopy: "Sem aquela de 'foi só uma vez'. Eu quero saber o padrão. O que acontece toda vez.",
    options: [
      { value: "toro",  label: "Firme do começo ao fim — sem problema nenhum",                icon: "💪", score: 3 },
      { value: "falho", label: "Começa bem mas amolece no meio — ou preciso do remedinho",    icon: "🚨", score: 0 },
      { value: "fujo",  label: "Evito a situação — invento desculpa pra não ter que tentar",  icon: "🏃", score: 0 },
    ],
    triggers: {
      "fujo":  "🛑 Fugir da própria mulher por medo de falhar... isso destrói mais do que a brochada em si. Ela sente. Você sente. E quanto mais foge, pior fica. Mas tem saída — e não é o remedinho azul.",
      "falho": "🚨 Perder firmeza no meio é o corpo gritando que a circulação tá entupida. O sangue entra — mas não fica. E cada vez que acontece, o tecido perde mais capacidade. Isso tem como destravar.",
    },
    weight: 15,
    category: "libido",
  },

  {
    id: 7,
    phase: 2,
    type: "multi-select",
    question: "Olha pro seu corpo agora. O que você vê?",
    microcopy: "Isso aqui é importante: cada quilo de gordura abdominal produz hormônio feminino dentro do seu corpo. Literalmente. Estrogênio. E é esse hormônio que tá sabotando sua ereção, seu pique e seu tamanho.",
    minSelections: 1,
    options: [
      { value: "barriga", label: "Barriga que não some — dura ou mole",       icon: "🤰" },
      { value: "peito",   label: "Peito inchado — parece que tá criando mama", icon: "🍎" },
      { value: "braco",   label: "Braço fino — perdi massa muscular",         icon: "📏" },
      { value: "rosto",   label: "Rosto redondo, inchado, sem maxilar",       icon: "🌝" },
      { value: "nenhuma", label: "Nenhuma dessas — corpo tá ok",              icon: "✅" },
    ],
    triggers: {
      _any_except_nenhuma: "🛑 Cada um desses sinais é o seu corpo se feminizando. Gordura virando fábrica de estrogênio. E esse estrogênio destruindo o que te faz homem. Ereção, tamanho, disposição — tudo cai junto.",
    },
    weight: 10,
    category: "corpo",
    scoreLogic: "count-negative",
  },

  {
    id: 8,
    phase: 2,
    type: "single-select",
    question: "Você já precisou do remedinho azul pra funcionar?",
    microcopy: "Pode ser honesto. Não existe resposta certa aqui — só existe a verdade.",
    options: [
      { value: "nao",     label: "Nunca precisei",                                        icon: "🚫", score: 3 },
      { value: "asvezes", label: "Já usei — tenho em casa por precaução",                 icon: "💊", score: 1 },
      { value: "viciado", label: "Sem ele, nem começo — meu corpo não funciona mais sozinho", icon: "🚨", score: 0 },
    ],
    triggers: {
      "viciado": "🛑 Aqui tá o problema que ninguém te conta: o remedinho TREINA o seu corpo a não funcionar mais sozinho. Cada vez que você usa, a dependência aumenta. E a circulação natural piora. Existe uma saída — sem muleta.",
      "asvezes": "⚠ Ter o remedinho na gaveta é o primeiro passo pra se tornar dependente. Seu corpo tá aprendendo que sem a química, não rola. Dá pra cortar isso antes que vire vício.",
    },
    weight: 10,
    category: "fisica",
  },

  {
    id: 9,
    phase: 2,
    type: "single-select",
    question: "Como você acorda de manhã — sem enrolação?",
    microcopy: "Não é sobre dormir mais ou menos. É sobre como o seu corpo se sente quando liga de novo.",
    options: [
      { value: "rei",   label: "Disposto — já levanto querendo o dia",        icon: "🦁", score: 3 },
      { value: "zumbi", label: "Pesado — corpo doendo, cabeça lenta",         icon: "🧟", score: 0 },
      { value: "odio",  label: "Com raiva — ódio de ter que levantar de novo", icon: "💢", score: 0 },
    ],
    triggers: {
      "zumbi": "🛑 Acordar destruído não é falta de sono — é o seu corpo falhando em se recuperar à noite. Seus hormônios pararam de fazer o trabalho deles. E isso piora a cada noite.",
      "odio":  "🛑 Acordar com raiva todo dia é o sintoma mais ignorado de colapso hormonal. Não é psicológico. É químico. E tem solução.",
    },
    weight: 5,
    category: "energia",
  },

  {
    id: 10,
    phase: 2,
    type: "single-select",
    question: "E o seu sono — como tá?",
    microcopy: "É durante o sono profundo que o corpo produz testosterona e hormônio do crescimento. Se você dorme mal, nada se recupera — nem músculo, nem ereção, nem disposição.",
    options: [
      { value: "profundo",    label: "Durmo fundo — acordo descansado de verdade",              icon: "✅", score: 3 },
      { value: "superficial", label: "Durmo mas acordo cansado do mesmo jeito",                 icon: "⚠️", score: 1 },
      { value: "pessimo",     label: "Insônia, suor noturno, acordo 3x por noite",              icon: "🛑", score: 0 },
    ],
    triggers: {
      "pessimo":     "🛑 Suor à noite e acordar várias vezes é sinal de queda hormonal grave. Cada noite assim é uma noite que seu corpo NÃO se recupera. O dano se acumula.",
      "superficial": "⚠ Dormir e não descansar é como carregar o celular com fio quebrado. Parece que carregou — mas na real, tá no vermelho.",
    },
    weight: 10,
    category: "sono",
  },

  {
    id: 11,
    phase: 2,
    type: "single-select",
    question: "Depois de um esforço — quanto tempo leva pra voltar ao normal?",
    microcopy: "Homem com hormônio em dia se recupera rápido. Se demora, o corpo tá quebrando mais rápido do que consegue se consertar.",
    options: [
      { value: "rapido",  label: "Rápido — no dia seguinte já tô inteiro",        icon: "✅", score: 3 },
      { value: "lento",   label: "Demoro dias pra me sentir normal de novo",       icon: "⚠️", score: 1 },
      { value: "nenhuma", label: "Nunca me recupero — vivo no cansaço acumulado",  icon: "🛑", score: 0 },
    ],
    triggers: {
      "nenhuma": "🛑 Nunca se recuperar é o sinal mais sério que existe. Seu corpo está se autodestruindo 24h por dia — sem conseguir se reparar.",
      "lento":   "⚠ Recuperação lenta = hormônio baixo. Simples assim. Seu corpo não tá produzindo o que precisa durante o sono.",
    },
    weight: 5,
    category: "recuperacao",
  },

  // ══════════════════════════════════════════════
  // FASE 3: CONFISSÃO — Identificação + Escalada
  // ══════════════════════════════════════════════

  {
    id: 12,
    phase: 3,
    type: "biometric-input",
    question: "Preciso de dois números seus — sem mentir",
    microcopy: "Cada quilo de gordura abdominal é uma fábrica de estrogênio funcionando 24 horas dentro de você. Quanto mais pesado, mais feminino o corpo fica por dentro. Bota os números reais:",
    fields: [
      { name: "height", label: "Altura",     unit: "cm", placeholder: "175", min: 140, max: 220 },
      { name: "weight", label: "Peso Atual", unit: "kg", placeholder: "90",  min: 45,  max: 200 },
    ],
    weight: 0,
  },

  {
    id: 13,
    phase: 3,
    type: "single-select",
    question: "Você usa comida ou bebida pra aguentar o dia?",
    microcopy: "Cerveja, fritura e açúcar são os três assassinos silenciosos da testosterona. E a maioria dos homens usa os três todo dia.",
    options: [
      { value: "sim",    label: "Sim — como e bebo mais quando tô no limite",                    icon: "🍔", score: 0 },
      { value: "nao",    label: "Não bebo e como razoável — mas a barriga cresce do mesmo jeito", icon: "🥩", score: 1 },
      { value: "atleta", label: "Dieta limpa, sem álcool, treino regular",                       icon: "✅", score: 3 },
    ],
    triggers: {
      "sim": "🛑 Cada cerveja, cada fritura, cada dose de açúcar destrói diretamente as células que produzem testosterona. Você tá alimentando o inimigo todo dia.",
      "nao": "⚠ Comer limpo e engordar é pior do que parece. Significa que o metabolismo travou. O problema não é o prato — é o que tá acontecendo por dentro.",
    },
    weight: 5,
  },

  {
    id: 14,
    phase: 3,
    type: "single-select",
    question: "Sua vida tá te comendo vivo?",
    microcopy: "Estresse crônico produz cortisol. Cortisol destrói testosterona. É literal — um hormônio come o outro.",
    options: [
      { value: "paz",    label: "Não — tô tranquilo, sem pressão pesada",                          icon: "🧘", score: 3 },
      { value: "pesado", label: "Sim — dívida, briga em casa ou pressão no trabalho todo santo dia", icon: "🤯", score: 0 },
      { value: "morto",  label: "Esgotado total — não sei quanto mais aguento",                     icon: "💀", score: 0 },
    ],
    triggers: {
      "pesado": "🛑 Cada dia no estresse é um dia que o cortisol come sua testosterona viva. A conta chega — na cama, no espelho e na vontade de viver.",
      "morto":  "🛑 Esgotamento total é o corpo inteiro em colapso. Hormônio, foco, disposição, desejo — tudo caindo junto. Não melhora sozinho. Nunca melhora sozinho.",
    },
    weight: 5,
  },

  {
    id: 15,
    phase: 3,
    type: "single-select",
    question: "Você treina — ou parou?",
    microcopy: "Treino pesado é o único estímulo natural que FORÇA o corpo a produzir mais testosterona. Sem treino, o corpo entende que pode desligar tudo.",
    options: [
      { value: "regular",  label: "Treino 3x ou mais por semana — pesado",      icon: "💪", score: 3 },
      { value: "eventual", label: "De vez em quando — sem constância",          icon: "⚠️", score: 1 },
      { value: "zero",     label: "Parei — não tenho disposição nem pra começar", icon: "🛑", score: 0 },
    ],
    triggers: {
      "zero": "🛑 Sem treino, seu corpo entende que músculo é desperdício. Começa a destruir fibra e guardar gordura. E essa gordura produz mais estrogênio. É um ciclo que se alimenta sozinho.",
    },
    weight: 5,
    category: "fisica",
  },

  {
    id: 16,
    phase: 3,
    type: "single-select",
    question: "Já tentou resolver isso antes?",
    microcopy: "Sem julgamento. Preciso saber o que já foi tentado pra saber o que vai funcionar no seu caso.",
    options: [
      { value: "nunca",    label: "Nunca — fui empurrando com a barriga",                        icon: "🤐", score: 0 },
      { value: "medico",   label: "Fui no médico — me deu receita e me mandou embora",          icon: "👨‍⚕️", score: 0 },
      { value: "remedio",  label: "Comprei suplemento na internet — não adiantou nada",          icon: "💊", score: 0 },
      { value: "funciona", label: "Tenho acompanhamento e tô tratando a causa de verdade",      icon: "🏆", score: 3 },
    ],
    triggers: {
      "nunca":   "⚠ Empurrar com a barriga é a estratégia mais cara que existe. O preço é pago na cama, no espelho e no casamento.",
      "medico":  "🛑 Médico de plano te atende em 15 minutos, passa uma receita genérica e não trata a causa. É por isso que nada mudou.",
      "remedio": "🛑 Suplemento sem protocolo é como dar tiro no escuro. Não é que não funciona — é que você usou o errado, no momento errado, sem o método certo.",
    },
    weight: 0,
  },

  {
    id: 17,
    phase: 3,
    type: "single-select",
    question: "Como tá sua cabeça, {name}?",
    microcopy: "Falta de foco, de ambição e de tesão pela vida não é preguiça. É consequência direta de hormônio no chão.",
    options: [
      { value: "afiado",   label: "Afiado — foco, clareza, gás pra conquistar",          icon: "🎯", score: 3 },
      { value: "nebuloso", label: "Embaçado — esqueço coisas, perco o raciocínio",        icon: "🌫️", score: 0 },
      { value: "apagado",  label: "Apagado — sem ambição, sem tesão, sem fogo nenhum",    icon: "🕯️", score: 0 },
    ],
    triggers: {
      "apagado":  "🛑 Estar apagado assim não é falta de caráter. É falta de hormônio. Quando a testosterona cai abaixo de certo nível, o homem perde a vontade de existir. Tem solução.",
      "nebuloso": "⚠ Essa névoa mental é inflamação + hormônio baixo ao mesmo tempo. É o corpo pedindo socorro por dentro enquanto você tenta viver por fora.",
    },
    weight: 5,
    category: "mental",
  },

  // ══════════════════════════════════════════════
  // FASE 4: VEREDICTO — Tensão máxima + Revelação
  // ══════════════════════════════════════════════

  {
    id: 18,
    phase: 4,
    type: "single-select",
    question: "Agora a pergunta que a maioria dos homens tem medo de responder: como tá o tamanho e a firmeza do seu pênis hoje — comparado a 10 anos atrás?",
    microcopy: "Eu sei que é difícil admitir. Mas é exatamente aqui que tá a resposta. A gordura abdominal e o hormônio feminino destroem a circulação interna. Sem sangue entrando com pressão, o tecido encolhe. Homens podem perder até 3cm em uma década — sem perceber.",
    options: [
      { value: "intacto",  label: "Igual — mesmo tamanho e firmeza de sempre",             icon: "✅" },
      { value: "medio",    label: "Perdeu firmeza — menos duro, parece menor",             icon: "⚠️" },
      { value: "fino",     label: "Mudou bastante — mais fino, mais mole, visivelmente menor", icon: "🚨" },
      { value: "terrivel", label: "Muito diferente — parece que encolheu de vez",          icon: "🛑" },
    ],
    triggers: {
      _all: "Isso não é permanente. O que aconteceu foi que a circulação fechou por dentro. O tecido murchou por falta de sangue. O protocolo foi projetado pra desentupir essa circulação e devolver volume e rigidez — de dentro pra fora.",
    },
    weight: 30,
    category: "libido",
  },

  {
    id: 19,
    phase: 4,
    type: "single-select",
    question: "Última pergunta, {name}. Se eu te mostrar exatamente o que fazer pra reverter isso nos próximos 30 dias — você segue?",
    microcopy: "O método funciona. Mas só funciona pra quem faz.",
    options: [
      { value: "sim_total",  label: "Sim — me mostra o caminho e eu faço sem questionar",     icon: "🔥", score: 3 },
      { value: "sim_talvez", label: "Sim — mas preciso ver resultado rápido pra continuar",   icon: "⚡", score: 2 },
      { value: "prova",      label: "Preciso de prova primeiro — já fui enganado demais",     icon: "🔍", score: 1 },
    ],
    triggers: {
      "sim_total":  "✓ Esse é o perfil que tem os resultados mais rápidos. Homem que decide e age é homem que recupera. Seu veredicto tá pronto.",
      "sim_talvez": "✓ Resultado visível em menos de 14 dias. Firmeza de volta antes do mês acabar. Seu veredicto tá pronto.",
      "prova":      "✓ 14.281 homens. Resultado médio em 18 dias. O protocolo foi feito exatamente pra quem já tentou de tudo e desistiu de acreditar. Seu veredicto tá pronto.",
    },
    weight: 0,
  },

  // ══════════════════════════════════════════════
  // FASE 5: RESGATE — Desejo + Ação
  // ══════════════════════════════════════════════

  {
    id: 20,
    phase: 5,
    type: "whatsapp-input",
    question: "Qual é o seu WhatsApp, {name}?",
    microcopy: "Vou mandar seu laudo completo por lá — com o mapa exato do que tá acontecendo e o que fazer.",
    field: { name: "userWhatsapp", placeholder: "(11) 99999-9999" },
    optIn: { text: "Sim — quero receber o laudo e dicas de performance masculina pelo WhatsApp." },
    privacySeal: "🔒 Número 100% protegido. Sem spam. Sem compartilhamento.",
    weight: 0,
  },

  {
    id: 21,
    phase: 5,
    type: "single-select",
    question: "Onde isso tá destruindo mais a sua vida?",
    microcopy: "Essa resposta define qual protocolo é o certo pro seu caso.",
    options: [
      { value: "parceira", label: "Com minha mulher — a relação tá morrendo por causa disso",  icon: "💑" },
      { value: "eu_mesmo", label: "Comigo mesmo — não me reconheço mais",                      icon: "🪞" },
      { value: "trabalho", label: "No trabalho — perdi o fogo pra competir e ganhar",           icon: "🏆" },
      { value: "tudo",     label: "Em tudo — tô perdendo em todas as frentes",                  icon: "🌀" },
    ],
    weight: 0,
  },

  {
    id: 22,
    phase: 5,
    type: "single-select",
    question: "Seu resultado tá pronto, {name}.",
    microcopy: "O sistema cruzou tudo que você respondeu. O que vem agora é a verdade sobre a sua situação. Sem filtro.",
    options: [
      { value: "pronto",  label: "Mostra — eu aguento qualquer coisa.",   icon: "🔓", variant: "gold" },
      { value: "nervoso", label: "Tô nervoso — mas preciso saber.",       icon: "😰", variant: "red"  },
    ],
    triggers: {
      "pronto":  "✓ Homem que enfrenta a verdade já deu o primeiro passo. Gerando seu resultado agora.",
      "nervoso": "✓ Esse frio na barriga é sinal de que você ainda se importa. E quem se importa ainda pode mudar. Gerando agora.",
    },
    weight: 0,
  },

];

// ============================================================
// LOADING
// ============================================================
const LOADING_DATA = {
  headline: "{name}, você teve a coragem que a maioria não tem. Agora estamos montando o seu mapa.",
  messages: [
    "Cruzando sua idade com seu nível de dano acumulado...",
    "Calculando quanto hormônio masculino você ainda produz...",
    "Verificando se a sua janela de reversão ainda tá aberta...",
    "Identificando onde a queda começou no seu caso específico...",
    "Analisando por que o que você tentou antes não funcionou...",
    "Localizando o bloqueio de circulação que tá travando tudo...",
    "Resultado de {name} quase pronto...",
  ],
  duration: 9500,
};

// ============================================================
// BRIDGE
// ============================================================
const BRIDGE_DATA = {
  cta: "VER O PROTOCOLO COMPLETO",
};

// ============================================================
// RESULTADO
// ============================================================
const RESULT_DATA = {
  headlineTemplate: "{name}, aqui tá a verdade:",
  scoreZones: [
    {
      min: 0, max: 35,
      label: "SITUAÇÃO CRÍTICA",
      color: "#660000",
      description: "Seu corpo tá contra você. A testosterona despencou, o estrogênio tomou conta, a circulação fechou e o resultado aparece no espelho, na cama e no tamanho. Isso não melhora sozinho — piora. Mas você tá aqui. E o protocolo foi feito exatamente pra esse grau de dano.",
    },
    {
      min: 36, max: 60,
      label: "QUEDA ACELERADA",
      color: "#A83200",
      description: "Você ainda funciona — mas tá caindo rápido. O cansaço, a barriga e a moleza na cama não mentem. Se nada mudar nos próximos meses, vira permanente. A janela ainda tá aberta — mas não por muito tempo.",
    },
    {
      min: 61, max: 80,
      label: "RISCO REAL",
      color: "#B59200",
      description: "Dá pra segurar — mas depende de quando você age. Cada mês que passa sem tratar, uma porta fecha. O protocolo vai travar essa queda e começar a reverter antes que o dano vire colapso.",
    },
    {
      min: 81, max: 100,
      label: "ESTÁ BEM — MAS PRESTE ATENÇÃO",
      color: "#165c36",
      description: "Seus hormônios ainda tão firmes — mas isso não dura pra sempre. O protocolo pra você é blindar o que tem e garantir que a queda que destruiu outros homens nunca chegue em você.",
    },
  ],
  criticalAreas: {
    energia:     { label: "Energia e Disposição",  icon: "⚡" },
    mental:      { label: "Foco e Vontade",        icon: "🧠" },
    fisica:      { label: "Força e Músculo",        icon: "💪" },
    sono:        { label: "Qualidade do Sono",      icon: "🌙" },
    corpo:       { label: "Gordura e Estrogênio",   icon: "⚖️" },
    libido:      { label: "Tamanho, Firmeza e Desejo", icon: "🔥" },
    recuperacao: { label: "Recuperação Física",     icon: "♻️" },
  },
  cta: "QUERO REVERTER ISSO AGORA",
};

// ============================================================
// PROTOCOLO
// ============================================================
const PROTOCOL_DATA = {
  headline: "O Método Que 14.281 Homens Usaram Pra Voltar a Funcionar Como Antes",
  subheadline: "Sem remedinho azul. Sem médico de plano. Sem reposição hormonal cara. O que você vai ver aqui é o que funciona quando tudo mais falha.",
  features: [
    {
      icon: "🍆",
      title: "Tamanho e Volume de Volta em 90 Dias",
      desc: "O problema nunca foi genética. É circulação travada. O protocolo desentope os vasos que alimentam o tecido peniano, manda sangue com pressão de volta pra lá e recupera o que foi perdido. Homens relatam diferença visível de volume em menos de 60 dias.",
    },
    {
      icon: "🔩",
      title: "Duro Como Pedra — Do Começo ao Fim — Sem Muleta",
      desc: "Chega de remedinho. Chega de dependência. Os compostos certos restauram a circulação natural do corpo erétil — e você volta a ficar duro de verdade, firme a noite inteira, sem precisar engolir nada antes.",
    },
    {
      icon: "⏱️",
      title: "Controle Total: Dure o Quanto Quiser na Cama",
      desc: "O protocolo atua no controle neuromuscular que determina quanto tempo você aguenta. Resultado: você decide quando acaba. Não o seu corpo. Homens relatam dobrar o tempo de performance nas primeiras 3 semanas.",
    },
    {
      icon: "🔥",
      title: "Tesão de Predador — Vontade Que Você Não Sentia Há Anos",
      desc: "Para de converter testosterona em estrogênio. O resultado: desejo selvagem, iniciativa, confiança. Sua mulher vai perceber antes de você. E vai querer saber o que mudou.",
    },
    {
      icon: "⚡",
      title: "Energia Pra Dominar o Dia Inteiro — Acorda Pronto",
      desc: "Sono fundo de verdade. Hormônio produzido à noite como tem que ser. Você acorda disposto, focado, sem moleza — pronto pra mandar ver na cama e na vida.",
    },
  ],
  seal: "Acesso restrito — protocolo montado com base no seu diagnóstico",
  cta: "VER O PREÇO DO PROTOCOLO",
};

// ============================================================
// DEPOIMENTOS
// ============================================================
const TESTIMONIALS = [
  {
    initials: "Cesar M.", age: 52, occupation: "Dono de Construtora",
    photo: "https://i.pravatar.cc/80?img=70",
    text: "Minha mulher já tava dormindo de costas pra mim. Gastei fortuna com urologista que só passava remedinho. 15 dias depois de começar o protocolo eu acordei duro pela primeira vez em anos. Ela notou na mesma semana.",
    result: "Firmeza de volta em 15 dias", highlight: "+ Circulação Restaurada",
    painTags: ["parceira", "tudo"],
  },
  {
    initials: "Beto Q.", age: 44, occupation: "Investidor",
    photo: "https://i.pravatar.cc/80?img=69",
    text: "Tava com barriga de chope, peito inchado e zero vontade na cama. 30 dias: perdi 8kg, peito sumiu, acordo duro todo dia. Minha mulher perguntou se eu tava tomando algo. Eu ri.",
    result: "8kg a menos, firmeza de volta", highlight: "+ Estrogênio Eliminado",
    painTags: ["parceira", "eu_mesmo", "tudo"],
  },
  {
    initials: "Sérgio O.", age: 60, occupation: "Ex-Militar",
    photo: "https://i.pravatar.cc/80?img=66",
    text: "60 anos e dependia do azulzinho pra tudo. Minha mulher já nem esperava mais nada. Comecei o protocolo sem muita fé. Três semanas depois larguei o remédio. Funciono sozinho agora. Ela não acreditou.",
    result: "Largou o remedinho aos 60", highlight: "+ Circulação Natural Restaurada",
    painTags: ["parceira", "eu_mesmo", "tudo"],
  },
  {
    initials: "Marcos T.", age: 48, occupation: "Caminhoneiro",
    photo: "https://i.pravatar.cc/80?img=65",
    text: "Passava a semana na estrada e chegava em casa morto. Minha mulher achava que eu tinha outra. Na verdade eu não dava conta nem de mim. Depois do protocolo sobra disposição. Ela parou de desconfiar e voltou a sorrir.",
    result: "Disposição restaurada", highlight: "+ Energia Real de Volta",
    painTags: ["parceira", "tudo"],
  },
  {
    initials: "Ricardo F.", age: 55, occupation: "Advogado",
    photo: "https://i.pravatar.cc/80?img=64",
    text: "O estresse do escritório tinha acabado comigo. Mole na cama, gordo no espelho, irritado em casa. O protocolo mudou tudo em 3 semanas. Firmeza voltou. Barriga secou. Minha mulher não para de comentar.",
    result: "Firmeza e disposição de volta", highlight: "+ Cortisol Controlado",
    painTags: ["trabalho", "parceira", "tudo"],
  },
  {
    initials: "Paulo S.", age: 41, occupation: "Empresário",
    photo: "https://i.pravatar.cc/80?img=63",
    text: "Tava com peito crescendo e perdendo cabelo. Hormônio feminino tomando conta. Segui o protocolo. Em 45 dias: peito sumiu, barriga secou, vontade voltou com força. Me sinto como aos 25.",
    result: "Estrogênio eliminado", highlight: "+ Testosterona Livre Alta",
    painTags: ["eu_mesmo", "tudo"],
  },
  {
    initials: "André L.", age: 49, occupation: "Engenheiro",
    photo: "https://i.pravatar.cc/80?img=55",
    text: "Dez anos fingindo que tava tudo bem. Ereção fraca, barriga enorme, zero confiança. 30 dias de protocolo e voltei a funcionar sem muleta. Minha mulher disse que parece que trocou o marido.",
    result: "30 dias pra mudar tudo", highlight: "+ Volume e Firmeza de Volta",
    painTags: ["eu_mesmo", "parceira", "tudo"],
  },
  {
    initials: "Fábio R.", age: 53, occupation: "Médico",
    photo: "https://i.pravatar.cc/80?img=52",
    text: "Sou médico e não conseguia resolver meu próprio problema. A medicina convencional trata o sintoma e ignora a causa. Esse protocolo fez o que 5 anos de consulta não fizeram.",
    result: "Funcionou onde a medicina falhou", highlight: "+ Causa Raiz Tratada",
    painTags: ["eu_mesmo", "parceira", "tudo"],
  },
  {
    initials: "Jonas P.", age: 46, occupation: "Professor",
    photo: "https://i.pravatar.cc/80?img=18",
    text: "Chegava em casa e só queria dormir. Minha mulher achava que o problema era com ela. Depois do protocolo: energia sobrando, duro de manhã, duro à noite. Ela voltou a me olhar diferente.",
    result: "Energia e firmeza de volta", highlight: "+ Hormônio Produzido à Noite",
    painTags: ["parceira", "tudo"],
  },
  {
    initials: "Gilberto A.", age: 58, occupation: "Fazendeiro",
    photo: "https://i.pravatar.cc/80?img=17",
    text: "Trabalhava pesado e na cama era um desastre. Minha mulher dormia no outro quarto. Três semanas de protocolo e ela voltou pra cama. Disse que faz tempo que não me via assim.",
    result: "Ela voltou pro quarto em 3 semanas", highlight: "+ Força e Desejo Recuperados",
    painTags: ["parceira", "eu_mesmo", "tudo"],
  },
  {
    initials: "Renato C.", age: 43, occupation: "Policial",
    photo: "https://i.pravatar.cc/80?img=11",
    text: "Trabalho de risco, estresse na veia. Minha performance na cama tinha ido pro lixo. Comecei sem acreditar. Duas semanas: voltei a durar o que durava antes. Três semanas: duro como pedra sem tomar nada.",
    result: "Duração e firmeza de volta", highlight: "+ Controle Neuromuscular Ativado",
    painTags: ["trabalho", "eu_mesmo", "tudo"],
  },
  {
    initials: "Hélio M.", age: 61, occupation: "Aposentado",
    photo: "https://i.pravatar.cc/80?img=3",
    text: "61 anos. Cinco anos sem funcionar direito. Minha mulher já tinha aceitado. Eu não. Comecei o protocolo. Três semanas depois acordei duro. Ela chorou. Eu também.",
    result: "Voltou a funcionar aos 61", highlight: "+ Circulação Interna Reaberta",
    painTags: ["parceira", "eu_mesmo", "tudo"],
  },
];

function getFilteredTestimonials(painArea) {
  const filtered = TESTIMONIALS.filter(t => t.painTags && t.painTags.includes(painArea));
  const pool = filtered.length >= 3 ? filtered : TESTIMONIALS;
  return [...pool].sort(() => Math.random() - 0.5).slice(0, 3);
}

// ============================================================
// PRICING
// ============================================================
const PRICING_DATA = {
  urgencyText: "Esse preço some em:",
  timerMinutes: 8,
  checkoutCtaMap: {
    parceira: "COMEÇAR AGORA",
    eu_mesmo: "COMEÇAR AGORA",
    trabalho: "COMEÇAR AGORA",
    tudo:     "COMEÇAR AGORA",
    _default: "COMEÇAR AGORA",
  },
  plans: [
    {
      id: "vitalicio",
      name: "ACESSO COMPLETO — PAGA UMA VEZ SÓ",
      price: 67,
      originalPrice: 797,
      period: "pagamento único — acesso pra sempre",
      description: "O protocolo completo, sem restrição, sem limite",
      badge: "🔓 MELHOR OPÇÃO",
      ctaLabel: "QUERO O PROTOCOLO COMPLETO",
      ctaTag: "PLANO PRINCIPAL",
      features: [
        "Tamanho e volume de volta em 90 dias — protocolo de circulação peniana",
        "Duro como pedra de manhã e na hora H — sem remedinho, sem muleta",
        "Controle total na cama — dure o quanto quiser, você decide quando acaba",
        "Tesão de predador — desejo intenso como você tinha antes",
        "Barriga que fabrica estrogênio: protocolo pra secar e eliminar",
        "Acesso vitalício — todas as atualizações incluídas pra sempre",
      ],
    },
    {
      id: "mensal",
      name: "ACESSO PARCIAL — POR MÊS",
      price: 37,
      originalPrice: 97,
      period: "por mês — acesso limitado",
      description: "Só o básico",
      badge: null,
      ctaLabel: "COMEÇAR PEQUENO",
      ctaTag: "PLANO BÁSICO",
      features: [
        "Só o módulo básico — sem o protocolo de circulação",
        "Sem o módulo de tamanho e firmeza",
        "Sem o protocolo de controle e duração",
        "Sem suporte personalizado",
      ],
    },
  ],
  guarantee: {
    title: "30 DIAS — SE NÃO FUNCIONAR, DEVOLVO TUDO. CADA CENTAVO.",
    text: "Segue o protocolo por 30 dias. Se sua firmeza, seu tamanho, sua duração e seu pique não melhorarem de forma clara e visível — devolvo 100% do seu dinheiro. Sem pergunta, sem enrolação, sem letra miúda. Você não arrisca nada. Zero.",
    icon: "🛡️",
  },
  paymentMethods: ["Pix • Cartão de Crédito • Boleto • Pagamento 100% Seguro"],
};

// ============================================================
// THANK YOU
// ============================================================
const THANKYOU_DATA = {
  headline: "Bem-vindo ao outro lado, {name}.",
  subheadline: "O protocolo tá liberado. Agora é com você.",
  steps: [
    {
      number: "01",
      title: "Acesso chega em até 5 minutos",
      desc: "O link vai pro seu email assim que o pagamento confirmar.",
    },
    {
      number: "02",
      title: "Comece pelo protocolo de circulação",
      desc: "É o primeiro módulo. Leia hoje, compre o que precisa amanhã cedo, comece amanhã à noite.",
    },
    {
      number: "03",
      title: "Siga exatamente como tá escrito",
      desc: "Algumas coisas vão parecer estranhas. Faz assim mesmo. É onde tá o resultado.",
    },
    {
      number: "04",
      title: "Não conta pra ninguém",
      desc: "As pessoas ao seu redor vão notar a diferença. Sua mulher vai notar. Deixa o resultado falar por você.",
    },
  ],
  cta: "ACESSAR O PROTOCOLO AGORA",
};
