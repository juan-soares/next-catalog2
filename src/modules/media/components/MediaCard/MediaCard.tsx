import Image from "next/image";
import Link from "next/link";
import { CATALOG_MEDIAS_PATH } from "@/shared/consts";

type Props = {
  id: string;
  title: string;
  cover: string;
  type: string;
  releaseDate: Date;
};

export function MediaCard({ id, title, cover, type, releaseDate }: Props) {
  const typeSlug = type;
  const releaseYear = releaseDate.getFullYear().toString();

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
