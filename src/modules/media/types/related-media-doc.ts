import type { MediaDoc } from "@/modules/media/types";

export type RelatedMediaDoc = Pick<
  MediaDoc,
  "_id" | "identifiers" | "info" | "assets" | "progress"
>;
