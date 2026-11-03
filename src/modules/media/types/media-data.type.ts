import type { MediaTypeCode } from "@/modules/media-type/types";
import type { AssetData } from "@/modules/asset/types";
import type { MediaProgress } from "@/modules/media/types";

export type MediaData = {
  identifiers: {
    slug: string;
    path: string;
  };

  info: {
    title: string;
    translatedTitle: string;
    releaseDate: Date;
    typeCode: MediaTypeCode;
  };

  assets: {
    cover: AssetData;
    trailer: AssetData | null;
  };

  progress: MediaProgress;
};
