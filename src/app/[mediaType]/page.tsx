import { getMediaTypeBySlug } from "@/modules/media-type";
import { Catalog } from "@/modules/catalog";

type Props = {
  params: Promise<{ mediaType: string }>;
  searchParams: Promise<{ q?: string }>;
};

export default async function MediaTypePage({ params, searchParams }: Props) {
  const { mediaType } = await params;

  const mediaTypeInfo = getMediaTypeBySlug(mediaType);

  return (
    <div>
      <h1>{mediaTypeInfo.label}</h1>
      <Catalog mediaTypeInfo={mediaTypeInfo} />
    </div>
  );
}
