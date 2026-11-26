import type { MediaViewBase, MediaViewIssue } from "@/modules/media/types";

export type MediaViewReadingFamily = MediaViewBase & {
  categoryCode: "comic" | "manga";

  collections: {
    issues: MediaViewIssue[];
    annuals: MediaViewIssue[];
    specials: MediaViewIssue[];
  };
};
