import type {
  MediaGroupView,
  MediaUnitView,
} from "@/modules/media-group/types";

//Temporadas, OVAs e especiais, com episódios.
export type MediaEpisodeGroupView = MediaGroupView & {
  episodes: MediaUnitView[];
};
