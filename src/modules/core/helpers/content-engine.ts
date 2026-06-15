import { ContentCapability, DEFAULT_TABS } from "../constants";
import { TabContent } from "../types";

const CAPABILITY_TAB_MAP: Partial<Record<ContentCapability, string>> = {
  seasons: "seasons",
  episodes: "episodes",
  ovas: "seasons",

  volumes: "volumes",
  chapters: "chapters",

  downloads: "downloads",
  gallery: "gallery",
  lyrics: "lyrics",
  tracks: "tracks",
};

export function resolveTabs(
  capabilities: ContentCapability[],
  customTabs: TabContent[] = [],
): string[] {
  const defaultTabs = DEFAULT_TABS;

  const capabilityTabs = capabilities.flatMap((cap) => {
    const tab = CAPABILITY_TAB_MAP[cap];
    return tab ? [tab] : [];
  });

  const custom = customTabs.map((t) => t.key);

  return [...new Set([...defaultTabs, ...capabilityTabs, ...custom])];
}
