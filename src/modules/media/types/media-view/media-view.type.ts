import type {
  MediaViewBookStructure,
  MediaViewEpisodicStructure,
  MediaViewGameStructure,
  MediaViewMovieStructure,
  MediaViewMusicStructure,
  MediaViewVolumeStructure,
} from "@/modules/media/types/media-view-structure";

export type MediaView =
  | MediaViewEpisodicStructure
  | MediaViewVolumeStructure
  | MediaViewMusicStructure
  | MediaViewMovieStructure
  | MediaViewBookStructure
  | MediaViewGameStructure;
