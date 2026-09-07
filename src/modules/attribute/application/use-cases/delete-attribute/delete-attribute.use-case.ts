import { attributeRepository } from "@/modules/attribute/infrastructure";

export async function deleteAttribute(id: string): Promise<boolean> {
  return attributeRepository.deleteOne(id);
}
