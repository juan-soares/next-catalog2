import { getFranchises } from "@/modules/franchise";
import { FranchiseMarqueeItem } from "../types";

export async function getFranchiseMarqueeItems(): Promise<
  FranchiseMarqueeItem[]
> {
  const franchises = await getFranchises({ orderBy: "title", order: "asc" });

  return franchises.map(({ id, slug, title, logo }) => ({
    id,
    slug,
    title,
    logo,
  }));
}
