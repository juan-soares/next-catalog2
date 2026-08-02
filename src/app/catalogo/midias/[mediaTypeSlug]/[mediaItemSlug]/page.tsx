import {
  getMediaItemDetails,
  MediaItemDetailsPage,
} from "@/modules/media-item";
import { getMediaTypeConfigBySlug } from "@/modules/media-type";

type Props = {
  params: Promise<{ mediaTypeSlug: string; mediaItemSlug: string }>;
};

export default async function MediaItemPage({ params }: Props) {
  const { mediaTypeSlug: mediaTypeKey, mediaItemSlug } = await params;

  const { slug: mediaTypeSlug } = getMediaTypeConfigBySlug(mediaTypeKey);

  const mediaItemInfo = await getMediaItemDetails(mediaItemSlug, mediaTypeSlug);

  return <MediaItemDetailsPage mediaItemInfo={mediaItemInfo} />;
}
