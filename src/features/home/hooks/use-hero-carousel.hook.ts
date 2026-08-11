"use client";

import { useCallback, useEffect, useState } from "react";
import { CarouselItems } from "../types";

type Options = {
  itemCount: number;
  interval?: number;
  carouselItems: CarouselItems;
};

export function useHeroCarousel({
  itemCount,
  interval = 5000,
  carouselItems,
}: Options) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = carouselItems[currentIndex];

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (itemCount <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % itemCount);
    }, interval);

    return () => clearInterval(timer);
  }, [itemCount, interval]);

  return {
    currentIndex,
    currentItem,
    goTo,
  };
}
