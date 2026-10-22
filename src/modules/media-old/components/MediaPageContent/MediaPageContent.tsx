import { MediaTabsNavbar } from "@/modules/media-tab/components";
import { MEDIA_TABS_REGISTRY } from "@/modules/media-tab/consts";
import { MediaTabCode, MediaTab } from "@/modules/media-tab/types";
import { MediaDetails } from "../../types";

type Props = {
  currentTab: MediaTabCode;
  mediaTypeTabs: MediaTab[];
  media: MediaDetails;
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
