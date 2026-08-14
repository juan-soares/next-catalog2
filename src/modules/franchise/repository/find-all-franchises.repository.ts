import { connectToDatabase } from "@/lib/mongoose";
import { Franchise, FranchiseDocument } from "../types";
import { FranchiseModel } from "../model";
import { mapFranchiseDocToFranchise } from "../mappers";

type Options = {
  limit?: number;
  orderBy: "title";
  order: "asc" | "desc";
};

export async function findAllFranchises(
  options?: Options,
): Promise<Franchise[]> {
  const sort = options
    ? {
        [options.orderBy]: options.order,
      }
    : undefined;

  await connectToDatabase();

  const franchisesDoc: FranchiseDocument[] = await FranchiseModel.find({}).sort(
    sort,
  );

  return franchisesDoc.map(mapFranchiseDocToFranchise);
}
