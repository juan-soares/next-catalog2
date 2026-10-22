import {
  getValidMediaTabFromSearchParams,
  getTabsByMediaType,
} from "@/modules/media-tab/services";
import { getMediaTypeDetailsBySlug } from "@/modules/media-type/services";
import { MediaPageHero, MediaPageContent } from "@/modules/media/components";
import { getMediaDetailsBySlug } from "@/modules/media/services";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ mediaTypeSlug: string; mediaSlug: string }>;
  searchParams: Promise<{ tab?: string | string[] }>;
};

export default async function MediaPage({ params, searchParams }: Props) {
  const [{ mediaTypeSlug, mediaSlug }, { tab }] = await Promise.all([
    params,
    searchParams,
  ]);
  const media = await getMediaDetailsBySlug(mediaSlug);
  const mediaTypeDetails = getMediaTypeDetailsBySlug(mediaTypeSlug);

  if (
    !media ||
    !mediaTypeDetails ||
    media.type.label !== mediaTypeDetails.label
  ) {
    notFound();
  }

  const currentTab = getValidMediaTabFromSearchParams(tab);
  const mediaTypeTabs = getTabsByMediaType(mediaTypeDetails.code);

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
