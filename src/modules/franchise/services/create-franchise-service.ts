import { FRANCHISES_LOGO_STORAGE } from "@/shared/consts";
import { createAsset } from "@/modules/asset";
import type {
  CreateFranchiseInput,
  Franchise,
} from "@/modules/franchise/types";
import { createOneFranchise } from "@/modules/franchise/repositories";

export async function createFranchise(
  input: CreateFranchiseInput,
): Promise<Franchise> {
  const asset = await createAsset({
    file: input.logo,
    module: "franchise-logo",
    storage: FRANCHISES_LOGO_STORAGE,
    title: input.title,
  });

  return createOneFranchise({
    title: input.title,
    translatedTitle: input.translatedTitle ?? "",
    logoId: asset.id,
    parentFranchiseId: input.parentFranchiseId,
  });
}
