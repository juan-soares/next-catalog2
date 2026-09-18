import { connectToDatabase } from "@/shared/libs/mongoose";
import { MediaDetails } from "@/modules/media/types";

export async function createOneMedia(input: any): Promise<MediaDetails> {
  await connectToDatabase();
}
