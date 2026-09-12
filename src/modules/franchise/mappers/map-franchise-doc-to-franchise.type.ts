import type { Franchise, FranchiseDocument } from "@/modules/franchise/types";

export function mapFranchiseDocToFranchise(
  franchiseDoc: FranchiseDocument,
): Franchise {
  return {
    id: franchiseDoc._id.toString(),
    title: franchiseDoc.title,
    translatedTitle: franchiseDoc.translatedTitle,
    logo: franchiseDoc.logo.toString(),
    parentFranchiseId: franchiseDoc.parentFranchiseId?.toString() || null,
    createdAt: franchiseDoc.createdAt,
    updatedAt: franchiseDoc.updatedAt,
  };
}
