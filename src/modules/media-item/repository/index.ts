import { createAttributeItem } from "@/modules/attribute-item/repository/create-attribute-item.respository";
import { findMediaItemsByTitleOrTranslatedTitle } from "./find-media-items-by-title-or-translated-title.repository";
import { findMediaItems } from "./find-media-items.repository";
import { findRecentlyUpdatedMediaItems } from "./find-recently-updated-media-items.repository";
import { findMediaItemById } from "./find-media-item-by-id.repository";

export const mediaItemRepository = {
  findById: findMediaItemById,
  findMany: findMediaItems,
  findByTitleOrTranslatedTitle: findMediaItemsByTitleOrTranslatedTitle,
  findRecent: findRecentlyUpdatedMediaItems,
  createOne: createAttributeItem,
};
