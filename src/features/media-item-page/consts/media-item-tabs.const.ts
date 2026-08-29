import { TabInfo } from "../components/MediaItemPageTabs";
import { MediaItemPageTab } from "../types";

export const MEDIA_ITEM_TABS = {
  info: {
    value: "info",
    label: "Informações",
    content: TabInfo,
  },
} satisfies Record<string, MediaItemPageTab>;
