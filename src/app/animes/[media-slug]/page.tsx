import { notFound } from "next/navigation";
import { getMediaViewBySlug } from "@/modules/media/services";
import { getCurrentTabByCategoryStructure } from "@/modules/media-category-structure/services";
import { MediaHeader } from "@/modules/media/components";
import {
  MediaTabContent,
  MediaTabsNavbar,
} from "@/modules/media-tab/components";

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

  const currentTab = getCurrentTabByCategoryStructure(
    media.categoryStructure,
    tab,
  );
  const currentCollectionNumber = n ? Number(n) : null;

  return (
    <div>
      <MediaHeader {...media} />

      <MediaTabsNavbar
        categoryStructure={media.categoryStructure}
        currentTab={currentTab}
      />

      <MediaTabContent
        media={media}
        currentTab={currentTab}
        currentNumber={currentCollectionNumber}
      />
    </div>
  );
}
