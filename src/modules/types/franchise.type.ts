import { MediaFile } from "./media-file.type";

export type Franchise = {
  id: string;

  title: string;
  translatedTitle?: string;
  slug: string;

  logo: MediaFile["id"];

  parentFranchiseId?: Franchise["id"];

  createdAt: Date;
  updatedAt: Date;
};
