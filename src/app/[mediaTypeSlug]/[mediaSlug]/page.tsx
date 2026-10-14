import { notFound } from "next/navigation";
import {
  getMediaDetailsBySlug,
  MediaPageContent,
  MediaPageHero,
} from "@/modules/media";
import {
  getTabsByMediaType,
  getValidMediaTabFromSearchParams,
} from "@/modules/media-tab";

type Props = {
  params: Promise<{ mediaSlug: string }>;
  searchParams: Promise<{ tab?: string | string[] }>;
};

export default async function MediaPage({ params, searchParams }: Props) {
  const [{ mediaSlug }, { tab }] = await Promise.all([params, searchParams]);
  const media = await getMediaDetailsBySlug(mediaSlug);

  if (!media) {
    notFound();
  }

  const currentTab = getValidMediaTabFromSearchParams(tab);
  const mediaTypeTabs = getTabsByMediaType(media.type.code);

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
