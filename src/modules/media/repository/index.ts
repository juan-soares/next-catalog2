import "server-only";

import { createMedia } from "./create-media.repository";
import { findMedia } from "./find-media.repository";
import { findMedias } from "./find-medias.repository";

export const mediaRepository = {
  findOne: findMedia,
  findMany: findMedias,
  createOne: createMedia,
};
