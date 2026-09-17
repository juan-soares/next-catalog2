import { isValidObjectId } from "mongoose";
import { connectToDatabase } from "@/shared/libs/mongoose";
import { deleteAsset } from "@/modules/asset/services";
import { FranchiseModel } from "@/modules/franchise/models";
import type { Franchise } from "@/modules/franchise/types";
import { mapFranchiseDocToFranchise } from "@/modules/franchise/mappers";

export async function deleteFranchiseById(
  id: string,
): Promise<Franchise | null> {
  if (!isValidObjectId(id)) {
    return null;
  }

  await connectToDatabase();

  const session = await FranchiseModel.startSession();

  try {
    let deletedFranchise: Franchise | null = null;

    await session.withTransaction(async () => {
      const franchiseDoc = await FranchiseModel.findById(id).session(session);

      if (!franchiseDoc) {
        return;
      }

      if (franchiseDoc.logoId) {
        await deleteAsset(franchiseDoc.logoId);
      }

      await FranchiseModel.findByIdAndDelete(franchiseDoc._id).session(session);

      deletedFranchise = mapFranchiseDocToFranchise(franchiseDoc);
    });

    return deletedFranchise;
  } finally {
    await session.endSession();
  }
}
