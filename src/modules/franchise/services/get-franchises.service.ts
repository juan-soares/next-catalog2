import { franchiseRepository } from "../repository";
import { Franchise } from "../types";

type Options = {
  limit?: number;
  orderBy: "title";
  order: "asc" | "desc";
};

export async function getFranchises(options?: Options): Promise<Franchise[]> {
  return franchiseRepository.findAll(options);
}
