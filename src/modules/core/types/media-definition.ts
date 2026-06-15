import { ContentCapability, MediaGroup } from "../constants";
import type { TabContent } from "./tab-content";

export type MediaDefinition = {
  id: string;

  identity: {
    slug: string;
    label: string;
    group: MediaGroup;
  };

  ui: {
    filters: string[];
  };

  content: {
    capabilities: ContentCapability[];
    tabs?: TabContent[];
  };

  createdAt: Date;
  updatedAt: Date;
};
