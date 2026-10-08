import type { Franchise, FranchiseDoc } from "@/modules/franchise/types";

export function mapFranchiseDocToFranchise(
  franchiseDoc: FranchiseDoc,
): Franchise {
  return {
    id: franchiseDoc._id.toString(),
    title: franchiseDoc.title,
    translatedTitle: franchiseDoc.translatedTitle ?? "",
    logo: franchiseDoc.logoId.toString(),
    parentFranchiseId: franchiseDoc.parentFranchiseId?.toString() || null,
    createdAt: franchiseDoc.createdAt,
    updatedAt: franchiseDoc.updatedAt,
  };
}
