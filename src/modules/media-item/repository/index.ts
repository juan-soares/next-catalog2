import { findMediaItemsByTitleOrTranslatedTitle } from "./find-media-items-by-title-or-translated-title.repository";

export const mediaItemRepository = {
  findByTitleOrTranslatedTitle: findMediaItemsByTitleOrTranslatedTitle,
};
