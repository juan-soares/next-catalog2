import { Types } from "mongoose";
import { AttributeDoc } from "@/modules/attribute/types";
import type { MediaData } from "@/modules/media/types";

export type MediaDoc = Omit<MediaData, "attributes"> & {
  _id: Types.ObjectId;

  attributes: {
    languageIds: AttributeDoc[];
    themeIds: AttributeDoc[];
    franchiseId: Types.ObjectId;
  };
};
