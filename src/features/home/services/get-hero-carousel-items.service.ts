import { CarouselItems } from "../types";

export async function getHeroCarouselItems(): Promise<CarouselItems> {
  return [
    { title: "Teste", cover: "cover.png" },
    { title: "Teste1", cover: "cover1.png" },
    { title: "Teste2", cover: "cover2.png" },
  ];
}
