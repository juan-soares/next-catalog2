import { CarouselItems } from "../types";

export async function getHeroCarouselItems(): Promise<CarouselItems> {
  return [{ title: "Teste", cover: "cover.png" }];
}
