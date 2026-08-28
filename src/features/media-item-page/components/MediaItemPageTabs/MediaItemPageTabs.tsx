import { MediaTypeTab } from "../../types";
import { MediaItemPageTabsNavbar } from "./MediaItemPageTabsNavbar";
import { TabInfo } from "./Tabs";

type Props = {
  mediaTypeTabs: MediaTypeTab[];
  currentTab: string;
};

export function MediaItemPageTabs({
  mediaTypeTabs,
  currentTab = "info",
}: Props) {
  return (
    <div>
      <MediaItemPageTabsNavbar mediaTypeTabs={mediaTypeTabs} />
      {currentTab === "info" && <TabInfo />}
    </div>
  );
}
