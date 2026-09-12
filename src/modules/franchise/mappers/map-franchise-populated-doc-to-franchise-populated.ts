import { FranchisePopulated } from "../types";

export function mapFranchisePopulatedDocToFranchisePopulated(
  franchisePopulatedDoc,
): FranchisePopulated {
  return {
    id: franchisePopulatedDoc._id.toString(),
    title: franchisePopulatedDoc.title,
    translatedTitle: franchisePopulatedDoc.translatedTitle,
    logo: {
      id: franchisePopulatedDoc.logo._id.toString(),
      title: franchisePopulatedDoc.logo.title,
      fileName: franchisePopulatedDoc.logo.fileName,
      extension: franchisePopulatedDoc.logo.extension,
      mimeType: franchisePopulatedDoc.logo.mimeType,
      size: franchisePopulatedDoc.logo.size,
    },
    parentFranchiseId:
      franchisePopulatedDoc.parentFranchiseId?.toString() || null,
    createdAt: franchisePopulatedDoc.createdAt,
    updatedAt: franchisePopulatedDoc.updatedAt,
  };
}
