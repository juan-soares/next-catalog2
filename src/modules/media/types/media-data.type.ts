import type { MediaTypeCode } from "@/modules/media-type/types";
import type { AssetData } from "@/modules/asset/types";

export type MediaData = {
  identifiers: {
    slug: string;
    path: string;
  };

  info: {
    title: string;
    translatedTitle: string;
    releaseYear: number;
    releaseDate: Date;
    typeCode: MediaTypeCode;
  };

  assets: {
    cover: AssetData;
    trailer: AssetData | null;
  };
};
