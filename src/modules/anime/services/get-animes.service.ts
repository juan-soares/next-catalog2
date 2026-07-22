import { Anime } from "../types";
import { animeRepository } from "../repository";

export async function getAnimes(): Promise<Anime[]> {
  return await animeRepository.find();
}
