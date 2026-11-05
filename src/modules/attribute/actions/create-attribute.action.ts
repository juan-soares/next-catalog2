"use server";

import z from "zod";
import { redirect } from "next/navigation";
import { PUBLIC_URLS } from "@/shared/consts";
import { createAttribute } from "@/modules/attribute/services";
import { createAttributeSchema } from "@/modules/attribute/schemas";

export async function createAttributeAction(formData: FormData) {
  const data = Object.fromEntries(formData.entries());

  const result = createAttributeSchema.safeParse(data);

  if (!result.success) {
    console.log(z.treeifyError(result.error));
    return;
  }

  const createdAttribute = await createAttribute(result.data);

  if (!createdAttribute) {
    return console.error("Algo deu errado.");
  }

  return redirect(PUBLIC_URLS.ATTRIBUTES.LIST);
}
