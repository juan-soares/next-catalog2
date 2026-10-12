import { MediaDetails, MediaTabCode } from "@/modules/media/types";
import { MediaPageTabsNavbar } from "@/modules/media/components";
import { MEDIA_TABS_REGISTRY } from "@/modules/media/consts";

type Props = {
  currentTab: MediaTabCode;
  media: MediaDetails;
};

export function MediaPageContent({ currentTab, media }: Props) {
  const CurrentTabContent = MEDIA_TABS_REGISTRY[currentTab].component;

  return (
    <main>
      <MediaPageTabsNavbar />
      <CurrentTabContent {...media} />
    </main>
  );
}
