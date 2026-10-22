import type { CreateMediaInput, MediaView } from "@/modules/media/types";

export async function createMedia(
  input: CreateMediaInput,
): Promise<MediaView | null> {
  console.log(input);
  return null;
}
