import type {
  MediaViewBookFamily,
  MediaViewEpisodicFamily,
  MediaViewGameFamily,
  MediaViewMovieFamily,
  MediaViewMusicFamily,
  MediaViewReadingFamily,
} from "@/modules/media/types";

export type MediaView =
  | MediaViewEpisodicFamily
  | MediaViewReadingFamily
  | MediaViewMusicFamily
  | MediaViewMovieFamily
  | MediaViewBookFamily
  | MediaViewGameFamily;
