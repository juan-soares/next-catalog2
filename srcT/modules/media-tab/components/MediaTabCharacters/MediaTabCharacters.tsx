import Image from "next/image";
import type { MediaView } from "@/modules/media/types";

type Props = Pick<MediaView, "characters">;

export function MediaTabCharacters({ characters }: Props) {
  return (
    <section>
      <ul>
        {characters.map(({ image, name, codenames }, index) => (
          <li key={index}>
            <Image src={image.url} alt={image.alt} width={60} height={60} />
            <h2>{name}</h2>
            <h3>{codenames.map((codename) => codename).join(", ")}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
}
