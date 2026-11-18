"use server";

import z from "zod";
import { redirect } from "next/navigation";
import { createMediaSchema } from "@/modules/media/schemas";
import { createMedia } from "@/modules/media/services";

export async function createMediaAction(formData: FormData) {
  const trailer = formData.get("trailer");

  const mediaInputs = {
    title: formData.get("title"),
    translatedTitle: formData.get("translatedTitle") ?? "",
    releaseDate: formData.get("releaseDate"),
    mediaTypeCode: formData.get("mediaTypeCode"),
    synopsis: formData.get("synopsis"),

    cover: formData.get("cover"),
    trailer: trailer instanceof File && trailer.size > 0 ? trailer : null,

    languageIds: formData.getAll("languageIds"),
    themeIds: formData.getAll("themeIds"),
    platformIds: formData.getAll("platformIds"),
    genreIds: formData.getAll("genreIds"),
    gameplayIds: formData.getAll("gameplayIds"),
    modeIds: formData.getAll("modeIds"),

    playersMin: Number(formData.get("playersMin")),
    playersMax: Number(formData.get("playersMax")),

    franchiseId: formData.get("franchiseId"),
    previousMediaId: formData.get("previousMediaId") ?? "",

    progress: {
      acquired: formData.get("acquired") === "true",
      consumed: formData.get("consumed") === "true",
    },
  };

  const result = createMediaSchema.safeParse(mediaInputs);

  if (!result.success) {
    console.log(z.treeifyError(result.error));
    return;
  }

  const createdMedia = await createMedia(result.data);

  if (!createdMedia) {
    return console.error("Algo deu errado.");
  }

  return redirect(createdMedia.identifiers.path);
}
