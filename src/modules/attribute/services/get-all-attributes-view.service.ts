import type { AttributeView } from "@/modules/attribute/types";
import { ATTRIBUTES_VIEW_MOCK } from "@/app/mocks";

export async function getAllAttributesView(): Promise<AttributeView[]> {
  return ATTRIBUTES_VIEW_MOCK;
}
