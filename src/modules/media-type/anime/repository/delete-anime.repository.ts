import { connectToDatabase } from "@/lib/mongoose";
import { AnimeModel } from "../anime.model";

export async function deleteAnimeBySlug(slug: string) {
  await connectToDatabase();

  return AnimeModel.deleteOne({
    slug,
  });
}
