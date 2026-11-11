"use server";

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
  const slugfied = input.title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  const hash = crypto.randomUUID().replace(/-/g, "").slice(0, 6);

  const slug = `${slugfied}-${hash}`;

  try {
    const logo = await createAsset({
      parentLabel: input.title,
      identifier: slug,
      type: "logo",
      file: input.logo,
    });

    const data: FranchiseData = {
      title: input.title,
      translatedTitle: input.translatedTitle,
      slug,
      logo,
      parentFranchiseId: input.parentFranchiseId ?? null,
    };

    const createdFranchise = franchiseRepository.createOne(data);

    return createdFranchise;
  } catch (error) {
    console.error("Erro ao criar franquia:", error);

    return null;
  }
}
