import type { MediaTabCode } from "@/modules/media-tab/types";
import { MediaTabInfoContent } from "@/modules/media-tab/components";
import type { MediaView } from "@/modules/media/types";

type Props = {
  currentTabCode: MediaTabCode;
  media: MediaView;
};

export function MediaTabCurrentContent({ currentTabCode, media }: Props) {
  switch (currentTabCode) {
    case "info":
      return <MediaTabInfoContent {...media} />;

    default:
      return <MediaTabInfoContent {...media} />;
  }
}
