import { notFound } from "next/navigation";
import { getMediaViewBySlug } from "@/modules/media/services";
import { MediaHero } from "@/modules/media/components";
import {
  MediaTabCurrentContent,
  MediaTabsNavbar,
} from "@/modules/media-tab/components";
import { MEDIA_TAB_REGISTRY } from "@/modules/media-tab/consts";
import { MediaTabCode } from "@/modules/media-tab/types";
import { getMediaTabInfoBySlug } from "@/modules/media-tab/services";

type Props = {
  params: Promise<{ media: string }>;
  searchParams: Promise<{ tab: string }>;
};

export default async function MediaPage({ params, searchParams }: Props) {
  const { media: mediaSlug } = await params;
  const { tab } = await searchParams;

  const mediaView = await getMediaViewBySlug(mediaSlug);

  if (!mediaView) {
    notFound();
  }

  const { code } = getMediaTabInfoBySlug(tab);

  return (
    <div>
      <MediaHero {...mediaView} />
      <MediaTabsNavbar />
      <MediaTabCurrentContent currentTabCode={code} media={mediaView} />
    </div>
  );
}
