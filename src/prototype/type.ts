//relacionamentos
export type MediaViewCharacter = {
  id: string;
  url: string;
  name: string;
  codenames: MediaViewLabel[];
  avatar: MediaViewImage;
  status: MediaViewLabel;
};

export type MediaContinuity = {
  previous: MediaReferenceWithCover | null;
  next: MediaReferenceWithCover | null;
};

export type MediaViewGalleryItem = {
  id: string;
  src: string;
  alt: string;
};

export type MediaViewFile = {
  id: string;
  title: string;
  src: string;
  extension: string;
};
