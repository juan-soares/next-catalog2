import { slugify } from "@/lib/helpers";
import { CreateAttributeInput } from "../types/create-attribute-input.type";
import { attributeRepository } from "../repository";
import { Attribute } from "../types";
import { ensureAttributeDoesNotExist } from "./ensure-attribute-does-not-exist.service";

export async function createAttribute(
  input: CreateAttributeInput,
): Promise<void> {
  const newAttribute: Omit<Attribute, "id"> = {
    value: slugify(input.label),
    label: input.label,
    type: input.attributeType,
  };

  await ensureAttributeDoesNotExist(newAttribute);

  await attributeRepository.insert(newAttribute);
}
