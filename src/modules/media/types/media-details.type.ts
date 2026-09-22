export type MediaDetails = {
  title: string;
  translatedTitle: string;
  releaseYear: number;
  type: { slug: string; label: string };
  synopsis: string;

  cover: { url: string; alt: string };
  trailer: { url: string };

  themes: { id: string; label: string }[];

  seasons?: {
    id: string;
    number: number;
    title: string;
    releaseYear: number;
    resolution: string;
    language: string;
    episodes: {
      id: string;
      number: number;
      title: string;
      userStatus: {
        acquired: boolean;
        consumed: boolean;
      };
    }[];
  }[];

  userStatus: {
    acquired: boolean;
    consumed: boolean;
  };
};
