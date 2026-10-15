import Image from "next/image";
import { MediaDetails } from "@/modules/media/types";

type Props = Pick<MediaDetails, "characters">;

export function MediaTabCharacters({ characters }: Props) {
  return (
    <section>
      <ul>
        {characters.map(({ id, image, name, codenames }) => (
          <li key={id}>
            <Image src={image.url} alt={image.alt} width={60} height={60} />
            <h2>{name}</h2>
            <h3>{codenames.map((codename) => codename).join(", ")}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
}
