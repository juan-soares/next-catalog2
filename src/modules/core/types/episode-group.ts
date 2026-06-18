import { Episode } from "./episode";

export type EpisodeGroup = {
  number?: number;
  title: string;
  releaseDate?: Date;
  episodes: Episode[];
};
