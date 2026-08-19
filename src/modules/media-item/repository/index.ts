import { findMediaItemsByTitleOrTranslatedTitle } from "./find-media-items-by-title-or-translated-title.repository";
import { findMediaItems } from "./find-media-items.repository";
import { findRecentlyUpdatedMediaItems } from "./find-recently-updated-media-items.repository";

export const mediaItemRepository = {
  findMany: findMediaItems,
  findByTitleOrTranslatedTitle: findMediaItemsByTitleOrTranslatedTitle,
  findRecent: findRecentlyUpdatedMediaItems,
};
