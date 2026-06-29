import { MediaItemModel } from "../models";

export async function findBySlug(slug: string) {
  return MediaItemModel.findOne({ slug });
}
