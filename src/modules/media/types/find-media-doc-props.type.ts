import { MediaView } from "./media-view.type";

export type FindMediaDocProps = {
  q?: string;
  fields?: { slug: string };
  sort?: string;
};
