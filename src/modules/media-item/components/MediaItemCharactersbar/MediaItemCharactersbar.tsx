import Image from "next/image";
import { MediaItemDetails } from "../../types";

type Props = Pick<MediaItemDetails, "characters">;

export function MediaItemCharactersbar({ characters }: Props) {
  return (
    <ul>
      {characters.map(({ name, nickname, image, status }) => (
        <li key={name}>
          <div>
            <Image
              src={image}
              width={60}
              height={60}
              alt={`Imagem do personagem ${name}.`}
            />
          </div>
          <div>
            <span>{name}</span>
            <span>{nickname}</span>
            <span>{status}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
