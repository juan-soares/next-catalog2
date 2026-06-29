import { findBySlug } from "../repository";

export async function getMediaItemBySlug(slug: string) {
  return findBySlug(slug);
}
