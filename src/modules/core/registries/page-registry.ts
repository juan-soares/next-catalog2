import { ContentCapability } from "../constants";
import type { TabContent } from "../types/tab-content";
import { resolveTabs } from "../helpers/content-engine";

export type PageSection = {
  id: string;
  key: string;
};

export function buildPageSections(
  capabilities: ContentCapability[],
  customTabs: TabContent[] = [],
): PageSection[] {
  const tabs = resolveTabs(capabilities, customTabs);

  return tabs.map((tab) => ({
    id: tab,
    key: tab,
  }));
}
