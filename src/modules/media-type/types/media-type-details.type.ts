import { MediaTypeCode } from "@/modules/media-type/types";

export type MediaTypeDetails = {
  code: MediaTypeCode;
  groupType: "video" | "season" | "game" | "music" | "reading";
  label: string;
  slug: string;
  path: string;
};
