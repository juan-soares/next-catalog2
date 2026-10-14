import Image from "next/image";
import { MediaDetails } from "@/modules/media/types";
import Link from "next/link";

type Props = {
  medias: Pick<
    MediaDetails,
    "slug" | "path" | "cover" | "title" | "releaseYear"
  >[];
};

export function MediaList({ medias }: Props) {
  if (medias.length === 0)
    return (
      <div>
        <p>Sem registros.</p>
      </div>
    );

  return (
    <ul>
      {medias.map(({ slug, path, cover, title, releaseYear }) => (
        <li key={slug}>
          <Link href={path}>
            <Image src={cover.url} alt={cover.alt} width={60} height={60} />
            <h2>{title}</h2>
            <p>{releaseYear}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
