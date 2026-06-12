import { ContentCapability, MediaGroup, TabType } from "../constants";

export type MediaDefinition = {
  id: string;

  identity: {
    slug: string;
    label: string;
    group: MediaGroup;
  };

  ui: {
    tabs: TabType[];
    filters: string[];
  };

  content: {
    capabilities: ContentCapability[];
  };
  createdAt: Date;
  updatedAt: Date;
};
