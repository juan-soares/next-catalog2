import { MediaGroup } from "../constants";
import type { TabContent } from "./tab-content";
import type { MediaContentStructure } from "./media-content-structure";

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
    structures: MediaContentStructure[];
    tabs?: TabContent[];
  };

  createdAt: Date;
  updatedAt: Date;
};
