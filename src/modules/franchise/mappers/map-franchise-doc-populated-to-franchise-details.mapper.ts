import { FranchiseDetails, FranchiseDocPopulated } from "../types";

export function mapFranchiseDocPopulatedToDoFranchiseDetails(
  docPopulated: FranchiseDocPopulated,
): FranchiseDetails {
  return {
    id: docPopulated._id.toString(),
    title: docPopulated.title,
    translatedTitle: docPopulated.translatedTitle,
    parentFranchiseId: docPopulated.parentFranchiseId?.toString() ?? null,
    createdAt: docPopulated.createdAt,
    updatedAt: docPopulated.updatedAt,

    logo: {
      id: docPopulated.logoId.id.toString(),
      title: docPopulated.logoId.title,
      fileName: docPopulated.logoId.fileName,
      extension: docPopulated.logoId.extension,
      mimeType: docPopulated.logoId.mimeType,
      size: docPopulated.logoId.size,
    },
  };
}
