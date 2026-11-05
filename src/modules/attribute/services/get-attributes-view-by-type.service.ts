import type {
  AttributeTypeCode,
  AttributeView,
} from "@/modules/attribute/types";
import { attributeRepository } from "@/modules/attribute/repository";

export async function getAttributesViewByType(
  typeCode: AttributeTypeCode,
): Promise<AttributeView[]> {
  return attributeRepository.findMany({
    fields: { typeCode },
  });
}
