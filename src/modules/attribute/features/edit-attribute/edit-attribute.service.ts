import { slugify } from "@/lib/helpers";
import type { Attribute } from "../../domain";
import { attributeRepository } from "../../infrastructure";
import type { EditAttributeInput } from "../../schemas/edit-attribute.schema";

export async function editAttribute(
  input: EditAttributeInput,
): Promise<Attribute | null> {
  const slug = slugify(input.label);

  return attributeRepository.updateOne(
    {
      type: input.type,
      slug: input.slug,
    },
    {
      label: input.label,
      slug,
    },
  );
}
