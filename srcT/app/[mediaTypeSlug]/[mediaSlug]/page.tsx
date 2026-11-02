import { notFound } from "next/navigation";
import {
  getValidMediaTabFromSearchParams,
  getTabsByMediaType,
} from "@/modules/media-tab/services";
import { getMediaTypeDetailsBySlug } from "@/modules/media-type/services";
import { MediaPageHero, MediaPageContent } from "@/modules/media/components";
import { getMediaViewBySlug } from "@/modules/media/services";

type Props = {
  params: Promise<{ mediaTypeSlug: string; mediaSlug: string }>;
  searchParams: Promise<{ tab?: string | string[] }>;
};

export default async function MediaPage({ params, searchParams }: Props) {
  const [{ mediaTypeSlug, mediaSlug }, { tab }] = await Promise.all([
    params,
    searchParams,
  ]);

  const mediaTypeInfo = getMediaTypeDetailsBySlug(mediaTypeSlug);
  const media = await getMediaViewBySlug(mediaSlug);

  if (!mediaTypeInfo || !media) {
    notFound();
  }

  const currentTab = getValidMediaTabFromSearchParams(tab);
  const mediaTypeTabs = getTabsByMediaType(mediaTypeInfo.code);

  return (
    <div>
      <MediaPageHero {...media} />
      <MediaPageContent
        currentTab={currentTab}
        mediaTypeTabs={mediaTypeTabs}
        media={media}
      />
    </div>
  );
}
