import { findAttributes } from "@/modules/attribute/repositories";
import type { Attribute } from "@/modules/attribute/types";

export async function listAttributes(): Promise<Attribute[]> {
  return findAttributes({});
}
