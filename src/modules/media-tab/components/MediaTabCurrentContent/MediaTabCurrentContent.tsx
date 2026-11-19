import type { MediaTabCode } from "@/modules/media-tab/types";
import {
  MediaTabInfoContent,
  MediaTabSequelContent,
} from "@/modules/media-tab/components";
import type { MediaView } from "@/modules/media/types";
import { MediaTabGameExpansions } from "../MediaTabGameExpansions";

type Props = {
  currentTabCode: MediaTabCode;
  media: MediaView;
};

export function MediaTabCurrentContent({ currentTabCode, media }: Props) {
  switch (currentTabCode) {
    case "info":
      return <MediaTabInfoContent {...media} />;

    case "expansion":
      return <MediaTabGameExpansions {...media} />;

    case "sequel":
      return <MediaTabSequelContent {...media} />;

    default:
      return <MediaTabInfoContent {...media} />;
  }
}
