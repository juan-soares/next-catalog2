import { MediaItem } from "@/modules/media-item";
import { ComponentType } from "react";

export type MediaTypeTab = {
  label: string;
  tab: string;
  Component: ComponentType<{ media: MediaItem }>;
};
