import { MEDIA_TYPE_CATALOG_PATH } from "@/consts/paths";
import { Catalog } from "@/features/catalog";
import { getMediaTypeInfoBySlug } from "@/modules/media-type";

type Props = {
  params: Promise<{ mediaType: string }>;
};

export default async function MediaTypePage({ params }: Props) {
  const { mediaType } = await params;
  const { label, slug } = getMediaTypeInfoBySlug(mediaType);

  return (
    <Catalog
      title={label}
      path={MEDIA_TYPE_CATALOG_PATH + slug}
      catalogCards={[]}
    />
  );
}
