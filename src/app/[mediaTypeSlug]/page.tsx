import { notFound } from "next/navigation";
import Link from "next/link";
import { getMediaTypeDetailsBySlug } from "@/modules/media-type";
import { getMediasDetailsByType, MediaList } from "@/modules/media";

type Props = {
  params: Promise<{ mediaTypeSlug: string }>;
};

export default async function MediaTypePage({ params }: Props) {
  const { mediaTypeSlug } = await params;
  const mediaType = getMediaTypeDetailsBySlug(mediaTypeSlug);

  if (!mediaType) {
    notFound();
  }

  const medias = await getMediasDetailsByType(mediaType.code);

  return (
    <div>
      <h1>{mediaType.label}</h1>
      <Link href={`${mediaType.path}/adicionar`}>Adicionar</Link>

      <main>
        <MediaList medias={medias} />
      </main>
    </div>
  );
}
