import type { MediaTypeCode } from "@/modules/media-type/types";
import type { AssetData } from "@/modules/asset/types";
import type { MediaProgress } from "@/modules/media/types";
import type { AttributeData } from "@/modules/attribute/types";
import { Types } from "mongoose";

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
    synopsis: string;
  };

  attributes: {
    languageIds: string[];
    themeIds: string[];
    franchiseId: string;
  };

  assets: {
    cover: AssetData;
    trailer: AssetData | null;
  };

  progress: MediaProgress;
};

export type MediaDataPopulated = Omit<MediaData, "attributes"> & {
  _id: Types.ObjectId;

  attributes: {
    languageIds: AttributeData[];
    themeIds: AttributeData[];
  };
};
