import { AttributeItemDocument } from "@/modules/attribute-item";
import { MediaTypeKey } from "@/modules/media-type";
import { HydratedDocument } from "mongoose";

export type MediaItemDocument = HydratedDocument<{
  slug: string;
  mediaType: MediaTypeKey;

  title: string;
  translatedTitle?: string;
  releaseDate: Date;
  synopsis: string;

  cover: string;
  trailer: string;

  themeIds: AttributeItemDocument[];

  acquired: boolean;
  completed: boolean;

  createdAt: Date;
  updatedAt: Date;
}>;
