import Image from "next/image";
import Link from "next/link";
import { CATALOG_MEDIAS_PATH } from "@/shared/consts";
import type { MediaDetails } from "@/entities/media";

type Props = Pick<
  MediaDetails,
  "id" | "title" | "cover" | "releaseYear" | "type"
>;

export function MediaCard({
  id,
  title,
  cover,
  releaseYear,
  type: { slug: typeSlug },
}: Props) {
  return (
    <Link href={`${CATALOG_MEDIAS_PATH}/${typeSlug}/${id}`}>
      <Image src={cover.url} alt={cover.alt} width={60} height={60} />
      <p>{title}</p>
      <p>{releaseYear}</p>
    </Link>
  );
}
