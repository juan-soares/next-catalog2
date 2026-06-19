import { getMediaItemBySlug } from "../services/media-item";

export async function getMediaItemAction(slug: string) {
  return getMediaItemBySlug(slug);
}
