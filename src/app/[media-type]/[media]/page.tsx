import { notFound } from "next/navigation";
import { getMediaViewBySlug } from "@/modules/media/services";
import { MediaHero } from "@/modules/media/components";
import {
  MediaTabCurrentContent,
  MediaTabsNavbar,
} from "@/modules/media-tab/components";
import { getMediaTabInfoBySlug } from "@/modules/media-tab/services";
import { getMediaTypeViewBySlug } from "@/modules/media-type/services";
import { MEDIA_TYPES_REGISTRY } from "@/modules/media-type/consts";

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
  const mediaGroupCode = MEDIA_TYPES_REGISTRY[mediaView.info.type.code].group;

  return (
    <div>
      <MediaHero {...mediaView} />
      <MediaTabsNavbar currentMediaGroup={mediaGroupCode} />
      <MediaTabCurrentContent currentTabCode={code} media={mediaView} />
    </div>
  );
}
