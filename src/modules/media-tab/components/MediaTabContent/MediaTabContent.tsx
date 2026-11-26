import type { MediaTabCode } from "@/modules/media-tab/types";
import type { MediaView } from "@/modules/media/types";
import type { MediaFamilyCode } from "@/modules/media-family/types";
import { MediaTabInfo, MediaTabSeasons } from "@/modules/media-tab/components";
import { isEpisodicMedia } from "@/modules/media/guards";

type Props = {
  media: MediaView;
  familyCode: MediaFamilyCode;
  currentTab: MediaTabCode;
  currentNumber: number | null;
};

export function MediaTabContent({ media, currentTab, currentNumber }: Props) {
  switch (currentTab) {
    case "info":
      return <MediaTabInfo media={media} />;

    case "temporadas": {
      if (!isEpisodicMedia(media)) return;

      return (
        <MediaTabSeasons
          url={media.url}
          seasons={media.collections.seasons ?? []}
          currentNumber={currentNumber}
        />
      );
    }

    default:
      return <MediaTabInfo media={media} />;
  }
}
