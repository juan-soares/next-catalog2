import type {
  AttributeData,
  AttributeInput,
  AttributeView,
} from "@/modules/attribute/types";
import { attributeRepository } from "@/modules/attribute/repository";

export async function createAttribute(
  input: AttributeInput,
): Promise<AttributeView | null> {
  const attributeData: AttributeData = {
    label: input.label,
    typeCode: input.typeCode,
  };

  return attributeRepository.createOne(attributeData);
}
