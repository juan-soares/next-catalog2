import { connectToDatabase } from "@/lib/mongoose";
import { AnimeModel } from "../anime.model";

export async function findAnimeBySlug(slug: string) {
  await connectToDatabase();

  return AnimeModel.findOne({
    slug,
  }).lean();
}
