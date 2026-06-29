import { MediaType } from "@/modules/media-types";

export type MediaItemDocument = {
  title: string;
  slug: string;
  mediaType: MediaType;
  franchiseId: string;

  description: string;

  releaseYear?: number;
  coverImage?: string;
  bannerImage?: string;
  rating?: number;

  attributes?: Record<string, string[]>;

  createdAt: Date;
  updatedAt: Date;
};

export type MediaItemModel = MediaItemDocument;
