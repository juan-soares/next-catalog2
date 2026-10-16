import { CreateMediaInput, MediaDetails } from "@/modules/media/types";

export async function createMedia(
  input: CreateMediaInput,
): Promise<MediaDetails | null> {
  console.log(input);
  return null;
}
