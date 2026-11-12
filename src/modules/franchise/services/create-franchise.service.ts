"use server";

import { createHash, slugfy } from "@/shared/utils";
import { createAsset } from "@/modules/asset/services";
import type {
  FranchiseData,
  FranchiseInput,
  FranchiseView,
} from "@/modules/franchise/types";
import { franchiseRepository } from "@/modules/franchise/repository";

export async function createFranchise(
  input: FranchiseInput,
): Promise<FranchiseView | null> {
  const slugfiedTitle = slugfy(input.title);
  const hash = createHash();
  const slug = `${slugfiedTitle}-${hash}`;

  try {
    const logo = await createAsset({
     
    });

    const data: FranchiseData = {
      title: input.title,
      translatedTitle: input.translatedTitle,
      slug,
      logo,
      parentFranchiseId: input.parentFranchiseId.trim() || null,
    };

    const createdFranchise = franchiseRepository.createOne(data);

    return createdFranchise;
  } catch (error) {
    console.error("Erro ao criar franquia:", error);

    return null;
  }
}
