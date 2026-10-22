import { MediaTabsNavbar } from "@/modules/media-tab/components";
import { MEDIA_TABS_REGISTRY } from "@/modules/media-tab/consts";
import type { MediaTabCode, MediaTab } from "@/modules/media-tab/types";
import type { MediaView } from "@/modules/media/types";

type Props = {
  currentTab: MediaTabCode;
  mediaTypeTabs: MediaTab[];
  media: MediaView;
};

export function MediaPageContent({ currentTab, mediaTypeTabs, media }: Props) {
  const tabInfo = MEDIA_TABS_REGISTRY[currentTab];
  const CurrentTab = tabInfo.component;

  return (
    <main>
      <MediaTabsNavbar tabs={mediaTypeTabs} />
      <CurrentTab {...media} />
    </main>
  );
}
