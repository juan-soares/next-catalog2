import { deleteAttributeById } from "@/modules/attribute/repositories";
import type { Attribute } from "@/modules/attribute/types";

export async function deleteAttribute(id: string): Promise<Attribute | null> {
  return deleteAttributeById(id);
}
