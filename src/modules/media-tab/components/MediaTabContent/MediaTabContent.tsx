import type { MediaTabCode } from "@/modules/media-tab/types";
import type { MediaView } from "@/modules/media/types";
import type { MediaFamilyCode } from "@/modules/media-family/types";
import { MediaTabInfo, MediaTabSeasons } from "@/modules/media-tab/components";

type Props = {
  familyCode: MediaFamilyCode;
  currentTab: MediaTabCode;
  currentNumber: number | null;
  media: MediaView;
};

export function MediaTabContent({ currentTab, currentNumber, media }: Props) {
  switch (currentTab) {
    case "info":
      return <MediaTabInfo media={media} />;

    case "temporadas":
      return (
        <MediaTabSeasons
          seasons={media.collections.seasons ?? []}
          currentNumber={currentNumber}
        />
      );

    default:
      return <MediaTabInfo media={media} />;
  }
}
