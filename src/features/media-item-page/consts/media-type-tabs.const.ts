import { MediaTypeKey } from "@/modules1/media-type";
import { MediaItemPageTab } from "../types";
import { MEDIA_ITEM_TABS } from "./media-item-tabs.const";

export const MEDIA_TYPE_TABS = {
  anime: [MEDIA_ITEM_TABS.info, MEDIA_ITEM_TABS.seasons, MEDIA_ITEM_TABS.ovas],
} satisfies Record<MediaTypeKey, MediaItemPageTab[]>;
