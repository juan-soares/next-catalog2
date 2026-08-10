import { HeroCarousel } from "@/features/home";

export default async function HomePage() {
  const carouselItems = await getHeroCarouselItems();

  return (
    <main>
      <HeroCarousel carouselItems={carouselItems} />
    </main>
  );
}
