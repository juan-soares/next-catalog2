import { notFound } from "next/navigation";
import { getMediaViewBySlug } from "@/modules/media/services";
import { getCurrentTabByFamily } from "@/modules/media-tab/services";
import { MediaHeader } from "@/modules/media/components";
import { MediaTabsNavbar } from "@/modules/media-tab/components/MediaTabsNavbar";
import { MEDIA_CATEGORIES_CONFIG } from "@/modules/media-category/consts";
import { MediaTabContent } from "@/modules/media-tab/components";

type Props = {
  params: Promise<{ "media-slug": string }>;
  searchParams: Promise<{ tab?: string; n?: string }>;
};

export default async function AnimePage({ params, searchParams }: Props) {
  const { "media-slug": mediaSlug } = await params;
  const { tab, n } = await searchParams;

  const media = await getMediaViewBySlug(mediaSlug);

  if (!media || media.categoryCode !== "anime") {
    notFound();
  }

  const familyCode = MEDIA_CATEGORIES_CONFIG[media.categoryCode].familyCode;
  const currentTab = getCurrentTabByFamily(familyCode, tab);
  const currentCollectionNumber = n ? Number(n) : null;

  return (
    <div>
      <MediaHeader {...media} />

      <MediaTabsNavbar familyCode={familyCode} currentTab={currentTab} />

      <MediaTabContent
        familyCode={familyCode}
        currentTab={currentTab}
        media={media}
        currentCollectionNumber={currentCollectionNumber}
      />
    </div>
  );
}
