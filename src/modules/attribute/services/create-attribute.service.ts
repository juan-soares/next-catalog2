import { slugify } from "@/shared/libs/helpers";
import type {
  Attribute,
  CreateAttributeInput,
} from "@/modules/attribute/types";
import { createOneAttribute } from "@/modules/attribute/repositories";

export async function createAttribute(
  input: CreateAttributeInput,
): Promise<Attribute> {
  const slug = slugify(input.label);

  return createOneAttribute({ ...input, slug });
}
