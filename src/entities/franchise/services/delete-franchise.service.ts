import { deleteFranchiseById } from "@/entities/franchise/repositories";
import { Franchise } from "@/entities/franchise/types";

export async function deleteFranchise(id: string): Promise<Franchise | null> {
  return deleteFranchiseById(id);
}
