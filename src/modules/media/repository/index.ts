import "server-only";

import { createMedia } from "@/modules/media/repository/create-media.repository";
import { findMedia } from "@/modules/media/repository/find-media.repository";
import { findMedias } from "@/modules/media/repository/find-medias.repository";

export const mediaRepository = {
  findOne: findMedia,
  findMany: findMedias,
  createOne: createMedia,
};
