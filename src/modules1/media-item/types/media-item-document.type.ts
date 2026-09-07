import { AttributeItemDocument } from "@/modules1/attribute-item";
import { MediaTypeKey } from "@/modules1/media-type";
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
