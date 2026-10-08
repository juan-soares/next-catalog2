import { MediaTypeCode } from "@/modules/media-type/types";

export type MediaTypeDetails = {
  code: MediaTypeCode;
  slug: string;
  groupType: "video" | "season" | "game" | "music" | "reading";
  label: string;
  path: string;
};
