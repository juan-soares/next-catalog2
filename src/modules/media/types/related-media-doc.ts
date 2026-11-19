import { Types } from "mongoose";
import type { MediaDoc } from "@/modules/media/types";

export type RelatedMediaDoc = Pick<
  MediaDoc,
  "identifiers" | "info" | "assets" | "progress"
> & {
  _id: Types.ObjectId;
};
