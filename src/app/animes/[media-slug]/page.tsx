import { notFound } from "next/navigation";

import type { MediaTabCode } from "@/modules/media-tab/types";
import { getMediaViewBySlug } from "@/modules/media/services";
import { getCurrentTabBySearchParam } from "@/modules/media-tab/services";

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

  const currentTab = getCurrentTabBySearchParam(tab);
  const currentCollectionNumber = n ? Number(n) : null;

  return <div>oi</div>;
}
