"use server";

import { redirect } from "next/navigation";
import { createAttributeSchema } from "../schemas";
import { createAttribute } from "../services";

export async function createAttributeAction(formData: FormData): Promise<void> {
  const input = createAttributeSchema.parse({
    label: formData.get("label"),
    attributeType: formData.get("attributeType"),
  });

  await createAttribute(input);

  redirect("/catalogo/atributos");
}
