import { slugify } from "@/lib/helpers";
import { type CreateAttributeInput } from "./create-attribute.schema";
import { attributeRepository } from "../../infrastructure";
import { type Attribute } from "../../domain";

export async function createAttribute(
  input: CreateAttributeInput,
): Promise<Attribute | null> {
  const slug = slugify(input.label);

  const newAttribute = await attributeRepository.createOne({
    ...input,
    slug,
  });

  return newAttribute;
}
