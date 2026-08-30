import { MediaItemPageSeason } from "./media-item-page-season.view.type";

export type MediaItemPageInfo = {
  id: string;
  trailer: string;
  cover: string;
  title: string;
  releaseYear: number;
  mediaType: { label: string; slug: string };
  themes: string[];
  synopsis: string;
  acquired: boolean;
  completed: boolean;

  seasons?: MediaItemPageSeason[];
};
