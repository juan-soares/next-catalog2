import {
  MEDIA_TABS_REGISTRY,
  MediaTab,
  MediaTabCode,
  MediaTabsNavbar,
} from "@/modules/media-tab";
import { MediaDetails } from "@/modules/media/types";

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
