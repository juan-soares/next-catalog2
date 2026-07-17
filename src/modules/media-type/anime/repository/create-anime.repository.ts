import { connectToDatabase } from "@/lib/mongoose";
import { AnimeModel } from "../anime.model";

export async function createAnime(data: unknown) {
  await connectToDatabase();

  return AnimeModel.create(data);
}
