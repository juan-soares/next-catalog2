import { connectToDatabase } from "@/lib/mongoose";
import { AnimeModel } from "../anime.model";

export async function updateAnimeBySlug(slug: string) {
  await connectToDatabase();

  return AnimeModel.findOne({
    slug,
  }).lean();
}
