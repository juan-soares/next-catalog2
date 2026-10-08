import {
  MediaHero,
  MediaTabs,
  MediaCurrentTab,
} from "@/entities/media/components";
import type { MediaDetails, MediaTab } from "@/entities/media/types";

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
