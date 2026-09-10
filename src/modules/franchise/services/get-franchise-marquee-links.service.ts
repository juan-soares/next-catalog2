import type { FranchiseMarqueeLink } from "@/modules/franchise/types";
import { mapFranchiseToFranchiseMarqueeLink } from "@/modules/franchise/mappers";
import { findFranchises } from "@/modules/franchise/repositories";

export async function getFranchiseMarqueeLinks(): Promise<
  FranchiseMarqueeLink[]
> {
  const parentFranchises = await findFranchises({
    parentFranchiseId: null,
  });

  return parentFranchises.map(mapFranchiseToFranchiseMarqueeLink);
}
