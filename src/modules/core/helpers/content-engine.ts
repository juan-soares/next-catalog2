import { ContentCapability, TabType } from "../constants";
import { CAPABILITY_TAB_MAP } from "../mappings";

/**
 * Converte capabilities em tabs reais da UI
 */
export function resolveTabsFromCapabilities(
  capabilities: ContentCapability[],
): TabType[] {
  const tabs = capabilities
    .map((cap) => CAPABILITY_TAB_MAP[cap])
    .filter(Boolean) as TabType[];

  // remove duplicados
  return [...new Set(tabs)];
}
