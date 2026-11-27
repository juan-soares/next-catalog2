import type {
  MediaViewAttributes,
  MediaViewContinuity,
  MediaViewFile,
  MediaViewFranchise,
  MediaViewGalleryItem,
  MediaViewInfo,
  MediaViewStatus,
} from "@/modules/media/types/media-view";

export type MediaViewBase = {
  id: string;
  slug: string;
  url: string;

  info: MediaViewInfo;
  attributes: MediaViewAttributes;

  //characters: MediaCharacter[];
  continuity: MediaViewContinuity;
  gallery: MediaViewGalleryItem[];
  files: MediaViewFile[];

  franchises: {
    main: MediaViewFranchise | null;
    subs: MediaViewFranchise[];
  };

  status: MediaViewStatus;
};
