import {
  HeroCarousel,
  CarouselItems,
  getHeroCarouselItems,
} from "@/features/home";

export default async function HomePage() {
  const carouselItems: CarouselItems = await getHeroCarouselItems();

  return (
    <main>
      <HeroCarousel carouselItems={carouselItems} />
    </main>
  );
}
