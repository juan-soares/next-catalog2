import type { FranchiseDetails } from "@/modules/franchise/types";
import { findFranchisesPopulated } from "@/modules/franchise/repositories";

export async function searchFranchises(q: string): Promise<FranchiseDetails[]> {
  const search = q?.trim();

  if (!search) {
    return [];
  }

  return findFranchisesPopulated({
    $or: [
      { title: { $regex: search, $options: "i" } },
      { translatedTitle: { $regex: search, $options: "i" } },
    ],
  });
}
