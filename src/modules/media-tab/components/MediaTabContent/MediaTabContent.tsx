import type { MediaTabCode } from "@/modules/media-tab/types";
import type { MediaView } from "@/modules/media/types";
import type { MediaFamilyCode } from "@/modules/media-family/types";
import { MediaTabInfo } from "@/modules/media-tab/components";

type Props = {
  familyCode: MediaFamilyCode;
  currentTab: MediaTabCode;
  media: MediaView;
};

export function MediaTabContent({ currentTab, media }: Props) {
  switch (currentTab) {
    case "info":
      return <MediaTabInfo media={media} />;

    default:
      return <MediaTabInfo media={media} />;
  }
}
