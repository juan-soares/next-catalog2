import type { FranchiseLogoLink } from "@/modules/franchise/types";
import { mapFranchiseToFranchiseLogoLink } from "@/modules/franchise/mappers";
import { findFranchises } from "@/modules/franchise/repositories";

export async function getParentFranchiseLogoLinks(): Promise<
  FranchiseLogoLink[]
> {
  const parentFranchises = await findFranchises({
    parentFranchiseId: null,
  });

  return parentFranchises.map(mapFranchiseToFranchiseLogoLink);
}
