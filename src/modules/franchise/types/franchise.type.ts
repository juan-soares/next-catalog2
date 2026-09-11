import { MediaFile } from "@/modules/types/media-file.type";

export type Franchise = {
  id: string;

  title: string;
  translatedTitle?: string;

  logo: MediaFile["id"];

  parentFranchiseId: Franchise["id"] | null;

  createdAt: Date;
  updatedAt: Date;
};
