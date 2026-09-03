import { MediaImage } from "./media-image.type";

export type Franchise = {
  id: string;

  title: string;
  translatedTitle?: string;
  slug: string;

  logo: MediaImage;

  parentFranchiseId?: string;

  createdAt: Date;
  updatedAt: Date;
};
