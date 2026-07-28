import { slugify } from "@/lib/helpers";
import { CreateAttributeInput } from "../types/create-attribute-input.type";
import { attributeRepository } from "../repository";
import { Attribute } from "../types";

export async function createAttribute(
  input: CreateAttributeInput,
): Promise<void> {
  const newAttribute: Attribute = {
    value: slugify(input.label),
    label: input.label,
    type: input.attributeType,
  };

  await attributeRepository.insert(newAttribute);
}
