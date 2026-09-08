import type { Attribute } from "@/modules/attribute/types";
import { findAttributeById } from "@/modules/attribute/repositories";

export async function getAttributeById(id: string): Promise<Attribute | null> {
  return findAttributeById(id);
}
