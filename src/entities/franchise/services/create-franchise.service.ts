import { FRANCHISES_STORAGE } from "@/shared/consts";
import { createAsset } from "@/entities/asset";
import type {
  CreateFranchiseInput,
  Franchise,
} from "@/entities/franchise/types";
import { createOneFranchise } from "@/entities/franchise/repositories";

export async function createFranchise(
  input: CreateFranchiseInput,
): Promise<Franchise> {
  const asset = await createAsset({
    file: input.logo,
    module: "franchise-logo",
    storage: FRANCHISES_STORAGE.LOGO,
    title: input.title,
  });

  return createOneFranchise({
    title: input.title,
    translatedTitle: input.translatedTitle ?? "",
    logoId: asset.id,
    parentFranchiseId: input.parentFranchiseId,
  });
}
