import Image from "next/image";
import Link from "next/link";
import { CATALOG_MEDIAS_PATH } from "@/shared/consts";

type Props = {
  media: any;
};

export function MediaCard({ media }: Props) {
  const { id, slug, title, cover } = media;

  const typeSlug = media.type;
  const releaseYear = media.releaseDate.getFullYear().toString();

  return (
    <Link href={`${CATALOG_MEDIAS_PATH}/${typeSlug}/${id}`}>
      <Image
        src={cover.url}
        alt={`Capa da mídia ${title}.`}
        width={60}
        height={60}
      />
      <p>{title}</p>
      <p>{releaseYear}</p>
    </Link>
  );
}
