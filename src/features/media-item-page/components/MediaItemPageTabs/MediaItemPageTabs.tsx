import { MediaItemPageTab, MediaItemPageTabKey } from "../../types";
import { MediaItemPageTabsNavbar } from "./MediaItemPageTabsNavbar";
import { TabInfo } from "./Tabs";

type Props = {
  currentTab?: MediaItemPageTabKey;
  tabs: MediaItemPageTab[];
};

export function MediaItemPageTabs({ currentTab = "info", tabs }: Props) {
  const activeTab = tabs.find(({ value }) => value === currentTab) ?? tabs[0];
  const TabContent = activeTab.content;

  return (
    <div>
      <MediaItemPageTabsNavbar tabs={tabs} />
      <TabContent />
    </div>
  );
}
