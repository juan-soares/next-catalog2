import { MediaFamily } from "../constants/media-family";

export type BaseItem = {
  id: string;
  type: string; // ex: "Anime", "Livro", etc
  family: MediaFamily;
  title: string;
  slug: string;
  description?: string;
  coverImage?: string;
  releaseYear?: number;

  createdAt: Date;
  updatedAt: Date;
};
