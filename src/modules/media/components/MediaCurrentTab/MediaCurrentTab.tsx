import { MediaInfoTab, MediaSeasonsTab } from "@/modules/media/components";
import type { MediaDetails, MediaTab } from "@/modules/media/types";

type Props = {
  currentTab: MediaTab;
  mediaDetails: MediaDetails;
};

/*
      
      
      
      {media.edition && <MediaExpansions edition={media.edition} />}
      <MediaContinuity continuity={media.continuity} />
      <MediaFiles files={media.files} />
      <MediaGallery gallery={media.gallery} />
      <MediaFranchises franchises={media.franchises} />*/

export function MediaCurrentTab({ currentTab, mediaDetails }: Props) {
  if (!currentTab || currentTab === "info")
    return <MediaInfoTab {...mediaDetails} />;

  if (currentTab === "seasons") return <MediaSeasonsTab {...mediaDetails} />;
}
