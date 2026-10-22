import type {
  MediaGroupView,
  MediaUnitView,
} from "@/modules/media-group/types";

//Volumes de HQs, com edições.
export type MediaVolumeView = MediaGroupView & { editions: MediaUnitView[] };
