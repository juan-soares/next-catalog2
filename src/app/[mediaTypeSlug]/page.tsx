import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getMediaTypeDetailsBySlug,
  getMediaTypeFilters,
} from "@/modules/media-type";
import {
  getMediasDetailsByType,
  MediaList,
  prepareMediaSearchOptionsFromSearchParams,
  MediaSidebar,
} from "@/modules/media";

type Props = {
  params: Promise<{ mediaTypeSlug: string }>;
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
};

export default async function MediaTypePage({ params, searchParams }: Props) {
  const { mediaTypeSlug } = await params;
  const rawSearchParams = await searchParams;

  const mediaType = getMediaTypeDetailsBySlug(mediaTypeSlug);

  if (!mediaType) {
    notFound();
  }

  const searchOptions =
    prepareMediaSearchOptionsFromSearchParams(rawSearchParams);

  const medias = await getMediasDetailsByType(mediaType.code, searchOptions);
  const mediaFilters = await getMediaTypeFilters(mediaType.filters);

  return (
    <div>
      <Link href={`${mediaType.path}/adicionar`}>Adicionar</Link>
      <MediaSidebar
        mediaTypePath={mediaType.path}
        typeTitle={mediaType.label}
        filters={mediaFilters}
      />

      <main>
        <MediaList currentSort={searchOptions.sort} medias={medias} />
      </main>
    </div>
  );
}
