import type { FranchiseFamily } from "@/modules/franchise/types";
import { findFranchises } from "@/modules/franchise/repositories";
import { mapFranchiseToFranchiseLogoLink } from "@/modules/franchise/mappers";

export async function getFranchiseFamily(
  id?: string,
): Promise<FranchiseFamily | null> {
  if (!id) return null;

  const parent = await findFranchises({ id });

  if (!parent) return null;

  const children = await findFranchises({ parentFranchiseId: id });

  return {
    parent: parent.map(mapFranchiseToFranchiseLogoLink)
  }
}
