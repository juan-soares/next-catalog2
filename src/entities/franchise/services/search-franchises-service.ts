import type { FranchiseDetails } from "@/entities/franchise/types";
import { findFranchisesPopulated } from "@/entities/franchise/repositories";

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
