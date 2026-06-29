import { getMediaItemBySlug } from "../services/get-media-item-by-slug";

export async function getMediaItemAction(slug: string) {
  return getMediaItemBySlug(slug);
}
