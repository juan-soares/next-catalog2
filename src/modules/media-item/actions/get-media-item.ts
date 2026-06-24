import { getMediaItemBySlug } from "../services/media-item.service";

export async function getMediaItemAction(slug: string) {
  return getMediaItemBySlug(slug);
}
