import { findMediaItemsByTitleOrTranslatedTitle } from "./find-media-items-by-title-or-translated-title.repository";
import { findRecentlyUpdatedMediaItems } from "./find-recently-updated-media-items.repository";

export const mediaItemRepository = {
  findByTitleOrTranslatedTitle: findMediaItemsByTitleOrTranslatedTitle,
  findRecent: findRecentlyUpdatedMediaItems,
};
