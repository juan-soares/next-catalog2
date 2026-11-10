"use server";

import z from "zod";
import { redirect } from "next/navigation";
import { PUBLIC_URLS } from "@/shared/consts";
import { createFranchiseSchema } from "@/modules/franchise/schemas";
import { createFranchise } from "@/modules/franchise/services";

export async function createFranchiseAction(formData: FormData) {
  const data = Object.fromEntries(formData.entries());

  const result = createFranchiseSchema.safeParse(data);

  if (!result.success) {
    console.log(z.treeifyError(result.error));
    return;
  }

  const createdFranchise = await createFranchise(result.data);

  if (!createdFranchise) {
    return console.error("Algo deu errado ao criar franquia.");
  }

  redirect(PUBLIC_URLS.FRANCHISES.LIST);
}
