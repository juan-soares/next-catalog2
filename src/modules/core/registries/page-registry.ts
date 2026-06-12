/* "Quais blocos aparecem na página dependendo das capabilities” */

import { ContentCapability, TabType } from "../constants";
import { CAPABILITY_TAB_MAP } from "../mappings";

export type PageSection = {
  id: string;
  tab: TabType;
};

export function buildPageSections(
  capabilities: ContentCapability[],
): PageSection[] {
  const tabs = capabilities
    .map((cap) => CAPABILITY_TAB_MAP[cap])
    .filter(Boolean) as TabType[];

  const uniqueTabs = [...new Set(tabs)];

  return uniqueTabs.map((tab) => ({
    id: tab,
    tab,
  }));
}
