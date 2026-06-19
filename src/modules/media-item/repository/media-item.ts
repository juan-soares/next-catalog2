import { MediaItemModel } from "../models";

export async function findBySlug(slug: string) {
  return MediaItemModel.findOne({ slug }).lean();
}

export async function createMediaItem(data: any) {
  return MediaItemModel.create(data);
}
