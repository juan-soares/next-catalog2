import { MediaCharacter } from "@/modules/media-character";
import { MediaGroup } from "@/modules/media-group";
import { MediaTypeCode } from "@/modules/media-type";

type MediaUnit = {};
type MediaGroup = {};
//Temporadas, OVAs e especiais, com episódios.
type MediaEpisodeGroupView = MediaGroup & { episodes: MediaUnit[] };
//Volumes de HQs, com edições.
type MediaVolumeView = MediaGroup & { editions: MediaUnit[] };
//Álbuns e concertos, com faixas.
type MediaMusicGroupView = MediaGroup & { tracks: MediaUnit[] };

//Informações específicas dos jogos: plataformas, gêneros, jogabilidade, modos e jogadores.
type MediaGameDetailsView = {};
//Edição base, DLCs e expansões de um jogo.
type MediaGameEditionView = {};

//Mídia anterior ou seguinte, usada em sequel.
type MediaRelatedMediaView = {};

//Vídeo com url e fileType.
type MediaTrailerView = {};
//Imagem com url e alt, reutilizável em capas, galerias e logotipos.
type MediaImageView = {};
//Arquivos disponíveis para download.
type MediaFileView = {};

//Personagens, codinomes, imagem e status.
type MediaCharacterView = {};

//Franquias associadas à mídia, incluindo logotipo.
type MediaFranchiseView = {};

//Estado de aquisição e consumo.
type MediaStatusView = {};

export type MediaDetails = {
  id: string;
  slug: string;
  path: string;

  title: string;
  translatedTitle: string;
  releaseYear: number;
  type: {
    label: string;
  };
  synopsis: string;

  languages: { label: string }[];
  themes: { label: string }[];

  cover: {
    url: string;
    alt: string;
  };

  trailer?: {
    url: string;
    fileType: string;
  };

  characters: {
    name: string;
    codenames: string[];
    image: { url: string; alt: string };
    status: { label: string };
  }[];

  gameDetails?: {
    platforms: { label: string }[];
    genres: { label: string }[];
    gameplay: { label: string };
    modes: { label: string }[];
    players: {
      min: number;
      max: number;
    };
  };

  gameEdition?: {
    base: {
      title: string;
      cover: { url: string; alt: string };
      releaseYear: number;
      path: string;
    } | null;

    dlcs: {
      title: string;
      cover: { url: string; alt: string };
      releaseYear: number;
      path: string;
    }[];

    expansions: {
      title: string;
      cover: { url: string; alt: string };
      releaseYear: number;
      path: string;
    }[];
  };

  seasons?: {
    id: string;
    groupType: { label: string };
    number: number;
    title: string;
    translatedTitle: string;
    releaseYear: number;
    resolution: { label: string };
    language: { label: string };
    synopsis: string;
    cover: { url: string; alt: string };
    trailer: { url: string; fileType: string };
    status: {
      acquired: boolean;
      consumed: boolean;
    };
    episodes: {
      id: string;
      number: number;
      title: string;
      status: {
        acquired: boolean;
        consumed: boolean;
      };
    }[];
  }[];

  ovas?: {
    id: string;
    groupType: { label: string };
    number: number;
    title: string;
    translatedTitle: string;
    releaseYear: number;
    resolution: { label: string };
    language: { label: string };
    synopsis: string;
    cover: { url: string; alt: string };
    trailer: { url: string; fileType: string };
    status: {
      acquired: boolean;
      consumed: boolean;
    };
    episodes: {
      id: string;
      number: number;
      title: string;
      status: {
        acquired: boolean;
        consumed: boolean;
      };
    }[];
  }[];

  specials?: {
    id: string;
    groupType: { label: string };
    number: number;
    title: string;
    translatedTitle: string;
    releaseYear: number;
    resolution: { label: string };
    language: { label: string };
    synopsis: string;
    cover: { url: string; alt: string };
    trailer: { url: string; fileType: string };
    status: {
      acquired: boolean;
      consumed: boolean;
    };
    episodes: {
      id: string;
      number: number;
      title: string;
      status: {
        acquired: boolean;
        consumed: boolean;
      };
    }[];
  }[];

  volumes?: {
    id: string;
    groupType: { label: string };
    number: number;
    title: string;
    translatedTitle: string;
    releaseYear: number;
    resolution: { label: string };
    language: { label: string };
    synopsis: string;
    cover: { url: string; alt: string };
    trailer?: { url: string; fileType: string };
    status: {
      acquired: boolean;
      consumed: boolean;
    };
    editions: {
      id: string;
      number: number;
      title: string;
      status: {
        acquired: boolean;
        consumed: boolean;
      };
    }[];
  }[];

  albums?: {
    id: string;
    groupType: { label: string };
    number: number;
    title: string;
    translatedTitle: string;
    releaseYear: number;
    resolution: { label: string };
    language: { label: string };
    synopsis: string;
    cover: { url: string; alt: string };
    trailer?: { url: string; fileType: string };
    status: {
      acquired: boolean;
      consumed: boolean;
    };
    tracks: {
      id: string;
      number: number;
      title: string;
      status: {
        acquired: boolean;
        consumed: boolean;
      };
    }[];
  }[];

  concerts?: {
    id: string;
    groupType: { label: string };
    number: number;
    title: string;
    translatedTitle: string;
    releaseYear: number;
    resolution: { label: string };
    language: { label: string };
    synopsis: string;
    cover: { url: string; alt: string };
    trailer?: { url: string; fileType: string };
    status: {
      acquired: boolean;
      consumed: boolean;
    };
    tracks: {
      id: string;
      number: number;
      title: string;
      status: {
        acquired: boolean;
        consumed: boolean;
      };
    }[];
  }[];

  sequel: {
    previous?: {
      title: string;
      releaseYear: number;
      path: string;
      cover: { url: string; alt: string };
    };
    next?: {
      title: string;
      releaseYear: number;
      path: string;
      cover: { url: string; alt: string };
    };
  };

  gallery: {
    url: string;
    alt: string;
  }[];

  files: {
    label: string;
    url: string;
    fileType: string;
    size: number;
  }[];

  franchises: {
    title: string;
    slug: string;
    path: string;
    logo: { url: string; alt: string };
  }[];

  status: {
    acquired: boolean;
    consumed: boolean;
  };
};
