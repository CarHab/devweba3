const prods = [
  {
    id: 1,
    nome: 'Camisa básica',
    cor: 'Preta',
    preco: '15.00',
    foto: 'mule.png',
    estoque: 509,
    categoria: 'camisa',
    descricao:
      'Camiseta básica feminina confeccionada em malha de algodão, uma peça que proporciona conforto e toque suave. O modelo World conta com uma modelagem regular, proporcionando um caimento solto ao corpo, gola redonda e mangas curtas. A peça não possui costuras laterais trazendo mais conforto e satisfação ao vestir. Com ampla cartela de cores, aposte nesse modelo clássico e indispensável no guarda-roupa masculino. Invista em você! Cores cinza (MD3, M2H, 1A, 1B, 1C e 1D) possuem poliéster em sua composição.',
  },
  {
    id: 2,
    nome: 'Moletom street',
    cor: 'Amarelo',
    preco: '40.31',
    foto: 'homi2.jpeg',
    estoque: 961,
    categoria: 'camisa',
    descricao:
      'Jaqueta básica masculina, em malha moletom de algodão. Possui caimento soltinho bem confortável, mangas longas, abertura frontal por zíper, bolso canguru, capuz com cordão para ajuste e acabamento em ribana ajustada na barra e punhos. Invista e componha looks modernos e cheios de personalidade!',
  },
  {
    id: 3,
    nome: 'Jaqueta social',
    cor: 'Amarelo',
    preco: '70.00',
    foto: 'homi.jpg',
    estoque: 772,
    categoria: 'camisa',
    descricao:
      'Moderna, estilosa e sofisticada! A Camisa sarja masculina traz modernidade e estilo ao visual de todo homem. Confeccionada em tecido sarja de algodão proporcionando caimento confortável ao vestir, possui modelagem regular com shape reto e mais soltinho ao corpo. O modelo conta com colarinho, mangas longas, fechamento frontal por botões e bolsos frontais. Detalhe da barra arredondada traz ainda mais charme para a peça! Combine com bermudas ou calças da estação, para um visual mais estiloso ainda aposte em shorts florais. Invista!',
  },
  {
    id: 4,
    nome: 'Casaco',
    cor: 'Cinza',
    preco: '50.00',
    foto: 'mule2.jpg',
    estoque: 932,
    categoria: 'calca',
    descricao:
      'Blusão feminino desenvolvido em moletom peluciado de algodão e com modelagem oversized. A tendência oversized vem caindo no gosto das pessoas que buscam aliar conforto e estilo. Inspirada na moda urbana, o estilo é caracterizado pelo uso de roupas mais largas, como se fossem uma numeração maior do que o habitual. O modelo ainda conta com acabamento em ribana na gola, na barra e nos punhos. Aposte e monte looks modernos e com um toque de personalidade!',
  },
  {
    id: 5,
    nome: 'Jaqueta jeans',
    cor: 'Azul',
    preco: '50.00',
    foto: 'homi3.jpeg',
    estoque: 828,
    categoria: 'camisa',
    descricao:
      'Jaqueta jeans moletom masculina, confeccionada em tecido jeans de algodão e elastano. O jeans está sempre em alta, independente de qualquer tendência ou moda. Esse modelo em moletom Denim traz um aspecto jeans com toda a elasticidade de um moletom. Possui uma modelagem fluída com um caimento perfeito ao corpo, fechamento por botões, bolsos frontais e costura em cor contrastante. Destaque para os processos de lavanderia, tornando-a única e cheia de estilo. Invista!',
  },
  {
    id: 6,
    nome: 'Jaqueta de couro',
    cor: 'preto',
    preco: '65.00',
    foto: 'mule3.jpeg',
    estoque: 552,
    categoria: 'camisa',
    descricao:
      'Camiseta confeccionada com amor e muito cuidado, o algodão além de ser confortável proporciona uma melhor transpiração. possui gola redonda, mangas curtas e estampa frontal com mensagens de amor. e pra você, o que é básico e essencial? Para o time Somerveller, básico é estar sempre junto, e nesse momento estamos juntos, mesmo à distância. cuide-se!',
  },
  {
    id: 7,
    nome: 'Jaqueta de couro',
    cor: 'preto',
    preco: '65.00',
    foto: 'mule3.jpeg',
    estoque: 552,
    categoria: 'camisa',
    descricao:
      'Camiseta confeccionada com amor e muito cuidado, o algodão além de ser confortável proporciona uma melhor transpiração. possui gola redonda, mangas curtas e estampa frontal com mensagens de amor. e pra você, o que é básico e essencial? Para o time Somerveller, básico é estar sempre junto, e nesse momento estamos juntos, mesmo à distância. cuide-se!',
  },
  {
    id: 8,
    nome: 'Jaqueta de couro',
    cor: 'preto',
    preco: '65.00',
    foto: 'homi2.jpeg',
    estoque: 552,
    categoria: 'sapato',
    descricao:
      'Camiseta confeccionada com amor e muito cuidado, o algodão além de ser confortável proporciona uma melhor transpiração. possui gola redonda, mangas curtas e estampa frontal com mensagens de amor. e pra você, o que é básico e essencial? Para o time Somerveller, básico é estar sempre junto, e nesse momento estamos juntos, mesmo à distância. cuide-se!',
  },
  {
    id: 9,
    nome: 'Jaqueta jeans 2',
    cor: 'Azul',
    preco: '50.00',
    foto: 'homi3.jpeg',
    estoque: 828,
    categoria: 'camisa',
    descricao:
      'Jaqueta jeans moletom masculina, confeccionada em tecido jeans de algodão e elastano. O jeans está sempre em alta, independente de qualquer tendência ou moda. Esse modelo em moletom Denim traz um aspecto jeans com toda a elasticidade de um moletom. Possui uma modelagem fluída com um caimento perfeito ao corpo, fechamento por botões, bolsos frontais e costura em cor contrastante. Destaque para os processos de lavanderia, tornando-a única e cheia de estilo. Invista!',
  }
];
