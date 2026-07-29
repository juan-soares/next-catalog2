import { attributeRepository } from "../repository";
import { Attribute } from "../types";

export async function ensureAttributeDoesNotExist(
  attribute: Pick<Attribute, "value" | "type">,
): Promise<void> {
  const existingAttribute = await attributeRepository.findByTypeAndValue(
    attribute.type,
    attribute.value,
  );

  if (existingAttribute) {
    throw new Error(`Já existe um atributo com este valor em ${attribute.type}.`);
  }
}
