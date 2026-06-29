import * as repo from "../../catalog/repository";

export async function getMediaItemBySlug(slug: string) {
  return repo.findBySlug(slug);
}
