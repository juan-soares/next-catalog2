import { MediaTypeKey } from "@/modules/media-type";
import { MediaItemPageTab } from "../types";
import { MEDIA_ITEM_TABS } from "./media-item-tabs.const";

export const MEDIA_TYPE_TABS = {
  anime: [MEDIA_ITEM_TABS.info],
} satisfies Record<MediaTypeKey, MediaItemPageTab[]>;
