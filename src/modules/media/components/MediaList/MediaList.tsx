import type { MediaView } from "@/modules/media/types";
import { MediaCard } from "@/modules/media/components";

type Props = {
  medias: MediaView[];
};

export function MediaList({ medias }: Props) {
  if (medias.length === 0) {
    return <p>Nenhum item encontrado</p>;
  }

  return (
    <ul>
      {medias.map((media) => (
        <li key={media.identifiers.id}>
          <MediaCard {...media} />
        </li>
      ))}
    </ul>
  );
}
