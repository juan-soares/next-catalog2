"use server";

import { mediasViewMock } from "../mocks";

import { connectToMongoDB } from "@/shared/libs/mongoose";
import type { MediaView } from "@/modules/media/types";

export async function deleteMedia(id: string): Promise<MediaView> {
  await connectToMongoDB();

  const deletedMedia = mediasViewMock.find((media) => media.id === id);

  if (!deletedMedia) throw new Error("Mídia não encontrada");

  return deletedMedia;
}
