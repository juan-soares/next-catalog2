import {
  MediaHero,
  MediaTabs,
  MediaCurrentTab,
} from "@/modules/media/components";
import type { MediaDetails, MediaTab } from "@/modules/media/types";

type Props = {
  mediaDetails: MediaDetails;
  currentTab: string;
};

export async function MediaDetailsPage({
  mediaDetails,
  currentTab = "info",
}: Props) {
  return (
    <div>
      <MediaHero {...mediaDetails} />
      <MediaTabs />
      <MediaCurrentTab
        currentTab={currentTab as MediaTab}
        mediaDetails={mediaDetails}
      />
    </div>
  );
}
