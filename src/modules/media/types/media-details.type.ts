type Attribute = {
  label: string;
};

export type MediaDetails = {
  slug: string;

  title: string;
  translatedTitle: string;
  releaseYear: string;
  synopsis: string;

  themes: Attribute[];

  cover: {
    url: string;
    alt: string;
  };

  trailer: {
    url: string;
    fileType: string;
  };

  status: {
    acquired: boolean;
    consumed: boolean;
  };
};
