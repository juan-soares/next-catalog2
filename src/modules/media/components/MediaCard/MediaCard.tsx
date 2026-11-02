import Image from "next/image";
import Link from "next/link";

import type { MediaView } from "@/modules/media/types";

type Props = Pick<MediaView, "identifiers" | "info" | "assets" | "progress">;

export function MediaCard({
  identifiers: { path },
  assets: { cover },
  info: { title, releaseYear },
  progress,
}: Props) {
  return (
    <Link href={path}>
      <Image src={cover.url} alt={cover.alt} width={60} height={60} />

      <strong>{title}</strong>

      <p>{releaseYear}</p>

      <p>
        <span>{progress.acquired ? "Adquirir" : "Adquirido"}</span>
        <span>{progress.consumed ? "Consumir" : "Consumido"}</span>
      </p>
    </Link>
  );
}
