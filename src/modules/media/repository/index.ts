import "server-only";

import { findMedia } from "./find-media.repository";
import { findMedias } from "./find-medias.repository";
import { createMedia } from "./create-media.repository";
import { deleteMedia } from "./delete-media.repository";

export const mediaRepository = {
  findOne: findMedia,
  findMany: findMedias,
  createOne: createMedia,
  deleteOne: deleteMedia,
};
