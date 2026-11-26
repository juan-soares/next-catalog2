import type { MediaCategoryCode } from "@/modules/media-category/types";
import type {
  MediaViewAttributes,
  MediaViewFranchise,
  MediaViewInfo,
  MediaViewStatus,
} from "@/modules/media/types";

export type MediaView = {
  id: string;
  slug: string;
  categoryCode: MediaCategoryCode;

  info: MediaViewInfo;
  attributes: MediaViewAttributes;

  franchises: {
    main: MediaViewFranchise | null;
    subs: MediaViewFranchise[];
  };

  status: MediaViewStatus;
};
