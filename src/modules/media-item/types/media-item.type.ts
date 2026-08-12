export type MediaItem = {
  id: string;

  slug: string;
  mediaType: {
    slug: string;
    label: string;
  };

  title: string;
  releaseDate: Date;

  cover: string;
};
