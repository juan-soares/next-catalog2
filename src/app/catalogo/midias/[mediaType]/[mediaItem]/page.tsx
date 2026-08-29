import {
  getMediaItemPageInfoById,
  MediaItemPageHero,
  MediaItemPageTabs,
} from "@/features/media-item-page";
import { getMediaItemTabsByMediaType } from "@/features/media-item-page";
import { MediaItemPageTabKey } from "@/features/media-item-page/types";
import { getMediaTypeInfoBySlug } from "@/modules/media-type";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    mediaType: string;
    mediaItem: string;
  }>;

  searchParams: Promise<{
    currentTab: string;
  }>;
};

export default async function MediaItemPage({ params, searchParams }: Props) {
  const { mediaType, mediaItem } = await params;
  const mediaTypeInfo = getMediaTypeInfoBySlug(mediaType);

  if (!mediaTypeInfo) {
    notFound();
  }

  const mediaItemTabs = getMediaItemTabsByMediaType(mediaTypeInfo.key);
  const { currentTab } = await searchParams;

  const mediaItemInfo = await getMediaItemPageInfoById(mediaItem);

  if (!mediaItemInfo) {
    notFound();
  }

  return (
    <div>
      <MediaItemPageHero {...mediaItemInfo} />
      <MediaItemPageTabs
        currentTab={currentTab as MediaItemPageTabKey}
        tabs={mediaItemTabs}
      />
    </div>
  );
}
