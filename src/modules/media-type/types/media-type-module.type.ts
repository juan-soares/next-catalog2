import { ComponentType } from "react";
import { MediaTypePageProps } from "./media-type-page-props.type";

export type MediaTypeModule = {
  page: ComponentType<MediaTypePageProps>;
};
