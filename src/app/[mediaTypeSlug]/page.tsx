import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getMediaTypeDetailsBySlug,
  getMediaTypeFilters,
} from "@/modules/media-type/services";
import {
  getMediasViewByType,
  prepareMediaSearchOptionsFromSearchParams,
} from "@/modules/media/services";
import { MediaList } from "@/modules/media/components";

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

  const medias = await getMediasViewByType(mediaType.code, searchOptions);
  const mediaFilters = await getMediaTypeFilters(mediaType.filters);

  return (
    <div>
      <Link href={`${mediaType.path}/adicionar`}>Adicionar</Link>

      <main>
        <MediaList currentSort={searchOptions.sort} medias={medias} />
      </main>
    </div>
  );
}
