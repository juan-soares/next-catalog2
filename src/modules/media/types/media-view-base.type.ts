import type {
  MediaViewAttributes,
  MediaViewFranchise,
  MediaViewInfo,
  MediaViewStatus,
} from "@/modules/media/types";

export type MediaViewBase = {
  id: string;
  slug: string;
  url: string;

  info: MediaViewInfo;
  attributes: MediaViewAttributes;

  //characters: MediaCharacter[];
  //continuity: MediaContinuity;

  //gallery: MediaGalleryItem[];
  //files: MediaFile[];

  franchises: {
    main: MediaViewFranchise | null;
    subs: MediaViewFranchise[];
  };

  status: MediaViewStatus;
};
