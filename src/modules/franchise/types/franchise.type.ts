import type { Asset } from "@/modules/asset";

export type Franchise = {
  id: string;
  title: string;
  translatedTitle?: string;
  logo: Asset["id"];
  parentFranchiseId: Franchise["id"] | null;
  createdAt: Date;
  updatedAt: Date;
};

export type FranchisePopulated = Omit<
  Franchise,
  "logo" | "parentFranchiseId"
> & {
  logo: Asset;
  parentFranchiseId: FranchisePopulated | null;
};
