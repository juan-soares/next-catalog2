import { MediaDetails } from "../types";

export const MEDIAS_MOCK: MediaDetails[] = [
  {
    slug: "naruto-2020--anime-aHaH",
    path: "/animes/naruto-2020--anime-aHaH",
    type: { label: "Animes", path: "/animes", code: "anime" },
    languages: ["pt-br"],

    title: "Naruto",
    translatedTitle: "asasa",
    releaseYear: 2020,
    synopsis:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime asperiores, quis dolore quas excepturi eos, amet dicta dolorum consequuntur veniam tempore recusandae laudantium, cum deserunt sequi pariatur. Doloribus, ab assumenda!",

    themes: [{ label: "Ninja" }],
    characters: [],

    cover: {
      url: "/assets/medias/naruto-2020--anime-aHaH-capa.jpg",
      alt: "Capa do título Naruto",
    },
    trailer: {
      url: "/assets/medias/naruto-2020--anime-aHaH-trailer.mp4",
      fileType: "video/mp4",
    },

    seasons: [
      {
        id: "1234",
        groupType: { label: "Temporada" },
        number: 1,
        releaseYear: 2000,
        title: "-",
        translatedTitle: "",
        language: "DUAL",
        resolution: "1080p",

        cover: { url: "/assets/", alt: "Capa da temporada de Naruto." },
        trailer: { url: "/assets/", fileType: "video/mp4" },
        synopsis:
          " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime asperiores, quis dolore quas excepturi eos, amet dicta dolorum consequuntur veniam tempore recusandae laudantium, cum deserunt sequi pariatur. Doloribus, ab assumenda!",
        status: {
          acquired: false,
          consumed: false,
        },
        units: [
          {
            id: "123",
            number: 1,
            title: "Era uma vez",
            status: {
              acquired: false,
              consumed: false,
            },
          },
        ],
      },
    ],

    ovas: [
      {
        id: "1234",
        groupType: { label: "OVA" },
        number: 1,
        releaseYear: 2000,
        title: "-",
        translatedTitle: "",
        language: "DUAL",
        resolution: "1080p",

        cover: { url: "/assets/", alt: "Capa do OVA de Naruto." },
        trailer: { url: "/assets/", fileType: "video/mp4" },
        synopsis:
          " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime asperiores, quis dolore quas excepturi eos, amet dicta dolorum consequuntur veniam tempore recusandae laudantium, cum deserunt sequi pariatur. Doloribus, ab assumenda!",
        status: {
          acquired: false,
          consumed: false,
        },
        units: [
          {
            id: "123",
            number: 1,
            title: "Era uma vez",
            status: {
              acquired: false,
              consumed: false,
            },
          },
        ],
      },
    ],

    specials: [
      {
        id: "1234",
        groupType: { label: "OVA" },
        number: 1,
        releaseYear: 2000,
        title: "-",
        translatedTitle: "",
        language: "DUAL",
        resolution: "1080p",

        cover: { url: "/assets/", alt: "Capa do OVA de Naruto." },
        trailer: { url: "/assets/", fileType: "video/mp4" },
        synopsis:
          " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime asperiores, quis dolore quas excepturi eos, amet dicta dolorum consequuntur veniam tempore recusandae laudantium, cum deserunt sequi pariatur. Doloribus, ab assumenda!",
        status: {
          acquired: false,
          consumed: false,
        },
        units: [],
      },
    ],

    gallery: [
      {
        fileName: "123",
        url: "/assets/medias/naruto-franchise-aHaH-gallery-ahaH.png",
        alt: "Imagem de naruto.",
      },
    ],

    files: [
      {
        label: "Manual",
        fileName: "adase",
        fileSize: "100mb",
        fileType: ".pdf",
      },
    ],

    sequel: {
      next: {
        title: "Naruto Shippuden",
        releaseYear: 2021,
        path: "/animes/naruto-shippuden-2021",
        cover: { url: "/assets/naruto.png", alt: "capa" },
      },
    },

    franchises: [
      {
        title: "Naruto",
        path: "/franquias/naruto-2020",
        slug: "naruto-2020",
        logo: {
          url: "/assets/franchises/naruto-franchise-aHaH-logo.png",
          alt: "Logo da franquia Naruto",
        },
      },
      {
        title: "Naruto Anime",
        path: "/franquias/naruto-anime-2020",
        slug: "naruto-anime-2020",
        logo: {
          url: "/assets/naruto-anime-franchise-aHaH-logo.png",
          alt: "Logo da franquia Naruto Anime",
        },
      },
    ],

    status: {
      acquired: false,
      consumed: false,
    },
  },

  {
    slug: "interestelar-2014--movie-aHaH",
    path: "/filmes-live-action/interestelar-2014--movie-aHaH",
    type: { label: "Filmes", path: "/filmes", code: "live-action-movie" },
    languages: ["pt-br"],
    title: "Interestelar",
    translatedTitle: "Interstellar",
    releaseYear: "2014",
    synopsis:
      "Em um futuro próximo, a Terra enfrenta uma crise ambiental que ameaça a sobrevivência da humanidade. Cooper, um ex-piloto da NASA, é recrutado para participar de uma missão espacial que busca um novo lar para a humanidade, viajando por um buraco de minhoca em busca de planetas habitáveis.",

    themes: [
      { label: "Ficção científica" },
      { label: "Espaço" },
      { label: "Viagem no tempo" },
      { label: "Drama" },
    ],
    characters: [],

    cover: {
      url: "/assets/medias/interestelar-2014--movie-aHaH-capa.jpg",
      alt: "Capa do filme Interestelar",
    },

    trailer: {
      url: "/assets/medias/interestelar-2014--movie-aHaH-trailer.mp4",
      fileType: "video/mp4",
    },

    gallery: [
      {
        fileName: "interestelar-cena-1",
        url: "/assets/medias/interestelar-2014--movie-aHaH-gallery-1.png",
        alt: "Cooper e sua equipe durante a missão espacial.",
      },
      {
        fileName: "interestelar-cena-2",
        url: "/assets/medias/interestelar-2014--movie-aHaH-gallery-2.png",
        alt: "A nave Endurance durante a exploração espacial.",
      },
    ],

    files: [
      {
        label: "Roteiro",
        fileName: "interestelar-roteiro",
        fileSize: "100mb",
        fileType: ".pdf",
      },
    ],

    sequel: {},

    franchises: [
      {
        title: "Interestelar",
        path: "/franquias/interestelar",
        slug: "interestelar",
        logo: {
          url: "/assets/franchises/interestelar-logo.png",
          alt: "Logo da franquia Interestelar",
        },
      },
    ],

    status: {
      acquired: false,
      consumed: false,
    },
  },

  {
    slug: "homem-aranha-2020--comic-book-aHaH",
    path: "/hqs/homem-aranha-2020--comic-book-aHaH",
    type: {
      label: "HQs",
      path: "/hqs",
      code: "comic-book",
    },
    languages: ["pt-br"],

    title: "Homem-Aranha",
    translatedTitle: "Spider-Man",
    releaseYear: "2020",
    synopsis:
      "Peter Parker enfrenta novos desafios enquanto equilibra sua vida pessoal com as responsabilidades de ser o Homem-Aranha. Entre ameaças inesperadas, inimigos perigosos e dilemas pessoais, o herói precisa proteger Nova York e aqueles que ama.",

    themes: [
      { label: "Super-heróis" },
      { label: "Ação" },
      { label: "Aventura" },
      { label: "Ficção científica" },
    ],
    characters: [],

    cover: {
      url: "/assets/medias/homem-aranha-2020--comic-book-aHaH-capa.jpg",
      alt: "Capa da HQ Homem-Aranha",
    },

    trailer: {
      url: "/assets/medias/homem-aranha-2020--comic-book-aHaH-trailer.mp4",
      fileType: "video/mp4",
    },

    volumes: [
      {
        id: "volume-1",
        groupType: { label: "Volume" },
        number: 1,
        releaseYear: 2020,
        title: "Grandes Poderes",
        translatedTitle: "Great Power",
        language: "PT-BR",
        resolution: "Digital",

        cover: {
          url: "/assets/medias/homem-aranha-2020-volume-1-capa.jpg",
          alt: "Capa do volume 1 de Homem-Aranha",
        },

        trailer: {
          url: "/assets/medias/homem-aranha-2020-volume-1-trailer.mp4",
          fileType: "video/mp4",
        },

        synopsis:
          "Peter Parker precisa enfrentar uma nova ameaça em Nova York enquanto tenta conciliar sua vida pessoal com suas responsabilidades como herói.",

        status: {
          acquired: false,
          consumed: false,
        },

        units: [
          {
            id: "volume-1-edicao-1",
            number: 1,
            title: "Um Novo Começo",
            status: {
              acquired: false,
              consumed: false,
            },
          },
          {
            id: "volume-1-edicao-2",
            number: 2,
            title: "Ameaças nas Sombras",
            status: {
              acquired: false,
              consumed: false,
            },
          },
          {
            id: "volume-1-edicao-3",
            number: 3,
            title: "O Preço da Responsabilidade",
            status: {
              acquired: false,
              consumed: false,
            },
          },
        ],
      },

      {
        id: "volume-2",
        groupType: { label: "Volume" },
        number: 2,
        releaseYear: 2021,
        title: "Novos Inimigos",
        translatedTitle: "New Enemies",
        language: "PT-BR",
        resolution: "Digital",

        cover: {
          url: "/assets/medias/homem-aranha-2020-volume-2-capa.jpg",
          alt: "Capa do volume 2 de Homem-Aranha",
        },

        trailer: {
          url: "/assets/medias/homem-aranha-2020-volume-2-trailer.mp4",
          fileType: "video/mp4",
        },

        synopsis:
          "Uma nova ameaça surge e coloca à prova as habilidades e a determinação do Homem-Aranha, levando Peter Parker a enfrentar consequências inesperadas.",

        status: {
          acquired: false,
          consumed: false,
        },

        units: [
          {
            id: "volume-2-edicao-1",
            number: 1,
            title: "O Retorno do Perigo",
            status: {
              acquired: false,
              consumed: false,
            },
          },
        ],
      },
    ],

    gallery: [
      {
        fileName: "homem-aranha-cena-1",
        url: "/assets/medias/homem-aranha-2020--comic-book-aHaH-gallery-1.png",
        alt: "Homem-Aranha em ação nos prédios de Nova York.",
      },
      {
        fileName: "homem-aranha-cena-2",
        url: "/assets/medias/homem-aranha-2020--comic-book-aHaH-gallery-2.png",
        alt: "Ilustração do Homem-Aranha enfrentando seus inimigos.",
      },
    ],

    files: [
      {
        label: "Guia de leitura",
        fileName: "homem-aranha-guia-de-leitura",
        fileSize: "10mb",
        fileType: ".pdf",
      },
    ],

    sequel: {},

    franchises: [
      {
        title: "Homem-Aranha",
        path: "/franquias/homem-aranha",
        slug: "homem-aranha",
        logo: {
          url: "/assets/franchises/homem-aranha-logo.png",
          alt: "Logo da franquia Homem-Aranha",
        },
      },
    ],

    status: {
      acquired: false,
      consumed: false,
    },
  },

  {
    slug: "anitta-2013--music-aHaH",
    path: "/musicas/anitta-2013--music-aHaH",
    type: {
      label: "Músicas",
      path: "/musicas",
      code: "music",
    },
    languages: ["pt-br"],

    title: "Anitta",
    translatedTitle: "",
    releaseYear: "2013",
    synopsis:
      "Anitta é uma cantora brasileira que ganhou destaque no cenário musical com uma mistura de pop, funk carioca, reggaeton e outros ritmos. Ao longo de sua carreira, conquistou reconhecimento nacional e internacional com músicas em português, espanhol e inglês.",

    themes: [
      { label: "Pop" },
      { label: "Funk carioca" },
      { label: "Reggaeton" },
      { label: "Música brasileira" },
    ],
    characters: [],

    cover: {
      url: "/assets/medias/anitta-2013--music-aHaH-capa.jpg",
      alt: "Capa da artista Anitta",
    },

    trailer: {
      url: "/assets/medias/anitta-2013--music-aHaH-trailer.mp4",
      fileType: "video/mp4",
    },

    concerts: [],

    albums: [
      {
        id: "album-1",
        groupType: { label: "Álbum" },
        number: 1,
        releaseYear: 2013,
        title: "Anitta",
        translatedTitle: "",
        language: "PT-BR",
        resolution: "320kbps",

        cover: {
          url: "/assets/medias/anitta-album-1-capa.jpg",
          alt: "Capa do álbum Anitta",
        },

        trailer: {
          url: "/assets/medias/anitta-album-1-trailer.mp4",
          fileType: "video/mp4",
        },

        synopsis:
          "Álbum de estreia de Anitta, lançado em 2013, que reúne músicas de pop e funk carioca e ajudou a consolidar sua carreira no Brasil.",

        status: {
          acquired: false,
          consumed: false,
        },

        units: [
          {
            id: "album-1-faixa-1",
            number: 1,
            title: "Show das Poderosas",
            status: {
              acquired: false,
              consumed: false,
            },
          },
          {
            id: "album-1-faixa-2",
            number: 2,
            title: "Meiga e Abusada",
            status: {
              acquired: false,
              consumed: false,
            },
          },
          {
            id: "album-1-faixa-3",
            number: 3,
            title: "Não Para",
            status: {
              acquired: false,
              consumed: false,
            },
          },
        ],
      },

      {
        id: "album-2",
        groupType: { label: "Álbum" },
        number: 2,
        releaseYear: 2014,
        title: "Ritmo Perfeito",
        translatedTitle: "",
        language: "PT-BR",
        resolution: "320kbps",

        cover: {
          url: "/assets/medias/anitta-album-2-capa.jpg",
          alt: "Capa do álbum Ritmo Perfeito",
        },

        trailer: {
          url: "/assets/medias/anitta-album-2-trailer.mp4",
          fileType: "video/mp4",
        },

        synopsis:
          "Segundo álbum de estúdio de Anitta, com músicas que exploram o pop brasileiro e o funk, ampliando a identidade musical da artista.",

        status: {
          acquired: false,
          consumed: false,
        },

        units: [
          {
            id: "album-2-faixa-1",
            number: 1,
            title: "Ritmo Perfeito",
            status: {
              acquired: false,
              consumed: false,
            },
          },
          {
            id: "album-2-faixa-2",
            number: 2,
            title: "Na Batida",
            status: {
              acquired: false,
              consumed: false,
            },
          },
          {
            id: "album-2-faixa-3",
            number: 3,
            title: "No Meu Talento",
            status: {
              acquired: false,
              consumed: false,
            },
          },
        ],
      },

      {
        id: "album-3",
        groupType: { label: "Álbum" },
        number: 3,
        releaseYear: 2015,
        title: "Bang",
        translatedTitle: "",
        language: "PT-BR",
        resolution: "320kbps",

        cover: {
          url: "/assets/medias/anitta-album-3-capa.jpg",
          alt: "Capa do álbum Bang",
        },

        trailer: {
          url: "/assets/medias/anitta-album-3-trailer.mp4",
          fileType: "video/mp4",
        },

        synopsis:
          "Álbum que marcou uma nova fase visual e musical na carreira de Anitta, combinando pop, influências eletrônicas e ritmos brasileiros.",

        status: {
          acquired: false,
          consumed: false,
        },

        units: [
          {
            id: "album-3-faixa-1",
            number: 1,
            title: "Bang",
            status: {
              acquired: false,
              consumed: false,
            },
          },
          {
            id: "album-3-faixa-2",
            number: 2,
            title: "Deixa Ele Sofrer",
            status: {
              acquired: false,
              consumed: false,
            },
          },
          {
            id: "album-3-faixa-3",
            number: 3,
            title: "Essa Mina É Louca",
            status: {
              acquired: false,
              consumed: false,
            },
          },
        ],
      },
    ],

    gallery: [
      {
        fileName: "anitta-gallery-1",
        url: "/assets/medias/anitta-2013--music-aHaH-gallery-1.png",
        alt: "Anitta durante uma apresentação musical.",
      },
      {
        fileName: "anitta-gallery-2",
        url: "/assets/medias/anitta-2013--music-aHaH-gallery-2.png",
        alt: "Anitta em uma sessão fotográfica promocional.",
      },
    ],

    files: [
      {
        label: "Biografia",
        fileName: "anitta-biografia",
        fileSize: "10mb",
        fileType: ".pdf",
      },
    ],

    sequel: {},

    franchises: [
      {
        title: "Anitta",
        path: "/franquias/anitta",
        slug: "anitta",
        logo: {
          url: "/assets/franchises/anitta-logo.png",
          alt: "Logo da artista Anitta",
        },
      },
    ],

    status: {
      acquired: false,
      consumed: false,
    },
  },

  {
    slug: "the-sims-4-2014--video-game-aHaH",
    path: "/jogos-eletronicos/the-sims-4-2014--video-game-aHaH",
    title: "The Sims 4",
    translatedTitle: "The Sims 4",
    releaseYear: "2014",
    languages: ["pt-br"],
    type: {
      label: "Jogos eletrônicos",
      path: "/jogos-eletronicos",
      code: "video-game",
    },

    synopsis:
      "The Sims 4 é um jogo de simulação de vida no qual o jogador cria personagens, constrói casas e acompanha histórias em um mundo virtual. É possível personalizar a aparência, a personalidade, os relacionamentos, a carreira e a rotina dos Sims, além de ampliar a experiência com conteúdos adicionais.",

    themes: [
      { label: "Simulação" },
      { label: "Vida virtual" },
      { label: "Construção" },
      { label: "Criatividade" },
    ],
    characters: [],

    cover: {
      url: "/assets/medias/the-sims-4-2014--video-game-aHaH-capa.jpg",
      alt: "Capa do jogo The Sims 4",
    },

    trailer: {
      url: "/assets/medias/the-sims-4-2014--video-game-aHaH-trailer.mp4",
      fileType: "video/mp4",
    },

    gameDetails: {
      platforms: ["PC", "macOS", "PlayStation 4", "Xbox One"],

      genres: ["Simulação", "Sandbox", "Casual"],

      gameplay:
        "Crie e personalize Sims, construa residências, desenvolva relacionamentos, explore carreiras e controle diferentes aspectos da vida cotidiana dos personagens.",

      modes: ["Um jogador"],

      players: {
        min: 1,
        max: 1,
      },
    },

    gameEdition: {
      base: null,

      dlcs: [
        {
          title: "The Sims 4 Vida de Gato e Cachorro",
          cover: {
            url: "/assets/medias/the-sims-4-cats-dogs-capa.jpg",
            alt: "Capa de The Sims 4 Gatos e Cães",
          },
          releaseYear: 2017,
          path: "/jogos-eletronicos/the-sims-4-gatos-e-caes-2017",
        },
        {
          title: "The Sims 4 Decoração dos Sonhos",
          cover: {
            url: "/assets/medias/the-sims-4-dream-home-decorator-capa.jpg",
            alt: "Capa de The Sims 4 Decoração dos Sonhos",
          },
          releaseYear: 2021,
          path: "/jogos-eletronicos/the-sims-4-decoracao-dos-sonhos-2021",
        },
      ],

      expansions: [
        {
          title: "The Sims 4 Ao Trabalho",
          cover: {
            url: "/assets/medias/the-sims-4-get-to-work-capa.jpg",
            alt: "Capa de The Sims 4 Ao Trabalho",
          },
          releaseYear: 2015,
          path: "/jogos-eletronicos/the-sims-4-ao-trabalho-2015",
        },
        {
          title: "The Sims 4 Junte-se à Galera",
          cover: {
            url: "/assets/medias/the-sims-4-get-together-capa.jpg",
            alt: "Capa de The Sims 4 Junte-se à Galera",
          },
          releaseYear: 2015,
          path: "/jogos-eletronicos/the-sims-4-junte-se-a-galera-2015",
        },
        {
          title: "The Sims 4 Vida na Cidade",
          cover: {
            url: "/assets/medias/the-sims-4-city-living-capa.jpg",
            alt: "Capa de The Sims 4 Vida na Cidade",
          },
          releaseYear: 2016,
          path: "/jogos-eletronicos/the-sims-4-vida-na-cidade-2016",
        },
        {
          title: "The Sims 4 Estações",
          cover: {
            url: "/assets/medias/the-sims-4-seasons-capa.jpg",
            alt: "Capa de The Sims 4 Estações",
          },
          releaseYear: 2018,
          path: "/jogos-eletronicos/the-sims-4-estacoes-2018",
        },
        {
          title: "The Sims 4 Vida Campestre",
          cover: {
            url: "/assets/medias/the-sims-4-cottage-living-capa.jpg",
            alt: "Capa de The Sims 4 Vida Campestre",
          },
          releaseYear: 2021,
          path: "/jogos-eletronicos/the-sims-4-vida-campestre-2021",
        },
      ],
    },

    sequel: {},

    gallery: [
      {
        fileName: "the-sims-4-gallery-1",
        url: "/assets/medias/the-sims-4-gallery-1.png",
        alt: "Personagens de The Sims 4 em uma residência.",
      },
      {
        fileName: "the-sims-4-gallery-2",
        url: "/assets/medias/the-sims-4-gallery-2.png",
        alt: "Construção e personalização de uma casa em The Sims 4.",
      },
    ],

    files: [
      {
        label: "Manual do jogo",
        fileName: "the-sims-4-manual",
        fileType: ".pdf",
        fileSize: "10mb",
      },
    ],

    franchises: [
      {
        title: "The Sims",
        slug: "the-sims",
        path: "/franquias/the-sims",
        logo: {
          url: "/assets/franchises/the-sims-logo.png",
          alt: "Logo da franquia The Sims",
        },
      },
    ],

    status: {
      acquired: false,
      consumed: false,
    },
  },
];
