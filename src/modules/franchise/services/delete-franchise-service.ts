import { deleteFranchiseById } from "@/modules/attribute/repositories";
import { Franchise } from "@/modules/franchise/types";


export async function deleteFranchise(id: string): Promise<Franchise | null> {
  return deleteFranchiseById(id);
}
