import type { MediaCategoryCode } from "@/modules/media-category/types";
import type { MediaViewBase, MediaViewIssue } from "@/modules/media/types";

export type MediaViewReadingFamily = MediaViewBase & {
  categoryCode: Extract<MediaCategoryCode, "comic" | "manga">;

  collections: {
    issues: MediaViewIssue[];
    annuals: MediaViewIssue[];
    specials: MediaViewIssue[];
  };
};
