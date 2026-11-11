import type { AssetData } from "@/modules/asset/types";

export type FranchiseData = {
  title: string;
  translatedTitle: string;
  logo: AssetData;
  slug: string;
  parentFranchiseId: string | null;
};
