import { auth } from "@/features/auth/next-auth/auth";
import {
  getMediaItemPageInfoById,
  MediaItemPageHero,
  MediaItemPageTabs,
} from "@/features/media-item-page";
import {
  getMediaItemTabsByMediaType,
  MediaItemPageTabKey,
} from "@/features/media-item-page";
import { getMediaTypeInfoBySlug } from "@/modules/media-type";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    mediaType: string;
    mediaItem: string;
  }>;

  searchParams: Promise<{
    tab: string;
  }>;
};

export default async function MediaItemPage({ params, searchParams }: Props) {
  const session = await auth();
  const { mediaType, mediaItem } = await params;
  const mediaTypeInfo = getMediaTypeInfoBySlug(mediaType);
  const mediaItemInfo = await getMediaItemPageInfoById(mediaItem);

  if (!mediaTypeInfo || !mediaItemInfo) {
    notFound();
  }

  const mediaItemTabs = getMediaItemTabsByMediaType(mediaTypeInfo.key);

  const { tab } = await searchParams;

  return (
    <div>
      <MediaItemPageHero {...mediaItemInfo} />
      <MediaItemPageTabs
        hasUser={session !== null}
        mediaItemInfo={mediaItemInfo}
        currentTab={tab as MediaItemPageTabKey}
        tabs={mediaItemTabs}
      />
    </div>
  );
}
