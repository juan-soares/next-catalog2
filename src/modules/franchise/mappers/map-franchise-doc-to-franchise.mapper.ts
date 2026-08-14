import { Franchise, FranchiseDocument } from "../types";

export function mapFranchiseDocToFranchise(
  franchiseDoc: FranchiseDocument,
): Franchise {
  return {
    id: franchiseDoc._id.toString(),
    slug: franchiseDoc.slug,
    title: franchiseDoc.title,
    logo: franchiseDoc.logo,
  };
}
