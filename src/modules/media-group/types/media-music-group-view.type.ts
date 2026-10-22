import type {
  MediaGroupView,
  MediaUnitView,
} from "@/modules/media-group/types";

//Álbuns e concertos, com faixas.
export type MediaMusicGroupView = MediaGroupView & { tracks: MediaUnitView[] };
