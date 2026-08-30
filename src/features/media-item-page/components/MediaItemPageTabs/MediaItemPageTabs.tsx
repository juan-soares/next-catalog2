import {
  MediaItemPageInfo,
  MediaItemPageSeason,
  MediaItemPageTab,
  MediaItemPageTabKey,
} from "../../types";
import { MediaItemPageTabsNavbar } from "./MediaItemPageTabsNavbar";
import { TabInfoContent, TabSeasonsContent } from "./TabsContent";

type Props = {
  hasUser: boolean;
  mediaItemInfo: MediaItemPageInfo;
  currentTab?: MediaItemPageTabKey;
  tabs: MediaItemPageTab[];
};

export function MediaItemPageTabs({
  hasUser,
  mediaItemInfo,
  currentTab = "info",
  tabs,
}: Props) {
  const activeTab = tabs.find(({ value }) => value === currentTab) ?? tabs[0];

  return (
    <div>
      <MediaItemPageTabsNavbar tabs={tabs} />

      {activeTab.value === "info" && <TabInfoContent />}
      {activeTab.value === "seasons" && mediaItemInfo.seasons && (
        <TabSeasonsContent
          hasUser={hasUser}
          mediaTypeSlug={mediaItemInfo.mediaType.slug}
          id={mediaItemInfo.id}
          seasons={mediaItemInfo.seasons}
        />
      )}
    </div>
  );
}
