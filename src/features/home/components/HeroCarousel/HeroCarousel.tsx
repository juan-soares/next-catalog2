import Image from "next/image";
import { CarouselItems } from "../../types";
import { MEDIA_ITEM_COVER_PATH } from "@/consts/paths";

type Props = {
  carouselItems: CarouselItems;
};

export function HeroCarousel({ carouselItems }: Props) {
  return (
    <section>
      <ul>
        {carouselItems.map(({ title, cover }) => (
          <li key={cover}>
            <Image
              src={`${MEDIA_ITEM_COVER_PATH}/${cover}`}
              alt={`Capa do título ${title}.`}
              width={60}
              height={60}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
