import Link from "next/link";
import { CATALOG_MEDIAS_PATH } from "@/shared/consts";
import Image from "next/image";

type Props = {
  id: string;
  typeSlug: string;
  cover: string;
  title: string;
  releaseYear: string;
};

export function MediaCard({ id, typeSlug, cover, title, releaseYear }: Props) {
  return (
    <Link href={`${CATALOG_MEDIAS_PATH}/${typeSlug}/${id}`}>
      <Image
        src={cover}
        alt={`Capa da mídia ${title}.`}
        width={60}
        height={60}
      />
      <p>{title}</p>
      <p>{releaseYear}</p>
    </Link>
  );
}
