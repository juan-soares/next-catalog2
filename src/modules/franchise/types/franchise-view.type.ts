import type { MediaImageView } from "@/modules/media/types";

export type FranchiseView = {
  id: string;
  title: string;
  slug: string;
  path: string;
  logo: MediaImageView;
};
