Estou desenvolvendo um projeto de gerenciamento de mídias com Next.js, React e TypeScript.

Quero continuar o desenvolvimento exatamente de onde paramos em uma conversa anterior.

Contexto arquitetural:

Temos diferentes categorias de mídia: anime, series, cartoon, live-action-movie, animated-movie, board-game, video-game, music-artist, book, comic e manga.
Utilizamos uma tipagem compartilhada baseada em MediaBase, com tipos específicos para cada categoria e uma união discriminada chamada Media.
As URLs são amigáveis e em português, como /animes, /video-games, /jogos-de-tabuleiro etc.
As páginas utilizam a estrutura app/[categoria]/[media-slug]/page.tsx.
O header contém informações fixas da mídia.
As sections são alteradas por meio de tabs controladas por searchParams.
Queremos componentes reutilizáveis para todas as categorias, mantendo componentes específicos quando necessário.

Arquitetura visual planejada:

text
MediaPage
├── MediaHeader
├── MediaTabs
└── MediaContent
├── InfoSection
├── CollectionsSection
├── CharactersSection
├── ContinuitySection
├── GallerySection
├── FilesSection
└── FranchisesSection

Onde paramos:

Estamos começando a implementação dos componentes compartilhados.

A primeira tarefa será implementar:

<MediaHeader media={media} />

Quero desenvolver isso passo a passo, discutindo a estrutura, tipagem e responsabilidades de cada componente antes de avançar.

Vou fornecer o documento de contexto, as tipagens e os protótipos existentes para mantermos a continuidade.

Não quero que você reinvente a arquitetura já definida sem antes discutir comigo.
