import type { FranchiseLogoLink } from "@/modules/franchise/types";
import { mapFranchiseDetailsToFranchiseLogoLink } from "@/modules/franchise/mappers";
import { findFranchisesPopulated } from "@/modules/franchise/repositories";

export async function getParentFranchiseLogoLinks(): Promise<
  FranchiseLogoLink[]
> {
  const parentFranchises = await findFranchisesPopulated({
    parentFranchiseId: null,
  });

  return parentFranchises.map(mapFranchiseDetailsToFranchiseLogoLink);
}
