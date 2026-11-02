import { ComponentType } from "react";
import { MediaTabCode } from "@/modules/media-tab/types";
import { MediaDetails } from "@/modules/media/types";

export type MediaTab = {
  code: MediaTabCode;
  label: string;
  slug: string;
  component: ComponentType<MediaDetails>;
};
