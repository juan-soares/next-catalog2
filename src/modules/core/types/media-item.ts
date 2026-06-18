import type { MediaGroup } from "../constants";

export type MediaItem = {
  id: string;

  identity: {
    title: string;
    slug: string;

    type: string;
    group: MediaGroup;
  };

  metadata: {
    description?: string;
    releaseYear?: number;
  };

  createdAt: Date;
  updatedAt: Date;
};
