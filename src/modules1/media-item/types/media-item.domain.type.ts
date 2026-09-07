import { MediaTypeInfo } from "@/modules1/media-type";
import { AttributeItem } from "@/modules1/attribute-item";

export type MediaItem = {
  id: string;

  slug: string;
  mediaType: Pick<MediaTypeInfo, "label" | "slug">;

  title: string;
  translatedTitle?: string;
  releaseDate: Date;
  synopsis: string;

  cover: string;
  trailer: string;

  themes: AttributeItem[];

  acquired: boolean;
  completed: boolean;
};
