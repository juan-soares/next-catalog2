import { MediaFamily } from "../constants/media-family";

export type MediaDefinition = {
  id: string;
  slug: string;
  label: string;
  family: MediaFamily;
  tabs: string[];
  filters: string[];

  itemStructure: {
    hasSeasons?: boolean;
    hasEpisodes?: boolean;
    hasVolumes?: boolean;
    hasTracks?: boolean;
  };

  createdAt: Date;
  updatedAt: Date;
};
