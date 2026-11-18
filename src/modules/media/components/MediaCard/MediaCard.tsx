import Image from "next/image";
import Link from "next/link";

import type { MediaCardView } from "@/modules/media/types";

export function MediaCard({
  identifiers,
  info,
  assets,
  progress,
}: MediaCardView) {
  const { path } = identifiers;
  const { title, releaseYear } = info;
  const { cover } = assets;

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
