import { notFound } from "next/navigation";

import { getMediaTypeViewBySlug } from "@/modules/media-type/services";

import { MediaList } from "@/modules/media/components";
import { getMediasViewByType } from "@/modules/media/services";
import { MediaTypeAsidebar } from "@/modules/media-type/components";

type Props = {
  params: Promise<{ "media-type": string }>;
};

export default async function MediaTypePage({ params }: Props) {
  const { "media-type": mediaTypeSlug } = await params;
  const mediaType = getMediaTypeViewBySlug(mediaTypeSlug);

  if (!mediaType) {
    notFound();
  }

  const medias = await getMediasViewByType(mediaType.code);

  return (
    <div>
      <h1>{mediaType.label}</h1>

      <MediaTypeAsidebar slug={mediaType.slug} />

      <MediaList mediaTypeSlug={mediaType.slug} medias={medias} />
    </div>
  );
}
