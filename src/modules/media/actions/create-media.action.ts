"use server";

import z from "zod";
import { redirect } from "next/navigation";
import { createMediaSchema } from "@/modules/media/schemas";
import type { CreateMediaInputState } from "@/modules/media/types";
import { createMedia } from "@/modules/media/services";

export async function createMediaAction(mediaInputs: CreateMediaInputState) {
  const result = createMediaSchema.safeParse(mediaInputs);

  if (!result.success) {
    console.log(z.treeifyError(result.error));
    return;
  }

  await createMedia(result.data);

  return redirect("/");
}
