import { HydratedDocument } from "mongoose";
import { MediaTypeKey } from "@/modules/media-type";

export type MediaItemDocument = HydratedDocument<{
  slug: string;
  mediaType: MediaTypeKey;

  title: string;
  translatedTitle?: string;
  releaseDate: Date;

  cover: string;

  createdAt: Date;
  updatedAt: Date;
}>;
