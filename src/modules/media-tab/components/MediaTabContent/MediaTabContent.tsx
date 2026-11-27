import type { MediaTabCode } from "@/modules/media-tab/types";
import type { MediaView } from "@/modules/media/types";
import { MediaTabInfo, MediaTabSeasons } from "@/modules/media-tab/components";

type Props = {
  media: MediaView;
  currentTab: MediaTabCode;
  currentNumber: number | null;
};

export function MediaTabContent({ media, currentTab, currentNumber }: Props) {
  switch (currentTab) {
    case "info":
      return <MediaTabInfo media={media} />;

    case "temporadas": {
      if (media.categoryStructure !== "episodic") return;

      return (
        <MediaTabSeasons
          url={media.url}
          seasons={media.details.collections.seasons}
          currentNumber={currentNumber}
        />
      );
    }

    default:
      return <MediaTabInfo media={media} />;
  }
}
