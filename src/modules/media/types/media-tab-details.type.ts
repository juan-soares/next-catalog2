import { ComponentType } from "react";
import { MediaDetails, MediaTabCode } from "@/modules/media/types";

export type MediaTabDetails = {
  label: string;
  slug: string;
  code: MediaTabCode;
  component: ComponentType<MediaDetails>;
};
