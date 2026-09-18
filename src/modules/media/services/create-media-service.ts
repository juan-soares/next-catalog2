import type { CreateMediaInput, MediaDetails } from "@/modules/media/types";
import { createOneMedia } from "@/modules/media/repositories";

export async function createMedia(
  input: CreateMediaInput,
): Promise<MediaDetails> {
  return createOneMedia(input);
}
