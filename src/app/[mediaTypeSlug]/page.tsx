import { notFound } from "next/navigation";
import Link from "next/link";
import { getMediaTypeDetailsBySlug } from "@/modules/media-type";
import {
  getMediasDetailsByType,
  MediaList,
  getValidMediaSortOptionFromSearchParams,
} from "@/modules/media";

type Props = {
  params: Promise<{ mediaTypeSlug: string }>;
  searchParams: Promise<{ term?: string; sort?: string }>;
};

export default async function MediaTypePage({ params, searchParams }: Props) {
  const { mediaTypeSlug } = await params;
  const { term, sort } = await searchParams;
  const mediaType = getMediaTypeDetailsBySlug(mediaTypeSlug);

  if (!mediaType) {
    notFound();
  }

  const validatedSort = getValidMediaSortOptionFromSearchParams(sort ?? "");
  const medias = await getMediasDetailsByType(mediaType.code, {
    query: term?.trim() || undefined,
    sort: validatedSort,
  });

  return (
    <div>
      <h1>{mediaType.label}</h1>
      <Link href={`${mediaType.path}/adicionar`}>Adicionar</Link>

      <main>
        <MediaList currentSort={validatedSort} medias={medias} />
      </main>
    </div>
  );
}
