import type { Attribute } from "../../domain";
import { attributeRepository } from "../../infrastructure";

export async function getAttributeBySlug(
  slug: string,
): Promise<Attribute | null> {
  return attributeRepository.findOne(slug);
}
