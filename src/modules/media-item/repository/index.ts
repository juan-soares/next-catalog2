import { findMediaItemByTypeAndSlug } from "../services/find-media-item-by-type-and-slug.repository";
import { deleteMediaItem } from "./delete-media-item.repository";
import { findMediaItemsByMediaType } from "./find-media-items-by-media-type.repository";
import { insertMediaItem } from "./insert-media-item.repository";

export const mediaItemRepository = {
  find: findMediaItemsByMediaType,
  findByMediaTypeAndSlug: findMediaItemByTypeAndSlug,
  insert: insertMediaItem,
  delete: deleteMediaItem,
};
