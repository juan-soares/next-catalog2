import Link from "next/link";

import type { MediaView } from "@/modules/media/types";
import { MediaCard } from "@/modules/media/components";

type Props = {
  mediaTypeSlug: string;
  medias: MediaView[];
};

export function MediaList({ mediaTypeSlug, medias }: Props) {
  if (medias.length === 0) {
    return (
      <p>
        Nenhuma mídia encontrada.{" "}
        <Link href={`/${mediaTypeSlug}/adicionar`}>Adicionar?</Link>
      </p>
    );
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
