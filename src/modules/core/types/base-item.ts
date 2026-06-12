import type { MediaGroup } from "../constants/media-groups";

export type BaseItem = {
  id: string;
  type: string; // ex: "Anime", "Livro", etc
  group: MediaGroup;
  title: string;
  slug: string;
  description?: string;
  coverImage?: string;
  releaseYear?: number;

  createdAt: Date;
  updatedAt: Date;
};
