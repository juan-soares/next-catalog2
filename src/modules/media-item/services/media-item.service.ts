import * as repo from "../repository";

export async function getMediaItemBySlug(slug: string) {
  return repo.findBySlug(slug);
}
