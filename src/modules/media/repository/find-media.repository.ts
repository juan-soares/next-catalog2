"use server";
import { mediasViewMock } from "../mocks";

import { connectToMongoDB } from "@/shared/libs/mongoose";
import type { FindMediaDocProps, MediaView } from "@/modules/media/types";

export async function findMedia({
  fields = { slug: "" },
}: FindMediaDocProps): Promise<MediaView> {
  await connectToMongoDB();

  const media = mediasViewMock.find((media) => media.slug === fields.slug);

  if (!media) throw new Error("Midia nao encontrada");

  return media;
}
