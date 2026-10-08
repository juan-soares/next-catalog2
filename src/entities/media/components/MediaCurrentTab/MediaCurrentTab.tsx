import type { MediaDetails, MediaTab } from "@/entities/media/types";
import { MEDIA_TABS_RENDER_REGISTRY } from "@/entities/media/consts";

type Props = {
  currentTab: MediaTab;
  mediaDetails: MediaDetails;
};

export function MediaCurrentTab({ currentTab, mediaDetails }: Props) {
  const renderCurrentTabInfo = MEDIA_TABS_RENDER_REGISTRY[currentTab ?? "info"];

  return renderCurrentTabInfo(mediaDetails);
}
