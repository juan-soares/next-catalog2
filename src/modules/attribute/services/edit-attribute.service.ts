import { slugify } from "@/lib/helpers";
import type { Attribute, EditAttributeInput } from "@/modules/attribute/types";
import { updateAttributeById } from "@/modules/attribute/repositories";

export async function editAttribute(
  input: EditAttributeInput,
): Promise<Attribute | null> {
  const slug = slugify(input.label);

  return updateAttributeById(input.id, {
    label: input.label,
    slug,
  });
}
