import { MediaItemPageEpisode } from "./media-item-page-episode.view.type";

export type MediaItemPageSeason = {
  id: string;
  number: number;
  title: string;
  releaseYear: number;
  languages: string[];
  resolutions: string[];
  acquired: boolean;
  watched: boolean;
  episodes: MediaItemPageEpisode[];
};
