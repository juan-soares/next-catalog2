"use client";

import Image from "next/image";

import { MEDIA_ITEM_COVER_PATH } from "@/consts/paths";
import { CarouselItems } from "../../types";
import { useHeroCarousel } from "../../hooks";
import { HeroCarouselNavigation } from "../HeroCarouselNavigation";

type Props = {
  carouselItems: CarouselItems;
};

export function HeroCarousel({ carouselItems }: Props) {
  const { currentIndex, currentItem, goTo } = useHeroCarousel({
    itemCount: carouselItems.length,
    interval: 5000,
    carouselItems,
  });

  if (!currentItem) return;

  return (
    <section aria-label="Mídias modificadas recentemente">
      <article>
        <Image
          src={`${MEDIA_ITEM_COVER_PATH + currentItem.cover}`}
          alt={`Capa do título ${currentItem.title}.`}
          width={60}
          height={60}
        />
      </article>

      <HeroCarouselNavigation
        itemCount={carouselItems.length}
        currentIndex={currentIndex}
        onSelect={goTo}
      />
    </section>
  );
}
