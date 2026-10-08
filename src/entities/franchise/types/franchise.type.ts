import type { Asset } from "@/entities/asset";

export type Franchise = {
  id: string;
  title: string;
  translatedTitle?: string;
  logo: Asset["id"];
  parentFranchiseId: Franchise["id"] | null;
  createdAt: string;
  updatedAt: string;
};

export type FranchiseDetails = Omit<Franchise, "logo"> & {
  logo: Asset;
};
